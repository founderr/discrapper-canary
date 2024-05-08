"use strict";
s.r(t), s("653041"), s("47120"), s("733860");
var a, n, i, E, l = s("392711"),
  _ = s.n(l),
  r = s("149765"),
  u = s("442837"),
  o = s("570140"),
  T = s("387667"),
  d = s("131704"),
  A = s("271383"),
  I = s("430824"),
  L = s("981631");
let c = [L.Permissions.KICK_MEMBERS, L.Permissions.BAN_MEMBERS, L.Permissions.ADMINISTRATOR, L.Permissions.MANAGE_CHANNELS, L.Permissions.MANAGE_GUILD, L.Permissions.MANAGE_MESSAGES, L.Permissions.MANAGE_NICKNAMES, L.Permissions.MANAGE_ROLES, L.Permissions.MANAGE_WEBHOOKS, L.Permissions.MANAGE_GUILD_EXPRESSIONS, L.Permissions.MOVE_MEMBERS, L.Permissions.MUTE_MEMBERS, L.Permissions.DEAFEN_MEMBERS],
  N = null,
  S = [],
  g = [],
  D = [],
  C = [],
  f = [],
  O = [],
  G = [],
  M = [],
  U = !0,
  R = !1,
  h = !1,
  m = !0,
  p = !1,
  v = null,
  y = L.AuditLogActions.ALL,
  P = null,
  x = {},
  H = 0;

