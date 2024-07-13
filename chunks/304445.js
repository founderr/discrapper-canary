n(47120), n(411104);
var i = n(934951),
  r = n(266067),
  a = n(38618),
  o = n(57132),
  s = n(777639),
  l = n(311163),
  u = n(272423),
  c = n(781157),
  d = n(700615),
  h = n(905423),
  f = n(703656),
  g = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
t.Z = new class e {
  initialize() {
this.cleanup(), this.unlistenHistory = (0, f.s1)().listen(this.handleRouteChange);
let {
  pathname: e
} = (0, f.s1)().location;
h.Z.getState().resetPath(e), this.unlistenKeyboardChange = h.Z.subscribe(this.handleKeybindRouteChange), a.Z.addChangeListener(this.handleConnectionChange);
  }
  convertRouteToNavigation(e, t) {
var n, i, a;
let {
  pathname: h
} = e, f = (0, s.D)(), _ = (0, o.cn)();
if (null == f || !f.isReady())
  return;
let I = e.navigationReplace,
  v = null !== (n = e.useScreen) && void 0 !== n && n;
if (_ && (0, c.x7)() && h === g.Z5c.ME) {
  (0, u.vp)({
    screen: 'messages',
    resetRoot: I
  });
  return;
}
if (_ && h === g.Z5c.NOTIFICATIONS) {
  (0, u.vp)({
    screen: 'notifications',
    resetRoot: I
  });
  return;
}
if (h.startsWith('/channels/')) {
  if (!_) {
    let e = f.getRootState();
    (null == e ? void 0 : null === (a = e.routes) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.name) !== 'panels' && (0, u.H)();
    return;
  }
  let e = (0, r.LX)(h, {
    path: ''.concat(g.Z5c.CHANNEL(':guildId', ':channelId?')).concat(g.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(':voiceGuildId', ':voiceChannelId', ':voiceMessageId?'))
  });
  if (null != e) {
    let {
      voiceGuildId: t,
      voiceChannelId: n,
      voiceMessageId: i
    } = e.params;
    !(0, d.ur)() && (0, u.k4)({
      channelId: n,
      guildId: t,
      messageId: i,
      replaceChannelAndFixRoot: I,
      useScreen: v
    });
    return;
  }
  let t = (0, r.LX)(h, {
    path: g.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != t) {
    let {
      channelId: e,
      guildId: n,
      messageId: i
    } = t.params;
    if ((0, c.JH)()) {
      let [t, i] = (0, l.Z)(f.getCurrentRoute());
      if (t === n && i === e)
        return;
    }
    null == e || (0, c.Z0)(n) && !1 !== I ? (0, u.vp)({
      screen: 'guilds',
      guildId: n,
      channelId: (0, c.JH)() ? e : void 0,
      resetRoot: I
    }) : null != n && (0, u.k4)({
      channelId: e,
      guildId: n,
      messageId: i,
      replaceChannelAndFixRoot: I,
      useScreen: v
    });
  }
  return;
}
if (h.startsWith('/member-verification/')) {
  let e = (0, r.LX)(h, {
    path: g.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?')
  });
  null != e && (0, u.fA)(e.params.guildId, e.params.inviteCode);
  return;
}
if (h.startsWith('/login') || h.startsWith('/register')) {
  (0, u.Bj)();
  return;
}
if (h.startsWith('/account-standing')) {
  f.navigate({
    name: 'account-standing',
    params: void 0
  });
  return;
}
_ && (0, u.vp)({
  screen: 'messages',
  resetRoot: I
});
  }
  executeRouteRewrites(e, t) {
if (this.routeChangeCount += 1, this.routeChangeCount < 10)
  for (let n of this.rewrites) {
    let r = (0, f.s1)().location.pathname,
      a = n(e, t);
    if (null != a)
      return (0, i.n_)({
        message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
        data: {
          replacePath: a.path,
          previousPath: r
        }
      }), (0, f.dL)(a.path, a.state), !0;
  }
else
  throw Error('RouteManager: Something has gone horribly wrong with rewrites');
return !1;
  }
  cleanup() {
var e, t;
null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, a.Z.removeChangeListener(this.handleConnectionChange);
  }
  addRouteChangeListener(e) {
return null != this.unlistenHistory && e((0, f.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
  }
  addRouteRewriter(e) {
if (null != this.unlistenHistory) {
  let t = e((0, f.s1)().location, (0, f.s1)().action);
  null != t && (0, f.dL)(t.path, t.state);
}
return this.rewrites.add(e), () => this.removeRouteRewriter(e);
  }
  removeRouteChangeListener(e) {
this.listeners.delete(e);
  }
  removeRouteRewriter(e) {
this.rewrites.delete(e);
  }
  getHistory() {
return (0, f.s1)();
  }
  constructor() {
_(this, 'unlistenHistory', void 0), _(this, 'unlistenKeyboardChange', void 0), _(this, 'rewrites', new Set()), _(this, 'listeners', new Set()), _(this, 'routeChangeCount', 0), _(this, 'timer', -1), _(this, 'connected', !1), _(this, 'handleConnectionChange', () => {
  let e = a.Z.isConnected(),
    t = e && !this.connected;
  this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, f.s1)().location, 'REPLACE'));
}), _(this, 'handleRouteChange', (e, t) => {
  if (this.executeRouteRewrites(e, t))
    return;
  let n = h.Z.getState();
  for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
    try {
      i(e, t);
    } catch (e) {
      console.warn('RouteManager.listen: A route listener has caused an error', e.message);
    }
  this.convertRouteToNavigation(e, t), this.routeChangeCount = 0;
}), _(this, 'handleKeybindRouteChange', e => {
  let {
    path: t
  } = e;
  null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer);
}), _(this, 'flushRoute', () => {
  clearTimeout(this.timer);
  let e = h.Z.getState();
  null != e.path && (0, f.uL)(e.path);
});
  }
}();