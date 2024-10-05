let s;
var i = n(544891),
    l = n(570140),
    r = n(728345),
    a = n(812206),
    c = n(625128),
    o = n(335131),
    E = n(669079),
    u = n(981631),
    d = n(474936);
async function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    l.Z.dispatch({
        type: 'GIFT_CODE_RESOLVE',
        code: e
    });
    try {
        let s = await (0, E.bT)(e, t, n);
        if (null != s.application_id && s.application_id !== d.CL) {
            let e = a.Z.getApplication(s.application_id);
            if (null == e)
                try {
                    await r.ZP.fetchApplication(s.application_id);
                } catch (e) {}
        }
        if (s.application_id === u.XAJ)
            try {
                await (0, o.jr)(s.sku_id);
            } catch (e) {}
        return (
            l.Z.dispatch({
                type: 'GIFT_CODE_RESOLVE_SUCCESS',
                giftCode: s
            }),
            { giftCode: s }
        );
    } catch (t) {
        throw (
            (l.Z.dispatch({
                type: 'GIFT_CODE_RESOLVE_FAILURE',
                code: e,
                error: t
            }),
            t)
        );
    }
}
(s = n(775644).Z),
    (t.Z = {
        resolveGiftCode: _,
        async fetchUserGiftCodesForSKU(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            l.Z.dispatch({
                type: 'GIFT_CODES_FETCH',
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let n = await i.tn.get({
                    url: u.ANM.USER_GIFT_CODES,
                    query: {
                        sku_id: e,
                        subscription_plan_id: t
                    },
                    oldFormErrors: !0
                });
                l.Z.dispatch({
                    type: 'GIFT_CODES_FETCH_SUCCESS',
                    giftCodes: n.body,
                    skuId: e,
                    subscriptionPlanId: t
                });
            } catch (n) {
                l.Z.dispatch({
                    type: 'GIFT_CODES_FETCH_FAILURE',
                    skuId: e,
                    subscriptionPlanId: t
                });
            }
        },
        async createGiftCode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            l.Z.dispatch({
                type: 'GIFT_CODE_CREATE_START',
                skuId: e,
                subscriptionPlanId: t
            });
            try {
                let s = await i.tn.post({
                    url: u.ANM.USER_GIFT_CODE_CREATE,
                    body: {
                        sku_id: e,
                        subscription_plan_id: t,
                        gift_style: n
                    },
                    oldFormErrors: !0
                });
                return (
                    l.Z.dispatch({
                        type: 'GIFT_CODE_CREATE_SUCCESS',
                        giftCode: s.body
                    }),
                    s.body
                );
            } catch (n) {
                l.Z.dispatch({
                    type: 'GIFT_CODE_CREATE_FAILURE',
                    skuId: e,
                    subscriptionPlanId: t
                });
            }
        },
        async revokeGiftCode(e) {
            l.Z.dispatch({
                type: 'GIFT_CODE_REVOKE',
                code: e
            });
            try {
                await i.tn.del({
                    url: u.ANM.USER_GIFT_CODE_REVOKE(e),
                    oldFormErrors: !0
                }),
                    l.Z.dispatch({
                        type: 'GIFT_CODE_REVOKE_SUCCESS',
                        code: e
                    });
            } catch (t) {
                l.Z.dispatch({
                    type: 'GIFT_CODE_REVOKE_FAILURE',
                    code: e
                });
            }
        },
        openNativeGiftCodeModal(e) {
            c.Z.openNativeAppModal(e, u.Etm.GIFT_CODE_BROWSER);
        },
        ...s
    });
