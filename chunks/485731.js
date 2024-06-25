"use strict";
n.d(t, {
  J1: function() {
    return r
  },
  cD: function() {
    return l
  },
  hP: function() {
    return s
  },
  j$: function() {
    return i
  },
  pM: function() {
    return o
  },
  qA: function() {
    return a
  }
});
let i = (0, n(652874).Z)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1,
  hqStreamingOptInPopoutDismissed: !1,
  hqStreamingIsEnabled: !1,
  hqStreamingDidEnable: !1,
  hqStreamingOptOutPopoutShouldShow: !1
}));

function r(e) {
  let {
    hqStreamingDidEnable: t
  } = i.getState();
  i.setState({
    hqStreamingIsEnabled: e,
    hqStreamingDidEnable: e || t
  })
}

function s(e) {
  i.setState({
    hqStreamingFrameAnimationPlayed: e
  })
}

function o(e) {
  i.setState({
    hqStreamingPopoutDismissed: e
  })
}

function a(e) {
  i.setState({
    hqStreamingOptInPopoutDismissed: e
  })
}

function l(e) {
  i.setState({
    hqStreamingOptOutPopoutShouldShow: e
  })
}