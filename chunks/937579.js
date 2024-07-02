n.d(t, {
    T: function () {
        return u;
    },
    a: function () {
        return c;
    }
});
var r = n(544891), i = n(704215), a = n(570140), o = n(605236), s = n(675478), l = n(981631);
async function u() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (e) {
        a.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_START' });
        try {
            var t, n, u;
            let e = await r.tn.post({ url: l.ANM.USER_OFFER }), c = null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null, d = null !== (n = e.body.user_discount) && void 0 !== n ? n : null, _ = null !== (u = e.body.user_discount_offer) && void 0 !== u ? u : null;
            return null == c && (0, o.un)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.Z.dispatch({
                type: 'BILLING_USER_OFFER_FETCH_SUCCESS',
                userTrialOffer: c,
                userDiscount: d,
                userDiscountOffer: _
            }), {
                userTrialOffer: c,
                userDiscount: d,
                userDiscountOffer: _
            };
        } catch (e) {
            a.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_FAIL' });
        }
    }
}
function c(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0, i = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== i)
        return r.tn.post({
            url: l.ANM.USER_OFFER_ACKNOWLEDGED,
            body: {
                user_trial_offer_id: n,
                user_discount_offer_id: i
            },
            oldFormErrors: !0
        }).then(e => {
            var t, n, r;
            a.Z.dispatch({
                type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
                userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
                userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
                userDiscountOffer: null !== (r = e.body.user_discount_offer) && void 0 !== r ? r : null
            });
        }).catch(e => {
            404 === e.status && a.Z.dispatch({
                type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
                userTrialOffer: null,
                userDiscount: null,
                userDiscountOffer: null
            });
        });
}
