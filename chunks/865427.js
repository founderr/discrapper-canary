n.d(t, {
    Ce: function () {
        return h;
    },
    Ji: function () {
        return E;
    },
    _G: function () {
        return g;
    },
    _I: function () {
        return p;
    },
    _S: function () {
        return I;
    },
    fD: function () {
        return m;
    },
    mG: function () {
        return A;
    },
    pU: function () {
        return f;
    },
    r4: function () {
        return C;
    }
});
var r = n(642549);
var i = n(47120);
var a = n(973361),
    o = n(729594),
    s = n(544891),
    l = n(358085),
    u = n(591759),
    c = n(908442);
n(981631);
let d = void 0,
    _ = '/__development/build_overrides',
    E = (0, l.isAndroid)() ? d.Version.split(' - ')[0] : (0, l.isIOS)() ? d.Version : void 0;
function f(e) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(e);
}
function h() {
    let e = u.Z.safeParseWithQuery(f(_));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          E && (e.query.version = E),
          s.tn
              .get({
                  url: o.format(e),
                  oldFormErrors: !0
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function p(e) {
    if (A(e)) return Promise.resolve(v(e));
    let t = u.Z.safeParseWithQuery(e);
    return null == t
        ? Promise.resolve(null)
        : ((t.search = null),
          (t.query.meta = 'true'),
          E && (t.query.version = E),
          (t.host = window.location.host),
          s.tn
              .get({
                  url: o.format(t),
                  oldFormErrors: !0
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function m() {
    return -1 !== window.document.cookie.indexOf(''.concat(c.ZF, '='));
}
function I() {
    try {
        var e;
        let t = a.parse(window.document.cookie)[c.ZF];
        if (null == t) return {};
        let n = JSON.parse(atob(t.substring(t.indexOf('.') + 1)));
        return null !== (e = n.$meta.experiments) && void 0 !== e ? e : {};
    } catch (e) {
        return {};
    }
}
let T = RegExp('^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$', 'i');
function g(e) {
    return null != e && T.test(e);
}
let S = RegExp('^dev://branch/([\\w-./]+)$', 'i');
function A(e) {
    return null != e && S.test(e);
}
function v(e) {
    let t = e.match(S);
    if (null == t || 2 !== t.length) return null;
    let n = (0, l.getNativePlatform)(),
        r = t[1];
    return {
        targetBuildOverride: {
            ['discord_'.concat(n)]: {
                type: 'branch',
                id: r
            }
        },
        validForUserIds: [],
        expiresAt: 'Mon, 1 Jan 2038 00:00:00 GMT'
    };
}
let N = 's',
    O = new Set(['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com']),
    R = new Set(['/__development/link', '/__development/link/']);
function C(e) {
    if (A(e))
        return {
            payload: null,
            url: e
        };
    let t = u.Z.safeParseWithQuery(e);
    if (null == t || !O.has(t.hostname) || !(N in t.query) || !R.has(t.pathname)) return null;
    for (let e in t.query) e !== N && delete t.query[e];
    return {
        payload: t.query[N],
        url: o.format(t)
    };
}
