n.d(t, {
  C8: function() {
    return d
  },
  mN: function() {
    return r
  },
  qV: function() {
    return c
  },
  qq: function() {
    return o
  }
});
var s = n(570140);
n(893776), n(703656);
var a = n(626135),
  i = n(723359),
  l = n(981631);

function r(e) {
  a.default.track(l.rMx.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), s.Z.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function c(e) {
  s.Z.wait(() => s.Z.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), void 0 !== e && a.default.track(l.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_CLOSE
  })
}

function o(e) {
  s.Z.wait(() => {
    s.Z.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), a.default.track(l.rMx.AGE_GATE_ACTION, {
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
  }), a.default.track(l.rMx.AGE_GATE_ACTION, {
    source: e,
    action: i.Al.AGE_GATE_FAILURE
  })
}