"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("593473"),
  i = a("266067"),
  r = a("613828"),
  o = a("442837"),
  u = a("481060"),
  d = a("893776"),
  c = a("943094"),
  f = a("749210"),
  E = a("287734"),
  h = a("401430"),
  _ = a("230711"),
  C = a("607070"),
  m = a("627845"),
  S = a("185666"),
  p = a("503737"),
  I = a("513202"),
  g = a("318891"),
  T = a("687751"),
  A = a("912471"),
  N = a("100527"),
  v = a("74438"),
  R = a("753450"),
  L = a("675869"),
  O = a("77987"),
  M = a("679891"),
  P = a("491575"),
  x = a("561345"),
  y = a("314533"),
  D = a("935347"),
  b = a("560067"),
  U = a("823169"),
  j = a("620360"),
  G = a("96051"),
  w = a("750995"),
  k = a("696287"),
  B = a("408026"),
  F = a("763916"),
  H = a("306721"),
  V = a("531551"),
  Y = a("38618"),
  W = a("972830"),
  K = a("981283"),
  z = a("584233"),
  q = a("15274"),
  Q = a("434404"),
  Z = a("543842"),
  X = a("879064"),
  J = a("315964"),
  $ = a("495784"),
  ee = a("975533"),
  et = a("377400"),
  ea = a("285865"),
  en = a("659971"),
  es = a("929809"),
  el = a("122333"),
  ei = a("960275"),
  er = a("818765"),
  eo = a("678492"),
  eu = a("269089"),
  ed = a("380570"),
  ec = a("837689"),
  ef = a("367207"),
  eE = a("489977"),
  eh = a("329557"),
  e_ = a("304445"),
  eC = a("893607"),
  em = a("703656"),
  eS = a("298969"),
  ep = a("719256"),
  eI = a("6025"),
  eg = a("897473"),
  eT = a("377368"),
  eA = a("262702"),
  eN = a("639033"),
  ev = a("479313"),
  eR = a("911560"),
  eL = a("703016"),
  eO = a("171368"),
  eM = a("429974"),
  eP = a("332754"),
  ex = a("507468"),
  ey = a("357269"),
  eD = a("282506"),
  eb = a("444961"),
  eU = a("314897"),
  ej = a("433355"),
  eG = a("592125"),
  ew = a("896797"),
  ek = a("430824"),
  eB = a("819640"),
  eF = a("283595"),
  eH = a("944486"),
  eV = a("914010"),
  eY = a("695103"),
  eW = a("241890"),
  eK = a("396296"),
  ez = a("897607"),
  eq = a("417363"),
  eQ = a("900974"),
  eZ = a("358085"),
  eX = a("998502"),
  eJ = a("346329"),
  e$ = a("981631"),
  e0 = a("272242"),
  e1 = a("176505"),
  e2 = a("701476");

function e4(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
a("117240"), a("801077"), a("967368"), a("272053"), a("974180"), a("574254"), a("551428"), a("55563"), a("455173"), a("882029"), a("959457"), a("653255"), a("663389"), a("25990"), a("778825"), a("999382"), a("388610"), a("533947"), a("277053"), a("371398"), a("141233"), a("471073"), a("628566");
let e3 = !1;
(0, A.initSessionHeartbeatScheduler)(), o.default.initialize(), eS.default.loadServer(), eZ.isPlatformEmbedded && (eX.default.on("USER_SETTINGS_OPEN", () => {
  !eB.default.getLayers().includes(e$.Layers.USER_SETTINGS) && _.default.open(e$.UserSettingsSections.ACCOUNT)
}), eX.default.on("LAUNCH_APPLICATION", (e, t) => {
  let a = eF.default.getActiveLibraryApplication(t);
  eJ.playApplication(t, a, {
    analyticsParams: {
      location: {
        page: e$.AnalyticsPages.DIRECT,
        object: e$.AnalyticsObjects.WEB_URL
      }
    }
  })
}));
let e7 = o.default.connectStores([Y.default, ew.default, eU.default], () => ({
    isConnected: Y.default.isConnected(),
    defaultRoute: ew.default.defaultRoute,
    defaultRouteFallback: ew.default.fallbackRoute,
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
        token: a,
        defaultRouteFallback: s
      } = this.props;
      if (null == a) return (0, n.jsx)(r.Redirect, {
        to: e$.Routes.DEFAULT_LOGGED_OUT
      });
      if (e) {
        let e = ts(t);
        return null == e || (e.params.guildId === e$.ME || null != ek.default.getGuild(e.params.guildId)) && null != eG.default.getChannel(e.params.channelId) ? (0, n.jsx)(r.Redirect, {
          to: t
        }) : (0, n.jsx)(r.Redirect, {
          to: s
        })
      }
      return null
    }
  }),
  e5 = (0, O.makeAuthenticated)(P.default, null, {
    passProps: !1
  }),
  e9 = (0, O.makeAuthenticated)(function() {
    return (0, n.jsx)(v.default, {})
  }),
  e6 = (0, O.makeAuthenticated)(function(e) {
    let {
      match: t
    } = e, {
      applicationId: a,
      section: s
    } = t.params, l = (0, Z.default)(e0.ApplicationDirectoryProfileSections, s);
    return (0, n.jsx)(R.default, {
      applicationId: a,
      initialSection: l
    })
  }),
  e8 = (0, O.makeAuthenticated)(function() {
    return (0, n.jsx)(L.default, {})
  }),
  te = [e$.Routes.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(e1.StaticChannelRoutes).map(e => e$.Routes.CHANNEL(":guildId", e))];

