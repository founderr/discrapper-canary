"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("47120");
var i = l("735250"),
  n = l("470079"),
  a = l("481060"),
  u = l("911969"),
  d = l("26290"),
  r = l("689938"),
  o = l("530438");

function s(e) {
  let {
    name: t,
    labelType: l,
    collapsed: s = !1,
    showTooltip: c = !1
  } = e, f = l === u.EmbeddedActivityLabelTypes.NEW ? r.default.Messages.NEW : r.default.Messages.UPDATED, p = l === u.EmbeddedActivityLabelTypes.NEW ? o.activityNewBadge : o.activityUpdatedBadge, [v, E] = n.useState(s ? "" : f);
  if (n.useEffect(() => {
      s ? E("") : l === u.EmbeddedActivityLabelTypes.NEW ? E(r.default.Messages.NEW) : l === u.EmbeddedActivityLabelTypes.UPDATED && E(r.default.Messages.UPDATED)
    }, [s, l]), l === u.EmbeddedActivityLabelTypes.NONE) return null;
  let A = (0, i.jsx)(d.TextBadge, {
    className: p,
    disableColor: !0,
    text: (0, i.jsx)("span", {
      children: v
    })
  });
  if (!c) return A;
  let m = r.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
    activity: t
  });
  return (0, i.jsx)(a.TooltipContainer, {
    text: m,
    tooltipContentClassName: o.tooltip,
    children: A
  })
}