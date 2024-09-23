n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    l = n(481060),
    s = n(911969),
    o = n(689938),
    r = n(899207);
function c(e) {
    let { name: t, labelType: n, collapsed: c = !1, showTooltip: d = !1 } = e,
        u = n === s.ww.NEW ? o.Z.Messages.NEW : o.Z.Messages.UPDATED,
        v = n === s.ww.NEW ? r.activityNewBadge : r.activityUpdatedBadge,
        [I, _] = a.useState(c ? '' : u);
    if (
        (a.useEffect(() => {
            c ? _('') : n === s.ww.NEW ? _(o.Z.Messages.NEW) : n === s.ww.UPDATED && _(o.Z.Messages.UPDATED);
        }, [c, n]),
        n === s.ww.NONE)
    )
        return null;
    let T = (0, i.jsx)(l.TextBadge, {
        className: v,
        disableColor: !0,
        text: (0, i.jsx)('span', { children: I })
    });
    if (!d) return T;
    let m = o.Z.Messages.EMBEDDED_ACTIVITIES_FREE_PREVIEW_TOOLTIP.format({ activity: t });
    return (0, i.jsx)(l.TooltipContainer, {
        text: m,
        tooltipContentClassName: r.tooltip,
        children: T
    });
}
