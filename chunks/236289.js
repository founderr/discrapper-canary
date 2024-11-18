var i,
    a,
    l,
    o,
    s = e(979079),
    c = e.n(s),
    r = e(442837),
    u = e(570140),
    _ = e(531441),
    d = e(800530);
let f = {},
    E = {},
    p = { state: _.Sn.ALL_GOOD },
    S = !1,
    A = !1,
    T = null,
    g = null,
    C = !1,
    b = !1,
    U = !1,
    I = null,
    F = d.bK.DIDNT_VIOLATE_POLICY,
    H = '',
    h = '';
class R extends (o = r.ZP.Store) {
    isFetching() {
        return S;
    }
    getClassifications() {
        return Object.values(f);
    }
    getClassification(t) {
        return f[t];
    }
    getAccountStanding() {
        return p;
    }
    getFetchError() {
        return T;
    }
    isInitialized() {
        return A;
    }
    getClassificationRequestState(t) {
        return E[t];
    }
    getAppealClassificationId() {
        return g;
    }
    getIsDsaEligible() {
        return C;
    }
    getIsAppealEligible() {
        return b;
    }
    getAppealSignal() {
        return F;
    }
    getFreeTextAppealReason() {
        return H;
    }
    getIsSubmitting() {
        return U;
    }
    getSubmitError() {
        return I;
    }
    getUsername() {
        return h;
    }
}
(l = 'SafetyHubStore'),
    (a = 'displayName') in (i = R)
        ? Object.defineProperty(i, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = l),
    (n.Z = new R(u.Z, {
        SAFETY_HUB_FETCH_START: function (t) {
            S = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let { classifications: n, accountStanding: e, isDsaEligible: i, isAppealEligible: a, username: l } = t;
            (f = c()(n, 'id')), (p = e), (C = i), (b = a), (S = !1), (A = !0), (T = null), (h = l);
        },
        SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: n } = t;
            (S = !1), (A = !1), (T = n);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (E[t.classificationId] = _.OY.PENDING), (S = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let { classification: n, accountStanding: e, isDsaEligible: i, username: a, isAppealEligible: l } = t;
            (f[n.id] = n), (E[n.id] = _.OY.SUCCESS), (p = e), (S = !1), (T = null), (C = i), (b = l), (A = !0), (h = a);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: n, classificationId: e } = t;
            (S = !1), (T = n), (E[e] = _.OY.FAILED), (A = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: n } = t;
            g = n;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (g = null), (F = d.bK.DIDNT_VIOLATE_POLICY), (H = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: n } = t;
            F = n;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: n } = t;
            H = n;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (U = !0), (I = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: n } = t;
            (U = !1), (I = null), (f[n].appeal_status = { status: _.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: n } = t;
            (U = !1), (I = n);
        },
        LOGOUT: function () {
            (S = !1), (f = {}), (p = { state: _.Sn.ALL_GOOD }), (g = null), (F = d.bK.DIDNT_VIOLATE_POLICY), (H = '');
        }
    }));
