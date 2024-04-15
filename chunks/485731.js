"use strict";
r.r(t), r.d(t, {
  hqStreamingFrameAnimationPlayed: function() {
    return i
  },
  hqStreamingPopoutDismissed: function() {
    return o
  },
  hqStreamingSetEnabled: function() {
    return n
  },
  usePerksDemosUIStore: function() {
    return a
  }
});
let a = (0, r("652874").default)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1,
  hqStreamingIsEnabled: !1,
  hqStreamingDidEnable: !1
}));

function n(e) {
  let {
    hqStreamingDidEnable: t
  } = a.getState();
  a.setState({
    hqStreamingIsEnabled: e,
    hqStreamingDidEnable: e || t
  })
}

function i(e) {
  a.setState({
    hqStreamingFrameAnimationPlayed: e
  })
}

function o(e) {
  a.setState({
    hqStreamingPopoutDismissed: e
  })
}