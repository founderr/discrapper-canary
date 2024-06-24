n.d(t, {
  Z: function() {
    return ek
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
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
  g = n(279240),
  p = n(765717),
  N = n(358221),
  T = n(823748),
  C = n(626421),
  S = n(118379),
  A = n(652515),
  f = n(544978),
  Z = n(194729),
  v = n(668940),
  L = n(372900),
  O = n(6039),
  R = n(637853),
  x = n(326145),
  M = n(269675),
  P = n(242601),
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
  ei = n(792125),
  es = n(409292),
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
let em = () => (0, i.jsx)("div", {
    className: eI.loader,
    children: (0, i.jsx)(E.Spinner, {})
  }),
  eg = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("68614")]).then(n.bind(n, 650788)),
    webpackId: 650788,
    name: "GuildShopPage",
    renderLoader: em
  }),
  ep = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("44798")]).then(n.bind(n, 998420)),
    webpackId: 998420,
    name: "GuildMemberApplicationReview",
    renderLoader: em
  }),
  eN = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("60493")]).then(n.bind(n, 231588)),
    webpackId: 231588,
    name: "GuildHomePage",
    renderLoader: em
  }),
  eT = (0, c.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("85552"), n.e("44400")]).then(n.bind(n, 545918)),
    webpackId: 545918,
    name: "MemberSafetyPage",
    renderLoader: em
  }),
  eC = (0, c.Un)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("44156"), n.e("58227"), n.e("38359"), n.e("51199")]).then(n.bind(n, 603072)),
    webpackId: 603072,
    name: "ChannelsAndRolesPage",
    renderLoader: em
  }),
  eS = (0, c.Un)({
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
      guildId: s,
      channelId: l,
      messageId: a
    } = t.params, r = (0, d.e7)([J.Z], () => J.Z.getGuild(s)), o = (0, d.e7)([X.ZP], () => null == s ? null : X.ZP.getSelfMember(s)), c = (0, d.e7)([y.Z], () => {
      if (null == s) return;
      let e = y.Z.getData(s);
      if ((null == e ? void 0 : e.type) === j.z.SERVER_SHOP) switch (e.initialTab) {
        case "role_subscriptions":
          return f.y.GUILD_ROLE_SUBSCRIPTIONS;
        case "guild_products":
          return f.y.GUILD_PRODUCTS;
        default:
          return
      }
    }), u = (0, A.C4)(s, "channel_renderer");
    if (null != s && null != l && (0, eE.AB)(l)) switch (l) {
      case eE.oC.ROLE_SUBSCRIPTIONS:
        return u ? (0, i.jsx)(eg, {
          guildId: s,
          initialTab: f.y.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, i.jsx)(M.Z, {
          guildId: s
        });
      case eE.oC.GUILD_SHOP:
        return (0, i.jsx)(eg, {
          guildId: s,
          productId: a,
          initialTab: c
        });
      case eE.oC.MEMBER_APPLICATIONS:
        return (0, i.jsx)(ep, {
          guildId: s
        });
      case eE.oC.GUILD_HOME:
        return (0, i.jsx)(eN, {
          guildId: s
        });
      case eE.oC.CHANNEL_BROWSER:
        return (0, i.jsx)(eC, {
          guildId: s,
          selectedSection: eh.l7.BROWSE
        });
      case eE.oC.GUILD_ONBOARDING:
        return (0, i.jsx)(eS, {
          guildId: s
        });
      case eE.oC.CUSTOMIZE_COMMUNITY:
        return (0, i.jsx)(eC, {
          guildId: s,
          selectedSection: eh.l7.CUSTOMIZE
        });
      case eE.oC.MEMBER_SAFETY:
        return (0, i.jsx)(eT, {
          guildId: s
        });
      default:
        (0, et.vE)(l)
    }
    if ((0, R.p3)(r, o)) return (0, i.jsx)(x.Z, {
      guildId: s,
      channelId: l
    });
    if ((null == n ? void 0 : n.type) === ed.d4z.GUILD_STORE) {
      let e = en.default.cast(t.params.messageId);
      return (0, i.jsx)(es.Z, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, i.jsx)(T.Z, {})
  },
  ef = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, W.Z)(), n = (0, d.e7)([$.Z], () => null != t ? t : $.Z.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(ed.Z5c.GUILD_DISCOVERY)
    }() ? (0, i.jsx)(v.Z, {}) : null != e ? (0, i.jsx)(P.Z, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, i.jsx)(er.Z, {})
  });

