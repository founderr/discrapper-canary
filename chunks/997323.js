n.d(t, {
    Gq: function () {
        return s;
    },
    SN: function () {
        return d;
    },
    Zu: function () {
        return c;
    },
    gA: function () {
        return u;
    },
    x8: function () {
        return f;
    }
}),
    n(411104);
var r = n(544891),
    i = n(343817),
    o = n(570140),
    a = n(959546),
    l = n(981631);
let s = async (e) => {
        o.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await r.tn.get({
                url: l.ANM.CONSUMABLE_FETCH_PRICE(e),
                rejectWithError: !1
            });
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
                new i.Hx(t))
            );
        }
    },
    u = async (e) => {
        o.Z.dispatch({
            type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await r.tn.get({
                    url: l.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
                    rejectWithError: !1
                }),
                n = null != t.body.entitlement ? a.Z.createFromServer(t.body.entitlement) : null;
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
                new i.Hx(t))
            );
        }
    },
    c = async (e, t) => {
        try {
            await r.tn.post({
                url: l.ANM.CONSUME_HD_STREAMING_POTION,
                body: { channel_id: e },
                rejectWithError: !1
            }),
                o.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: t
                });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    d = (e) => {
        o.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    f = (e) => {
        o.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
