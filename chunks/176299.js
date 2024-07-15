n.d(t, {
  Z: function() {
return eF;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(266067),
  o = n(990547),
  c = n(608787),
  d = n(873546),
  u = n(442837),
  _ = n(481060),
  E = n(711237),
  h = n(532835),
  I = n(290297),
  m = n(918854),
  g = n(279240),
  p = n(765717),
  T = n(358221),
  f = n(823748),
  S = n(626421),
  C = n(118379),
  N = n(652515),
  A = n(544978),
  v = n(194729),
  Z = n(668940),
  L = n(831565),
  O = n(724383),
  R = n(705334),
  x = n(372900),
  b = n(6039),
  P = n(637853),
  M = n(326145),
  D = n(269675),
  y = n(242601),
  j = n(416568),
  U = n(613609),
  G = n(160404),
  k = n(225675),
  w = n(745052),
  B = n(285865),
  H = n(659971),
  V = n(720734),
  F = n(840780),
  Y = n(235555),
  W = n(746508),
  z = n(179742),
  K = n(270759),
  q = n(918701),
  Q = n(210724),
  X = n(905423),
  J = n(304445),
  $ = n(210887),
  ee = n(592125),
  et = n(271383),
  en = n(430824),
  ei = n(944486),
  ea = n(933429),
  es = n(823379),
  er = n(709054),
  el = n(792125),
  eo = n(409292),
  ec = n(316173),
  ed = n(256638),
  eu = n(663701),
  e_ = n(410575),
  eE = n(425369),
  eh = n(715702),
  eI = n(981631),
  em = n(176505),
  eg = n(290511),
  ep = n(689938),
  eT = n(171200);
let ef = () => (0, i.jsx)('div', {
className: eT.loader,
children: (0, i.jsx)(_.Spinner, {})
  }),
  eS = (0, c.Un)({
createPromise: () => n.e('68614').then(n.bind(n, 650788)),
webpackId: 650788,
name: 'GuildShopPage',
renderLoader: ef
  }),
  eC = (0, c.Un)({
createPromise: () => n.e('44798').then(n.bind(n, 998420)),
webpackId: 998420,
name: 'GuildMemberApplicationReview',
renderLoader: ef
  }),
  eN = (0, c.Un)({
createPromise: () => n.e('60493').then(n.bind(n, 231588)),
webpackId: 231588,
name: 'GuildHomePage',
renderLoader: ef
  }),
  eA = (0, c.Un)({
createPromise: () => Promise.all([
  n.e('85552'),
  n.e('44400')
]).then(n.bind(n, 545918)),
webpackId: 545918,
name: 'MemberSafetyPage',
renderLoader: ef
  }),
  ev = (0, c.Un)({
createPromise: () => Promise.all([
  n.e('96427'),
  n.e('44156'),
  n.e('58227'),
  n.e('38359'),
  n.e('21013')
]).then(n.bind(n, 603072)),
webpackId: 603072,
name: 'ChannelsAndRolesPage',
renderLoader: ef
  }),
  eZ = (0, c.Un)({
createPromise: () => Promise.all([
  n.e('96427'),
  n.e('44156'),
  n.e('19878'),
  n.e('38359'),
  n.e('91553')
]).then(n.bind(n, 599263)),
webpackId: 599263,
name: 'GuildOnboardingPage',
renderLoader: ef
  }),
  eL = e => {
let {
  match: t
} = e, n = (0, u.e7)([
  ee.Z,
  ei.Z
], () => {
  let e = ei.Z.getChannelId();
  return ee.Z.getChannel(e);
}), {
  guildId: a,
  channelId: s,
  messageId: r
} = t.params, l = (0, u.e7)([en.Z], () => en.Z.getGuild(a)), o = (0, u.e7)([et.ZP], () => null == a ? null : et.ZP.getSelfMember(a)), c = (0, u.e7)([G.Z], () => {
  if (null == a)
    return;
  let e = G.Z.getData(a);
  if ((null == e ? void 0 : e.type) === k.z.SERVER_SHOP)
    switch (e.initialTab) {
      case 'role_subscriptions':
        return A.y.GUILD_ROLE_SUBSCRIPTIONS;
      case 'guild_products':
        return A.y.GUILD_PRODUCTS;
      default:
        return;
    }
}), d = (0, N.C4)(a, 'channel_renderer');
if (null != a && null != s && (0, em.AB)(s))
  switch (s) {
    case em.oC.ROLE_SUBSCRIPTIONS:
      return d ? (0, i.jsx)(eS, {
        guildId: a,
        initialTab: A.y.GUILD_ROLE_SUBSCRIPTIONS
      }) : (0, i.jsx)(D.Z, {
        guildId: a
      });
    case em.oC.GUILD_SHOP:
      return (0, i.jsx)(eS, {
        guildId: a,
        productId: r,
        initialTab: c
      });
    case em.oC.MEMBER_APPLICATIONS:
      return (0, i.jsx)(eC, {
        guildId: a
      });
    case em.oC.GUILD_HOME:
      return (0, i.jsx)(eN, {
        guildId: a
      });
    case em.oC.CHANNEL_BROWSER:
      return (0, i.jsx)(ev, {
        guildId: a,
        selectedSection: eg.l7.BROWSE
      });
    case em.oC.GUILD_ONBOARDING:
      return (0, i.jsx)(eZ, {
        guildId: a
      });
    case em.oC.CUSTOMIZE_COMMUNITY:
      return (0, i.jsx)(ev, {
        guildId: a,
        selectedSection: eg.l7.CUSTOMIZE
      });
    case em.oC.MEMBER_SAFETY:
      return (0, i.jsx)(eA, {
        guildId: a
      });
    default:
      (0, es.vE)(s);
  }
if ((0, P.p3)(l, o))
  return (0, i.jsx)(M.Z, {
    guildId: a,
    channelId: s
  });
if ((null == n ? void 0 : n.type) === eI.d4z.GUILD_STORE) {
  let e = er.default.cast(t.params.messageId);
  return (0, i.jsx)(eo.Z, {
    channel: n,
    inputSkuId: e
  }, n.id);
}
return (0, i.jsx)(f.Z, {});
  },
  eO = a.memo(function() {
let {
  guildId: e,
  channelId: t
} = (0, X.Z)(), n = (0, u.e7)([ei.Z], () => null != t ? t : ei.Z.getChannelId(e)), a = (0, L.Y$)('sidebar');
if (function() {
    return window.location.pathname.startsWith(eI.Z5c.GLOBAL_DISCOVERY);
  }() || function() {
    return window.location.pathname.startsWith(eI.Z5c.GUILD_DISCOVERY) || (0, q.OG)();
  }())
  return a ? (0, i.jsx)(R._, {}) : (0, i.jsx)(Z.Z, {});
return null != e ? (0, i.jsx)(y.Z, {
  selectedChannelId: n,
  guildId: e
}, e) : (0, i.jsx)(eu.Z, {});
  });

function eR(e) {
  let t = (0, X.Z)(e => {
let {
  guildId: t
} = e;
return t;
  });
  return (0, i.jsx)(F.Z, {
...e,
guildId: t
  });
}
let ex = e => (0, i.jsx)(eL, {
...e
  }),
  eb = e => {
let t = null != e && e.length > 0 && e.startsWith('?') ? e.split('?')[1] : null;
return (0, L.Sv)('sidebar') ? (0, i.jsx)(O.A, {}) : (0, i.jsx)(v.Z, {
  searchRoute: t
});
  },
  eP = e => {
let {
  match: t
} = e;
return null != t.params.guildId ? (0, i.jsx)(b.Z, {
  guildId: t.params.guildId,
  inviteCode: t.params.inviteCode
}) : null;
  },
  eM = e => {
let {
  match: t
} = e;
return null != t.params.guildId ? (0, i.jsx)(U.Z, {
  guildId: t.params.guildId,
  inviteCode: t.params.inviteCode
}) : null;
  },
  eD = () => (0, i.jsx)(eE.Z, {}),
  ey = () => (0, i.jsx)(eh.Z, {}),
  ej = function() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
return function(t) {
  return (0, i.jsx)(C.Z, {
    isFullScreen: e,
    ...t
  });
};
  },
  eU = e => (0, i.jsx)(g.Z, {
...e
  }),
  eG = () => (0, i.jsx)(m.Z, {}),
  ek = () => (0, i.jsx)(K.Z, {}),
  ew = () => (0, i.jsx)(w.Z, {}),
  eB = () => (0, i.jsx)(z.Z, {}),
  eH = e => {
let {
  match: t
} = e;
switch (t.params.feature) {
  case 'addFriends':
    return (0, i.jsx)(K.Z, {
      initialSection: eI.pJs.ADD_FRIEND
    });
  case 'pendingFriends':
    return (0, i.jsx)(K.Z, {
      initialSection: eI.pJs.PENDING
    });
  case 'sessionManagement':
    return (0, i.jsx)(l.l_, {
      to: eI.Z5c.SETTINGS('sessions')
    });
  case 'connections':
    return (0, i.jsx)(l.l_, {
      to: {
        pathname: eI.Z5c.SETTINGS('connections'),
        search: e.location.search
      }
    });
  case 'family-center':
    return (0, i.jsx)(l.l_, {
      to: eI.Z5c.FAMILY_CENTER
    });
  case 'account-standing':
    return (0, i.jsx)(l.l_, {
      to: eI.Z5c.SETTINGS('privacy-and-safety', 'account-standing')
    });
  case 'authorized-apps':
    return (0, i.jsx)(l.l_, {
      to: eI.Z5c.SETTINGS('authorized-apps')
    });
  case 'open-shop':
    return (0, i.jsx)(l.l_, {
      to: eI.Z5c.COLLECTIBLES_SHOP_FULLSCREEN
    });
  default:
    return (0, i.jsx)(l.l_, {
      to: eI.Z5c.ME
    });
}
  };

function eV(e) {
  let {
hasNotice: t,
sidebarTheme: n,
hideSidebar: a
  } = e;
  (0, h.t)(!0);
  let s = 'app view user trigger debugging';
  E.R6.useExperiment({
location: s
  }, {
autoTrackExposure: !1
  }), E.R6.trackExposure({
location: s
  });
  let l = (0, u.e7)([T.Z], () => T.Z.isFullscreenInContext());
  return a ? null : (0, i.jsxs)('div', {
className: r()(eT.sidebar, (0, el.Q)(n), {
  [eT.hasNotice]: t,
  [eT.fullWidth]: d.tq,
  [eT.hidden]: l
}),
children: [
  (0, i.jsx)(eO, {}),
  (0, i.jsxs)('section', {
    className: eT.panels,
    'aria-label': ep.Z.Messages.ACCOUNT_A11Y_LABEL,
    children: [
      (0, i.jsx)(Q.Z, {}),
      (0, i.jsx)(Y.Z, {}),
      (0, i.jsx)(e_.Z, {
        section: eI.jXE.ACTIVITY_PANEL,
        children: (0, i.jsx)(eR, {
          className: eT.activityPanel
        })
      }),
      (0, i.jsx)(e_.Z, {
        section: eI.jXE.RTC_CONNECTION_PANEL,
        children: (0, i.jsx)(W.Z, {})
      }),
      (0, i.jsx)(e_.Z, {
        section: eI.jXE.ACCOUNT_PANEL,
        children: (0, i.jsx)(V.Z, {})
      })
    ]
  }),
  (0, i.jsx)(ec.Z, {})
]
  });
}

function eF() {
  var e;
  let t = (0, u.e7)([ea.Z], () => ea.Z.hasNotice()),
n = (0, u.e7)([$.Z], () => $.Z.darkSidebar ? eI.BRd.DARK : void 0),
s = function() {
  let [e, t] = a.useState(() => window.location.pathname.startsWith(eI.Z5c.GUILD_MEMBER_VERIFICATION('')));
  return a.useEffect(() => J.Z.addRouteChangeListener(e => {
    t(e.pathname.startsWith(eI.Z5c.GUILD_MEMBER_VERIFICATION('')));
  }), []), e;
}(),
r = function() {
  let [e, t] = a.useState(() => window.location.pathname.startsWith(eI.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
  return a.useEffect(() => J.Z.addRouteChangeListener(e => {
    t(e.pathname.startsWith(eI.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
  }), []), e;
}(),
c = function() {
  var e;
  let t = (0, l.TH)();
  return (null === (e = (0, l.LX)(t.pathname, eI.Z5c.GUILD_BOOSTING_MARKETING(':guildId'))) || void 0 === e ? void 0 : e.isExact) === !0;
}(),
_ = function() {
  var e;
  let t = (0, l.TH)();
  return (null === (e = (0, l.LX)(t.pathname, eI.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0;
}(),
E = (0, u.e7)([H.Z], () => H.Z.getIsOpen()),
h = (0, l.$B)([
  eI.Z5c.CHANNEL(eI.ME, ':channelId'),
  eI.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
]),
m = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === em.oC.GUILD_ONBOARDING,
g = a.useCallback(() => B.Z.openSidebar(), []);
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: eT.container,
  children: [
    E && !_ && (0, i.jsx)(j.Z, {
      className: eT.guilds,
      themeOverride: n
    }),
    (0, i.jsx)(x.Z.Provider, {
      value: (null == h ? void 0 : h.params.guildId) === eI.ME ? void 0 : null == h ? void 0 : h.params.guildId,
      children: (0, i.jsxs)('div', {
        className: eT.base,
        children: [
          d.tq ? null : (0, i.jsx)(ed.Z, {}),
          (0, i.jsxs)('div', {
            className: eT.content,
            children: [
              (0, i.jsx)(S.Z, {}),
              (0, i.jsx)(eV, {
                hasNotice: t,
                sidebarTheme: n,
                hideSidebar: s || r || c || _ || m || !E
              }),
              (0, i.jsx)(I.Z.Provider, {
                value: g,
                children: (0, i.jsxs)(l.rs, {
                  children: [
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.ACTIVITY,
                      disableTrack: !0,
                      children: (0, i.jsx)(l.l_, {
                        to: eI.Z5c.ME
                      })
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.ACTIVITIES_HAPPENING_NOW,
                      render: eG,
                      impressionName: o.ImpressionNames.ACTIVITIES
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.ACTIVITY_DETAILS(':applicationId'),
                      render: eU,
                      impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                      impressionProperties: e => {
                        let {
                          computedMatch: t
                        } = e;
                        return {
                          application_id: t.params.applicationId
                        };
                      }
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.ACTIVITIES,
                      render: eG,
                      impressionName: o.ImpressionNames.ACTIVITIES
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.APPLICATION_LIBRARY,
                      render: eD,
                      impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.APPLICATION_STORE,
                      render: ey,
                      impressionName: o.ImpressionNames.APPLICATION_STORE,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                      render: ej(!0),
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.COLLECTIBLES_SHOP,
                      render: ej(!1),
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
                      render: ej(!1),
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.MESSAGE_REQUESTS,
                      render: ew,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.FAMILY_CENTER,
                      render: eB,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.ME,
                      exact: !0,
                      render: ek,
                      impressionName: o.ImpressionNames.FRIENDS,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: [
                        eI.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'),
                        eI.Z5c.CHANNEL(eI.ME, ':channelId'),
                        eI.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
                      ],
                      render: ex,
                      impressionName: o.ImpressionNames.GUILD_CHANNEL,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.GLOBAL_DISCOVERY,
                      render: e => {
                        let {
                          location: t
                        } = e;
                        return eb(t.search);
                      },
                      impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.QUEST_HOME,
                      render: e => {
                        let {
                          location: t
                        } = e;
                        return eb(t.search);
                      },
                      impressionName: o.ImpressionNames.QUEST_HOME,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.GUILD_DISCOVERY,
                      render: e => {
                        let {
                          location: t
                        } = e;
                        return eb(t.search);
                      },
                      impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'),
                      render: eP,
                      impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                      disableTrack: !0
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'),
                      render: eM,
                      impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                      impressionProperties: e => {
                        let {
                          computedMatch: t
                        } = e;
                        return {
                          has_invite: void 0 !== t.params.inviteCode
                        };
                      }
                    }),
                    (0, i.jsx)(p.Z, {
                      path: eI.Z5c.FEATURE(':feature'),
                      exact: !0,
                      render: eH,
                      disableTrack: !0
                    })
                  ]
                })
              })
            ]
          })
        ]
      })
    })
  ]
})
  });
}