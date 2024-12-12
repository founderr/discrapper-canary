n.r(t), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(593473),
    l = n(990547),
    a = n(873546),
    o = n(442837),
    c = n(570140),
    u = n(893776),
    d = n(533307),
    h = n(447543),
    g = n(126399),
    m = n(521379),
    p = n(765717),
    f = n(267394),
    _ = n(761305),
    x = n(698177),
    E = n(353926),
    I = n(409059),
    v = n(962220),
    N = n(637776),
    b = n(264229),
    C = n(677760),
    S = n(893607),
    A = n(314897),
    T = n(82142),
    j = n(701190),
    Z = n(626135),
    R = n(81063),
    L = n(449934),
    P = n(768581),
    O = n(625054),
    D = n(645499),
    y = n(320830),
    k = n(721751),
    B = n(718182),
    w = n(223543),
    M = n(73906),
    G = n(299852),
    U = n(39514),
    F = n(236446),
    z = n(9325),
    V = n(344295),
    K = n(781428),
    H = n(209411),
    W = n(649156),
    q = n(423527),
    J = n(424044),
    Y = n(479495),
    X = n(881317),
    Q = n(886806),
    $ = n(981631),
    ee = n(188785),
    et = n(245335);
n(179645);
o.ZP.initialize();
let en = (0, y.Z)(K.Z),
    ei = (0, y.Z)(H.Z),
    er = (0, y.Z)(V.Z),
    es = (0, y.Z)(F.Z),
    el = (0, y.Z)(U.Z),
    ea = (0, y.Z)(C.Z),
    eo = (0, y.Z)(q.Z),
    ec = (0, y.Z)(B.Z),
    eu = (0, y.Z)(w.Z),
    ed = (0, y.Z)(Q.Z),
    eh = (0, y.Z)(x.Z),
    eg = (0, y.Z)(Y.Z),
    em = (0, y.Z)(G.Z),
    ep = (0, y.Z)(_.Z),
    ef = (0, y.Z)(N.Z),
    e_ = (0, y.Z)(M.Z),
    ex = (0, y.Z)(W.Z),
    eE = (0, y.Z)(X.Z),
    eI = (0, y.Z)(J.Z),
    ev = (0, y.Z)(m.Z);
