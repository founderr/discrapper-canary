"use strict";
n.r(t), n.d(t, {
  useShouldShowSafetyToolsButtonForChannel: function() {
    return s
  }
});
var l = n("761771"),
  a = n("888203");

function s(e) {
  let t = (0, l.useIsEligibleForInappropriateConversationWarning)({
      location: "safety-tools-button"
    }),
    n = (0, a.useInappropriateConversationWarningsForChannel)(e);
  return !!t && n.length > 0 && n.some(e => null != e.dismiss_timestamp)
}