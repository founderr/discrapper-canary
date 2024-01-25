"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("775377"),
  s = n("777003"),
  i = n("184256");

function r(e) {
  let {
    customStatusActivity: t,
    className: n,
    animate: r
  } = e;
  return null == t ? null : (0, l.jsx)(s.default, {
    className: n,
    children: (0, l.jsx)(a.default, {
      activity: t,
      className: i.customStatus,
      animate: r,
      emojiClassName: i.customStatusEmoji,
      soloEmojiClassName: i.customStatusSoloEmoji,
      textClassName: i.customStatusText
    })
  })
}