function tt(e) {
  let {
    guildId: t,
    channelId: a = null,
    messageId: n = null,
    threadId: s = null
  } = e.params;
  return {
    guildId: null != t ? t : e$.ME,
    channelId: a,
    messageId: n,
    threadId: s
  }
}
let ta = [{
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
  tn = [{
    path: [e$.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
    render(e) {
      let {
        match: t
      } = e;
      return (0, n.jsx)(e7, {
        match: t
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APP],
    render: () => (0, n.jsx)(e7, {}),
    isSessionRequired: !0
  }, {
    path: [e$.Routes.USERS(":id")],
    render: function(e) {
      let {
        match: t,
        location: a
      } = e, {
        friend_token: s
      } = (0, l.parse)(a.search), {
        id: i
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => (0, eO.openUserProfileModal)({
        userId: i,
        guildId: e$.ME,
        friendToken: s,
        sourceAnalyticsLocations: [N.default.URI_SCHEME],
        analyticsLocation: {
          section: e$.AnalyticsSections.DIRECT_ROUTE_ACCESS
        }
      })), (0, n.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    }
  }, {
    path: [e$.Routes.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
    render: function(e) {
      let {
        match: t
      } = e, {
        gameId: a,
        action: s
      } = t.params;
      return eq.default.whenInitialized(() => {
        eF.default.whenInitialized(() => {
          switch (s) {
            case "launch": {
              let e = eF.default.getActiveLibraryApplication(a);
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
              eY.default.whenInitialized(() => h.authorizeAndSetTestModeApplication(a));
              break;
            case "uninstall": {
              let e = eF.default.getActiveLibraryApplication(a);
              if (null == e) return;
              (0, c.uninstallBranchPrompt)(e.id, e.branchId, e$.AnalyticsLocations.URI_SCHEME)
            }
          }
        })
      }), (0, n.jsx)(r.Redirect, {
        to: e$.Routes.APPLICATION_LIBRARY
      })
    }
  }, {
    path: [e$.Routes.GUILD_CREATE],
    render: function() {
      return (0, W.addPostConnectionCallback)(() => b.default.openCreateGuildModal({
        location: "External link"
      })), (0, n.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    }
  }, {
    path: [e$.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        section: a,
        subsection: s
      } = t.params, i = (0, l.parse)(location.search).feature;
      return (0, W.addPostConnectionCallback)(() => X.openGuildSettingsPickerModal({
        section: (0, Z.default)(e$.GuildSettingsSections, a),
        subsection: (0, Z.default)(e$.GuildSettingsSubsections, s),
        feature: i
      })), (0, n.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.SETTINGS(":section", ":subsection?")],
    render: function(e) {
      let {
        location: t
      } = e, a = (0, ey.default)(t.pathname);
      return null != a && (0, W.addPostConnectionCallback)(() => _.default.open(a.section, a.subsection, {
        openWithoutBackstack: !1,
        impressionSource: a.source
      })), (0, n.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
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
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("29041")]).then(a.bind(a, "751212"));
          return t => (0, n.jsx)(e, {
            ...t,
            guildId: s
          })
        })
      }), (0, n.jsx)(r.Redirect, {
        to: e$.Routes.CHANNEL(s)
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_LIBRARY_INVENTORY],
    render: function() {
      return (0, W.addPostConnectionCallback)(() => _.default.open(e$.UserSettingsSections.INVENTORY)), (0, n.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.WELCOME(":guildId?", ":channelId?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: a,
        channelId: s
      } = t.params;
      (0, es.setNewUser)(e2.NewUserTypes.MARKETING_UNCLAIMED);
      let l = e$.Routes.CHANNEL(a, s);
      return (0, n.jsx)(r.Redirect, {
        to: l
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.GUILD_EVENT_DETAILS(":guildId?", ":guildEventId")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: a,
        guildEventId: s
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
        (0, q.openGuildEventDetails)({
          eventId: s
        })
      }), (0, n.jsx)(r.Redirect, {
        to: e$.Routes.CHANNEL(a)
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.GUILD_SETTINGS(":guildId", ":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: a,
        section: s,
        subsection: l
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
        Q.default.open(a, (0, Z.default)(e$.GuildSettingsSections, s), void 0, (0, Z.default)(e$.GuildSettingsSubsections, l))
      }), (0, n.jsx)(r.Redirect, {
        to: e$.Routes.CHANNEL(a)
      })
    },
    isSessionRequired: !0,
    isChatRoute: !0
  }, {
    path: [e$.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), e$.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"), e$.Routes.ACTIVITY, e$.Routes.ACTIVITIES, e$.Routes.ACTIVITIES_HAPPENING_NOW, e$.Routes.ACTIVITY_DETAILS(":applicationId"), e$.Routes.APPLICATION_LIBRARY, e$.Routes.APPLICATION_STORE, e$.Routes.MESSAGE_REQUESTS, e$.Routes.COLLECTIBLES_SHOP, e$.Routes.COLLECTIBLES_SHOP_FULLSCREEN, e$.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), e$.Routes.GUILD_DISCOVERY, e$.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"), e$.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"), e$.Routes.GUILD_BOOSTING_MARKETING(":guildId"), e$.Routes.FEATURE(":feature"), e$.Routes.FAMILY_CENTER],
    render: e5,
    isSessionRequired: !0,
    isChatRoute: !0
  }, ...ta];

function ts(e) {
  for (let {
      path: t,
      isChatRoute: a
    }
    of tn) {
    if (!a) continue;
    let n = (0, i.matchPath)(e, {
      path: t
    });
    if (null != n) return n
  }
  return null
}

function tl(e) {
  let {
    channelId: t,
    guildId: a,
    pathname: n
  } = e;
  if (!Y.default.isConnected()) return;
  let {
    location: s
  } = (0, em.getHistory)();
  s.pathname === n && (null == eG.default.getChannel(t) ? (0, em.replaceWith)(e$.Routes.CHANNEL(a)) : (0, em.replaceWith)(n))
}
class ti extends s.PureComponent {
  componentDidMount() {
    x.default.initialize(), eX.default.setZoomFactor(C.default.zoom), eS.default.init(), M.default.initialize(), ed.default.initialize(), B.default.initialize(), eb.default.initialize(), F.default.initialize(), ef.default.initialize(), ee.default.initialize(), m.default.init(), V.default.init(), H.default.init(), el.default.initialize(), T.default.initialize(), w.default.initialize(), eE.default.initialize(), g.default.initialize(), eD.default.initialize(), eu.default.initialize(), I.default.initialize(), K.default.init(), J.default.init(), ez.default.init(), eQ.default.init(), p.default.initialize(), eL.default.init(), eK.default.init(), eW.default.init(), eP.default.init(), eA.default.initialize(), eN.default.initialize(), eM.default.initialize(), ex.default.init(), G.default.initialize(), S.default.initialize(), ep.default.initialize(), eT.default.initialize(), er.default.initialize(), ei.default.initialize(), eo.default.initialize(), y.default.initialize(), $.default.init({
      hasModalOpen: u.hasAnyModalOpen,
      openModal: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(a.bind(a, "650233"));
        return t => (0, n.jsx)(e, {
          ...t
        })
      })
    }), j.default.init(), et.default.initialize(), eh.default.initialize(), ec.default.initialize(), U.default.initialize(), this.rewriterUnlisten = e_.default.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = e_.default.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    x.default.terminate(), eb.default.terminate(), ef.default.terminate(), ed.default.terminate(), M.default.terminate(), g.default.terminate(), eD.default.terminate(), I.default.terminate(), eE.default.terminate(), eu.default.terminate(), eM.default.terminate(), p.default.terminate(), G.default.terminate(), et.default.terminate(), S.default.terminate(), eh.default.terminate(), ep.default.terminate(), eT.default.terminate(), er.default.terminate(), ei.default.terminate(), eo.default.terminate(), y.default.terminate(), ec.default.terminate(), U.default.terminate(), k.default.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: a
    } = e;
    ! function(e) {
      if (Y.default.isConnected() || Y.default.isTryingToConnect()) return;
      let t = eU.default.getToken();
      if (null != t) null != function(e) {
        for (let {
            path: t,
            isSessionRequired: a
          }
          of tn) {
          if (!a) continue;
          let n = (0, i.matchPath)(e, {
            path: t
          });
          if (null != n) return n
        }
        return null
      }(e) && d.default.startSession(t)
    }(t), ! function(e, t) {
      let a = ts(e);
      if (null == a) return;
      let {
        guildId: n,
        channelId: s,
        messageId: r,
        threadId: o
      } = tt(a), u = (0, eC.isValidGuildId)(n), d = (0, eC.isValidChannelId)(s), c = (0, eC.isValidChannelId)(o), h = eV.default.getGuildId(), _ = h !== n;
      if (u && _ && f.default.selectGuild(n), u && d) {
        let a = eH.default.getChannelId(h),
          i = a !== s;
        if (!e3 || _ || i || null != r) {
          e3 = !0, E.default.selectChannel({
            guildId: n,
            channelId: s,
            messageId: r
          });
          let {
            summaryId: e
          } = (0, l.parse)(t);
          null != e && ev.default.setSelectedSummary(s, e)
        }
        if (null != o && c) {
          let e = ej.default.getCurrentSidebarChannelId(a) !== o,
            t = null != ej.default.getGuildSidebarState(n);
          if (null != s && null != o && e) {
            if (t)(0, em.replaceWith)(e$.Routes.CHANNEL(n, o, r));
            else {
              let e = {
                type: eg.SidebarOpenDetailsType.THREAD
              };
              null != r && (e.initialMessageId = r), eI.default.openThreadAsSidebar({
                guildId: n,
                baseChannelId: s,
                channelId: o,
                details: e
              })
            }
          }
        } else null != s && !i && eI.default.closeChannelSidebar(s);
        let u = en.default.getIsOpen();
        if (s === e1.StaticChannelRoute.ROLE_SUBSCRIPTIONS) ea.default.closeSidebar();
        else if (_ && u) {
          let t = null == h && n === e$.ME,
            a = e === e$.Routes.GUILD_DISCOVERY;
          t || a ? ea.default.closeSidebar() : ea.default.openSidebar()
        } else(i && u || !_ && !i) && ea.default.closeSidebar()
      } else {
        var C;
        if (C = e, !te.some(e => {
            var t;
            return (null === (t = (0, i.matchPath)(C, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, em.replaceWith)(ew.default.fallbackRoute)
      }
    }(t, a)
  }
  ensureChannelMatchesGuild(e) {
    if (!Y.default.isConnected()) return null;
    let {
      pathname: t
    } = e, a = ts(t);
    if (null == a) return null;
    let {
      guildId: n,
      channelId: s,
      threadId: l
    } = tt(a), i = (0, eC.isValidGuildId)(n) && n !== e$.ME && n !== e$.FAVORITES;
    if (null != s && (0, eC.isValidChannelId)(s) && !(0, e1.isStaticChannelRoute)(s) && i) {
      let a = eG.default.getChannel(s);
      if (null == a) eR.default.loadThread(s).then(() => tl({
        channelId: s,
        guildId: n,
        pathname: t
      }));
      else if (a.guild_id !== n) return {
        path: e$.Routes.CHANNEL(n),
        state: e.state
      };
      if (null != l) {
        if (!((0, eC.isValidChannelId)(l) && !(0, e1.isStaticChannelRoute)(s))) return null;
        let a = eG.default.getChannel(l);
        if (null == a) eR.default.loadThread(l).then(() => tl({
          channelId: l,
          guildId: n,
          pathname: t
        }));
        else if ((null == a ? void 0 : a.parent_id) !== s) return eI.default.closeChannelSidebar(s), {
          path: e$.Routes.CHANNEL(n, s),
          state: e.state
        }
      }
    }
    return null
  }
  render() {
    return (0, n.jsxs)(s.Fragment, {
      children: [(0, n.jsxs)(r.Switch, {
        children: [(0, n.jsx)(r.Redirect, {
          exact: !0,
          from: "/channels",
          to: "/"
        }), tn.map(e => {
          let {
            path: t,
            render: a
          } = e;
          return (0, n.jsx)(r.Route, {
            path: t,
            render: a
          }, t[0])
        }), (0, n.jsx)(r.Redirect, {
          to: "/"
        })]
      }), (0, n.jsx)(D.default, {})]
    })
  }
  constructor(...e) {
    super(...e), e4(this, "historyUnlisten", () => {}), e4(this, "rewriterUnlisten", () => {})
  }
}
t.default = ti