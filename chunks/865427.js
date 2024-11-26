n.d(t, {
    Ce: function () {
        return f;
    },
    Ji: function () {
        return c;
    },
    _G: function () {
        return g;
    },
    _I: function () {
        return _;
    },
    _S: function () {
        return h;
    },
    fD: function () {
        return p;
    },
    mG: function () {
        return v;
    },
    pU: function () {
        return d;
    },
    r4: function () {
        return b;
    }
}),
    n(642549),
    n(47120);
var r = n(973361),
    i = n(729594),
    a = n(544891),
    s = n(358085),
    o = n(591759),
    l = n(908442);
n(981631);
let u = void 0,
    c = (0, s.isAndroid)() ? u.Version.split(' - ')[0] : (0, s.isIOS)() ? u.Version : void 0;
function d(e) {
    return ''.concat(location.protocol, '//').concat(location.host).concat(e);
}
function f() {
    let e = o.Z.safeParseWithQuery(d('/__development/build_overrides'));
    return null == e
        ? Promise.resolve(null)
        : ((e.search = null),
          c && (e.query.version = c),
          a.tn
              .get({
                  url: i.format(e),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function _(e) {
    if (v(e))
        return Promise.resolve(
            (function (e) {
                let t = e.match(E);
                if (null == t || 2 !== t.length) return null;
                let n = (0, s.getNativePlatform)(),
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
            })(e)
        );
    let t = o.Z.safeParseWithQuery(e);
    return null == t
        ? Promise.resolve(null)
        : ((t.search = null),
          (t.query.meta = 'true'),
          c && (t.query.version = c),
          (t.host = window.location.host),
          a.tn
              .get({
                  url: i.format(t),
                  oldFormErrors: !0,
                  rejectWithError: !1
              })
              .then(
                  (e) => e.body || null,
                  () => null
              ));
}
function p() {
    return -1 !== window.document.cookie.indexOf(''.concat(l.ZF, '='));
}
function h() {
    try {
        var e;
        let t = r.parse(window.document.cookie)[l.ZF];
        if (null == t) return {};
        let n = JSON.parse(atob(t.substring(t.indexOf('.') + 1)));
        return null !== (e = n.$meta.experiments) && void 0 !== e ? e : {};
    } catch (e) {
        return {};
    }
}
let m = RegExp('^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$', 'i');
function g(e) {
    return null != e && m.test(e);
}
let E = RegExp('^dev://branch/([\\w-./]+)$', 'i');
function v(e) {
    return null != e && E.test(e);
}
let I = new Set(['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com']),
    T = new Set(['/__development/link', '/__development/link/']);
function b(e) {
    if (v(e))
        return {
            payload: null,
            url: e
        };
    let t = o.Z.safeParseWithQuery(e);
    if (null == t || !I.has(t.hostname) || !('s' in t.query) || !T.has(t.pathname)) return null;
    for (let e in t.query) 's' !== e && delete t.query[e];
    return {
        payload: t.query.s,
        url: i.format(t)
    };
}
