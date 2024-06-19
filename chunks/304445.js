n(47120), n(411104);
var i = n(934951),
  r = n(266067),
  a = n(38618),
  l = n(57132),
  s = n(215355),
  o = n(777639),
  u = n(311163),
  d = n(272423),
  h = n(781157),
  c = n(700615),
  g = n(905423),
  p = n(703656),
  f = n(981631);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
t.Z = new class e {
  initialize() {
    this.cleanup(), this.unlistenHistory = (0, p.s1)().listen(this.handleRouteChange);
    let {
      pathname: e
    } = (0, p.s1)().location;
    g.Z.getState().resetPath(e), this.unlistenKeyboardChange = g.Z.subscribe(this.handleKeybindRouteChange), a.Z.addChangeListener(this.handleConnectionChange)
  }
  convertRouteToNavigation(e, t) {
    var n, i, a;
    let {
      pathname: g
    } = e, p = (0, o.D)(), v = (0, l.cn)(), {
      mergeTabs: m
    } = (0, s.LI)({
      location: "convertRouteToNavigation"
    });
    if (null == p || !p.isReady()) return;
    let C = e.navigationReplace,
      R = null !== (n = e.useScreen) && void 0 !== n && n;
    if (v && (0, h.x7)() && g === f.Z5c.ME) {
      (0, d.vp)({
        screen: "messages",
        resetRoot: C
      });
      return
    }
    if (v && g === f.Z5c.NOTIFICATIONS) {
      (0, d.vp)({
        screen: "notifications",
        resetRoot: C
      });
      return
    }
    if (g.startsWith("/channels/")) {
      let e = (0, r.LX)(g, {
          path: f.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
        }),
        t = (0, r.LX)(g, {
          path: "".concat(f.Z5c.CHANNEL(":guildId", ":channelId?")).concat(f.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
        });
      if (!v) {
        let e = p.getRootState();
        (null == e ? void 0 : null === (a = e.routes) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.name) !== "panels" && (0, d.H)();
        return
      }
      if (null != t) {
        let {
          voiceGuildId: e,
          voiceChannelId: n,
          voiceMessageId: i
        } = t.params;
        !(0, c.ur)() && (0, d.k4)({
          channelId: n,
          guildId: e,
          messageId: i,
          replaceChannelAndFixRoot: C,
          useScreen: R
        });
        return
      }
      if (null != e) {
        let {
          channelId: t,
          guildId: n,
          messageId: i
        } = e.params;
        if (!(0, h.x7)() && !m) {
          (0, d.vp)({
            screen: "guilds",
            guildId: n,
            resetRoot: C
          });
          return
        }
        if ((0, h.JH)()) {
          let [e, i] = (0, u.Z)(p.getCurrentRoute());
          if (e === n && i === t) return
        }
        null == t || (0, h.Z0)(n) && !1 !== C ? n !== f.ME || m ? (0, d.vp)({
          screen: "guilds",
          guildId: n,
          channelId: (0, h.JH)() ? t : void 0,
          resetRoot: C
        }) : (0, d.vp)({
          screen: "messages",
          resetRoot: C
        }) : null != n && (0, d.k4)({
          channelId: t,
          guildId: n,
          messageId: i,
          replaceChannelAndFixRoot: C,
          useScreen: R
        })
      }
      return
    }
    if (g.startsWith("/member-verification/")) {
      let e = (0, r.LX)(g, {
        path: f.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
      });
      null != e && (0, d.fA)(e.params.guildId, e.params.inviteCode);
      return
    }
    if (g.startsWith("/login") || g.startsWith("/register")) {
      (0, d.Bj)();
      return
    }
    if (g.startsWith("/account-standing")) {
      p.navigate({
        name: "account-standing",
        params: void 0
      });
      return
    }
    v && (0, d.vp)({
      screen: "messages",
      resetRoot: C
    })
  }
  executeRouteRewrites(e, t) {
    if (this.routeChangeCount += 1, this.routeChangeCount < 10)
      for (let n of this.rewrites) {
        let r = (0, p.s1)().location.pathname,
          a = n(e, t);
        if (null != a) return (0, i.n_)({
          message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
          data: {
            replacePath: a.path,
            previousPath: r
          }
        }), (0, p.dL)(a.path, a.state), !0
      } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
    return !1
  }
  cleanup() {
    var e, t;
    null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, a.Z.removeChangeListener(this.handleConnectionChange)
  }
  addRouteChangeListener(e) {
    return null != this.unlistenHistory && e((0, p.s1)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
  }
  addRouteRewriter(e) {
    if (null != this.unlistenHistory) {
      let t = e((0, p.s1)().location, (0, p.s1)().action);
      null != t && (0, p.dL)(t.path, t.state)
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
    return (0, p.s1)()
  }
  constructor() {
    v(this, "unlistenHistory", void 0), v(this, "unlistenKeyboardChange", void 0), v(this, "rewrites", new Set), v(this, "listeners", new Set), v(this, "routeChangeCount", 0), v(this, "timer", -1), v(this, "connected", !1), v(this, "handleConnectionChange", () => {
      let e = a.Z.isConnected(),
        t = e && !this.connected;
      this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, p.s1)().location, "REPLACE"))
    }), v(this, "handleRouteChange", (e, t) => {
      if (this.executeRouteRewrites(e, t)) return;
      let n = g.Z.getState();
      for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners)) try {
        i(e, t)
      } catch (e) {
        console.warn("RouteManager.listen: A route listener has caused an error", e.message)
      }
      this.convertRouteToNavigation(e, t), this.routeChangeCount = 0
    }), v(this, "handleKeybindRouteChange", e => {
      let {
        path: t
      } = e;
      null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer)
    }), v(this, "flushRoute", () => {
      clearTimeout(this.timer);
      let e = g.Z.getState();
      null != e.path && (0, p.uL)(e.path)
    })
  }
}