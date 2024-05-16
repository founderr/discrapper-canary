"use strict";
n.r(t), n.d(t, {
  MIN_REREQUEST_TIME: function() {
    return m
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
var l = n("524846"),
  a = n("911969"),
  u = n("592125"),
  i = n("271383"),
  o = n("430824"),
  s = n("594174"),
  r = n("483360"),
  d = n("823379"),
  c = n("5192"),
  p = n("280501");
n("892902");
let m = 1e3;

function f(e, t, n) {
  let l = u.default.getChannel(n);
  if (null == l) return [];
  let i = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
    o = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
    {
      users: s,
      roles: d
    } = r.default.queryMentionResults({
      query: t,
      channel: l,
      canMentionEveryone: !1,
      canMentionHere: !1,
      canMentionUsers: i,
      canMentionRoles: o,
      includeAllGuildUsers: !0,
      includeNonMentionableRoles: !0,
      checkRecentlyTalkedOnEmptyQuery: !1,
      limit: 15
    }),
    m = s.map(e => {
      var t;
      let a = c.default.getNickname(l.getGuildId(), n, e.user);
      return {
        type: p.SelectOptionType.USER,
        value: e.user.id,
        label: null !== (t = null != a ? a : e.user.globalName) && void 0 !== t ? t : e.user.username
      }
    });
  return [...m, ...d.map(e => ({
    type: p.SelectOptionType.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function S(e, t, n) {
  let l = u.default.getChannel(t);
  return null == l ? [] : r.default.queryApplicationCommandChannelResults({
    query: e,
    channel: l,
    channelTypes: n,
    limit: 15
  }).channels.map(e => ({
    type: p.SelectOptionType.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let a = o.default.getGuild(t);
  return e.map(e => {
    switch (e.type) {
      case l.SnowflakeSelectDefaultValueTypes.USER: {
        var t;
        let n = s.default.getUser(e.id);
        if (null == n) return null;
        let l = null != a ? i.default.getNick(a.id, n.id) : void 0;
        return {
          type: p.SelectOptionType.USER,
          value: n.id,
          label: null !== (t = null != l ? l : n.globalName) && void 0 !== t ? t : n.username
        }
      }
      case l.SnowflakeSelectDefaultValueTypes.ROLE: {
        if (null == a) return null;
        let t = o.default.getRole(a.id, e.id);
        if (null == t) return null;
        return {
          type: p.SelectOptionType.ROLE,
          value: t.id,
          label: t.name
        }
      }
      case l.SnowflakeSelectDefaultValueTypes.CHANNEL: {
        if (null == a) return null;
        let t = u.default.getChannel(e.id);
        if (null == t || t.guild_id !== a.id || n.length > 0 && !n.includes(t.type)) return null;
        return {
          type: p.SelectOptionType.CHANNEL,
          value: t.id,
          label: t.name
        }
      }
    }
  }).filter(d.isNotNullish)
}