"use strict";
a.r(t), a.d(t, {
  default: function() {
    return eF
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
  p = a("765717"),
  I = a("358221"),
  T = a("823748"),
  g = a("626421"),
  A = a("118379"),
  N = a("652515"),
  v = a("544978"),
  L = a("194729"),
  R = a("668940"),
  O = a("372900"),
  M = a("6039"),
  P = a("637853"),
  x = a("326145"),
  y = a("269675"),
  D = a("242601"),
  b = a("416568"),
  U = a("613609"),
  j = a("160404"),
  G = a("225675"),
  w = a("745052"),
  k = a("285865"),
  B = a("659971"),
  F = a("720734"),
  H = a("840780"),
  V = a("235555"),
  Y = a("746508"),
  W = a("179742"),
  K = a("270759"),
  z = a("210724"),
  q = a("905423"),
  Q = a("304445"),
  Z = a("210887"),
  X = a("592125"),
  J = a("271383"),
  $ = a("430824"),
  ee = a("944486"),
  et = a("933429"),
  ea = a("823379"),
  en = a("709054"),
  es = a("792125"),
  el = a("409292"),
  ei = a("316173"),
  er = a("256638"),
  eo = a("663701"),
  eu = a("410575"),
  ed = a("425369"),
  ec = a("715702"),
  ef = a("981631"),
  eE = a("176505"),
  eh = a("290511"),
  e_ = a("689938"),
  eC = a("936704");
let em = () => (0, n.jsx)("div", {
    className: eC.loader,
    children: (0, n.jsx)(E.Spinner, {})
  }),
  eS = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("99387"), a.e("68614")]).then(a.bind(a, "650788")),
    webpackId: "650788",
    name: "GuildShopPage",
    renderLoader: em
  }),
  ep = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("99387"), a.e("44798")]).then(a.bind(a, "998420")),
    webpackId: "998420",
    name: "GuildMemberApplicationReview",
    renderLoader: em
  }),
  eI = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("99387"), a.e("51373")]).then(a.bind(a, "231588")),
    webpackId: "231588",
    name: "GuildHomePage",
    renderLoader: em
  }),
  eT = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("85552"), a.e("16600")]).then(a.bind(a, "545918")),
    webpackId: "545918",
    name: "MemberSafetyPage",
    renderLoader: em
  }),
  eg = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("75475"), a.e("58227"), a.e("38359"), a.e("51199")]).then(a.bind(a, "603072")),
    webpackId: "603072",
    name: "ChannelsAndRolesPage",
    renderLoader: em
  }),
  eA = (0, d.makeLazy)({
    createPromise: () => Promise.all([a.e("49237"), a.e("99387"), a.e("66635"), a.e("75475"), a.e("19878"), a.e("38359"), a.e("50498")]).then(a.bind(a, "599263")),
    webpackId: "599263",
    name: "GuildOnboardingPage",
    renderLoader: em
  }),
  eN = e => {
    let {
      match: t
    } = e, a = (0, f.useStateFromStores)([X.default, ee.default], () => {
      let e = ee.default.getChannelId();
      return X.default.getChannel(e)
    }), {
      guildId: s,
      channelId: l,
      messageId: i
    } = t.params, r = (0, f.useStateFromStores)([$.default], () => $.default.getGuild(s)), o = (0, f.useStateFromStores)([J.default], () => null == s ? null : J.default.getSelfMember(s)), u = (0, f.useStateFromStores)([j.default], () => {
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
    if (null != s && null != l && (0, eE.isStaticChannelRoute)(l)) switch (l) {
      case eE.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        return d ? (0, n.jsx)(eS, {
          guildId: s,
          initialTab: v.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, n.jsx)(y.default, {
          guildId: s
        });
      case eE.StaticChannelRoute.GUILD_SHOP:
        return (0, n.jsx)(eS, {
          guildId: s,
          productId: i,
          initialTab: u
        });
      case eE.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, n.jsx)(ep, {
          guildId: s
        });
      case eE.StaticChannelRoute.GUILD_HOME:
        return (0, n.jsx)(eI, {
          guildId: s
        });
      case eE.StaticChannelRoute.CHANNEL_BROWSER:
        return (0, n.jsx)(eg, {
          guildId: s,
          selectedSection: eh.GuildOnboardingTab.BROWSE
        });
      case eE.StaticChannelRoute.GUILD_ONBOARDING:
        return (0, n.jsx)(eA, {
          guildId: s
        });
      case eE.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        return (0, n.jsx)(eg, {
          guildId: s,
          selectedSection: eh.GuildOnboardingTab.CUSTOMIZE
        });
      case eE.StaticChannelRoute.MEMBER_SAFETY:
        return (0, n.jsx)(eT, {
          guildId: s
        });
      default:
        (0, ea.assertNever)(l)
    }
    if ((0, P.isBlockedByOnboarding)(r, o)) return (0, n.jsx)(x.default, {
      guildId: s,
      channelId: l
    });
    if ((null == a ? void 0 : a.type) === ef.ChannelTypes.GUILD_STORE) {
      let e = en.default.cast(t.params.messageId);
      return (0, n.jsx)(el.default, {
        channel: a,
        inputSkuId: e
      }, a.id)
    }
    return (0, n.jsx)(T.default, {})
  },
  ev = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, q.default)(), a = (0, f.useStateFromStores)([ee.default], () => null != t ? t : ee.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(ef.Routes.GUILD_DISCOVERY)
    }() ? (0, n.jsx)(R.default, {}) : null != e ? (0, n.jsx)(D.default, {
      selectedChannelId: a,
      guildId: e
    }, e) : (0, n.jsx)(eo.default, {})
  });

