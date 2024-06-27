n.d(t, {
  C8: function() {
    return d
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
var s = n(570140);
n(893776), n(703656);
var a = n(626135),
  i = n(723359),
  r = n(981631);

function l(e) {
  a.default.track(r.rMx.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), s.Z.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function o(e) {
  s.Z.wait(() => s.Z.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), void 0 !== e && a.default.track(r.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_CLOSE
  })
}

function c(e) {
  s.Z.wait(() => {
    s.Z.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), a.default.track(r.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_SUCCESS
  })
}

function d(e, t) {
  s.Z.wait(() => {
    s.Z.dispatch({
      type: "AGE_GATE_FAILURE_MODAL_OPEN",
      underageMessage: t
    })
  }), a.default.track(r.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_FAILURE
  })
}