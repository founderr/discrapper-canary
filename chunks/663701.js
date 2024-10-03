n.d(t, {
    Z: function () {
        return ei;
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
    I = n(607070),
    g = n(463119),
    p = n(377171),
    T = n(243778),
    f = n(922409),
    S = n(899740),
    C = n(28476),
    N = n(880257),
    A = n(631885),
    v = n(522558),
    Z = n(795448),
    L = n(441623),
    R = n(457396),
    O = n(108989),
    x = n(51596),
    b = n(905423),
    P = n(155409),
    M = n(210887),
    D = n(695346),
    y = n(283595),
    j = n(699516),
    U = n(923834),
    G = n(55563),
    w = n(774343),
    k = n(814225),
    B = n(515753),
    H = n(831218),
    V = n(339149),
    F = n(981631),
    Y = n(675654),
    W = n(689938),
    z = n(465200);
let K = (e) => {
        let { selected: t, ...n } = e,
            s = (0, o.JA)('friends'),
            r = (0, d.e7)([j.Z], () => j.Z.getPendingCount()),
            l = (0, d.e7)([L.Z], () => L.Z.canShowFriendsTabBadge()),
            c = (0, d.e7)([I.Z], () => I.Z.useReducedMotion),
            { enabled: u } = v.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            _ = l && u,
            [E, g] = a.useState(!1);
        return (0, i.jsxs)('div', {
            className: z.friendsButtonContainer,
            children: [
                (0, i.jsx)(B.Qj, {
                    onClick: () => {
                        _ && (m.Z.setSection(F.pJs.ALL), (0, Z.Gk)());
                    },
                    interactiveClassName: _ ? z.friendsBadge : void 0,
                    selected: t,
                    route: F.Z5c.FRIENDS,
                    icon: h.FriendsIcon,
                    text: W.Z.Messages.FRIENDS,
                    onMouseEnter: () => {
                        g(!0);
                    },
                    onMouseLeave: () => {
                        g(!1);
                    },
                    ...n,
                    ...s,
                    children: r > 0 ? (0, i.jsx)(h.NumberBadge, { count: r }) : null
                }),
                _ &&
                    !c &&
                    (0, i.jsx)(O.Z, {
                        className: z.confetti,
                        wind: 0,
                        sprites: Y.CA,
                        spriteColors: Y.Br,
                        firing: E,
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
    q = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...a } = e,
            s = (0, o.JA)('library');
        return (0, i.jsx)(B.Qj, {
            selected: t,
            route: F.Z5c.APPLICATION_LIBRARY,
            icon: h.InventoryIcon,
            text: W.Z.Messages.LIBRARY,
            ...a,
            ...s,
            children: (0, i.jsx)(V.Z, { className: r()(z.downloadProgressCircle, { [z.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    Q = () => {
        let e = (0, S.q)();
        return e > 0 ? (0, i.jsx)(h.NumberBadge, { count: e }) : null;
    },
    X = (e) => {
        let { selected: t } = e,
            n = (0, o.JA)('messageRequests'),
            { channelId: a } = (0, f._)();
        if (!(0, C.a)()) return null;
        let s = null == a ? void 0 : () => E.Z.preload(F.ME, a);
        return (0, i.jsx)(B.Qj, {
            selected: t,
            route: F.Z5c.MESSAGE_REQUESTS,
            icon: h.EnvelopeIcon,
            text: W.Z.Messages.MESSAGE_REQUESTS,
            onClick: s,
            ...n,
            children: (0, i.jsx)(Q, {})
        });
    },
    J = (e) => {
        let { selected: t } = e,
            n = W.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE,
            s = (0, o.JA)('family-center'),
            r = D.Ex.useSetting(),
            l = (0, N.Z)(),
            [c, d] = a.useState(!0);
        return r && l
            ? (0, i.jsx)(B.Qj, {
                  selected: t,
                  route: F.Z5c.FAMILY_CENTER,
                  icon: h.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: z.familyCenterLinkButton,
                  ...s,
                  children: (0, i.jsx)($, { isParentHovered: c })
              })
            : null;
    },
    $ = (e) => {
        let { isParentHovered: t } = e,
            a = (0, A.gU)();
        return t
            ? (0, i.jsx)(B.PZ, {
                  onClick: () => {
                      (0, _.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': W.Z.Messages.CLOSE
              })
            : a > 0
              ? (0, i.jsx)('div', {
                    className: z.familyCenterPendingBadge,
                    children: (0, i.jsx)(h.NumberBadge, { count: a })
                })
              : (0, i.jsx)(T.ZP, {
                    contentTypes: [u.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === u.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(h.TextBadge, {
                                  text: W.Z.Messages.NEW,
                                  color: p.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    ee = () => (0, x.$Z)('DM_SEARCH');
function et(e) {
    switch (e) {
        case F.Z5c.APPLICATION_LIBRARY:
            return F.ZY5.LIBRARY;
        case F.Z5c.FRIENDS:
            return F.ZY5.FRIENDS_LIST;
        case F.Z5c.COLLECTIBLES_SHOP:
            return F.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(F.Z5c.APPLICATION_STORE)) return e === F.Z5c.APPLICATION_STORE ? F.ZY5.STORE_DIRECTORY_HOME : e.startsWith(F.Z5c.APPLICATION_STORE) ? F.ZY5.STORE_DIRECTORY_BROWSE : F.ZY5.STORE_LISTING;
    return F.ZY5.DM_CHANNEL;
}
let en = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: a, storeLink: s, premiumTabSelected: o } = e,
        [d, u] = (0, b.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, l.Z);
    return (0, i.jsxs)('nav', {
        className: z.privateChannels,
        'aria-label': W.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(P.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(z.searchBar, { [z.themedHeaderMobile]: c.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(z.searchBarComponent, { [z.themedSearchBarMobile]: c.tq }),
                        onClick: ee,
                        children: W.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(H.Z, {
                ...e,
                version: u,
                selectedChannelId: d,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(K, { selected: null != u ? u === F.Z5c.FRIENDS : a === F.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              q,
                              {
                                  selected: null == u ? null != a && a.startsWith(F.Z5c.APPLICATION_LIBRARY) : u.startsWith(F.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: a === F.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        R.g,
                        {
                            selected: null == u ? o : u.startsWith(F.Z5c.APPLICATION_STORE),
                            route: null == s || location.pathname.startsWith(F.Z5c.ACTIVITIES) || location.pathname.startsWith(F.Z5c.APPLICATION_STORE) ? F.Z5c.APPLICATION_STORE : s,
                            locationState: {
                                analyticsSource: {
                                    page: et(a),
                                    section: F.jXE.NAVIGATION,
                                    object: F.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(X, { selected: null == u ? null != a && a.startsWith(F.Z5c.MESSAGE_REQUESTS) : u === F.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        g.i,
                        {
                            selected: u === F.Z5c.COLLECTIBLES_SHOP || (null == a ? void 0 : a.startsWith(F.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: et(a),
                                    section: F.jXE.NAVIGATION,
                                    object: F.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(J, { selected: (null != a && a.startsWith(F.Z5c.FAMILY_CENTER)) || (null != u && u.startsWith(F.Z5c.FAMILY_CENTER)) }, 'family-center')
                ]
            })
        ]
    });
};
function ei() {
    let e = (0, d.e7)([w.Z], () => w.Z.getHomeLink()),
        t = (0, d.e7)(
            [G.Z],
            () => {
                if (e === F.Z5c.APPLICATION_STORE) return !0;
                let t = (0, k.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = G.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !D.bm.useSetting(),
        { theme: a } = (0, d.cj)([M.Z], () => ({ theme: M.Z.theme })),
        s = (0, d.e7)([y.Z], () => y.Z.hasLibraryApplication()),
        r = (0, d.e7)([U.Z], () => U.Z.getCurrentPath());
    return (0, i.jsx)(en, {
        theme: a,
        showLibrary: n,
        hasLibraryApplication: s,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
