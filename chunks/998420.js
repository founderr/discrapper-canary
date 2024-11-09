n.r(t);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(100527),
    s = n(906732),
    o = n(252618),
    c = n(598077),
    d = n(430824),
    u = n(693546),
    m = n(863249),
    h = n(328977),
    x = n(208257),
    b = n(853486),
    j = n(388032),
    p = n(271648);
t.default = function (e) {
    let { guildId: t } = e,
        { analyticsLocations: n } = (0, s.ZP)(a.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        g = (0, h.L)({ guildId: t }),
        { user: v } = null != g ? g : {},
        f = l.useMemo(() => (null != v ? new c.Z(v) : null), [v]),
        C = (0, r.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    (0, o.Tt)({
        subsection: j.intl.string(j.t.nqrK8f),
        location: null == C ? void 0 : C.name
    }),
        l.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
        }, [t]);
    let I = null != g && null != C && null != f;
    return (0, i.jsxs)(s.Gt, {
        value: n,
        children: [
            (0, i.jsx)('div', {
                className: p.content,
                children: (0, i.jsx)(x.Z, {
                    guildId: t,
                    isSidebarOpen: I
                })
            }),
            I &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', { className: p.sidebarSeparator }),
                        (0, i.jsx)('section', {
                            className: p.sidebar,
                            children: (0, i.jsx)(b.Z, {
                                guild: C,
                                guildJoinRequest: g,
                                guildJoinRequestUser: f,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(t, null)
                            })
                        })
                    ]
                })
        ]
    });
};
