n.d(t, {
    B1: function () {
        return C;
    },
    DR: function () {
        return v;
    },
    F$: function () {
        return S;
    },
    K$: function () {
        return R;
    },
    R2: function () {
        return O;
    },
    Sm: function () {
        return g;
    },
    fK: function () {
        return N;
    },
    jr: function () {
        return A;
    },
    mK: function () {
        return E;
    },
    oK: function () {
        return b;
    },
    oc: function () {
        return T;
    },
    qg: function () {
        return y;
    }
});
var r = n(561842),
    i = n(664081),
    a = n(311570),
    s = n(544891),
    o = n(570140),
    l = n(37234),
    u = n(881052);
n(777639);
var c = n(703656),
    d = n(1870),
    f = n(549616),
    _ = n(833798),
    p = n(778787),
    h = n(161226),
    m = n(981631);
n(597688), n(574709), n(328347), n(874703);
let g = (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...e
        });
    },
    E = (e) => {
        let { openInLayer: t = !0, ...n } = e;
        g(n);
        t ? (0, l.jN)(m.S9g.COLLECTIBLES_SHOP) : (0, c.uL)(m.Z5c.COLLECTIBLES_SHOP);
    },
    v = () => {
        o.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, l.xf)();
    },
    b = (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    I = (e, t) => !!e == !!t,
    T = (e, t) => I(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && I(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && I(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
    S = async (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let t = {};
        null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), !0 === e.requestHomePayload && (t.request_home_payload = !0), !0 === e.includeBundles && (t.include_bundles = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway), e.variantsReturnStyle === a.v.VARIANTS_GROUP && (t.variants_return_style = a.v.VARIANTS_GROUP));
        try {
            let e = await s.tn.get({
                url: m.ANM.COLLECTIBLES_CATEGORIES,
                query: t,
                rejectWithError: !1
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(f.Z.fromServer)
            });
        } catch (e) {
            throw (
                (o.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: new u.Hx(e)
                }),
                new u.Hx(e))
            );
        }
    },
    y = async (e) => {
        if (!d.Z.isFetching) {
            o.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let t = {
                    url: m.ANM.COLLECTIBLES_PURCHASES,
                    rejectWithError: !1
                };
                (null == e ? void 0 : e.variantsReturnStyle) === a.v.VARIANTS_GROUP && (t.query = { variants_return_style: a.v.VARIANTS_GROUP });
                let n = await s.tn.get(t);
                o.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: n.body.map(h.Z.fromServer)
                });
            } catch (e) {
                throw (
                    (o.Z.dispatch({
                        type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                        error: new u.Hx(e)
                    }),
                    new u.Hx(e))
                );
            }
        }
    },
    A = async (e, t) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
            let r = await s.tn.get({
                url: m.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n,
                rejectWithError: !1
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: p.Z.fromServer(r.body)
            });
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: new u.Hx(t)
                }),
                new u.Hx(t))
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
            let n = await s.tn.put({
                url: m.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !1
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(h.Z.fromServer)
            });
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: t
                }),
                new u.Hx(t))
            );
        }
    },
    C = async (e, t) => {
        try {
            return (
                await s.tn.get({
                    url: m.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    },
                    rejectWithError: !1
                })
            ).body.valid;
        } catch (e) {
            throw new u.Hx(e);
        }
    },
    R = (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    O = async (e) => {
        let { release: t = i.P.PROD } = e;
        o.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await s.tn.get({
                url: m.ANM.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !1
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: _.s.fromServer(e.body)
            });
        } catch (e) {
            throw (o.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }), new u.Hx(e));
        }
    };
