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
    x = n(981631),
    A = n(723359),
    b = n(388032),
    Z = n(692392);
function y() {
    return (0, i.jsxs)('div', {
        className: Z.inviteToolbar,
        children: [(0, i.jsx)(E.Z, { tooltip: b.intl.string(b.t.HfOgAw) }), (0, i.jsx)(_.Z.Divider, {})]
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
                source: A.L0.DEEP_LINK_PROMPT
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
        O = (0, c.cj)([f.Z], () => f.Z.getSuggestionCount()),
        j = (e) => {
            m.Z.setSection(e);
        },
        P = (0, g.Dt)(),
        D = (0, g.Dt)();
    return (0, i.jsxs)('main', {
        className: Z.container,
        'aria-label': b.intl.string(b.t.TdEu5e),
        children: [
            (0, i.jsx)(p.yY, { location: b.intl.string(b.t.TdEu5e) }),
            (0, i.jsx)(d.ThemeProvider, {
                theme: E,
                children: (e) =>
                    (0, i.jsxs)(_.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(y, {}),
                        scrollable: o.tq,
                        role: 'navigation',
                        'aria-labelledby': P,
                        children: [
                            (0, i.jsx)(_.Z.Icon, {
                                icon: d.FriendsIcon,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(_.Z.Title, {
                                id: P,
                                children: b.intl.string(b.t.TdEu5e)
                            }),
                            (0, i.jsx)(_.Z.Divider, {}),
                            (0, i.jsxs)(d.TabBar, {
                                'aria-label': b.intl.string(b.t.TdEu5e),
                                selectedItem: L,
                                type: 'top-pill',
                                onItemSelect: j,
                                className: Z.tabBar,
                                children: [
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: x.pJs.ONLINE,
                                        className: Z.item,
                                        children: b.intl.string(b.t.b9w3bG)
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: x.pJs.ALL,
                                        className: Z.item,
                                        children: b.intl.string(b.t.PfjFjY)
                                    }),
                                    (0, i.jsxs)(d.TabBar.Item, {
                                        id: x.pJs.PENDING,
                                        className: Z.item,
                                        'aria-label': b.intl.string(b.t.p6IHGB),
                                        children: [
                                            b.intl.string(b.t.p6IHGB),
                                            R > 0
                                                ? (0, i.jsx)(d.NumberBadge, {
                                                      count: R,
                                                      className: Z.badge
                                                  })
                                                : null
                                        ]
                                    }),
                                    O > 0
                                        ? (0, i.jsxs)(d.TabBar.Item, {
                                              id: x.pJs.SUGGESTIONS,
                                              className: Z.item,
                                              'aria-label': b.intl.string(b.t['8rSi19']),
                                              children: [
                                                  b.intl.string(b.t['8rSi19']),
                                                  (0, i.jsx)(d.NumberBadge, {
                                                      count: O,
                                                      className: Z.badge
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: x.pJs.BLOCKED,
                                        className: Z.item,
                                        children: b.intl.string(b.t['4bDptL'])
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        'aria-label': b.intl.string(b.t.j0wbEx),
                                        className: a()(Z.item, Z.addFriend),
                                        id: x.pJs.ADD_FRIEND,
                                        children: (0, i.jsx)('span', { children: b.intl.string(b.t.j0wbEx) })
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
