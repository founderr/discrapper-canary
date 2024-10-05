var s = n(544891),
    i = n(570140),
    l = n(881052),
    r = n(122289),
    a = n(981631);
let c = Object.freeze({});
async function o(e) {
    let { code: t, options: n = c, onRedeemed: o, onError: E } = e,
        { channelId: u = null, paymentSource: d = null } = n;
    i.Z.dispatch({
        type: 'GIFT_CODE_REDEEM',
        code: t
    });
    try {
        let e = await s.tn.post({
            url: a.ANM.GIFT_CODE_REDEEM(t),
            body: {
                channel_id: u,
                payment_source_id: null == d ? void 0 : d.id,
                gateway_checkout_context: await (0, r.cn)(d)
            },
            oldFormErrors: !0
        });
        return (
            i.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_SUCCESS',
                code: t,
                entitlement: e.body
            }),
            null == o || o(),
            {
                code: t,
                entitlement: e
            }
        );
    } catch (n) {
        let e = new l.HF(n);
        throw (
            (i.Z.dispatch({
                type: 'GIFT_CODE_REDEEM_FAILURE',
                code: t,
                error: e
            }),
            null == E || E(e),
            e)
        );
    }
}
t.Z = { redeemGiftCode: o };
