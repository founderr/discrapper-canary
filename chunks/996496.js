"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("882587");

function o(e) {
  let {
    hasMentions: t,
    truncatedCount: n,
    className: a
  } = e;
  return (0, l.jsx)(i.Text, {
    className: s(r.unreadCount, a, {
      [r.mention]: t
    }),
    variant: "text-xs/normal",
    children: n
  })
}