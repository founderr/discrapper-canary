"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("593473"),
  i = n("266067"),
  r = n("613828"),
  o = n("442837"),
  u = n("481060"),
  d = n("893776"),
  c = n("943094"),
  f = n("749210"),
  E = n("287734"),
  h = n("401430"),
  _ = n("230711"),
  C = n("607070"),
  m = n("627845"),
  S = n("185666"),
  p = n("503737"),
  I = n("513202"),
  g = n("318891"),
  T = n("687751"),
  A = n("912471"),
  N = n("100527"),
  v = n("838134"),
  R = n("77987"),
  O = n("679891"),
  L = n("491575"),
  M = n("314533"),
  x = n("935347"),
  P = n("560067"),
  y = n("823169"),
  D = n("620360"),
  b = n("96051"),
  U = n("750995"),
  j = n("696287"),
  G = n("408026"),
  w = n("763916"),
  k = n("306721"),
  B = n("531551"),
  F = n("38618"),
  H = n("972830"),
  V = n("981283"),
  Y = n("584233"),
  W = n("15274"),
  K = n("434404"),
  z = n("543842"),
  Q = n("879064"),
  q = n("315964"),
  Z = n("495784"),
  X = n("975533"),
  J = n("377400"),
  $ = n("285865"),
  ee = n("659971"),
  et = n("929809"),
  en = n("122333"),
  ea = n("960275"),
  es = n("818765"),
  el = n("678492"),
  ei = n("269089"),
  er = n("380570"),
  eo = n("837689"),
  eu = n("367207"),
  ed = n("489977"),
  ec = n("329557"),
  ef = n("304445"),
  eE = n("893607"),
  eh = n("703656"),
  e_ = n("298969"),
  eC = n("719256"),
  em = n("6025"),
  eS = n("897473"),
  ep = n("377368"),
  eI = n("262702"),
  eg = n("639033"),
  eT = n("479313"),
  eA = n("911560"),
  eN = n("703016"),
  ev = n("171368"),
  eR = n("429974"),
  eO = n("332754"),
  eL = n("507468"),
  eM = n("357269"),
  ex = n("282506"),
  eP = n("444961"),
  ey = n("314897"),
  eD = n("433355"),
  eb = n("592125"),
  eU = n("896797"),
  ej = n("430824"),
  eG = n("819640"),
  ew = n("283595"),
  ek = n("944486"),
  eB = n("914010"),
  eF = n("695103"),
  eH = n("241890"),
  eV = n("897607"),
  eY = n("417363"),
  eW = n("900974"),
  eK = n("358085"),
  ez = n("998502"),
  eQ = n("346329"),
  eq = n("981631"),
  eZ = n("176505"),
  eX = n("701476");

