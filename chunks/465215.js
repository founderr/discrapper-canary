"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("37983");
a("884691");
var n = a("880114"),
  s = a("777003"),
  i = a("814076");

function r(e) {
  let {
    userId: t,
    guild: a,
    guildMember: r
  } = e;
  return (0, l.jsx)(s.default, {
    children: (0, l.jsx)(n.default, {
      userId: t,
      guild: a,
      guildMember: r,
      headingClassName: i.title,
      textClassName: i.body
    })
  })
}