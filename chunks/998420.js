n.r(s);
var t = n(735250),
    a = n(470079),
    l = n(442837),
    r = n(100527),
    i = n(906732),
    o = n(252618),
    c = n(598077),
    d = n(430824),
    u = n(693546),
    I = n(863249),
    E = n(328977),
    _ = n(208257),
    T = n(853486),
    m = n(689938),
    R = n(271648);
s.default = function (e) {
    let { guildId: s } = e,
        { analyticsLocations: n } = (0, i.ZP)(r.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        M = (0, E.L)({ guildId: s }),
        { user: N } = null != M ? M : {},
        C = a.useMemo(() => (null != N ? new c.Z(N) : null), [N]),
        x = (0, l.e7)([d.Z], () => d.Z.getGuild(s), [s]);
    (0, o.Tt)({
        subsection: m.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
        location: null == x ? void 0 : x.name
    }),
        a.useEffect(() => {
            I.ZP.fetchVerificationForm(s);
        }, [s]);
    let h = null != M && null != x && null != C;
    return (0, t.jsxs)(i.Gt, {
        value: n,
        children: [
            (0, t.jsx)('div', {
                className: R.content,
                children: (0, t.jsx)(_.Z, {
                    guildId: s,
                    isSidebarOpen: h
                })
            }),
            h &&
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)('div', { className: R.sidebarSeparator }),
                        (0, t.jsx)('section', {
                            className: R.sidebar,
                            children: (0, t.jsx)(T.Z, {
                                guild: x,
                                guildJoinRequest: M,
                                guildJoinRequestUser: C,
                                onClose: () => u.Z.setSelectedGuildJoinRequest(s, null)
                            })
                        })
                    ]
                })
        ]
    });
};
