s.d(t, {
  C8: function() {
    return E
  },
  mN: function() {
    return l
  },
  qV: function() {
    return o
  },
  qq: function() {
    return c
  }
});
var n = s(570140);
s(893776), s(703656);
var a = s(626135),
  i = s(723359),
  r = s(981631);

function l(e) {
  a.default.track(r.rMx.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), n.Z.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function o(e) {
  n.Z.wait(() => n.Z.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), void 0 !== e && a.default.track(r.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_CLOSE
  })
}

function c(e) {
  n.Z.wait(() => {
    n.Z.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), a.default.track(r.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_SUCCESS
  })
}

function E(e, t) {
  n.Z.wait(() => {
    n.Z.dispatch({
      type: "AGE_GATE_FAILURE_MODAL_OPEN",
      underageMessage: t
    })
  }), a.default.track(r.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_FAILURE
  })
}