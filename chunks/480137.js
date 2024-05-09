"use strict";
s.r(t), s.d(t, {
  fetchLogs: function() {
    return r
  },
  fetchNextLogPage: function() {
    return u
  },
  filterByAction: function() {
    return o
  },
  filterByTargetId: function() {
    return d
  },
  filterByUserId: function() {
    return T
  }
});
var a = s("544891"),
  n = s("570140"),
  i = s("987707"),
  E = s("981631");

function l() {
  return i.default.isLoading || i.default.isLoadingNextPage
}

function _(e, t) {
  let s = function(e) {
    let {
      before: t,
      userId: s,
      targetId: a,
      action: n
    } = e, l = null == s ? i.default.userIdFilter : s, _ = null == n ? i.default.actionFilter : n, r = null == a ? i.default.targetIdFilter : a, u = {
      limit: E.AUDIT_LOG_PAGE_LIMIT
    };
    return null != t && (u.before = t), null != l && (u.user_id = l), null != _ && (u.action_type = _), null != r && (u.target_id = r), u
  }(t);
  return a.HTTP.get({
    url: E.Endpoints.GUILD_AUDIT_LOG(e),
    query: s,
    oldFormErrors: !0
  })
}

function r(e, t, s, a) {
  if (!l() && null != e) return n.default.dispatch({
    type: "AUDIT_LOG_FETCH_START"
  }), _(e, {
    userId: t,
    action: a,
    targetId: s
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: s,
      users: a,
      webhooks: i,
      guild_scheduled_events: E,
      auto_moderation_rules: l,
      threads: _,
      application_commands: r
    } = e.body;
    n.default.dispatch({
      type: "AUDIT_LOG_FETCH_SUCCESS",
      logs: t,
      integrations: s,
      users: a,
      webhooks: i,
      guildScheduledEvents: E,
      automodRules: l,
      threads: _,
      applicationCommands: r
    })
  }, () => n.default.dispatch({
    type: "AUDIT_LOG_FETCH_FAIL"
  }))
}

function u(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!i.default.hasOlderLogs || l() || null == e) return;
  let s = i.default.logs,
    a = s[s.length - 1],
    E = null;
  return null != a && (E = a.id), n.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
    before: E,
    isGroupedFetch: t
  }), _(e, {
    before: E
  }).then(e => {
    let {
      audit_log_entries: t,
      integrations: s,
      users: a,
      webhooks: i,
      guild_scheduled_events: E,
      auto_moderation_rules: l,
      threads: _,
      application_commands: r
    } = e.body;
    n.default.dispatch({
      type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
      logs: t,
      integrations: s,
      users: a,
      webhooks: i,
      guildScheduledEvents: E,
      automodRules: l,
      threads: _,
      applicationCommands: r
    })
  }, () => n.default.dispatch({
    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
  }))
}

function o(e, t) {
  if (!l() && null != t) return n.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_ACTION",
    action: e
  }), r(t, null, null, e)
}

function T(e, t) {
  if (!l() && null != t) return n.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_USER",
    userId: e
  }), r(t, e)
}

function d(e, t) {
  if (!l() && null != t) return n.default.dispatch({
    type: "AUDIT_LOG_FILTER_BY_TARGET",
    targetId: e
  }), r(t, null, e)
}