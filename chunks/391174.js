"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  r = a.n(s),
  u = a("725436"),
  i = a("875150"),
  c = a("946278");

function d(e) {
  let {
    description: t,
    className: a,
    guildId: s,
    truncate: d = !0
  } = e, o = n.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
    guildId: s,
    allowLinks: !0,
    allowHeading: !0,
    allowList: !0
  }), [t, s]);
  return (0, l.jsx)("div", {
    className: r()(i.descriptionText, a, c.markup, {
      [i.truncate]: d
    }),
    children: o
  })
}