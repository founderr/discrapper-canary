var r = n(544891),
    i = n(570140),
    a = n(881052),
    o = n(122289),
    s = n(981631);
let l = Object.freeze({});
async function u(e) {
    let { code: t, options: n = l, onRedeemed: u, onError: c } = e,
        { channelId: d = null, paymentSource: _ = null } = n;
    i.Z.dispatch({
        type: 'GIFT_CODE_REDEEM',
        code: t
    });
    try {
        let e = await r.tn.post({
            url: s.ANM.GIFT_CODE_REDEEM(t),
            body: {
                channel_id: d,
                payment_source_id: null == _ ? void 0 : _.id,
                gateway_checkout_context: await (0, o.cn)(_)
            },
            oldFormErrors: !0
        });
        return (
            i.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_SUCCESS',
                code: t,
                entitlement: e.body
            }),
            null == u || u(),
            {
                code: t,
                entitlement: e
            }
        );
    } catch (n) {
        let e = new a.HF(n);
        throw (
            (i.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_FAILURE',
                code: t,
                error: e
            }),
            null == c || c(e),
            e)
        );
    }
}
t.Z = { redeemGiftCode: u };
