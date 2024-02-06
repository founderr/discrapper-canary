"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
}), i("808653"), i("424973");
var n = i("446674"),
  s = i("42203"),
  l = i("957255"),
  r = i("449008"),
  a = i("923510"),
  o = i("834052");

function u(e) {
  let t = (0, n.useStateFromStoresArray)([o.default], () => Object.keys(o.default.getStageInstancesByGuild(e)), [e]);
  return function(e) {
    let t = (0, n.useStateFromStoresArray)([s.default], () => e.map(e => s.default.getChannel(e)).filter(r.isNotNullish), [e]);
    return (0, n.useStateFromStoresArray)([l.default], () => t.filter(e => l.default.can(a.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)), [t])
  }(t)
}