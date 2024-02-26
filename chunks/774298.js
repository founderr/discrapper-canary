"use strict";
s.r(t), s.d(t, {
  useInappropriateConversationSafetyToolsWarningForChannel: function() {
    return l
  }
});
var n = s("761771"),
  a = s("888203");

function l(e) {
  let t = (0, n.useIsEligibleForInappropriateConversationWarning)({
      location: "safety-tools-button"
    }),
    s = (0, a.useInappropriateConversationWarningsForChannel)(e);
  if (!t) return;
  let l = s.filter(e => null != e.dismiss_timestamp);
  if (0 === l.length) return;
  let r = l.sort((e, t) => e.type > t.type ? 1 : e.dismiss_timestamp < t.dismiss_timestamp ? 1 : -1);
  return r[0]
}