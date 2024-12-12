n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512969),
    s = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    h = n(150063),
    m = n(529103),
    p = n(252618),
    g = n(313201),
    f = n(5254),
    _ = n(984370),
    E = n(518311),
    I = n(199104),
    C = n(922611),
    v = n(108427),
    S = n(210887),
    N = n(974042),
    T = n(666286),
    b = n(596957),
    A = n(981631),
    x = n(723359),
    Z = n(388032),
    L = n(224602);
function P() {
    return (0, i.jsx)('div', {
        className: L.inviteToolbar,
        children: (0, i.jsx)(E.Z, { tooltip: Z.intl.string(Z.t.HfOgAw) })
    });
}
t.Z = function (e) {
    let { initialSection: t } = e,
        n = (0, C.Do)({ location: 'PeoplePage' }),
        l = (0, o.TH)(),
        E = (0, o.k6)();
    r.useEffect(() => {
        'true' === new URLSearchParams(l.search).get('confirm-age') &&
            u.Z.dispatch({
                type: 'AGE_GATE_MODAL_OPEN',
                source: x.L0.DEEP_LINK_PROMPT
            }).then(() => {
                E.replace(A.Z5c.ME);
            });
    }, [E, l]),
        r.useEffect(() => {
            h.Y(A.Z5c.FRIENDS), (0, v.e)('friends');
        }, []),
        r.useEffect(() => {
            null != t && m.Z.setInitialSection(t);
        }, [t]);
    let y = (0, c.e7)([S.Z], () => S.Z.theme),
        { section: O, pendingCount: R } = (0, c.cj)([N.ZP], () => N.ZP.getState()),
        j = (0, c.e7)([f.Z], () => f.Z.getSuggestionCount()),
        D = (e) => {
            m.Z.setSection(e);
        },
        M = (0, g.Dt)(),
        w = (0, g.Dt)();
    return (0, i.jsxs)('main', {
        className: L.container,
        'aria-label': Z.intl.string(Z.t.TdEu5e),
        children: [
            (0, i.jsx)(p.yY, { location: Z.intl.string(Z.t.TdEu5e) }),
            (0, i.jsx)(d.ThemeProvider, {
                theme: y,
                children: (e) =>
                    (0, i.jsxs)(_.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(P, {}),
                        scrollable: s.tq,
                        role: 'navigation',
                        'aria-labelledby': M,
                        children: [
                            (0, i.jsx)(_.Z.Icon, {
                                icon: d.FriendsIcon,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(_.Z.Title, {
                                id: M,
                                children: Z.intl.string(Z.t.TdEu5e)
                            }),
                            (0, i.jsx)(_.Z.Divider, {}),
                            (0, i.jsxs)(d.TabBar, {
                                'aria-label': Z.intl.string(Z.t.TdEu5e),
                                selectedItem: O,
                                type: 'top-pill',
                                onItemSelect: D,
                                className: L.tabBar,
                                children: [
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: A.pJs.ONLINE,
                                        className: L.item,
                                        children: Z.intl.string(Z.t.b9w3bG)
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: A.pJs.ALL,
                                        className: L.item,
                                        children: Z.intl.string(Z.t.PfjFjY)
                                    }),
                                    (0, i.jsxs)(d.TabBar.Item, {
                                        id: A.pJs.PENDING,
                                        className: L.item,
                                        'aria-label': Z.intl.string(Z.t.p6IHGB),
                                        children: [
                                            Z.intl.string(Z.t.p6IHGB),
                                            R > 0
                                                ? (0, i.jsx)(d.NumberBadge, {
                                                      count: R,
                                                      className: L.badge
                                                  })
                                                : null
                                        ]
                                    }),
                                    j > 0
                                        ? (0, i.jsxs)(d.TabBar.Item, {
                                              id: A.pJs.SUGGESTIONS,
                                              className: L.item,
                                              'aria-label': Z.intl.string(Z.t['8rSi19']),
                                              children: [
                                                  Z.intl.string(Z.t['8rSi19']),
                                                  (0, i.jsx)(d.NumberBadge, {
                                                      count: j,
                                                      className: L.badge
                                                  })
                                              ]
                                          })
                                        : null,
                                    n
                                        ? null
                                        : (0, i.jsx)(d.TabBar.Item, {
                                              id: A.pJs.BLOCKED,
                                              className: L.item,
                                              children: Z.intl.string(Z.t['4bDptL'])
                                          }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        'aria-label': Z.intl.string(Z.t.j0wbEx),
                                        className: a()(L.item, L.addFriend),
                                        id: A.pJs.ADD_FRIEND,
                                        children: (0, i.jsx)('span', { children: Z.intl.string(Z.t.j0wbEx) })
                                    })
                                ]
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: L.tabBody,
                children: [
                    (0, i.jsx)(d.TabBar.Panel, {
                        id: O,
                        className: L.peopleColumn,
                        'aria-labelledby': w,
                        children:
                            O === A.pJs.ADD_FRIEND
                                ? (0, i.jsx)(T.Z, {})
                                : (0, i.jsx)(b.Z, {
                                      titleId: w,
                                      sectionFilter: O
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: L.nowPlayingColumn,
                        children: (0, i.jsx)(I.Z, {})
                    })
                ]
            })
        ]
    });
};
