"use strict";
n.r(t), n.d(t, {
  useChannelSafetyWarning: function() {
    return i
  }
});
var a = n("442837"),
  r = n("359119");

function i(e, t) {
  return (0, a.useStateFromStores)([r.default], () => r.default.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp)
}