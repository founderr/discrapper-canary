n.d(t, {
    DW: function () {
        return d;
    },
    Gn: function () {
        return g;
    },
    t3: function () {
        return h;
    },
    w4: function () {
        return c;
    }
});
var i = n(525654),
    r = n.n(i),
    u = n(271579),
    l = n(314897),
    a = n(981631);
let o = 'linux';
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return ''
        .concat(a.fzT.DESKTOP)
        .concat(t ? '/ptb' : '', '?platform=')
        .concat(e)
        .concat(null != n ? '&format='.concat(n) : '');
}
function s() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = r().os) || void 0 === e ? void 0 : e.family;
    return null == t ? 'win' : -1 !== t.indexOf('Ubuntu') || -1 !== t.indexOf('Debian') || -1 !== t.indexOf('Fedora') || -1 !== t.indexOf('Red Hat') || -1 !== t.indexOf('SuSE') || -1 !== t.indexOf('Linux') ? o : -1 !== t.indexOf('OS X') ? 'osx' : 'win';
}
function d(e) {
    return {
        win: 'Windows',
        osx: 'Mac',
        [o]: 'Linux'
    }[s(e)];
}
function h() {
    let e = s();
    return c(e, !1, e === o ? 'tar.gz' : null);
}
function g(e, t, n) {
    let i = null != n ? n.toString() : null;
    switch (t) {
        case 'iOS':
            return (0, u.ZP)(null != i ? i : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
                utmSource: e,
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, u.WS)()
            });
        case 'Android':
            return (0, u.ZP)(null != i ? i : 'https://play.google.com/store/apps/details', {
                utmSource: e,
                id: 'com.discord',
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, u.WS)()
            });
        default:
            return null != i ? i : 'https://www.discord.com';
    }
}
