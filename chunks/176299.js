n.d(t, {
    Z: function () {
        return ek;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(512969),
    o = n(990547),
    c = n(608787),
    d = n(873546),
    u = n(442837),
    _ = n(433517),
    E = n(481060),
    h = n(711237),
    m = n(532835),
    I = n(347469),
    p = n(290297),
    g = n(279240),
    T = n(765717),
    S = n(358221),
    C = n(823748),
    f = n(626421),
    N = n(118379),
    A = n(652515),
    v = n(544978),
    Z = n(540059),
    L = n(724383),
    R = n(135864),
    O = n(372900),
    x = n(6039),
    b = n(637853),
    M = n(326145),
    P = n(269675),
    D = n(242601),
    y = n(416568),
    j = n(613609),
    U = n(160404),
    G = n(225675),
    w = n(745052),
    k = n(285865),
    B = n(659971),
    H = n(179742),
    V = n(270759),
    F = n(918701),
    Y = n(905423),
    z = n(304445),
    W = n(893607),
    K = n(187819),
    q = n(210887),
    Q = n(592125),
    X = n(271383),
    J = n(430824),
    $ = n(944486),
    ee = n(933429),
    et = n(823379),
    en = n(709054),
    ei = n(374005),
    ea = n(191741),
    es = n(409292),
    er = n(316173),
    el = n(256638),
    eo = n(663701),
    ec = n(425369),
    ed = n(715702),
    eu = n(981631),
    e_ = n(176505),
    eE = n(290511),
    eh = n(530921);
let em = 'resizable-sidebar-width',
    eI = (0, c.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 191741)),
        webpackId: 191741
    }),
    ep = () =>
        (0, i.jsx)('div', {
            className: eh.loader,
            children: (0, i.jsx)(E.Spinner, {})
        }),
    eg = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: ep
    }),
    eT = (0, c.Un)({
        createPromise: () => n.e('44798').then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: ep
    }),
    eS = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: ep
    }),
    eC = (0, c.Un)({
        createPromise: () => Promise.all([n.e('85552'), n.e('44400')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: ep
    }),
    ef = (0, c.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('38359'), n.e('66690')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: ep
    }),
    eN = (0, c.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('38359'), n.e('65586')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: ep
    }),
    eA = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([Q.Z, $.Z], () => {
                let e = $.Z.getChannelId();
                return Q.Z.getChannel(e);
            }),
            { guildId: a, channelId: s, messageId: r } = t.params,
            l = (0, u.e7)([J.Z], () => J.Z.getGuild(a)),
            o = (0, u.e7)([X.ZP], () => (null == a ? null : X.ZP.getSelfMember(a))),
            c = (0, u.e7)([U.Z], () => {
                if (null == a) return;
                let e = U.Z.getData(a);
                if ((null == e ? void 0 : e.type) === G.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return v.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return v.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            d = (0, A.C4)(a, 'channel_renderer');
        if (null != a && null != s && (0, e_.AB)(s))
            switch (s) {
                case e_.oC.ROLE_SUBSCRIPTIONS:
                    return d
                        ? (0, i.jsx)(eg, {
                              guildId: a,
                              initialTab: v.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(P.Z, { guildId: a });
                case e_.oC.GUILD_SHOP:
                    return (0, i.jsx)(eg, {
                        guildId: a,
                        productId: r,
                        initialTab: c
                    });
                case e_.oC.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(eT, { guildId: a });
                case e_.oC.GUILD_HOME:
                    return (0, i.jsx)(eS, { guildId: a });
                case e_.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(ef, {
                        guildId: a,
                        selectedSection: eE.l7.BROWSE
                    });
                case e_.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eN, { guildId: a });
                case e_.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(ef, {
                        guildId: a,
                        selectedSection: eE.l7.CUSTOMIZE
                    });
                case e_.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(eC, { guildId: a });
                default:
                    (0, et.vE)(s);
            }
        if ((0, b.p3)(l, o))
            return (0, i.jsx)(M.Z, {
                guildId: a,
                channelId: s
            });
        if ((null == n ? void 0 : n.type) === eu.d4z.GUILD_STORE) {
            let e = en.default.cast(t.params.messageId);
            return (0, i.jsx)(
                es.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(C.Z, {});
    },
    ev = a.memo(function () {
        let { guildId: e, channelId: t } = (0, Y.Z)(),
            n = (0, u.e7)([$.Z], () => (null != t ? t : $.Z.getChannelId(e)));
        return (function () {
            return window.location.pathname.startsWith(eu.Z5c.GLOBAL_DISCOVERY);
        })() ||
            (function () {
                return window.location.pathname.startsWith(eu.Z5c.GUILD_DISCOVERY) || (0, F.OG)();
            })()
            ? (0, i.jsx)(R.Z, {})
            : null != e
              ? (0, i.jsx)(
                    D.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, i.jsx)(eo.Z, {});
    }),
    eZ = (e) => (0, i.jsx)(eA, { ...e }),
    eL = () => (0, i.jsx)(L.Z, {}),
    eR = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(x.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eO = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(j.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    ex = () => (0, i.jsx)(ec.Z, {}),
    eb = () => (0, i.jsx)(ed.Z, {}),
    eM = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(N.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    eP = (e) => (0, i.jsx)(g.Z, { ...e }),
    eD = () => (0, i.jsx)(V.Z, {}),
    ey = () => (0, i.jsx)(w.Z, {}),
    ej = () => (0, i.jsx)(H.Z, {}),
    eU = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'addFriends':
                return (0, i.jsx)(V.Z, { initialSection: eu.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(V.Z, { initialSection: eu.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(l.l_, {
                    to: {
                        pathname: eu.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.FAMILY_CENTER });
            case 'account-standing':
                if ((0, K.sp)({ location: 'app view user trigger debugging' })) return (0, i.jsx)(l.l_, { to: eu.Z5c.SETTINGS('account', 'account-standing') });
                return (0, i.jsx)(l.l_, { to: eu.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(l.l_, { to: eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            default:
                return (0, i.jsx)(l.l_, { to: eu.Z5c.ME });
        }
    };
function eG(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function ew(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: s, isSidebarOpen: l, isOnFullScreenCollectiblesShopRoute: o } = e;
    (0, m.t)(!0);
    let c = 'app view user trigger debugging';
    h.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), h.R6.trackExposure({ location: c });
    let p = (0, u.e7)([S.Z], () => S.Z.isFullscreenInContext()),
        g = (0, Z.Q)('ChannelSidebar'),
        T = (0, ea.useAppSidebarState)((e) => !e.isOpen);
    a.useLayoutEffect(() => {
        if (g) {
            var e;
            let t = parseInt(null !== (e = _.K.get(em)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = 264), eG((t = Math.min(Math.max(t, 240), 416)));
            let n = (e) => {
                e.metaKey && 'b' === e.key && ea.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener('keydown', n),
                () => {
                    document.removeEventListener('keydown', n);
                }
            );
        }
    }, [g]),
        a.useLayoutEffect(() => {
            if (T) eG(76);
            else {
                var e;
                let t = parseInt(null !== (e = _.K.get(em)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = 264), eG(t);
            }
        }, [T]);
    let C = a.useRef(null),
        f = a.useCallback((e, t) => {
            var n;
            eG(e);
            let i = t < 80;
            ea.useAppSidebarState.setState({ isOpen: !i }), t < 240 ? document.body.classList.add(eh.collapsing) : document.body.classList.remove(eh.collapsing);
            let a = t - e;
            null === (n = C.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(a / 76), 0.25))), i && eG(76);
        }, []),
        N = a.useCallback(() => {
            document.body.classList.add(eh.dragging);
        }, []),
        A = a.useCallback((e) => {
            var t;
            document.body.classList.remove(eh.dragging), document.body.classList.remove(eh.collapsing), null === (t = C.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), _.K.set(em, e);
        }, []),
        v = (0, I.Z)({
            minDimension: 240,
            maxDimension: 416,
            resizableDomNodeRef: C,
            onElementResize: f,
            onElementResizeStart: N,
            onElementResizeEnd: A,
            orientation: I.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        L = a.useCallback(() => {
            ea.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (a.useLayoutEffect(() => {
            T && eG(76);
        }, [T]),
        s)
    )
        return null;
    let R = g ? 'div' : a.Fragment,
        O = g ? { className: eh.sidebarList } : {};
    return (0, i.jsx)(E.ThemeProvider, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: g ? C : void 0,
                'data-collapsed': T,
                className: r()(eh.sidebar, e, {
                    [eh.hasNotice]: t,
                    [eh.fullWidth]: d.tq,
                    [eh.hidden]: p
                }),
                children: [
                    g &&
                        l &&
                        !o &&
                        (0, i.jsx)(y.Z, {
                            className: eh.guilds,
                            themeOverride: n
                        }),
                    (0, i.jsx)(R, {
                        ...O,
                        children: (0, i.jsx)(ev, {})
                    }),
                    g
                        ? (0, i.jsx)(E.Clickable, {
                              onClick: L,
                              'aria-label': 'Resize Sidebar',
                              className: eh.sidebarResizeHandle,
                              onMouseDown: v
                          })
                        : null,
                    (0, i.jsx)(ei.b, {}),
                    (0, i.jsx)(er.Z, {})
                ]
            })
    });
}
function ek() {
    var e;
    let t = (0, u.e7)([ee.Z], () => ee.Z.hasNotice()),
        n = (0, u.e7)([q.Z], () => (q.Z.darkSidebar ? eu.BRd.DARK : void 0)),
        s = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                a.useEffect(
                    () =>
                        z.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        r = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                a.useEffect(
                    () =>
                        z.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        c = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, eu.Z5c.GUILD_BOOSTING_MARKETING(W.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        _ = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        E = (0, u.e7)([B.Z], () => B.Z.getIsOpen()),
        h = (0, l.$B)([eu.Z5c.CHANNEL(eu.ME, W.Hw.channelId()), eu.Z5c.CHANNEL(W.Hw.guildId(), W.Hw.channelId({ optional: !0 }), ':messageId?')]),
        m = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === e_.oC.GUILD_ONBOARDING,
        I = s || r || c || _ || m,
        g = a.useCallback(() => k.Z.openSidebar(), []),
        S = (0, Z.Q)('AppView');
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: eh.container,
            children: [
                E &&
                    !_ &&
                    !S &&
                    (0, i.jsx)(y.Z, {
                        className: eh.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(O.Z.Provider, {
                    value: (null == h ? void 0 : h.params.guildId) === eu.ME ? void 0 : null == h ? void 0 : h.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: eh.base,
                        children: [
                            S ? (0, i.jsx)(eI, {}) : null,
                            d.tq ? null : (0, i.jsx)(el.Z, {}),
                            (0, i.jsxs)('div', {
                                className: eh.content,
                                children: [
                                    (0, i.jsx)(f.Z, {}),
                                    (0, i.jsx)(ew, {
                                        isOnFullScreenCollectiblesShopRoute: _,
                                        isSidebarOpen: E,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideSidebar: I || !E
                                    }),
                                    (0, i.jsx)(p.Z.Provider, {
                                        value: g,
                                        children: (0, i.jsxs)(l.rs, {
                                            children: [
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(l.l_, { to: eu.Z5c.ME })
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: eP,
                                                    impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.APPLICATION_LIBRARY,
                                                    render: ex,
                                                    impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.APPLICATION_STORE,
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: eM(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.COLLECTIBLES_SHOP,
                                                    render: eM(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: eM(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.MESSAGE_REQUESTS,
                                                    render: ey,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.FAMILY_CENTER,
                                                    render: ej,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.ME,
                                                    exact: !0,
                                                    render: eD,
                                                    impressionName: o.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: [eu.Z5c.CHANNEL_THREAD_VIEW(W.Hw.guildId(), W.Hw.channelId(), ':threadId', ':messageId?'), eu.Z5c.CHANNEL(eu.ME, W.Hw.channelId()), eu.Z5c.CHANNEL(W.Hw.guildId(), W.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                    render: eZ,
                                                    impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GLOBAL_DISCOVERY,
                                                    render: eL,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eL,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eL,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.QUEST_HOME,
                                                    render: eL,
                                                    impressionName: o.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GUILD_DISCOVERY,
                                                    render: eL,
                                                    impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GUILD_MEMBER_VERIFICATION(W.Hw.guildId(), ':inviteCode?'),
                                                    render: eR,
                                                    impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(W.Hw.guildId(), ':inviteCode?'),
                                                    render: eO,
                                                    impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: eu.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: eU,
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
