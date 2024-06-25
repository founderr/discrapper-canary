n.d(t, {
  Z: function() {
    return eV
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(266067),
  o = n(990547),
  c = n(608787),
  u = n(873546),
  d = n(442837),
  E = n(481060),
  h = n(711237),
  _ = n(532835),
  I = n(290297),
  m = n(918854),
  T = n(279240),
  g = n(765717),
  p = n(358221),
  N = n(823748),
  S = n(626421),
  C = n(118379),
  A = n(652515),
  f = n(544978),
  Z = n(194729),
  L = n(668940),
  O = n(724383),
  v = n(705334),
  R = n(372900),
  P = n(6039),
  x = n(637853),
  M = n(326145),
  D = n(269675),
  b = n(242601),
  y = n(416568),
  j = n(613609),
  U = n(160404),
  G = n(225675),
  w = n(745052),
  k = n(285865),
  B = n(659971),
  H = n(720734),
  V = n(840780),
  F = n(235555),
  Y = n(746508),
  z = n(179742),
  W = n(270759),
  K = n(210724),
  q = n(905423),
  Q = n(304445),
  X = n(210887),
  J = n(592125),
  $ = n(271383),
  ee = n(430824),
  et = n(944486),
  en = n(933429),
  es = n(823379),
  ei = n(709054),
  el = n(792125),
  ea = n(409292),
  er = n(316173),
  eo = n(256638),
  ec = n(663701),
  eu = n(410575),
  ed = n(425369),
  eE = n(715702),
  eh = n(981631),
  e_ = n(176505),
  eI = n(290511),
  em = n(689938),
  eT = n(684774);
let eg = () => (0, s.jsx)("div", {
    className: eT.loader,
    children: (0, s.jsx)(E.Spinner, {})
  }),
  ep = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("68614")]).then(n.bind(n, 650788)),
    webpackId: 650788,
    name: "GuildShopPage",
    renderLoader: eg
  }),
  eN = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("44798")]).then(n.bind(n, 998420)),
    webpackId: 998420,
    name: "GuildMemberApplicationReview",
    renderLoader: eg
  }),
  eS = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("60493")]).then(n.bind(n, 231588)),
    webpackId: 231588,
    name: "GuildHomePage",
    renderLoader: eg
  }),
  eC = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("85552"), n.e("44400")]).then(n.bind(n, 545918)),
    webpackId: 545918,
    name: "MemberSafetyPage",
    renderLoader: eg
  }),
  eA = (0, c.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("44156"), n.e("58227"), n.e("38359"), n.e("51199")]).then(n.bind(n, 603072)),
    webpackId: 603072,
    name: "ChannelsAndRolesPage",
    renderLoader: eg
  }),
  ef = (0, c.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("44156"), n.e("19878"), n.e("38359"), n.e("50498")]).then(n.bind(n, 599263)),
    webpackId: 599263,
    name: "GuildOnboardingPage",
    renderLoader: eg
  }),
  eZ = e => {
    let {
      match: t
    } = e, n = (0, d.e7)([J.Z, et.Z], () => {
      let e = et.Z.getChannelId();
      return J.Z.getChannel(e)
    }), {
      guildId: i,
      channelId: l,
      messageId: a
    } = t.params, r = (0, d.e7)([ee.Z], () => ee.Z.getGuild(i)), o = (0, d.e7)([$.ZP], () => null == i ? null : $.ZP.getSelfMember(i)), c = (0, d.e7)([U.Z], () => {
      if (null == i) return;
      let e = U.Z.getData(i);
      if ((null == e ? void 0 : e.type) === G.z.SERVER_SHOP) switch (e.initialTab) {
        case "role_subscriptions":
          return f.y.GUILD_ROLE_SUBSCRIPTIONS;
        case "guild_products":
          return f.y.GUILD_PRODUCTS;
        default:
          return
      }
    }), u = (0, A.C4)(i, "channel_renderer");
    if (null != i && null != l && (0, e_.AB)(l)) switch (l) {
      case e_.oC.ROLE_SUBSCRIPTIONS:
        return u ? (0, s.jsx)(ep, {
          guildId: i,
          initialTab: f.y.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, s.jsx)(D.Z, {
          guildId: i
        });
      case e_.oC.GUILD_SHOP:
        return (0, s.jsx)(ep, {
          guildId: i,
          productId: a,
          initialTab: c
        });
      case e_.oC.MEMBER_APPLICATIONS:
        return (0, s.jsx)(eN, {
          guildId: i
        });
      case e_.oC.GUILD_HOME:
        return (0, s.jsx)(eS, {
          guildId: i
        });
      case e_.oC.CHANNEL_BROWSER:
        return (0, s.jsx)(eA, {
          guildId: i,
          selectedSection: eI.l7.BROWSE
        });
      case e_.oC.GUILD_ONBOARDING:
        return (0, s.jsx)(ef, {
          guildId: i
        });
      case e_.oC.CUSTOMIZE_COMMUNITY:
        return (0, s.jsx)(eA, {
          guildId: i,
          selectedSection: eI.l7.CUSTOMIZE
        });
      case e_.oC.MEMBER_SAFETY:
        return (0, s.jsx)(eC, {
          guildId: i
        });
      default:
        (0, es.vE)(l)
    }
    if ((0, x.p3)(r, o)) return (0, s.jsx)(M.Z, {
      guildId: i,
      channelId: l
    });
    if ((null == n ? void 0 : n.type) === eh.d4z.GUILD_STORE) {
      let e = ei.default.cast(t.params.messageId);
      return (0, s.jsx)(ea.Z, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, s.jsx)(N.Z, {})
  },
  eL = i.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, q.Z)(), n = (0, d.e7)([et.Z], () => null != t ? t : et.Z.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(eh.Z5c.GLOBAL_DISCOVERY)
    }() ? (0, s.jsx)(v._, {}) : function() {
      return window.location.pathname.startsWith(eh.Z5c.GUILD_DISCOVERY)
    }() ? (0, s.jsx)(L.Z, {}) : null != e ? (0, s.jsx)(b.Z, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, s.jsx)(ec.Z, {})
  });

