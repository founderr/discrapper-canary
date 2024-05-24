"use strict";
s.r(t), s.d(t, {
  ChannelChangeStrings: function() {
    return h
  },
  CommandPermissionChangeStrings: function() {
    return x
  },
  DEFAULT_FOR_STRINGS_KEY: function() {
    return M
  },
  EmojiChangeStrings: function() {
    return v
  },
  GuildChangeStrings: function() {
    return R
  },
  GuildScheduledEventChangeStrings: function() {
    return F
  },
  IntegrationChangeStrings: function() {
    return V
  },
  InviteChangeStrings: function() {
    return P
  },
  NotRenderedChanges: function() {
    return b
  },
  RoleChangeStrings: function() {
    return y
  },
  StageInstanceChangeStrings: function() {
    return B
  },
  StickerChangeStrings: function() {
    return H
  },
  ThreadChangeStrings: function() {
    return K
  },
  UserChangeStrings: function() {
    return p
  },
  WebhookChangeStrings: function() {
    return m
  },
  getChangeTitle: function() {
    return Z
  },
  getSimpleAuditLogChangeDetails: function() {
    return X
  },
  getSimpleAuditLogTitleContextFromChange: function() {
    return W
  },
  getSimpleAuditLogTitleFromChange: function() {
    return k
  },
  getStringForBanReason: function() {
    return z
  },
  getStringForPermission: function() {
    return Q
  },
  transformLogs: function() {
    return q
  }
}), s("411104"), s("653041");
var E = s("654861"),
  _ = s.n(E),
  a = s("149765"),
  n = s("866442"),
  T = s("144830"),
  i = s("911969"),
  u = s("933557"),
  A = s("710845"),
  l = s("339085"),
  I = s("987707"),
  r = s("427679"),
  o = s("926491"),
  L = s("387667"),
  d = s("592125"),
  N = s("430824"),
  S = s("699516"),
  g = s("594174"),
  D = s("971130"),
  c = s("709054"),
  O = s("981631"),
  G = s("765305"),
  C = s("689938");
