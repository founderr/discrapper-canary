"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var i = l("735250");
l("470079");
var a = l("120356"),
  n = l.n(a),
  s = l("481060"),
  r = l("366695"),
  d = l("846801");

function o(e) {
  let {
    className: t,
    embeddedApps: l,
    muted: a
  } = e;
  if (l.length <= 0) return null;
  {
    if (1 === l.length) return (0, i.jsx)("div", {
      className: n()(d.container, t, a && d.modeMuted),
      children: (0, i.jsx)(r.default, {
        game: l[0].application,
        className: d.icon20px
      })
    });
    let e = l.length - 1;
    return (0, i.jsxs)("div", {
      className: n()(d.container, t, a && d.modeMuted),
      children: [(0, i.jsx)(r.default, {
        game: l[0].application,
        className: d.icon20px
      }), 2 === l.length ? (0, i.jsx)(r.default, {
        game: l[1].application,
        className: d.icon20px
      }) : (0, i.jsx)(s.Text, {
        className: d.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}