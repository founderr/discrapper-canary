"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("593473"),
  l = n("266067"),
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
  g = n("513202"),
  I = n("318891"),
  T = n("687751"),
  A = n("912471"),
  N = n("100527"),
  v = n("74438"),
  R = n("753450"),
  O = n("675869"),
  L = n("77987"),
  M = n("679891"),
  y = n("491575"),
  P = n("561345"),
  x = n("314533"),
  D = n("935347"),
  b = n("560067"),
  U = n("823169"),
  j = n("620360"),
  G = n("96051"),
  k = n("750995"),
  w = n("696287"),
  F = n("408026"),
  B = n("763916"),
  H = n("306721"),
  V = n("531551"),
  Y = n("38618"),
  W = n("972830"),
  K = n("981283"),
  z = n("584233"),
  q = n("15274"),
  Q = n("434404"),
  Z = n("543842"),
  X = n("879064"),
  J = n("315964"),
  $ = n("495784"),
  ee = n("975533"),
  et = n("377400"),
  en = n("285865"),
  ea = n("659971"),
  es = n("929809"),
  ei = n("122333"),
  el = n("960275"),
  er = n("818765"),
  eo = n("678492"),
  eu = n("269089"),
  ed = n("380570"),
  ec = n("837689"),
  ef = n("367207"),
  eE = n("489977"),
  eh = n("329557"),
  e_ = n("304445"),
  eC = n("893607"),
  em = n("703656"),
  eS = n("298969"),
  ep = n("719256"),
  eg = n("6025"),
  eI = n("897473"),
  eT = n("377368"),
  eA = n("262702"),
  eN = n("639033"),
  ev = n("479313"),
  eR = n("911560"),
  eO = n("703016"),
  eL = n("171368"),
  eM = n("429974"),
  ey = n("332754"),
  eP = n("507468"),
  ex = n("357269"),
  eD = n("282506"),
  eb = n("444961"),
  eU = n("314897"),
  ej = n("433355"),
  eG = n("592125"),
  ek = n("896797"),
  ew = n("430824"),
  eF = n("819640"),
  eB = n("283595"),
  eH = n("944486"),
  eV = n("914010"),
  eY = n("695103"),
  eW = n("241890"),
  eK = n("396296"),
  ez = n("897607"),
  eq = n("417363"),
  eQ = n("900974"),
  eZ = n("358085"),
  eX = n("998502"),
  eJ = n("346329"),
  e$ = n("981631"),
  e0 = n("272242"),
  e1 = n("176505"),
  e4 = n("701476");

function e2(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n("117240"), n("801077"), n("967368"), n("272053"), n("974180"), n("574254"), n("551428"), n("55563"), n("455173"), n("882029"), n("959457"), n("653255"), n("663389"), n("25990"), n("778825"), n("999382"), n("388610"), n("533947"), n("277053"), n("371398"), n("141233"), n("471073"), n("628566");
let e3 = !1;
(0, A.initSessionHeartbeatScheduler)(), o.default.initialize(), eS.default.loadServer(), eZ.isPlatformEmbedded && (eX.default.on("USER_SETTINGS_OPEN", () => {
  !eF.default.getLayers().includes(e$.Layers.USER_SETTINGS) && _.default.open(e$.UserSettingsSections.ACCOUNT)
}), eX.default.on("LAUNCH_APPLICATION", (e, t) => {
  let n = eB.default.getActiveLibraryApplication(t);
  eJ.playApplication(t, n, {
    analyticsParams: {
      location: {
        page: e$.AnalyticsPages.DIRECT,
        object: e$.AnalyticsObjects.WEB_URL
      }
    }
  })
}));
let e7 = o.default.connectStores([Y.default, ek.default, eU.default], () => ({
    isConnected: Y.default.isConnected(),
    defaultRoute: ek.default.defaultRoute,
    defaultRouteFallback: ek.default.fallbackRoute,
    token: eU.default.getToken()
  }))(class extends s.Component {
    componentDidMount() {
      let {
        match: e
      } = this.props;
      null != e && null != e.params.inviteCode && (0, z.doGuildOnboardingForPostAuthInvite)({
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
        to: e$.Routes.DEFAULT_LOGGED_OUT
      });
      if (e) {
        let e = ts(t);
        return null == e || (e.params.guildId === e$.ME || null != ew.default.getGuild(e.params.guildId)) && null != eG.default.getChannel(e.params.channelId) ? (0, a.jsx)(r.Redirect, {
          to: t
        }) : (0, a.jsx)(r.Redirect, {
          to: s
        })
      }
      return null
    }
  }),
  e5 = (0, L.makeAuthenticated)(y.default, null, {
    passProps: !1
  }),
  e9 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(v.default, {})
  }),
  e6 = (0, L.makeAuthenticated)(function(e) {
    let {
      match: t
    } = e, {
      applicationId: n,
      section: s
    } = t.params, i = (0, Z.default)(e0.ApplicationDirectoryProfileSections, s);
    return (0, a.jsx)(R.default, {
      applicationId: n,
      initialSection: i
    })
  }),
  e8 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(O.default, {})
  }),
  te = [e$.Routes.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(e1.StaticChannelRoutes).map(e => e$.Routes.CHANNEL(":guildId", e))];

