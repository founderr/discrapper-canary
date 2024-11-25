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
    S = n(20967),
    N = n(504762),
    T = n(807152),
    A = n(176505),
    b = n(388032),
    x = n(807859);
function Z(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([f.Z], () => f.Z.getGuild(t), [t]),
        Z = (0, a.e7)([p.Z], () => p.Z.isConnected()),
        L = (0, h.Z)(t),
        y = (0, I.Z)(t),
        O = (0, a.e7)([_.Z], () => _.Z.isSubscriptionFetching),
        R = (0, E.f)(),
        { shouldHideGuildPurchaseEntryPoints: P, restrictionsLoading: j } = (0, m.uP)(t),
        D = null == n || !R || O || j;
    (0, d.Tt)({
        subsection: b.intl.string(b.t['KzCF//']),
        location: null == n ? void 0 : n.name
    }),
        (0, c.Z)(l.tq ? 'role-subscriptions-overview' : void 0);
    let M = Z && (null == n || !(L || y) || (P && !j));
    if (
        (r.useEffect(() => {
            o.jg();
        }, []),
        r.useEffect(() => {
            M && !l.tq && (0, u.M)(t, A.oC.ROLE_SUBSCRIPTIONS);
        }, [t, M]),
        l.tq && M)
    ) {
        let e = null == n ? S.J.NOT_GUILD_MEMBER : S.J.GUILD_NOT_ELIGIBLE;
        return (0, i.jsx)(S.z, { errorType: e });
    }
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsxs)(g.Z, {
                toolbar: (0, i.jsx)(r.Fragment, {}),
                className: x.headerBar,
                children: [
                    (0, i.jsx)(g.Z.Icon, {
                        icon: (0, s.makeIconCompat)(C.Z),
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(g.Z.Title, { children: b.intl.string(b.t['KzCF//']) })
                ]
            }),
            (0, i.jsx)('div', { id: T.v }),
            (0, i.jsx)('div', {
                className: x.content,
                children: L
                    ? (0, i.jsx)(s.ScrollerNone, {
                          className: x.scroller,
                          children: (0, i.jsx)('div', {
                              className: x.scrollerContent,
                              children: D ? (0, i.jsx)(s.Spinner, {}) : (0, i.jsx)(v.Z, { guild: n })
                          })
                      })
                    : (0, i.jsx)(N.Z, {})
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
