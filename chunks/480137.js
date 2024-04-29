"use strict";
s.r(t), s.d(t, {
  fetchLogs: function() {
    return i
  },
  fetchNextLogPage: function() {
    return A
  },
  filterByAction: function() {
    return l
  },
  filterByTargetId: function() {
    return L
  },
  filterByUserId: function() {
    return I
  }
});
var E = s("544891"),
  _ = s("570140"),
  a = s("987707"),
  n = s("981631");

function T() {
  return a.default.isLoading || a.default.isLoadingNextPage
}

function u(e, t) {
  let s = function(e) {
    let {
      before: t,
      userId: s,
      targetId: E,
      action: _
    } = e, T = null == s ? a.default.userIdFilter : s, u = null == _ ? a.default.actionFilter : _, i = null == E ? a.default.targetIdFilter : E, A = {
      limit: n.AUDIT_LOG_PAGE_LIMIT
    };
    return null != t && (A.before = t), null != T && (A.user_id = T), null != u && (A.action_type = u), null != i && (A.target_id = i), A
  }(t);
  return E.HTTP.get({
    url: n.Endpoints.GUILD_AUDIT_LOG(e),
    query: s,
    oldFormErrors: !0
  })
}

function i(e, t, s, E) {
  if (!T() && null != e) return _.default.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), u(e, {
    userId: t,
    action: E,
    targetId: s
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: s,
      users: E,
      webhooks: a,
      guild_scheduled_events: n,
      auto_moderation_rules: T,
      threads: u,
      application_commands: i
    } = e.body;
    _.default.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: s,
      users: E,
      webhooks: a,
      guildScheduledEvents: n,
      automodRules: T,
      threads: u,
      applicationCommands: i
    })
  }, () => _.default.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function A(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!a.default.hasOlderLogs || T() || null == e) return;
  let s = a.default.logs,
    E = s[s.length - 1],
    n = null;
  return null != E && (n = E.id), _.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: n,
    isGroupedFetch: t
  }), u(e, {
    before: n
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: s,
      users: E,
      webhooks: a,
      guild_scheduled_events: n,
      auto_moderation_rules: T,
      threads: u,
      application_commands: i
    } = e.body;
    _.default.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: s,
      users: E,
      webhooks: a,
      guildScheduledEvents: n,
      automodRules: T,
      threads: u,
      applicationCommands: i
    })
  }, () => _.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function l(e, t) {
  if (!T() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), i(t, null, null, e)
}

function I(e, t) {
  if (!T() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), i(t, e)
}

function L(e, t) {
  if (!T() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), i(t, null, e)
}