n.d(t, {
    B1: function () {
        return C;
    },
    DR: function () {
        return v;
    },
    F$: function () {
        return T;
    },
    Gq: function () {
        return D;
    },
    K$: function () {
        return R;
    },
    LE: function () {
        return P;
    },
    R2: function () {
        return O;
    },
    SN: function () {
        return w;
    },
    Zu: function () {
        return x;
    },
    ag: function () {
        return M;
    },
    fK: function () {
        return N;
    },
    gA: function () {
        return L;
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
        return S;
    },
    qg: function () {
        return y;
    },
    x8: function () {
        return k;
    }
}),
    n(411104);
var r = n(561842),
    i = n(664081),
    a = n(311570),
    s = n(544891),
    o = n(570140),
    l = n(37234),
    u = n(881052);
n(777639);
var c = n(703656),
    d = n(959546),
    f = n(1870),
    _ = n(549616),
    p = n(833798),
    h = n(778787),
    m = n(161226),
    g = n(981631);
n(597688), n(574709), n(328347), n(874703);
let E = (e) => {
        let { openInLayer: t = !0, ...n } = e;
        o.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...n
        });
        t ? (0, l.jN)(g.S9g.COLLECTIBLES_SHOP) : (0, c.uL)(g.Z5c.COLLECTIBLES_SHOP);
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
    S = (e, t) => I(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && I(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && I(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
    T = async (e) => {
        o.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let t = {};
        null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), !0 === e.requestHomePayload && (t.request_home_payload = !0), !0 === e.includeBundles && (t.include_bundles = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway), e.variantsReturnStyle === a.v.VARIANTS_GROUP && (t.variants_return_style = a.v.VARIANTS_GROUP));
        try {
            let e = await s.tn.get({
                url: g.ANM.COLLECTIBLES_CATEGORIES,
                query: t
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(_.Z.fromServer)
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
    y = async () => {
        if (!f.Z.isFetching) {
            o.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let e = await s.tn.get(g.ANM.COLLECTIBLES_PURCHASES);
                o.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: e.body.map(m.Z.fromServer)
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
                url: g.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: h.Z.fromServer(r.body)
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
                url: g.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e }
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(m.Z.fromServer)
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
                    url: g.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    }
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
                url: g.ANM.COLLECTIBLES_MARKETING,
                query: n
            });
            o.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: p.s.fromServer(e.body)
            });
        } catch (e) {
            throw (o.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }), new u.Hx(e));
        }
    },
    D = async (e) => {
        o.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await s.tn.get({ url: g.ANM.CONSUMABLE_FETCH_PRICE(e) });
            if (null == t.body.price)
                throw (
                    (o.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let n = t.body.price;
            return (
                o.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_SUCCEEDED',
                    skuId: e,
                    price: n
                }),
                {
                    amount: n.amount,
                    currency: n.currency,
                    exponent: n.currency_exponent
                }
            );
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new u.Hx(t))
            );
        }
    },
    L = async (e) => {
        o.Z.dispatch({
            type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await s.tn.get({ url: g.ANM.FETCH_HD_STREAMING_ENTITLEMENT }),
                n = null != t.body.entitlement ? d.Z.createFromServer(t.body.entitlement) : null;
            return (
                o.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: n
                }),
                t.body.entitlement
            );
        } catch (t) {
            throw (
                (o.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new u.Hx(t))
            );
        }
    },
    x = async (e) => {
        await s.tn.post({
            url: g.ANM.CONSUME_HD_STREAMING_POTION,
            body: { channel_id: e }
        });
    },
    w = (e) => {
        o.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    M = () => {
        o.Z.dispatch({ type: 'PLAYED_HD_STREAMING_POTION_ANIMATION' });
    },
    P = () => {
        o.Z.dispatch({ type: 'RESET_PLAYED_HD_STREAMING_POTION_ANIMATION' });
    },
    k = (e) => {
        o.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
