n.d(t, {
    BH: function () {
        return m;
    },
    Cs: function () {
        return S;
    },
    G1: function () {
        return d;
    },
    IC: function () {
        return b;
    },
    OT: function () {
        return M;
    },
    Vw: function () {
        return E;
    },
    XM: function () {
        return f;
    },
    XS: function () {
        return L;
    },
    Yq: function () {
        return P;
    },
    aj: function () {
        return C;
    },
    bl: function () {
        return D;
    },
    eu: function () {
        return w;
    },
    f_: function () {
        return I;
    },
    iC: function () {
        return O;
    },
    mO: function () {
        return y;
    },
    qS: function () {
        return _;
    },
    ql: function () {
        return p;
    },
    rN: function () {
        return T;
    },
    uV: function () {
        return v;
    },
    x0: function () {
        return x;
    },
    x6: function () {
        return U;
    }
}),
    n(724458),
    n(47120),
    n(653041);
var r = n(392711),
    i = n(979554),
    a = n(134432),
    s = n(937615),
    o = n(922347),
    l = n(212161),
    u = n(215023),
    c = n(981631);
let d = (e) => (null == e ? void 0 : e.premiumType) != null,
    _ = (e) => (null == e ? void 0 : e.purchaseType) === c.qc2.PREMIUM_PURCHASE,
    E = (e, t, n) => {
        let r;
        return p(e, (r = n ? (t ? c.tuJ.MOBILE_PREMIUM_TIER_2 : c.tuJ.MOBILE) : t ? c.tuJ.PREMIUM_TIER_2 : c.tuJ.DEFAULT));
    },
    f = (e, t, n) => {
        let r = E(e, t, n);
        return null == r ? '' : (0, s.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    h = (e) => {
        let t = e.bundledProducts;
        return null == t
            ? 0
            : t.reduce((e, t) => {
                  var n;
                  let r = p(t, c.tuJ.DEFAULT);
                  return e + (null !== (n = null == r ? void 0 : r.amount) && void 0 !== n ? n : 0);
              }, 0);
    },
    p = (e, t) => {
        var n, r, i;
        let a = null !== (i = e.prices[t]) && void 0 !== i ? i : null;
        return null == a ? null : null === (r = a.countryPrices) || void 0 === r ? void 0 : null === (n = r.prices) || void 0 === n ? void 0 : n[0];
    },
    I = {
        original: -1,
        discountPercentage: -1
    },
    m = (e, t) => {
        let n = h(e);
        if (n <= 0) return I;
        let r = p(e, t ? c.tuJ.PREMIUM_TIER_2 : c.tuJ.DEFAULT);
        return null == r
            ? I
            : {
                  original: n,
                  discountPercentage: Math.floor(((n - r.amount) / n) * 100)
              };
    },
    T = (e) => {
        var t;
        return (null === (t = p(e, c.tuJ.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0;
    },
    S = (e) => {
        let t = (0, r.flatMap)([...e.values()], 'products');
        return (0, r.uniqBy)(t, 'storeListingId');
    },
    g = (e, t) => {
        if (t === i.Z.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(o.M);
            return (0, r.uniqBy)(t, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(l.H);
            return (0, r.uniqBy)(t, 'id');
        }
    },
    A = (e, t) => {
        let n = S(e);
        if (t === i.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, 'items').filter(o.M);
            return (0, r.uniqBy)(e, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, 'items').filter(l.H);
            return (0, r.uniqBy)(e, 'id');
        }
    },
    N = (e) => g(e, i.Z.AVATAR_DECORATION),
    R = (e) => A(e, i.Z.AVATAR_DECORATION),
    O = (e, t) => (0, r.uniqBy)([...N(e), ...R(t)], 'id'),
    v = (e, t) => {
        var n;
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            s = (0, a.oO)(t.size * (0, a.x_)()),
            o = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : 'png';
        if (null != r) return ''.concat(location.protocol, '//').concat(r, '/app-assets/').concat(c.XAJ, '/').concat(e, '.').concat(o, '?size=').concat(s);
        let l = c.ANM.APPLICATION_ASSET(c.XAJ, e, o);
        return ''.concat(location.protocol).concat(i).concat(l, '?size=').concat(s);
    },
    C = (e) => g(e, i.Z.PROFILE_EFFECT),
    L = (e) => A(e, i.Z.PROFILE_EFFECT),
    D = (e, t) => {
        let n = C(t),
            r = L(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r
        };
    },
    y = (e) => e.applicationId === c.XAJ,
    b = (e) => 3.8 * e,
    M = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 86400000);
    },
    P = (e) => {
        let t = u.yf[e];
        return null != t && new Date().getTime() < t;
    },
    U = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    w = (e, t, n) => {
        if (U(e)) return h(e);
        let r = p(e, t ? (n ? c.tuJ.MOBILE : c.tuJ.DEFAULT) : n ? c.tuJ.MOBILE_PREMIUM_TIER_2 : c.tuJ.PREMIUM_TIER_2);
        return null == r ? void 0 : r.amount;
    },
    x = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !U(e) && (n.push(r), n.length >= u.K8)) return n;
                }
        }
        return G(n);
    },
    G = (e) => {
        if (e.length < u.K8) {
            let t = u.HU.slice(0, u.K8 - e.length);
            return e.concat(t);
        }
        return e;
    };
