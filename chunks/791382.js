"use strict";
t.d(s, {
  H: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(264451),
  o = t(75775),
  c = t(689938),
  d = t(932405);
let u = e => {
  let {
    value: s,
    isPercent: t
  } = e;
  if (null == s) return null;
  let {
    formattedValue: i,
    isPositive: u
  } = (0, r.m5)(s, t);
  return (0, n.jsxs)("div", {
    className: d.trendContainer,
    children: [(0, n.jsx)(o.Z, {
      className: l()(d.chartLineIcon, {
        [d.chartLineIconNegative]: !u
      })
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      className: d.trendDescription,
      children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_TREND_DESCRIPTION.format({
        value: i
      })
    })]
  })
};
s.Z = e => {
  let {
    label: s,
    sublabel: t,
    value: i,
    additionalContent: l,
    tooltip: r
  } = e;
  return (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: d.labelContainer,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-xs/medium",
          className: d.label,
          children: s
        }), null != r && (0, n.jsx)(a.Tooltip, {
          text: r,
          children: e => (0, n.jsx)(a.CircleInformationIcon, {
            size: "xs",
            color: "currentColor",
            className: d.labelTooltipIcon,
            ...e
          })
        }), null != t ? (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          className: d.sublabel,
          children: t
        }) : null]
      }), (0, n.jsx)(a.Text, {
        className: d.value,
        variant: "text-sm/normal",
        children: i
      })]
    }), l]
  })
}