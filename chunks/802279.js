"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var r = l("37983");
l("884691");
var a = l("775377"),
  n = l("777003"),
  s = l("184256");

function i(e) {
  let {
    customStatusActivity: t,
    className: l,
    animate: i
  } = e;
  return null == t ? null : (0, r.jsx)(n.default, {
    className: l,
    children: (0, r.jsx)(a.default, {
      activity: t,
      className: s.customStatus,
      animate: i,
      emojiClassName: s.customStatusEmoji,
      soloEmojiClassName: s.customStatusSoloEmoji,
      textClassName: s.customStatusText
    })
  })
}