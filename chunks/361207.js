r.d(n, {
    DW: function () {
        return T;
    },
    Gn: function () {
        return y;
    },
    t3: function () {
        return b;
    },
    w4: function () {
        return v;
    }
});
var i = r(525654),
    a = r.n(i),
    s = r(271579),
    o = r(314897),
    l = r(981631);
let u = 'Ubuntu',
    c = 'Debian',
    d = 'Fedora',
    f = 'Red Hat',
    _ = 'SuSE',
    h = 'Linux',
    p = 'OS X',
    m = 'win',
    g = 'osx',
    E = 'linux';
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0,
        i = n ? '/ptb' : '',
        a = null != r ? '&format='.concat(r) : '';
    return ''.concat(l.fzT.DESKTOP).concat(i, '?platform=').concat(e).concat(a);
}
function I() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (() => {
                  var e;
                  return null === (e = a().os) || void 0 === e ? void 0 : e.family;
              })();
    return null == e ? m : -1 !== e.indexOf(u) || -1 !== e.indexOf(c) || -1 !== e.indexOf(d) || -1 !== e.indexOf(f) || -1 !== e.indexOf(_) || -1 !== e.indexOf(h) ? E : -1 !== e.indexOf(p) ? g : m;
}
function T(e) {
    return {
        [m]: 'Windows',
        [g]: 'Mac',
        [E]: 'Linux'
    }[I(e)];
}
function b() {
    let e = I(),
        n = e === E ? 'tar.gz' : null;
    return v(e, !1, n);
}
function y(e, n, r) {
    let i = null != r ? r.toString() : null;
    switch (n) {
        case 'iOS':
            return (0, s.ZP)(null != i ? i : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
                utmSource: e,
                fingerprint: o.default.getFingerprint(),
                attemptId: (0, s.WS)()
            });
        case 'Android':
            return (0, s.ZP)(null != i ? i : 'https://play.google.com/store/apps/details', {
                utmSource: e,
                id: 'com.discord',
                fingerprint: o.default.getFingerprint(),
                attemptId: (0, s.WS)()
            });
        default:
            return null != i ? i : 'https://www.discord.com';
    }
}
