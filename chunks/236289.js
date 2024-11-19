var i,
    l,
    a,
    r,
    u = n(979079),
    _ = n.n(u),
    o = n(442837),
    E = n(570140),
    s = n(531441),
    c = n(800530);
let S = {},
    A = {},
    d = { state: s.Sn.ALL_GOOD },
    T = !1,
    p = !1,
    f = null,
    I = null,
    U = !1,
    g = !1,
    F = [],
    C = !1,
    b = null,
    R = c.bK.DIDNT_VIOLATE_POLICY,
    H = '',
    h = '',
    N = '',
    y = null,
    B = !1;
function Y(e) {
    let {} = e;
    (N = ''), (y = null), (B = !1);
}
class O extends (r = o.ZP.Store) {
    isFetching() {
        return T;
    }
    getClassifications() {
        return Object.values(S);
    }
    getClassification(e) {
        return S[e];
    }
    getAccountStanding() {
        return d;
    }
    getFetchError() {
        return f;
    }
    isInitialized() {
        return p;
    }
    getClassificationRequestState(e) {
        return A[e];
    }
    getAppealClassificationId() {
        return I;
    }
    getIsDsaEligible() {
        return U;
    }
    getIsAppealEligible() {
        return g;
    }
    getAppealEligibility() {
        return F;
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
        return h;
    }
    getAgeVerificationWebviewUrl() {
        return N;
    }
    getAgeVerificationError() {
        return y;
    }
    getIsLoadingAgeVerification() {
        return B;
    }
}
(a = 'SafetyHubStore'),
    (l = 'displayName') in (i = O)
        ? Object.defineProperty(i, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = a),
    (t.Z = new O(E.Z, {
        SAFETY_HUB_FETCH_START: function (e) {
            T = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (e) {
            let { classifications: t, accountStanding: n, isDsaEligible: i, isAppealEligible: l, username: a, appealEligibility: r } = e;
            (S = _()(t, 'id')), (d = n), (U = i), (g = l), (T = !1), (p = !0), (f = null), (h = a), (F = r);
        },
        SAFETY_HUB_FETCH_FAILURE: function (e) {
            let { error: t } = e;
            (T = !1), (p = !1), (f = t);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (e) {
            (A[e.classificationId] = s.OY.PENDING), (T = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (e) {
            let { classification: t, accountStanding: n, isDsaEligible: i, username: l, isAppealEligible: a } = e;
            (S[t.id] = t), (A[t.id] = s.OY.SUCCESS), (d = n), (T = !1), (f = null), (U = i), (g = a), (p = !0), (h = l);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (e) {
            let { error: t, classificationId: n } = e;
            (T = !1), (f = t), (A[n] = s.OY.FAILED), (p = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (e) {
            let { classificationId: t } = e;
            I = t;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (I = null), (R = c.bK.DIDNT_VIOLATE_POLICY), (H = '');
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
            (C = !1), (b = null), (S[t].appeal_status = { status: s.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (e) {
            let { error: t } = e;
            (C = !1), (b = t);
        },
        SAFETY_HUB_REQUEST_AGE_VERIFICATION_START: function (e) {
            let {} = e;
            (N = ''), (y = null), (B = !0);
        },
        SAFETY_HUB_REQUEST_AGE_VERIFICATION_SUCCESS: function (e) {
            let { verificationWebviewUrl: t } = e;
            (N = t), (y = null), (B = !1);
        },
        SAFETY_HUB_REQUEST_AGE_VERIFICATION_FAILURE: function (e) {
            let { error: t } = e;
            (N = ''), (y = t), (B = !1);
        },
        SAFETY_HUB_REQUEST_AGE_VERIFICATION_MODAL_OPEN: Y,
        SAFETY_HUB_REQUEST_AGE_VERIFICATION_MODAL_CLOSE: Y,
        LOGOUT: function () {
            (T = !1), (S = {}), (d = { state: s.Sn.ALL_GOOD }), (I = null), (R = c.bK.DIDNT_VIOLATE_POLICY), (H = ''), (F = []);
        }
    }));
