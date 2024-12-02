n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return ed;
        },
        OAuth2AuthorizePage: function () {
            return ec;
        },
        getOAuth2AuthorizeProps: function () {
            return em;
        },
        openOAuth2Modal: function () {
            return eh;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return ep;
        },
        useOAuth2AuthorizeForm: function () {
            return ef;
        }
    }),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(512969),
    c = n(873546),
    d = n(373793),
    f = n(243814),
    _ = n(149765),
    p = n(442837),
    h = n(336317),
    m = n(693789),
    g = n(952265),
    E = n(21340),
    v = n(922770),
    I = n(481060),
    T = n(893776),
    b = n(384275),
    S = n(596454),
    y = n(434650),
    A = n(367907),
    N = n(702493),
    C = n(424602),
    R = n(728345),
    O = n(979200),
    D = n(388905),
    L = n(560067),
    x = n(353926),
    w = n(341298),
    P = n(703656),
    M = n(973616),
    k = n(598077),
    U = n(314897),
    B = n(585483),
    G = n(176354),
    Z = n(700785),
    F = n(591759),
    V = n(807675),
    j = n(489863),
    H = n(228763),
    Y = n(422559),
    W = n(713938),
    K = n(166148),
    z = n(807989),
    q = n(627799),
    Q = n(260430),
    X = n(668185),
    J = n(407546),
    $ = n(41259),
    ee = n(28752),
    et = n(787025),
    en = n(397394),
    er = n(574384),
    ei = n(960662),
    ea = n(981631),
    es = n(186901),
    eo = n(388032),
    el = n(961653);
