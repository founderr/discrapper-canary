"use strict";
n.r(t), n.d(t, {
  useShouldShowSafetyToolsButtonForChannel: function() {
    return s
  }
});
var a = n("761771"),
  l = n("888203");

function s(e) {
  let t = (0, a.useIsEligibleForInappropriateConversationWarning)({
      location: "safety-tools-button"
    }),
    n = (0, l.useInappropriateConversationWarningsForChannel)(e);
  return !!t && n.length > 0 && n.some(e => null != e.dismiss_timestamp)
}