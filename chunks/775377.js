"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var r = l("37983");
l("884691");
var a = l("414456"),
  n = l.n(a),
  s = l("943722"),
  i = l("462339");

function o(e) {
  let {
    activity: t,
    className: l,
    emojiClassName: a,
    textClassName: o,
    placeholderText: u,
    soloEmojiClassName: d,
    animate: c = !0,
    hideTooltip: f = !1,
    hideEmoji: T = !1,
    children: p
  } = e;
  if (null == t) return null;
  let {
    emoji: m
  } = t, E = null != t.state && "" !== t.state ? t.state : u;
  return (0, r.jsxs)("div", {
    className: n(i.container, l),
    children: [T || null == m ? null : (0, r.jsx)(s.ActivityEmoji, {
      emoji: m,
      className: n(i.emoji, a, null != d ? {
        [d]: null == E || "" === E
      } : null),
      animate: c,
      hideTooltip: f
    }), null != E && E.length > 0 ? (0, r.jsx)("span", {
      className: o,
      children: E
    }) : null, p]
  })
}