"use strict";
n.r(t), n.d(t, {
  useManageResourcePermissions: function() {
    return _
  },
  getManageResourcePermissions: function() {
    return T
  }
}), n("222007");
var i = n("884691"),
  r = n("316693"),
  u = n("446674"),
  a = n("813006");
n("923959");
var s = n("957255"),
  l = n("697218");
n("991170");
var o = n("270161"),
  c = n("843455");
let d = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1
  },
  f = (e, t, n, i) => {
    if (null == e) return !1;
    if (n) return !0;
    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
    if ("userId" in e) return i && null != t && e.userId === t.id;
    if ("user" in e) {
      var r;
      return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
    }
    return !1
  },
  E = e => {
    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
    let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, c.Permissions.CREATE_EVENTS), r.default.combine(t, c.Permissions.MANAGE_EVENTS)]
  },
  _ = e => {
    let [t, n] = e instanceof a.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : E(e), [r, o, _, T] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), s.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), s.default.can(t, e), s.default.can(n, e)]), S = (0, u.useStateFromStores)([l.default], () => l.default.getCurrentUser()), I = i.useCallback(e => f(e, S, o, r), [r, o, S]), h = i.useCallback(e => f(e, S, T, _), [T, _, S]);
    return null == e ? d : {
      canCreateExpressions: r,
      canCreateGuildEvent: _,
      canManageAllExpressions: o,
      canManageAllEvents: T,
      canManageGuildExpression: I,
      canManageGuildEvent: h
    }
  },
  T = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
      [i, r] = e instanceof a.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : E(e),
      u = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      o = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      _ = t.can(i, e),
      T = t.can(r, e),
      S = n.getCurrentUser();
    return null == e ? d : {
      canCreateExpressions: u,
      canCreateGuildEvent: _,
      canManageAllExpressions: o,
      canManageAllEvents: T,
      canManageGuildExpression: e => f(e, S, o, u),
      canManageGuildEvent: e => f(e, S, T, _)
    }
  }