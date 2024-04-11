"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eV
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("266067"),
  o = n("613828"),
  u = n("990547"),
  d = n("608787"),
  c = n("873546"),
  f = n("442837"),
  E = n("481060"),
  h = n("711237"),
  _ = n("532835"),
  C = n("290297"),
  m = n("918854"),
  S = n("279240"),
  I = n("765717"),
  p = n("358221"),
  T = n("823748"),
  g = n("626421"),
  A = n("118379"),
  N = n("652515"),
  v = n("544978"),
  R = n("194729"),
  O = n("668940"),
  L = n("372900"),
  M = n("6039"),
  P = n("637853"),
  y = n("326145"),
  x = n("102267"),
  D = n("362416"),
  b = n("416568"),
  U = n("613609"),
  j = n("160404"),
  G = n("225675"),
  w = n("745052"),
  k = n("285865"),
  F = n("659971"),
  H = n("720734"),
  B = n("840780"),
  V = n("235555"),
  Y = n("746508"),
  W = n("179742"),
  K = n("270759"),
  z = n("78826"),
  q = n("990146"),
  Q = n("905423"),
  Z = n("304445"),
  X = n("210887"),
  J = n("592125"),
  $ = n("271383"),
  ee = n("430824"),
  et = n("944486"),
  en = n("933429"),
  ea = n("823379"),
  es = n("709054"),
  el = n("792125"),
  ei = n("409292"),
  er = n("316173"),
  eo = n("256638"),
  eu = n("663701"),
  ed = n("410575"),
  ec = n("425369"),
  ef = n("715702"),
  eE = n("981631"),
  eh = n("176505"),
  e_ = n("290511"),
  eC = n("46140"),
  em = n("689938"),
  eS = n("268703");
let eI = () => (0, a.jsx)("div", {
    className: eS.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  ep = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("68614")]).then(n.bind(n, "650788")),
    webpackId: "650788",
    name: "GuildShopPage",
    renderLoader: eI
  }),
  eT = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("44798")]).then(n.bind(n, "998420")),
    webpackId: "998420",
    name: "GuildMemberApplicationReview",
    renderLoader: eI
  }),
  eg = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("51373")]).then(n.bind(n, "231588")),
    webpackId: "231588",
    name: "GuildHomePage",
    renderLoader: eI
  }),
  eA = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("85552"), n.e("16600")]).then(n.bind(n, "545918")),
    webpackId: "545918",
    name: "MemberSafetyPage",
    renderLoader: eI
  }),
  eN = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("75475"), n.e("58227"), n.e("38359"), n.e("51199")]).then(n.bind(n, "603072")),
    webpackId: "603072",
    name: "ChannelsAndRolesPage",
    renderLoader: eI
  }),
  ev = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("75475"), n.e("19878"), n.e("38359"), n.e("50498")]).then(n.bind(n, "599263")),
    webpackId: "599263",
    name: "GuildOnboardingPage",
    renderLoader: eI
  }),
  eR = e => {
    let {
      match: t
    } = e, n = (0, f.useStateFromStores)([J.default, et.default], () => {
      let e = et.default.getChannelId();
      return J.default.getChannel(e)
    }), {
      guildId: s,
      channelId: l,
      messageId: i
    } = t.params, r = (0, f.useStateFromStores)([ee.default], () => ee.default.getGuild(s)), o = (0, f.useStateFromStores)([$.default], () => null == s ? null : $.default.getSelfMember(s)), u = (0, f.useStateFromStores)([j.default], () => {
      if (null == s) return;
      let e = j.default.getData(s);
      if ((null == e ? void 0 : e.type) === G.ImpersonateType.SERVER_SHOP) switch (e.initialTab) {
        case "role_subscriptions":
          return v.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS;
        case "guild_products":
          return v.GuildShopTab.GUILD_PRODUCTS;
        default:
          return
      }
    }), d = (0, N.isEligibleForSubscriptionsInGuildShop)(s, "channel_renderer");
    if (null != s && null != l && (0, eh.isStaticChannelRoute)(l)) switch (l) {
      case eh.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        return d ? (0, a.jsx)(ep, {
          guildId: s,
          initialTab: v.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, a.jsx)(x.default, {
          guildId: s
        });
      case eh.StaticChannelRoute.GUILD_SHOP:
        return (0, a.jsx)(ep, {
          guildId: s,
          productId: i,
          initialTab: u
        });
      case eh.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, a.jsx)(eT, {
          guildId: s
        });
      case eh.StaticChannelRoute.GUILD_HOME:
        return (0, a.jsx)(eg, {
          guildId: s
        });
      case eh.StaticChannelRoute.CHANNEL_BROWSER:
        return (0, a.jsx)(eN, {
          guildId: s,
          selectedSection: e_.GuildOnboardingTab.BROWSE
        });
      case eh.StaticChannelRoute.GUILD_ONBOARDING:
        return (0, a.jsx)(ev, {
          guildId: s
        });
      case eh.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        return (0, a.jsx)(eN, {
          guildId: s,
          selectedSection: e_.GuildOnboardingTab.CUSTOMIZE
        });
      case eh.StaticChannelRoute.MEMBER_SAFETY:
        return (0, a.jsx)(eA, {
          guildId: s
        });
      default:
        (0, ea.assertNever)(l)
    }
    if ((0, P.isBlockedByOnboarding)(r, o)) return (0, a.jsx)(y.default, {
      guildId: s,
      channelId: l
    });
    if ((null == n ? void 0 : n.type) === eE.ChannelTypes.GUILD_STORE) {
      let e = es.default.cast(t.params.messageId);
      return (0, a.jsx)(ei.default, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, a.jsx)(T.default, {})
  },
  eO = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, Q.default)(), n = (0, f.useStateFromStores)([et.default], () => null != t ? t : et.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(eE.Routes.GUILD_DISCOVERY)
    }() ? (0, a.jsx)(O.default, {}) : null != e ? (0, a.jsx)(D.default, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, a.jsx)(eu.default, {})
  });

