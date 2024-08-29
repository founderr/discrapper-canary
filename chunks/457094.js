n.r(t), n(47120);
var i = n(735250),
    a = n(470079),
    s = n(593473),
    r = n(266067),
    l = n(442837),
    o = n(481060),
    c = n(893776),
    d = n(943094),
    u = n(749210),
    _ = n(287734),
    E = n(401430),
    h = n(230711),
    m = n(607070),
    I = n(627845),
    g = n(185666),
    p = n(503737),
    T = n(513202),
    f = n(318891),
    S = n(687751),
    C = n(912471),
    N = n(100527),
    A = n(838134),
    v = n(77987),
    L = n(679891),
    Z = n(491575),
    O = n(954709),
    R = n(314533),
    x = n(9029),
    b = n(935347),
    P = n(560067),
    M = n(823169),
    D = n(620360),
    y = n(96051),
    j = n(750995),
    U = n(696287),
    G = n(408026),
    k = n(763916),
    w = n(306721),
    B = n(531551),
    H = n(38618),
    V = n(972830),
    F = n(981283),
    Y = n(584233),
    W = n(15274),
    z = n(434404),
    K = n(543842),
    q = n(879064),
    Q = n(315964),
    X = n(495784),
    J = n(975533),
    $ = n(377400),
    ee = n(285865),
    et = n(659971),
    en = n(929809),
    ei = n(122333),
    ea = n(960275),
    es = n(818765),
    er = n(678492),
    el = n(269089),
    eo = n(380570),
    ec = n(837689),
    ed = n(367207),
    eu = n(489977),
    e_ = n(329557),
    eE = n(304445),
    eh = n(893607),
    em = n(703656),
    eI = n(298969),
    eg = n(719256),
    ep = n(6025),
    eT = n(897473),
    ef = n(377368),
    eS = n(262702),
    eC = n(639033),
    eN = n(479313),
    eA = n(911560),
    ev = n(703016),
    eL = n(171368),
    eZ = n(429974),
    eO = n(332754),
    eR = n(507468),
    ex = n(357269),
    eb = n(282506),
    eP = n(444961),
    eM = n(314897),
    eD = n(433355),
    ey = n(592125),
    ej = n(896797),
    eU = n(430824),
    eG = n(819640),
    ek = n(283595),
    ew = n(944486),
    eB = n(914010),
    eH = n(695103),
    eV = n(241890),
    eF = n(897607),
    eY = n(417363),
    eW = n(900974),
    ez = n(358085),
    eK = n(998502),
    eq = n(346329),
    eQ = n(981631),
    eX = n(176505),
    eJ = n(701476);
function e$(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(455173), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073), n(628566);
let e0 = !1;
(0, C.DL)(),
    l.ZP.initialize(),
    eI.Z.loadServer(),
    ez.isPlatformEmbedded &&
        (eK.ZP.on('USER_SETTINGS_OPEN', () => {
            !eG.Z.getLayers().includes(eQ.S9g.USER_SETTINGS) && h.Z.open(eQ.oAB.ACCOUNT);
        }),
        eK.ZP.on('LAUNCH_APPLICATION', (e, t) => {
            let n = ek.Z.getActiveLibraryApplication(t);
            eq.playApplication(t, n, {
                analyticsParams: {
                    location: {
                        page: eQ.ZY5.DIRECT,
                        object: eQ.qAy.WEB_URL
                    }
                }
            });
        }));
let e1 = l.ZP.connectStores([H.Z, ej.Z, eM.default], () => ({
        isConnected: H.Z.isConnected(),
        defaultRoute: ej.Z.defaultRoute,
        defaultRouteFallback: ej.Z.fallbackRoute,
        token: eM.default.getToken()
    }))(
        class extends a.Component {
            componentDidMount() {
                let { match: e } = this.props;
                null != e && null != e.params.inviteCode && (0, Y.x)({ code: e.params.inviteCode });
            }
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: a } = this.props;
                if (null == n) return (0, i.jsx)(r.l_, { to: eQ.Z5c.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = e9(t);
                    return null == e || ((e.params.guildId === eQ.ME || null != eU.Z.getGuild(e.params.guildId)) && null != ey.Z.getChannel(e.params.channelId)) ? (0, i.jsx)(r.l_, { to: t }) : (0, i.jsx)(r.l_, { to: a });
                }
                return null;
            }
        }
    ),
    e4 = (0, v.e)(Z.Z, null, { passProps: !1 }),
    e7 = (0, v.e)(A.default, null, { passProps: !1 }),
    e2 = [eQ.Z5c.GUILD_BOOSTING_MARKETING(':guildId'), ...Array.from(eX.Vg).map((e) => eQ.Z5c.CHANNEL(':guildId', e))];
