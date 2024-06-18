"use strict";
var n = t(735250);
t(470079);
var i = t(692547),
  l = t(481060),
  a = t(355011),
  r = t(689938),
  o = t(414131);
s.Z = e => {
  let {
    title: s,
    subtext: t = r.Z.Messages.NOT_AVAILABLE,
    localizedNumber: c,
    isTrendingUp: d,
    isTrendingDown: u,
    tooltipText: E
  } = e, _ = "string" == typeof E ? E : s, I = null != E ? (0, n.jsx)(l.Tooltip, {
    text: E,
    position: "top",
    "aria-label": _,
    children: e => (0, n.jsx)(l.CircleInformationIcon, {
      size: "xs",
      color: "currentColor",
      ...e,
      className: o.infoIcon
    })
  }) : null;
  return (0, n.jsxs)("div", {
    className: o.analyticsCard,
    children: [(0, n.jsxs)(l.FormTitle, {
      className: o.analyticsCardTitle,
      children: [s, I]
    }), (0, n.jsx)("div", {
      className: o.analyticsCardContent,
      children: (0, n.jsx)(l.Heading, {
        className: null != c ? o.analyticsCardNumber : o.analyticsCardNumberNotAvailable,
        variant: "heading-xl/semibold",
        children: null != c ? c : r.Z.Messages.NOT_AVAILABLE
      })
    }), (0, n.jsxs)("div", {
      className: o.analyticsCardArrowSubText,
      children: [d ? (0, n.jsx)(a.Z, {
        className: o.trendingArrow,
        color: i.Z.unsafe_rawColors.GREEN_360.css,
        "aria-label": r.Z.Messages.TRENDING_ARROW_UP,
        width: 14,
        height: 12
      }) : null, u ? (0, n.jsx)(a.Z, {
        className: o.trendingArrowIconDown,
        color: i.Z.unsafe_rawColors.RED_400.css,
        "aria-label": r.Z.Messages.TRENDING_ARROW_DOWN,
        width: 14,
        height: 12
      }) : null, (0, n.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: t
      })]
    })]
  })
}