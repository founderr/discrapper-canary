n.d(t, {
    Z: function () {
        return en;
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
    h = n(481060),
    E = n(493683),
    m = n(758059),
    I = n(463119),
    g = n(377171),
    p = n(243778),
    T = n(922409),
    f = n(899740),
    S = n(28476),
    C = n(880257),
    N = n(631885),
    A = n(522558),
    v = n(795448),
    Z = n(441623),
    L = n(457396),
    R = n(108989),
    O = n(51596),
    x = n(905423),
    b = n(155409),
    P = n(210887),
    M = n(695346),
    D = n(283595),
    y = n(699516),
    j = n(923834),
    U = n(55563),
    G = n(774343),
    w = n(814225),
    k = n(515753),
    B = n(831218),
    H = n(339149),
    V = n(981631),
    F = n(675654),
    Y = n(689938),
    W = n(465200);
let z = (e) => {
        let { selected: t, ...n } = e,
            s = (0, o.JA)('friends'),
            r = (0, d.e7)([y.Z], () => y.Z.getPendingCount()),
            l = (0, d.e7)([Z.Z], () => Z.Z.canShowFriendsTabBadge()),
            { enabled: c } = A.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            u = l && c,
            [_, E] = a.useState(!1);
        return (0, i.jsxs)('div', {
            className: W.friendsButtonContainer,
            children: [
                (0, i.jsx)(k.Qj, {
                    onClick: () => {
                        u && (m.Z.setSection(V.pJs.ALL), (0, v.Gk)());
                    },
                    interactiveClassName: u ? W.friendsBadge : void 0,
                    selected: t,
                    route: V.Z5c.FRIENDS,
                    icon: h.FriendsIcon,
                    text: Y.Z.Messages.FRIENDS,
                    onMouseEnter: () => {
                        E(!0);
                    },
                    onMouseLeave: () => {
                        E(!1);
                    },
                    ...n,
                    ...s,
                    children: r > 0 ? (0, i.jsx)(h.NumberBadge, { count: r }) : null
                }),
                u &&
                    (0, i.jsx)(R.Z, {
                        className: W.confetti,
                        wind: 0,
                        sprites: F.CA,
                        spriteColors: F.Br,
                        firing: _,
                        confettiConfig: {
                            opacity: {
                                type: 'static',
                                value: 1
                            }
                        }
                    })
            ]
        });
    },
    K = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...a } = e,
            s = (0, o.JA)('library');
        return (0, i.jsx)(k.Qj, {
            selected: t,
            route: V.Z5c.APPLICATION_LIBRARY,
            icon: h.InventoryIcon,
            text: Y.Z.Messages.LIBRARY,
            ...a,
            ...s,
            children: (0, i.jsx)(H.Z, { className: r()(W.downloadProgressCircle, { [W.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    q = () => {
        let e = (0, f.q)();
        return e > 0 ? (0, i.jsx)(h.NumberBadge, { count: e }) : null;
    },
    Q = (e) => {
        let { selected: t } = e,
            n = (0, o.JA)('messageRequests'),
            { channelId: a } = (0, T._)();
        if (!(0, S.a)()) return null;
        let s = null == a ? void 0 : () => E.Z.preload(V.ME, a);
        return (0, i.jsx)(k.Qj, {
            selected: t,
            route: V.Z5c.MESSAGE_REQUESTS,
            icon: h.EnvelopeIcon,
            text: Y.Z.Messages.MESSAGE_REQUESTS,
            onClick: s,
            ...n,
            children: (0, i.jsx)(q, {})
        });
    },
    X = (e) => {
        let { selected: t } = e,
            n = Y.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE,
            s = (0, o.JA)('family-center'),
            r = M.Ex.useSetting(),
            l = (0, C.Z)(),
            [c, d] = a.useState(!0);
        return r && l
            ? (0, i.jsx)(k.Qj, {
                  selected: t,
                  route: V.Z5c.FAMILY_CENTER,
                  icon: h.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: W.familyCenterLinkButton,
                  ...s,
                  children: (0, i.jsx)(J, { isParentHovered: c })
              })
            : null;
    },
    J = (e) => {
        let { isParentHovered: t } = e,
            a = (0, N.gU)();
        return t
            ? (0, i.jsx)(k.PZ, {
                  onClick: () => {
                      (0, _.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': Y.Z.Messages.CLOSE
              })
            : a > 0
              ? (0, i.jsx)('div', {
                    className: W.familyCenterPendingBadge,
                    children: (0, i.jsx)(h.NumberBadge, { count: a })
                })
              : (0, i.jsx)(p.ZP, {
                    contentTypes: [u.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === u.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(h.TextBadge, {
                                  text: Y.Z.Messages.NEW,
                                  color: g.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    $ = () => (0, O.$Z)('DM_SEARCH');
function ee(e) {
    switch (e) {
        case V.Z5c.APPLICATION_LIBRARY:
            return V.ZY5.LIBRARY;
        case V.Z5c.FRIENDS:
            return V.ZY5.FRIENDS_LIST;
        case V.Z5c.COLLECTIBLES_SHOP:
            return V.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(V.Z5c.APPLICATION_STORE)) return e === V.Z5c.APPLICATION_STORE ? V.ZY5.STORE_DIRECTORY_HOME : e.startsWith(V.Z5c.APPLICATION_STORE) ? V.ZY5.STORE_DIRECTORY_BROWSE : V.ZY5.STORE_LISTING;
    return V.ZY5.DM_CHANNEL;
}
let et = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: a, storeLink: s, premiumTabSelected: o } = e,
        [d, u] = (0, x.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, l.Z);
    return (0, i.jsxs)('nav', {
        className: W.privateChannels,
        'aria-label': Y.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(b.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(W.searchBar, { [W.themedHeaderMobile]: c.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(W.searchBarComponent, { [W.themedSearchBarMobile]: c.tq }),
                        onClick: $,
                        children: Y.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(B.Z, {
                ...e,
                version: u,
                selectedChannelId: d,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(z, { selected: null != u ? u === V.Z5c.FRIENDS : a === V.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              K,
                              {
                                  selected: null == u ? null != a && a.startsWith(V.Z5c.APPLICATION_LIBRARY) : u.startsWith(V.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: a === V.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        L.g,
                        {
                            selected: null == u ? o : u.startsWith(V.Z5c.APPLICATION_STORE),
                            route: null == s || location.pathname.startsWith(V.Z5c.ACTIVITIES) || location.pathname.startsWith(V.Z5c.APPLICATION_STORE) ? V.Z5c.APPLICATION_STORE : s,
                            locationState: {
                                analyticsSource: {
                                    page: ee(a),
                                    section: V.jXE.NAVIGATION,
                                    object: V.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(Q, { selected: null == u ? null != a && a.startsWith(V.Z5c.MESSAGE_REQUESTS) : u === V.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        I.i,
                        {
                            selected: u === V.Z5c.COLLECTIBLES_SHOP || (null == a ? void 0 : a.startsWith(V.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: ee(a),
                                    section: V.jXE.NAVIGATION,
                                    object: V.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(X, { selected: (null != a && a.startsWith(V.Z5c.FAMILY_CENTER)) || (null != u && u.startsWith(V.Z5c.FAMILY_CENTER)) }, 'family-center')
                ]
            })
        ]
    });
};
function en() {
    let e = (0, d.e7)([G.Z], () => G.Z.getHomeLink()),
        t = (0, d.e7)(
            [U.Z],
            () => {
                if (e === V.Z5c.APPLICATION_STORE) return !0;
                let t = (0, w.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = U.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !M.bm.useSetting(),
        { theme: a } = (0, d.cj)([P.Z], () => ({ theme: P.Z.theme })),
        s = (0, d.e7)([D.Z], () => D.Z.hasLibraryApplication()),
        r = (0, d.e7)([j.Z], () => j.Z.getCurrentPath());
    return (0, i.jsx)(et, {
        theme: a,
        showLibrary: n,
        hasLibraryApplication: s,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
