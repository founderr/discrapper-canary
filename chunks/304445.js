n(47120), n(411104);
var i = n(934951),
  o = n(266067),
  r = n(38618),
  a = n(57132),
  l = n(215355),
  s = n(777639),
  c = n(311163),
  u = n(272423),
  d = n(781157),
  h = n(700615),
  g = n(905423),
  f = n(703656),
  m = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
t.Z = new class e {
  initialize() {
    this.cleanup(), this.unlistenHistory = (0, f.s1)().listen(this.handleRouteChange);
    let {
      pathname: e
    } = (0, f.s1)().location;
    g.Z.getState().resetPath(e), this.unlistenKeyboardChange = g.Z.subscribe(this.handleKeybindRouteChange), r.Z.addChangeListener(this.handleConnectionChange)
  }
  convertRouteToNavigation(e, t) {
    var n, i, r;
    let {
      pathname: g
    } = e, f = (0, s.D)(), p = (0, a.cn)(), {
      mergeTabs: _
    } = (0, l.LI)({
      location: "convertRouteToNavigation"
    });
    if (null == f || !f.isReady()) return;
    let b = e.navigationReplace,
      v = null !== (n = e.useScreen) && void 0 !== n && n;
    if (p && (0, d.x7)() && g === m.Z5c.ME) {
      (0, u.vp)({
        screen: "messages",
        resetRoot: b
      });
      return
    }
    if (p && g === m.Z5c.NOTIFICATIONS) {
      (0, u.vp)({
        screen: "notifications",
        resetRoot: b
      });
      return
    }
    if (g.startsWith("/channels/")) {
      let e = (0, o.LX)(g, {
          path: m.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
        }),
        t = (0, o.LX)(g, {
          path: "".concat(m.Z5c.CHANNEL(":guildId", ":channelId?")).concat(m.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
        });
      if (!p) {
        let e = f.getRootState();
        (null == e ? void 0 : null === (r = e.routes) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.name) !== "panels" && (0, u.H)();
        return
      }
      if (null != t) {
        let {
          voiceGuildId: e,
          voiceChannelId: n,
          voiceMessageId: i
        } = t.params;
        !(0, h.ur)() && (0, u.k4)({
          channelId: n,
          guildId: e,
          messageId: i,
          replaceChannelAndFixRoot: b,
          useScreen: v
        });
        return
      }
      if (null != e) {
        let {
          channelId: t,
          guildId: n,
          messageId: i
        } = e.params;
        if (!(0, d.x7)() && !_) {
          (0, u.vp)({
            screen: "guilds",
            guildId: n,
            resetRoot: b
          });
          return
        }
        if ((0, d.JH)()) {
          let [e, i] = (0, c.Z)(f.getCurrentRoute());
          if (e === n && i === t) return
        }
        null == t || (0, d.Z0)(n) && !1 !== b ? n !== m.ME || _ ? (0, u.vp)({
          screen: "guilds",
          guildId: n,
          channelId: (0, d.JH)() ? t : void 0,
          resetRoot: b
        }) : (0, u.vp)({
          screen: "messages",
          resetRoot: b
        }) : null != n && (0, u.k4)({
          channelId: t,
          guildId: n,
          messageId: i,
          replaceChannelAndFixRoot: b,
          useScreen: v
        })
      }
      return
    }
    if (g.startsWith("/member-verification/")) {
      let e = (0, o.LX)(g, {
        path: m.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
      });
      null != e && (0, u.fA)(e.params.guildId, e.params.inviteCode);
      return
    }
    if (g.startsWith("/login") || g.startsWith("/register")) {
      (0, u.Bj)();
      return
    }
    if (g.startsWith("/account-standing")) {
      f.navigate({
        name: "account-standing",
        params: void 0
      });
      return
    }
    p && (0, u.vp)({
      screen: "messages",
      resetRoot: b
    })
  }
  executeRouteRewrites(e, t) {
    if (this.routeChangeCount += 1, this.routeChangeCount < 10)
      for (let n of this.rewrites) {
        let o = (0, f.s1)().location.pathname,
          r = n(e, t);
        if (null != r) return (0, i.n_)({
          message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
          data: {
            replacePath: r.path,
            previousPath: o
          }
        }), (0, f.dL)(r.path, r.state), !0
      } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
    return !1
  }
  cleanup() {
    var e, t;
    null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, r.Z.removeChangeListener(this.handleConnectionChange)
  }
  addRouteChangeListener(e) {
    return null != this.unlistenHistory && e((0, f.s1)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
  }
  addRouteRewriter(e) {
    if (null != this.unlistenHistory) {
      let t = e((0, f.s1)().location, (0, f.s1)().action);
      null != t && (0, f.dL)(t.path, t.state)
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
    return (0, f.s1)()
  }
  constructor() {
    p(this, "unlistenHistory", void 0), p(this, "unlistenKeyboardChange", void 0), p(this, "rewrites", new Set), p(this, "listeners", new Set), p(this, "routeChangeCount", 0), p(this, "timer", -1), p(this, "connected", !1), p(this, "handleConnectionChange", () => {
      let e = r.Z.isConnected(),
        t = e && !this.connected;
      this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, f.s1)().location, "REPLACE"))
    }), p(this, "handleRouteChange", (e, t) => {
      if (this.executeRouteRewrites(e, t)) return;
      let n = g.Z.getState();
      for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners)) try {
        i(e, t)
      } catch (e) {
        console.warn("RouteManager.listen: A route listener has caused an error", e.message)
      }
      this.convertRouteToNavigation(e, t), this.routeChangeCount = 0
    }), p(this, "handleKeybindRouteChange", e => {
      let {
        path: t
      } = e;
      null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer)
    }), p(this, "flushRoute", () => {
      clearTimeout(this.timer);
      let e = g.Z.getState();
      null != e.path && (0, f.uL)(e.path)
    })
  }
}