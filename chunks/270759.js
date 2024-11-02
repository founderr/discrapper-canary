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
    m = n(758059),
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
    x = n(981631),
    b = n(723359),
    A = n(388032),
    Z = n(692392);
function y() {
    return (0, i.jsxs)('div', {
        className: Z.inviteToolbar,
        children: [(0, i.jsx)(E.Z, { tooltip: A.intl.string(A.t.HfOgAw) }), (0, i.jsx)(_.Z.Divider, {})]
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
                l.replace(x.Z5c.ME);
            });
    }, [l, n]),
        r.useEffect(() => {
            h.Y(x.Z5c.FRIENDS), (0, C.e)('friends');
        }, []),
        r.useEffect(() => {
            null != t && m.Z.setInitialSection(t);
        }, [t]);
    let E = (0, c.e7)([v.Z], () => v.Z.theme),
        { section: L, pendingCount: R } = (0, c.cj)([S.ZP], () => S.ZP.getState()),
        P = (0, c.cj)([f.Z], () => f.Z.getSuggestionCount()),
        O = (e) => {
            m.Z.setSection(e);
        },
        j = (0, g.Dt)(),
        D = (0, g.Dt)();
    return (0, i.jsxs)('main', {
        className: Z.container,
        'aria-label': A.intl.string(A.t.TdEu5e),
        children: [
            (0, i.jsx)(p.yY, { location: A.intl.string(A.t.TdEu5e) }),
            (0, i.jsx)(d.ThemeProvider, {
                theme: E,
                children: (e) =>
                    (0, i.jsxs)(_.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(y, {}),
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
                                children: A.intl.string(A.t.TdEu5e)
                            }),
                            (0, i.jsx)(_.Z.Divider, {}),
                            (0, i.jsxs)(d.TabBar, {
                                'aria-label': A.intl.string(A.t.TdEu5e),
                                selectedItem: L,
                                type: 'top-pill',
                                onItemSelect: O,
                                className: Z.tabBar,
                                children: [
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: x.pJs.ONLINE,
                                        className: Z.item,
                                        children: A.intl.string(A.t.b9w3bG)
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: x.pJs.ALL,
                                        className: Z.item,
                                        children: A.intl.string(A.t.PfjFjY)
                                    }),
                                    (0, i.jsxs)(d.TabBar.Item, {
                                        id: x.pJs.PENDING,
                                        className: Z.item,
                                        'aria-label': A.intl.string(A.t.p6IHGB),
                                        children: [
                                            A.intl.string(A.t.p6IHGB),
                                            R > 0
                                                ? (0, i.jsx)(d.NumberBadge, {
                                                      count: R,
                                                      className: Z.badge
                                                  })
                                                : null
                                        ]
                                    }),
                                    P > 0
                                        ? (0, i.jsxs)(d.TabBar.Item, {
                                              id: x.pJs.SUGGESTIONS,
                                              className: Z.item,
                                              'aria-label': A.intl.string(A.t['8rSi19']),
                                              children: [
                                                  A.intl.string(A.t['8rSi19']),
                                                  (0, i.jsx)(d.NumberBadge, {
                                                      count: P,
                                                      className: Z.badge
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: x.pJs.BLOCKED,
                                        className: Z.item,
                                        children: A.intl.string(A.t['4bDptL'])
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        'aria-label': A.intl.string(A.t.j0wbEx),
                                        className: a()(Z.item, Z.addFriend),
                                        id: x.pJs.ADD_FRIEND,
                                        children: (0, i.jsx)('span', { children: A.intl.string(A.t.j0wbEx) })
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
                        id: L,
                        className: Z.peopleColumn,
                        'aria-labelledby': D,
                        children:
                            L === x.pJs.ADD_FRIEND
                                ? (0, i.jsx)(N.Z, {})
                                : (0, i.jsx)(T.Z, {
                                      titleId: D,
                                      sectionFilter: L
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
