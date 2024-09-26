n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return eE;
        },
        OAuth2AuthorizePage: function () {
            return e_;
        },
        getOAuth2AuthorizeProps: function () {
            return eI;
        },
        openOAuth2Modal: function () {
            return em;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return ep;
        },
        useOAuth2AuthorizeForm: function () {
            return ef;
        }
    });
var r,
    i = n(315314);
var a = n(610138);
var o = n(216116);
var s = n(78328);
var l = n(815648);
var u = n(47120);
var c = n(411104);
var d = n(735250),
    _ = n(470079),
    E = n(120356),
    f = n.n(E),
    h = n(266067),
    p = n(729594),
    m = n(873546),
    I = n(373793),
    T = n(243814),
    g = n(149765),
    S = n(442837),
    A = n(946188),
    v = n(693789),
    N = n(952265),
    O = n(21340),
    R = n(922770),
    C = n(481060),
    y = n(893776),
    L = n(596454),
    b = n(434650),
    D = n(367907),
    M = n(702493),
    P = n(728345),
    U = n(979200),
    w = n(560067),
    x = n(353926),
    G = n(341298),
    k = n(703656),
    B = n(973616),
    F = n(598077),
    Z = n(314897),
    V = n(176354),
    H = n(700785),
    Y = n(591759),
    j = n(807675),
    W = n(489863),
    K = n(228763),
    z = n(422559),
    q = n(713938),
    Q = n(166148),
    X = n(807989),
    $ = n(627799),
    J = n(260430),
    ee = n(668185),
    et = n(407546),
    en = n(41259),
    er = n(28752),
    ei = n(787025),
    ea = n(397394),
    eo = n(574384),
    es = n(960662),
    el = n(981631),
    eu = n(689938),
    ec = n(195943);
