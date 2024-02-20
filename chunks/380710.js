"use strict";
n.r(t), n.d(t, {
  useGuildOnboardingSettingsAvailable: function() {
    return _
  },
  isGuildOnboardingSettingsAvailable: function() {
    return m
  },
  isBlockedByOnboarding: function() {
    return S
  },
  getChannelCoverageForOnboarding: function() {
    return T
  },
  useChannelCoverageForOnboarding: function() {
    return I
  },
  isChattableChannelId: function() {
    return v
  },
  isChattableChannel: function() {
    return C
  },
  useIsChattableChannel: function() {
    return A
  },
  getMinimumSetOfDefaultChannelIds: function() {
    return R
  },
  getChattableDefaultChannels: function() {
    return O
  },
  useChattableDefaultChannels: function() {
    return D
  },
  getSelectedRoleIds: function() {
    return b
  },
  getSelectedChannelIds: function() {
    return P
  }
}), n("702976"), n("222007"), n("808653"), n("424973"), n("834022");
var i = n("446674"),
  r = n("656038"),
  s = n("42203"),
  a = n("923959"),
  o = n("305961"),
  l = n("957255"),
  u = n("568734"),
  c = n("449008"),
  d = n("991170"),
  p = n("648747"),
  h = n("49111"),
  f = n("657944");
let E = new Date(16824888e5);

function _(e) {
  let t = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(e)),
    n = !!(null == t ? void 0 : t.hasFeature(h.GuildFeatures.COMMUNITY)),
    r = l.default.can(h.Permissions.MANAGE_GUILD, t),
    s = l.default.can(h.Permissions.MANAGE_ROLES, t);
  return n && r && s
}

function m(e) {
  let t = o.default.getGuild(e),
    n = !!(null == t ? void 0 : t.hasFeature(h.GuildFeatures.COMMUNITY)),
    i = l.default.can(h.Permissions.MANAGE_GUILD, t),
    r = l.default.can(h.Permissions.MANAGE_ROLES, t);
  return n && i && r
}

function S(e, t) {
  var n;
  if (null == e || !e.hasFeature(h.GuildFeatures.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < E) return !1;
  let i = null !== (n = t.flags) && void 0 !== n ? n : 0;
  return u.hasFlag(i, f.GuildMemberFlags.STARTED_ONBOARDING) && !u.hasFlag(i, f.GuildMemberFlags.COMPLETED_ONBOARDING)
}

function g(e, t, n) {
  let i = new Set;
  e.forEach(e => {
    e.options.forEach(e => {
      var t;
      null == e || null === (t = e.channelIds) || void 0 === t || t.forEach(e => {
        i.add(e)
      })
    })
  }), t.forEach(e => i.add(e));
  let s = n.filter(e => !e.isCategory() && !e.isThread() && !(0, r.default)(e)),
    a = s.filter(e => i.has(e.id) || null != e.parent_id && i.has(e.parent_id)),
    o = s.filter(e => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id)));
  return [a, o]
}

function T(e, t, n) {
  let i = a.default.getChannels(e);
  return g(t, n, i[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function I(e, t, n) {
  let r = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e));
  return g(t, n, r[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function v(e) {
  let t = s.default.getChannel(e);
  return C(t)
}

function C(e) {
  return !!(null != e && (0, p.canChannelBeDefault)(e.guild_id, e.id)) && (e.isForumChannel() ? d.default.canEveryoneRole(h.Permissions.SEND_MESSAGES_IN_THREADS, e) : d.default.canEveryoneRole(h.Permissions.SEND_MESSAGES, e))
}

function A(e) {
  let t = (0, i.useStateFromStores)([s.default], () => s.default.getChannel(e));
  return (0, c.isNotNullish)(t) && C(t)
}

function R(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
    r = y(e, t).map(e => e.id).filter(i);
  return n.forEach(t => {
    var n, s;
    if (!t.required) return;
    let a = y(e, null !== (s = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== s ? s : []).map(e => e.id),
      o = t.options.reduce((t, n) => {
        if (null == n.channelIds) return [];
        let s = y(e, n.channelIds),
          a = s.map(e => e.id).filter(e => i(e) && !r.includes(e));
        return a.length < t.length ? a : t
      }, a);
    r.push(...o)
  }), r
}

function N(e, t) {
  let n = e.filter(e => {
    let n = t.find(t => {
      let {
        channel: n
      } = t;
      return n.id === e
    });
    return C(null == n ? void 0 : n.channel)
  });
  return n
}

function y(e, t) {
  let n = a.default.getChannels(e),
    i = n[a.GUILD_SELECTABLE_CHANNELS_KEY];
  return i.filter(e => {
    let {
      channel: n
    } = e;
    return (0, p.canChannelBeDefault)(n.guild_id, n.id) && (t.includes(n.id) && !n.isCategory() || !n.isThread() && null != n.parent_id && t.includes(n.parent_id))
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })
}

function O(e, t) {
  let n = y(e, t),
    i = a.default.getChannels(e),
    r = i[a.GUILD_SELECTABLE_CHANNELS_KEY],
    s = N(n.map(e => {
      let {
        id: t
      } = e;
      return t
    }), r);
  return [s, n]
}

function D(e, t) {
  let n = function(e, t) {
      let n = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e)),
        r = n[a.GUILD_SELECTABLE_CHANNELS_KEY];
      return r.filter(e => {
        let {
          channel: n
        } = e;
        return (0, p.canChannelBeDefault)(n.guild_id, n.id) && (t.includes(n.id) && !n.isCategory() || !n.isThread() && null != n.parent_id && t.includes(n.parent_id))
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      })
    }(e, t),
    r = (0, i.useStateFromStores)([a.default], () => a.default.getChannels(e)),
    s = r[a.GUILD_SELECTABLE_CHANNELS_KEY],
    o = N(n.map(e => {
      let {
        id: t
      } = e;
      return t
    }), s);
  return [o, n]
}

function b(e) {
  return new Set(e.map(e => e.roleIds).flat().filter(c.isNotNullish))
}

function P(e) {
  return new Set(e.map(e => e.channelIds).flat().filter(c.isNotNullish))
}