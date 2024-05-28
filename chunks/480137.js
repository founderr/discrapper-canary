"use strict";
E.r(t), E.d(t, {
  fetchLogs: function() {
    return I
  },
  fetchNextLogPage: function() {
    return u
  },
  filterByAction: function() {
    return i
  },
  filterByTargetId: function() {
    return L
  },
  filterByUserId: function() {
    return l
  }
});
var s = E("544891"),
  _ = E("570140"),
  a = E("987707"),
  T = E("981631");

function n() {
  return a.default.isLoading || a.default.isLoadingNextPage
}

function A(e, t) {
  let E = function(e) {
    let {
      before: t,
      userId: E,
      targetId: s,
      action: _
    } = e, n = null == E ? a.default.userIdFilter : E, A = null == _ ? a.default.actionFilter : _, I = null == s ? a.default.targetIdFilter : s, u = {
      limit: T.AUDIT_LOG_PAGE_LIMIT
    };
    return null != t && (u.before = t), null != n && (u.user_id = n), null != A && (u.action_type = A), null != I && (u.target_id = I), u
  }(t);
  return s.HTTP.get({
    url: T.Endpoints.GUILD_AUDIT_LOG(e),
    query: E,
    oldFormErrors: !0
  })
}

function I(e, t, E, s) {
  if (!n() && null != e) return _.default.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), A(e, {
    userId: t,
    action: s,
    targetId: E
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: E,
      users: s,
      webhooks: a,
      guild_scheduled_events: T,
      auto_moderation_rules: n,
      threads: A,
      application_commands: I
    } = e.body;
    _.default.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: E,
      users: s,
      webhooks: a,
      guildScheduledEvents: T,
      automodRules: n,
      threads: A,
      applicationCommands: I
    })
  }, () => _.default.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!a.default.hasOlderLogs || n() || null == e) return;
  let E = a.default.logs,
    s = E[E.length - 1],
    T = null;
  return null != s && (T = s.id), _.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: T,
    isGroupedFetch: t
  }), A(e, {
    before: T
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: E,
      users: s,
      webhooks: a,
      guild_scheduled_events: T,
      auto_moderation_rules: n,
      threads: A,
      application_commands: I
    } = e.body;
    _.default.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: E,
      users: s,
      webhooks: a,
      guildScheduledEvents: T,
      automodRules: n,
      threads: A,
      applicationCommands: I
    })
  }, () => _.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function i(e, t) {
  if (!n() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), I(t, null, null, e)
}

function l(e, t) {
  if (!n() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), I(t, e)
}

function L(e, t) {
  if (!n() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), I(t, null, e)
}