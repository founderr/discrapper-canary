"use strict";
E.r(t), E.d(t, {
  AuditLogChange: function() {
    return l
  },
  getActionType: function() {
    return i
  },
  getTargetType: function() {
    return u
  }
});
var s = E("913527"),
  _ = E.n(s),
  T = E("81825"),
  a = E("960048"),
  A = E("709054"),
  n = E("981631");

function I(e, t, E) {
  return t in e ? Object.defineProperty(e, t, {
    value: E,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = E, e
}

function u(e) {
  if (e === n.AuditLogActions.ALL) return n.AuditLogTargetTypes.ALL;
  if (e <= n.AuditLogActions.GUILD_UPDATE) return n.AuditLogTargetTypes.GUILD;
  if (e <= n.AuditLogActions.CHANNEL_DELETE || e === n.AuditLogActions.MESSAGE_BULK_DELETE) return n.AuditLogTargetTypes.CHANNEL;
  else if (e <= n.AuditLogActions.CHANNEL_OVERWRITE_DELETE) return n.AuditLogTargetTypes.CHANNEL_OVERWRITE;
  else if (e <= n.AuditLogActions.BOT_ADD || e === n.AuditLogActions.MESSAGE_DELETE || e === n.AuditLogActions.MESSAGE_PIN || e === n.AuditLogActions.MESSAGE_UNPIN) return n.AuditLogTargetTypes.USER;
  else if (e <= n.AuditLogActions.ROLE_DELETE) return n.AuditLogTargetTypes.ROLE;
  else if (e <= n.AuditLogActions.INVITE_DELETE) return n.AuditLogTargetTypes.INVITE;
  else if (e <= n.AuditLogActions.WEBHOOK_DELETE) return n.AuditLogTargetTypes.WEBHOOK;
  else if (e <= n.AuditLogActions.EMOJI_DELETE) return n.AuditLogTargetTypes.EMOJI;
  else if (e <= n.AuditLogActions.INTEGRATION_DELETE) return n.AuditLogTargetTypes.INTEGRATION;
  else if (e <= n.AuditLogActions.STAGE_INSTANCE_DELETE) return n.AuditLogTargetTypes.STAGE_INSTANCE;
  else if (e <= n.AuditLogActions.STICKER_DELETE) return n.AuditLogTargetTypes.STICKER;
  else if (e <= n.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE) return n.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT;
  else if (e <= n.AuditLogActions.THREAD_DELETE) return n.AuditLogTargetTypes.THREAD;
  else if (e === n.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) return n.AuditLogTargetTypes.APPLICATION_COMMAND;
  else if (e <= n.AuditLogActions.SOUNDBOARD_SOUND_DELETE) return n.AuditLogTargetTypes.GUILD_SOUNDBOARD;
  else if (e < n.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return n.AuditLogTargetTypes.AUTO_MODERATION_RULE;
  else if (e === n.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return n.AuditLogTargetTypes.USER;
  else if (e === n.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL) return n.AuditLogTargetTypes.USER;
  else if (e === n.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return n.AuditLogTargetTypes.USER;
  else if (e === n.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER) return n.AuditLogTargetTypes.USER;
  else if (e <= n.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED) return n.AuditLogTargetTypes.GUILD;
  else if (e <= n.AuditLogActions.ONBOARDING_PROMPT_DELETE) return n.AuditLogTargetTypes.ONBOARDING_PROMPT;
  else if (e <= n.AuditLogActions.ONBOARDING_UPDATE) return n.AuditLogTargetTypes.GUILD_ONBOARDING;
  else if (e <= n.AuditLogActions.GUILD_HOME_REMOVE_ITEM) return n.AuditLogTargetTypes.GUILD_HOME;
  else if (e <= n.AuditLogActions.HARMFUL_LINKS_BLOCKED_MESSAGE) return n.AuditLogTargetTypes.GUILD;
  else if (e <= n.AuditLogActions.HOME_SETTINGS_UPDATE) return n.AuditLogTargetTypes.HOME_SETTINGS;
  else if (e <= n.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE) return n.AuditLogTargetTypes.VOICE_CHANNEL_STATUS;
  else if (e <= n.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return n.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION;
  return a.default.captureMessage("Unknown target type for: ".concat(e)), n.AuditLogTargetTypes.UNKNOWN
}

function i(e) {
  switch (e) {
    case n.AuditLogActions.CHANNEL_CREATE:
    case n.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
    case n.AuditLogActions.MEMBER_BAN_REMOVE:
    case n.AuditLogActions.ROLE_CREATE:
    case n.AuditLogActions.INVITE_CREATE:
    case n.AuditLogActions.WEBHOOK_CREATE:
    case n.AuditLogActions.EMOJI_CREATE:
    case n.AuditLogActions.STICKER_CREATE:
    case n.AuditLogActions.MESSAGE_PIN:
    case n.AuditLogActions.BOT_ADD:
    case n.AuditLogActions.INTEGRATION_CREATE:
    case n.AuditLogActions.STAGE_INSTANCE_CREATE:
    case n.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
    case n.AuditLogActions.THREAD_CREATE:
    case n.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
    case n.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
    case n.AuditLogActions.ONBOARDING_PROMPT_CREATE:
    case n.AuditLogActions.ONBOARDING_CREATE:
    case n.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
    case n.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
    case n.AuditLogActions.HOME_SETTINGS_CREATE:
    case n.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return n.AuditLogActionTypes.CREATE;
    case n.AuditLogActions.CHANNEL_DELETE:
    case n.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
    case n.AuditLogActions.MEMBER_KICK:
    case n.AuditLogActions.MEMBER_PRUNE:
    case n.AuditLogActions.MEMBER_BAN_ADD:
    case n.AuditLogActions.ROLE_DELETE:
    case n.AuditLogActions.INVITE_DELETE:
    case n.AuditLogActions.WEBHOOK_DELETE:
    case n.AuditLogActions.EMOJI_DELETE:
    case n.AuditLogActions.STICKER_DELETE:
    case n.AuditLogActions.MESSAGE_DELETE:
    case n.AuditLogActions.MESSAGE_BULK_DELETE:
    case n.AuditLogActions.MESSAGE_UNPIN:
    case n.AuditLogActions.INTEGRATION_DELETE:
    case n.AuditLogActions.MEMBER_DISCONNECT:
    case n.AuditLogActions.STAGE_INSTANCE_DELETE:
    case n.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
    case n.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
    case n.AuditLogActions.THREAD_DELETE:
    case n.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
    case n.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
    case n.AuditLogActions.ONBOARDING_PROMPT_DELETE:
    case n.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
    case n.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
    case n.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return n.AuditLogActionTypes.DELETE;
    case n.AuditLogActions.GUILD_UPDATE:
    case n.AuditLogActions.CHANNEL_UPDATE:
    case n.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
    case n.AuditLogActions.MEMBER_UPDATE:
    case n.AuditLogActions.MEMBER_ROLE_UPDATE:
    case n.AuditLogActions.ROLE_UPDATE:
    case n.AuditLogActions.INVITE_UPDATE:
    case n.AuditLogActions.WEBHOOK_UPDATE:
    case n.AuditLogActions.EMOJI_UPDATE:
    case n.AuditLogActions.STICKER_UPDATE:
    case n.AuditLogActions.INTEGRATION_UPDATE:
    case n.AuditLogActions.MEMBER_MOVE:
    case n.AuditLogActions.STAGE_INSTANCE_UPDATE:
    case n.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
    case n.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case n.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
    case n.AuditLogActions.THREAD_UPDATE:
    case n.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
    case n.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
    case n.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
    case n.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
    case n.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
    case n.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
    case n.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
    case n.AuditLogActions.ONBOARDING_UPDATE:
    case n.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
    case n.AuditLogActions.HOME_SETTINGS_UPDATE:
      return n.AuditLogActionTypes.UPDATE
  }
  return n.AuditLogActionTypes.ALL
}
class l {
  constructor(e, t, E) {
    I(this, "key", void 0), I(this, "oldValue", void 0), I(this, "newValue", void 0), I(this, "subtarget", void 0), this.key = e, this.oldValue = t, this.newValue = E
  }
}
class L extends T.default {
  constructor(e) {
    var t, E, s, T, a, n;
    super(), I(this, "id", void 0), I(this, "actionType", void 0), I(this, "action", void 0), I(this, "targetType", void 0), I(this, "targetId", void 0), I(this, "target", void 0), I(this, "userId", void 0), I(this, "changes", void 0), I(this, "timestampStart", void 0), I(this, "timestampEnd", void 0), I(this, "user", void 0), I(this, "options", void 0), this.id = e.id, this.action = e.action, this.actionType = i(this.action), this.targetId = e.targetId, this.timestampStart = null !== (t = e.timestampStart) && void 0 !== t ? t : _()(A.default.extractTimestamp(this.id)), this.timestampEnd = null !== (E = e.timestampEnd) && void 0 !== E ? E : this.timestampStart, this.userId = e.userId, this.changes = null !== (s = e.changes) && void 0 !== s ? s : [], this.targetType = u(this.action), this.options = null !== (T = e.options) && void 0 !== T ? T : {}, this.target = null !== (a = e.target) && void 0 !== a ? a : e.id, this.user = null !== (n = e.user) && void 0 !== n ? n : null
  }
}
t.default = L