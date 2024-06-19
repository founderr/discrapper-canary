e.d(_, {
  Pw: function() {
    return a
  },
  ms: function() {
    return L
  },
  p5: function() {
    return r
  }
});
var T = e(913527),
  s = e.n(T),
  I = e(81825),
  A = e(960048),
  n = e(709054),
  N = e(981631);

function t(E, _, e) {
  return _ in E ? Object.defineProperty(E, _, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : E[_] = e, E
}

function r(E) {
  if (E === N.rsA.ALL) return N.KFR.ALL;
  if (E <= N.rsA.GUILD_UPDATE) return N.KFR.GUILD;
  if (E <= N.rsA.CHANNEL_DELETE || E === N.rsA.MESSAGE_BULK_DELETE) return N.KFR.CHANNEL;
  else if (E <= N.rsA.CHANNEL_OVERWRITE_DELETE) return N.KFR.CHANNEL_OVERWRITE;
  else if (E <= N.rsA.BOT_ADD || E === N.rsA.MESSAGE_DELETE || E === N.rsA.MESSAGE_PIN || E === N.rsA.MESSAGE_UNPIN) return N.KFR.USER;
  else if (E <= N.rsA.ROLE_DELETE) return N.KFR.ROLE;
  else if (E <= N.rsA.INVITE_DELETE) return N.KFR.INVITE;
  else if (E <= N.rsA.WEBHOOK_DELETE) return N.KFR.WEBHOOK;
  else if (E <= N.rsA.EMOJI_DELETE) return N.KFR.EMOJI;
  else if (E <= N.rsA.INTEGRATION_DELETE) return N.KFR.INTEGRATION;
  else if (E <= N.rsA.STAGE_INSTANCE_DELETE) return N.KFR.STAGE_INSTANCE;
  else if (E <= N.rsA.STICKER_DELETE) return N.KFR.STICKER;
  else if (E <= N.rsA.GUILD_SCHEDULED_EVENT_DELETE) return N.KFR.GUILD_SCHEDULED_EVENT;
  else if (E <= N.rsA.THREAD_DELETE) return N.KFR.THREAD;
  else if (E === N.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return N.KFR.APPLICATION_COMMAND;
  else if (E <= N.rsA.SOUNDBOARD_SOUND_DELETE) return N.KFR.GUILD_SOUNDBOARD;
  else if (E < N.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return N.KFR.AUTO_MODERATION_RULE;
  else if (E === N.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return N.KFR.USER;
  else if (E === N.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return N.KFR.USER;
  else if (E === N.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return N.KFR.USER;
  else if (E === N.rsA.AUTO_MODERATION_QUARANTINE_USER) return N.KFR.USER;
  else if (E <= N.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return N.KFR.GUILD;
  else if (E <= N.rsA.ONBOARDING_PROMPT_DELETE) return N.KFR.ONBOARDING_PROMPT;
  else if (E <= N.rsA.ONBOARDING_UPDATE) return N.KFR.GUILD_ONBOARDING;
  else if (E <= N.rsA.GUILD_HOME_REMOVE_ITEM) return N.KFR.GUILD_HOME;
  else if (E <= N.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return N.KFR.GUILD;
  else if (E <= N.rsA.HOME_SETTINGS_UPDATE) return N.KFR.HOME_SETTINGS;
  else if (E <= N.rsA.VOICE_CHANNEL_STATUS_DELETE) return N.KFR.VOICE_CHANNEL_STATUS;
  else if (E <= N.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return N.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
  return A.Z.captureMessage("Unknown target type for: ".concat(E)), N.KFR.UNKNOWN
}

function a(E) {
  switch (E) {
    case N.rsA.CHANNEL_CREATE:
    case N.rsA.CHANNEL_OVERWRITE_CREATE:
    case N.rsA.MEMBER_BAN_REMOVE:
    case N.rsA.ROLE_CREATE:
    case N.rsA.INVITE_CREATE:
    case N.rsA.WEBHOOK_CREATE:
    case N.rsA.EMOJI_CREATE:
    case N.rsA.STICKER_CREATE:
    case N.rsA.MESSAGE_PIN:
    case N.rsA.BOT_ADD:
    case N.rsA.INTEGRATION_CREATE:
    case N.rsA.STAGE_INSTANCE_CREATE:
    case N.rsA.GUILD_SCHEDULED_EVENT_CREATE:
    case N.rsA.THREAD_CREATE:
    case N.rsA.AUTO_MODERATION_RULE_CREATE:
    case N.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
    case N.rsA.ONBOARDING_PROMPT_CREATE:
    case N.rsA.ONBOARDING_CREATE:
    case N.rsA.GUILD_HOME_FEATURE_ITEM:
    case N.rsA.SOUNDBOARD_SOUND_CREATE:
    case N.rsA.HOME_SETTINGS_CREATE:
    case N.rsA.VOICE_CHANNEL_STATUS_CREATE:
      return N.vB8.CREATE;
    case N.rsA.CHANNEL_DELETE:
    case N.rsA.CHANNEL_OVERWRITE_DELETE:
    case N.rsA.MEMBER_KICK:
    case N.rsA.MEMBER_PRUNE:
    case N.rsA.MEMBER_BAN_ADD:
    case N.rsA.ROLE_DELETE:
    case N.rsA.INVITE_DELETE:
    case N.rsA.WEBHOOK_DELETE:
    case N.rsA.EMOJI_DELETE:
    case N.rsA.STICKER_DELETE:
    case N.rsA.MESSAGE_DELETE:
    case N.rsA.MESSAGE_BULK_DELETE:
    case N.rsA.MESSAGE_UNPIN:
    case N.rsA.INTEGRATION_DELETE:
    case N.rsA.MEMBER_DISCONNECT:
    case N.rsA.STAGE_INSTANCE_DELETE:
    case N.rsA.GUILD_SCHEDULED_EVENT_DELETE:
    case N.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
    case N.rsA.THREAD_DELETE:
    case N.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
    case N.rsA.AUTO_MODERATION_RULE_DELETE:
    case N.rsA.ONBOARDING_PROMPT_DELETE:
    case N.rsA.GUILD_HOME_REMOVE_ITEM:
    case N.rsA.SOUNDBOARD_SOUND_DELETE:
    case N.rsA.VOICE_CHANNEL_STATUS_DELETE:
      return N.vB8.DELETE;
    case N.rsA.GUILD_UPDATE:
    case N.rsA.CHANNEL_UPDATE:
    case N.rsA.CHANNEL_OVERWRITE_UPDATE:
    case N.rsA.MEMBER_UPDATE:
    case N.rsA.MEMBER_ROLE_UPDATE:
    case N.rsA.ROLE_UPDATE:
    case N.rsA.INVITE_UPDATE:
    case N.rsA.WEBHOOK_UPDATE:
    case N.rsA.EMOJI_UPDATE:
    case N.rsA.STICKER_UPDATE:
    case N.rsA.INTEGRATION_UPDATE:
    case N.rsA.MEMBER_MOVE:
    case N.rsA.STAGE_INSTANCE_UPDATE:
    case N.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
    case N.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case N.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
    case N.rsA.THREAD_UPDATE:
    case N.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
    case N.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
    case N.rsA.AUTO_MODERATION_RULE_UPDATE:
    case N.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
    case N.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
    case N.rsA.AUTO_MODERATION_QUARANTINE_USER:
    case N.rsA.ONBOARDING_PROMPT_UPDATE:
    case N.rsA.ONBOARDING_UPDATE:
    case N.rsA.SOUNDBOARD_SOUND_UPDATE:
    case N.rsA.HOME_SETTINGS_UPDATE:
      return N.vB8.UPDATE
  }
  return N.vB8.ALL
}
class L {
  constructor(E, _, e) {
    t(this, "key", void 0), t(this, "oldValue", void 0), t(this, "newValue", void 0), t(this, "subtarget", void 0), this.key = E, this.oldValue = _, this.newValue = e
  }
}
class D extends I.Z {
  constructor(E) {
    var _, e, T, I, A, N;
    super(), t(this, "id", void 0), t(this, "actionType", void 0), t(this, "action", void 0), t(this, "targetType", void 0), t(this, "targetId", void 0), t(this, "target", void 0), t(this, "userId", void 0), t(this, "changes", void 0), t(this, "timestampStart", void 0), t(this, "timestampEnd", void 0), t(this, "user", void 0), t(this, "options", void 0), this.id = E.id, this.action = E.action, this.actionType = a(this.action), this.targetId = E.targetId, this.timestampStart = null !== (_ = E.timestampStart) && void 0 !== _ ? _ : s()(n.default.extractTimestamp(this.id)), this.timestampEnd = null !== (e = E.timestampEnd) && void 0 !== e ? e : this.timestampStart, this.userId = E.userId, this.changes = null !== (T = E.changes) && void 0 !== T ? T : [], this.targetType = r(this.action), this.options = null !== (I = E.options) && void 0 !== I ? I : {}, this.target = null !== (A = E.target) && void 0 !== A ? A : E.id, this.user = null !== (N = E.user) && void 0 !== N ? N : null
  }
}
_.ZP = D