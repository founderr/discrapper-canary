"use strict";
n.r(t), n.d(t, {
  hqStreamingFrameAnimationPlayed: function() {
    return s
  },
  hqStreamingPopoutDismissed: function() {
    return a
  },
  hqStreamingSetEnabled: function() {
    return r
  },
  usePerksDemosUIStore: function() {
    return l
  }
});
let l = (0, n("652874").default)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1,
  hqStreamingIsEnabled: !1,
  hqStreamingDidEnable: !1
}));

function r(e) {
  let {
    hqStreamingDidEnable: t
  } = l.getState();
  l.setState({
    hqStreamingIsEnabled: e,
    hqStreamingDidEnable: e || t
  })
}

function s(e) {
  l.setState({
    hqStreamingFrameAnimationPlayed: e
  })
}

function a(e) {
  l.setState({
    hqStreamingPopoutDismissed: e
  })
}