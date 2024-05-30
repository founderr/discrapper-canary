"use strict";
n.r(t), n.d(t, {
  OAuth2Authorize: function() {
    return ee
  },
  OAuth2AuthorizeModal: function() {
    return $
  },
  OAuth2AuthorizePage: function() {
    return J
  },
  getOAuth2AuthorizeProps: function() {
    return es
  },
  openOAuth2Modal: function() {
    return er
  },
  openOAuth2ModalWithCreateGuildModal: function() {
    return ei
  },
  useOAuth2AuthorizeForm: function() {
    return et
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
  m = n("367907"),
  N = n("702493"),
  p = n("728345"),
  O = n("979200"),
  C = n("560067"),
  R = n("341298"),
  g = n("703656"),
  L = n("973616"),
  v = n("598077"),
  D = n("314897"),
  M = n("828695"),
  y = n("700785"),
  P = n("591759"),
  U = n("807675"),
  b = n("489863"),
  G = n("228763"),
  w = n("422559"),
  k = n("713938"),
  B = n("166148"),
  V = n("807989"),
  x = n("260430"),
  F = n("668185"),
  H = n("407546"),
  Y = n("41259"),
  j = n("28752"),
  W = n("787025"),
  K = n("397394"),
  z = n("574384"),
  Z = n("981631"),
  X = n("689938"),
  Q = n("884103");
let q = "oauth2-authorize-header-id";

function J() {
  let e = (0, u.useLocation)(),
    t = a.useMemo(() => (0, U.parseOAuth2AuthorizeProps)(e.search), [e.search]);
  return (0, N.default)(), (0, s.jsx)(W.OAuth2Page, {
    children: (0, s.jsx)(ee, {
      ...t,
      showLogout: !0
    })
  })
}

function $(e) {
  let {
    transitionState: t,
    ...n
  } = e;
  return (0, s.jsx)(W.OAuth2Modal, {
    transitionState: t,
    "aria-labelledby": q,
    children: (0, s.jsx)(ee, {
      ...n,
      inApp: !0,
      scrollable: !0
    })
  })
}

function ee(e) {
  let {
    scrollable: t,
    ...n
  } = e, {
    header: i,
    body: r,
    footer: a,
    nextStep: o,
    appDetails: u
  } = et(n), d = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: Q.content,
      children: [i, r, null == o ? u : null]
    }), a]
  });
  return t ? (0, s.jsx)("div", {
    className: l()(Q.authorize, {
      [Q.inApp]: n.inApp
    }),
    children: (0, s.jsx)(S.ScrollerThin, {
      orientation: "auto",
      children: d
    })
  }) : (0, s.jsx)("div", {
    className: l()(Q.authorize, {
      [Q.inApp]: n.inApp
    }),
    children: (0, s.jsx)("div", {
      children: d
    })
  })
}

