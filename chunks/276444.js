n(47120);
var r,
    i,
    a,
    s,
    o = n(275726),
    l = n(442837),
    u = n(570140),
    c = n(594174),
    d = n(281494),
    f = n(981631);
let _ = null,
    h = {},
    p = [],
    m = new Map(),
    g = new Set(),
    E = !1,
    v = new Set(),
    I = new Set(),
    S = {},
    T = 0,
    b = null,
    y = [],
    A = !1,
    N = 0,
    C = !1,
    R = null,
    O = !1,
    D = !1,
    L = !1,
    x = f.g2L.NOT_ELIGIBLE,
    w = () => !0;
function M(e) {
    v.add(e);
}
function P(e) {
    let { messages: t } = e;
    t.forEach((e) => k(e));
}
function k(e) {
    let t = e.type === o.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    if (!I.has(t) && !v.has(t)) {
        var n;
        (n = t), v.add(n), u.Z.wait(() => (0, d.IB)(t).catch(f.VqG));
    }
}
class U extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.default), this.syncWith([c.default], w);
    }
    checkAndFetchReferralsRemaining() {
        null == _ && !E && T < 5 && (null == b || b < Date.now()) && (0, d.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), _;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), null == p ? [] : p;
    }
    isFetchingReferralsRemaining() {
        return E;
    }
    isFetchingRecipientEligibility(e) {
        return g.has(e);
    }
    getRecipientEligibility(e) {
        return void 0 === h[e] && !g.has(e) && (0, d.Ve)(e), h[e];
    }
    getRelevantUserTrialOffer(e) {
        return S[e];
    }
    isResolving(e) {
        return v.has(e);
    }
    getEligibleUsers() {
        return y;
    }
    getFetchingEligibleUsers() {
        return A;
    }
    getNextIndexOfEligibleUsers() {
        return N;
    }
    getIsEligibleToSendReferrals() {
        return C;
    }
    getRefreshAt() {
        return R;
    }
    getRelevantReferralTrialOffers() {
        return S;
    }
    getRecipientStatus() {
        return m;
    }
    getIsSenderEligibleForIncentive() {
        return O;
    }
    getIsSenderQualifiedForIncentive() {
        return D;
    }
    getIsFetchingReferralIncentiveEligibility() {
        return L;
    }
    getSenderIncentiveState() {
        return x;
    }
}
(s = 'ReferralTrialStore'),
    (a = 'displayName') in (i = U)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new U(u.Z, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function (e) {
            let { userTrialOfferId: t, recipientId: n } = e;
            if ((!E && (0, d.C$)(), !g.has(n) && (0, d.Ve)(n), !v.has(t))) {
                var r;
                (r = t), v.add(r), u.Z.wait(() => (0, d.IB)(t).catch(f.VqG));
            }
        },
        BILLING_REFERRALS_REMAINING_FETCH_START: function (e) {
            let {} = e;
            (C = !1), (R = null), (E = !0);
        },
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function (e) {
            let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: a, isUserEligibleForIncentive: s, isUserQualifiedForIncentive: o, userReferralIncentiveState: l } = e;
            (C = null == r && a), (E = !1), (_ = t), (p = n), (R = r), (m = i), (O = s && (a || m.size > 0)), (D = o), (x = l);
        },
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: function (e) {
            let {} = e;
            (C = !1), (R = null), (E = !1), (T += 1), (b = Date.now() + 1000 * Math.pow(2, T));
        },
        BILLING_CREATE_REFERRAL_PREVIEW_START: function (e) {
            let { recipientId: t } = e;
            g.add(t);
        },
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS: function (e) {
            let { isUserEligibleForIncentive: t } = e;
            (L = !1), null != t && (O = t);
        },
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL: function () {
            L = !1;
        },
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_START: function () {
            L = !0;
        },
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function (e) {
            let { recipientId: t, is_eligible: n } = e;
            (h[t] = n), g.delete(t);
        },
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function (e) {
            let { recipientId: t } = e;
            (h[t] = !1), g.delete(t);
        },
        BILLING_CREATE_REFERRAL_SUCCESS: function (e) {
            let { userTrialOffer: t } = e;
            (0, d.C$)(), (S[t.id] = t), (p = [...p, t.user_id]);
        },
        CREATE_REFERRALS_SUCCESS: function (e) {
            let { userTrialOffers: t } = e;
            for (let e of ((0, d.C$)(), t)) (S[e.id] = e), (p = [...p, e.user_id]);
        },
        BILLING_REFERRAL_RESOLVE_SUCCESS: function (e) {
            let { userTrialOffer: t } = e;
            null != t && (v.delete(t.id), I.add(t.id), (S[t.id] = t));
        },
        BILLING_REFERRAL_RESOLVE_FAIL: function (e) {
            let { userTrialOfferId: t } = e;
            v.delete(t), I.add(t);
        },
        REFERRALS_FETCH_ELIGIBLE_USER_START: function () {
            A = !0;
        },
        REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function (e) {
            let { users: t, nextIndex: n } = e;
            (A = !1), (y = t), (N = n);
        },
        REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function () {
            A = !1;
        },
        LOAD_MESSAGES_SUCCESS: P,
        MESSAGE_CREATE: function (e) {
            let { message: t } = e;
            k(t);
        },
        LOAD_MESSAGES_AROUND_SUCCESS: P,
        LOGOUT: function () {
            (_ = null), (h = {}), (p = []), (g = new Set()), (E = !1), (v = new Set()), (I = new Set()), (S = {}), (T = 0), (b = null), (y = []), (A = !1), (N = 0), (C = !1), (R = null), (m = new Map()), (O = !1), (D = !1), (L = !1), (x = f.g2L.NOT_ELIGIBLE);
        }
    }));
