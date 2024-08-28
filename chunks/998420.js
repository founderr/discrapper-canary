n.r(s);
var a = n(735250),
    t = n(470079),
    r = n(442837),
    l = n(100527),
    i = n(906732),
    o = n(252618),
    c = n(598077),
    d = n(430824),
    u = n(693546),
    I = n(863249),
    E = n(328977),
    _ = n(208257),
    T = n(853486),
    N = n(689938),
    R = n(344200);
s.default = function (e) {
    let { guildId: s } = e,
        { analyticsLocations: n } = (0, i.ZP)(l.Z.GUILD_MEMBER_APPLICATION_REVIEW),
        M = (0, E.L)({ guildId: s }),
        { user: C } = null != M ? M : {},
        m = t.useMemo(() => (null != C ? new c.Z(C) : null), [C]),
        A = (0, r.e7)([d.Z], () => d.Z.getGuild(s), [s]);
    return (
        (0, o.Tt)({
            subsection: N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
            location: null == A ? void 0 : A.name
        }),
        t.useEffect(() => {
            I.ZP.fetchVerificationForm(s);
        }, [s]),
        (0, a.jsxs)(i.Gt, {
            value: n,
            children: [
                (0, a.jsx)('div', {
                    className: R.content,
                    children: (0, a.jsx)(_.Z, { guildId: s })
                }),
                null != M &&
                    null != A &&
                    null != m &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)('div', { className: R.sidebarSeparator }),
                            (0, a.jsx)('section', {
                                className: R.sidebar,
                                children: (0, a.jsx)(T.Z, {
                                    guild: A,
                                    guildJoinRequest: M,
                                    guildJoinRequestUser: m,
                                    onClose: () => u.Z.setSelectedGuildJoinRequest(s, null)
                                })
                            })
                        ]
                    })
            ]
        })
    );
};
