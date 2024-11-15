n.r(t);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(100527),
    o = n(906732),
    c = n(252618),
    s = n(598077),
    d = n(430824),
    u = n(693546),
    m = n(863249),
    f = n(328977),
    b = n(208257),
    x = n(853486),
    h = n(388032),
    p = n(257242);
t.default = function (e) {
    let { guildId: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(l.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        g = (0, f.L)({ guildId: t }),
        { user: C } = null != g ? g : {},
        _ = r.useMemo(() => (null != C ? new s.Z(C) : null), [C]),
        v = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    (0, c.Tt)({
        subsection: h.intl.string(h.t.nqrK8f),
        location: null == v ? void 0 : v.name
    }),
        r.useEffect(() => {
            m.ZP.fetchVerificationForm(t);
        }, [t]);
    let j = null != g && null != v && null != _;
    return (0, i.jsxs)(o.Gt, {
        value: n,
        children: [
            (0, i.jsx)('div', {
                className: p.content,
                children: (0, i.jsx)(b.Z, {
                    guildId: t,
                    isSidebarOpen: j
                })
            }),
            j &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('div', { className: p.sidebarSeparator }),
                        (0, i.jsx)('section', {
                            className: p.sidebar,
                            children: (0, i.jsx)(x.Z, {
                                guild: v,
                                guildJoinRequest: g,
                                guildJoinRequestUser: _,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(t, null)
                            })
                        })
                    ]
                })
        ]
    });
};
