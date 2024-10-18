n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(873546),
    r = n(442837),
    l = n(481060),
    o = n(355467),
    c = n(270237),
    d = n(252618),
    u = n(423000),
    _ = n(200876),
    E = n(674180),
    h = n(38618),
    m = n(984370),
    I = n(430824),
    p = n(351402),
    g = n(730647),
    T = n(772021),
    f = n(396828),
    S = n(293423),
    C = n(20967),
    N = n(504762),
    A = n(807152),
    v = n(176505),
    Z = n(689938),
    L = n(752335);
function R(e) {
    let { guildId: t } = e,
        n = (0, r.e7)([I.Z], () => I.Z.getGuild(t), [t]),
        R = (0, r.e7)([h.Z], () => h.Z.isConnected()),
        O = (0, _.Z)(t),
        x = (0, T.Z)(t),
        b = (0, r.e7)([p.Z], () => p.Z.isSubscriptionFetching),
        M = (0, g.f)(),
        { shouldHideGuildPurchaseEntryPoints: P, restrictionsLoading: D } = (0, E.uP)(t),
        y = null == n || !M || b || D;
    (0, d.Tt)({
        subsection: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
        location: null == n ? void 0 : n.name
    }),
        (0, c.Z)(s.tq ? 'role-subscriptions-overview' : void 0);
    let j = R && (null == n || !(O || x) || (P && !D));
    if (
        (a.useEffect(() => {
            o.jg();
        }, []),
        a.useEffect(() => {
            j && !s.tq && (0, u.M)(t, v.oC.ROLE_SUBSCRIPTIONS);
        }, [t, j]),
        s.tq && j)
    ) {
        let e = null == n ? C.J.NOT_GUILD_MEMBER : C.J.GUILD_NOT_ELIGIBLE;
        return (0, i.jsx)(C.z, { errorType: e });
    }
    return (0, i.jsxs)('div', {
        className: L.container,
        children: [
            (0, i.jsxs)(m.Z, {
                toolbar: (0, i.jsx)(a.Fragment, {}),
                className: L.headerBar,
                children: [
                    (0, i.jsx)(m.Z.Icon, {
                        icon: (0, l.makeIconCompat)(f.Z),
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(m.Z.Title, { children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE })
                ]
            }),
            (0, i.jsx)('div', { id: A.v }),
            (0, i.jsx)('div', {
                className: L.content,
                children: O
                    ? (0, i.jsx)(l.ScrollerNone, {
                          className: L.scroller,
                          children: (0, i.jsx)('div', {
                              className: L.scrollerContent,
                              children: y ? (0, i.jsx)(l.Spinner, {}) : (0, i.jsx)(S.Z, { guild: n })
                          })
                      })
                    : (0, i.jsx)(N.Z, {})
            })
        ]
    });
}
function O(e) {
    let { guildId: t } = e;
    return (0, i.jsx)(g.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, i.jsx)(R, { guildId: t })
    });
}
