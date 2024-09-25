var r,
    i = n(47120);
var a = n(275726),
    o = n(442837),
    s = n(570140),
    l = n(594174),
    u = n(281494),
    c = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = 5,
    E = null,
    f = {},
    h = [],
    p = new Map(),
    m = new Set(),
    I = !1,
    T = new Set(),
    g = new Set(),
    S = {},
    A = 0,
    v = null,
    N = [],
    O = !1,
    R = 0,
    C = !1,
    y = null,
    b = !1,
    L = !1,
    D = !1,
    M = c.g2L.NOT_ELIGIBLE;
function P() {
    (E = null), (f = {}), (h = []), (m = new Set()), (I = !1), (T = new Set()), (g = new Set()), (S = {}), (A = 0), (v = null), (N = []), (O = !1), (R = 0), (C = !1), (y = null), (p = new Map()), (b = !1), (L = !1), (D = !1), (M = c.g2L.NOT_ELIGIBLE);
}
let U = () => !0;
function w(e) {
    let {} = e;
    (C = !1), (y = null), (I = !0);
}
function x(e) {
    let { referrals_remaining: t, sent_user_ids: n, refresh_at: r, recipient_status: i, has_eligible_friends: a, isUserEligibleForIncentive: o, isUserQualifiedForIncentive: s, userReferralIncentiveState: l } = e;
    (C = null == r && a), (I = !1), (E = t), (h = n), (y = r), (p = i), (b = o && (a || p.size > 0)), (L = s), (M = l);
}
function G(e) {
    let {} = e;
    (C = !1), (y = null), (I = !1), (A += 1), (v = Date.now() + 1000 * Math.pow(2, A));
}
function k(e) {
    let { recipientId: t } = e;
    m.add(t);
}
function B(e) {
    let { recipientId: t, is_eligible: n } = e;
    (f[t] = n), m.delete(t);
}
function F(e) {
    let { recipientId: t } = e;
    (f[t] = !1), m.delete(t);
}
function Z(e) {
    let { userTrialOffer: t } = e;
    (0, u.C$)(), (S[t.id] = t), (h = [...h, t.user_id]);
}
function V(e) {
    let { userTrialOffers: t } = e;
    for (let e of ((0, u.C$)(), t)) (S[e.id] = e), (h = [...h, e.user_id]);
}
function H(e) {
    T.add(e);
}
function Y(e) {
    let { userTrialOffer: t } = e;
    null != t && (T.delete(t.id), g.add(t.id), (S[t.id] = t));
}
function j(e) {
    let { userTrialOfferId: t } = e;
    T.delete(t), g.add(t);
}
function W(e) {
    let { message: t } = e;
    q(t);
}
function K(e) {
    let { messages: t } = e;
    t.forEach((e) => q(e));
}
function z(e) {
    let { userTrialOfferId: t, recipientId: n } = e;
    !I && (0, u.C$)(), !m.has(n) && (0, u.Ve)(n), !T.has(t) && (H(t), s.Z.wait(() => (0, u.IB)(t).catch(c.VqG)));
}
function q(e) {
    let t = e.type === a.u.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    !g.has(t) && !T.has(t) && (H(t), s.Z.wait(() => (0, u.IB)(t).catch(c.VqG)));
}
function Q() {
    O = !0;
}
function X(e) {
    let { users: t, nextIndex: n } = e;
    (O = !1), (N = t), (R = n);
}
function $() {
    O = !1;
}
function J(e) {
    let { isUserEligibleForIncentive: t } = e;
    (D = !1), null != t && (b = t);
}
function ee() {
    D = !1;
}
function et() {
    D = !0;
}
class en extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(l.default), this.syncWith([l.default], U);
    }
    checkAndFetchReferralsRemaining() {
        null == E && !I && A < _ && (null == v || v < Date.now()) && (0, u.C$)();
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), E;
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), null == h ? [] : h;
    }
    isFetchingReferralsRemaining() {
        return I;
    }
    isFetchingRecipientEligibility(e) {
        return m.has(e);
    }
    getRecipientEligibility(e) {
        return void 0 === f[e] && !m.has(e) && (0, u.Ve)(e), f[e];
    }
    getRelevantUserTrialOffer(e) {
        return S[e];
    }
    isResolving(e) {
        return T.has(e);
    }
    getEligibleUsers() {
        return N;
    }
    getFetchingEligibleUsers() {
        return O;
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
        return b;
    }
    getIsSenderQualifiedForIncentive() {
        return L;
    }
    getIsFetchingReferralIncentiveEligibility() {
        return D;
    }
    getSenderIncentiveState() {
        return M;
    }
}
d(en, 'displayName', 'ReferralTrialStore'),
    (t.Z = new en(s.Z, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: z,
        BILLING_REFERRALS_REMAINING_FETCH_START: w,
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: x,
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: G,
        BILLING_CREATE_REFERRAL_PREVIEW_START: k,
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_SUCCESS: J,
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_FAIL: ee,
        BILLING_GET_REFERRAL_INCENTIVE_STATUS_START: et,
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: B,
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: F,
        BILLING_CREATE_REFERRAL_SUCCESS: Z,
        CREATE_REFERRALS_SUCCESS: V,
        BILLING_REFERRAL_RESOLVE_SUCCESS: Y,
        BILLING_REFERRAL_RESOLVE_FAIL: j,
        REFERRALS_FETCH_ELIGIBLE_USER_START: Q,
        REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: X,
        REFERRALS_FETCH_ELIGIBLE_USER_FAIL: $,
        LOAD_MESSAGES_SUCCESS: K,
        MESSAGE_CREATE: W,
        LOAD_MESSAGES_AROUND_SUCCESS: K,
        LOGOUT: P
    }));