function B(e) {
  let t = [],
    s = 0;
  return e.reverse().forEach(e => {
    var a, n, i;
    let E = [],
      l = null,
      r = null,
      u = null;
    if (null != e.reason && E.push(new T.AuditLogChange(L.AuditLogChangeKeys.REASON, null, e.reason)), null != e.changes)
      for (let t of e.changes) {
        let e = new T.AuditLogChange(t.key, t.old_value, t.new_value);
        E.push(e), e.key === L.AuditLogChangeKeys.NAME ? l = e : e.key === L.AuditLogChangeKeys.TYPE ? u = e : e.key === L.AuditLogChangeKeys.TITLE && (r = e)
      }
    if (e.action_type === L.AuditLogActions.MEMBER_PRUNE) {
      let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
        s = new T.AuditLogChange(L.AuditLogChangeKeys.PRUNE_DELETE_DAYS, null, t);
      E.push(s)
    }
    e.action_type === L.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE && (null === (n = e.options) || void 0 === n ? void 0 : n.auto_moderation_rule_name) != null && E.push(new T.AuditLogChange(L.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === L.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE && (null === (a = e.options) || void 0 === a ? void 0 : a.status) != null && E.push(new T.AuditLogChange(L.AuditLogChangeKeys.STATUS, null, e.options.status));
    let o = new T.default({
        id: e.id,
        action: e.action_type,
        targetId: e.target_id,
        userId: e.user_id,
        changes: E,
        options: e.options
      }),
      A = t[0];
    if (function(e, t, s) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
          n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
        return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && _().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < a && s < n && t.targetType !== L.AuditLogTargetTypes.INVITE && t.action !== L.AuditLogActions.MESSAGE_DELETE && t.action !== L.AuditLogActions.MESSAGE_BULK_DELETE && t.action !== L.AuditLogActions.MESSAGE_PIN && t.action !== L.AuditLogActions.MESSAGE_UNPIN && t.action !== L.AuditLogActions.MEMBER_MOVE && t.action !== L.AuditLogActions.MEMBER_DISCONNECT && t.action !== L.AuditLogActions.BOT_ADD && t.action !== L.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== L.AuditLogActions.MEMBER_PRUNE
      }(A, o, s)) {
      t[0] = A.merge({
        changes: [...A.changes, ...o.changes],
        timestampEnd: o.timestampStart
      }), s++;
      return
    }
    if (o.actionType === L.AuditLogActionTypes.DELETE && (null != l || null != r)) {
      let e = null !== (i = null == l ? void 0 : l.oldValue) && void 0 !== i ? i : null == r ? void 0 : r.oldValue;
      (o.targetType === L.AuditLogTargetTypes.CHANNEL || o.targetType === L.AuditLogTargetTypes.CHANNEL_OVERWRITE) && null !== u && (0, d.isGuildSelectableChannelType)(u.oldValue) && (e = "#".concat(e)), null == x[o.targetType] ? x[o.targetType] = {
        [o.targetId]: e
      } : x[o.targetType][o.targetId] = e
    }
    s = 0, t.unshift(o)
  }), t
}

function F(e) {
  let {
    section: t
  } = e;
  if (t !== L.GuildSettingsSections.AUDIT_LOG) return !1;
  let s = A.default.getMembers(N),
    a = I.default.getGuild(N),
    n = null != N ? I.default.getRoles(N) : void 0;
  D = _()(s).filter(e => e.roles.some(t => {
    if (null != a) {
      if (e.userId === a.ownerId) return !0;
      let s = null == n ? void 0 : n[t];
      return null != s && c.some(e => r.has(s.permissions, e))
    }
  })).map(e => e.userId).value()
}
class j extends(a = u.default.Store) {
  get logs() {
    return S
  }
  get integrations() {
    return g
  }
  get webhooks() {
    return C
  }
  get guildScheduledEvents() {
    return f
  }
  get automodRules() {
    return O
  }
  get threads() {
    return G
  }
  get applicationCommands() {
    return M
  }
  get isInitialLoading() {
    return U
  }
  get isLoading() {
    return R
  }
  get isLoadingNextPage() {
    return h
  }
  get hasOlderLogs() {
    return m
  }
  get hasError() {
    return p
  }
  get userIds() {
    return D
  }
  get userIdFilter() {
    return v
  }
  get targetIdFilter() {
    return P
  }
  get actionFilter() {
    return y
  }
  get deletedTargets() {
    return x
  }
  get groupedFetchCount() {
    return H
  }
}
E = "GuildSettingsAuditLogStore", (i = "displayName") in(n = j) ? Object.defineProperty(n, i, {
  value: E,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = E, t.default = new j(o.default, {
  AUDIT_LOG_FETCH_START: function() {
    R = !0
  },
  AUDIT_LOG_FETCH_SUCCESS: function(e) {
    var t;
    H = 0, U = !1, R = !1, m = !0, p = !1, S = B(e.logs), g = e.integrations, C = e.webhooks, f = e.guildScheduledEvents, O = null !== (t = e.automodRules) && void 0 !== t ? t : [], G = e.threads, M = e.applicationCommands, e.logs.length < L.AUDIT_LOG_PAGE_LIMIT && (m = !1)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    R = !1, p = !0, S = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
    let {
      isGroupedFetch: t
    } = e;
    h = !0, t && H++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
    let {
      logs: t,
      integrations: s,
      webhooks: a,
      guildScheduledEvents: n,
      automodRules: i,
      threads: E,
      applicationCommands: l
    } = e;
    if (h = !1, g = s, C = a, f = n, O = i, G = E, M = l, (0 === t.length || t.length < L.AUDIT_LOG_PAGE_LIMIT) && (m = !1), t.length > 0) {
      let e = B(t);
      S = [...S, ...e]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    h = !1
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(e) {
    let {
      action: t
    } = e;
    y = t
  },
  AUDIT_LOG_FILTER_BY_USER: function(e) {
    let {
      userId: t
    } = e;
    v = t
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(e) {
    let {
      targetId: t
    } = e;
    P = t
  },
  GUILD_SETTINGS_SET_SECTION: F,
  GUILD_SETTINGS_INIT: function(e) {
    let {
      guildId: t,
      section: s
    } = e;
    return N = t, P = null, F({
      section: s
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    S = [], D = [], y = L.AuditLogActions.ALL, v = null, P = null, x = {}, H = 0, U = !0, g = [], C = [], f = [], O = [], G = []
  }
})