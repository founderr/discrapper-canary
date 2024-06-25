n.d(t, {
  Z: function() {
    return ek
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
  O = n(372900),
  v = n(6039),
  R = n(637853),
  P = n(326145),
  x = n(269675),
  M = n(242601),
  D = n(416568),
  b = n(613609),
  y = n(160404),
  j = n(225675),
  U = n(745052),
  G = n(285865),
  w = n(659971),
  k = n(720734),
  B = n(840780),
  H = n(235555),
  V = n(746508),
  F = n(179742),
  Y = n(270759),
  z = n(210724),
  W = n(905423),
  K = n(304445),
  q = n(210887),
  Q = n(592125),
  X = n(271383),
  J = n(430824),
  $ = n(944486),
  ee = n(933429),
  et = n(823379),
  en = n(709054),
  es = n(792125),
  ei = n(409292),
  el = n(316173),
  ea = n(256638),
  er = n(663701),
  eo = n(410575),
  ec = n(425369),
  eu = n(715702),
  ed = n(981631),
  eE = n(176505),
  eh = n(290511),
  e_ = n(689938),
  eI = n(684774);
let em = () => (0, s.jsx)("div", {
    className: eI.loader,
    children: (0, s.jsx)(E.Spinner, {})
  }),
  eT = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("68614")]).then(n.bind(n, 650788)),
    webpackId: 650788,
    name: "GuildShopPage",
    renderLoader: em
  }),
  eg = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("44798")]).then(n.bind(n, 998420)),
    webpackId: 998420,
    name: "GuildMemberApplicationReview",
    renderLoader: em
  }),
  ep = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("60493")]).then(n.bind(n, 231588)),
    webpackId: 231588,
    name: "GuildHomePage",
    renderLoader: em
  }),
  eN = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("85552"), n.e("44400")]).then(n.bind(n, 545918)),
    webpackId: 545918,
    name: "MemberSafetyPage",
    renderLoader: em
  }),
  eS = (0, c.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("44156"), n.e("58227"), n.e("38359"), n.e("51199")]).then(n.bind(n, 603072)),
    webpackId: 603072,
    name: "ChannelsAndRolesPage",
    renderLoader: em
  }),
  eC = (0, c.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("44156"), n.e("19878"), n.e("38359"), n.e("50498")]).then(n.bind(n, 599263)),
    webpackId: 599263,
    name: "GuildOnboardingPage",
    renderLoader: em
  }),
  eA = e => {
    let {
      match: t
    } = e, n = (0, d.e7)([Q.Z, $.Z], () => {
      let e = $.Z.getChannelId();
      return Q.Z.getChannel(e)
    }), {
      guildId: i,
      channelId: l,
      messageId: a
    } = t.params, r = (0, d.e7)([J.Z], () => J.Z.getGuild(i)), o = (0, d.e7)([X.ZP], () => null == i ? null : X.ZP.getSelfMember(i)), c = (0, d.e7)([y.Z], () => {
      if (null == i) return;
      let e = y.Z.getData(i);
      if ((null == e ? void 0 : e.type) === j.z.SERVER_SHOP) switch (e.initialTab) {
        case "role_subscriptions":
          return f.y.GUILD_ROLE_SUBSCRIPTIONS;
        case "guild_products":
          return f.y.GUILD_PRODUCTS;
        default:
          return
      }
    }), u = (0, A.C4)(i, "channel_renderer");
    if (null != i && null != l && (0, eE.AB)(l)) switch (l) {
      case eE.oC.ROLE_SUBSCRIPTIONS:
        return u ? (0, s.jsx)(eT, {
          guildId: i,
          initialTab: f.y.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, s.jsx)(x.Z, {
          guildId: i
        });
      case eE.oC.GUILD_SHOP:
        return (0, s.jsx)(eT, {
          guildId: i,
          productId: a,
          initialTab: c
        });
      case eE.oC.MEMBER_APPLICATIONS:
        return (0, s.jsx)(eg, {
          guildId: i
        });
      case eE.oC.GUILD_HOME:
        return (0, s.jsx)(ep, {
          guildId: i
        });
      case eE.oC.CHANNEL_BROWSER:
        return (0, s.jsx)(eS, {
          guildId: i,
          selectedSection: eh.l7.BROWSE
        });
      case eE.oC.GUILD_ONBOARDING:
        return (0, s.jsx)(eC, {
          guildId: i
        });
      case eE.oC.CUSTOMIZE_COMMUNITY:
        return (0, s.jsx)(eS, {
          guildId: i,
          selectedSection: eh.l7.CUSTOMIZE
        });
      case eE.oC.MEMBER_SAFETY:
        return (0, s.jsx)(eN, {
          guildId: i
        });
      default:
        (0, et.vE)(l)
    }
    if ((0, R.p3)(r, o)) return (0, s.jsx)(P.Z, {
      guildId: i,
      channelId: l
    });
    if ((null == n ? void 0 : n.type) === ed.d4z.GUILD_STORE) {
      let e = en.default.cast(t.params.messageId);
      return (0, s.jsx)(ei.Z, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, s.jsx)(N.Z, {})
  },
  ef = i.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, W.Z)(), n = (0, d.e7)([$.Z], () => null != t ? t : $.Z.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(ed.Z5c.GUILD_DISCOVERY)
    }() ? (0, s.jsx)(L.Z, {}) : null != e ? (0, s.jsx)(M.Z, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, s.jsx)(er.Z, {})
  });