let eu = 'oauth2-authorize-header-id';
function ec() {
    let e = (0, u.TH)(),
        t = s.useMemo(() => (0, V.y)(e.search), [e.search]);
    (0, N.Z)();
    let r = !e.search.includes('response_type'),
        [i, o] = s.useState(!1),
        l = s.useRef(!1),
        [d, f] = s.useState(null),
        _ = r && !c.tq && !i;
    if (
        (s.useEffect(() => {
            if (c.eL && r) {
                let t = new URL('discord://action/oauth2/authorize');
                (t.search = e.search), window.open(t.toString(), '_self');
            } else
                r &&
                    !c.tq &&
                    !l.current &&
                    (Promise.resolve()
                        .then(n.bind(n, 536285))
                        .then((t) => {
                            let { default: n } = t;
                            n.request(ea.Etm.DEEP_LINK, {
                                type: es.jE.OAUTH2,
                                params: { search: e.search }
                            })
                                .then((e) => {
                                    f(null != e && e);
                                })
                                .catch(() => f(!1))
                                .then(() => n.disconnect());
                        }),
                    (l.current = !0));
        }, [e.search, r]),
        _ && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(D.Dx, { children: eo.intl.string(eo.t.csrAMD) }),
                              (0, a.jsx)(D.DK, { children: eo.intl.string(eo.t['m1+IBg']) }),
                              (0, a.jsx)(m.zx, {
                                  onClick: () => o(!0),
                                  color: m.zx.Colors.BRAND,
                                  children: eo.intl.string(eo.t.fIv16O)
                              })
                          ]
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(D.Dx, { children: eo.intl.string(eo.t['Z+hCVV']) }), (0, a.jsx)(v.$, {})]
                      })),
            (0, a.jsx)(et.G, {
                removeChildWrapper: !0,
                children: (0, a.jsx)('div', {
                    className: el.deepLinkContainer,
                    children: e
                })
            })
        );
    }
    return (0, a.jsx)(et.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(ed, {
            transitionState: I.ModalTransitionState.ENTERED,
            ...t,
            showLogout: !0
        })
    });
}
function ed(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: s, nextStep: o, appDetails: u, hasContentBackground: c, minimalPadding: d } = ef({ ...n }),
        f = (0, a.jsxs)(a.Fragment, {
            children: [
                r,
                (0, a.jsxs)('div', {
                    className: l()(el.content, c ? el.contentBackground : null, d ? el.minimalPadding : null),
                    children: [i, null == o ? u : null]
                })
            ]
        });
    return (0, a.jsx)(et.j, {
        transitionState: t,
        'aria-labelledby': eu,
        footer: s,
        children: (0, a.jsx)('div', {
            className: l()(el.authorize),
            children: (0, a.jsx)(E.zJ, {
                orientation: 'auto',
                children: f
            })
        })
    });
}
function ef(e) {
    var t, n, r, i, o;
    let c,
        g,
        E,
        N,
        C,
        D,
        { clientId: L, responseType: w, redirectUri: B, codeChallenge: et, codeChallengeMethod: es, state: ec, nonce: ed, prompt: ef, authorizations: e_, scopes: ep, permissions: eh, guildId: em, channelId: eg, integrationType: eE, disableGuildSelect: ev = !1, showLogout: eI = !1, cancelCompletesFlow: eT = !0, isTrustedName: eb = !1, isEmbeddedFlow: eS = !1, callback: ey, callbackWithoutPost: eA, onClose: eN, disclosures: eC } = e,
        eR = null != eE ? (null == e_ ? void 0 : e_.get(eE)) : void 0,
        eO = (0, u.TH)(),
        eD = (0, p.e7)([x.Z], () => x.Z.hasLoadedExperiments);
    s.useEffect(() => {
        U.default.isAuthenticated() && !eD && T.Z.getExperiments();
    }, [eD]);
    let [eL, ex] = s.useState(null),
        [ew, eP] = s.useState(null),
        [eM, ek] = s.useState(null),
        [eU, eB] = s.useState(!1),
        [eG, eZ] = s.useState(!1),
        eF = null == eL ? void 0 : eL.guilds,
        [eV, ej] = s.useState(null != em ? em : null),
        [eH, eY] = s.useState(null != eg ? eg : null),
        [eW, eK] = s.useState(Z.Hn),
        ez = s.useMemo(() => ((null == eL ? void 0 : eL.user) != null ? new k.Z(eL.user) : null), [null == eL ? void 0 : eL.user]),
        eq = s.useMemo(() => (null == eF ? void 0 : eF.find((e) => e.id === eV)), [eF, eV]),
        [eQ, eX] = s.useState(null),
        eJ = s.useMemo(() => {
            var e;
            return null == eR && null == eE && (null !== (e = null == ep ? void 0 : ep.length) && void 0 !== e ? e : 0) === 0 && null == B;
        }, [eR, null == ep ? void 0 : ep.length, B, eE]),
        [e$, e0] = s.useState(null);
    s.useEffect(() => {
        eJ && R.ZP.fetchApplication(L).then((e) => e0(M.Z.createFromServer(e)));
    }, [L, eJ]);
    let e1 = s.useMemo(() => {
            var e, t;
            return null == eQ ? null : null == e$ ? void 0 : null === (t = e$.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eQ]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e$ ? void 0 : e$.integrationTypesConfig, eQ]),
        { requestedScopes: e2, accountScopes: e3 } = s.useMemo(() => {
            let e = eJ ? (null == e1 ? void 0 : e1.scopes) : ep,
                t = (0, V.K)(null != e ? e : []),
                n = W.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e1 ? void 0 : e1.scopes, ep, eJ]),
        e4 = s.useMemo(() => {
            var e;
            let t = eJ ? _.vB(null !== (e = null == e1 ? void 0 : e1.permissions) && void 0 !== e ? e : 0) : eh;
            return null != t ? t : Z.Hn;
        }, [null == e1 ? void 0 : e1.permissions, eh, eJ]),
        e6 = s.useRef(!1),
        [e5, e7] = s.useState(null != eC ? eC : []),
        [e8, e9] = s.useState(null != eC && eC.length > 0);
    s.useEffect(() => {
        if (e6.current) return;
        let e = async () => {
            e6.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, O.de)(L);
                e9(!t), e7(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, j.c$)(eO);
                    return;
                }
                ek(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e6.current = !1;
            }
        };
        if (null == eC) {
            if (!U.default.isAuthenticated()) {
                (0, j.c$)(eO);
                return;
            }
            e();
        }
    }, [L, eO, eC, e7, ek, e9, eP]);
    let te = s.useCallback(
            async (e) => {
                if (null != eA) {
                    eB(!0), eA(e);
                    return;
                }
                if (!e && !eT) {
                    null != ey &&
                        (ey({
                            application: null == eL ? void 0 : eL.application,
                            guild: eq
                        }),
                        null == eN || eN());
                    return;
                }
                if (null == eQ) {
                    ek(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eB(!0);
                    let n = await (0, j.Iq)({
                        authorize: e,
                        clientId: L,
                        scopes: e2,
                        responseType: w,
                        redirectUri: B,
                        codeChallenge: et,
                        codeChallengeMethod: es,
                        state: ec,
                        nonce: ed,
                        integrationType: eQ,
                        permissions: _.Od(e4, eW),
                        guildId: eQ === d.Y.GUILD_INSTALL && null != eV ? eV : void 0,
                        channelId: eQ === d.Y.GUILD_INSTALL && null != eH ? eH : void 0
                    });
                    if (
                        (e &&
                            (await (0, O.x9)(L, e5),
                            setTimeout(() => {
                                b.Z.fetch();
                            }, 100)),
                        null != ey)
                    )
                        ey({
                            application: null == eL ? void 0 : eL.application,
                            location: n.location,
                            guild: eq
                        }),
                            null == eN || eN();
                    else if (null != n.location) {
                        var t;
                        let e = null === (t = F.Z.toURLSafe(n.location)) || void 0 === t ? void 0 : t.pathname;
                        F.Z.isDiscordUrl(n.location) && e === ea.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)(ea.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eL ? void 0 : eL.application,
                                      guild: eq
                                  }
                              })
                            : (window.location = n.location);
                    } else eB(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? ek(Error(e.message)) : ek(e), eP('AUTHORIZE_SCOPES'), eB(!1);
                }
            },
            [eA, eT, ey, null == eL ? void 0 : eL.application, eq, eN, L, e2, w, B, et, es, ec, ed, e4, eW, eV, eQ, eH, e5]
        ),
        tt = s.useRef(!1),
        tn = s.useCallback(async () => {
            if (!U.default.isAuthenticated()) {
                (0, j.c$)(eO);
                return;
            }
            if (!e6.current) {
                if (!tt.current) {
                    tt.current = !0;
                    try {
                        let e =
                            null != eR
                                ? eR
                                : await (0, j.Ww)({
                                      clientId: L,
                                      scopes: e2,
                                      responseType: w,
                                      redirectUri: B,
                                      codeChallenge: et,
                                      codeChallengeMethod: es,
                                      state: ec,
                                      nonce: ed,
                                      integrationType: null != eQ ? eQ : void 0
                                  });
                        ex((0, H.d)(e)), ef === K.s.NONE && e.authorized && !e8 && te(!0), (0, A.yw)(ea.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, j.c$)(eO);
                            return;
                        }
                        ek(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        tt.current = !1;
                    }
                }
            }
        }, [eO, eR, L, e2, w, B, et, es, ec, ed, eQ, ef, te, e8]),
        tr = s.useMemo(() => {
            var e;
            return null != e$ && eJ
                ? Object.entries(null !== (e = e$.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e$, eJ]),
        ti = s.useRef(null);
    s.useEffect(() => {
        ew !== ti.current &&
            ((ti.current = ew),
            (0, A.yw)(ea.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: ew,
                application_id: L,
                integration_type: eQ,
                scopes: e2,
                permissions: e4.toString()
            }));
    }, [L, eQ, e4, e2, ew]),
        s.useEffect(() => {
            if (null == ew && (!eJ || null != e$) && !!eD)
                if (null != eR) {
                    var e;
                    eX(null !== (e = eR.integration_type) && void 0 !== e ? e : d.Y.GUILD_INSTALL), eP('AUTHORIZE_SCOPES');
                } else tr.length > 1 ? eP('SELECT_INSTALL_TYPE') : (1 === tr.length ? eX(tr[0]) : null != eE ? eX(eE) : eX(d.Y.GUILD_INSTALL), eP('AUTHORIZE_SCOPES'));
        }, [eR, tr, e$, eJ, eE, ew, eD]),
        s.useEffect(() => {
            if (null == eQ || null != eL || null != eM) return;
            eQ === d.Y.USER_INSTALL && (ej(null), eY(null));
            let e = e2.filter((e) => !W.ak.includes(e));
            0 === e2.length ? ek(Error('No scopes were provided.')) : e.length > 0 ? ek(Error('Invalid scope: '.concat(e[0]))) : (0, Y._$)(e4) ? ek(Error('Invalid permission(s) provided.')) : tn();
        }, [e8, tn, e2, e4, eQ, eL, eM]);
    let ta = s.useCallback((e) => {
            e && eZ(!0);
        }, []),
        ts = (0, y.O)(ta);
    if (eM instanceof Error) return { body: (0, a.jsx)(en.Lk, { message: eM.message }) };
    let to = !1,
        tl = !1,
        tu = !0,
        tc = !0,
        td = !0,
        tf = !1;
    switch (ew) {
        case null:
            return { body: (0, a.jsx)(v.$, { className: el.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e$) return { body: (0, a.jsx)(v.$, { className: el.spinner }) };
            (c = (0, a.jsx)(ee.Z, {
                application: e$,
                onSelect: (e) => {
                    eX(e), ex(null), eP('AUTHORIZE_SCOPES');
                },
                onClose: eN
            })),
                (tu = !1),
                (tc = !1),
                (td = !1),
                (tf = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eL || null == ez || null == eQ) return { body: (0, a.jsx)(v.$, { className: el.spinner }) };
            let t_ = null == eM || eM instanceof Error ? {} : eM,
                tp = null == eF ? void 0 : eF.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                th = eQ === d.Y.GUILD_INSTALL && e2.includes(f.x.WEBHOOK_INCOMING),
                tm = th || (eQ === d.Y.GUILD_INSTALL && (e2.includes(f.x.BOT) || e2.includes(f.x.APPLICATIONS_COMMANDS)));
            (c = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(q.Z, { accountScopes: e3 }),
                    (0, a.jsx)(Q.Z, {
                        application: eL.application,
                        accountScopes: e3,
                        requestedScopes: e2,
                        integrationType: eQ,
                        errors: t_,
                        isTrustedName: eb
                    }),
                    (0, a.jsx)('div', {
                        className: el.intObserver,
                        ref: ts
                    }),
                    tm
                        ? (0, a.jsx)(J.Z, {
                              error: (null !== (n = null !== (t = t_[f.x.BOT]) && void 0 !== t ? t : t_[f.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eV,
                              onGuildChange: ej,
                              guilds: null != tp ? tp : [],
                              disabled: '' !== eV && null != eV && !0 === ev
                          })
                        : null,
                    th
                        ? (0, a.jsx)(er.Z, {
                              error: (null !== (r = t_[f.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: eH,
                              selectedGuildId: eV,
                              onChannelChange: eY
                          })
                        : null
                ]
            })),
                e2.includes(f.x.BOT) && !_.fS(e4, Z.Hn) && (E = 'AUTHORIZE_BOT_PERMISSIONS'),
                tr.length > 1 && (g = 'SELECT_INSTALL_TYPE'),
                (tl = (tm && null == eq) || (th && null == eH)),
                (to = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eL) return { body: (0, a.jsx)(v.$, { className: el.spinner }) };
            (c = (0, a.jsx)(X.Z, {
                application: eL.application,
                permissions: e4,
                deniedPermissions: eW,
                onPermissionsChange: (e, t) => {
                    eK((n) => (e ? _.Od(n, t) : _.IH(n, t)));
                },
                guild: eq
            })),
                (g = 'AUTHORIZE_SCOPES'),
                (to = !0);
    }
    if (tu && null != eL) {
        let e = null === (i = eL.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        N = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(z.Z, {
                    application: eL.application,
                    scopes: e2,
                    disclosures: e5,
                    redirectUri: null !== (o = eL.redirect_uri) && void 0 !== o ? o : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eS
                }),
                (0, a.jsx)('div', {
                    className: el.intObserver,
                    ref: ts
                })
            ]
        });
    }
    return (
        tc &&
            null != eL &&
            null != ez &&
            (C = (0, a.jsx)($.Z, {
                id: eu,
                user: ez,
                application: eL.application,
                bot: eL.bot,
                accountScopes: e3,
                showLogout: eI || !1,
                location: eO
            })),
        td &&
            (D = (0, a.jsxs)('div', {
                className: l()(el.footer),
                children: [
                    null != g
                        ? (0, a.jsx)(m.zx, {
                              look: m.zx.Looks.LINK,
                              color: m.zx.Colors.PRIMARY,
                              onClick: () => eP(g),
                              children: eo.intl.string(eo.t['13/7kZ'])
                          })
                        : (0, a.jsx)(m.zx, {
                              look: m.zx.Looks.LINK,
                              color: m.zx.Colors.PRIMARY,
                              onClick: () => te(!1),
                              children: eo.intl.string(eo.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== ew
                        ? eG
                            ? (0, a.jsx)('div', {
                                  className: el.action,
                                  children: (0, a.jsx)(m.zx, {
                                      onClick: null != E ? () => eP(E) : () => te(!0),
                                      submitting: eU,
                                      disabled: null == N || tl,
                                      children: tl ? eo.intl.string(eo.t.BwwiSE) : null != E ? eo.intl.string(eo.t['3PatS0']) : eo.intl.string(eo.t['y+/PEx'])
                                  })
                              })
                            : (0, a.jsx)('div', {
                                  className: el.action,
                                  children: (0, a.jsx)(I.Tooltip, {
                                      text: eo.intl.string(eo.t['7UiwCw']),
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              ...e,
                                              className: el.tooltip,
                                              children: (0, a.jsxs)(m.zx, {
                                                  disabled: !0,
                                                  submitting: eU,
                                                  innerClassName: el.buttonWithEmoji,
                                                  children: [
                                                      eo.intl.string(eo.t.N22i9P),
                                                      ' ',
                                                      (0, a.jsx)(S.Z, {
                                                          className: el.emoji,
                                                          src: G.ZP.getURL(h.Z.convert.fromCodePoint(ei.I)),
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
            header: C,
            body: c,
            footer: D,
            nextStep: E,
            appDetails: N,
            sendAuthorize: te,
            hasContentBackground: to,
            minimalPadding: tf
        }
    );
}
function e_(e, t) {
    var n, r;
    if (null == t.location || (null != e && e(t))) return;
    let { host: i, pathname: s, searchParams: o } = null !== (n = F.Z.toURLSafe(t.location)) && void 0 !== n ? n : {},
        l = F.Z.isDiscordHostname(null != i ? i : null) || window.location.host === i;
    if (l && s === ea.Z5c.OAUTH2_AUTHORIZED) {
        let e = C._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(ea.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? B.S.safeDispatch(ea.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, g.h7)((e) => {
                  let n = (0, a.jsx)(en._Z, {
                      guild: t.guild,
                      application: t.application,
                      onClose: e.onClose
                  });
                  return (0, a.jsx)(et.j, {
                      ...e,
                      'aria-labelledby': eu,
                      footer: n,
                      children: (0, a.jsx)(en.Jh, {
                          guild: t.guild,
                          application: t.application,
                          onClose: e.onClose
                      })
                  });
              });
    } else
        l && (null == s ? void 0 : s.startsWith(ea.Z5c.OAUTH2_ERROR))
            ? (0, g.h7)((e) => {
                  var t, n;
                  let r = null !== (n = null !== (t = null == o ? void 0 : o.get('error_description')) && void 0 !== t ? t : null == o ? void 0 : o.get('error')) && void 0 !== n ? n : eo.intl.string(eo.t['mqn87+']);
                  return (
                      Array.isArray(r) && (r = r[0]),
                      (0, a.jsx)(et.j, {
                          ...e,
                          'aria-labelledby': eu,
                          children: (0, a.jsx)(en.Lk, {
                              message: r,
                              onClose: e.onClose
                          })
                      })
                  );
              })
            : null === (r = window.open(t.location, '_blank')) || void 0 === r || r.focus();
}
function ep(e, t) {
    if ((0, w.g)('create-guild-and-oauth2-modal')) {
        L.Z.openCreateGuildModal({
            onSuccess: (n) =>
                eh(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    eh(e, t);
}
function eh(e, t) {
    (0, g.h7)(
        (t) =>
            (0, a.jsx)(ed, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: e_.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function em(e) {
    var t;
    let { hostname: n = '', host: r, pathname: i, search: a } = null !== (t = F.Z.toURLSafe(e)) && void 0 !== t ? t : {};
    return null != i && null != a && (F.Z.isDiscordHostname(n) || r === window.location.host) && (i.startsWith('/api'.concat(ea.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(ea.Z5c.OAUTH2_AUTHORIZE)) ? (0, V.y)(a) : null;
}
((i = r || (r = {})).SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (i.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (i.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
