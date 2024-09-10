n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(481060),
    s = n(911969),
    o = n(689938),
    r = n(899207);
function c(e) {
    let { name: t, labelType: n, collapsed: c = !1, showTooltip: d = !1 } = e,
        u = n === s.ww.NEW ? o.Z.Messages.NEW : o.Z.Messages.UPDATED,
        g = n === s.ww.NEW ? r.activityNewBadge : r.activityUpdatedBadge,
        [m, v] = i.useState(c ? '' : u);
    if (
        (i.useEffect(() => {
            c ? v('') : n === s.ww.NEW ? v(o.Z.Messages.NEW) : n === s.ww.UPDATED && v(o.Z.Messages.UPDATED);
        }, [c, n]),
        n === s.ww.NONE)
    )
        return null;
    let p = (0, a.jsx)(l.TextBadge, {
        className: g,
        disableColor: !0,
        text: (0, a.jsx)('span', { children: m })
    });
    if (!d) return p;
    let I = o.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({ activity: t });
    return (0, a.jsx)(l.TooltipContainer, {
        text: I,
        tooltipContentClassName: r.tooltip,
        children: p
    });
}
