"use strict";
n.r(t), n.d(t, {
  OAuth2Authorize: function() {
    return et
  },
  OAuth2AuthorizeModal: function() {
    return ee
  },
  OAuth2AuthorizePage: function() {
    return $
  },
  getOAuth2AuthorizeProps: function() {
    return ea
  },
  openOAuth2Modal: function() {
    return es
  },
  openOAuth2ModalWithCreateGuildModal: function() {
    return er
  },
  useOAuth2AuthorizeForm: function() {
    return en
  }
}), n("47120"), n("411104");
var i, r, s = n("735250"),
  a = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("613828"),
  d = n("729594"),
  _ = n("373793"),
  c = n("243814"),
  E = n("149765"),
  I = n("442837"),
  T = n("693789"),
  f = n("952265"),
  S = n("21340"),
  h = n("922770"),
  A = n("893776"),
  m = n("434650"),
  N = n("367907"),
  p = n("702493"),
  O = n("728345"),
  C = n("979200"),
  R = n("560067"),
  g = n("341298"),
  L = n("703656"),
  v = n("973616"),
  D = n("598077"),
  M = n("314897"),
  y = n("828695"),
  P = n("700785"),
  U = n("591759"),
  b = n("807675"),
  G = n("489863"),
  w = n("228763"),
  k = n("422559"),
  B = n("713938"),
  V = n("166148"),
  x = n("807989"),
  F = n("260430"),
  H = n("668185"),
  Y = n("407546"),
  j = n("41259"),
  W = n("28752"),
  K = n("787025"),
  z = n("397394"),
  Z = n("574384"),
  X = n("981631"),
  Q = n("689938"),
  q = n("884103");
let J = "oauth2-authorize-header-id";

function $() {
  let e = (0, u.useLocation)(),
    t = a.useMemo(() => (0, b.parseOAuth2AuthorizeProps)(e.search), [e.search]);
  return (0, p.default)(), (0, s.jsx)(K.OAuth2Page, {
    children: (0, s.jsx)(et, {
      ...t,
      showLogout: !0
    })
  })
}

function ee(e) {
  let {
    transitionState: t,
    ...n
  } = e, {
    header: i,
    body: r,
    footer: a,
    nextStep: o,
    appDetails: u
  } = en({
    ...n,
    disableContinueUntilRead: !0
  }), d = (0, s.jsxs)("div", {
    className: q.content,
    children: [i, r, null == o ? u : null]
  });
  return (0, s.jsx)(K.OAuth2Modal, {
    transitionState: t,
    "aria-labelledby": J,
    footer: a,
    children: (0, s.jsx)("div", {
      className: l()(q.authorize, {
        [q.inApp]: n.inApp
      }),
      children: (0, s.jsx)(S.ScrollerThin, {
        orientation: "auto",
        children: d
      })
    })
  })
}

function et(e) {
  let {
    scrollable: t,
    ...n
  } = e, {
    header: i,
    body: r,
    footer: a,
    nextStep: o,
    appDetails: u
  } = en(n), d = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: q.content,
      children: [i, r, null == o ? u : null]
    }), a]
  });
  return t ? (0, s.jsxs)("div", {
    children: [(0, s.jsx)("div", {
      className: l()(q.authorize, {
        [q.inApp]: n.inApp
      }),
      children: (0, s.jsx)(S.ScrollerThin, {
        orientation: "auto",
        children: d
      })
    }), a]
  }) : (0, s.jsx)("div", {
    className: l()(q.authorize, {
      [q.inApp]: n.inApp
    }),
    children: (0, s.jsx)("div", {
      children: d
    })
  })
}