function eJ(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n("117240"), n("801077"), n("967368"), n("272053"), n("974180"), n("574254"), n("551428"), n("55563"), n("455173"), n("882029"), n("959457"), n("653255"), n("663389"), n("25990"), n("778825"), n("999382"), n("388610"), n("533947"), n("277053"), n("371398"), n("141233"), n("471073"), n("628566");
let e$ = !1;
(0, A.initSessionHeartbeatScheduler)(), o.default.initialize(), e_.default.loadServer(), eK.isPlatformEmbedded && (ez.default.on("USER_SETTINGS_OPEN", () => {
  !eG.default.getLayers().includes(eq.Layers.USER_SETTINGS) && _.default.open(eq.UserSettingsSections.ACCOUNT)
}), ez.default.on("LAUNCH_APPLICATION", (e, t) => {
  let n = ew.default.getActiveLibraryApplication(t);
  eQ.playApplication(t, n, {
    analyticsParams: {
      location: {
        page: eq.AnalyticsPages.DIRECT,
        object: eq.AnalyticsObjects.WEB_URL
      }
    }
  })
}));
let e0 = o.default.connectStores([F.default, eU.default, ey.default], () => ({
    isConnected: F.default.isConnected(),
    defaultRoute: eU.default.defaultRoute,
    defaultRouteFallback: eU.default.fallbackRoute,
    token: ey.default.getToken()
  }))(class extends s.Component {
    componentDidMount() {
      let {
        match: e
      } = this.props;
      null != e && null != e.params.inviteCode && (0, Y.doGuildOnboardingForPostAuthInvite)({
        code: e.params.inviteCode
      })
    }
    render() {
      let {
        isConnected: e,
        defaultRoute: t,
        token: n,
        defaultRouteFallback: s
      } = this.props;
      if (null == n) return (0, a.jsx)(r.Redirect, {
        to: eq.Routes.DEFAULT_LOGGED_OUT
      });
      if (e) {
        let e = e5(t);
        return null == e || (e.params.guildId === eq.ME || null != ej.default.getGuild(e.params.guildId)) && null != eb.default.getChannel(e.params.channelId) ? (0, a.jsx)(r.Redirect, {
          to: t
        }) : (0, a.jsx)(r.Redirect, {
          to: s
        })
      }
      return null
    }
  }),
  e1 = (0, R.makeAuthenticated)(L.default, null, {
    passProps: !1
  }),
  e4 = (0, R.makeAuthenticated)(v.default, null, {
    passProps: !1
  }),
  e2 = [eq.Routes.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(eZ.StaticChannelRoutes).map(e => eq.Routes.CHANNEL(":guildId", e))];

function e3(e) {
  let {
    guildId: t,
    channelId: n = null,
    messageId: a = null,
    threadId: s = null
  } = e.params;
  return {
    guildId: null != t ? t : eq.ME,
    channelId: n,
    messageId: a,
    threadId: s
  }
}
let e7 = [{
  path: [eq.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
  render(e) {
    let {
      match: t
    } = e;
    return (0, a.jsx)(e0, {
      match: t
    })
  },
  isSessionRequired: !0
}, {
  path: [eq.Routes.APP],
  render: () => (0, a.jsx)(e0, {}),
  isSessionRequired: !0
}, {
  path: [eq.Routes.USERS(":id")],
  render: function(e) {
    let {
      match: t,
      location: n
    } = e, {
      friend_token: s
    } = (0, l.parse)(n.search), {
      id: i
    } = t.params;
    return (0, H.addPostConnectionCallback)(() => (0, ev.openUserProfileModal)({
      userId: i,
      guildId: eq.ME,
      friendToken: s,
      sourceAnalyticsLocations: [N.default.URI_SCHEME],
      analyticsLocation: {
        section: eq.AnalyticsSections.DIRECT_ROUTE_ACCESS
      }
    })), (0, a.jsx)(r.Redirect, {
      to: eU.default.defaultRoute
    })
  }
}, {
  path: [eq.Routes.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
  render: function(e) {
    let {
      match: t
    } = e, {
      gameId: n,
      action: s
    } = t.params;
    return eY.default.whenInitialized(() => {
      ew.default.whenInitialized(() => {
        switch (s) {
          case "launch": {
            let e = ew.default.getActiveLibraryApplication(n);
            if (null == e) return;
            eQ.playApplication(e.id, e, {
              analyticsParams: {
                location: {
                  page: eq.AnalyticsPages.DIRECT,
                  object: eq.AnalyticsObjects.WEB_URL
                }
              }
            });
            break
          }
          case "test-mode":
            eF.default.whenInitialized(() => h.authorizeAndSetTestModeApplication(n));
            break;
          case "uninstall": {
            let e = ew.default.getActiveLibraryApplication(n);
            if (null == e) return;
            (0, c.uninstallBranchPrompt)(e.id, e.branchId, eq.AnalyticsLocations.URI_SCHEME)
          }
        }
      })
    }), (0, a.jsx)(r.Redirect, {
      to: eq.Routes.APPLICATION_LIBRARY
    })
  }
}, {
  path: [eq.Routes.GUILD_CREATE],
  render: function() {
    return (0, H.addPostConnectionCallback)(() => P.default.openCreateGuildModal({
      location: "External link"
    })), (0, a.jsx)(r.Redirect, {
      to: eU.default.defaultRoute
    })
  }
}, {
  path: [eq.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      section: n,
      subsection: s
    } = t.params, i = (0, l.parse)(location.search).feature;
    return (0, H.addPostConnectionCallback)(() => Q.openGuildSettingsPickerModal({
      section: (0, z.default)(eq.GuildSettingsSections, n),
      subsection: (0, z.default)(eq.GuildSettingsSubsections, s),
      feature: i
    })), (0, a.jsx)(r.Redirect, {
      to: eU.default.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eq.Routes.SETTINGS(":section", ":subsection?")],
  render: function(e) {
    let {
      location: t
    } = e, n = (0, eM.default)(t.pathname);
    return null != n && (0, H.addPostConnectionCallback)(() => _.default.open(n.section, n.subsection, {
      openWithoutBackstack: !1,
      impressionSource: n.source
    })), (0, a.jsx)(r.Redirect, {
      to: eU.default.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eq.Routes.USER_GUILD_NOTIFICATION_SETTINGS(":guildId")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: s
    } = t.params;
    return (0, H.addPostConnectionCallback)(() => {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("5863"), n.e("29041")]).then(n.bind(n, "751212"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: s
        })
      })
    }), (0, a.jsx)(r.Redirect, {
      to: eq.Routes.CHANNEL(s)
    })
  },
  isSessionRequired: !0
}, {
  path: [eq.Routes.APPLICATION_LIBRARY_INVENTORY],
  render: function() {
    return (0, H.addPostConnectionCallback)(() => _.default.open(eq.UserSettingsSections.INVENTORY)), (0, a.jsx)(r.Redirect, {
      to: eU.default.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eq.Routes.WELCOME(":guildId?", ":channelId?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      channelId: s
    } = t.params;
    (0, et.setNewUser)(eX.NewUserTypes.MARKETING_UNCLAIMED);
    let l = eq.Routes.CHANNEL(n, s);
    return (0, a.jsx)(r.Redirect, {
      to: l
    })
  },
  isSessionRequired: !0
}, {
  path: [eq.Routes.GUILD_EVENT_DETAILS(":guildId?", ":guildEventId")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      guildEventId: s
    } = t.params;
    return (0, H.addPostConnectionCallback)(() => {
      (0, W.openGuildEventDetails)({
        eventId: s
      })
    }), (0, a.jsx)(r.Redirect, {
      to: eq.Routes.CHANNEL(n)
    })
  },
  isSessionRequired: !0
}, {
  path: [eq.Routes.GUILD_SETTINGS(":guildId", ":section?", ":subsection?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      section: s,
      subsection: l
    } = t.params;
    return (0, H.addPostConnectionCallback)(() => {
      K.default.open(n, (0, z.default)(eq.GuildSettingsSections, s), void 0, (0, z.default)(eq.GuildSettingsSubsections, l))
    }), (0, a.jsx)(r.Redirect, {
      to: eq.Routes.CHANNEL(n)
    })
  },
  isSessionRequired: !0,
  isChatRoute: !0
}, {
  path: [eq.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eq.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"), eq.Routes.ACTIVITY, eq.Routes.ACTIVITIES, eq.Routes.ACTIVITIES_HAPPENING_NOW, eq.Routes.ACTIVITY_DETAILS(":applicationId"), eq.Routes.APPLICATION_LIBRARY, eq.Routes.APPLICATION_STORE, eq.Routes.MESSAGE_REQUESTS, eq.Routes.COLLECTIBLES_SHOP, eq.Routes.COLLECTIBLES_SHOP_FULLSCREEN, eq.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), eq.Routes.GUILD_DISCOVERY, eq.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"), eq.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"), eq.Routes.GUILD_BOOSTING_MARKETING(":guildId"), eq.Routes.FEATURE(":feature"), eq.Routes.FAMILY_CENTER],
  render: e1,
  isSessionRequired: !0,
  isChatRoute: !0
}, {
  path: [eq.Routes.APPLICATION_DIRECTORY],
  render: e4,
  isSessionRequired: !0
}];

function e5(e) {
  for (let {
      path: t,
      isChatRoute: n
    }
    of e7) {
    if (!n) continue;
    let a = (0, i.matchPath)(e, {
      path: t
    });
    if (null != a) return a
  }
  return null
}

function e9(e) {
  let {
    channelId: t,
    guildId: n,
    pathname: a
  } = e;
  if (!F.default.isConnected()) return;
  let {
    location: s
  } = (0, eh.getHistory)();
  s.pathname === a && (null == eb.default.getChannel(t) ? (0, eh.replaceWith)(eq.Routes.CHANNEL(n)) : (0, eh.replaceWith)(a))
}
class e6 extends s.PureComponent {
  componentDidMount() {
    ez.default.setZoomFactor(C.default.zoom), e_.default.init(), O.default.initialize(), er.default.initialize(), G.default.initialize(), eP.default.initialize(), w.default.initialize(), eu.default.initialize(), X.default.initialize(), m.default.init(), B.default.init(), k.default.init(), en.default.initialize(), T.default.initialize(), U.default.initialize(), ed.default.initialize(), g.default.initialize(), ex.default.initialize(), ei.default.initialize(), I.default.initialize(), V.default.init(), q.default.init(), eV.default.init(), eW.default.init(), p.default.initialize(), eN.default.init(), eH.default.init(), eO.default.init(), eI.default.initialize(), eg.default.initialize(), eR.default.initialize(), eL.default.init(), b.default.initialize(), S.default.initialize(), eC.default.initialize(), ep.default.initialize(), es.default.initialize(), ea.default.initialize(), el.default.initialize(), M.default.initialize(), Z.default.init({
      hasModalOpen: u.hasAnyModalOpen,
      openModal: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "650233"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }), D.default.init(), J.default.initialize(), ec.default.initialize(), eo.default.initialize(), y.default.initialize(), this.rewriterUnlisten = ef.default.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = ef.default.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    eP.default.terminate(), eu.default.terminate(), er.default.terminate(), O.default.terminate(), g.default.terminate(), ex.default.terminate(), I.default.terminate(), ed.default.terminate(), ei.default.terminate(), eR.default.terminate(), p.default.terminate(), b.default.terminate(), J.default.terminate(), S.default.terminate(), ec.default.terminate(), eC.default.terminate(), ep.default.terminate(), es.default.terminate(), ea.default.terminate(), el.default.terminate(), M.default.terminate(), eo.default.terminate(), y.default.terminate(), j.default.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: n
    } = e;
    ! function(e) {
      if (F.default.isConnected() || F.default.isTryingToConnect()) return;
      let t = ey.default.getToken();
      if (null != t) null != function(e) {
        for (let {
            path: t,
            isSessionRequired: n
          }
          of e7) {
          if (!n) continue;
          let a = (0, i.matchPath)(e, {
            path: t
          });
          if (null != a) return a
        }
        return null
      }(e) && d.default.startSession(t)
    }(t), ! function(e, t) {
      let n = e5(e);
      if (null == n) return;
      let {
        guildId: a,
        channelId: s,
        messageId: r,
        threadId: o
      } = e3(n), u = (0, eE.isValidGuildId)(a), d = (0, eE.isValidChannelId)(s), c = (0, eE.isValidChannelId)(o), h = eB.default.getGuildId(), _ = h !== a;
      if (u && _ && f.default.selectGuild(a), u && d) {
        let n = ek.default.getChannelId(h),
          i = n !== s;
        if (!e$ || _ || i || null != r) {
          e$ = !0, E.default.selectChannel({
            guildId: a,
            channelId: s,
            messageId: r
          });
          let {
            summaryId: e
          } = (0, l.parse)(t);
          null != e && eT.default.setSelectedSummary(s, e)
        }
        if (null != o && c) {
          let e = eD.default.getCurrentSidebarChannelId(n) !== o,
            t = null != eD.default.getGuildSidebarState(a);
          if (null != s && null != o && e) {
            if (t)(0, eh.replaceWith)(eq.Routes.CHANNEL(a, o, r));
            else {
              let e = {
                type: eS.SidebarOpenDetailsType.THREAD
              };
              null != r && (e.initialMessageId = r), em.default.openThreadAsSidebar({
                guildId: a,
                baseChannelId: s,
                channelId: o,
                details: e
              })
            }
          }
        } else null != s && !i && em.default.closeChannelSidebar(s);
        let u = ee.default.getIsOpen();
        if (s === eZ.StaticChannelRoute.ROLE_SUBSCRIPTIONS) $.default.closeSidebar();
        else if (_ && u) {
          let t = null == h && a === eq.ME,
            n = e === eq.Routes.GUILD_DISCOVERY;
          t || n ? $.default.closeSidebar() : $.default.openSidebar()
        } else(i && u || !_ && !i) && $.default.closeSidebar()
      } else {
        var C;
        if (C = e, !e2.some(e => {
            var t;
            return (null === (t = (0, i.matchPath)(C, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, eh.replaceWith)(eU.default.fallbackRoute)
      }
    }(t, n)
  }
  ensureChannelMatchesGuild(e) {
    if (!F.default.isConnected()) return null;
    let {
      pathname: t
    } = e, n = e5(t);
    if (null == n) return null;
    let {
      guildId: a,
      channelId: s,
      threadId: l
    } = e3(n), i = (0, eE.isValidGuildId)(a) && a !== eq.ME && a !== eq.FAVORITES;
    if (null != s && (0, eE.isValidChannelId)(s) && !(0, eZ.isStaticChannelRoute)(s) && i) {
      let n = eb.default.getChannel(s);
      if (null == n) eA.default.loadThread(s).then(() => e9({
        channelId: s,
        guildId: a,
        pathname: t
      }));
      else if (n.guild_id !== a) return {
        path: eq.Routes.CHANNEL(a),
        state: e.state
      };
      if (null != l) {
        if (!((0, eE.isValidChannelId)(l) && !(0, eZ.isStaticChannelRoute)(s))) return null;
        let n = eb.default.getChannel(l);
        if (null == n) eA.default.loadThread(l).then(() => e9({
          channelId: l,
          guildId: a,
          pathname: t
        }));
        else if ((null == n ? void 0 : n.parent_id) !== s) return em.default.closeChannelSidebar(s), {
          path: eq.Routes.CHANNEL(a, s),
          state: e.state
        }
      }
    }
    return null
  }
  render() {
    return (0, a.jsxs)(s.Fragment, {
      children: [(0, a.jsxs)(r.Switch, {
        children: [(0, a.jsx)(r.Redirect, {
          exact: !0,
          from: "/channels",
          to: "/"
        }), e7.map(e => {
          let {
            path: t,
            render: n
          } = e;
          return (0, a.jsx)(r.Route, {
            path: t,
            render: n
          }, t[0])
        }), (0, a.jsx)(r.Redirect, {
          to: "/"
        })]
      }), (0, a.jsx)(x.default, {})]
    })
  }
  constructor(...e) {
    super(...e), eJ(this, "historyUnlisten", () => {}), eJ(this, "rewriterUnlisten", () => {})
  }
}
t.default = e6