n.r(t), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(593473),
  a = n(266067),
  r = n(442837),
  o = n(481060),
  c = n(893776),
  u = n(943094),
  d = n(749210),
  E = n(287734),
  h = n(401430),
  _ = n(230711),
  I = n(607070),
  m = n(627845),
  T = n(185666),
  g = n(503737),
  p = n(513202),
  N = n(318891),
  S = n(687751),
  C = n(912471),
  A = n(100527),
  f = n(838134),
  Z = n(77987),
  L = n(679891),
  O = n(491575),
  v = n(314533),
  R = n(935347),
  P = n(560067),
  x = n(823169),
  M = n(620360),
  D = n(96051),
  b = n(750995),
  y = n(696287),
  j = n(408026),
  U = n(763916),
  G = n(306721),
  w = n(531551),
  k = n(38618),
  B = n(972830),
  H = n(981283),
  V = n(584233),
  F = n(15274),
  Y = n(434404),
  z = n(543842),
  W = n(879064),
  K = n(315964),
  q = n(495784),
  Q = n(975533),
  X = n(377400),
  J = n(285865),
  $ = n(659971),
  ee = n(929809),
  et = n(122333),
  en = n(960275),
  es = n(818765),
  ei = n(678492),
  el = n(269089),
  ea = n(380570),
  er = n(837689),
  eo = n(367207),
  ec = n(489977),
  eu = n(329557),
  ed = n(304445),
  eE = n(893607),
  eh = n(703656),
  e_ = n(298969),
  eI = n(719256),
  em = n(6025),
  eT = n(897473),
  eg = n(377368),
  ep = n(262702),
  eN = n(639033),
  eS = n(479313),
  eC = n(911560),
  eA = n(703016),
  ef = n(171368),
  eZ = n(429974),
  eL = n(332754),
  eO = n(507468),
  ev = n(357269),
  eR = n(282506),
  eP = n(444961),
  ex = n(314897),
  eM = n(433355),
  eD = n(592125),
  eb = n(896797),
  ey = n(430824),
  ej = n(819640),
  eU = n(283595),
  eG = n(944486),
  ew = n(914010),
  ek = n(695103),
  eB = n(241890),
  eH = n(897607),
  eV = n(417363),
  eF = n(900974),
  eY = n(358085),
  ez = n(998502),
  eW = n(346329),
  eK = n(981631),
  eq = n(176505),
  eQ = n(701476);

function eX(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(455173), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073), n(628566);
let eJ = !1;
(0, C.DL)(), r.ZP.initialize(), e_.Z.loadServer(), eY.isPlatformEmbedded && (ez.ZP.on("USER_SETTINGS_OPEN", () => {
  !ej.Z.getLayers().includes(eK.S9g.USER_SETTINGS) && _.Z.open(eK.oAB.ACCOUNT)
}), ez.ZP.on("LAUNCH_APPLICATION", (e, t) => {
  let n = eU.Z.getActiveLibraryApplication(t);
  eW.playApplication(t, n, {
    analyticsParams: {
      location: {
        page: eK.ZY5.DIRECT,
        object: eK.qAy.WEB_URL
      }
    }
  })
}));
let e$ = r.ZP.connectStores([k.Z, eb.Z, ex.default], () => ({
    isConnected: k.Z.isConnected(),
    defaultRoute: eb.Z.defaultRoute,
    defaultRouteFallback: eb.Z.fallbackRoute,
    token: ex.default.getToken()
  }))(class extends i.Component {
    componentDidMount() {
      let {
        match: e
      } = this.props;
      null != e && null != e.params.inviteCode && (0, V.x)({
        code: e.params.inviteCode
      })
    }
    render() {
      let {
        isConnected: e,
        defaultRoute: t,
        token: n,
        defaultRouteFallback: i
      } = this.props;
      if (null == n) return (0, s.jsx)(a.l_, {
        to: eK.Z5c.DEFAULT_LOGGED_OUT
      });
      if (e) {
        let e = e5(t);
        return null == e || (e.params.guildId === eK.ME || null != ey.Z.getGuild(e.params.guildId)) && null != eD.Z.getChannel(e.params.channelId) ? (0, s.jsx)(a.l_, {
          to: t
        }) : (0, s.jsx)(a.l_, {
          to: i
        })
      }
      return null
    }
  }),
  e0 = (0, Z.e)(O.Z, null, {
    passProps: !1
  }),
  e1 = (0, Z.e)(f.default, null, {
    passProps: !1
  }),
  e4 = [eK.Z5c.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(eq.Vg).map(e => eK.Z5c.CHANNEL(":guildId", e))];

