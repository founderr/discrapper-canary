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
    _ = t(778825),
    u = t(66516),
    E = t(484459),
    T = t(216045),
    S = t(839469),
    I = t(25990),
    N = t(594174),
    m = t(585483),
    A = t(16703),
    C = t(785145),
    g = t(981631),
    h = t(526761),
    O = t(726985),
    p = t(689938),
    R = t(964654);
function x() {
    c.Z.useExperiment({ location: 'profile_customization_auto' });
    let e = (0, i.e7)([_.Z], () => _.Z.getGuild()),
        s = (0, A.Z)(),
        t = (0, i.e7)([_.Z, I.Z], () => _.Z.showNotice() || I.Z.showNotice()),
        x = null != e ? e : s,
        M = (0, i.e7)([N.default], () => N.default.getCurrentUser()),
        { subsection: f, setSubsection: D } = (0, C.Z)(),
        { analyticsLocations: L } = (0, l.ZP)(),
        { hasSearchResults: P, searchResults: b } = (0, S.E)();
    function Z(s) {
        if (f !== s) {
            if (t) {
                m.S.dispatch(g.CkL.SHAKE_APP, {
                    duration: 300,
                    intensity: o.$x
                }),
                    m.S.dispatch(g.CkL.EMPHASIZE_NOTICE);
                return;
            }
            s === h.NB.GUILD && null == e && null != x && (0, d.Fq)(x, L), D(s);
        }
    }
    a.useEffect(() => {
        null != M && (0, E.Z)(M.id, M.getAvatarURL(null == x ? void 0 : x.id, 80), { guildId: null == x ? void 0 : x.id });
    }, [null == x ? void 0 : x.id, M]);
    let v = !0,
        j = !0;
    return (
        P && 1 === b.length && (b.includes(O.s6.PROFILE_SERVER_PROFILES) ? (Z(h.NB.GUILD), (j = !1)) : b.includes(O.s6.PROFILE_USER_PROFILE) && (Z(h.NB.USER_PROFILE), (v = !1))),
        (0, n.jsx)(l.Gt, {
            value: L,
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
                        selectedItem: f,
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
                    f === h.NB.GUILD ? (0, n.jsx)(u.Z, { selectedGuild: x }) : (0, n.jsx)(T.Z, {})
                ]
            })
        })
    );
}
