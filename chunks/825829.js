"use strict";
n.r(t), n.d(t, {
  IS_BACKWARDS_COMPAT_RAID_TYPE: function() {
    return p
  },
  default: function() {
    return C
  },
  extractAutomodNotificationFields: function() {
    return L
  },
  getActionHeaderText: function() {
    return R
  },
  getQuarantineReasonString: function() {
    return f
  },
  getRaidAlertResolveCTAText: function() {
    return y
  },
  getUserIdOfAutomodAction: function() {
    return g
  },
  isAutomodMessageRecord: function() {
    return M
  },
  isAutomodNotification: function() {
    return D
  },
  useAutomodAlertActions: function() {
    return U
  }
}), n("47120");
var o = n("470079"),
  _ = n("462382"),
  u = n("259346"),
  a = n("436817"),
  r = n("189722"),
  E = n("721355"),
  i = n("999923"),
  A = n("729917"),
  s = n("932019"),
  d = n("442837"),
  T = n("592125"),
  l = n("496675"),
  O = n("313889"),
  N = n("177862"),
  I = n("981631"),
  c = n("689938");

function M(e) {
  return e.type === I.MessageTypes.AUTO_MODERATION_ACTION
}

function D(e) {
  var t;
  return null === (t = e.embeds) || void 0 === t ? void 0 : t.some(e => {
    let {
      type: t
    } = e;
    return t === I.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
  })
}

