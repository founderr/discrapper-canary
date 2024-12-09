n.d(t, {
    Z: function () {
        return eG;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512969),
    o = n(990547),
    c = n(608787),
    d = n(873546),
    u = n(442837),
    h = n(433517),
    m = n(481060),
    p = n(711237),
    g = n(532835),
    f = n(347469),
    _ = n(290297),
    E = n(279240),
    I = n(765717),
    C = n(358221),
    v = n(823748),
    N = n(626421),
    S = n(118379),
    T = n(267161),
    b = n(652515),
    A = n(544978),
    x = n(540059),
    Z = n(724383),
    L = n(135864),
    y = n(372900),
    P = n(6039),
    O = n(637853),
    R = n(326145),
    j = n(269675),
    D = n(242601),
    M = n(416568),
    w = n(613609),
    k = n(160404),
    U = n(225675),
    G = n(745052),
    B = n(285865),
    H = n(659971),
    V = n(179742),
    F = n(270759),
    z = n(918701),
    W = n(905423),
    Y = n(304445),
    K = n(893607),
    q = n(187819),
    X = n(210887),
    Q = n(592125),
    J = n(271383),
    $ = n(430824),
    ee = n(944486),
    et = n(933429),
    en = n(823379),
    ei = n(709054),
    er = n(374005),
    el = n(409292),
    ea = n(316173),
    es = n(256638),
    eo = n(663701),
    ec = n(425369),
    ed = n(715702),
    eu = n(981631),
    eh = n(176505),
    em = n(290511),
    ep = n(415281);
let eg = 'resizable-sidebar-width-2',
    ef = (0, c.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 267161)),
        webpackId: 267161
    }),
    e_ = () =>
        (0, i.jsx)('div', {
            className: ep.loader,
            children: (0, i.jsx)(m.Spinner, {})
        }),
    eE = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: e_
    }),
    eI = (0, c.Un)({
        createPromise: () => Promise.all([n.e('16114'), n.e('74244')]).then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: e_
    }),
    eC = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: e_
    }),
    ev = (0, c.Un)({
        createPromise: () => Promise.all([n.e('85552'), n.e('44400')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: e_
    }),
    eN = (0, c.Un)({
        createPromise: () => Promise.all([n.e('63288'), n.e('98479'), n.e('58227'), n.e('38359'), n.e('35566')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: e_
    }),
    eS = (0, c.Un)({
        createPromise: () => Promise.all([n.e('63288'), n.e('98479'), n.e('19878'), n.e('38359'), n.e('41456')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: e_
    }),
    eT = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([Q.Z, ee.Z], () => {
                let e = ee.Z.getChannelId();
                return Q.Z.getChannel(e);
            }),
            { guildId: r, channelId: l, messageId: a } = t.params,
            s = (0, u.e7)([$.Z], () => $.Z.getGuild(r)),
            o = (0, u.e7)([J.ZP], () => (null == r ? null : J.ZP.getSelfMember(r))),
            c = (0, u.e7)([k.Z], () => {
                if (null == r) return;
                let e = k.Z.getData(r);
                if ((null == e ? void 0 : e.type) === U.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return A.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return A.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            d = (0, b.C4)(r, 'channel_renderer');
        if (null != r && null != l && (0, eh.AB)(l))
            switch (l) {
                case eh.oC.ROLE_SUBSCRIPTIONS:
                    return d
                        ? (0, i.jsx)(eE, {
                              guildId: r,
                              initialTab: A.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(j.Z, { guildId: r });
                case eh.oC.GUILD_SHOP:
                    return (0, i.jsx)(eE, {
                        guildId: r,
                        productId: a,
                        initialTab: c
                    });
                case eh.oC.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(eI, { guildId: r });
                case eh.oC.GUILD_HOME:
                    return (0, i.jsx)(eC, { guildId: r });
                case eh.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eN, {
                        guildId: r,
                        selectedSection: em.l7.BROWSE
                    });
                case eh.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eS, { guildId: r });
                case eh.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eN, {
                        guildId: r,
                        selectedSection: em.l7.CUSTOMIZE
                    });
                case eh.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(ev, { guildId: r });
                default:
                    (0, en.vE)(l);
            }
        if ((0, O.p3)(s, o))
            return (0, i.jsx)(R.Z, {
                guildId: r,
                channelId: l
            });
        if ((null == n ? void 0 : n.type) === eu.d4z.GUILD_STORE) {
            let e = ei.default.cast(t.params.messageId);
            return (0, i.jsx)(
                el.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(v.Z, {});
    },
    eb = r.memo(function () {
        let { guildId: e, channelId: t } = (0, W.Z)(),
            n = (0, u.e7)([ee.Z], () => (null != t ? t : ee.Z.getChannelId(e)));
        return (function () {
            return window.location.pathname.startsWith(eu.Z5c.GLOBAL_DISCOVERY);
        })() ||
            (function () {
                return window.location.pathname.startsWith(eu.Z5c.GUILD_DISCOVERY) || (0, z.OG)();
            })()
            ? (0, i.jsx)(L.Z, {})
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
    eA = (e) => (0, i.jsx)(eT, { ...e }),
    ex = () => (0, i.jsx)(Z.Z, {}),
    eZ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(P.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eL = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(w.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    ey = () => (0, i.jsx)(ec.Z, {}),
    eP = () => (0, i.jsx)(ed.Z, {}),
    eO = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(S.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    eR = (e) => (0, i.jsx)(E.Z, { ...e }),
    ej = () => (0, i.jsx)(F.Z, {}),
    eD = () => (0, i.jsx)(G.Z, {}),
    eM = () => (0, i.jsx)(V.Z, {}),
    ew = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'friends':
                return (0, i.jsx)(F.Z, { initialSection: eu.pJs.ONLINE });
            case 'addFriends':
                return (0, i.jsx)(F.Z, { initialSection: eu.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(F.Z, { initialSection: eu.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(s.l_, { to: eu.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(s.l_, {
                    to: {
                        pathname: eu.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(s.l_, { to: eu.Z5c.FAMILY_CENTER });
            case 'account-standing':
                if ((0, q.sp)({ location: 'app view user trigger debugging' })) return (0, i.jsx)(s.l_, { to: eu.Z5c.SETTINGS('account', 'account-standing') });
                return (0, i.jsx)(s.l_, { to: eu.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(s.l_, { to: eu.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(s.l_, { to: eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            case 'editProfile':
                return (0, i.jsx)(s.l_, { to: { pathname: eu.Z5c.SETTINGS('profile-customization') } });
            case 'gift':
            case 'store':
                return (0, i.jsx)(s.l_, { to: { pathname: eu.Z5c.NITRO_HOME } });
            default:
                return (0, i.jsx)(s.l_, { to: eu.Z5c.ME });
        }
    };
function ek(e) {
    document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px'));
}
function eU(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: l, isSidebarOpen: s, isOnFullScreenCollectiblesShopRoute: o } = e;
    (0, g.t)(!0);
    let c = 'app view user trigger debugging';
    p.R6.useExperiment({ location: c }, { autoTrackExposure: !1 }), p.R6.trackExposure({ location: c });
    let _ = (0, u.e7)([C.Z], () => C.Z.isFullscreenInContext()),
        E = (0, x.TH)('ChannelSidebar'),
        I = (0, x.Q3)('ChannelSidebar'),
        v = (0, T.useAppSidebarState)((e) => !e.isOpen) && E;
    r.useLayoutEffect(() => {
        if (E) {
            var e;
            let t = parseInt(null !== (e = h.K.get(eg)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = 375), (t = Math.min(Math.max(t, 264), 432)), !E && t <= 76 && (t = 375), ek(t);
            let n = (e) => {
                e.metaKey && 'b' === e.key && T.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
            };
            return (
                document.addEventListener('keydown', n),
                () => {
                    document.removeEventListener('keydown', n);
                }
            );
        }
    }, [E]),
        r.useLayoutEffect(() => {
            if (v) ek(76);
            else {
                var e;
                let t = parseInt(null !== (e = h.K.get(eg)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = 375), ek(t);
            }
        }, [v]);
    let N = r.useRef(null),
        S = r.useCallback(
            (e, t) => {
                var n;
                ek(e);
                let i = t < 88;
                t <= 264 ? document.body.classList.add(ep.draggingMin) : document.body.classList.remove(ep.draggingMin), t >= 432 ? document.body.classList.add(ep.draggingMax) : document.body.classList.remove(ep.draggingMax);
                let r = t - e;
                null === (n = N.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(r / 76), 0.25))), E && (T.useAppSidebarState.setState({ isOpen: !i }), i && ek(76));
            },
            [E]
        ),
        b = r.useCallback(() => {
            document.body.classList.add(ep.dragging);
        }, []),
        A = r.useCallback((e) => {
            var t;
            document.body.classList.remove(ep.dragging), document.body.classList.remove(ep.draggingMin), document.body.classList.remove(ep.draggingMax), document.body.classList.remove(ep.collapsing), null === (t = N.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(eg, e);
        }, []),
        Z = (0, f.Z)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: N,
            onElementResize: S,
            onElementResizeStart: b,
            onElementResizeEnd: A,
            orientation: f.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        L = r.useCallback(() => {
            T.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            v && ek(76);
        }, [v]),
        l)
    )
        return null;
    let y = I ? 'div' : r.Fragment,
        P = I ? { className: ep.sidebarList } : {};
    return (0, i.jsx)(m.ThemeProvider, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: I ? N : void 0,
                'data-collapsed': v,
                className: a()(ep.sidebar, e, {
                    [ep.hasNotice]: t,
                    [ep.fullWidth]: d.tq,
                    [ep.hidden]: _
                }),
                children: [
                    I &&
                        s &&
                        !o &&
                        (0, i.jsx)(M.Z, {
                            className: ep.guilds,
                            themeOverride: n
                        }),
                    (0, i.jsx)(y, {
                        ...P,
                        children: (0, i.jsx)(eb, {})
                    }),
                    I
                        ? (0, i.jsx)(m.Clickable, {
                              onClick: L,
                              'aria-label': 'Resize Sidebar',
                              className: ep.sidebarResizeHandle,
                              onMouseDown: Z
                          })
                        : null,
                    (0, i.jsx)(er.b, {}),
                    !I && (0, i.jsx)(ea.Z, {})
                ]
            })
    });
}
function eG() {
    var e;
    let t = (0, u.e7)([et.ZP], () => et.ZP.hasNotice()),
        n = (0, u.e7)([X.Z], () => (X.Z.darkSidebar ? eu.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                r.useEffect(
                    () =>
                        Y.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        a = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                r.useEffect(
                    () =>
                        Y.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        c = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, eu.Z5c.GUILD_BOOSTING_MARKETING(K.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        h = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        m = (0, u.e7)([H.Z], () => H.Z.getIsOpen()),
        p = (0, s.$B)([eu.Z5c.CHANNEL(eu.ME, K.Hw.channelId()), eu.Z5c.CHANNEL(K.Hw.guildId(), K.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == p ? void 0 : null === (e = p.params) || void 0 === e ? void 0 : e.channelId) === eh.oC.GUILD_ONBOARDING,
        f = l || a || c || h || g,
        E = r.useCallback(() => B.Z.openSidebar(), []),
        C = (0, x.Q3)('AppView'),
        v = (0, x.TH)('AppView'),
        S = C ? 'div' : r.Fragment,
        b = (0, T.useAppSidebarState)((e) => !e.isOpen);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: ep.container,
            children: [
                m &&
                    !h &&
                    !C &&
                    (0, i.jsx)(M.Z, {
                        className: ep.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(y.Z.Provider, {
                    value: (null == p ? void 0 : p.params.guildId) === eu.ME ? void 0 : null == p ? void 0 : p.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: ep.base,
                        children: [
                            C ? (0, i.jsx)(ef, { hasNotice: t }) : null,
                            d.tq ? null : (0, i.jsx)(es.Z, {}),
                            (0, i.jsxs)('div', {
                                className: ep.content,
                                children: [
                                    (0, i.jsx)(N.Z, {}),
                                    (0, i.jsx)(eU, {
                                        isOnFullScreenCollectiblesShopRoute: h,
                                        isSidebarOpen: m,
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideSidebar: f || !m
                                    }),
                                    (0, i.jsx)(S, {
                                        className: ep.page,
                                        'data-collapsed': !!v && b,
                                        children: (0, i.jsx)(_.Z.Provider, {
                                            value: E,
                                            children: (0, i.jsxs)(s.rs, {
                                                children: [
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, i.jsx)(s.l_, { to: eu.Z5c.ME })
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                        render: eR,
                                                        impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { application_id: t.params.applicationId };
                                                        }
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.APPLICATION_LIBRARY,
                                                        render: ey,
                                                        impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.APPLICATION_STORE,
                                                        render: eP,
                                                        impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                        render: eO(!0),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.COLLECTIBLES_SHOP,
                                                        render: eO(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                        render: eO(!1),
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.MESSAGE_REQUESTS,
                                                        render: eD,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.FAMILY_CENTER,
                                                        render: eM,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.ME,
                                                        exact: !0,
                                                        render: ej,
                                                        impressionName: o.ImpressionNames.FRIENDS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: [eu.Z5c.CHANNEL_THREAD_VIEW(K.Hw.guildId(), K.Hw.channelId(), ':threadId', ':messageId?'), eu.Z5c.CHANNEL(eu.ME, K.Hw.channelId()), eu.Z5c.CHANNEL(K.Hw.guildId(), K.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                        render: eA,
                                                        impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.GLOBAL_DISCOVERY,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.GLOBAL_DISCOVERY_APPS,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.QUEST_HOME,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.GUILD_DISCOVERY,
                                                        render: ex,
                                                        impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.GUILD_MEMBER_VERIFICATION(K.Hw.guildId(), ':inviteCode?'),
                                                        render: eZ,
                                                        impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(K.Hw.guildId(), ':inviteCode?'),
                                                        render: eL,
                                                        impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                        impressionProperties: (e) => {
                                                            let { computedMatch: t } = e;
                                                            return { has_invite: void 0 !== t.params.inviteCode };
                                                        }
                                                    }),
                                                    (0, i.jsx)(I.Z, {
                                                        path: eu.Z5c.FEATURE(':feature'),
                                                        exact: !0,
                                                        render: ew,
                                                        disableTrack: !0
                                                    })
                                                ]
                                            })
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
