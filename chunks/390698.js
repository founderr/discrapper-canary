"use strict";
a.r(t), a.d(t, {
  AlreadyOwned: function() {
    return u
  }
});
var s = a("735250");
a("470079");
var r = a("120356"),
  n = a.n(r),
  l = a("481060"),
  o = a("507893"),
  i = a("689938"),
  c = a("992911");
let u = e => {
  let {
    className: t,
    isPartiallyPurchased: a
  } = e;
  return a ? (0, s.jsx)(l.Tooltip, {
    tooltipClassName: c.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: i.default.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, s.jsxs)("div", {
      className: n()(c.partialOwnStateContainer, t),
      ...e,
      children: [(0, s.jsx)("span", {
        className: c.iconWrapper,
        children: (0, s.jsx)(o.default, {
          className: c.infoIcon
        })
      }), (0, s.jsx)(l.Text, {
        variant: "text-md/semibold",
        children: i.default.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, s.jsx)(l.Text, {
    variant: "text-md/semibold",
    className: t,
    children: i.default.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}