"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("816494"),
  r = n.n(i),
  l = n("446674"),
  a = n("913144"),
  s = n("908539"),
  o = n("170213");
let u = {},
  c = {},
  d = {
    state: s.AccountStandingState.ALL_GOOD
  },
  f = !1,
  E = !1,
  _ = null,
  S = null,
  h = !1,
  p = !1,
  I = null,
  T = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
  C = "";
class v extends l.default.Store {
  isFetching() {
    return f
  }
  getClassifications() {
    return Object.values(u)
  }
  getClassification(e) {
    return u[e]
  }
  getAccountStanding() {
    return d
  }
  getFetchError() {
    return _
  }
  isInitialized() {
    return E
  }
  getClassificationRequestState(e) {
    return c[e]
  }
  getAppealClassificationId() {
    return S
  }
  getIsDsaEligible() {
    return h
  }
  getAppealSignal() {
    return T
  }
  getFreeTextAppealReason() {
    return C
  }
  getIsSubmitting() {
    return p
  }
  getSubmitError() {
    return I
  }
}
v.displayName = "SafetyHubStore";
var m = new v(a.default, {
  SAFETY_HUB_FETCH_START: function(e) {
    f = !0
  },
  SAFETY_HUB_FETCH_SUCCESS: function(e) {
    let {
      classifications: t,
      accountStanding: n,
      isDsaEligible: i
    } = e;
    u = r(t, "id"), d = n, h = i, f = !1, E = !0, _ = null
  },
  SAFETY_HUB_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    f = !1, E = !1, _ = t
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(e) {
    c[e.classificationId] = s.ClassificationRequestState.PENDING, f = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(e) {
    let {
      classification: t,
      accountStanding: n,
      isDsaEligible: i
    } = e;
    u[t.id] = t, c[t.id] = s.ClassificationRequestState.SUCCESS, d = n, f = !1, _ = null, h = i
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(e) {
    let {
      error: t,
      classificationId: n
    } = e;
    f = !1, _ = t, c[n] = s.ClassificationRequestState.FAILED
  },
  SAFETY_HUB_APPEAL_OPEN: function(e) {
    let {
      classificationId: t
    } = e;
    S = t
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    S = null, T = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, C = ""
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(e) {
    let {
      signal: t
    } = e;
    T = t
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(e) {
    let {
      userInput: t
    } = e;
    C = t
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(e) {
    let {} = e;
    p = !0, I = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(e) {
    let {
      classificationId: t
    } = e;
    p = !1, I = null, u[t].appeal_status = {
      status: s.AppealStatusType.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(e) {
    let {
      error: t
    } = e;
    p = !1, I = t
  },
  LOGOUT: function() {
    f = !1, u = {}, d = {
      state: s.AccountStandingState.ALL_GOOD
    }, S = null, T = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, C = ""
  }
})