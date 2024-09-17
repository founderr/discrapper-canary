n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return es;
        },
        OAuth2AuthorizePage: function () {
            return ea;
        },
        getOAuth2AuthorizeProps: function () {
            return ed;
        },
        openOAuth2Modal: function () {
            return ec;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return eu;
        },
        useOAuth2AuthorizeForm: function () {
            return eo;
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
    h = n(946188),
    p = n(693789),
    I = n(952265),
    m = n(21340),
    T = n(922770),
    S = n(481060),
    g = n(893776),
    A = n(596454),
    N = n(434650),
    O = n(367907),
    R = n(702493),
    v = n(728345),
    C = n(979200),
    y = n(560067),
    L = n(353926),
    D = n(341298),
    b = n(703656),
    M = n(973616),
    P = n(598077),
    U = n(314897),
    w = n(176354),
    x = n(700785),
    G = n(591759),
    k = n(807675),
    B = n(489863),
    F = n(228763),
    V = n(422559),
    H = n(713938),
    Z = n(166148),
    Y = n(807989),
    j = n(627799),
    W = n(260430),
    K = n(668185),
    z = n(407546),
    q = n(41259),
    Q = n(28752),
    X = n(787025),
    $ = n(397394),
    J = n(574384),
    ee = n(960662),
    et = n(981631),
    en = n(689938),
    er = n(195943);
let ei = 'oauth2-authorize-header-id';
function ea() {
    let e = (0, u.TH)(),
        t = s.useMemo(() => (0, k.y)(e.search), [e.search]);
    return (
        (0, R.Z)(),
        (0, a.jsx)(X.G, {
            removeChildWrapper: !0,
            children: (0, a.jsx)(es, {
                transitionState: S.ModalTransitionState.ENTERED,
                ...t,
                showLogout: !0
            })
        })
    );
}
function es(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: s, nextStep: o, appDetails: u, hasContentBackground: c } = eo({ ...n }),
        d = (0, a.jsxs)(a.Fragment, {
            children: [
                r,
                (0, a.jsxs)('div', {
                    className: l()(er.content, c ? er.contentBackground : null),
                    children: [i, null == o ? u : null]
                })
            ]
        });
    return (0, a.jsx)(X.j, {
        transitionState: t,
        'aria-labelledby': ei,
        footer: s,
        children: (0, a.jsx)('div', {
            className: l()(er.authorize),
            children: (0, a.jsx)(m.zJ, {
                orientation: 'auto',
                children: d
            })
        })
    });
}
function eo(e) {
    var t, n, r, i, o;
    let I,
        m,
        R,
        y,
        D,
        X,
        { clientId: ea, responseType: es, redirectUri: eo, codeChallenge: el, codeChallengeMethod: eu, state: ec, nonce: ed, prompt: e_, authorizations: eE, scopes: ef, permissions: eh, guildId: ep, channelId: eI, integrationType: em, disableGuildSelect: eT = !1, showLogout: eS = !1, cancelCompletesFlow: eg = !0, isTrustedName: eA = !1, isEmbeddedFlow: eN = !1, callback: eO, callbackWithoutPost: eR, onClose: ev, disclosures: eC } = e,
        ey = null != em ? (null == eE ? void 0 : eE.get(em)) : void 0,
        eL = (0, u.TH)(),
        eD = (0, f.e7)([L.Z], () => L.Z.hasLoadedExperiments);
    s.useEffect(() => {
        U.default.isAuthenticated() && !eD && g.Z.getExperiments();
    }, [eD]);
    let [eb, eM] = s.useState(null),
        [eP, eU] = s.useState(null),
        [ew, ex] = s.useState(null),
        [eG, ek] = s.useState(!1),
        [eB, eF] = s.useState(!1),
        eV = null == eb ? void 0 : eb.guilds,
        [eH, eZ] = s.useState(null != ep ? ep : null),
        [eY, ej] = s.useState(null != eI ? eI : null),
        [eW, eK] = s.useState(x.Hn),
        ez = s.useMemo(() => ((null == eb ? void 0 : eb.user) != null ? new P.Z(eb.user) : null), [null == eb ? void 0 : eb.user]),
        eq = s.useMemo(() => (null == eV ? void 0 : eV.find((e) => e.id === eH)), [eV, eH]),
        [eQ, eX] = s.useState(null),
        e$ = s.useMemo(() => {
            var e;
            return null == ey && null == em && (null !== (e = null == ef ? void 0 : ef.length) && void 0 !== e ? e : 0) === 0 && null == eo;
        }, [ey, null == ef ? void 0 : ef.length, eo, em]),
        [eJ, e0] = s.useState(null);
    s.useEffect(() => {
        e$ && v.Z.fetchApplication(ea).then((e) => e0(M.Z.createFromServer(e)));
    }, [ea, e$]);
    let e1 = s.useMemo(() => {
            var e, t;
            return null == eQ ? null : null == eJ ? void 0 : null === (t = eJ.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eQ]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == eJ ? void 0 : eJ.integrationTypesConfig, eQ]),
        { requestedScopes: e2, accountScopes: e3 } = s.useMemo(() => {
            let e = e$ ? (null == e1 ? void 0 : e1.scopes) : ef,
                t = (0, k.K)(null != e ? e : []),
                n = H.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e1 ? void 0 : e1.scopes, ef, e$]),
        e4 = s.useMemo(() => {
            var e;
            let t = e$ ? E.vB(null !== (e = null == e1 ? void 0 : e1.permissions) && void 0 !== e ? e : 0) : eh;
            return null != t ? t : x.Hn;
        }, [null == e1 ? void 0 : e1.permissions, eh, e$]),
        e5 = s.useRef(!1),
        [e6, e7] = s.useState(null != eC ? eC : []),
        [e8, e9] = s.useState(null != eC && eC.length > 0);
    s.useEffect(() => {
        if (e5.current) return;
        let e = async () => {
            e5.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, C.de)(ea);
                e9(!t), e7(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, B.c$)(eL);
                    return;
                }
                ex(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e5.current = !1;
            }
        };
        if (null == eC) {
            if (!U.default.isAuthenticated()) {
                (0, B.c$)(eL);
                return;
            }
            e();
        }
    }, [ea, eL, eC, e7, ex, e9, eU]);
    let te = s.useCallback(
            async (e) => {
                if (null != eR) {
                    eR(e);
                    return;
                }
                if (!e && !eg) {
                    null != eO &&
                        (eO({
                            application: null == eb ? void 0 : eb.application,
                            guild: eq
                        }),
                        null == ev || ev());
                    return;
                }
                if (null == eQ) {
                    ex(Error('No integration type was selected.'));
                    return;
                }
                try {
                    ek(!0);
                    let t = await (0, B.Iq)({
                        authorize: e,
                        clientId: ea,
                        scopes: e2,
                        responseType: es,
                        redirectUri: eo,
                        codeChallenge: el,
                        codeChallengeMethod: eu,
                        state: ec,
                        nonce: ed,
                        integrationType: eQ,
                        permissions: E.Od(e4, eW),
                        guildId: eQ === d.Y.GUILD_INSTALL && null != eH ? eH : void 0,
                        channelId: eQ === d.Y.GUILD_INSTALL && null != eY ? eY : void 0
                    });
                    if ((e && (await (0, C.x9)(ea, e6)), null != eO))
                        eO({
                            application: null == eb ? void 0 : eb.application,
                            location: t.location,
                            guild: eq
                        }),
                            null == ev || ev();
                    else if (null != t.location) {
                        let { host: e, path: n } = c.parse(t.location);
                        G.Z.isDiscordHostname(e) && n === et.Z5c.OAUTH2_AUTHORIZED
                            ? (0, b.uL)(et.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eb ? void 0 : eb.application,
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
            [eR, eg, eO, null == eb ? void 0 : eb.application, eq, ev, ea, e2, es, eo, el, eu, ec, ed, e4, eW, eH, eQ, eY, e6]
        ),
        tt = s.useRef(!1),
        tn = s.useCallback(async () => {
            if (!U.default.isAuthenticated()) {
                (0, B.c$)(eL);
                return;
            }
            if (!e5.current) {
                if (!tt.current) {
                    tt.current = !0;
                    try {
                        let e =
                            null != ey
                                ? ey
                                : await (0, B.Ww)({
                                      clientId: ea,
                                      scopes: e2,
                                      responseType: es,
                                      redirectUri: eo,
                                      codeChallenge: el,
                                      codeChallengeMethod: eu,
                                      state: ec,
                                      nonce: ed,
                                      integrationType: null != eQ ? eQ : void 0
                                  });
                        eM((0, F.d)(e)), e_ === Z.s.NONE && e.authorized && !e8 && te(!0), (0, O.yw)(et.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, B.c$)(eL);
                            return;
                        }
                        ex(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        tt.current = !1;
                    }
                }
            }
        }, [eL, ey, ea, e2, es, eo, el, eu, ec, ed, eQ, e_, te, e8]),
        tr = s.useMemo(() => {
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
        ti = s.useRef(null);
    s.useEffect(() => {
        eP !== ti.current &&
            ((ti.current = eP),
            (0, O.yw)(et.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eP,
                application_id: ea,
                integration_type: eQ,
                scopes: e2,
                permissions: e4.toString()
            }));
    }, [ea, eQ, e4, e2, eP]),
        s.useEffect(() => {
            if (null == eP && (!e$ || null != eJ) && !!eD)
                if (null != ey) {
                    var e;
                    eX(null !== (e = ey.integration_type) && void 0 !== e ? e : d.Y.GUILD_INSTALL), eU('AUTHORIZE_SCOPES');
                } else tr.length > 1 ? eU('SELECT_INSTALL_TYPE') : (1 === tr.length ? eX(tr[0]) : null != em ? eX(em) : eX(d.Y.GUILD_INSTALL), eU('AUTHORIZE_SCOPES'));
        }, [ey, tr, eJ, e$, em, eP, eD]),
        s.useEffect(() => {
            if (null == eQ || null != eb || null != ew) return;
            eQ === d.Y.USER_INSTALL && (eZ(null), ej(null));
            let e = e2.filter((e) => !H.ak.includes(e));
            0 === e2.length ? ex(Error('No scopes were provided.')) : e.length > 0 ? ex(Error('Invalid scope: '.concat(e[0]))) : (0, V._$)(e4) ? ex(Error('Invalid permission(s) provided.')) : tn();
        }, [e8, tn, e2, e4, eQ, eb, ew]);
    let ta = s.useCallback((e) => {
            e && eF(!0);
        }, []),
        ts = (0, N.O)(ta);
    if (ew instanceof Error) return { body: (0, a.jsx)($.Lk, { message: ew.message }) };
    let to = !1,
        tl = !1,
        tu = !0,
        tc = !0,
        td = !0;
    switch (eP) {
        case null:
            return { body: (0, a.jsx)(T.$, { className: er.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == eJ) return { body: (0, a.jsx)(T.$, { className: er.spinner }) };
            (I = (0, a.jsx)(Q.Z, {
                application: eJ,
                onSelect: (e) => {
                    eX(e), eM(null), eU('AUTHORIZE_SCOPES');
                }
            })),
                (tu = !1),
                (tc = !1),
                (td = !1);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eb || null == ez || null == eQ) return { body: (0, a.jsx)(T.$, { className: er.spinner }) };
            let t_ = null == ew || ew instanceof Error ? {} : ew,
                tE = null == eV ? void 0 : eV.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tf = eQ === d.Y.GUILD_INSTALL && e2.includes(_.x.WEBHOOK_INCOMING),
                th = tf || (eQ === d.Y.GUILD_INSTALL && (e2.includes(_.x.BOT) || e2.includes(_.x.APPLICATIONS_COMMANDS)));
            (I = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(j.Z, { accountScopes: e3 }),
                    (0, a.jsx)(W.Z, {
                        application: eb.application,
                        accountScopes: e3,
                        requestedScopes: e2,
                        integrationType: eQ,
                        errors: t_,
                        isTrustedName: eA
                    }),
                    (0, a.jsx)('div', {
                        className: er.intObserver,
                        ref: ts
                    }),
                    th
                        ? (0, a.jsx)(z.Z, {
                              error: (null !== (n = null !== (t = t_[_.x.BOT]) && void 0 !== t ? t : t_[_.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eH,
                              onGuildChange: eZ,
                              guilds: null != tE ? tE : [],
                              disabled: '' !== eH && null != eH && !0 === eT
                          })
                        : null,
                    tf
                        ? (0, a.jsx)(J.Z, {
                              error: (null !== (r = t_[_.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: eY,
                              selectedGuildId: eH,
                              onChannelChange: ej
                          })
                        : null
                ]
            })),
                e2.includes(_.x.BOT) && !E.fS(e4, x.Hn) && (R = 'AUTHORIZE_BOT_PERMISSIONS'),
                tr.length > 1 && (m = 'SELECT_INSTALL_TYPE'),
                (tl = (th && null == eq) || (tf && null == eY)),
                (to = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eb) return { body: (0, a.jsx)(T.$, { className: er.spinner }) };
            (I = (0, a.jsx)(K.Z, {
                application: eb.application,
                permissions: e4,
                deniedPermissions: eW,
                onPermissionsChange: (e, t) => {
                    eK((n) => (e ? E.Od(n, t) : E.IH(n, t)));
                },
                guild: eq
            })),
                (m = 'AUTHORIZE_SCOPES'),
                (to = !0);
    }
    if (tu && null != eb) {
        let e = null === (i = eb.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        y = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(Y.Z, {
                    application: eb.application,
                    scopes: e2,
                    disclosures: e6,
                    redirectUri: null !== (o = eb.redirect_uri) && void 0 !== o ? o : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eN
                }),
                (0, a.jsx)('div', {
                    className: er.intObserver,
                    ref: ts
                })
            ]
        });
    }
    return (
        tc &&
            null != eb &&
            null != ez &&
            (D = (0, a.jsx)(q.Z, {
                id: ei,
                user: ez,
                application: eb.application,
                bot: eb.bot,
                accountScopes: e3,
                showLogout: eS || !1,
                location: eL
            })),
        td &&
            (X = (0, a.jsxs)('div', {
                className: l()(er.footer),
                children: [
                    null != m
                        ? (0, a.jsx)(p.zx, {
                              look: p.zx.Looks.LINK,
                              color: p.zx.Colors.PRIMARY,
                              onClick: () => eU(m),
                              children: en.Z.Messages.BACK
                          })
                        : (0, a.jsx)(p.zx, {
                              look: p.zx.Looks.LINK,
                              color: p.zx.Colors.PRIMARY,
                              onClick: () => te(!1),
                              children: en.Z.Messages.CANCEL
                          }),
                    'SELECT_INSTALL_TYPE' !== eP
                        ? eB
                            ? (0, a.jsx)('div', {
                                  className: er.action,
                                  children: (0, a.jsx)(p.zx, {
                                      onClick: null != R ? () => eU(R) : () => te(!0),
                                      submitting: eG,
                                      disabled: null == y || tl,
                                      children: tl ? en.Z.Messages.OAUTH2_MISSED_FIELDS : null != R ? en.Z.Messages.CONTINUE : en.Z.Messages.AUTHORIZE
                                  })
                              })
                            : (0, a.jsx)('div', {
                                  className: er.action,
                                  children: (0, a.jsx)(S.Tooltip, {
                                      text: en.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              ...e,
                                              className: er.tooltip,
                                              children: (0, a.jsxs)(p.zx, {
                                                  disabled: !0,
                                                  submitting: eG,
                                                  innerClassName: er.buttonWithEmoji,
                                                  children: [
                                                      en.Z.Messages.OAUTH2_KEEP_SCROLLING,
                                                      ' ',
                                                      (0, a.jsx)(A.Z, {
                                                          className: er.emoji,
                                                          src: w.ZP.getURL(h.Z.convert.fromCodePoint(ee.I)),
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
            header: D,
            body: I,
            footer: X,
            nextStep: R,
            appDetails: y,
            sendAuthorize: te,
            hasContentBackground: to
        }
    );
}
function el(e, t) {
    if (null == t.location || (null != e && e(t))) return;
    let { host: n, path: r, query: i } = c.parse(t.location, !0),
        s = G.Z.isDiscordHostname(n) || window.location.host === n;
    if (s && r === et.Z5c.OAUTH2_AUTHORIZED)
        (0, I.h7)((e) =>
            (0, a.jsx)(X.j, {
                ...e,
                'aria-labelledby': ei,
                children: (0, a.jsx)($.Jh, {
                    guild: t.guild,
                    application: t.application,
                    onClose: e.onClose
                })
            })
        );
    else if (s && (null == r ? void 0 : r.startsWith(et.Z5c.OAUTH2_ERROR)))
        (0, I.h7)((e) => {
            let t = i.error_description || i.error || en.Z.Messages.OAUTH2_UNKNOWN_ERROR;
            return (
                Array.isArray(t) && (t = t[0]),
                (0, a.jsx)(X.j, {
                    ...e,
                    'aria-labelledby': ei,
                    children: (0, a.jsx)($.Lk, {
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
function eu(e, t) {
    if ((0, D.g)('create-guild-and-oauth2-modal')) {
        y.Z.openCreateGuildModal({
            onSuccess: (n) =>
                ec(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    ec(e, t);
}
function ec(e, t) {
    (0, I.h7)(
        (t) =>
            (0, a.jsx)(es, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: el.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function ed(e) {
    let { hostname: t = '', host: n, path: r, query: i } = c.parse(e);
    return null != r && null != i && (G.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(et.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(et.Z5c.OAUTH2_AUTHORIZE)) ? (0, k.y)(i) : null;
}
((i = r || (r = {})).SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (i.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (i.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
