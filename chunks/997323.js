n.d(t, {
    Gq: function () {
        return o;
    },
    LE: function () {
        return m;
    },
    SN: function () {
        return u;
    },
    Zu: function () {
        return d;
    },
    ag: function () {
        return E;
    },
    gA: function () {
        return c;
    },
    x8: function () {
        return h;
    }
}),
    n(411104);
var r = n(544891),
    l = n(343817),
    i = n(570140),
    a = n(959546),
    s = n(981631);
let o = async (e) => {
        i.Z.dispatch({
            type: 'CONSUMABLES_PRICE_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await r.tn.get({
                url: s.ANM.CONSUMABLE_FETCH_PRICE(e),
                rejectWithError: !1
            });
            if (null == t.body.price)
                throw (
                    (i.Z.dispatch({
                        type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                        skuId: e
                    }),
                    Error('price not found'))
                );
            let n = t.body.price;
            return (
                i.Z.dispatch({
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
                (i.Z.dispatch({
                    type: 'CONSUMABLES_PRICE_FETCH_FAILED',
                    skuId: e
                }),
                new l.Hx(t))
            );
        }
    },
    c = async (e) => {
        i.Z.dispatch({
            type: 'CONSUMABLES_ENTITLEMENT_FETCH_STARTED',
            skuId: e
        });
        try {
            let t = await r.tn.get({
                    url: s.ANM.FETCH_HD_STREAMING_ENTITLEMENT,
                    rejectWithError: !1
                }),
                n = null != t.body.entitlement ? a.Z.createFromServer(t.body.entitlement) : null;
            return (
                i.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED',
                    skuId: e,
                    entitlement: n
                }),
                t.body.entitlement
            );
        } catch (t) {
            throw (
                (i.Z.dispatch({
                    type: 'CONSUMABLES_ENTITLEMENT_FETCH_FAILED',
                    skuId: e
                }),
                new l.Hx(t))
            );
        }
    },
    d = async (e, t) => {
        try {
            await r.tn.post({
                url: s.ANM.CONSUME_HD_STREAMING_POTION,
                body: { channel_id: e },
                rejectWithError: !1
            }),
                i.Z.dispatch({
                    type: 'CLEAR_CONSUMED_ENTITLEMENT',
                    skuId: t
                });
        } catch (e) {
            throw new l.Hx(e);
        }
    },
    u = (e) => {
        i.Z.dispatch({
            type: 'CONSUMABLES_CLEAR_ERROR',
            skuId: e
        });
    },
    E = () => {
        i.Z.dispatch({ type: 'PLAYED_HD_STREAMING_POTION_ANIMATION' });
    },
    m = () => {
        i.Z.dispatch({ type: 'RESET_PLAYED_HD_STREAMING_POTION_ANIMATION' });
    },
    h = (e) => {
        i.Z.dispatch({
            type: 'SET_PREVIOUS_GO_LIVE_SETTINGS',
            previousGoLiveSettings: e
        });
    };
