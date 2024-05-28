"use strict";
E.r(t), E("653041"), E("47120"), E("733860");
var s, _, a, T, n = E("392711"),
  A = E.n(n),
  I = E("149765"),
  u = E("442837"),
  i = E("570140"),
  l = E("387667"),
  L = E("131704"),
  o = E("271383"),
  r = E("430824"),
  d = E("981631");
let N = [d.Permissions.KICK_MEMBERS, d.Permissions.BAN_MEMBERS, d.Permissions.ADMINISTRATOR, d.Permissions.MANAGE_CHANNELS, d.Permissions.MANAGE_GUILD, d.Permissions.MANAGE_MESSAGES, d.Permissions.MANAGE_NICKNAMES, d.Permissions.MANAGE_ROLES, d.Permissions.MANAGE_WEBHOOKS, d.Permissions.MANAGE_GUILD_EXPRESSIONS, d.Permissions.MOVE_MEMBERS, d.Permissions.MUTE_MEMBERS, d.Permissions.DEAFEN_MEMBERS],
  S = null,
  g = [],
  D = [],
  G = [],
  O = [],
  c = [],
  U = [],
  C = [],
  M = [],
  R = !0,
  f = !1,
  h = !1,
  p = !0,
  y = !1,
  P = null,
  H = d.AuditLogActions.ALL,
  m = null,
  v = {},
  V = 0;

function K(e) {
  let t = [],
    E = 0;
  return e.reverse().forEach(e => {
    var s, _, a;
    let T = [],
      n = null,
      I = null,
      u = null;
    if (null != e.reason && T.push(new l.AuditLogChange(d.AuditLogChangeKeys.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new l.AuditLogChange(t.key, t.old_value, t.new_value);
        T.push(e), e.key === d.AuditLogChangeKeys.NAME ? n = e : e.key === d.AuditLogChangeKeys.TYPE ? u = e : e.key === d.AuditLogChangeKeys.TITLE && (I = e)
      }
    if (e.action_type === d.AuditLogActions.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        E = new l.AuditLogChange(d.AuditLogChangeKeys.PRUNE_DELETE_DAYS, null, t);
      T.push(E)
    }
    e.action_type === d.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE && (null === (_ = e.options) || void 0 === _ ? void 0 : _.auto_moderation_rule_name) != null && T.push(new l.AuditLogChange(d.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === d.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE && (null === (s = e.options) || void 0 === s ? void 0 : s.status) != null && T.push(new l.AuditLogChange(d.AuditLogChangeKeys.STATUS, null, e.options.status));
    let i = new l.default({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: T,
        options: e.options
      }),
      o = t[0];
    if (function(e, t, E) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
          _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && A().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < s && E < _ && t.targetType !== d.AuditLogTargetTypes.INVITE && t.action !== d.AuditLogActions.MESSAGE_DELETE && t.action !== d.AuditLogActions.MESSAGE_BULK_DELETE && t.action !== d.AuditLogActions.MESSAGE_PIN && t.action !== d.AuditLogActions.MESSAGE_UNPIN && t.action !== d.AuditLogActions.MEMBER_MOVE && t.action !== d.AuditLogActions.MEMBER_DISCONNECT && t.action !== d.AuditLogActions.BOT_ADD && t.action !== d.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== d.AuditLogActions.MEMBER_PRUNE
      }(o, i, E)) {
      t[0] = o.merge({
        changes: [...o.changes, ...i.changes],
        timestampEnd: i.timestampStart
      }), E++;
      return
    }
    if (i.actionType === d.AuditLogActionTypes.DELETE && (null != n || null != I)) {
      let e = null !== (a = null == n ? void 0 : n.oldValue) && void 0 !== a ? a : null == I ? void 0 : I.oldValue;
      (i.targetType === d.AuditLogTargetTypes.CHANNEL || i.targetType === d.AuditLogTargetTypes.CHANNEL_OVERWRITE) && null !== u && (0, L.isGuildSelectableChannelType)(u.oldValue) && (e = "#".concat(e)), null == v[i.targetType] ? v[i.targetType] = {
        [i.targetId]: e
      } : v[i.targetType][i.targetId] = e
    }
    E = 0, t.unshift(i)
  }), t
}

function B(e) {
  let {
    section: t
  } = e;
  if (t !== d.GuildSettingsSections.AUDIT_LOG) return !1;
  let E = o.default.getMembers(S),
    s = r.default.getGuild(S),
    _ = null != S ? r.default.getRoles(S) : void 0;
  G = A()(E).filter(e => e.roles.some(t => {
    if (null != s) {
      if (e.userId === s.ownerId) return !0;
      let E = null == _ ? void 0 : _[t];
      return null != E && N.some(e => I.has(E.permissions, e))
    }
  })).map(e => e.userId).value()
}
class F extends(s = u.default.Store) {
  get logs() {
    return g
  }
  get integrations() {
    return D
  }
  get webhooks() {
    return O
  }
  get guildScheduledEvents() {
    return c
  }
  get automodRules() {
    return U
  }
  get threads() {
    return C
  }
  get applicationCommands() {
    return M
  }
  get isInitialLoading() {
    return R
  }
  get isLoading() {
    return f
  }
  get isLoadingNextPage() {
    return h
  }
  get hasOlderLogs() {
    return p
  }
  get hasError() {
    return y
  }
  get userIds() {
    return G
  }
  get userIdFilter() {
    return P
  }
  get targetIdFilter() {
    return m
  }
  get actionFilter() {
    return H
  }
  get deletedTargets() {
    return v
  }
  get groupedFetchCount() {
    return V
  }
}
T = "GuildSettingsAuditLogStore", (a = "displayName") in(_ = F) ? Object.defineProperty(_, a, {
  value: T,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[a] = T, t.default = new F(i.default, {
  AUDIT_LOG_FETCH_START: function() {
    f = !0
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    V = 0, R = !1, f = !1, p = !0, y = !1, g = K(e.logs), D = e.integrations, O = e.webhooks, c = e.guildScheduledEvents, U = null !== (t = e.automodRules) && void 0 !== t ? t : [], C = e.threads, M = e.applicationCommands, e.logs.length < d.AUDIT_LOG_PAGE_LIMIT && (p = !1)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    f = !1, y = !0, g = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    h = !0, t && V++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: E,
      webhooks: s,
      guildScheduledEvents: _,
      automodRules: a,
      threads: T,
      applicationCommands: n
    } = e;
    if (h = !1, D = E, O = s, c = _, U = a, C = T, M = n, (0 === t.length || t.length < d.AUDIT_LOG_PAGE_LIMIT) && (p = !1), t.length > 0) {
      let e = K(t);
      g = [...g, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    h = !1
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    H = t
  },
  AUDIT_LOG_FILTER_BY_USER: function(e) {
    let {
      userId: t
    } = e;
    P = t
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(e) {
    let {
      targetId: t
    } = e;
    m = t
  },
  GUILD_SETTINGS_SET_SECTION: B,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: E
    } = e;
    return S = t, m = null, B({
      section: E
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    g = [], G = [], H = d.AuditLogActions.ALL, P = null, m = null, v = {}, V = 0, R = !0, D = [], O = [], c = [], U = [], C = []
  }
})