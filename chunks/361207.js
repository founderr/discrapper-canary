n.d(t, {
    DW: function () {
        return g;
    },
    Gn: function () {
        return A;
    },
    t3: function () {
        return S;
    },
    w4: function () {
        return I;
    }
});
var r = n(525654),
    i = n.n(r),
    a = n(271579),
    o = n(314897),
    s = n(981631);
let l = 'Ubuntu',
    u = 'Debian',
    c = 'Fedora',
    d = 'Red Hat',
    _ = 'SuSE',
    E = 'Linux',
    f = 'OS X',
    h = 'win',
    p = 'osx',
    m = 'linux';
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = t ? '/ptb' : '',
        i = null != n ? '&format='.concat(n) : '';
    return ''.concat(s.fzT.DESKTOP).concat(r, '?platform=').concat(e).concat(i);
}
function T() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (() => {
                  var e;
                  return null === (e = i().os) || void 0 === e ? void 0 : e.family;
              })();
    return null == e ? h : -1 !== e.indexOf(l) || -1 !== e.indexOf(u) || -1 !== e.indexOf(c) || -1 !== e.indexOf(d) || -1 !== e.indexOf(_) || -1 !== e.indexOf(E) ? m : -1 !== e.indexOf(f) ? p : h;
}
function g(e) {
    return {
        [h]: 'Windows',
        [p]: 'Mac',
        [m]: 'Linux'
    }[T(e)];
}
function S() {
    let e = T(),
        t = e === m ? 'tar.gz' : null;
    return I(e, !1, t);
}
function A(e, t, n) {
    let r = null != n ? n.toString() : null;
    switch (t) {
        case 'iOS':
            return (0, a.ZP)(null != r ? r : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
                utmSource: e,
                fingerprint: o.default.getFingerprint(),
                attemptId: (0, a.WS)()
            });
        case 'Android':
            return (0, a.ZP)(null != r ? r : 'https://play.google.com/store/apps/details', {
                utmSource: e,
                id: 'com.discord',
                fingerprint: o.default.getFingerprint(),
                attemptId: (0, a.WS)()
            });
        default:
            return null != r ? r : 'https://www.discord.com';
    }
}
