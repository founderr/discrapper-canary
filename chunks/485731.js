"use strict";
l.r(t), l.d(t, {
  hqStreamingFrameAnimationPlayed: function() {
    return s
  },
  hqStreamingPopoutDismissed: function() {
    return n
  },
  usePerksDemosUIStore: function() {
    return a
  }
});
let a = (0, l("652874").default)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1
}));

function s(e) {
  a.setState({
    hqStreamingFrameAnimationPlayed: e
  })
}

function n(e) {
  a.setState({
    hqStreamingPopoutDismissed: e
  })
}