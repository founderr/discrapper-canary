"use strict";
a.r(t), a.d(t, {
  default: function() {
    return eV
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("266067"),
  o = a("613828"),
  u = a("990547"),
  d = a("608787"),
  c = a("873546"),
  f = a("442837"),
  E = a("481060"),
  h = a("711237"),
  _ = a("532835"),
  C = a("290297"),
  m = a("918854"),
  S = a("279240"),
  I = a("765717"),
  p = a("358221"),
  T = a("823748"),
  g = a("626421"),
  A = a("118379"),
  N = a("652515"),
  v = a("544978"),
  R = a("194729"),
  L = a("668940"),
  O = a("372900"),
  P = a("6039"),
  M = a("637853"),
  x = a("326145"),
  y = a("269675"),
  D = a("362416"),
  b = a("416568"),
  U = a("613609"),
  j = a("160404"),
  G = a("225675"),
  w = a("745052"),
  k = a("285865"),
  F = a("659971"),
  B = a("720734"),
  H = a("840780"),
  V = a("235555"),
  Y = a("746508"),
  W = a("179742"),
  K = a("270759"),
  z = a("210724"),
  q = a("78826"),
  Q = a("905423"),
  Z = a("304445"),
  X = a("210887"),
  J = a("592125"),
  $ = a("271383"),
  ee = a("430824"),
  et = a("944486"),
  ea = a("933429"),
  en = a("823379"),
  es = a("709054"),
  el = a("792125"),
  ei = a("409292"),
  er = a("316173"),
  eo = a("256638"),
  eu = a("663701"),
  ed = a("410575"),
  ec = a("425369"),
  ef = a("715702"),
  eE = a("981631"),
  eh = a("176505"),
  e_ = a("290511"),
  eC = a("46140"),
  em = a("689938"),
  eS = a("268703");
let eI = () => (0, n.jsx)("div", {
    className: eS.loader,
    children: (0, n.jsx)(E.Spinner, {})
  }),
  ep = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("99387"), a.e("68614")]).then(a.bind(a, "650788")),
    webpackId: "650788",
    name: "GuildShopPage",
    renderLoader: eI
  }),
  eT = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("99387"), a.e("44798")]).then(a.bind(a, "998420")),
    webpackId: "998420",
    name: "GuildMemberApplicationReview",
    renderLoader: eI
  }),
  eg = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("99387"), a.e("51373")]).then(a.bind(a, "231588")),
    webpackId: "231588",
    name: "GuildHomePage",
    renderLoader: eI
  }),
  eA = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("85552"), a.e("16600")]).then(a.bind(a, "545918")),
    webpackId: "545918",
    name: "MemberSafetyPage",
    renderLoader: eI
  }),
  eN = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("75475"), a.e("58227"), a.e("38359"), a.e("51199")]).then(a.bind(a, "603072")),
    webpackId: "603072",
    name: "ChannelsAndRolesPage",
    renderLoader: eI
  }),
  ev = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("75475"), a.e("19878"), a.e("38359"), a.e("50498")]).then(a.bind(a, "599263")),
    webpackId: "599263",
    name: "GuildOnboardingPage",
    renderLoader: eI
  }),
  eR = e => {
    let {
      match: t
    } = e, a = (0, f.useStateFromStores)([J.default, et.default], () => {
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
        return d ? (0, n.jsx)(ep, {
          guildId: s,
          initialTab: v.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, n.jsx)(y.default, {
          guildId: s
        });
      case eh.StaticChannelRoute.GUILD_SHOP:
        return (0, n.jsx)(ep, {
          guildId: s,
          productId: i,
          initialTab: u
        });
      case eh.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, n.jsx)(eT, {
          guildId: s
        });
      case eh.StaticChannelRoute.GUILD_HOME:
        return (0, n.jsx)(eg, {
          guildId: s
        });
      case eh.StaticChannelRoute.CHANNEL_BROWSER:
        return (0, n.jsx)(eN, {
          guildId: s,
          selectedSection: e_.GuildOnboardingTab.BROWSE
        });
      case eh.StaticChannelRoute.GUILD_ONBOARDING:
        return (0, n.jsx)(ev, {
          guildId: s
        });
      case eh.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        return (0, n.jsx)(eN, {
          guildId: s,
          selectedSection: e_.GuildOnboardingTab.CUSTOMIZE
        });
      case eh.StaticChannelRoute.MEMBER_SAFETY:
        return (0, n.jsx)(eA, {
          guildId: s
        });
      default:
        (0, en.assertNever)(l)
    }
    if ((0, M.isBlockedByOnboarding)(r, o)) return (0, n.jsx)(x.default, {
      guildId: s,
      channelId: l
    });
    if ((null == a ? void 0 : a.type) === eE.ChannelTypes.GUILD_STORE) {
      let e = es.default.cast(t.params.messageId);
      return (0, n.jsx)(ei.default, {
        channel: a,
        inputSkuId: e
      }, a.id)
    }
    return (0, n.jsx)(T.default, {})
  },
  eL = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, Q.default)(), a = (0, f.useStateFromStores)([et.default], () => null != t ? t : et.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(eE.Routes.GUILD_DISCOVERY)
    }() ? (0, n.jsx)(L.default, {}) : null != e ? (0, n.jsx)(D.default, {
      selectedChannelId: a,
      guildId: e
    }, e) : (0, n.jsx)(eu.default, {})
  });

