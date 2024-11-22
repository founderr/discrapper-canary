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
    T = n(118379),
    S = n(652515),
    A = n(544978),
    x = n(540059),
    b = n(724383),
    Z = n(135864),
    L = n(372900),
    y = n(6039),
    P = n(637853),
    O = n(326145),
    R = n(269675),
    j = n(242601),
    D = n(416568),
    M = n(613609),
    w = n(160404),
    k = n(225675),
    U = n(745052),
    G = n(285865),
    B = n(659971),
    H = n(179742),
    V = n(270759),
    F = n(918701),
    z = n(905423),
    W = n(304445),
    Y = n(893607),
    K = n(187819),
    q = n(210887),
    X = n(592125),
    Q = n(271383),
    J = n(430824),
    $ = n(944486),
    ee = n(933429),
    et = n(823379),
    en = n(709054),
    ei = n(374005),
    er = n(191741),
    el = n(409292),
    ea = n(316173),
    es = n(256638),
    eo = n(663701),
    ec = n(425369),
    ed = n(715702),
    eu = n(981631),
    eh = n(176505),
    em = n(290511),
    ep = n(530921);
let eg = 'resizable-sidebar-width',
    ef = (0, c.Un)({
        createPromise: () => Promise.resolve().then(n.bind(n, 191741)),
        webpackId: 191741
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
        createPromise: () => Promise.all([n.e('16114'), n.e('30689')]).then(n.bind(n, 998420)),
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
        createPromise: () => Promise.all([n.e('44156'), n.e('58227'), n.e('38359'), n.e('66690')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: e_
    }),
    eT = (0, c.Un)({
        createPromise: () => Promise.all([n.e('44156'), n.e('19878'), n.e('38359'), n.e('65586')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: e_
    }),
    eS = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([X.Z, $.Z], () => {
                let e = $.Z.getChannelId();
                return X.Z.getChannel(e);
            }),
            { guildId: r, channelId: l, messageId: a } = t.params,
            s = (0, u.e7)([J.Z], () => J.Z.getGuild(r)),
            o = (0, u.e7)([Q.ZP], () => (null == r ? null : Q.ZP.getSelfMember(r))),
            c = (0, u.e7)([w.Z], () => {
                if (null == r) return;
                let e = w.Z.getData(r);
                if ((null == e ? void 0 : e.type) === k.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return A.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return A.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            d = (0, S.C4)(r, 'channel_renderer');
        if (null != r && null != l && (0, eh.AB)(l))
            switch (l) {
                case eh.oC.ROLE_SUBSCRIPTIONS:
                    return d
                        ? (0, i.jsx)(eE, {
                              guildId: r,
                              initialTab: A.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(R.Z, { guildId: r });
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
                    return (0, i.jsx)(eT, { guildId: r });
                case eh.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eN, {
                        guildId: r,
                        selectedSection: em.l7.CUSTOMIZE
                    });
                case eh.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(ev, { guildId: r });
                default:
                    (0, et.vE)(l);
            }
        if ((0, P.p3)(s, o))
            return (0, i.jsx)(O.Z, {
                guildId: r,
                channelId: l
            });
        if ((null == n ? void 0 : n.type) === eu.d4z.GUILD_STORE) {
            let e = en.default.cast(t.params.messageId);
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
    eA = r.memo(function () {
        let { guildId: e, channelId: t } = (0, z.Z)(),
            n = (0, u.e7)([$.Z], () => (null != t ? t : $.Z.getChannelId(e)));
        return (function () {
            return window.location.pathname.startsWith(eu.Z5c.GLOBAL_DISCOVERY);
        })() ||
            (function () {
                return window.location.pathname.startsWith(eu.Z5c.GUILD_DISCOVERY) || (0, F.OG)();
            })()
            ? (0, i.jsx)(Z.Z, {})
            : null != e
              ? (0, i.jsx)(
                    j.Z,
                    {
                        selectedChannelId: n,
                        guildId: e
                    },
                    e
                )
              : (0, i.jsx)(eo.Z, {});
    }),
    ex = (e) => (0, i.jsx)(eS, { ...e }),
    eb = () => (0, i.jsx)(b.Z, {}),
    eZ = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(y.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eL = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(M.Z, {
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
            return (0, i.jsx)(T.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    eR = (e) => (0, i.jsx)(E.Z, { ...e }),
    ej = () => (0, i.jsx)(V.Z, {}),
    eD = () => (0, i.jsx)(U.Z, {}),
    eM = () => (0, i.jsx)(H.Z, {}),
    ew = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'addFriends':
                return (0, i.jsx)(V.Z, { initialSection: eu.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(V.Z, { initialSection: eu.pJs.PENDING });
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
                if ((0, K.sp)({ location: 'app view user trigger debugging' })) return (0, i.jsx)(s.l_, { to: eu.Z5c.SETTINGS('account', 'account-standing') });
                return (0, i.jsx)(s.l_, { to: eu.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(s.l_, { to: eu.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(s.l_, { to: eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
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
        E = (0, x.Q)('ChannelSidebar'),
        I = (0, er.useAppSidebarState)((e) => !e.isOpen);
    r.useLayoutEffect(() => {
        if (E) {
            var e;
            let t = parseInt(null !== (e = h.K.get(eg)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = 264), ek((t = Math.min(Math.max(t, 240), 416)));
            let n = (e) => {
                e.metaKey && 'b' === e.key && er.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
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
            if (I) ek(76);
            else {
                var e;
                let t = parseInt(null !== (e = h.K.get(eg)) && void 0 !== e ? e : '');
                Number.isNaN(t) && (t = 264), ek(t);
            }
        }, [I]);
    let v = r.useRef(null),
        N = r.useCallback((e, t) => {
            var n;
            ek(e);
            let i = t < 80;
            er.useAppSidebarState.setState({ isOpen: !i }), t < 240 ? document.body.classList.add(ep.collapsing) : document.body.classList.remove(ep.collapsing);
            let r = t - e;
            null === (n = v.current) || void 0 === n || n.style.setProperty('--custom-overdrag', ''.concat(1 + Math.min(Math.abs(r / 76), 0.25))), i && ek(76);
        }, []),
        T = r.useCallback(() => {
            document.body.classList.add(ep.dragging);
        }, []),
        S = r.useCallback((e) => {
            var t;
            document.body.classList.remove(ep.dragging), document.body.classList.remove(ep.collapsing), null === (t = v.current) || void 0 === t || t.style.setProperty('--custom-overdrag', '0px'), h.K.set(eg, e);
        }, []),
        A = (0, f.Z)({
            minDimension: 240,
            maxDimension: 416,
            resizableDomNodeRef: v,
            onElementResize: N,
            onElementResizeStart: T,
            onElementResizeEnd: S,
            orientation: f.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        b = r.useCallback(() => {
            er.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (r.useLayoutEffect(() => {
            I && ek(76);
        }, [I]),
        l)
    )
        return null;
    let Z = E ? 'div' : r.Fragment,
        L = E ? { className: ep.sidebarList } : {};
    return (0, i.jsx)(m.ThemeProvider, {
        theme: n,
        children: (e) =>
            (0, i.jsxs)('div', {
                ref: E ? v : void 0,
                'data-collapsed': I,
                className: a()(ep.sidebar, e, {
                    [ep.hasNotice]: t,
                    [ep.fullWidth]: d.tq,
                    [ep.hidden]: _
                }),
                children: [
                    E &&
                        s &&
                        !o &&
                        (0, i.jsx)(D.Z, {
                            className: ep.guilds,
                            themeOverride: n
                        }),
                    (0, i.jsx)(Z, {
                        ...L,
                        children: (0, i.jsx)(eA, {})
                    }),
                    E
                        ? (0, i.jsx)(m.Clickable, {
                              onClick: b,
                              'aria-label': 'Resize Sidebar',
                              className: ep.sidebarResizeHandle,
                              onMouseDown: A
                          })
                        : null,
                    (0, i.jsx)(ei.b, {}),
                    (0, i.jsx)(ea.Z, {})
                ]
            })
    });
}
function eG() {
    var e;
    let t = (0, u.e7)([ee.Z], () => ee.Z.hasNotice()),
        n = (0, u.e7)([q.Z], () => (q.Z.darkSidebar ? eu.BRd.DARK : void 0)),
        l = (function () {
            let [e, t] = r.useState(() => window.location.pathname.startsWith(eu.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                r.useEffect(
                    () =>
                        W.Z.addRouteChangeListener((e) => {
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
                        W.Z.addRouteChangeListener((e) => {
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
            return (null === (e = (0, s.LX)(t.pathname, eu.Z5c.GUILD_BOOSTING_MARKETING(Y.Hw.guildId()))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        h = (function () {
            var e;
            let t = (0, s.TH)();
            return (null === (e = (0, s.LX)(t.pathname, eu.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        m = (0, u.e7)([B.Z], () => B.Z.getIsOpen()),
        p = (0, s.$B)([eu.Z5c.CHANNEL(eu.ME, Y.Hw.channelId()), eu.Z5c.CHANNEL(Y.Hw.guildId(), Y.Hw.channelId({ optional: !0 }), ':messageId?')]),
        g = (null == p ? void 0 : null === (e = p.params) || void 0 === e ? void 0 : e.channelId) === eh.oC.GUILD_ONBOARDING,
        f = l || a || c || h || g,
        E = r.useCallback(() => G.Z.openSidebar(), []),
        C = (0, x.Q)('AppView');
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: ep.container,
            children: [
                m &&
                    !h &&
                    !C &&
                    (0, i.jsx)(D.Z, {
                        className: ep.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(L.Z.Provider, {
                    value: (null == p ? void 0 : p.params.guildId) === eu.ME ? void 0 : null == p ? void 0 : p.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: ep.base,
                        children: [
                            C ? (0, i.jsx)(ef, {}) : null,
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
                                    (0, i.jsx)(_.Z.Provider, {
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
                                                    path: [eu.Z5c.CHANNEL_THREAD_VIEW(Y.Hw.guildId(), Y.Hw.channelId(), ':threadId', ':messageId?'), eu.Z5c.CHANNEL(eu.ME, Y.Hw.channelId()), eu.Z5c.CHANNEL(Y.Hw.guildId(), Y.Hw.channelId({ optional: !0 }), ':messageId?')],
                                                    render: ex,
                                                    impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(I.Z, {
                                                    path: eu.Z5c.GLOBAL_DISCOVERY,
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0
                                                }),
                                                (0, i.jsx)(I.Z, {
                                                    path: eu.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(I.Z, {
                                                    path: eu.Z5c.GLOBAL_DISCOVERY_APPS,
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(I.Z, {
                                                    path: eu.Z5c.QUEST_HOME,
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(I.Z, {
                                                    path: eu.Z5c.GUILD_DISCOVERY,
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(I.Z, {
                                                    path: eu.Z5c.GUILD_MEMBER_VERIFICATION(Y.Hw.guildId(), ':inviteCode?'),
                                                    render: eZ,
                                                    impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(I.Z, {
                                                    path: eu.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(Y.Hw.guildId(), ':inviteCode?'),
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
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
