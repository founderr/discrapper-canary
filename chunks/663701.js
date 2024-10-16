n.d(t, {
    Z: function () {
        return el;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(990547),
    c = n(91192),
    d = n(873546),
    u = n(442837),
    _ = n(704215),
    E = n(952265),
    h = n(481060),
    m = n(493683),
    I = n(758059),
    p = n(607070),
    g = n(213609),
    T = n(463119),
    S = n(377171),
    f = n(243778),
    C = n(922409),
    N = n(899740),
    A = n(28476),
    v = n(880257),
    Z = n(631885),
    L = n(522558),
    R = n(795448),
    O = n(441623),
    x = n(457396),
    b = n(108989),
    M = n(51596),
    P = n(905423),
    D = n(155409),
    y = n(210887),
    j = n(695346),
    U = n(283595),
    G = n(699516),
    w = n(923834),
    k = n(55563),
    B = n(774343),
    V = n(626135),
    H = n(814225),
    F = n(515753),
    Y = n(831218),
    z = n(339149),
    W = n(981631),
    K = n(675654),
    q = n(474936),
    Q = n(689938),
    X = n(465200);
let J = (e) => {
        let { selected: t, ...n } = e,
            s = (0, c.JA)('friends'),
            r = (0, u.e7)([G.Z], () => G.Z.getPendingCount()),
            l = (0, u.e7)([O.Z], () => O.Z.canShowFriendsTabBadge()),
            d = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            { enabled: _ } = L.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            E = l && _;
        a.useEffect(() => {
            E &&
                (0, g.h)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: q.hX.FRIEND_ANNIVERSARY }
                });
        }, [E]);
        let [m, T] = a.useState(!1);
        return (0, i.jsxs)('div', {
            className: X.friendsButtonContainer,
            children: [
                (0, i.jsx)(F.Qj, {
                    onClick: () => {
                        E && (V.default.track(W.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: q.hX.FRIEND_ANNIVERSARY }), I.Z.setSection(W.pJs.ALL), (0, R.Gk)());
                    },
                    interactiveClassName: E ? X.friendsBadge : void 0,
                    selected: t,
                    route: W.Z5c.FRIENDS,
                    icon: h.FriendsIcon,
                    text: Q.Z.Messages.FRIENDS,
                    onMouseEnter: () => {
                        T(!0);
                    },
                    onMouseLeave: () => {
                        T(!1);
                    },
                    ...n,
                    ...s,
                    children: r > 0 ? (0, i.jsx)(h.NumberBadge, { count: r }) : null
                }),
                E &&
                    !d &&
                    (0, i.jsx)(b.Z, {
                        className: X.confetti,
                        wind: 0,
                        sprites: K.CA,
                        spriteColors: K.Br,
                        firing: m,
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
    $ = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...a } = e,
            s = (0, c.JA)('library');
        return (0, i.jsx)(F.Qj, {
            selected: t,
            route: W.Z5c.APPLICATION_LIBRARY,
            icon: h.InventoryIcon,
            text: Q.Z.Messages.LIBRARY,
            ...a,
            ...s,
            children: (0, i.jsx)(z.Z, { className: r()(X.downloadProgressCircle, { [X.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    ee = () => {
        let e = (0, N.q)();
        return e > 0 ? (0, i.jsx)(h.NumberBadge, { count: e }) : null;
    },
    et = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: a } = (0, C._)();
        if (!(0, A.a)()) return null;
        let s = null == a ? void 0 : () => m.Z.preload(W.ME, a);
        return (0, i.jsx)(F.Qj, {
            selected: t,
            route: W.Z5c.MESSAGE_REQUESTS,
            icon: h.EnvelopeIcon,
            text: Q.Z.Messages.MESSAGE_REQUESTS,
            onClick: s,
            ...n,
            children: (0, i.jsx)(ee, {})
        });
    },
    en = (e) => {
        let { selected: t } = e,
            n = Q.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE,
            s = (0, c.JA)('family-center'),
            r = j.Ex.useSetting(),
            l = (0, v.Z)(),
            [o, d] = a.useState(!0);
        return r && l
            ? (0, i.jsx)(F.Qj, {
                  selected: t,
                  route: W.Z5c.FAMILY_CENTER,
                  icon: h.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: X.familyCenterLinkButton,
                  ...s,
                  children: (0, i.jsx)(ei, { isParentHovered: o })
              })
            : null;
    },
    ei = (e) => {
        let { isParentHovered: t } = e,
            a = (0, Z.gU)();
        return t
            ? (0, i.jsx)(F.PZ, {
                  onClick: () => {
                      (0, E.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': Q.Z.Messages.CLOSE
              })
            : a > 0
              ? (0, i.jsx)('div', {
                    className: X.familyCenterPendingBadge,
                    children: (0, i.jsx)(h.NumberBadge, { count: a })
                })
              : (0, i.jsx)(f.ZP, {
                    contentTypes: [_.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === _.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(h.TextBadge, {
                                  text: Q.Z.Messages.NEW,
                                  color: S.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    ea = () => (0, M.$Z)('DM_SEARCH');
function es(e) {
    switch (e) {
        case W.Z5c.APPLICATION_LIBRARY:
            return W.ZY5.LIBRARY;
        case W.Z5c.FRIENDS:
            return W.ZY5.FRIENDS_LIST;
        case W.Z5c.COLLECTIBLES_SHOP:
            return W.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(W.Z5c.APPLICATION_STORE)) return e === W.Z5c.APPLICATION_STORE ? W.ZY5.STORE_DIRECTORY_HOME : e.startsWith(W.Z5c.APPLICATION_STORE) ? W.ZY5.STORE_DIRECTORY_BROWSE : W.ZY5.STORE_LISTING;
    return W.ZY5.DM_CHANNEL;
}
let er = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: a, premiumTabSelected: s } = e,
        [o, c] = (0, P.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, l.Z);
    return (0, i.jsxs)('nav', {
        className: X.privateChannels,
        'aria-label': Q.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(D.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(X.searchBar, { [X.themedHeaderMobile]: d.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(X.searchBarComponent, { [X.themedSearchBarMobile]: d.tq }),
                        onClick: ea,
                        children: Q.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(Y.Z, {
                ...e,
                version: c,
                selectedChannelId: o,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)(J, { selected: null != c ? c === W.Z5c.FRIENDS : a === W.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              $,
                              {
                                  selected: null == c ? null != a && a.startsWith(W.Z5c.APPLICATION_LIBRARY) : c.startsWith(W.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: a === W.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        x.g,
                        {
                            selected: null == c ? s : c.startsWith(W.Z5c.APPLICATION_STORE),
                            route: W.Z5c.APPLICATION_STORE,
                            locationState: {
                                analyticsSource: {
                                    page: es(a),
                                    section: W.jXE.NAVIGATION,
                                    object: W.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(et, { selected: null == c ? null != a && a.startsWith(W.Z5c.MESSAGE_REQUESTS) : c === W.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        T.i,
                        {
                            selected: c === W.Z5c.COLLECTIBLES_SHOP || (null == a ? void 0 : a.startsWith(W.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: es(a),
                                    section: W.jXE.NAVIGATION,
                                    object: W.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(en, { selected: (null != a && a.startsWith(W.Z5c.FAMILY_CENTER)) || (null != c && c.startsWith(W.Z5c.FAMILY_CENTER)) }, 'family-center')
                ]
            })
        ]
    });
};
function el() {
    let e = (0, u.e7)([B.Z], () => B.Z.getHomeLink()),
        t = (0, u.e7)(
            [k.Z],
            () => {
                if (e === W.Z5c.APPLICATION_STORE) return !0;
                let t = (0, H.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = k.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !j.bm.useSetting(),
        { theme: a } = (0, u.cj)([y.Z], () => ({ theme: y.Z.theme })),
        s = (0, u.e7)([U.Z], () => U.Z.hasLibraryApplication()),
        r = (0, u.e7)([w.Z], () => w.Z.getCurrentPath());
    return (0, i.jsx)(er, {
        theme: a,
        showLibrary: n,
        hasLibraryApplication: s,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
