n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(911969),
    o = n(388032),
    s = n(22158);
function c(e) {
    let { name: t, labelType: n, collapsed: c = !1, showTooltip: d = !1 } = e,
        u = n === r.ww.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t['/qdhkp']),
        v = n === r.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge,
        [m, x] = l.useState(c ? '' : u);
    if (
        (l.useEffect(() => {
            c ? x('') : n === r.ww.NEW ? x(o.intl.string(o.t.y2b7CA)) : n === r.ww.UPDATED && x(o.intl.string(o.t['/qdhkp']));
        }, [c, n]),
        n === r.ww.NONE)
    )
        return null;
    let h = (0, i.jsx)(a.TextBadge, {
        className: v,
        disableColor: !0,
        text: (0, i.jsx)('span', { children: m })
    });
    if (!d) return h;
    let g = o.intl.formatToPlainString(o.t.Vs2EeX, { activity: t });
    return (0, i.jsx)(a.TooltipContainer, {
        text: g,
        tooltipContentClassName: s.tooltip,
        children: h
    });
}
