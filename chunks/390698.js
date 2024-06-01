"use strict";
l.r(t), l.d(t, {
  AlreadyOwned: function() {
    return u
  }
});
var a = l("735250");
l("470079");
var s = l("120356"),
  r = l.n(s),
  n = l("481060"),
  i = l("507893"),
  o = l("689938"),
  c = l("992911");
let u = e => {
  let {
    className: t,
    isPartiallyPurchased: l
  } = e;
  return l ? (0, a.jsx)(n.Tooltip, {
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