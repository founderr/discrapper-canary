"use strict";
n.d(t, {
  U: function() {
    return l
  }
});
var r = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  o = n(481060),
  s = n(689938),
  c = n(219199);
let l = e => {
  let {
    className: t,
    isPartiallyPurchased: n
  } = e;
  return n ? (0, r.jsx)(o.Tooltip, {
    tooltipClassName: c.partiallyOwnedDisclaimer,
    position: "top",
    align: "left",
    text: s.Z.Messages.COLLECTIBLES_PARTIALLY_OWNED_DISCLAIMER,
    children: e => (0, r.jsxs)("div", {
      className: i()(c.partialOwnStateContainer, t),
      ...e,
      children: [(0, r.jsx)("span", {
        className: c.iconWrapper,
        children: (0, r.jsx)(o.CircleInformationIcon, {
          size: "md",
          color: "currentColor",
          className: c.infoIcon
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/semibold",
        children: s.Z.Messages.COLLECTIBLES_ALREADY_OWNED
      })]
    })
  }) : (0, r.jsx)(o.Text, {
    variant: "text-md/semibold",
    className: t,
    children: s.Z.Messages.COLLECTIBLES_ALREADY_OWNED
  })
}