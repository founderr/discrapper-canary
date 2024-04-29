"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("788307"),
  l = a("51144"),
  i = a("908105");
t.default = function(e) {
  let {
    hovered: t,
    activities: a,
    applicationStream: r,
    status: o,
    user: u
  } = e;
  return a.length > 0 ? (0, n.jsx)(s.default, {
    className: i.activity,
    textClassName: i.text,
    emojiClassName: i.customStatusEmoji,
    activities: a,
    applicationStream: r,
    animate: t,
    user: u
  }) : (0, n.jsx)("div", {
    className: i.text,
    children: (0, l.humanizeStatus)(o)
  })
}