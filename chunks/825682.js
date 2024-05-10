"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("788307"),
  i = n("51144"),
  l = n("908105");
t.default = function(e) {
  let {
    hovered: t,
    activities: n,
    applicationStream: r,
    status: o,
    user: u
  } = e;
  return n.length > 0 ? (0, a.jsx)(s.default, {
    className: l.activity,
    textClassName: l.text,
    emojiClassName: l.customStatusEmoji,
    activities: n,
    applicationStream: r,
    animate: t,
    user: u
  }) : (0, a.jsx)("div", {
    className: l.text,
    children: (0, i.humanizeStatus)(o)
  })
}