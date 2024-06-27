"use strict";
n.r(t), n.d(t, {
  OAuth2Authorize: function() {
    return en
  },
  OAuth2AuthorizeModal: function() {
    return et
  },
  OAuth2AuthorizePage: function() {
    return ee
  },
  getOAuth2AuthorizeProps: function() {
    return ea
  },
  openOAuth2Modal: function() {
    return eo
  },
  openOAuth2ModalWithCreateGuildModal: function() {
    return es
  },
  useOAuth2AuthorizeForm: function() {
    return ei
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
  A = n(481060),
  N = n(893776),
  m = n(434650),
  O = n(367907),
  R = n(702493),
  p = n(728345),
  g = n(979200),
  C = n(560067),
  v = n(353926),
  L = n(341298),
  D = n(703656),
  M = n(973616),
  P = n(598077),
  y = n(314897),
  U = n(700785),
  b = n(591759),
  G = n(807675),
  w = n(489863),
  B = n(228763),
  x = n(422559),
  k = n(713938),
  V = n(166148),
  Z = n(807989),
  H = n(260430),
  F = n(668185),
  Y = n(407546),
  j = n(41259),
  W = n(28752),
  K = n(787025),
  z = n(397394),
  q = n(574384),
  X = n(981631),
  Q = n(689938),
  J = n(248702);
let $ = "oauth2-authorize-header-id";

function ee() {
  let e = (0, u.TH)(),
    t = o.useMemo(() => (0, G.y)(e.search), [e.search]);
  return (0, R.Z)(), (0, s.jsx)(K.G, {
    children: (0, s.jsx)(en, {
      ...t,
      showLogout: !0
    })
  })
}

function et(e) {
  let {
    transitionState: t,
    ...n
  } = e, {
    header: i,
    body: r,
    footer: o,
    nextStep: a,
    appDetails: u
  } = ei({
    ...n,
    disableContinueUntilRead: !0
  }), _ = (0, s.jsxs)("div", {
    className: J.content,
    children: [i, r, null == a ? u : null]
  });
  return (0, s.jsx)(K.j, {
    transitionState: t,
    "aria-labelledby": $,
    footer: o,
    children: (0, s.jsx)("div", {
      className: l()(J.authorize, {
        [J.inApp]: n.inApp
      }),
      children: (0, s.jsx)(f.zJ, {
        orientation: "auto",
        children: _
      })
    })
  })
}

function en(e) {
  let {
    scrollable: t,
    ...n
  } = e, {
    header: i,
    body: r,
    footer: o,
    nextStep: a,
    appDetails: u
  } = ei(n), _ = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: J.content,
      children: [i, r, null == a ? u : null]
    }), o]
  });
  return t ? (0, s.jsxs)("div", {
    children: [(0, s.jsx)("div", {
      className: l()(J.authorize, {
        [J.inApp]: n.inApp
      }),
      children: (0, s.jsx)(f.zJ, {
        orientation: "auto",
        children: _
      })
    }), o]
  }) : (0, s.jsx)("div", {
    className: l()(J.authorize, {
      [J.inApp]: n.inApp
    }),
    children: (0, s.jsx)("div", {
      children: _
    })
  })
}

