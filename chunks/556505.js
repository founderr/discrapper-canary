n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(911969),
    s = n(388032),
    o = n(899207);
function c(e) {
    let { name: t, labelType: n, collapsed: c = !1, showTooltip: u = !1 } = e,
        d = n === a.ww.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t['/qdhkp']),
        h = n === a.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
        [m, p] = l.useState(c ? '' : d);
    if (
        (l.useEffect(() => {
            c ? p('') : n === a.ww.NEW ? p(s.intl.string(s.t.y2b7CA)) : n === a.ww.UPDATED && p(s.intl.string(s.t['/qdhkp']));
        }, [c, n]),
        n === a.ww.NONE)
    )
        return null;
    let f = (0, i.jsx)(r.TextBadge, {
        className: h,
        disableColor: !0,
        text: (0, i.jsx)('span', { children: m })
    });
    if (!u) return f;
    let g = s.intl.formatToPlainString(s.t.Vs2EeX, { activity: t });
    return (0, i.jsx)(r.TooltipContainer, {
        text: g,
        tooltipContentClassName: o.tooltip,
        children: f
    });
}
