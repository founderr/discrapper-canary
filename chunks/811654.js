"use strict";
n.r(l), n.d(l, {
  MIN_REREQUEST_TIME: function() {
    return p
  },
  getSnowflakeSelectDefaultValues: function() {
    return C
  },
  queryChannels: function() {
    return S
  },
  queryMentionables: function() {
    return f
  }
}), n("47120");
var t = n("524846"),
  a = n("911969"),
  s = n("592125"),
  u = n("271383"),
  i = n("430824"),
  o = n("594174"),
  r = n("483360"),
  d = n("823379"),
  c = n("5192"),
  m = n("280501");
n("892902");
let p = 1e3;

function f(e, l, n) {
  let t = s.default.getChannel(n);
  if (null == t) return [];
  let u = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
    i = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
    {
      users: o,
      roles: d
    } = r.default.queryMentionResults({
      query: l,
      channel: t,
      canMentionEveryone: !1,
      canMentionHere: !1,
      canMentionUsers: u,
      canMentionRoles: i,
      includeAllGuildUsers: !0,
      includeNonMentionableRoles: !0,
      checkRecentlyTalkedOnEmptyQuery: !1,
      limit: 15
    }),
    p = o.map(e => {
      var l;
      let a = c.default.getNickname(t.getGuildId(), n, e.user);
      return {
        type: m.SelectOptionType.USER,
        value: e.user.id,
        label: null !== (l = null != a ? a : e.user.globalName) && void 0 !== l ? l : e.user.username
      }
    });
  return [...p, ...d.map(e => ({
    type: m.SelectOptionType.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function S(e, l, n) {
  let t = s.default.getChannel(l);
  return null == t ? [] : r.default.queryApplicationCommandChannelResults({
    query: e,
    channel: t,
    channelTypes: n,
    limit: 15
  }).channels.map(e => ({
    type: m.SelectOptionType.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function C(e, l) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let a = i.default.getGuild(l);
  return e.map(e => {
    switch (e.type) {
      case t.SnowflakeSelectDefaultValueTypes.USER: {
        var l;
        let n = o.default.getUser(e.id);
        if (null == n) return null;
        let t = null != a ? u.default.getNick(a.id, n.id) : void 0;
        return {
          type: m.SelectOptionType.USER,
          value: n.id,
          label: null !== (l = null != t ? t : n.globalName) && void 0 !== l ? l : n.username
        }
      }
      case t.SnowflakeSelectDefaultValueTypes.ROLE: {
        if (null == a) return null;
        let l = i.default.getRole(a.id, e.id);
        if (null == l) return null;
        return {
          type: m.SelectOptionType.ROLE,
          value: l.id,
          label: l.name
        }
      }
      case t.SnowflakeSelectDefaultValueTypes.CHANNEL: {
        if (null == a) return null;
        let l = s.default.getChannel(e.id);
        if (null == l || l.guild_id !== a.id || n.length > 0 && !n.includes(l.type)) return null;
        return {
          type: m.SelectOptionType.CHANNEL,
          value: l.id,
          label: l.name
        }
      }
    }
  }).filter(d.isNotNullish)
}