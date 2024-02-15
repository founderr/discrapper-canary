"use strict";
n.r(t), n.d(t, {
  useManageResourcePermissions: function() {
    return _
  },
  getManageResourcePermissions: function() {
    return S
  }
}), n("222007");
var i = n("884691"),
  r = n("316693"),
  l = n("446674"),
  u = n("813006");
n("923959");
var a = n("957255"),
  s = n("697218");
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
      var r;
      return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
    }
    return !1
  },
  E = e => {
    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
    let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    return e.isGuildStageVoice() ? t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, d.Permissions.CREATE_EVENTS), r.default.combine(t, d.Permissions.MANAGE_EVENTS)]
  },
  _ = e => {
    let [t, n] = e instanceof u.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : E(e), [r, o, _, S] = (0, l.useStateFromStoresArray)([a.default], () => [a.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), T = (0, l.useStateFromStores)([s.default], () => s.default.getCurrentUser()), I = i.useCallback(e => f(e, T, o, r), [r, o, T]), h = i.useCallback(e => f(e, T, S, _), [S, _, T]);
    return null == e ? c : {
      canCreateExpressions: r,
      canCreateGuildEvent: _,
      canManageAllExpressions: o,
      canManageAllEvents: S,
      canManageGuildExpression: I,
      canManageGuildEvent: h
    }
  },
  S = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
      [i, r] = e instanceof u.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : E(e),
      l = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
      o = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
      _ = t.can(i, e),
      S = t.can(r, e),
      T = n.getCurrentUser();
    return null == e ? c : {
      canCreateExpressions: l,
      canCreateGuildEvent: _,
      canManageAllExpressions: o,
      canManageAllEvents: S,
      canManageGuildExpression: e => f(e, T, o, l),
      canManageGuildEvent: e => f(e, T, S, _)
    }
  }