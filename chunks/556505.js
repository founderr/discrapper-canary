n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(911969),
    a = n(388032),
    o = n(899207);
function c(e) {
    let { name: t, labelType: n, collapsed: c = !1, showTooltip: u = !1 } = e,
        d = n === s.ww.NEW ? a.intl.string(a.t.y2b7CA) : a.intl.string(a.t['/qdhkp']),
        h = n === s.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
        [m, p] = l.useState(c ? '' : d);
    if (
        (l.useEffect(() => {
            c ? p('') : n === s.ww.NEW ? p(a.intl.string(a.t.y2b7CA)) : n === s.ww.UPDATED && p(a.intl.string(a.t['/qdhkp']));
        }, [c, n]),
        n === s.ww.NONE)
    )
        return null;
    let f = (0, i.jsx)(r.TextBadge, {
        className: h,
        disableColor: !0,
        text: (0, i.jsx)('span', { children: m })
    });
    if (!u) return f;
    let g = a.intl.formatToPlainString(a.t.Vs2EeX, { activity: t });
    return (0, i.jsx)(r.TooltipContainer, {
        text: g,
        tooltipContentClassName: o.tooltip,
        children: f
    });
}
