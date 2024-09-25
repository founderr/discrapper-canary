n.d(t, {
    o: function () {
        return Z;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(636977),
    a = n(704215),
    s = n(481060),
    o = n(212093),
    c = n(169559),
    u = n(706140),
    d = n(831565),
    h = n(571457),
    p = n(836768),
    f = n(341907),
    _ = n(703656),
    m = n(683301),
    g = n(603592),
    C = n(981631),
    I = n(731455),
    E = n(921944),
    N = n(49898),
    x = n(46140),
    S = n(689938),
    v = n(55869);
function Z(e, t) {
    let n = (0, d.a)({ location: 'discovery_button' }),
        i = window.location.pathname.startsWith(C.Z5c.GUILD_DISCOVERY),
        l = m.ZP.getCurrentCategoryId() === I.Gj.Clans;
    if (n) {
        if (e === N.F$.QUESTS) {
            (0, f.navigateToQuestHome)(x.dr.DISCOVERY_COMPASS, r.j.DISCOVERY_COMPASS);
            return;
        }
        if (e === N.F$.SERVERS) {
            (0, _.uL)(C.Z5c.GLOBAL_DISCOVERY_SERVERS);
            return;
        }
        (0, _.uL)(C.Z5c.GLOBAL_DISCOVERY);
        return;
    }
    i && !l && ((0, o.AQ)(), (0, o.uY)(t, !0));
    let a = (0, _.s1)().location.search;
    (0, _.uL)(C.Z5c.GUILD_DISCOVERY, { search: a });
}
let T = l.forwardRef(function (e, t) {
    let { selected: n, className: r, onClick: o } = e,
        f = (0, d.v)({ location: 'guild_discovery_button' }) ? S.Z.Messages.DISCOVER : S.Z.Messages.GUILD_DISCOVERY_TOOLTIP,
        _ = p.d.getState().selectedTab,
        m = (0, c.Z)('discovery_button'),
        C = m ? I.Gj.Clans : I.Hk,
        [x, T] = (0, u.cv)([a.z.GLOBAL_DISCOVERY_RAPIDASH_NOTIF]),
        b = l.useCallback(() => {
            null == o || o(), (0, h.k5)({ source: N.JU.GUILDS_BAR_ICON }), Z(_, C), T(E.L.DISMISS);
        }, [o, _, C, T]),
        A = null != x && m,
        M = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: A ? (0, i.jsx)('div', { className: v.guildNotif }) : void 0
            }),
            [A]
        );
    return (0, i.jsx)(g.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: r,
        onClick: b,
        selected: n,
        tooltip: f,
        icon: s.CompassIcon,
        ...M
    });
});
t.Z = T;
