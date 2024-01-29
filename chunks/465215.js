"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var a = l("37983");
l("884691");
var n = l("880114"),
  s = l("777003"),
  i = l("814076");

function r(e) {
  let {
    userId: t,
    guild: l,
    guildMember: r
  } = e;
  return (0, a.jsx)(s.default, {
    children: (0, a.jsx)(n.default, {
      userId: t,
      guild: l,
      guildMember: r,
      headingClassName: i.title,
      textClassName: i.body
    })
  })
}