"use strict";
let i;
n.r(t), n("47120");
var r, s, a, o, l = n("392711"),
  u = n.n(l),
  d = n("442837"),
  _ = n("570140"),
  c = n("177523"),
  E = n("353926"),
  I = n("480384"),
  T = n("653733"),
  f = n("768419"),
  S = n("314897"),
  h = n("439170"),
  A = n("433355"),
  m = n("592125"),
  N = n("486472"),
  p = n("271383"),
  O = n("430824"),
  C = n("19780"),
  R = n("699516"),
  g = n("944486"),
  L = n("914010"),
  v = n("981631");
let D = new c.default(e => {
  for (let t in e) null == O.default.getGuild(t) && !N.default.isUnavailable(t) && delete e[t];
  _.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: e
  })
});

function M(e, t) {
  let n = {};
  D.forEach(r => {
    var s;
    r !== L.default.getGuildId() && r !== C.default.getGuildId() && r !== (null === (s = m.default.getChannel(g.default.getChannelId())) || void 0 === s ? void 0 : s.getGuildId()) && !(0, T.isGuildEligibleForRecentlyOnlineExperiment)(r) && (null == i || i.guildId !== r) && (D.clearWithoutFlushing(r, e), t && (n[r] = D.get(r)))
  }), !u().isEmpty(n) && _.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: n
  })
}

function y(e, t) {
  return D.subscribeToGuild(e), null != t && A.default.getSection(t) === v.ChannelSections.MEMBERS && P(e, t, c.DEFAULT_RANGES)
}

function P(e, t, n) {
  if (t === h.EVERYONE_CHANNEL_ID) return D.subscribeChannel(e, t, n);
  let i = m.default.getChannel(t);
  if (null == i) return !1;
  let r = i.getGuildId();
  return (r !== e && e === v.FAVORITES && D.subscribeToGuild(r), null != i && i.isThread()) ? i.type === v.ChannelTypes.ANNOUNCEMENT_THREAD ? D.subscribeChannel(r, i.parent_id, n) : !!i.isActiveThread() && D.subscribeThreadMemberList(r, t, g.default.getChannelId()) : D.subscribeChannel(r, t, n)
}

function U(e) {
  let {
    type: t
  } = e;
  "CONNECTION_OPEN" === t && M(!0, !1), Object.keys(O.default.getGuilds()).forEach(e => {
    (0, T.isGuildEligibleForRecentlyOnlineExperiment)(e) && P(e, h.EVERYONE_CHANNEL_ID, c.DEFAULT_RANGES)
  });
  let n = L.default.getGuildId();
  null != n && y(n, g.default.getChannelId(n));
  let i = {};
  D.forEach(e => {
    null == O.default.getGuild(e) ? D.clearWithoutFlushing(e, !0) : i[e] = D.get(e)
  }), !u().isEmpty(i) && _.default.dispatch({
    type: "GUILD_SUBSCRIPTIONS_FLUSH",
    subscriptions: i
  })
}

function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  return !N.default.isUnavailable(t) && y(t, n)
}

function G() {
  return y(L.default.getGuildId(), g.default.getChannelId())
}

function w() {
  let e = f.default.getSyncingWith();
  if (null == e) null != i && (D.unsubscribeUser(i.guildId, i.userId), i = null);
  else {
    let {
      userId: t
    } = e;
    if (null != i && i.userId === t || R.default.isFriend(t)) return !1;
    let n = p.default.memberOf(t);
    if (0 === n.length) return !1;
    let [r] = n;
    i = {
      guildId: r,
      userId: t
    }, D.subscribeUser(r, t)
  }
  return !1
}
class k extends(r = d.default.Store) {
  initialize() {
    this.waitFor(m.default, O.default, L.default, g.default, C.default, S.default, A.default, E.default, I.default), this.syncWith([f.default], w), this.syncWith([A.default], G)
  }
  getSubscribedThreadIds() {
    return D.getSubscribedThreadIds()
  }
  isSubscribedToThreads(e) {
    return D.isSubscribedToThreads(e)
  }
  isSubscribedToAnyMember(e) {
    return D.isSubscribedToAnyMember(e)
  }
  isSubscribedToMemberUpdates(e) {
    return D.isSubscribedToMemberUpdates(e)
  }
  isSubscribedToAnyGuildChannel(e) {
    let t = D.get(e).channels;
    return null != t && Object.keys(t).length > 0
  }
}
o = "GuildSubscriptionsStore", (a = "displayName") in(s = k) ? Object.defineProperty(s, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = o, t.default = new k(_.default, {
  CONNECTION_OPEN: U,
  CONNECTION_RESUMED: U,
  CONNECTION_CLOSED: function() {
    M(!1, !1)
  },
  IDLE: function(e) {
    let {
      idle: t
    } = e;
    if (!t) return !1;
    M(!1, !0)
  },
  LOGOUT: function() {
    D.reset()
  },
  VOICE_CHANNEL_SELECT: b,
  CHANNEL_SELECT: b,
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.id === L.default.getGuildId() && G()
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    D.clearWithoutFlushing(t.id, !0)
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
    let {
      guildId: t,
      userIds: n
    } = e;
    return n.forEach(e => {
      e !== S.default.getId() && D.subscribeUser(t, e)
    }), !1
  },
  GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
    let {
      guildId: t,
      userIds: n
    } = e;
    return n.forEach(e => {
      D.unsubscribeUser(t, e)
    }), !1
  },
  GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    D.subscribeToMemberUpdates(t)
  },
  GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    D.unsubscribeFromMemberUpdates(t)
  },
  GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
    let {
      guildId: t,
      channelId: n,
      ranges: i
    } = e;
    return P(t, n, i)
  },
  GUILD_SUBSCRIPTIONS: function(e) {
    let {
      guildId: t
    } = e;
    return D.subscribeToGuild(t)
  },
  CHANNEL_PRELOAD: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return y(t, n)
  },
  INBOX_OPEN: function(e) {
    let {
      guildIds: t
    } = e;
    for (let e of t) null != e && D.subscribeToGuild(e);
    return !1
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    return t.isArchivedThread() ? D.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && g.default.getChannelId() === t.id && void D.subscribeThreadMemberList(t.guild_id, t.id, g.default.getChannelId())
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return D.unsubscribeThreadMemberList(t.guild_id, t.id)
  },
  THREAD_LIST_SYNC: G
})