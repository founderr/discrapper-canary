n.d(t, {
    Z: function () {
        return A;
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
    h = n(484459),
    g = n(216045),
    p = n(839469),
    x = n(25990),
    S = n(594174),
    T = n(585483),
    C = n(16703),
    _ = n(785145),
    E = n(981631),
    f = n(526761),
    I = n(726985),
    N = n(388032),
    b = n(964654);
function A() {
    c.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, r.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, C.Z)(),
        n = (0, r.e7)([u.Z, x.Z], () => u.Z.showNotice() || x.Z.showNotice()),
        A = null != e ? e : t,
        v = (0, r.e7)([S.default], () => S.default.getCurrentUser()),
        { subsection: j, setSubsection: O } = (0, _.Z)(),
        { analyticsLocations: R } = (0, o.ZP)(),
        { hasSearchResults: P, searchResults: D } = (0, p.E)();
    function y(t) {
        if (j !== t) {
            if (n) {
                T.S.dispatch(E.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: a.$x
                }),
                    T.S.dispatch(E.CkL.EMPHASIZE_NOTICE);
                return;
            }
            t === f.NB.GUILD && null == e && null != A && (0, d.Fq)(A, R), O(t);
        }
    }
    s.useEffect(() => {
        null != v && (0, h.Z)(v.id, v.getAvatarURL(null == A ? void 0 : A.id, 80), { guildId: null == A ? void 0 : A.id });
    }, [null == A ? void 0 : A.id, v]);
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
                        className: b.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: j,
                        onItemSelect: y,
                        children: [
                            L
                                ? (0, i.jsx)(
                                      l.TabBar.Item,
                                      {
                                          className: b.tabBarItem,
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
                                          className: b.tabBarItem,
                                          id: f.NB.GUILD,
                                          children: N.intl.string(N.t.kPHroa)
                                      },
                                      f.NB.GUILD
                                  )
                                : null
                        ]
                    }),
                    j === f.NB.GUILD ? (0, i.jsx)(m.Z, { selectedGuild: A }) : (0, i.jsx)(g.Z, {})
                ]
            })
        })
    );
}
