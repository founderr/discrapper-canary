n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return ec;
        },
        OAuth2AuthorizePage: function () {
            return eu;
        },
        getOAuth2AuthorizeProps: function () {
            return ep;
        },
        openOAuth2Modal: function () {
            return eh;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return e_;
        },
        useOAuth2AuthorizeForm: function () {
            return ed;
        }
    }),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(411104);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(512969),
    c = n(729594),
    d = n(873546),
    f = n(373793),
    _ = n(243814),
    h = n(149765),
    p = n(442837),
    m = n(946188),
    g = n(693789),
    E = n(952265),
    v = n(21340),
    I = n(922770),
    S = n(481060),
    T = n(893776),
    b = n(384275),
    y = n(596454),
    A = n(434650),
    N = n(367907),
    C = n(702493),
    R = n(424602),
    O = n(728345),
    D = n(979200),
    L = n(560067),
    x = n(353926),
    w = n(341298),
    M = n(703656),
    P = n(973616),
    k = n(598077),
    U = n(314897),
    G = n(585483),
    B = n(176354),
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
    es = n(388032),
    eo = n(195943);
let el = 'oauth2-authorize-header-id';
function eu() {
    let e = (0, u.TH)(),
        t = s.useMemo(() => (0, V.y)(e.search), [e.search]);
    return (
        (0, C.Z)(),
        s.useEffect(() => {
            let t = !e.search.includes('response_type');
            if (d.eL && t) {
                let t = new URL('discord://action/oauth2/authorize');
                (t.search = e.search), window.open(t.toString(), '_self');
            }
        }, [e.search]),
        (0, a.jsx)(et.G, {
            removeChildWrapper: !0,
            children: (0, a.jsx)(ec, {
                transitionState: S.ModalTransitionState.ENTERED,
                ...t,
                showLogout: !0
            })
        })
    );
}
function ec(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: s, nextStep: o, appDetails: u, hasContentBackground: c, minimalPadding: d } = ed({ ...n }),
        f = (0, a.jsxs)(a.Fragment, {
            children: [
                r,
                (0, a.jsxs)('div', {
                    className: l()(eo.content, c ? eo.contentBackground : null, d ? eo.minimalPadding : null),
                    children: [i, null == o ? u : null]
                })
            ]
        });
    return (0, a.jsx)(et.j, {
        transitionState: t,
        'aria-labelledby': el,
        footer: s,
        children: (0, a.jsx)('div', {
            className: l()(eo.authorize),
            children: (0, a.jsx)(v.zJ, {
                orientation: 'auto',
                children: f
            })
        })
    });
}
function ed(e) {
    var t, n, r, i, o;
    let d,
        E,
        v,
        C,
        R,
        L,
        { clientId: w, responseType: G, redirectUri: et, codeChallenge: eu, codeChallengeMethod: ec, state: ed, nonce: ef, prompt: e_, authorizations: eh, scopes: ep, permissions: em, guildId: eg, channelId: eE, integrationType: ev, disableGuildSelect: eI = !1, showLogout: eS = !1, cancelCompletesFlow: eT = !0, isTrustedName: eb = !1, isEmbeddedFlow: ey = !1, callback: eA, callbackWithoutPost: eN, onClose: eC, disclosures: eR } = e,
        eO = null != ev ? (null == eh ? void 0 : eh.get(ev)) : void 0,
        eD = (0, u.TH)(),
        eL = (0, p.e7)([x.Z], () => x.Z.hasLoadedExperiments);
    s.useEffect(() => {
        U.default.isAuthenticated() && !eL && T.Z.getExperiments();
    }, [eL]);
    let [ex, ew] = s.useState(null),
        [eM, eP] = s.useState(null),
        [ek, eU] = s.useState(null),
        [eG, eB] = s.useState(!1),
        [eZ, eF] = s.useState(!1),
        eV = null == ex ? void 0 : ex.guilds,
        [ej, eH] = s.useState(null != eg ? eg : null),
        [eY, eW] = s.useState(null != eE ? eE : null),
        [eK, ez] = s.useState(Z.Hn),
        eq = s.useMemo(() => ((null == ex ? void 0 : ex.user) != null ? new k.Z(ex.user) : null), [null == ex ? void 0 : ex.user]),
        eQ = s.useMemo(() => (null == eV ? void 0 : eV.find((e) => e.id === ej)), [eV, ej]),
        [eX, eJ] = s.useState(null),
        e$ = s.useMemo(() => {
            var e;
            return null == eO && null == ev && (null !== (e = null == ep ? void 0 : ep.length) && void 0 !== e ? e : 0) === 0 && null == et;
        }, [eO, null == ep ? void 0 : ep.length, et, ev]),
        [e0, e1] = s.useState(null);
    s.useEffect(() => {
        e$ && O.ZP.fetchApplication(w).then((e) => e1(P.Z.createFromServer(e)));
    }, [w, e$]);
    let e2 = s.useMemo(() => {
            var e, t;
            return null == eX ? null : null == e0 ? void 0 : null === (t = e0.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eX]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e0 ? void 0 : e0.integrationTypesConfig, eX]),
        { requestedScopes: e3, accountScopes: e4 } = s.useMemo(() => {
            let e = e$ ? (null == e2 ? void 0 : e2.scopes) : ep,
                t = (0, V.K)(null != e ? e : []),
                n = W.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e2 ? void 0 : e2.scopes, ep, e$]),
        e6 = s.useMemo(() => {
            var e;
            let t = e$ ? h.vB(null !== (e = null == e2 ? void 0 : e2.permissions) && void 0 !== e ? e : 0) : em;
            return null != t ? t : Z.Hn;
        }, [null == e2 ? void 0 : e2.permissions, em, e$]),
        e5 = s.useRef(!1),
        [e7, e8] = s.useState(null != eR ? eR : []),
        [e9, te] = s.useState(null != eR && eR.length > 0);
    s.useEffect(() => {
        if (e5.current) return;
        let e = async () => {
            e5.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, D.de)(w);
                te(!t), e8(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, j.c$)(eD);
                    return;
                }
                eU(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e5.current = !1;
            }
        };
        if (null == eR) {
            if (!U.default.isAuthenticated()) {
                (0, j.c$)(eD);
                return;
            }
            e();
        }
    }, [w, eD, eR, e8, eU, te, eP]);
    let tt = s.useCallback(
            async (e) => {
                if (null != eN) {
                    eB(!0), eN(e);
                    return;
                }
                if (!e && !eT) {
                    null != eA &&
                        (eA({
                            application: null == ex ? void 0 : ex.application,
                            guild: eQ
                        }),
                        null == eC || eC());
                    return;
                }
                if (null == eX) {
                    eU(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eB(!0);
                    let t = await (0, j.Iq)({
                        authorize: e,
                        clientId: w,
                        scopes: e3,
                        responseType: G,
                        redirectUri: et,
                        codeChallenge: eu,
                        codeChallengeMethod: ec,
                        state: ed,
                        nonce: ef,
                        integrationType: eX,
                        permissions: h.Od(e6, eK),
                        guildId: eX === f.Y.GUILD_INSTALL && null != ej ? ej : void 0,
                        channelId: eX === f.Y.GUILD_INSTALL && null != eY ? eY : void 0
                    });
                    if (
                        (e &&
                            (await (0, D.x9)(w, e7),
                            setTimeout(() => {
                                b.Z.fetch();
                            }, 100)),
                        null != eA)
                    )
                        eA({
                            application: null == ex ? void 0 : ex.application,
                            location: t.location,
                            guild: eQ
                        }),
                            null == eC || eC();
                    else if (null != t.location) {
                        let { host: e, path: n } = c.parse(t.location);
                        F.Z.isDiscordHostname(e) && n === ea.Z5c.OAUTH2_AUTHORIZED
                            ? (0, M.uL)(ea.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == ex ? void 0 : ex.application,
                                      guild: eQ
                                  }
                              })
                            : (window.location = t.location);
                    } else eB(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eU(Error(e.message)) : eU(e), eP('AUTHORIZE_SCOPES'), eB(!1);
                }
            },
            [eN, eT, eA, null == ex ? void 0 : ex.application, eQ, eC, w, e3, G, et, eu, ec, ed, ef, e6, eK, ej, eX, eY, e7]
        ),
        tn = s.useRef(!1),
        tr = s.useCallback(async () => {
            if (!U.default.isAuthenticated()) {
                (0, j.c$)(eD);
                return;
            }
            if (!e5.current) {
                if (!tn.current) {
                    tn.current = !0;
                    try {
                        let e =
                            null != eO
                                ? eO
                                : await (0, j.Ww)({
                                      clientId: w,
                                      scopes: e3,
                                      responseType: G,
                                      redirectUri: et,
                                      codeChallenge: eu,
                                      codeChallengeMethod: ec,
                                      state: ed,
                                      nonce: ef,
                                      integrationType: null != eX ? eX : void 0
                                  });
                        ew((0, H.d)(e)), e_ === K.s.NONE && e.authorized && !e9 && tt(!0), (0, N.yw)(ea.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, j.c$)(eD);
                            return;
                        }
                        eU(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        tn.current = !1;
                    }
                }
            }
        }, [eD, eO, w, e3, G, et, eu, ec, ed, ef, eX, e_, tt, e9]),
        ti = s.useMemo(() => {
            var e;
            return null != e0 && e$
                ? Object.entries(null !== (e = e0.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [e0, e$]),
        ta = s.useRef(null);
    s.useEffect(() => {
        eM !== ta.current &&
            ((ta.current = eM),
            (0, N.yw)(ea.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eM,
                application_id: w,
                integration_type: eX,
                scopes: e3,
                permissions: e6.toString()
            }));
    }, [w, eX, e6, e3, eM]),
        s.useEffect(() => {
            if (null == eM && (!e$ || null != e0) && !!eL)
                if (null != eO) {
                    var e;
                    eJ(null !== (e = eO.integration_type) && void 0 !== e ? e : f.Y.GUILD_INSTALL), eP('AUTHORIZE_SCOPES');
                } else ti.length > 1 ? eP('SELECT_INSTALL_TYPE') : (1 === ti.length ? eJ(ti[0]) : null != ev ? eJ(ev) : eJ(f.Y.GUILD_INSTALL), eP('AUTHORIZE_SCOPES'));
        }, [eO, ti, e0, e$, ev, eM, eL]),
        s.useEffect(() => {
            if (null == eX || null != ex || null != ek) return;
            eX === f.Y.USER_INSTALL && (eH(null), eW(null));
            let e = e3.filter((e) => !W.ak.includes(e));
            0 === e3.length ? eU(Error('No scopes were provided.')) : e.length > 0 ? eU(Error('Invalid scope: '.concat(e[0]))) : (0, Y._$)(e6) ? eU(Error('Invalid permission(s) provided.')) : tr();
        }, [e9, tr, e3, e6, eX, ex, ek]);
    let ts = s.useCallback((e) => {
            e && eF(!0);
        }, []),
        to = (0, A.O)(ts);
    if (ek instanceof Error) return { body: (0, a.jsx)(en.Lk, { message: ek.message }) };
    let tl = !1,
        tu = !1,
        tc = !0,
        td = !0,
        tf = !0,
        t_ = !1;
    switch (eM) {
        case null:
            return { body: (0, a.jsx)(I.$, { className: eo.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e0) return { body: (0, a.jsx)(I.$, { className: eo.spinner }) };
            (d = (0, a.jsx)(ee.Z, {
                application: e0,
                onSelect: (e) => {
                    eJ(e), ew(null), eP('AUTHORIZE_SCOPES');
                },
                onClose: eC
            })),
                (tc = !1),
                (td = !1),
                (tf = !1),
                (t_ = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == ex || null == eq || null == eX) return { body: (0, a.jsx)(I.$, { className: eo.spinner }) };
            let th = null == ek || ek instanceof Error ? {} : ek,
                tp = null == eV ? void 0 : eV.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tm = eX === f.Y.GUILD_INSTALL && e3.includes(_.x.WEBHOOK_INCOMING),
                tg = tm || (eX === f.Y.GUILD_INSTALL && (e3.includes(_.x.BOT) || e3.includes(_.x.APPLICATIONS_COMMANDS)));
            (d = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(q.Z, { accountScopes: e4 }),
                    (0, a.jsx)(Q.Z, {
                        application: ex.application,
                        accountScopes: e4,
                        requestedScopes: e3,
                        integrationType: eX,
                        errors: th,
                        isTrustedName: eb
                    }),
                    (0, a.jsx)('div', {
                        className: eo.intObserver,
                        ref: to
                    }),
                    tg
                        ? (0, a.jsx)(J.Z, {
                              error: (null !== (n = null !== (t = th[_.x.BOT]) && void 0 !== t ? t : th[_.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: ej,
                              onGuildChange: eH,
                              guilds: null != tp ? tp : [],
                              disabled: '' !== ej && null != ej && !0 === eI
                          })
                        : null,
                    tm
                        ? (0, a.jsx)(er.Z, {
                              error: (null !== (r = th[_.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: eY,
                              selectedGuildId: ej,
                              onChannelChange: eW
                          })
                        : null
                ]
            })),
                e3.includes(_.x.BOT) && !h.fS(e6, Z.Hn) && (v = 'AUTHORIZE_BOT_PERMISSIONS'),
                ti.length > 1 && (E = 'SELECT_INSTALL_TYPE'),
                (tu = (tg && null == eQ) || (tm && null == eY)),
                (tl = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == ex) return { body: (0, a.jsx)(I.$, { className: eo.spinner }) };
            (d = (0, a.jsx)(X.Z, {
                application: ex.application,
                permissions: e6,
                deniedPermissions: eK,
                onPermissionsChange: (e, t) => {
                    ez((n) => (e ? h.Od(n, t) : h.IH(n, t)));
                },
                guild: eQ
            })),
                (E = 'AUTHORIZE_SCOPES'),
                (tl = !0);
    }
    if (tc && null != ex) {
        let e = null === (i = ex.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        C = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(z.Z, {
                    application: ex.application,
                    scopes: e3,
                    disclosures: e7,
                    redirectUri: null !== (o = ex.redirect_uri) && void 0 !== o ? o : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: ey
                }),
                (0, a.jsx)('div', {
                    className: eo.intObserver,
                    ref: to
                })
            ]
        });
    }
    return (
        td &&
            null != ex &&
            null != eq &&
            (R = (0, a.jsx)($.Z, {
                id: el,
                user: eq,
                application: ex.application,
                bot: ex.bot,
                accountScopes: e4,
                showLogout: eS || !1,
                location: eD
            })),
        tf &&
            (L = (0, a.jsxs)('div', {
                className: l()(eo.footer),
                children: [
                    null != E
                        ? (0, a.jsx)(g.zx, {
                              look: g.zx.Looks.LINK,
                              color: g.zx.Colors.PRIMARY,
                              onClick: () => eP(E),
                              children: es.intl.string(es.t['13/7kZ'])
                          })
                        : (0, a.jsx)(g.zx, {
                              look: g.zx.Looks.LINK,
                              color: g.zx.Colors.PRIMARY,
                              onClick: () => tt(!1),
                              children: es.intl.string(es.t['ETE/oK'])
                          }),
                    'SELECT_INSTALL_TYPE' !== eM
                        ? eZ
                            ? (0, a.jsx)('div', {
                                  className: eo.action,
                                  children: (0, a.jsx)(g.zx, {
                                      onClick: null != v ? () => eP(v) : () => tt(!0),
                                      submitting: eG,
                                      disabled: null == C || tu,
                                      children: tu ? es.intl.string(es.t.BwwiSE) : null != v ? es.intl.string(es.t['3PatS0']) : es.intl.string(es.t['y+/PEx'])
                                  })
                              })
                            : (0, a.jsx)('div', {
                                  className: eo.action,
                                  children: (0, a.jsx)(S.Tooltip, {
                                      text: es.intl.string(es.t['7UiwCw']),
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              ...e,
                                              className: eo.tooltip,
                                              children: (0, a.jsxs)(g.zx, {
                                                  disabled: !0,
                                                  submitting: eG,
                                                  innerClassName: eo.buttonWithEmoji,
                                                  children: [
                                                      es.intl.string(es.t.N22i9P),
                                                      ' ',
                                                      (0, a.jsx)(y.Z, {
                                                          className: eo.emoji,
                                                          src: B.ZP.getURL(m.Z.convert.fromCodePoint(ei.I)),
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
            header: R,
            body: d,
            footer: L,
            nextStep: v,
            appDetails: C,
            sendAuthorize: tt,
            hasContentBackground: tl,
            minimalPadding: t_
        }
    );
}
function ef(e, t) {
    if (null == t.location || (null != e && e(t))) return;
    let { host: n, path: r, query: i } = c.parse(t.location, !0),
        s = F.Z.isDiscordHostname(n) || window.location.host === n;
    if (s && r === ea.Z5c.OAUTH2_AUTHORIZED) {
        let e = R._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(ea.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? G.S.safeDispatch(ea.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, E.h7)((e) => {
                  let n = (0, a.jsx)(en._Z, {
                      guild: t.guild,
                      application: t.application,
                      onClose: e.onClose
                  });
                  return (0, a.jsx)(et.j, {
                      ...e,
                      'aria-labelledby': el,
                      footer: n,
                      children: (0, a.jsx)(en.Jh, {
                          guild: t.guild,
                          application: t.application,
                          onClose: e.onClose
                      })
                  });
              });
    } else if (s && (null == r ? void 0 : r.startsWith(ea.Z5c.OAUTH2_ERROR)))
        (0, E.h7)((e) => {
            let t = i.error_description || i.error || es.intl.string(es.t['mqn87+']);
            return (
                Array.isArray(t) && (t = t[0]),
                (0, a.jsx)(et.j, {
                    ...e,
                    'aria-labelledby': el,
                    children: (0, a.jsx)(en.Lk, {
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
function e_(e, t) {
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
    (0, E.h7)(
        (t) =>
            (0, a.jsx)(ec, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: ef.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function ep(e) {
    let { hostname: t = '', host: n, path: r, query: i } = c.parse(e);
    return null != r && null != i && (F.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(ea.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(ea.Z5c.OAUTH2_AUTHORIZE)) ? (0, V.y)(i) : null;
}
((i = r || (r = {})).SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (i.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (i.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
