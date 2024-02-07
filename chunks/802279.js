"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("37983");
a("884691");
var l = a("775377"),
  s = a("777003"),
  i = a("184256");

function r(e) {
  let {
    customStatusActivity: t,
    className: a,
    animate: r
  } = e;
  return null == t ? null : (0, n.jsx)(s.default, {
    className: a,
    children: (0, n.jsx)(l.default, {
      activity: t,
      className: i.customStatus,
      animate: r,
      emojiClassName: i.customStatusEmoji,
      soloEmojiClassName: i.customStatusSoloEmoji,
      textClassName: i.customStatusText
    })
  })
}