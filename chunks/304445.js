t(47120), t(411104);
var a = t(934951),
  n = t(266067),
  i = t(38618),
  l = t(57132),
  o = t(215355),
  c = t(777639),
  s = t(311163),
  d = t(272423),
  u = t(781157),
  h = t(700615),
  m = t(905423),
  g = t(703656),
  p = t(981631);

function b(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e
}
r.Z = new class e {
  initialize() {
    this.cleanup(), this.unlistenHistory = (0, g.s1)().listen(this.handleRouteChange);
    let {
      pathname: e
    } = (0, g.s1)().location;
    m.Z.getState().resetPath(e), this.unlistenKeyboardChange = m.Z.subscribe(this.handleKeybindRouteChange), i.Z.addChangeListener(this.handleConnectionChange)
  }
  convertRouteToNavigation(e, r) {
    var t, a, i;
    let {
      pathname: m
    } = e, g = (0, c.D)(), b = (0, l.cn)(), {
      mergeTabs: y
    } = (0, o.LI)({
      location: "convertRouteToNavigation"
    });
    if (null == g || !g.isReady()) return;
    let x = e.navigationReplace,
      f = null !== (t = e.useScreen) && void 0 !== t && t;
    if (b && (0, u.x7)() && m === p.Z5c.ME) {
      (0, d.vp)({
        screen: "messages",
        resetRoot: x
      });
      return
    }
    if (b && m === p.Z5c.NOTIFICATIONS) {
      (0, d.vp)({
        screen: "notifications",
        resetRoot: x
      });
      return
    }
    if (m.startsWith("/channels/")) {
      let e = (0, n.LX)(m, {
          path: p.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
        }),
        r = (0, n.LX)(m, {
          path: "".concat(p.Z5c.CHANNEL(":guildId", ":channelId?")).concat(p.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
        });
      if (!b) {
        let e = g.getRootState();
        (null == e ? void 0 : null === (i = e.routes) || void 0 === i ? void 0 : null === (a = i[0]) || void 0 === a ? void 0 : a.name) !== "panels" && (0, d.H)();
        return
      }
      if (null != r) {
        let {
          voiceGuildId: e,
          voiceChannelId: t,
          voiceMessageId: a
        } = r.params;
        !(0, h.ur)() && (0, d.k4)({
          channelId: t,
          guildId: e,
          messageId: a,
          replaceChannelAndFixRoot: x,
          useScreen: f
        });
        return
      }
      if (null != e) {
        let {
          channelId: r,
          guildId: t,
          messageId: a
        } = e.params;
        if (!(0, u.x7)() && !y) {
          (0, d.vp)({
            screen: "guilds",
            guildId: t,
            resetRoot: x
          });
          return
        }
        if ((0, u.JH)()) {
          let [e, a] = (0, s.Z)(g.getCurrentRoute());
          if (e === t && a === r) return
        }
        null == r || (0, u.Z0)(t) && !1 !== x ? t !== p.ME || y ? (0, d.vp)({
          screen: "guilds",
          guildId: t,
          channelId: (0, u.JH)() ? r : void 0,
          resetRoot: x
        }) : (0, d.vp)({
          screen: "messages",
          resetRoot: x
        }) : null != t && (0, d.k4)({
          channelId: r,
          guildId: t,
          messageId: a,
          replaceChannelAndFixRoot: x,
          useScreen: f
        })
      }
      return
    }
    if (m.startsWith("/member-verification/")) {
      let e = (0, n.LX)(m, {
        path: p.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
      });
      null != e && (0, d.fA)(e.params.guildId, e.params.inviteCode);
      return
    }
    if (m.startsWith("/login") || m.startsWith("/register")) {
      (0, d.Bj)();
      return
    }
    if (m.startsWith("/account-standing")) {
      g.navigate({
        name: "account-standing",
        params: void 0
      });
      return
    }
    b && (0, d.vp)({
      screen: "messages",
      resetRoot: x
    })
  }
  executeRouteRewrites(e, r) {
    if (this.routeChangeCount += 1, this.routeChangeCount < 10)
      for (let t of this.rewrites) {
        let n = (0, g.s1)().location.pathname,
          i = t(e, r);
        if (null != i) return (0, a.n_)({
          message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
          data: {
            replacePath: i.path,
            previousPath: n
          }
        }), (0, g.dL)(i.path, i.state), !0
      } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
    return !1
  }
  cleanup() {
    var e, r;
    null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (r = this.unlistenKeyboardChange) || void 0 === r || r.call(this), this.unlistenKeyboardChange = void 0, i.Z.removeChangeListener(this.handleConnectionChange)
  }
  addRouteChangeListener(e) {
    return null != this.unlistenHistory && e((0, g.s1)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
  }
  addRouteRewriter(e) {
    if (null != this.unlistenHistory) {
      let r = e((0, g.s1)().location, (0, g.s1)().action);
      null != r && (0, g.dL)(r.path, r.state)
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
    return (0, g.s1)()
  }
  constructor() {
    b(this, "unlistenHistory", void 0), b(this, "unlistenKeyboardChange", void 0), b(this, "rewrites", new Set), b(this, "listeners", new Set), b(this, "routeChangeCount", 0), b(this, "timer", -1), b(this, "connected", !1), b(this, "handleConnectionChange", () => {
      let e = i.Z.isConnected(),
        r = e && !this.connected;
      this.connected = e, r && (this.routeChangeCount = 0, this.executeRouteRewrites((0, g.s1)().location, "REPLACE"))
    }), b(this, "handleRouteChange", (e, r) => {
      if (this.executeRouteRewrites(e, r)) return;
      let t = m.Z.getState();
      for (let a of (t.basePath !== e.pathname && t.resetPath(e.pathname), this.listeners)) try {
        a(e, r)
      } catch (e) {
        console.warn("RouteManager.listen: A route listener has caused an error", e.message)
      }
      this.convertRouteToNavigation(e, r), this.routeChangeCount = 0
    }), b(this, "handleKeybindRouteChange", e => {
      let {
        path: r
      } = e;
      null != r ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == r && clearTimeout(this.timer)
    }), b(this, "flushRoute", () => {
      clearTimeout(this.timer);
      let e = m.Z.getState();
      null != e.path && (0, g.uL)(e.path)
    })
  }
}