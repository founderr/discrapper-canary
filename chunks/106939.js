n.d(t, {
    M: function () {
        return W;
    },
    Z: function () {
        return z;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(873546),
    o = n(286379),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    g = n(150063),
    m = n(758119),
    f = n(100527),
    p = n(906732),
    _ = n(252618),
    h = n(313201),
    E = n(605236),
    b = n(984370),
    x = n(797614),
    C = n(108427),
    v = n(210887),
    T = n(695346),
    N = n(594174),
    I = n(626135),
    S = n(260722),
    R = n(914788),
    A = n(841409),
    j = n(652262),
    P = n(880257),
    Z = n(631885),
    O = n(830746),
    B = n(731934),
    M = n(521450),
    w = n(292352),
    y = n(981631),
    k = n(723359),
    L = n(921944),
    U = n(388032),
    D = n(228351);
let G = {
        [w.dG.REQUESTS]: () => (0, i.jsx)(B.Z, {}),
        [w.dG.ACTIVITY]: () => (0, i.jsx)(O.Z, {}),
        [w.dG.SETTINGS]: () => (0, i.jsx)(M.Z, {})
    },
    H = {
        [w.dG.REQUESTS]: () => (0, i.jsx)(B.Z, {}),
        [w.dG.ACTIVITY]: () => (0, i.jsx)(O.Z, {})
    };
function V(e) {
    let { section: t, handleItemSelect: n } = e,
        r = (0, Z.gU)(),
        a = (0, P.Z)();
    return (0, i.jsxs)(u.TabBar, {
        className: D.settingsTabBar,
        'aria-label': U.intl.string(U.t.RZqaJi),
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, i.jsx)(u.TabBar.Item, {
                className: D.settingsTabBarItem,
                id: w.dG.ACTIVITY,
                children: U.intl.string(U.t.bdBmq6)
            }),
            (0, i.jsxs)(u.TabBar.Item, {
                className: D.settingsTabBarItem,
                id: w.dG.REQUESTS,
                'aria-label': U.intl.string(U.t['gVWG+/']),
                children: [
                    U.intl.string(U.t['gVWG+/']),
                    r > 0
                        ? (0, i.jsx)(u.NumberBadge, {
                              className: D.badge,
                              count: r
                          })
                        : null
                ]
            }),
            a
                ? (0, i.jsx)(u.TabBar.Item, {
                      className: D.settingsTabBarItem,
                      id: w.dG.SETTINGS,
                      children: U.intl.string(U.t['3D5yo6'])
                  })
                : null
        ]
    });
}
function F(e) {
    let { theme: t, section: n, handleItemSelect: r } = e,
        a = (0, h.Dt)(),
        o = (0, Z.gU)();
    return (0, i.jsx)(u.ThemeProvider, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(b.Z, {
                className: s()(e, D.sidebarTabBar),
                scrollable: l.tq,
                role: 'navigation',
                'aria-labelledby': a,
                toolbar: !0,
                children: [
                    (0, i.jsx)(b.Z.Icon, {
                        icon: u.GroupIcon,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(b.Z.Title, {
                        id: a,
                        children: U.intl.string(U.t.RZqaJi)
                    }),
                    (0, i.jsx)(b.Z.Divider, {}),
                    (0, i.jsxs)(u.TabBar, {
                        'aria-label': U.intl.string(U.t.RZqaJi),
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: r,
                        className: D.__invalid_tabBar,
                        children: [
                            (0, i.jsx)(u.TabBar.Item, {
                                id: w.dG.ACTIVITY,
                                className: D.item,
                                children: U.intl.string(U.t.bdBmq6)
                            }),
                            (0, i.jsxs)(u.TabBar.Item, {
                                id: w.dG.REQUESTS,
                                className: D.item,
                                'aria-label': U.intl.string(U.t['gVWG+/']),
                                children: [
                                    U.intl.string(U.t['gVWG+/']),
                                    o > 0
                                        ? (0, i.jsx)(u.NumberBadge, {
                                              className: D.badge,
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
        t = (0, Z.M8)(),
        n = (0, E.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        a = (0, c.e7)([R.Z], () => R.Z.getIsInitialized()),
        l = (0, j.M)(),
        { selectedTab: g, handleTabChange: f } = (0, A.Z)(),
        p = (0, h.Dt)(),
        b = N.default.getCurrentUser(),
        v = null != e,
        T = a && null != b && !v;
    return (r.useEffect(() => {
        (0, C.e)('family-center'),
            S.ZP.initialPageLoad(),
            !n &&
                (0, E.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: L.L.AUTO,
                    forceTrack: !0
                });
    }, []),
    r.useEffect(() => {
        a &&
            v &&
            (I.default.track(y.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: l,
                initial_page: w.QH[g],
                source: w._6[w.Mu.SIDENAV]
            }),
            x.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
    }, [a, v]),
    r.useEffect(() => {
        T && (0, m.mN)(k.L0.FAMILY_CENTER);
    }, [T]),
    T)
        ? null
        : (0, i.jsxs)('main', {
              className: s()(D.container),
              'aria-label': U.intl.string(U.t.RZqaJi),
              children: [
                  (0, i.jsx)(_.yY, { location: U.intl.string(U.t.RZqaJi) }),
                  (0, i.jsx)(V, {
                      section: g,
                      handleItemSelect: (e) => {
                          f(e);
                      }
                  }),
                  (0, i.jsx)(u.TabBar.Panel, {
                      id: g,
                      'aria-labelledby': p,
                      className: D.contentPanel,
                      children: (0, i.jsx)('div', { children: G[g]() })
                  })
              ]
          });
}
function z() {
    let { analyticsLocations: e } = (0, p.ZP)(f.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, Z.M8)(),
        a = (0, E.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([R.Z], () => R.Z.getIsInitialized()),
        b = (0, j.M)(),
        O = (0, c.e7)([v.Z], () => v.Z.theme),
        { selectedTab: B, handleTabChange: M } = (0, A.Z)(),
        G = (0, h.Dt)(),
        V = N.default.getCurrentUser(),
        W = null != t,
        z = l && null != V && !W;
    r.useEffect(() => {
        g.Y(y.Z5c.FAMILY_CENTER),
            (0, C.e)('family-center'),
            !R.Z.isLoading() && R.Z.canRefetch() && S.ZP.initialPageLoad(),
            !a &&
                (0, E.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: L.L.AUTO,
                    forceTrack: !0
                });
    }, []),
        r.useEffect(() => {
            l &&
                W &&
                (I.default.track(y.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: t,
                    num_of_accepted_links: n,
                    selected_teen_id: b,
                    initial_page: w.QH[B],
                    source: w._6[w.Mu.SIDENAV]
                }),
                x.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
        }, [l, W]),
        r.useEffect(() => {
            let e = T.Ex.getSetting();
            l && t && void 0 === e && T.Ex.updateSetting(!0);
        }, [l, t]),
        r.useEffect(() => {
            z && (0, m.mN)(k.L0.FAMILY_CENTER);
        }, [z]);
    if (z) return null;
    let Y = B !== w.dG.SETTINGS ? B : w.dG.ACTIVITY,
        K = H[Y];
    return (0, i.jsx)(p.Gt, {
        value: e,
        children: (0, i.jsxs)('main', {
            className: s()(D.container, D.containerSidenav),
            'aria-label': U.intl.string(U.t.RZqaJi),
            children: [
                (0, i.jsx)(_.yY, { location: U.intl.string(U.t.RZqaJi) }),
                (0, i.jsx)(F, {
                    theme: O,
                    section: Y,
                    handleItemSelect: (e) => {
                        M(e);
                    }
                }),
                (0, i.jsx)(u.TabBar.Panel, {
                    id: Y,
                    'aria-labelledby': G,
                    className: D.contentPanel,
                    children: (0, i.jsx)(u.Scroller, {
                        children: (0, i.jsx)('div', {
                            className: D.sideNavContent,
                            children: K()
                        })
                    })
                })
            ]
        })
    });
}
