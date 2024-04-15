"use strict";
n.r(t), n.d(t, {
  hqStreamingFrameAnimationPlayed: function() {
    return r
  },
  hqStreamingPopoutDismissed: function() {
    return s
  },
  usePerksDemosUIStore: function() {
    return l
  }
});
let l = (0, n("652874").default)(() => ({
  hqStreamingFrameAnimationPlayed: !1,
  hqStreamingPopoutDismissed: !1
}));

function r(e) {
  l.setState({
    hqStreamingFrameAnimationPlayed: e
  })
}

function s(e) {
  l.setState({
    hqStreamingPopoutDismissed: e
  })
}