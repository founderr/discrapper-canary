"use strict";
n.r(t), n.d(t, {
  MIN_REREQUEST_TIME: function() {
    return p
  },
  getSnowflakeSelectDefaultValues: function() {
    return S
  },
  queryChannels: function() {
    return C
  },
  queryMentionables: function() {
    return f
  }
}), n("47120");
var l = n("524846"),
  a = n("911969"),
  r = n("592125"),
  s = n("271383"),
  u = n("430824"),
  o = n("594174"),
  i = n("483360"),
  d = n("823379"),
  c = n("5192"),
  m = n("280501");
n("892902");
let p = 1e3;

function f(e, t, n) {
  let l = r.default.getChannel(n);
  if (null == l) return [];
  let s = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
    u = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
    {
      users: o,
      roles: d
    } = i.default.queryMentionResults({
      query: t,
      channel: l,
      canMentionEveryone: !1,
      canMentionHere: !1,
      canMentionUsers: s,
      canMentionRoles: u,
      includeAllGuildUsers: !0,
      includeNonMentionableRoles: !0,
      checkRecentlyTalkedOnEmptyQuery: !1,
      limit: 15
    }),
    p = o.map(e => {
      var t;
      let a = c.default.getNickname(l.getGuildId(), n, e.user);
      return {
        type: m.SelectOptionType.USER,
        value: e.user.id,
        label: null !== (t = null != a ? a : e.user.globalName) && void 0 !== t ? t : e.user.username
      }
    });
  return [...p, ...d.map(e => ({
    type: m.SelectOptionType.ROLE,
    value: e.id,
    label: e.name
  }))]
}

function C(e, t, n) {
  let l = r.default.getChannel(t);
  return null == l ? [] : i.default.queryApplicationCommandChannelResults({
    query: e,
    channel: l,
    channelTypes: n,
    limit: 15
  }).channels.map(e => ({
    type: m.SelectOptionType.CHANNEL,
    value: e.id,
    label: e.name
  }))
}

function S(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  if (null == e) return;
  let a = u.default.getGuild(t);
  return e.map(e => {
    switch (e.type) {
      case l.SnowflakeSelectDefaultValueTypes.USER: {
        var t;
        let n = o.default.getUser(e.id);
        if (null == n) return null;
        let l = null != a ? s.default.getNick(a.id, n.id) : void 0;
        return {
          type: m.SelectOptionType.USER,
          value: n.id,
          label: null !== (t = null != l ? l : n.globalName) && void 0 !== t ? t : n.username
        }
      }
      case l.SnowflakeSelectDefaultValueTypes.ROLE: {
        if (null == a) return null;
        let t = u.default.getRole(a.id, e.id);
        if (null == t) return null;
        return {
          type: m.SelectOptionType.ROLE,
          value: t.id,
          label: t.name
        }
      }
      case l.SnowflakeSelectDefaultValueTypes.CHANNEL: {
        if (null == a) return null;
        let t = r.default.getChannel(e.id);
        if (null == t || t.guild_id !== a.id || n.length > 0 && !n.includes(t.type)) return null;
        return {
          type: m.SelectOptionType.CHANNEL,
          value: t.id,
          label: t.name
        }
      }
    }
  }).filter(d.isNotNullish)
}