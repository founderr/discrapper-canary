n.d(t, {
    Z: function () {
        return eH;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(266067),
    o = n(990547),
    c = n(608787),
    d = n(873546),
    u = n(442837),
    _ = n(433517),
    h = n(481060),
    E = n(711237),
    m = n(532835),
    I = n(347469),
    g = n(290297),
    p = n(279240),
    T = n(765717),
    f = n(358221),
    S = n(823748),
    C = n(626421),
    N = n(963202),
    A = n(118379),
    v = n(652515),
    Z = n(544978),
    L = n(540059),
    R = n(194729),
    O = n(668940),
    x = n(831565),
    b = n(724383),
    P = n(135864),
    M = n(372900),
    D = n(6039),
    y = n(637853),
    j = n(326145),
    U = n(269675),
    G = n(242601),
    w = n(416568),
    k = n(613609),
    B = n(160404),
    H = n(225675),
    V = n(745052),
    F = n(285865),
    Y = n(659971),
    W = n(179742),
    z = n(270759),
    K = n(918701),
    q = n(905423),
    Q = n(304445),
    X = n(893607),
    J = n(210887),
    $ = n(592125),
    ee = n(271383),
    et = n(430824),
    en = n(944486),
    ei = n(933429),
    ea = n(823379),
    es = n(709054),
    er = n(374005),
    el = n(191741),
    eo = n(409292),
    ec = n(316173),
    ed = n(256638),
    eu = n(663701),
    e_ = n(425369),
    eh = n(715702),
    eE = n(981631),
    em = n(176505),
    eI = n(290511),
    eg = n(530921);
let ep = 'resizable-sidebar-width',
    eT = () =>
        (0, i.jsx)('div', {
            className: eg.loader,
            children: (0, i.jsx)(h.Spinner, {})
        }),
    ef = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eT
    }),
    eS = (0, c.Un)({
        createPromise: () => n.e('44798').then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eT
    }),
    eC = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eT
    }),
    eN = (0, c.Un)({
        createPromise: () => Promise.all([n.e('85552'), n.e('44400')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eT
    }),
    eA = (0, c.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('44156'), n.e('58227'), n.e('38359'), n.e('31072')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eT
    }),
    ev = (0, c.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('44156'), n.e('19878'), n.e('38359'), n.e('74277')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eT
    }),
    eZ = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([$.Z, en.Z], () => {
                let e = en.Z.getChannelId();
                return $.Z.getChannel(e);
            }),
            { guildId: a, channelId: s, messageId: r } = t.params,
            l = (0, u.e7)([et.Z], () => et.Z.getGuild(a)),
            o = (0, u.e7)([ee.ZP], () => (null == a ? null : ee.ZP.getSelfMember(a))),
            c = (0, u.e7)([B.Z], () => {
                if (null == a) return;
                let e = B.Z.getData(a);
                if ((null == e ? void 0 : e.type) === H.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return Z.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return Z.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            d = (0, v.C4)(a, 'channel_renderer');
        if (null != a && null != s && (0, em.AB)(s))
            switch (s) {
                case em.oC.ROLE_SUBSCRIPTIONS:
                    return d
                        ? (0, i.jsx)(ef, {
                              guildId: a,
                              initialTab: Z.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(U.Z, { guildId: a });
                case em.oC.GUILD_SHOP:
                    return (0, i.jsx)(ef, {
                        guildId: a,
                        productId: r,
                        initialTab: c
                    });
                case em.oC.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(eS, { guildId: a });
                case em.oC.GUILD_HOME:
                    return (0, i.jsx)(eC, { guildId: a });
                case em.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eA, {
                        guildId: a,
                        selectedSection: eI.l7.BROWSE
                    });
                case em.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(ev, { guildId: a });
                case em.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eA, {
                        guildId: a,
                        selectedSection: eI.l7.CUSTOMIZE
                    });
                case em.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(eN, { guildId: a });
                default:
                    (0, ea.vE)(s);
            }
        if ((0, y.p3)(l, o))
            return (0, i.jsx)(j.Z, {
                guildId: a,
                channelId: s
            });
        if ((null == n ? void 0 : n.type) === eE.d4z.GUILD_STORE) {
            let e = es.default.cast(t.params.messageId);
            return (0, i.jsx)(
                eo.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(S.Z, {});
    },
    eL = a.memo(function () {
        let { guildId: e, channelId: t } = (0, q.Z)(),
            n = (0, u.e7)([en.Z], () => (null != t ? t : en.Z.getChannelId(e))),
            a = (0, x.v)({ location: 'sidebar' });
        if (
            (function () {
                return window.location.pathname.startsWith(eE.Z5c.GLOBAL_DISCOVERY);
            })() ||
            (function () {
                return window.location.pathname.startsWith(eE.Z5c.GUILD_DISCOVERY) || (0, K.OG)();
            })()
        )
            return a ? (0, i.jsx)(P.Z, {}) : (0, i.jsx)(O.Z, {});
        return null != e
            ? (0, i.jsx)(
                  G.Z,
                  {
                      selectedChannelId: n,
                      guildId: e
                  },
                  e
              )
            : (0, i.jsx)(eu.Z, {});
    }),
    eR = (e) => (0, i.jsx)(eZ, { ...e }),
    eO = (e) => {
        let t = null != e && e.length > 0 && e.startsWith('?') ? e.split('?')[1] : null,
            n = (0, x.a)({ location: 'sidebar' });
        return (0, N.rx)('game_discovery_entry_point') && n && null != t ? (0, i.jsx)(b.V, { searchRoute: t }) : n ? (0, i.jsx)(b.Z, {}) : (0, i.jsx)(R.Z, { searchRoute: t });
    },
    ex = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(D.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eb = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(k.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eP = () => (0, i.jsx)(e_.Z, {}),
    eM = () => (0, i.jsx)(eh.Z, {}),
    eD = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(A.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    ey = (e) => (0, i.jsx)(p.Z, { ...e }),
    ej = () => (0, i.jsx)(z.Z, {}),
    eU = () => (0, i.jsx)(V.Z, {}),
    eG = () => (0, i.jsx)(W.Z, {}),
    ew = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'addFriends':
                return (0, i.jsx)(z.Z, { initialSection: eE.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(z.Z, { initialSection: eE.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(l.l_, { to: eE.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(l.l_, {
                    to: {
                        pathname: eE.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(l.l_, { to: eE.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, i.jsx)(l.l_, { to: eE.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(l.l_, { to: eE.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(l.l_, { to: eE.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            default:
                return (0, i.jsx)(l.l_, { to: eE.Z5c.ME });
        }
    };
function ek(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eB(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: s, isSidebarOpen: l, isOnFullScreenCollectiblesShopRoute: o } = e;
    (0, m.t)(!0);
    let c = 'app view user trigger debugging';
    E.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), E.R6.trackExposure({ location: c });
    let g = (0, u.e7)([f.Z], () => f.Z.isFullscreenInContext()),
        p = (0, L.Q)('ChannelSidebar'),
        T = (0, el.A)((e) => !e.isOpen);
    a.useLayoutEffect(() => {
        if (p) {
            var e;
            let t = parseInt(null !== (e = _.K.get(ep)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = 268), ek((t = Math.min(Math.max(t, 240), 420)));
            let n = (e) => {
                e.metaKey && 'b' === e.key && el.A.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener('keydown', n),
                () => {
                    document.removeEventListener('keydown', n);
                }
            );
        }
    }, [p]),
        a.useLayoutEffect(() => {
            if (T) ek(76);
            else {
                var e;
                let t = parseInt(null !== (e = _.K.get(ep)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = 268), ek(t);
            }
        }, [T]);
    let S = a.useRef(null),
        C = a.useCallback((e, t) => {
            var n;
            ek(e);
            let i = t < 80;
            el.A.setState({ isOpen: !i }), t < 240 ? document.body.classList.add(eg.collapsing) : document.body.classList.remove(eg.collapsing);
            let a = t - e;
            null === (n = S.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(a / 76), 0.25))), i && ek(76);
        }, []),
        N = a.useCallback(() => {
            document.body.classList.add(eg.dragging);
        }, []),
        A = a.useCallback((e) => {
            var t;
            document.body.classList.remove(eg.dragging), document.body.classList.remove(eg.collapsing), null === (t = S.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), _.K.set(ep, e);
        }, []),
        v = (0, I.Z)({
            minDimension: 240,
            maxDimension: 420,
            resizableDomNodeRef: S,
            onElementResize: C,
            onElementResizeStart: N,
            onElementResizeEnd: A,
            orientation: I.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        Z = a.useCallback(() => {
            el.A.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (a.useLayoutEffect(() => {
            T && ek(76);
        }, [T]),
        s)
    )
        return null;
    let R = p ? 'div' : a.Fragment;
    return (0, i.jsx)(h.ThemeProvider, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: p ? S : void 0,
                'data-collapsed': T,
                className: r()(eg.sidebar, e, {
                    [eg.hasNotice]: t,
                    [eg.fullWidth]: d.tq,
                    [eg.hidden]: g
                }),
                children: [
                    p &&
                        l &&
                        !o &&
                        (0, i.jsx)(w.Z, {
                            className: eg.guilds,
                            themeOverride: n
                        }),
                    (0, i.jsx)(R, {
                        className: eg.sidebarList,
                        children: (0, i.jsx)(eL, {})
                    }),
                    p
                        ? (0, i.jsx)(h.Clickable, {
                              onClick: Z,
                              'aria-label': 'Resize Sidebar',
                              className: eg.sidebarResizeHandle,
                              onMouseDown: v
                          })
                        : null,
                    (0, i.jsx)(er.b, {}),
                    (0, i.jsx)(ec.Z, {})
                ]
            })
    });
}
function eH() {
    var e;
    let t = (0, u.e7)([ei.Z], () => ei.Z.hasNotice()),
        n = (0, u.e7)([J.Z], () => (J.Z.darkSidebar ? eE.BRd.DARK : void 0)),
        s = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(eE.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                a.useEffect(
                    () =>
                        Q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eE.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        r = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(eE.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                a.useEffect(
                    () =>
                        Q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eE.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        c = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, eE.Z5c.GUILD_BOOSTING_MARKETING(X.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        _ = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, eE.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        h = (0, u.e7)([Y.Z], () => Y.Z.getIsOpen()),
        E = (0, l.$B)([eE.Z5c.CHANNEL(eE.ME, X.Hw.channelId()), eE.Z5c.CHANNEL(X.Hw.guildId(), X.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == E ? void 0 : null === (e = E.params) || void 0 === e ? void 0 : e.channelId) === em.oC.GUILD_ONBOARDING,
        I = s || r || c || _ || m,
        p = a.useCallback(() => F.Z.openSidebar(), []),
        f = (0, L.Q)('AppView');
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: eg.container,
            children: [
                h &&
                    !_ &&
                    !f &&
                    (0, i.jsx)(w.Z, {
                        className: eg.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(M.Z.Provider, {
                    value: (null == E ? void 0 : E.params.guildId) === eE.ME ? void 0 : null == E ? void 0 : E.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: eg.base,
                        children: [
                            d.tq ? null : (0, i.jsx)(ed.Z, {}),
                            (0, i.jsxs)('div', {
                                className: eg.content,
                                children: [
                                    (0, i.jsx)(C.Z, {}),
                                    (0, i.jsx)(eB, {
                                        isOnFullScreenCollectiblesShopRoute: _,
                                        isSidebarOpen: h,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideSidebar: I || !h
                                    }),
                                    (0, i.jsx)(g.Z.Provider, {
                                        value: p,
                                        children: (0, i.jsxs)(l.rs, {
                                            children: [
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(l.l_, { to: eE.Z5c.ME })
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: ey,
                                                    impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.APPLICATION_LIBRARY,
                                                    render: eP,
                                                    impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.APPLICATION_STORE,
                                                    render: eM,
                                                    impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: eD(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.COLLECTIBLES_SHOP,
                                                    render: eD(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: eD(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.MESSAGE_REQUESTS,
                                                    render: eU,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.FAMILY_CENTER,
                                                    render: eG,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.ME,
                                                    exact: !0,
                                                    render: ej,
                                                    impressionName: o.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: [eE.Z5c.CHANNEL_THREAD_VIEW(X.Hw.guildId(), X.Hw.channelId(), ':threadId', ':messageId?'), eE.Z5c.CHANNEL(eE.ME, X.Hw.channelId()), eE.Z5c.CHANNEL(X.Hw.guildId(), X.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                    render: eR,
                                                    impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.GLOBAL_DISCOVERY,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eO(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eO(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eO(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.QUEST_HOME,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eO(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.GUILD_DISCOVERY,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eO(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.GUILD_MEMBER_VERIFICATION(X.Hw.guildId(), ':inviteCode?'),
                                                    render: ex,
                                                    impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(X.Hw.guildId(), ':inviteCode?'),
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eE.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: ew,
                                                    disableTrack: !0
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