function e5(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: a = null } = e.params;
    return {
        guildId: null != t ? t : eQ.ME,
        channelId: n,
        messageId: i,
        threadId: a
    };
}
let e3 = [
    {
        path: [eQ.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
        render(e) {
            let { match: t } = e;
            return (0, i.jsx)(e1, { match: t });
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.APP],
        render: () => (0, i.jsx)(e1, {}),
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.USERS(':id')],
        render: function (e) {
            let { match: t, location: n } = e,
                { friend_token: a } = (0, s.parse)(n.search),
                { id: l } = t.params;
            return (
                (0, V.h)(() =>
                    (0, eL.openUserProfileModal)({
                        userId: l,
                        guildId: eQ.ME,
                        friendToken: a,
                        sourceAnalyticsLocations: [N.Z.URI_SCHEME],
                        analyticsLocation: { section: eQ.jXE.DIRECT_ROUTE_ACCESS }
                    })
                ),
                (0, i.jsx)(r.l_, { to: ej.Z.defaultRoute })
            );
        }
    },
    {
        path: [eQ.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
        render: function (e) {
            let { match: t } = e,
                { gameId: n, action: a } = t.params;
            return (
                eY.Z.whenInitialized(() => {
                    ek.Z.whenInitialized(() => {
                        switch (a) {
                            case 'launch': {
                                let e = ek.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                eq.playApplication(e.id, e, {
                                    analyticsParams: {
                                        location: {
                                            page: eQ.ZY5.DIRECT,
                                            object: eQ.qAy.WEB_URL
                                        }
                                    }
                                });
                                break;
                            }
                            case 'test-mode':
                                eH.Z.whenInitialized(() => E.Wt(n));
                                break;
                            case 'uninstall': {
                                let e = ek.Z.getActiveLibraryApplication(n);
                                if (null == e) return;
                                (0, d.W)(e.id, e.branchId, eQ.Sbl.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, i.jsx)(r.l_, { to: eQ.Z5c.APPLICATION_LIBRARY })
            );
        }
    },
    {
        path: [eQ.Z5c.GUILD_CREATE],
        render: function () {
            return (0, V.h)(() => P.Z.openCreateGuildModal({ location: 'External link' })), (0, i.jsx)(r.l_, { to: ej.Z.defaultRoute });
        }
    },
    {
        path: [eQ.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { section: n, subsection: a } = t.params,
                l = (0, s.parse)(location.search).feature;
            return (
                (0, V.h)(() =>
                    q.v({
                        section: (0, K.Z)(eQ.pNK, n),
                        subsection: (0, K.Z)(eQ.KsC, a),
                        feature: l
                    })
                ),
                (0, i.jsx)(r.l_, { to: ej.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.SETTINGS(':section', ':subsection?')],
        render: function (e) {
            let { location: t } = e,
                n = (0, ex.default)(t.pathname);
            return (
                null != n &&
                    (0, V.h)(() =>
                        h.Z.open(n.section, n.subsection, {
                            openWithoutBackstack: !1,
                            impressionSource: n.source
                        })
                    ),
                (0, i.jsx)(r.l_, { to: ej.Z.defaultRoute })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(':guildId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: a } = t.params;
            return (
                (0, V.h)(() => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('5863'), n.e('48324')]).then(n.bind(n, 751212));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: a
                            });
                    });
                }),
                (0, i.jsx)(r.l_, { to: eQ.Z5c.CHANNEL(a) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (0, V.h)(() => h.Z.open(eQ.oAB.INVENTORY)), (0, i.jsx)(r.l_, { to: ej.Z.defaultRoute });
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.WELCOME(':guildId?', ':channelId?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: a } = t.params;
            (0, en.c)(eJ.M5.MARKETING_UNCLAIMED);
            let s = eQ.Z5c.CHANNEL(n, a);
            return (0, i.jsx)(r.l_, { to: s });
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.GUILD_EVENT_DETAILS(':guildId?', ':guildEventId')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: a } = t.params;
            return (
                (0, V.h)(() => {
                    (0, W.bO)({ eventId: a });
                }),
                (0, i.jsx)(r.l_, { to: eQ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0
    },
    {
        path: [eQ.Z5c.GUILD_SETTINGS(':guildId', ':section?', ':subsection?')],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: a, subsection: s } = t.params;
            return (
                (0, V.h)(() => {
                    z.Z.open(n, (0, K.Z)(eQ.pNK, a), void 0, (0, K.Z)(eQ.KsC, s));
                }),
                (0, i.jsx)(r.l_, { to: eQ.Z5c.CHANNEL(n) })
            );
        },
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eQ.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'), eQ.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?'), eQ.Z5c.ACTIVITY, eQ.Z5c.ACTIVITIES, eQ.Z5c.ACTIVITIES_HAPPENING_NOW, eQ.Z5c.ACTIVITY_DETAILS(':applicationId'), eQ.Z5c.APPLICATION_LIBRARY, eQ.Z5c.APPLICATION_STORE, eQ.Z5c.MESSAGE_REQUESTS, eQ.Z5c.COLLECTIBLES_SHOP, eQ.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, eQ.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'), eQ.Z5c.GUILD_DISCOVERY, eQ.Z5c.QUEST_HOME, eQ.Z5c.GLOBAL_DISCOVERY, eQ.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'), eQ.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'), eQ.Z5c.GUILD_BOOSTING_MARKETING(':guildId'), eQ.Z5c.FEATURE(':feature'), eQ.Z5c.FAMILY_CENTER],
        render: e4,
        isSessionRequired: !0,
        isChatRoute: !0
    },
    {
        path: [eQ.Z5c.APPLICATION_DIRECTORY],
        render: e7,
        isSessionRequired: !0
    }
];
function e9(e) {
    for (let { path: t, isChatRoute: n } of e3) {
        if (!n) continue;
        let i = (0, r.LX)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function e6(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!H.Z.isConnected()) return;
    let { location: a } = (0, em.s1)();
    if (a.pathname === i) null == ey.Z.getChannel(t) ? (0, em.dL)(eQ.Z5c.CHANNEL(n)) : (0, em.dL)(i);
}
class e8 extends a.PureComponent {
    componentDidMount() {
        eK.ZP.setZoomFactor(m.Z.zoom),
            eI.Z.init(),
            L.Z.initialize(),
            eo.Z.initialize(),
            G.Z.initialize(),
            eP.Z.initialize(),
            k.Z.initialize(),
            ed.Z.initialize(),
            J.Z.initialize(),
            I.Z.init(),
            B.Z.init(),
            w.Z.init(),
            ei.Z.initialize(),
            S.Z.initialize(),
            j.Z.initialize(),
            eu.Z.initialize(),
            f.ZP.initialize(),
            eb.Z.initialize(),
            el.Z.initialize(),
            T.Z.initialize(),
            F.Z.init(),
            Q.Z.init(),
            eF.Z.init(),
            eW.Z.init(),
            p.Z.initialize(),
            ev.Z.init(),
            eV.Z.init(),
            eO.Z.init(),
            eS.Z.initialize(),
            eC.Z.initialize(),
            eZ.Z.initialize(),
            eR.Z.init(),
            y.Z.initialize(),
            g.Z.initialize(),
            eg.Z.initialize(),
            ef.Z.initialize(),
            es.Z.initialize(),
            ea.Z.initialize(),
            er.Z.initialize(),
            R.Z.initialize(),
            x.Z.initialize(),
            X.Z.init({
                hasModalOpen: o.hasAnyModalOpen,
                openModal: () =>
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            }),
            D.Z.init(),
            $.Z.initialize(),
            e_.Z.initialize(),
            ec.Z.initialize(),
            M.Z.initialize(),
            O.Z.initialize(),
            (this.rewriterUnlisten = eE.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = eE.Z.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        eP.Z.terminate(), ed.Z.terminate(), eo.Z.terminate(), L.Z.terminate(), f.ZP.terminate(), eb.Z.terminate(), T.Z.terminate(), eu.Z.terminate(), el.Z.terminate(), eZ.Z.terminate(), p.Z.terminate(), y.Z.terminate(), $.Z.terminate(), g.Z.terminate(), e_.Z.terminate(), eg.Z.terminate(), ef.Z.terminate(), es.Z.terminate(), ea.Z.terminate(), er.Z.terminate(), R.Z.terminate(), x.Z.terminate(), ec.Z.terminate(), M.Z.terminate(), U.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (H.Z.isConnected() || H.Z.isTryingToConnect()) return;
            let t = eM.default.getToken();
            if (null != t)
                null !=
                    (function (e) {
                        for (let { path: t, isSessionRequired: n } of e3) {
                            if (!n) continue;
                            let i = (0, r.LX)(e, { path: t });
                            if (null != i) return i;
                        }
                        return null;
                    })(e) && c.Z.startSession(t);
        })(t),
            !(function (e, t) {
                let n = e9(e);
                if (null == n) return;
                let { guildId: i, channelId: a, messageId: l, threadId: o } = e5(n),
                    c = (0, eh.S)(i),
                    d = (0, eh.c)(a),
                    E = (0, eh.c)(o),
                    h = eB.Z.getGuildId(),
                    m = h !== i;
                if ((c && m && u.Z.selectGuild(i), c && d)) {
                    let n = ew.Z.getChannelId(h),
                        r = n !== a;
                    if (!e0 || m || r || null != l) {
                        (e0 = !0),
                            _.default.selectChannel({
                                guildId: i,
                                channelId: a,
                                messageId: l
                            });
                        let { summaryId: e } = (0, s.parse)(t);
                        null != e && eN.ZP.setSelectedSummary(a, e);
                    }
                    if (null != o && E) {
                        let e = eD.ZP.getCurrentSidebarChannelId(n) !== o,
                            t = null != eD.ZP.getGuildSidebarState(i);
                        if (null != a && null != o && e) {
                            if (t) (0, em.dL)(eQ.Z5c.CHANNEL(i, o, l));
                            else {
                                let e = { type: eT.Ff.THREAD };
                                null != l && (e.initialMessageId = l),
                                    ep.Z.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: a,
                                        channelId: o,
                                        details: e
                                    });
                            }
                        }
                    } else null != a && !r && ep.Z.closeChannelSidebar(a);
                    let c = et.Z.getIsOpen();
                    if (a === eX.oC.ROLE_SUBSCRIPTIONS) ee.Z.closeSidebar();
                    else if (m && c) {
                        let t = null == h && i === eQ.ME,
                            n = e === eQ.Z5c.GUILD_DISCOVERY;
                        t || n ? ee.Z.closeSidebar() : ee.Z.openSidebar();
                    } else ((r && c) || (!m && !r)) && ee.Z.closeSidebar();
                } else {
                    var I;
                    if (
                        ((I = e),
                        !e2.some((e) => {
                            var t;
                            return (null === (t = (0, r.LX)(I, e)) || void 0 === t ? void 0 : t.isExact) === !0;
                        }))
                    )
                        (0, em.dL)(ej.Z.fallbackRoute);
                }
            })(t, n);
    }
    ensureChannelMatchesGuild(e) {
        if (!H.Z.isConnected()) return null;
        let { pathname: t } = e,
            n = e9(t);
        if (null == n) return null;
        let { guildId: i, channelId: a, threadId: s } = e5(n),
            r = (0, eh.S)(i) && i !== eQ.ME && i !== eQ.I_8;
        if (null != a && (0, eh.c)(a) && !(0, eX.AB)(a) && r) {
            let n = ey.Z.getChannel(a);
            if (null == n)
                eA.Z.loadThread(a).then(() =>
                    e6({
                        channelId: a,
                        guildId: i,
                        pathname: t
                    })
                );
            else if (n.guild_id !== i)
                return {
                    path: eQ.Z5c.CHANNEL(i),
                    state: e.state
                };
            if (null != s) {
                if (!((0, eh.c)(s) && !(0, eX.AB)(a))) return null;
                let n = ey.Z.getChannel(s);
                if (null == n)
                    eA.Z.loadThread(s).then(() =>
                        e6({
                            channelId: s,
                            guildId: i,
                            pathname: t
                        })
                    );
                else if ((null == n ? void 0 : n.parent_id) !== a)
                    return (
                        ep.Z.closeChannelSidebar(a),
                        {
                            path: eQ.Z5c.CHANNEL(i, a),
                            state: e.state
                        }
                    );
            }
        }
        return null;
    }
    render() {
        return (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsxs)(r.rs, {
                    children: [
                        (0, i.jsx)(r.l_, {
                            exact: !0,
                            from: '/channels',
                            to: '/'
                        }),
                        e3.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, i.jsx)(
                                r.AW,
                                {
                                    path: t,
                                    render: n
                                },
                                t[0]
                            );
                        }),
                        (0, i.jsx)(r.l_, { to: '/' })
                    ]
                }),
                (0, i.jsx)(b.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e), e$(this, 'historyUnlisten', () => {}), e$(this, 'rewriterUnlisten', () => {});
    }
}
t.default = e8;
