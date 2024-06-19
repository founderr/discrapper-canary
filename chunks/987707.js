e(653041), e(47120), e(733860);
var T, s, I, A, n = e(392711),
  N = e.n(n),
  t = e(149765),
  r = e(442837),
  a = e(570140),
  L = e(387667),
  D = e(131704),
  S = e(271383),
  U = e(430824),
  l = e(981631);
let O = [l.Plq.KICK_MEMBERS, l.Plq.BAN_MEMBERS, l.Plq.ADMINISTRATOR, l.Plq.MANAGE_CHANNELS, l.Plq.MANAGE_GUILD, l.Plq.MANAGE_MESSAGES, l.Plq.MANAGE_NICKNAMES, l.Plq.MANAGE_ROLES, l.Plq.MANAGE_WEBHOOKS, l.Plq.MANAGE_GUILD_EXPRESSIONS, l.Plq.MOVE_MEMBERS, l.Plq.MUTE_MEMBERS, l.Plq.DEAFEN_MEMBERS],
  G = null,
  M = [],
  R = [],
  u = [],
  i = [],
  o = [],
  C = [],
  c = [],
  g = [],
  d = !0,
  Z = !1,
  P = !1,
  f = !0,
  H = !1,
  p = null,
  h = l.rsA.ALL,
  F = null,
  V = {},
  v = 0;

function m(E) {
  let _ = [],
    e = 0;
  return E.reverse().forEach(E => {
    var T, s, I;
    let A = [],
      n = null,
      t = null,
      r = null;
    if (null != E.reason && A.push(new L.ms(l.zUn.REASON, null, E.reason)), null != E.changes)
      for (let _ of E.changes) {
        let E = new L.ms(_.key, _.old_value, _.new_value);
        A.push(E), E.key === l.zUn.NAME ? n = E : E.key === l.zUn.TYPE ? r = E : E.key === l.zUn.TITLE && (t = E)
      }
    if (E.action_type === l.rsA.MEMBER_PRUNE) {
      let _ = null != E && null != E.options && null != E.options.delete_member_days ? E.options.delete_member_days : 1,
        e = new L.ms(l.zUn.PRUNE_DELETE_DAYS, null, _);
      A.push(e)
    }
    E.action_type === l.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null === (s = E.options) || void 0 === s ? void 0 : s.auto_moderation_rule_name) != null && A.push(new L.ms(l.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, E.options.auto_moderation_rule_name)), E.action_type === l.rsA.VOICE_CHANNEL_STATUS_CREATE && (null === (T = E.options) || void 0 === T ? void 0 : T.status) != null && A.push(new L.ms(l.zUn.STATUS, null, E.options.status));
    let a = new L.ZP({
        id: E.id,
        action: E.action_type,
        targetId: E.target_id,
        userId: E.user_id,
        changes: A,
        options: E.options
      }),
      S = _[0];
    if (function(E, _, e) {
        let T = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
          s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
        return null != E && E.action === _.action && E.targetId === _.targetId && E.userId === _.userId && N().isEqual(E.options, _.options) && _.timestampStart.diff(E.timestampStart, "minutes") < T && e < s && _.targetType !== l.KFR.INVITE && _.action !== l.rsA.MESSAGE_DELETE && _.action !== l.rsA.MESSAGE_BULK_DELETE && _.action !== l.rsA.MESSAGE_PIN && _.action !== l.rsA.MESSAGE_UNPIN && _.action !== l.rsA.MEMBER_MOVE && _.action !== l.rsA.MEMBER_DISCONNECT && _.action !== l.rsA.BOT_ADD && _.action !== l.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && _.action !== l.rsA.MEMBER_PRUNE
      }(S, a, e)) {
      _[0] = S.merge({
        changes: [...S.changes, ...a.changes],
        timestampEnd: a.timestampStart
      }), e++;
      return
    }
    if (a.actionType === l.vB8.DELETE && (null != n || null != t)) {
      let E = null !== (I = null == n ? void 0 : n.oldValue) && void 0 !== I ? I : null == t ? void 0 : t.oldValue;
      (a.targetType === l.KFR.CHANNEL || a.targetType === l.KFR.CHANNEL_OVERWRITE) && null !== r && (0, D.r8)(r.oldValue) && (E = "#".concat(E)), null == V[a.targetType] ? V[a.targetType] = {
        [a.targetId]: E
      } : V[a.targetType][a.targetId] = E
    }
    e = 0, _.unshift(a)
  }), _
}

