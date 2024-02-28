"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("222007");
var i = l("37983"),
  n = l("884691"),
  a = l("77078"),
  d = l("798609"),
  u = l("956089"),
  o = l("782340"),
  r = l("827755");

function c(e) {
  let {
    name: t,
    labelType: l,
    collapsed: c = !1,
    showTooltip: s = !1
  } = e, f = l === d.EmbeddedActivityLabelTypes.NEW ? o.default.Messages.NEW : o.default.Messages.UPDATED, p = l === d.EmbeddedActivityLabelTypes.NEW ? r.activityNewBadge : r.activityUpdatedBadge, [v, A] = n.useState(c ? "" : f);
  if (n.useEffect(() => {
      c ? A("") : l === d.EmbeddedActivityLabelTypes.NEW ? A(o.default.Messages.NEW) : l === d.EmbeddedActivityLabelTypes.UPDATED && A(o.default.Messages.UPDATED)
    }, [c, l]), l === d.EmbeddedActivityLabelTypes.NONE) return null;
  let E = (0, i.jsx)(u.TextBadge, {
    className: p,
    disableColor: !0,
    text: (0, i.jsx)("span", {
      children: v
    })
  });
  if (!s) return E;
  let m = o.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
    activity: t
  });
  return (0, i.jsx)(a.TooltipContainer, {
    text: m,
    tooltipContentClassName: r.tooltip,
    children: E
  })
}