function en(e) {
  var t, n, i, r, o;
  let l, f, S, p, R, g, {
      clientId: K,
      responseType: $,
      redirectUri: ee,
      codeChallenge: et,
      codeChallengeMethod: en,
      state: ei,
      nonce: er,
      prompt: es,
      authorizations: ea,
      scopes: eo,
      permissions: el,
      guildId: eu,
      channelId: ed,
      integrationType: e_,
      disableGuildSelect: ec = !1,
      disableContinueUntilRead: eE = !1,
      showLogout: eI = !1,
      cancelCompletesFlow: eT = !0,
      isTrustedName: ef = !1,
      isEmbeddedFlow: eS = !1,
      inApp: eh = !1,
      callback: eA,
      callbackWithoutPost: em,
      onClose: eN,
      disclosures: ep
    } = e,
    eO = null != e_ ? null == ea ? void 0 : ea.get(e_) : void 0,
    eC = (0, u.useLocation)(),
    eR = (0, I.useStateFromStores)([y.default], () => y.default.hasLoadedExperiments);
  a.useEffect(() => {
    M.default.isAuthenticated() && !eR && A.default.getExperiments()
  }, [eR]);
  let [eg, eL] = a.useState(null), [ev, eD] = a.useState(null), [eM, ey] = a.useState(null), [eP, eU] = a.useState(!1), [eb, eG] = a.useState(!eE), ew = null == eg ? void 0 : eg.guilds, [ek, eB] = a.useState(null != eu ? eu : null), [eV, ex] = a.useState(null != ed ? ed : null), [eF, eH] = a.useState(P.NONE), eY = a.useMemo(() => (null == eg ? void 0 : eg.user) != null ? new D.default(eg.user) : null, [null == eg ? void 0 : eg.user]), ej = a.useMemo(() => null == ew ? void 0 : ew.find(e => e.id === ek), [ew, ek]), [eW, eK] = a.useState(null), ez = a.useMemo(() => {
    var e;
    return null == eO && null == e_ && (null !== (e = null == eo ? void 0 : eo.length) && void 0 !== e ? e : 0) === 0 && null == ee
  }, [eO, null == eo ? void 0 : eo.length, ee, e_]), [eZ, eX] = a.useState(null);
  a.useEffect(() => {
    ez && O.default.fetchApplication(K).then(e => eX(v.default.createFromServer(e)))
  }, [K, ez]);
  let eQ = a.useMemo(() => {
      var e, t;
      return null == eW ? null : null == eZ ? void 0 : null === (t = eZ.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eW]) || void 0 === e ? void 0 : e.oauth2InstallParams
    }, [null == eZ ? void 0 : eZ.integrationTypesConfig, eW]),
    {
      requestedScopes: eq,
      accountScopes: eJ
    } = a.useMemo(() => {
      let e = ez ? null == eQ ? void 0 : eQ.scopes : eo,
        t = (0, b.filterScopes)(null != e ? e : []),
        n = B.OrderedAccountScopes.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == eQ ? void 0 : eQ.scopes, eo, ez]),
    e$ = a.useMemo(() => {
      var e;
      let t = ez ? E.deserialize(null !== (e = null == eQ ? void 0 : eQ.permissions) && void 0 !== e ? e : 0) : el;
      return null != t ? t : P.NONE
    }, [null == eQ ? void 0 : eQ.permissions, el, ez]),
    e0 = a.useRef(!1),
    [e1, e2] = a.useState(null != ep ? ep : []),
    [e3, e4] = a.useState(null != ep && ep.length > 0);
  a.useEffect(() => {
    if (e0.current) return;
    let e = async () => {
      e0.current = !0;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, C.getDisclosures)(K);
        e4(!t), e2(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) {
          (0, G.logoutWithRedirect)(eC);
          return
        }
        ey(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        e0.current = !1
      }
    };
    if (null == ep) {
      if (!M.default.isAuthenticated()) {
        (0, G.logoutWithRedirect)(eC);
        return
      }
      e()
    }
  }, [K, eC, ep, e2, ey, e4, eD]);
  let e6 = a.useCallback(async e => {
      if (null != em) {
        em(e);
        return
      }
      if (!e && !eT) {
        null != eA && (eA({
          application: null == eg ? void 0 : eg.application,
          guild: ej
        }), null == eN || eN());
        return
      }
      if (null == eW) {
        ey(Error("No integration type was selected."));
        return
      }
      try {
        eU(!0);
        let t = await (0, G.authorize)({
          authorize: e,
          clientId: K,
          scopes: eq,
          responseType: $,
          redirectUri: ee,
          codeChallenge: et,
          codeChallengeMethod: en,
          state: ei,
          nonce: er,
          integrationType: eW,
          permissions: E.remove(e$, eF),
          guildId: eW === _.ApplicationIntegrationType.GUILD_INSTALL && null != ek ? ek : void 0,
          channelId: eW === _.ApplicationIntegrationType.GUILD_INSTALL && null != eV ? eV : void 0
        });
        if (e && await (0, C.ackDisclosures)(K, e1), null != eA) eA({
          application: null == eg ? void 0 : eg.application,
          location: t.location,
          guild: ej
        }), null == eN || eN();
        else if (null != t.location) {
          let {
            host: e,
            path: n
          } = d.parse(t.location);
          U.default.isDiscordHostname(e) && n === X.Routes.OAUTH2_AUTHORIZED ? (0, L.transitionTo)(X.Routes.OAUTH2_AUTHORIZED, {
            state: {
              application: null == eg ? void 0 : eg.application,
              guild: ej
            }
          }) : window.location = t.location
        } else eU(!1)
      } catch (t) {
        let e = t.body;
        (null == e ? void 0 : e.message) != null && "" !== e.message ? ey(Error(e.message)) : ey(e), eD(1), eU(!1)
      }
    }, [em, eT, eA, null == eg ? void 0 : eg.application, ej, eN, K, eq, $, ee, et, en, ei, er, e$, eF, ek, eW, eV, e1]),
    e7 = a.useRef(!1),
    e5 = a.useCallback(async () => {
      if (!M.default.isAuthenticated()) {
        (0, G.logoutWithRedirect)(eC);
        return
      }
      if (!e0.current) {
        if (!e7.current) {
          e7.current = !0;
          try {
            let e = null != eO ? eO : await (0, G.fetchAuthorization)({
              clientId: K,
              scopes: eq,
              responseType: $,
              redirectUri: ee,
              codeChallenge: et,
              codeChallengeMethod: en,
              state: ei,
              nonce: er,
              integrationType: null != eW ? eW : void 0
            });
            eL((0, w.convertOAuth2Authorization)(e)), es === V.OAuth2Prompts.NONE && e.authorized && !e3 && e6(!0), (0, N.trackWithMetadata)(X.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
              application_id: e.application.id
            })
          } catch (n) {
            let {
              status: e,
              body: t
            } = n;
            if (401 === e) {
              (0, G.logoutWithRedirect)(eC);
              return
            }
            ey(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
          } finally {
            e7.current = !1
          }
        }
      }
    }, [eC, eO, K, eq, $, ee, et, en, ei, er, eW, es, e6, e3]),
    e8 = a.useMemo(() => {
      var e;
      return null != eZ && ez ? Object.entries(null !== (e = eZ.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
        let [t, n] = e;
        return null != n.oauth2InstallParams
      }).map(e => {
        let [t, n] = e;
        return Number(t)
      }) : []
    }, [eZ, ez]);
  a.useEffect(() => {
    if (null == ev && (!ez || null != eZ) && eR) {
      if (null != eO) {
        var e;
        eK(null !== (e = eO.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eD(1)
      } else e8.length > 1 ? eD(0) : (1 === e8.length ? eK(e8[0]) : null != e_ ? eK(e_) : eK(_.ApplicationIntegrationType.GUILD_INSTALL), eD(1))
    }
  }, [eO, e8, eZ, ez, e_, ev, eR]), a.useEffect(() => {
    if (null == eW || null != eg || null != eM) return;
    eW === _.ApplicationIntegrationType.USER_INSTALL && (eB(null), ex(null));
    let e = eq.filter(e => !B.ValidScopes.includes(e));
    0 === eq.length ? ey(Error("No scopes were provided.")) : e.length > 0 ? ey(Error("Invalid scope: ".concat(e[0]))) : (0, k.containsDisallowedPermission)(e$) ? ey(Error("Invalid permission(s) provided.")) : e5()
  }, [e3, e5, eq, e$, eW, eg, eM]);
  let e9 = a.useCallback(e => {
      e && eG(!0)
    }, []),
    te = (0, m.useIsVisible)(e9);
  if (eM instanceof Error) return {
    body: (0, s.jsx)(z.OAuth2Error, {
      message: eM.message
    })
  };
  let tt = !1,
    tn = !0,
    ti = !0,
    tr = !0;
  switch (ev) {
    case null:
      return {
        body: (0, s.jsx)(h.Spinner, {})
      };
    case 0:
      if (null == eZ) return {
        body: (0, s.jsx)(h.Spinner, {})
      };
      l = (0, s.jsx)(W.default, {
        inApp: eh,
        application: eZ,
        onSelect: e => {
          eK(e), eL(null), eD(1)
        }
      }), tn = !1, ti = !1, tr = eh;
      break;
    case 1:
      if (null == eg || null == eY || null == eW) return {
        body: (0, s.jsx)(h.Spinner, {})
      };
      let ts = null == eM || eM instanceof Error ? {} : eM,
        ta = null == ew ? void 0 : ew.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        to = eW === _.ApplicationIntegrationType.GUILD_INSTALL && eq.includes(c.OAuth2Scopes.WEBHOOK_INCOMING),
        tl = to || eW === _.ApplicationIntegrationType.GUILD_INSTALL && (eq.includes(c.OAuth2Scopes.BOT) || eq.includes(c.OAuth2Scopes.APPLICATIONS_COMMANDS));
      l = (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(F.default, {
          application: eg.application,
          accountScopes: eJ,
          requestedScopes: eq,
          integrationType: eW,
          errors: ts,
          isTrustedName: ef
        }), tl ? (0, s.jsx)(Y.default, {
          error: (null !== (n = null !== (t = ts[c.OAuth2Scopes.BOT]) && void 0 !== t ? t : ts[c.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
          selectedGuildId: ek,
          onGuildChange: eB,
          guilds: null != ta ? ta : [],
          disabled: "" !== ek && null != ek && !0 === ec
        }) : null, to ? (0, s.jsx)(Z.default, {
          error: (null !== (i = ts[c.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
          selectedChannelId: eV,
          selectedGuildId: ek,
          onChannelChange: ex
        }) : null]
      }), eq.includes(c.OAuth2Scopes.BOT) && !E.equals(e$, P.NONE) && (S = 2), e8.length > 1 && (f = 0), tt = tl && null == ej || to && null == eV;
      break;
    case 2:
      if (null == eg) return {
        body: (0, s.jsx)(h.Spinner, {})
      };
      l = (0, s.jsx)(H.default, {
        application: eg.application,
        permissions: e$,
        deniedPermissions: eF,
        onPermissionsChange: (e, t) => {
          eH(n => e ? E.remove(n, t) : E.add(n, t))
        },
        guild: ej
      }), f = 1
  }
  if (tn && null != eg) {
    let e = null === (r = eg.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
    p = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(x.default, {
        application: eg.application,
        scopes: eq,
        disclosures: e1,
        redirectUri: null !== (o = eg.redirect_uri) && void 0 !== o ? o : null,
        approximateGuildCount: void 0 !== e ? e : null,
        isEmbeddedFlow: eS
      }), (0, s.jsx)("div", {
        ref: te
      })]
    })
  }
  return ti && null != eg && null != eY && (R = (0, s.jsx)(j.default, {
    id: J,
    user: eY,
    application: eg.application,
    bot: eg.bot,
    accountScopes: eJ,
    showLogout: eI || !1,
    location: eC,
    isTrustedName: ef
  })), !eb && (tt = !0), tr && (g = (0, s.jsxs)("div", {
    className: q.footer,
    children: [null != f ? (0, s.jsx)(T.Button, {
      look: T.Button.Looks.LINK,
      color: T.Button.Colors.PRIMARY,
      onClick: () => eD(f),
      children: Q.default.Messages.BACK
    }) : (0, s.jsx)(T.Button, {
      look: T.Button.Looks.LINK,
      color: T.Button.Colors.PRIMARY,
      onClick: () => e6(!1),
      children: Q.default.Messages.CANCEL
    }), 0 !== ev ? null != S ? (0, s.jsx)(T.Button, {
      onClick: () => eD(S),
      disabled: tt,
      children: Q.default.Messages.CONTINUE
    }) : (0, s.jsx)(T.Button, {
      onClick: () => e6(!0),
      disabled: tt,
      submitting: eP,
      children: Q.default.Messages.AUTHORIZE
    }) : null]
  })), {
    header: R,
    body: l,
    footer: g,
    nextStep: S,
    appDetails: p,
    sendAuthorize: e6
  }
}

function ei(e, t) {
  if (null == t.location || null != e && e(t)) return;
  let {
    host: n,
    path: i,
    query: r
  } = d.parse(t.location, !0), a = U.default.isDiscordHostname(n) || window.location.host === n;
  if (a && i === X.Routes.OAUTH2_AUTHORIZED)(0, f.openModal)(e => (0, s.jsx)(K.OAuth2Modal, {
    ...e,
    "aria-labelledby": J,
    children: (0, s.jsx)(z.OAuth2AuthorizedSuccess, {
      guild: t.guild,
      application: t.application,
      onClose: e.onClose
    })
  }));
  else if (a && (null == i ? void 0 : i.startsWith(X.Routes.OAUTH2_ERROR)))(0, f.openModal)(e => {
    let t = r.error_description || r.error || Q.default.Messages.OAUTH2_UNKNOWN_ERROR;
    return Array.isArray(t) && (t = t[0]), (0, s.jsx)(K.OAuth2Modal, {
      ...e,
      "aria-labelledby": J,
      children: (0, s.jsx)(z.OAuth2Error, {
        message: t,
        onClose: e.onClose
      })
    })
  });
  else {
    var o;
    null === (o = window.open(t.location, "_blank")) || void 0 === o || o.focus()
  }
}

function er(e, t) {
  if ((0, g.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
    R.default.openCreateGuildModal({
      onSuccess: n => es({
        ...e,
        guildId: n
      }, t)
    });
    return
  }
  es(e, t)
}

function es(e, t) {
  (0, f.openModal)(t => (0, s.jsx)(ee, {
    ...t,
    ...e,
    cancelCompletesFlow: !1,
    callback: ei.bind(null, e.callback)
  }), {
    onCloseCallback: t
  })
}

function ea(e) {
  let {
    hostname: t = "",
    host: n,
    path: i,
    query: r
  } = d.parse(e);
  return null != i && null != r && (U.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(X.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(X.Routes.OAUTH2_AUTHORIZE)) ? (0, b.parseOAuth2AuthorizeProps)(r) : null
}(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"