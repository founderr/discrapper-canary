n.d(t, {
    Z: function () {
        return eo;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(782690),
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
    T = n(143757),
    S = n(463119),
    f = n(377171),
    C = n(243778),
    N = n(922409),
    A = n(899740),
    v = n(28476),
    Z = n(880257),
    L = n(631885),
    R = n(522558),
    O = n(795448),
    x = n(441623),
    b = n(457396),
    M = n(108989),
    P = n(51596),
    D = n(905423),
    y = n(155409),
    j = n(210887),
    U = n(695346),
    G = n(283595),
    w = n(699516),
    k = n(923834),
    B = n(55563),
    H = n(774343),
    V = n(626135),
    F = n(814225),
    Y = n(515753),
    z = n(831218),
    W = n(339149),
    K = n(981631),
    q = n(675654),
    Q = n(474936),
    X = n(689938),
    J = n(465200);
let $ = (e) => {
        let { selected: t, ...n } = e,
            s = (0, c.JA)('friends'),
            r = (0, u.e7)([w.Z], () => w.Z.getPendingCount()),
            l = (0, u.e7)([x.Z], () => x.Z.canShowFriendsTabBadge()),
            d = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            { enabled: _ } = R.w.useExperiment({ location: 'Friends Tab' }, { autoTrackExposure: !1 }),
            E = l && _;
        a.useEffect(() => {
            E &&
                (0, g.h)({
                    name: o.ImpressionNames.GIFT_INTENT_BADGE,
                    type: o.ImpressionTypes.VIEW,
                    properties: { gift_intent_type: Q.hX.FRIEND_ANNIVERSARY }
                });
        }, [E]);
        let [m, T] = a.useState(!1);
        return (0, i.jsxs)('div', {
            className: J.friendsButtonContainer,
            children: [
                (0, i.jsx)(Y.Qj, {
                    onClick: () => {
                        E && (V.default.track(K.rMx.GIFT_INTENT_BADGE_CLICKED, { gift_intent_type: Q.hX.FRIEND_ANNIVERSARY }), I.Z.setSection(K.pJs.ALL), (0, O.Gk)());
                    },
                    interactiveClassName: E ? J.friendsBadge : void 0,
                    selected: t,
                    route: K.Z5c.FRIENDS,
                    icon: h.FriendsIcon,
                    text: X.Z.Messages.FRIENDS,
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
                    (0, i.jsx)(M.Z, {
                        className: J.confetti,
                        wind: 0,
                        sprites: q.CA,
                        spriteColors: q.Br,
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
    ee = (e) => {
        let { selected: t, hideGameUpdateProgressIndicator: n, ...a } = e,
            s = (0, c.JA)('library');
        return (0, i.jsx)(Y.Qj, {
            selected: t,
            route: K.Z5c.APPLICATION_LIBRARY,
            icon: h.InventoryIcon,
            text: X.Z.Messages.LIBRARY,
            ...a,
            ...s,
            children: (0, i.jsx)(W.Z, { className: r()(J.downloadProgressCircle, { [J.hideGameUpdateProgressIndicator]: n }) })
        });
    },
    et = () => {
        let e = (0, A.q)();
        return e > 0 ? (0, i.jsx)(h.NumberBadge, { count: e }) : null;
    },
    en = (e) => {
        let { selected: t } = e,
            n = (0, c.JA)('messageRequests'),
            { channelId: a } = (0, N._)();
        if (!(0, v.a)()) return null;
        let s = null == a ? void 0 : () => m.Z.preload(K.ME, a);
        return (0, i.jsx)(Y.Qj, {
            selected: t,
            route: K.Z5c.MESSAGE_REQUESTS,
            icon: h.EnvelopeIcon,
            text: X.Z.Messages.MESSAGE_REQUESTS,
            onClick: s,
            ...n,
            children: (0, i.jsx)(et, {})
        });
    },
    ei = (e) => {
        let { selected: t } = e,
            n = X.Z.Messages.FAMILY_CENTER_SIDEBAR_TITLE,
            s = (0, c.JA)('family-center'),
            r = U.Ex.useSetting(),
            l = (0, Z.Z)(),
            [o, d] = a.useState(!0);
        return r && l
            ? (0, i.jsx)(Y.Qj, {
                  selected: t,
                  route: K.Z5c.FAMILY_CENTER,
                  icon: h.GroupIcon,
                  text: n,
                  onMouseEnter: () => {
                      d(!0);
                  },
                  onMouseLeave: () => {
                      d(!1);
                  },
                  interactiveClassName: J.familyCenterLinkButton,
                  ...s,
                  children: (0, i.jsx)(ea, { isParentHovered: o })
              })
            : null;
    },
    ea = (e) => {
        let { isParentHovered: t } = e,
            a = (0, L.gU)();
        return t
            ? (0, i.jsx)(Y.PZ, {
                  onClick: () => {
                      (0, E.ZD)(async () => {
                          let { default: e } = await n.e('44153').then(n.bind(n, 760949));
                          return (t) => (0, i.jsx)(e, { ...t });
                      });
                  },
                  'aria-label': X.Z.Messages.CLOSE
              })
            : a > 0
              ? (0, i.jsx)('div', {
                    className: J.familyCenterPendingBadge,
                    children: (0, i.jsx)(h.NumberBadge, { count: a })
                })
              : (0, i.jsx)(C.ZP, {
                    contentTypes: [_.z.FAMILY_CENTER_NEW_BADGE],
                    children: (e) => {
                        let { visibleContent: t } = e;
                        return t === _.z.FAMILY_CENTER_NEW_BADGE
                            ? (0, i.jsx)(h.TextBadge, {
                                  text: X.Z.Messages.NEW,
                                  color: f.Z.BG_BRAND
                              })
                            : null;
                    }
                });
    },
    es = () => (0, P.$Z)('DM_SEARCH');
function er(e) {
    switch (e) {
        case K.Z5c.APPLICATION_LIBRARY:
            return K.ZY5.LIBRARY;
        case K.Z5c.FRIENDS:
            return K.ZY5.FRIENDS_LIST;
        case K.Z5c.COLLECTIBLES_SHOP:
            return K.ZY5.COLLECTIBLES_SHOP;
    }
    if (e.startsWith(K.Z5c.APPLICATION_STORE)) return e === K.Z5c.APPLICATION_STORE ? K.ZY5.STORE_DIRECTORY_HOME : e.startsWith(K.Z5c.APPLICATION_STORE) ? K.ZY5.STORE_DIRECTORY_BROWSE : K.ZY5.STORE_LISTING;
    return K.ZY5.DM_CHANNEL;
}
let el = (e) => {
    let { showLibrary: t, hasLibraryApplication: n, homeLink: a, premiumTabSelected: s } = e,
        [o, c] = (0, D.Z)((e) => {
            let { channelId: t, path: n } = e;
            return [t, n];
        }, l.Z);
    return (0, i.jsxs)('nav', {
        className: J.privateChannels,
        'aria-label': X.Z.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
        children: [
            (0, i.jsx)(y.Z, {
                tutorialId: 'direct-messages',
                position: 'right',
                offsetX: -52,
                children: (0, i.jsx)('div', {
                    className: r()(J.searchBar, { [J.themedHeaderMobile]: d.tq }),
                    children: (0, i.jsx)('button', {
                        type: 'button',
                        className: r()(J.searchBarComponent, { [J.themedSearchBarMobile]: d.tq }),
                        onClick: es,
                        children: X.Z.Messages.DM_SEARCH_PLACEHOLDER
                    })
                })
            }),
            (0, i.jsxs)(z.Z, {
                ...e,
                version: c,
                selectedChannelId: o,
                showDMHeader: !0,
                children: [
                    (0, i.jsx)($, { selected: null != c ? c === K.Z5c.FRIENDS : a === K.Z5c.FRIENDS }, 'friends'),
                    n && t
                        ? (0, i.jsx)(
                              ee,
                              {
                                  selected: null == c ? null != a && a.startsWith(K.Z5c.APPLICATION_LIBRARY) : c.startsWith(K.Z5c.APPLICATION_LIBRARY),
                                  hideGameUpdateProgressIndicator: a === K.Z5c.APPLICATION_LIBRARY
                              },
                              'library'
                          )
                        : null,
                    (0, i.jsx)(
                        b.g,
                        {
                            selected: null == c ? s : c.startsWith(K.Z5c.APPLICATION_STORE),
                            route: K.Z5c.APPLICATION_STORE,
                            locationState: {
                                analyticsSource: {
                                    page: er(a),
                                    section: K.jXE.NAVIGATION,
                                    object: K.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'premium'
                    ),
                    (0, i.jsx)(en, { selected: null == c ? null != a && a.startsWith(K.Z5c.MESSAGE_REQUESTS) : c === K.Z5c.MESSAGE_REQUESTS }, 'message-requests'),
                    (0, i.jsx)(
                        S.i,
                        {
                            selected: c === K.Z5c.COLLECTIBLES_SHOP || (null == a ? void 0 : a.startsWith(K.Z5c.COLLECTIBLES_SHOP)),
                            locationState: {
                                analyticsSource: {
                                    page: er(a),
                                    section: K.jXE.NAVIGATION,
                                    object: K.qAy.NAVIGATION_LINK
                                }
                            }
                        },
                        'discord-shop'
                    ),
                    (0, i.jsx)(ei, { selected: (null != a && a.startsWith(K.Z5c.FAMILY_CENTER)) || (null != c && c.startsWith(K.Z5c.FAMILY_CENTER)) }, 'family-center'),
                    (0, i.jsx)(T.Z, {}, 'dm-quick-launcher')
                ]
            })
        ]
    });
};
function eo() {
    let e = (0, u.e7)([H.Z], () => H.Z.getHomeLink()),
        t = (0, u.e7)(
            [B.Z],
            () => {
                if (e === K.Z5c.APPLICATION_STORE) return !0;
                let t = (0, F.ZK)(e);
                if (null != t) {
                    var n, i;
                    return null !== (i = null === (n = B.Z.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== i && i;
                }
                return !1;
            },
            [e]
        ),
        n = !U.bm.useSetting(),
        { theme: a } = (0, u.cj)([j.Z], () => ({ theme: j.Z.theme })),
        s = (0, u.e7)([G.Z], () => G.Z.hasLibraryApplication()),
        r = (0, u.e7)([k.Z], () => k.Z.getCurrentPath());
    return (0, i.jsx)(el, {
        theme: a,
        showLibrary: n,
        hasLibraryApplication: s,
        storeLink: r,
        homeLink: e,
        premiumTabSelected: t
    });
}
