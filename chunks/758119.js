"use strict";
s.r(t), s.d(t, {
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
var n = s("570140");
s("893776"), s("703656");
var a = s("626135"),
  l = s("723359"),
  i = s("981631");

function r(e) {
  a.default.track(i.AnalyticEvents.OPEN_MODAL, {
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
  })), void 0 !== e && a.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_CLOSE
  })
}

function u(e) {
  n.default.wait(() => {
    n.default.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), a.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
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
  }), a.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_FAILURE
  })
}