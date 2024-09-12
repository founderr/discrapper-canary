n.d(t, {
    Z: function () {
        return Q;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(91192),
    c = n(873546),
    d = n(442837),
    u = n(704215),
    _ = n(952265),
    E = n(481060),
    h = n(493683),
    m = n(463119),
    I = n(377171),
    g = n(243778),
    p = n(922409),
    T = n(899740),
    S = n(28476),
    C = n(880257),
    f = n(631885),
    N = n(457396),
    A = n(51596),
    v = n(905423),
    L = n(155409),
    Z = n(210887),
    R = n(695346),
    O = n(283595),
    x = n(699516),
    b = n(923834),
    P = n(55563),
    M = n(774343),
    D = n(814225),
    y = n(515753),
    j = n(831218),
    U = n(339149),
    G = n(981631),
    w = n(689938),
    k = n(465200);
let B = (e) => {
        let { selected: t, ...n } = e,
            a = (0, o.JA)('friends'),
            s = (0, d.e7)([x.Z], () => x.Z.getPendingCount());
        return (0, i.jsx)(y.Qj, {
            selected: t,
            route: G.Z5c.FRIENDS,
            icon: E.FriendsIcon,
            text: w.Z.Messages.FRIENDS,
            ...n,
            ...a,
            children: s > 0 ? (0, i.jsx)(E.NumberBadge, { count: s }) : null
        });
    },
    H = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...a } = e,
            s = (0, o.JA)('library');
        return (0, i.jsx)(y.Qj, {
            selected: t,
            route: G.Z5c.APPLICATION_LIBRARY,
            icon: E.InventoryIcon,
            text: w.Z.Messages.LIBRARY,
            ...a,
            ...s,
            children: (0, i.jsx)(U.Z, { className: r()(k.downloadProgressCircle, { [k.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    V = () => {
        let e = (0, T.q)();
        return e > 0 ? (0, i.jsx)(E.NumberBadge, { count: e }) : null;
    },
    F = (e) => {
        let { selected: t } = e,
            n = (0, o.JA)('messageRequests'),
            { channelId: a } = (0, p._)();
        if (!(0, S.a)()) return null;
        let s = null == a ? void 0 : () => h.Z.preload(G.ME, a);
        return (0, i.jsx)(y.Qj, {
            selected: t,
            route: G.Z5c.MESSAGE_REQUESTS,
            icon: E.EnvelopeIcon,
            text: w.Z.Messages.MESSAGE_REQUESTS,
            onClick: s,
            ...n,
            children: (0, i.jsx)(V, {})
        });
    },
    Y = (e) => {
        let { selected: t } = e,
            n = w.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE,
            s = (0, o.JA)('family-center'),
            r = R.Ex.useSetting(),
            l = (0, C.Z)(),
            [c, d] = a.useState(!0);
        return r && l
            ? (0, i.jsx)(y.Qj, {
                  selected: t,
                  route: G.Z5c.FAMILY_CENTER,
                  icon: E.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: k.familyCenterLinkButton,
                  ...s,
                  children: (0, i.jsx)(W, { isParentHovered: c })
              })
            : null;
    },
    W = (e) => {
        let { isParentHovered: t } = e,
            a = (0, f.gU)();
        return t
            ? (0, i.jsx)(y.PZ, {
                  onClick: () => {
                      (0, _.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': w.Z.Messages.CLOSE
              })
            : a > 0
              ? (0, i.jsx)('div', {
                    className: k.familyCenterPendingBadge,
                    children: (0, i.jsx)(E.NumberBadge, { count: a })
                })
              : (0, i.jsx)(g.ZP, {
                    contentTypes: [u.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === u.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(E.TextBadge, {
                                  text: w.Z.Messages.NEW,
                                  color: I.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    z = () => (0, A.$Z)('DM_SEARCH');
function K(e) {
    switch (e) {
        case G.Z5c.APPLICATION_LIBRARY:
            return G.ZY5.LIBRARY;
        case G.Z5c.FRIENDS:
            return G.ZY5.FRIENDS_LIST;
        case G.Z5c.COLLECTIBLES_SHOP:
            return G.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(G.Z5c.APPLICATION_STORE)) return e === G.Z5c.APPLICATION_STORE ? G.ZY5.STORE_DIRECTORY_HOME : e.startsWith(G.Z5c.APPLICATION_STORE) ? G.ZY5.STORE_DIRECTORY_BROWSE : G.ZY5.STORE_LISTING;
    return G.ZY5.DM_CHANNEL;
}
let q = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: a, storeLink: s, premiumTabSelected: o } = e,
        [d, u] = (0, v.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, l.Z);
    return (0, i.jsxs)('nav', {
        className: k.privateChannels,
        'aria-label': w.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(L.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(k.searchBar, { [k.themedHeaderMobile]: c.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(k.searchBarComponent, { [k.themedSearchBarMobile]: c.tq }),
                        onClick: z,
                        children: w.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(j.Z, {
                ...e,
                version: u,
                selectedChannelId: d,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(B, { selected: null != u ? u === G.Z5c.FRIENDS : a === G.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              H,
                              {
                                  selected: null == u ? null != a && a.startsWith(G.Z5c.APPLICATION_LIBRARY) : u.startsWith(G.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: a === G.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        N.g,
                        {
                            selected: null == u ? o : u.startsWith(G.Z5c.APPLICATION_STORE),
                            route: null == s || location.pathname.startsWith(G.Z5c.ACTIVITIES) || location.pathname.startsWith(G.Z5c.APPLICATION_STORE) ? G.Z5c.APPLICATION_STORE : s,
                            locationState: {
                                analyticsSource: {
                                    page: K(a),
                                    section: G.jXE.NAVIGATION,
                                    object: G.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(F, { selected: null == u ? null != a && a.startsWith(G.Z5c.MESSAGE_REQUESTS) : u === G.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        m.i,
                        {
                            selected: u === G.Z5c.COLLECTIBLES_SHOP || (null == a ? void 0 : a.startsWith(G.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: K(a),
                                    section: G.jXE.NAVIGATION,
                                    object: G.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(Y, { selected: (null != a && a.startsWith(G.Z5c.FAMILY_CENTER)) || (null != u && u.startsWith(G.Z5c.FAMILY_CENTER)) }, 'family-center')
                ]
            })
        ]
    });
};
function Q() {
    let e = (0, d.e7)([M.Z], () => M.Z.getHomeLink()),
        t = (0, d.e7)(
            [P.Z],
            () => {
                if (e === G.Z5c.APPLICATION_STORE) return !0;
                let t = (0, D.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = P.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !R.bm.useSetting(),
        { theme: a } = (0, d.cj)([Z.Z], () => ({ theme: Z.Z.theme })),
        s = (0, d.e7)([O.Z], () => O.Z.hasLibraryApplication()),
        r = (0, d.e7)([b.Z], () => b.Z.getCurrentPath());
    return (0, i.jsx)(q, {
        theme: a,
        showLibrary: n,
        hasLibraryApplication: s,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
