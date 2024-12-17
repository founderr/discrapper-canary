var i,
    E,
    l,
    _,
    a = n(979079),
    r = n.n(a),
    u = n(442837),
    A = n(570140),
    o = n(531441),
    s = n(800530);
let c = {},
    S = {},
    T = { state: o.Sn.ALL_GOOD },
    U = !1,
    d = !1,
    p = null,
    f = null,
    g = !1,
    C = !1,
    F = [],
    I = !1,
    R = null,
    D = s.bK.DIDNT_VIOLATE_POLICY,
    H = '',
    L = '',
    N = '',
    b = 0,
    O = null,
    P = !1,
    h = s.oE.NONE,
    Y = null;
function B(t) {
    let {} = t;
    (N = ''), (O = null), (P = !1);
}
class y extends (_ = u.ZP.Store) {
    isFetching() {
        return U;
    }
    getClassifications() {
        return Object.values(c);
    }
    getClassification(t) {
        return c[t];
    }
    getAccountStanding() {
        return T;
    }
    getFetchError() {
        return p;
    }
    isInitialized() {
        return d;
    }
    getClassificationRequestState(t) {
        return S[t];
    }
    getAppealClassificationId() {
        return f;
    }
    getIsDsaEligible() {
        return g;
    }
    getIsAppealEligible() {
        return C;
    }
    getAppealEligibility() {
        return F;
    }
    getAppealSignal() {
        return D;
    }
    getFreeTextAppealReason() {
        return H;
    }
    getIsSubmitting() {
        return I;
    }
    getSubmitError() {
        return R;
    }
    getUsername() {
        return L;
    }
    getAgeVerificationWebviewUrl() {
        return N;
    }
    getAgeVerificationError() {
        return O;
    }
    getIsLoadingAgeVerification() {
        return P;
    }
    getAgeCheckStatus() {
        return h;
    }
    getAgeCheckError() {
        return Y;
    }
    getAgeCheckAttempts() {
        return b;
    }
}
(l = 'SafetyHubStore'),
    (E = 'displayName') in (i = y)
        ? Object.defineProperty(i, E, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[E] = l),
    (e.Z = new y(A.Z, {
        SAFETY_HUB_FETCH_START: function (t) {
            U = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let { classifications: e, accountStanding: n, isDsaEligible: i, isAppealEligible: E, username: l, appealEligibility: _ } = t;
            (c = r()(e, 'id')), (T = n), (g = i), (C = E), (U = !1), (d = !0), (p = null), (L = l), (F = _);
        },
        SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: e } = t;
            (U = !1), (d = !1), (p = e);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (S[t.classificationId] = o.OY.PENDING), (U = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let { classification: e, accountStanding: n, isDsaEligible: i, username: E, isAppealEligible: l } = t;
            (c[e.id] = e), (S[e.id] = o.OY.SUCCESS), (T = n), (U = !1), (p = null), (g = i), (C = l), (d = !0), (L = E);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: e, classificationId: n } = t;
            (U = !1), (p = e), (S[n] = o.OY.FAILED), (d = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: e } = t;
            f = e;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (f = null), (D = s.bK.DIDNT_VIOLATE_POLICY), (H = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: e } = t;
            D = e;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: e } = t;
            H = e;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (I = !0), (R = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: e } = t;
            (I = !1), (R = null), (c[e].appeal_status = { status: o.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: e } = t;
            (I = !1), (R = e);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (N = ''), (O = null), (P = !0);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { verificationWebviewUrl: e } = t;
            (N = e), (O = null), (P = !1);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (N = ''), (O = e), (P = !1);
        },
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: B,
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: B,
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
            let {} = t;
            for (let t in ((h = s.oE.LOADING), c)) c[t].is_coppa && (c[t].appeal_status = { status: o.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function (t) {
            let {} = t;
            (h = s.oE.LOADING), (Y = null);
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (h = s.oE.LOADING), (Y = null), (b += 1);
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { success: e } = t;
            (h = e ? s.oE.SUCCESS : b < s.o6 ? s.oE.LOADING : s.oE.FAILURE), (Y = null);
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (h = s.oE.ERROR), (Y = e);
        },
        LOGOUT: function () {
            (U = !1), (c = {}), (T = { state: o.Sn.ALL_GOOD }), (f = null), (D = s.bK.DIDNT_VIOLATE_POLICY), (H = ''), (F = []);
        }
    }));
