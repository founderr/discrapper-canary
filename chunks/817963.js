"use strict";
n.r(t), n.d(t, {
  useManageResourcePermissions: function() {
    return E
  },
  getManageResourcePermissions: function() {
    return v
  }
}), n("222007");
var i = n("884691"),
  l = n("316693"),
  r = n("446674"),
  s = n("813006");
n("923959");
var a = n("957255"),
  u = n("697218");
n("991170");
var o = n("270161"),
  d = n("843455");
let c = {
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
      var l;
      return i && null != t && (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
    }
    return !1
  },
  h = e => {
    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
    let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [l.default.combine(t, d.Permissions.CREATE_EVENTS), l.default.combine(t, d.Permissions.MANAGE_EVENTS)]
  },
  E = e => {
    let [t, n] = e instanceof s.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : h(e), [l, o, E, v] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), C = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), _ = i.useCallback(e => f(e, C, o, l), [l, o, C]), p = i.useCallback(e => f(e, C, v, E), [v, E, C]);
    return null == e ? c : {
      canCreateExpressions: l,
      canCreateGuildEvent: E,
      canManageAllExpressions: o,
      canManageAllEvents: v,
      canManageGuildExpression: _,
      canManageGuildEvent: p
    }
  },
  v = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
      [i, l] = e instanceof s.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : h(e),
      r = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      E = t.can(i, e),
      v = t.can(l, e),
      C = n.getCurrentUser();
    return null == e ? c : {
      canCreateExpressions: r,
      canCreateGuildEvent: E,
      canManageAllExpressions: o,
      canManageAllEvents: v,
      canManageGuildExpression: e => f(e, C, o, r),
      canManageGuildEvent: e => f(e, C, v, E)
    }
  }