function tt(e) {
  let {
    guildId: t,
    channelId: n = null,
    messageId: a = null,
    threadId: s = null
  } = e.params;
  return {
    guildId: null != t ? t : e$.ME,
    channelId: n,
    messageId: a,
    threadId: s
  }
}
let tn = [{
    path: [e$.Routes.APPLICATION_DIRECTORY_SEARCH],
    render: e8,
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?")],
    render: e6,
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_DIRECTORY],
    render: e9,
    isSessionRequired: !0
  }],
  ta = [{
    path: [e$.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
    render(e) {
      let {
        match: t
      } = e;
      return (0, a.jsx)(e7, {
        match: t
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APP],
    render: () => (0, a.jsx)(e7, {}),
    isSessionRequired: !0
  }, {
    path: [e$.Routes.USERS(":id")],
    render: function(e) {
      let {
        match: t,
        location: n
      } = e, {
        friend_token: s
      } = (0, i.parse)(n.search), {
        id: l
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => (0, eL.openUserProfileModal)({
        userId: l,
        guildId: e$.ME,
        friendToken: s,
        sourceAnalyticsLocations: [N.default.URI_SCHEME],
        analyticsLocation: {
          section: e$.AnalyticsSections.DIRECT_ROUTE_ACCESS
        }
      })), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    }
  }, {
    path: [e$.Routes.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
    render: function(e) {
      let {
        match: t
      } = e, {
        gameId: n,
        action: s
      } = t.params;
      return eq.default.whenInitialized(() => {
        eB.default.whenInitialized(() => {
          switch (s) {
            case "launch": {
              let e = eB.default.getActiveLibraryApplication(n);
              if (null == e) return;
              eJ.playApplication(e.id, e, {
                analyticsParams: {
                  location: {
                    page: e$.AnalyticsPages.DIRECT,
                    object: e$.AnalyticsObjects.WEB_URL
                  }
                }
              });
              break
            }
            case "test-mode":
              eY.default.whenInitialized(() => h.authorizeAndSetTestModeApplication(n));
              break;
            case "uninstall": {
              let e = eB.default.getActiveLibraryApplication(n);
              if (null == e) return;
              (0, c.uninstallBranchPrompt)(e.id, e.branchId, e$.AnalyticsLocations.URI_SCHEME)
            }
          }
        })
      }), (0, a.jsx)(r.Redirect, {
        to: e$.Routes.APPLICATION_LIBRARY
      })
    }
  }, {
    path: [e$.Routes.GUILD_CREATE],
    render: function() {
      return (0, W.addPostConnectionCallback)(() => b.default.openCreateGuildModal({
        location: "External link"
      })), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    }
  }, {
    path: [e$.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        section: n,
        subsection: s
      } = t.params, l = (0, i.parse)(location.search).feature;
      return (0, W.addPostConnectionCallback)(() => X.openGuildSettingsPickerModal({
        section: (0, Z.default)(e$.GuildSettingsSections, n),
        subsection: (0, Z.default)(e$.GuildSettingsSubsections, s),
        feature: l
      })), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.SETTINGS(":section", ":subsection?")],
    render: function(e) {
      let {
        location: t
      } = e, n = (0, ex.default)(t.pathname);
      return null != n && (0, W.addPostConnectionCallback)(() => _.default.open(n.section, n.subsection, {
        openWithoutBackstack: !1,
        impressionSource: n.source
      })), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.USER_GUILD_NOTIFICATION_SETTINGS(":guildId")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: s
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
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
        to: e$.Routes.CHANNEL(s)
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_LIBRARY_INVENTORY],
    render: function() {
      return (0, W.addPostConnectionCallback)(() => _.default.open(e$.UserSettingsSections.INVENTORY)), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.WELCOME(":guildId?", ":channelId?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        channelId: s
      } = t.params;
      (0, es.setNewUser)(e4.NewUserTypes.MARKETING_UNCLAIMED);
      let i = e$.Routes.CHANNEL(n, s);
      return (0, a.jsx)(r.Redirect, {
        to: i
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.GUILD_EVENT_DETAILS(":guildId?", ":guildEventId")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        guildEventId: s
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
        (0, q.openGuildEventDetails)({
          eventId: s
        })
      }), (0, a.jsx)(r.Redirect, {
        to: e$.Routes.CHANNEL(n)
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.GUILD_SETTINGS(":guildId", ":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        section: s,
        subsection: i
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
        Q.default.open(n, (0, Z.default)(e$.GuildSettingsSections, s), void 0, (0, Z.default)(e$.GuildSettingsSubsections, i))
      }), (0, a.jsx)(r.Redirect, {
        to: e$.Routes.CHANNEL(n)
      })
    },
    isSessionRequired: !0,
    isChatRoute: !0
  }, {
    path: [e$.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), e$.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"), e$.Routes.ACTIVITY, e$.Routes.ACTIVITIES, e$.Routes.ACTIVITIES_HAPPENING_NOW, e$.Routes.ACTIVITY_DETAILS(":applicationId"), e$.Routes.APPLICATION_LIBRARY, e$.Routes.APPLICATION_STORE, e$.Routes.MESSAGE_REQUESTS, e$.Routes.COLLECTIBLES_SHOP, e$.Routes.COLLECTIBLES_SHOP_FULLSCREEN, e$.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), e$.Routes.GUILD_DISCOVERY, e$.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"), e$.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"), e$.Routes.GUILD_BOOSTING_MARKETING(":guildId"), e$.Routes.FEATURE(":feature"), e$.Routes.FAMILY_CENTER],
    render: e5,
    isSessionRequired: !0,
    isChatRoute: !0
  }, ...tn];

function ts(e) {
  for (let {
      path: t,
      isChatRoute: n
    }
    of ta) {
    if (!n) continue;
    let a = (0, l.matchPath)(e, {
      path: t
    });
    if (null != a) return a
  }
  return null
}

function ti(e) {
  let {
    channelId: t,
    guildId: n,
    pathname: a
  } = e;
  if (!Y.default.isConnected()) return;
  let {
    location: s
  } = (0, em.getHistory)();
  s.pathname === a && (null == eG.default.getChannel(t) ? (0, em.replaceWith)(e$.Routes.CHANNEL(n)) : (0, em.replaceWith)(a))
}
class tl extends s.PureComponent {
  componentDidMount() {
    P.default.initialize(), eX.default.setZoomFactor(C.default.zoom), eS.default.init(), M.default.initialize(), ed.default.initialize(), F.default.initialize(), eb.default.initialize(), B.default.initialize(), ef.default.initialize(), ee.default.initialize(), m.default.init(), V.default.init(), H.default.init(), ei.default.initialize(), T.default.initialize(), k.default.initialize(), eE.default.initialize(), I.default.initialize(), eD.default.initialize(), eu.default.initialize(), g.default.initialize(), K.default.init(), J.default.init(), ez.default.init(), eQ.default.init(), p.default.initialize(), eO.default.init(), eK.default.init(), eW.default.init(), ey.default.init(), eA.default.initialize(), eN.default.initialize(), eM.default.initialize(), eP.default.init(), G.default.initialize(), S.default.initialize(), ep.default.initialize(), eT.default.initialize(), er.default.initialize(), el.default.initialize(), eo.default.initialize(), x.default.initialize(), $.default.init({
      hasModalOpen: u.hasAnyModalOpen,
      openModal: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "650233"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }), j.default.init(), et.default.initialize(), eh.default.initialize(), ec.default.initialize(), U.default.initialize(), this.rewriterUnlisten = e_.default.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = e_.default.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    P.default.terminate(), eb.default.terminate(), ef.default.terminate(), ed.default.terminate(), M.default.terminate(), I.default.terminate(), eD.default.terminate(), g.default.terminate(), eE.default.terminate(), eu.default.terminate(), eM.default.terminate(), p.default.terminate(), G.default.terminate(), et.default.terminate(), S.default.terminate(), eh.default.terminate(), ep.default.terminate(), eT.default.terminate(), er.default.terminate(), el.default.terminate(), eo.default.terminate(), x.default.terminate(), ec.default.terminate(), U.default.terminate(), w.default.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: n
    } = e;
    ! function(e) {
      if (Y.default.isConnected() || Y.default.isTryingToConnect()) return;
      let t = eU.default.getToken();
      if (null != t) null != function(e) {
        for (let {
            path: t,
            isSessionRequired: n
          }
          of ta) {
          if (!n) continue;
          let a = (0, l.matchPath)(e, {
            path: t
          });
          if (null != a) return a
        }
        return null
      }(e) && d.default.startSession(t)
    }(t), ! function(e, t) {
      let n = ts(e);
      if (null == n) return;
      let {
        guildId: a,
        channelId: s,
        messageId: r,
        threadId: o
      } = tt(n), u = (0, eC.isValidGuildId)(a), d = (0, eC.isValidChannelId)(s), c = (0, eC.isValidChannelId)(o), h = eV.default.getGuildId(), _ = h !== a;
      if (u && _ && f.default.selectGuild(a), u && d) {
        let n = eH.default.getChannelId(h),
          l = n !== s;
        if (!e3 || _ || l || null != r) {
          e3 = !0, E.default.selectChannel({
            guildId: a,
            channelId: s,
            messageId: r
          });
          let {
            summaryId: e
          } = (0, i.parse)(t);
          null != e && ev.default.setSelectedSummary(s, e)
        }
        if (null != o && c) {
          let e = ej.default.getCurrentSidebarChannelId(n) !== o,
            t = null != ej.default.getGuildSidebarState(a);
          if (null != s && null != o && e) {
            if (t)(0, em.replaceWith)(e$.Routes.CHANNEL(a, o, r));
            else {
              let e = {
                type: eI.SidebarOpenDetailsType.THREAD
              };
              null != r && (e.initialMessageId = r), eg.default.openThreadAsSidebar({
                guildId: a,
                baseChannelId: s,
                channelId: o,
                details: e
              })
            }
          }
        } else null != s && !l && eg.default.closeChannelSidebar(s);
        let u = ea.default.getIsOpen();
        if (s === e1.StaticChannelRoute.ROLE_SUBSCRIPTIONS) en.default.closeSidebar();
        else if (_ && u) {
          let t = null == h && a === e$.ME,
            n = e === e$.Routes.GUILD_DISCOVERY;
          t || n ? en.default.closeSidebar() : en.default.openSidebar()
        } else(l && u || !_ && !l) && en.default.closeSidebar()
      } else {
        var C;
        if (C = e, !te.some(e => {
            var t;
            return (null === (t = (0, l.matchPath)(C, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, em.replaceWith)(ek.default.fallbackRoute)
      }
    }(t, n)
  }
  ensureChannelMatchesGuild(e) {
    if (!Y.default.isConnected()) return null;
    let {
      pathname: t
    } = e, n = ts(t);
    if (null == n) return null;
    let {
      guildId: a,
      channelId: s,
      threadId: i
    } = tt(n), l = (0, eC.isValidGuildId)(a) && a !== e$.ME && a !== e$.FAVORITES;
    if (null != s && (0, eC.isValidChannelId)(s) && !(0, e1.isStaticChannelRoute)(s) && l) {
      let n = eG.default.getChannel(s);
      if (null == n) eR.default.loadThread(s).then(() => ti({
        channelId: s,
        guildId: a,
        pathname: t
      }));
      else if (n.guild_id !== a) return {
        path: e$.Routes.CHANNEL(a),
        state: e.state
      };
      if (null != i) {
        if (!((0, eC.isValidChannelId)(i) && !(0, e1.isStaticChannelRoute)(s))) return null;
        let n = eG.default.getChannel(i);
        if (null == n) eR.default.loadThread(i).then(() => ti({
          channelId: i,
          guildId: a,
          pathname: t
        }));
        else if ((null == n ? void 0 : n.parent_id) !== s) return eg.default.closeChannelSidebar(s), {
          path: e$.Routes.CHANNEL(a, s),
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
        }), ta.map(e => {
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
      }), (0, a.jsx)(D.default, {})]
    })
  }
  constructor(...e) {
    super(...e), e2(this, "historyUnlisten", () => {}), e2(this, "rewriterUnlisten", () => {})
  }
}
t.default = tl