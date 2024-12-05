n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(503089),
    o = n(906732),
    c = n(254901),
    d = n(18438),
    u = n(778825),
    m = n(851894),
    g = n(484459),
    h = n(216045),
    p = n(839469),
    x = n(25990),
    T = n(594174),
    S = n(585483),
    _ = n(16703),
    E = n(785145),
    C = n(981631),
    f = n(526761),
    I = n(726985),
    N = n(388032),
    A = n(228615);
function b() {
    c.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, r.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, _.Z)(),
        n = (0, r.e7)([u.Z, x.Z], () => u.Z.showNotice() || x.Z.showNotice()),
        b = null != e ? e : t,
        v = (0, r.e7)([T.default], () => T.default.getCurrentUser()),
        { subsection: j, setSubsection: O } = (0, E.Z)(),
        { analyticsLocations: R } = (0, o.ZP)(),
        { hasSearchResults: P, searchResults: D } = (0, p.E)();
    function y(t) {
        if (j !== t) {
            if (n) {
                S.S.dispatch(C.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: a.$x
                }),
                    S.S.dispatch(C.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === f.NB.GUILD && null == e && null != b && (0, d.Fq)(b, R), O(t);
        }
    }
    s.useEffect(() => {
        null != v && (0, g.Z)(v.id, v.getAvatarURL(null == b ? void 0 : b.id, 80), { guildId: null == b ? void 0 : b.id });
    }, [null == b ? void 0 : b.id, v]);
    let B = !0,
        L = !0;
    return (
        P && 1 === D.length && (D.includes(I.s6.PROFILE_SERVER_PROFILES) ? (y(f.NB.GUILD), (L = !1)) : D.includes(I.s6.PROFILE_USER_PROFILE) && (y(f.NB.USER_PROFILE), (B = !1))),
        (0, i.jsx)(o.Gt, {
            value: R,
            children: (0, i.jsxs)(l.HeadingLevel, {
                component: (0, i.jsx)(l.Heading, {
                    variant: 'heading-lg/semibold',
                    children: N.intl.string(N.t['vi7f+v'])
                }),
                children: [
                    (0, i.jsxs)(l.TabBar, {
                        className: A.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: j,
                        onItemSelect: y,
                        children: [
                            L
                                ? (0, i.jsx)(
                                      l.TabBar.Item,
                                      {
                                          className: A.tabBarItem,
                                          id: f.NB.USER_PROFILE,
                                          children: N.intl.string(N.t['OU3/Pj'])
                                      },
                                      f.NB.USER_PROFILE
                                  )
                                : null,
                            B
                                ? (0, i.jsx)(
                                      l.TabBar.Item,
                                      {
                                          className: A.tabBarItem,
                                          id: f.NB.GUILD,
                                          children: N.intl.string(N.t.kPHroa)
                                      },
                                      f.NB.GUILD
                                  )
                                : null
                        ]
                    }),
                    j === f.NB.GUILD ? (0, i.jsx)(m.Z, { selectedGuild: b }) : (0, i.jsx)(h.Z, {})
                ]
            })
        })
    );
}
