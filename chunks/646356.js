"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var i = n("816494"),
  l = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("908539"),
  s = n("170213");
let u = {},
  c = {},
  d = {
    state: o.AccountStandingState.ALL_GOOD
  },
  f = !1,
  E = !1,
  _ = null,
  S = null,
  p = !1,
  I = !1,
  T = null,
  h = s.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
  C = "";
class g extends r.default.Store {
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
    return p
  }
  getAppealSignal() {
    return h
  }
  getFreeTextAppealReason() {
    return C
  }
  getIsSubmitting() {
    return I
  }
  getSubmitError() {
    return T
  }
}
g.displayName = "SafetyHubStore";
var v = new g(a.default, {
  SAFETY_HUB_FETCH_START: function(e) {
    f = !0
  },
  SAFETY_HUB_FETCH_SUCCESS: function(e) {
    let {
      classifications: t,
      accountStanding: n,
      isDsaEligible: i
    } = e;
    u = l(t, "id"), d = n, p = i, f = !1, E = !0, _ = null
  },
  SAFETY_HUB_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    f = !1, E = !1, _ = t
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(e) {
    c[e.classificationId] = o.ClassificationRequestState.PENDING, f = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(e) {
    let {
      classification: t,
      accountStanding: n,
      isDsaEligible: i
    } = e;
    u[t.id] = t, c[t.id] = o.ClassificationRequestState.SUCCESS, d = n, f = !1, _ = null, p = i
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(e) {
    let {
      error: t,
      classificationId: n
    } = e;
    f = !1, _ = t, c[n] = o.ClassificationRequestState.FAILED
  },
  SAFETY_HUB_APPEAL_OPEN: function(e) {
    let {
      classificationId: t
    } = e;
    S = t
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    S = null, h = s.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, C = ""
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(e) {
    let {
      signal: t
    } = e;
    h = t
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(e) {
    let {
      userInput: t
    } = e;
    C = t
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(e) {
    let {} = e;
    I = !0, T = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(e) {
    let {
      classificationId: t
    } = e;
    I = !1, T = null, u[t].appeal_status = {
      status: o.AppealStatusType.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(e) {
    let {
      error: t
    } = e;
    I = !1, T = t
  },
  LOGOUT: function() {
    f = !1, u = {}, d = {
      state: o.AccountStandingState.ALL_GOOD
    }, S = null, h = s.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, C = ""
  }
})