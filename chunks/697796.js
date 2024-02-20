"use strict";
n.r(t), n.d(t, {
  handoffBegin: function() {
    return i
  },
  handoffEnd: function() {
    return o
  },
  handoffFromApp: function() {
    return l
  },
  handoffUnavailable: function() {
    return u
  },
  handoffSetUser: function() {
    return a
  }
});
var r = n("913144");

function i() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
  r.default.dispatch({
    type: "BROWSER_HANDOFF_BEGIN",
    timeout: e
  })
}

function o(e, t) {
  r.default.dispatch({
    type: "BROWSER_HANDOFF_END",
    handoffToken: e,
    fingerprint: t
  })
}

function l(e) {
  let {
    handoffKey: t,
    handoffToken: n,
    handoffSource: i,
    timeout: o = 1e4
  } = e;
  r.default.dispatch({
    type: "BROWSER_HANDOFF_FROM_APP",
    handoffKey: t,
    handoffToken: n,
    handoffSource: i,
    timeout: o
  })
}

function u() {
  r.default.dispatch({
    type: "BROWSER_HANDOFF_UNAVAILABLE"
  })
}

function a(e) {
  r.default.dispatch({
    type: "BROWSER_HANDOFF_SET_USER",
    user: e
  })
}