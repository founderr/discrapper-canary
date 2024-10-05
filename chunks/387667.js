E.d(_, {
    Pw: function () {
        return o;
    },
    ms: function () {
        return A;
    },
    p5: function () {
        return l;
    }
});
var s = E(913527),
    n = E.n(s),
    t = E(81825),
    r = E(960048),
    a = E(709054),
    T = E(981631);
function I(e, _, E) {
    return (
        _ in e
            ? Object.defineProperty(e, _, {
                  value: E,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[_] = E),
        e
    );
}
function l(e) {
    if (e === T.rsA.ALL) return T.KFR.ALL;
    if (e <= T.rsA.GUILD_UPDATE) return T.KFR.GUILD;
    if (e <= T.rsA.CHANNEL_DELETE || e === T.rsA.MESSAGE_BULK_DELETE) return T.KFR.CHANNEL;
    else if (e <= T.rsA.CHANNEL_OVERWRITE_DELETE) return T.KFR.CHANNEL_OVERWRITE;
    else if (e <= T.rsA.BOT_ADD || e === T.rsA.MESSAGE_DELETE || e === T.rsA.MESSAGE_PIN || e === T.rsA.MESSAGE_UNPIN) return T.KFR.USER;
    else if (e <= T.rsA.ROLE_DELETE) return T.KFR.ROLE;
    else if (e <= T.rsA.INVITE_DELETE) return T.KFR.INVITE;
    else if (e <= T.rsA.WEBHOOK_DELETE) return T.KFR.WEBHOOK;
    else if (e <= T.rsA.EMOJI_DELETE) return T.KFR.EMOJI;
    else if (e <= T.rsA.INTEGRATION_DELETE) return T.KFR.INTEGRATION;
    else if (e <= T.rsA.STAGE_INSTANCE_DELETE) return T.KFR.STAGE_INSTANCE;
    else if (e <= T.rsA.STICKER_DELETE) return T.KFR.STICKER;
    else if (e <= T.rsA.GUILD_SCHEDULED_EVENT_DELETE) return T.KFR.GUILD_SCHEDULED_EVENT;
    else if (e <= T.rsA.THREAD_DELETE) return T.KFR.THREAD;
    else if (e === T.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return T.KFR.APPLICATION_COMMAND;
    else if (e <= T.rsA.SOUNDBOARD_SOUND_DELETE) return T.KFR.GUILD_SOUNDBOARD;
    else if (e < T.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return T.KFR.AUTO_MODERATION_RULE;
    else if (e === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return T.KFR.USER;
    else if (e === T.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return T.KFR.USER;
    else if (e === T.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return T.KFR.USER;
    else if (e === T.rsA.AUTO_MODERATION_QUARANTINE_USER) return T.KFR.USER;
    else if (e <= T.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return T.KFR.GUILD;
    else if (e <= T.rsA.ONBOARDING_PROMPT_DELETE) return T.KFR.ONBOARDING_PROMPT;
    else if (e <= T.rsA.ONBOARDING_UPDATE) return T.KFR.GUILD_ONBOARDING;
    else if (e <= T.rsA.GUILD_HOME_REMOVE_ITEM) return T.KFR.GUILD_HOME;
    else if (e <= T.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return T.KFR.GUILD;
    else if (e <= T.rsA.HOME_SETTINGS_UPDATE) return T.KFR.HOME_SETTINGS;
    else if (e <= T.rsA.VOICE_CHANNEL_STATUS_DELETE) return T.KFR.VOICE_CHANNEL_STATUS;
    else if (e <= T.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return T.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
    return r.Z.captureMessage('Unknown target type for: '.concat(e)), T.KFR.UNKNOWN;
}
function o(e) {
    switch (e) {
        case T.rsA.CHANNEL_CREATE:
        case T.rsA.CHANNEL_OVERWRITE_CREATE:
        case T.rsA.MEMBER_BAN_REMOVE:
        case T.rsA.ROLE_CREATE:
        case T.rsA.INVITE_CREATE:
        case T.rsA.WEBHOOK_CREATE:
        case T.rsA.EMOJI_CREATE:
        case T.rsA.STICKER_CREATE:
        case T.rsA.MESSAGE_PIN:
        case T.rsA.BOT_ADD:
        case T.rsA.INTEGRATION_CREATE:
        case T.rsA.STAGE_INSTANCE_CREATE:
        case T.rsA.GUILD_SCHEDULED_EVENT_CREATE:
        case T.rsA.THREAD_CREATE:
        case T.rsA.AUTO_MODERATION_RULE_CREATE:
        case T.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
        case T.rsA.ONBOARDING_PROMPT_CREATE:
        case T.rsA.ONBOARDING_CREATE:
        case T.rsA.GUILD_HOME_FEATURE_ITEM:
        case T.rsA.SOUNDBOARD_SOUND_CREATE:
        case T.rsA.HOME_SETTINGS_CREATE:
        case T.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return T.vB8.CREATE;
        case T.rsA.CHANNEL_DELETE:
        case T.rsA.CHANNEL_OVERWRITE_DELETE:
        case T.rsA.MEMBER_KICK:
        case T.rsA.MEMBER_PRUNE:
        case T.rsA.MEMBER_BAN_ADD:
        case T.rsA.ROLE_DELETE:
        case T.rsA.INVITE_DELETE:
        case T.rsA.WEBHOOK_DELETE:
        case T.rsA.EMOJI_DELETE:
        case T.rsA.STICKER_DELETE:
        case T.rsA.MESSAGE_DELETE:
        case T.rsA.MESSAGE_BULK_DELETE:
        case T.rsA.MESSAGE_UNPIN:
        case T.rsA.INTEGRATION_DELETE:
        case T.rsA.MEMBER_DISCONNECT:
        case T.rsA.STAGE_INSTANCE_DELETE:
        case T.rsA.GUILD_SCHEDULED_EVENT_DELETE:
        case T.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
        case T.rsA.THREAD_DELETE:
        case T.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
        case T.rsA.AUTO_MODERATION_RULE_DELETE:
        case T.rsA.ONBOARDING_PROMPT_DELETE:
        case T.rsA.GUILD_HOME_REMOVE_ITEM:
        case T.rsA.SOUNDBOARD_SOUND_DELETE:
        case T.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return T.vB8.DELETE;
        case T.rsA.GUILD_UPDATE:
        case T.rsA.CHANNEL_UPDATE:
        case T.rsA.CHANNEL_OVERWRITE_UPDATE:
        case T.rsA.MEMBER_UPDATE:
        case T.rsA.MEMBER_ROLE_UPDATE:
        case T.rsA.ROLE_UPDATE:
        case T.rsA.INVITE_UPDATE:
        case T.rsA.WEBHOOK_UPDATE:
        case T.rsA.EMOJI_UPDATE:
        case T.rsA.STICKER_UPDATE:
        case T.rsA.INTEGRATION_UPDATE:
        case T.rsA.MEMBER_MOVE:
        case T.rsA.STAGE_INSTANCE_UPDATE:
        case T.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
        case T.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case T.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
        case T.rsA.THREAD_UPDATE:
        case T.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
        case T.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
        case T.rsA.AUTO_MODERATION_RULE_UPDATE:
        case T.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
        case T.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
        case T.rsA.AUTO_MODERATION_QUARANTINE_USER:
        case T.rsA.ONBOARDING_PROMPT_UPDATE:
        case T.rsA.ONBOARDING_UPDATE:
        case T.rsA.SOUNDBOARD_SOUND_UPDATE:
        case T.rsA.HOME_SETTINGS_UPDATE:
            return T.vB8.UPDATE;
    }
    return T.vB8.ALL;
}
class A {
    constructor(e, _, E) {
        I(this, 'key', void 0), I(this, 'oldValue', void 0), I(this, 'newValue', void 0), I(this, 'subtarget', void 0), (this.key = e), (this.oldValue = _), (this.newValue = E);
    }
}
class i extends t.Z {
    constructor(e) {
        var _, E, s, t, r, T;
        super(), I(this, 'id', void 0), I(this, 'actionType', void 0), I(this, 'action', void 0), I(this, 'targetType', void 0), I(this, 'targetId', void 0), I(this, 'target', void 0), I(this, 'userId', void 0), I(this, 'changes', void 0), I(this, 'timestampStart', void 0), I(this, 'timestampEnd', void 0), I(this, 'user', void 0), I(this, 'options', void 0), (this.id = e.id), (this.action = e.action), (this.actionType = o(this.action)), (this.targetId = e.targetId), (this.timestampStart = null !== (_ = e.timestampStart) && void 0 !== _ ? _ : n()(a.default.extractTimestamp(this.id))), (this.timestampEnd = null !== (E = e.timestampEnd) && void 0 !== E ? E : this.timestampStart), (this.userId = e.userId), (this.changes = null !== (s = e.changes) && void 0 !== s ? s : []), (this.targetType = l(this.action)), (this.options = null !== (t = e.options) && void 0 !== t ? t : {}), (this.target = null !== (r = e.target) && void 0 !== r ? r : e.id), (this.user = null !== (T = e.user) && void 0 !== T ? T : null);
    }
}
_.ZP = i;
