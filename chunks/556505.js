"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("911969"),
  r = n("689938"),
  o = n("530438");

function u(e) {
  let {
    name: t,
    labelType: n,
    collapsed: u = !1,
    showTooltip: d = !1
  } = e, c = n === i.EmbeddedActivityLabelTypes.NEW ? r.default.Messages.NEW : r.default.Messages.UPDATED, f = n === i.EmbeddedActivityLabelTypes.NEW ? o.activityNewBadge : o.activityUpdatedBadge, [h, m] = l.useState(u ? "" : c);
  if (l.useEffect(() => {
      u ? m("") : n === i.EmbeddedActivityLabelTypes.NEW ? m(r.default.Messages.NEW) : n === i.EmbeddedActivityLabelTypes.UPDATED && m(r.default.Messages.UPDATED)
    }, [u, n]), n === i.EmbeddedActivityLabelTypes.NONE) return null;
  let p = (0, a.jsx)(s.TextBadge, {
    className: f,
    disableColor: !0,
    text: (0, a.jsx)("span", {
      children: h
    })
  });
  if (!d) return p;
  let E = r.default.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
    activity: t
  });
  return (0, a.jsx)(s.TooltipContainer, {
    text: E,
    tooltipContentClassName: o.tooltip,
    children: p
  })
}