let ed = 'oauth2-authorize-header-id';
function e_() {
    let e = (0, h.TH)(),
        t = _.useMemo(() => (0, j.y)(e.search), [e.search]);
    return (
        (0, M.Z)(),
        _.useEffect(() => {
            let t = !e.search.includes('response_type');
            if (m.eL && t) {
                let t = new URL('discord://action/oauth2/authorize');
                (t.search = e.search), window.open(t.toString(), '_self');
            }
        }, [e.search]),
        (0, d.jsx)(ei.G, {
            removeChildWrapper: !0,
            children: (0, d.jsx)(eE, {
                transitionState: C.ModalTransitionState.ENTERED,
                ...t,
                showLogout: !0
            })
        })
    );
}
function eE(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: a, nextStep: o, appDetails: s, hasContentBackground: l } = ef({ ...n }),
        u = (0, d.jsxs)(d.Fragment, {
            children: [
                r,
                (0, d.jsxs)('div', {
                    className: f()(ec.content, l ? ec.contentBackground : null),
                    children: [i, null == o ? s : null]
                })
            ]
        });
    return (0, d.jsx)(ei.j, {
        transitionState: t,
        'aria-labelledby': ed,
        footer: a,
        children: (0, d.jsx)('div', {
            className: f()(ec.authorize),
            children: (0, d.jsx)(O.zJ, {
                orientation: 'auto',
                children: u
            })
        })
    });
}
function ef(e) {
    var t, n, r, i, a;
    let o,
        s,
        l,
        u,
        c,
        E,
        { clientId: m, responseType: N, redirectUri: O, codeChallenge: M, codeChallengeMethod: w, state: G, nonce: ei, prompt: e_, authorizations: eE, scopes: ef, permissions: eh, guildId: ep, channelId: em, integrationType: eI, disableGuildSelect: eT = !1, showLogout: eg = !1, cancelCompletesFlow: eS = !0, isTrustedName: eA = !1, isEmbeddedFlow: ev = !1, callback: eN, callbackWithoutPost: eO, onClose: eR, disclosures: eC } = e,
        ey = null != eI ? (null == eE ? void 0 : eE.get(eI)) : void 0,
        eL = (0, h.TH)(),
        eb = (0, S.e7)([x.Z], () => x.Z.hasLoadedExperiments);
    _.useEffect(() => {
        Z.default.isAuthenticated() && !eb && y.Z.getExperiments();
    }, [eb]);
    let [eD, eM] = _.useState(null),
        [eP, eU] = _.useState(null),
        [ew, ex] = _.useState(null),
        [eG, ek] = _.useState(!1),
        [eB, eF] = _.useState(!1),
        eZ = null == eD ? void 0 : eD.guilds,
        [eV, eH] = _.useState(null != ep ? ep : null),
        [eY, ej] = _.useState(null != em ? em : null),
        [eW, eK] = _.useState(H.Hn),
        ez = _.useMemo(() => ((null == eD ? void 0 : eD.user) != null ? new F.Z(eD.user) : null), [null == eD ? void 0 : eD.user]),
        eq = _.useMemo(() => (null == eZ ? void 0 : eZ.find((e) => e.id === eV)), [eZ, eV]),
        [eQ, eX] = _.useState(null),
        e$ = _.useMemo(() => {
            var e;
            return null == ey && null == eI && (null !== (e = null == ef ? void 0 : ef.length) && void 0 !== e ? e : 0) === 0 && null == O;
        }, [ey, null == ef ? void 0 : ef.length, O, eI]),
        [eJ, e0] = _.useState(null);
    _.useEffect(() => {
        e$ && P.Z.fetchApplication(m).then((e) => e0(B.Z.createFromServer(e)));
    }, [m, e$]);
    let e1 = _.useMemo(() => {
            var e, t;
            return null == eQ ? null : null == eJ ? void 0 : null === (t = eJ.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eQ]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == eJ ? void 0 : eJ.integrationTypesConfig, eQ]),
        { requestedScopes: e2, accountScopes: e3 } = _.useMemo(() => {
            let e = e$ ? (null == e1 ? void 0 : e1.scopes) : ef,
                t = (0, j.K)(null != e ? e : []),
                n = q.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e1 ? void 0 : e1.scopes, ef, e$]),
        e4 = _.useMemo(() => {
            var e;
            let t = e$ ? g.vB(null !== (e = null == e1 ? void 0 : e1.permissions) && void 0 !== e ? e : 0) : eh;
            return null != t ? t : H.Hn;
        }, [null == e1 ? void 0 : e1.permissions, eh, e$]),
        e5 = _.useRef(!1),
        [e6, e7] = _.useState(null != eC ? eC : []),
        [e8, e9] = _.useState(null != eC && eC.length > 0);
    _.useEffect(() => {
        if (e5.current) return;
        let e = async () => {
            e5.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, U.de)(m);
                e9(!t), e7(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, W.c$)(eL);
                    return;
                }
                ex(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e5.current = !1;
            }
        };
        if (null == eC) {
            if (!Z.default.isAuthenticated()) {
                (0, W.c$)(eL);
                return;
            }
            e();
        }
    }, [m, eL, eC, e7, ex, e9, eU]);
    let te = _.useCallback(
            async (e) => {
                if (null != eO) {
                    eO(e);
                    return;
                }
                if (!e && !eS) {
                    null != eN &&
                        (eN({
                            application: null == eD ? void 0 : eD.application,
                            guild: eq
                        }),
                        null == eR || eR());
                    return;
                }
                if (null == eQ) {
                    ex(Error('No integration type was selected.'));
                    return;
                }
                try {
                    ek(!0);
                    let t = await (0, W.Iq)({
                        authorize: e,
                        clientId: m,
                        scopes: e2,
                        responseType: N,
                        redirectUri: O,
                        codeChallenge: M,
                        codeChallengeMethod: w,
                        state: G,
                        nonce: ei,
                        integrationType: eQ,
                        permissions: g.Od(e4, eW),
                        guildId: eQ === I.Y.GUILD_INSTALL && null != eV ? eV : void 0,
                        channelId: eQ === I.Y.GUILD_INSTALL && null != eY ? eY : void 0
                    });
                    if ((e && (await (0, U.x9)(m, e6)), null != eN))
                        eN({
                            application: null == eD ? void 0 : eD.application,
                            location: t.location,
                            guild: eq
                        }),
                            null == eR || eR();
                    else if (null != t.location) {
                        let { host: e, path: n } = p.parse(t.location);
                        Y.Z.isDiscordHostname(e) && n === el.Z5c.OAUTH2_AUTHORIZED
                            ? (0, k.uL)(el.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eD ? void 0 : eD.application,
                                      guild: eq
                                  }
                              })
                            : (window.location = t.location);
                    } else ek(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? ex(Error(e.message)) : ex(e), eU('AUTHORIZE_SCOPES'), ek(!1);
                }
            },
            [eO, eS, eN, null == eD ? void 0 : eD.application, eq, eR, m, e2, N, O, M, w, G, ei, e4, eW, eV, eQ, eY, e6]
        ),
        tt = _.useRef(!1),
        tn = _.useCallback(async () => {
            if (!Z.default.isAuthenticated()) {
                (0, W.c$)(eL);
                return;
            }
            if (!e5.current) {
                if (!tt.current) {
                    tt.current = !0;
                    try {
                        let e =
                            null != ey
                                ? ey
                                : await (0, W.Ww)({
                                      clientId: m,
                                      scopes: e2,
                                      responseType: N,
                                      redirectUri: O,
                                      codeChallenge: M,
                                      codeChallengeMethod: w,
                                      state: G,
                                      nonce: ei,
                                      integrationType: null != eQ ? eQ : void 0
                                  });
                        eM((0, K.d)(e)), e_ === Q.s.NONE && e.authorized && !e8 && te(!0), (0, D.yw)(el.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, W.c$)(eL);
                            return;
                        }
                        ex(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        tt.current = !1;
                    }
                }
            }
        }, [eL, ey, m, e2, N, O, M, w, G, ei, eQ, e_, te, e8]),
        tr = _.useMemo(() => {
            var e;
            return null != eJ && e$
                ? Object.entries(null !== (e = eJ.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [eJ, e$]),
        ti = _.useRef(null);
    _.useEffect(() => {
        eP !== ti.current &&
            ((ti.current = eP),
            (0, D.yw)(el.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eP,
                application_id: m,
                integration_type: eQ,
                scopes: e2,
                permissions: e4.toString()
            }));
    }, [m, eQ, e4, e2, eP]),
        _.useEffect(() => {
            if (null == eP && (!e$ || null != eJ) && !!eb)
                if (null != ey) {
                    var e;
                    eX(null !== (e = ey.integration_type) && void 0 !== e ? e : I.Y.GUILD_INSTALL), eU('AUTHORIZE_SCOPES');
                } else tr.length > 1 ? eU('SELECT_INSTALL_TYPE') : (1 === tr.length ? eX(tr[0]) : null != eI ? eX(eI) : eX(I.Y.GUILD_INSTALL), eU('AUTHORIZE_SCOPES'));
        }, [ey, tr, eJ, e$, eI, eP, eb]),
        _.useEffect(() => {
            if (null == eQ || null != eD || null != ew) return;
            eQ === I.Y.USER_INSTALL && (eH(null), ej(null));
            let e = e2.filter((e) => !q.ak.includes(e));
            0 === e2.length ? ex(Error('No scopes were provided.')) : e.length > 0 ? ex(Error('Invalid scope: '.concat(e[0]))) : (0, z._$)(e4) ? ex(Error('Invalid permission(s) provided.')) : tn();
        }, [e8, tn, e2, e4, eQ, eD, ew]);
    let ta = _.useCallback((e) => {
            e && eF(!0);
        }, []),
        to = (0, b.O)(ta);
    if (ew instanceof Error) return { body: (0, d.jsx)(ea.Lk, { message: ew.message }) };
    let ts = (e) => {
            eX(e), eM(null), eU('AUTHORIZE_SCOPES');
        },
        tl = (e, t) => {
            eK((n) => (e ? g.Od(n, t) : g.IH(n, t)));
        },
        tu = !1,
        tc = !1,
        td = !0,
        t_ = !0,
        tE = !0;
    switch (eP) {
        case null:
            return { body: (0, d.jsx)(R.$, { className: ec.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == eJ) return { body: (0, d.jsx)(R.$, { className: ec.spinner }) };
            (o = (0, d.jsx)(er.Z, {
                application: eJ,
                onSelect: ts
            })),
                (td = !1),
                (t_ = !1),
                (tE = !1);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eD || null == ez || null == eQ) return { body: (0, d.jsx)(R.$, { className: ec.spinner }) };
            let tf = null == ew || ew instanceof Error ? {} : ew,
                th = null == eZ ? void 0 : eZ.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tp = eQ === I.Y.GUILD_INSTALL && e2.includes(T.x.WEBHOOK_INCOMING),
                tm = tp || (eQ === I.Y.GUILD_INSTALL && (e2.includes(T.x.BOT) || e2.includes(T.x.APPLICATIONS_COMMANDS)));
            (o = (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)($.Z, { accountScopes: e3 }),
                    (0, d.jsx)(J.Z, {
                        application: eD.application,
                        accountScopes: e3,
                        requestedScopes: e2,
                        integrationType: eQ,
                        errors: tf,
                        isTrustedName: eA
                    }),
                    (0, d.jsx)('div', {
                        className: ec.intObserver,
                        ref: to
                    }),
                    tm
                        ? (0, d.jsx)(et.Z, {
                              error: (null !== (n = null !== (t = tf[T.x.BOT]) && void 0 !== t ? t : tf[T.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eV,
                              onGuildChange: eH,
                              guilds: null != th ? th : [],
                              disabled: '' !== eV && null != eV && !0 === eT
                          })
                        : null,
                    tp
                        ? (0, d.jsx)(eo.Z, {
                              error: (null !== (r = tf[T.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: eY,
                              selectedGuildId: eV,
                              onChannelChange: ej
                          })
                        : null
                ]
            })),
                e2.includes(T.x.BOT) && !g.fS(e4, H.Hn) && (l = 'AUTHORIZE_BOT_PERMISSIONS'),
                tr.length > 1 && (s = 'SELECT_INSTALL_TYPE'),
                (tc = (tm && null == eq) || (tp && null == eY)),
                (tu = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eD) return { body: (0, d.jsx)(R.$, { className: ec.spinner }) };
            (o = (0, d.jsx)(ee.Z, {
                application: eD.application,
                permissions: e4,
                deniedPermissions: eW,
                onPermissionsChange: tl,
                guild: eq
            })),
                (s = 'AUTHORIZE_SCOPES'),
                (tu = !0);
    }
    if (td && null != eD) {
        let e = null === (i = eD.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        u = (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(X.Z, {
                    application: eD.application,
                    scopes: e2,
                    disclosures: e6,
                    redirectUri: null !== (a = eD.redirect_uri) && void 0 !== a ? a : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ev
                }),
                (0, d.jsx)('div', {
                    className: ec.intObserver,
                    ref: to
                })
            ]
        });
    }
    return (
        t_ &&
            null != eD &&
            null != ez &&
            (c = (0, d.jsx)(en.Z, {
                id: ed,
                user: ez,
                application: eD.application,
                bot: eD.bot,
                accountScopes: e3,
                showLogout: eg || !1,
                location: eL
            })),
        tE &&
            (E = (0, d.jsxs)('div', {
                className: f()(ec.footer),
                children: [
                    null != s
                        ? (0, d.jsx)(v.zx, {
                              look: v.zx.Looks.LINK,
                              color: v.zx.Colors.PRIMARY,
                              onClick: () => eU(s),
                              children: eu.Z.Messages.BACK
                          })
                        : (0, d.jsx)(v.zx, {
                              look: v.zx.Looks.LINK,
                              color: v.zx.Colors.PRIMARY,
                              onClick: () => te(!1),
                              children: eu.Z.Messages.CANCEL
                          }),
                    'SELECT_INSTALL_TYPE' !== eP
                        ? eB
                            ? (0, d.jsx)('div', {
                                  className: ec.action,
                                  children: (0, d.jsx)(v.zx, {
                                      onClick: null != l ? () => eU(l) : () => te(!0),
                                      submitting: eG,
                                      disabled: null == u || tc,
                                      children: tc ? eu.Z.Messages.OAUTH2_MISSED_FIELDS : null != l ? eu.Z.Messages.CONTINUE : eu.Z.Messages.AUTHORIZE
                                  })
                              })
                            : (0, d.jsx)('div', {
                                  className: ec.action,
                                  children: (0, d.jsx)(C.Tooltip, {
                                      text: eu.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
                                      children: (e) =>
                                          (0, d.jsx)('div', {
                                              ...e,
                                              className: ec.tooltip,
                                              children: (0, d.jsxs)(v.zx, {
                                                  disabled: !0,
                                                  submitting: eG,
                                                  innerClassName: ec.buttonWithEmoji,
                                                  children: [
                                                      eu.Z.Messages.OAUTH2_KEEP_SCROLLING,
                                                      ' ',
                                                      (0, d.jsx)(L.Z, {
                                                          className: ec.emoji,
                                                          src: V.ZP.getURL(A.Z.convert.fromCodePoint(es.I)),
                                                          emojiName: ':point_down:',
                                                          animated: !1
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
            header: c,
            body: o,
            footer: E,
            nextStep: l,
            appDetails: u,
            sendAuthorize: te,
            hasContentBackground: tu
        }
    );
}
function eh(e, t) {
    if (null == t.location || (null != e && e(t))) return;
    let { host: n, path: r, query: i } = p.parse(t.location, !0),
        a = Y.Z.isDiscordHostname(n) || window.location.host === n;
    if (a && r === el.Z5c.OAUTH2_AUTHORIZED)
        (0, N.h7)((e) =>
            (0, d.jsx)(ei.j, {
                ...e,
                'aria-labelledby': ed,
                children: (0, d.jsx)(ea.Jh, {
                    guild: t.guild,
                    application: t.application,
                    onClose: e.onClose
                })
            })
        );
    else if (a && (null == r ? void 0 : r.startsWith(el.Z5c.OAUTH2_ERROR)))
        (0, N.h7)((e) => {
            let t = i.error_description || i.error || eu.Z.Messages.OAUTH2_UNKNOWN_ERROR;
            return (
                Array.isArray(t) && (t = t[0]),
                (0, d.jsx)(ei.j, {
                    ...e,
                    'aria-labelledby': ed,
                    children: (0, d.jsx)(ea.Lk, {
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
function ep(e, t) {
    if ((0, G.g)('create-guild-and-oauth2-modal')) {
        w.Z.openCreateGuildModal({
            onSuccess: (n) =>
                em(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    em(e, t);
}
function em(e, t) {
    (0, N.h7)(
        (t) =>
            (0, d.jsx)(eE, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: eh.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function eI(e) {
    let { hostname: t = '', host: n, path: r, query: i } = p.parse(e);
    return null != r && null != i && (Y.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(el.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(el.Z5c.OAUTH2_AUTHORIZE)) ? (0, j.y)(i) : null;
}
!(function (e) {
    (e.SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (e.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (e.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
})(r || (r = {}));
