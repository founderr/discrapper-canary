n.d(t, {
    BH: function () {
        return T;
    },
    Cs: function () {
        return S;
    },
    G1: function () {
        return E;
    },
    IC: function () {
        return P;
    },
    OT: function () {
        return w;
    },
    XM: function () {
        return h;
    },
    XS: function () {
        return L;
    },
    Yq: function () {
        return x;
    },
    aj: function () {
        return y;
    },
    bl: function () {
        return b;
    },
    f_: function () {
        return I;
    },
    iC: function () {
        return R;
    },
    mO: function () {
        return D;
    },
    qS: function () {
        return f;
    },
    ql: function () {
        return m;
    },
    rN: function () {
        return g;
    },
    uV: function () {
        return C;
    },
    x6: function () {
        return G;
    }
});
var r = n(724458);
var i = n(47120);
var a = n(392711);
var o = n(979554),
    s = n(134432),
    l = n(937615),
    u = n(922347),
    c = n(212161),
    d = n(215023),
    _ = n(981631);
let E = (e) => (null == e ? void 0 : e.premiumType) != null,
    f = (e) => (null == e ? void 0 : e.purchaseType) === _.qc2.PREMIUM_PURCHASE,
    h = (e, t, n) => {
        let r;
        let i = m(e, (r = n ? (t ? _.tuJ.MOBILE_PREMIUM_TIER_2 : _.tuJ.MOBILE) : t ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT));
        return null == i ? '' : (0, l.T4)(null == i ? void 0 : i.amount, null == i ? void 0 : i.currency);
    },
    p = (e) => {
        let t = e.bundledProducts;
        return null == t
            ? 0
            : t.reduce((e, t) => {
                  var n;
                  let r = m(t, _.tuJ.DEFAULT);
                  return e + (null !== (n = null == r ? void 0 : r.amount) && void 0 !== n ? n : 0);
              }, 0);
    },
    m = (e, t) => {
        var n, r, i;
        let a = null !== (i = e.prices[t]) && void 0 !== i ? i : null;
        return null == a ? null : null === (r = a.countryPrices) || void 0 === r ? void 0 : null === (n = r.prices) || void 0 === n ? void 0 : n[0];
    },
    I = {
        original: -1,
        discountPercentage: -1
    },
    T = (e, t) => {
        let n = p(e);
        if (n <= 0) return I;
        let r = m(e, t ? _.tuJ.PREMIUM_TIER_2 : _.tuJ.DEFAULT);
        return null == r
            ? I
            : {
                  original: n,
                  discountPercentage: Math.floor(((n - r.amount) / n) * 100)
              };
    },
    g = (e) => {
        var t;
        return (null === (t = m(e, _.tuJ.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0;
    },
    S = (e) => {
        let t = (0, a.flatMap)([...e.values()], 'products');
        return (0, a.uniqBy)(t, 'storeListingId');
    },
    A = (e, t) => {
        if (t === o.Z.AVATAR_DECORATION) {
            let t = (0, a.flatMap)([...e.values()], 'items').filter(u.M);
            return (0, a.uniqBy)(t, 'id');
        }
        if (t === o.Z.PROFILE_EFFECT) {
            let t = (0, a.flatMap)([...e.values()], 'items').filter(c.H);
            return (0, a.uniqBy)(t, 'id');
        }
    },
    v = (e, t) => {
        let n = S(e);
        if (t === o.Z.AVATAR_DECORATION) {
            let e = (0, a.flatMap)(n, 'items').filter(u.M);
            return (0, a.uniqBy)(e, 'id');
        }
        if (t === o.Z.PROFILE_EFFECT) {
            let e = (0, a.flatMap)(n, 'items').filter(c.H);
            return (0, a.uniqBy)(e, 'id');
        }
    },
    N = (e) => A(e, o.Z.AVATAR_DECORATION),
    O = (e) => v(e, o.Z.AVATAR_DECORATION),
    R = (e, t) => (0, a.uniqBy)([...N(e), ...O(t)], 'id'),
    C = (e, t) => {
        var n;
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            a = (0, s.oO)(t.size * (0, s.x_)()),
            o = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : 'png';
        if (null != r) return ''.concat(location.protocol, '//').concat(r, '/app-assets/').concat(_.XAJ, '/').concat(e, '.').concat(o, '?size=').concat(a);
        let l = _.ANM.APPLICATION_ASSET(_.XAJ, e, o);
        return ''.concat(location.protocol).concat(i).concat(l, '?size=').concat(a);
    },
    y = (e) => A(e, o.Z.PROFILE_EFFECT),
    L = (e) => v(e, o.Z.PROFILE_EFFECT),
    b = (e, t) => {
        let n = y(t),
            r = L(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r
        };
    },
    D = (e) => e.applicationId === _.XAJ,
    M = 3.8,
    P = (e) => M * e,
    U = 86400000,
    w = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / U);
    },
    x = (e) => {
        let t = d.yf[e];
        return null != t && new Date().getTime() < t;
    },
    G = (e) => (null == e ? void 0 : e.type) === o.Z.BUNDLE;