function eZ(e) {
  let t = (0, W.Z)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, i.jsx)(B.Z, {
    ...e,
    guildId: t
  })
}
let ev = e => (0, i.jsx)(eA, {
    ...e
  }),
  eL = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, i.jsx)(Z.Z, {
      searchRoute: t
    })
  },
  eO = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, i.jsx)(O.Z, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eR = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, i.jsx)(b.Z, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  ex = () => (0, i.jsx)(ec.Z, {}),
  eM = () => (0, i.jsx)(eu.Z, {}),
  eP = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, i.jsx)(S.Z, {
        isFullScreen: e,
        ...t
      })
    }
  },
  eD = e => (0, i.jsx)(g.Z, {
    ...e
  }),
  eb = () => (0, i.jsx)(m.Z, {}),
  ey = () => (0, i.jsx)(Y.Z, {}),
  ej = () => (0, i.jsx)(U.Z, {}),
  eU = () => (0, i.jsx)(F.Z, {}),
  eG = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, i.jsx)(Y.Z, {
          initialSection: ed.pJs.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, i.jsx)(Y.Z, {
          initialSection: ed.pJs.PENDING
        });
      case "sessionManagement":
        return (0, i.jsx)(r.l_, {
          to: ed.Z5c.SETTINGS("sessions")
        });
      case "connections":
        return (0, i.jsx)(r.l_, {
          to: {
            pathname: ed.Z5c.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, i.jsx)(r.l_, {
          to: ed.Z5c.FAMILY_CENTER
        });
      case "account-standing":
        return (0, i.jsx)(r.l_, {
          to: ed.Z5c.SETTINGS("privacy-and-safety", "account-standing")
        });
      case "authorized-apps":
        return (0, i.jsx)(r.l_, {
          to: ed.Z5c.SETTINGS("authorized-apps")
        });
      default:
        return (0, i.jsx)(r.l_, {
          to: ed.Z5c.ME
        })
    }
  };

function ew(e) {
  let {
    hasNotice: t,
    sidebarTheme: n,
    hideSidebar: s
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
  let r = (0, d.e7)([N.Z], () => N.Z.isFullscreenInContext());
  return s ? null : (0, i.jsxs)("div", {
    className: a()(eI.sidebar, (0, ei.Q)(n), {
      [eI.hasNotice]: t,
      [eI.fullWidth]: u.tq,
      [eI.hidden]: r
    }),
    children: [(0, i.jsx)(ef, {}), (0, i.jsxs)("section", {
      className: eI.panels,
      "aria-label": e_.Z.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, i.jsx)(z.Z, {}), (0, i.jsx)(H.Z, {}), (0, i.jsx)(eo.Z, {
        section: ed.jXE.ACTIVITY_PANEL,
        children: (0, i.jsx)(eZ, {
          className: eI.activityPanel
        })
      }), (0, i.jsx)(eo.Z, {
        section: ed.jXE.RTC_CONNECTION_PANEL,
        children: (0, i.jsx)(V.Z, {})
      }), (0, i.jsx)(eo.Z, {
        section: ed.jXE.ACCOUNT_PANEL,
        children: (0, i.jsx)(k.Z, {})
      })]
    }), (0, i.jsx)(el.Z, {})]
  })
}

function ek() {
  var e;
  let t = (0, d.e7)([ee.Z], () => ee.Z.hasNotice()),
    n = (0, d.e7)([q.Z], () => q.Z.darkSidebar ? ed.BRd.DARK : void 0),
    l = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION("")));
      return s.useEffect(() => K.Z.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    a = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return s.useEffect(() => K.Z.addRouteChangeListener(e => {
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
    g = s.useCallback(() => G.Z.openSidebar(), []);
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: eI.container,
      children: [h && !E && (0, i.jsx)(D.Z, {
        className: eI.guilds,
        themeOverride: n
      }), (0, i.jsx)(L.Z.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === ed.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, i.jsxs)("div", {
          className: eI.base,
          children: [u.tq ? null : (0, i.jsx)(ea.Z, {}), (0, i.jsxs)("div", {
            className: eI.content,
            children: [(0, i.jsx)(C.Z, {}), (0, i.jsx)(ew, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: l || a || c || E || m || !h
            }), (0, i.jsx)(I.Z.Provider, {
              value: g,
              children: (0, i.jsxs)(r.rs, {
                children: [(0, i.jsx)(p.Z, {
                  path: ed.Z5c.ACTIVITY,
                  disableTrack: !0,
                  children: (0, i.jsx)(r.l_, {
                    to: ed.Z5c.ME
                  })
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.ACTIVITIES_HAPPENING_NOW,
                  render: eb,
                  impressionName: o.ImpressionNames.ACTIVITIES
                }), (0, i.jsx)(p.Z, {
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
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.ACTIVITIES,
                  render: eb,
                  impressionName: o.ImpressionNames.ACTIVITIES
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.APPLICATION_LIBRARY,
                  render: ex,
                  impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.APPLICATION_STORE,
                  render: eM,
                  impressionName: o.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eP(!0),
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.COLLECTIBLES_SHOP,
                  render: eP(!1),
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eP(!1),
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.MESSAGE_REQUESTS,
                  render: ej,
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.FAMILY_CENTER,
                  render: eU,
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.ME,
                  exact: !0,
                  render: ey,
                  impressionName: o.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: [ed.Z5c.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), ed.Z5c.CHANNEL(ed.ME, ":channelId"), ed.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: ev,
                  impressionName: o.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eL(t.search)
                  },
                  impressionName: o.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
                  path: ed.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: eO,
                  impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, i.jsx)(p.Z, {
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
                }), (0, i.jsx)(p.Z, {
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