function eZ(e) {
  let t = (0, W.Z)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, s.jsx)(B.Z, {
    ...e,
    guildId: t
  })
}
let eL = e => (0, s.jsx)(eA, {
    ...e
  }),
  eO = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, s.jsx)(Z.Z, {
      searchRoute: t
    })
  },
  ev = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, s.jsx)(v.Z, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eR = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, s.jsx)(b.Z, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eP = () => (0, s.jsx)(ec.Z, {}),
  ex = () => (0, s.jsx)(eu.Z, {}),
  eM = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, s.jsx)(C.Z, {
        isFullScreen: e,
        ...t
      })
    }
  },
  eD = e => (0, s.jsx)(T.Z, {
    ...e
  }),
  eb = () => (0, s.jsx)(m.Z, {}),
  ey = () => (0, s.jsx)(Y.Z, {}),
  ej = () => (0, s.jsx)(U.Z, {}),
  eU = () => (0, s.jsx)(F.Z, {}),
  eG = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, s.jsx)(Y.Z, {
          initialSection: ed.pJs.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, s.jsx)(Y.Z, {
          initialSection: ed.pJs.PENDING
        });
      case "sessionManagement":
        return (0, s.jsx)(r.l_, {
          to: ed.Z5c.SETTINGS("sessions")
        });
      case "connections":
        return (0, s.jsx)(r.l_, {
          to: {
            pathname: ed.Z5c.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, s.jsx)(r.l_, {
          to: ed.Z5c.FAMILY_CENTER
        });
      case "account-standing":
        return (0, s.jsx)(r.l_, {
          to: ed.Z5c.SETTINGS("privacy-and-safety", "account-standing")
        });
      case "authorized-apps":
        return (0, s.jsx)(r.l_, {
          to: ed.Z5c.SETTINGS("authorized-apps")
        });
      default:
        return (0, s.jsx)(r.l_, {
          to: ed.Z5c.ME
        })
    }
  };

function ew(e) {
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
    className: a()(eI.sidebar, (0, es.Q)(n), {
      [eI.hasNotice]: t,
      [eI.fullWidth]: u.tq,
      [eI.hidden]: r
    }),
    children: [(0, s.jsx)(ef, {}), (0, s.jsxs)("section", {
      className: eI.panels,
      "aria-label": e_.Z.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, s.jsx)(z.Z, {}), (0, s.jsx)(H.Z, {}), (0, s.jsx)(eo.Z, {
        section: ed.jXE.ACTIVITY_PANEL,
        children: (0, s.jsx)(eZ, {
          className: eI.activityPanel
        })
      }), (0, s.jsx)(eo.Z, {
        section: ed.jXE.RTC_CONNECTION_PANEL,
        children: (0, s.jsx)(V.Z, {})
      }), (0, s.jsx)(eo.Z, {
        section: ed.jXE.ACCOUNT_PANEL,
        children: (0, s.jsx)(k.Z, {})
      })]
    }), (0, s.jsx)(el.Z, {})]
  })
}

