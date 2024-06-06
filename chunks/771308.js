"use strict";
n.r(t), n.d(t, {
  logoutUnderageNewUser: function() {
    return c
  },
  preventUnderageRegistration: function() {
    return d
  },
  submitDateOfBirth: function() {
    return u
  }
});
var s = n("544891"),
  a = n("570140"),
  i = n("959776"),
  l = n("626135"),
  r = n("723359"),
  o = n("981631");

function u(e, t) {
  return (0, i.default)(e, t), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
    source: t,
    action: r.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
  }), s.HTTP.patch({
    url: o.Endpoints.ME,
    oldFormErrors: !0,
    body: {
      date_of_birth: e.format("YYYY-MM-DD")
    }
  }).then(e => {
    let n = e.body;
    a.default.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: n
    }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
      source: t,
      action: r.AgeGateAnalyticAction.AGE_GATE_SUCCESS
    })
  })
}

function d(e) {
  a.default.dispatch({
    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
  }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: r.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
  })
}

function c(e) {
  a.default.dispatch({
    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
  }), l.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: r.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
  })
}