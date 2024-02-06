"use strict";
a.r(t), a.d(t, {
  useManageResourcePermissions: function() {
    return v
  },
  getManageResourcePermissions: function() {
    return E
  }
}), a("222007");
var n = a("884691"),
  l = a("316693"),
  i = a("446674"),
  r = a("813006");
a("923959");
var s = a("957255"),
  u = a("697218");
a("991170");
var o = a("270161"),
  d = a("843455");
let c = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1
  },
  f = (e, t, a, n) => {
    if (null == e) return !1;
    if (a) return !0;
    if ("creator_id" in e) return n && null != t && e.creator_id === t.id;
    if ("userId" in e) return n && null != t && e.userId === t.id;
    if ("user" in e) {
      var l;
      return n && null != t && (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
    }
    return !1
  },
  m = e => {
    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
    let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [l.default.combine(t, d.Permissions.CREATE_EVENTS), l.default.combine(t, d.Permissions.MANAGE_EVENTS)]
  },
  v = e => {
    let [t, a] = e instanceof r.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : m(e), [l, o, v, E] = (0, i.useStateFromStoresArray)([s.default], () => [s.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), s.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), s.default.can(t, e), s.default.can(a, e)]), p = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser()), h = n.useCallback(e => f(e, p, o, l), [l, o, p]), C = n.useCallback(e => f(e, p, E, v), [E, v, p]);
    return null == e ? c : {
      canCreateExpressions: l,
      canCreateGuildEvent: v,
      canManageAllExpressions: o,
      canManageAllEvents: E,
      canManageGuildExpression: h,
      canManageGuildEvent: C
    }
  },
  E = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default,
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
      [n, l] = e instanceof r.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : m(e),
      i = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      v = t.can(n, e),
      E = t.can(l, e),
      p = a.getCurrentUser();
    return null == e ? c : {
      canCreateExpressions: i,
      canCreateGuildEvent: v,
      canManageAllExpressions: o,
      canManageAllEvents: E,
      canManageGuildExpression: e => f(e, p, o, i),
      canManageGuildEvent: e => f(e, p, E, v)
    }
  }