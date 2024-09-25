E.d(_, {
    Bq: function () {
        return X;
    },
    C0: function () {
        return en;
    },
    C2: function () {
        return Q;
    },
    EN: function () {
        return K;
    },
    F1: function () {
        return et;
    },
    HE: function () {
        return z;
    },
    HN: function () {
        return W;
    },
    Iv: function () {
        return eT;
    },
    J5: function () {
        return ei;
    },
    K: function () {
        return J;
    },
    ML: function () {
        return j;
    },
    N$: function () {
        return q;
    },
    N5: function () {
        return eN;
    },
    QM: function () {
        return eo;
    },
    V$: function () {
        return ea;
    },
    _$: function () {
        return eu;
    },
    cT: function () {
        return eL;
    },
    em: function () {
        return eD;
    },
    hQ: function () {
        return eS;
    },
    hx: function () {
        return w;
    },
    lR: function () {
        return Y;
    },
    lU: function () {
        return y;
    },
    nm: function () {
        return el;
    },
    oD: function () {
        return k;
    },
    pA: function () {
        return e_;
    },
    pY: function () {
        return V;
    },
    pi: function () {
        return ee;
    },
    rK: function () {
        return es;
    },
    uB: function () {
        return $;
    },
    vc: function () {
        return er;
    },
    vm: function () {
        return eE;
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
    A = E(379649),
    o = E(911969),
    i = E(933557),
    N = E(710845),
    D = E(339085),
    L = E(236413),
    S = E(45966),
    u = E(563534),
    O = E(427679),
    U = E(926491),
    c = E(387667),
    G = E(592125),
    d = E(430824),
    R = E(699516),
    M = E(594174),
    g = E(55935),
    C = E(630388),
    f = E(823379),
    p = E(971130),
    h = E(709054),
    m = E(987707),
    P = E(981631),
    Z = E(176505),
    v = E(273504),
    H = E(765305),
    b = E(689938);
let F = new N.Z('AuditLogUtils'),
    B = [A.J6.DAYS, A.J6.HOURS, A.J6.MINUTES, A.J6.SECONDS],
    x = () => ({ [P.zUn.REASON]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON }),
    V = () => ({
        [P.zUn.NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
        [P.zUn.DESCRIPTION]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
        [P.zUn.ICON_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
        [P.zUn.SPLASH_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
        [P.zUn.DISCOVERY_SPLASH_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
        [P.zUn.BANNER_HASH]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
        [P.zUn.OWNER_ID]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
        [P.zUn.REGION]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
        [P.zUn.PREFERRED_LOCALE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
        [P.zUn.AFK_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
        [P.zUn.AFK_TIMEOUT]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
        [P.zUn.SYSTEM_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
        [P.zUn.RULES_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
        [P.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
        [P.zUn.MFA_LEVEL]: ef({
            [P.BpS.NONE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
            [P.BpS.ELEVATED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
        }),
        [P.zUn.WIDGET_ENABLED]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED),
        [P.zUn.WIDGET_CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
        [P.zUn.VERIFICATION_LEVEL]: ef({
            [P.sFg.NONE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
            [P.sFg.LOW]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
            [P.sFg.MEDIUM]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
            [P.sFg.HIGH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
            [P.sFg.VERY_HIGH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
        }),
        [P.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: ef({
            [P.bL.ALL_MESSAGES]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
            [P.bL.ONLY_MENTIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
        }),
        [P.zUn.VANITY_URL_CODE]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
        [P.zUn.EXPLICIT_CONTENT_FILTER]: ef({
            [P.lxg.DISABLED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
            [P.lxg.MEMBERS_WITHOUT_ROLES]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
            [P.lxg.ALL_MEMBERS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
        }),
        [P.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED),
        [P.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        [P.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
        [P.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
        [P.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
        [P.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
        ...x()
    }),
    j = () => ({
        [P.zUn.NAME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
        [P.zUn.POSITION]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
        [P.zUn.TOPIC]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
        [P.zUn.BITRATE]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
        [P.zUn.RTC_REGION_OVERRIDE]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
        [P.zUn.USER_LIMIT]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
        [P.zUn.RATE_LIMIT_PER_USER]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [P.zUn.PERMISSIONS_RESET]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
        [P.zUn.PERMISSIONS_GRANTED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
        [P.zUn.PERMISSIONS_DENIED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
        [P.zUn.REASON]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
        [P.zUn.NSFW]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED),
        [P.zUn.TYPE]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
        [P.zUn.VIDEO_QUALITY_MODE]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
        [P.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
        [P.zUn.FLAGS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
        [P.zUn.AVAILABLE_TAG_ADD]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
        [P.zUn.AVAILABLE_TAG_EDIT]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
        [P.zUn.AVAILABLE_TAG_DELETE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE,
        [P.zUn.LINKED_LOBBY]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_LOBBY_LINK_DELETE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_LOBBY_LINK_CREATE)
    }),
    y = () => ({
        [P.zUn.NICK]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
        [P.zUn.DEAF]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF),
        [P.zUn.MUTE]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF),
        [P.zUn.ROLES_REMOVE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
        [P.zUn.ROLES_ADD]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
        [P.zUn.PRUNE_DELETE_DAYS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
        [P.zUn.COMMUNICATION_DISABLED_UNTIL]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
        [P.zUn.BYPASSES_VERIFICATION]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF),
        [P.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        ...x()
    }),
    z = () => ({
        [P.zUn.NAME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
        [P.zUn.DESCRIPTION]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        [P.zUn.PERMISSIONS_GRANTED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
        [P.zUn.PERMISSIONS_DENIED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
        [P.zUn.COLOR]: ep({ '#000000': b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE }, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS),
        [P.zUn.HOIST]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF),
        [P.zUn.MENTIONABLE]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF),
        [P.zUn.ICON_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
        [P.zUn.UNICODE_EMOJI]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
        ...x()
    }),
    k = () => ({
        ...x(),
        [P.zUn.TITLE]: (e) => {
            let { oldValue: _, newValue: E } = e;
            return null != _
                ? (0 === _.length && (_ = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE),
                  b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
                      oldValue: _,
                      newValue: E
                  }))
                : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE;
        },
        [P.zUn.DESCRIPTION]: (e) => {
            let { oldValue: _, newValue: E } = e;
            return null != _
                ? (0 === _.length && (_ = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE),
                  b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
                      oldValue: _,
                      newValue: E
                  }))
                : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({ newValue: E });
        },
        [P.zUn.OPTIONS]: () => b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
        [P.zUn.SINGLE_SELECT]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT),
        [P.zUn.REQUIRED]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL)
    }),
    K = () => ({
        ...x(),
        [P.zUn.DEFAULT_CHANNEL_IDS]: (e) => {
            let { newValue: _ } = e;
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({ count: _.length });
        },
        [P.zUn.ENABLE_DEFAULT_CHANNELS]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS),
        [P.zUn.ENABLE_ONBOARDING_PROMPTS]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS),
        [P.zUn.ENABLED]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE)
    }),
    w = () => ({
        ...x(),
        [P.zUn.WELCOME_MESSAGE]: () => b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
        [P.zUn.NEW_MEMBER_ACTIONS]: () => b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
        [P.zUn.RESOURCE_CHANNELS]: () => b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
    }),
    W = () => ({
        [P.zUn.CODE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
        [P.zUn.CHANNEL_ID]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
        [P.zUn.MAX_USES]: ep({ 0: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE }, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE),
        [P.zUn.MAX_AGE]: ep({ [b.Z.Messages.MAX_AGE_NEVER]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE }, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE),
        [P.zUn.TEMPORARY]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF),
        [P.zUn.FLAGS]: (e) => {
            let { newValue: _ } = e;
            return (function (e) {
                let { newValue: _ } = e;
                return _.map((e) =>
                    (function (e) {
                        if (e === a.$.IS_GUEST_INVITE) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
                        return null;
                    })(e)
                ).filter(f.lm);
            })({ newValue: _ });
        },
        ...x()
    }),
    Y = () => ({
        [P.zUn.CHANNEL_ID]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
        [P.zUn.NAME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
        [P.zUn.AVATAR_HASH]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
        [P.zUn.REASON]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
    }),
    q = () => ({
        [P.zUn.NAME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
        ...x()
    }),
    X = () => ({
        [P.zUn.NAME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
        [P.zUn.TAGS]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
        [P.zUn.DESCRIPTION]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        ...x()
    }),
    J = () => ({
        [P.zUn.ENABLE_EMOTICONS]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF),
        [P.zUn.EXPIRE_BEHAVIOR]: ef({
            0: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
            1: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
        }),
        [P.zUn.EXPIRE_GRACE_PERIOD]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
        ...x()
    }),
    Q = () => ({
        [P.zUn.TOPIC]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
        [P.zUn.PRIVACY_LEVEL]: ef({
            [H.j8.GUILD_ONLY]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [H.j8.PUBLIC]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        }),
        ...x()
    }),
    $ = () => ({
        [P.zUn.NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
        [P.zUn.DESCRIPTION]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
        [P.zUn.PRIVACY_LEVEL]: ef({
            [H.j8.GUILD_ONLY]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [H.j8.PUBLIC]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        }),
        [P.zUn.STATUS]: ef({
            [H.p1.SCHEDULED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
            [H.p1.ACTIVE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
            [H.p1.COMPLETED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
            [H.p1.CANCELED]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
        }),
        [P.zUn.ENTITY_TYPE]: ef({
            [H.WX.NONE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
            [H.WX.STAGE_INSTANCE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
            [H.WX.VOICE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
            [H.WX.EXTERNAL]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
        }),
        [P.zUn.CHANNEL_ID]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
        [P.zUn.LOCATION]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
        [P.zUn.IMAGE_HASH]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
        ...x()
    }),
    ee = () => ({
        [P.zUn.SCHEDULED_START_TIME]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
        [P.zUn.SCHEDULED_END_TIME]: eM(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
        [P.zUn.IS_CANCELED]: (e) => {
            if (null != e.oldValue || !0 === e.newValue) {
                if (!e.oldValue && e.newValue) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
                if (e.oldValue && !e.newValue) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED;
            }
            return '';
        },
        ...x()
    }),
    e_ = () => ({
        [P.zUn.NAME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
        [P.zUn.ARCHIVED]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED),
        [P.zUn.LOCKED]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED),
        [P.zUn.INVITABLE]: eC(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED),
        [P.zUn.AUTO_ARCHIVE_DURATION]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
        [P.zUn.RATE_LIMIT_PER_USER]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [P.zUn.FLAGS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
        ...x()
    }),
    eE = (e) => {
        let _ = { ...x() };
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (_[e.key] = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED) : (_[e.key] = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED)) : (_[e.key] = b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED);
                }),
            _
        );
    },
    es = () => ({
        [P.zUn.NAME]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
        [P.zUn.AUTO_MODERATION_TRIGGER_TYPE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
        [P.zUn.AUTO_MODERATION_EVENT_TYPE]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
        [P.zUn.AUTO_MODERATION_ACTIONS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
        [P.zUn.AUTO_MODERATION_ENABLED]: (e) => {
            var _;
            return !0 === (null !== (_ = e.newValue) && void 0 !== _ ? _ : e.oldValue) ? b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE;
        },
        [P.zUn.AUTO_MODERATION_EXEMPT_ROLES]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
        [P.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
        [P.zUn.AUTO_MODERATION_TRIGGER_METADATA]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
        [P.zUn.AUTO_MODERATION_ADD_KEYWORDS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
        [P.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
        [P.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
        [P.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
        [P.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
        [P.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
        ...x()
    }),
    en = () => ({
        [P.zUn.NAME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
        [P.zUn.VOLUME]: eR(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
        [P.zUn.EMOJI_NAME]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
        [P.zUn.EMOJI_ID]: eg(b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
        ...x()
    }),
    et = () => ({
        [P.zUn.STATUS]: b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
        ...x()
    }),
    er = {
        [P.KFR.CHANNEL]: {
            [P.zUn.ID]: !0,
            [P.zUn.PERMISSION_OVERWRITES]: !0
        },
        [P.KFR.CHANNEL_OVERWRITE]: {
            [P.zUn.TYPE]: !0,
            [P.zUn.ID]: !0,
            [P.zUn.PERMISSION_OVERWRITES]: !0
        },
        [P.KFR.INVITE]: {
            [P.zUn.INVITER_ID]: !0,
            [P.zUn.USES]: !0
        },
        [P.KFR.WEBHOOK]: {
            [P.zUn.TYPE]: !0,
            [P.zUn.APPLICATION_ID]: !0
        },
        [P.KFR.INTEGRATION]: { [P.zUn.TYPE]: !0 },
        [P.KFR.THREAD]: {
            [P.zUn.ID]: !0,
            [P.zUn.TYPE]: !0
        },
        [P.KFR.STICKER]: {
            [P.zUn.ID]: !0,
            [P.zUn.TYPE]: !0,
            [P.zUn.ASSET]: !0,
            [P.zUn.FORMAT_TYPE]: !0,
            [P.zUn.AVAILABLE]: !0,
            [P.zUn.GUILD_ID]: !0
        },
        [P.KFR.GUILD_HOME]: { [P.zUn.ENTITY_TYPE]: !0 },
        [P.KFR.GUILD_ONBOARDING]: { [P.zUn.PROMPTS]: !0 },
        [P.KFR.GUILD_SOUNDBOARD]: {
            [P.zUn.ID]: !0,
            [P.zUn.SOUND_ID]: !0
        }
    },
    eT = () => [
        {
            value: P.rsA.ALL,
            label: b.Z.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
            valueLabel: b.Z.Messages.GUILD_SETTINGS_FILTER_ALL
        },
        {
            value: P.rsA.GUILD_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
        },
        {
            value: P.rsA.CHANNEL_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
        },
        {
            value: P.rsA.CHANNEL_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
        },
        {
            value: P.rsA.CHANNEL_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
        },
        {
            value: P.rsA.CHANNEL_OVERWRITE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
        },
        {
            value: P.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
        },
        {
            value: P.rsA.CHANNEL_OVERWRITE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
        },
        {
            value: P.rsA.MEMBER_KICK,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
        },
        {
            value: P.rsA.MEMBER_PRUNE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
        },
        {
            value: P.rsA.MEMBER_BAN_ADD,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
        },
        {
            value: P.rsA.MEMBER_BAN_REMOVE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
        },
        {
            value: P.rsA.MEMBER_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
        },
        {
            value: P.rsA.MEMBER_ROLE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
        },
        {
            value: P.rsA.MEMBER_MOVE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
        },
        {
            value: P.rsA.MEMBER_DISCONNECT,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
        },
        {
            value: P.rsA.BOT_ADD,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
        },
        {
            value: P.rsA.THREAD_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
        },
        {
            value: P.rsA.THREAD_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
        },
        {
            value: P.rsA.THREAD_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
        },
        {
            value: P.rsA.ROLE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
        },
        {
            value: P.rsA.ROLE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
        },
        {
            value: P.rsA.ROLE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
        },
        {
            value: P.rsA.ONBOARDING_PROMPT_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
        },
        {
            value: P.rsA.ONBOARDING_PROMPT_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
        },
        {
            value: P.rsA.ONBOARDING_PROMPT_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
        },
        {
            value: P.rsA.ONBOARDING_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
        },
        {
            value: P.rsA.ONBOARDING_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
        },
        {
            value: P.rsA.HOME_SETTINGS_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
        },
        {
            value: P.rsA.HOME_SETTINGS_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
        },
        {
            value: P.rsA.INVITE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
        },
        {
            value: P.rsA.INVITE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
        },
        {
            value: P.rsA.INVITE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
        },
        {
            value: P.rsA.WEBHOOK_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
        },
        {
            value: P.rsA.WEBHOOK_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
        },
        {
            value: P.rsA.WEBHOOK_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
        },
        {
            value: P.rsA.EMOJI_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
        },
        {
            value: P.rsA.EMOJI_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
        },
        {
            value: P.rsA.EMOJI_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
        },
        {
            value: P.rsA.MESSAGE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
        },
        {
            value: P.rsA.MESSAGE_BULK_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
        },
        {
            value: P.rsA.MESSAGE_PIN,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
        },
        {
            value: P.rsA.MESSAGE_UNPIN,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
        },
        {
            value: P.rsA.INTEGRATION_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
        },
        {
            value: P.rsA.INTEGRATION_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
        },
        {
            value: P.rsA.INTEGRATION_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
        },
        {
            value: P.rsA.STICKER_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
        },
        {
            value: P.rsA.STICKER_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
        },
        {
            value: P.rsA.STICKER_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
        },
        {
            value: P.rsA.STAGE_INSTANCE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
        },
        {
            value: P.rsA.STAGE_INSTANCE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
        },
        {
            value: P.rsA.STAGE_INSTANCE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
        },
        {
            value: P.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
        },
        {
            value: P.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
        },
        {
            value: P.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
        },
        {
            value: P.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
        },
        {
            value: P.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
        },
        {
            value: P.rsA.AUTO_MODERATION_RULE_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
        },
        {
            value: P.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
        },
        {
            value: P.rsA.AUTO_MODERATION_RULE_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
        },
        {
            value: P.rsA.GUILD_HOME_FEATURE_ITEM,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
        },
        {
            value: P.rsA.GUILD_HOME_REMOVE_ITEM,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
        },
        {
            value: P.rsA.SOUNDBOARD_SOUND_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
        },
        {
            value: P.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
        },
        {
            value: P.rsA.SOUNDBOARD_SOUND_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
        },
        {
            value: P.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
        },
        {
            value: P.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: b.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
        }
    ];
function ea(e, _) {
    return null != _.changes ? _.changes.find((_) => _.key === e) : null;
}
function eI(e, _) {
    return null != _.changes ? _.changes.filter((_) => _.key === e) : [];
}
function el(e) {
    var _;
    let E = eT().find((_) => _.value === e.action);
    return null != ea(P.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? b.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED : null !== (_ = null == E ? void 0 : E.label) && void 0 !== _ ? _ : null;
}
let eA = {
    [A.J6.SECONDS]: (e) => b.Z.Messages.DURATION_SECONDS.format({ seconds: e }),
    [A.J6.MINUTES]: (e) => b.Z.Messages.DURATION_MINUTES.format({ minutes: e }),
    [A.J6.HOURS]: (e) => b.Z.Messages.DURATION_HOURS.format({ hours: e }),
    [A.J6.DAYS]: (e) => b.Z.Messages.DURATION_DAYS.format({ days: e })
};
function eo(e) {
    let _ = ea(P.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        E = eI(P.zUn.ROLES_ADD, e).length > 0,
        s = eI(P.zUn.ROLES_REMOVE, e).length > 0;
    if (null != _) {
        if ((null == _ ? void 0 : _.newValue) != null) {
            let E = new Date(null == _ ? void 0 : _.newValue).getTime(),
                s = E - h.default.extractTimestamp(e.id),
                n = Math.round(s / 1000 / 60),
                t = (0, A.CI)(n, B);
            if (null == t.unit || null == t.time) return null;
            if (t.unit in eA) {
                let e = t.unit,
                    _ = t.unit === A.J6.SECONDS ? Math.round(s / 1000) : t.time;
                return eA[e](_);
            }
        } else if ((null == _ ? void 0 : _.oldValue) != null) return b.Z.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
    } else if (E && s) return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    else if (E) return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    else if (s) return b.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    return null;
}
function ei(e) {
    let _ = eI(P.zUn.ROLES_ADD, e),
        E = eI(P.zUn.ROLES_REMOVE, e),
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
function eN(e) {
    switch (e.action) {
        case P.rsA.GUILD_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
        case P.rsA.CHANNEL_CREATE:
            let _ = null != e.changes ? e.changes.find((e) => e.key === P.zUn.TYPE) : null;
            if (null == _) throw Error('[AuditLog] Could not find type change for channel create');
            switch (_.newValue) {
                case P.d4z.GUILD_STAGE_VOICE:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
                case P.d4z.GUILD_VOICE:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
                case P.d4z.GUILD_CATEGORY:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
                default:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE;
            }
        case P.rsA.CHANNEL_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
        case P.rsA.CHANNEL_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
        case P.rsA.CHANNEL_OVERWRITE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
        case P.rsA.CHANNEL_OVERWRITE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
        case P.rsA.CHANNEL_OVERWRITE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
        case P.rsA.MEMBER_KICK:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
        case P.rsA.MEMBER_PRUNE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
        case P.rsA.MEMBER_BAN_ADD:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
        case P.rsA.MEMBER_BAN_REMOVE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
        case P.rsA.MEMBER_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
        case P.rsA.MEMBER_ROLE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
        case P.rsA.MEMBER_MOVE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
        case P.rsA.MEMBER_DISCONNECT:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
        case P.rsA.BOT_ADD:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
        case P.rsA.ROLE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
        case P.rsA.ROLE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
        case P.rsA.ROLE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
        case P.rsA.INVITE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
        case P.rsA.INVITE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
        case P.rsA.INVITE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
        case P.rsA.WEBHOOK_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
        case P.rsA.WEBHOOK_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
        case P.rsA.WEBHOOK_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
        case P.rsA.EMOJI_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
        case P.rsA.EMOJI_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
        case P.rsA.EMOJI_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
        case P.rsA.STICKER_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
        case P.rsA.STICKER_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
        case P.rsA.STICKER_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
        case P.rsA.MESSAGE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
        case P.rsA.MESSAGE_BULK_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
        case P.rsA.MESSAGE_PIN:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
        case P.rsA.MESSAGE_UNPIN:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
        case P.rsA.INTEGRATION_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
        case P.rsA.INTEGRATION_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
        case P.rsA.INTEGRATION_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
        case P.rsA.STAGE_INSTANCE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
        case P.rsA.STAGE_INSTANCE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
        case P.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
        case P.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
        case P.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
        case P.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
        case P.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case P.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
        case P.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
        case P.rsA.THREAD_CREATE:
            let E = null != e.changes ? e.changes.find((e) => e.key === P.zUn.TYPE) : null;
            if (null == E) throw Error('[AuditLog] Could not find type change for thread create');
            switch (E.newValue) {
                case P.d4z.PRIVATE_THREAD:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
                case P.d4z.ANNOUNCEMENT_THREAD:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
                default:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE;
            }
        case P.rsA.THREAD_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
        case P.rsA.THREAD_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
        case P.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
        case P.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
        case P.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var s;
            if ((null === (s = e.options) || void 0 === s ? void 0 : s.auto_moderation_rule_trigger_type) === v.fX.USER_PROFILE.toString()) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
        case P.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
        case P.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
        case P.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return b.Z.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
        case P.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return b.Z.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
        case P.rsA.AUTO_MODERATION_RULE_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
        case P.rsA.AUTO_MODERATION_RULE_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
        case P.rsA.AUTO_MODERATION_RULE_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
        case P.rsA.ONBOARDING_PROMPT_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
        case P.rsA.ONBOARDING_PROMPT_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
        case P.rsA.ONBOARDING_PROMPT_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
        case P.rsA.ONBOARDING_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
        case P.rsA.ONBOARDING_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
        case P.rsA.HOME_SETTINGS_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
        case P.rsA.HOME_SETTINGS_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
        case P.rsA.GUILD_HOME_FEATURE_ITEM:
            let n = null != e.changes ? e.changes.find((e) => e.key === P.zUn.ENTITY_TYPE) : null;
            if (null == n) return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
            switch (n.newValue) {
                case T.w.MESSAGE:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
                case T.w.FORUM_POST:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
                default:
                    return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
            }
        case P.rsA.GUILD_HOME_REMOVE_ITEM:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
        case P.rsA.SOUNDBOARD_SOUND_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
        case P.rsA.SOUNDBOARD_SOUND_UPDATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
        case P.rsA.SOUNDBOARD_SOUND_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
        case P.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
        case P.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
        default:
            return null;
    }
}
function eD(e) {
    switch (e) {
        case Z.zZ.GUILD_FEED_REMOVED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
        case Z.zZ.ACTIVE_CHANNELS_REMOVED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
        case Z.zZ.PINNED:
            return b.Z.Messages.PINNED_POST;
    }
    return null;
}
function eL(e) {
    switch (e) {
        case Z.zZ.GUILD_FEED_REMOVED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
        case Z.zZ.ACTIVE_CHANNELS_REMOVED:
            return b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
        case Z.zZ.PINNED:
            return b.Z.Messages.UNPINNED_POST;
    }
    return null;
}
function eS(e, _) {
    switch (e) {
        case P.Plq.CREATE_INSTANT_INVITE:
            return b.Z.Messages.CREATE_INSTANT_INVITE;
        case P.Plq.KICK_MEMBERS:
            return b.Z.Messages.KICK_MEMBERS;
        case P.Plq.BAN_MEMBERS:
            return b.Z.Messages.BAN_MEMBERS;
        case P.Plq.ADMINISTRATOR:
            return b.Z.Messages.ADMINISTRATOR;
        case P.Plq.MANAGE_CHANNELS:
            if (_.targetType === P.KFR.CHANNEL || _.targetType === P.KFR.CHANNEL_OVERWRITE) return b.Z.Messages.MANAGE_CHANNEL;
            return b.Z.Messages.MANAGE_CHANNELS;
        case P.Plq.MANAGE_GUILD:
            return b.Z.Messages.MANAGE_SERVER;
        case P.Plq.VIEW_GUILD_ANALYTICS:
            return b.Z.Messages.VIEW_GUILD_ANALYTICS;
        case P.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return b.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
        case P.Plq.CHANGE_NICKNAME:
            return b.Z.Messages.CHANGE_NICKNAME;
        case P.Plq.MANAGE_NICKNAMES:
            return b.Z.Messages.MANAGE_NICKNAMES;
        case P.Plq.MANAGE_ROLES:
            return b.Z.Messages.MANAGE_ROLES;
        case P.Plq.MANAGE_WEBHOOKS:
            return b.Z.Messages.MANAGE_WEBHOOKS;
        case P.Plq.CREATE_GUILD_EXPRESSIONS:
            return b.Z.Messages.CREATE_EXPRESSIONS;
        case P.Plq.MANAGE_GUILD_EXPRESSIONS:
            return b.Z.Messages.MANAGE_EXPRESSIONS;
        case P.Plq.VIEW_AUDIT_LOG:
            return b.Z.Messages.VIEW_AUDIT_LOG;
        case P.Plq.VIEW_CHANNEL:
            if (_.targetType === P.KFR.CHANNEL || _.targetType === P.KFR.CHANNEL_OVERWRITE) return b.Z.Messages.VIEW_CHANNEL;
            return b.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL;
        case P.Plq.SEND_MESSAGES:
            return b.Z.Messages.SEND_MESSAGES;
        case P.Plq.SEND_TTS_MESSAGES:
            return b.Z.Messages.SEND_TTS_MESSAGES;
        case P.Plq.USE_APPLICATION_COMMANDS:
            return b.Z.Messages.USE_APPLICATION_COMMANDS;
        case P.Plq.MANAGE_MESSAGES:
            return b.Z.Messages.MANAGE_MESSAGES;
        case P.Plq.EMBED_LINKS:
            return b.Z.Messages.EMBED_LINKS;
        case P.Plq.ATTACH_FILES:
            return b.Z.Messages.ATTACH_FILES;
        case P.Plq.READ_MESSAGE_HISTORY:
            return b.Z.Messages.READ_MESSAGE_HISTORY;
        case P.Plq.MENTION_EVERYONE:
            return b.Z.Messages.MENTION_EVERYONE;
        case P.Plq.USE_EXTERNAL_EMOJIS:
            return b.Z.Messages.USE_EXTERNAL_EMOJIS;
        case P.Plq.USE_EXTERNAL_STICKERS:
            return b.Z.Messages.USE_EXTERNAL_STICKERS;
        case P.Plq.ADD_REACTIONS:
            return b.Z.Messages.ADD_REACTIONS;
        case P.Plq.CONNECT:
            return b.Z.Messages.CONNECT;
        case P.Plq.SPEAK:
            return b.Z.Messages.SPEAK;
        case P.Plq.MUTE_MEMBERS:
            return b.Z.Messages.MUTE_MEMBERS;
        case P.Plq.DEAFEN_MEMBERS:
            return b.Z.Messages.DEAFEN_MEMBERS;
        case P.Plq.MOVE_MEMBERS:
            return b.Z.Messages.MOVE_MEMBERS;
        case P.Plq.USE_VAD:
            return b.Z.Messages.USE_VAD;
        case P.Plq.PRIORITY_SPEAKER:
            return b.Z.Messages.PRIORITY_SPEAKER;
        case P.Plq.STREAM:
            return b.Z.Messages.VIDEO;
        case P.Plq.REQUEST_TO_SPEAK:
            return b.Z.Messages.REQUEST_TO_SPEAK;
        case P.Plq.CREATE_EVENTS:
            return b.Z.Messages.CREATE_EVENTS;
        case P.Plq.MANAGE_EVENTS:
            return b.Z.Messages.MANAGE_EVENTS;
        case P.Plq.CREATE_PUBLIC_THREADS:
            return b.Z.Messages.CREATE_PUBLIC_THREADS;
        case P.Plq.CREATE_PRIVATE_THREADS:
            return b.Z.Messages.CREATE_PRIVATE_THREADS;
        case P.Plq.SEND_MESSAGES_IN_THREADS:
            return b.Z.Messages.SEND_MESSAGES_IN_THREADS;
        case P.Plq.MANAGE_THREADS:
            return b.Z.Messages.MANAGE_THREADS;
        case P.Plq.MODERATE_MEMBERS:
            return b.Z.Messages.MODERATE_MEMBER;
        case P.Plq.USE_CLYDE_AI:
            return b.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
        case P.Plq.SET_VOICE_CHANNEL_STATUS:
            return b.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE;
        case P.Plq.SEND_POLLS:
            return b.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS;
        case P.Plq.USE_EXTERNAL_APPS:
            return b.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS;
    }
    return null;
}
function eu(e, _) {
    let E = [];
    return (
        e.forEach((e) => {
            let s = (function (e, _) {
                    switch (e.targetType) {
                        case P.KFR.GUILD:
                        case P.KFR.GUILD_HOME:
                            return _;
                        case P.KFR.CHANNEL:
                        case P.KFR.CHANNEL_OVERWRITE:
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => G.Z.getChannel(e),
                                (e) => (0, i.F6)(e, M.default, R.Z, !0)
                            );
                        case P.KFR.USER:
                            return eG(
                                e,
                                P.zUn.NICK,
                                (e) => M.default.getUser(e),
                                (e) => e
                            );
                        case P.KFR.ROLE:
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => d.Z.getRole(_.id, e),
                                (e) => e.name
                            );
                        case P.KFR.ONBOARDING_PROMPT:
                            let E = eG(
                                e,
                                P.zUn.ID,
                                (e) => S.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null != E ? E : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
                        case P.KFR.GUILD_ONBOARDING:
                            return _;
                        case P.KFR.INVITE:
                            return eG(e, P.zUn.CODE, P.VqG);
                        case P.KFR.INTEGRATION:
                            return eG(
                                e,
                                P.zUn.TYPE,
                                (e) => m.Z.integrations.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.WEBHOOK:
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.webhooks.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.EMOJI:
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => D.ZP.getGuildEmoji(_.id).find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.STICKER:
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => U.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case P.KFR.STAGE_INSTANCE:
                            return eG(
                                e,
                                P.zUn.TOPIC,
                                (e) => {
                                    var E;
                                    return null === (E = Object.values(O.Z.getStageInstancesByGuild(_.id))) || void 0 === E ? void 0 : E.find((_) => _.id === e);
                                },
                                (e) => e.topic
                            );
                        case P.KFR.GUILD_SCHEDULED_EVENT:
                        case P.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.guildScheduledEvents.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.THREAD:
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.threads.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let _ = m.Z.integrations.find((_) => _.application_id === e.targetId);
                                if (null != _) return _.name;
                                return e.targetId;
                            }
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.applicationCommands.find((_) => _.id === e),
                                (e) => {
                                    let _ = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === o.yU.CHAT ? '/\u2060'.concat(_) : _;
                                }
                            );
                        case P.KFR.AUTO_MODERATION_RULE:
                            return eG(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.automodRules.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.GUILD_SOUNDBOARD:
                            return eG(e, P.zUn.NAME, P.VqG);
                        case P.KFR.HOME_SETTINGS:
                            return eG(
                                e,
                                P.zUn.GUILD_ID,
                                (e) => u.Z.getSettings(e),
                                () => b.Z.Messages.SERVER_GUIDE,
                                _.id
                            );
                        case P.KFR.VOICE_CHANNEL_STATUS:
                            return eG(
                                e,
                                P.zUn.STATUS,
                                (e) => G.Z.getChannel(e),
                                (e) => (0, i.F6)(e, M.default, R.Z, !0)
                            );
                        default:
                            return F.warn('Unknown targetType for log', e), null;
                    }
                })(e, _),
                t = M.default.getUser(e.userId);
            if (null != s || !![P.rsA.MEMBER_PRUNE, P.rsA.MEMBER_DISCONNECT, P.rsA.MEMBER_MOVE, P.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, P.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', t)).set('target', s)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let E = { ...e.options };
                                switch (e.options.type) {
                                    case P.jwA.USER:
                                        E.subtarget = ed(
                                            e.options.id,
                                            (e) => M.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case P.jwA.ROLE:
                                        E.subtarget = ed(e.options.role_name, P.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (E.channel = eG(
                                            e,
                                            '',
                                            (e) => G.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (E.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var _;
                                    let s = m.Z.guildScheduledEvents.find((_) => _.id === e.targetId),
                                        n = null == s ? void 0 : s.guild_scheduled_event_exceptions.find((_) => _.event_exception_id === e.options.event_exception_id);
                                    E.subtarget = (0, g.vc)(r()(h.default.extractTimestamp(null !== (_ = null == n ? void 0 : n.event_exception_id) && void 0 !== _ ? _ : '0')), 'LL');
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
                            if (_.action === P.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let _ = e.newValue || e.oldValue;
                                switch (_.type) {
                                    case P.ecB.ROLE:
                                        e.subtarget = ed(
                                            _.id,
                                            (e) => d.Z.getRole(E.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case P.ecB.USER:
                                        e.subtarget = ed(
                                            _.id,
                                            (e) => M.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case P.ecB.CHANNEL:
                                        _.id === n()(E.id).subtract(1).toString()
                                            ? (e.subtarget = b.Z.Messages.ALL_CHANNELS)
                                            : (e.subtarget = ed(
                                                  _.id,
                                                  (e) => G.Z.getChannel(e),
                                                  (e) => (0, i.F6)(e, M.default, R.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case P.zUn.OWNER_ID:
                                    return ec(e, (e) => M.default.getUser(e));
                                case P.zUn.CHANNEL_ID:
                                case P.zUn.AFK_CHANNEL_ID:
                                case P.zUn.SYSTEM_CHANNEL_ID:
                                case P.zUn.RULES_CHANNEL_ID:
                                case P.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return ec(
                                        e,
                                        (e) => G.Z.getChannel(e),
                                        (e) => (0, i.F6)(e, M.default, R.Z, !0)
                                    );
                                case P.zUn.AFK_TIMEOUT:
                                    return ec(e, (e) => e / 60);
                                case P.zUn.BITRATE:
                                    return ec(e, (e) => e / 1000);
                                case P.zUn.COLOR:
                                    return ec(e, (e) => (0, l.Rf)(e).toUpperCase());
                                case P.zUn.THEME_COLORS:
                                    return ec(e, (e) => ''.concat((0, l.Rf)(e[0]).toUpperCase(), ', ').concat((0, l.Rf)(e[1]).toUpperCase()));
                                case P.zUn.MAX_AGE:
                                    return ec(e, (e) => {
                                        let _ = p.ZP.getMaxAgeOptions.find((_) => {
                                            let { value: E } = _;
                                            return e === E;
                                        });
                                        return _ ? _.label : e;
                                    });
                                case P.zUn.PERMISSIONS: {
                                    let _ = [],
                                        { added: E, removed: s } = eO(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let e = new c.ms(P.zUn.PERMISSIONS_GRANTED, null, E);
                                        _.push(e);
                                    }
                                    if (s.length > 0) {
                                        let e = new c.ms(P.zUn.PERMISSIONS_DENIED, null, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case P.zUn.PERMISSIONS_GRANTED:
                                case P.zUn.PERMISSIONS_DENIED: {
                                    let _ = [],
                                        { added: E, removed: s } = eO(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new c.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let e = new c.ms(P.zUn.PERMISSIONS_RESET, s, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case P.zUn.FLAGS: {
                                    let _ = [],
                                        { added: E, removed: s } = (function (e, _) {
                                            let E = 'number' == typeof e ? e : 0,
                                                s = 'number' == typeof _ ? _ : 0,
                                                n = C.Ge(s, E),
                                                t = C.Ge(E, s),
                                                r = [],
                                                T = [];
                                            for (let e in Z.zZ) {
                                                let _ = Z.zZ[e];
                                                C.yE(n, _) && r.push(_), C.yE(t, _) && T.push(_);
                                            }
                                            return {
                                                added: r,
                                                removed: T
                                            };
                                        })(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new c.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let E = new c.ms(e.key, s, null);
                                        _.push(E);
                                    }
                                    return _;
                                }
                                case P.zUn.PREFERRED_LOCALE:
                                    return ec(e, (e) => {
                                        let _ = b.Z.getAvailableLocales().find((_) => _.value === e);
                                        return null != _ ? _.name : null;
                                    });
                                case P.zUn.VIDEO_QUALITY_MODE:
                                    return ec(e, (e) => (e === P.Ucd.FULL ? b.Z.Messages.VIDEO_QUALITY_MODE_FULL : b.Z.Messages.VIDEO_QUALITY_MODE_AUTO));
                                case P.zUn.SYSTEM_CHANNEL_FLAGS:
                                    return (function (e) {
                                        let _ = {
                                                [P.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: P.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                                [P.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: P.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                                [P.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: P.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                                [P.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: P.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                            },
                                            E = [];
                                        return (
                                            Object.values(P.xmn).forEach((s) => {
                                                let n = (e.oldValue & s) === s,
                                                    t = (e.newValue & s) === s;
                                                if (n === t) return;
                                                let r = new c.ms(_[s], !n, !t);
                                                E.push(r);
                                            }),
                                            E
                                        );
                                    })(e);
                                case P.zUn.AUTO_MODERATION_ACTIONS:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE)
                                        return ec(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(L.ZF).join(', ')
                                        );
                                    break;
                                case P.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE) return ec(e, L.YN);
                                    break;
                                case P.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE) return ec(e, L.Ar);
                                    break;
                                case P.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE)
                                        return ec(e, (e) => {
                                            if (null != e && 'object' == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({ newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e);
                                            return e;
                                        });
                                    break;
                                case P.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case P.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case P.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case P.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case P.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case P.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE) return ec(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case P.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE)
                                        return ec(
                                            e,
                                            (e) =>
                                                e
                                                    .map(G.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, i.F6)(e, M.default, R.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE)
                                        );
                                    break;
                                case P.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE)
                                        return ec(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => d.Z.getRole(E.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : b.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE)
                                        );
                                    break;
                                case P.zUn.AVAILABLE_TAGS:
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
                                            for (let e in r) if (null == t[e]) return new c.ms(P.zUn.AVAILABLE_TAG_ADD, null, eU(r[e]));
                                        }
                                        if (s.length > n.length) {
                                            for (let e in t) if (null == r[e]) return new c.ms(P.zUn.AVAILABLE_TAG_DELETE, null, eU(t[e]));
                                        }
                                        for (let e in t) {
                                            let _ = t[e],
                                                E = r[e];
                                            if ((null == E ? void 0 : E.name) !== _.name || (null == E ? void 0 : E.emoji_id) !== _.emoji_id || (null == E ? void 0 : E.emoji_name) !== _.emoji_name) return new c.ms(P.zUn.AVAILABLE_TAG_EDIT, eU(_), eU(E));
                                        }
                                        return e;
                                    })(e);
                                case P.zUn.SCHEDULED_START_TIME:
                                case P.zUn.SCHEDULED_END_TIME:
                                    return ec(e, (e) => (0, g.vc)(r()(new Date(e)), 'LLLL'));
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
function eO(e, _) {
    let E = I.vB('string' == typeof e ? e : 0),
        s = I.vB('string' == typeof _ ? _ : 0),
        n = I.Od(s, E),
        t = I.Od(E, s),
        r = [],
        T = [];
    for (let e in P.Plq) {
        let _ = P.Plq[e];
        I.e$(n, _) && r.push(_), I.e$(t, _) && T.push(_);
    }
    return {
        added: r,
        removed: T
    };
}
function eU(e) {
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
function ec(e, _, E) {
    let s = e.newValue,
        n = e.oldValue;
    return null != e.newValue && ((s = _(e.newValue)), null != E && null != s && (s = E(s))), null != e.oldValue && ((n = _(e.oldValue)), null != E && null != n && (n = E(n))), new c.ms(e.key, n || e.oldValue, s || e.newValue);
}
function eG(e, _, E, s, n) {
    let t = null,
        r = E((n = null != n ? n : e.targetId));
    if ((null != r && null != s && (t = s(r)), null == t)) {
        let _ = m.Z.deletedTargets[e.targetType];
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
function eR(e, _) {
    return (E) => (null == E.oldValue ? e : _);
}
function eM(e, _) {
    return (E) => (null == E.newValue ? e : _);
}
function eg(e, _, E, s) {
    return (n) => {
        if (null != n.newValue && null != n.oldValue) return e;
        if (null != n.newValue) return _;
        if (null != n.oldValue) return E;
        return s;
    };
}
function eC(e, _) {
    return (E) => (E.newValue ? e : _);
}
function ef(e) {
    return (_) => e[_.newValue];
}
function ep(e, _) {
    return (E) => {
        var s;
        return null !== (s = e[E.newValue]) && void 0 !== s ? s : _;
    };
}
