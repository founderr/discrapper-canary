"use strict";
s.r(t), s.d(t, {
  AuditLogChange: function() {
    return I
  },
  getActionType: function() {
    return l
  },
  getTargetType: function() {
    return A
  }
});
var E = s("913527"),
  _ = s.n(E),
  a = s("81825"),
  n = s("960048"),
  T = s("709054"),
  u = s("981631");

function i(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function A(e) {
  if (e === u.AuditLogActions.ALL) return u.AuditLogTargetTypes.ALL;
  if (e <= u.AuditLogActions.GUILD_UPDATE) return u.AuditLogTargetTypes.GUILD;
  if (e <= u.AuditLogActions.CHANNEL_DELETE || e === u.AuditLogActions.MESSAGE_BULK_DELETE) return u.AuditLogTargetTypes.CHANNEL;
  else if (e <= u.AuditLogActions.CHANNEL_OVERWRITE_DELETE) return u.AuditLogTargetTypes.CHANNEL_OVERWRITE;
  else if (e <= u.AuditLogActions.BOT_ADD || e === u.AuditLogActions.MESSAGE_DELETE || e === u.AuditLogActions.MESSAGE_PIN || e === u.AuditLogActions.MESSAGE_UNPIN) return u.AuditLogTargetTypes.USER;
  else if (e <= u.AuditLogActions.ROLE_DELETE) return u.AuditLogTargetTypes.ROLE;
  else if (e <= u.AuditLogActions.INVITE_DELETE) return u.AuditLogTargetTypes.INVITE;
  else if (e <= u.AuditLogActions.WEBHOOK_DELETE) return u.AuditLogTargetTypes.WEBHOOK;
  else if (e <= u.AuditLogActions.EMOJI_DELETE) return u.AuditLogTargetTypes.EMOJI;
  else if (e <= u.AuditLogActions.INTEGRATION_DELETE) return u.AuditLogTargetTypes.INTEGRATION;
  else if (e <= u.AuditLogActions.STAGE_INSTANCE_DELETE) return u.AuditLogTargetTypes.STAGE_INSTANCE;
  else if (e <= u.AuditLogActions.STICKER_DELETE) return u.AuditLogTargetTypes.STICKER;
  else if (e <= u.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE) return u.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT;
  else if (e <= u.AuditLogActions.THREAD_DELETE) return u.AuditLogTargetTypes.THREAD;
  else if (e === u.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) return u.AuditLogTargetTypes.APPLICATION_COMMAND;
  else if (e <= u.AuditLogActions.SOUNDBOARD_SOUND_DELETE) return u.AuditLogTargetTypes.GUILD_SOUNDBOARD;
  else if (e < u.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return u.AuditLogTargetTypes.AUTO_MODERATION_RULE;
  else if (e === u.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return u.AuditLogTargetTypes.USER;
  else if (e === u.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL) return u.AuditLogTargetTypes.USER;
  else if (e === u.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return u.AuditLogTargetTypes.USER;
  else if (e === u.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER) return u.AuditLogTargetTypes.USER;
  else if (e <= u.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED) return u.AuditLogTargetTypes.GUILD;
  else if (e <= u.AuditLogActions.ONBOARDING_PROMPT_DELETE) return u.AuditLogTargetTypes.ONBOARDING_PROMPT;
  else if (e <= u.AuditLogActions.ONBOARDING_UPDATE) return u.AuditLogTargetTypes.GUILD_ONBOARDING;
  else if (e <= u.AuditLogActions.GUILD_HOME_REMOVE_ITEM) return u.AuditLogTargetTypes.GUILD_HOME;
  else if (e <= u.AuditLogActions.HARMFUL_LINKS_BLOCKED_MESSAGE) return u.AuditLogTargetTypes.GUILD;
  else if (e <= u.AuditLogActions.HOME_SETTINGS_UPDATE) return u.AuditLogTargetTypes.HOME_SETTINGS;
  else if (e <= u.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE) return u.AuditLogTargetTypes.VOICE_CHANNEL_STATUS;
  else if (e <= u.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return u.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION;
  return n.default.captureMessage("Unknown target type for: ".concat(e)), u.AuditLogTargetTypes.UNKNOWN
}

function l(e) {
  switch (e) {
    case u.AuditLogActions.CHANNEL_CREATE:
    case u.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
    case u.AuditLogActions.MEMBER_BAN_REMOVE:
    case u.AuditLogActions.ROLE_CREATE:
    case u.AuditLogActions.INVITE_CREATE:
    case u.AuditLogActions.WEBHOOK_CREATE:
    case u.AuditLogActions.EMOJI_CREATE:
    case u.AuditLogActions.STICKER_CREATE:
    case u.AuditLogActions.MESSAGE_PIN:
    case u.AuditLogActions.BOT_ADD:
    case u.AuditLogActions.INTEGRATION_CREATE:
    case u.AuditLogActions.STAGE_INSTANCE_CREATE:
    case u.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
    case u.AuditLogActions.THREAD_CREATE:
    case u.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
    case u.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
    case u.AuditLogActions.ONBOARDING_PROMPT_CREATE:
    case u.AuditLogActions.ONBOARDING_CREATE:
    case u.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
    case u.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
    case u.AuditLogActions.HOME_SETTINGS_CREATE:
    case u.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return u.AuditLogActionTypes.CREATE;
    case u.AuditLogActions.CHANNEL_DELETE:
    case u.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
    case u.AuditLogActions.MEMBER_KICK:
    case u.AuditLogActions.MEMBER_PRUNE:
    case u.AuditLogActions.MEMBER_BAN_ADD:
    case u.AuditLogActions.ROLE_DELETE:
    case u.AuditLogActions.INVITE_DELETE:
    case u.AuditLogActions.WEBHOOK_DELETE:
    case u.AuditLogActions.EMOJI_DELETE:
    case u.AuditLogActions.STICKER_DELETE:
    case u.AuditLogActions.MESSAGE_DELETE:
    case u.AuditLogActions.MESSAGE_BULK_DELETE:
    case u.AuditLogActions.MESSAGE_UNPIN:
    case u.AuditLogActions.INTEGRATION_DELETE:
    case u.AuditLogActions.MEMBER_DISCONNECT:
    case u.AuditLogActions.STAGE_INSTANCE_DELETE:
    case u.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
    case u.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
    case u.AuditLogActions.THREAD_DELETE:
    case u.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
    case u.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
    case u.AuditLogActions.ONBOARDING_PROMPT_DELETE:
    case u.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
    case u.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
    case u.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return u.AuditLogActionTypes.DELETE;
    case u.AuditLogActions.GUILD_UPDATE:
    case u.AuditLogActions.CHANNEL_UPDATE:
    case u.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
    case u.AuditLogActions.MEMBER_UPDATE:
    case u.AuditLogActions.MEMBER_ROLE_UPDATE:
    case u.AuditLogActions.ROLE_UPDATE:
    case u.AuditLogActions.INVITE_UPDATE:
    case u.AuditLogActions.WEBHOOK_UPDATE:
    case u.AuditLogActions.EMOJI_UPDATE:
    case u.AuditLogActions.STICKER_UPDATE:
    case u.AuditLogActions.INTEGRATION_UPDATE:
    case u.AuditLogActions.MEMBER_MOVE:
    case u.AuditLogActions.STAGE_INSTANCE_UPDATE:
    case u.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
    case u.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case u.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
    case u.AuditLogActions.THREAD_UPDATE:
    case u.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
    case u.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
    case u.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
    case u.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
    case u.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
    case u.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
    case u.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
    case u.AuditLogActions.ONBOARDING_UPDATE:
    case u.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
    case u.AuditLogActions.HOME_SETTINGS_UPDATE:
      return u.AuditLogActionTypes.UPDATE
  }
  return u.AuditLogActionTypes.ALL
}
class I {
  constructor(e, t, s) {
    i(this, "key", void 0), i(this, "oldValue", void 0), i(this, "newValue", void 0), i(this, "subtarget", void 0), this.key = e, this.oldValue = t, this.newValue = s
  }
}
class L extends a.default {
  constructor(e) {
    var t, s, E, a, n, u;
    super(), i(this, "id", void 0), i(this, "actionType", void 0), i(this, "action", void 0), i(this, "targetType", void 0), i(this, "targetId", void 0), i(this, "target", void 0), i(this, "userId", void 0), i(this, "changes", void 0), i(this, "timestampStart", void 0), i(this, "timestampEnd", void 0), i(this, "user", void 0), i(this, "options", void 0), this.id = e.id, this.action = e.action, this.actionType = l(this.action), this.targetId = e.targetId, this.timestampStart = null !== (t = e.timestampStart) && void 0 !== t ? t : _()(T.default.extractTimestamp(this.id)), this.timestampEnd = null !== (s = e.timestampEnd) && void 0 !== s ? s : this.timestampStart, this.userId = e.userId, this.changes = null !== (E = e.changes) && void 0 !== E ? E : [], this.targetType = A(this.action), this.options = null !== (a = e.options) && void 0 !== a ? a : {}, this.target = null !== (n = e.target) && void 0 !== n ? n : e.id, this.user = null !== (u = e.user) && void 0 !== u ? u : null
  }
}
t.default = L