function e7(e) {
  let {
    guildId: t,
    channelId: n = null,
    messageId: s = null,
    threadId: i = null
  } = e.params;
  return {
    guildId: null != t ? t : eK.ME,
    channelId: n,
    messageId: s,
    threadId: i
  }
}
let e3 = [{
  path: [eK.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
  render(e) {
    let {
      match: t
    } = e;
    return (0, s.jsx)(e$, {
      match: t
    })
  },
  isSessionRequired: !0
}, {
  path: [eK.Z5c.APP],
  render: () => (0, s.jsx)(e$, {}),
  isSessionRequired: !0
}, {
  path: [eK.Z5c.USERS(":id")],
  render: function(e) {
    let {
      match: t,
      location: n
    } = e, {
      friend_token: i
    } = (0, l.parse)(n.search), {
      id: r
    } = t.params;
    return (0, B.h)(() => (0, ef.openUserProfileModal)({
      userId: r,
      guildId: eK.ME,
      friendToken: i,
      sourceAnalyticsLocations: [A.Z.URI_SCHEME],
      analyticsLocation: {
        section: eK.jXE.DIRECT_ROUTE_ACCESS
      }
    })), (0, s.jsx)(a.l_, {
      to: eb.Z.defaultRoute
    })
  }
}, {
  path: [eK.Z5c.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
  render: function(e) {
    let {
      match: t
    } = e, {
      gameId: n,
      action: i
    } = t.params;
    return eV.Z.whenInitialized(() => {
      eU.Z.whenInitialized(() => {
        switch (i) {
          case "launch": {
            let e = eU.Z.getActiveLibraryApplication(n);
            if (null == e) return;
            eW.playApplication(e.id, e, {
              analyticsParams: {
                location: {
                  page: eK.ZY5.DIRECT,
                  object: eK.qAy.WEB_URL
                }
              }
            });
            break
          }
          case "test-mode":
            ek.Z.whenInitialized(() => h.Wt(n));
            break;
          case "uninstall": {
            let e = eU.Z.getActiveLibraryApplication(n);
            if (null == e) return;
            (0, u.W)(e.id, e.branchId, eK.Sbl.URI_SCHEME)
          }
        }
      })
    }), (0, s.jsx)(a.l_, {
      to: eK.Z5c.APPLICATION_LIBRARY
    })
  }
}, {
  path: [eK.Z5c.GUILD_CREATE],
  render: function() {
    return (0, B.h)(() => P.Z.openCreateGuildModal({
      location: "External link"
    })), (0, s.jsx)(a.l_, {
      to: eb.Z.defaultRoute
    })
  }
}, {
  path: [eK.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      section: n,
      subsection: i
    } = t.params, r = (0, l.parse)(location.search).feature;
    return (0, B.h)(() => W.v({
      section: (0, z.Z)(eK.pNK, n),
      subsection: (0, z.Z)(eK.KsC, i),
      feature: r
    })), (0, s.jsx)(a.l_, {
      to: eb.Z.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eK.Z5c.SETTINGS(":section", ":subsection?")],
  render: function(e) {
    let {
      location: t
    } = e, n = (0, ev.default)(t.pathname);
    return null != n && (0, B.h)(() => _.Z.open(n.section, n.subsection, {
      openWithoutBackstack: !1,
      impressionSource: n.source
    })), (0, s.jsx)(a.l_, {
      to: eb.Z.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eK.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(":guildId")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: i
    } = t.params;
    return (0, B.h)(() => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("5863"), n.e("53497")]).then(n.bind(n, 751212));
        return t => (0, s.jsx)(e, {
          ...t,
          guildId: i
        })
      })
    }), (0, s.jsx)(a.l_, {
      to: eK.Z5c.CHANNEL(i)
    })
  },
  isSessionRequired: !0
}, {
  path: [eK.Z5c.APPLICATION_LIBRARY_INVENTORY],
  render: function() {
    return (0, B.h)(() => _.Z.open(eK.oAB.INVENTORY)), (0, s.jsx)(a.l_, {
      to: eb.Z.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eK.Z5c.WELCOME(":guildId?", ":channelId?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      channelId: i
    } = t.params;
    (0, ee.c)(eQ.M5.MARKETING_UNCLAIMED);
    let l = eK.Z5c.CHANNEL(n, i);
    return (0, s.jsx)(a.l_, {
      to: l
    })
  },
  isSessionRequired: !0
}, {
  path: [eK.Z5c.GUILD_EVENT_DETAILS(":guildId?", ":guildEventId")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      guildEventId: i
    } = t.params;
    return (0, B.h)(() => {
      (0, F.bO)({
        eventId: i
      })
    }), (0, s.jsx)(a.l_, {
      to: eK.Z5c.CHANNEL(n)
    })
  },
  isSessionRequired: !0
}, {
  path: [eK.Z5c.GUILD_SETTINGS(":guildId", ":section?", ":subsection?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      section: i,
      subsection: l
    } = t.params;
    return (0, B.h)(() => {
      Y.Z.open(n, (0, z.Z)(eK.pNK, i), void 0, (0, z.Z)(eK.KsC, l))
    }), (0, s.jsx)(a.l_, {
      to: eK.Z5c.CHANNEL(n)
    })
  },
  isSessionRequired: !0,
  isChatRoute: !0
}, {
  path: [eK.Z5c.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eK.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"), eK.Z5c.ACTIVITY, eK.Z5c.ACTIVITIES, eK.Z5c.ACTIVITIES_HAPPENING_NOW, eK.Z5c.ACTIVITY_DETAILS(":applicationId"), eK.Z5c.APPLICATION_LIBRARY, eK.Z5c.APPLICATION_STORE, eK.Z5c.MESSAGE_REQUESTS, eK.Z5c.COLLECTIBLES_SHOP, eK.Z5c.COLLECTIBLES_SHOP_FULLSCREEN, eK.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), eK.Z5c.GUILD_DISCOVERY, eK.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"), eK.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"), eK.Z5c.GUILD_BOOSTING_MARKETING(":guildId"), eK.Z5c.FEATURE(":feature"), eK.Z5c.FAMILY_CENTER],
  render: e0,
  isSessionRequired: !0,
  isChatRoute: !0
}, {
  path: [eK.Z5c.APPLICATION_DIRECTORY],
  render: e1,
  isSessionRequired: !0
}];

