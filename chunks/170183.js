"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("808653"), n("424973");
var l = n("446674"),
  i = n("42203"),
  a = n("957255"),
  s = n("449008"),
  r = n("923510"),
  o = n("834052");

function u(e) {
  let t = (0, l.useStateFromStoresArray)([o.default], () => Object.keys(o.default.getStageInstancesByGuild(e)), [e]);
  return function(e) {
    let t = (0, l.useStateFromStoresArray)([i.default], () => e.map(e => i.default.getChannel(e)).filter(s.isNotNullish), [e]);
    return (0, l.useStateFromStoresArray)([a.default], () => t.filter(e => a.default.can(r.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)), [t])
  }(t)
}