function ei(e) {
  var t, n, i, r, a;
  let l, h, f, R, C, L, {
      clientId: K,
      responseType: ee,
      redirectUri: et,
      codeChallenge: en,
      codeChallengeMethod: ei,
      state: er,
      nonce: es,
      prompt: eo,
      authorizations: ea,
      scopes: el,
      permissions: eu,
      guildId: e_,
      channelId: ec,
      integrationType: ed,
      disableGuildSelect: eE = !1,
      disableContinueUntilRead: eI = !1,
      showLogout: eT = !1,
      cancelCompletesFlow: eh = !0,
      isTrustedName: ef = !1,
      isEmbeddedFlow: eS = !1,
      inApp: eA = !1,
      callback: eN,
      callbackWithoutPost: em,
      onClose: eO,
      disclosures: eR
    } = e,
    ep = null != ed ? null == ea ? void 0 : ea.get(ed) : void 0,
    eg = (0, u.TH)(),
    eC = (0, I.e7)([v.Z], () => v.Z.hasLoadedExperiments);
  o.useEffect(() => {
    y.default.isAuthenticated() && !eC && N.Z.getExperiments()
  }, [eC]);
  let [ev, eL] = o.useState(null), [eD, eM] = o.useState(null), [eP, ey] = o.useState(null), [eU, eb] = o.useState(!1), [eG, ew] = o.useState(!eI), eB = null == ev ? void 0 : ev.guilds, [ex, ek] = o.useState(null != e_ ? e_ : null), [eV, eZ] = o.useState(null != ec ? ec : null), [eH, eF] = o.useState(U.Hn), eY = o.useMemo(() => (null == ev ? void 0 : ev.user) != null ? new P.Z(ev.user) : null, [null == ev ? void 0 : ev.user]), ej = o.useMemo(() => null == eB ? void 0 : eB.find(e => e.id === ex), [eB, ex]), [eW, eK] = o.useState(null), ez = o.useMemo(() => {
    var e;
    return null == ep && null == ed && (null !== (e = null == el ? void 0 : el.length) && void 0 !== e ? e : 0) === 0 && null == et
  }, [ep, null == el ? void 0 : el.length, et, ed]), [eq, eX] = o.useState(null);
  o.useEffect(() => {
    ez && p.Z.fetchApplication(K).then(e => eX(M.Z.createFromServer(e)))
  }, [K, ez]);
  let eQ = o.useMemo(() => {
      var e, t;
      return null == eW ? null : null == eq ? void 0 : null === (t = eq.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eW]) || void 0 === e ? void 0 : e.oauth2InstallParams
    }, [null == eq ? void 0 : eq.integrationTypesConfig, eW]),
    {
      requestedScopes: eJ,
      accountScopes: e$
    } = o.useMemo(() => {
      let e = ez ? null == eQ ? void 0 : eQ.scopes : el,
        t = (0, G.K)(null != e ? e : []),
        n = k.Qe.filter(e => t.includes(e));
      return {
        requestedScopes: t,
        accountScopes: n
      }
    }, [null == eQ ? void 0 : eQ.scopes, el, ez]),
    e0 = o.useMemo(() => {
      var e;
      let t = ez ? E.vB(null !== (e = null == eQ ? void 0 : eQ.permissions) && void 0 !== e ? e : 0) : eu;
      return null != t ? t : U.Hn
    }, [null == eQ ? void 0 : eQ.permissions, eu, ez]),
    e1 = o.useRef(!1),
    [e2, e3] = o.useState(null != eR ? eR : []),
    [e4, e7] = o.useState(null != eR && eR.length > 0);
  o.useEffect(() => {
    if (e1.current) return;
    let e = async () => {
      e1.current = !0;
      try {
        let {
          disclosures: e,
          allAcked: t
        } = await (0, g.de)(K);
        e7(!t), e3(e)
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) {
          (0, w.c$)(eg);
          return
        }
        ey(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
      } finally {
        e1.current = !1
      }
    };
    if (null == eR) {
      if (!y.default.isAuthenticated()) {
        (0, w.c$)(eg);
        return
      }
      e()
    }
  }, [K, eg, eR, e3, ey, e7, eM]);
  let e5 = o.useCallback(async e => {
      if (null != em) {
        em(e);
        return
      }
      if (!e && !eh) {
        null != eN && (eN({
          application: null == ev ? void 0 : ev.application,
          guild: ej
        }), null == eO || eO());
        return
      }
      if (null == eW) {
        ey(Error("No integration type was selected."));
        return
      }
      try {
        eb(!0);
        let t = await (0, w.Iq)({
          authorize: e,
          clientId: K,
          scopes: eJ,
          responseType: ee,
          redirectUri: et,
          codeChallenge: en,
          codeChallengeMethod: ei,
          state: er,
          nonce: es,
          integrationType: eW,
          permissions: E.Od(e0, eH),
          guildId: eW === c.Y.GUILD_INSTALL && null != ex ? ex : void 0,
          channelId: eW === c.Y.GUILD_INSTALL && null != eV ? eV : void 0
        });
        if (e && await (0, g.x9)(K, e2), null != eN) eN({
          application: null == ev ? void 0 : ev.application,
          location: t.location,
          guild: ej
        }), null == eO || eO();
        else if (null != t.location) {
          let {
            host: e,
            path: n
          } = _.parse(t.location);
          b.Z.isDiscordHostname(e) && n === X.Z5c.OAUTH2_AUTHORIZED ? (0, D.uL)(X.Z5c.OAUTH2_AUTHORIZED, {
            state: {
              application: null == ev ? void 0 : ev.application,
              guild: ej
            }
          }) : window.location = t.location
        } else eb(!1)
      } catch (t) {
        let e = t.body;
        (null == e ? void 0 : e.message) != null && "" !== e.message ? ey(Error(e.message)) : ey(e), eM(1), eb(!1)
      }
    }, [em, eh, eN, null == ev ? void 0 : ev.application, ej, eO, K, eJ, ee, et, en, ei, er, es, e0, eH, ex, eW, eV, e2]),
    e6 = o.useRef(!1),
    e8 = o.useCallback(async () => {
      if (!y.default.isAuthenticated()) {
        (0, w.c$)(eg);
        return
      }
      if (!e1.current) {
        if (!e6.current) {
          e6.current = !0;
          try {
            let e = null != ep ? ep : await (0, w.Ww)({
              clientId: K,
              scopes: eJ,
              responseType: ee,
              redirectUri: et,
              codeChallenge: en,
              codeChallengeMethod: ei,
              state: er,
              nonce: es,
              integrationType: null != eW ? eW : void 0
            });
            eL((0, B.d)(e)), eo === V.s.NONE && e.authorized && !e4 && e5(!0), (0, O.yw)(X.rMx.OAUTH2_AUTHORIZE_VIEWED, {
              application_id: e.application.id
            })
          } catch (n) {
            let {
              status: e,
              body: t
            } = n;
            if (401 === e) {
              (0, w.c$)(eg);
              return
            }
            ey(Error(null != t.message ? t.message : "".concat(Object.keys(t)[0], ": ").concat(Object.values(t)[0])))
          } finally {
            e6.current = !1
          }
        }
      }
    }, [eg, ep, K, eJ, ee, et, en, ei, er, es, eW, eo, e5, e4]),
    e9 = o.useMemo(() => {
      var e;
      return null != eq && ez ? Object.entries(null !== (e = eq.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
        let [t, n] = e;
        return null != n.oauth2InstallParams
      }).map(e => {
        let [t, n] = e;
        return Number(t)
      }) : []
    }, [eq, ez]);
  o.useEffect(() => {
    if (null == eD && (!ez || null != eq) && !!eC)
      if (null != ep) {
        var e;
        eK(null !== (e = ep.integration_type) && void 0 !== e ? e : c.Y.GUILD_INSTALL), eM(1)
      } else e9.length > 1 ? eM(0) : (1 === e9.length ? eK(e9[0]) : null != ed ? eK(ed) : eK(c.Y.GUILD_INSTALL), eM(1))
  }, [ep, e9, eq, ez, ed, eD, eC]), o.useEffect(() => {
    if (null == eW || null != ev || null != eP) return;
    eW === c.Y.USER_INSTALL && (ek(null), eZ(null));
    let e = eJ.filter(e => !k.ak.includes(e));
    0 === eJ.length ? ey(Error("No scopes were provided.")) : e.length > 0 ? ey(Error("Invalid scope: ".concat(e[0]))) : (0, x._$)(e0) ? ey(Error("Invalid permission(s) provided.")) : e8()
  }, [e4, e8, eJ, e0, eW, ev, eP]);
  let te = o.useCallback(e => {
      e && ew(!0)
    }, []),
    tt = (0, m.O)(te);
  if (eP instanceof Error) return {
    body: (0, s.jsx)(z.Lk, {
      message: eP.message
    })
  };
  let tn = !1,
    ti = !0,
    tr = !0,
    ts = !0;
  switch (eD) {
    case null:
      return {
        body: (0, s.jsx)(S.$, {})
      };
    case 0:
      if (null == eq) return {
        body: (0, s.jsx)(S.$, {})
      };
      l = (0, s.jsx)(W.Z, {
        inApp: eA,
        application: eq,
        onSelect: e => {
          eK(e), eL(null), eM(1)
        }
      }), ti = !1, tr = !1, ts = eA;
      break;
    case 1:
      if (null == ev || null == eY || null == eW) return {
        body: (0, s.jsx)(S.$, {})
      };
      let to = null == eP || eP instanceof Error ? {} : eP,
        ta = null == eB ? void 0 : eB.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
        tl = eW === c.Y.GUILD_INSTALL && eJ.includes(d.x.WEBHOOK_INCOMING),
        tu = tl || eW === c.Y.GUILD_INSTALL && (eJ.includes(d.x.BOT) || eJ.includes(d.x.APPLICATIONS_COMMANDS));
      l = (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(H.Z, {
          application: ev.application,
          accountScopes: e$,
          requestedScopes: eJ,
          integrationType: eW,
          errors: to,
          isTrustedName: ef
        }), tu ? (0, s.jsx)(Y.Z, {
          error: (null !== (n = null !== (t = to[d.x.BOT]) && void 0 !== t ? t : to[d.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
          selectedGuildId: ex,
          onGuildChange: ek,
          guilds: null != ta ? ta : [],
          disabled: "" !== ex && null != ex && !0 === eE
        }) : null, tl ? (0, s.jsx)(q.Z, {
          error: (null !== (i = to[d.x.WEBHOOK_INCOMING]) && void 0 !== i ? i : [])[0],
          selectedChannelId: eV,
          selectedGuildId: ex,
          onChannelChange: eZ
        }) : null]
      }), eJ.includes(d.x.BOT) && !E.fS(e0, U.Hn) && (f = 2), e9.length > 1 && (h = 0), tn = tu && null == ej || tl && null == eV;
      break;
    case 2:
      if (null == ev) return {
        body: (0, s.jsx)(S.$, {})
      };
      l = (0, s.jsx)(F.Z, {
        application: ev.application,
        permissions: e0,
        deniedPermissions: eH,
        onPermissionsChange: (e, t) => {
          eF(n => e ? E.Od(n, t) : E.IH(n, t))
        },
        guild: ej
      }), h = 1
  }
  if (ti && null != ev) {
    let e = null === (r = ev.bot) || void 0 === r ? void 0 : r.approximate_guild_count;
    R = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(Z.Z, {
        application: ev.application,
        scopes: eJ,
        disclosures: e2,
        redirectUri: null !== (a = ev.redirect_uri) && void 0 !== a ? a : null,
        approximateGuildCount: void 0 !== e ? e : null,
        isEmbeddedFlow: eS
      }), (0, s.jsx)("div", {
        className: J.intObserver,
        ref: tt
      })]
    })
  }
  tr && null != ev && null != eY && (C = (0, s.jsx)(j.Z, {
    id: $,
    user: eY,
    application: ev.application,
    bot: ev.bot,
    accountScopes: e$,
    showLogout: eT || !1,
    location: eg,
    isTrustedName: ef
  }));
  let t_ = null == f && null != R && !eG;
  return ts && (L = (0, s.jsxs)("div", {
    className: J.footer,
    children: [null != h ? (0, s.jsx)(T.zx, {
      look: T.zx.Looks.LINK,
      color: T.zx.Colors.PRIMARY,
      onClick: () => eM(h),
      children: Q.Z.Messages.BACK
    }) : (0, s.jsx)(T.zx, {
      look: T.zx.Looks.LINK,
      color: T.zx.Colors.PRIMARY,
      onClick: () => e5(!1),
      children: Q.Z.Messages.CANCEL
    }), 0 !== eD ? null != f ? (0, s.jsx)(T.zx, {
      onClick: () => eM(f),
      disabled: tn,
      children: Q.Z.Messages.CONTINUE
    }) : t_ ? (0, s.jsx)(A.Tooltip, {
      text: Q.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
      children: e => (0, s.jsx)("div", {
        ...e,
        children: (0, s.jsx)(T.zx, {
          onClick: () => e5(!0),
          disabled: !0,
          submitting: eU,
          children: Q.Z.Messages.AUTHORIZE
        })
      })
    }) : (0, s.jsx)(T.zx, {
      onClick: () => e5(!0),
      submitting: eU,
      children: Q.Z.Messages.AUTHORIZE
    }) : null]
  })), {
    header: C,
    body: l,
    footer: L,
    nextStep: f,
    appDetails: R,
    sendAuthorize: e5
  }
}