function eL(e) {
  let t = (0, q.default)(e => {
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
let eR = e => (0, n.jsx)(eN, {
    ...e
  }),
  eO = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, n.jsx)(L.default, {
      searchRoute: t
    })
  },
  eM = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, n.jsx)(M.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eP = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, n.jsx)(U.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  ex = () => (0, n.jsx)(ed.default, {}),
  ey = () => (0, n.jsx)(ec.default, {}),
  eD = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, n.jsx)(A.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  eb = e => (0, n.jsx)(S.default, {
    ...e
  }),
  eU = () => (0, n.jsx)(m.default, {}),
  ej = () => (0, n.jsx)(K.default, {}),
  eG = () => (0, n.jsx)(w.default, {}),
  ew = () => (0, n.jsx)(W.default, {}),
  ek = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, n.jsx)(K.default, {
          initialSection: ef.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, n.jsx)(K.default, {
          initialSection: ef.FriendsSections.PENDING
        });
      case "sessionManagement":
        return (0, n.jsx)(o.Redirect, {
          to: ef.Routes.SETTINGS("sessions")
        });
      case "connections":
        return (0, n.jsx)(o.Redirect, {
          to: {
            pathname: ef.Routes.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, n.jsx)(o.Redirect, {
          to: ef.Routes.FAMILY_CENTER
        });
      case "account-standing":
        return (0, n.jsx)(o.Redirect, {
          to: ef.Routes.SETTINGS("privacy-and-safety", "account-standing")
        });
      default:
        return (0, n.jsx)(o.Redirect, {
          to: ef.Routes.ME
        })
    }
  };

function eB(e) {
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
  let r = (0, f.useStateFromStores)([I.default], () => I.default.isFullscreenInContext());
  return s ? null : (0, n.jsxs)("div", {
    className: i()(eC.sidebar, (0, es.getThemeClass)(a), {
      [eC.hasNotice]: t,
      [eC.fullWidth]: c.isMobile,
      [eC.hidden]: r
    }),
    children: [(0, n.jsx)(ev, {}), (0, n.jsxs)("section", {
      className: eC.panels,
      "aria-label": e_.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, n.jsx)(z.default, {}), (0, n.jsx)(V.default, {}), (0, n.jsx)(eu.default, {
        section: ef.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, n.jsx)(eL, {
          className: eC.activityPanel
        })
      }), (0, n.jsx)(eu.default, {
        section: ef.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, n.jsx)(Y.default, {})
      }), (0, n.jsx)(eu.default, {
        section: ef.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, n.jsx)(F.default, {})
      })]
    }), (0, n.jsx)(ei.default, {})]
  })
}

function eF() {
  var e;
  let t = (0, f.useStateFromStores)([et.default], () => et.default.hasNotice()),
    a = (0, f.useStateFromStores)([Z.default], () => Z.default.darkSidebar ? ef.ThemeTypes.DARK : void 0),
    l = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ef.Routes.GUILD_MEMBER_VERIFICATION("")));
      return s.useEffect(() => Q.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ef.Routes.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    i = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ef.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return s.useEffect(() => Q.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ef.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    d = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, ef.Routes.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, ef.Routes.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    h = (0, f.useStateFromStores)([B.default], () => B.default.getIsOpen()),
    _ = (0, o.useRouteMatch)([ef.Routes.CHANNEL(ef.ME, ":channelId"), ef.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    m = (null == _ ? void 0 : null === (e = _.params) || void 0 === e ? void 0 : e.channelId) === eE.StaticChannelRoute.GUILD_ONBOARDING,
    S = s.useCallback(() => k.default.openSidebar(), []);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: eC.container,
      children: [h && !E && (0, n.jsx)(b.default, {
        className: eC.guilds,
        themeOverride: a
      }), (0, n.jsx)(O.default.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === ef.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, n.jsxs)("div", {
          className: eC.base,
          children: [c.isMobile ? null : (0, n.jsx)(er.default, {}), (0, n.jsxs)("div", {
            className: eC.content,
            children: [(0, n.jsx)(g.default, {}), (0, n.jsx)(eB, {
              hasNotice: t,
              sidebarTheme: a,
              hideSidebar: l || i || d || E || m || !h
            }), (0, n.jsx)(C.default.Provider, {
              value: S,
              children: (0, n.jsxs)(o.Switch, {
                children: [(0, n.jsx)(p.default, {
                  path: ef.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, n.jsx)(o.Redirect, {
                    to: ef.Routes.ME
                  })
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: eU,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.ACTIVITY_DETAILS(":applicationId"),
                  render: eb,
                  impressionName: u.ImpressionNames.ACTIVITY_DETAILS,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      application_id: t.params.applicationId
                    }
                  }
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.ACTIVITIES,
                  render: eU,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.APPLICATION_LIBRARY,
                  render: ex,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.APPLICATION_STORE,
                  render: ey,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eD(!0),
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.COLLECTIBLES_SHOP,
                  render: eD(!1),
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eD(!1),
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.MESSAGE_REQUESTS,
                  render: eG,
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.FAMILY_CENTER,
                  render: ew,
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.ME,
                  exact: !0,
                  render: ej,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: [ef.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), ef.Routes.CHANNEL(ef.ME, ":channelId"), ef.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eR,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eO(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: eM,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: eP,
                  impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, n.jsx)(p.default, {
                  path: ef.Routes.FEATURE(":feature"),
                  exact: !0,
                  render: ek,
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