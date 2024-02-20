"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("816494"),
  a = n.n(i),
  r = n("446674"),
  l = n("913144"),
  s = n("908539"),
  u = n("170213");
let o = {},
  c = {},
  d = {
    state: s.AccountStandingState.ALL_GOOD
  },
  f = !1,
  E = !1,
  _ = null,
  S = null,
  T = !1,
  I = !1,
  p = null,
  h = u.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
  A = "";
class N extends r.default.Store {
  isFetching() {
    return f
  }
  getClassifications() {
    return Object.values(o)
  }
  getClassification(e) {
    return o[e]
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
    return T
  }
  getAppealSignal() {
    return h
  }
  getFreeTextAppealReason() {
    return A
  }
  getIsSubmitting() {
    return I
  }
  getSubmitError() {
    return p
  }
}
N.displayName = "SafetyHubStore";
var C = new N(l.default, {
  SAFETY_HUB_FETCH_START: function(e) {
    f = !0
  },
  SAFETY_HUB_FETCH_SUCCESS: function(e) {
    let {
      classifications: t,
      accountStanding: n,
      isDsaEligible: i
    } = e;
    o = a(t, "id"), d = n, T = i, f = !1, E = !0, _ = null
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
    o[t.id] = t, c[t.id] = s.ClassificationRequestState.SUCCESS, d = n, f = !1, _ = null, T = i
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
    S = null, h = u.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, A = ""
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
    A = t
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(e) {
    let {} = e;
    I = !0, p = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(e) {
    let {
      classificationId: t
    } = e;
    I = !1, p = null, o[t].appeal_status = {
      status: s.AppealStatusType.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(e) {
    let {
      error: t
    } = e;
    I = !1, p = t
  },
  LOGOUT: function() {
    f = !1, o = {}, d = {
      state: s.AccountStandingState.ALL_GOOD
    }, S = null, h = u.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, A = ""
  }
})