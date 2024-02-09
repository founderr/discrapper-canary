"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var r = l("37983");
l("884691");
var a = l("880114"),
  n = l("777003"),
  s = l("814076");

function i(e) {
  let {
    userId: t,
    guild: l,
    guildMember: i
  } = e;
  return (0, r.jsx)(n.default, {
    children: (0, r.jsx)(a.default, {
      userId: t,
      guild: l,
      guildMember: i,
      headingClassName: s.title,
      textClassName: s.body
    })
  })
}