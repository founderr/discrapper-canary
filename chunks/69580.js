n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return et;
        },
        OAuth2AuthorizePage: function () {
            return ee;
        },
        getOAuth2AuthorizeProps: function () {
            return es;
        },
        openOAuth2Modal: function () {
            return ea;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return ei;
        },
        useOAuth2AuthorizeForm: function () {
            return en;
        }
    }),
    n(47120),
    n(411104);
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(266067),
    c = n(729594),
    d = n(373793),
    _ = n(243814),
    E = n(149765),
    f = n(442837),
    h = n(693789),
    p = n(952265),
    I = n(21340),
    m = n(922770),
    T = n(481060),
    g = n(893776),
    S = n(434650),
    A = n(367907),
    N = n(702493),
    O = n(728345),
    R = n(979200),
    v = n(560067),
    C = n(353926),
    y = n(341298),
    L = n(703656),
    D = n(973616),
    b = n(598077),
    M = n(314897),
    P = n(700785),
    U = n(591759),
    w = n(807675),
    x = n(489863),
    G = n(228763),
    k = n(422559),
    B = n(713938),
    F = n(166148),
    V = n(807989),
    H = n(260430),
    Z = n(668185),
    Y = n(407546),
    j = n(41259),
    W = n(28752),
    K = n(787025),
    z = n(397394),
    q = n(574384),
    Q = n(981631),
    X = n(689938),
    $ = n(828947);
