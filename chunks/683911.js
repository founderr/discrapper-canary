"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  r = n("77078"),
  i = n("258078"),
  u = n("549043");

function d(e) {
  let {
    steps: t,
    stepIndex: n,
    onClick: a
  } = e;
  return (0, l.jsx)("div", {
    className: u.container,
    children: t.map((e, t) => {
      let d = n === t;
      return (0, l.jsxs)(r.Clickable, {
        onClick: () => a(t),
        className: u.stepContainer,
        children: [(0, l.jsx)("div", {
          className: s(u.progressBar, {
            [u.selectedProgressBar]: d
          })
        }), (0, l.jsx)(i.default, {
          color: d ? i.default.Colors.BRAND : i.default.Colors.MUTED,
          size: i.default.Sizes.SIZE_12,
          children: e
        })]
      }, e)
    })
  })
}