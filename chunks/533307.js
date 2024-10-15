let r;
var s = n(544891),
    i = n(570140),
    l = n(728345),
    a = n(812206),
    o = n(625128),
    c = n(335131),
    d = n(669079),
    u = n(981631),
    _ = n(474936);
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i.Z.dispatch({
        type: 'GIFT_CODE_RESOLVE',
        code: e
    });
    try {
        let r = await (0, d.bT)(e, t, n);
        if (null != r.application_id && r.application_id !== _.CL) {
            let e = a.Z.getApplication(r.application_id);
            if (null == e)
                try {
                    await l.ZP.fetchApplication(r.application_id);
                } catch (e) {}
        }
        if (r.application_id === u.XAJ)
            try {
                await (0, c.jr)(r.sku_id);
            } catch (e) {}
        return (
            i.Z.dispatch({
                type: 'GIFT_CODE_RESOLVE_SUCCESS',
                giftCode: r
            }),
            { giftCode: r }
        );
    } catch (t) {
        throw (
            (i.Z.dispatch({
                type: 'GIFT_CODE_RESOLVE_FAILURE',
                code: e,
                error: t
            }),
            t)
        );
    }
}
(r = n(775644).Z),
    (t.Z = {
        resolveGiftCode: E,
        async fetchUserGiftCodesForSKU(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            i.Z.dispatch({
                type: 'GIFT_CODES_FETCH',
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let n = await s.tn.get({
                    url: u.ANM.USER_GIFT_CODES,
                    query: {
                        sku_id: e,
                        subscription_plan_id: t
                    },
                    oldFormErrors: !0
                });
                i.Z.dispatch({
                    type: 'GIFT_CODES_FETCH_SUCCESS',
                    giftCodes: n.body,
                    skuId: e,
                    subscriptionPlanId: t
                });
            } catch (n) {
                i.Z.dispatch({
                    type: 'GIFT_CODES_FETCH_FAILURE',
                    skuId: e,
                    subscriptionPlanId: t
                });
            }
        },
        async createGiftCode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            i.Z.dispatch({
                type: 'GIFT_CODE_CREATE_START',
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let r = await s.tn.post({
                    url: u.ANM.USER_GIFT_CODE_CREATE,
                    body: {
                        sku_id: e,
                        subscription_plan_id: t,
                        gift_style: n
                    },
                    oldFormErrors: !0
                });
                return (
                    i.Z.dispatch({
                        type: 'GIFT_CODE_CREATE_SUCCESS',
                        giftCode: r.body
                    }),
                    r.body
                );
            } catch (n) {
                i.Z.dispatch({
                    type: 'GIFT_CODE_CREATE_FAILURE',
                    skuId: e,
                    subscriptionPlanId: t
                });
            }
        },
        async revokeGiftCode(e) {
            i.Z.dispatch({
                type: 'GIFT_CODE_REVOKE',
                code: e
            });
            try {
                await s.tn.del({
                    url: u.ANM.USER_GIFT_CODE_REVOKE(e),
                    oldFormErrors: !0
                }),
                    i.Z.dispatch({
                        type: 'GIFT_CODE_REVOKE_SUCCESS',
                        code: e
                    });
            } catch (t) {
                i.Z.dispatch({
                    type: 'GIFT_CODE_REVOKE_FAILURE',
                    code: e
                });
            }
        },
        openNativeGiftCodeModal(e) {
            o.Z.openNativeAppModal(e, u.Etm.GIFT_CODE_BROWSER);
        },
        ...r
    });
