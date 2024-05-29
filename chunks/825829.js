"use strict";
n.r(t), n.d(t, {
  IS_BACKWARDS_COMPAT_RAID_TYPE: function() {
    return g
  },
  default: function() {
    return S
  },
  extractAutomodNotificationFields: function() {
    return f
  },
  getActionHeaderText: function() {
    return R
  },
  getQuarantineReasonString: function() {
    return m
  },
  getRaidAlertResolveCTAText: function() {
    return C
  },
  getUserIdOfAutomodAction: function() {
    return y
  },
  isAutomodMessageRecord: function() {
    return c
  },
  isAutomodNotification: function() {
    return M
  },
  useAutomodAlertActions: function() {
    return U
  }
}), n("47120");
var o = n("470079"),
  _ = n("462382"),
  a = n("436817"),
  u = n("189722"),
  r = n("721355"),
  E = n("999923"),
  i = n("729917"),
  A = n("932019"),
  s = n("442837"),
  d = n("592125"),
  T = n("496675"),
  l = n("313889"),
  O = n("177862"),
  N = n("981631"),
  I = n("689938");

function c(e) {
  return e.type === N.MessageTypes.AUTO_MODERATION_ACTION
}

function M(e) {
  var t;
  return null === (t = e.embeds) || void 0 === t ? void 0 : t.some(e => {
    let {
      type: t
    } = e;
    return t === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
  })
}

