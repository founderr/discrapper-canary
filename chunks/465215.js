"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("880114"),
  s = n("777003"),
  i = n("814076");

function r(e) {
  let {
    userId: t,
    guild: n,
    guildMember: r
  } = e;
  return (0, l.jsx)(s.default, {
    children: (0, l.jsx)(a.default, {
      userId: t,
      guild: n,
      guildMember: r,
      headingClassName: i.title,
      textClassName: i.body
    })
  })
}