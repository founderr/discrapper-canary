n.d(t, {
    Z: function () {
        return $;
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
    f = n(880257),
    C = n(631885),
    N = n(522558),
    A = n(457396),
    v = n(108989),
    L = n(51596),
    Z = n(905423),
    R = n(155409),
    O = n(210887),
    x = n(695346),
    b = n(283595),
    P = n(699516),
    M = n(923834),
    D = n(55563),
    y = n(774343),
    j = n(814225),
    U = n(515753),
    G = n(831218),
    w = n(339149),
    k = n(981631),
    B = n(675654),
    H = n(689938),
    V = n(465200);
let F = (e) => {
        let { selected: t, ...n } = e,
            s = (0, o.JA)('friends'),
            r = (0, d.e7)([P.Z], () => P.Z.getPendingCount()),
            { enabled: l } = N.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            [c, u] = a.useState(!1);
        return (0, i.jsxs)('div', {
            className: V.friendsButtonContainer,
            children: [
                (0, i.jsx)(U.Qj, {
                    interactiveClassName: l ? V.friendsBadge : void 0,
                    selected: t,
                    route: k.Z5c.FRIENDS,
                    icon: E.FriendsIcon,
                    text: H.Z.Messages.FRIENDS,
                    onMouseEnter: () => {
                        u(!0);
                    },
                    onMouseLeave: () => {
                        u(!1);
                    },
                    ...n,
                    ...s,
                    children: r > 0 ? (0, i.jsx)(E.NumberBadge, { count: r }) : null
                }),
                l &&
                    (0, i.jsx)(v.Z, {
                        className: V.confetti,
                        wind: 0,
                        sprites: B.CA,
                        spriteColors: B.Br,
                        firing: c,
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
    Y = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...a } = e,
            s = (0, o.JA)('library');
        return (0, i.jsx)(U.Qj, {
            selected: t,
            route: k.Z5c.APPLICATION_LIBRARY,
            icon: E.InventoryIcon,
            text: H.Z.Messages.LIBRARY,
            ...a,
            ...s,
            children: (0, i.jsx)(w.Z, { className: r()(V.downloadProgressCircle, { [V.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    W = () => {
        let e = (0, T.q)();
        return e > 0 ? (0, i.jsx)(E.NumberBadge, { count: e }) : null;
    },
    z = (e) => {
        let { selected: t } = e,
            n = (0, o.JA)('messageRequests'),
            { channelId: a } = (0, p._)();
        if (!(0, S.a)()) return null;
        let s = null == a ? void 0 : () => h.Z.preload(k.ME, a);
        return (0, i.jsx)(U.Qj, {
            selected: t,
            route: k.Z5c.MESSAGE_REQUESTS,
            icon: E.EnvelopeIcon,
            text: H.Z.Messages.MESSAGE_REQUESTS,
            onClick: s,
            ...n,
            children: (0, i.jsx)(W, {})
        });
    },
    K = (e) => {
        let { selected: t } = e,
            n = H.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE,
            s = (0, o.JA)('family-center'),
            r = x.Ex.useSetting(),
            l = (0, f.Z)(),
            [c, d] = a.useState(!0);
        return r && l
            ? (0, i.jsx)(U.Qj, {
                  selected: t,
                  route: k.Z5c.FAMILY_CENTER,
                  icon: E.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: V.familyCenterLinkButton,
                  ...s,
                  children: (0, i.jsx)(q, { isParentHovered: c })
              })
            : null;
    },
    q = (e) => {
        let { isParentHovered: t } = e,
            a = (0, C.gU)();
        return t
            ? (0, i.jsx)(U.PZ, {
                  onClick: () => {
                      (0, _.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': H.Z.Messages.CLOSE
              })
            : a > 0
              ? (0, i.jsx)('div', {
                    className: V.familyCenterPendingBadge,
                    children: (0, i.jsx)(E.NumberBadge, { count: a })
                })
              : (0, i.jsx)(g.ZP, {
                    contentTypes: [u.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === u.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(E.TextBadge, {
                                  text: H.Z.Messages.NEW,
                                  color: I.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    Q = () => (0, L.$Z)('DM_SEARCH');
function X(e) {
    switch (e) {
        case k.Z5c.APPLICATION_LIBRARY:
            return k.ZY5.LIBRARY;
        case k.Z5c.FRIENDS:
            return k.ZY5.FRIENDS_LIST;
        case k.Z5c.COLLECTIBLES_SHOP:
            return k.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(k.Z5c.APPLICATION_STORE)) return e === k.Z5c.APPLICATION_STORE ? k.ZY5.STORE_DIRECTORY_HOME : e.startsWith(k.Z5c.APPLICATION_STORE) ? k.ZY5.STORE_DIRECTORY_BROWSE : k.ZY5.STORE_LISTING;
    return k.ZY5.DM_CHANNEL;
}
let J = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: a, storeLink: s, premiumTabSelected: o } = e,
        [d, u] = (0, Z.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, l.Z);
    return (0, i.jsxs)('nav', {
        className: V.privateChannels,
        'aria-label': H.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(R.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(V.searchBar, { [V.themedHeaderMobile]: c.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(V.searchBarComponent, { [V.themedSearchBarMobile]: c.tq }),
                        onClick: Q,
                        children: H.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(G.Z, {
                ...e,
                version: u,
                selectedChannelId: d,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(F, { selected: null != u ? u === k.Z5c.FRIENDS : a === k.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              Y,
                              {
                                  selected: null == u ? null != a && a.startsWith(k.Z5c.APPLICATION_LIBRARY) : u.startsWith(k.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: a === k.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        A.g,
                        {
                            selected: null == u ? o : u.startsWith(k.Z5c.APPLICATION_STORE),
                            route: null == s || location.pathname.startsWith(k.Z5c.ACTIVITIES) || location.pathname.startsWith(k.Z5c.APPLICATION_STORE) ? k.Z5c.APPLICATION_STORE : s,
                            locationState: {
                                analyticsSource: {
                                    page: X(a),
                                    section: k.jXE.NAVIGATION,
                                    object: k.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(z, { selected: null == u ? null != a && a.startsWith(k.Z5c.MESSAGE_REQUESTS) : u === k.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        m.i,
                        {
                            selected: u === k.Z5c.COLLECTIBLES_SHOP || (null == a ? void 0 : a.startsWith(k.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: X(a),
                                    section: k.jXE.NAVIGATION,
                                    object: k.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(K, { selected: (null != a && a.startsWith(k.Z5c.FAMILY_CENTER)) || (null != u && u.startsWith(k.Z5c.FAMILY_CENTER)) }, 'family-center')
                ]
            })
        ]
    });
};
function $() {
    let e = (0, d.e7)([y.Z], () => y.Z.getHomeLink()),
        t = (0, d.e7)(
            [D.Z],
            () => {
                if (e === k.Z5c.APPLICATION_STORE) return !0;
                let t = (0, j.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = D.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !x.bm.useSetting(),
        { theme: a } = (0, d.cj)([O.Z], () => ({ theme: O.Z.theme })),
        s = (0, d.e7)([b.Z], () => b.Z.hasLibraryApplication()),
        r = (0, d.e7)([M.Z], () => M.Z.getCurrentPath());
    return (0, i.jsx)(J, {
        theme: a,
        showLibrary: n,
        hasLibraryApplication: s,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
