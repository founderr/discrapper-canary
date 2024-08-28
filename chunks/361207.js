n.d(t, {
    DW: function () {
        return d;
    },
    Gn: function () {
        return E;
    },
    t3: function () {
        return _;
    },
    w4: function () {
        return u;
    }
});
var r = n(525654),
    i = n.n(r),
    a = n(271579),
    s = n(314897),
    o = n(981631);
let l = 'linux';
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(o.fzT.DESKTOP)
        .concat(t ? '/ptb' : '', '?platform=')
        .concat(e)
        .concat(null != n ? '&format='.concat(n) : '');
}
function c() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = i().os) || void 0 === e ? void 0 : e.family;
    return null == t ? 'win' : -1 !== t.indexOf('Ubuntu') || -1 !== t.indexOf('Debian') || -1 !== t.indexOf('Fedora') || -1 !== t.indexOf('Red Hat') || -1 !== t.indexOf('SuSE') || -1 !== t.indexOf('Linux') ? l : -1 !== t.indexOf('OS X') ? 'osx' : 'win';
}
function d(e) {
    return {
        win: 'Windows',
        osx: 'Mac',
        [l]: 'Linux'
    }[c(e)];
}
function _() {
    let e = c();
    return u(e, !1, e === l ? 'tar.gz' : null);
}
function E(e, t, n) {
    let r = null != n ? n.toString() : null;
    switch (t) {
        case 'iOS':
            return (0, a.ZP)(null != r ? r : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
                utmSource: e,
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, a.WS)()
            });
        case 'Android':
            return (0, a.ZP)(null != r ? r : 'https://play.google.com/store/apps/details', {
                utmSource: e,
                id: 'com.discord',
                fingerprint: s.default.getFingerprint(),
                attemptId: (0, a.WS)()
            });
        default:
            return null != r ? r : 'https://www.discord.com';
    }
}
