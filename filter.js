// ==UserScript==
// @name         ARBPay Dual Sniper (BANK / OTP-UPI Selector + Custom Amount UI + Siren Control)
// @match        https://*.arbpay.co/*
// @run-at       document-idle
// ==/UserScript==

(async () => {
  // ==== Supabase Membership Auth Check ====
  window.__fjAuthOK = await (async () => {
    let _uid = null;
    try {
      const _raw = localStorage.getItem("userInfo");
      const _info = _raw ? JSON.parse(_raw) : null;
      _uid = String(_info?.value?.memberId || _info?.memberId || "").trim();
    } catch (e) {
      _uid = null;
    }

    if (!_uid) {
      alert("❌ Could not read account info.\nPlease log in to ARWallet and try again.");
      return false;
    }

    const _sb = await fetch(
      "https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members" +
      "?member_id=eq." + encodeURIComponent(_uid) +
      "&active=eq.true&select=member_id",
      {
        headers: {
          apikey: "sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse",
          Authorization: "Bearer sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse",
        },
      }
    ).then(r => r.json()).catch(() => []);

    if (!Array.isArray(_sb) || _sb.length === 0) {
      alert("❌ Access denied.\nThis account is not authorized.\nContact admin for access.");
      return false;
    }

    window.__fjMid = _uid;
    window.__fjSeed = btoa(_uid).split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return true;
  })();

  if (!window.__fjAuthOK) return;

  // ==== Main Sniper Configuration ====
  let TARGET_MODE = 'BANK'; // 'BANK' or 'OTP-UPI'
  let TARGET_AMOUNT = 25000; // Default amount for BANK mode

  const TIMINGS = {
    OBSERVER_THROTTLE: 0x32,       // 50ms
    POPUP_DISMISS_INTERVAL: 0x1F4, // 500ms
    BANNER_RESET_DELAY: 0xBB8,     // 3000ms
    SYNC_INTERVAL: 0x3A98          // 15000ms
  };

  const REFRESH_CYCLE = [200, 200, 200, 200, 200, 500, 500, 500, 1000, 1000];
  let cycleIndex = 0;

  function getNextRefreshDelay() {
    const delay = REFRESH_CYCLE[cycleIndex];
    cycleIndex = (cycleIndex + 1) % REFRESH_CYCLE.length;
    return delay;
  }

  let isRunning = false;
  let isCheckingPostClick = false;
  let lastObserverRun = 0;
  let refreshTimeoutId = null;

  let popupTimer = null;
  let syncTimer = null;
  let observer = null;
  let notificationBanner = null;

  // Web Audio API Loud Siren
  let audioCtx = null;
  let sirenOscillator = null;
  let sirenGainNode = null;
  let sirenInterval = null;
  let isSirenPlaying = false;

  function startLoudSiren() {
    if (isSirenPlaying) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      sirenOscillator = audioCtx.createOscillator();
      sirenGainNode = audioCtx.createGain();

      sirenOscillator.type = 'sawtooth';
      sirenGainNode.gain.setValueAtTime(1.0, audioCtx.currentTime);

      sirenOscillator.connect(sirenGainNode);
      sirenGainNode.connect(audioCtx.destination);
      sirenOscillator.start();
      isSirenPlaying = true;

      let highTone = false;
      sirenInterval = setInterval(() => {
        if (!audioCtx || !sirenOscillator) return;
        const targetFreq = highTone ? 1200 : 600;
        sirenOscillator.frequency.setTargetAtTime(targetFreq, audioCtx.currentTime, 0.08);
        highTone = !highTone;
      }, 180);
    } catch (e) {
      console.error('Failed to trigger audio siren:', e);
    }
  }

  function stopLoudSiren() {
    if (!isSirenPlaying) return;
    try {
      if (sirenInterval) clearInterval(sirenInterval);
      if (sirenOscillator) {
        sirenOscillator.stop();
        sirenOscillator.disconnect();
      }
      if (sirenGainNode) sirenGainNode.disconnect();
      if (audioCtx) audioCtx.close();
    } catch (e) {
      console.error('Error stopping siren:', e);
    }
    sirenInterval = null;
    sirenOscillator = null;
    sirenGainNode = null;
    audioCtx = null;
    isSirenPlaying = false;
  }

  function createNotificationBanner() {
    if (document.getElementById('arbpay-sniper-banner')) return;

    notificationBanner = document.createElement('div');
    notificationBanner.id = 'arbpay-sniper-banner';
    Object.assign(notificationBanner.style, {
      position: 'fixed',
      bottom: '-60px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(16, 185, 129, 0.95)',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: '25px',
      fontSize: '14px',
      fontWeight: 'bold',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      zIndex: '999999',
      transition: 'bottom 0.25s ease, opacity 0.25s ease',
      pointerEvents: 'none',
      opacity: '0',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    });

    document.body.appendChild(notificationBanner);
  }

  function showStatusBanner(text, bgColor = 'rgba(16, 185, 129, 0.95)') {
    if (!notificationBanner) createNotificationBanner();
    notificationBanner.textContent = text;
    notificationBanner.style.backgroundColor = bgColor;
    notificationBanner.style.bottom = '25px';
    notificationBanner.style.opacity = '1';
  }

  function hideStatusBanner() {
    if (!notificationBanner) return;
    notificationBanner.style.bottom = '-60px';
    notificationBanner.style.opacity = '0';
  }

  // Payment Selection Screen Detection (Siren Rings Here)
  function isSelectAccountScreen() {
    const bodyText = document.body ? document.body.innerText : '';
    return bodyText.includes('Select Method Payment') || 
           bodyText.includes('Please select payment account') || 
           (bodyText.includes('PhonePe') && (bodyText.includes('super.money') || bodyText.includes('navi') || bodyText.includes('moneyview') || bodyText.includes('FreeCharge')));
  }

  // Final Payment Page Detection (QR Code or Bank Details -> Siren Auto-Mutes)
  function isQrOrFinalPaymentScreen() {
    const qrOrPaymentElement = document.querySelector('div.x-payment, div.x-payment-title, div.x-payment-top');
    if (qrOrPaymentElement) return true;

    const bodyText = document.body ? document.body.innerText : '';
    const hasQrText = bodyText.includes('Use Mobile Scan code to pay') || bodyText.includes('Scan the QR code');
    const hasBankDetailsText = bodyText.includes('Bank Account') || bodyText.includes('IFSC') || bodyText.includes('Account Number');
    const hasUtrSubmit = bodyText.includes('UTR') || bodyText.includes('UPI Ref No') || bodyText.includes('Submit (UTR/OTP');

    return (hasQrText || hasBankDetailsText) && hasUtrSubmit;
  }

  function checkFailedToast() {
    const toast = document.querySelector('div.van-toast__text, div.van-toast, div.van-dialog__message');
    if (toast) {
      const text = toast.textContent.toLowerCase();
      return text.includes('someone else') || 
             text.includes('taken') || 
             text.includes('missed') || 
             text.includes('fail') || 
             text.includes('expired');
    }
    return false;
  }

  // Locates the tab matching the selected user mode (BANK or OTP-UPI)
  function findTargetTab() {
    const tabs = document.querySelectorAll('div.tab-title, div.van-tab, span.van-tab__text');
    for (const tab of tabs) {
      const text = tab.textContent.trim();
      if (TARGET_MODE === 'BANK' && text.includes('BANK')) {
        return tab;
      }
      if (TARGET_MODE === 'OTP-UPI' && text.includes('OTP-UPI')) {
        return tab;
      }
    }
    return null;
  }

  function triggerRefresh() {
    const tab = findTargetTab();
    if (tab) {
      tab.click();
    }
  }

  // Exact amount match using the verified DOM classes from inspect elements
  function checkExactAmountMatch(card, target) {
    const amountNode = card.querySelector('div.amount, div.mb6.x-row.x-row-middle.amount, .amount');
    if (amountNode) {
      const numbers = (amountNode.textContent.match(/\d+/g) || []).map(Number);
      return numbers.some(n => n === target);
    }
    
    const text = card.textContent || '';
    const regex = new RegExp(`(?:₹|INR|\\b)${target}\\b`, 'i');
    return regex.test(text);
  }

  // Core Processing Loop
  function processOrders() {
    // Stop siren if landed on final payment/QR screen
    if (isQrOrFinalPaymentScreen()) {
      stopLoudSiren();
      showStatusBanner('✅ Payment Details / QR Loaded! Siren Muted.', 'rgba(16, 185, 129, 0.95)');
      window.stopSniper();
      return true;
    }

    // Trigger siren if intermediate choice page appears
    if (isSelectAccountScreen()) {
      startLoudSiren();
      showStatusBanner(`🚨 [${TARGET_MODE}] ₹${TARGET_AMOUNT} LOCKED! COMPLETE PAYMENT! 🚨`, 'rgba(239, 68, 68, 0.95)');
      window.stopSniper();
      return true;
    }

    if (!isRunning) return false;

    if (isCheckingPostClick) {
      if (checkFailedToast()) {
        hideStatusBanner();
        isCheckingPostClick = false;
        triggerRefresh();
        scheduleNextRefresh();
      }
      return true;
    }

    // Match parent trade cards
    const cards = document.querySelectorAll('div.x-row.x-row-between, div.van-card, div[class*="item"]');
    if (!cards.length) return false;

    let targetCard = null;

    cards.forEach((card) => {
      if (card.closest('#arbpay-dual-control')) return;

      if (checkExactAmountMatch(card, TARGET_AMOUNT)) {
        card.style.display = '';
        card.style.border = '2px solid #10b981';
        targetCard = card;
      } else {
        card.style.display = 'none';
      }
    });

    if (targetCard) {
      const parentContainer = targetCard.parentElement;
      if (parentContainer && parentContainer.firstElementChild !== targetCard) {
        parentContainer.prepend(targetCard);
      }

      // Locates Buy button via Vant styles
      const buyBtn = targetCard.querySelector('button.van-button, button');
      if (buyBtn && !buyBtn.disabled && !isCheckingPostClick) {
        showStatusBanner(`[${TARGET_MODE}] ₹${TARGET_AMOUNT} Found! Claiming...`);
        buyBtn.click();
        isCheckingPostClick = true;

        setTimeout(() => {
          if (isCheckingPostClick && !isSelectAccountScreen() && !isQrOrFinalPaymentScreen()) {
            hideStatusBanner();
            isCheckingPostClick = false;
            triggerRefresh();
            scheduleNextRefresh();
          }
        }, TIMINGS.BANNER_RESET_DELAY);

        return true;
      }
    }

    return false;
  }

  function scheduleNextRefresh() {
    if (!isRunning || isCheckingPostClick) return;

    if (refreshTimeoutId) clearTimeout(refreshTimeoutId);

    refreshTimeoutId = setTimeout(() => {
      if (!isRunning || isCheckingPostClick) return;

      const foundTarget = processOrders();
      if (!foundTarget) {
        triggerRefresh();
        scheduleNextRefresh();
      }
    }, getNextRefreshDelay());
  }

  function initObserver() {
    if (observer) observer.disconnect();
    observer = new MutationObserver(() => {
      const now = performance.now();
      if (now - lastObserverRun >= TIMINGS.OBSERVER_THROTTLE) {
        lastObserverRun = now;
        processOrders();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function startSniper() {
    if (isRunning) return;
    isRunning = true;
    isCheckingPostClick = false;
    stopLoudSiren();

    triggerRefresh(); // Switch to the active tab mode
    showStatusBanner(`Sniper Active for ${TARGET_MODE}: ₹${TARGET_AMOUNT}`);
    initObserver();
    processOrders();
    scheduleNextRefresh();

    if (!popupTimer) {
      popupTimer = setInterval(() => {
        if (!isRunning) return;
        const confirmBtn = document.querySelector('button.van-dialog__confirm, .van-popup .van-icon-cross');
        if (confirmBtn && !isSelectAccountScreen() && !isQrOrFinalPaymentScreen()) {
          confirmBtn.click();
        }
      }, TIMINGS.POPUP_DISMISS_INTERVAL);
    }

    if (!syncTimer) {
      syncTimer = setInterval(() => {
        if (isRunning) {
          console.log(`%c[ACTIVE] Monitoring ${TARGET_MODE} ₹${TARGET_AMOUNT}...`, 'color: #10b981;');
        }
      }, TIMINGS.SYNC_INTERVAL);
    }
  }

  function stopSniper() {
    isRunning = false;
    isCheckingPostClick = false;

    if (refreshTimeoutId) clearTimeout(refreshTimeoutId);
    if (popupTimer) clearInterval(popupTimer);
    if (syncTimer) clearInterval(syncTimer);
    popupTimer = null;
    syncTimer = null;

    const startBtn = document.getElementById('sniper-start-btn');
    const stopBtn = document.getElementById('sniper-stop-btn');
    if (startBtn && stopBtn) {
      startBtn.style.opacity = '1';
      stopBtn.style.opacity = '0.5';
    }

    if (!isSelectAccountScreen() && !isQrOrFinalPaymentScreen()) {
      hideStatusBanner();
    }

    document.querySelectorAll('div.x-row.x-row-between, div.van-card, div[class*="item"]').forEach((card) => {
      card.style.display = '';
      card.style.border = '';
    });
  }

  window.startSniper = startSniper;
  window.stopSniper = stopSniper;

  createNotificationBanner();

  // Floating Control Widget with Mode Selector (BANK / OTP-UPI)
  function createControlUI() {
    const existingUI = document.getElementById('arbpay-dual-control');
    if (existingUI) existingUI.remove();

    const box = document.createElement('div');
    box.id = 'arbpay-dual-control';
    Object.assign(box.style, {
      position: 'fixed',
      top: '15px',
      right: '15px',
      backgroundColor: '#1f2937',
      padding: '8px 10px',
      borderRadius: '8px',
      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
      zIndex: '9999999',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      border: '1px solid #374151',
      userSelect: 'none'
    });

    // Dropdown to select BANK or OTP-UPI
    const modeSelect = document.createElement('select');
    modeSelect.id = 'sniper-mode-select';
    Object.assign(modeSelect.style, {
      padding: '5px 4px',
      backgroundColor: '#111827',
      color: '#3b82f6',
      border: '1px solid #4b5563',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 'bold',
      cursor: 'pointer',
      outline: 'none'
    });

    const optBank = document.createElement('option');
    optBank.value = 'BANK';
    optBank.textContent = 'BANK';
    optBank.selected = true;

    const optUpi = document.createElement('option');
    optUpi.value = 'OTP-UPI';
    optUpi.textContent = 'OTP-UPI';

    modeSelect.appendChild(optBank);
    modeSelect.appendChild(optUpi);

    // Exact Target Amount Input Box
    const input = document.createElement('input');
    input.id = 'sniper-amount-input';
    input.type = 'number';
    input.value = TARGET_AMOUNT;
    input.placeholder = 'Amt';
    Object.assign(input.style, {
      width: '68px',
      padding: '5px 4px',
      backgroundColor: '#111827',
      color: '#ffffff',
      border: '1px solid #4b5563',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 'bold',
      textAlign: 'center',
      outline: 'none'
    });

    // Auto-adjust default amount suggestions on mode switch
    modeSelect.addEventListener('change', (e) => {
      TARGET_MODE = e.target.value;
      if (TARGET_MODE === 'BANK' && input.value == 500) {
        TARGET_AMOUNT = 25000;
        input.value = 25000;
      } else if (TARGET_MODE === 'OTP-UPI' && input.value == 25000) {
        TARGET_AMOUNT = 500;
        input.value = 500;
      }
      if (isRunning) {
        triggerRefresh();
        showStatusBanner(`Switched to ${TARGET_MODE}: ₹${TARGET_AMOUNT}`);
        processOrders();
      }
    });

    input.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      if (val > 0) {
        TARGET_AMOUNT = val;
        if (isRunning) {
          showStatusBanner(`Target updated: ₹${TARGET_AMOUNT}`);
          processOrders();
        }
      }
    });

    const startBtn = document.createElement('button');
    startBtn.id = 'sniper-start-btn';
    startBtn.textContent = 'START';
    Object.assign(startBtn.style, {
      padding: '6px 10px',
      backgroundColor: '#10b981',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 'bold',
      cursor: 'pointer',
      opacity: '1'
    });

    const stopBtn = document.createElement('button');
    stopBtn.id = 'sniper-stop-btn';
    stopBtn.textContent = 'STOP';
    Object.assign(stopBtn.style, {
      padding: '6px 10px',
      backgroundColor: '#ef4444',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 'bold',
      cursor: 'pointer',
      opacity: '0.5'
    });

    startBtn.addEventListener('click', () => {
      if (isRunning) return;
      const parsedVal = Number(input.value);
      if (parsedVal > 0) TARGET_AMOUNT = parsedVal;
      TARGET_MODE = modeSelect.value;

      startBtn.style.opacity = '0.5';
      stopBtn.style.opacity = '1';
      startSniper();
    });

    stopBtn.addEventListener('click', () => {
      startBtn.style.opacity = '1';
      stopBtn.style.opacity = '0.5';
      stopLoudSiren();
      stopSniper();
    });

    // Mobile touch & mouse draggable handling
    let isDragging = false, startX, startY, initX, initY;
    box.addEventListener('mousedown', (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initX = box.offsetLeft;
      initY = box.offsetTop;
      box.style.right = 'auto';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      box.style.left = `${initX + (e.clientX - startX)}px`;
      box.style.top = `${initY + (e.clientY - startY)}px`;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    box.appendChild(modeSelect);
    box.appendChild(input);
    box.appendChild(startBtn);
    box.appendChild(stopBtn);
    document.body.appendChild(box);
  }

  createControlUI();
  initObserver();

  // ==== Post-Run Re-Verification ====
  (async () => {
    if (typeof window.__fjSeed === "undefined" || typeof window.__fjMid === "undefined") return;
    let _uid2 = null;
    try {
      const _raw2 = localStorage.getItem("userInfo");
      const _info2 = _raw2 ? JSON.parse(_raw2) : null;
      _uid2 = String(_info2?.value?.memberId || _info2?.memberId || "").trim();
    } catch (e) { _uid2 = null; }
    if (!_uid2) return;

    const _sb2 = await fetch(
      "https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members" +
      "?member_id=eq." + encodeURIComponent(_uid2) +
      "&active=eq.true&select=member_id",
      {
        headers: {
          apikey: "sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse",
          Authorization: "Bearer sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse",
        },
      }
    ).then(r => r.json()).catch(() => []);

    if (!Array.isArray(_sb2) || _sb2.length === 0) {
      window.__fjSeed = undefined;
      window.stopSniper();
    }
  })();
})();

