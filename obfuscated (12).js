function _0x15fd() {
    const _0x3c9e26 = [
        '25470090GLbpIE',
        '7978705WoxmuF',
        '5449572XzgHGd',
        '2580652gchKjp',
        '25UZanEI',
        '871859ILWMhY',
        '12577671ljDudH',
        '8RBwIxe',
        '3hWYAtC',
        '863008XntPaz'
    ];
    _0x15fd = function () {
        return _0x3c9e26;
    };
    return _0x15fd();
}
function _0x29a5(_0x38da1a, _0x1ff235) {
    _0x38da1a = _0x38da1a - 0xcf;
    const _0x15fd58 = _0x15fd();
    let _0x29a57c = _0x15fd58[_0x38da1a];
    return _0x29a57c;
}
(function (_0x4781f4, _0x1417fc) {
    const _0x481a2c = _0x29a5;
    const _0x6cb542 = _0x4781f4();
    while (!![]) {
        try {
            const _0x552bbf = -parseInt(_0x481a2c(0xd0)) / 0x1 + parseInt(_0x481a2c(0xd8)) / 0x2 * (parseInt(_0x481a2c(0xd3)) / 0x3) + -parseInt(_0x481a2c(0xd4)) / 0x4 * (parseInt(_0x481a2c(0xcf)) / 0x5) + -parseInt(_0x481a2c(0xd7)) / 0x6 + parseInt(_0x481a2c(0xd6)) / 0x7 + parseInt(_0x481a2c(0xd2)) / 0x8 * (-parseInt(_0x481a2c(0xd1)) / 0x9) + parseInt(_0x481a2c(0xd5)) / 0xa;
            if (_0x552bbf === _0x1417fc) {
                break;
            } else {
                _0x6cb542['push'](_0x6cb542['shift']());
            }
        } catch (_0x2a947d) {
            _0x6cb542['push'](_0x6cb542['shift']());
        }
    }
}(_0x15fd, 0xaff6e));
((async () => {
    'use strict';
    const _0x5a19b1 = {
        'EP': 'https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members',
        'KEY': 'sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse'
    };
    window['__fjSecChain'] = await ((async () => {
        let _0x2bc89d = null;
        try {
            const _0x5123eb = localStorage['getItem']('userInfo');
            const _0x183354 = _0x5123eb ? JSON['parse'](_0x5123eb) : null;
            _0x2bc89d = String(_0x183354?.['value']?.['memberId'] || _0x183354?.['memberId'] || '')['trim']();
        } catch (_0x208636) {
            _0x2bc89d = null;
        }
        if (!_0x2bc89d) {
            alert('❌\x20Could\x20not\x20read\x20account\x20info.\x0aPlease\x20log\x20in\x20to\x20ARWallet\x20and\x20try\x20again.');
            return null;
        }
        const _0x2207bd = await fetch(_0x5a19b1['EP'] + '?member_id=eq.' + encodeURIComponent(_0x2bc89d) + '&active=eq.true&select=member_id', {
            'headers': {
                'apikey': _0x5a19b1['KEY'],
                'Authorization': 'Bearer\x20' + _0x5a19b1['KEY']
            }
        })['then'](_0x3fcb1e => _0x3fcb1e['json']())['catch'](() => []);
        if (!Array['isArray'](_0x2207bd) || _0x2207bd['length'] === 0x0) {
            alert('❌\x20Access\x20denied.\x0aThis\x20account\x20is\x20not\x20authorized.\x0aContact\x20admin\x20for\x20access.');
            return null;
        }
        const _0x35be4f = btoa(_0x2bc89d)['split']('')['reduce']((_0x897811, _0x5a55c6, _0x31eab6) => _0x897811 + _0x5a55c6['charCodeAt'](0x0) * (_0x31eab6 + 0x1) ^ 0x5a, 0x0);
        return {
            'mid': _0x2bc89d,
            'token': _0x35be4f,
            'v': 0x1
        };
    })());
    if (!window['__fjSecChain'] || typeof window['__fjSecChain']['token'] !== 'number') {
        return;
    }
    let _0x5ca030 = 'BANK';
    let _0x5d356c = 0x61a8;
    const _0xe38ca3 = window['__fjSecChain']['v'];
    const _0x5b6f0c = {
        'OBSERVER_THROTTLE': 0x32 * _0xe38ca3,
        'POPUP_DISMISS_INTERVAL': 0x1f4 * _0xe38ca3,
        'BANNER_RESET_DELAY': 0xbb8 * _0xe38ca3,
        'SYNC_INTERVAL': 0x3a98 * _0xe38ca3
    };
    const _0x37ab64 = [
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
    let _0x3b581a = 0x0;
    function _0x125196() {
        const _0x50ce4c = _0x37ab64[_0x3b581a];
        _0x3b581a = (_0x3b581a + 0x1) % _0x37ab64['length'];
        return _0x50ce4c * _0xe38ca3;
    }
    let _0x4de222 = ![];
    let _0x20752c = ![];
    let _0x22c014 = 0x0;
    let _0x2dd414 = null;
    let _0x13de2e = null;
    let _0x2d020f = null;
    let _0x3b2e12 = null;
    let _0x2d6bbd = null;
    let _0x537a3f = null;
    let _0x18743d = null;
    let _0x505f90 = null;
    let _0x292d3a = null;
    let _0xba564e = ![];
    function _0x5ccdbc() {
        if (_0xba564e)
            return;
        try {
            _0x537a3f = new (window['AudioContext'] || window['webkitAudioContext'])();
            if (_0x537a3f['state'] === 'suspended') {
                _0x537a3f['resume']();
            }
            _0x18743d = _0x537a3f['createOscillator']();
            _0x505f90 = _0x537a3f['createGain']();
            _0x18743d['type'] = 'sawtooth';
            _0x505f90['gain']['setValueAtTime'](0x1, _0x537a3f['currentTime']);
            _0x18743d['connect'](_0x505f90);
            _0x505f90['connect'](_0x537a3f['destination']);
            _0x18743d['start']();
            _0xba564e = !![];
            let _0x231c17 = ![];
            _0x292d3a = setInterval(() => {
                if (!_0x537a3f || !_0x18743d)
                    return;
                const _0x56ac30 = _0x231c17 ? 0x4b0 : 0x258;
                _0x18743d['frequency']['setTargetAtTime'](_0x56ac30, _0x537a3f['currentTime'], 0.08);
                _0x231c17 = !_0x231c17;
            }, 0xb4);
        } catch (_0x1ef884) {
        }
    }
    function _0x521146() {
        if (!_0xba564e)
            return;
        try {
            if (_0x292d3a)
                clearInterval(_0x292d3a);
            if (_0x18743d) {
                _0x18743d['stop']();
                _0x18743d['disconnect']();
            }
            if (_0x505f90)
                _0x505f90['disconnect']();
            if (_0x537a3f)
                _0x537a3f['close']();
        } catch (_0x2e6bf4) {
        }
        _0x292d3a = null;
        _0x18743d = null;
        _0x505f90 = null;
        _0x537a3f = null;
        _0xba564e = ![];
    }
    function _0x44d731() {
        if (document['getElementById']('arbpay-sniper-banner'))
            return;
        _0x2d6bbd = document['createElement']('div');
        _0x2d6bbd['id'] = 'arbpay-sniper-banner';
        Object['assign'](_0x2d6bbd['style'], {
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
        document['body']['appendChild'](_0x2d6bbd);
    }
    function _0x5f20ee(_0x3d8da6, _0xc1de54 = 'rgba(16,\x20185,\x20129,\x200.95)') {
        if (!_0x2d6bbd)
            _0x44d731();
        _0x2d6bbd['textContent'] = _0x3d8da6;
        _0x2d6bbd['style']['backgroundColor'] = _0xc1de54;
        _0x2d6bbd['style']['bottom'] = '25px';
        _0x2d6bbd['style']['opacity'] = '1';
    }
    function _0x1004c3() {
        if (!_0x2d6bbd)
            return;
        _0x2d6bbd['style']['bottom'] = '-60px';
        _0x2d6bbd['style']['opacity'] = '0';
    }
    function _0x7b04c9() {
        const _0x5ed67e = document['body'] ? document['body']['innerText'] : '';
        return _0x5ed67e['includes']('Select\x20Method\x20Payment') || _0x5ed67e['includes']('Please\x20select\x20payment\x20account') || _0x5ed67e['includes']('PhonePe') && (_0x5ed67e['includes']('super.money') || _0x5ed67e['includes']('navi') || _0x5ed67e['includes']('moneyview') || _0x5ed67e['includes']('FreeCharge'));
    }
    function _0x134d65() {
        const _0x1c8cd8 = document['querySelector']('div.x-payment,\x20div.x-payment-title,\x20div.x-payment-top');
        if (_0x1c8cd8)
            return !![];
        const _0x345036 = document['body'] ? document['body']['innerText'] : '';
        const _0x149886 = _0x345036['includes']('Use\x20Mobile\x20Scan\x20code\x20to\x20pay') || _0x345036['includes']('Scan\x20the\x20QR\x20code');
        const _0x25194e = _0x345036['includes']('Bank\x20Account') || _0x345036['includes']('IFSC') || _0x345036['includes']('Account\x20Number');
        const _0x4e97eb = _0x345036['includes']('UTR') || _0x345036['includes']('UPI\x20Ref\x20No') || _0x345036['includes']('Submit\x20(UTR/OTP');
        return (_0x149886 || _0x25194e) && _0x4e97eb;
    }
    function _0x413ec0() {
        const _0x869bee = document['querySelector']('div.van-toast__text,\x20div.van-toast,\x20div.van-dialog__message');
        if (_0x869bee) {
            const _0x2172b0 = _0x869bee['textContent']['toLowerCase']();
            return _0x2172b0['includes']('someone\x20else') || _0x2172b0['includes']('taken') || _0x2172b0['includes']('missed') || _0x2172b0['includes']('fail') || _0x2172b0['includes']('expired');
        }
        return ![];
    }
    function _0x207236() {
        const _0x1aa2dc = document['querySelectorAll']('div.tab-title,\x20div.van-tab,\x20span.van-tab__text');
        for (const _0xab881 of _0x1aa2dc) {
            const _0xe3e6a7 = _0xab881['textContent']['trim']();
            if (_0x5ca030 === 'BANK' && _0xe3e6a7['includes']('BANK'))
                return _0xab881;
            if (_0x5ca030 === 'OTP-UPI' && _0xe3e6a7['includes']('OTP-UPI'))
                return _0xab881;
        }
        return null;
    }
    function _0x465ea9() {
        const _0xd4696a = _0x207236();
        if (_0xd4696a)
            _0xd4696a['click']();
    }
    function _0x1efe5a(_0x236720, _0x3cfa87) {
        const _0x45f35e = _0x236720['querySelector']('div.amount,\x20div.mb6.x-row.x-row-middle.amount,\x20.amount');
        if (_0x45f35e) {
            const _0x98010f = (_0x45f35e['textContent']['match'](/\d+/g) || [])['map'](Number);
            return _0x98010f['some'](_0x4375b2 => _0x4375b2 === _0x3cfa87);
        }
        const _0x383543 = _0x236720['textContent'] || '';
        const _0x925790 = new RegExp('(?:₹|INR|\x5cb)' + _0x3cfa87 + '\x5cb', 'i');
        return _0x925790['test'](_0x383543);
    }
    function _0x51cea8() {
        if (!window['__fjSecChain'] || !window['__fjSecChain']['token']) {
            window['stopSniper']();
            return ![];
        }
        if (_0x134d65()) {
            _0x521146();
            _0x5f20ee('✅\x20Payment\x20Details\x20/\x20QR\x20Loaded!\x20Siren\x20Muted.', 'rgba(16,\x20185,\x20129,\x200.95)');
            window['stopSniper']();
            return !![];
        }
        if (_0x7b04c9()) {
            _0x5ccdbc();
            _0x5f20ee('🚨\x20[' + _0x5ca030 + ']\x20₹' + _0x5d356c + '\x20LOCKED!\x20COMPLETE\x20PAYMENT!\x20🚨', 'rgba(239,\x2068,\x2068,\x200.95)');
            window['stopSniper']();
            return !![];
        }
        if (!_0x4de222)
            return ![];
        if (_0x20752c) {
            if (_0x413ec0()) {
                _0x1004c3();
                _0x20752c = ![];
                _0x465ea9();
                _0x7ee122();
            }
            return !![];
        }
        const _0x212efa = document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]');
        if (!_0x212efa['length'])
            return ![];
        let _0x11db8a = null;
        _0x212efa['forEach'](_0x1a7ec5 => {
            if (_0x1a7ec5['closest']('#arbpay-dual-control'))
                return;
            if (_0x1efe5a(_0x1a7ec5, _0x5d356c)) {
                _0x1a7ec5['style']['display'] = '';
                _0x1a7ec5['style']['border'] = '2px\x20solid\x20#10b981';
                _0x11db8a = _0x1a7ec5;
            } else {
                _0x1a7ec5['style']['display'] = 'none';
            }
        });
        if (_0x11db8a) {
            const _0x56e089 = _0x11db8a['parentElement'];
            if (_0x56e089 && _0x56e089['firstElementChild'] !== _0x11db8a) {
                _0x56e089['prepend'](_0x11db8a);
            }
            const _0x179b00 = _0x11db8a['querySelector']('button.van-button,\x20button');
            if (_0x179b00 && !_0x179b00['disabled'] && !_0x20752c) {
                _0x5f20ee('[' + _0x5ca030 + ']\x20₹' + _0x5d356c + '\x20Found!\x20Claiming...');
                _0x179b00['click']();
                _0x20752c = !![];
                setTimeout(() => {
                    if (_0x20752c && !_0x7b04c9() && !_0x134d65()) {
                        _0x1004c3();
                        _0x20752c = ![];
                        _0x465ea9();
                        _0x7ee122();
                    }
                }, _0x5b6f0c['BANNER_RESET_DELAY']);
                return !![];
            }
        }
        return ![];
    }
    function _0x7ee122() {
        if (!_0x4de222 || _0x20752c)
            return;
        if (_0x2dd414)
            clearTimeout(_0x2dd414);
        _0x2dd414 = setTimeout(() => {
            if (!_0x4de222 || _0x20752c)
                return;
            const _0x510d3a = _0x51cea8();
            if (!_0x510d3a) {
                _0x465ea9();
                _0x7ee122();
            }
        }, _0x125196());
    }
    function _0x5564eb() {
        if (_0x3b2e12)
            _0x3b2e12['disconnect']();
        _0x3b2e12 = new MutationObserver(() => {
            const _0x1555af = performance['now']();
            if (_0x1555af - _0x22c014 >= _0x5b6f0c['OBSERVER_THROTTLE']) {
                _0x22c014 = _0x1555af;
                _0x51cea8();
            }
        });
        _0x3b2e12['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
    }
    function _0x39c85d() {
        if (_0x4de222)
            return;
        if (!window['__fjSecChain'] || typeof window['__fjSecChain']['token'] !== 'number') {
            alert('❌\x20Authentication\x20Token\x20Invalid.');
            return;
        }
        _0x4de222 = !![];
        _0x20752c = ![];
        _0x521146();
        _0x465ea9();
        _0x5f20ee('Sniper\x20Active\x20for\x20' + _0x5ca030 + ':\x20₹' + _0x5d356c);
        _0x5564eb();
        _0x51cea8();
        _0x7ee122();
        if (!_0x13de2e) {
            _0x13de2e = setInterval(() => {
                if (!_0x4de222)
                    return;
                const _0xae9293 = document['querySelector']('button.van-dialog__confirm,\x20.van-popup\x20.van-icon-cross');
                if (_0xae9293 && !_0x7b04c9() && !_0x134d65()) {
                    _0xae9293['click']();
                }
            }, _0x5b6f0c['POPUP_DISMISS_INTERVAL']);
        }
        if (!_0x2d020f) {
            _0x2d020f = setInterval(async () => {
                if (!_0x4de222)
                    return;
                let _0x242bfe = null;
                try {
                    const _0x254a3e = localStorage['getItem']('userInfo');
                    const _0x303b37 = _0x254a3e ? JSON['parse'](_0x254a3e) : null;
                    _0x242bfe = String(_0x303b37?.['value']?.['memberId'] || _0x303b37?.['memberId'] || '')['trim']();
                } catch (_0xf79226) {
                }
                if (!_0x242bfe || _0x242bfe !== window['__fjSecChain']['mid']) {
                    window['__fjSecChain'] = null;
                    window['stopSniper']();
                    window['location']['reload']();
                    return;
                }
                const _0x761aed = await fetch(_0x5a19b1['EP'] + '?member_id=eq.' + encodeURIComponent(_0x242bfe) + '&active=eq.true&select=member_id', {
                    'headers': {
                        'apikey': _0x5a19b1['KEY'],
                        'Authorization': 'Bearer\x20' + _0x5a19b1['KEY']
                    }
                })['then'](_0x59597b => _0x59597b['json']())['catch'](() => []);
                if (!Array['isArray'](_0x761aed) || _0x761aed['length'] === 0x0) {
                    window['__fjSecChain'] = null;
                    window['stopSniper']();
                    alert('❌\x20Access\x20has\x20been\x20revoked\x20or\x20expired.');
                }
            }, _0x5b6f0c['SYNC_INTERVAL']);
        }
    }
    function _0x4870ee() {
        _0x4de222 = ![];
        _0x20752c = ![];
        if (_0x2dd414)
            clearTimeout(_0x2dd414);
        if (_0x13de2e)
            clearInterval(_0x13de2e);
        if (_0x2d020f)
            clearInterval(_0x2d020f);
        _0x13de2e = null;
        _0x2d020f = null;
        const _0x426cdf = document['getElementById']('sniper-start-btn');
        const _0x34b916 = document['getElementById']('sniper-stop-btn');
        if (_0x426cdf && _0x34b916) {
            _0x426cdf['style']['opacity'] = '1';
            _0x34b916['style']['opacity'] = '0.5';
        }
        if (!_0x7b04c9() && !_0x134d65()) {
            _0x1004c3();
        }
        document['querySelectorAll']('div.x-row.x-row-between,\x20div.van-card,\x20div[class*=\x22item\x22]')['forEach'](_0x24bd2e => {
            _0x24bd2e['style']['display'] = '';
            _0x24bd2e['style']['border'] = '';
        });
    }
    window['startSniper'] = _0x39c85d;
    window['stopSniper'] = _0x4870ee;
    _0x44d731();
    function _0x15c38f() {
        const _0x3e6801 = document['getElementById']('arbpay-dual-control');
        if (_0x3e6801)
            _0x3e6801['remove']();
        const _0xda681 = document['createElement']('div');
        _0xda681['id'] = 'arbpay-dual-control';
        Object['assign'](_0xda681['style'], {
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
        const _0x3d8455 = document['createElement']('select');
        _0x3d8455['id'] = 'sniper-mode-select';
        Object['assign'](_0x3d8455['style'], {
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
        const _0xc57db5 = document['createElement']('option');
        _0xc57db5['value'] = 'BANK';
        _0xc57db5['textContent'] = 'BANK';
        _0xc57db5['selected'] = !![];
        const _0x2503e0 = document['createElement']('option');
        _0x2503e0['value'] = 'OTP-UPI';
        _0x2503e0['textContent'] = 'OTP-UPI';
        _0x3d8455['appendChild'](_0xc57db5);
        _0x3d8455['appendChild'](_0x2503e0);
        const _0x340d0e = document['createElement']('input');
        _0x340d0e['id'] = 'sniper-amount-input';
        _0x340d0e['type'] = 'number';
        _0x340d0e['value'] = _0x5d356c;
        _0x340d0e['placeholder'] = 'Amt';
        Object['assign'](_0x340d0e['style'], {
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
        _0x3d8455['addEventListener']('change', _0x4bbcad => {
            _0x5ca030 = _0x4bbcad['target']['value'];
            if (_0x5ca030 === 'BANK' && _0x340d0e['value'] == 0x1f4) {
                _0x5d356c = 0x61a8;
                _0x340d0e['value'] = 0x61a8;
            } else if (_0x5ca030 === 'OTP-UPI' && _0x340d0e['value'] == 0x61a8) {
                _0x5d356c = 0x1f4;
                _0x340d0e['value'] = 0x1f4;
            }
            if (_0x4de222) {
                _0x465ea9();
                _0x5f20ee('Switched\x20to\x20' + _0x5ca030 + ':\x20₹' + _0x5d356c);
                _0x51cea8();
            }
        });
        _0x340d0e['addEventListener']('input', _0x45b165 => {
            const _0x56802c = Number(_0x45b165['target']['value']);
            if (_0x56802c > 0x0) {
                _0x5d356c = _0x56802c;
                if (_0x4de222) {
                    _0x5f20ee('Target\x20updated:\x20₹' + _0x5d356c);
                    _0x51cea8();
                }
            }
        });
        const _0x4c42f4 = document['createElement']('button');
        _0x4c42f4['id'] = 'sniper-start-btn';
        _0x4c42f4['textContent'] = 'START';
        Object['assign'](_0x4c42f4['style'], {
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
        const _0x50f103 = document['createElement']('button');
        _0x50f103['id'] = 'sniper-stop-btn';
        _0x50f103['textContent'] = 'STOP';
        Object['assign'](_0x50f103['style'], {
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
        _0x4c42f4['addEventListener']('click', () => {
            if (_0x4de222)
                return;
            const _0x50e57d = Number(_0x340d0e['value']);
            if (_0x50e57d > 0x0)
                _0x5d356c = _0x50e57d;
            _0x5ca030 = _0x3d8455['value'];
            _0x4c42f4['style']['opacity'] = '0.5';
            _0x50f103['style']['opacity'] = '1';
            _0x39c85d();
        });
        _0x50f103['addEventListener']('click', () => {
            _0x4c42f4['style']['opacity'] = '1';
            _0x50f103['style']['opacity'] = '0.5';
            _0x521146();
            _0x4870ee();
        });
        let _0x42ab1b = ![], _0x3f18c9, _0xc30aa2, _0x431d0b, _0x498477;
        _0xda681['addEventListener']('mousedown', _0x307a54 => {
            if (_0x307a54['target']['tagName'] === 'BUTTON' || _0x307a54['target']['tagName'] === 'INPUT' || _0x307a54['target']['tagName'] === 'SELECT')
                return;
            _0x42ab1b = !![];
            _0x3f18c9 = _0x307a54['clientX'];
            _0xc30aa2 = _0x307a54['clientY'];
            _0x431d0b = _0xda681['offsetLeft'];
            _0x498477 = _0xda681['offsetTop'];
            _0xda681['style']['right'] = 'auto';
        });
        window['addEventListener']('mousemove', _0x1fc458 => {
            if (!_0x42ab1b)
                return;
            _0xda681['style']['left'] = _0x431d0b + (_0x1fc458['clientX'] - _0x3f18c9) + 'px';
            _0xda681['style']['top'] = _0x498477 + (_0x1fc458['clientY'] - _0xc30aa2) + 'px';
        });
        window['addEventListener']('mouseup', () => {
            _0x42ab1b = ![];
        });
        _0xda681['appendChild'](_0x3d8455);
        _0xda681['appendChild'](_0x340d0e);
        _0xda681['appendChild'](_0x4c42f4);
        _0xda681['appendChild'](_0x50f103);
        document['body']['appendChild'](_0xda681);
    }
    _0x15c38f();
    _0x5564eb();
})());