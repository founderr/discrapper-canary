r(47120), r(411104);
var a = r(934951),
  n = r(266067),
  i = r(38618),
  o = r(777639),
  l = r(311163),
  c = r(272423),
  s = r(378788),
  d = r(700615),
  u = r(905423),
  h = r(703656),
  m = r(981631);

function g(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
value: r,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = r, e;
}
t.Z = new class e {
  initialize() {
this.cleanup(), this.unlistenHistory = (0, h.s1)().listen(this.handleRouteChange);
let {
  pathname: e
} = (0, h.s1)().location;
u.Z.getState().resetPath(e), this.unlistenKeyboardChange = u.Z.subscribe(this.handleKeybindRouteChange), i.Z.addChangeListener(this.handleConnectionChange);
  }
  convertRouteToNavigation(e, t) {
var r;
let {
  pathname: a
} = e, i = (0, o.D)();
if (null == i || !i.isReady())
  return;
let u = e.navigationReplace,
  h = null !== (r = e.useScreen) && void 0 !== r && r;
if (a === m.Z5c.NOTIFICATIONS) {
  (0, c.vp)({
    screen: 'notifications',
    resetRoot: u
  });
  return;
}
if (a.startsWith('/channels/')) {
  let t = (0, n.LX)(a, {
    path: ''.concat(m.Z5c.CHANNEL(':guildId', ':channelId?')).concat(m.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(':voiceGuildId', ':voiceChannelId', ':voiceMessageId?'))
  });
  if (null != t) {
    let {
      voiceGuildId: e,
      voiceChannelId: r,
      voiceMessageId: a
    } = t.params;
    !(0, d.ur)() && (0, c.k4)({
      channelId: r,
      guildId: e,
      messageId: a,
      replaceChannelAndFixRoot: u,
      useScreen: h
    });
    return;
  }
  let r = (0, n.LX)(a, {
    path: m.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != r) {
    let {
      channelId: t,
      guildId: a,
      messageId: n
    } = r.params, [o, d] = (0, l.Z)(i.getCurrentRoute());
    if (o === a && d === t)
      return;
    (0, s.z)() ? (!1 !== u && (0, c.vp)({
      screen: 'guilds',
      guildId: a,
      channelId: t,
      resetRoot: u
    }), null != t && (!0 !== u || e.openChannel) && (0, c.k4)({
      channelId: t,
      guildId: a,
      messageId: n,
      replaceChannelAndFixRoot: void 0,
      useScreen: h
    })) : null == t || !1 !== u ? (0, c.vp)({
      screen: 'guilds',
      guildId: a,
      channelId: t,
      resetRoot: u
    }) : null != a && (0, c.k4)({
      channelId: t,
      guildId: a,
      messageId: n,
      replaceChannelAndFixRoot: u,
      useScreen: h
    });
  }
  return;
}
if (a.startsWith('/member-verification/')) {
  let e = (0, n.LX)(a, {
    path: m.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?')
  });
  null != e && (0, c.fA)(e.params.guildId, e.params.inviteCode);
  return;
}
if (a.startsWith('/login') || a.startsWith('/register')) {
  (0, c.Bj)();
  return;
}
if (a.startsWith('/account-standing')) {
  i.navigate({
    name: 'account-standing',
    params: void 0
  });
  return;
}
(0, c.vp)({
  screen: 'messages',
  resetRoot: u
});
  }
  executeRouteRewrites(e, t) {
if (this.routeChangeCount += 1, this.routeChangeCount < 10)
  for (let r of this.rewrites) {
    let n = (0, h.s1)().location.pathname,
      i = r(e, t);
    if (null != i)
      return (0, a.n_)({
        message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
        data: {
          replacePath: i.path,
          previousPath: n
        }
      }), (0, h.dL)(i.path, i.state), !0;
  }
else
  throw Error('RouteManager: Something has gone horribly wrong with rewrites');
return !1;
  }
  cleanup() {
var e, t;
null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, i.Z.removeChangeListener(this.handleConnectionChange);
  }
  addRouteChangeListener(e) {
return null != this.unlistenHistory && e((0, h.s1)().location, 'REPLACE'), this.listeners.add(e), () => this.removeRouteChangeListener(e);
  }
  addRouteRewriter(e) {
if (null != this.unlistenHistory) {
  let t = e((0, h.s1)().location, (0, h.s1)().action);
  null != t && (0, h.dL)(t.path, t.state);
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
return (0, h.s1)();
  }
  constructor() {
g(this, 'unlistenHistory', void 0), g(this, 'unlistenKeyboardChange', void 0), g(this, 'rewrites', new Set()), g(this, 'listeners', new Set()), g(this, 'routeChangeCount', 0), g(this, 'timer', -1), g(this, 'connected', !1), g(this, 'handleConnectionChange', () => {
  let e = i.Z.isConnected(),
    t = e && !this.connected;
  this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, h.s1)().location, 'REPLACE'));
}), g(this, 'handleRouteChange', (e, t) => {
  if (this.executeRouteRewrites(e, t))
    return;
  let r = u.Z.getState();
  for (let a of (r.basePath !== e.pathname && r.resetPath(e.pathname), this.listeners))
    try {
      a(e, t);
    } catch (e) {
      console.warn('RouteManager.listen: A route listener has caused an error', e.message);
    }
  this.convertRouteToNavigation(e, t), this.routeChangeCount = 0;
}), g(this, 'handleKeybindRouteChange', e => {
  let {
    path: t
  } = e;
  null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer);
}), g(this, 'flushRoute', () => {
  clearTimeout(this.timer);
  let e = u.Z.getState();
  null != e.path && (0, h.uL)(e.path);
});
  }
}();