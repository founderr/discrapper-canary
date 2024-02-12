"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var i = n("446674"),
  s = n("913144"),
  l = n("267363"),
  a = n("582713"),
  r = n("374363"),
  d = n("271938"),
  h = n("42203"),
  o = n("923959"),
  u = n("26989"),
  c = n("305961"),
  C = n("660478"),
  g = n("282109"),
  f = n("718517"),
  p = n("299039"),
  I = n("49111");
let E = new Set,
  S = {},
  v = {};

function y(e, t) {
  let n = S[e];
  if (null != n && null != t && n.has(t)) {
    var i;
    g.default.isOptInEnabled(e) && !(null === (i = h.default.getChannel(t)) || void 0 === i ? void 0 : i.isThread()) && null == C.default.ackMessageId(t) && s.default.wait(() => (0, l.ack)(t, !0, !0, p.default.atPreviousMillisecond(t)))
  }
}

function _(e) {
  var t;
  if (null != S[e]) return;
  let n = o.default.getChannels(e),
    i = n[0, o.GUILD_SELECTABLE_CHANNELS_KEY].map(e => e.channel.id),
    s = null === (t = u.default.getMember(e, d.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
  if (null == s) return;
  S[e] = new Set;
  let l = new Date(s).getTime();
  0 !== i.length && (S[e] = new Set(i.filter(t => {
    let n = p.default.extractTimestamp(t);
    return null == C.default.getTrackedAckMessageId(t) && n > Date.now() - f.default.Millis.WEEK && n > r.default.getGuildRecentsDismissedAt(e) && n > l && !g.default.isChannelOrParentOptedIn(e, t)
  })), v[e] = Date.now())
}

function m() {
  p.default.keys(S).forEach(e => {
    let t = S[e];
    S[e] = new Set([...t].filter(t => !g.default.isChannelOrParentOptedIn(e, t)))
  })
}
class w extends i.default.Store {
  initialize() {
    this.waitFor(o.default, d.default, u.default, g.default, C.default, r.default), this.syncWith([g.default], m)
  }
  getNewChannelIds(e) {
    var t;
    return null != e && null == S[e] && _(e), null != e && null !== (t = S[e]) && void 0 !== t ? t : E
  }
  shouldIndicateNewChannel(e, t) {
    var n;
    if (null == e) return !1;
    let i = c.default.getGuild(e);
    return !!(null != i && i.hasFeature(I.GuildFeatures.COMMUNITY)) && (null != e && null == S[e] && _(e), (null === (n = S[e]) || void 0 === n ? void 0 : n.has(t)) && null == C.default.getTrackedAckMessageId(t))
  }
}
w.displayName = "NewChannelsStore";
var N = new w(s.default, {
  BULK_CLEAR_RECENTS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e;
    if (null == S[t]) return !1;
    n.forEach(e => S[t].delete(e)), 0 === S[t].size && delete S[t]
  },
  CHANNEL_ACK: () => !0,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t) return !1;
    let i = S[t];
    return null == i || v[t] < Date.now() - f.default.Millis.HOUR ? (_(t), !0) : (null != n && y(t, n), !1)
  },
  SIDEBAR_VIEW_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      sidebarType: i
    } = e;
    return null != t && i === a.SidebarType.VIEW_CHANNEL && (y(t, n), !1)
  },
  SIDEBAR_VIEW_GUILD: function(e) {
    let {
      guildId: t,
      baseChannelId: n
    } = e;
    return null != t && (y(t, n), !1)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete S[t.id]
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    !n.isVocal() && (S[n.guild_id] = null !== (t = S[n.guild_id]) && void 0 !== t ? t : new Set, S[n.guild_id].add(n.id))
  }
})