function m(e, t) {
  var n, o, _, u, a;
  let [r] = null !== (n = e.embeds) && void 0 !== n ? n : [];
  if (null != r) {
    if (r.type === I.MessageEmbedTypes.AUTO_MODERATION_MESSAGE) return null == r ? void 0 : null === (_ = r.fields) || void 0 === _ ? void 0 : null === (o = _.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === o ? void 0 : o.rawValue;
    if (r.type === I.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION) return null == r ? void 0 : null === (a = r.fields) || void 0 === a ? void 0 : null === (u = a.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === u ? void 0 : u.rawValue
  }
}

function R(e, t) {
  var n, o;
  let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.NOOP_NULL,
    s = arguments.length > 3 ? arguments[3] : void 0,
    d = arguments.length > 4 ? arguments[4] : void 0,
    T = function(e) {
      let t = m(e, r.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
      if (null != t) return t
    }(e),
    O = function(e) {
      let t = m(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
      if (null != t) return t
    }(e),
    N = function(e) {
      let t = m(e, r.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
      if (null != t) return t
    }(e),
    M = function(e) {
      let t = m(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER);
      if (null != t) return t
    }(e),
    D = function(e) {
      let t = m(e, r.AutomodMessageEmbedKeys.DECISION_OUTCOME);
      if (null != t) return t
    }(e),
    R = m(e, r.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE),
    f = m(e, r.AutomodMessageEmbedKeys.APPLICATION_NAME);
  if (null != M) {
    let e = function(e, t, n) {
      switch (t) {
        case A.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE:
          return function(e) {
            switch (e) {
              case _.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE:
                return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
              case _.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET:
                return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
              default:
                return
            }
          }(e);
        case A.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER:
          return function(e) {
            switch (e) {
              case i.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
              case i.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
              case i.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE:
                return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
              case i.AutomodQuarantineEventMessageEmbedKeys.CLAN_TAG_UPDATE:
                return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_CLAN_TAG_UPDATE;
              default:
                return
            }
          }(n);
        case A.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN:
          return function() {
            return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
          }()
      }
    }(T, O, N);
    if (null != e) return e
  }
  let L = l.default.can(I.Permissions.VIEW_CHANNEL, t);
  let S = (n = t, L ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : c.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER : c.default.Messages.NO_ACCESS),
    C = null != t && L ? E : I.NOOP_NULL,
    U = function(e, t, n) {
      let o = m(e, r.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
      return null == o ? null : ("blocked" === o ? c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK).format({
        channelName: t,
        channelHook: n
      })
    }(e, S, E);
  if (null != U) return U;
  if (null != f) return R === a.AutomodInteractionCallbackTypeEmbedKeys.MODAL && null != d ? D !== u.AutomodDecisionOutcomeEmbedKeys.BLOCKED ? c.default.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_FLAGGED.format({
    applicationName: f,
    interactionUserHook: d,
    integrationOwnerHook: s
  }) : c.default.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_BLOCKED.format({
    applicationName: f,
    interactionUserHook: d,
    integrationOwnerHook: s
  }) : D !== u.AutomodDecisionOutcomeEmbedKeys.BLOCKED ? c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_FLAGGED_HOOK.format({
    applicationName: f,
    channelName: S,
    channelHook: C,
    integrationOwnerHook: s
  }) : c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_BLOCKED_HOOK.format({
    applicationName: f,
    channelName: S,
    channelHook: C,
    integrationOwnerHook: s
  });
  return D !== u.AutomodDecisionOutcomeEmbedKeys.BLOCKED ? c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
    channelName: S,
    channelHook: C
  }) : c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
    channelName: S,
    channelHook: C
  })
}

function f(e) {
  switch (e) {
    case s.AutomodQuarantineUserMessageEmbedKeys.NICKNAME:
      return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
    case s.AutomodQuarantineUserMessageEmbedKeys.USERNAME:
      return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    case s.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME:
      return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
    case s.AutomodQuarantineUserMessageEmbedKeys.CLAN_TAG:
      return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_CLAN_TAG;
    default:
      return c.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME
  }
}

function L(e) {
  var t, n;
  let o = m(e, E.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE),
    _ = m(e, E.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
    u = m(e, E.AutomodNotificationEmbedKeys.RAID_DATETIME),
    a = m(e, E.AutomodNotificationEmbedKeys.DMS_SENT),
    r = m(e, E.AutomodNotificationEmbedKeys.RAID_TYPE),
    i = m(e, E.AutomodNotificationEmbedKeys.RESOLVED_REASON),
    A = m(e, E.AutomodNotificationEmbedKeys.DECISION_ID),
    s = m(e, E.AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
  return {
    notificationType: null !== (t = null == (n = o) ? null : n) && void 0 !== t ? t : void 0,
    joinAttempts: null != _ ? parseInt(_) : void 0,
    raidDatetime: null != u ? new Date(u) : void 0,
    dmsSent: null != a ? parseInt(a) : void 0,
    raidType: null != r ? r : void 0,
    resolvedReason: null != i ? i : void 0,
    decisionId: null != A ? A : void 0,
    suspiciousMentionActivityUntil: null != s ? new Date(s) : void 0
  }
}

function S(e) {
  let t = m(e, r.AutomodMessageEmbedKeys.CHANNEL_ID),
    n = m(e, r.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
    o = (0, O.parseAlertActionsExecution)(n);
  return {
    content: function(e) {
      var t, n;
      let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
      return null !== (n = null == o ? void 0 : o.rawDescription) && void 0 !== n ? n : ""
    }(e),
    ruleName: m(e, r.AutomodMessageEmbedKeys.RULE_NAME),
    decisionId: m(e, r.AutomodMessageEmbedKeys.DECISION_ID),
    keyword: m(e, r.AutomodMessageEmbedKeys.KEYWORD),
    keywordMatchedContent: m(e, r.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT),
    flaggedMessageId: m(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    timeoutDuration: m(e, r.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
    quarantineType: m(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER),
    quarantineAction: m(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION),
    decisionReason: m(e, r.AutomodMessageEmbedKeys.DECISION_REASON),
    applicationName: m(e, r.AutomodMessageEmbedKeys.APPLICATION_NAME),
    interactionUserId: m(e, r.AutomodMessageEmbedKeys.INTERACTION_USER_ID),
    interactionCallbackType: m(e, r.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE),
    embedChannel: T.default.getChannel(t),
    embedChannelId: t,
    alertActionsExecution: null != o ? o : void 0
  }
}

function C(e) {
  let t = o.useMemo(() => S(e), [e]),
    n = (0, d.useStateFromStores)([T.default], () => T.default.getChannel(t.embedChannelId), [t.embedChannelId]);
  return {
    ...t,
    embedChannel: n
  }
}

function U(e) {
  if (null == e) return null;
  let {
    alertActionsExecution: t
  } = S(e);
  return null != t ? t : null
}

function y(e) {
  if (null == e) return c.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
  switch (e) {
    case N.RaidResolutionType.LEGITIMATE_ACTIVITY:
      return c.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
    case N.RaidResolutionType.DM_SPAM:
      return c.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
    case N.RaidResolutionType.JOIN_RAID:
      return c.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
    default:
      return c.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
  }
}

function g(e) {
  return m(e, E.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID)
}
let p = void 0