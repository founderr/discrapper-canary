r.d(n, {
    L9: function () {
        return g;
    },
    vM: function () {
        return p;
    }
});
var i = r(544891),
    a = r(381499),
    s = r(570140),
    o = r(496929),
    l = r(706454),
    u = r(675478),
    c = r(164207),
    d = r(518638),
    f = r(1844),
    _ = r(474936),
    h = r(981631);
async function p() {
    if (!f.Z.isFetchingActiveOutboundPromotions)
        try {
            s.Z.dispatch({ type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH' });
            let n = c.t.getCurrentConfig({ location: '5731cc_1' }, { autoTrackExposure: !1 }).previewEnabled ? h.ANM.OUTBOUND_PROMOTIONS_PREVIEW : h.ANM.OUTBOUND_PROMOTIONS,
                r = (
                    await i.tn.get({
                        url: n,
                        query: { locale: l.default.locale },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                ).body,
                a = f.Z.consumedInboundPromotionId;
            if (!f.Z.hasFetchedConsumedInboundPromotionId) {
                var e;
                let n = (await (0, o.yD)(_.CL, !1)).find((e) => null != e.promotion_id && !0 === e.consumed);
                a = null !== (e = null == n ? void 0 : n.promotion_id) && void 0 !== e ? e : null;
            }
            s.Z.dispatch({
                type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS',
                activeOutboundPromotions: r.map((e) => (0, d.X_)(e)),
                consumedInboundPromotionId: a
            });
        } catch (e) {
            s.Z.dispatch({ type: 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL' });
        }
}
function m() {
    s.Z.dispatch({ type: 'OUTBOUND_PROMOTION_NOTICE_DISMISS' });
    let e = f.Z.lastDismissedOutboundPromotionStartDate;
    null != e &&
        u.hW.updateAsync(
            'userContent',
            (n) => {
                n.lastDismissedOutboundPromotionStartDate = a.Gm.create({ value: e });
            },
            u.fy.INFREQUENT_USER_ACTION
        );
}
async function g() {
    if (!f.Z.isFetchingActiveBogoPromotion)
        try {
            s.Z.dispatch({ type: 'ACTIVE_BOGO_PROMOTION_FETCH' });
            let e = (
                await i.tn.get({
                    url: h.ANM.BOGO_PROMOTIONS,
                    query: { locale: l.default.locale },
                    rejectWithError: !0
                })
            ).body;
            s.Z.dispatch({
                type: 'ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS',
                activePromotion: (0, d.kr)(e)
            });
        } catch (e) {
            s.Z.dispatch({ type: 'ACTIVE_BOGO_PROMOTION_FETCH_FAIL' });
        }
}
n.ZP = {
    fetchActiveOutboundPromotions: p,
    dismissOutboundPromotionNotice: m,
    markOutboundPromotionsSeen() {
        s.Z.dispatch({ type: 'OUTBOUND_PROMOTIONS_SEEN' });
    },
    fetchActiveBogoPromotion: g
};