function eO(e) {
  let t = (0, q.Z)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, s.jsx)(V.Z, {
    ...e,
    guildId: t
  })
}
let ev = e => (0, s.jsx)(eZ, {
    ...e
  }),
  eR = () => (0, s.jsx)(O.A, {}),
  eP = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, s.jsx)(Z.Z, {
      searchRoute: t
    })
  },
  ex = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, s.jsx)(P.Z, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eM = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, s.jsx)(j.Z, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eD = () => (0, s.jsx)(ed.Z, {}),
  eb = () => (0, s.jsx)(eE.Z, {}),
  ey = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, s.jsx)(C.Z, {
        isFullScreen: e,
        ...t
      })
    }
  },
  ej = e => (0, s.jsx)(T.Z, {
    ...e
  }),
  eU = () => (0, s.jsx)(m.Z, {}),
  eG = () => (0, s.jsx)(W.Z, {}),
  ew = () => (0, s.jsx)(w.Z, {}),
  ek = () => (0, s.jsx)(z.Z, {}),
  eB = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, s.jsx)(W.Z, {
          initialSection: eh.pJs.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, s.jsx)(W.Z, {
          initialSection: eh.pJs.PENDING
        });
      case "sessionManagement":
        return (0, s.jsx)(r.l_, {
          to: eh.Z5c.SETTINGS("sessions")
        });
      case "connections":
        return (0, s.jsx)(r.l_, {
          to: {
            pathname: eh.Z5c.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, s.jsx)(r.l_, {
          to: eh.Z5c.FAMILY_CENTER
        });
      case "account-standing":
        return (0, s.jsx)(r.l_, {
          to: eh.Z5c.SETTINGS("privacy-and-safety", "account-standing")
        });
      case "authorized-apps":
        return (0, s.jsx)(r.l_, {
          to: eh.Z5c.SETTINGS("authorized-apps")
        });
      default:
        return (0, s.jsx)(r.l_, {
          to: eh.Z5c.ME
        })
    }
  };

function eH(e) {
  let {
    hasNotice: t,
    sidebarTheme: n,
    hideSidebar: i
  } = e;
  (0, _.t)(!0);
  let l = "app view user trigger debugging";
  h.R6.useExperiment({
    location: l
  }, {
    autoTrackExposure: !1
  }), h.R6.trackExposure({
    location: l
  });
  let r = (0, d.e7)([p.Z], () => p.Z.isFullscreenInContext());
  return i ? null : (0, s.jsxs)("div", {
    className: a()(eT.sidebar, (0, el.Q)(n), {
      [eT.hasNotice]: t,
      [eT.fullWidth]: u.tq,
      [eT.hidden]: r
    }),
    children: [(0, s.jsx)(eL, {}), (0, s.jsxs)("section", {
      className: eT.panels,
      "aria-label": em.Z.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, s.jsx)(K.Z, {}), (0, s.jsx)(F.Z, {}), (0, s.jsx)(eu.Z, {
        section: eh.jXE.ACTIVITY_PANEL,
        children: (0, s.jsx)(eO, {
          className: eT.activityPanel
        })
      }), (0, s.jsx)(eu.Z, {
        section: eh.jXE.RTC_CONNECTION_PANEL,
        children: (0, s.jsx)(Y.Z, {})
      }), (0, s.jsx)(eu.Z, {
        section: eh.jXE.ACCOUNT_PANEL,
        children: (0, s.jsx)(H.Z, {})
      })]
    }), (0, s.jsx)(er.Z, {})]
  })
}

