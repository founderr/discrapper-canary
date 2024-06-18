"use strict";
t.d(s, {
  U: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  l = t(481060),
  i = t(689938),
  o = t(992911);
let c = e => {
  let {
    className: s,
    isPartiallyPurchased: t
  } = e;
  return t ? (0, n.jsx)(l.Tooltip, {
    tooltipClassName: o.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: i.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, n.jsxs)("div", {
      className: r()(o.partialOwnStateContainer, s),
      ...e,
      children: [(0, n.jsx)("span", {
        className: o.iconWrapper,
        children: (0, n.jsx)(l.CircleInformationIcon, {
          size: "md",
          color: "currentColor",
          className: o.infoIcon
        })
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/semibold",
        children: i.Z.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, n.jsx)(l.Text, {
    variant: "text-md/semibold",
    className: s,
    children: i.Z.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}