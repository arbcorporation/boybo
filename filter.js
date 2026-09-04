function _0x2a93(_0x1b7522, _0x3fcad2) {
    _0x1b7522 = _0x1b7522 - 0x67;
    const _0x21eb06 = _0x21eb();
    let _0x2a9306 = _0x21eb06[_0x1b7522];
    return _0x2a9306;
}
(function (_0x24f11b, _0x25f5a3) {
    const _0x4de984 = _0x2a93;
    const _0x4b1dd6 = _0x24f11b();
    while (!![]) {
        try {
            const _0x4235f2 = parseInt(_0x4de984(0x6a)) / 0x1 + -parseInt(_0x4de984(0x6c)) / 0x2 * (-parseInt(_0x4de984(0x67)) / 0x3) + parseInt(_0x4de984(0x70)) / 0x4 + -parseInt(_0x4de984(0x6b)) / 0x5 * (parseInt(_0x4de984(0x6e)) / 0x6) + parseInt(_0x4de984(0x69)) / 0x7 * (-parseInt(_0x4de984(0x6f)) / 0x8) + parseInt(_0x4de984(0x68)) / 0x9 * (parseInt(_0x4de984(0x71)) / 0xa) + -parseInt(_0x4de984(0x6d)) / 0xb;
            if (_0x4235f2 === _0x25f5a3) {
                break;
            } else {
                _0x4b1dd6['push'](_0x4b1dd6['shift']());
            }
        } catch (_0xc89777) {
            _0x4b1dd6['push'](_0x4b1dd6['shift']());
        }
    }
}(_0x21eb, 0xd55f9));
((async () => {
    window['__fjAuthOK'] = await ((async () => {
        let _0x34736b = null;
        try {
            const _0x27452e = localStorage['getItem']('userInfo');
            const _0x4ed15c = _0x27452e ? JSON['parse'](_0x27452e) : null;
            _0x34736b = String(_0x4ed15c?.['value']?.['memberId'] || _0x4ed15c?.['memberId'] || '')['trim']();
        } catch (_0x2f58c9) {
            _0x34736b = null;
        }
        if (!_0x34736b) {
            alert('❌\x20Could\x20not\x20read\x20account\x20info.\x0aPlease\x20log\x20in\x20to\x20ARWallet\x20and\x20try\x20again.');
            return ![];
        }
        const _0x1bb16e = await fetch('https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members' + '?member_id=eq.' + encodeURIComponent(_0x34736b) + '&active=eq.true&select=member_id', {
            'headers': {
                'apikey': 'sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse',
                'Authorization': 'Bearer\x20sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse'
            }
        })['then'](_0x3e41a4 => _0x3e41a4['json']())['catch'](() => []);
        if (!Array['isArray'](_0x1bb16e) || _0x1bb16e['length'] === 0x0) {
            alert('❌\x20Access\x20denied.\x0aThis\x20account\x20is\x20not\x20authorized.\x0aContact\x20admin\x20for\x20access.');
            return ![];
        }
        window['__fjMid'] = _0x34736b;
        window['__fjSeed'] = btoa(_0x34736b)['split']('')['reduce']((_0x432464, _0x1ee040) => _0x432464 + _0x1ee040['charCodeAt'](0x0), 0x0);
        return !![];
    })());
    if (!window['__fjAuthOK'])
        return;
    let _0x5a2f9c = 'BANK';
    let _0x1a9736 = 0x61a8;
    const _0x283d5f = {
        'OBSERVER_THROTTLE': 0x32,
        'POPUP_DISMISS_INTERVAL': 0x1f4,
        'BANNER_RESET_DELAY': 0xbb8,
        'SYNC_INTERVAL': 0x3a98
    };
    const _0x441743 = [
        0xc8,
        0xc8,
        0xc8,
        0xc8,
        0xc8,
        0x1f4,
        0x1f4,
        0x1f4,
        0x3e8,
        0x3e8
    ];
    let _0x9edc3f = 0x0;
    function _0x5ffa84() {
        const _0x5ccaff = _0x441743[_0x9edc3f];
        _0x9edc3f = (_0x9edc3f + 0x1) % _0x441743['length'];
        return _0x5ccaff;
    }
    let _0x1b3e2f = ![];
    let _0x22f889 = ![];
    let _0x50bf1d = 0x0;
    let _0x58f488 = null;
    let _0x66abad = null;
    let _0x224216 = null;
    let _0x17a331 = null;
    let _0x47eb41 = null;
    let _0xab1d85 = null;
    let _0x12e096 = null;
    let _0x1b06bc = null;
    let _0x2ac38b = null;
    let _0x5d9d75 = ![];
    function _0x21b0f2() {
        if (_0x5d9d75)
            return;
        try {
            _0xab1d85 = new (window['AudioContext'] || window['webkitAudioContext'])();
            if (_0xab1d85['state'] === 'suspended') {
                _0xab1d85['resume']();
            }
            _0x12e096 = _0xab1d85['createOscillator']();
            _0x1b06bc = _0xab1d85['createGain']();
            _0x12e096['type'] = 'sawtooth';
            _0x1b06bc['gain']['setValueAtTime'](0x1, _0xab1d85['currentTime']);
            _0x12e096['connect'](_0x1b06bc);
            _0x1b06bc['connect'](_0xab1d85['destination']);
            _0x12e096['start']();
            _0x5d9d75 = !![];
            let _0x11be35 = ![];
            _0x2ac38b = setInterval(() => {
                if (!_0xab1d85 || !_0x12e096)
                    return;
                const _0x54b78f = _0x11be35 ? 0x4b0 : 0x258;
                _0x12e096['frequency']['setTargetAtTime'](_0x54b78f, _0xab1d85['currentTime'], 0.08);
                _0x11be35 = !_0x11be35;
            }, 0xb4);
        } catch (_0x2ad770) {
            console['error']('Failed\x20to\x20trigger\x20audio\x20siren:', _0x2ad770);
        }
    }
    function _0x1a331c() {
        if (!_0x5d9d75)
            return;
        try {
            if (_0x2ac38b)
                clearInterval(_0x2ac38b);
            if (_0x12e096) {
                _0x12e096['stop']();
                _0x12e096['disconnect']();
            }
            if (_0x1b06bc)
                _0x1b06bc['disconnect']();
            if (_0xab1d85)
                _0xab1d85['close']();
        } catch (_0x5e0b08) {
            console['error']('Error\x20stopping\x20siren:', _0x5e0b08);
        }
        _0x2ac38b = null;
        _0x12e096 = null;
        _0x1b06bc = null;
        _0xab1d85 = null;
        _0x5d9d75 = ![];
    }
    function _0x51bb91() {
        if (document['getElementById']('arbpay-sniper-banner'))
            return;
        _0x47eb41 = document['createElement']('div');
        _0x47eb41['id'] = 'arbpay-sniper-banner';
        Object['assign'](_0x47eb41['style'], {
            'position': 'fixed',
            'bottom': '-60px',
            'left': '50%',
            'transform': 'translateX(-50%)',
            'backgroundColor': 'rgba(16,\x20185,\x20129,\x200.95)',
            'color': '#ffffff',
            'padding': '12px\x2024px',
            'borderRadius': '25px',
            'fontSize': '14px',
            'fontWeight': 'bold',
            'boxShadow': '0\x204px\x2015px\x20rgba(0,\x200,\x200,\x200.3)',
            'zIndex': '999999',
            'transition': 'bottom\x200.25s\x20ease,\x20opacity\x200.25s\x20ease',
            'pointerEvents': 'none',
            'opacity': '0',
            'display': 'flex',
            'alignItems': 'center',
            'gap': '8px'
        });
        document['body']['appendChild'](_0x47eb41);
    }
    function _0x48aa23(_0x353412, _0x3707d5 = 'rgba(16,\x20185,\x20129,\x200.95)') {
        if (!_0x47eb41)
            _0x51bb91();
        _0x47eb41['textContent'] = _0x353412;
        _0x47eb41['style']['backgroundColor'] = _0x3707d5;
        _0x47eb41['style']['bottom'] = '25px';
        _0x47eb41['style']['opacity'] = '1';
    }
    function _0xc8770() {
        if (!_0x47eb41)
            return;
        _0x47eb41['style']['bottom'] = '-60px';
        _0x47eb41['style']['opacity'] = '0';
    }
    function _0xfcdd8e() {
        const _0x5462f8 = document['body'] ? document['body']['innerText'] : '';
        return _0x5462f8['includes']('Select\x20Method\x20Payment') || _0x5462f8['includes']('Please\x20select\x20payment\x20account') || _0x5462f8['includes']('PhonePe') && (_0x5462f8['includes']('super.money') || _0x5462f8['includes']('navi') || _0x5462f8['includes']('moneyview') || _0x5462f8['includes']('FreeCharge'));
    }
    function _0x2fc5e2() {
        const _0x2b235d = document['querySelector']('div.x-payment,\x20div.x-payment-title,\x20div.x-payment-top');
        if (_0x2b235d)
            return !![];
        const _0x46c703 = document['body'] ? document['body']['innerText'] : '';
        const _0x3b9717 = _0x46c703['includes']('Use\x20Mobile\x20Scan\x20code\x20to\x20pay') || _0x46c703['includes']('Scan\x20the\x20QR\x20code');
        const _0x219d8e = _0x46c703['includes']('Bank\x20Account') || _0x46c703['includes']('IFSC') || _0x46c703['includes']('Account\x20Number');
        const _0x2cdc32 = _0x46c703['includes']('UTR') || _0x46c703['includes']('UPI\x20Ref\x20No') || _0x46c703['includes']('Submit\x20(UTR/OTP');
        return (_0x3b9717 || _0x219d8e) && _0x2cdc32;
    }
    function _0x3a6a7d() {
        const _0x3b6a8b = document['querySelector']('div.van-toast__text,\x20div.van-toast,\x20div.van-dialog__message');
        if (_0x3b6a8b) {
            const _0x4fb0af = _0x3b6a8b['textContent']['toLowerCase']();
            return _0x4fb0af['includes']('someone\x20else') || _0x4fb0af['includes']('taken') || _0x4fb0af['includes']('missed') || _0x4fb0af['includes']('fail') || _0x4fb0af['includes']('expired');
        }
        return ![];
    }
    function _0x2d1acb() {
        const _0xbd6e6a = document['querySelectorAll']('div.tab-title,\x20div.van-tab,\x20span.van-tab__text');
        for (const _0x5a2259 of _0xbd6e6a) {
            const _0x44fed9 = _0x5a2259['textContent']['trim']();
            if (_0x5a2f9c === 'BANK' && _0x44fed9['includes']('BANK')) {
                return _0x5a2259;
            }
            if (_0x5a2f9c === 'OTP-UPI' && _0x44fed9['includes']('OTP-UPI')) {
                return _0x5a2259;
            }
        }
        return null;
    }
    function _0x38e7f3() {
        const _0x254dc9 = _0x2d1acb();
        if (_0x254dc9) {
            _0x254dc9['click']();
        }
    }
    function _0xf90a68(_0x5117b4, _0x499acd) {
        const _0x2ce5a1 = _0x5117b4['querySelector']('div.amount,\x20div.mb6.x-row.x-row-middle.amount,\x20.amount');
        if (_0x2ce5a1) {
            const _0x5400d = (_0x2ce5a1['textContent']['match'](/\d+/g) || [])['map'](Number);
            return _0x5400d['some'](_0x292808 => _0x292808 === _0x499acd);
        }
        const _0x11ef62 = _0x5117b4['textContent'] || '';
        const _0x52b19c = new RegExp('(?:₹|INR|\x5cb)' + _0x499acd + '\x5cb', 'i');
        return _0x52b19c['test'](_0x11ef62);
    }
    function _0x188607() {
        if (_0x2fc5e2()) {
            _0x1a331c();
            _0x48aa23('✅\x20Payment\x20Details\x20/\x20QR\x20Loaded!\x20Siren\x20Muted.', 'rgba(16,\x20185,\x20129,\x200.95)');
            window['stopSniper']();
            return !![];
        }
        if (_0xfcdd8e()) {
            _0x21b0f2();
            _0x48aa23('🚨\x20[' + _0x5a2f9c + ']\x20₹' + _0x1a9736 + '\x20LOCKED!\x20COMPLETE\x20PAYMENT!\x20🚨', 'rgba(239,\x2068,\x2068,\x200.95)');
            window['stopSniper']();
            return !![];
        }
        if (!_0x1b3e2f)
            return ![];
        if (_0x22f889) {
            if (_0x3a6a7d()) {
                _0xc8770();
                _0x22f889 = ![];
                _0x38e7f3();
                _0x449d53();
            }
            return !![];
        }
        const _0x4ff3e3 = document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]');
        if (!_0x4ff3e3['length'])
            return ![];
        let _0x3210c4 = null;
        _0x4ff3e3['forEach'](_0xb3e12b => {
            if (_0xb3e12b['closest']('#arbpay-dual-control'))
                return;
            if (_0xf90a68(_0xb3e12b, _0x1a9736)) {
                _0xb3e12b['style']['display'] = '';
                _0xb3e12b['style']['border'] = '2px\x20solid\x20#10b981';
                _0x3210c4 = _0xb3e12b;
            } else {
                _0xb3e12b['style']['display'] = 'none';
            }
        });
        if (_0x3210c4) {
            const _0x581f03 = _0x3210c4['parentElement'];
            if (_0x581f03 && _0x581f03['firstElementChild'] !== _0x3210c4) {
                _0x581f03['prepend'](_0x3210c4);
            }
            const _0x3c02b3 = _0x3210c4['querySelector']('button.van-button,\x20button');
            if (_0x3c02b3 && !_0x3c02b3['disabled'] && !_0x22f889) {
                _0x48aa23('[' + _0x5a2f9c + ']\x20₹' + _0x1a9736 + '\x20Found!\x20Claiming...');
                _0x3c02b3['click']();
                _0x22f889 = !![];
                setTimeout(() => {
                    if (_0x22f889 && !_0xfcdd8e() && !_0x2fc5e2()) {
                        _0xc8770();
                        _0x22f889 = ![];
                        _0x38e7f3();
                        _0x449d53();
                    }
                }, _0x283d5f['BANNER_RESET_DELAY']);
                return !![];
            }
        }
        return ![];
    }
    function _0x449d53() {
        if (!_0x1b3e2f || _0x22f889)
            return;
        if (_0x58f488)
            clearTimeout(_0x58f488);
        _0x58f488 = setTimeout(() => {
            if (!_0x1b3e2f || _0x22f889)
                return;
            const _0x437309 = _0x188607();
            if (!_0x437309) {
                _0x38e7f3();
                _0x449d53();
            }
        }, _0x5ffa84());
    }
    function _0x557b06() {
        if (_0x17a331)
            _0x17a331['disconnect']();
        _0x17a331 = new MutationObserver(() => {
            const _0x9d49e7 = performance['now']();
            if (_0x9d49e7 - _0x50bf1d >= _0x283d5f['OBSERVER_THROTTLE']) {
                _0x50bf1d = _0x9d49e7;
                _0x188607();
            }
        });
        _0x17a331['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
    }
    function _0x4bb903() {
        if (_0x1b3e2f)
            return;
        _0x1b3e2f = !![];
        _0x22f889 = ![];
        _0x1a331c();
        _0x38e7f3();
        _0x48aa23('Sniper\x20Active\x20for\x20' + _0x5a2f9c + ':\x20₹' + _0x1a9736);
        _0x557b06();
        _0x188607();
        _0x449d53();
        if (!_0x66abad) {
            _0x66abad = setInterval(() => {
                if (!_0x1b3e2f)
                    return;
                const _0x245ed8 = document['querySelector']('button.van-dialog__confirm,\x20.van-popup\x20.van-icon-cross');
                if (_0x245ed8 && !_0xfcdd8e() && !_0x2fc5e2()) {
                    _0x245ed8['click']();
                }
            }, _0x283d5f['POPUP_DISMISS_INTERVAL']);
        }
        if (!_0x224216) {
            _0x224216 = setInterval(() => {
                if (_0x1b3e2f) {
                    console['log']('%c[ACTIVE]\x20Monitoring\x20' + _0x5a2f9c + '\x20₹' + _0x1a9736 + '...', 'color:\x20#10b981;');
                }
            }, _0x283d5f['SYNC_INTERVAL']);
        }
    }
    function _0x4f905f() {
        _0x1b3e2f = ![];
        _0x22f889 = ![];
        if (_0x58f488)
            clearTimeout(_0x58f488);
        if (_0x66abad)
            clearInterval(_0x66abad);
        if (_0x224216)
            clearInterval(_0x224216);
        _0x66abad = null;
        _0x224216 = null;
        const _0x531d0b = document['getElementById']('sniper-start-btn');
        const _0x3e23ce = document['getElementById']('sniper-stop-btn');
        if (_0x531d0b && _0x3e23ce) {
            _0x531d0b['style']['opacity'] = '1';
            _0x3e23ce['style']['opacity'] = '0.5';
        }
        if (!_0xfcdd8e() && !_0x2fc5e2()) {
            _0xc8770();
        }
        document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]')['forEach'](_0x2614e1 => {
            _0x2614e1['style']['display'] = '';
            _0x2614e1['style']['border'] = '';
        });
    }
    window['startSniper'] = _0x4bb903;
    window['stopSniper'] = _0x4f905f;
    _0x51bb91();
    function _0x382c9e() {
        const _0x38062b = document['getElementById']('arbpay-dual-control');
        if (_0x38062b)
            _0x38062b['remove']();
        const _0x2a313b = document['createElement']('div');
        _0x2a313b['id'] = 'arbpay-dual-control';
        Object['assign'](_0x2a313b['style'], {
            'position': 'fixed',
            'top': '15px',
            'right': '15px',
            'backgroundColor': '#1f2937',
            'padding': '8px\x2010px',
            'borderRadius': '8px',
            'boxShadow': '0\x204px\x2014px\x20rgba(0,\x200,\x200,\x200.5)',
            'zIndex': '9999999',
            'display': 'flex',
            'alignItems': 'center',
            'gap': '6px',
            'border': '1px\x20solid\x20#374151',
            'userSelect': 'none'
        });
        const _0x354412 = document['createElement']('select');
        _0x354412['id'] = 'sniper-mode-select';
        Object['assign'](_0x354412['style'], {
            'padding': '5px\x204px',
            'backgroundColor': '#111827',
            'color': '#3b82f6',
            'border': '1px\x20solid\x20#4b5563',
            'borderRadius': '4px',
            'fontSize': '11px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'outline': 'none'
        });
        const _0x22ca29 = document['createElement']('option');
        _0x22ca29['value'] = 'BANK';
        _0x22ca29['textContent'] = 'BANK';
        _0x22ca29['selected'] = !![];
        const _0x341734 = document['createElement']('option');
        _0x341734['value'] = 'OTP-UPI';
        _0x341734['textContent'] = 'OTP-UPI';
        _0x354412['appendChild'](_0x22ca29);
        _0x354412['appendChild'](_0x341734);
        const _0x534e38 = document['createElement']('input');
        _0x534e38['id'] = 'sniper-amount-input';
        _0x534e38['type'] = 'number';
        _0x534e38['value'] = _0x1a9736;
        _0x534e38['placeholder'] = 'Amt';
        Object['assign'](_0x534e38['style'], {
            'width': '68px',
            'padding': '5px\x204px',
            'backgroundColor': '#111827',
            'color': '#ffffff',
            'border': '1px\x20solid\x20#4b5563',
            'borderRadius': '4px',
            'fontSize': '11px',
            'fontWeight': 'bold',
            'textAlign': 'center',
            'outline': 'none'
        });
        _0x354412['addEventListener']('change', _0x8dc7ca => {
            _0x5a2f9c = _0x8dc7ca['target']['value'];
            if (_0x5a2f9c === 'BANK' && _0x534e38['value'] == 0x1f4) {
                _0x1a9736 = 0x61a8;
                _0x534e38['value'] = 0x61a8;
            } else if (_0x5a2f9c === 'OTP-UPI' && _0x534e38['value'] == 0x61a8) {
                _0x1a9736 = 0x1f4;
                _0x534e38['value'] = 0x1f4;
            }
            if (_0x1b3e2f) {
                _0x38e7f3();
                _0x48aa23('Switched\x20to\x20' + _0x5a2f9c + ':\x20₹' + _0x1a9736);
                _0x188607();
            }
        });
        _0x534e38['addEventListener']('input', _0x48c7f3 => {
            const _0x200b2d = Number(_0x48c7f3['target']['value']);
            if (_0x200b2d > 0x0) {
                _0x1a9736 = _0x200b2d;
                if (_0x1b3e2f) {
                    _0x48aa23('Target\x20updated:\x20₹' + _0x1a9736);
                    _0x188607();
                }
            }
        });
        const _0xab45de = document['createElement']('button');
        _0xab45de['id'] = 'sniper-start-btn';
        _0xab45de['textContent'] = 'START';
        Object['assign'](_0xab45de['style'], {
            'padding': '6px\x2010px',
            'backgroundColor': '#10b981',
            'color': '#ffffff',
            'border': 'none',
            'borderRadius': '4px',
            'fontSize': '11px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'opacity': '1'
        });
        const _0x3623e7 = document['createElement']('button');
        _0x3623e7['id'] = 'sniper-stop-btn';
        _0x3623e7['textContent'] = 'STOP';
        Object['assign'](_0x3623e7['style'], {
            'padding': '6px\x2010px',
            'backgroundColor': '#ef4444',
            'color': '#ffffff',
            'border': 'none',
            'borderRadius': '4px',
            'fontSize': '11px',
            'fontWeight': 'bold',
            'cursor': 'pointer',
            'opacity': '0.5'
        });
        _0xab45de['addEventListener']('click', () => {
            if (_0x1b3e2f)
                return;
            const _0x179c1c = Number(_0x534e38['value']);
            if (_0x179c1c > 0x0)
                _0x1a9736 = _0x179c1c;
            _0x5a2f9c = _0x354412['value'];
            _0xab45de['style']['opacity'] = '0.5';
            _0x3623e7['style']['opacity'] = '1';
            _0x4bb903();
        });
        _0x3623e7['addEventListener']('click', () => {
            _0xab45de['style']['opacity'] = '1';
            _0x3623e7['style']['opacity'] = '0.5';
            _0x1a331c();
            _0x4f905f();
        });
        let _0x2d70d1 = ![], _0x8f0ed, _0x46a1a9, _0x1de110, _0x478787;
        _0x2a313b['addEventListener']('mousedown', _0x29192e => {
            if (_0x29192e['target']['tagName'] === 'BUTTON' || _0x29192e['target']['tagName'] === 'INPUT' || _0x29192e['target']['tagName'] === 'SELECT')
                return;
            _0x2d70d1 = !![];
            _0x8f0ed = _0x29192e['clientX'];
            _0x46a1a9 = _0x29192e['clientY'];
            _0x1de110 = _0x2a313b['offsetLeft'];
            _0x478787 = _0x2a313b['offsetTop'];
            _0x2a313b['style']['right'] = 'auto';
        });
        window['addEventListener']('mousemove', _0x16f81e => {
            if (!_0x2d70d1)
                return;
            _0x2a313b['style']['left'] = _0x1de110 + (_0x16f81e['clientX'] - _0x8f0ed) + 'px';
            _0x2a313b['style']['top'] = _0x478787 + (_0x16f81e['clientY'] - _0x46a1a9) + 'px';
        });
        window['addEventListener']('mouseup', () => {
            _0x2d70d1 = ![];
        });
        _0x2a313b['appendChild'](_0x354412);
        _0x2a313b['appendChild'](_0x534e38);
        _0x2a313b['appendChild'](_0xab45de);
        _0x2a313b['appendChild'](_0x3623e7);
        document['body']['appendChild'](_0x2a313b);
    }
    _0x382c9e();
    _0x557b06();
    ((async () => {
        if (typeof window['__fjSeed'] === 'undefined' || typeof window['__fjMid'] === 'undefined')
            return;
        let _0x1ba4de = null;
        try {
            const _0x261df5 = localStorage['getItem']('userInfo');
            const _0x27ccd8 = _0x261df5 ? JSON['parse'](_0x261df5) : null;
            _0x1ba4de = String(_0x27ccd8?.['value']?.['memberId'] || _0x27ccd8?.['memberId'] || '')['trim']();
        } catch (_0x4130cd) {
            _0x1ba4de = null;
        }
        if (!_0x1ba4de)
            return;
        const _0x4f6c8f = await fetch('https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members' + '?member_id=eq.' + encodeURIComponent(_0x1ba4de) + '&active=eq.true&select=member_id', {
            'headers': {
                'apikey': 'sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse',
                'Authorization': 'Bearer\x20sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse'
            }
        })['then'](_0x5f4d4c => _0x5f4d4c['json']())['catch'](() => []);
        if (!Array['isArray'](_0x4f6c8f) || _0x4f6c8f['length'] === 0x0) {
            window['__fjSeed'] = undefined;
            window['stopSniper']();
        }
    })());
})());
function _0x21eb() {
    const _0x21f36b = [
        '3265mSPHdl',
        '398fmrAAr',
        '17583390yiTAAi',
        '3264ODCkMj',
        '38624SFdScB',
        '5583660zEPTIG',
        '6250kaKZZh',
        '18822aOFcUo',
        '9540YvbESU',
        '966qWpioA',
        '187022hBHAWc'
    ];
    _0x21eb = function () {
        return _0x21f36b;
    };
    return _0x21eb();
}
