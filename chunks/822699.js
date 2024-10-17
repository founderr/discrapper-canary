n.r(t), n(47120);
var s = n(735250),
    r = n(470079),
    i = n(593473),
    a = n(990547),
    l = n(873546),
    o = n(442837),
    c = n(570140),
    u = n(893776),
    d = n(533307),
    h = n(447543),
    _ = n(126399),
    E = n(765717),
    g = n(267394),
    p = n(761305),
    f = n(698177),
    m = n(353926),
    I = n(409059),
    N = n(962220),
    T = n(637776),
    A = n(264229),
    x = n(677760),
    C = n(893607),
    S = n(314897),
    O = n(82142),
    R = n(701190),
    v = n(626135),
    Z = n(81063),
    b = n(449934),
    D = n(768581),
    L = n(625054),
    M = n(645499),
    P = n(320830),
    j = n(721751),
    y = n(718182),
    G = n(223543),
    B = n(73906),
    U = n(299852),
    k = n(39514),
    F = n(236446),
    w = n(9325),
    H = n(344295),
    V = n(781428),
    z = n(209411),
    K = n(649156),
    W = n(423527),
    Y = n(424044),
    q = n(479495),
    J = n(881317),
    X = n(886806),
    Q = n(981631),
    $ = n(188785),
    ee = n(245335);
n(179645);
o.ZP.initialize();
let et = (0, P.Z)(V.Z),
    en = (0, P.Z)(z.Z),
    es = (0, P.Z)(H.Z),
    er = (0, P.Z)(F.Z),
    ei = (0, P.Z)(k.Z),
    ea = (0, P.Z)(x.Z),
    el = (0, P.Z)(W.Z),
    eo = (0, P.Z)(y.Z),
    ec = (0, P.Z)(G.Z),
    eu = (0, P.Z)(X.Z),
    ed = (0, P.Z)(f.Z),
    eh = (0, P.Z)(q.Z),
    e_ = (0, P.Z)(U.Z),
    eE = (0, P.Z)(p.Z),
    eg = (0, P.Z)(T.Z),
    ep = (0, P.Z)(B.Z),
    ef = (0, P.Z)(K.Z),
    em = (0, P.Z)(J.Z),
    eI = (0, P.Z)(Y.Z);
class eN extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: s, location: r } = e,
            { backgroundId: a } = t,
            l = null !== (n = (0, i.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
        (null == l || '' === l || !(0, M.B)(l) || l.startsWith(Q.Z5c.ME)) && (l = null);
        let o = null;
        if (null == s) o = (0, b.gK)(l);
        else if ((null == s ? void 0 : s.state) === Q.r2o.RESOLVED) {
            let { guild: e, target_application: t } = s;
            null != t
                ? null != a && (o = (0, Z.getAssetImage)(t.id, a, 1024))
                : null != e &&
                  'string' == typeof e.splash &&
                  (o = D.ZP.getGuildSplashURL({
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
                Q.rMx.INVITE_OPENED,
                {
                    invite_code: (0, A.jX)(e),
                    load_time: L.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            )),
            (t || $.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            _.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !$.a && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        _.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === Q.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, Z.fetchAssetIds)(t.id, ['embedded_splash']).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await h.Z.resolveInvite(e, Q.Usc.INVITE);
        null != t && ((0, g.A)(t), null != t.type && ee.xf.has(t.type) && h.Z.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        if (null != e)
            v.default.track(
                Q.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: L.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            ),
                N.Z.resolveGuildTemplate(e),
                N.Z.openNativeAppModal(e);
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
        return (0, s.jsxs)(j.Z, {
            splash: e,
            children: [
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.LOGIN_HANDOFF,
                    render: (e) =>
                        (0, s.jsx)(en, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, s.jsx)(E.Z, {
                    impressionName: a.ImpressionNames.USER_LOGIN,
                    path: Q.Z5c.LOGIN,
                    render: (e) =>
                        (0, s.jsx)(et, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, s.jsx)(E.Z, {
                    impressionName: a.ImpressionNames.USER_REGISTRATION,
                    path: Q.Z5c.REGISTER,
                    render: (e) =>
                        $.a
                            ? (0, s.jsx)(es, {
                                  ...e,
                                  redirectTo: t,
                                  inviteKey: n
                              })
                            : (0, s.jsx)(el, {
                                  ...e,
                                  redirectTo: t
                              })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.GIFT_CODE_LOGIN(':giftCode'),
                    render: (e) =>
                        (0, s.jsx)(ei, {
                            login: !0,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.GIFT_CODE(':giftCode'),
                    render: (e) => (0, s.jsx)(ei, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: [Q.Z5c.INVITE_LOGIN(':inviteCode'), Q.Z5c.INVITE(':inviteCode')],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n
                                },
                                location: r,
                                transitionTo: i
                            } = e,
                            a = (0, A.mb)(t, r.search);
                        return l.tq || l.Em
                            ? (0, s.jsx)(
                                  ea,
                                  {
                                      inviteKey: a,
                                      transitionTo: i
                                  },
                                  a
                              )
                            : (0, s.jsx)(es, {
                                  inviteKey: a,
                                  location: r,
                                  transitionTo: i,
                                  login: n === Q.Z5c.INVITE_LOGIN(':inviteCode')
                              });
                    }
                }),
                (0, s.jsx)(E.Z, {
                    path: [Q.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), Q.Z5c.GUILD_TEMPLATE(':guildTemplateCode')],
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
                            ? (0, s.jsx)(w.Z, { code: t }, t)
                            : (0, s.jsx)(er, {
                                  code: t,
                                  location: r,
                                  transitionTo: i,
                                  login: n === Q.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')
                              });
                    }
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.VERIFY,
                    render: (e) => (0, s.jsx)(eu, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, s.jsx)(eg, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, s.jsx)(ed, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, s.jsx)(e_, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, s.jsx)(eE, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, s.jsx)(eo, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.REJECT_IP,
                    render: (e) =>
                        (0, s.jsx)(eh, {
                            source: Q.Z5c.REJECT_IP,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.REJECT_MFA,
                    render: (e) =>
                        (0, s.jsx)(eh, {
                            source: Q.Z5c.REJECT_MFA,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, s.jsx)(ec, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.RESET,
                    render: (e) =>
                        (0, s.jsx)(eh, {
                            source: Q.Z5c.RESET,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, s.jsx)(ef, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.CHANNEL(C.Hw.guildId(), C.Hw.channelId({ optional: !0 }), ':messageId?'),
                    render: (e) => (0, s.jsx)(ep, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.REPORT,
                    render: (e) => (0, s.jsx)(em, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, s.jsx)(eI, { ...e })
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
t.default = o.ZP.connectStores([S.default, R.Z, O.Z, m.Z, I.Z], (e) => {
    var t, n, s;
    let { match: r, location: i } = e,
        a = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode,
        l = $.a ? $.Y : void 0,
        o = null != a ? (0, A.mb)(a, i.search) : l,
        c = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode,
        u = null == r ? void 0 : null === (s = r.params) || void 0 === s ? void 0 : s.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: S.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? O.Z.get(c) : null,
        invite: null != o ? R.Z.getInvite(o) : null,
        guildTemplate: null != u ? I.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: m.Z.hasLoadedExperiments
    };
})(eN);
