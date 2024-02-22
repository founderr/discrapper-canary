"use strict";
n.r(t), n.d(t, {
  useManageResourcePermissions: function() {
    return E
  },
  getManageResourcePermissions: function() {
    return p
  }
}), n("222007");
var i = n("884691"),
  r = n("316693"),
  s = n("446674"),
  l = n("813006");
n("923959");
var a = n("957255"),
  u = n("697218");
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
  h = e => {
    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
    let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, c.Permissions.CREATE_EVENTS), r.default.combine(t, c.Permissions.MANAGE_EVENTS)]
  },
  E = e => {
    let [t, n] = e instanceof l.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : h(e), [r, o, E, p] = (0, s.useStateFromStoresArray)([a.default], () => [a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), v = (0, s.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = i.useCallback(e => f(e, v, o, r), [r, o, v]), S = i.useCallback(e => f(e, v, p, E), [p, E, v]);
    return null == e ? d : {
      canCreateExpressions: r,
      canCreateGuildEvent: E,
      canManageAllExpressions: o,
      canManageAllEvents: p,
      canManageGuildExpression: C,
      canManageGuildEvent: S
    }
  },
  p = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
      [i, r] = e instanceof l.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : h(e),
      s = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      o = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      E = t.can(i, e),
      p = t.can(r, e),
      v = n.getCurrentUser();
    return null == e ? d : {
      canCreateExpressions: s,
      canCreateGuildEvent: E,
      canManageAllExpressions: o,
      canManageAllEvents: p,
      canManageGuildExpression: e => f(e, v, o, s),
      canManageGuildEvent: e => f(e, v, p, E)
    }
  }