n.d(t, {
    Z: function () {
        return ek;
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
    E = n(481060),
    h = n(711237),
    m = n(532835),
    I = n(347469),
    g = n(290297),
    p = n(279240),
    T = n(765717),
    S = n(358221),
    f = n(823748),
    C = n(626421),
    N = n(963202),
    A = n(118379),
    v = n(652515),
    L = n(544978),
    Z = n(540059),
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
    X = n(210887),
    J = n(592125),
    $ = n(271383),
    ee = n(430824),
    et = n(944486),
    en = n(933429),
    ei = n(823379),
    ea = n(709054),
    es = n(374005),
    er = n(409292),
    el = n(316173),
    eo = n(256638),
    ec = n(663701),
    ed = n(425369),
    eu = n(715702),
    e_ = n(981631),
    eE = n(176505),
    eh = n(290511),
    em = n(530921);
let eI = 'resizable-sidebar-width',
    eg = () =>
        (0, i.jsx)('div', {
            className: em.loader,
            children: (0, i.jsx)(E.Spinner, {})
        }),
    ep = (0, c.Un)({
        createPromise: () => n.e('68614').then(n.bind(n, 650788)),
        webpackId: 650788,
        name: 'GuildShopPage',
        renderLoader: eg
    }),
    eT = (0, c.Un)({
        createPromise: () => n.e('44798').then(n.bind(n, 998420)),
        webpackId: 998420,
        name: 'GuildMemberApplicationReview',
        renderLoader: eg
    }),
    eS = (0, c.Un)({
        createPromise: () => n.e('60493').then(n.bind(n, 231588)),
        webpackId: 231588,
        name: 'GuildHomePage',
        renderLoader: eg
    }),
    ef = (0, c.Un)({
        createPromise: () => Promise.all([n.e('85552'), n.e('44400')]).then(n.bind(n, 545918)),
        webpackId: 545918,
        name: 'MemberSafetyPage',
        renderLoader: eg
    }),
    eC = (0, c.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('44156'), n.e('58227'), n.e('38359'), n.e('31072')]).then(n.bind(n, 603072)),
        webpackId: 603072,
        name: 'ChannelsAndRolesPage',
        renderLoader: eg
    }),
    eN = (0, c.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('44156'), n.e('19878'), n.e('38359'), n.e('74277')]).then(n.bind(n, 599263)),
        webpackId: 599263,
        name: 'GuildOnboardingPage',
        renderLoader: eg
    }),
    eA = (e) => {
        let { match: t } = e,
            n = (0, u.e7)([J.Z, et.Z], () => {
                let e = et.Z.getChannelId();
                return J.Z.getChannel(e);
            }),
            { guildId: a, channelId: s, messageId: r } = t.params,
            l = (0, u.e7)([ee.Z], () => ee.Z.getGuild(a)),
            o = (0, u.e7)([$.ZP], () => (null == a ? null : $.ZP.getSelfMember(a))),
            c = (0, u.e7)([B.Z], () => {
                if (null == a) return;
                let e = B.Z.getData(a);
                if ((null == e ? void 0 : e.type) === H.z.SERVER_SHOP)
                    switch (e.initialTab) {
                        case 'role_subscriptions':
                            return L.y.GUILD_ROLE_SUBSCRIPTIONS;
                        case 'guild_products':
                            return L.y.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            d = (0, v.C4)(a, 'channel_renderer');
        if (null != a && null != s && (0, eE.AB)(s))
            switch (s) {
                case eE.oC.ROLE_SUBSCRIPTIONS:
                    return d
                        ? (0, i.jsx)(ep, {
                              guildId: a,
                              initialTab: L.y.GUILD_ROLE_SUBSCRIPTIONS
                          })
                        : (0, i.jsx)(U.Z, { guildId: a });
                case eE.oC.GUILD_SHOP:
                    return (0, i.jsx)(ep, {
                        guildId: a,
                        productId: r,
                        initialTab: c
                    });
                case eE.oC.MEMBER_APPLICATIONS:
                    return (0, i.jsx)(eT, { guildId: a });
                case eE.oC.GUILD_HOME:
                    return (0, i.jsx)(eS, { guildId: a });
                case eE.oC.CHANNEL_BROWSER:
                    return (0, i.jsx)(eC, {
                        guildId: a,
                        selectedSection: eh.l7.BROWSE
                    });
                case eE.oC.GUILD_ONBOARDING:
                    return (0, i.jsx)(eN, { guildId: a });
                case eE.oC.CUSTOMIZE_COMMUNITY:
                    return (0, i.jsx)(eC, {
                        guildId: a,
                        selectedSection: eh.l7.CUSTOMIZE
                    });
                case eE.oC.MEMBER_SAFETY:
                    return (0, i.jsx)(ef, { guildId: a });
                default:
                    (0, ei.vE)(s);
            }
        if ((0, y.p3)(l, o))
            return (0, i.jsx)(j.Z, {
                guildId: a,
                channelId: s
            });
        if ((null == n ? void 0 : n.type) === e_.d4z.GUILD_STORE) {
            let e = ea.default.cast(t.params.messageId);
            return (0, i.jsx)(
                er.Z,
                {
                    channel: n,
                    inputSkuId: e
                },
                n.id
            );
        }
        return (0, i.jsx)(f.Z, {});
    },
    ev = a.memo(function () {
        let { guildId: e, channelId: t } = (0, q.Z)(),
            n = (0, u.e7)([et.Z], () => (null != t ? t : et.Z.getChannelId(e))),
            a = (0, x.v)({ location: 'sidebar' });
        if (
            (function () {
                return window.location.pathname.startsWith(e_.Z5c.GLOBAL_DISCOVERY);
            })() ||
            (function () {
                return window.location.pathname.startsWith(e_.Z5c.GUILD_DISCOVERY) || (0, K.OG)();
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
            : (0, i.jsx)(ec.Z, {});
    }),
    eL = (e) => (0, i.jsx)(eA, { ...e }),
    eZ = (e) => {
        let t = null != e && e.length > 0 && e.startsWith('?') ? e.split('?')[1] : null;
        return (0, x.a)({ location: 'sidebar' }) ? (0, i.jsx)(b.Z, {}) : (0, i.jsx)(R.Z, { searchRoute: t });
    },
    eR = (e) => {
        let { match: t } = e;
        return (0, N.rx)('game_discovery_entry_point') ? (0, i.jsx)(b.V, { gameId: t.params.gameId }) : (0, i.jsx)(l.l_, { to: e_.Z5c.GLOBAL_DISCOVERY });
    },
    eO = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(D.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    ex = (e) => {
        let { match: t } = e;
        return null != t.params.guildId
            ? (0, i.jsx)(k.Z, {
                  guildId: t.params.guildId,
                  inviteCode: t.params.inviteCode
              })
            : null;
    },
    eb = () => (0, i.jsx)(ed.Z, {}),
    eP = () => (0, i.jsx)(eu.Z, {}),
    eM = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t) {
            return (0, i.jsx)(A.Z, {
                isFullScreen: e,
                ...t
            });
        };
    },
    eD = (e) => (0, i.jsx)(p.Z, { ...e }),
    ey = () => (0, i.jsx)(z.Z, {}),
    ej = () => (0, i.jsx)(V.Z, {}),
    eU = () => (0, i.jsx)(W.Z, {}),
    eG = (e) => {
        let { match: t } = e;
        switch (t.params.feature) {
            case 'addFriends':
                return (0, i.jsx)(z.Z, { initialSection: e_.pJs.ADD_FRIEND });
            case 'pendingFriends':
                return (0, i.jsx)(z.Z, { initialSection: e_.pJs.PENDING });
            case 'sessionManagement':
                return (0, i.jsx)(l.l_, { to: e_.Z5c.SETTINGS('sessions') });
            case 'connections':
                return (0, i.jsx)(l.l_, {
                    to: {
                        pathname: e_.Z5c.SETTINGS('connections'),
                        search: e.location.search
                    }
                });
            case 'family-center':
                return (0, i.jsx)(l.l_, { to: e_.Z5c.FAMILY_CENTER });
            case 'account-standing':
                return (0, i.jsx)(l.l_, { to: e_.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
            case 'authorized-apps':
                return (0, i.jsx)(l.l_, { to: e_.Z5c.SETTINGS('authorized-apps') });
            case 'open-shop':
                return (0, i.jsx)(l.l_, { to: e_.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
            default:
                return (0, i.jsx)(l.l_, { to: e_.Z5c.ME });
        }
    };
function ew(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: s } = e;
    (0, m.t)(!0);
    let l = 'app view user trigger debugging';
    h.R6.useExperiment({ location: l }, { autoTrackExposure: !1 }), h.R6.trackExposure({ location: l });
    let o = (0, u.e7)([S.Z], () => S.Z.isFullscreenInContext()),
        c = (0, Z.Q)('ChannelSidebar');
    a.useLayoutEffect(() => {
        if (c) {
            var e;
            let t = parseInt(null !== (e = _.K.get(eI)) && void 0 !== e ? e : '');
            Number.isNaN(t) && (t = 268), (t = Math.min(Math.max(t, 240), 420)), document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(t, 'px')), document.body.style.setProperty('--custom-app-sidebar-target-width', ''.concat(t + 72, 'px'));
        }
    }, [c]);
    let g = a.useRef(null),
        p = a.useCallback((e) => {
            document.body.style.setProperty('--custom-guild-sidebar-width', ''.concat(e, 'px')), document.body.style.setProperty('--custom-app-sidebar-target-width', ''.concat(e + 72, 'px'));
        }, []),
        T = a.useCallback(() => {
            document.body.classList.add(em.dragging);
        }, []),
        f = a.useCallback((e) => {
            document.body.classList.remove(em.dragging), _.K.set(eI, e);
        }, []),
        C = (0, I.Z)({
            minDimension: 240,
            maxDimension: 420,
            resizableDomNodeRef: g,
            onElementResize: p,
            onElementResizeStart: T,
            onElementResizeEnd: f,
            orientation: I.y.HORIZONTAL_RIGHT,
            throttleDuration: 0
        }),
        N = a.useCallback(
            (e) => {
                e.stopPropagation(), C(e);
            },
            [C]
        );
    return s
        ? null
        : (0, i.jsx)(E.ThemeProvider, {
              theme: n,
              children: (e) =>
                  (0, i.jsxs)('div', {
                      ref: c ? g : void 0,
                      className: r()(em.sidebar, e, {
                          [em.hasNotice]: t,
                          [em.fullWidth]: d.tq,
                          [em.hidden]: o
                      }),
                      children: [
                          (0, i.jsx)(ev, {}),
                          c
                              ? (0, i.jsx)('div', {
                                    className: em.sidebarResizeHandle,
                                    onMouseDownCapture: N
                                })
                              : null,
                          (0, i.jsx)(es.b, {}),
                          (0, i.jsx)(el.Z, {})
                      ]
                  })
          });
}
function ek() {
    var e;
    let t = (0, u.e7)([en.Z], () => en.Z.hasNotice()),
        n = (0, u.e7)([X.Z], () => (X.Z.darkSidebar ? e_.BRd.DARK : void 0)),
        s = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(e_.Z5c.GUILD_MEMBER_VERIFICATION('')));
            return (
                a.useEffect(
                    () =>
                        Q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(e_.Z5c.GUILD_MEMBER_VERIFICATION('')));
                        }),
                    []
                ),
                e
            );
        })(),
        r = (function () {
            let [e, t] = a.useState(() => window.location.pathname.startsWith(e_.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
            return (
                a.useEffect(
                    () =>
                        Q.Z.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(e_.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
                        }),
                    []
                ),
                e
            );
        })(),
        c = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, e_.Z5c.GUILD_BOOSTING_MARKETING(':guildId'))) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        _ = (function () {
            var e;
            let t = (0, l.TH)();
            return (null === (e = (0, l.LX)(t.pathname, e_.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
        })(),
        E = (0, u.e7)([Y.Z], () => Y.Z.getIsOpen()),
        h = (0, l.$B)([e_.Z5c.CHANNEL(e_.ME, ':channelId'), e_.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')]),
        m = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === eE.oC.GUILD_ONBOARDING,
        I = a.useCallback(() => F.Z.openSidebar(), []);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: em.container,
            children: [
                E &&
                    !_ &&
                    (0, i.jsx)(w.Z, {
                        className: em.guilds,
                        themeOverride: n
                    }),
                (0, i.jsx)(M.Z.Provider, {
                    value: (null == h ? void 0 : h.params.guildId) === e_.ME ? void 0 : null == h ? void 0 : h.params.guildId,
                    children: (0, i.jsxs)('div', {
                        className: em.base,
                        children: [
                            d.tq ? null : (0, i.jsx)(eo.Z, {}),
                            (0, i.jsxs)('div', {
                                className: em.content,
                                children: [
                                    (0, i.jsx)(C.Z, {}),
                                    (0, i.jsx)(ew, {
                                        hasNotice: t,
                                        sidebarTheme: n,
                                        hideSidebar: s || r || c || _ || m || !E
                                    }),
                                    (0, i.jsx)(g.Z.Provider, {
                                        value: I,
                                        children: (0, i.jsxs)(l.rs, {
                                            children: [
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, i.jsx)(l.l_, { to: e_.Z5c.ME })
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.ACTIVITY_DETAILS(':applicationId'),
                                                    render: eD,
                                                    impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { application_id: t.params.applicationId };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.APPLICATION_LIBRARY,
                                                    render: eb,
                                                    impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.APPLICATION_STORE,
                                                    render: eP,
                                                    impressionName: o.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                                                    render: eM(!0),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.COLLECTIBLES_SHOP,
                                                    render: eM(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                                                    render: eM(!1),
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.MESSAGE_REQUESTS,
                                                    render: ej,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.FAMILY_CENTER,
                                                    render: eU,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.ME,
                                                    exact: !0,
                                                    render: ey,
                                                    impressionName: o.ImpressionNames.FRIENDS,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: [e_.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'), e_.Z5c.CHANNEL(e_.ME, ':channelId'), e_.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')],
                                                    render: eL,
                                                    impressionName: o.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.DISCOVERY_GUILD_GAME_RESULTS(':gameId'),
                                                    render: eR,
                                                    impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.GLOBAL_DISCOVERY,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eZ(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eZ(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.QUEST_HOME,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eZ(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.GUILD_DISCOVERY,
                                                    render: (e) => {
                                                        let { location: t } = e;
                                                        return eZ(t.search);
                                                    },
                                                    impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'),
                                                    render: eO,
                                                    impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'),
                                                    render: ex,
                                                    impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                                                    impressionProperties: (e) => {
                                                        let { computedMatch: t } = e;
                                                        return { has_invite: void 0 !== t.params.inviteCode };
                                                    }
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    path: e_.Z5c.FEATURE(':feature'),
                                                    exact: !0,
                                                    render: eG,
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
