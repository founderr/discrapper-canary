E.d(_, {
    Bq: function () {
        return v;
    },
    C2: function () {
        return V;
    },
    Et: function () {
        return d;
    },
    HE: function () {
        return H;
    },
    HN: function () {
        return h;
    },
    J5: function () {
        return w;
    },
    K: function () {
        return F;
    },
    ML: function () {
        return Z;
    },
    N$: function () {
        return m;
    },
    N5: function () {
        return q;
    },
    QM: function () {
        return k;
    },
    _$: function () {
        return Q;
    },
    hQ: function () {
        return J;
    },
    lR: function () {
        return p;
    },
    lU: function () {
        return P;
    },
    nm: function () {
        return y;
    },
    of: function () {
        return X;
    },
    pA: function () {
        return b;
    },
    pY: function () {
        return f;
    },
    uB: function () {
        return B;
    },
    vc: function () {
        return z;
    },
    vm: function () {
        return x;
    }
}),
    E(411104),
    E(653041);
var s = E(654861),
    T = E.n(s),
    I = E(149765),
    n = E(866442),
    t = E(144830),
    A = E(911969),
    r = E(933557),
    a = E(710845),
    N = E(339085),
    S = E(987707),
    l = E(427679),
    D = E(926491),
    L = E(387667),
    U = E(592125),
    O = E(430824),
    G = E(699516),
    o = E(594174),
    i = E(971130),
    M = E(709054),
    R = E(981631),
    u = E(765305),
    c = E(689938);
