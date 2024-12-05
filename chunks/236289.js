var i,
    l,
    E,
    _,
    a = n(979079),
    r = n.n(a),
    u = n(442837),
    o = n(570140),
    A = n(531441),
    s = n(800530);
let c = {},
    S = {},
    T = { state: A.Sn.ALL_GOOD },
    d = !1,
    U = !1,
    p = null,
    f = null,
    g = !1,
    C = !1,
    F = [],
    I = !1,
    R = null,
    H = s.bK.DIDNT_VIOLATE_POLICY,
    D = '',
    b = '',
    N = '',
    L = null,
    h = !1,
    P = s.oE.NONE,
    O = null;
function B(t) {
    let {} = t;
    (N = ''), (L = null), (h = !1);
}
class Y extends (_ = u.ZP.Store) {
    isFetching() {
        return d;
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
        return U;
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
        return H;
    }
    getFreeTextAppealReason() {
        return D;
    }
    getIsSubmitting() {
        return I;
    }
    getSubmitError() {
        return R;
    }
    getUsername() {
        return b;
    }
    getAgeVerificationWebviewUrl() {
        return N;
    }
    getAgeVerificationError() {
        return L;
    }
    getIsLoadingAgeVerification() {
        return h;
    }
    getAgeCheckStatus() {
        return P;
    }
    getAgeCheckError() {
        return O;
    }
}
(E = 'SafetyHubStore'),
    (l = 'displayName') in (i = Y)
        ? Object.defineProperty(i, l, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = E),
    (e.Z = new Y(o.Z, {
        SAFETY_HUB_FETCH_START: function (t) {
            d = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let { classifications: e, accountStanding: n, isDsaEligible: i, isAppealEligible: l, username: E, appealEligibility: _ } = t;
            (c = r()(e, 'id')), (T = n), (g = i), (C = l), (d = !1), (U = !0), (p = null), (b = E), (F = _);
        },
        SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: e } = t;
            (d = !1), (U = !1), (p = e);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (S[t.classificationId] = A.OY.PENDING), (d = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let { classification: e, accountStanding: n, isDsaEligible: i, username: l, isAppealEligible: E } = t;
            (c[e.id] = e), (S[e.id] = A.OY.SUCCESS), (T = n), (d = !1), (p = null), (g = i), (C = E), (U = !0), (b = l);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: e, classificationId: n } = t;
            (d = !1), (p = e), (S[n] = A.OY.FAILED), (U = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: e } = t;
            f = e;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (f = null), (H = s.bK.DIDNT_VIOLATE_POLICY), (D = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: e } = t;
            H = e;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: e } = t;
            D = e;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (I = !0), (R = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: e } = t;
            (I = !1), (R = null), (c[e].appeal_status = { status: A.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: e } = t;
            (I = !1), (R = e);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (N = ''), (L = null), (h = !0);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { verificationWebviewUrl: e } = t;
            (N = e), (L = null), (h = !1);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (N = ''), (L = e), (h = !1);
        },
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: B,
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: B,
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function (t) {
            let {} = t;
            for (let t in ((P = s.oE.PENDING), c)) c[t].is_coppa && (c[t].appeal_status = { status: A.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function (t) {
            let {} = t;
            (P = s.oE.LOADING), (O = null);
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (t) {
            let { success: e } = t;
            (P = e ? s.oE.SUCCESS : s.oE.FAILURE), (O = null);
        },
        SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (t) {
            let { error: e } = t;
            (P = s.oE.ERROR), (O = e);
        },
        LOGOUT: function () {
            (d = !1), (c = {}), (T = { state: A.Sn.ALL_GOOD }), (f = null), (H = s.bK.DIDNT_VIOLATE_POLICY), (D = ''), (F = []);
        }
    }));
