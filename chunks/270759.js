n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512969),
    o = n(873546),
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
    C = n(108427),
    v = n(210887),
    S = n(974042),
    N = n(666286),
    T = n(596957),
    A = n(981631),
    b = n(723359),
    x = n(388032),
    Z = n(692392);
function L() {
    return (0, i.jsxs)('div', {
        className: Z.inviteToolbar,
        children: [(0, i.jsx)(E.Z, { tooltip: x.intl.string(x.t.HfOgAw) }), (0, i.jsx)(_.Z.Divider, {})]
    });
}
t.Z = function (e) {
    let { initialSection: t } = e,
        n = (0, s.TH)(),
        l = (0, s.k6)();
    r.useEffect(() => {
        'true' === new URLSearchParams(n.search).get('confirm-age') &&
            u.Z.dispatch({
                type: 'AGE_GATE_MODAL_OPEN',
                source: b.L0.DEEP_LINK_PROMPT
            }).then(() => {
                l.replace(A.Z5c.ME);
            });
    }, [l, n]),
        r.useEffect(() => {
            h.Y(A.Z5c.FRIENDS), (0, C.e)('friends');
        }, []),
        r.useEffect(() => {
            null != t && m.Z.setInitialSection(t);
        }, [t]);
    let E = (0, c.e7)([v.Z], () => v.Z.theme),
        { section: y, pendingCount: O } = (0, c.cj)([S.ZP], () => S.ZP.getState()),
        R = (0, c.cj)([f.Z], () => f.Z.getSuggestionCount()),
        P = (e) => {
            m.Z.setSection(e);
        },
        j = (0, g.Dt)(),
        D = (0, g.Dt)();
    return (0, i.jsxs)('main', {
        className: Z.container,
        'aria-label': x.intl.string(x.t.TdEu5e),
        children: [
            (0, i.jsx)(p.yY, { location: x.intl.string(x.t.TdEu5e) }),
            (0, i.jsx)(d.ThemeProvider, {
                theme: E,
                children: (e) =>
                    (0, i.jsxs)(_.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(L, {}),
                        scrollable: o.tq,
                        role: 'navigation',
                        'aria-labelledby': j,
                        children: [
                            (0, i.jsx)(_.Z.Icon, {
                                icon: d.FriendsIcon,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(_.Z.Title, {
                                id: j,
                                children: x.intl.string(x.t.TdEu5e)
                            }),
                            (0, i.jsx)(_.Z.Divider, {}),
                            (0, i.jsxs)(d.TabBar, {
                                'aria-label': x.intl.string(x.t.TdEu5e),
                                selectedItem: y,
                                type: 'top-pill',
                                onItemSelect: P,
                                className: Z.tabBar,
                                children: [
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: A.pJs.ONLINE,
                                        className: Z.item,
                                        children: x.intl.string(x.t.b9w3bG)
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: A.pJs.ALL,
                                        className: Z.item,
                                        children: x.intl.string(x.t.PfjFjY)
                                    }),
                                    (0, i.jsxs)(d.TabBar.Item, {
                                        id: A.pJs.PENDING,
                                        className: Z.item,
                                        'aria-label': x.intl.string(x.t.p6IHGB),
                                        children: [
                                            x.intl.string(x.t.p6IHGB),
                                            O > 0
                                                ? (0, i.jsx)(d.NumberBadge, {
                                                      count: O,
                                                      className: Z.badge
                                                  })
                                                : null
                                        ]
                                    }),
                                    R > 0
                                        ? (0, i.jsxs)(d.TabBar.Item, {
                                              id: A.pJs.SUGGESTIONS,
                                              className: Z.item,
                                              'aria-label': x.intl.string(x.t['8rSi19']),
                                              children: [
                                                  x.intl.string(x.t['8rSi19']),
                                                  (0, i.jsx)(d.NumberBadge, {
                                                      count: R,
                                                      className: Z.badge
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: A.pJs.BLOCKED,
                                        className: Z.item,
                                        children: x.intl.string(x.t['4bDptL'])
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        'aria-label': x.intl.string(x.t.j0wbEx),
                                        className: a()(Z.item, Z.addFriend),
                                        id: A.pJs.ADD_FRIEND,
                                        children: (0, i.jsx)('span', { children: x.intl.string(x.t.j0wbEx) })
                                    })
                                ]
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: Z.tabBody,
                children: [
                    (0, i.jsx)(d.TabBar.Panel, {
                        id: y,
                        className: Z.peopleColumn,
                        'aria-labelledby': D,
                        children:
                            y === A.pJs.ADD_FRIEND
                                ? (0, i.jsx)(N.Z, {})
                                : (0, i.jsx)(T.Z, {
                                      titleId: D,
                                      sectionFilter: y
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: Z.nowPlayingColumn,
                        children: (0, i.jsx)(I.Z, {})
                    })
                ]
            })
        ]
    });
};