let C = new a.Z('AuditLogUtils'),
    d = -1,
    g = () => ({ [R.zUn.REASON]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON }),
    f = () => ({
        [R.zUn.NAME]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
        [R.zUn.DESCRIPTION]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
        [R.zUn.ICON_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
        [R.zUn.SPLASH_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
        [R.zUn.DISCOVERY_SPLASH_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
        [R.zUn.BANNER_HASH]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
        [R.zUn.OWNER_ID]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
        [R.zUn.REGION]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
        [R.zUn.PREFERRED_LOCALE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
        [R.zUn.AFK_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
        [R.zUn.AFK_TIMEOUT]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
        [R.zUn.SYSTEM_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
        [R.zUn.RULES_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
        [R.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
        [R.zUn.MFA_LEVEL]: {
            [R.BpS.NONE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
            [R.BpS.ELEVATED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
        },
        [R.zUn.WIDGET_ENABLED]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
        },
        [R.zUn.WIDGET_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
        [R.zUn.VERIFICATION_LEVEL]: {
            [R.sFg.NONE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
            [R.sFg.LOW]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
            [R.sFg.MEDIUM]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
            [R.sFg.HIGH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
            [R.sFg.VERY_HIGH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
        },
        [R.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: {
            [R.bL.ALL_MESSAGES]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
            [R.bL.ONLY_MENTIONS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
        },
        [R.zUn.VANITY_URL_CODE]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
        [R.zUn.EXPLICIT_CONTENT_FILTER]: {
            [R.lxg.DISABLED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
            [R.lxg.MEMBERS_WITHOUT_ROLES]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
            [R.lxg.ALL_MEMBERS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
        },
        [R.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
        },
        [R.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        [R.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
        [R.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
        [R.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
        [R.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
        ...g()
    }),
    Z = () => ({
        [R.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
        [R.zUn.POSITION]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
        [R.zUn.TOPIC]: eI(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
        [R.zUn.BITRATE]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
        [R.zUn.RTC_REGION_OVERRIDE]: eI(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
        [R.zUn.USER_LIMIT]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
        [R.zUn.RATE_LIMIT_PER_USER]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [R.zUn.PERMISSIONS_RESET]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
        [R.zUn.PERMISSIONS_GRANTED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
        [R.zUn.PERMISSIONS_DENIED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
        [R.zUn.REASON]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
        [R.zUn.NSFW]: {
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
        },
        [R.zUn.TYPE]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
        [R.zUn.VIDEO_QUALITY_MODE]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
        [R.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
    }),
    P = () => ({
        [R.zUn.NICK]: eI(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
        [R.zUn.DEAF]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
        },
        [R.zUn.MUTE]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
        },
        [R.zUn.ROLES_REMOVE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
        [R.zUn.ROLES_ADD]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
        [R.zUn.PRUNE_DELETE_DAYS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
        [R.zUn.COMMUNICATION_DISABLED_UNTIL]: eI(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
        [R.zUn.BYPASSES_VERIFICATION]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
        },
        [R.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        ...g()
    }),
    H = () => ({
        [R.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
        [R.zUn.PERMISSIONS_GRANTED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
        [R.zUn.PERMISSIONS_DENIED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
        [R.zUn.COLOR]: {
            '#000000': c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
            [d]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
        },
        [R.zUn.HOIST]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
        },
        [R.zUn.MENTIONABLE]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
        },
        [R.zUn.ICON_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
        [R.zUn.UNICODE_EMOJI]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
        ...g()
    }),
    h = () => ({
        [R.zUn.CODE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
        [R.zUn.CHANNEL_ID]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
        [R.zUn.MAX_USES]: {
            0: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
            [d]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
        },
        [R.zUn.MAX_AGE]: {
            0: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
            [d]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
        },
        [R.zUn.TEMPORARY]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
        },
        ...g()
    }),
    p = () => ({
        [R.zUn.CHANNEL_ID]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
        [R.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
        [R.zUn.AVATAR_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
        [R.zUn.REASON]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
    }),
    m = () => ({
        [R.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
        ...g()
    }),
    v = () => ({
        [R.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
        [R.zUn.TAGS]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
        [R.zUn.DESCRIPTION]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        ...g()
    }),
    F = () => ({
        [R.zUn.ENABLE_EMOTICONS]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
        },
        [R.zUn.EXPIRE_BEHAVIOR]: {
            0: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
            1: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
        },
        [R.zUn.EXPIRE_GRACE_PERIOD]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
        ...g()
    }),
    V = () => ({
        [R.zUn.TOPIC]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
        [R.zUn.PRIVACY_LEVEL]: {
            [u.j8.GUILD_ONLY]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [u.j8.PUBLIC]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        },
        ...g()
    }),
    B = () => ({
        [R.zUn.NAME]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
        [R.zUn.DESCRIPTION]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
        [R.zUn.PRIVACY_LEVEL]: {
            [u.j8.GUILD_ONLY]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [u.j8.PUBLIC]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        },
        [R.zUn.STATUS]: {
            [u.p1.SCHEDULED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
            [u.p1.ACTIVE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
            [u.p1.COMPLETED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
            [u.p1.CANCELED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
        },
        [R.zUn.ENTITY_TYPE]: {
            [u.WX.NONE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
            [u.WX.STAGE_INSTANCE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
            [u.WX.VOICE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
            [u.WX.EXTERNAL]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
        },
        [R.zUn.CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
        [R.zUn.LOCATION]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
        [R.zUn.RECURRENCE_RULE]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
        ...g()
    }),
    b = () => ({
        [R.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
        [R.zUn.ARCHIVED]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
        },
        [R.zUn.LOCKED]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
        },
        [R.zUn.INVITABLE]: {
            true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
            false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
        },
        [R.zUn.AUTO_ARCHIVE_DURATION]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
        [R.zUn.RATE_LIMIT_PER_USER]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        ...g()
    }),
    x = (e) => {
        let _ = { ...g() };
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (_[e.key] = c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED) : (_[e.key] = c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED)) : (_[e.key] = c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED);
                }),
            _
        );
    },
    z = {
        [R.KFR.CHANNEL]: {
            [R.zUn.ID]: !0,
            [R.zUn.PERMISSION_OVERWRITES]: !0
        },
        [R.KFR.CHANNEL_OVERWRITE]: {
            [R.zUn.TYPE]: !0,
            [R.zUn.ID]: !0,
            [R.zUn.PERMISSION_OVERWRITES]: !0
        },
        [R.KFR.INVITE]: {
            [R.zUn.INVITER_ID]: !0,
            [R.zUn.USES]: !0
        },
        [R.KFR.WEBHOOK]: {
            [R.zUn.TYPE]: !0,
            [R.zUn.APPLICATION_ID]: !0
        },
        [R.KFR.INTEGRATION]: { [R.zUn.TYPE]: !0 },
        [R.KFR.THREAD]: {
            [R.zUn.ID]: !0,
            [R.zUn.TYPE]: !0
        },
        [R.KFR.STICKER]: {
            [R.zUn.ID]: !0,
            [R.zUn.TYPE]: !0,
            [R.zUn.ASSET]: !0,
            [R.zUn.FORMAT_TYPE]: !0,
            [R.zUn.AVAILABLE]: !0,
            [R.zUn.GUILD_ID]: !0
        }
    },
    K = () => [
        {
            value: R.rsA.ALL,
            label: c.Z.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
            valueLabel: c.Z.Messages.GUILD_SETTINGS_FILTER_ALL
        },
        {
            value: R.rsA.GUILD_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
        },
        {
            value: R.rsA.CHANNEL_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
        },
        {
            value: R.rsA.CHANNEL_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
        },
        {
            value: R.rsA.CHANNEL_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
        },
        {
            value: R.rsA.CHANNEL_OVERWRITE_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
        },
        {
            value: R.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
        },
        {
            value: R.rsA.CHANNEL_OVERWRITE_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
        },
        {
            value: R.rsA.MEMBER_KICK,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
        },
        {
            value: R.rsA.MEMBER_PRUNE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
        },
        {
            value: R.rsA.MEMBER_BAN_ADD,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
        },
        {
            value: R.rsA.MEMBER_BAN_REMOVE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
        },
        {
            value: R.rsA.MEMBER_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
        },
        {
            value: R.rsA.MEMBER_ROLE_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
        },
        {
            value: R.rsA.MEMBER_MOVE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
        },
        {
            value: R.rsA.MEMBER_DISCONNECT,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
        },
        {
            value: R.rsA.BOT_ADD,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
        },
        {
            value: R.rsA.THREAD_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
        },
        {
            value: R.rsA.THREAD_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
        },
        {
            value: R.rsA.THREAD_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
        },
        {
            value: R.rsA.ROLE_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
        },
        {
            value: R.rsA.ROLE_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
        },
        {
            value: R.rsA.ROLE_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
        },
        {
            value: R.rsA.INVITE_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
        },
        {
            value: R.rsA.INVITE_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
        },
        {
            value: R.rsA.INVITE_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
        },
        {
            value: R.rsA.WEBHOOK_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
        },
        {
            value: R.rsA.WEBHOOK_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
        },
        {
            value: R.rsA.WEBHOOK_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
        },
        {
            value: R.rsA.EMOJI_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
        },
        {
            value: R.rsA.EMOJI_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
        },
        {
            value: R.rsA.EMOJI_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
        },
        {
            value: R.rsA.MESSAGE_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
        },
        {
            value: R.rsA.MESSAGE_BULK_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
        },
        {
            value: R.rsA.MESSAGE_PIN,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
        },
        {
            value: R.rsA.MESSAGE_UNPIN,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
        },
        {
            value: R.rsA.INTEGRATION_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
        },
        {
            value: R.rsA.INTEGRATION_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
        },
        {
            value: R.rsA.INTEGRATION_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
        },
        {
            value: R.rsA.STICKER_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
        },
        {
            value: R.rsA.STICKER_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
        },
        {
            value: R.rsA.STICKER_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
        },
        {
            value: R.rsA.STAGE_INSTANCE_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
        },
        {
            value: R.rsA.STAGE_INSTANCE_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
        },
        {
            value: R.rsA.STAGE_INSTANCE_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
        },
        {
            value: R.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
        },
        {
            value: R.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
        },
        {
            value: R.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
        },
        {
            value: R.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
        },
        {
            value: R.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
        },
        {
            value: R.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_FLAG_TO_CHANNEL
        },
        {
            value: R.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_TIMEOUT
        },
        {
            value: R.rsA.AUTO_MODERATION_QUARANTINE_USER,
            label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_QUARANTINE
        }
    ];
function Y(e, _) {
    return null != _.changes ? _.changes.find((_) => _.key === e) : null;
}
function y(e) {
    let _ = K().find((_) => _.value === e.action),
        E = Y(R.zUn.COMMUNICATION_DISABLED_UNTIL, e);
    switch (!0) {
        case null != E:
            return c.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED;
        case null != _:
            var s;
            return null !== (s = null == _ ? void 0 : _.label) && void 0 !== s ? s : null;
        default:
            return null;
    }
}
let j = {
    [t.J6.SECONDS]: (e) => c.Z.Messages.DURATION_SECONDS.format({ seconds: e }),
    [t.J6.MINUTES]: (e) => c.Z.Messages.DURATION_MINUTES.format({ minutes: e }),
    [t.J6.HOURS]: (e) => c.Z.Messages.DURATION_HOURS.format({ hours: e }),
    [t.J6.DAYS]: (e) => c.Z.Messages.DURATION_DAYS.format({ days: e })
};
function k(e) {
    let _ = Y(R.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        E = W(R.zUn.ROLES_ADD, e).length > 0,
        s = W(R.zUn.ROLES_REMOVE, e).length > 0;
    switch (!0) {
        case null != _:
            if ((null == _ ? void 0 : _.newValue) != null) {
                let E = new Date(null == _ ? void 0 : _.newValue).getTime(),
                    s = M.default.extractTimestamp(e.id),
                    T = Math.round((E - s) / 1000 / 60),
                    I = [t.J6.DAYS, t.J6.HOURS, t.J6.MINUTES, t.J6.SECONDS],
                    n = (0, t.CI)(T, I);
                if (null == n.unit || null == n.time) return null;
                if (n.unit in j) return j[n.unit](n.time);
                return null;
            }
            if ((null == _ ? void 0 : _.oldValue) != null) return c.Z.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
            return null;
        case E && s:
            return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
        case E:
            return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
        case s:
            return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
        default:
            return null;
    }
}
function W(e, _) {
    return null != _.changes ? _.changes.filter((_) => _.key === e) : [];
}
function w(e) {
    let _ = W(R.zUn.ROLES_ADD, e),
        E = W(R.zUn.ROLES_REMOVE, e),
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
        T =
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
    switch (!0) {
        case _.length > 0 && E.length > 0:
            return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
                roleNamesAdded: s,
                roleNamesRemoved: T
            });
        case _.length > 0:
            return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({ roleNames: s });
        case E.length > 0:
            return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({ roleNames: T });
        default:
            return null;
    }
}
function q(e) {
    switch (e.action) {
        case R.rsA.GUILD_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
        case R.rsA.CHANNEL_CREATE:
            let _ = null != e.changes ? e.changes.find((e) => e.key === R.zUn.TYPE) : null;
            if (null == _) throw Error('[AuditLog] Could not find type change for channel create');
            switch (_.newValue) {
                case R.d4z.GUILD_STAGE_VOICE:
                    return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
                case R.d4z.GUILD_VOICE:
                    return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
                case R.d4z.GUILD_CATEGORY:
                    return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
                default:
                    return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE;
            }
        case R.rsA.CHANNEL_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
        case R.rsA.CHANNEL_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
        case R.rsA.CHANNEL_OVERWRITE_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
        case R.rsA.CHANNEL_OVERWRITE_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
        case R.rsA.CHANNEL_OVERWRITE_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
        case R.rsA.MEMBER_KICK:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
        case R.rsA.MEMBER_PRUNE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
        case R.rsA.MEMBER_BAN_ADD:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
        case R.rsA.MEMBER_BAN_REMOVE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
        case R.rsA.MEMBER_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
        case R.rsA.MEMBER_ROLE_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
        case R.rsA.MEMBER_MOVE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
        case R.rsA.MEMBER_DISCONNECT:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
        case R.rsA.BOT_ADD:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
        case R.rsA.ROLE_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
        case R.rsA.ROLE_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
        case R.rsA.ROLE_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
        case R.rsA.INVITE_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
        case R.rsA.INVITE_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
        case R.rsA.INVITE_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
        case R.rsA.WEBHOOK_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
        case R.rsA.WEBHOOK_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
        case R.rsA.WEBHOOK_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
        case R.rsA.EMOJI_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
        case R.rsA.EMOJI_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
        case R.rsA.EMOJI_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
        case R.rsA.STICKER_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
        case R.rsA.STICKER_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
        case R.rsA.STICKER_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
        case R.rsA.MESSAGE_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
        case R.rsA.MESSAGE_BULK_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
        case R.rsA.MESSAGE_PIN:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
        case R.rsA.MESSAGE_UNPIN:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
        case R.rsA.INTEGRATION_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
        case R.rsA.INTEGRATION_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
        case R.rsA.INTEGRATION_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
        case R.rsA.STAGE_INSTANCE_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
        case R.rsA.STAGE_INSTANCE_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
        case R.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
        case R.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
        case R.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
        case R.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
        case R.rsA.THREAD_CREATE:
            let E = null != e.changes ? e.changes.find((e) => e.key === R.zUn.TYPE) : null;
            if (null == E) throw Error('[AuditLog] Could not find type change for thread create');
            switch (E.newValue) {
                case R.d4z.PRIVATE_THREAD:
                    return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
                case R.d4z.ANNOUNCEMENT_THREAD:
                    return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
                default:
                    return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE;
            }
        case R.rsA.THREAD_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
        case R.rsA.THREAD_DELETE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
        case R.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
        case R.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
        case R.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
        case R.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
        case R.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return c.Z.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
        case R.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return c.Z.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
        default:
            return null;
    }
}
function X(e) {
    var _;
    let E = null == e ? void 0 : null === (_ = e.changes) || void 0 === _ ? void 0 : _.find((e) => 'reason' === e.key);
    return null != E ? E.newValue : null;
}
function J(e, _) {
    switch (e) {
        case R.Plq.CREATE_INSTANT_INVITE:
            return c.Z.Messages.CREATE_INSTANT_INVITE;
        case R.Plq.KICK_MEMBERS:
            return c.Z.Messages.KICK_MEMBERS;
        case R.Plq.BAN_MEMBERS:
            return c.Z.Messages.BAN_MEMBERS;
        case R.Plq.ADMINISTRATOR:
            return c.Z.Messages.ADMINISTRATOR;
        case R.Plq.MANAGE_CHANNELS:
            if (_.targetType === R.KFR.CHANNEL || _.targetType === R.KFR.CHANNEL_OVERWRITE) return c.Z.Messages.MANAGE_CHANNEL;
            return c.Z.Messages.MANAGE_CHANNELS;
        case R.Plq.MANAGE_GUILD:
            return c.Z.Messages.MANAGE_SERVER;
        case R.Plq.VIEW_GUILD_ANALYTICS:
            return c.Z.Messages.VIEW_GUILD_ANALYTICS;
        case R.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return c.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
        case R.Plq.CHANGE_NICKNAME:
            return c.Z.Messages.CHANGE_NICKNAME;
        case R.Plq.MANAGE_NICKNAMES:
            return c.Z.Messages.MANAGE_NICKNAMES;
        case R.Plq.MANAGE_ROLES:
            return c.Z.Messages.MANAGE_ROLES;
        case R.Plq.MANAGE_WEBHOOKS:
            return c.Z.Messages.MANAGE_WEBHOOKS;
        case R.Plq.CREATE_GUILD_EXPRESSIONS:
            return c.Z.Messages.CREATE_EXPRESSIONS;
        case R.Plq.MANAGE_GUILD_EXPRESSIONS:
            return c.Z.Messages.MANAGE_EXPRESSIONS;
        case R.Plq.VIEW_AUDIT_LOG:
            return c.Z.Messages.VIEW_AUDIT_LOG;
        case R.Plq.VIEW_CHANNEL:
            return c.Z.Messages.VIEW_CHANNEL;
        case R.Plq.SEND_MESSAGES:
            return c.Z.Messages.SEND_MESSAGES;
        case R.Plq.SEND_TTS_MESSAGES:
            return c.Z.Messages.SEND_TTS_MESSAGES;
        case R.Plq.USE_APPLICATION_COMMANDS:
            return c.Z.Messages.USE_APPLICATION_COMMANDS;
        case R.Plq.MANAGE_MESSAGES:
            return c.Z.Messages.MANAGE_MESSAGES;
        case R.Plq.EMBED_LINKS:
            return c.Z.Messages.EMBED_LINKS;
        case R.Plq.ATTACH_FILES:
            return c.Z.Messages.ATTACH_FILES;
        case R.Plq.READ_MESSAGE_HISTORY:
            return c.Z.Messages.READ_MESSAGE_HISTORY;
        case R.Plq.MENTION_EVERYONE:
            return c.Z.Messages.MENTION_EVERYONE;
        case R.Plq.USE_EXTERNAL_EMOJIS:
            return c.Z.Messages.USE_EXTERNAL_EMOJIS;
        case R.Plq.USE_EXTERNAL_STICKERS:
            return c.Z.Messages.USE_EXTERNAL_STICKERS;
        case R.Plq.ADD_REACTIONS:
            return c.Z.Messages.ADD_REACTIONS;
        case R.Plq.CONNECT:
            return c.Z.Messages.CONNECT;
        case R.Plq.SPEAK:
            return c.Z.Messages.SPEAK;
        case R.Plq.MUTE_MEMBERS:
            return c.Z.Messages.MUTE_MEMBERS;
        case R.Plq.DEAFEN_MEMBERS:
            return c.Z.Messages.DEAFEN_MEMBERS;
        case R.Plq.MOVE_MEMBERS:
            return c.Z.Messages.MOVE_MEMBERS;
        case R.Plq.USE_VAD:
            return c.Z.Messages.USE_VAD;
        case R.Plq.PRIORITY_SPEAKER:
            return c.Z.Messages.PRIORITY_SPEAKER;
        case R.Plq.STREAM:
            return c.Z.Messages.VIDEO;
        case R.Plq.REQUEST_TO_SPEAK:
            return c.Z.Messages.REQUEST_TO_SPEAK;
        case R.Plq.CREATE_EVENTS:
            return c.Z.Messages.CREATE_EVENTS;
        case R.Plq.MANAGE_EVENTS:
            return c.Z.Messages.MANAGE_EVENTS;
        case R.Plq.CREATE_PUBLIC_THREADS:
            return c.Z.Messages.CREATE_PUBLIC_THREADS;
        case R.Plq.CREATE_PRIVATE_THREADS:
            return c.Z.Messages.CREATE_PRIVATE_THREADS;
        case R.Plq.SEND_MESSAGES_IN_THREADS:
            return c.Z.Messages.SEND_MESSAGES_IN_THREADS;
        case R.Plq.MANAGE_THREADS:
            return c.Z.Messages.MANAGE_THREADS;
        case R.Plq.MODERATE_MEMBERS:
            return c.Z.Messages.MODERATE_MEMBER;
        case R.Plq.SET_VOICE_CHANNEL_STATUS:
            return c.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE;
    }
    return null;
}
function Q(e, _) {
    if (null == _) return [];
    let E = [];
    return (
        e.forEach((e) => {
            let s = (function (e, _) {
                    switch (e.targetType) {
                        case R.KFR.GUILD:
                            return _;
                        case R.KFR.CHANNEL:
                        case R.KFR.CHANNEL_OVERWRITE:
                            return e_(
                                e,
                                R.zUn.NAME,
                                (e) => U.Z.getChannel(e),
                                (e) => (0, r.F6)(e, o.default, G.Z, !0)
                            );
                        case R.KFR.USER:
                            return e_(e, R.zUn.NICK, (e) => o.default.getUser(e), void 0);
                        case R.KFR.ROLE:
                            return e_(
                                e,
                                R.zUn.NAME,
                                (e) => O.Z.getRole(_.id, e),
                                (e) => e.name
                            );
                        case R.KFR.INVITE:
                            return e_(e, R.zUn.CODE, R.VqG);
                        case R.KFR.INTEGRATION:
                            return e_(
                                e,
                                R.zUn.TYPE,
                                (e) => S.Z.integrations.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case R.KFR.WEBHOOK:
                            return e_(
                                e,
                                R.zUn.NAME,
                                (e) => S.Z.webhooks.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case R.KFR.EMOJI:
                            return e_(
                                e,
                                R.zUn.NAME,
                                (e) => N.ZP.getGuildEmoji(_.id).find((_) => _.id === e),
                                (e) => e.name
                            );
                        case R.KFR.STICKER:
                            return e_(
                                e,
                                R.zUn.NAME,
                                (e) => D.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case R.KFR.STAGE_INSTANCE:
                            return e_(
                                e,
                                R.zUn.TOPIC,
                                (e) => {
                                    var E;
                                    return null === (E = Object.values(l.Z.getStageInstancesByGuild(_.id))) || void 0 === E ? void 0 : E.find((_) => _.id === e);
                                },
                                (e) => e.topic
                            );
                        case R.KFR.GUILD_SCHEDULED_EVENT:
                            return e_(
                                e,
                                R.zUn.NAME,
                                (e) => S.Z.guildScheduledEvents.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case R.KFR.THREAD:
                            return e_(
                                e,
                                R.zUn.NAME,
                                (e) => S.Z.threads.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case R.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let _ = S.Z.integrations.find((_) => _.application_id === e.targetId);
                                if (null != _) return _.name;
                                return e.targetId;
                            }
                            return e_(
                                e,
                                R.zUn.NAME,
                                (e) => S.Z.applicationCommands.find((_) => _.id === e),
                                (e) => {
                                    let _ = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.yU.CHAT ? '/\u2060'.concat(_) : _;
                                }
                            );
                        default:
                            return C.warn('Unknown targetType for log', e), null;
                    }
                })(e, _),
                I = o.default.getUser(e.userId);
            if (null != I && (null != s || e.action === R.rsA.MEMBER_PRUNE || e.action === R.rsA.MEMBER_DISCONNECT || e.action === R.rsA.MEMBER_MOVE || e.action === R.rsA.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === R.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', I)).set('target', s)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let s = { ...e.options };
                                switch (e.options.type) {
                                    case R.jwA.USER:
                                        var _, E;
                                        (null === (_ = e.options) || void 0 === _ ? void 0 : _.id) != null &&
                                            (s.subtarget = eE(
                                                null == e ? void 0 : null === (E = e.options) || void 0 === E ? void 0 : E.id,
                                                (e) => o.default.getUser(e),
                                                (e) => e.tag
                                            ));
                                        break;
                                    case R.jwA.ROLE:
                                        null != e.options.role_name && (s.subtarget = eE(e.options.role_name, R.VqG));
                                }
                                return null != e.options.channel_id && (s.channel = e_(e, '', (e) => U.Z.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (s.count = e.options.members_removed), s;
                            }
                            return e.options;
                        })(e)
                    )).changes
                ) {
                    let E = [];
                    e.changes.forEach((s) => {
                        let I = (function (e, _, E) {
                            if (_.action === R.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let _ = e.newValue || e.oldValue;
                                switch (_.type) {
                                    case R.ecB.ROLE:
                                        e.subtarget = eE(
                                            _.id,
                                            (e) => O.Z.getRole(E.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case R.ecB.USER:
                                        e.subtarget = eE(
                                            _.id,
                                            (e) => o.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case R.ecB.CHANNEL:
                                        _.id === T()(E.id).subtract(1).toString()
                                            ? (e.subtarget = c.Z.Messages.ALL_CHANNELS)
                                            : (e.subtarget = eE(
                                                  _.id,
                                                  (e) => U.Z.getChannel(e),
                                                  (e) => (0, r.F6)(e, o.default, G.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case R.zUn.OWNER_ID:
                                    return ee(e, (e) => o.default.getUser(e));
                                case R.zUn.CHANNEL_ID:
                                case R.zUn.AFK_CHANNEL_ID:
                                case R.zUn.SYSTEM_CHANNEL_ID:
                                case R.zUn.RULES_CHANNEL_ID:
                                case R.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return ee(
                                        e,
                                        (e) => U.Z.getChannel(e),
                                        (e) => (0, r.F6)(e, o.default, G.Z, !0)
                                    );
                                case R.zUn.AFK_TIMEOUT:
                                    return ee(e, (e) => e / 60);
                                case R.zUn.BITRATE:
                                    return ee(e, (e) => e / 1000);
                                case R.zUn.COLOR:
                                    return ee(e, (e) => (0, n.Rf)(e).toUpperCase());
                                case R.zUn.MAX_AGE:
                                    return ee(e, (e) => {
                                        let _ = i.ZP.getMaxAgeOptions.find((_) => {
                                            let { value: E } = _;
                                            return e === E;
                                        });
                                        return _ ? _.label : e;
                                    });
                                case R.zUn.PERMISSIONS: {
                                    let _ = [],
                                        { added: E, removed: s } = $(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let e = new L.ms(R.zUn.PERMISSIONS_GRANTED, null, E);
                                        _.push(e);
                                    }
                                    if (s.length > 0) {
                                        let e = new L.ms(R.zUn.PERMISSIONS_DENIED, null, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case R.zUn.PERMISSIONS_GRANTED:
                                case R.zUn.PERMISSIONS_DENIED: {
                                    let _ = [],
                                        { added: E, removed: s } = $(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new L.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let e = new L.ms(R.zUn.PERMISSIONS_RESET, s, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case R.zUn.PREFERRED_LOCALE:
                                    return ee(e, (e) => {
                                        let _ = c.Z.getAvailableLocales().find((_) => _.value === e);
                                        return null != _ ? _.name : null;
                                    });
                                case R.zUn.VIDEO_QUALITY_MODE:
                                    return ee(e, (e) => (e === R.Ucd.FULL ? c.Z.Messages.VIDEO_QUALITY_MODE_FULL : c.Z.Messages.VIDEO_QUALITY_MODE_AUTO));
                                case R.zUn.SYSTEM_CHANNEL_FLAGS:
                                    return (function (e) {
                                        let _ = {
                                                [R.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: R.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                                [R.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: R.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                                [R.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: R.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                                [R.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: R.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                            },
                                            E = [];
                                        return (
                                            Object.values(R.xmn).forEach((s) => {
                                                let T = (e.oldValue & s) === s,
                                                    I = (e.newValue & s) === s;
                                                if (T === I) return;
                                                let n = new L.ms(_[s], !T, !I);
                                                E.push(n);
                                            }),
                                            E
                                        );
                                    })(e);
                            }
                            return e;
                        })(s, e, _);
                        Array.isArray(I) ? I.forEach((e) => E.push(e)) : E.push(I);
                    }),
                        (e = e.set('changes', E));
                }
                E.push(e);
            }
        }),
        E
    );
}
function $(e, _) {
    let E = I.vB('string' == typeof e ? e : 0),
        s = I.vB('string' == typeof _ ? _ : 0),
        T = I.Od(s, E),
        n = I.Od(E, s),
        t = [],
        A = [],
        r = { ...R.Plq };
    for (let e in r) {
        let _ = r[e];
        I.e$(T, _) && t.push(_), I.e$(n, _) && A.push(_);
    }
    return {
        added: t,
        removed: A
    };
}
function ee(e, _, E) {
    let s = e.newValue,
        T = e.oldValue;
    return null != e.newValue && ((s = _(e.newValue)), null != E && null != s && (s = E(s))), null != e.oldValue && ((T = _(e.oldValue)), null != E && null != T && (T = E(T))), new L.ms(e.key, T || e.oldValue, s || e.newValue);
}
function e_(e, _, E, s, T) {
    let I = null,
        n = E((T = null != T ? T : e.targetId));
    if ((null != n && null != s && (I = s(n)), null == I && null != n && (I = n), null == I)) {
        let _ = S.Z.deletedTargets[e.targetType];
        null != _ && null != _[T] && (I = _[T]);
    }
    if (null == I && null != e.changes) {
        let E = e.changes.find((e) => e.key === _);
        null != E && (I = E.newValue || E.oldValue);
    }
    return I || T;
}
function eE(e, _, E) {
    let s = e,
        T = _(e);
    return null != T && null != E && (s = E(T)), s;
}
function es(e, _) {
    return (E) => (null == E.oldValue ? e : _);
}
function eT(e, _) {
    return (E) => (null == E.newValue ? e : _);
}
function eI(e, _, E, s) {
    return (T) => {
        if (null != T.newValue && null != T.oldValue) return e;
        if (null != T.newValue) return _;
        if (null != T.oldValue) return E;
        return s;
    };
}
