n.r(t),
    n.d(t, {
        fetchAssetIds: function () {
            return A;
        },
        getAssetFromImageURL: function () {
            return v;
        },
        getAssetIds: function () {
            return N;
        },
        getAssetImage: function () {
            return b;
        },
        getAssets: function () {
            return I;
        }
    }),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(512722),
    i = n.n(r),
    a = n(544891),
    s = n(570140),
    o = n(430449),
    l = n(710845),
    u = n(134432),
    c = n(981631);
let d = 'https://i.scdn.co/image/',
    f = (e, t, n) => 'https://static-cdn.jtvnw.net/previews-ttv/live_user_'.concat(e, '-').concat(t, 'x').concat(n, '.jpg'),
    _ = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    p = (e) => 'https://i.ytimg.com/vi/'.concat(e, '/hqdefault_live.jpg'),
    h = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    m = {
        [c.ABu.SPOTIFY]: {
            deserialize: (e) => ''.concat(d).concat(encodeURIComponent(e)),
            serialize: (e) => e.split(d)[1]
        },
        [c.ABu.TWITCH]: {
            deserialize: (e, t) => f(encodeURIComponent(e), t[0], t[1]),
            serialize: (e) => {
                let t = e.match(_);
                return null != t ? t[1] : null;
            }
        },
        [c.ABu.YOUTUBE]: {
            deserialize: (e) => p(encodeURIComponent(e)),
            serialize: (e) => {
                let t = e.match(h);
                return null != t ? t[1] : null;
            }
        },
        mp: {
            deserialize: (e) => (i()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, 'MEDIA_PROXY_ENDPOINT not configured'), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
            serialize: (e) => e
        }
    },
    g = {};
async function E(e) {
    let { body: t } = await a.tn.get({
        url: c.ANM.APPLICATION_ASSETS(e),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return (
        s.Z.dispatch({
            type: 'APPLICATION_ASSETS_UPDATE',
            applicationId: e,
            assets: t
        }),
        o.Z.getApplicationAssets(e)
    );
}
function v(e, t) {
    let n = m[e].serialize(t);
    return n ? ''.concat(e, ':').concat(n.toString()) : null;
}
function b(e, t, n) {
    if (null != t && t.includes(':')) {
        let [e, r] = t.split(':');
        if (e === c.ABu.TWITCH) {
            if (null == n || 'number' == typeof n) {
                new l.Z('ApplicationAssetUtils').warn('getAssetImage: size must === [number, number] for Twitch');
                return;
            }
            return m[c.ABu.TWITCH].deserialize(r, n);
        }
        return Object.prototype.hasOwnProperty.call(m, e) ? m[e].deserialize(r) : void 0;
    }
    if (null == e || null == t) return;
    let r = Array.isArray(n) ? Math.max(...n) : n,
        i = 'number' == typeof r ? '?size='.concat((0, u.oO)(r)) : '';
    return null != window.GLOBAL_ENV.CDN_HOST
        ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/app-assets/').concat(e, '/').concat(t, '.png').concat(i)
        : ''
              .concat((0, a.K0)(), '/applications/')
              .concat(e, '/app-assets/')
              .concat(t, '.png')
              .concat(i);
}
async function I(e) {
    let t = await (function (e) {
        var t;
        let n = o.Z.getApplicationAssets(e);
        return null == n || ((t = n.lastUpdated), Date.now() - t > 3600000) ? E(e) : Promise.resolve(n);
    })(e);
    return null == t ? void 0 : t.assets;
}
async function S(e, t) {
    let n = t.filter((e) => null != e && !Object.prototype.hasOwnProperty.call(g, e) && null == g[e]);
    if (0 === n.length) return;
    let { body: r } = await a.tn.post({
        url: c.ANM.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    for (let { url: e, external_asset_path: t } of r) g[e] = t;
}
function T(e, t) {
    let n = 0;
    if (e.filter((e) => (null == e ? void 0 : e.startsWith('http:')) || (null == e ? void 0 : e.startsWith('https:'))).length > 0)
        for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (null == i) continue;
            let a = Object.prototype.hasOwnProperty.call(g, i) ? g[i] : void 0;
            null != a && ((t[r] = v('mp', a)), n++);
        }
    return n === e.length;
}
function y(e, t, n, r) {
    let i = !1;
    for (let a = 0; a < e.length; a++) {
        let s = e[a];
        if (null == s || null != t[a]) continue;
        let o = Object.prototype.hasOwnProperty.call(n, s) && n[s];
        if (!o) {
            if (null == r || r <= 0) {
                t[a] = null;
                continue;
            }
            i = !0;
        }
        t[a] = o.id;
    }
    return i;
}
async function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    s.Z.dispatch({
        type: 'APPLICATION_ASSETS_FETCH',
        applicationId: e
    });
    let r = [],
        i = t.filter((e) => (null == e ? void 0 : e.startsWith('http:')) || (null == e ? void 0 : e.startsWith('https:')));
    if ((i.length > 0 && (await S(e, i)), T(t, r)))
        return (
            s.Z.dispatch({
                type: 'APPLICATION_ASSETS_FETCH_SUCCESS',
                applicationId: e
            }),
            r
        );
    let a = await I(e);
    return (s.Z.dispatch({
        type: 'APPLICATION_ASSETS_UPDATE',
        applicationId: e,
        assets: a
    }),
    y(t, r, a, n))
        ? E(e).then(() => A(e, t, n - 1))
        : (s.Z.dispatch({
              type: 'APPLICATION_ASSETS_FETCH_SUCCESS',
              applicationId: e
          }),
          r);
}
function N(e, t) {
    var n;
    let r = [];
    if (T(t, r)) return r;
    let i = null === (n = o.Z.getApplicationAssets(e)) || void 0 === n ? void 0 : n.assets;
    return null == i ? r : (y(t, r, i), r);
}
