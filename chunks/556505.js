n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(911969),
  r = n(689938),
  o = n(732436);

function c(e) {
  let {
    name: t,
    labelType: n,
    collapsed: c = !1,
    showTooltip: u = !1
  } = e, d = n === a.ww.NEW ? r.Z.Messages.NEW : r.Z.Messages.UPDATED, h = n === a.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge, [m, p] = i.useState(c ? "" : d);
  if (i.useEffect(() => {
      c ? p("") : n === a.ww.NEW ? p(r.Z.Messages.NEW) : n === a.ww.UPDATED && p(r.Z.Messages.UPDATED)
    }, [c, n]), n === a.ww.NONE) return null;
  let E = (0, l.jsx)(s.TextBadge, {
    className: h,
    disableColor: !0,
    text: (0, l.jsx)("span", {
      children: m
    })
  });
  if (!u) return E;
  let g = r.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({
    activity: t
  });
  return (0, l.jsx)(s.TooltipContainer, {
    text: g,
    tooltipContentClassName: o.tooltip,
    children: E
  })
}