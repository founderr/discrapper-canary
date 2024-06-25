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
    return eo
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
}), n(47120), n(411104);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(266067),
  _ = n(729594),
  c = n(373793),
  d = n(243814),
  E = n(149765),
  I = n(442837),
  T = n(693789),
  h = n(952265),
  f = n(21340),
  S = n(922770),
  A = n(893776),
  N = n(434650),
  m = n(367907),
  O = n(702493),
  p = n(728345),
  R = n(979200),
  g = n(560067),
  C = n(353926),
  v = n(341298),
  L = n(703656),
  D = n(973616),
  M = n(598077),
  P = n(314897),
  y = n(700785),
  U = n(591759),
  b = n(807675),
  G = n(489863),
  w = n(228763),
  x = n(422559),
  B = n(713938),
  k = n(166148),
  V = n(807989),
  Z = n(260430),
  H = n(668185),
  F = n(407546),
  Y = n(41259),
  j = n(28752),
  W = n(787025),
  K = n(397394),
  z = n(574384),
  q = n(981631),
  X = n(689938),
  Q = n(248702);
let J = "oauth2-authorize-header-id";

function $() {
  let e = (0, u.TH)(),
    t = o.useMemo(() => (0, b.y)(e.search), [e.search]);
  return (0, O.Z)(), (0, s.jsx)(W.G, {
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
    footer: o,
    nextStep: a,
    appDetails: u
  } = en({
    ...n,
    disableContinueUntilRead: !0
  }), _ = (0, s.jsxs)("div", {
    className: Q.content,
    children: [i, r, null == a ? u : null]
  });
  return (0, s.jsx)(W.j, {
    transitionState: t,
    "aria-labelledby": J,
    footer: o,
    children: (0, s.jsx)("div", {
      className: l()(Q.authorize, {
        [Q.inApp]: n.inApp
      }),
      children: (0, s.jsx)(f.zJ, {
        orientation: "auto",
        children: _
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
    footer: o,
    nextStep: a,
    appDetails: u
  } = en(n), _ = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: Q.content,
      children: [i, r, null == a ? u : null]
    }), o]
  });
  return t ? (0, s.jsxs)("div", {
    children: [(0, s.jsx)("div", {
      className: l()(Q.authorize, {
        [Q.inApp]: n.inApp
      }),
      children: (0, s.jsx)(f.zJ, {
        orientation: "auto",
        children: _
      })
    }), o]
  }) : (0, s.jsx)("div", {
    className: l()(Q.authorize, {
      [Q.inApp]: n.inApp
    }),
    children: (0, s.jsx)("div", {
      children: _
    })
  })
}

function en(e) {
  var t, n, i, r, a;
  let l, h, f, O, g, v, {
      clientId: W,
      responseType: $,
      redirectUri: ee,
      codeChallenge: et,
      codeChallengeMethod: en,
      state: ei,
      nonce: er,
      prompt: es,
      authorizations: eo,
      scopes: ea,
      permissions: el,
      guildId: eu,
      channelId: e_,
      integrationType: ec,
      disableGuildSelect: ed = !1,
      disableContinueUntilRead: eE = !1,
      showLogout: eI = !1,
      cancelCompletesFlow: eT = !0,
      isTrustedName: eh = !1,
      isEmbeddedFlow: ef = !1,
      inApp: eS = !1,
      callback: eA,
      callbackWithoutPost: eN,
      onClose: em,
      disclosures: eO
    } = e,
    ep = null != ec ? null == eo ? void 0 : eo.get(ec) : void 0,
    eR = (0, u.TH)(),
    eg = (0, I.e7)([C.Z], () => C.Z.hasLoadedExperiments);
  o.useEffect(() => {
    P.default.isAuthenticated() && !eg && A.Z.getExperiments()
  }, [eg]);
  let [eC, ev] = o.useState(null), [eL, eD] = o.useState(null), [eM, eP] = o.useState(null), [ey, eU] = o.useState(!1), [eb, eG] = o.useState(!eE), ew = null == eC ? void 0 : eC.guilds, [ex, eB] = o.useState(null != eu ? eu : null), [ek, eV] = o.useState(null != e_ ? e_ : null), [eZ, eH] = o.useState(y.Hn), eF = o.useMemo(() => (null == eC ? void 0 : eC.user) != null ? new M.Z(eC.user) : null, [null == eC ? void 0 : eC.user]), eY = o.useMemo(() => null == ew ? void 0 : ew.find(e => e.id === ex), [ew, ex]), [ej, eW] = o.useState(null), eK = o.useMemo(() => {
    var e;
    return null == ep && null == ec && (null !== (e = null == ea ? void 0 : ea.length) && void 0 !== e ? e : 0) === 0 && null == ee
  }, [ep, null == ea ? void 0 : ea.length, ee, ec]), [ez, eq] = o.useState(null);
  o.useEffect(() => {
    eK && p.Z.fetchApplication(W).then(e => eq(D.Z.createFromServer(e)))
  }, [W, eK]);
  let eX = o.useMemo(() => {
      var e, t;
      return null == ej ? null : null == ez ? void 0 : null === (t = ez.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[ej]) || void 0 === e ? void 0 : e.oauth2InstallParams
    }, [null == ez ? void 0 : ez.integrationTypesConfig, ej]),
    {
      requestedScopes: eQ,
      accountScopes: eJ
    } = o.useMemo(() => {
      let e = eK ? null == eX ? void 0 : eX.scopes : ea,
        t = (0, b.K)(null != e ? e : []),
        n = B.Qe.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == eX ? void 0 : eX.scopes, ea, eK]),
    e$ = o.useMemo(() => {
      var e;
      let t = eK ? E.vB(null !== (e = null == eX ? void 0 : eX.permissions) && void 0 !== e ? e : 0) : el;
      return null != t ? t : y.Hn
    }, [null == eX ? void 0 : eX.permissions, el, eK]),
    e0 = o.useRef(!1),
    [e1, e2] = o.useState(null != eO ? eO : []),
    [e3, e4] = o.useState(null != eO && eO.length > 0);
  o.useEffect(() => {
    if (e0.current) return;
    let e = async () => {
      e0.current = !0;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, R.de)(W);
        e4(!t), e2(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) {
          (0, G.c$)(eR);
          return
        }
        eP(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        e0.current = !1
      }
    };
    if (null == eO) {
      if (!P.default.isAuthenticated()) {
        (0, G.c$)(eR);
        return
      }
      e()
    }
  }, [W, eR, eO, e2, eP, e4, eD]);
  let e7 = o.useCallback(async e => {
      if (null != eN) {
        eN(e);
        return
      }
      if (!e && !eT) {
        null != eA && (eA({
          application: null == eC ? void 0 : eC.application,
          guild: eY
        }), null == em || em());
        return
      }
      if (null == ej) {
        eP(Error("No integration type was selected."));
        return
      }
      try {
        eU(!0);
        let t = await (0, G.Iq)({
          authorize: e,
          clientId: W,
          scopes: eQ,
          responseType: $,
          redirectUri: ee,
          codeChallenge: et,
          codeChallengeMethod: en,
          state: ei,
          nonce: er,
          integrationType: ej,
          permissions: E.Od(e$, eZ),
          guildId: ej === c.Y.GUILD_INSTALL && null != ex ? ex : void 0,
          channelId: ej === c.Y.GUILD_INSTALL && null != ek ? ek : void 0
        });
        if (e && await (0, R.x9)(W, e1), null != eA) eA({
          application: null == eC ? void 0 : eC.application,
          location: t.location,
          guild: eY
        }), null == em || em();
        else if (null != t.location) {
          let {
            host: e,
            path: n
          } = _.parse(t.location);
          U.Z.isDiscordHostname(e) && n === q.Z5c.OAUTH2_AUTHORIZED ? (0, L.uL)(q.Z5c.OAUTH2_AUTHORIZED, {
            state: {
              application: null == eC ? void 0 : eC.application,
              guild: eY
            }
          }) : window.location = t.location
        } else eU(!1)
      } catch (t) {
        let e = t.body;
        (null == e ? void 0 : e.message) != null && "" !== e.message ? eP(Error(e.message)) : eP(e), eD(1), eU(!1)
      }
    }, [eN, eT, eA, null == eC ? void 0 : eC.application, eY, em, W, eQ, $, ee, et, en, ei, er, e$, eZ, ex, ej, ek, e1]),
    e5 = o.useRef(!1),
    e6 = o.useCallback(async () => {
      if (!P.default.isAuthenticated()) {
        (0, G.c$)(eR);
        return
      }
      if (!e0.current) {
        if (!e5.current) {
          e5.current = !0;
          try {
            let e = null != ep ? ep : await (0, G.Ww)({
              clientId: W,
              scopes: eQ,
              responseType: $,
              redirectUri: ee,
              codeChallenge: et,
              codeChallengeMethod: en,
              state: ei,
              nonce: er,
              integrationType: null != ej ? ej : void 0
            });
            ev((0, w.d)(e)), es === k.s.NONE && e.authorized && !e3 && e7(!0), (0, m.yw)(q.rMx.OAUTH2_AUTHORIZE_VIEWED, {
              application_id: e.application.id
            })
          } catch (n) {
            let {
              status: e,
              body: t
            } = n;
            if (401 === e) {
              (0, G.c$)(eR);
              return
            }
            eP(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
          } finally {
            e5.current = !1
          }
        }
      }
    }, [eR, ep, W, eQ, $, ee, et, en, ei, er, ej, es, e7, e3]),
    e8 = o.useMemo(() => {
      var e;
      return null != ez && eK ? Object.entries(null !== (e = ez.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
        let [t, n] = e;
        return null != n.oauth2InstallParams
      }).map(e => {
        let [t, n] = e;
        return Number(t)
      }) : []
    }, [ez, eK]);
  o.useEffect(() => {
    if (null == eL && (!eK || null != ez) && !!eg)
      if (null != ep) {
        var e;
        eW(null !== (e = ep.integration_type) && void 0 !== e ? e : c.Y.GUILD_INSTALL), eD(1)
      } else e8.length > 1 ? eD(0) : (1 === e8.length ? eW(e8[0]) : null != ec ? eW(ec) : eW(c.Y.GUILD_INSTALL), eD(1))
  }, [ep, e8, ez, eK, ec, eL, eg]), o.useEffect(() => {
    if (null == ej || null != eC || null != eM) return;
    ej === c.Y.USER_INSTALL && (eB(null), eV(null));
    let e = eQ.filter(e => !B.ak.includes(e));
    0 === eQ.length ? eP(Error("No scopes were provided.")) : e.length > 0 ? eP(Error("Invalid scope: ".concat(e[0]))) : (0, x._$)(e$) ? eP(Error("Invalid permission(s) provided.")) : e6()
  }, [e3, e6, eQ, e$, ej, eC, eM]);
  let e9 = o.useCallback(e => {
      e && eG(!0)
    }, []),
    te = (0, N.O)(e9);
  if (eM instanceof Error) return {
    body: (0, s.jsx)(K.Lk, {
      message: eM.message
    })
  };
  let tt = !1,
    tn = !0,
    ti = !0,
    tr = !0;
  switch (eL) {
    case null:
      return {
        body: (0, s.jsx)(S.$, {})
      };
    case 0:
      if (null == ez) return {
        body: (0, s.jsx)(S.$, {})
      };
      l = (0, s.jsx)(j.Z, {
        inApp: eS,
        application: ez,
        onSelect: e => {
          eW(e), ev(null), eD(1)
        }
      }), tn = !1, ti = !1, tr = eS;
      break;
    case 1:
      if (null == eC || null == eF || null == ej) return {
        body: (0, s.jsx)(S.$, {})
      };
      let ts = null == eM || eM instanceof Error ? {} : eM,
        to = null == ew ? void 0 : ew.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        ta = ej === c.Y.GUILD_INSTALL && eQ.includes(d.x.WEBHOOK_INCOMING),
        tl = ta || ej === c.Y.GUILD_INSTALL && (eQ.includes(d.x.BOT) || eQ.includes(d.x.APPLICATIONS_COMMANDS));
      l = (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(Z.Z, {
          application: eC.application,
          accountScopes: eJ,
          requestedScopes: eQ,
          integrationType: ej,
          errors: ts,
          isTrustedName: eh
        }), tl ? (0, s.jsx)(F.Z, {
          error: (null !== (n = null !== (t = ts[d.x.BOT]) && void 0 !== t ? t : ts[d.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
          selectedGuildId: ex,
          onGuildChange: eB,
          guilds: null != to ? to : [],
          disabled: "" !== ex && null != ex && !0 === ed
        }) : null, ta ? (0, s.jsx)(z.Z, {
          error: (null !== (i = ts[d.x.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
          selectedChannelId: ek,
          selectedGuildId: ex,
          onChannelChange: eV
        }) : null]
      }), eQ.includes(d.x.BOT) && !E.fS(e$, y.Hn) && (f = 2), e8.length > 1 && (h = 0), tt = tl && null == eY || ta && null == ek;
      break;
    case 2:
      if (null == eC) return {
        body: (0, s.jsx)(S.$, {})
      };
      l = (0, s.jsx)(H.Z, {
        application: eC.application,
        permissions: e$,
        deniedPermissions: eZ,
        onPermissionsChange: (e, t) => {
          eH(n => e ? E.Od(n, t) : E.IH(n, t))
        },
        guild: eY
      }), h = 1
  }
  if (tn && null != eC) {
    let e = null === (r = eC.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
    O = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(V.Z, {
        application: eC.application,
        scopes: eQ,
        disclosures: e1,
        redirectUri: null !== (a = eC.redirect_uri) && void 0 !== a ? a : null,
        approximateGuildCount: void 0 !== e ? e : null,
        isEmbeddedFlow: ef
      }), (0, s.jsx)("div", {
        ref: te
      })]
    })
  }
  ti && null != eC && null != eF && (g = (0, s.jsx)(Y.Z, {
    id: J,
    user: eF,
    application: eC.application,
    bot: eC.bot,
    accountScopes: eJ,
    showLogout: eI || !1,
    location: eR,
    isTrustedName: eh
  }));
  let tu = null == f && null != O && !eb;
  return tr && (v = (0, s.jsxs)("div", {
    className: Q.footer,
    children: [null != h ? (0, s.jsx)(T.zx, {
      look: T.zx.Looks.LINK,
      color: T.zx.Colors.PRIMARY,
      onClick: () => eD(h),
      children: X.Z.Messages.BACK
    }) : (0, s.jsx)(T.zx, {
      look: T.zx.Looks.LINK,
      color: T.zx.Colors.PRIMARY,
      onClick: () => e7(!1),
      children: X.Z.Messages.CANCEL
    }), 0 !== eL ? null != f ? (0, s.jsx)(T.zx, {
      onClick: () => eD(f),
      disabled: tt,
      children: X.Z.Messages.CONTINUE
    }) : (0, s.jsx)(T.zx, {
      onClick: () => e7(!0),
      disabled: tu,
      submitting: ey,
      children: X.Z.Messages.AUTHORIZE
    }) : null]
  })), {
    header: g,
    body: l,
    footer: v,
    nextStep: f,
    appDetails: O,
    sendAuthorize: e7
  }
}

function ei(e, t) {
  if (null == t.location || null != e && e(t)) return;
  let {
    host: n,
    path: i,
    query: r
  } = _.parse(t.location, !0), o = U.Z.isDiscordHostname(n) || window.location.host === n;
  if (o && i === q.Z5c.OAUTH2_AUTHORIZED)(0, h.h7)(e => (0, s.jsx)(W.j, {
    ...e,
    "aria-labelledby": J,
    children: (0, s.jsx)(K.Jh, {
      guild: t.guild,
      application: t.application,
      onClose: e.onClose
    })
  }));
  else if (o && (null == i ? void 0 : i.startsWith(q.Z5c.OAUTH2_ERROR)))(0, h.h7)(e => {
    let t = r.error_description || r.error || X.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return Array.isArray(t) && (t = t[0]), (0, s.jsx)(W.j, {
      ...e,
      "aria-labelledby": J,
      children: (0, s.jsx)(K.Lk, {
        message: t,
        onClose: e.onClose
      })
    })
  });
  else {
    var a;
    null === (a = window.open(t.location, "_blank")) || void 0 === a || a.focus()
  }
}

function er(e, t) {
  if ((0, v.g)("create-guild-and-oauth2-modal")) {
    g.Z.openCreateGuildModal({
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
  (0, h.h7)(t => (0, s.jsx)(ee, {
    ...t,
    ...e,
    cancelCompletesFlow: !1,
    callback: ei.bind(null, e.callback)
  }), {
    onCloseCallback: t
  })
}

function eo(e) {
  let {
    hostname: t = "",
    host: n,
    path: i,
    query: r
  } = _.parse(e);
  return null != i && null != r && (U.Z.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(q.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(q.Z5c.OAUTH2_AUTHORIZE)) ? (0, b.y)(r) : null
}(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"