function ek() {
  var e;
  let t = (0, d.e7)([ee.Z], () => ee.Z.hasNotice()),
    n = (0, d.e7)([q.Z], () => q.Z.darkSidebar ? ed.BRd.DARK : void 0),
    l = function() {
      let [e, t] = i.useState(() => window.location.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION("")));
      return i.useEffect(() => K.Z.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    a = function() {
      let [e, t] = i.useState(() => window.location.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return i.useEffect(() => K.Z.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    c = function() {
      var e;
      let t = (0, r.TH)();
      return (null === (e = (0, r.LX)(t.pathname, ed.Z5c.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, r.TH)();
      return (null === (e = (0, r.LX)(t.pathname, ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    h = (0, d.e7)([w.Z], () => w.Z.getIsOpen()),
    _ = (0, r.$B)([ed.Z5c.CHANNEL(ed.ME, ":channelId"), ed.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    m = (null == _ ? void 0 : null === (e = _.params) || void 0 === e ? void 0 : e.channelId) === eE.oC.GUILD_ONBOARDING,
    T = i.useCallback(() => G.Z.openSidebar(), []);
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: eI.container,
      children: [h && !E && (0, s.jsx)(D.Z, {
        className: eI.guilds,
        themeOverride: n
      }), (0, s.jsx)(O.Z.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === ed.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, s.jsxs)("div", {
          className: eI.base,
          children: [u.tq ? null : (0, s.jsx)(ea.Z, {}), (0, s.jsxs)("div", {
            className: eI.content,
            children: [(0, s.jsx)(S.Z, {}), (0, s.jsx)(ew, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: l || a || c || E || m || !h
            }), (0, s.jsx)(I.Z.Provider, {
              value: T,
              children: (0, s.jsxs)(r.rs, {
                children: [(0, s.jsx)(g.Z, {
                  path: ed.Z5c.ACTIVITY,
                  disableTrack: !0,
                  children: (0, s.jsx)(r.l_, {
                    to: ed.Z5c.ME
                  })
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.ACTIVITIES_HAPPENING_NOW,
                  render: eb,
                  impressionName: o.ImpressionNames.ACTIVITIES
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.ACTIVITY_DETAILS(":applicationId"),
                  render: eD,
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
                  path: ed.Z5c.ACTIVITIES,
                  render: eb,
                  impressionName: o.ImpressionNames.ACTIVITIES
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.APPLICATION_LIBRARY,
                  render: eP,
                  impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.APPLICATION_STORE,
                  render: ex,
                  impressionName: o.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eM(!0),
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.COLLECTIBLES_SHOP,
                  render: eM(!1),
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eM(!1),
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.MESSAGE_REQUESTS,
                  render: ej,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.FAMILY_CENTER,
                  render: eU,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.ME,
                  exact: !0,
                  render: ey,
                  impressionName: o.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: [ed.Z5c.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), ed.Z5c.CHANNEL(ed.ME, ":channelId"), ed.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eL,
                  impressionName: o.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eO(t.search)
                  },
                  impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: ev,
                  impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, s.jsx)(g.Z, {
                  path: ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: eR,
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
                  path: ed.Z5c.FEATURE(":feature"),
                  exact: !0,
                  render: eG,
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