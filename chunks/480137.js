e.d(_, {
  OY: function() {
    return r
  },
  ZX: function() {
    return a
  },
  bY: function() {
    return t
  },
  gV: function() {
    return D
  },
  uo: function() {
    return L
  }
});
var T = e(544891),
  s = e(570140),
  I = e(987707),
  A = e(981631);

function n() {
  return I.Z.isLoading || I.Z.isLoadingNextPage
}

function N(E, _) {
  let e = function(E) {
    let {
      before: _,
      userId: e,
      targetId: T,
      action: s
    } = E, n = null == e ? I.Z.userIdFilter : e, N = null == s ? I.Z.actionFilter : s, t = null == T ? I.Z.targetIdFilter : T, r = {
      limit: A.Rg9
    };
    return null != _ && (r.before = _), null != n && (r.user_id = n), null != N && (r.action_type = N), null != t && (r.target_id = t), r
  }(_);
  return T.tn.get({
    url: A.ANM.GUILD_AUDIT_LOG(E),
    query: e,
    oldFormErrors: !0
  })
}

function t(E, _, e, T) {
  if (!n() && null != E) return s.Z.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), N(E, {
    userId: _,
    action: T,
    targetId: e
  }).then(E => {
    let {
      audit_log_entries: _,
      integrations: e,
      users: T,
      webhooks: I,
      guild_scheduled_events: A,
      auto_moderation_rules: n,
      threads: N,
      application_commands: t
    } = E.body;
    s.Z.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: _,
      integrations: e,
      users: T,
      webhooks: I,
      guildScheduledEvents: A,
      automodRules: n,
      threads: N,
      applicationCommands: t
    })
  }, () => s.Z.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function r(E) {
  let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!I.Z.hasOlderLogs || n() || null == E) return;
  let e = I.Z.logs,
    T = e[e.length - 1],
    A = null;
  return null != T && (A = T.id), s.Z.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: A,
    isGroupedFetch: _
  }), N(E, {
    before: A
  }).then(E => {
    let {
      audit_log_entries: _,
      integrations: e,
      users: T,
      webhooks: I,
      guild_scheduled_events: A,
      auto_moderation_rules: n,
      threads: N,
      application_commands: t
    } = E.body;
    s.Z.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: _,
      integrations: e,
      users: T,
      webhooks: I,
      guildScheduledEvents: A,
      automodRules: n,
      threads: N,
      applicationCommands: t
    })
  }, () => s.Z.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function a(E, _) {
  if (!n() && null != _) return s.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: E
  }), t(_, null, null, E)
}

function L(E, _) {
  if (!n() && null != _) return s.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: E
  }), t(_, E)
}

function D(E, _) {
  if (!n() && null != _) return s.Z.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: E
  }), t(_, null, E)
}