let J = 'oauth2-authorize-header-id';
function ee() {
    let e = (0, u.TH)(),
        t = s.useMemo(() => (0, w.y)(e.search), [e.search]);
    return (
        (0, N.Z)(),
        (0, a.jsx)(K.G, {
            removeChildWrapper: !0,
            children: (0, a.jsx)(et, {
                transitionState: T.ModalTransitionState.ENTERED,
                ...t,
                showLogout: !0
            })
        })
    );
}
function et(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: s, nextStep: o, appDetails: u, hasContentBackground: c } = en({ ...n }),
        d = (0, a.jsxs)(a.Fragment, {
            children: [
                r,
                (0, a.jsxs)('div', {
                    className: l()($.content, c ? $.contentBackground : null),
                    children: [i, null == o ? u : null]
                })
            ]
        });
    return (0, a.jsx)(K.j, {
        transitionState: t,
        'aria-labelledby': J,
        footer: s,
        children: (0, a.jsx)('div', {
            className: l()($.authorize),
            children: (0, a.jsx)(I.zJ, {
                orientation: 'auto',
                children: d
            })
        })
    });
}
function en(e) {
    var t, n, r, i, o;
    let p,
        I,
        N,
        v,
        y,
        K,
        { clientId: ee, responseType: et, redirectUri: en, codeChallenge: er, codeChallengeMethod: ei, state: ea, nonce: es, prompt: eo, authorizations: el, scopes: eu, permissions: ec, guildId: ed, channelId: e_, integrationType: eE, disableGuildSelect: ef = !1, showLogout: eh = !1, cancelCompletesFlow: ep = !0, isTrustedName: eI = !1, isEmbeddedFlow: em = !1, callback: eT, callbackWithoutPost: eg, onClose: eS, disclosures: eA } = e,
        eN = null != eE ? (null == el ? void 0 : el.get(eE)) : void 0,
        eO = (0, u.TH)(),
        eR = (0, f.e7)([C.Z], () => C.Z.hasLoadedExperiments);
    s.useEffect(() => {
        M.default.isAuthenticated() && !eR && g.Z.getExperiments();
    }, [eR]);
    let [ev, eC] = s.useState(null),
        [ey, eL] = s.useState(null),
        [eD, eb] = s.useState(null),
        [eM, eP] = s.useState(!1),
        [eU, ew] = s.useState(!1),
        ex = null == ev ? void 0 : ev.guilds,
        [eG, ek] = s.useState(null != ed ? ed : null),
        [eB, eF] = s.useState(null != e_ ? e_ : null),
        [eV, eH] = s.useState(P.Hn),
        eZ = s.useMemo(() => ((null == ev ? void 0 : ev.user) != null ? new b.Z(ev.user) : null), [null == ev ? void 0 : ev.user]),
        eY = s.useMemo(() => (null == ex ? void 0 : ex.find((e) => e.id === eG)), [ex, eG]),
        [ej, eW] = s.useState(null),
        eK = s.useMemo(() => {
            var e;
            return null == eN && null == eE && (null !== (e = null == eu ? void 0 : eu.length) && void 0 !== e ? e : 0) === 0 && null == en;
        }, [eN, null == eu ? void 0 : eu.length, en, eE]),
        [ez, eq] = s.useState(null);
    s.useEffect(() => {
        eK && O.Z.fetchApplication(ee).then((e) => eq(D.Z.createFromServer(e)));
    }, [ee, eK]);
    let eQ = s.useMemo(() => {
            var e, t;
            return null == ej ? null : null == ez ? void 0 : null === (t = ez.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[ej]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == ez ? void 0 : ez.integrationTypesConfig, ej]),
        { requestedScopes: eX, accountScopes: e$ } = s.useMemo(() => {
            let e = eK ? (null == eQ ? void 0 : eQ.scopes) : eu,
                t = (0, w.K)(null != e ? e : []),
                n = B.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == eQ ? void 0 : eQ.scopes, eu, eK]),
        eJ = s.useMemo(() => {
            var e;
            let t = eK ? E.vB(null !== (e = null == eQ ? void 0 : eQ.permissions) && void 0 !== e ? e : 0) : ec;
            return null != t ? t : P.Hn;
        }, [null == eQ ? void 0 : eQ.permissions, ec, eK]),
        e0 = s.useRef(!1),
        [e1, e2] = s.useState(null != eA ? eA : []),
        [e3, e4] = s.useState(null != eA && eA.length > 0);
    s.useEffect(() => {
        if (e0.current) return;
        let e = async () => {
            e0.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, R.de)(ee);
                e4(!t), e2(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, x.c$)(eO);
                    return;
                }
                eb(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e0.current = !1;
            }
        };
        if (null == eA) {
            if (!M.default.isAuthenticated()) {
                (0, x.c$)(eO);
                return;
            }
            e();
        }
    }, [ee, eO, eA, e2, eb, e4, eL]);
    let e5 = s.useCallback(
            async (e) => {
                if (null != eg) {
                    eg(e);
                    return;
                }
                if (!e && !ep) {
                    null != eT &&
                        (eT({
                            application: null == ev ? void 0 : ev.application,
                            guild: eY
                        }),
                        null == eS || eS());
                    return;
                }
                if (null == ej) {
                    eb(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eP(!0);
                    let t = await (0, x.Iq)({
                        authorize: e,
                        clientId: ee,
                        scopes: eX,
                        responseType: et,
                        redirectUri: en,
                        codeChallenge: er,
                        codeChallengeMethod: ei,
                        state: ea,
                        nonce: es,
                        integrationType: ej,
                        permissions: E.Od(eJ, eV),
                        guildId: ej === d.Y.GUILD_INSTALL && null != eG ? eG : void 0,
                        channelId: ej === d.Y.GUILD_INSTALL && null != eB ? eB : void 0
                    });
                    if ((e && (await (0, R.x9)(ee, e1)), null != eT))
                        eT({
                            application: null == ev ? void 0 : ev.application,
                            location: t.location,
                            guild: eY
                        }),
                            null == eS || eS();
                    else if (null != t.location) {
                        let { host: e, path: n } = c.parse(t.location);
                        U.Z.isDiscordHostname(e) && n === Q.Z5c.OAUTH2_AUTHORIZED
                            ? (0, L.uL)(Q.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ev ? void 0 : ev.application,
                                      guild: eY
                                  }
                              })
                            : (window.location = t.location);
                    } else eP(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eb(Error(e.message)) : eb(e), eL('AUTHORIZE_SCOPES'), eP(!1);
                }
            },
            [eg, ep, eT, null == ev ? void 0 : ev.application, eY, eS, ee, eX, et, en, er, ei, ea, es, eJ, eV, eG, ej, eB, e1]
        ),
        e6 = s.useRef(!1),
        e7 = s.useCallback(async () => {
            if (!M.default.isAuthenticated()) {
                (0, x.c$)(eO);
                return;
            }
            if (!e0.current) {
                if (!e6.current) {
                    e6.current = !0;
                    try {
                        let e =
                            null != eN
                                ? eN
                                : await (0, x.Ww)({
                                      clientId: ee,
                                      scopes: eX,
                                      responseType: et,
                                      redirectUri: en,
                                      codeChallenge: er,
                                      codeChallengeMethod: ei,
                                      state: ea,
                                      nonce: es,
                                      integrationType: null != ej ? ej : void 0
                                  });
                        eC((0, G.d)(e)), eo === F.s.NONE && e.authorized && !e3 && e5(!0), (0, A.yw)(Q.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, x.c$)(eO);
                            return;
                        }
                        eb(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        e6.current = !1;
                    }
                }
            }
        }, [eO, eN, ee, eX, et, en, er, ei, ea, es, ej, eo, e5, e3]),
        e8 = s.useMemo(() => {
            var e;
            return null != ez && eK
                ? Object.entries(null !== (e = ez.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [ez, eK]),
        e9 = s.useRef(null);
    s.useEffect(() => {
        ey !== e9.current &&
            ((e9.current = ey),
            (0, A.yw)(Q.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: ey,
                application_id: ee,
                integration_type: ej,
                scopes: eX,
                permissions: eJ.toString()
            }));
    }, [ee, ej, eJ, eX, ey]),
        s.useEffect(() => {
            if (null == ey && (!eK || null != ez) && !!eR)
                if (null != eN) {
                    var e;
                    eW(null !== (e = eN.integration_type) && void 0 !== e ? e : d.Y.GUILD_INSTALL), eL('AUTHORIZE_SCOPES');
                } else e8.length > 1 ? eL('SELECT_INSTALL_TYPE') : (1 === e8.length ? eW(e8[0]) : null != eE ? eW(eE) : eW(d.Y.GUILD_INSTALL), eL('AUTHORIZE_SCOPES'));
        }, [eN, e8, ez, eK, eE, ey, eR]),
        s.useEffect(() => {
            if (null == ej || null != ev || null != eD) return;
            ej === d.Y.USER_INSTALL && (ek(null), eF(null));
            let e = eX.filter((e) => !B.ak.includes(e));
            0 === eX.length ? eb(Error('No scopes were provided.')) : e.length > 0 ? eb(Error('Invalid scope: '.concat(e[0]))) : (0, k._$)(eJ) ? eb(Error('Invalid permission(s) provided.')) : e7();
        }, [e3, e7, eX, eJ, ej, ev, eD]);
    let te = s.useCallback((e) => {
            e && ew(!0);
        }, []),
        tt = (0, S.O)(te);
    if (eD instanceof Error) return { body: (0, a.jsx)(z.Lk, { message: eD.message }) };
    let tn = !1,
        tr = !1,
        ti = !0,
        ta = !0,
        ts = !0;
    switch (ey) {
        case null:
            return { body: (0, a.jsx)(m.$, { className: $.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == ez) return { body: (0, a.jsx)(m.$, { className: $.spinner }) };
            (p = (0, a.jsx)(W.Z, {
                application: ez,
                onSelect: (e) => {
                    eW(e), eC(null), eL('AUTHORIZE_SCOPES');
                }
            })),
                (ti = !1),
                (ta = !1),
                (ts = !1);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == ev || null == eZ || null == ej) return { body: (0, a.jsx)(m.$, { className: $.spinner }) };
            let to = null == eD || eD instanceof Error ? {} : eD,
                tl = null == ex ? void 0 : ex.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tu = ej === d.Y.GUILD_INSTALL && eX.includes(_.x.WEBHOOK_INCOMING),
                tc = tu || (ej === d.Y.GUILD_INSTALL && (eX.includes(_.x.BOT) || eX.includes(_.x.APPLICATIONS_COMMANDS)));
            (p = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(H.Z, {
                                application: ev.application,
                                accountScopes: e$,
                                requestedScopes: eX,
                                integrationType: ej,
                                errors: to,
                                isTrustedName: eI
                            }),
                            (0, a.jsx)('div', {
                                className: $.intObserver,
                                ref: tt
                            })
                        ]
                    }),
                    tc
                        ? (0, a.jsx)(Y.Z, {
                              error: (null !== (n = null !== (t = to[_.x.BOT]) && void 0 !== t ? t : to[_.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eG,
                              onGuildChange: ek,
                              guilds: null != tl ? tl : [],
                              disabled: '' !== eG && null != eG && !0 === ef
                          })
                        : null,
                    tu
                        ? (0, a.jsx)(q.Z, {
                              error: (null !== (r = to[_.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: eB,
                              selectedGuildId: eG,
                              onChannelChange: eF
                          })
                        : null
                ]
            })),
                eX.includes(_.x.BOT) && !E.fS(eJ, P.Hn) && (N = 'AUTHORIZE_BOT_PERMISSIONS'),
                e8.length > 1 && (I = 'SELECT_INSTALL_TYPE'),
                (tr = (tc && null == eY) || (tu && null == eB)),
                (tn = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == ev) return { body: (0, a.jsx)(m.$, { className: $.spinner }) };
            (p = (0, a.jsx)(Z.Z, {
                application: ev.application,
                permissions: eJ,
                deniedPermissions: eV,
                onPermissionsChange: (e, t) => {
                    eH((n) => (e ? E.Od(n, t) : E.IH(n, t)));
                },
                guild: eY
            })),
                (I = 'AUTHORIZE_SCOPES'),
                (tn = !0);
    }
    if (ti && null != ev) {
        let e = null === (i = ev.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        v = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(V.Z, {
                    application: ev.application,
                    scopes: eX,
                    disclosures: e1,
                    redirectUri: null !== (o = ev.redirect_uri) && void 0 !== o ? o : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: em
                }),
                (0, a.jsx)('div', {
                    className: $.intObserver,
                    ref: tt
                })
            ]
        });
    }
    return (
        ta &&
            null != ev &&
            null != eZ &&
            (y = (0, a.jsx)(j.Z, {
                id: J,
                user: eZ,
                application: ev.application,
                bot: ev.bot,
                accountScopes: e$,
                showLogout: eh || !1,
                location: eO
            })),
        ts &&
            (K = (0, a.jsxs)('div', {
                className: l()($.footer),
                children: [
                    null != I
                        ? (0, a.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => eL(I),
                              children: X.Z.Messages.BACK
                          })
                        : (0, a.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => e5(!1),
                              children: X.Z.Messages.CANCEL
                          }),
                    'SELECT_INSTALL_TYPE' !== ey
                        ? eU
                            ? (0, a.jsx)('div', {
                                  className: $.action,
                                  children: (0, a.jsx)(h.zx, {
                                      onClick: null != N ? () => eL(N) : () => e5(!0),
                                      submitting: eM,
                                      disabled: null == v || tr,
                                      children: tr ? X.Z.Messages.OAUTH2_MISSED_FIELDS : null != N ? X.Z.Messages.CONTINUE : X.Z.Messages.AUTHORIZE
                                  })
                              })
                            : (0, a.jsx)('div', {
                                  className: $.action,
                                  children: (0, a.jsx)(T.Tooltip, {
                                      text: X.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              ...e,
                                              className: $.tooltip,
                                              children: (0, a.jsxs)(h.zx, {
                                                  disabled: !0,
                                                  submitting: eM,
                                                  innerClassName: $.buttonOverflow,
                                                  children: [
                                                      X.Z.Messages.OAUTH2_KEEP_SCROLLING,
                                                      ' ',
                                                      (0, a.jsx)('span', {
                                                          className: $.emoji,
                                                          role: 'img',
                                                          'aria-label': 'down',
                                                          children: '\uD83D\uDC47'
                                                      })
                                                  ]
                                              })
                                          })
                                  })
                              })
                        : null
                ]
            })),
        {
            header: y,
            body: p,
            footer: K,
            nextStep: N,
            appDetails: v,
            sendAuthorize: e5,
            hasContentBackground: tn
        }
    );
}
function er(e, t) {
    if (null == t.location || (null != e && e(t))) return;
    let { host: n, path: r, query: i } = c.parse(t.location, !0),
        s = U.Z.isDiscordHostname(n) || window.location.host === n;
    if (s && r === Q.Z5c.OAUTH2_AUTHORIZED)
        (0, p.h7)((e) =>
            (0, a.jsx)(K.j, {
                ...e,
                'aria-labelledby': J,
                children: (0, a.jsx)(z.Jh, {
                    guild: t.guild,
                    application: t.application,
                    onClose: e.onClose
                })
            })
        );
    else if (s && (null == r ? void 0 : r.startsWith(Q.Z5c.OAUTH2_ERROR)))
        (0, p.h7)((e) => {
            let t = i.error_description || i.error || X.Z.Messages.OAUTH2_UNKNOWN_ERROR;
            return (
                Array.isArray(t) && (t = t[0]),
                (0, a.jsx)(K.j, {
                    ...e,
                    'aria-labelledby': J,
                    children: (0, a.jsx)(z.Lk, {
                        message: t,
                        onClose: e.onClose
                    })
                })
            );
        });
    else {
        var o;
        null === (o = window.open(t.location, '_blank')) || void 0 === o || o.focus();
    }
}
function ei(e, t) {
    if ((0, y.g)('create-guild-and-oauth2-modal')) {
        v.Z.openCreateGuildModal({
            onSuccess: (n) =>
                ea(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    ea(e, t);
}
function ea(e, t) {
    (0, p.h7)(
        (t) =>
            (0, a.jsx)(et, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: er.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function es(e) {
    let { hostname: t = '', host: n, path: r, query: i } = c.parse(e);
    return null != r && null != i && (U.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(Q.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(Q.Z5c.OAUTH2_AUTHORIZE)) ? (0, w.y)(i) : null;
}
((i = r || (r = {})).SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (i.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (i.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
