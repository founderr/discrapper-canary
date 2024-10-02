n.d(t, {
    B1: function () {
        return O;
    },
    DR: function () {
        return m;
    },
    F$: function () {
        return S;
    },
    K$: function () {
        return R;
    },
    R2: function () {
        return C;
    },
    fK: function () {
        return N;
    },
    jr: function () {
        return v;
    },
    mK: function () {
        return p;
    },
    oK: function () {
        return I;
    },
    oc: function () {
        return g;
    },
    qg: function () {
        return A;
    }
});
var r = n(561842),
    i = n(664081),
    a = n(544891),
    o = n(570140),
    s = n(37234),
    l = n(881052);
n(777639);
var u = n(703656),
    c = n(1870),
    d = n(549616),
    _ = n(833798),
    E = n(778787),
    f = n(161226),
    h = n(981631);
n(597688), n(574709), n(328347), n(874703);
let p = (e) => {
        let { openInLayer: t = !0, ...n } = e;
        o.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...n
        });
        t ? (0, s.jN)(h.S9g.COLLECTIBLES_SHOP) : (0, u.uL)(h.Z5c.COLLECTIBLES_SHOP);
    },
    m = () => {
        o.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, s.xf)();
    },
    I = (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    T = (e, t) => !!e == !!t,
    g = (e, t) => T(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && T(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && T(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
    S = async (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let t = {};
        null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), !0 === e.includeBundles && (t.include_bundles = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway));
        try {
            let e = await a.tn.get({
                url: h.ANM.COLLECTIBLES_CATEGORIES,
                query: t
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(d.Z.fromServer)
            });
        } catch (e) {
            throw (
                (o.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: e
                }),
                new l.Hx(e))
            );
        }
    },
    A = async () => {
        if (!c.Z.isFetching) {
            o.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let e = await a.tn.get(h.ANM.COLLECTIBLES_PURCHASES);
                o.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: e.body.map(f.Z.fromServer)
                });
            } catch (e) {
                throw (
                    (o.Z.dispatch({
                        type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                        error: e
                    }),
                    new l.Hx(e))
                );
            }
        }
    },
    v = async (e, t) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
            let r = await a.tn.get({
                url: h.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: E.Z.fromServer(r.body)
            });
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: t
                }),
                new l.Hx(t))
            );
        }
    },
    N = async (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var t;
            let n = await a.tn.put({
                url: h.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e }
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(f.Z.fromServer)
            });
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: t
                }),
                new l.Hx(t))
            );
        }
    },
    O = async (e, t) => {
        try {
            return (
                await a.tn.get({
                    url: h.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    }
                })
            ).body.valid;
        } catch (e) {
            throw new l.Hx(e);
        }
    },
    R = (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    C = async (e) => {
        let { release: t = i.P.PROD } = e;
        o.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await a.tn.get({
                url: h.ANM.COLLECTIBLES_MARKETING,
                query: n
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: _.s.fromServer(e.body)
            });
        } catch (e) {
            throw (o.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }), new l.Hx(e));
        }
    };
