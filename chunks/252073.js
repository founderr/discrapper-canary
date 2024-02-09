"use strict";
E.r(t), E.d(t, {
  fetchLogs: function() {
    return u
  },
  fetchNextLogPage: function() {
    return I
  },
  filterByAction: function() {
    return i
  },
  filterByUserId: function() {
    return l
  },
  filterByTargetId: function() {
    return L
  }
});
var _ = E("872717"),
  s = E("913144"),
  a = E("287103"),
  T = E("49111");

function n() {
  return a.default.isLoading || a.default.isLoadingNextPage
}

function A(e, t) {
  let E = function(e) {
    let {
      before: t,
      userId: E,
      targetId: _,
      action: s
    } = e, n = null == E ? a.default.userIdFilter : E, A = null == s ? a.default.actionFilter : s, u = null == _ ? a.default.targetIdFilter : _, I = {
      limit: T.AUDIT_LOG_PAGE_LIMIT
    };
    return null != t && (I.before = t), null != n && (I.user_id = n), null != A && (I.action_type = A), null != u && (I.target_id = u), I
  }(t);
  return _.default.get({
    url: T.Endpoints.GUILD_AUDIT_LOG(e),
    query: E,
    oldFormErrors: !0
  })
}

function u(e, t, E, _) {
  if (!n() && null != e) return s.default.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), A(e, {
    userId: t,
    action: _,
    targetId: E
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: E,
      users: _,
      webhooks: a,
      guild_scheduled_events: T,
      auto_moderation_rules: n,
      threads: A,
      application_commands: u
    } = e.body;
    s.default.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: E,
      users: _,
      webhooks: a,
      guildScheduledEvents: T,
      automodRules: n,
      threads: A,
      applicationCommands: u
    })
  }, () => s.default.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!a.default.hasOlderLogs || n() || null == e) return;
  let E = a.default.logs,
    _ = E[E.length - 1],
    T = null;
  return null != _ && (T = _.id), s.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: T,
    isGroupedFetch: t
  }), A(e, {
    before: T
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: E,
      users: _,
      webhooks: a,
      guild_scheduled_events: T,
      auto_moderation_rules: n,
      threads: A,
      application_commands: u
    } = e.body;
    s.default.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: E,
      users: _,
      webhooks: a,
      guildScheduledEvents: T,
      automodRules: n,
      threads: A,
      applicationCommands: u
    })
  }, () => s.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function i(e, t) {
  if (!n() && null != t) return s.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), u(t, null, null, e)
}

function l(e, t) {
  if (!n() && null != t) return s.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), u(t, e)
}

function L(e, t) {
  if (!n() && null != t) return s.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), u(t, null, e)
}