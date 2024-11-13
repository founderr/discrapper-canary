var i,
    a,
    l,
    o,
    s = e(979079),
    c = e.n(s),
    u = e(442837),
    r = e(570140),
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
    R = '';
class v extends (o = u.ZP.Store) {
    isFetching() {
        return S;
    }
    getClassifications() {
        return Object.values(f);
    }
    getClassification(n) {
        return f[n];
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
    getClassificationRequestState(n) {
        return E[n];
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
        return R;
    }
}
(l = 'SafetyHubStore'),
    (a = 'displayName') in (i = v)
        ? Object.defineProperty(i, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = l),
    (t.Z = new v(r.Z, {
        SAFETY_HUB_FETCH_START: function (n) {
            S = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (n) {
            let { classifications: t, accountStanding: e, isDsaEligible: i, isAppealEligible: a, username: l } = n;
            (f = c()(t, 'id')), (p = e), (C = i), (b = a), (S = !1), (A = !0), (T = null), (R = l);
        },
        SAFETY_HUB_FETCH_FAILURE: function (n) {
            let { error: t } = n;
            (S = !1), (A = !1), (T = t);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (n) {
            (E[n.classificationId] = _.OY.PENDING), (S = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (n) {
            let { classification: t, accountStanding: e, isDsaEligible: i, username: a, isAppealEligible: l } = n;
            (f[t.id] = t), (E[t.id] = _.OY.SUCCESS), (p = e), (S = !1), (T = null), (C = i), (b = l), (A = !0), (R = a);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (n) {
            let { error: t, classificationId: e } = n;
            (S = !1), (T = t), (E[e] = _.OY.FAILED), (A = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (n) {
            let { classificationId: t } = n;
            g = t;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (g = null), (F = d.bK.DIDNT_VIOLATE_POLICY), (H = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (n) {
            let { signal: t } = n;
            F = t;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (n) {
            let { userInput: t } = n;
            H = t;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (n) {
            let {} = n;
            (U = !0), (I = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (n) {
            let { classificationId: t } = n;
            (U = !1), (I = null), (f[t].appeal_status = { status: _.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (n) {
            let { error: t } = n;
            (U = !1), (I = t);
        },
        LOGOUT: function () {
            (S = !1), (f = {}), (p = { state: _.Sn.ALL_GOOD }), (g = null), (F = d.bK.DIDNT_VIOLATE_POLICY), (H = '');
        }
    }));
