"use strict";
n.r(t), n("47120"), n("411104");
var i = n("540571"),
  a = n("266067"),
  o = n("38618"),
  r = n("57132"),
  l = n("215355"),
  s = n("777639"),
  u = n("311163"),
  d = n("272423"),
  h = n("781157"),
  c = n("700615"),
  g = n("905423"),
  f = n("703656"),
  p = n("981631");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
t.default = new class e {
  initialize() {
    this.cleanup(), this.unlistenHistory = (0, f.getHistory)().listen(this.handleRouteChange);
    let {
      pathname: e
    } = (0, f.getHistory)().location;
    g.default.getState().resetPath(e), this.unlistenKeyboardChange = g.default.subscribe(this.handleKeybindRouteChange), o.default.addChangeListener(this.handleConnectionChange)
  }
  convertRouteToNavigation(e, t) {
    var n, i, o;
    let {
      pathname: g
    } = e, f = (0, s.getRootNavigationRef)(), R = (0, r.isInMainTabsExperiment)(), {
      mergeTabs: m
    } = (0, l.getMergedTabsExperiment)({
      location: "convertRouteToNavigation"
    });
    if (null == f || !f.isReady()) return;
    let v = e.navigationReplace,
      C = null !== (n = e.useScreen) && void 0 !== n && n;
    if (R && (0, h.isSplitMessagesTab)() && g === p.Routes.ME) {
      (0, d.navigateToRootTab)({
        screen: "messages",
        resetRoot: v
      });
      return
    }
    if (R && g === p.Routes.NOTIFICATIONS) {
      (0, d.navigateToRootTab)({
        screen: "notifications",
        resetRoot: v
      });
      return
    }
    if (g.startsWith("/channels/")) {
      let e = (0, a.matchPath)(g, {
          path: p.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
        }),
        t = (0, a.matchPath)(g, {
          path: "".concat(p.Routes.CHANNEL(":guildId", ":channelId?")).concat(p.Routes.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
        });
      if (!R) {
        let e = f.getRootState();
        (null == e ? void 0 : null === (o = e.routes) || void 0 === o ? void 0 : null === (i = o[0]) || void 0 === i ? void 0 : i.name) !== "panels" && (0, d.resetToPanelsUI)();
        return
      }
      if (null != t) {
        let {
          voiceGuildId: e,
          voiceChannelId: n,
          voiceMessageId: i
        } = t.params;
        !(0, c.isVoicePanelEnabled)() && (0, d.navigateToChannel)({
          channelId: n,
          guildId: e,
          messageId: i,
          replaceChannelAndFixRoot: v,
          useScreen: C
        });
        return
      }
      if (null != e) {
        let {
          channelId: t,
          guildId: n,
          messageId: i
        } = e.params;
        if (!(0, h.isSplitMessagesTab)() && !m) {
          (0, d.navigateToRootTab)({
            screen: "guilds",
            guildId: n,
            resetRoot: v
          });
          return
        }
        if ((0, h.isOnNewPanels)()) {
          let [e, i] = (0, u.default)(f.getCurrentRoute());
          if (e === n && i === t) return
        }
        null == t || (0, h.shouldHandleNewPanelsRoute)(n) && !1 !== v ? n !== p.ME || m ? (0, d.navigateToRootTab)({
          screen: "guilds",
          guildId: n,
          channelId: (0, h.isOnNewPanels)() ? t : void 0,
          resetRoot: v
        }) : (0, d.navigateToRootTab)({
          screen: "messages",
          resetRoot: v
        }) : null != n && (0, d.navigateToChannel)({
          channelId: t,
          guildId: n,
          messageId: i,
          replaceChannelAndFixRoot: v,
          useScreen: C
        })
      }
      return
    }
    if (g.startsWith("/member-verification/")) {
      let e = (0, a.matchPath)(g, {
        path: p.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
      });
      null != e && (0, d.navigateToMemberVerification)(e.params.guildId, e.params.inviteCode);
      return
    }
    if (g.startsWith("/login") || g.startsWith("/register")) {
      (0, d.resetToAuthRoute)();
      return
    }
    if (g.startsWith("/account-standing")) {
      f.navigate({
        name: "account-standing",
        params: void 0
      });
      return
    }
    R && (0, d.navigateToRootTab)({
      screen: "messages",
      resetRoot: v
    })
  }
  executeRouteRewrites(e, t) {
    if (this.routeChangeCount += 1, this.routeChangeCount < 10)
      for (let n of this.rewrites) {
        let a = (0, f.getHistory)().location.pathname,
          o = n(e, t);
        if (null != o) return (0, i.addBreadcrumb)({
          message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
          data: {
            replacePath: o.path,
            previousPath: a
          }
        }), (0, f.replaceWith)(o.path, o.state), !0
      } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
    return !1
  }
  cleanup() {
    var e, t;
    null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, o.default.removeChangeListener(this.handleConnectionChange)
  }
  addRouteChangeListener(e) {
    return null != this.unlistenHistory && e((0, f.getHistory)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
  }
  addRouteRewriter(e) {
    if (null != this.unlistenHistory) {
      let t = e((0, f.getHistory)().location, (0, f.getHistory)().action);
      null != t && (0, f.replaceWith)(t.path, t.state)
    }
    return this.rewrites.add(e), () => this.removeRouteRewriter(e)
  }
  removeRouteChangeListener(e) {
    this.listeners.delete(e)
  }
  removeRouteRewriter(e) {
    this.rewrites.delete(e)
  }
  getHistory() {
    return (0, f.getHistory)()
  }
  constructor() {
    R(this, "unlistenHistory", void 0), R(this, "unlistenKeyboardChange", void 0), R(this, "rewrites", new Set), R(this, "listeners", new Set), R(this, "routeChangeCount", 0), R(this, "timer", -1), R(this, "connected", !1), R(this, "handleConnectionChange", () => {
      let e = o.default.isConnected(),
        t = e && !this.connected;
      this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, f.getHistory)().location, "REPLACE"))
    }), R(this, "handleRouteChange", (e, t) => {
      if (this.executeRouteRewrites(e, t)) return;
      let n = g.default.getState();
      for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners)) try {
        i(e, t)
      } catch (e) {
        console.warn("RouteManager.listen: A route listener has caused an error", e.message)
      }
      this.convertRouteToNavigation(e, t), this.routeChangeCount = 0
    }), R(this, "handleKeybindRouteChange", e => {
      let {
        path: t
      } = e;
      null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer)
    }), R(this, "flushRoute", () => {
      clearTimeout(this.timer);
      let e = g.default.getState();
      null != e.path && (0, f.transitionTo)(e.path)
    })
  }
}