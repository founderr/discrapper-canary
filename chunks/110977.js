n.d(t, {
    S: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(593214),
    c = n(981631),
    u = n(388032),
    d = n(941443),
    h = n(516126),
    p = n(64056);
function m() {
    return (0, i.jsx)('div', {
        className: a()(h.row, h.rowGuildName),
        children: (0, i.jsx)('span', {
            className: a()(h.guildNameText, h.guildNameTextLimitedSize, d.tooltipText),
            children: u.intl.string(u.t['4tSWQk'])
        })
    });
}
let f = l.memo(function (e) {
    let { 'aria-label': t = !1, children: n } = e,
        r = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, s.up)();
            return (
                l.useEffect(() => {
                    if (e) {
                        let e = setTimeout(() => {
                            t();
                        }, 1500);
                        return () => {
                            t(), clearTimeout(e);
                        };
                    }
                }, [e, t]),
                e
            );
        })();
    return (0, i.jsx)(o.Tooltip, {
        forceOpen: r,
        color: o.TooltipColors.GREEN,
        hideOnClick: !0,
        spacing: 20,
        position: 'right',
        align: 'center',
        text: (0, i.jsx)(m, {}),
        'aria-label': t,
        tooltipClassName: p.listItemTooltip,
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                onMouseEnter: c.dG4,
                onMouseLeave: c.dG4,
                children: n
            })
    });
});
