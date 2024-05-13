"use strict";
n.r(t), n.d(t, {
  useChannelSafetyWarning: function() {
    return r
  }
});
var a = n("442837"),
  s = n("359119");

function r(e, t) {
  return (0, a.useStateFromStores)([s.default], () => s.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp)
}