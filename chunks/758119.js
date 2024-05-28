"use strict";
s.r(t), s.d(t, {
  closeAgeGateModal: function() {
    return u
  },
  openAgeGateModal: function() {
    return r
  },
  openFailureAgeGateModal: function() {
    return d
  },
  openSuccessAgeGateModal: function() {
    return o
  }
});
var a = s("570140");
s("893776"), s("703656");
var n = s("626135"),
  l = s("723359"),
  i = s("981631");

function r(e) {
  n.default.track(i.AnalyticEvents.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), a.default.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function u(e) {
  a.default.wait(() => a.default.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), void 0 !== e && n.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_CLOSE
  })
}

function o(e) {
  a.default.wait(() => {
    a.default.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), n.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_SUCCESS
  })
}

function d(e, t) {
  a.default.wait(() => {
    a.default.dispatch({
      type: "AGE_GATE_FAILURE_MODAL_OPEN",
      underageMessage: t
    })
  }), n.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_FAILURE
  })
}