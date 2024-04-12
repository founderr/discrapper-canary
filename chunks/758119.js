"use strict";
a.r(t), a.d(t, {
  closeAgeGateModal: function() {
    return o
  },
  openAgeGateModal: function() {
    return r
  },
  openFailureAgeGateModal: function() {
    return d
  },
  openSuccessAgeGateModal: function() {
    return u
  }
});
var n = a("570140");
a("893776"), a("703656");
var s = a("626135"),
  l = a("723359"),
  i = a("981631");

function r(e) {
  s.default.track(i.AnalyticEvents.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), n.default.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function o(e) {
  n.default.wait(() => n.default.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), void 0 !== e && s.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_CLOSE
  })
}

function u(e) {
  n.default.wait(() => {
    n.default.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), s.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_SUCCESS
  })
}

function d(e, t) {
  n.default.wait(() => {
    n.default.dispatch({
      type: "AGE_GATE_FAILURE_MODAL_OPEN",
      underageMessage: t
    })
  }), s.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_FAILURE
  })
}