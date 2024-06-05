"use strict";
s.r(t), s.d(t, {
  AlreadyOwned: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  n = s.n(l),
  r = s("481060"),
  i = s("507893"),
  o = s("689938"),
  u = s("992911");
let c = e => {
  let {
    className: t,
    isPartiallyPurchased: s
  } = e;
  return s ? (0, a.jsx)(r.Tooltip, {
    tooltipClassName: u.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: o.default.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, a.jsxs)("div", {
      className: n()(u.partialOwnStateContainer, t),
      ...e,
      children: [(0, a.jsx)("span", {
        className: u.iconWrapper,
        children: (0, a.jsx)(i.default, {
          className: u.infoIcon
        })
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: o.default.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, a.jsx)(r.Text, {
    variant: "text-md/semibold",
    className: t,
    children: o.default.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}