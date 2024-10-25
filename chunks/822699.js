n.r(t), n(47120);
var s = n(200651),
    r = n(192379),
    i = n(593473),
    a = n(990547),
    l = n(873546),
    o = n(442837),
    c = n(570140),
    u = n(893776),
    d = n(533307),
    _ = n(447543),
    h = n(126399),
    E = n(521379),
    g = n(765717),
    p = n(267394),
    m = n(761305),
    f = n(698177),
    I = n(353926),
    N = n(409059),
    T = n(962220),
    A = n(637776),
    x = n(264229),
    C = n(677760),
    R = n(893607),
    S = n(314897),
    O = n(82142),
    Z = n(701190),
    v = n(626135),
    b = n(81063),
    L = n(449934),
    M = n(768581),
    D = n(625054),
    P = n(645499),
    j = n(320830),
    U = n(721751),
    y = n(718182),
    G = n(223543),
    B = n(73906),
    k = n(299852),
    F = n(39514),
    w = n(236446),
    V = n(9325),
    H = n(344295),
    z = n(781428),
    K = n(209411),
    W = n(649156),
    Y = n(423527),
    q = n(424044),
    J = n(479495),
    X = n(881317),
    Q = n(886806),
    $ = n(981631),
    ee = n(188785),
    et = n(245335);
n(179645);
o.ZP.initialize();
let en = (0, j.Z)(z.Z),
    es = (0, j.Z)(K.Z),
    er = (0, j.Z)(H.Z),
    ei = (0, j.Z)(w.Z),
    ea = (0, j.Z)(F.Z),
    el = (0, j.Z)(C.Z),
    eo = (0, j.Z)(Y.Z),
    ec = (0, j.Z)(y.Z),
    eu = (0, j.Z)(G.Z),
    ed = (0, j.Z)(Q.Z),
    e_ = (0, j.Z)(f.Z),
    eh = (0, j.Z)(J.Z),
    eE = (0, j.Z)(k.Z),
    eg = (0, j.Z)(m.Z),
    ep = (0, j.Z)(A.Z),
    em = (0, j.Z)(B.Z),
    ef = (0, j.Z)(W.Z),
    eI = (0, j.Z)(X.Z),
    eN = (0, j.Z)(q.Z),
    eT = (0, j.Z)(E.Z);
