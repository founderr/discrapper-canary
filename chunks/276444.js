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
    _ = n(981631);
let E = null,
    f = {},
    h = [],
    p = new Map(),
    I = new Set(),
    m = !1,
    T = new Set(),
    g = new Set(),
    S = {},
    A = 0,
    N = null,
    O = [],
    v = !1,
    R = 0,
    C = !1,
    y = null,
    D = !1,
    L = !1,
    b = !1,
    M = () => !0;
function P(e) {
    T.add(e);
}
function U(e) {
    let { messages: t } = e;
    t.forEach((e) => w(e));
}
function w(e) {
    let t = e.type === o.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    if (!g.has(t) && !T.has(t)) {
        var n;
        (n = t), T.add(n), u.Z.wait(() => (0, d.IB)(t).catch(_.VqG));
    }
}
class x extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.default), this.syncWith([c.default], M);
    }
    checkAndFetchReferralsRemaining() {
        null == E && !m && A < 5 && (null == N || N < Date.now()) && (0, d.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), E;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), null == h ? [] : h;
    }
    isFetchingReferralsRemaining() {
        return m;
    }
    isFetchingRecipientEligibility(e) {
        return I.has(e);
    }
    getRecipientEligibility(e) {
        return void 0 === f[e] && !I.has(e) && (0, d.Ve)(e), f[e];
    }
    getRelevantUserTrialOffer(e) {
        return S[e];
    }
    isResolving(e) {
        return T.has(e);
    }
    getEligibleUsers() {
        return O;
    }
    getFetchingEligibleUsers() {
        return v;
    }
    getNextIndexOfEligibleUsers() {
        return R;
    }
    getIsEligibleToSendReferrals() {
        return C;
    }
    getRefreshAt() {
        return y;
    }
    getRelevantReferralTrialOffers() {
        return S;
    }
    getRecipientStatus() {
        return p;
    }
    getIsSenderEligibleForIncentive() {
        return D;
    }
    getIsSenderQualifiedForIncentive() {
        return L;
    }
    getIsFetchingReferralIncentiveEligibility() {
        return b;
    }
}
(s = 'ReferralTrialStore'),
    (a = 'displayName') in (i = x)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new x(u.Z, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function (e) {
            let { userTrialOfferId: t, recipientId: n } = e;
            if ((!m && (0, d.C$)(), !I.has(n) && (0, d.Ve)(n), !T.has(t))) {
                var r;
                (r = t), T.add(r), u.Z.wait(() => (0, d.IB)(t).catch(_.VqG));
            }
        },
        BILLING_REFERRALS_REMAINING_FETCH_START: function (e) {
            let {} = e;
            (C = !1), (y = null), (m = !0);
        },
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function (e) {
            let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: a, isUserEligibleForIncentive: s, isUserQualifiedForIncentive: o } = e;
            (C = null == r && a), (m = !1), (E = t), (h = n), (y = r), (p = i), (D = s), (L = o);
        },
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: function (e) {
            let {} = e;
            (C = !1), (y = null), (m = !1), (A += 1), (N = Date.now() + 1000 * Math.pow(2, A));
        },
        BILLING_CREATE_REFERRAL_PREVIEW_START: function (e) {
            let { recipientId: t } = e;
            I.add(t);
        },
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS: function (e) {
            let { isUserEligibleForIncentive: t } = e;
            (b = !1), null != t && (D = t);
        },
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL: function () {
            b = !1;
        },
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_START: function () {
            b = !0;
        },
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function (e) {
            let { recipientId: t, is_eligible: n } = e;
            (f[t] = n), I.delete(t);
        },
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function (e) {
            let { recipientId: t } = e;
            (f[t] = !1), I.delete(t);
        },
        BILLING_CREATE_REFERRAL_SUCCESS: function (e) {
            let { userTrialOffer: t } = e;
            (0, d.C$)(), (S[t.id] = t), (h = [...h, t.user_id]);
        },
        CREATE_REFERRALS_SUCCESS: function (e) {
            let { userTrialOffers: t } = e;
            for (let e of ((0, d.C$)(), t)) (S[e.id] = e), (h = [...h, e.user_id]);
        },
        BILLING_REFERRAL_RESOLVE_SUCCESS: function (e) {
            let { userTrialOffer: t } = e;
            null != t && (T.delete(t.id), g.add(t.id), (S[t.id] = t));
        },
        BILLING_REFERRAL_RESOLVE_FAIL: function (e) {
            let { userTrialOfferId: t } = e;
            T.delete(t), g.add(t);
        },
        REFERRALS_FETCH_ELIGIBLE_USER_START: function () {
            v = !0;
        },
        REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function (e) {
            let { users: t, nextIndex: n } = e;
            (v = !1), (O = t), (R = n);
        },
        REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function () {
            v = !1;
        },
        LOAD_MESSAGES_SUCCESS: U,
        MESSAGE_CREATE: function (e) {
            let { message: t } = e;
            w(t);
        },
        LOAD_MESSAGES_AROUND_SUCCESS: U,
        LOGOUT: function () {
            (E = null), (f = {}), (h = []), (I = new Set()), (m = !1), (T = new Set()), (g = new Set()), (S = {}), (A = 0), (N = null), (O = []), (v = !1), (R = 0), (C = !1), (y = null), (p = new Map()), (D = !1), (L = !1), (b = !1);
        }
    }));