let U = new A.default("AuditLogUtils"),
  M = -1,
  f = () => ({
    [O.AuditLogChangeKeys.REASON]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  R = () => ({
    [O.AuditLogChangeKeys.NAME]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [O.AuditLogChangeKeys.DESCRIPTION]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [O.AuditLogChangeKeys.ICON_HASH]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [O.AuditLogChangeKeys.SPLASH_HASH]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [O.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [O.AuditLogChangeKeys.BANNER_HASH]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [O.AuditLogChangeKeys.OWNER_ID]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [O.AuditLogChangeKeys.REGION]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [O.AuditLogChangeKeys.PREFERRED_LOCALE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [O.AuditLogChangeKeys.AFK_CHANNEL_ID]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.AFK_TIMEOUT]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.RULES_CHANNEL_ID]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.MFA_LEVEL]: {
      [O.MFALevels.NONE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [O.MFALevels.ELEVATED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [O.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [O.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [O.VerificationLevels.NONE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [O.VerificationLevels.LOW]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [O.VerificationLevels.MEDIUM]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [O.VerificationLevels.HIGH]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [O.VerificationLevels.VERY_HIGH]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [O.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [O.UserNotificationSettings.ALL_MESSAGES]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [O.UserNotificationSettings.ONLY_MENTIONS]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [O.AuditLogChangeKeys.VANITY_URL_CODE]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [O.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [O.GuildExplicitContentFilterTypes.DISABLED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [O.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [O.GuildExplicitContentFilterTypes.ALL_MEMBERS]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [O.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [O.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...f()
  }),
  h = () => ({
    [O.AuditLogChangeKeys.NAME]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [O.AuditLogChangeKeys.POSITION]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [O.AuditLogChangeKeys.TOPIC]: ea(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [O.AuditLogChangeKeys.BITRATE]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [O.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: ea(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [O.AuditLogChangeKeys.USER_LIMIT]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [O.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [O.AuditLogChangeKeys.PERMISSIONS_RESET]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [O.AuditLogChangeKeys.PERMISSIONS_GRANTED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [O.AuditLogChangeKeys.PERMISSIONS_DENIED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [O.AuditLogChangeKeys.REASON]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [O.AuditLogChangeKeys.NSFW]: {
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [O.AuditLogChangeKeys.TYPE]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [O.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [O.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
  }),
  p = () => ({
    [O.AuditLogChangeKeys.NICK]: ea(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [O.AuditLogChangeKeys.DEAF]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [O.AuditLogChangeKeys.MUTE]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [O.AuditLogChangeKeys.ROLES_REMOVE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [O.AuditLogChangeKeys.ROLES_ADD]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [O.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [O.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: ea(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [O.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [O.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...f()
  }),
  y = () => ({
    [O.AuditLogChangeKeys.NAME]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [O.AuditLogChangeKeys.PERMISSIONS_GRANTED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [O.AuditLogChangeKeys.PERMISSIONS_DENIED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [O.AuditLogChangeKeys.COLOR]: {
      "#000000": C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [M]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [O.AuditLogChangeKeys.HOIST]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [O.AuditLogChangeKeys.MENTIONABLE]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [O.AuditLogChangeKeys.ICON_HASH]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [O.AuditLogChangeKeys.UNICODE_EMOJI]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...f()
  }),
  P = () => ({
    [O.AuditLogChangeKeys.CODE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [O.AuditLogChangeKeys.CHANNEL_ID]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [O.AuditLogChangeKeys.MAX_USES]: {
      0: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [M]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [O.AuditLogChangeKeys.MAX_AGE]: {
      0: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [M]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [O.AuditLogChangeKeys.TEMPORARY]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    ...f()
  }),
  m = () => ({
    [O.AuditLogChangeKeys.CHANNEL_ID]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [O.AuditLogChangeKeys.NAME]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [O.AuditLogChangeKeys.AVATAR_HASH]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [O.AuditLogChangeKeys.REASON]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  v = () => ({
    [O.AuditLogChangeKeys.NAME]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...f()
  }),
  H = () => ({
    [O.AuditLogChangeKeys.NAME]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [O.AuditLogChangeKeys.TAGS]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [O.AuditLogChangeKeys.DESCRIPTION]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...f()
  }),
  V = () => ({
    [O.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [O.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [O.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...f()
  }),
  B = () => ({
    [O.AuditLogChangeKeys.TOPIC]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [O.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [G.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [G.GuildScheduledEventPrivacyLevel.PUBLIC]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...f()
  }),
  F = () => ({
    [O.AuditLogChangeKeys.NAME]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [O.AuditLogChangeKeys.DESCRIPTION]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [O.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [G.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [G.GuildScheduledEventPrivacyLevel.PUBLIC]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [O.AuditLogChangeKeys.STATUS]: {
      [G.GuildScheduledEventStatus.SCHEDULED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [G.GuildScheduledEventStatus.ACTIVE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [G.GuildScheduledEventStatus.COMPLETED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [G.GuildScheduledEventStatus.CANCELED]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [O.AuditLogChangeKeys.ENTITY_TYPE]: {
      [G.GuildScheduledEventEntityTypes.NONE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [G.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [G.GuildScheduledEventEntityTypes.VOICE]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [G.GuildScheduledEventEntityTypes.EXTERNAL]: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [O.AuditLogChangeKeys.CHANNEL_ID]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [O.AuditLogChangeKeys.LOCATION]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [O.AuditLogChangeKeys.RECURRENCE_RULE]: e_(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
    ...f()
  }),
  K = () => ({
    [O.AuditLogChangeKeys.NAME]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [O.AuditLogChangeKeys.ARCHIVED]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [O.AuditLogChangeKeys.LOCKED]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [O.AuditLogChangeKeys.INVITABLE]: {
      true: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [O.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [O.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eE(C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    ...f()
  }),
  x = e => {
    let t = {
      ...f()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  b = {
    [O.AuditLogTargetTypes.CHANNEL]: {
      [O.AuditLogChangeKeys.ID]: !0,
      [O.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [O.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [O.AuditLogChangeKeys.TYPE]: !0,
      [O.AuditLogChangeKeys.ID]: !0,
      [O.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [O.AuditLogTargetTypes.INVITE]: {
      [O.AuditLogChangeKeys.INVITER_ID]: !0,
      [O.AuditLogChangeKeys.USES]: !0
    },
    [O.AuditLogTargetTypes.WEBHOOK]: {
      [O.AuditLogChangeKeys.TYPE]: !0,
      [O.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [O.AuditLogTargetTypes.INTEGRATION]: {
      [O.AuditLogChangeKeys.TYPE]: !0
    },
    [O.AuditLogTargetTypes.THREAD]: {
      [O.AuditLogChangeKeys.ID]: !0,
      [O.AuditLogChangeKeys.TYPE]: !0
    },
    [O.AuditLogTargetTypes.STICKER]: {
      [O.AuditLogChangeKeys.ID]: !0,
      [O.AuditLogChangeKeys.TYPE]: !0,
      [O.AuditLogChangeKeys.ASSET]: !0,
      [O.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [O.AuditLogChangeKeys.AVAILABLE]: !0,
      [O.AuditLogChangeKeys.GUILD_ID]: !0
    }
  },
  j = () => [{
    value: O.AuditLogActions.ALL,
    label: C.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: C.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: O.AuditLogActions.GUILD_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: O.AuditLogActions.CHANNEL_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: O.AuditLogActions.CHANNEL_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: O.AuditLogActions.CHANNEL_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: O.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: O.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: O.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: O.AuditLogActions.MEMBER_KICK,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: O.AuditLogActions.MEMBER_PRUNE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: O.AuditLogActions.MEMBER_BAN_ADD,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: O.AuditLogActions.MEMBER_BAN_REMOVE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: O.AuditLogActions.MEMBER_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: O.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: O.AuditLogActions.MEMBER_MOVE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: O.AuditLogActions.MEMBER_DISCONNECT,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: O.AuditLogActions.BOT_ADD,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: O.AuditLogActions.THREAD_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: O.AuditLogActions.THREAD_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: O.AuditLogActions.THREAD_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: O.AuditLogActions.ROLE_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: O.AuditLogActions.ROLE_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: O.AuditLogActions.ROLE_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: O.AuditLogActions.INVITE_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: O.AuditLogActions.INVITE_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: O.AuditLogActions.INVITE_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: O.AuditLogActions.WEBHOOK_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: O.AuditLogActions.WEBHOOK_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: O.AuditLogActions.WEBHOOK_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: O.AuditLogActions.EMOJI_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: O.AuditLogActions.EMOJI_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: O.AuditLogActions.EMOJI_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: O.AuditLogActions.MESSAGE_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: O.AuditLogActions.MESSAGE_BULK_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: O.AuditLogActions.MESSAGE_PIN,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: O.AuditLogActions.MESSAGE_UNPIN,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: O.AuditLogActions.INTEGRATION_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: O.AuditLogActions.INTEGRATION_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: O.AuditLogActions.INTEGRATION_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: O.AuditLogActions.STICKER_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: O.AuditLogActions.STICKER_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: O.AuditLogActions.STICKER_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: O.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: O.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: O.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: O.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: O.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: O.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: O.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: O.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: O.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_FLAG_TO_CHANNEL
  }, {
    value: O.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_TIMEOUT
  }, {
    value: O.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER,
    label: C.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_QUARANTINE
  }];

function w(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function k(e) {
  let t = j().find(t => t.value === e.action),
    s = w(O.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e);
  switch (!0) {
    case null != s:
      return C.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED;
    case null != t:
      var E;
      return null !== (E = null == t ? void 0 : t.label) && void 0 !== E ? E : null;
    default:
      return null
  }
}
let Y = {
  [T.TimeUnits.SECONDS]: e => C.default.Messages.DURATION_SECONDS.format({
    seconds: e
  }),
  [T.TimeUnits.MINUTES]: e => C.default.Messages.DURATION_MINUTES.format({
    minutes: e
  }),
  [T.TimeUnits.HOURS]: e => C.default.Messages.DURATION_HOURS.format({
    hours: e
  }),
  [T.TimeUnits.DAYS]: e => C.default.Messages.DURATION_DAYS.format({
    days: e
  })
};

function W(e) {
  let t = w(O.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e),
    s = J(O.AuditLogChangeKeys.ROLES_ADD, e).length > 0,
    E = J(O.AuditLogChangeKeys.ROLES_REMOVE, e).length > 0;
  switch (!0) {
    case null != t:
      if ((null == t ? void 0 : t.newValue) != null) {
        let s = new Date(null == t ? void 0 : t.newValue).getTime(),
          E = c.default.extractTimestamp(e.id),
          _ = [T.TimeUnits.DAYS, T.TimeUnits.HOURS, T.TimeUnits.MINUTES, T.TimeUnits.SECONDS],
          a = (0, T.getTimeAndUnit)(Math.round((s - E) / 1e3 / 60), _);
        if (null == a.unit || null == a.time) return null;
        if (a.unit in Y) return Y[a.unit](a.time);
        return null
      }
      if ((null == t ? void 0 : t.oldValue) != null) return C.default.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
      return null;
    case s && E:
      return C.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    case s:
      return C.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    case E:
      return C.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    default:
      return null
  }
}

function J(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function X(e) {
  let t = J(O.AuditLogChangeKeys.ROLES_ADD, e),
    s = J(O.AuditLogChangeKeys.ROLES_REMOVE, e),
    E = null == t ? void 0 : t.map(e => {
      let {
        newValue: t
      } = e;
      return null == t ? void 0 : t.map(e => {
        let {
          name: t
        } = e;
        return t
      }).join(", ")
    }).join(", "),
    _ = null == s ? void 0 : s.map(e => {
      let {
        newValue: t
      } = e;
      return null == t ? void 0 : t.map(e => {
        let {
          name: t
        } = e;
        return t
      }).join(", ")
    }).join(", ");
  switch (!0) {
    case t.length > 0 && s.length > 0:
      return C.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
        roleNamesAdded: E,
        roleNamesRemoved: _
      });
    case t.length > 0:
      return C.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({
        roleNames: E
      });
    case s.length > 0:
      return C.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({
        roleNames: _
      });
    default:
      return null
  }
}

function Z(e) {
  switch (e.action) {
    case O.AuditLogActions.GUILD_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case O.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === O.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case O.ChannelTypes.GUILD_STAGE_VOICE:
          return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case O.ChannelTypes.GUILD_VOICE:
          return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case O.ChannelTypes.GUILD_CATEGORY:
          return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case O.AuditLogActions.CHANNEL_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case O.AuditLogActions.CHANNEL_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case O.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case O.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case O.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case O.AuditLogActions.MEMBER_KICK:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case O.AuditLogActions.MEMBER_PRUNE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case O.AuditLogActions.MEMBER_BAN_ADD:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
    case O.AuditLogActions.MEMBER_BAN_REMOVE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case O.AuditLogActions.MEMBER_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case O.AuditLogActions.MEMBER_ROLE_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case O.AuditLogActions.MEMBER_MOVE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case O.AuditLogActions.MEMBER_DISCONNECT:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case O.AuditLogActions.BOT_ADD:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case O.AuditLogActions.ROLE_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case O.AuditLogActions.ROLE_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case O.AuditLogActions.ROLE_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case O.AuditLogActions.INVITE_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case O.AuditLogActions.INVITE_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case O.AuditLogActions.INVITE_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case O.AuditLogActions.WEBHOOK_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case O.AuditLogActions.WEBHOOK_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case O.AuditLogActions.WEBHOOK_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case O.AuditLogActions.EMOJI_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case O.AuditLogActions.EMOJI_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case O.AuditLogActions.EMOJI_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case O.AuditLogActions.STICKER_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case O.AuditLogActions.STICKER_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case O.AuditLogActions.STICKER_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case O.AuditLogActions.MESSAGE_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case O.AuditLogActions.MESSAGE_BULK_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case O.AuditLogActions.MESSAGE_PIN:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case O.AuditLogActions.MESSAGE_UNPIN:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case O.AuditLogActions.INTEGRATION_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case O.AuditLogActions.INTEGRATION_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case O.AuditLogActions.INTEGRATION_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case O.AuditLogActions.STAGE_INSTANCE_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case O.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case O.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case O.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
    case O.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
    case O.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
    case O.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === O.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case O.ChannelTypes.PRIVATE_THREAD:
          return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
        case O.ChannelTypes.ANNOUNCEMENT_THREAD:
          return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE
      }
    case O.AuditLogActions.THREAD_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
    case O.AuditLogActions.THREAD_DELETE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
    case O.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case O.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case O.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case O.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return C.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case O.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return C.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case O.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return C.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    default:
      return null
  }
}

function z(e) {
  var t;
  let s = null == e ? void 0 : null === (t = e.changes) || void 0 === t ? void 0 : t.find(e => "reason" === e.key);
  return null != s ? s.newValue : null
}

function Q(e, t) {
  switch (e) {
    case O.Permissions.CREATE_INSTANT_INVITE:
      return C.default.Messages.CREATE_INSTANT_INVITE;
    case O.Permissions.KICK_MEMBERS:
      return C.default.Messages.KICK_MEMBERS;
    case O.Permissions.BAN_MEMBERS:
      return C.default.Messages.BAN_MEMBERS;
    case O.Permissions.ADMINISTRATOR:
      return C.default.Messages.ADMINISTRATOR;
    case O.Permissions.MANAGE_CHANNELS:
      if (t.targetType === O.AuditLogTargetTypes.CHANNEL || t.targetType === O.AuditLogTargetTypes.CHANNEL_OVERWRITE) return C.default.Messages.MANAGE_CHANNEL;
      return C.default.Messages.MANAGE_CHANNELS;
    case O.Permissions.MANAGE_GUILD:
      return C.default.Messages.MANAGE_SERVER;
    case O.Permissions.VIEW_GUILD_ANALYTICS:
      return C.default.Messages.VIEW_GUILD_ANALYTICS;
    case O.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return C.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
    case O.Permissions.CHANGE_NICKNAME:
      return C.default.Messages.CHANGE_NICKNAME;
    case O.Permissions.MANAGE_NICKNAMES:
      return C.default.Messages.MANAGE_NICKNAMES;
    case O.Permissions.MANAGE_ROLES:
      return C.default.Messages.MANAGE_ROLES;
    case O.Permissions.MANAGE_WEBHOOKS:
      return C.default.Messages.MANAGE_WEBHOOKS;
    case O.Permissions.CREATE_GUILD_EXPRESSIONS:
      return C.default.Messages.CREATE_EXPRESSIONS;
    case O.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return C.default.Messages.MANAGE_EXPRESSIONS;
    case O.Permissions.VIEW_AUDIT_LOG:
      return C.default.Messages.VIEW_AUDIT_LOG;
    case O.Permissions.VIEW_CHANNEL:
      return C.default.Messages.READ_MESSAGES;
    case O.Permissions.SEND_MESSAGES:
      return C.default.Messages.SEND_MESSAGES;
    case O.Permissions.SEND_TTS_MESSAGES:
      return C.default.Messages.SEND_TTS_MESSAGES;
    case O.Permissions.USE_APPLICATION_COMMANDS:
      return C.default.Messages.USE_APPLICATION_COMMANDS;
    case O.Permissions.MANAGE_MESSAGES:
      return C.default.Messages.MANAGE_MESSAGES;
    case O.Permissions.EMBED_LINKS:
      return C.default.Messages.EMBED_LINKS;
    case O.Permissions.ATTACH_FILES:
      return C.default.Messages.ATTACH_FILES;
    case O.Permissions.READ_MESSAGE_HISTORY:
      return C.default.Messages.READ_MESSAGE_HISTORY;
    case O.Permissions.MENTION_EVERYONE:
      return C.default.Messages.MENTION_EVERYONE;
    case O.Permissions.USE_EXTERNAL_EMOJIS:
      return C.default.Messages.USE_EXTERNAL_EMOJIS;
    case O.Permissions.USE_EXTERNAL_STICKERS:
      return C.default.Messages.USE_EXTERNAL_STICKERS;
    case O.Permissions.ADD_REACTIONS:
      return C.default.Messages.ADD_REACTIONS;
    case O.Permissions.CONNECT:
      return C.default.Messages.CONNECT;
    case O.Permissions.SPEAK:
      return C.default.Messages.SPEAK;
    case O.Permissions.MUTE_MEMBERS:
      return C.default.Messages.MUTE_MEMBERS;
    case O.Permissions.DEAFEN_MEMBERS:
      return C.default.Messages.DEAFEN_MEMBERS;
    case O.Permissions.MOVE_MEMBERS:
      return C.default.Messages.MOVE_MEMBERS;
    case O.Permissions.USE_VAD:
      return C.default.Messages.USE_VAD;
    case O.Permissions.PRIORITY_SPEAKER:
      return C.default.Messages.PRIORITY_SPEAKER;
    case O.Permissions.STREAM:
      return C.default.Messages.VIDEO;
    case O.Permissions.REQUEST_TO_SPEAK:
      return C.default.Messages.REQUEST_TO_SPEAK;
    case O.Permissions.CREATE_EVENTS:
      return C.default.Messages.CREATE_EVENTS;
    case O.Permissions.MANAGE_EVENTS:
      return C.default.Messages.MANAGE_EVENTS;
    case O.Permissions.CREATE_PUBLIC_THREADS:
      return C.default.Messages.CREATE_PUBLIC_THREADS;
    case O.Permissions.CREATE_PRIVATE_THREADS:
      return C.default.Messages.CREATE_PRIVATE_THREADS;
    case O.Permissions.SEND_MESSAGES_IN_THREADS:
      return C.default.Messages.SEND_MESSAGES_IN_THREADS;
    case O.Permissions.MANAGE_THREADS:
      return C.default.Messages.MANAGE_THREADS;
    case O.Permissions.MODERATE_MEMBERS:
      return C.default.Messages.MODERATE_MEMBER;
    case O.Permissions.SET_VOICE_CHANNEL_STATUS:
      return C.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function q(e, t) {
  if (null == t) return [];
  let s = [];
  return e.forEach(e => {
    let E = function(e, t) {
        switch (e.targetType) {
          case O.AuditLogTargetTypes.GUILD:
            return t;
          case O.AuditLogTargetTypes.CHANNEL:
          case O.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return et(e, O.AuditLogChangeKeys.NAME, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0));
          case O.AuditLogTargetTypes.USER:
            return et(e, O.AuditLogChangeKeys.NICK, e => g.default.getUser(e), void 0);
          case O.AuditLogTargetTypes.ROLE:
            return et(e, O.AuditLogChangeKeys.NAME, e => N.default.getRole(t.id, e), e => e.name);
          case O.AuditLogTargetTypes.INVITE:
            return et(e, O.AuditLogChangeKeys.CODE, O.NOOP_NULL);
          case O.AuditLogTargetTypes.INTEGRATION:
            return et(e, O.AuditLogChangeKeys.TYPE, e => I.default.integrations.find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.WEBHOOK:
            return et(e, O.AuditLogChangeKeys.NAME, e => I.default.webhooks.find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.EMOJI:
            return et(e, O.AuditLogChangeKeys.NAME, e => l.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.STICKER:
            return et(e, O.AuditLogChangeKeys.NAME, e => o.default.getStickerById(e), e => e.name);
          case O.AuditLogTargetTypes.STAGE_INSTANCE:
            return et(e, O.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(r.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case O.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
            return et(e, O.AuditLogChangeKeys.NAME, e => I.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.THREAD:
            return et(e, O.AuditLogChangeKeys.NAME, e => I.default.threads.find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = I.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return et(e, O.AuditLogChangeKeys.NAME, e => I.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === i.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          default:
            return U.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = g.default.getUser(e.userId);
    if (null != a && (null != E || e.action === O.AuditLogActions.MEMBER_PRUNE || e.action === O.AuditLogActions.MEMBER_DISCONNECT || e.action === O.AuditLogActions.MEMBER_MOVE || e.action === O.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === O.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", E)).set("options", function(e) {
          if (null != e.options) {
            let E = {
              ...e.options
            };
            switch (e.options.type) {
              case O.AuditLogSubtargetTypes.USER:
                var t, s;
                (null === (t = e.options) || void 0 === t ? void 0 : t.id) != null && (E.subtarget = es(null == e ? void 0 : null === (s = e.options) || void 0 === s ? void 0 : s.id, e => g.default.getUser(e), e => e.tag));
                break;
              case O.AuditLogSubtargetTypes.ROLE:
                null != e.options.role_name && (E.subtarget = es(e.options.role_name, O.NOOP_NULL))
            }
            return null != e.options.channel_id && (E.channel = et(e, "", e => d.default.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (E.count = e.options.members_removed), E
          }
          return e.options
        }(e))).changes) {
        let s = [];
        e.changes.forEach(E => {
          let a = function(e, t, s) {
            if (t.action === O.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case O.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = es(t.id, e => N.default.getRole(s.id, e), e => e.name);
                  break;
                case O.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = es(t.id, e => g.default.getUser(e), e => e.tag);
                  break;
                case O.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === _()(s.id).subtract(1).toString() ? e.subtarget = C.default.Messages.ALL_CHANNELS : e.subtarget = es(t.id, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0))
              }
              return e
            }
            switch (e.key) {
              case O.AuditLogChangeKeys.OWNER_ID:
                return ee(e, e => g.default.getUser(e));
              case O.AuditLogChangeKeys.CHANNEL_ID:
              case O.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case O.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case O.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case O.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return ee(e, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0));
              case O.AuditLogChangeKeys.AFK_TIMEOUT:
                return ee(e, e => e / 60);
              case O.AuditLogChangeKeys.BITRATE:
                return ee(e, e => e / 1e3);
              case O.AuditLogChangeKeys.COLOR:
                return ee(e, e => (0, n.int2hex)(e).toUpperCase());
              case O.AuditLogChangeKeys.MAX_AGE:
                return ee(e, e => {
                  let t = D.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case O.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = $(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new L.AuditLogChange(O.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (E.length > 0) {
                  let e = new L.AuditLogChange(O.AuditLogChangeKeys.PERMISSIONS_DENIED, null, E);
                  t.push(e)
                }
                return t
              }
              case O.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case O.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = $(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let E = new L.AuditLogChange(e.key, null, s);
                  t.push(E)
                }
                if (E.length > 0) {
                  let e = new L.AuditLogChange(O.AuditLogChangeKeys.PERMISSIONS_RESET, E, E);
                  t.push(e)
                }
                return t
              }
              case O.AuditLogChangeKeys.PREFERRED_LOCALE:
                return ee(e, e => {
                  let t = C.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case O.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return ee(e, e => e === O.VideoQualityMode.FULL ? C.default.Messages.VIDEO_QUALITY_MODE_FULL : C.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [O.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [O.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [O.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [O.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(O.SystemChannelFlags).forEach(E => {
                    let _ = (e.oldValue & E) === E,
                      a = (e.newValue & E) === E;
                    if (_ === a) return;
                    let n = new L.AuditLogChange(t[E], !_, !a);
                    s.push(n)
                  }), s
                }(e)
            }
            return e
          }(E, e, t);
          Array.isArray(a) ? a.forEach(e => s.push(e)) : s.push(a)
        }), e = e.set("changes", s)
      }
      s.push(e)
    }
  }), s
}

function $(e, t) {
  let s = a.deserialize("string" == typeof e ? e : 0),
    E = a.deserialize("string" == typeof t ? t : 0),
    _ = a.remove(E, s),
    n = a.remove(s, E),
    T = [],
    i = [],
    u = {
      ...O.Permissions
    };
  for (let e in u) {
    let t = u[e];
    a.has(_, t) && T.push(t), a.has(n, t) && i.push(t)
  }
  return {
    added: T,
    removed: i
  }
}

function ee(e, t, s) {
  let E = e.newValue,
    _ = e.oldValue;
  return null != e.newValue && (E = t(e.newValue), null != s && null != E && (E = s(E))), null != e.oldValue && (_ = t(e.oldValue), null != s && null != _ && (_ = s(_))), new L.AuditLogChange(e.key, _ || e.oldValue, E || e.newValue)
}

function et(e, t, s, E, _) {
  let a = null,
    n = s(_ = null != _ ? _ : e.targetId);
  if (null != n && null != E && (a = E(n)), null == a && null != n && (a = n), null == a) {
    let t = I.default.deletedTargets[e.targetType];
    null != t && null != t[_] && (a = t[_])
  }
  if (null == a && null != e.changes) {
    let s = e.changes.find(e => e.key === t);
    null != s && (a = s.newValue || s.oldValue)
  }
  return a || _
}

function es(e, t, s) {
  let E = e,
    _ = t(e);
  return null != _ && null != s && (E = s(_)), E
}

function eE(e, t) {
  return s => null == s.oldValue ? e : t
}

function e_(e, t) {
  return s => null == s.newValue ? e : t
}

function ea(e, t, s, E) {
  return _ => {
    if (null != _.newValue && null != _.oldValue) return e;
    if (null != _.newValue) return t;
    if (null != _.oldValue) return s;
    return E
  }
}