class eA extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: s, location: r } = e,
            { backgroundId: a } = t,
            l = null !== (n = (0, i.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
        (null == l || '' === l || !(0, P.B)(l) || l.startsWith($.Z5c.ME)) && (l = null);
        let o = null;
        if (null == s) o = (0, L.gK)(l);
        else if ((null == s ? void 0 : s.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = s;
            null != t
                ? null != a && (o = (0, b.getAssetImage)(t.id, a, 1024))
                : null != e &&
                  'string' == typeof e.splash &&
                  (o = M.ZP.getGuildSplashURL({
                      id: e.id,
                      splash: e.splash
                  }));
        }
        return {
            redirectTo: l,
            splash: o
        };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && u.Z.getExperiments(!0),
            v.default.track(
                $.rMx.INVITE_OPENED,
                {
                    invite_code: (0, x.jX)(e),
                    load_time: D.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            )),
            (t || ee.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            h.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !ee.a && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        h.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === $.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, b.fetchAssetIds)(t.id, ['embedded_splash']).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await _.Z.resolveInvite(e, $.Usc.INVITE);
        null != t && ((0, p.A)(t), null != t.type && et.xf.has(t.type) && _.Z.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        if (null != e)
            v.default.track(
                $.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: D.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            ),
                T.Z.resolveGuildTemplate(e),
                T.Z.openNativeAppModal(e);
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        if (null != e)
            d.Z.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && c.Z.wait(() => d.Z.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, s.jsxs)(U.Z, {
            splash: e,
            children: [
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.LOGIN_HANDOFF,
                    render: (e) =>
                        (0, s.jsx)(es, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, s.jsx)(g.Z, {
                    impressionName: a.ImpressionNames.USER_LOGIN,
                    path: $.Z5c.LOGIN,
                    render: (e) =>
                        (0, s.jsx)(en, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, s.jsx)(g.Z, {
                    impressionName: a.ImpressionNames.USER_REGISTRATION,
                    path: $.Z5c.REGISTER,
                    render: (e) =>
                        ee.a
                            ? (0, s.jsx)(er, {
                                  ...e,
                                  redirectTo: t,
                                  inviteKey: n
                              })
                            : (0, s.jsx)(eo, {
                                  ...e,
                                  redirectTo: t
                              })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.GIFT_CODE_LOGIN(':giftCode'),
                    render: (e) =>
                        (0, s.jsx)(ea, {
                            login: !0,
                            ...e
                        })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.GIFT_CODE(':giftCode'),
                    render: (e) => (0, s.jsx)(ea, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: [$.Z5c.INVITE_LOGIN(':inviteCode'), $.Z5c.INVITE(':inviteCode')],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n
                                },
                                location: r,
                                transitionTo: i
                            } = e,
                            a = (0, x.mb)(t, r.search);
                        return l.tq || l.Em
                            ? (0, s.jsx)(
                                  el,
                                  {
                                      inviteKey: a,
                                      transitionTo: i
                                  },
                                  a
                              )
                            : (0, s.jsx)(er, {
                                  inviteKey: a,
                                  location: r,
                                  transitionTo: i,
                                  login: n === $.Z5c.INVITE_LOGIN(':inviteCode')
                              });
                    }
                }),
                (0, s.jsx)(g.Z, {
                    path: [$.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), $.Z5c.GUILD_TEMPLATE(':guildTemplateCode')],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n
                            },
                            location: r,
                            transitionTo: i
                        } = e;
                        return l.tq || l.Em
                            ? (0, s.jsx)(V.Z, { code: t }, t)
                            : (0, s.jsx)(ei, {
                                  code: t,
                                  location: r,
                                  transitionTo: i,
                                  login: n === $.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')
                              });
                    }
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.VERIFY,
                    render: (e) => (0, s.jsx)(ed, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, s.jsx)(ep, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, s.jsx)(e_, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, s.jsx)(eE, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, s.jsx)(eg, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, s.jsx)(ec, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.REJECT_IP,
                    render: (e) =>
                        (0, s.jsx)(eh, {
                            source: $.Z5c.REJECT_IP,
                            ...e
                        })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.REJECT_MFA,
                    render: (e) =>
                        (0, s.jsx)(eh, {
                            source: $.Z5c.REJECT_MFA,
                            ...e
                        })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, s.jsx)(eu, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.RESET,
                    render: (e) =>
                        (0, s.jsx)(eh, {
                            source: $.Z5c.RESET,
                            ...e
                        })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, s.jsx)(ef, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.CHANNEL(R.Hw.guildId(), R.Hw.channelId({ optional: !0 }), ':messageId?'),
                    render: (e) => (0, s.jsx)(em, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.REPORT,
                    render: (e) => (0, s.jsx)(eI, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, s.jsx)(eN, { ...e })
                }),
                (0, s.jsx)(g.Z, {
                    path: $.Z5c.ACCOUNT_REVERT(':token'),
                    render: (e) => (0, s.jsx)(eT, { ...e })
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, s;
        super(...e),
            (t = this),
            (s = {
                splash: null,
                redirectTo: null,
                backgroundId: null
            }),
            (n = 'state') in t
                ? Object.defineProperty(t, n, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = s);
    }
}
t.default = o.ZP.connectStores([S.default, Z.Z, O.Z, I.Z, N.Z], (e) => {
    var t, n, s;
    let { match: r, location: i } = e,
        a = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode,
        l = ee.a ? ee.Y : void 0,
        o = null != a ? (0, x.mb)(a, i.search) : l,
        c = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode,
        u = null == r ? void 0 : null === (s = r.params) || void 0 === s ? void 0 : s.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: S.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? O.Z.get(c) : null,
        invite: null != o ? Z.Z.getInvite(o) : null,
        guildTemplate: null != u ? N.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: I.Z.hasLoadedExperiments
    };
})(eA);
