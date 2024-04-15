"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var a = l("735250");
l("470079");
var s = l("120356"),
  n = l.n(s),
  i = l("481060"),
  r = l("301822"),
  u = l("689938"),
  o = l("60687");
let d = async () => {
  let {
    default: e
  } = await l.e("21812").then(l.t.bind(l, "741855", 19));
  return e
};

function c(e) {
  let {
    glow: t
  } = e;
  return (0, a.jsx)("div", {
    className: n()(o.container, {
      [o.gradientGlow]: t
    }),
    children: (0, a.jsxs)("div", {
      className: o.content,
      children: [(0, a.jsx)(r.default, {
        importData: d,
        shouldAnimate: !0,
        className: o.animation,
        loop: !1
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: o.message,
        children: u.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_INITIAL_UPSELL
      })]
    })
  })
}