class eN extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: i, location: r } = e,
            { backgroundId: l } = t,
            a = null !== (n = (0, s.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
        (null == a || '' === a || !(0, D.B)(a) || a.startsWith($.Z5c.ME)) && (a = null);
        let o = null;
        if (null == i) o = (0, L.gK)(a);
        else if ((null == i ? void 0 : i.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = i;
            null != t
                ? null != l && (o = (0, R.getAssetImage)(t.id, l, 1024))
                : null != e &&
                  'string' == typeof e.splash &&
                  (o = P.ZP.getGuildSplashURL({
                      id: e.id,
                      splash: e.splash
                  }));
        }
        return {
            redirectTo: a,
            splash: o
        };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && u.Z.getExperiments(!0),
            Z.default.track(
                $.rMx.INVITE_OPENED,
                {
                    invite_code: (0, b.jX)(e),
                    load_time: O.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            )),
            (t || ee.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            g.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && !ee.a && this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        g.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === $.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, R.fetchAssetIds)(t.id, ['embedded_splash']).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await h.Z.resolveInvite(e, $.Usc.INVITE);
        null != t && ((0, f.A)(t), null != t.type && et.xf.has(t.type) && h.Z.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        if (null != e)
            Z.default.track(
                $.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: O.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            ),
                v.Z.resolveGuildTemplate(e),
                v.Z.openNativeAppModal(e);
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
        return (0, i.jsxs)(k.Z, {
            splash: e,
            children: [
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.LOGIN_HANDOFF,
                    render: (e) =>
                        (0, i.jsx)(ei, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, i.jsx)(p.Z, {
                    impressionName: l.ImpressionNames.USER_LOGIN,
                    path: $.Z5c.LOGIN,
                    render: (e) =>
                        (0, i.jsx)(en, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, i.jsx)(p.Z, {
                    impressionName: l.ImpressionNames.USER_REGISTRATION,
                    path: $.Z5c.REGISTER,
                    render: (e) =>
                        ee.a
                            ? (0, i.jsx)(er, {
                                  ...e,
                                  redirectTo: t,
                                  inviteKey: n
                              })
                            : (0, i.jsx)(eo, {
                                  ...e,
                                  redirectTo: t
                              })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.GIFT_CODE_LOGIN(':giftCode'),
                    render: (e) =>
                        (0, i.jsx)(el, {
                            login: !0,
                            ...e
                        })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.GIFT_CODE(':giftCode'),
                    render: (e) => (0, i.jsx)(el, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: [$.Z5c.INVITE_LOGIN(':inviteCode'), $.Z5c.INVITE(':inviteCode')],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n
                                },
                                location: r,
                                transitionTo: s
                            } = e,
                            l = (0, b.mb)(t, r.search);
                        return a.tq || a.Em
                            ? (0, i.jsx)(
                                  ea,
                                  {
                                      inviteKey: l,
                                      transitionTo: s
                                  },
                                  l
                              )
                            : (0, i.jsx)(er, {
                                  inviteKey: l,
                                  location: r,
                                  transitionTo: s,
                                  login: n === $.Z5c.INVITE_LOGIN(':inviteCode')
                              });
                    }
                }),
                (0, i.jsx)(p.Z, {
                    path: [$.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), $.Z5c.GUILD_TEMPLATE(':guildTemplateCode')],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n
                            },
                            location: r,
                            transitionTo: s
                        } = e;
                        return a.tq || a.Em
                            ? (0, i.jsx)(z.Z, { code: t }, t)
                            : (0, i.jsx)(es, {
                                  code: t,
                                  location: r,
                                  transitionTo: s,
                                  login: n === $.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')
                              });
                    }
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.VERIFY,
                    render: (e) => (0, i.jsx)(ed, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, i.jsx)(ef, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, i.jsx)(eh, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(em, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(ep, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, i.jsx)(ec, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.REJECT_IP,
                    render: (e) =>
                        (0, i.jsx)(eg, {
                            source: $.Z5c.REJECT_IP,
                            ...e
                        })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.REJECT_MFA,
                    render: (e) =>
                        (0, i.jsx)(eg, {
                            source: $.Z5c.REJECT_MFA,
                            ...e
                        })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, i.jsx)(eu, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.RESET,
                    render: (e) =>
                        (0, i.jsx)(eg, {
                            source: $.Z5c.RESET,
                            ...e
                        })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, i.jsx)(ex, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.CHANNEL(S.Hw.guildId(), S.Hw.channelId({ optional: !0 }), ':messageId?'),
                    render: (e) => (0, i.jsx)(e_, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.REPORT,
                    render: (e) => (0, i.jsx)(eE, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, i.jsx)(eI, { ...e })
                }),
                (0, i.jsx)(p.Z, {
                    path: $.Z5c.ACCOUNT_REVERT(':token'),
                    render: (e) => (0, i.jsx)(ev, { ...e })
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (i = {
                splash: null,
                redirectTo: null,
                backgroundId: null
            }),
            (n = 'state') in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.default = o.ZP.connectStores([A.default, j.Z, T.Z, E.Z, I.Z], (e) => {
    var t, n, i;
    let { match: r, location: s } = e,
        l = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode,
        a = ee.a ? ee.Y : void 0,
        o = null != l ? (0, b.mb)(l, s.search) : a,
        c = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode,
        u = null == r ? void 0 : null === (i = r.params) || void 0 === i ? void 0 : i.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: A.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? T.Z.get(c) : null,
        invite: null != o ? j.Z.getInvite(o) : null,
        guildTemplate: null != u ? I.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: E.Z.hasLoadedExperiments
    };
})(eN);
