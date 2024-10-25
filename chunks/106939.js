n.d(t, {
    M: function () {
        return W;
    },
    Z: function () {
        return K;
    }
});
var s = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    l = n(873546),
    o = n(286379),
    c = n(399606),
    _ = n(704215),
    d = n(481060),
    E = n(150063),
    u = n(758119),
    T = n(100527),
    I = n(906732),
    R = n(252618),
    g = n(313201),
    N = n(605236),
    m = n(984370),
    C = n(797614),
    A = n(108427),
    p = n(210887),
    f = n(695346),
    M = n(594174),
    S = n(626135),
    h = n(280570),
    x = n(914788),
    b = n(841409),
    O = n(652262),
    P = n(880257),
    v = n(631885),
    L = n(830746),
    Z = n(731934),
    D = n(521450),
    U = n(292352),
    B = n(981631),
    j = n(723359),
    G = n(921944),
    w = n(689938),
    y = n(379493);
let H = {
        [U.dG.REQUESTS]: () => (0, s.jsx)(Z.Z, {}),
        [U.dG.ACTIVITY]: () => (0, s.jsx)(L.Z, {}),
        [U.dG.SETTINGS]: () => (0, s.jsx)(D.Z, {})
    },
    k = {
        [U.dG.REQUESTS]: () => (0, s.jsx)(Z.Z, {}),
        [U.dG.ACTIVITY]: () => (0, s.jsx)(L.Z, {})
    };
function F(e) {
    let { section: t, handleItemSelect: n } = e,
        a = (0, v.gU)(),
        r = (0, P.Z)();
    return (0, s.jsxs)(d.TabBar, {
        className: y.settingsTabBar,
        'aria-label': w.Z.Messages.FAMILY_CENTER_TITLE,
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, s.jsx)(d.TabBar.Item, {
                className: y.settingsTabBarItem,
                id: U.dG.ACTIVITY,
                children: w.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
            }),
            (0, s.jsxs)(d.TabBar.Item, {
                className: y.settingsTabBarItem,
                id: U.dG.REQUESTS,
                'aria-label': w.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                children: [
                    w.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                    a > 0
                        ? (0, s.jsx)(d.NumberBadge, {
                              className: y.badge,
                              count: a
                          })
                        : null
                ]
            }),
            r
                ? (0, s.jsx)(d.TabBar.Item, {
                      className: y.settingsTabBarItem,
                      id: U.dG.SETTINGS,
                      children: w.Z.Messages.SETTINGS
                  })
                : null
        ]
    });
}
function V(e) {
    let { theme: t, section: n, handleItemSelect: a } = e,
        r = (0, g.Dt)(),
        o = (0, v.gU)();
    return (0, s.jsx)(d.ThemeProvider, {
        theme: t,
        children: (e) =>
            (0, s.jsxs)(m.Z, {
                className: i()(e, y.sidebarTabBar),
                scrollable: l.tq,
                role: 'navigation',
                'aria-labelledby': r,
                toolbar: !0,
                children: [
                    (0, s.jsx)(m.Z.Icon, {
                        icon: d.GroupIcon,
                        'aria-hidden': !0
                    }),
                    (0, s.jsx)(m.Z.Title, {
                        id: r,
                        children: w.Z.Messages.FAMILY_CENTER_TITLE
                    }),
                    (0, s.jsx)(m.Z.Divider, {}),
                    (0, s.jsxs)(d.TabBar, {
                        'aria-label': w.Z.Messages.FAMILY_CENTER_TITLE,
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: a,
                        className: y.__invalid_tabBar,
                        children: [
                            (0, s.jsx)(d.TabBar.Item, {
                                id: U.dG.ACTIVITY,
                                className: y.item,
                                children: w.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
                            }),
                            (0, s.jsxs)(d.TabBar.Item, {
                                id: U.dG.REQUESTS,
                                className: y.item,
                                'aria-label': w.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                                children: [
                                    w.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
                                    o > 0
                                        ? (0, s.jsx)(d.NumberBadge, {
                                              className: y.badge,
                                              count: o
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
        n = (0, N.wE)(_.z.FAMILY_CENTER_NEW_BADGE),
        r = (0, c.e7)([x.Z], () => x.Z.getIsInitialized()),
        l = (0, O.M)(),
        { selectedTab: E, handleTabChange: T } = (0, b.Z)(),
        I = (0, g.Dt)(),
        m = M.default.getCurrentUser(),
        p = null != e,
        f = r && null != m && !p;
    return (a.useEffect(() => {
        (0, A.e)('family-center'),
            h.ZP.initialPageLoad(),
            !n &&
                (0, N.EW)(_.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: G.L.AUTO,
                    forceTrack: !0
                });
    }, []),
    a.useEffect(() => {
        r &&
            p &&
            (S.default.track(B.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: l,
                initial_page: U.QH[E],
                source: U._6[U.Mu.SIDENAV]
            }),
            C.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
    }, [r, p]),
    a.useEffect(() => {
        f && (0, u.mN)(j.L0.FAMILY_CENTER);
    }, [f]),
    f)
        ? null
        : (0, s.jsxs)('main', {
              className: i()(y.container),
              'aria-label': w.Z.Messages.FAMILY_CENTER_TITLE,
              children: [
                  (0, s.jsx)(R.yY, { location: w.Z.Messages.FAMILY_CENTER_TITLE }),
                  (0, s.jsx)(F, {
                      section: E,
                      handleItemSelect: (e) => {
                          T(e);
                      }
                  }),
                  (0, s.jsx)(d.TabBar.Panel, {
                      id: E,
                      'aria-labelledby': I,
                      className: y.contentPanel,
                      children: (0, s.jsx)('div', { children: H[E]() })
                  })
              ]
          });
}
function K() {
    let { analyticsLocations: e } = (0, I.ZP)(T.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, v.M8)(),
        r = (0, N.wE)(_.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([x.Z], () => x.Z.getIsInitialized()),
        m = (0, O.M)(),
        L = (0, c.e7)([p.Z], () => p.Z.theme),
        { selectedTab: Z, handleTabChange: D } = (0, b.Z)(),
        H = (0, g.Dt)(),
        F = M.default.getCurrentUser(),
        W = null != t,
        K = l && null != F && !W;
    a.useEffect(() => {
        E.Y(B.Z5c.FAMILY_CENTER),
            (0, A.e)('family-center'),
            !x.Z.isLoading() && x.Z.canRefetch() && h.ZP.initialPageLoad(),
            !r &&
                (0, N.EW)(_.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: G.L.AUTO,
                    forceTrack: !0
                });
    }, []),
        a.useEffect(() => {
            l &&
                W &&
                (S.default.track(B.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: t,
                    num_of_accepted_links: n,
                    selected_teen_id: m,
                    initial_page: U.QH[Z],
                    source: U._6[U.Mu.SIDENAV]
                }),
                C.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
        }, [l, W]),
        a.useEffect(() => {
            let e = f.Ex.getSetting();
            l && t && void 0 === e && f.Ex.updateSetting(!0);
        }, [l, t]),
        a.useEffect(() => {
            K && (0, u.mN)(j.L0.FAMILY_CENTER);
        }, [K]);
    if (K) return null;
    let Y = Z !== U.dG.SETTINGS ? Z : U.dG.ACTIVITY,
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
                (0, s.jsx)(d.TabBar.Panel, {
                    id: Y,
                    'aria-labelledby': H,
                    className: y.contentPanel,
                    children: (0, s.jsx)(d.Scroller, {
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