function eV() {
  var e;
  let t = (0, d.e7)([en.Z], () => en.Z.hasNotice()),
    n = (0, d.e7)([X.Z], () => X.Z.darkSidebar ? eh.BRd.DARK : void 0),
    l = function() {
      let [e, t] = i.useState(() => window.location.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION("")));
      return i.useEffect(() => Q.Z.addRouteChangeListener(e => {
        t(e.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    a = function() {
      let [e, t] = i.useState(() => window.location.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return i.useEffect(() => Q.Z.addRouteChangeListener(e => {
        t(e.pathname.startsWith(eh.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    c = function() {
      var e;
      let t = (0, r.TH)();
      return (null === (e = (0, r.LX)(t.pathname, eh.Z5c.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, r.TH)();
      return (null === (e = (0, r.LX)(t.pathname, eh.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    h = (0, d.e7)([B.Z], () => B.Z.getIsOpen()),
    _ = (0, r.$B)([eh.Z5c.CHANNEL(eh.ME, ":channelId"), eh.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    m = (null == _ ? void 0 : null === (e = _.params) || void 0 === e ? void 0 : e.channelId) === e_.oC.GUILD_ONBOARDING,
    T = i.useCallback(() => k.Z.openSidebar(), []);
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: eT.container,
      children: [h && !E && (0, s.jsx)(y.Z, {
        className: eT.guilds,
        themeOverride: n
      }), (0, s.jsx)(R.Z.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === eh.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, s.jsxs)("div", {
          className: eT.base,
          children: [u.tq ? null : (0, s.jsx)(eo.Z, {}), (0, s.jsxs)("div", {
            className: eT.content,
            children: [(0, s.jsx)(S.Z, {}), (0, s.jsx)(eH, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: l || a || c || E || m || !h
            }), (0, s.jsx)(I.Z.Provider, {
              value: T,
              children: (0, s.jsxs)(r.rs, {
                children: [(0, s.jsx)(g.Z, {
                  path: eh.Z5c.ACTIVITY,
                  disableTrack: !0,
                  children: (0, s.jsx)(r.l_, {
                    to: eh.Z5c.ME
                  })
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.ACTIVITIES_HAPPENING_NOW,
                  render: eU,
                  impressionName: o.ImpressionNames.ACTIVITIES
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.ACTIVITY_DETAILS(":applicationId"),
                  render: ej,
                  impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      application_id: t.params.applicationId
                    }
                  }
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.ACTIVITIES,
                  render: eU,
                  impressionName: o.ImpressionNames.ACTIVITIES
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.APPLICATION_LIBRARY,
                  render: eD,
                  impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.APPLICATION_STORE,
                  render: eb,
                  impressionName: o.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: ey(!0),
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.COLLECTIBLES_SHOP,
                  render: ey(!1),
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: ey(!1),
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.MESSAGE_REQUESTS,
                  render: ew,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.FAMILY_CENTER,
                  render: ek,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.ME,
                  exact: !0,
                  render: eG,
                  impressionName: o.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: [eh.Z5c.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eh.Z5c.CHANNEL(eh.ME, ":channelId"), eh.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: ev,
                  impressionName: o.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.GLOBAL_DISCOVERY,
                  render: eR,
                  impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eP(t.search)
                  },
                  impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: ex,
                  impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: eM,
                  impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, s.jsx)(g.Z, {
                  path: eh.Z5c.FEATURE(":feature"),
                  exact: !0,
                  render: eB,
                  disableTrack: !0
                })]
              })
            })]
          })]
        })
      })]
    })
  })
}