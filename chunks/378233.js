n.d(t, {
    B0: function () {
        return O;
    },
    Hc: function () {
        return w;
    },
    J8: function () {
        return M;
    },
    Q6: function () {
        return C;
    },
    V9: function () {
        return U;
    },
    WD: function () {
        return x;
    },
    X_: function () {
        return D;
    },
    Zt: function () {
        return T;
    },
    Zv: function () {
        return A;
    },
    _V: function () {
        return N;
    },
    cv: function () {
        return k;
    },
    gM: function () {
        return B;
    },
    jl: function () {
        return P;
    },
    sM: function () {
        return R;
    },
    z: function () {
        return L;
    }
}),
    n(411104);
var r = n(606301),
    i = n(134432),
    a = n(581883),
    s = n(430824),
    o = n(117530),
    l = n(768581),
    u = n(358085),
    c = n(913663),
    d = n(373228),
    f = n(611480),
    _ = n(981631);
let { API_ENDPOINT: p, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: m, ASSET_ENDPOINT: g, CDN_HOST: E } = window.GLOBAL_ENV,
    v = Object.values(d.og),
    I = decodeURIComponent(_.ANM.STICKER_ASSET('[\\d]+', '('.concat(v.join('|'), ')'))),
    b = RegExp('('.concat(location.protocol).concat(g, '|').concat(location.protocol).concat(h, ')(').concat(I, ')'), 'ig'),
    S = RegExp(''.concat(location.protocol).concat(p, '(').concat(I, ')'), 'ig'),
    T = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    y = (e) => {
        switch (e) {
            case d.u3.PNG:
                return l.$k ? d.og.WEBP : d.og.PNG;
            case d.u3.APNG:
                return d.og.APNG;
            case d.u3.LOTTIE:
                return d.og.LOTTIE;
            case d.u3.GIF:
                return d.og.GIF;
            default:
                throw Error('Unexpected format type: '.concat(e));
        }
    },
    A = (e) => {
        switch (e) {
            case 'application/json':
                return d.u3.LOTTIE;
            case 'image/apng':
                return d.u3.APNG;
            case 'image/png':
            case 'image/webp':
                return d.u3.PNG;
            case 'image/gif':
                return d.u3.GIF;
            default:
                throw Error('Unexpected file type: '.concat(e));
        }
    },
    N = (e) => (null == e ? null : ''.concat(e.name, '.').concat(y(e.format_type))),
    C = function (e) {
        let { isPreview: t = !1, size: n = f.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let r = e.format_type;
        e.format_type === d.u3.GIF && t && (r = d.u3.PNG);
        let a = y(r),
            s = _.ANM.STICKER_ASSET(e.id, a),
            o = a === d.og.WEBP ? '&quality=lossless' : '';
        if ('development' !== m) {
            if (e.format_type === d.u3.LOTTIE) return ''.concat(location.protocol).concat(g).concat(s);
            let r = e.format_type === d.u3.APNG && t && !(0, u.isAndroid)() ? '&passthrough=false' : '',
                a = Math.min(2, (0, i.x_)());
            return ''
                .concat(location.protocol)
                .concat(h)
                .concat(s, '?size=')
                .concat((0, i.oO)(n * a))
                .concat(r)
                .concat(o);
        }
        return ''.concat(location.protocol).concat(p).concat(s);
    },
    R = (e, t) => {
        let n;
        let r = e.banner_asset_id;
        if (null == r) return null;
        let a = l.$k ? 'webp' : 'png';
        return (
            (n =
                null != E
                    ? ''.concat(location.protocol, '//').concat(E, '/app-assets/').concat(f.Ks, '/store/').concat(r, '.').concat(a)
                    : ''
                          .concat(location.protocol)
                          .concat(p)
                          .concat(_.ANM.STORE_ASSET(f.Ks, r, a))),
            null != t && (n += '?size='.concat((0, i.oO)(t))),
            n
        );
    },
    O = (e) => null != e.match('development' !== m ? b : S),
    D = (e) =>
        e.stickers.some((e) => {
            let { format_type: t } = e;
            return t === d.u3.APNG || t === d.u3.LOTTIE || t === d.u3.GIF;
        }),
    L = (e) => ({
        type: d.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: T(e)
    }),
    x = (e, t) => (e === f.yr.ANIMATE_ON_INTERACTION ? t : e !== f.yr.NEVER_ANIMATE),
    w = (e, t, n, i) => {
        if (o.Z.getUploadCount(n, i) > 0) return !0;
        let a = c.Z.getStickerPreview(n, i);
        if (null != a && a.length > 0) return !0;
        switch (e) {
            case d.V0.STICKER_PICKER:
                return '' !== t.trim();
            case d.V0.AUTOCOMPLETE:
            case d.V0.EXPRESSION_SUGGESTIONS:
                return (0, r.wN)(t).length > 1;
            case d.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    M = (e) => e.type === d.n0.GUILD,
    P = (e) => e.type === d.n0.STANDARD,
    k = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    U = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== s.Z.getGuild(t);
    },
    G = [];
function B(e) {
    var t, n;
    return (null !== (n = null === (t = a.Z.frecencyWithoutFetchingLatest.favoriteStickers) || void 0 === t ? void 0 : t.stickerIds) && void 0 !== n ? n : G).includes(e);
}
