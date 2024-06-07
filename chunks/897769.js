"use strict";
n.r(t), n.d(t, {
  useChannelSafetyWarning: function() {
    return i
  }
});
var r = n("442837"),
  a = n("359119");

function i(e, t) {
  return (0, r.useStateFromStores)([a.default], () => a.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp)
}