"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("37983");
a("884691");
var n = a("775377"),
  s = a("777003"),
  i = a("184256");

function r(e) {
  let {
    customStatusActivity: t,
    className: a,
    animate: r
  } = e;
  return null == t ? null : (0, l.jsx)(s.default, {
    className: a,
    children: (0, l.jsx)(n.default, {
      activity: t,
      className: i.customStatus,
      animate: r,
      emojiClassName: i.customStatusEmoji,
      soloEmojiClassName: i.customStatusSoloEmoji,
      textClassName: i.customStatusText
    })
  })
}