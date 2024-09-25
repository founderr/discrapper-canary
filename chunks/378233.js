n.d(t, {
    B0: function () {
        return L;
    },
    Hc: function () {
        return U;
    },
    J8: function () {
        return w;
    },
    Q6: function () {
        return y;
    },
    V9: function () {
        return k;
    },
    WD: function () {
        return P;
    },
    X_: function () {
        return D;
    },
    Zt: function () {
        return N;
    },
    Zv: function () {
        return R;
    },
    _V: function () {
        return C;
    },
    cv: function () {
        return G;
    },
    gM: function () {
        return Z;
    },
    jl: function () {
        return x;
    },
    sM: function () {
        return b;
    },
    z: function () {
        return M;
    }
});
var r = n(411104);
var i = n(606301),
    a = n(134432),
    o = n(581883),
    s = n(430824),
    l = n(117530),
    u = n(768581),
    c = n(358085),
    d = n(913663),
    _ = n(373228),
    E = n(611480),
    f = n(981631);
let { API_ENDPOINT: h, MEDIA_PROXY_ENDPOINT: p, PROJECT_ENV: m, ASSET_ENDPOINT: I, CDN_HOST: T } = window.GLOBAL_ENV,
    g = Object.values(_.og),
    S = decodeURIComponent(f.ANM.STICKER_ASSET('[\\d]+', '('.concat(g.join('|'), ')'))),
    A = RegExp('('.concat(location.protocol).concat(I, '|').concat(location.protocol).concat(p, ')(').concat(S, ')'), 'ig'),
    v = RegExp(''.concat(location.protocol).concat(h, '(').concat(S, ')'), 'ig'),
    N = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    O = (e) => {
        switch (e) {
            case _.u3.PNG:
                return u.$k ? _.og.WEBP : _.og.PNG;
            case _.u3.APNG:
                return _.og.APNG;
            case _.u3.LOTTIE:
                return _.og.LOTTIE;
            case _.u3.GIF:
                return _.og.GIF;
            default:
                throw Error('Unexpected format type: '.concat(e));
        }
    },
    R = (e) => {
        switch (e) {
            case 'application/json':
                return _.u3.LOTTIE;
            case 'image/apng':
                return _.u3.APNG;
            case 'image/png':
            case 'image/webp':
                return _.u3.PNG;
            case 'image/gif':
                return _.u3.GIF;
            default:
                throw Error('Unexpected file type: '.concat(e));
        }
    },
    C = (e) => (null == e ? null : ''.concat(e.name, '.').concat(O(e.format_type))),
    y = function (e) {
        let { isPreview: t = !1, size: n = E.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let r = e.format_type;
        e.format_type === _.u3.GIF && t && (r = _.u3.PNG);
        let i = O(r),
            o = f.ANM.STICKER_ASSET(e.id, i),
            s = i === _.og.WEBP ? '&quality=lossless' : '';
        if ('development' !== m) {
            if (e.format_type === _.u3.LOTTIE) return ''.concat(location.protocol).concat(I).concat(o);
            let r = e.format_type === _.u3.APNG && t && !(0, c.isAndroid)() ? '&passthrough=false' : '',
                i = Math.min(2, (0, a.x_)());
            return ''
                .concat(location.protocol)
                .concat(p)
                .concat(o, '?size=')
                .concat((0, a.oO)(n * i))
                .concat(r)
                .concat(s);
        }
        return ''.concat(location.protocol).concat(h).concat(o);
    },
    b = (e, t) => {
        let n;
        let r = e.banner_asset_id;
        if (null == r) return null;
        let i = u.$k ? 'webp' : 'png';
        return (
            (n =
                null != T
                    ? ''.concat(location.protocol, '//').concat(T, '/app-assets/').concat(E.Ks, '/store/').concat(r, '.').concat(i)
                    : ''
                          .concat(location.protocol)
                          .concat(h)
                          .concat(f.ANM.STORE_ASSET(E.Ks, r, i))),
            null != t && (n += '?size='.concat((0, a.oO)(t))),
            n
        );
    },
    L = (e) => e.match('development' !== m ? A : v),
    D = (e) =>
        e.stickers.some((e) => {
            let { format_type: t } = e;
            return t === _.u3.APNG || t === _.u3.LOTTIE || t === _.u3.GIF;
        }),
    M = (e) => ({
        type: _.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: N(e)
    }),
    P = (e, t) => (e === E.yr.ANIMATE_ON_INTERACTION ? t : e !== E.yr.NEVER_ANIMATE),
    U = (e, t, n, r) => {
        if (l.Z.getUploadCount(n, r) > 0) return !0;
        let a = d.Z.getStickerPreview(n, r);
        if (null != a && a.length > 0) return !0;
        switch (e) {
            case _.V0.STICKER_PICKER:
                return '' !== t.trim();
            case _.V0.AUTOCOMPLETE:
            case _.V0.EXPRESSION_SUGGESTIONS:
                return (0, i.wN)(t).length > 1;
            case _.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    w = (e) => e.type === _.n0.GUILD,
    x = (e) => e.type === _.n0.STANDARD,
    G = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    k = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== s.Z.getGuild(t);
    },
    B = [];
function F() {
    var e, t;
    return null !== (t = null === (e = o.Z.frecencyWithoutFetchingLatest.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : B;
}
function Z(e) {
    return F().includes(e);
}