function er(e, t) {
  if (null == t.location || null != e && e(t)) return;
  let {
    host: n,
    path: i,
    query: r
  } = _.parse(t.location, !0), o = b.Z.isDiscordHostname(n) || window.location.host === n;
  if (o && i === X.Z5c.OAUTH2_AUTHORIZED)(0, h.h7)(e => (0, s.jsx)(K.j, {
    ...e,
    "aria-labelledby": $,
    children: (0, s.jsx)(z.Jh, {
      guild: t.guild,
      application: t.application,
      onClose: e.onClose
    })
  }));
  else if (o && (null == i ? void 0 : i.startsWith(X.Z5c.OAUTH2_ERROR)))(0, h.h7)(e => {
    let t = r.error_description || r.error || Q.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return Array.isArray(t) && (t = t[0]), (0, s.jsx)(K.j, {
      ...e,
      "aria-labelledby": $,
      children: (0, s.jsx)(z.Lk, {
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

function es(e, t) {
  if ((0, L.g)("create-guild-and-oauth2-modal")) {
    C.Z.openCreateGuildModal({
      onSuccess: n => eo({
        ...e,
        guildId: n
      }, t)
    });
    return
  }
  eo(e, t)
}

function eo(e, t) {
  (0, h.h7)(t => (0, s.jsx)(et, {
    ...t,
    ...e,
    cancelCompletesFlow: !1,
    callback: er.bind(null, e.callback)
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
  } = _.parse(e);
  return null != i && null != r && (b.Z.isDiscordHostname(t) || n === window.location.host) && (i.startsWith("/api".concat(X.ANM.OAUTH2_AUTHORIZE)) || i.startsWith(X.Z5c.OAUTH2_AUTHORIZE)) ? (0, G.y)(r) : null
}(r = i || (i = {}))[r.SELECT_INSTALL_TYPE = 0] = "SELECT_INSTALL_TYPE", r[r.AUTHORIZE_SCOPES = 1] = "AUTHORIZE_SCOPES", r[r.AUTHORIZE_BOT_PERMISSIONS = 2] = "AUTHORIZE_BOT_PERMISSIONS"