function eL(e) {
  let t = (0, Q.default)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, a.jsx)(B.default, {
    ...e,
    guildId: t
  })
}
let eM = e => (0, a.jsx)(eR, {
    ...e
  }),
  eP = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, a.jsx)(R.default, {
      searchRoute: t
    })
  },
  ey = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(M.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  ex = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(U.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eD = () => (0, a.jsx)(ec.default, {}),
  eb = () => (0, a.jsx)(ef.default, {}),
  eU = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, a.jsx)(A.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  ej = e => (0, a.jsx)(S.default, {
    ...e
  }),
  eG = () => (0, a.jsx)(m.default, {}),
  ew = () => (0, a.jsx)(K.default, {}),
  ek = () => (0, a.jsx)(w.default, {}),
  eF = () => (0, a.jsx)(W.default, {}),
  eH = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, a.jsx)(K.default, {
          initialSection: eE.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, a.jsx)(K.default, {
          initialSection: eE.FriendsSections.PENDING
        });
      case "sessionManagement":
        return (0, a.jsx)(o.Redirect, {
          to: eE.Routes.SETTINGS("sessions")
        });
      case "connections":
        return (0, a.jsx)(o.Redirect, {
          to: {
            pathname: eE.Routes.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, a.jsx)(o.Redirect, {
          to: eE.Routes.FAMILY_CENTER
        });
      case "account-standing":
        return (0, a.jsx)(o.Redirect, {
          to: eE.Routes.SETTINGS("privacy-and-safety", "account-standing")
        });
      default:
        return (0, a.jsx)(o.Redirect, {
          to: eE.Routes.ME
        })
    }
  };

function eB(e) {
  let {
    hasNotice: t,
    sidebarTheme: n,
    hideSidebar: s
  } = e;
  (0, _.useNullExperiment)(!0);
  let l = "app view user trigger debugging";
  h.UserTriggerAAExperiment.useExperiment({
    location: l
  }, {
    autoTrackExposure: !1
  }), h.UserTriggerAAExperiment.trackExposure({
    location: l
  });
  let r = (0, f.useStateFromStores)([p.default], () => p.default.isFullscreenInContext());
  return s ? null : (0, a.jsxs)("div", {
    className: i()(eS.sidebar, (0, el.getThemeClass)(n), {
      [eS.hasNotice]: t,
      [eS.fullWidth]: c.isMobile,
      [eS.hidden]: r
    }),
    children: [(0, a.jsx)(eO, {}), (0, a.jsxs)("section", {
      className: eS.panels,
      "aria-label": em.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, a.jsx)(z.QuestsAssetContextProvider, {
        sentrySource: eC.QuestsExperimentLocations.QUESTS_BAR,
        children: (0, a.jsx)(q.default, {})
      }), (0, a.jsx)(V.default, {}), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, a.jsx)(eL, {
          className: eS.activityPanel
        })
      }), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, a.jsx)(Y.default, {})
      }), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, a.jsx)(H.default, {})
      })]
    }), (0, a.jsx)(er.default, {})]
  })
}

