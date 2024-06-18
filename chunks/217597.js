"use strict";
t.d(s, {
  Z: function() {
    return a
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(719440);

function a(e) {
  let {
    label: s,
    sublabel: t,
    value: a,
    additionalContent: r,
    tooltip: o
  } = e;
  return (0, n.jsxs)("div", {
    className: l.metricCard,
    "aria-label": s,
    children: [(0, n.jsxs)("div", {
      className: l.metricCardLabelContainer,
      children: [(0, n.jsx)(i.Text, {
        className: l.metricCardLabel,
        variant: "text-xs/medium",
        color: "interactive-normal",
        "aria-hidden": !0,
        children: s
      }), null != o && (0, n.jsx)(i.Tooltip, {
        text: o,
        children: e => (0, n.jsx)(i.CircleInformationIcon, {
          size: "xs",
          color: "currentColor",
          className: l.__invalid_labelTooltipIcon,
          ...e
        })
      }), null != t ? (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: t
      }) : null]
    }), (0, n.jsx)(i.Text, {
      tag: "span",
      variant: "heading-xl/medium",
      color: "header-primary",
      children: a
    }), r]
  })
}