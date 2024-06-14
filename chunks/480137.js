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
  T = E("987707"),
  a = E("981631");

function A() {
  return T.default.isLoading || T.default.isLoadingNextPage
}

function n(e, t) {
  let E = function(e) {
    let {
      before: t,
      userId: E,
      targetId: s,
      action: _
    } = e, A = null == E ? T.default.userIdFilter : E, n = null == _ ? T.default.actionFilter : _, I = null == s ? T.default.targetIdFilter : s, u = {
      limit: a.AUDIT_LOG_PAGE_LIMIT
    };
    return null != t && (u.before = t), null != A && (u.user_id = A), null != n && (u.action_type = n), null != I && (u.target_id = I), u
  }(t);
  return s.HTTP.get({
    url: a.Endpoints.GUILD_AUDIT_LOG(e),
    query: E,
    oldFormErrors: !0
  })
}

function I(e, t, E, s) {
  if (!A() && null != e) return _.default.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), n(e, {
    userId: t,
    action: s,
    targetId: E
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: E,
      users: s,
      webhooks: T,
      guild_scheduled_events: a,
      auto_moderation_rules: A,
      threads: n,
      application_commands: I
    } = e.body;
    _.default.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: E,
      users: s,
      webhooks: T,
      guildScheduledEvents: a,
      automodRules: A,
      threads: n,
      applicationCommands: I
    })
  }, () => _.default.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!T.default.hasOlderLogs || A() || null == e) return;
  let E = T.default.logs,
    s = E[E.length - 1],
    a = null;
  return null != s && (a = s.id), _.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: a,
    isGroupedFetch: t
  }), n(e, {
    before: a
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: E,
      users: s,
      webhooks: T,
      guild_scheduled_events: a,
      auto_moderation_rules: A,
      threads: n,
      application_commands: I
    } = e.body;
    _.default.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: E,
      users: s,
      webhooks: T,
      guildScheduledEvents: a,
      automodRules: A,
      threads: n,
      applicationCommands: I
    })
  }, () => _.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function i(e, t) {
  if (!A() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), I(t, null, null, e)
}

function l(e, t) {
  if (!A() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), I(t, e)
}

function L(e, t) {
  if (!A() && null != t) return _.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), I(t, null, e)
}