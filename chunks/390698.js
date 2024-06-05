"use strict";
s.r(t), s.d(t, {
  AlreadyOwned: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  r = s.n(l),
  n = s("481060"),
  i = s("507893"),
  o = s("689938"),
  c = s("992911");
let u = e => {
  let {
    className: t,
    isPartiallyPurchased: s
  } = e;
  return s ? (0, a.jsx)(n.Tooltip, {
    tooltipClassName: c.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: o.default.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, a.jsxs)("div", {
      className: r()(c.partialOwnStateContainer, t),
      ...e,
      children: [(0, a.jsx)("span", {
        className: c.iconWrapper,
        children: (0, a.jsx)(i.default, {
          className: c.infoIcon
        })
      }), (0, a.jsx)(n.Text, {
        variant: "text-md/semibold",
        children: o.default.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, a.jsx)(n.Text, {
    variant: "text-md/semibold",
    className: t,
    children: o.default.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}