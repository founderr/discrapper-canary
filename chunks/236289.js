var i,
    l,
    a,
    r,
    u = n(979079),
    _ = n.n(u),
    E = n(442837),
    o = n(570140),
    s = n(531441),
    c = n(800530);
let A = {},
    S = {},
    d = { state: s.Sn.ALL_GOOD },
    T = !1,
    f = !1,
    p = null,
    U = null,
    g = !1,
    F = !1,
    I = [],
    C = !1,
    b = null,
    R = c.bK.DIDNT_VIOLATE_POLICY,
    H = '',
    D = '',
    L = '',
    h = null,
    N = !1;
function y(e) {
    let {} = e;
    (L = ''), (h = null), (N = !1);
}
class B extends (r = E.ZP.Store) {
    isFetching() {
        return T;
    }
    getClassifications() {
        return Object.values(A);
    }
    getClassification(e) {
        return A[e];
    }
    getAccountStanding() {
        return d;
    }
    getFetchError() {
        return p;
    }
    isInitialized() {
        return f;
    }
    getClassificationRequestState(e) {
        return S[e];
    }
    getAppealClassificationId() {
        return U;
    }
    getIsDsaEligible() {
        return g;
    }
    getIsAppealEligible() {
        return F;
    }
    getAppealEligibility() {
        return I;
    }
    getAppealSignal() {
        return R;
    }
    getFreeTextAppealReason() {
        return H;
    }
    getIsSubmitting() {
        return C;
    }
    getSubmitError() {
        return b;
    }
    getUsername() {
        return D;
    }
    getAgeVerificationWebviewUrl() {
        return L;
    }
    getAgeVerificationError() {
        return h;
    }
    getIsLoadingAgeVerification() {
        return N;
    }
}
(a = 'SafetyHubStore'),
    (l = 'displayName') in (i = B)
        ? Object.defineProperty(i, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = a),
    (t.Z = new B(o.Z, {
        SAFETY_HUB_FETCH_START: function (e) {
            T = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (e) {
            let { classifications: t, accountStanding: n, isDsaEligible: i, isAppealEligible: l, username: a, appealEligibility: r } = e;
            (A = _()(t, 'id')), (d = n), (g = i), (F = l), (T = !1), (f = !0), (p = null), (D = a), (I = r);
        },
        SAFETY_HUB_FETCH_FAILURE: function (e) {
            let { error: t } = e;
            (T = !1), (f = !1), (p = t);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (e) {
            (S[e.classificationId] = s.OY.PENDING), (T = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (e) {
            let { classification: t, accountStanding: n, isDsaEligible: i, username: l, isAppealEligible: a } = e;
            (A[t.id] = t), (S[t.id] = s.OY.SUCCESS), (d = n), (T = !1), (p = null), (g = i), (F = a), (f = !0), (D = l);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (e) {
            let { error: t, classificationId: n } = e;
            (T = !1), (p = t), (S[n] = s.OY.FAILED), (f = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (e) {
            let { classificationId: t } = e;
            U = t;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (U = null), (R = c.bK.DIDNT_VIOLATE_POLICY), (H = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (e) {
            let { signal: t } = e;
            R = t;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (e) {
            let { userInput: t } = e;
            H = t;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (e) {
            let {} = e;
            (C = !0), (b = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (e) {
            let { classificationId: t } = e;
            (C = !1), (b = null), (A[t].appeal_status = { status: s.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
            let { error: t } = e;
            (C = !1), (b = t);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function (e) {
            let {} = e;
            (L = ''), (h = null), (N = !0);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function (e) {
            let { verificationWebviewUrl: t } = e;
            (L = t), (h = null), (N = !1);
        },
        SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function (e) {
            let { error: t } = e;
            (L = ''), (h = t), (N = !1);
        },
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: y,
        SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: y,
        LOGOUT: function () {
            (T = !1), (A = {}), (d = { state: s.Sn.ALL_GOOD }), (U = null), (R = c.bK.DIDNT_VIOLATE_POLICY), (H = ''), (I = []);
        }
    }));