function D(e, t) {
  var n, o, _, a, u;
  let [r] = null !== (n = e.embeds) && void 0 !== n ? n : [];
  if (null != r) {
    if (r.type === N.MessageEmbedTypes.AUTO_MODERATION_MESSAGE) return null == r ? void 0 : null === (_ = r.fields) || void 0 === _ ? void 0 : null === (o = _.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === o ? void 0 : o.rawValue;
    if (r.type === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION) return null == r ? void 0 : null === (u = r.fields) || void 0 === u ? void 0 : null === (a = u.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === a ? void 0 : a.rawValue
  }
}

function R(e, t) {
  var n, o;
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.NOOP_NULL,
    A = arguments.length > 3 ? arguments[3] : void 0,
    s = arguments.length > 4 ? arguments[4] : void 0,
    d = function(e) {
      let t = D(e, u.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
      if (null != t) return t
    }(e),
    l = function(e) {
      let t = D(e, u.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
      if (null != t) return t
    }(e),
    O = function(e) {
      let t = D(e, u.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
      if (null != t) return t
    }(e),
    c = function(e) {
      let t = D(e, u.AutomodMessageEmbedKeys.QUARANTINE_USER);
      if (null != t) return t
    }(e),
    M = D(e, u.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE),
    R = D(e, u.AutomodMessageEmbedKeys.APPLICATION_NAME);
  if (null != c) {
    let e = function(e, t, n) {
      switch (t) {
        case i.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE:
          return function(e) {
            switch (e) {
              case _.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
              case _.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
              default:
                return
            }
          }(e);
        case i.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER:
          return function(e) {
            switch (e) {
              case E.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
              case E.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
              case E.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
              case E.AutomodQuarantineEventMessageEmbedKeys.CLAN_TAG_UPDATE:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_CLAN_TAG_UPDATE;
              default:
                return
            }
          }(n);
        case i.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN:
          return function() {
            return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
          }()
      }
    }(d, l, O);
    if (null != e) return e
  }
  let m = D(e, u.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    f = T.default.can(N.Permissions.VIEW_CHANNEL, t);
  let L = (n = t, f ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : I.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER : I.default.Messages.NO_ACCESS),
    S = null != t && f ? r : N.NOOP_NULL,
    U = function(e, t, n) {
      let o = D(e, u.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
      return null == o ? null : ("blocked" === o ? I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK).format({
        channelName: t,
        channelHook: n
      })
    }(e, L, r);
  if (null != U) return U;
  if (null != R) return M === a.AutomodInteractionCallbackTypeEmbedKeys.MODAL && null != s ? null != m ? I.default.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_FLAGGED.format({
    applicationName: R,
    interactionUserHook: s,
    integrationOwnerHook: A
  }) : I.default.Messages.GUILD_AUTOMOD_LAUNCH_MODAL_HEADER_ACTION_APP_BLOCKED.format({
    applicationName: R,
    interactionUserHook: s,
    integrationOwnerHook: A
  }) : null != m ? I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_FLAGGED_HOOK.format({
    applicationName: R,
    channelName: L,
    channelHook: S,
    integrationOwnerHook: A
  }) : I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_BLOCKED_HOOK.format({
    applicationName: R,
    channelName: L,
    channelHook: S,
    integrationOwnerHook: A
  });
  return null != m ? I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
    channelName: L,
    channelHook: S
  }) : I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
    channelName: L,
    channelHook: S
  })
}

function m(e) {
  switch (e) {
    case A.AutomodQuarantineUserMessageEmbedKeys.NICKNAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
    case A.AutomodQuarantineUserMessageEmbedKeys.USERNAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    case A.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
    case A.AutomodQuarantineUserMessageEmbedKeys.CLAN_TAG:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_CLAN_TAG;
    default:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME
  }
}

function f(e) {
  var t, n;
  let o = D(e, r.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE),
    _ = D(e, r.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
    a = D(e, r.AutomodNotificationEmbedKeys.RAID_DATETIME),
    u = D(e, r.AutomodNotificationEmbedKeys.DMS_SENT),
    E = D(e, r.AutomodNotificationEmbedKeys.RAID_TYPE),
    i = D(e, r.AutomodNotificationEmbedKeys.RESOLVED_REASON),
    A = D(e, r.AutomodNotificationEmbedKeys.DECISION_ID),
    s = D(e, r.AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
  return {
    notificationType: null !== (t = null == (n = o) ? null : n) && void 0 !== t ? t : void 0,
    joinAttempts: null != _ ? parseInt(_) : void 0,
    raidDatetime: null != a ? new Date(a) : void 0,
    dmsSent: null != u ? parseInt(u) : void 0,
    raidType: null != E ? E : void 0,
    resolvedReason: null != i ? i : void 0,
    decisionId: null != A ? A : void 0,
    suspiciousMentionActivityUntil: null != s ? new Date(s) : void 0
  }
}

function L(e) {
  let t = D(e, u.AutomodMessageEmbedKeys.CHANNEL_ID),
    n = D(e, u.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
    o = (0, l.parseAlertActionsExecution)(n);
  return {
    content: function(e) {
      var t, n;
      let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
      return null !== (n = null == o ? void 0 : o.rawDescription) && void 0 !== n ? n : ""
    }(e),
    ruleName: D(e, u.AutomodMessageEmbedKeys.RULE_NAME),
    decisionId: D(e, u.AutomodMessageEmbedKeys.DECISION_ID),
    keyword: D(e, u.AutomodMessageEmbedKeys.KEYWORD),
    keywordMatchedContent: D(e, u.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT),
    flaggedMessageId: D(e, u.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    timeoutDuration: D(e, u.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
    quarantineType: D(e, u.AutomodMessageEmbedKeys.QUARANTINE_USER),
    quarantineAction: D(e, u.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION),
    decisionReason: D(e, u.AutomodMessageEmbedKeys.DECISION_REASON),
    applicationName: D(e, u.AutomodMessageEmbedKeys.APPLICATION_NAME),
    interactionUserId: D(e, u.AutomodMessageEmbedKeys.INTERACTION_USER_ID),
    interactionCallbackType: D(e, u.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE),
    embedChannel: d.default.getChannel(t),
    embedChannelId: t,
    alertActionsExecution: null != o ? o : void 0
  }
}

function S(e) {
  let t = o.useMemo(() => L(e), [e]),
    n = (0, s.useStateFromStores)([d.default], () => d.default.getChannel(t.embedChannelId), [t.embedChannelId]);
  return {
    ...t,
    embedChannel: n
  }
}

function U(e) {
  if (null == e) return null;
  let {
    alertActionsExecution: t
  } = L(e);
  return null != t ? t : null
}

function C(e) {
  if (null == e) return I.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
  switch (e) {
    case O.RaidResolutionType.LEGITIMATE_ACTIVITY:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
    case O.RaidResolutionType.DM_SPAM:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
    case O.RaidResolutionType.JOIN_RAID:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
    default:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
  }
}

function y(e) {
  return D(e, r.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID)
}
let g = void 0