function eO(e) {
  let t = (0, Q.default)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, n.jsx)(H.default, {
    ...e,
    guildId: t
  })
}
let eP = e => (0, n.jsx)(eR, {
    ...e
  }),
  eM = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, n.jsx)(R.default, {
      searchRoute: t
    })
  },
  ex = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, n.jsx)(P.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  ey = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, n.jsx)(U.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eD = () => (0, n.jsx)(ec.default, {}),
  eb = () => (0, n.jsx)(ef.default, {}),
  eU = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, n.jsx)(A.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  ej = e => (0, n.jsx)(S.default, {
    ...e
  }),
  eG = () => (0, n.jsx)(m.default, {}),
  ew = () => (0, n.jsx)(K.default, {}),
  ek = () => (0, n.jsx)(w.default, {}),
  eF = () => (0, n.jsx)(W.default, {}),
  eB = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, n.jsx)(K.default, {
          initialSection: eE.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, n.jsx)(K.default, {
          initialSection: eE.FriendsSections.PENDING
        });
      case "sessionManagement":
        return (0, n.jsx)(o.Redirect, {
          to: eE.Routes.SETTINGS("sessions")
        });
      case "connections":
        return (0, n.jsx)(o.Redirect, {
          to: {
            pathname: eE.Routes.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, n.jsx)(o.Redirect, {
          to: eE.Routes.FAMILY_CENTER
        });
      case "account-standing":
        return (0, n.jsx)(o.Redirect, {
          to: eE.Routes.SETTINGS("privacy-and-safety", "account-standing")
        });
      default:
        return (0, n.jsx)(o.Redirect, {
          to: eE.Routes.ME
        })
    }
  };

function eH(e) {
  let {
    hasNotice: t,
    sidebarTheme: a,
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
  return s ? null : (0, n.jsxs)("div", {
    className: i()(eS.sidebar, (0, el.getThemeClass)(a), {
      [eS.hasNotice]: t,
      [eS.fullWidth]: c.isMobile,
      [eS.hidden]: r
    }),
    children: [(0, n.jsx)(eL, {}), (0, n.jsxs)("section", {
      className: eS.panels,
      "aria-label": em.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, n.jsx)(q.QuestsAssetContextProvider, {
        sentrySource: eC.QuestsExperimentLocations.QUESTS_BAR,
        children: (0, n.jsx)(z.default, {})
      }), (0, n.jsx)(V.default, {}), (0, n.jsx)(ed.default, {
        section: eE.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, n.jsx)(eO, {
          className: eS.activityPanel
        })
      }), (0, n.jsx)(ed.default, {
        section: eE.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, n.jsx)(Y.default, {})
      }), (0, n.jsx)(ed.default, {
        section: eE.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, n.jsx)(B.default, {})
      })]
    }), (0, n.jsx)(er.default, {})]
  })
}

function eV() {
  var e;
  let t = (0, f.useStateFromStores)([ea.default], () => ea.default.hasNotice()),
    a = (0, f.useStateFromStores)([X.default], () => X.default.darkSidebar ? eE.ThemeTypes.DARK : void 0),
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
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: eS.container,
      children: [h && !E && (0, n.jsx)(b.default, {
        className: eS.guilds,
        themeOverride: a
      }), (0, n.jsx)(O.default.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === eE.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, n.jsxs)("div", {
          className: eS.base,
          children: [c.isMobile ? null : (0, n.jsx)(eo.default, {}), (0, n.jsxs)("div", {
            className: eS.content,
            children: [(0, n.jsx)(g.default, {}), (0, n.jsx)(eH, {
              hasNotice: t,
              sidebarTheme: a,
              hideSidebar: l || i || d || E || m || !h
            }), (0, n.jsx)(C.default.Provider, {
              value: S,
              children: (0, n.jsxs)(o.Switch, {
                children: [(0, n.jsx)(I.default, {
                  path: eE.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, n.jsx)(o.Redirect, {
                    to: eE.Routes.ME
                  })
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: eG,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, n.jsx)(I.default, {
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
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.ACTIVITIES,
                  render: eG,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.APPLICATION_LIBRARY,
                  render: eD,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.APPLICATION_STORE,
                  render: eb,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eU(!0),
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP,
                  render: eU(!1),
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eU(!1),
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.MESSAGE_REQUESTS,
                  render: ek,
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.FAMILY_CENTER,
                  render: eF,
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.ME,
                  exact: !0,
                  render: ew,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: [eE.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eE.Routes.CHANNEL(eE.ME, ":channelId"), eE.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eP,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eM(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: ex,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: ey,
                  impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, n.jsx)(I.default, {
                  path: eE.Routes.FEATURE(":feature"),
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