var i = n(735250),
    l = n(470079),
    r = n(636977),
    a = n(481060),
    s = n(212093),
    o = n(831565),
    c = n(836768),
    u = n(341907),
    d = n(703656),
    h = n(683301),
    p = n(603592),
    _ = n(981631),
    f = n(731455),
    g = n(49898),
    m = n(46140),
    C = n(689938);
let I = l.forwardRef(function (e, t) {
    let { selected: n, className: l, onClick: I } = e,
        E = (0, o.v)({ location: 'guild_discovery_button' }) ? C.Z.Messages.DISCOVER : C.Z.Messages.GUILD_DISCOVERY_TOOLTIP,
        N = c.d.getState().selectedTab;
    return (0, i.jsx)(p.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: l,
        onClick: () => {
            null == I || I(),
                !(function (e) {
                    let t = (0, o.a)({ location: 'discovery_button' }),
                        n = window.location.pathname.startsWith(_.Z5c.GUILD_DISCOVERY),
                        i = h.ZP.getCurrentCategoryId() === f.Gj.Clans;
                    if (t) {
                        if (e === g.F$.QUESTS) {
                            (0, u.navigateToQuestHome)(m.dr.DISCOVERY_COMPASS, r.j.DISCOVERY_COMPASS);
                            return;
                        }
                        if (e === g.F$.SERVERS) {
                            (0, d.uL)(_.Z5c.GLOBAL_DISCOVERY_SERVERS);
                            return;
                        }
                        (0, d.uL)(_.Z5c.GLOBAL_DISCOVERY);
                        return;
                    }
                    n && !i && ((0, s.AQ)(), (0, s.uY)(f.Hk, !0));
                    let l = (0, d.s1)().location.search;
                    (0, d.uL)(_.Z5c.GUILD_DISCOVERY, { search: l });
                })(N);
        },
        selected: n,
        tooltip: E,
        icon: a.CompassIcon
    });
});
t.Z = I;
