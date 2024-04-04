"use strict";
n.r(t), n("47120");
var i, s, l, a, r = n("442837"),
  d = n("570140"),
  o = n("45114"),
  h = n("897473"),
  u = n("581883"),
  c = n("314897"),
  C = n("592125"),
  g = n("984933"),
  f = n("271383"),
  p = n("430824"),
  I = n("306680"),
  v = n("9156"),
  E = n("70956"),
  S = n("709054"),
  y = n("981631");
let m = new Set,
  _ = {},
  N = {};

function w(e, t) {
  let n = _[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    v.default.isOptInEnabled(e) && !(null === (i = C.default.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) && null == I.default.ackMessageId(t) && d.default.wait(() => (0, o.ack)(t, !0, !0, S.default.atPreviousMillisecond(t)))
  }
}

function L(e) {
  var t;
  if (null != _[e]) return;
  let n = g.default.getChannels(e)[0, g.GUILD_SELECTABLE_CHANNELS_KEY].map(e => e.channel.id),
    i = null === (t = f.default.getMember(e, c.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == i) return;
  _[e] = new Set;
  let s = new Date(i).getTime();
  0 !== n.length && (_[e] = new Set(n.filter(t => {
    let n = S.default.extractTimestamp(t);
    return null == I.default.getTrackedAckMessageId(t) && n > Date.now() - E.default.Millis.WEEK && n > u.default.getGuildRecentsDismissedAt(e) && n > s && !v.default.isChannelOrParentOptedIn(e, t)
  })), N[e] = Date.now())
}

function T() {
  S.default.keys(_).forEach(e => {
    let t = _[e];
    _[e] = new Set([...t].filter(t => !v.default.isChannelOrParentOptedIn(e, t)))
  })
}
class O extends(i = r.default.Store) {
  initialize() {
    this.waitFor(g.default, c.default, f.default, v.default, I.default, u.default), this.syncWith([v.default], T)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == _[e] && L(e), null != e && null !== (t = _[e]) && void 0 !== t ? t : m
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) return !1;
    let i = p.default.getGuild(e);
    return !!(null != i && i.hasFeature(y.GuildFeatures.COMMUNITY)) && (null != e && null == _[e] && L(e), (null === (n = _[e]) || void 0 === n ? void 0 : n.has(t)) && null == I.default.getTrackedAckMessageId(t))
  }
}
a = "NewChannelsStore", (l = "displayName") in(s = O) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, t.default = new O(d.default, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == _[t]) return !1;
    n.forEach(e => _[t].delete(e)), 0 === _[t].size && delete _[t]
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return null != t && (null == _[t] || N[t] < Date.now() - E.default.Millis.HOUR ? (L(t), !0) : (null != n && w(t, n), !1))
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === h.SidebarType.VIEW_CHANNEL && (w(t, n), !1)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (w(t, n), !1)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete _[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    !n.isVocal() && (_[n.guild_id] = null !== (t = _[n.guild_id]) && void 0 !== t ? t : new Set, _[n.guild_id].add(n.id))
  }
})