r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(100527),
    u = r(873128),
    c = r(704041),
    d = r(463031),
    f = r(224990);
function _(e) {
    let { guild: n, message: r } = e,
        [i, _] = s.useState(!1),
        h = s.useRef(!1),
        p = (0, u.Z)({
            guildId: n.id,
            leaderboardId: d._,
            intervalOffset: 0
        });
    if (
        !s.useMemo(() => {
            var e;
            if ((null == p ? void 0 : null === (e = p.guild_settings) || void 0 === e ? void 0 : e.show_winner_crown) !== !0) return !1;
            let n = p.users[0];
            return r.author.id === (null == n ? void 0 : n.user_id);
        }, [p, r])
    )
        return null;
    let m = () => {
            (h.current = !0), _(!0);
        },
        g = () => {
            (h.current = !1),
                setTimeout(() => {
                    !h.current && _(!1);
                }, 100);
        };
    return (0, a.jsx)('div', {
        className: f.badge,
        onMouseEnter: m,
        onMouseLeave: g,
        children: (0, a.jsx)(o.Popout, {
            animation: o.Popout.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'top',
            shouldShow: i,
            renderPopout: () =>
                (0, a.jsx)(c.Z, {
                    guildId: n.id,
                    previewMode: !0,
                    source: l.Z.MEMBER_LIST
                }),
            children: () =>
                (0, a.jsx)(o.LeagueOfLegendsBrandIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20
                })
        })
    });
}
