"use strict";
t.r(r), t.d(r, {
  hqStreamingFrameAnimationPlayed: function() {
    return i
  },
  hqStreamingPopoutDismissed: function() {
    return l
  },
  hqStreamingSetEnabled: function() {
    return n
  },
  usePerksDemosUIStore: function() {
    return a
  }
});
let a = (0, t("652874").default)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1,
  hqStreamingIsEnabled: !1,
  hqStreamingDidEnable: !1
}));

function n(e) {
  let {
    hqStreamingDidEnable: r
  } = a.getState();
  a.setState({
    hqStreamingIsEnabled: e,
    hqStreamingDidEnable: e || r
  })
}

function i(e) {
  a.setState({
    hqStreamingFrameAnimationPlayed: e
  })
}

function l(e) {
  a.setState({
    hqStreamingPopoutDismissed: e
  })
}