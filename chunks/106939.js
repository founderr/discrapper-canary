n.d(t, {
    M: function () {
        return W;
    },
    Z: function () {
        return K;
    }
});
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    o = n(873546),
    l = n(286379),
    c = n(399606),
    d = n(704215),
    _ = n(481060),
    u = n(150063),
    E = n(758119),
    T = n(100527),
    I = n(906732),
    R = n(252618),
    m = n(313201),
    g = n(605236),
    N = n(984370),
    C = n(797614),
    p = n(108427),
    f = n(210887),
    A = n(695346),
    S = n(594174),
    h = n(626135),
    M = n(280570),
    x = n(914788),
    b = n(841409),
    O = n(652262),
    P = n(880257),
    v = n(631885),
    L = n(830746),
    Z = n(731934),
    D = n(521450),
    B = n(292352),
    U = n(981631),
    j = n(723359),
    G = n(921944),
    w = n(689938),
    y = n(379493);
let H = {
        [B.dG.REQUESTS]: () => (0, s.jsx)(Z.Z, {}),
        [B.dG.ACTIVITY]: () => (0, s.jsx)(L.Z, {}),
        [B.dG.SETTINGS]: () => (0, s.jsx)(D.Z, {})
    },
    k = {
        [B.dG.REQUESTS]: () => (0, s.jsx)(Z.Z, {}),
        [B.dG.ACTIVITY]: () => (0, s.jsx)(L.Z, {})
    };
