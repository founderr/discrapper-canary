"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var i = n("316693"),
  r = n("446674"),
  s = n("913144"),
  a = n("7331"),
  o = n("736271"),
  l = n("858560"),
  u = n("808388"),
  c = n("828674"),
  d = n("866595"),
  p = n("38654"),
  h = n("42203"),
  f = n("26989"),
  E = n("305961"),
  _ = n("697218"),
  m = n("49111");
let S = {},
  g = new Set;

function T(e) {
  let {
    guildId: t,
    role: n,
    isPreviewingRoles: i
  } = e;
  return !!(0, c.isSubscriptionRole)(n) && (!!(i || (0, c.isSubscriptionRoleAvailableForPurchase)(null != n ? n : void 0) || function(e, t) {
    if (null == e) return !1;
    let n = _.default.getCurrentUser();
    if (null == n) return !1;
    let i = f.default.getMember(t, n.id);
    return null != i && i.roles.includes(e.id)
  }(n, t)) || !1)
}

function I(e, t) {
  if (!t.hasFeature(m.GuildFeatures.CREATOR_MONETIZABLE) && !t.hasFeature(m.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
  let n = p.default.isViewingServerShop(t.id);
  for (let i of Object.keys(e.permissionOverwrites)) {
    let r = t.getRole(i);
    if (!T({
        guildId: t.id,
        role: r,
        isPreviewingRoles: n
      })) continue;
    let s = e.permissionOverwrites[i];
    if ((0, d.isChannelAccessGrantedBy)(e, s)) return !0
  }
  let r = t.getRole(t.id),
    s = null != r && !i.default.has(r.permissions, m.Permissions.VIEW_CHANNEL),
    a = (0, d.isChannelAccessDeniedBy)(e, e.permissionOverwrites[t.id]);
  if (s && !a) {
    for (let e of Object.values(t.roles))
      if (T({
          guildId: t.id,
          role: e,
          isPreviewingRoles: n
        }) && (0, d.isAllChannelsRole)(e)) return !0
  }
  return !1
}

function v(e, t) {
  let n = S[e];
  if (null == n) return !1;
  let i = h.default.getChannel(t);
  if (null == i) return !1;
  let r = E.default.getGuild(i.getGuildId());
  if (null == r) return !1;
  let s = n.has(t),
    a = I(i, r);
  return s !== a && (a ? n.add(t) : n.delete(t), !0)
}

function C() {
  S = {}, g.clear()
}

function A(e) {
  let {
    guild: t
  } = e;
  delete S[t.id]
}

function R(e) {
  let {
    guildId: t
  } = e;
  delete S[t]
}

function N(e) {
  let {
    channel: t
  } = e;
  return null != t.guild_id && v(t.guild_id, t.id)
}
class y extends r.default.Store {
  initialize() {
    this.waitFor(E.default, h.default, p.default), l.GuildRoleSubscriptionUsersExperiment.subscribe({
      location: "1"
    }, () => C())
  }
  isChannelGated(e, t) {
    if (null == e) return !1;
    let n = S[e];
    return null == n && (! function(e) {
      let t = E.default.getGuild(e);
      if (null == t) return;
      let n = S[e] = new Set;
      if (!t.hasFeature(m.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) || !(0, u.isGuildEligibleForRoleSubscriptions)(e) && !(0, a.isExpeditedMonetizationOnboardingGuild)(t)) return;
      let i = h.default.getMutableGuildChannelsForGuild(e);
      for (let e in i) {
        let r = i[e];
        I(r, t) && n.add(r.id)
      }
    }(e), n = S[e]), null != n && n.has(t)
  }
  isChannelGatedAndVisible(e, t) {
    return null != e && this.isChannelGated(e, t) && !g.has(e)
  }
}
y.displayName = "GatedChannelStore";
var O = new y(s.default, {
  CONNECTION_OPEN: C,
  OVERLAY_INITIALIZE: C,
  CACHE_LOADED_LAZY: C,
  GUILD_CREATE: A,
  GUILD_UPDATE: A,
  GUILD_DELETE: A,
  GUILD_ROLE_CREATE: R,
  GUILD_ROLE_UPDATE: R,
  GUILD_ROLE_DELETE: R,
  IMPERSONATE_UPDATE: R,
  IMPERSONATE_STOP: R,
  CHANNEL_CREATE: N,
  CHANNEL_DELETE: N,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let e of t) null != e.guild_id && v(e.guild_id, e.id) && (n = !0);
    return n
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
    let {
      guildId: t,
      restrictions: n
    } = e;
    (0, o.isRestrictedFromShowingGuildPurchaseEntryPoints)(n) ? g.add(t): g.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    g.add(t)
  }
})