function eV() {
  var e;
  let t = (0, f.useStateFromStores)([en.default], () => en.default.hasNotice()),
    n = (0, f.useStateFromStores)([X.default], () => X.default.darkSidebar ? eE.ThemeTypes.DARK : void 0),
    l = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(eE.Routes.GUILD_MEMBER_VERIFICATION("")));
      return s.useEffect(() => Z.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(eE.Routes.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    i = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(eE.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return s.useEffect(() => Z.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(eE.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    d = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, eE.Routes.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, eE.Routes.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    h = (0, f.useStateFromStores)([F.default], () => F.default.getIsOpen()),
    _ = (0, o.useRouteMatch)([eE.Routes.CHANNEL(eE.ME, ":channelId"), eE.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    m = (null == _ ? void 0 : null === (e = _.params) || void 0 === e ? void 0 : e.channelId) === eh.StaticChannelRoute.GUILD_ONBOARDING,
    S = s.useCallback(() => k.default.openSidebar(), []);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: eS.container,
      children: [h && !E && (0, a.jsx)(b.default, {
        className: eS.guilds,
        themeOverride: n
      }), (0, a.jsx)(L.default.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === eE.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, a.jsxs)("div", {
          className: eS.base,
          children: [c.isMobile ? null : (0, a.jsx)(eo.default, {}), (0, a.jsxs)("div", {
            className: eS.content,
            children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(eB, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: l || i || d || E || m || !h
            }), (0, a.jsx)(C.default.Provider, {
              value: S,
              children: (0, a.jsxs)(o.Switch, {
                children: [(0, a.jsx)(I.default, {
                  path: eE.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, a.jsx)(o.Redirect, {
                    to: eE.Routes.ME
                  })
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: eG,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.ACTIVITY_DETAILS(":applicationId"),
                  render: ej,
                  impressionName: u.ImpressionNames.ACTIVITY_DETAILS,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      application_id: t.params.applicationId
                    }
                  }
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.ACTIVITIES,
                  render: eG,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.APPLICATION_LIBRARY,
                  render: eD,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.APPLICATION_STORE,
                  render: eb,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eU(!0),
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP,
                  render: eU(!1),
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eU(!1),
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.MESSAGE_REQUESTS,
                  render: ek,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.FAMILY_CENTER,
                  render: eF,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.ME,
                  exact: !0,
                  render: ew,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: [eE.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eE.Routes.CHANNEL(eE.ME, ":channelId"), eE.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eM,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eP(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: ey,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: ex,
                  impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, a.jsx)(I.default, {
                  path: eE.Routes.FEATURE(":feature"),
                  exact: !0,
                  render: eH,
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