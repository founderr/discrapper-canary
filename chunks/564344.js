t.d(s, {
    Z: function () {
        return x;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(503089),
    l = t(906732),
    c = t(254901),
    d = t(18438),
    u = t(778825),
    _ = t(66516),
    E = t(484459),
    T = t(216045),
    I = t(839469),
    S = t(25990),
    N = t(594174),
    m = t(585483),
    C = t(16703),
    g = t(785145),
    A = t(981631),
    h = t(526761),
    O = t(726985),
    p = t(689938),
    R = t(798042);
function x() {
    c.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, i.e7)([u.Z], () => u.Z.getGuild()),
        s = (0, C.Z)(),
        t = (0, i.e7)([u.Z, S.Z], () => u.Z.showNotice() || S.Z.showNotice()),
        x = null != e ? e : s,
        f = (0, i.e7)([N.default], () => N.default.getCurrentUser()),
        { subsection: M, setSubsection: D } = (0, g.Z)(),
        { analyticsLocations: P } = (0, l.ZP)(),
        { hasSearchResults: L, searchResults: b } = (0, I.E)();
    function Z(s) {
        if (M !== s) {
            if (t) {
                m.S.dispatch(A.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: o.$x
                }),
                    m.S.dispatch(A.CkL.EMPHASIZE_NOTICE);
                return;
            }
            s === h.NB.GUILD && null == e && null != x && (0, d.Fq)(x, P), D(s);
        }
    }
    a.useEffect(() => {
        null != f && (0, E.Z)(f.id, f.getAvatarURL(null == x ? void 0 : x.id, 80), { guildId: null == x ? void 0 : x.id });
    }, [null == x ? void 0 : x.id, f]);
    let v = !0,
        j = !0;
    return (
        L && 1 === b.length && (b.includes(O.s6.PROFILE_SERVER_PROFILES) ? (Z(h.NB.GUILD), (j = !1)) : b.includes(O.s6.PROFILE_USER_PROFILE) && (Z(h.NB.USER_PROFILE), (v = !1))),
        (0, n.jsx)(l.Gt, {
            value: P,
            children: (0, n.jsxs)(r.HeadingLevel, {
                component: (0, n.jsx)(r.Heading, {
                    variant: 'heading-lg/semibold',
                    children: p.Z.Messages.USER_SETTINGS_PROFILES
                }),
                children: [
                    (0, n.jsxs)(r.TabBar, {
                        className: R.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: M,
                        onItemSelect: Z,
                        children: [
                            j
                                ? (0, n.jsx)(
                                      r.TabBar.Item,
                                      {
                                          className: R.tabBarItem,
                                          id: h.NB.USER_PROFILE,
                                          children: p.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
                                      },
                                      h.NB.USER_PROFILE
                                  )
                                : null,
                            v
                                ? (0, n.jsx)(
                                      r.TabBar.Item,
                                      {
                                          className: R.tabBarItem,
                                          id: h.NB.GUILD,
                                          children: p.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
                                      },
                                      h.NB.GUILD
                                  )
                                : null
                        ]
                    }),
                    M === h.NB.GUILD ? (0, n.jsx)(_.Z, { selectedGuild: x }) : (0, n.jsx)(T.Z, {})
                ]
            })
        })
    );
}