function F(e) {
    let { section: t, handleItemSelect: n } = e,
        a = (0, v.gU)(),
        r = (0, P.Z)();
    return (0, s.jsxs)(_.TabBar, {
        className: y.settingsTabBar,
        'aria-label': w.Z.Messages.FAMILY_CENTER_TITLE,
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, s.jsx)(_.TabBar.Item, {
                className: y.settingsTabBarItem,
                id: B.dG.ACTIVITY,
                children: w.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
            }),
            (0, s.jsxs)(_.TabBar.Item, {
                className: y.settingsTabBarItem,
                id: B.dG.REQUESTS,
                'aria-label': w.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                children: [
                    w.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                    a > 0
                        ? (0, s.jsx)(_.NumberBadge, {
                              className: y.badge,
                              count: a
                          })
                        : null
                ]
            }),
            r
                ? (0, s.jsx)(_.TabBar.Item, {
                      className: y.settingsTabBarItem,
                      id: B.dG.SETTINGS,
                      children: w.Z.Messages.SETTINGS
                  })
                : null
        ]
    });
}
function V(e) {
    let { theme: t, section: n, handleItemSelect: a } = e,
        r = (0, m.Dt)(),
        l = (0, v.gU)();
    return (0, s.jsx)(_.ThemeProvider, {
        theme: t,
        children: (e) =>
            (0, s.jsxs)(N.Z, {
                className: i()(e, y.sidebarTabBar),
                scrollable: o.tq,
                role: 'navigation',
                'aria-labelledby': r,
                toolbar: !0,
                children: [
                    (0, s.jsx)(N.Z.Icon, {
                        icon: _.GroupIcon,
                        'aria-hidden': !0
                    }),
                    (0, s.jsx)(N.Z.Title, {
                        id: r,
                        children: w.Z.Messages.FAMILY_CENTER_TITLE
                    }),
                    (0, s.jsx)(N.Z.Divider, {}),
                    (0, s.jsxs)(_.TabBar, {
                        'aria-label': w.Z.Messages.FAMILY_CENTER_TITLE,
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: a,
                        className: y.__invalid_tabBar,
                        children: [
                            (0, s.jsx)(_.TabBar.Item, {
                                id: B.dG.ACTIVITY,
                                className: y.item,
                                children: w.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
                            }),
                            (0, s.jsxs)(_.TabBar.Item, {
                                id: B.dG.REQUESTS,
                                className: y.item,
                                'aria-label': w.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                                children: [
                                    w.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                                    l > 0
                                        ? (0, s.jsx)(_.NumberBadge, {
                                              className: y.badge,
                                              count: l
                                          })
                                        : null
                                ]
                            })
                        ]
                    })
                ]
            })
    });
}
function W() {
    let e = (0, P.Z)(),
        t = (0, v.M8)(),
        n = (0, g.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        r = (0, c.e7)([x.Z], () => x.Z.getIsInitialized()),
        o = (0, O.M)(),
        { selectedTab: u, handleTabChange: T } = (0, b.Z)(),
        I = (0, m.Dt)(),
        N = S.default.getCurrentUser(),
        f = null != e,
        A = r && null != N && !f;
    return (a.useEffect(() => {
        (0, p.e)('family-center'),
            M.ZP.initialPageLoad(),
            !n &&
                (0, g.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: G.L.AUTO,
                    forceTrack: !0
                });
    }, []),
    a.useEffect(() => {
        r &&
            f &&
            (h.default.track(U.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: o,
                initial_page: B.QH[u],
                source: B._6[B.Mu.SIDENAV]
            }),
            C.Z.increment({ name: l.V.FAMILY_CENTER_VIEW }));
    }, [r, f]),
    A)
        ? ((0, E.mN)(j.L0.FAMILY_CENTER), null)
        : (0, s.jsxs)('main', {
              className: i()(y.container),
              'aria-label': w.Z.Messages.FAMILY_CENTER_TITLE,
              children: [
                  (0, s.jsx)(R.yY, { location: w.Z.Messages.FAMILY_CENTER_TITLE }),
                  (0, s.jsx)(F, {
                      section: u,
                      handleItemSelect: (e) => {
                          T(e);
                      }
                  }),
                  (0, s.jsx)(_.TabBar.Panel, {
                      id: u,
                      'aria-labelledby': I,
                      className: y.contentPanel,
                      children: (0, s.jsx)('div', { children: H[u]() })
                  })
              ]
          });
}
function K() {
    let { analyticsLocations: e } = (0, I.ZP)(T.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, v.M8)(),
        r = (0, g.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        o = (0, c.e7)([x.Z], () => x.Z.getIsInitialized()),
        N = (0, O.M)(),
        L = (0, c.e7)([f.Z], () => f.Z.theme),
        { selectedTab: Z, handleTabChange: D } = (0, b.Z)(),
        H = (0, m.Dt)(),
        F = S.default.getCurrentUser(),
        W = null != t,
        K = o && null != F && !W;
    if (
        (a.useEffect(() => {
            u.Y(U.Z5c.FAMILY_CENTER),
                (0, p.e)('family-center'),
                !x.Z.isLoading() && x.Z.canRefetch() && M.ZP.initialPageLoad(),
                !r &&
                    (0, g.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                        dismissAction: G.L.AUTO,
                        forceTrack: !0
                    });
        }, []),
        a.useEffect(() => {
            o &&
                W &&
                (h.default.track(U.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: t,
                    num_of_accepted_links: n,
                    selected_teen_id: N,
                    initial_page: B.QH[Z],
                    source: B._6[B.Mu.SIDENAV]
                }),
                C.Z.increment({ name: l.V.FAMILY_CENTER_VIEW }));
        }, [o, W]),
        a.useEffect(() => {
            let e = A.Ex.getSetting();
            o && t && void 0 === e && A.Ex.updateSetting(!0);
        }, [o, t]),
        K)
    )
        return (0, E.mN)(j.L0.FAMILY_CENTER), null;
    let Y = Z !== B.dG.SETTINGS ? Z : B.dG.ACTIVITY,
        z = k[Y];
    return (0, s.jsx)(I.Gt, {
        value: e,
        children: (0, s.jsxs)('main', {
            className: i()(y.container, y.containerSidenav),
            'aria-label': w.Z.Messages.FAMILY_CENTER_TITLE,
            children: [
                (0, s.jsx)(R.yY, { location: w.Z.Messages.FAMILY_CENTER_TITLE }),
                (0, s.jsx)(V, {
                    theme: L,
                    section: Y,
                    handleItemSelect: (e) => {
                        D(e);
                    }
                }),
                (0, s.jsx)(_.TabBar.Panel, {
                    id: Y,
                    'aria-labelledby': H,
                    className: y.contentPanel,
                    children: (0, s.jsx)(_.Scroller, {
                        children: (0, s.jsx)('div', {
                            className: y.sideNavContent,
                            children: z()
                        })
                    })
                })
            ]
        })
    });
}
