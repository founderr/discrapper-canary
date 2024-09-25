n.r(t),
    n.d(t, {
        fetchAssetIds: function () {
            return w;
        },
        getAssetFromImageURL: function () {
            return b;
        },
        getAssetIds: function () {
            return x;
        },
        getAssetImage: function () {
            return L;
        },
        getAssets: function () {
            return D;
        }
    });
var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(512722),
    c = n.n(u),
    d = n(544891),
    _ = n(570140),
    E = n(430449),
    f = n(710845),
    h = n(134432),
    p = n(981631);
let m = 'mp',
    I = 3600000,
    T = 'https://i.scdn.co/image/',
    g = (e, t, n) => 'https://static-cdn.jtvnw.net/previews-ttv/live_user_'.concat(e, '-').concat(t, 'x').concat(n, '.jpg'),
    S = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    A = (e) => 'https://i.ytimg.com/vi/'.concat(e, '/hqdefault_live.jpg'),
    v = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    N = {
        [p.ABu.SPOTIFY]: {
            deserialize: (e) => ''.concat(T).concat(encodeURIComponent(e)),
            serialize: (e) => e.split(T)[1]
        },
        [p.ABu.TWITCH]: {
            deserialize: (e, t) => g(encodeURIComponent(e), t[0], t[1]),
            serialize: (e) => {
                let t = e.match(S);
                return null != t ? t[1] : null;
            }
        },
        [p.ABu.YOUTUBE]: {
            deserialize: (e) => A(encodeURIComponent(e)),
            serialize: (e) => {
                let t = e.match(v);
                return null != t ? t[1] : null;
            }
        },
        [m]: {
            deserialize: (e) => (c()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, 'MEDIA_PROXY_ENDPOINT not configured'), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
            serialize: (e) => e
        }
    },
    O = {};
function R(e) {
    return Date.now() - e > I;
}
async function C(e) {
    let { body: t } = await d.tn.get({
        url: p.ANM.APPLICATION_ASSETS(e),
        oldFormErrors: !0
    });
    return (
        _.Z.dispatch({
            type: 'APPLICATION_ASSETS_UPDATE',
            applicationId: e,
            assets: t
        }),
        E.Z.getApplicationAssets(e)
    );
}
function y(e) {
    let t = E.Z.getApplicationAssets(e);
    return null == t || R(t.lastUpdated) ? C(e) : Promise.resolve(t);
}
function b(e, t) {
    let n = N[e].serialize(t);
    return n ? ''.concat(e, ':').concat(n.toString()) : null;
}
function L(e, t, n) {
    if (null != t && t.includes(':')) {
        let [e, r] = t.split(':');
        if (e === p.ABu.TWITCH) {
            if (null == n || 'number' == typeof n) {
                new f.Z('ApplicationAssetUtils').warn('getAssetImage: size must === [number, number] for Twitch');
                return;
            }
            return N[p.ABu.TWITCH].deserialize(r, n);
        }
        return Object.prototype.hasOwnProperty.call(N, e) ? N[e].deserialize(r) : void 0;
    }
    if (null == e || null == t) return;
    let r = Array.isArray(n) ? Math.max(...n) : n,
        i = 'number' == typeof r ? '?size='.concat((0, h.oO)(r)) : '';
    return null != window.GLOBAL_ENV.CDN_HOST
        ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/app-assets/').concat(e, '/').concat(t, '.png').concat(i)
        : ''
              .concat((0, d.K0)(), '/applications/')
              .concat(e, '/app-assets/')
              .concat(t, '.png')
              .concat(i);
}
async function D(e) {
    let t = await y(e);
    return null == t ? void 0 : t.assets;
}
async function M(e, t) {
    let n = t.filter((e) => null != e && !Object.prototype.hasOwnProperty.call(O, e) && null == O[e]);
    if (0 === n.length) return;
    let { body: r } = await d.tn.post({
        url: p.ANM.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0
    });
    for (let { url: e, external_asset_path: t } of r) O[e] = t;
}
function P(e, t) {
    let n = 0;
    if (e.filter((e) => (null == e ? void 0 : e.startsWith('http:')) || (null == e ? void 0 : e.startsWith('https:'))).length > 0)
        for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (null == i) continue;
            let a = Object.prototype.hasOwnProperty.call(O, i) ? O[i] : void 0;
            null != a && ((t[r] = b(m, a)), n++);
        }
    return n === e.length;
}
function U(e, t, n, r) {
    let i = !1;
    for (let a = 0; a < e.length; a++) {
        let o = e[a];
        if (null == o || null != t[a]) continue;
        let s = Object.prototype.hasOwnProperty.call(n, o) && n[o];
        if (!s) {
            if (null == r || r <= 0) {
                t[a] = null;
                continue;
            }
            i = !0;
        }
        t[a] = s.id;
    }
    return i;
}
async function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    _.Z.dispatch({
        type: 'APPLICATION_ASSETS_FETCH',
        applicationId: e
    });
    let r = [],
        i = t.filter((e) => (null == e ? void 0 : e.startsWith('http:')) || (null == e ? void 0 : e.startsWith('https:')));
    if ((i.length > 0 && (await M(e, i)), P(t, r)))
        return (
            _.Z.dispatch({
                type: 'APPLICATION_ASSETS_FETCH_SUCCESS',
                applicationId: e
            }),
            r
        );
    let a = await D(e);
    return (_.Z.dispatch({
        type: 'APPLICATION_ASSETS_UPDATE',
        applicationId: e,
        assets: a
    }),
    U(t, r, a, n))
        ? C(e).then(() => w(e, t, n - 1))
        : (_.Z.dispatch({
              type: 'APPLICATION_ASSETS_FETCH_SUCCESS',
              applicationId: e
          }),
          r);
}
function x(e, t) {
    var n;
    let r = [];
    if (P(t, r)) return r;
    let i = null === (n = E.Z.getApplicationAssets(e)) || void 0 === n ? void 0 : n.assets;
    return null == i ? r : (U(t, r, i), r);
}
