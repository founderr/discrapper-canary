"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("481060"),
  o = n("549631"),
  l = n("517039");

function u(e) {
  let {
    children: t,
    className: n,
    size: r = a.Button.Sizes.MEDIUM,
    onlyShineOnHover: u = !1,
    ...d
  } = e;
  return (0, i.jsx)(a.ShinyButton, {
    ...d,
    color: a.Button.Colors.CUSTOM,
    size: r,
    className: s()(l.button, n),
    onlyShineOnHover: u,
    children: (0, i.jsxs)("div", {
      className: l.buttonContents,
      children: [(0, i.jsx)(o.default, {
        className: l.icon
      }), t]
    })
  })
}