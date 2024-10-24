n.d(t, {
    B1: function () {
        return v;
    },
    DR: function () {
        return m;
    },
    F$: function () {
        return A;
    },
    Gq: function () {
        return D;
    },
    K$: function () {
        return C;
    },
    R2: function () {
        return L;
    },
    SN: function () {
        return M;
    },
    Zu: function () {
        return b;
    },
    fK: function () {
        return O;
    },
    gA: function () {
        return y;
    },
    jr: function () {
        return R;
    },
    mK: function () {
        return I;
    },
    oK: function () {
        return T;
    },
    oc: function () {
        return g;
    },
    qg: function () {
        return N;
    }
}),
    n(411104);
var r = n(561842),
    i = n(664081),
    a = n(544891),
    s = n(570140),
    o = n(37234),
    l = n(881052);
n(777639);
var u = n(703656),
    c = n(959546),
    d = n(1870),
    _ = n(549616),
    E = n(833798),
    f = n(778787),
    h = n(161226),
    p = n(981631);
n(597688), n(574709), n(328347), n(874703);
let I = (e) => {
        let { openInLayer: t = !0, ...n } = e;
        s.Z.dispatch({
            type: 'COLLECTIBLES_SHOP_OPEN',
            ...n
        });
        t ? (0, o.jN)(p.S9g.COLLECTIBLES_SHOP) : (0, u.uL)(p.Z5c.COLLECTIBLES_SHOP);
    },
    m = () => {
        s.Z.dispatch({ type: 'COLLECTIBLES_SHOP_CLOSE' }), (0, o.xf)();
    },
    T = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_DETAILS_OPEN',
            item: e
        });
    },
    S = (e, t) => !!e == !!t,
    g = (e, t) => S(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && S(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && S(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
    A = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORIES_FETCH',
            options: null != e ? e : {}
        });
        let t = {};
        null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), !0 === e.includeBundles && (t.include_bundles = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway));
        try {
            let e = await a.tn.get({
                url: p.ANM.COLLECTIBLES_CATEGORIES,
                query: t
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CATEGORIES_FETCH_SUCCESS',
                categories: e.body.map(_.Z.fromServer)
            });
        } catch (e) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_CATEGORIES_FETCH_FAILURE',
                    error: new l.Hx(e)
                }),
                new l.Hx(e))
            );
        }
    },
    N = async () => {
        if (!d.Z.isFetching) {
            s.Z.dispatch({ type: 'COLLECTIBLES_PURCHASES_FETCH' });
            try {
                let e = await a.tn.get(p.ANM.COLLECTIBLES_PURCHASES);
                s.Z.dispatch({
                    type: 'COLLECTIBLES_PURCHASES_FETCH_SUCCESS',
                    purchases: e.body.map(h.Z.fromServer)
                });
            } catch (e) {
                throw (
                    (s.Z.dispatch({
                        type: 'COLLECTIBLES_PURCHASES_FETCH_FAILURE',
                        error: new l.Hx(e)
                    }),
                    new l.Hx(e))
                );
            }
        }
    },
    R = async (e, t) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_PRODUCT_FETCH',
            skuId: e
        });
        try {
            let n = {};
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
            let r = await a.tn.get({
                url: p.ANM.COLLECTIBLES_PRODUCTS(e),
                query: n
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_PRODUCT_FETCH_SUCCESS',
                skuId: e,
                product: f.Z.fromServer(r.body)
            });
        } catch (t) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_PRODUCT_FETCH_FAILURE',
                    skuId: e,
                    error: new l.Hx(t)
                }),
                new l.Hx(t))
            );
        }
    },
    O = async (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CLAIM',
            skuId: e
        });
        try {
            var t;
            let n = await a.tn.put({
                url: p.ANM.COLLECTIBLES_CLAIM,
                body: { sku_id: e }
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_CLAIM_SUCCESS',
                skuId: e,
                purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(h.Z.fromServer)
            });
        } catch (t) {
            throw (
                (s.Z.dispatch({
                    type: 'COLLECTIBLES_CLAIM_FAILURE',
                    skuId: e,
                    error: t
                }),
                new l.Hx(t))
            );
        }
    },
    v = async (e, t) => {
        try {
            return (
                await a.tn.get({
                    url: p.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
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
    C = (e) => {
        s.Z.dispatch({
            type: 'COLLECTIBLES_CATEGORY_ITEMS_VIEWED',
            ...e
        });
    },
    L = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH' });
        let n = { platform: r.h.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await a.tn.get({
                url: p.ANM.COLLECTIBLES_MARKETING,
                query: n
            });
            s.Z.dispatch({
                type: 'COLLECTIBLES_MARKETING_FETCH_SUCCESS',
                marketings: E.s.fromServer(e.body)
            });
        } catch (e) {
            throw (s.Z.dispatch({ type: 'COLLECTIBLES_MARKETING_FETCH_FAILURE' }), new l.Hx(e));
        }
    },
    D = async (e) => {
        s.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await a.tn.get({ url: p.ANM.CONSUMABLE_FETCH_PRICE(e) });
            if (null == t.body.price)
                throw (
                    (s.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let n = t.body.price;
            return (
                s.Z.dispatch({
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
                (s.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new l.Hx(t))
            );
        }
    },
    y = async (e) => {
        s.Z.dispatch({
            type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await a.tn.get({ url: p.ANM.FETCH_HD_STREAMING_ENTITLEMENT }),
                n = null != t.body.entitlement ? c.Z.createFromServer(t.body.entitlement) : null;
            return (
                s.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: n
                }),
                t.body.entitlement
            );
        } catch (t) {
            throw (
                (s.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new l.Hx(t))
            );
        }
    },
    b = async (e) => {
        await a.tn.post({
            url: p.ANM.CONSUME_HD_STREAMING_POTION,
            body: { channel_id: e }
        });
    },
    M = (e) => {
        s.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    };
