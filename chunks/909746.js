E.d(_, {
    Bq: function () {
        return q;
    },
    C0: function () {
        return es;
    },
    C2: function () {
        return J;
    },
    EN: function () {
        return z;
    },
    F1: function () {
        return en;
    },
    HE: function () {
        return y;
    },
    HN: function () {
        return w;
    },
    Iv: function () {
        return er;
    },
    J5: function () {
        return eA;
    },
    K: function () {
        return X;
    },
    ML: function () {
        return V;
    },
    N$: function () {
        return Y;
    },
    N5: function () {
        return ei;
    },
    QM: function () {
        return eo;
    },
    V$: function () {
        return eT;
    },
    _$: function () {
        return eS;
    },
    cT: function () {
        return eD;
    },
    em: function () {
        return eN;
    },
    hQ: function () {
        return eL;
    },
    hx: function () {
        return K;
    },
    lR: function () {
        return W;
    },
    lU: function () {
        return j;
    },
    nm: function () {
        return eI;
    },
    oD: function () {
        return k;
    },
    pA: function () {
        return ee;
    },
    pY: function () {
        return x;
    },
    pi: function () {
        return $;
    },
    rK: function () {
        return eE;
    },
    uB: function () {
        return Q;
    },
    vc: function () {
        return et;
    },
    vm: function () {
        return e_;
    }
}),
    E(411104),
    E(653041);
var s = E(654861),
    n = E.n(s),
    t = E(913527),
    r = E.n(t),
    T = E(536402),
    a = E(533800),
    I = E(149765),
    l = E(866442),
    o = E(379649),
    A = E(911969),
    i = E(933557),
    N = E(710845),
    D = E(339085),
    L = E(236413),
    S = E(45966),
    u = E(563534),
    c = E(427679),
    O = E(926491),
    U = E(387667),
    d = E(592125),
    G = E(430824),
    M = E(699516),
    R = E(594174),
    g = E(55935),
    C = E(630388),
    f = E(971130),
    p = E(709054),
    h = E(987707),
    m = E(981631),
    P = E(176505),
    Z = E(273504),
    v = E(765305),
    b = E(689938);
