n.r(t), n(47120);
var s = n(735250),
    r = n(470079),
    i = n(593473),
    a = n(990547),
    o = n(873546),
    l = n(442837),
    c = n(570140),
    u = n(893776),
    d = n(533307),
    _ = n(447543),
    h = n(126399),
    E = n(765717),
    p = n(267394),
    g = n(761305),
    m = n(698177),
    f = n(353926),
    I = n(409059),
    N = n(962220),
    T = n(637776),
    x = n(264229),
    A = n(677760),
    C = n(893607),
    Z = n(314897),
    R = n(82142),
    v = n(701190),
    S = n(626135),
    O = n(81063),
    b = n(449934),
    P = n(768581),
    M = n(625054),
    D = n(645499),
    L = n(320830),
    j = n(721751),
    y = n(718182),
    G = n(223543),
    B = n(73906),
    U = n(299852),
    F = n(39514),
    k = n(236446),
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
l.ZP.initialize();
let et = (0, L.Z)(V.Z),
    en = (0, L.Z)(z.Z),
    es = (0, L.Z)(H.Z),
    er = (0, L.Z)(k.Z),
    ei = (0, L.Z)(F.Z),
    ea = (0, L.Z)(A.Z),
    eo = (0, L.Z)(W.Z),
    el = (0, L.Z)(y.Z),
    ec = (0, L.Z)(G.Z),
    eu = (0, L.Z)(X.Z),
    ed = (0, L.Z)(m.Z),
    e_ = (0, L.Z)(q.Z),
    eh = (0, L.Z)(U.Z),
    eE = (0, L.Z)(g.Z),
    ep = (0, L.Z)(T.Z),
    eg = (0, L.Z)(B.Z),
    em = (0, L.Z)(K.Z),
    ef = (0, L.Z)(J.Z),
    eI = (0, L.Z)(Y.Z);
class eN extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: s, location: r } = e,
            { backgroundId: a } = t,
            o = null !== (n = (0, i.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
        (null == o || '' === o || !(0, D.B)(o) || o.startsWith(Q.Z5c.ME)) && (o = null);
        let l = null;
        if (null == s) l = (0, b.gK)(o);
        else if ((null == s ? void 0 : s.state) === Q.r2o.RESOLVED) {
            let { guild: e, target_application: t } = s;
            null != t
                ? null != a && (l = (0, O.getAssetImage)(t.id, a, 1024))
                : null != e &&
                  'string' == typeof e.splash &&
                  (l = P.ZP.getGuildSplashURL({
                      id: e.id,
                      splash: e.splash
                  }));
        }
        return {
            redirectTo: o,
            splash: l
        };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && u.Z.getExperiments(!0),
            S.default.track(
                Q.rMx.INVITE_OPENED,
                {
                    invite_code: (0, x.jX)(e),
                    load_time: M.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            )),
            (t || $.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            h.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !$.a && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        h.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === Q.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, O.fetchAssetIds)(t.id, ['embedded_splash']).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await _.Z.resolveInvite(e, Q.Usc.INVITE);
        null != t && ((0, p.A)(t), null != t.type && ee.xf.has(t.type) && _.Z.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        if (null != e)
            S.default.track(
                Q.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: M.Z.getTimeSinceNavigationStart()
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
                            : (0, s.jsx)(eo, {
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
                            a = (0, x.mb)(t, r.search);
                        return o.tq || o.Em
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
                        return o.tq || o.Em
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
                    render: (e) => (0, s.jsx)(ep, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, s.jsx)(ed, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, s.jsx)(eh, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, s.jsx)(eE, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, s.jsx)(el, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.REJECT_IP,
                    render: (e) =>
                        (0, s.jsx)(e_, {
                            source: Q.Z5c.REJECT_IP,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.REJECT_MFA,
                    render: (e) =>
                        (0, s.jsx)(e_, {
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
                        (0, s.jsx)(e_, {
                            source: Q.Z5c.RESET,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, s.jsx)(em, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.CHANNEL(C.Hw.guildId(), C.Hw.channelId({ optional: !0 }), ':messageId?'),
                    render: (e) => (0, s.jsx)(eg, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: Q.Z5c.REPORT,
                    render: (e) => (0, s.jsx)(ef, { ...e })
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
t.default = l.ZP.connectStores([Z.default, v.Z, R.Z, f.Z, I.Z], (e) => {
    var t, n, s;
    let { match: r, location: i } = e,
        a = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode,
        o = $.a ? $.Y : void 0,
        l = null != a ? (0, x.mb)(a, i.search) : o,
        c = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode,
        u = null == r ? void 0 : null === (s = r.params) || void 0 === s ? void 0 : s.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: Z.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? R.Z.get(c) : null,
        invite: null != l ? v.Z.getInvite(l) : null,
        guildTemplate: null != u ? I.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: f.Z.hasLoadedExperiments
    };
})(eN);
