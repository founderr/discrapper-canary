var r = n(544891),
    s = n(570140),
    i = n(881052),
    l = n(122289),
    a = n(981631);
let o = Object.freeze({});
async function c(e) {
    let { code: t, options: n = o, onRedeemed: c, onError: d } = e,
        { channelId: u = null, paymentSource: _ = null } = n;
    s.Z.dispatch({
        type: 'GIFT_CODE_REDEEM',
        code: t
    });
    try {
        let e = await r.tn.post({
            url: a.ANM.GIFT_CODE_REDEEM(t),
            body: {
                channel_id: u,
                payment_source_id: null == _ ? void 0 : _.id,
                gateway_checkout_context: await (0, l.cn)(_)
            },
            oldFormErrors: !0
        });
        return (
            s.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_SUCCESS',
                code: t,
                entitlement: e.body
            }),
            null == c || c(),
            {
                code: t,
                entitlement: e
            }
        );
    } catch (n) {
        let e = new i.HF(n);
        throw (
            (s.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_FAILURE',
                code: t,
                error: e
            }),
            null == d || d(e),
            e)
        );
    }
}
t.Z = { redeemGiftCode: c };
