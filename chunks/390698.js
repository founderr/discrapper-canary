"use strict";
s.d(t, {
  U: function() {
    return c
  }
});
var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  i = s(481060),
  l = s(689938),
  o = s(219199);
let c = e => {
  let {
    className: t,
    isPartiallyPurchased: s
  } = e;
  return s ? (0, n.jsx)(i.Tooltip, {
    tooltipClassName: o.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: l.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, n.jsxs)("div", {
      className: a()(o.partialOwnStateContainer, t),
      ...e,
      children: [(0, n.jsx)("span", {
        className: o.iconWrapper,
        children: (0, n.jsx)(i.CircleInformationIcon, {
          size: "md",
          color: "currentColor",
          className: o.infoIcon
        })
      }), (0, n.jsx)(i.Text, {
        variant: "text-md/semibold",
        children: l.Z.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, n.jsx)(i.Text, {
    variant: "text-md/semibold",
    className: t,
    children: l.Z.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}