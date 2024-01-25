"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("943722"),
  r = n("462339");

function u(e) {
  let {
    activity: t,
    className: n,
    emojiClassName: a,
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
    className: s(r.container, n),
    children: [T || null == A ? null : (0, l.jsx)(i.ActivityEmoji, {
      emoji: A,
      className: s(r.emoji, a, null != c ? {
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