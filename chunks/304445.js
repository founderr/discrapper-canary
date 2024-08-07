n(47120), n(411104);
var i = n(934951),
  o = n(266067),
  r = n(38618),
  a = n(777639),
  l = n(311163),
  c = n(272423),
  s = n(378788),
  u = n(700615),
  d = n(905423),
  h = n(703656),
  g = n(981631);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
t.Z = new class e {
  initialize() {
this.cleanup(), this.unlistenHistory = (0, h.s1)().listen(this.handleRouteChange);
let {
  pathname: e
} = (0, h.s1)().location;
d.Z.getState().resetPath(e), this.unlistenKeyboardChange = d.Z.subscribe(this.handleKeybindRouteChange), r.Z.addChangeListener(this.handleConnectionChange);
  }
  convertRouteToNavigation(e, t) {
var n;
let {
  pathname: i
} = e, r = (0, a.D)();
if (null == r || !r.isReady())
  return;
let d = e.navigationReplace,
  h = null !== (n = e.useScreen) && void 0 !== n && n;
if (i === g.Z5c.NOTIFICATIONS) {
  (0, c.vp)({
    screen: 'notifications',
    resetRoot: d
  });
  return;
}
if (i.startsWith('/channels/')) {
  let t = (0, o.LX)(i, {
    path: ''.concat(g.Z5c.CHANNEL(':guildId', ':channelId?')).concat(g.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(':voiceGuildId', ':voiceChannelId', ':voiceMessageId?'))
  });
  if (null != t) {
    let {
      voiceGuildId: e,
      voiceChannelId: n,
      voiceMessageId: i
    } = t.params;
    !(0, u.ur)() && (0, c.k4)({
      channelId: n,
      guildId: e,
      messageId: i,
      replaceChannelAndFixRoot: d,
      useScreen: h
    });
    return;
  }
  let n = (0, o.LX)(i, {
    path: g.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
  });
  if (null != n) {
    let {
      channelId: t,
      guildId: i,
      messageId: o
    } = n.params, [a, u] = (0, l.Z)(r.getCurrentRoute());
    if (a === i && u === t)
      return;
    if ((0, s.z)()) {
      if (!0 === d && e.openChannel && null != t) {
        (0, c.k4)({
          channelId: t,
          guildId: i,
          messageId: o,
          replaceChannelAndFixRoot: d,
          useScreen: h,
          openChannel: !0
        });
        return;
      }!1 !== d && (0, c.vp)({
        screen: 'guilds',
        guildId: i,
        channelId: t,
        resetRoot: d
      }), null != t && !0 !== d && (0, c.k4)({
        channelId: t,
        guildId: i,
        messageId: o,
        replaceChannelAndFixRoot: void 0,
        useScreen: h
      });
    } else
      null == t || !1 !== d ? (0, c.vp)({
        screen: 'guilds',
        guildId: i,
        channelId: t,
        resetRoot: d
      }) : null != i && (0, c.k4)({
        channelId: t,
        guildId: i,
        messageId: o,
        replaceChannelAndFixRoot: d,
        useScreen: h
      });
  }
  return;
}
if (i.startsWith('/member-verification/')) {
  let e = (0, o.LX)(i, {
    path: g.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?')
  });
  null != e && (0, c.fA)(e.params.guildId, e.params.inviteCode);
  return;
}
if (i.startsWith('/login') || i.startsWith('/register')) {
  (0, c.Bj)();
  return;
}
if (i.startsWith('/account-standing')) {
  r.navigate({
    name: 'account-standing',
    params: void 0
  });
  return;
}
(0, c.vp)({
  screen: 'messages',
  resetRoot: d
});
  }
  executeRouteRewrites(e, t) {
if (this.routeChangeCount += 1, this.routeChangeCount < 10)
  for (let n of this.rewrites) {
    let o = (0, h.s1)().location.pathname,
      r = n(e, t);
    if (null != r)
      return (0, i.n_)({
        message: 'RouteManager.handleRouteChange: A route rewrite is replacing the current route',
        data: {
          replacePath: r.path,
          previousPath: o
        }
      }), (0, h.dL)(r.path, r.state), !0;
  }
else
  throw Error('RouteManager: Something has gone horribly wrong with rewrites');
return !1;
  }
  cleanup() {
var e, t;
null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (t = this.unlistenKeyboardChange) || void 0 === t || t.call(this), this.unlistenKeyboardChange = void 0, r.Z.removeChangeListener(this.handleConnectionChange);
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
m(this, 'unlistenHistory', void 0), m(this, 'unlistenKeyboardChange', void 0), m(this, 'rewrites', new Set()), m(this, 'listeners', new Set()), m(this, 'routeChangeCount', 0), m(this, 'timer', -1), m(this, 'connected', !1), m(this, 'handleConnectionChange', () => {
  let e = r.Z.isConnected(),
    t = e && !this.connected;
  this.connected = e, t && (this.routeChangeCount = 0, this.executeRouteRewrites((0, h.s1)().location, 'REPLACE'));
}), m(this, 'handleRouteChange', (e, t) => {
  if (this.executeRouteRewrites(e, t))
    return;
  let n = d.Z.getState();
  for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname), this.listeners))
    try {
      i(e, t);
    } catch (e) {
      console.warn('RouteManager.listen: A route listener has caused an error', e.message);
    }
  this.convertRouteToNavigation(e, t), this.routeChangeCount = 0;
}), m(this, 'handleKeybindRouteChange', e => {
  let {
    path: t
  } = e;
  null != t ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == t && clearTimeout(this.timer);
}), m(this, 'flushRoute', () => {
  clearTimeout(this.timer);
  let e = d.Z.getState();
  null != e.path && (0, h.uL)(e.path);
});
  }
}();