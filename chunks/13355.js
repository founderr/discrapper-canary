"use strict";
s.r(t), s.d(t, {
  useSafetyToolsButtonTooltipForChannel: function() {
    return i
  }
}), s("700225");
var n = s("718517"),
  a = s("764828"),
  l = s("774298"),
  T = s("888203");
let r = 1 * n.default.Millis.HOUR,
  o = 12 * n.default.Millis.HOUR;

function i(e) {
  var t;
  let s = (0, l.useInappropriateConversationSafetyToolsWarningForChannel)(e),
    n = (0, T.useInappropriateConversationWarningsForChannel)(e);
  if (null == s) return;
  let i = n.some(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1),
    _ = n.filter(e => null != e.dismiss_timestamp).sort((e, t) => t.dismiss_timestamp < e.dismiss_timestamp ? -1 : 1);
  if (_.length < 1) return;
  let u = _[0];
  if (! function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (null == e) return !0;
      let s = new Date(e).getTime() + (t ? r : o),
        n = new Date().getTime();
      return n >= s
    }(u.dismiss_timestamp, i)) return;
  let S = n.filter(e => null == e.dismiss_timestamp);
  return null !== (t = S.findLast(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1)) && void 0 !== t ? t : S.findLast(e => e.type === a.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
}