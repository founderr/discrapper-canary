n.d(t, {
    Z: function () {
        return L;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(355467),
    c = n(270237),
    d = n(252618),
    u = n(423000),
    h = n(200876),
    m = n(674180),
    p = n(38618),
    g = n(984370),
    f = n(430824),
    _ = n(351402),
    E = n(730647),
    I = n(772021),
    C = n(396828),
    v = n(293423),
    N = n(20967),
    T = n(504762),
    S = n(807152),
    A = n(176505),
    x = n(388032),
    b = n(752335);
function Z(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([f.Z], () => f.Z.getGuild(t), [t]),
        Z = (0, a.e7)([p.Z], () => p.Z.isConnected()),
        L = (0, h.Z)(t),
        y = (0, I.Z)(t),
        P = (0, a.e7)([_.Z], () => _.Z.isSubscriptionFetching),
        O = (0, E.f)(),
        { shouldHideGuildPurchaseEntryPoints: R, restrictionsLoading: j } = (0, m.uP)(t),
        D = null == n || !O || P || j;
    (0, d.Tt)({
        subsection: x.intl.string(x.t['KzCF//']),
        location: null == n ? void 0 : n.name
    }),
        (0, c.Z)(l.tq ? 'role-subscriptions-overview' : void 0);
    let M = Z && (null == n || !(L || y) || (R && !j));
    if (
        (r.useEffect(() => {
            o.jg();
        }, []),
        r.useEffect(() => {
            M && !l.tq && (0, u.M)(t, A.oC.ROLE_SUBSCRIPTIONS);
        }, [t, M]),
        l.tq && M)
    ) {
        let e = null == n ? N.J.NOT_GUILD_MEMBER : N.J.GUILD_NOT_ELIGIBLE;
        return (0, i.jsx)(N.z, { errorType: e });
    }
    return (0, i.jsxs)('div', {
        className: b.container,
        children: [
            (0, i.jsxs)(g.Z, {
                toolbar: (0, i.jsx)(r.Fragment, {}),
                className: b.headerBar,
                children: [
                    (0, i.jsx)(g.Z.Icon, {
                        icon: (0, s.makeIconCompat)(C.Z),
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(g.Z.Title, { children: x.intl.string(x.t['KzCF//']) })
                ]
            }),
            (0, i.jsx)('div', { id: S.v }),
            (0, i.jsx)('div', {
                className: b.content,
                children: L
                    ? (0, i.jsx)(s.ScrollerNone, {
                          className: b.scroller,
                          children: (0, i.jsx)('div', {
                              className: b.scrollerContent,
                              children: D ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)(v.Z, { guild: n })
                          })
                      })
                    : (0, i.jsx)(T.Z, {})
            })
        ]
    });
}
function L(e) {
    let { guildId: t } = e;
    return (0, i.jsx)(E.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, i.jsx)(Z, { guildId: t })
    });
}
