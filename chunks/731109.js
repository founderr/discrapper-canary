"use strict";
n.r(t), n.d(t, {
  submitDateOfBirth: function() {
    return u
  },
  preventUnderageRegistration: function() {
    return d
  },
  logoutUnderageNewUser: function() {
    return c
  }
});
var s = n("872717"),
  a = n("913144"),
  r = n("395724"),
  i = n("599110"),
  l = n("586391"),
  o = n("49111");

function u(e, t) {
  return (0, r.default)(e, t), i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
    source: t,
    action: l.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
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
    }), i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
      source: t,
      action: l.AgeGateAnalyticAction.AGE_GATE_SUCCESS
    })
  })
}

function d(e) {
  a.default.dispatch({
    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
  }), i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
  })
}

function c(e) {
  a.default.dispatch({
    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
  }), i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
  })
}