let H = new N.Z('AuditLogUtils'),
    F = [o.J6.DAYS, o.J6.HOURS, o.J6.MINUTES, o.J6.SECONDS],
    B = () => ({ [m.zUn.REASON]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON }),
    x = () => ({
        [m.zUn.NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
        [m.zUn.DESCRIPTION]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
        [m.zUn.ICON_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
        [m.zUn.SPLASH_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
        [m.zUn.DISCOVERY_SPLASH_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
        [m.zUn.BANNER_HASH]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
        [m.zUn.OWNER_ID]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
        [m.zUn.REGION]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
        [m.zUn.PREFERRED_LOCALE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
        [m.zUn.AFK_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
        [m.zUn.AFK_TIMEOUT]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
        [m.zUn.SYSTEM_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
        [m.zUn.RULES_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
        [m.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
        [m.zUn.MFA_LEVEL]: eC({
            [m.BpS.NONE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
            [m.BpS.ELEVATED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
        }),
        [m.zUn.WIDGET_ENABLED]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED),
        [m.zUn.WIDGET_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
        [m.zUn.VERIFICATION_LEVEL]: eC({
            [m.sFg.NONE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
            [m.sFg.LOW]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
            [m.sFg.MEDIUM]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
            [m.sFg.HIGH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
            [m.sFg.VERY_HIGH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
        }),
        [m.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: eC({
            [m.bL.ALL_MESSAGES]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
            [m.bL.ONLY_MENTIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
        }),
        [m.zUn.VANITY_URL_CODE]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
        [m.zUn.EXPLICIT_CONTENT_FILTER]: eC({
            [m.lxg.DISABLED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
            [m.lxg.MEMBERS_WITHOUT_ROLES]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
            [m.lxg.ALL_MEMBERS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
        }),
        [m.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED),
        [m.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        [m.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
        [m.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
        [m.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
        [m.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
        ...B()
    }),
    V = () => ({
        [m.zUn.NAME]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
        [m.zUn.POSITION]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
        [m.zUn.TOPIC]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
        [m.zUn.BITRATE]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
        [m.zUn.RTC_REGION_OVERRIDE]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
        [m.zUn.USER_LIMIT]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
        [m.zUn.RATE_LIMIT_PER_USER]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [m.zUn.PERMISSIONS_RESET]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
        [m.zUn.PERMISSIONS_GRANTED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
        [m.zUn.PERMISSIONS_DENIED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
        [m.zUn.REASON]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
        [m.zUn.NSFW]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED),
        [m.zUn.TYPE]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
        [m.zUn.VIDEO_QUALITY_MODE]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
        [m.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
        [m.zUn.FLAGS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
        [m.zUn.AVAILABLE_TAG_ADD]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
        [m.zUn.AVAILABLE_TAG_EDIT]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
        [m.zUn.AVAILABLE_TAG_DELETE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE,
        [m.zUn.LINKED_LOBBY]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_LOBBY_LINK_DELETE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_LOBBY_LINK_CREATE)
    }),
    j = () => ({
        [m.zUn.NICK]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
        [m.zUn.DEAF]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF),
        [m.zUn.MUTE]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF),
        [m.zUn.ROLES_REMOVE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
        [m.zUn.ROLES_ADD]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
        [m.zUn.PRUNE_DELETE_DAYS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
        [m.zUn.COMMUNICATION_DISABLED_UNTIL]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
        [m.zUn.BYPASSES_VERIFICATION]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF),
        [m.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        ...B()
    }),
    y = () => ({
        [m.zUn.NAME]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
        [m.zUn.DESCRIPTION]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        [m.zUn.PERMISSIONS_GRANTED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
        [m.zUn.PERMISSIONS_DENIED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
        [m.zUn.COLOR]: ef({ '#000000': b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE }, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS),
        [m.zUn.HOIST]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF),
        [m.zUn.MENTIONABLE]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF),
        [m.zUn.ICON_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
        [m.zUn.UNICODE_EMOJI]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
        ...B()
    }),
    k = () => ({
        ...B(),
        [m.zUn.TITLE]: (e) => {
            let { oldValue: _, newValue: E } = e;
            return null != _
                ? (0 === _.length && (_ = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE),
                  b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
                      oldValue: _,
                      newValue: E
                  }))
                : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE;
        },
        [m.zUn.DESCRIPTION]: (e) => {
            let { oldValue: _, newValue: E } = e;
            return null != _
                ? (0 === _.length && (_ = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE),
                  b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
                      oldValue: _,
                      newValue: E
                  }))
                : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({ newValue: E });
        },
        [m.zUn.OPTIONS]: () => b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
        [m.zUn.SINGLE_SELECT]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT),
        [m.zUn.REQUIRED]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL)
    }),
    z = () => ({
        ...B(),
        [m.zUn.DEFAULT_CHANNEL_IDS]: (e) => {
            let { newValue: _ } = e;
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({ count: _.length });
        },
        [m.zUn.ENABLE_DEFAULT_CHANNELS]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS),
        [m.zUn.ENABLE_ONBOARDING_PROMPTS]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS),
        [m.zUn.ENABLED]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE)
    }),
    K = () => ({
        ...B(),
        [m.zUn.WELCOME_MESSAGE]: () => b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
        [m.zUn.NEW_MEMBER_ACTIONS]: () => b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
        [m.zUn.RESOURCE_CHANNELS]: () => b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
    }),
    w = () => ({
        [m.zUn.CODE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
        [m.zUn.CHANNEL_ID]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
        [m.zUn.MAX_USES]: ef({ 0: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE }, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE),
        [m.zUn.MAX_AGE]: ef({ [b.Z.Messages.MAX_AGE_NEVER]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE }, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE),
        [m.zUn.TEMPORARY]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF),
        [m.zUn.FLAGS]: eC({ [a.$.IS_GUEST_INVITE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE }),
        ...B()
    }),
    W = () => ({
        [m.zUn.CHANNEL_ID]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
        [m.zUn.NAME]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
        [m.zUn.AVATAR_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
        [m.zUn.REASON]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
    }),
    Y = () => ({
        [m.zUn.NAME]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
        ...B()
    }),
    q = () => ({
        [m.zUn.NAME]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
        [m.zUn.TAGS]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
        [m.zUn.DESCRIPTION]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        ...B()
    }),
    X = () => ({
        [m.zUn.ENABLE_EMOTICONS]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF),
        [m.zUn.EXPIRE_BEHAVIOR]: eC({
            0: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
            1: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
        }),
        [m.zUn.EXPIRE_GRACE_PERIOD]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
        ...B()
    }),
    J = () => ({
        [m.zUn.TOPIC]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
        [m.zUn.PRIVACY_LEVEL]: eC({
            [v.j8.GUILD_ONLY]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [v.j8.PUBLIC]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        }),
        ...B()
    }),
    Q = () => ({
        [m.zUn.NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
        [m.zUn.DESCRIPTION]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
        [m.zUn.PRIVACY_LEVEL]: eC({
            [v.j8.GUILD_ONLY]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [v.j8.PUBLIC]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        }),
        [m.zUn.STATUS]: eC({
            [v.p1.SCHEDULED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
            [v.p1.ACTIVE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
            [v.p1.COMPLETED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
            [v.p1.CANCELED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
        }),
        [m.zUn.ENTITY_TYPE]: eC({
            [v.WX.NONE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
            [v.WX.STAGE_INSTANCE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
            [v.WX.VOICE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
            [v.WX.EXTERNAL]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
        }),
        [m.zUn.CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
        [m.zUn.LOCATION]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
        [m.zUn.IMAGE_HASH]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
        ...B()
    }),
    $ = () => ({
        [m.zUn.SCHEDULED_START_TIME]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
        [m.zUn.SCHEDULED_END_TIME]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
        [m.zUn.IS_CANCELED]: (e) => {
            if (null != e.oldValue || !0 === e.newValue) {
                if (!e.oldValue && e.newValue) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
                if (e.oldValue && !e.newValue) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED;
            }
            return '';
        },
        ...B()
    }),
    ee = () => ({
        [m.zUn.NAME]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
        [m.zUn.ARCHIVED]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED),
        [m.zUn.LOCKED]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED),
        [m.zUn.INVITABLE]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED),
        [m.zUn.AUTO_ARCHIVE_DURATION]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
        [m.zUn.RATE_LIMIT_PER_USER]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [m.zUn.FLAGS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
        ...B()
    }),
    e_ = (e) => {
        let _ = { ...B() };
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (_[e.key] = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED) : (_[e.key] = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED)) : (_[e.key] = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED);
                }),
            _
        );
    },
    eE = () => ({
        [m.zUn.NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
        [m.zUn.AUTO_MODERATION_TRIGGER_TYPE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
        [m.zUn.AUTO_MODERATION_EVENT_TYPE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
        [m.zUn.AUTO_MODERATION_ACTIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
        [m.zUn.AUTO_MODERATION_ENABLED]: (e) => {
            var _;
            return !0 === (null !== (_ = e.newValue) && void 0 !== _ ? _ : e.oldValue) ? b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE;
        },
        [m.zUn.AUTO_MODERATION_EXEMPT_ROLES]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
        [m.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
        [m.zUn.AUTO_MODERATION_TRIGGER_METADATA]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
        [m.zUn.AUTO_MODERATION_ADD_KEYWORDS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
        [m.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
        [m.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
        [m.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
        [m.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
        [m.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
        ...B()
    }),
    es = () => ({
        [m.zUn.NAME]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
        [m.zUn.VOLUME]: eG(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
        [m.zUn.EMOJI_NAME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
        [m.zUn.EMOJI_ID]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
        ...B()
    }),
    en = () => ({
        [m.zUn.STATUS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
        ...B()
    }),
    et = {
        [m.KFR.CHANNEL]: {
            [m.zUn.ID]: !0,
            [m.zUn.PERMISSION_OVERWRITES]: !0
        },
        [m.KFR.CHANNEL_OVERWRITE]: {
            [m.zUn.TYPE]: !0,
            [m.zUn.ID]: !0,
            [m.zUn.PERMISSION_OVERWRITES]: !0
        },
        [m.KFR.INVITE]: {
            [m.zUn.INVITER_ID]: !0,
            [m.zUn.USES]: !0
        },
        [m.KFR.WEBHOOK]: {
            [m.zUn.TYPE]: !0,
            [m.zUn.APPLICATION_ID]: !0
        },
        [m.KFR.INTEGRATION]: { [m.zUn.TYPE]: !0 },
        [m.KFR.THREAD]: {
            [m.zUn.ID]: !0,
            [m.zUn.TYPE]: !0
        },
        [m.KFR.STICKER]: {
            [m.zUn.ID]: !0,
            [m.zUn.TYPE]: !0,
            [m.zUn.ASSET]: !0,
            [m.zUn.FORMAT_TYPE]: !0,
            [m.zUn.AVAILABLE]: !0,
            [m.zUn.GUILD_ID]: !0
        },
        [m.KFR.GUILD_HOME]: { [m.zUn.ENTITY_TYPE]: !0 },
        [m.KFR.GUILD_ONBOARDING]: { [m.zUn.PROMPTS]: !0 },
        [m.KFR.GUILD_SOUNDBOARD]: {
            [m.zUn.ID]: !0,
            [m.zUn.SOUND_ID]: !0
        }
    },
    er = () => [
        {
            value: m.rsA.ALL,
            label: b.Z.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
            valueLabel: b.Z.Messages.GUILD_SETTINGS_FILTER_ALL
        },
        {
            value: m.rsA.GUILD_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
        },
        {
            value: m.rsA.CHANNEL_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
        },
        {
            value: m.rsA.CHANNEL_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
        },
        {
            value: m.rsA.CHANNEL_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
        },
        {
            value: m.rsA.CHANNEL_OVERWRITE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
        },
        {
            value: m.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
        },
        {
            value: m.rsA.CHANNEL_OVERWRITE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
        },
        {
            value: m.rsA.MEMBER_KICK,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
        },
        {
            value: m.rsA.MEMBER_PRUNE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
        },
        {
            value: m.rsA.MEMBER_BAN_ADD,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
        },
        {
            value: m.rsA.MEMBER_BAN_REMOVE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
        },
        {
            value: m.rsA.MEMBER_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
        },
        {
            value: m.rsA.MEMBER_ROLE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
        },
        {
            value: m.rsA.MEMBER_MOVE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
        },
        {
            value: m.rsA.MEMBER_DISCONNECT,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
        },
        {
            value: m.rsA.BOT_ADD,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
        },
        {
            value: m.rsA.THREAD_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
        },
        {
            value: m.rsA.THREAD_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
        },
        {
            value: m.rsA.THREAD_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
        },
        {
            value: m.rsA.ROLE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
        },
        {
            value: m.rsA.ROLE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
        },
        {
            value: m.rsA.ROLE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
        },
        {
            value: m.rsA.ONBOARDING_PROMPT_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
        },
        {
            value: m.rsA.ONBOARDING_PROMPT_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
        },
        {
            value: m.rsA.ONBOARDING_PROMPT_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
        },
        {
            value: m.rsA.ONBOARDING_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
        },
        {
            value: m.rsA.ONBOARDING_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
        },
        {
            value: m.rsA.HOME_SETTINGS_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
        },
        {
            value: m.rsA.HOME_SETTINGS_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
        },
        {
            value: m.rsA.INVITE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
        },
        {
            value: m.rsA.INVITE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
        },
        {
            value: m.rsA.INVITE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
        },
        {
            value: m.rsA.WEBHOOK_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
        },
        {
            value: m.rsA.WEBHOOK_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
        },
        {
            value: m.rsA.WEBHOOK_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
        },
        {
            value: m.rsA.EMOJI_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
        },
        {
            value: m.rsA.EMOJI_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
        },
        {
            value: m.rsA.EMOJI_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
        },
        {
            value: m.rsA.MESSAGE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
        },
        {
            value: m.rsA.MESSAGE_BULK_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
        },
        {
            value: m.rsA.MESSAGE_PIN,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
        },
        {
            value: m.rsA.MESSAGE_UNPIN,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
        },
        {
            value: m.rsA.INTEGRATION_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
        },
        {
            value: m.rsA.INTEGRATION_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
        },
        {
            value: m.rsA.INTEGRATION_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
        },
        {
            value: m.rsA.STICKER_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
        },
        {
            value: m.rsA.STICKER_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
        },
        {
            value: m.rsA.STICKER_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
        },
        {
            value: m.rsA.STAGE_INSTANCE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
        },
        {
            value: m.rsA.STAGE_INSTANCE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
        },
        {
            value: m.rsA.STAGE_INSTANCE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
        },
        {
            value: m.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
        },
        {
            value: m.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
        },
        {
            value: m.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
        },
        {
            value: m.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
        },
        {
            value: m.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
        },
        {
            value: m.rsA.AUTO_MODERATION_RULE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
        },
        {
            value: m.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
        },
        {
            value: m.rsA.AUTO_MODERATION_RULE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
        },
        {
            value: m.rsA.GUILD_HOME_FEATURE_ITEM,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
        },
        {
            value: m.rsA.GUILD_HOME_REMOVE_ITEM,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
        },
        {
            value: m.rsA.SOUNDBOARD_SOUND_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
        },
        {
            value: m.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
        },
        {
            value: m.rsA.SOUNDBOARD_SOUND_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
        },
        {
            value: m.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
        },
        {
            value: m.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
        }
    ];
function eT(e, _) {
    return null != _.changes ? _.changes.find((_) => _.key === e) : null;
}
function ea(e, _) {
    return null != _.changes ? _.changes.filter((_) => _.key === e) : [];
}
function eI(e) {
    var _;
    let E = er().find((_) => _.value === e.action);
    return null != eT(m.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? b.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED : null !== (_ = null == E ? void 0 : E.label) && void 0 !== _ ? _ : null;
}
let el = {
    [o.J6.SECONDS]: (e) => b.Z.Messages.DURATION_SECONDS.format({ seconds: e }),
    [o.J6.MINUTES]: (e) => b.Z.Messages.DURATION_MINUTES.format({ minutes: e }),
    [o.J6.HOURS]: (e) => b.Z.Messages.DURATION_HOURS.format({ hours: e }),
    [o.J6.DAYS]: (e) => b.Z.Messages.DURATION_DAYS.format({ days: e })
};
function eo(e) {
    let _ = eT(m.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        E = ea(m.zUn.ROLES_ADD, e).length > 0,
        s = ea(m.zUn.ROLES_REMOVE, e).length > 0;
    if (null != _) {
        if ((null == _ ? void 0 : _.newValue) != null) {
            let E = new Date(null == _ ? void 0 : _.newValue).getTime(),
                s = E - p.default.extractTimestamp(e.id),
                n = Math.round(s / 1000 / 60),
                t = (0, o.CI)(n, F);
            if (null == t.unit || null == t.time) return null;
            if (t.unit in el) {
                let e = t.unit,
                    _ = t.unit === o.J6.SECONDS ? Math.round(s / 1000) : t.time;
                return el[e](_);
            }
        } else if ((null == _ ? void 0 : _.oldValue) != null) return b.Z.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
    } else if (E && s) return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    else if (E) return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    else if (s) return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    return null;
}
function eA(e) {
    let _ = ea(m.zUn.ROLES_ADD, e),
        E = ea(m.zUn.ROLES_REMOVE, e),
        s =
            null == _
                ? void 0
                : _.map((e) => {
                      let { newValue: _ } = e;
                      return null == _
                          ? void 0
                          : _.map((e) => {
                                let { name: _ } = e;
                                return _;
                            }).join(', ');
                  }).join(', '),
        n =
            null == E
                ? void 0
                : E.map((e) => {
                      let { newValue: _ } = e;
                      return null == _
                          ? void 0
                          : _.map((e) => {
                                let { name: _ } = e;
                                return _;
                            }).join(', ');
                  }).join(', ');
    if (_.length > 0 && E.length > 0)
        return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
            roleNamesAdded: s,
            roleNamesRemoved: n
        });
    if (_.length > 0) return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({ roleNames: s });
    if (E.length > 0) return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({ roleNames: n });
    return null;
}
function ei(e) {
    switch (e.action) {
        case m.rsA.GUILD_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
        case m.rsA.CHANNEL_CREATE:
            let _ = null != e.changes ? e.changes.find((e) => e.key === m.zUn.TYPE) : null;
            if (null == _) throw Error('[AuditLog] Could not find type change for channel create');
            switch (_.newValue) {
                case m.d4z.GUILD_STAGE_VOICE:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
                case m.d4z.GUILD_VOICE:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
                case m.d4z.GUILD_CATEGORY:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
                default:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE;
            }
        case m.rsA.CHANNEL_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
        case m.rsA.CHANNEL_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
        case m.rsA.CHANNEL_OVERWRITE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
        case m.rsA.CHANNEL_OVERWRITE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
        case m.rsA.CHANNEL_OVERWRITE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
        case m.rsA.MEMBER_KICK:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
        case m.rsA.MEMBER_PRUNE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
        case m.rsA.MEMBER_BAN_ADD:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
        case m.rsA.MEMBER_BAN_REMOVE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
        case m.rsA.MEMBER_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
        case m.rsA.MEMBER_ROLE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
        case m.rsA.MEMBER_MOVE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
        case m.rsA.MEMBER_DISCONNECT:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
        case m.rsA.BOT_ADD:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
        case m.rsA.ROLE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
        case m.rsA.ROLE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
        case m.rsA.ROLE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
        case m.rsA.INVITE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
        case m.rsA.INVITE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
        case m.rsA.INVITE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
        case m.rsA.WEBHOOK_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
        case m.rsA.WEBHOOK_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
        case m.rsA.WEBHOOK_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
        case m.rsA.EMOJI_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
        case m.rsA.EMOJI_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
        case m.rsA.EMOJI_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
        case m.rsA.STICKER_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
        case m.rsA.STICKER_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
        case m.rsA.STICKER_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
        case m.rsA.MESSAGE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
        case m.rsA.MESSAGE_BULK_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
        case m.rsA.MESSAGE_PIN:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
        case m.rsA.MESSAGE_UNPIN:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
        case m.rsA.INTEGRATION_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
        case m.rsA.INTEGRATION_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
        case m.rsA.INTEGRATION_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
        case m.rsA.STAGE_INSTANCE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
        case m.rsA.STAGE_INSTANCE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
        case m.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
        case m.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
        case m.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
        case m.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
        case m.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case m.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
        case m.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
        case m.rsA.THREAD_CREATE:
            let E = null != e.changes ? e.changes.find((e) => e.key === m.zUn.TYPE) : null;
            if (null == E) throw Error('[AuditLog] Could not find type change for thread create');
            switch (E.newValue) {
                case m.d4z.PRIVATE_THREAD:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
                case m.d4z.ANNOUNCEMENT_THREAD:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
                default:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE;
            }
        case m.rsA.THREAD_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
        case m.rsA.THREAD_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
        case m.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
        case m.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
        case m.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var s;
            if ((null === (s = e.options) || void 0 === s ? void 0 : s.auto_moderation_rule_trigger_type) === Z.fX.USER_PROFILE.toString()) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
        case m.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
        case m.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
        case m.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return b.Z.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
        case m.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return b.Z.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
        case m.rsA.AUTO_MODERATION_RULE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
        case m.rsA.AUTO_MODERATION_RULE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
        case m.rsA.AUTO_MODERATION_RULE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
        case m.rsA.ONBOARDING_PROMPT_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
        case m.rsA.ONBOARDING_PROMPT_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
        case m.rsA.ONBOARDING_PROMPT_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
        case m.rsA.ONBOARDING_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
        case m.rsA.ONBOARDING_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
        case m.rsA.HOME_SETTINGS_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
        case m.rsA.HOME_SETTINGS_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
        case m.rsA.GUILD_HOME_FEATURE_ITEM:
            let n = null != e.changes ? e.changes.find((e) => e.key === m.zUn.ENTITY_TYPE) : null;
            if (null == n) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
            switch (n.newValue) {
                case T.w.MESSAGE:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
                case T.w.FORUM_POST:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
                default:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
            }
        case m.rsA.GUILD_HOME_REMOVE_ITEM:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
        case m.rsA.SOUNDBOARD_SOUND_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
        case m.rsA.SOUNDBOARD_SOUND_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
        case m.rsA.SOUNDBOARD_SOUND_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
        case m.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
        case m.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
        default:
            return null;
    }
}
function eN(e) {
    switch (e) {
        case P.zZ.GUILD_FEED_REMOVED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
        case P.zZ.ACTIVE_CHANNELS_REMOVED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
        case P.zZ.PINNED:
            return b.Z.Messages.PINNED_POST;
    }
    return null;
}
function eD(e) {
    switch (e) {
        case P.zZ.GUILD_FEED_REMOVED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
        case P.zZ.ACTIVE_CHANNELS_REMOVED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
        case P.zZ.PINNED:
            return b.Z.Messages.UNPINNED_POST;
    }
    return null;
}
function eL(e, _) {
    switch (e) {
        case m.Plq.CREATE_INSTANT_INVITE:
            return b.Z.Messages.CREATE_INSTANT_INVITE;
        case m.Plq.KICK_MEMBERS:
            return b.Z.Messages.KICK_MEMBERS;
        case m.Plq.BAN_MEMBERS:
            return b.Z.Messages.BAN_MEMBERS;
        case m.Plq.ADMINISTRATOR:
            return b.Z.Messages.ADMINISTRATOR;
        case m.Plq.MANAGE_CHANNELS:
            if (_.targetType === m.KFR.CHANNEL || _.targetType === m.KFR.CHANNEL_OVERWRITE) return b.Z.Messages.MANAGE_CHANNEL;
            return b.Z.Messages.MANAGE_CHANNELS;
        case m.Plq.MANAGE_GUILD:
            return b.Z.Messages.MANAGE_SERVER;
        case m.Plq.VIEW_GUILD_ANALYTICS:
            return b.Z.Messages.VIEW_GUILD_ANALYTICS;
        case m.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return b.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
        case m.Plq.CHANGE_NICKNAME:
            return b.Z.Messages.CHANGE_NICKNAME;
        case m.Plq.MANAGE_NICKNAMES:
            return b.Z.Messages.MANAGE_NICKNAMES;
        case m.Plq.MANAGE_ROLES:
            return b.Z.Messages.MANAGE_ROLES;
        case m.Plq.MANAGE_WEBHOOKS:
            return b.Z.Messages.MANAGE_WEBHOOKS;
        case m.Plq.CREATE_GUILD_EXPRESSIONS:
            return b.Z.Messages.CREATE_EXPRESSIONS;
        case m.Plq.MANAGE_GUILD_EXPRESSIONS:
            return b.Z.Messages.MANAGE_EXPRESSIONS;
        case m.Plq.VIEW_AUDIT_LOG:
            return b.Z.Messages.VIEW_AUDIT_LOG;
        case m.Plq.VIEW_CHANNEL:
            if (_.targetType === m.KFR.CHANNEL || _.targetType === m.KFR.CHANNEL_OVERWRITE) return b.Z.Messages.VIEW_CHANNEL;
            return b.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL;
        case m.Plq.SEND_MESSAGES:
            return b.Z.Messages.SEND_MESSAGES;
        case m.Plq.SEND_TTS_MESSAGES:
            return b.Z.Messages.SEND_TTS_MESSAGES;
        case m.Plq.USE_APPLICATION_COMMANDS:
            return b.Z.Messages.USE_APPLICATION_COMMANDS;
        case m.Plq.MANAGE_MESSAGES:
            return b.Z.Messages.MANAGE_MESSAGES;
        case m.Plq.EMBED_LINKS:
            return b.Z.Messages.EMBED_LINKS;
        case m.Plq.ATTACH_FILES:
            return b.Z.Messages.ATTACH_FILES;
        case m.Plq.READ_MESSAGE_HISTORY:
            return b.Z.Messages.READ_MESSAGE_HISTORY;
        case m.Plq.MENTION_EVERYONE:
            return b.Z.Messages.MENTION_EVERYONE;
        case m.Plq.USE_EXTERNAL_EMOJIS:
            return b.Z.Messages.USE_EXTERNAL_EMOJIS;
        case m.Plq.USE_EXTERNAL_STICKERS:
            return b.Z.Messages.USE_EXTERNAL_STICKERS;
        case m.Plq.ADD_REACTIONS:
            return b.Z.Messages.ADD_REACTIONS;
        case m.Plq.CONNECT:
            return b.Z.Messages.CONNECT;
        case m.Plq.SPEAK:
            return b.Z.Messages.SPEAK;
        case m.Plq.MUTE_MEMBERS:
            return b.Z.Messages.MUTE_MEMBERS;
        case m.Plq.DEAFEN_MEMBERS:
            return b.Z.Messages.DEAFEN_MEMBERS;
        case m.Plq.MOVE_MEMBERS:
            return b.Z.Messages.MOVE_MEMBERS;
        case m.Plq.USE_VAD:
            return b.Z.Messages.USE_VAD;
        case m.Plq.PRIORITY_SPEAKER:
            return b.Z.Messages.PRIORITY_SPEAKER;
        case m.Plq.STREAM:
            return b.Z.Messages.VIDEO;
        case m.Plq.REQUEST_TO_SPEAK:
            return b.Z.Messages.REQUEST_TO_SPEAK;
        case m.Plq.CREATE_EVENTS:
            return b.Z.Messages.CREATE_EVENTS;
        case m.Plq.MANAGE_EVENTS:
            return b.Z.Messages.MANAGE_EVENTS;
        case m.Plq.CREATE_PUBLIC_THREADS:
            return b.Z.Messages.CREATE_PUBLIC_THREADS;
        case m.Plq.CREATE_PRIVATE_THREADS:
            return b.Z.Messages.CREATE_PRIVATE_THREADS;
        case m.Plq.SEND_MESSAGES_IN_THREADS:
            return b.Z.Messages.SEND_MESSAGES_IN_THREADS;
        case m.Plq.MANAGE_THREADS:
            return b.Z.Messages.MANAGE_THREADS;
        case m.Plq.MODERATE_MEMBERS:
            return b.Z.Messages.MODERATE_MEMBER;
        case m.Plq.USE_CLYDE_AI:
            return b.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
        case m.Plq.SET_VOICE_CHANNEL_STATUS:
            return b.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE;
        case m.Plq.SEND_POLLS:
            return b.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS;
        case m.Plq.USE_EXTERNAL_APPS:
            return b.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS;
    }
    return null;
}
function eS(e, _) {
    let E = [];
    return (
        e.forEach((e) => {
            let s = (function (e, _) {
                    switch (e.targetType) {
                        case m.KFR.GUILD:
                        case m.KFR.GUILD_HOME:
                            return _;
                        case m.KFR.CHANNEL:
                        case m.KFR.CHANNEL_OVERWRITE:
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => d.Z.getChannel(e),
                                (e) => (0, i.F6)(e, R.default, M.Z, !0)
                            );
                        case m.KFR.USER:
                            return eU(
                                e,
                                m.zUn.NICK,
                                (e) => R.default.getUser(e),
                                (e) => e
                            );
                        case m.KFR.ROLE:
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => G.Z.getRole(_.id, e),
                                (e) => e.name
                            );
                        case m.KFR.ONBOARDING_PROMPT:
                            let E = eU(
                                e,
                                m.zUn.ID,
                                (e) => S.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null != E ? E : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
                        case m.KFR.GUILD_ONBOARDING:
                            return _;
                        case m.KFR.INVITE:
                            return eU(e, m.zUn.CODE, m.VqG);
                        case m.KFR.INTEGRATION:
                            return eU(
                                e,
                                m.zUn.TYPE,
                                (e) => h.Z.integrations.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case m.KFR.WEBHOOK:
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => h.Z.webhooks.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case m.KFR.EMOJI:
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => D.ZP.getGuildEmoji(_.id).find((_) => _.id === e),
                                (e) => e.name
                            );
                        case m.KFR.STICKER:
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => O.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case m.KFR.STAGE_INSTANCE:
                            return eU(
                                e,
                                m.zUn.TOPIC,
                                (e) => {
                                    var E;
                                    return null === (E = Object.values(c.Z.getStageInstancesByGuild(_.id))) || void 0 === E ? void 0 : E.find((_) => _.id === e);
                                },
                                (e) => e.topic
                            );
                        case m.KFR.GUILD_SCHEDULED_EVENT:
                        case m.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => h.Z.guildScheduledEvents.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case m.KFR.THREAD:
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => h.Z.threads.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case m.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let _ = h.Z.integrations.find((_) => _.application_id === e.targetId);
                                if (null != _) return _.name;
                                return e.targetId;
                            }
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => h.Z.applicationCommands.find((_) => _.id === e),
                                (e) => {
                                    let _ = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.yU.CHAT ? '/\u2060'.concat(_) : _;
                                }
                            );
                        case m.KFR.AUTO_MODERATION_RULE:
                            return eU(
                                e,
                                m.zUn.NAME,
                                (e) => h.Z.automodRules.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case m.KFR.GUILD_SOUNDBOARD:
                            return eU(e, m.zUn.NAME, m.VqG);
                        case m.KFR.HOME_SETTINGS:
                            return eU(
                                e,
                                m.zUn.GUILD_ID,
                                (e) => u.Z.getSettings(e),
                                () => b.Z.Messages.SERVER_GUIDE,
                                _.id
                            );
                        case m.KFR.VOICE_CHANNEL_STATUS:
                            return eU(
                                e,
                                m.zUn.STATUS,
                                (e) => d.Z.getChannel(e),
                                (e) => (0, i.F6)(e, R.default, M.Z, !0)
                            );
                        default:
                            return H.warn('Unknown targetType for log', e), null;
                    }
                })(e, _),
                t = R.default.getUser(e.userId);
            if (null != s || !![m.rsA.MEMBER_PRUNE, m.rsA.MEMBER_DISCONNECT, m.rsA.MEMBER_MOVE, m.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, m.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', t)).set('target', s)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let E = { ...e.options };
                                switch (e.options.type) {
                                    case m.jwA.USER:
                                        E.subtarget = ed(
                                            e.options.id,
                                            (e) => R.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case m.jwA.ROLE:
                                        E.subtarget = ed(e.options.role_name, m.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (E.channel = eU(
                                            e,
                                            '',
                                            (e) => d.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (E.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var _;
                                    let s = h.Z.guildScheduledEvents.find((_) => _.id === e.targetId),
                                        n = null == s ? void 0 : s.guild_scheduled_event_exceptions.find((_) => _.event_exception_id === e.options.event_exception_id);
                                    E.subtarget = (0, g.vc)(r()(p.default.extractTimestamp(null !== (_ = null == n ? void 0 : n.event_exception_id) && void 0 !== _ ? _ : '0')), 'LL');
                                }
                                return E;
                            }
                            return e.options;
                        })(e)
                    )).changes
                ) {
                    let E = [];
                    e.changes.forEach((s) => {
                        let t = (function (e, _, E) {
                            if (_.action === m.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let _ = e.newValue || e.oldValue;
                                switch (_.type) {
                                    case m.ecB.ROLE:
                                        e.subtarget = ed(
                                            _.id,
                                            (e) => G.Z.getRole(E.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case m.ecB.USER:
                                        e.subtarget = ed(
                                            _.id,
                                            (e) => R.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case m.ecB.CHANNEL:
                                        _.id === n()(E.id).subtract(1).toString()
                                            ? (e.subtarget = b.Z.Messages.ALL_CHANNELS)
                                            : (e.subtarget = ed(
                                                  _.id,
                                                  (e) => d.Z.getChannel(e),
                                                  (e) => (0, i.F6)(e, R.default, M.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case m.zUn.OWNER_ID:
                                    return eO(e, (e) => R.default.getUser(e));
                                case m.zUn.CHANNEL_ID:
                                case m.zUn.AFK_CHANNEL_ID:
                                case m.zUn.SYSTEM_CHANNEL_ID:
                                case m.zUn.RULES_CHANNEL_ID:
                                case m.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eO(
                                        e,
                                        (e) => d.Z.getChannel(e),
                                        (e) => (0, i.F6)(e, R.default, M.Z, !0)
                                    );
                                case m.zUn.AFK_TIMEOUT:
                                    return eO(e, (e) => e / 60);
                                case m.zUn.BITRATE:
                                    return eO(e, (e) => e / 1000);
                                case m.zUn.COLOR:
                                    return eO(e, (e) => (0, l.Rf)(e).toUpperCase());
                                case m.zUn.THEME_COLORS:
                                    return eO(e, (e) => ''.concat((0, l.Rf)(e[0]).toUpperCase(), ', ').concat((0, l.Rf)(e[1]).toUpperCase()));
                                case m.zUn.MAX_AGE:
                                    return eO(e, (e) => {
                                        let _ = f.ZP.getMaxAgeOptions.find((_) => {
                                            let { value: E } = _;
                                            return e === E;
                                        });
                                        return _ ? _.label : e;
                                    });
                                case m.zUn.PERMISSIONS: {
                                    let _ = [],
                                        { added: E, removed: s } = eu(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let e = new U.ms(m.zUn.PERMISSIONS_GRANTED, null, E);
                                        _.push(e);
                                    }
                                    if (s.length > 0) {
                                        let e = new U.ms(m.zUn.PERMISSIONS_DENIED, null, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case m.zUn.PERMISSIONS_GRANTED:
                                case m.zUn.PERMISSIONS_DENIED: {
                                    let _ = [],
                                        { added: E, removed: s } = eu(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new U.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let e = new U.ms(m.zUn.PERMISSIONS_RESET, s, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case m.zUn.FLAGS: {
                                    let _ = [],
                                        { added: E, removed: s } = (function (e, _) {
                                            let E = 'number' == typeof e ? e : 0,
                                                s = 'number' == typeof _ ? _ : 0,
                                                n = C.Ge(s, E),
                                                t = C.Ge(E, s),
                                                r = [],
                                                T = [];
                                            for (let e in P.zZ) {
                                                let _ = P.zZ[e];
                                                C.yE(n, _) && r.push(_), C.yE(t, _) && T.push(_);
                                            }
                                            return {
                                                added: r,
                                                removed: T
                                            };
                                        })(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new U.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let E = new U.ms(e.key, s, null);
                                        _.push(E);
                                    }
                                    return _;
                                }
                                case m.zUn.PREFERRED_LOCALE:
                                    return eO(e, (e) => {
                                        let _ = b.Z.getAvailableLocales().find((_) => _.value === e);
                                        return null != _ ? _.name : null;
                                    });
                                case m.zUn.VIDEO_QUALITY_MODE:
                                    return eO(e, (e) => (e === m.Ucd.FULL ? b.Z.Messages.VIDEO_QUALITY_MODE_FULL : b.Z.Messages.VIDEO_QUALITY_MODE_AUTO));
                                case m.zUn.SYSTEM_CHANNEL_FLAGS:
                                    return (function (e) {
                                        let _ = {
                                                [m.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: m.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                                [m.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: m.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                                [m.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: m.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                                [m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: m.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                            },
                                            E = [];
                                        return (
                                            Object.values(m.xmn).forEach((s) => {
                                                let n = (e.oldValue & s) === s,
                                                    t = (e.newValue & s) === s;
                                                if (n === t) return;
                                                let r = new U.ms(_[s], !n, !t);
                                                E.push(r);
                                            }),
                                            E
                                        );
                                    })(e);
                                case m.zUn.AUTO_MODERATION_ACTIONS:
                                    if (_.targetType === m.KFR.AUTO_MODERATION_RULE)
                                        return eO(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(L.ZF).join(', ')
                                        );
                                    break;
                                case m.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (_.targetType === m.KFR.AUTO_MODERATION_RULE) return eO(e, L.YN);
                                    break;
                                case m.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (_.targetType === m.KFR.AUTO_MODERATION_RULE) return eO(e, L.Ar);
                                    break;
                                case m.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (_.targetType === m.KFR.AUTO_MODERATION_RULE)
                                        return eO(e, (e) => {
                                            if (null != e && 'object' == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({ newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e);
                                            return e;
                                        });
                                    break;
                                case m.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case m.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case m.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case m.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case m.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case m.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (_.targetType === m.KFR.AUTO_MODERATION_RULE) return eO(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case m.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (_.targetType === m.KFR.AUTO_MODERATION_RULE)
                                        return eO(
                                            e,
                                            (e) =>
                                                e
                                                    .map(d.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, i.F6)(e, R.default, M.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE)
                                        );
                                    break;
                                case m.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (_.targetType === m.KFR.AUTO_MODERATION_RULE)
                                        return eO(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => G.Z.getRole(E.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE)
                                        );
                                    break;
                                case m.zUn.AVAILABLE_TAGS:
                                    return (function (e) {
                                        let { oldValue: _, newValue: E } = e,
                                            s = Array.isArray(_) ? _ : [],
                                            n = Array.isArray(E) ? E : [];
                                        if (0 === s.length && 0 === n.length) return e;
                                        let t = {},
                                            r = {};
                                        if (
                                            (s.forEach((e) => {
                                                t[e.id] = e;
                                            }),
                                            n.forEach((e) => {
                                                r[e.id] = e;
                                            }),
                                            s.length < n.length)
                                        ) {
                                            for (let e in r) if (null == t[e]) return new U.ms(m.zUn.AVAILABLE_TAG_ADD, null, ec(r[e]));
                                        }
                                        if (s.length > n.length) {
                                            for (let e in t) if (null == r[e]) return new U.ms(m.zUn.AVAILABLE_TAG_DELETE, null, ec(t[e]));
                                        }
                                        for (let e in t) {
                                            let _ = t[e],
                                                E = r[e];
                                            if ((null == E ? void 0 : E.name) !== _.name || (null == E ? void 0 : E.emoji_id) !== _.emoji_id || (null == E ? void 0 : E.emoji_name) !== _.emoji_name) return new U.ms(m.zUn.AVAILABLE_TAG_EDIT, ec(_), ec(E));
                                        }
                                        return e;
                                    })(e);
                                case m.zUn.SCHEDULED_START_TIME:
                                case m.zUn.SCHEDULED_END_TIME:
                                    return eO(e, (e) => (0, g.vc)(r()(new Date(e)), 'LLLL'));
                            }
                            return e;
                        })(s, e, _);
                        Array.isArray(t) ? t.forEach((e) => E.push(e)) : E.push(t);
                    }),
                        (e = e.set('changes', E));
                }
                E.push(e);
            }
        }),
        E
    );
}
function eu(e, _) {
    let E = I.vB('string' == typeof e ? e : 0),
        s = I.vB('string' == typeof _ ? _ : 0),
        n = I.Od(s, E),
        t = I.Od(E, s),
        r = [],
        T = [];
    for (let e in m.Plq) {
        let _ = m.Plq[e];
        I.e$(n, _) && r.push(_), I.e$(t, _) && T.push(_);
    }
    return {
        added: r,
        removed: T
    };
}
function ec(e) {
    return null == e
        ? null
        : {
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated
          };
}
function eO(e, _, E) {
    let s = e.newValue,
        n = e.oldValue;
    return null != e.newValue && ((s = _(e.newValue)), null != E && null != s && (s = E(s))), null != e.oldValue && ((n = _(e.oldValue)), null != E && null != n && (n = E(n))), new U.ms(e.key, n || e.oldValue, s || e.newValue);
}
function eU(e, _, E, s, n) {
    let t = null,
        r = E((n = null != n ? n : e.targetId));
    if ((null != r && null != s && (t = s(r)), null == t)) {
        let _ = h.Z.deletedTargets[e.targetType];
        null != _ && null != _[n] && (t = _[n]);
    }
    if (null == t && null != e.changes) {
        let E = e.changes.find((e) => e.key === _);
        null != E && (t = E.newValue || E.oldValue);
    }
    return null != t ? t : n;
}
function ed(e, _, E) {
    let s = e,
        n = _(e);
    return null != n && null != E && (s = E(n)), s;
}
function eG(e, _) {
    return (E) => (null == E.oldValue ? e : _);
}
function eM(e, _) {
    return (E) => (null == E.newValue ? e : _);
}
function eR(e, _, E, s) {
    return (n) => {
        if (null != n.newValue && null != n.oldValue) return e;
        if (null != n.newValue) return _;
        if (null != n.oldValue) return E;
        return s;
    };
}
function eg(e, _) {
    return (E) => (E.newValue ? e : _);
}
function eC(e) {
    return (_) => e[_.newValue];
}
function ef(e, _) {
    return (E) => {
        var s;
        return null !== (s = e[E.newValue]) && void 0 !== s ? s : _;
    };
}
