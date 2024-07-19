n.r(t), n.d(t, {
  OAuth2Authorize: function() {
return en;
  },
  OAuth2AuthorizeModal: function() {
return et;
  },
  OAuth2AuthorizePage: function() {
return ee;
  },
  getOAuth2AuthorizeProps: function() {
return eo;
  },
  openOAuth2Modal: function() {
return es;
  },
  openOAuth2ModalWithCreateGuildModal: function() {
return ea;
  },
  useOAuth2AuthorizeForm: function() {
return er;
  }
}), n(47120), n(411104);
var r, i, a = n(735250),
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
  m = n(21340),
  I = n(922770),
  T = n(481060),
  g = n(893776),
  S = n(434650),
  A = n(367907),
  N = n(702493),
  v = n(728345),
  O = n(979200),
  R = n(560067),
  C = n(353926),
  y = n(341298),
  D = n(703656),
  L = n(973616),
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
  $ = n(312750);
let J = 'oauth2-authorize-header-id';

function ee() {
  let e = (0, u.TH)(),
t = s.useMemo(() => (0, w.y)(e.search), [e.search]);
  return (0, N.Z)(), (0, a.jsx)(K.G, {
children: (0, a.jsx)(en, {
  ...t,
  showLogout: !0
})
  });
}

function et(e) {
  let {
transitionState: t,
...n
  } = e, {
header: r,
body: i,
footer: s,
nextStep: o,
appDetails: u
  } = er({
...n,
disableContinueUntilRead: !0,
inApp: !0
  }), c = (0, a.jsxs)('div', {
className: $.content,
children: [
  r,
  i,
  null == o ? u : null
]
  });
  return (0, a.jsx)(K.j, {
transitionState: t,
'aria-labelledby': J,
footer: s,
children: (0, a.jsx)('div', {
  className: l()($.authorize, {
    [$.inApp]: n.inApp
  }),
  children: (0, a.jsx)(m.zJ, {
    orientation: 'auto',
    children: c
  })
})
  });
}

function en(e) {
  let {
scrollable: t,
...n
  } = e, {
header: r,
body: i,
footer: s,
nextStep: o,
appDetails: u
  } = er(n), c = (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)('div', {
    className: $.content,
    children: [
      r,
      i,
      null == o ? u : null
    ]
  }),
  s
]
  });
  return t ? (0, a.jsxs)('div', {
children: [
  (0, a.jsx)('div', {
    className: l()($.authorize, {
      [$.inApp]: n.inApp
    }),
    children: (0, a.jsx)(m.zJ, {
      orientation: 'auto',
      children: c
    })
  }),
  s
]
  }) : (0, a.jsx)('div', {
className: l()($.authorize, {
  [$.inApp]: n.inApp
}),
children: (0, a.jsx)('div', {
  children: c
})
  });
}

