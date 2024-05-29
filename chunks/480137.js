"use strict";
s.r(t), s.d(t, {
  fetchLogs: function() {
    return A
  },
  fetchNextLogPage: function() {
    return u
  },
  filterByAction: function() {
    return l
  },
  filterByTargetId: function() {
    return r
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

function i(e, t) {
  let s = function(e) {
    let {
      before: t,
      userId: s,
      targetId: E,
      action: _
    } = e, T = null == s ? a.default.userIdFilter : s, i = null == _ ? a.default.actionFilter : _, A = null == E ? a.default.targetIdFilter : E, u = {
      limit: n.AUDIT_LOG_PAGE_LIMIT
    };
    return null != t && (u.before = t), null != T && (u.user_id = T), null != i && (u.action_type = i), null != A && (u.target_id = A), u
  }(t);
  return E.HTTP.get({
    url: n.Endpoints.GUILD_AUDIT_LOG(e),
    query: s,
    oldFormErrors: !0
  })
}

function A(e, t, s, E) {
  if (!T() && null != e) return _.default.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), i(e, {
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
      threads: i,
      application_commands: A
    } = e.body;
    _.default.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: s,
      users: E,
      webhooks: a,
      guildScheduledEvents: n,
      automodRules: T,
      threads: i,
      applicationCommands: A
    })
  }, () => _.default.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!a.default.hasOlderLogs || T() || null == e) return;
  let s = a.default.logs,
    E = s[s.length - 1],
    n = null;
  return null != E && (n = E.id), _.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: n,
    isGroupedFetch: t
  }), i(e, {
    before: n
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: s,
      users: E,
      webhooks: a,
      guild_scheduled_events: n,
      auto_moderation_rules: T,
      threads: i,
      application_commands: A
    } = e.body;
    _.default.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: s,
      users: E,
      webhooks: a,
      guildScheduledEvents: n,
      automodRules: T,
      threads: i,
      applicationCommands: A
    })
  }, () => _.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function l(e, t) {
  if (!T() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), A(t, null, null, e)
}

function I(e, t) {
  if (!T() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), A(t, e)
}

function r(e, t) {
  if (!T() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), A(t, null, e)
}