function et(e) {
  var t, n, i, r, o;
  let l, f, S, N, C, R, {
      clientId: W,
      responseType: J,
      redirectUri: $,
      codeChallenge: ee,
      codeChallengeMethod: et,
      state: en,
      nonce: ei,
      prompt: er,
      authorizations: es,
      scopes: ea,
      permissions: eo,
      guildId: el,
      channelId: eu,
      integrationType: ed,
      disableGuildSelect: e_ = !1,
      showLogout: ec = !1,
      cancelCompletesFlow: eE = !0,
      isTrustedName: eI = !1,
      isEmbeddedFlow: eT = !1,
      inApp: ef = !1,
      callback: eS,
      callbackWithoutPost: eh,
      onClose: eA,
      disclosures: em
    } = e,
    eN = null != ed ? null == es ? void 0 : es.get(ed) : void 0,
    ep = (0, u.useLocation)(),
    eO = (0, I.useStateFromStores)([M.default], () => M.default.hasLoadedExperiments);
  a.useEffect(() => {
    D.default.isAuthenticated() && !eO && A.default.getExperiments()
  }, [eO]);
  let [eC, eR] = a.useState(null), [eg, eL] = a.useState(null), [ev, eD] = a.useState(null), [eM, ey] = a.useState(!1), eP = null == eC ? void 0 : eC.guilds, [eU, eb] = a.useState(null != el ? el : null), [eG, ew] = a.useState(null != eu ? eu : null), [ek, eB] = a.useState(y.NONE), eV = a.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new v.default(eC.user) : null, [null == eC ? void 0 : eC.user]), ex = a.useMemo(() => null == eP ? void 0 : eP.find(e => e.id === eU), [eP, eU]), [eF, eH] = a.useState(null), eY = a.useMemo(() => {
    var e;
    return null == eN && null == ed && (null !== (e = null == ea ? void 0 : ea.length) && void 0 !== e ? e : 0) === 0 && null == $
  }, [eN, null == ea ? void 0 : ea.length, $, ed]), [ej, eW] = a.useState(null);
  a.useEffect(() => {
    eY && p.default.fetchApplication(W).then(e => eW(L.default.createFromServer(e)))
  }, [W, eY]);
  let eK = a.useMemo(() => {
      var e, t;
      return null == eF ? null : null == ej ? void 0 : null === (t = ej.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eF]) || void 0 === e ? void 0 : e.oauth2InstallParams
    }, [null == ej ? void 0 : ej.integrationTypesConfig, eF]),
    {
      requestedScopes: ez,
      accountScopes: eZ
    } = a.useMemo(() => {
      let e = eY ? null == eK ? void 0 : eK.scopes : ea,
        t = (0, U.filterScopes)(null != e ? e : []),
        n = k.OrderedAccountScopes.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == eK ? void 0 : eK.scopes, ea, eY]),
    eX = a.useMemo(() => {
      var e;
      let t = eY ? E.deserialize(null !== (e = null == eK ? void 0 : eK.permissions) && void 0 !== e ? e : 0) : eo;
      return null != t ? t : y.NONE
    }, [null == eK ? void 0 : eK.permissions, eo, eY]),
    eQ = a.useRef(!1),
    [eq, eJ] = a.useState(null != em ? em : []),
    [e$, e0] = a.useState(null != em && em.length > 0);
  a.useEffect(() => {
    if (eQ.current) return;
    let e = async () => {
      eQ.current = !0;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, O.getDisclosures)(W);
        e0(!t), eJ(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) {
          (0, b.logoutWithRedirect)(ep);
          return
        }
        eD(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        eQ.current = !1
      }
    };
    if (null == em) {
      if (!D.default.isAuthenticated()) {
        (0, b.logoutWithRedirect)(ep);
        return
      }
      e()
    }
  }, [W, ep, em, eJ, eD, e0, eL]);
  let e1 = a.useCallback(async e => {
      if (null != eh) {
        eh(e);
        return
      }
      if (!e && !eE) {
        null != eS && (eS({
          application: null == eC ? void 0 : eC.application,
          guild: ex
        }), null == eA || eA());
        return
      }
      if (null == eF) {
        eD(Error("No integration type was selected."));
        return
      }
      try {
        ey(!0);
        let t = await (0, b.authorize)({
          authorize: e,
          clientId: W,
          scopes: ez,
          responseType: J,
          redirectUri: $,
          codeChallenge: ee,
          codeChallengeMethod: et,
          state: en,
          nonce: ei,
          integrationType: eF,
          permissions: E.remove(eX, ek),
          guildId: eF === _.ApplicationIntegrationType.GUILD_INSTALL && null != eU ? eU : void 0,
          channelId: eF === _.ApplicationIntegrationType.GUILD_INSTALL && null != eG ? eG : void 0
        });
        if (e && await (0, O.ackDisclosures)(W, eq), null != eS) eS({
          application: null == eC ? void 0 : eC.application,
          location: t.location,
          guild: ex
        }), null == eA || eA();
        else if (null != t.location) {
          let {
            host: e,
            path: n
          } = d.parse(t.location);
          P.default.isDiscordHostname(e) && n === Z.Routes.OAUTH2_AUTHORIZED ? (0, g.transitionTo)(Z.Routes.OAUTH2_AUTHORIZED, {
            state: {
              application: null == eC ? void 0 : eC.application,
              guild: ex
            }
          }) : window.location = t.location
        } else ey(!1)
      } catch (t) {
        let e = t.body;
        (null == e ? void 0 : e.message) != null && "" !== e.message ? eD(Error(e.message)) : eD(e), eL(1), ey(!1)
      }
    }, [eh, eE, eS, null == eC ? void 0 : eC.application, ex, eA, W, ez, J, $, ee, et, en, ei, eX, ek, eU, eF, eG, eq]),
    e2 = a.useRef(!1),
    e3 = a.useCallback(async () => {
      if (!D.default.isAuthenticated()) {
        (0, b.logoutWithRedirect)(ep);
        return
      }
      if (!eQ.current) {
        if (!e2.current) {
          e2.current = !0;
          try {
            let e = null != eN ? eN : await (0, b.fetchAuthorization)({
              clientId: W,
              scopes: ez,
              responseType: J,
              redirectUri: $,
              codeChallenge: ee,
              codeChallengeMethod: et,
              state: en,
              nonce: ei,
              integrationType: null != eF ? eF : void 0
            });
            eR((0, G.convertOAuth2Authorization)(e)), er === B.OAuth2Prompts.NONE && e.authorized && !e$ && e1(!0), (0, m.trackWithMetadata)(Z.AnalyticEvents.OAUTH2_AUTHORIZE_VIEWED, {
              application_id: e.application.id
            })
          } catch (n) {
            let {
              status: e,
              body: t
            } = n;
            if (401 === e) {
              (0, b.logoutWithRedirect)(ep);
              return
            }
            eD(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
          } finally {
            e2.current = !1
          }
        }
      }
    }, [ep, eN, W, ez, J, $, ee, et, en, ei, eF, er, e1, e$]),
    e4 = a.useMemo(() => {
      var e;
      return null != ej && eY ? Object.entries(null !== (e = ej.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
        let [t, n] = e;
        return null != n.oauth2InstallParams
      }).map(e => {
        let [t, n] = e;
        return Number(t)
      }) : []
    }, [ej, eY]);
  if (a.useEffect(() => {
      if (null == eg && (!eY || null != ej) && eO) {
        if (null != eN) {
          var e;
          eH(null !== (e = eN.integration_type) && void 0 !== e ? e : _.ApplicationIntegrationType.GUILD_INSTALL), eL(1)
        } else e4.length > 1 ? eL(0) : (1 === e4.length ? eH(e4[0]) : null != ed ? eH(ed) : eH(_.ApplicationIntegrationType.GUILD_INSTALL), eL(1))
      }
    }, [eN, e4, ej, eY, ed, eg, eO]), a.useEffect(() => {
      if (null == eF || null != eC || null != ev) return;
      eF === _.ApplicationIntegrationType.USER_INSTALL && (eb(null), ew(null));
      let e = ez.filter(e => !k.ValidScopes.includes(e));
      0 === ez.length ? eD(Error("No scopes were provided.")) : e.length > 0 ? eD(Error("Invalid scope: ".concat(e[0]))) : (0, w.containsDisallowedPermission)(eX) ? eD(Error("Invalid permission(s) provided.")) : e3()
    }, [e$, e3, ez, eX, eF, eC, ev]), ev instanceof Error) return {
    body: (0, s.jsx)(K.OAuth2Error, {
      message: ev.message
    })
  };
  let e6 = !1,
    e7 = !0,
    e5 = !0,
    e8 = !0;
  switch (eg) {
    case null:
      return {
        body: (0, s.jsx)(h.Spinner, {})
      };
    case 0:
      if (null == ej) return {
        body: (0, s.jsx)(h.Spinner, {})
      };
      l = (0, s.jsx)(j.default, {
        inApp: ef,
        application: ej,
        onSelect: e => {
          eH(e), eR(null), eL(1)
        }
      }), e7 = !1, e5 = !1, e8 = ef;
      break;
    case 1:
      if (null == eC || null == eV || null == eF) return {
        body: (0, s.jsx)(h.Spinner, {})
      };
      let e9 = null == ev || ev instanceof Error ? {} : ev,
        te = null == eP ? void 0 : eP.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        tt = eF === _.ApplicationIntegrationType.GUILD_INSTALL && ez.includes(c.OAuth2Scopes.WEBHOOK_INCOMING),
        tn = tt || eF === _.ApplicationIntegrationType.GUILD_INSTALL && (ez.includes(c.OAuth2Scopes.BOT) || ez.includes(c.OAuth2Scopes.APPLICATIONS_COMMANDS));
      l = (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(x.default, {
          application: eC.application,
          accountScopes: eZ,
          requestedScopes: ez,
          integrationType: eF,
          errors: e9,
          isTrustedName: eI
        }), tn ? (0, s.jsx)(H.default, {
          error: (null !== (n = null !== (t = e9[c.OAuth2Scopes.BOT]) && void 0 !== t ? t : e9[c.OAuth2Scopes.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
          selectedGuildId: eU,
          onGuildChange: eb,
          guilds: null != te ? te : [],
          disabled: "" !== eU && null != eU && !0 === e_
        }) : null, tt ? (0, s.jsx)(z.default, {
          error: (null !== (i = e9[c.OAuth2Scopes.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
          selectedChannelId: eG,
          selectedGuildId: eU,
          onChannelChange: ew
        }) : null]
      }), ez.includes(c.OAuth2Scopes.BOT) && !E.equals(eX, y.NONE) && (S = 2), e4.length > 1 && (f = 0), e6 = tn && null == ex || tt && null == eG;
      break;
    case 2:
      if (null == eC) return {
        body: (0, s.jsx)(h.Spinner, {})
      };
      l = (0, s.jsx)(F.default, {
        application: eC.application,
        permissions: eX,
        deniedPermissions: ek,
        onPermissionsChange: (e, t) => {
          eB(n => e ? E.remove(n, t) : E.add(n, t))
        },
        guild: ex
      }), f = 1
  }
  if (e7 && null != eC) {
    let e = null === (r = eC.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
    N = (0, s.jsx)(V.default, {
      application: eC.application,
      scopes: ez,
      disclosures: eq,
      redirectUri: null !== (o = eC.redirect_uri) && void 0 !== o ? o : null,
      approximateGuildCount: void 0 !== e ? e : null,
      isEmbeddedFlow: eT
    })
  }
  return e5 && null != eC && null != eV && (C = (0, s.jsx)(Y.default, {
    id: q,
    user: eV,
    application: eC.application,
    bot: eC.bot,
    accountScopes: eZ,
    showLogout: ec || !1,
    location: ep,
    isTrustedName: eI
  })), e8 && (R = (0, s.jsxs)("div", {
    className: Q.footer,
    children: [null != f ? (0, s.jsx)(T.Button, {
      look: T.Button.Looks.LINK,
      color: T.Button.Colors.PRIMARY,
      onClick: () => eL(f),
      children: X.default.Messages.BACK
    }) : (0, s.jsx)(T.Button, {
      look: T.Button.Looks.LINK,
      color: T.Button.Colors.PRIMARY,
      onClick: () => e1(!1),
      children: X.default.Messages.CANCEL
    }), 0 !== eg ? null != S ? (0, s.jsx)(T.Button, {
      onClick: () => eL(S),
      disabled: e6,
      children: X.default.Messages.CONTINUE
    }) : (0, s.jsx)(T.Button, {
      onClick: () => e1(!0),
      disabled: e6,
      submitting: eM,
      children: X.default.Messages.AUTHORIZE
    }) : null]
  })), {
    header: C,
    body: l,
    footer: R,
    nextStep: S,
    appDetails: N,
    sendAuthorize: e1
  }
}

function en(e, t) {
  if (null == t.location || null != e && e(t)) return;
  let {
    host: n,
    path: i,
    query: r
  } = d.parse(t.location, !0), a = P.default.isDiscordHostname(n) || window.location.host === n;
  if (a && i === Z.Routes.OAUTH2_AUTHORIZED)(0, f.openModal)(e => (0, s.jsx)(W.OAuth2Modal, {
    ...e,
    "aria-labelledby": q,
    children: (0, s.jsx)(K.OAuth2AuthorizedSuccess, {
      guild: t.guild,
      application: t.application,
      onClose: e.onClose
    })
  }));
  else if (a && (null == i ? void 0 : i.startsWith(Z.Routes.OAUTH2_ERROR)))(0, f.openModal)(e => {
    let t = r.error_description || r.error || X.default.Messages.OAUTH2_UNKNOWN_ERROR;
    return Array.isArray(t) && (t = t[0]), (0, s.jsx)(W.OAuth2Modal, {
      ...e,
      "aria-labelledby": q,
      children: (0, s.jsx)(K.OAuth2Error, {
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

function ei(e, t) {
  if ((0, R.isMidjourneyOnboardingFlow)("create-guild-and-oauth2-modal")) {
    C.default.openCreateGuildModal({
      onSuccess: n => er({
        ...e,
        guildId: n
      }, t)
    });
    return
  }
  er(e, t)
}

function er(e, t) {
  (0, f.openModal)(t => (0, s.jsx)($, {
    ...t,
    ...e,
    cancelCompletesFlow: !1,
    callback: en.bind(null, e.callback)
  }), {
    onCloseCallback: t
  })
}

function es(e) {
  let {
    hostname: t = "",
    host: n,
    path: i,
    query: r
  } = d.parse(e);
  return null != i && null != r && (P.default.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(Z.Endpoints.OAUTH2_AUTHORIZE)) || i.startsWith(Z.Routes.OAUTH2_AUTHORIZE)) ? (0, U.parseOAuth2AuthorizeProps)(r) : null
}(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"