function er(e) {
  var t, n, r, i, o;
  let p, m, N, R, y, K, {
  clientId: ee,
  responseType: et,
  redirectUri: en,
  codeChallenge: er,
  codeChallengeMethod: ei,
  state: ea,
  nonce: es,
  prompt: eo,
  authorizations: el,
  scopes: eu,
  permissions: ec,
  guildId: ed,
  channelId: e_,
  integrationType: eE,
  disableGuildSelect: ef = !1,
  disableContinueUntilRead: eh = !1,
  showLogout: ep = !1,
  cancelCompletesFlow: em = !0,
  isTrustedName: eI = !1,
  isEmbeddedFlow: eT = !1,
  inApp: eg = !1,
  callback: eS,
  callbackWithoutPost: eA,
  onClose: eN,
  disclosures: ev
} = e,
eO = null != eE ? null == el ? void 0 : el.get(eE) : void 0,
eR = (0, u.TH)(),
eC = (0, f.e7)([C.Z], () => C.Z.hasLoadedExperiments);
  s.useEffect(() => {
M.default.isAuthenticated() && !eC && g.Z.getExperiments();
  }, [eC]);
  let [ey, eD] = s.useState(null), [eL, eb] = s.useState(null), [eM, eP] = s.useState(null), [eU, ew] = s.useState(!1), [ex, eG] = s.useState(!eh), ek = null == ey ? void 0 : ey.guilds, [eB, eF] = s.useState(null != ed ? ed : null), [eV, eH] = s.useState(null != e_ ? e_ : null), [eZ, eY] = s.useState(P.Hn), ej = s.useMemo(() => (null == ey ? void 0 : ey.user) != null ? new b.Z(ey.user) : null, [null == ey ? void 0 : ey.user]), eW = s.useMemo(() => null == ek ? void 0 : ek.find(e => e.id === eB), [
ek,
eB
  ]), [eK, ez] = s.useState(null), eq = s.useMemo(() => {
var e;
return null == eO && null == eE && (null !== (e = null == eu ? void 0 : eu.length) && void 0 !== e ? e : 0) === 0 && null == en;
  }, [
eO,
null == eu ? void 0 : eu.length,
en,
eE
  ]), [eQ, eX] = s.useState(null);
  s.useEffect(() => {
eq && v.Z.fetchApplication(ee).then(e => eX(L.Z.createFromServer(e)));
  }, [
ee,
eq
  ]);
  let e$ = s.useMemo(() => {
  var e, t;
  return null == eK ? null : null == eQ ? void 0 : null === (t = eQ.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eK]) || void 0 === e ? void 0 : e.oauth2InstallParams;
}, [
  null == eQ ? void 0 : eQ.integrationTypesConfig,
  eK
]),
{
  requestedScopes: eJ,
  accountScopes: e0
} = s.useMemo(() => {
  let e = eq ? null == e$ ? void 0 : e$.scopes : eu,
    t = (0, w.K)(null != e ? e : []),
    n = B.Qe.filter(e => t.includes(e));
  return {
    requestedScopes: t,
    accountScopes: n
  };
}, [
  null == e$ ? void 0 : e$.scopes,
  eu,
  eq
]),
e1 = s.useMemo(() => {
  var e;
  let t = eq ? E.vB(null !== (e = null == e$ ? void 0 : e$.permissions) && void 0 !== e ? e : 0) : ec;
  return null != t ? t : P.Hn;
}, [
  null == e$ ? void 0 : e$.permissions,
  ec,
  eq
]),
e2 = s.useRef(!1),
[e3, e4] = s.useState(null != ev ? ev : []),
[e5, e6] = s.useState(null != ev && ev.length > 0);
  s.useEffect(() => {
if (e2.current)
  return;
let e = async () => {
  e2.current = !0;
  try {
    let {
      disclosures: e,
      allAcked: t
    } = await (0, O.de)(ee);
    e6(!t), e4(e);
  } catch (n) {
    let {
      status: e,
      body: t
    } = n;
    if (401 === e) {
      (0, x.c$)(eR);
      return;
    }
    eP(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
  } finally {
    e2.current = !1;
  }
};
if (null == ev) {
  if (!M.default.isAuthenticated()) {
    (0, x.c$)(eR);
    return;
  }
  e();
}
  }, [
ee,
eR,
ev,
e4,
eP,
e6,
eb
  ]);
  let e7 = s.useCallback(async e => {
  if (null != eA) {
    eA(e);
    return;
  }
  if (!e && !em) {
    null != eS && (eS({
      application: null == ey ? void 0 : ey.application,
      guild: eW
    }), null == eN || eN());
    return;
  }
  if (null == eK) {
    eP(Error('No integration type was selected.'));
    return;
  }
  try {
    ew(!0);
    let t = await (0, x.Iq)({
      authorize: e,
      clientId: ee,
      scopes: eJ,
      responseType: et,
      redirectUri: en,
      codeChallenge: er,
      codeChallengeMethod: ei,
      state: ea,
      nonce: es,
      integrationType: eK,
      permissions: E.Od(e1, eZ),
      guildId: eK === d.Y.GUILD_INSTALL && null != eB ? eB : void 0,
      channelId: eK === d.Y.GUILD_INSTALL && null != eV ? eV : void 0
    });
    if (e && await (0, O.x9)(ee, e3), null != eS)
      eS({
        application: null == ey ? void 0 : ey.application,
        location: t.location,
        guild: eW
      }), null == eN || eN();
    else if (null != t.location) {
      let {
        host: e,
        path: n
      } = c.parse(t.location);
      U.Z.isDiscordHostname(e) && n === Q.Z5c.OAUTH2_AUTHORIZED ? (0, D.uL)(Q.Z5c.OAUTH2_AUTHORIZED, {
        state: {
          application: null == ey ? void 0 : ey.application,
          guild: eW
        }
      }) : window.location = t.location;
    } else
      ew(!1);
  } catch (t) {
    let e = t.body;
    (null == e ? void 0 : e.message) != null && '' !== e.message ? eP(Error(e.message)) : eP(e), eb(1), ew(!1);
  }
}, [
  eA,
  em,
  eS,
  null == ey ? void 0 : ey.application,
  eW,
  eN,
  ee,
  eJ,
  et,
  en,
  er,
  ei,
  ea,
  es,
  e1,
  eZ,
  eB,
  eK,
  eV,
  e3
]),
e8 = s.useRef(!1),
e9 = s.useCallback(async () => {
  if (!M.default.isAuthenticated()) {
    (0, x.c$)(eR);
    return;
  }
  if (!e2.current) {
    if (!e8.current) {
      e8.current = !0;
      try {
        let e = null != eO ? eO : await (0, x.Ww)({
          clientId: ee,
          scopes: eJ,
          responseType: et,
          redirectUri: en,
          codeChallenge: er,
          codeChallengeMethod: ei,
          state: ea,
          nonce: es,
          integrationType: null != eK ? eK : void 0
        });
        eD((0, G.d)(e)), eo === F.s.NONE && e.authorized && !e5 && e7(!0), (0, A.yw)(Q.rMx.OAUTH2_AUTHORIZE_VIEWED, {
          application_id: e.application.id
        });
      } catch (n) {
        let {
          status: e,
          body: t
        } = n;
        if (401 === e) {
          (0, x.c$)(eR);
          return;
        }
        eP(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
      } finally {
        e8.current = !1;
      }
    }
  }
}, [
  eR,
  eO,
  ee,
  eJ,
  et,
  en,
  er,
  ei,
  ea,
  es,
  eK,
  eo,
  e7,
  e5
]),
te = s.useMemo(() => {
  var e;
  return null != eQ && eq ? Object.entries(null !== (e = eQ.integrationTypesConfig) && void 0 !== e ? e : {}).filter(e => {
    let [t, n] = e;
    return null != n.oauth2InstallParams;
  }).map(e => {
    let [t, n] = e;
    return Number(t);
  }) : [];
}, [
  eQ,
  eq
]);
  s.useEffect(() => {
if (null == eL && (!eq || null != eQ) && !!eC)
  if (null != eO) {
    var e;
    ez(null !== (e = eO.integration_type) && void 0 !== e ? e : d.Y.GUILD_INSTALL), eb(1);
  } else
    te.length > 1 ? eb(0) : (1 === te.length ? ez(te[0]) : null != eE ? ez(eE) : ez(d.Y.GUILD_INSTALL), eb(1));
  }, [
eO,
te,
eQ,
eq,
eE,
eL,
eC
  ]), s.useEffect(() => {
if (null == eK || null != ey || null != eM)
  return;
eK === d.Y.USER_INSTALL && (eF(null), eH(null));
let e = eJ.filter(e => !B.ak.includes(e));
0 === eJ.length ? eP(Error('No scopes were provided.')) : e.length > 0 ? eP(Error('Invalid scope: '.concat(e[0]))) : (0, k._$)(e1) ? eP(Error('Invalid permission(s) provided.')) : e9();
  }, [
e5,
e9,
eJ,
e1,
eK,
ey,
eM
  ]);
  let tt = s.useCallback(e => {
  e && eG(!0);
}, []),
tn = (0, S.O)(tt);
  if (eM instanceof Error)
return {
  body: (0, a.jsx)(z.Lk, {
    message: eM.message
  })
};
  let tr = !1,
ti = !0,
ta = !0,
ts = !0;
  switch (eL) {
case null:
  return {
    body: (0, a.jsx)(I.$, {})
  };
case 0:
  if (null == eQ)
    return {
      body: (0, a.jsx)(I.$, {})
    };
  p = (0, a.jsx)(W.Z, {
    inApp: eg,
    application: eQ,
    onSelect: e => {
      ez(e), eD(null), eb(1);
    }
  }), ti = !1, ta = !1, ts = !1;
  break;
case 1:
  if (null == ey || null == ej || null == eK)
    return {
      body: (0, a.jsx)(I.$, {})
    };
  let to = null == eM || eM instanceof Error ? {} : eM,
    tl = null == ek ? void 0 : ek.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
    tu = eK === d.Y.GUILD_INSTALL && eJ.includes(_.x.WEBHOOK_INCOMING),
    tc = tu || eK === d.Y.GUILD_INSTALL && (eJ.includes(_.x.BOT) || eJ.includes(_.x.APPLICATIONS_COMMANDS));
  p = (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsx)(H.Z, {
        application: ey.application,
        accountScopes: e0,
        requestedScopes: eJ,
        integrationType: eK,
        errors: to,
        isTrustedName: eI
      }),
      tc ? (0, a.jsx)(Y.Z, {
        error: (null !== (n = null !== (t = to[_.x.BOT]) && void 0 !== t ? t : to[_.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
        selectedGuildId: eB,
        onGuildChange: eF,
        guilds: null != tl ? tl : [],
        disabled: '' !== eB && null != eB && !0 === ef
      }) : null,
      tu ? (0, a.jsx)(q.Z, {
        error: (null !== (r = to[_.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
        selectedChannelId: eV,
        selectedGuildId: eB,
        onChannelChange: eH
      }) : null
    ]
  }), eJ.includes(_.x.BOT) && !E.fS(e1, P.Hn) && (N = 2), te.length > 1 && (m = 0), tr = tc && null == eW || tu && null == eV;
  break;
case 2:
  if (null == ey)
    return {
      body: (0, a.jsx)(I.$, {})
    };
  p = (0, a.jsx)(Z.Z, {
    application: ey.application,
    permissions: e1,
    deniedPermissions: eZ,
    onPermissionsChange: (e, t) => {
      eY(n => e ? E.Od(n, t) : E.IH(n, t));
    },
    guild: eW
  }), m = 1;
  }
  if (ti && null != ey) {
let e = null === (i = ey.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
R = (0, a.jsxs)(a.Fragment, {
  children: [
    (0, a.jsx)(V.Z, {
      application: ey.application,
      scopes: eJ,
      disclosures: e3,
      redirectUri: null !== (o = ey.redirect_uri) && void 0 !== o ? o : null,
      approximateGuildCount: void 0 !== e ? e : null,
      isEmbeddedFlow: eT
    }),
    (0, a.jsx)('div', {
      className: $.intObserver,
      ref: tn
    })
  ]
});
  }
  ta && null != ey && null != ej && (y = (0, a.jsx)(j.Z, {
id: J,
user: ej,
application: ey.application,
bot: ey.bot,
accountScopes: e0,
showLogout: ep || !1,
location: eR,
isTrustedName: eI
  }));
  let td = null == N && null != R && !ex;
  return ts && (K = (0, a.jsxs)('div', {
className: l()($.footer, {
  [$.inApp]: eg
}),
children: [
  null != m ? (0, a.jsx)(h.zx, {
    look: h.zx.Looks.LINK,
    color: h.zx.Colors.PRIMARY,
    onClick: () => eb(m),
    children: X.Z.Messages.BACK
  }) : (0, a.jsx)(h.zx, {
    look: h.zx.Looks.LINK,
    color: h.zx.Colors.PRIMARY,
    onClick: () => e7(!1),
    children: X.Z.Messages.CANCEL
  }),
  0 !== eL ? null != N ? (0, a.jsx)(h.zx, {
    onClick: () => eb(N),
    disabled: tr,
    children: X.Z.Messages.CONTINUE
  }) : td ? (0, a.jsx)(T.Tooltip, {
    text: X.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
    children: e => (0, a.jsx)('div', {
      ...e,
      children: (0, a.jsx)(h.zx, {
        onClick: () => e7(!0),
        disabled: !0,
        submitting: eU,
        children: X.Z.Messages.AUTHORIZE
      })
    })
  }) : (0, a.jsx)(h.zx, {
    onClick: () => e7(!0),
    submitting: eU,
    children: X.Z.Messages.AUTHORIZE
  }) : null
]
  })), {
header: y,
body: p,
footer: K,
nextStep: N,
appDetails: R,
sendAuthorize: e7
  };
}

function ei(e, t) {
  if (null == t.location || null != e && e(t))
return;
  let {
host: n,
path: r,
query: i
  } = c.parse(t.location, !0), s = U.Z.isDiscordHostname(n) || window.location.host === n;
  if (s && r === Q.Z5c.OAUTH2_AUTHORIZED)
(0, p.h7)(e => (0, a.jsx)(K.j, {
  ...e,
  'aria-labelledby': J,
  children: (0, a.jsx)(z.Jh, {
    guild: t.guild,
    application: t.application,
    onClose: e.onClose
  })
}));
  else if (s && (null == r ? void 0 : r.startsWith(Q.Z5c.OAUTH2_ERROR)))
(0, p.h7)(e => {
  let t = i.error_description || i.error || X.Z.Messages.OAUTH2_UNKNOWN_ERROR;
  return Array.isArray(t) && (t = t[0]), (0, a.jsx)(K.j, {
    ...e,
    'aria-labelledby': J,
    children: (0, a.jsx)(z.Lk, {
      message: t,
      onClose: e.onClose
    })
  });
});
  else {
var o;
null === (o = window.open(t.location, '_blank')) || void 0 === o || o.focus();
  }
}

function ea(e, t) {
  if ((0, y.g)('create-guild-and-oauth2-modal')) {
R.Z.openCreateGuildModal({
  onSuccess: n => es({
    ...e,
    guildId: n
  }, t)
});
return;
  }
  es(e, t);
}

function es(e, t) {
  (0, p.h7)(t => (0, a.jsx)(et, {
...t,
...e,
cancelCompletesFlow: !1,
callback: ei.bind(null, e.callback)
  }), {
onCloseCallback: t
  });
}

function eo(e) {
  let {
hostname: t = '',
host: n,
path: r,
query: i
  } = c.parse(e);
  return null != r && null != i && (U.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(Q.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(Q.Z5c.OAUTH2_AUTHORIZE)) ? (0, w.y)(i) : null;
}
(i = r || (r = {}))[i.SELECT_INSTALL_TYPE = 0] = 'SELECT_INSTALL_TYPE', i[i.AUTHORIZE_SCOPES = 1] = 'AUTHORIZE_SCOPES', i[i.AUTHORIZE_BOT_PERMISSIONS = 2] = 'AUTHORIZE_BOT_PERMISSIONS';