"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("911969"),
  r = n("26290"),
  o = n("689938"),
  u = n("530438");

function d(e) {
  let {
    name: t,
    labelType: n,
    collapsed: d = !1,
    showTooltip: c = !1
  } = e, f = n === i.EmbeddedActivityLabelTypes.NEW ? o.default.Messages.NEW : o.default.Messages.UPDATED, h = n === i.EmbeddedActivityLabelTypes.NEW ? u.activityNewBadge : u.activityUpdatedBadge, [m, p] = l.useState(d ? "" : f);
  if (l.useEffect(() => {
      d ? p("") : n === i.EmbeddedActivityLabelTypes.NEW ? p(o.default.Messages.NEW) : n === i.EmbeddedActivityLabelTypes.UPDATED && p(o.default.Messages.UPDATED)
    }, [d, n]), n === i.EmbeddedActivityLabelTypes.NONE) return null;
  let E = (0, a.jsx)(r.TextBadge, {
    className: h,
    disableColor: !0,
    text: (0, a.jsx)("span", {
      children: m
    })
  });
  if (!c) return E;
  let C = o.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
    activity: t
  });
  return (0, a.jsx)(s.TooltipContainer, {
    text: C,
    tooltipContentClassName: u.tooltip,
    children: E
  })
}