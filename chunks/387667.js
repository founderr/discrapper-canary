"use strict";
s.r(t), s.d(t, {
  AuditLogChange: function() {
    return T
  },
  getActionType: function() {
    return o
  },
  getTargetType: function() {
    return u
  }
});
var a = s("913527"),
  n = s.n(a),
  i = s("81825"),
  E = s("960048"),
  l = s("709054"),
  _ = s("981631");

function r(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function u(e) {
  if (e === _.AuditLogActions.ALL) return _.AuditLogTargetTypes.ALL;
  if (e <= _.AuditLogActions.GUILD_UPDATE) return _.AuditLogTargetTypes.GUILD;
  if (e <= _.AuditLogActions.CHANNEL_DELETE || e === _.AuditLogActions.MESSAGE_BULK_DELETE) return _.AuditLogTargetTypes.CHANNEL;
  else if (e <= _.AuditLogActions.CHANNEL_OVERWRITE_DELETE) return _.AuditLogTargetTypes.CHANNEL_OVERWRITE;
  else if (e <= _.AuditLogActions.BOT_ADD || e === _.AuditLogActions.MESSAGE_DELETE || e === _.AuditLogActions.MESSAGE_PIN || e === _.AuditLogActions.MESSAGE_UNPIN) return _.AuditLogTargetTypes.USER;
  else if (e <= _.AuditLogActions.ROLE_DELETE) return _.AuditLogTargetTypes.ROLE;
  else if (e <= _.AuditLogActions.INVITE_DELETE) return _.AuditLogTargetTypes.INVITE;
  else if (e <= _.AuditLogActions.WEBHOOK_DELETE) return _.AuditLogTargetTypes.WEBHOOK;
  else if (e <= _.AuditLogActions.EMOJI_DELETE) return _.AuditLogTargetTypes.EMOJI;
  else if (e <= _.AuditLogActions.INTEGRATION_DELETE) return _.AuditLogTargetTypes.INTEGRATION;
  else if (e <= _.AuditLogActions.STAGE_INSTANCE_DELETE) return _.AuditLogTargetTypes.STAGE_INSTANCE;
  else if (e <= _.AuditLogActions.STICKER_DELETE) return _.AuditLogTargetTypes.STICKER;
  else if (e <= _.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE) return _.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT;
  else if (e <= _.AuditLogActions.THREAD_DELETE) return _.AuditLogTargetTypes.THREAD;
  else if (e === _.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) return _.AuditLogTargetTypes.APPLICATION_COMMAND;
  else if (e <= _.AuditLogActions.SOUNDBOARD_SOUND_DELETE) return _.AuditLogTargetTypes.GUILD_SOUNDBOARD;
  else if (e < _.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return _.AuditLogTargetTypes.AUTO_MODERATION_RULE;
  else if (e === _.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return _.AuditLogTargetTypes.USER;
  else if (e === _.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL) return _.AuditLogTargetTypes.USER;
  else if (e === _.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return _.AuditLogTargetTypes.USER;
  else if (e === _.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER) return _.AuditLogTargetTypes.USER;
  else if (e <= _.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED) return _.AuditLogTargetTypes.GUILD;
  else if (e <= _.AuditLogActions.ONBOARDING_PROMPT_DELETE) return _.AuditLogTargetTypes.ONBOARDING_PROMPT;
  else if (e <= _.AuditLogActions.ONBOARDING_UPDATE) return _.AuditLogTargetTypes.GUILD_ONBOARDING;
  else if (e <= _.AuditLogActions.GUILD_HOME_REMOVE_ITEM) return _.AuditLogTargetTypes.GUILD_HOME;
  else if (e <= _.AuditLogActions.HARMFUL_LINKS_BLOCKED_MESSAGE) return _.AuditLogTargetTypes.GUILD;
  else if (e <= _.AuditLogActions.HOME_SETTINGS_UPDATE) return _.AuditLogTargetTypes.HOME_SETTINGS;
  else if (e <= _.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE) return _.AuditLogTargetTypes.VOICE_CHANNEL_STATUS;
  else if (e <= _.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return _.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION;
  return E.default.captureMessage("Unknown target type for: ".concat(e)), _.AuditLogTargetTypes.UNKNOWN
}

function o(e) {
  switch (e) {
    case _.AuditLogActions.CHANNEL_CREATE:
    case _.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
    case _.AuditLogActions.MEMBER_BAN_REMOVE:
    case _.AuditLogActions.ROLE_CREATE:
    case _.AuditLogActions.INVITE_CREATE:
    case _.AuditLogActions.WEBHOOK_CREATE:
    case _.AuditLogActions.EMOJI_CREATE:
    case _.AuditLogActions.STICKER_CREATE:
    case _.AuditLogActions.MESSAGE_PIN:
    case _.AuditLogActions.BOT_ADD:
    case _.AuditLogActions.INTEGRATION_CREATE:
    case _.AuditLogActions.STAGE_INSTANCE_CREATE:
    case _.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
    case _.AuditLogActions.THREAD_CREATE:
    case _.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
    case _.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
    case _.AuditLogActions.ONBOARDING_PROMPT_CREATE:
    case _.AuditLogActions.ONBOARDING_CREATE:
    case _.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
    case _.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
    case _.AuditLogActions.HOME_SETTINGS_CREATE:
    case _.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return _.AuditLogActionTypes.CREATE;
    case _.AuditLogActions.CHANNEL_DELETE:
    case _.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
    case _.AuditLogActions.MEMBER_KICK:
    case _.AuditLogActions.MEMBER_PRUNE:
    case _.AuditLogActions.MEMBER_BAN_ADD:
    case _.AuditLogActions.ROLE_DELETE:
    case _.AuditLogActions.INVITE_DELETE:
    case _.AuditLogActions.WEBHOOK_DELETE:
    case _.AuditLogActions.EMOJI_DELETE:
    case _.AuditLogActions.STICKER_DELETE:
    case _.AuditLogActions.MESSAGE_DELETE:
    case _.AuditLogActions.MESSAGE_BULK_DELETE:
    case _.AuditLogActions.MESSAGE_UNPIN:
    case _.AuditLogActions.INTEGRATION_DELETE:
    case _.AuditLogActions.MEMBER_DISCONNECT:
    case _.AuditLogActions.STAGE_INSTANCE_DELETE:
    case _.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
    case _.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
    case _.AuditLogActions.THREAD_DELETE:
    case _.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
    case _.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
    case _.AuditLogActions.ONBOARDING_PROMPT_DELETE:
    case _.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
    case _.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
    case _.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return _.AuditLogActionTypes.DELETE;
    case _.AuditLogActions.GUILD_UPDATE:
    case _.AuditLogActions.CHANNEL_UPDATE:
    case _.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
    case _.AuditLogActions.MEMBER_UPDATE:
    case _.AuditLogActions.MEMBER_ROLE_UPDATE:
    case _.AuditLogActions.ROLE_UPDATE:
    case _.AuditLogActions.INVITE_UPDATE:
    case _.AuditLogActions.WEBHOOK_UPDATE:
    case _.AuditLogActions.EMOJI_UPDATE:
    case _.AuditLogActions.STICKER_UPDATE:
    case _.AuditLogActions.INTEGRATION_UPDATE:
    case _.AuditLogActions.MEMBER_MOVE:
    case _.AuditLogActions.STAGE_INSTANCE_UPDATE:
    case _.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
    case _.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case _.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
    case _.AuditLogActions.THREAD_UPDATE:
    case _.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
    case _.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
    case _.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
    case _.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
    case _.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
    case _.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
    case _.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
    case _.AuditLogActions.ONBOARDING_UPDATE:
    case _.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
    case _.AuditLogActions.HOME_SETTINGS_UPDATE:
      return _.AuditLogActionTypes.UPDATE
  }
  return _.AuditLogActionTypes.ALL
}
class T {
  constructor(e, t, s) {
    r(this, "key", void 0), r(this, "oldValue", void 0), r(this, "newValue", void 0), r(this, "subtarget", void 0), this.key = e, this.oldValue = t, this.newValue = s
  }
}
class d extends i.default {
  constructor(e) {
    var t, s, a, i, E, _;
    super(), r(this, "id", void 0), r(this, "actionType", void 0), r(this, "action", void 0), r(this, "targetType", void 0), r(this, "targetId", void 0), r(this, "target", void 0), r(this, "userId", void 0), r(this, "changes", void 0), r(this, "timestampStart", void 0), r(this, "timestampEnd", void 0), r(this, "user", void 0), r(this, "options", void 0), this.id = e.id, this.action = e.action, this.actionType = o(this.action), this.targetId = e.targetId, this.timestampStart = null !== (t = e.timestampStart) && void 0 !== t ? t : n()(l.default.extractTimestamp(this.id)), this.timestampEnd = null !== (s = e.timestampEnd) && void 0 !== s ? s : this.timestampStart, this.userId = e.userId, this.changes = null !== (a = e.changes) && void 0 !== a ? a : [], this.targetType = u(this.action), this.options = null !== (i = e.options) && void 0 !== i ? i : {}, this.target = null !== (E = e.target) && void 0 !== E ? E : e.id, this.user = null !== (_ = e.user) && void 0 !== _ ? _ : null
  }
}
t.default = d