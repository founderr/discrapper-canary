"use strict";
n.r(t), n.d(t, {
  hqStreamingFrameAnimationPlayed: function() {
    return a
  },
  hqStreamingPopoutDismissed: function() {
    return i
  },
  hqStreamingSetEnabled: function() {
    return r
  },
  hqStreamingUnlockAnimationPlayed: function() {
    return s
  },
  usePerksDemosUIStore: function() {
    return l
  }
});
let l = (0, n("652874").default)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingUnlockAnimationPlayed: !1,
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

function a(e) {
  l.setState({
    hqStreamingFrameAnimationPlayed: e
  })
}

function s(e) {
  l.setState({
    hqStreamingUnlockAnimationPlayed: e
  })
}

function i(e) {
  l.setState({
    hqStreamingPopoutDismissed: e
  })
}