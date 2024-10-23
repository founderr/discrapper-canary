n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(512969),
    o = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    _ = n(150063),
    E = n(758059),
    h = n(252618),
    m = n(313201),
    I = n(5254),
    p = n(984370),
    g = n(518311),
    T = n(199104),
    C = n(108427),
    f = n(210887),
    S = n(974042),
    N = n(666286),
    A = n(596957),
    v = n(981631),
    Z = n(723359),
    L = n(689938),
    R = n(692392);
function O() {
    return (0, i.jsxs)('div', {
        className: R.inviteToolbar,
        children: [(0, i.jsx)(g.Z, { tooltip: L.Z.Messages.NEW_GROUP_DM }), (0, i.jsx)(p.Z.Divider, {})]
    });
}
t.Z = function (e) {
    let { initialSection: t } = e,
        n = (0, l.TH)(),
        s = (0, l.k6)();
    a.useEffect(() => {
        'true' === new URLSearchParams(n.search).get('confirm-age') &&
            u.Z.dispatch({
                type: 'AGE_GATE_MODAL_OPEN',
                source: Z.L0.DEEP_LINK_PROMPT
            }).then(() => {
                s.replace(v.Z5c.ME);
            });
    }, [s, n]),
        a.useEffect(() => {
            _.Y(v.Z5c.FRIENDS), (0, C.e)('friends');
        }, []),
        a.useEffect(() => {
            null != t && E.Z.setInitialSection(t);
        }, [t]);
    let g = (0, c.e7)([f.Z], () => f.Z.theme),
        { section: x, pendingCount: b } = (0, c.cj)([S.ZP], () => S.ZP.getState()),
        M = (0, c.cj)([I.Z], () => I.Z.getSuggestionCount()),
        P = (e) => {
            E.Z.setSection(e);
        },
        D = (0, m.Dt)(),
        y = (0, m.Dt)();
    return (0, i.jsxs)('main', {
        className: R.container,
        'aria-label': L.Z.Messages.FRIENDS,
        children: [
            (0, i.jsx)(h.yY, { location: L.Z.Messages.FRIENDS }),
            (0, i.jsx)(d.ThemeProvider, {
                theme: g,
                children: (e) =>
                    (0, i.jsxs)(p.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(O, {}),
                        scrollable: o.tq,
                        role: 'navigation',
                        'aria-labelledby': D,
                        children: [
                            (0, i.jsx)(p.Z.Icon, {
                                icon: d.FriendsIcon,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(p.Z.Title, {
                                id: D,
                                children: L.Z.Messages.FRIENDS
                            }),
                            (0, i.jsx)(p.Z.Divider, {}),
                            (0, i.jsxs)(d.TabBar, {
                                'aria-label': L.Z.Messages.FRIENDS,
                                selectedItem: x,
                                type: 'top-pill',
                                onItemSelect: P,
                                className: R.tabBar,
                                children: [
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: v.pJs.ONLINE,
                                        className: R.item,
                                        children: L.Z.Messages.FRIENDS_SECTION_ONLINE
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: v.pJs.ALL,
                                        className: R.item,
                                        children: L.Z.Messages.FRIENDS_SECTION_ALL
                                    }),
                                    (0, i.jsxs)(d.TabBar.Item, {
                                        id: v.pJs.PENDING,
                                        className: R.item,
                                        'aria-label': L.Z.Messages.FRIENDS_SECTION_PENDING,
                                        children: [
                                            L.Z.Messages.FRIENDS_SECTION_PENDING,
                                            b > 0
                                                ? (0, i.jsx)(d.NumberBadge, {
                                                      count: b,
                                                      className: R.badge
                                                  })
                                                : null
                                        ]
                                    }),
                                    M > 0
                                        ? (0, i.jsxs)(d.TabBar.Item, {
                                              id: v.pJs.SUGGESTIONS,
                                              className: R.item,
                                              'aria-label': L.Z.Messages.FRIENDS_SECTION_SUGGESTIONS,
                                              children: [
                                                  L.Z.Messages.FRIENDS_SECTION_SUGGESTIONS,
                                                  (0, i.jsx)(d.NumberBadge, {
                                                      count: M,
                                                      className: R.badge
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: v.pJs.BLOCKED,
                                        className: R.item,
                                        children: L.Z.Messages.BLOCKED
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        'aria-label': L.Z.Messages.FRIENDS_SECTION_ADD_FRIEND,
                                        className: r()(R.item, R.addFriend),
                                        id: v.pJs.ADD_FRIEND,
                                        children: (0, i.jsx)('span', { children: L.Z.Messages.FRIENDS_SECTION_ADD_FRIEND })
                                    })
                                ]
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: R.tabBody,
                children: [
                    (0, i.jsx)(d.TabBar.Panel, {
                        id: x,
                        className: R.peopleColumn,
                        'aria-labelledby': y,
                        children:
                            x === v.pJs.ADD_FRIEND
                                ? (0, i.jsx)(N.Z, {})
                                : (0, i.jsx)(A.Z, {
                                      titleId: y,
                                      sectionFilter: x
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: R.nowPlayingColumn,
                        children: (0, i.jsx)(T.Z, {})
                    })
                ]
            })
        ]
    });
};
