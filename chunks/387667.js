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
    T = E(709054),
    a = E(981631);
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
    if (e === a.rsA.ALL) return a.KFR.ALL;
    if (e <= a.rsA.GUILD_UPDATE) return a.KFR.GUILD;
    if (e <= a.rsA.CHANNEL_DELETE || e === a.rsA.MESSAGE_BULK_DELETE) return a.KFR.CHANNEL;
    else if (e <= a.rsA.CHANNEL_OVERWRITE_DELETE) return a.KFR.CHANNEL_OVERWRITE;
    else if (e <= a.rsA.BOT_ADD || e === a.rsA.MESSAGE_DELETE || e === a.rsA.MESSAGE_PIN || e === a.rsA.MESSAGE_UNPIN) return a.KFR.USER;
    else if (e <= a.rsA.ROLE_DELETE) return a.KFR.ROLE;
    else if (e <= a.rsA.INVITE_DELETE) return a.KFR.INVITE;
    else if (e <= a.rsA.WEBHOOK_DELETE) return a.KFR.WEBHOOK;
    else if (e <= a.rsA.EMOJI_DELETE) return a.KFR.EMOJI;
    else if (e <= a.rsA.INTEGRATION_DELETE) return a.KFR.INTEGRATION;
    else if (e <= a.rsA.STAGE_INSTANCE_DELETE) return a.KFR.STAGE_INSTANCE;
    else if (e <= a.rsA.STICKER_DELETE) return a.KFR.STICKER;
    else if (e <= a.rsA.GUILD_SCHEDULED_EVENT_DELETE) return a.KFR.GUILD_SCHEDULED_EVENT;
    else if (e <= a.rsA.THREAD_DELETE) return a.KFR.THREAD;
    else if (e === a.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return a.KFR.APPLICATION_COMMAND;
    else if (e <= a.rsA.SOUNDBOARD_SOUND_DELETE) return a.KFR.GUILD_SOUNDBOARD;
    else if (e < a.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return a.KFR.AUTO_MODERATION_RULE;
    else if (e === a.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return a.KFR.USER;
    else if (e === a.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return a.KFR.USER;
    else if (e === a.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return a.KFR.USER;
    else if (e === a.rsA.AUTO_MODERATION_QUARANTINE_USER) return a.KFR.USER;
    else if (e <= a.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return a.KFR.GUILD;
    else if (e <= a.rsA.ONBOARDING_PROMPT_DELETE) return a.KFR.ONBOARDING_PROMPT;
    else if (e <= a.rsA.ONBOARDING_UPDATE) return a.KFR.GUILD_ONBOARDING;
    else if (e <= a.rsA.GUILD_HOME_REMOVE_ITEM) return a.KFR.GUILD_HOME;
    else if (e <= a.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return a.KFR.GUILD;
    else if (e <= a.rsA.HOME_SETTINGS_UPDATE) return a.KFR.HOME_SETTINGS;
    else if (e <= a.rsA.VOICE_CHANNEL_STATUS_DELETE) return a.KFR.VOICE_CHANNEL_STATUS;
    else if (e <= a.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return a.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
    return r.Z.captureMessage('Unknown target type for: '.concat(e)), a.KFR.UNKNOWN;
}
function o(e) {
    switch (e) {
        case a.rsA.CHANNEL_CREATE:
        case a.rsA.CHANNEL_OVERWRITE_CREATE:
        case a.rsA.MEMBER_BAN_REMOVE:
        case a.rsA.ROLE_CREATE:
        case a.rsA.INVITE_CREATE:
        case a.rsA.WEBHOOK_CREATE:
        case a.rsA.EMOJI_CREATE:
        case a.rsA.STICKER_CREATE:
        case a.rsA.MESSAGE_PIN:
        case a.rsA.BOT_ADD:
        case a.rsA.INTEGRATION_CREATE:
        case a.rsA.STAGE_INSTANCE_CREATE:
        case a.rsA.GUILD_SCHEDULED_EVENT_CREATE:
        case a.rsA.THREAD_CREATE:
        case a.rsA.AUTO_MODERATION_RULE_CREATE:
        case a.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
        case a.rsA.ONBOARDING_PROMPT_CREATE:
        case a.rsA.ONBOARDING_CREATE:
        case a.rsA.GUILD_HOME_FEATURE_ITEM:
        case a.rsA.SOUNDBOARD_SOUND_CREATE:
        case a.rsA.HOME_SETTINGS_CREATE:
        case a.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return a.vB8.CREATE;
        case a.rsA.CHANNEL_DELETE:
        case a.rsA.CHANNEL_OVERWRITE_DELETE:
        case a.rsA.MEMBER_KICK:
        case a.rsA.MEMBER_PRUNE:
        case a.rsA.MEMBER_BAN_ADD:
        case a.rsA.ROLE_DELETE:
        case a.rsA.INVITE_DELETE:
        case a.rsA.WEBHOOK_DELETE:
        case a.rsA.EMOJI_DELETE:
        case a.rsA.STICKER_DELETE:
        case a.rsA.MESSAGE_DELETE:
        case a.rsA.MESSAGE_BULK_DELETE:
        case a.rsA.MESSAGE_UNPIN:
        case a.rsA.INTEGRATION_DELETE:
        case a.rsA.MEMBER_DISCONNECT:
        case a.rsA.STAGE_INSTANCE_DELETE:
        case a.rsA.GUILD_SCHEDULED_EVENT_DELETE:
        case a.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
        case a.rsA.THREAD_DELETE:
        case a.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
        case a.rsA.AUTO_MODERATION_RULE_DELETE:
        case a.rsA.ONBOARDING_PROMPT_DELETE:
        case a.rsA.GUILD_HOME_REMOVE_ITEM:
        case a.rsA.SOUNDBOARD_SOUND_DELETE:
        case a.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return a.vB8.DELETE;
        case a.rsA.GUILD_UPDATE:
        case a.rsA.CHANNEL_UPDATE:
        case a.rsA.CHANNEL_OVERWRITE_UPDATE:
        case a.rsA.MEMBER_UPDATE:
        case a.rsA.MEMBER_ROLE_UPDATE:
        case a.rsA.ROLE_UPDATE:
        case a.rsA.INVITE_UPDATE:
        case a.rsA.WEBHOOK_UPDATE:
        case a.rsA.EMOJI_UPDATE:
        case a.rsA.STICKER_UPDATE:
        case a.rsA.INTEGRATION_UPDATE:
        case a.rsA.MEMBER_MOVE:
        case a.rsA.STAGE_INSTANCE_UPDATE:
        case a.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
        case a.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case a.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
        case a.rsA.THREAD_UPDATE:
        case a.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
        case a.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
        case a.rsA.AUTO_MODERATION_RULE_UPDATE:
        case a.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
        case a.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
        case a.rsA.AUTO_MODERATION_QUARANTINE_USER:
        case a.rsA.ONBOARDING_PROMPT_UPDATE:
        case a.rsA.ONBOARDING_UPDATE:
        case a.rsA.SOUNDBOARD_SOUND_UPDATE:
        case a.rsA.HOME_SETTINGS_UPDATE:
            return a.vB8.UPDATE;
    }
    return a.vB8.ALL;
}
class A {
    constructor(e, _, E) {
        I(this, 'key', void 0), I(this, 'oldValue', void 0), I(this, 'newValue', void 0), I(this, 'subtarget', void 0), (this.key = e), (this.oldValue = _), (this.newValue = E);
    }
}
class i extends t.Z {
    constructor(e) {
        var _, E, s, t, r, a;
        super(), I(this, 'id', void 0), I(this, 'actionType', void 0), I(this, 'action', void 0), I(this, 'targetType', void 0), I(this, 'targetId', void 0), I(this, 'target', void 0), I(this, 'userId', void 0), I(this, 'changes', void 0), I(this, 'timestampStart', void 0), I(this, 'timestampEnd', void 0), I(this, 'user', void 0), I(this, 'options', void 0), (this.id = e.id), (this.action = e.action), (this.actionType = o(this.action)), (this.targetId = e.targetId), (this.timestampStart = null !== (_ = e.timestampStart) && void 0 !== _ ? _ : n()(T.default.extractTimestamp(this.id))), (this.timestampEnd = null !== (E = e.timestampEnd) && void 0 !== E ? E : this.timestampStart), (this.userId = e.userId), (this.changes = null !== (s = e.changes) && void 0 !== s ? s : []), (this.targetType = l(this.action)), (this.options = null !== (t = e.options) && void 0 !== t ? t : {}), (this.target = null !== (r = e.target) && void 0 !== r ? r : e.id), (this.user = null !== (a = e.user) && void 0 !== a ? a : null);
    }
}
_.ZP = i;
