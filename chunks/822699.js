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
    C = n(314897),
    Z = n(82142),
    R = n(701190),
    v = n(626135),
    S = n(81063),
    O = n(449934),
    b = n(768581),
    P = n(625054),
    D = n(645499),
    M = n(320830),
    L = n(721751),
    j = n(718182),
    y = n(223543),
    G = n(73906),
    B = n(299852),
    U = n(39514),
    F = n(236446),
    k = n(9325),
    w = n(344295),
    H = n(781428),
    V = n(209411),
    z = n(649156),
    K = n(423527),
    W = n(424044),
    Y = n(479495),
    q = n(881317),
    J = n(886806),
    X = n(981631),
    Q = n(188785),
    $ = n(245335);
n(179645);
l.ZP.initialize();
let ee = (0, M.Z)(H.Z),
    et = (0, M.Z)(V.Z),
    en = (0, M.Z)(w.Z),
    es = (0, M.Z)(F.Z),
    er = (0, M.Z)(U.Z),
    ei = (0, M.Z)(A.Z),
    ea = (0, M.Z)(K.Z),
    eo = (0, M.Z)(j.Z),
    el = (0, M.Z)(y.Z),
    ec = (0, M.Z)(J.Z),
    eu = (0, M.Z)(m.Z),
    ed = (0, M.Z)(Y.Z),
    e_ = (0, M.Z)(B.Z),
    eh = (0, M.Z)(g.Z),
    eE = (0, M.Z)(T.Z),
    ep = (0, M.Z)(G.Z),
    eg = (0, M.Z)(z.Z),
    em = (0, M.Z)(q.Z),
    ef = (0, M.Z)(W.Z);
class eI extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: s, location: r } = e,
            { backgroundId: a } = t,
            o = null !== (n = (0, i.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
        (null == o || '' === o || !(0, D.B)(o) || o.startsWith(X.Z5c.ME)) && (o = null);
        let l = null;
        if (null == s) l = (0, O.gK)(o);
        else if ((null == s ? void 0 : s.state) === X.r2o.RESOLVED) {
            let { guild: e, target_application: t } = s;
            null != t
                ? null != a && (l = (0, S.getAssetImage)(t.id, a, 1024))
                : null != e &&
                  'string' == typeof e.splash &&
                  (l = b.ZP.getGuildSplashURL({
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
            v.default.track(
                X.rMx.INVITE_OPENED,
                {
                    invite_code: (0, x.jX)(e),
                    load_time: P.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            )),
            (t || Q.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            h.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !Q.a && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        h.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === X.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, S.fetchAssetIds)(t.id, ['embedded_splash']).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await _.Z.resolveInvite(e, X.Usc.INVITE);
        null != t && ((0, p.A)(t), null != t.type && $.xf.has(t.type) && _.Z.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        if (null != e)
            v.default.track(
                X.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: P.Z.getTimeSinceNavigationStart()
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
        return (0, s.jsxs)(L.Z, {
            splash: e,
            children: [
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.LOGIN_HANDOFF,
                    render: (e) =>
                        (0, s.jsx)(et, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, s.jsx)(E.Z, {
                    impressionName: a.ImpressionNames.USER_LOGIN,
                    path: X.Z5c.LOGIN,
                    render: (e) =>
                        (0, s.jsx)(ee, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, s.jsx)(E.Z, {
                    impressionName: a.ImpressionNames.USER_REGISTRATION,
                    path: X.Z5c.REGISTER,
                    render: (e) =>
                        Q.a
                            ? (0, s.jsx)(en, {
                                  ...e,
                                  redirectTo: t,
                                  inviteKey: n
                              })
                            : (0, s.jsx)(ea, {
                                  ...e,
                                  redirectTo: t
                              })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.GIFT_CODE_LOGIN(':giftCode'),
                    render: (e) =>
                        (0, s.jsx)(er, {
                            login: !0,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.GIFT_CODE(':giftCode'),
                    render: (e) => (0, s.jsx)(er, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: [X.Z5c.INVITE_LOGIN(':inviteCode'), X.Z5c.INVITE(':inviteCode')],
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
                                  ei,
                                  {
                                      inviteKey: a,
                                      transitionTo: i
                                  },
                                  a
                              )
                            : (0, s.jsx)(en, {
                                  inviteKey: a,
                                  location: r,
                                  transitionTo: i,
                                  login: n === X.Z5c.INVITE_LOGIN(':inviteCode')
                              });
                    }
                }),
                (0, s.jsx)(E.Z, {
                    path: [X.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), X.Z5c.GUILD_TEMPLATE(':guildTemplateCode')],
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
                            ? (0, s.jsx)(k.Z, { code: t }, t)
                            : (0, s.jsx)(es, {
                                  code: t,
                                  location: r,
                                  transitionTo: i,
                                  login: n === X.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')
                              });
                    }
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.VERIFY,
                    render: (e) => (0, s.jsx)(ec, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, s.jsx)(eE, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, s.jsx)(eu, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, s.jsx)(e_, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, s.jsx)(eh, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, s.jsx)(eo, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.REJECT_IP,
                    render: (e) =>
                        (0, s.jsx)(ed, {
                            source: X.Z5c.REJECT_IP,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.REJECT_MFA,
                    render: (e) =>
                        (0, s.jsx)(ed, {
                            source: X.Z5c.REJECT_MFA,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, s.jsx)(el, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.RESET,
                    render: (e) =>
                        (0, s.jsx)(ed, {
                            source: X.Z5c.RESET,
                            ...e
                        })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, s.jsx)(eg, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?'),
                    render: (e) => (0, s.jsx)(ep, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.REPORT,
                    render: (e) => (0, s.jsx)(em, { ...e })
                }),
                (0, s.jsx)(E.Z, {
                    path: X.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, s.jsx)(ef, { ...e })
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
t.default = l.ZP.connectStores([C.default, R.Z, Z.Z, f.Z, I.Z], (e) => {
    var t, n, s;
    let { match: r, location: i } = e,
        a = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode,
        o = Q.a ? Q.Y : void 0,
        l = null != a ? (0, x.mb)(a, i.search) : o,
        c = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode,
        u = null == r ? void 0 : null === (s = r.params) || void 0 === s ? void 0 : s.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: C.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? Z.Z.get(c) : null,
        invite: null != l ? R.Z.getInvite(l) : null,
        guildTemplate: null != u ? I.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: f.Z.hasLoadedExperiments
    };
})(eI);
