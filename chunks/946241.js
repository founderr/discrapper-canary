n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(873128),
    l = n(704041),
    u = n(463031),
    c = n(383177);
function d(e) {
    let { guild: t, message: n } = e,
        [r, d] = a.useState(!1),
        _ = a.useRef(!1),
        E = (0, s.Z)({
            guildId: t.id,
            leaderboardId: u._,
            intervalOffset: 0
        });
    if (
        !a.useMemo(() => {
            if (null == E) return !1;
            let e = E.users[0];
            return n.author.id === (null == e ? void 0 : e.user_id);
        }, [E, n])
    )
        return null;
    let f = () => {
            (_.current = !0), d(!0);
        },
        h = () => {
            (_.current = !1),
                setTimeout(() => {
                    !_.current && d(!1);
                }, 100);
        };
    return (0, i.jsx)('div', {
        className: c.badge,
        onMouseEnter: f,
        onMouseLeave: h,
        children: (0, i.jsx)(o.Popout, {
            animation: o.Popout.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            shouldShow: r,
            renderPopout: () =>
                (0, i.jsx)(l.Z, {
                    guildId: t.id,
                    previewMode: !0
                }),
            children: () =>
                (0, i.jsx)(o.LeagueOfLegendsBrandIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20
                })
        })
    });
}
