"use strict";
s.r(t), s.d(t, {
  useSafetyToolsButtonTooltipForChannel: function() {
    return l
  }
});
var n = s("774298"),
  a = s("888203");

function l(e) {
  let t = (0, n.useInappropriateConversationSafetyToolsWarningForChannel)(e),
    s = (0, a.useInappropriateConversationWarningsForChannel)(e);
  if (null != t) return s.find(e => null == e.dismiss_timestamp)
}