r.d(n, {
    B1: function () {
        return O;
    },
    DR: function () {
        return T;
    },
    F$: function () {
        return A;
    },
    K$: function () {
        return D;
    },
    R2: function () {
        return L;
    },
    Sm: function () {
        return v;
    },
    fK: function () {
        return R;
    },
    jr: function () {
        return C;
    },
    mK: function () {
        return I;
    },
    oK: function () {
        return b;
    },
    oc: function () {
        return S;
    },
    qg: function () {
        return N;
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
    m = r(161226);
r(251728);
var g = r(578976),
    E = r(981631);
r(597688), r(574709), r(328347), r(874703), r(52030);
let v = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...e
        });
    },
    I = (e) => {
        let { openInLayer: n = !0, ...r } = e;
        v(r);
        n ? (0, u.jN)(E.S9g.COLLECTIBLES_SHOP) : (0, d.uL)(E.Z5c.COLLECTIBLES_SHOP);
    },
    T = () => {
        l.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, u.xf)();
    },
    b = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    y = (e, n) => !!e == !!n,
    S = (e, n) => y(null == e ? void 0 : e.noCache, null == n ? void 0 : n.noCache) && y(null == e ? void 0 : e.includeUnpublished, null == n ? void 0 : n.includeUnpublished) && y(null == e ? void 0 : e.includeBundles, null == n ? void 0 : n.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == n ? void 0 : n.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == n ? void 0 : n.paymentGateway),
    A = async (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let n = (0, g.n)(e);
        try {
            let e = await o.tn.get({
                url: E.ANM.COLLECTIBLES_CATEGORIES,
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
    N = async (e) => {
        if (!f.Z.isFetching) {
            l.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let n = {
                    url: E.ANM.COLLECTIBLES_PURCHASES,
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
    C = async (e, n) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let r = {};
            (null == n ? void 0 : n.countryCode) !== null && (r.country_code = null == n ? void 0 : n.countryCode), (null == n ? void 0 : n.paymentGateway) !== null && (r.payment_gateway = null == n ? void 0 : n.paymentGateway);
            let i = await o.tn.get({
                url: E.ANM.COLLECTIBLES_PRODUCTS(e),
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
    R = async (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var n;
            let r = await o.tn.put({
                url: E.ANM.COLLECTIBLES_CLAIM,
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
    O = async (e, n) => {
        try {
            return (
                await o.tn.get({
                    url: E.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
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
    D = (e) => {
        l.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    L = async (e) => {
        let { release: n = a.P.PROD } = e;
        l.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let r = { platform: i.h.DESKTOP };
        n !== a.P.PROD && (r.release = n);
        try {
            let e = await o.tn.get({
                url: E.ANM.COLLECTIBLES_MARKETING,
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
