"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var a = l("37983");
l("884691");
var n = l("775377"),
  s = l("777003"),
  i = l("184256");

function r(e) {
  let {
    customStatusActivity: t,
    className: l,
    animate: r
  } = e;
  return null == t ? null : (0, a.jsx)(s.default, {
    className: l,
    children: (0, a.jsx)(n.default, {
      activity: t,
      className: i.customStatus,
      animate: r,
      emojiClassName: i.customStatusEmoji,
      soloEmojiClassName: i.customStatusSoloEmoji,
      textClassName: i.customStatusText
    })
  })
}