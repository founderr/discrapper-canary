n.r(t);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    o = n(100527),
    l = n(906732),
    c = n(252618),
    s = n(598077),
    d = n(430824),
    u = n(693546),
    m = n(863249),
    f = n(328977),
    b = n(208257),
    x = n(853486),
    p = n(388032),
    h = n(251806);
t.default = function (e) {
    let { guildId: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(o.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        C = (0, f.L)({ guildId: t }),
        { user: g } = null != C ? C : {},
        _ = r.useMemo(() => (null != g ? new s.Z(g) : null), [g]),
        v = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    (0, c.Tt)({
        subsection: p.intl.string(p.t.nqrK8f),
        location: null == v ? void 0 : v.name
    }),
        r.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
        }, [t]);
    let j = null != C && null != v && null != _;
    return (0, i.jsxs)(l.Gt, {
        value: n,
        children: [
            (0, i.jsx)('div', {
                className: h.content,
                children: (0, i.jsx)(b.Z, {
                    guildId: t,
                    isSidebarOpen: j
                })
            }),
            j &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', { className: h.sidebarSeparator }),
                        (0, i.jsx)('section', {
                            className: h.sidebar,
                            children: (0, i.jsx)(x.Z, {
                                guild: v,
                                guildJoinRequest: C,
                                guildJoinRequestUser: _,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(t, null)
                            })
                        })
                    ]
                })
        ]
    });
};
