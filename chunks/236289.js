var e,
    a,
    l,
    o,
    s = i(979079),
    c = i.n(s),
    r = i(442837),
    u = i(570140),
    _ = i(531441),
    d = i(800530);
let f = {},
    E = {},
    p = { state: _.Sn.ALL_GOOD },
    S = !1,
    A = !1,
    T = null,
    g = null,
    C = !1,
    b = !1,
    U = [],
    I = !1,
    F = null,
    H = d.bK.DIDNT_VIOLATE_POLICY,
    y = '',
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
    getAppealEligibility() {
        return U;
    }
    getAppealSignal() {
        return H;
    }
    getFreeTextAppealReason() {
        return y;
    }
    getIsSubmitting() {
        return I;
    }
    getSubmitError() {
        return F;
    }
    getUsername() {
        return h;
    }
}
(l = 'SafetyHubStore'),
    (a = 'displayName') in (e = R)
        ? Object.defineProperty(e, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (e[a] = l),
    (n.Z = new R(u.Z, {
        SAFETY_HUB_FETCH_START: function (t) {
            S = !0;
        },
        SAFETY_HUB_FETCH_SUCCESS: function (t) {
            let { classifications: n, accountStanding: i, isDsaEligible: e, isAppealEligible: a, username: l, appealEligibility: o } = t;
            (f = c()(n, 'id')), (p = i), (C = e), (b = a), (S = !1), (A = !0), (T = null), (h = l), (U = o);
        },
        SAFETY_HUB_FETCH_FAILURE: function (t) {
            let { error: n } = t;
            (S = !1), (A = !1), (T = n);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_START: function (t) {
            (E[t.classificationId] = _.OY.PENDING), (S = !0);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function (t) {
            let { classification: n, accountStanding: i, isDsaEligible: e, username: a, isAppealEligible: l } = t;
            (f[n.id] = n), (E[n.id] = _.OY.SUCCESS), (p = i), (S = !1), (T = null), (C = e), (b = l), (A = !0), (h = a);
        },
        SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function (t) {
            let { error: n, classificationId: i } = t;
            (S = !1), (T = n), (E[i] = _.OY.FAILED), (A = !1);
        },
        SAFETY_HUB_APPEAL_OPEN: function (t) {
            let { classificationId: n } = t;
            g = n;
        },
        SAFETY_HUB_APPEAL_CLOSE: function () {
            (g = null), (H = d.bK.DIDNT_VIOLATE_POLICY), (y = '');
        },
        SAFETY_HUB_APPEAL_SIGNAL_SELECT: function (t) {
            let { signal: n } = t;
            H = n;
        },
        SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function (t) {
            let { userInput: n } = t;
            y = n;
        },
        SAFETY_HUB_REQUEST_REVIEW_START: function (t) {
            let {} = t;
            (I = !0), (F = null);
        },
        SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function (t) {
            let { classificationId: n } = t;
            (I = !1), (F = null), (f[n].appeal_status = { status: _.hQ.REVIEW_PENDING });
        },
        SAFETY_HUB_REQUEST_REVIEW_FAILURE: function (t) {
            let { error: n } = t;
            (I = !1), (F = n);
        },
        LOGOUT: function () {
            (S = !1), (f = {}), (p = { state: _.Sn.ALL_GOOD }), (g = null), (H = d.bK.DIDNT_VIOLATE_POLICY), (y = ''), (U = []);
        }
    }));
