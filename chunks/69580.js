n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return ec;
        },
        OAuth2AuthorizePage: function () {
            return eu;
        },
        getOAuth2AuthorizeProps: function () {
            return eh;
        },
        openOAuth2Modal: function () {
            return ef;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return eE;
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
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(266067),
    c = n(729594),
    d = n(873546),
    _ = n(373793),
    E = n(243814),
    f = n(149765),
    h = n(442837),
    p = n(946188),
    I = n(693789),
    m = n(952265),
    T = n(21340),
    S = n(922770),
    g = n(481060),
    A = n(893776),
    N = n(384275),
    R = n(596454),
    O = n(434650),
    v = n(367907),
    C = n(702493),
    L = n(424602),
    y = n(728345),
    D = n(979200),
    b = n(560067),
    M = n(353926),
    P = n(341298),
    U = n(703656),
    w = n(973616),
    x = n(598077),
    G = n(314897),
    k = n(585483),
    B = n(176354),
    F = n(700785),
    V = n(591759),
    H = n(807675),
    Z = n(489863),
    Y = n(228763),
    j = n(422559),
    W = n(713938),
    K = n(166148),
    z = n(807989),
    q = n(627799),
    Q = n(260430),
    X = n(668185),
    $ = n(407546),
    J = n(41259),
    ee = n(28752),
    et = n(787025),
    en = n(397394),
    er = n(574384),
    ei = n(960662),
    ea = n(981631),
    es = n(689938),
    eo = n(195943);
let el = 'oauth2-authorize-header-id';
function eu() {
    let e = (0, u.TH)(),
        t = s.useMemo(() => (0, H.y)(e.search), [e.search]);
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
                transitionState: g.ModalTransitionState.ENTERED,
                ...t,
                showLogout: !0
            })
        })
    );
}
function ec(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: s, nextStep: o, appDetails: u, hasContentBackground: c, minimalPadding: d } = ed({ ...n }),
        _ = (0, a.jsxs)(a.Fragment, {
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
            children: (0, a.jsx)(T.zJ, {
                orientation: 'auto',
                children: _
            })
        })
    });
}
function ed(e) {
    var t, n, r, i, o;
    let d,
        m,
        T,
        C,
        L,
        b,
        { clientId: P, responseType: k, redirectUri: et, codeChallenge: eu, codeChallengeMethod: ec, state: ed, nonce: e_, prompt: eE, authorizations: ef, scopes: eh, permissions: ep, guildId: eI, channelId: em, integrationType: eT, disableGuildSelect: eS = !1, showLogout: eg = !1, cancelCompletesFlow: eA = !0, isTrustedName: eN = !1, isEmbeddedFlow: eR = !1, callback: eO, callbackWithoutPost: ev, onClose: eC, disclosures: eL } = e,
        ey = null != eT ? (null == ef ? void 0 : ef.get(eT)) : void 0,
        eD = (0, u.TH)(),
        eb = (0, h.e7)([M.Z], () => M.Z.hasLoadedExperiments);
    s.useEffect(() => {
        G.default.isAuthenticated() && !eb && A.Z.getExperiments();
    }, [eb]);
    let [eM, eP] = s.useState(null),
        [eU, ew] = s.useState(null),
        [ex, eG] = s.useState(null),
        [ek, eB] = s.useState(!1),
        [eF, eV] = s.useState(!1),
        eH = null == eM ? void 0 : eM.guilds,
        [eZ, eY] = s.useState(null != eI ? eI : null),
        [ej, eW] = s.useState(null != em ? em : null),
        [eK, ez] = s.useState(F.Hn),
        eq = s.useMemo(() => ((null == eM ? void 0 : eM.user) != null ? new x.Z(eM.user) : null), [null == eM ? void 0 : eM.user]),
        eQ = s.useMemo(() => (null == eH ? void 0 : eH.find((e) => e.id === eZ)), [eH, eZ]),
        [eX, e$] = s.useState(null),
        eJ = s.useMemo(() => {
            var e;
            return null == ey && null == eT && (null !== (e = null == eh ? void 0 : eh.length) && void 0 !== e ? e : 0) === 0 && null == et;
        }, [ey, null == eh ? void 0 : eh.length, et, eT]),
        [e0, e1] = s.useState(null);
    s.useEffect(() => {
        eJ && y.ZP.fetchApplication(P).then((e) => e1(w.Z.createFromServer(e)));
    }, [P, eJ]);
    let e2 = s.useMemo(() => {
            var e, t;
            return null == eX ? null : null == e0 ? void 0 : null === (t = e0.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eX]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == e0 ? void 0 : e0.integrationTypesConfig, eX]),
        { requestedScopes: e3, accountScopes: e4 } = s.useMemo(() => {
            let e = eJ ? (null == e2 ? void 0 : e2.scopes) : eh,
                t = (0, H.K)(null != e ? e : []),
                n = W.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e2 ? void 0 : e2.scopes, eh, eJ]),
        e5 = s.useMemo(() => {
            var e;
            let t = eJ ? f.vB(null !== (e = null == e2 ? void 0 : e2.permissions) && void 0 !== e ? e : 0) : ep;
            return null != t ? t : F.Hn;
        }, [null == e2 ? void 0 : e2.permissions, ep, eJ]),
        e6 = s.useRef(!1),
        [e7, e8] = s.useState(null != eL ? eL : []),
        [e9, te] = s.useState(null != eL && eL.length > 0);
    s.useEffect(() => {
        if (e6.current) return;
        let e = async () => {
            e6.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, D.de)(P);
                te(!t), e8(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, Z.c$)(eD);
                    return;
                }
                eG(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e6.current = !1;
            }
        };
        if (null == eL) {
            if (!G.default.isAuthenticated()) {
                (0, Z.c$)(eD);
                return;
            }
            e();
        }
    }, [P, eD, eL, e8, eG, te, ew]);
    let tt = s.useCallback(
            async (e) => {
                if (null != ev) {
                    ev(e);
                    return;
                }
                if (!e && !eA) {
                    null != eO &&
                        (eO({
                            application: null == eM ? void 0 : eM.application,
                            guild: eQ
                        }),
                        null == eC || eC());
                    return;
                }
                if (null == eX) {
                    eG(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eB(!0);
                    let t = await (0, Z.Iq)({
                        authorize: e,
                        clientId: P,
                        scopes: e3,
                        responseType: k,
                        redirectUri: et,
                        codeChallenge: eu,
                        codeChallengeMethod: ec,
                        state: ed,
                        nonce: e_,
                        integrationType: eX,
                        permissions: f.Od(e5, eK),
                        guildId: eX === _.Y.GUILD_INSTALL && null != eZ ? eZ : void 0,
                        channelId: eX === _.Y.GUILD_INSTALL && null != ej ? ej : void 0
                    });
                    if ((e && (N.Z.fetch(), await (0, D.x9)(P, e7)), null != eO))
                        eO({
                            application: null == eM ? void 0 : eM.application,
                            location: t.location,
                            guild: eQ
                        }),
                            null == eC || eC();
                    else if (null != t.location) {
                        let { host: e, path: n } = c.parse(t.location);
                        V.Z.isDiscordHostname(e) && n === ea.Z5c.OAUTH2_AUTHORIZED
                            ? (0, U.uL)(ea.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eM ? void 0 : eM.application,
                                      guild: eQ
                                  }
                              })
                            : (window.location = t.location);
                    } else eB(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eG(Error(e.message)) : eG(e), ew('AUTHORIZE_SCOPES'), eB(!1);
                }
            },
            [ev, eA, eO, null == eM ? void 0 : eM.application, eQ, eC, P, e3, k, et, eu, ec, ed, e_, e5, eK, eZ, eX, ej, e7]
        ),
        tn = s.useRef(!1),
        tr = s.useCallback(async () => {
            if (!G.default.isAuthenticated()) {
                (0, Z.c$)(eD);
                return;
            }
            if (!e6.current) {
                if (!tn.current) {
                    tn.current = !0;
                    try {
                        let e =
                            null != ey
                                ? ey
                                : await (0, Z.Ww)({
                                      clientId: P,
                                      scopes: e3,
                                      responseType: k,
                                      redirectUri: et,
                                      codeChallenge: eu,
                                      codeChallengeMethod: ec,
                                      state: ed,
                                      nonce: e_,
                                      integrationType: null != eX ? eX : void 0
                                  });
                        eP((0, Y.d)(e)), eE === K.s.NONE && e.authorized && !e9 && tt(!0), (0, v.yw)(ea.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, Z.c$)(eD);
                            return;
                        }
                        eG(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        tn.current = !1;
                    }
                }
            }
        }, [eD, ey, P, e3, k, et, eu, ec, ed, e_, eX, eE, tt, e9]),
        ti = s.useMemo(() => {
            var e;
            return null != e0 && eJ
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
        }, [e0, eJ]),
        ta = s.useRef(null);
    s.useEffect(() => {
        eU !== ta.current &&
            ((ta.current = eU),
            (0, v.yw)(ea.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eU,
                application_id: P,
                integration_type: eX,
                scopes: e3,
                permissions: e5.toString()
            }));
    }, [P, eX, e5, e3, eU]),
        s.useEffect(() => {
            if (null == eU && (!eJ || null != e0) && !!eb)
                if (null != ey) {
                    var e;
                    e$(null !== (e = ey.integration_type) && void 0 !== e ? e : _.Y.GUILD_INSTALL), ew('AUTHORIZE_SCOPES');
                } else ti.length > 1 ? ew('SELECT_INSTALL_TYPE') : (1 === ti.length ? e$(ti[0]) : null != eT ? e$(eT) : e$(_.Y.GUILD_INSTALL), ew('AUTHORIZE_SCOPES'));
        }, [ey, ti, e0, eJ, eT, eU, eb]),
        s.useEffect(() => {
            if (null == eX || null != eM || null != ex) return;
            eX === _.Y.USER_INSTALL && (eY(null), eW(null));
            let e = e3.filter((e) => !W.ak.includes(e));
            0 === e3.length ? eG(Error('No scopes were provided.')) : e.length > 0 ? eG(Error('Invalid scope: '.concat(e[0]))) : (0, j._$)(e5) ? eG(Error('Invalid permission(s) provided.')) : tr();
        }, [e9, tr, e3, e5, eX, eM, ex]);
    let ts = s.useCallback((e) => {
            e && eV(!0);
        }, []),
        to = (0, O.O)(ts);
    if (ex instanceof Error) return { body: (0, a.jsx)(en.Lk, { message: ex.message }) };
    let tl = !1,
        tu = !1,
        tc = !0,
        td = !0,
        t_ = !0,
        tE = !1;
    switch (eU) {
        case null:
            return { body: (0, a.jsx)(S.$, { className: eo.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == e0) return { body: (0, a.jsx)(S.$, { className: eo.spinner }) };
            (d = (0, a.jsx)(ee.Z, {
                application: e0,
                onSelect: (e) => {
                    e$(e), eP(null), ew('AUTHORIZE_SCOPES');
                },
                onClose: eC
            })),
                (tc = !1),
                (td = !1),
                (t_ = !1),
                (tE = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eM || null == eq || null == eX) return { body: (0, a.jsx)(S.$, { className: eo.spinner }) };
            let tf = null == ex || ex instanceof Error ? {} : ex,
                th = null == eH ? void 0 : eH.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tp = eX === _.Y.GUILD_INSTALL && e3.includes(E.x.WEBHOOK_INCOMING),
                tI = tp || (eX === _.Y.GUILD_INSTALL && (e3.includes(E.x.BOT) || e3.includes(E.x.APPLICATIONS_COMMANDS)));
            (d = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(q.Z, { accountScopes: e4 }),
                    (0, a.jsx)(Q.Z, {
                        application: eM.application,
                        accountScopes: e4,
                        requestedScopes: e3,
                        integrationType: eX,
                        errors: tf,
                        isTrustedName: eN
                    }),
                    (0, a.jsx)('div', {
                        className: eo.intObserver,
                        ref: to
                    }),
                    tI
                        ? (0, a.jsx)($.Z, {
                              error: (null !== (n = null !== (t = tf[E.x.BOT]) && void 0 !== t ? t : tf[E.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eZ,
                              onGuildChange: eY,
                              guilds: null != th ? th : [],
                              disabled: '' !== eZ && null != eZ && !0 === eS
                          })
                        : null,
                    tp
                        ? (0, a.jsx)(er.Z, {
                              error: (null !== (r = tf[E.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: ej,
                              selectedGuildId: eZ,
                              onChannelChange: eW
                          })
                        : null
                ]
            })),
                e3.includes(E.x.BOT) && !f.fS(e5, F.Hn) && (T = 'AUTHORIZE_BOT_PERMISSIONS'),
                ti.length > 1 && (m = 'SELECT_INSTALL_TYPE'),
                (tu = (tI && null == eQ) || (tp && null == ej)),
                (tl = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eM) return { body: (0, a.jsx)(S.$, { className: eo.spinner }) };
            (d = (0, a.jsx)(X.Z, {
                application: eM.application,
                permissions: e5,
                deniedPermissions: eK,
                onPermissionsChange: (e, t) => {
                    ez((n) => (e ? f.Od(n, t) : f.IH(n, t)));
                },
                guild: eQ
            })),
                (m = 'AUTHORIZE_SCOPES'),
                (tl = !0);
    }
    if (tc && null != eM) {
        let e = null === (i = eM.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        C = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(z.Z, {
                    application: eM.application,
                    scopes: e3,
                    disclosures: e7,
                    redirectUri: null !== (o = eM.redirect_uri) && void 0 !== o ? o : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eR
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
            null != eM &&
            null != eq &&
            (L = (0, a.jsx)(J.Z, {
                id: el,
                user: eq,
                application: eM.application,
                bot: eM.bot,
                accountScopes: e4,
                showLogout: eg || !1,
                location: eD
            })),
        t_ &&
            (b = (0, a.jsxs)('div', {
                className: l()(eo.footer),
                children: [
                    null != m
                        ? (0, a.jsx)(I.zx, {
                              look: I.zx.Looks.LINK,
                              color: I.zx.Colors.PRIMARY,
                              onClick: () => ew(m),
                              children: es.Z.Messages.BACK
                          })
                        : (0, a.jsx)(I.zx, {
                              look: I.zx.Looks.LINK,
                              color: I.zx.Colors.PRIMARY,
                              onClick: () => tt(!1),
                              children: es.Z.Messages.CANCEL
                          }),
                    'SELECT_INSTALL_TYPE' !== eU
                        ? eF
                            ? (0, a.jsx)('div', {
                                  className: eo.action,
                                  children: (0, a.jsx)(I.zx, {
                                      onClick: null != T ? () => ew(T) : () => tt(!0),
                                      submitting: ek,
                                      disabled: null == C || tu,
                                      children: tu ? es.Z.Messages.OAUTH2_MISSED_FIELDS : null != T ? es.Z.Messages.CONTINUE : es.Z.Messages.AUTHORIZE
                                  })
                              })
                            : (0, a.jsx)('div', {
                                  className: eo.action,
                                  children: (0, a.jsx)(g.Tooltip, {
                                      text: es.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              ...e,
                                              className: eo.tooltip,
                                              children: (0, a.jsxs)(I.zx, {
                                                  disabled: !0,
                                                  submitting: ek,
                                                  innerClassName: eo.buttonWithEmoji,
                                                  children: [
                                                      es.Z.Messages.OAUTH2_KEEP_SCROLLING,
                                                      ' ',
                                                      (0, a.jsx)(R.Z, {
                                                          className: eo.emoji,
                                                          src: B.ZP.getURL(p.Z.convert.fromCodePoint(ei.I)),
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
            header: L,
            body: d,
            footer: b,
            nextStep: T,
            appDetails: C,
            sendAuthorize: tt,
            hasContentBackground: tl,
            minimalPadding: tE
        }
    );
}
function e_(e, t) {
    if (null == t.location || (null != e && e(t))) return;
    let { host: n, path: r, query: i } = c.parse(t.location, !0),
        s = V.Z.isDiscordHostname(n) || window.location.host === n;
    if (s && r === ea.Z5c.OAUTH2_AUTHORIZED) {
        let e = L._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(ea.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? k.S.safeDispatch(ea.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, m.h7)((e) => {
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
        (0, m.h7)((e) => {
            let t = i.error_description || i.error || es.Z.Messages.OAUTH2_UNKNOWN_ERROR;
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
function eE(e, t) {
    if ((0, P.g)('create-guild-and-oauth2-modal')) {
        b.Z.openCreateGuildModal({
            onSuccess: (n) =>
                ef(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    ef(e, t);
}
function ef(e, t) {
    (0, m.h7)(
        (t) =>
            (0, a.jsx)(ec, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: e_.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function eh(e) {
    let { hostname: t = '', host: n, path: r, query: i } = c.parse(e);
    return null != r && null != i && (V.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(ea.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(ea.Z5c.OAUTH2_AUTHORIZE)) ? (0, H.y)(i) : null;
}
((i = r || (r = {})).SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (i.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (i.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
