n.r(t);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    a = n(100527),
    l = n(906732),
    c = n(252618),
    s = n(598077),
    d = n(430824),
    u = n(693546),
    f = n(863249),
    b = n(328977),
    _ = n(208257),
    m = n(853486),
    p = n(388032),
    C = n(251806);
t.default = function (e) {
    let { guildId: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(a.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        x = (0, b.L)({ guildId: t }),
        { user: v } = null != x ? x : {},
        I = r.useMemo(() => (null != v ? new s.Z(v) : null), [v]),
        h = (0, o.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    (0, c.Tt)({
        subsection: p.intl.string(p.t.nqrK8f),
        location: null == h ? void 0 : h.name
    }),
        r.useEffect(() => {
            f.ZP.fetchVerificationForm(t);
        }, [t]);
    let g = null != x && null != h && null != I;
    return (0, i.jsxs)(l.Gt, {
        value: n,
        children: [
            (0, i.jsx)('div', {
                className: C.content,
                children: (0, i.jsx)(_.Z, {
                    guildId: t,
                    isSidebarOpen: g
                })
            }),
            g &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', { className: C.sidebarSeparator }),
                        (0, i.jsx)('section', {
                            className: C.sidebar,
                            children: (0, i.jsx)(m.Z, {
                                guild: h,
                                guildJoinRequest: x,
                                guildJoinRequestUser: I,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(t, null)
                            })
                        })
                    ]
                })
        ]
    });
};