function e5(e) {
  for (let {
      path: t,
      isChatRoute: n
    }
    of e3) {
    if (!n) continue;
    let s = (0, a.LX)(e, {
      path: t
    });
    if (null != s) return s
  }
  return null
}

function e2(e) {
  let {
    channelId: t,
    guildId: n,
    pathname: s
  } = e;
  if (!k.Z.isConnected()) return;
  let {
    location: i
  } = (0, eh.s1)();
  if (i.pathname === s) null == eD.Z.getChannel(t) ? (0, eh.dL)(eK.Z5c.CHANNEL(n)) : (0, eh.dL)(s)
}
class e9 extends i.PureComponent {
  componentDidMount() {
    ez.ZP.setZoomFactor(I.Z.zoom), e_.Z.init(), L.Z.initialize(), ea.Z.initialize(), j.Z.initialize(), eP.Z.initialize(), U.Z.initialize(), eo.Z.initialize(), Q.Z.initialize(), m.Z.init(), w.Z.init(), G.Z.init(), et.Z.initialize(), S.Z.initialize(), b.Z.initialize(), ec.Z.initialize(), N.ZP.initialize(), eR.Z.initialize(), el.Z.initialize(), p.Z.initialize(), H.Z.init(), K.Z.init(), eH.Z.init(), eF.Z.init(), g.Z.initialize(), eA.Z.init(), eB.Z.init(), eL.Z.init(), ep.Z.initialize(), eN.Z.initialize(), eZ.Z.initialize(), eO.Z.init(), D.Z.initialize(), T.Z.initialize(), eI.Z.initialize(), eg.Z.initialize(), es.Z.initialize(), en.Z.initialize(), ei.Z.initialize(), v.Z.initialize(), q.Z.init({
      hasModalOpen: o.hasAnyModalOpen,
      openModal: () => (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 650233));
        return t => (0, s.jsx)(e, {
          ...t
        })
      })
    }), M.Z.init(), X.Z.initialize(), eu.Z.initialize(), er.Z.initialize(), x.Z.initialize(), this.rewriterUnlisten = ed.Z.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = ed.Z.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    eP.Z.terminate(), eo.Z.terminate(), ea.Z.terminate(), L.Z.terminate(), N.ZP.terminate(), eR.Z.terminate(), p.Z.terminate(), ec.Z.terminate(), el.Z.terminate(), eZ.Z.terminate(), g.Z.terminate(), D.Z.terminate(), X.Z.terminate(), T.Z.terminate(), eu.Z.terminate(), eI.Z.terminate(), eg.Z.terminate(), es.Z.terminate(), en.Z.terminate(), ei.Z.terminate(), v.Z.terminate(), er.Z.terminate(), x.Z.terminate(), y.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: n
    } = e;
    ! function(e) {
      if (k.Z.isConnected() || k.Z.isTryingToConnect()) return;
      let t = ex.default.getToken();
      if (null != t) null != function(e) {
        for (let {
            path: t,
            isSessionRequired: n
          }
          of e3) {
          if (!n) continue;
          let s = (0, a.LX)(e, {
            path: t
          });
          if (null != s) return s
        }
        return null
      }(e) && c.Z.startSession(t)
    }(t), ! function(e, t) {
      let n = e5(e);
      if (null == n) return;
      let {
        guildId: s,
        channelId: i,
        messageId: r,
        threadId: o
      } = e7(n), c = (0, eE.S)(s), u = (0, eE.c)(i), h = (0, eE.c)(o), _ = ew.Z.getGuildId(), I = _ !== s;
      if (c && I && d.Z.selectGuild(s), c && u) {
        let n = eG.Z.getChannelId(_),
          a = n !== i;
        if (!eJ || I || a || null != r) {
          eJ = !0, E.default.selectChannel({
            guildId: s,
            channelId: i,
            messageId: r
          });
          let {
            summaryId: e
          } = (0, l.parse)(t);
          null != e && eS.ZP.setSelectedSummary(i, e)
        }
        if (null != o && h) {
          let e = eM.ZP.getCurrentSidebarChannelId(n) !== o,
            t = null != eM.ZP.getGuildSidebarState(s);
          if (null != i && null != o && e) {
            if (t)(0, eh.dL)(eK.Z5c.CHANNEL(s, o, r));
            else {
              let e = {
                type: eT.Ff.THREAD
              };
              null != r && (e.initialMessageId = r), em.Z.openThreadAsSidebar({
                guildId: s,
                baseChannelId: i,
                channelId: o,
                details: e
              })
            }
          }
        } else null != i && !a && em.Z.closeChannelSidebar(i);
        let c = $.Z.getIsOpen();
        if (i === eq.oC.ROLE_SUBSCRIPTIONS) J.Z.closeSidebar();
        else if (I && c) {
          let t = null == _ && s === eK.ME,
            n = e === eK.Z5c.GUILD_DISCOVERY;
          t || n ? J.Z.closeSidebar() : J.Z.openSidebar()
        } else(a && c || !I && !a) && J.Z.closeSidebar()
      } else {
        var m;
        if (m = e, !e4.some(e => {
            var t;
            return (null === (t = (0, a.LX)(m, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, eh.dL)(eb.Z.fallbackRoute)
      }
    }(t, n)
  }
  ensureChannelMatchesGuild(e) {
    if (!k.Z.isConnected()) return null;
    let {
      pathname: t
    } = e, n = e5(t);
    if (null == n) return null;
    let {
      guildId: s,
      channelId: i,
      threadId: l
    } = e7(n), a = (0, eE.S)(s) && s !== eK.ME && s !== eK.I_8;
    if (null != i && (0, eE.c)(i) && !(0, eq.AB)(i) && a) {
      let n = eD.Z.getChannel(i);
      if (null == n) eC.Z.loadThread(i).then(() => e2({
        channelId: i,
        guildId: s,
        pathname: t
      }));
      else if (n.guild_id !== s) return {
        path: eK.Z5c.CHANNEL(s),
        state: e.state
      };
      if (null != l) {
        if (!((0, eE.c)(l) && !(0, eq.AB)(i))) return null;
        let n = eD.Z.getChannel(l);
        if (null == n) eC.Z.loadThread(l).then(() => e2({
          channelId: l,
          guildId: s,
          pathname: t
        }));
        else if ((null == n ? void 0 : n.parent_id) !== i) return em.Z.closeChannelSidebar(i), {
          path: eK.Z5c.CHANNEL(s, i),
          state: e.state
        }
      }
    }
    return null
  }
  render() {
    return (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsxs)(a.rs, {
        children: [(0, s.jsx)(a.l_, {
          exact: !0,
          from: "/channels",
          to: "/"
        }), e3.map(e => {
          let {
            path: t,
            render: n
          } = e;
          return (0, s.jsx)(a.AW, {
            path: t,
            render: n
          }, t[0])
        }), (0, s.jsx)(a.l_, {
          to: "/"
        })]
      }), (0, s.jsx)(R.Z, {})]
    })
  }
  constructor(...e) {
    super(...e), eX(this, "historyUnlisten", () => {}), eX(this, "rewriterUnlisten", () => {})
  }
}
t.default = e9