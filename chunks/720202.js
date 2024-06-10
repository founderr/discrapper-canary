"use strict";
n.r(t), n("47120");
var i, r, s, a, o = n("392711"),
  l = n.n(o),
  u = n("442837"),
  d = n("570140"),
  _ = n("601635"),
  c = n("592125"),
  E = n("271383");
let I = new _.default(E.default.isMember, (e, t) => {
  d.default.dispatch({
    type: "GUILD_MEMBERS_REQUEST",
    guildIds: [e],
    userIds: t
  })
});

function T() {
  I.reset()
}

function f(e, t) {
  return I.request(e, t), !1
}

function S(e, t) {
  return t.forEach(t => {
    let {
      author: n,
      mentions: i
    } = t;
    null != n && f(e, n.id), null == i || i.forEach(t => f(e, t.id))
  }), !1
}

function h(e) {
  let {
    channelId: t,
    messages: n
  } = e, i = c.default.getChannel(t);
  return null != i && null != i.guild_id && S(i.guild_id, n)
}

function A(e) {
  let {
    guildId: t,
    messages: n
  } = e;
  return null != t && S(t, l().flatten(n))
}
class m extends(i = u.default.Store) {
  initialize() {
    this.waitFor(c.default, E.default)
  }
  requestMember(e, t) {
    f(e, t)
  }
}
a = "GuildMemberRequesterStore", (s = "displayName") in(r = m) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new m(d.default, {
  CONNECTION_CLOSED: T,
  CONNECTION_OPEN: T,
  CONNECTION_RESUMED: function() {
    return I.requestUnacknowledged(), !1
  },
  GUILD_MEMBERS_CHUNK_BATCH: function(e) {
    let {
      chunks: t
    } = e;
    for (let e of t) e.members.forEach(t => {
      I.acknowledge(e.guildId, t.user.id)
    }), null != e.notFound && e.notFound.forEach(t => I.acknowledge(e.guildId, t));
    return !1
  },
  SEARCH_FINISH: A,
  MOD_VIEW_SEARCH_FINISH: A,
  LOCAL_MESSAGES_LOADED: h,
  LOAD_MESSAGES_SUCCESS: h,
  LOAD_MESSAGES_AROUND_SUCCESS: h,
  LOAD_PINNED_MESSAGES_SUCCESS: h,
  LOAD_RECENT_MENTIONS_SUCCESS: h
})