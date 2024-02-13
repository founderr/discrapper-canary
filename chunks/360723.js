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
  r = n("953109"),
  u = n("450754");

function o(e) {
  let {
    className: t,
    embeddedApps: n,
    muted: a
  } = e;
  if (n.length <= 0) return null;
  {
    if (1 === n.length) return (0, l.jsx)("div", {
      className: s(u.container, t, a && u.modeMuted),
      children: (0, l.jsx)(r.default, {
        game: n[0].application,
        className: u.icon20px
      })
    });
    let e = n.length - 1;
    return (0, l.jsxs)("div", {
      className: s(u.container, t, a && u.modeMuted),
      children: [(0, l.jsx)(r.default, {
        game: n[0].application,
        className: u.icon20px
      }), 2 === n.length ? (0, l.jsx)(r.default, {
        game: n[1].application,
        className: u.icon20px
      }) : (0, l.jsx)(i.Text, {
        className: u.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}