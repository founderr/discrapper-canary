"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  i = l("943722"),
  r = l("462339");

function u(e) {
  let {
    activity: t,
    className: l,
    emojiClassName: n,
    textClassName: u,
    placeholderText: o,
    soloEmojiClassName: c,
    animate: d = !0,
    hideTooltip: f = !1,
    hideEmoji: T = !1,
    children: E
  } = e;
  if (null == t) return null;
  let {
    emoji: A
  } = t, _ = null != t.state && "" !== t.state ? t.state : o;
  return (0, a.jsxs)("div", {
    className: s(r.container, l),
    children: [T || null == A ? null : (0, a.jsx)(i.ActivityEmoji, {
      emoji: A,
      className: s(r.emoji, n, null != c ? {
        [c]: null == _ || "" === _
      } : null),
      animate: d,
      hideTooltip: f
    }), null != _ && _.length > 0 ? (0, a.jsx)("span", {
      className: u,
      children: _
    }) : null, E]
  })
}