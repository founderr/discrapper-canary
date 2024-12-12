r.d(n, {
    B1: function () {
        return R;
    },
    DR: function () {
        return I;
    },
    F$: function () {
        return S;
    },
    K$: function () {
        return O;
    },
    R2: function () {
        return D;
    },
    Sm: function () {
        return E;
    },
    fK: function () {
        return C;
    },
    jr: function () {
        return N;
    },
    mK: function () {
        return v;
    },
    oK: function () {
        return T;
    },
    oc: function () {
        return y;
    },
    qg: function () {
        return A;
    }
});
var i = r(561842),
    a = r(664081),
    s = r(311570),
    o = r(544891),
    l = r(570140),
    u = r(37234),
    c = r(881052);
r(777639);
var d = r(703656),
    f = r(1870),
    _ = r(549616),
    h = r(833798),
    p = r(778787),
    m = r(161226),
    g = r(981631);
r(597688), r(574709), r(328347), r(874703);
let E = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...e
        });
    },
    v = (e) => {
        let { openInLayer: n = !0, ...r } = e;
        E(r);
        n ? (0, u.jN)(g.S9g.COLLECTIBLES_SHOP) : (0, d.uL)(g.Z5c.COLLECTIBLES_SHOP);
    },
    I = () => {
        l.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, u.xf)();
    },
    T = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    b = (e, n) => !!e == !!n,
    y = (e, n) => b(null == e ? void 0 : e.noCache, null == n ? void 0 : n.noCache) && b(null == e ? void 0 : e.includeUnpublished, null == n ? void 0 : n.includeUnpublished) && b(null == e ? void 0 : e.includeBundles, null == n ? void 0 : n.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == n ? void 0 : n.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == n ? void 0 : n.paymentGateway),
    S = async (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let n = {};
        null != e && (!0 === e.noCache && (n.no_cache = !0), !0 === e.includeUnpublished && (n.include_unpublished = !0), !0 === e.requestHomePayload && (n.request_home_payload = !0), !0 === e.includeBundles && (n.include_bundles = !0), null != e.countryCode && (n.country_code = e.countryCode), null !== e.paymentGateway && (n.payment_gateway = e.paymentGateway), e.variantsReturnStyle === s.v.VARIANTS_GROUP && (n.variants_return_style = s.v.VARIANTS_GROUP));
        try {
            let e = await o.tn.get({
                url: g.ANM.COLLECTIBLES_CATEGORIES,
                query: n,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(_.Z.fromServer)
            });
        } catch (e) {
            throw (
                (l.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: new c.Hx(e)
                }),
                new c.Hx(e))
            );
        }
    },
    A = async (e) => {
        if (!f.Z.isFetching) {
            l.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let n = {
                    url: g.ANM.COLLECTIBLES_PURCHASES,
                    rejectWithError: !0
                };
                (null == e ? void 0 : e.variantsReturnStyle) === s.v.VARIANTS_GROUP && (n.query = { variants_return_style: s.v.VARIANTS_GROUP });
                let r = await o.tn.get(n);
                l.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: r.body.map(m.Z.fromServer)
                });
            } catch (e) {
                throw (
                    (l.Z.dispatch({
                        type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                        error: new c.Hx(e)
                    }),
                    new c.Hx(e))
                );
            }
        }
    },
    N = async (e, n) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let r = {};
            (null == n ? void 0 : n.countryCode) !== null && (r.country_code = null == n ? void 0 : n.countryCode), (null == n ? void 0 : n.paymentGateway) !== null && (r.payment_gateway = null == n ? void 0 : n.paymentGateway);
            let i = await o.tn.get({
                url: g.ANM.COLLECTIBLES_PRODUCTS(e),
                query: r,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: p.Z.fromServer(i.body)
            });
        } catch (n) {
            throw (
                (l.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: new c.Hx(n)
                }),
                new c.Hx(n))
            );
        }
    },
    C = async (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var n;
            let r = await o.tn.put({
                url: g.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e },
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (n = r.body) || void 0 === n ? void 0 : n.map(m.Z.fromServer)
            });
        } catch (n) {
            throw (
                (l.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: n
                }),
                new c.Hx(n))
            );
        }
    },
    R = async (e, n) => {
        try {
            return (
                await o.tn.get({
                    url: g.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: n,
                        recipient_id: e
                    },
                    rejectWithError: !0
                })
            ).body.valid;
        } catch (e) {
            throw new c.Hx(e);
        }
    },
    O = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    D = async (e) => {
        let { release: n = a.P.PROD } = e;
        l.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let r = { platform: i.h.DESKTOP };
        n !== a.P.PROD && (r.release = n);
        try {
            let e = await o.tn.get({
                url: g.ANM.COLLECTIBLES_MARKETING,
                query: r,
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: h.s.fromServer(e.body)
            });
        } catch (e) {
            throw (l.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }), new c.Hx(e));
        }
    };
