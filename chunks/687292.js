"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
}), i("222007");
var l = i("37983"),
  n = i("884691"),
  a = i("77078"),
  d = i("798609"),
  u = i("956089"),
  r = i("782340"),
  o = i("827755");

function c(e) {
  let {
    name: t,
    labelType: i,
    collapsed: c = !1,
    showTooltip: s = !1
  } = e, f = i === d.EmbeddedActivityLabelTypes.NEW ? r.default.Messages.NEW : r.default.Messages.UPDATED, p = i === d.EmbeddedActivityLabelTypes.NEW ? o.activityNewBadge : o.activityUpdatedBadge, [v, A] = n.useState(c ? "" : f);
  if (n.useEffect(() => {
      c ? A("") : i === d.EmbeddedActivityLabelTypes.NEW ? A(r.default.Messages.NEW) : i === d.EmbeddedActivityLabelTypes.UPDATED && A(r.default.Messages.UPDATED)
    }, [c, i]), i === d.EmbeddedActivityLabelTypes.NONE) return null;
  let E = (0, l.jsx)(u.TextBadge, {
    className: p,
    disableColor: !0,
    text: (0, l.jsx)("span", {
      children: v
    })
  });
  if (!s) return E;
  let m = r.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
    activity: t
  });
  return (0, l.jsx)(a.TooltipContainer, {
    text: m,
    tooltipContentClassName: o.tooltip,
    children: E
  })
}