"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var l = a("37983");
a("884691");
var n = a("414456"),
  s = a.n(n),
  i = a("943722"),
  r = a("462339");

function u(e) {
  let {
    activity: t,
    className: a,
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
  return (0, l.jsxs)("div", {
    className: s(r.container, a),
    children: [T || null == A ? null : (0, l.jsx)(i.ActivityEmoji, {
      emoji: A,
      className: s(r.emoji, n, null != c ? {
        [c]: null == _ || "" === _
      } : null),
      animate: d,
      hideTooltip: f
    }), null != _ && _.length > 0 ? (0, l.jsx)("span", {
      className: u,
      children: _
    }) : null, E]
  })
}