function B(E) {
  let {
    section: _
  } = E;
  if (_ !== l.pNK.AUDIT_LOG) return !1;
  let e = S.ZP.getMembers(G),
    T = U.Z.getGuild(G),
    s = null != G ? U.Z.getRoles(G) : void 0;
  u = N()(e).filter(E => E.roles.some(_ => {
    if (null != T) {
      if (E.userId === T.ownerId) return !0;
      let e = null == s ? void 0 : s[_];
      return null != e && O.some(E => t.e$(e.permissions, E))
    }
  })).map(E => E.userId).value()
}
class z extends(T = r.ZP.Store) {
  get logs() {
    return M
  }
  get integrations() {
    return R
  }
  get webhooks() {
    return i
  }
  get guildScheduledEvents() {
    return o
  }
  get automodRules() {
    return C
  }
  get threads() {
    return c
  }
  get applicationCommands() {
    return g
  }
  get isInitialLoading() {
    return d
  }
  get isLoading() {
    return Z
  }
  get isLoadingNextPage() {
    return P
  }
  get hasOlderLogs() {
    return f
  }
  get hasError() {
    return H
  }
  get userIds() {
    return u
  }
  get userIdFilter() {
    return p
  }
  get targetIdFilter() {
    return F
  }
  get actionFilter() {
    return h
  }
  get deletedTargets() {
    return V
  }
  get groupedFetchCount() {
    return v
  }
}
A = "GuildSettingsAuditLogStore", (I = "displayName") in(s = z) ? Object.defineProperty(s, I, {
  value: A,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[I] = A, _.Z = new z(a.Z, {
  AUDIT_LOG_FETCH_START: function() {
    Z = !0
  },
  AUDIT_LOG_FETCH_SUCCESS: function(E) {
    var _;
    v = 0, d = !1, Z = !1, f = !0, H = !1, M = m(E.logs), R = E.integrations, i = E.webhooks, o = E.guildScheduledEvents, C = null !== (_ = E.automodRules) && void 0 !== _ ? _ : [], c = E.threads, g = E.applicationCommands, E.logs.length < l.Rg9 && (f = !1)
  },
  AUDIT_LOG_FETCH_FAIL: function() {
    Z = !1, H = !0, M = []
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_START: function(E) {
    let {
      isGroupedFetch: _
    } = E;
    P = !0, _ && v++
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(E) {
    let {
      logs: _,
      integrations: e,
      webhooks: T,
      guildScheduledEvents: s,
      automodRules: I,
      threads: A,
      applicationCommands: n
    } = E;
    if (P = !1, R = e, i = T, o = s, C = I, c = A, g = n, (0 === _.length || _.length < l.Rg9) && (f = !1), _.length > 0) {
      let E = m(_);
      M = [...M, ...E]
    }
  },
  AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
    P = !1
  },
  AUDIT_LOG_FILTER_BY_ACTION: function(E) {
    let {
      action: _
    } = E;
    h = _
  },
  AUDIT_LOG_FILTER_BY_USER: function(E) {
    let {
      userId: _
    } = E;
    p = _
  },
  AUDIT_LOG_FILTER_BY_TARGET: function(E) {
    let {
      targetId: _
    } = E;
    F = _
  },
  GUILD_SETTINGS_SET_SECTION: B,
  GUILD_SETTINGS_INIT: function(E) {
    let {
      guildId: _,
      section: e
    } = E;
    return G = _, F = null, B({
      section: e
    })
  },
  GUILD_SETTINGS_CLOSE: function() {
    M = [], u = [], h = l.rsA.ALL, p = null, F = null, V = {}, v = 0, d = !0, R = [], i = [], o = [], C = [], c = []
  }
})