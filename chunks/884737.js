"use strict";
s.r(t), s.d(t, {
  ChannelChangeStrings: function() {
    return h
  },
  CommandPermissionChangeStrings: function() {
    return j
  },
  DEFAULT_FOR_STRINGS_KEY: function() {
    return M
  },
  EmojiChangeStrings: function() {
    return P
  },
  GuildChangeStrings: function() {
    return R
  },
  GuildScheduledEventChangeStrings: function() {
    return F
  },
  IntegrationChangeStrings: function() {
    return H
  },
  InviteChangeStrings: function() {
    return y
  },
  NotRenderedChanges: function() {
    return b
  },
  RoleChangeStrings: function() {
    return p
  },
  StageInstanceChangeStrings: function() {
    return B
  },
  StickerChangeStrings: function() {
    return x
  },
  ThreadChangeStrings: function() {
    return V
  },
  UserChangeStrings: function() {
    return m
  },
  WebhookChangeStrings: function() {
    return v
  },
  getChangeTitle: function() {
    return J
  },
  getSimpleAuditLogChangeDetails: function() {
    return X
  },
  getSimpleAuditLogTitleContextFromChange: function() {
    return Y
  },
  getSimpleAuditLogTitleFromChange: function() {
    return k
  },
  getStringForBanReason: function() {
    return z
  },
  getStringForPermission: function() {
    return q
  },
  transformLogs: function() {
    return Q
  }
}), s("411104"), s("653041");
var a = s("654861"),
  n = s.n(a),
  i = s("149765"),
  E = s("866442"),
  l = s("144830"),
  _ = s("911969"),
  r = s("933557"),
  u = s("710845"),
  o = s("339085"),
  T = s("776617"),
  d = s("427679"),
  A = s("926491"),
  I = s("387667"),
  L = s("592125"),
  c = s("430824"),
  N = s("699516"),
  S = s("594174"),
  g = s("971130"),
  D = s("709054"),
  C = s("981631"),
  f = s("765305"),
  O = s("689938");
let G = new u.default("AuditLogUtils"),
  M = -1,
  U = () => ({
    [C.AuditLogChangeKeys.REASON]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  R = () => ({
    [C.AuditLogChangeKeys.NAME]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [C.AuditLogChangeKeys.DESCRIPTION]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [C.AuditLogChangeKeys.ICON_HASH]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [C.AuditLogChangeKeys.SPLASH_HASH]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [C.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [C.AuditLogChangeKeys.BANNER_HASH]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [C.AuditLogChangeKeys.OWNER_ID]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [C.AuditLogChangeKeys.REGION]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [C.AuditLogChangeKeys.PREFERRED_LOCALE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [C.AuditLogChangeKeys.AFK_CHANNEL_ID]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [C.AuditLogChangeKeys.AFK_TIMEOUT]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [C.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [C.AuditLogChangeKeys.RULES_CHANNEL_ID]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [C.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [C.AuditLogChangeKeys.MFA_LEVEL]: {
      [C.MFALevels.NONE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [C.MFALevels.ELEVATED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [C.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [C.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [C.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [C.VerificationLevels.NONE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [C.VerificationLevels.LOW]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [C.VerificationLevels.MEDIUM]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [C.VerificationLevels.HIGH]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [C.VerificationLevels.VERY_HIGH]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [C.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [C.UserNotificationSettings.ALL_MESSAGES]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [C.UserNotificationSettings.ONLY_MENTIONS]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [C.AuditLogChangeKeys.VANITY_URL_CODE]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [C.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [C.GuildExplicitContentFilterTypes.DISABLED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [C.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [C.GuildExplicitContentFilterTypes.ALL_MEMBERS]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [C.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [C.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...U()
  }),
  h = () => ({
    [C.AuditLogChangeKeys.NAME]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [C.AuditLogChangeKeys.POSITION]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [C.AuditLogChangeKeys.TOPIC]: ei(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [C.AuditLogChangeKeys.BITRATE]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [C.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: ei(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [C.AuditLogChangeKeys.USER_LIMIT]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [C.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [C.AuditLogChangeKeys.PERMISSIONS_RESET]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [C.AuditLogChangeKeys.PERMISSIONS_GRANTED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [C.AuditLogChangeKeys.PERMISSIONS_DENIED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [C.AuditLogChangeKeys.REASON]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [C.AuditLogChangeKeys.NSFW]: {
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [C.AuditLogChangeKeys.TYPE]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [C.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [C.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
  }),
  m = () => ({
    [C.AuditLogChangeKeys.NICK]: ei(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [C.AuditLogChangeKeys.DEAF]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [C.AuditLogChangeKeys.MUTE]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [C.AuditLogChangeKeys.ROLES_REMOVE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [C.AuditLogChangeKeys.ROLES_ADD]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [C.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [C.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: ei(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [C.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [C.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...U()
  }),
  p = () => ({
    [C.AuditLogChangeKeys.NAME]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [C.AuditLogChangeKeys.PERMISSIONS_GRANTED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [C.AuditLogChangeKeys.PERMISSIONS_DENIED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [C.AuditLogChangeKeys.COLOR]: {
      "#000000": O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [M]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [C.AuditLogChangeKeys.HOIST]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [C.AuditLogChangeKeys.MENTIONABLE]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [C.AuditLogChangeKeys.ICON_HASH]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [C.AuditLogChangeKeys.UNICODE_EMOJI]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...U()
  }),
  y = () => ({
    [C.AuditLogChangeKeys.CODE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [C.AuditLogChangeKeys.CHANNEL_ID]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [C.AuditLogChangeKeys.MAX_USES]: {
      0: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [M]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [C.AuditLogChangeKeys.MAX_AGE]: {
      0: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [M]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [C.AuditLogChangeKeys.TEMPORARY]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    ...U()
  }),
  v = () => ({
    [C.AuditLogChangeKeys.CHANNEL_ID]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [C.AuditLogChangeKeys.NAME]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [C.AuditLogChangeKeys.AVATAR_HASH]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [C.AuditLogChangeKeys.REASON]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  P = () => ({
    [C.AuditLogChangeKeys.NAME]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...U()
  }),
  x = () => ({
    [C.AuditLogChangeKeys.NAME]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [C.AuditLogChangeKeys.TAGS]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [C.AuditLogChangeKeys.DESCRIPTION]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...U()
  }),
  H = () => ({
    [C.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [C.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [C.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...U()
  }),
  B = () => ({
    [C.AuditLogChangeKeys.TOPIC]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [C.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [f.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [f.GuildScheduledEventPrivacyLevel.PUBLIC]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...U()
  }),
  F = () => ({
    [C.AuditLogChangeKeys.NAME]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [C.AuditLogChangeKeys.DESCRIPTION]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [C.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [f.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [f.GuildScheduledEventPrivacyLevel.PUBLIC]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [C.AuditLogChangeKeys.STATUS]: {
      [f.GuildScheduledEventStatus.SCHEDULED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [f.GuildScheduledEventStatus.ACTIVE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [f.GuildScheduledEventStatus.COMPLETED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [f.GuildScheduledEventStatus.CANCELED]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [C.AuditLogChangeKeys.ENTITY_TYPE]: {
      [f.GuildScheduledEventEntityTypes.NONE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [f.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [f.GuildScheduledEventEntityTypes.VOICE]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [f.GuildScheduledEventEntityTypes.EXTERNAL]: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [C.AuditLogChangeKeys.CHANNEL_ID]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [C.AuditLogChangeKeys.LOCATION]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [C.AuditLogChangeKeys.RECURRENCE_RULE]: en(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
    ...U()
  }),
  V = () => ({
    [C.AuditLogChangeKeys.NAME]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [C.AuditLogChangeKeys.ARCHIVED]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [C.AuditLogChangeKeys.LOCKED]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [C.AuditLogChangeKeys.INVITABLE]: {
      true: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [C.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [C.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: ea(O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    ...U()
  }),
  j = e => {
    let t = {
      ...U()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  b = {
    [C.AuditLogTargetTypes.CHANNEL]: {
      [C.AuditLogChangeKeys.ID]: !0,
      [C.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [C.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [C.AuditLogChangeKeys.TYPE]: !0,
      [C.AuditLogChangeKeys.ID]: !0,
      [C.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [C.AuditLogTargetTypes.INVITE]: {
      [C.AuditLogChangeKeys.INVITER_ID]: !0,
      [C.AuditLogChangeKeys.USES]: !0
    },
    [C.AuditLogTargetTypes.WEBHOOK]: {
      [C.AuditLogChangeKeys.TYPE]: !0,
      [C.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [C.AuditLogTargetTypes.INTEGRATION]: {
      [C.AuditLogChangeKeys.TYPE]: !0
    },
    [C.AuditLogTargetTypes.THREAD]: {
      [C.AuditLogChangeKeys.ID]: !0,
      [C.AuditLogChangeKeys.TYPE]: !0
    },
    [C.AuditLogTargetTypes.STICKER]: {
      [C.AuditLogChangeKeys.ID]: !0,
      [C.AuditLogChangeKeys.TYPE]: !0,
      [C.AuditLogChangeKeys.ASSET]: !0,
      [C.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [C.AuditLogChangeKeys.AVAILABLE]: !0,
      [C.AuditLogChangeKeys.GUILD_ID]: !0
    }
  },
  K = () => [{
    value: C.AuditLogActions.ALL,
    label: O.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: O.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: C.AuditLogActions.GUILD_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: C.AuditLogActions.CHANNEL_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: C.AuditLogActions.CHANNEL_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: C.AuditLogActions.CHANNEL_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: C.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: C.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: C.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: C.AuditLogActions.MEMBER_KICK,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: C.AuditLogActions.MEMBER_PRUNE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: C.AuditLogActions.MEMBER_BAN_ADD,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: C.AuditLogActions.MEMBER_BAN_REMOVE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: C.AuditLogActions.MEMBER_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: C.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: C.AuditLogActions.MEMBER_MOVE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: C.AuditLogActions.MEMBER_DISCONNECT,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: C.AuditLogActions.BOT_ADD,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: C.AuditLogActions.THREAD_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: C.AuditLogActions.THREAD_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: C.AuditLogActions.THREAD_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: C.AuditLogActions.ROLE_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: C.AuditLogActions.ROLE_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: C.AuditLogActions.ROLE_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: C.AuditLogActions.INVITE_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: C.AuditLogActions.INVITE_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: C.AuditLogActions.INVITE_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: C.AuditLogActions.WEBHOOK_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: C.AuditLogActions.WEBHOOK_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: C.AuditLogActions.WEBHOOK_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: C.AuditLogActions.EMOJI_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: C.AuditLogActions.EMOJI_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: C.AuditLogActions.EMOJI_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: C.AuditLogActions.MESSAGE_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: C.AuditLogActions.MESSAGE_BULK_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: C.AuditLogActions.MESSAGE_PIN,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: C.AuditLogActions.MESSAGE_UNPIN,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: C.AuditLogActions.INTEGRATION_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: C.AuditLogActions.INTEGRATION_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: C.AuditLogActions.INTEGRATION_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: C.AuditLogActions.STICKER_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: C.AuditLogActions.STICKER_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: C.AuditLogActions.STICKER_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: C.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: C.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: C.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: C.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: C.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: C.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: C.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: C.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: C.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_FLAG_TO_CHANNEL
  }, {
    value: C.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_TIMEOUT
  }, {
    value: C.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER,
    label: O.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_QUARANTINE
  }];

function w(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function k(e) {
  let t = K().find(t => t.value === e.action),
    s = w(C.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e);
  switch (!0) {
    case null != s:
      return O.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED;
    case null != t:
      var a;
      return null !== (a = null == t ? void 0 : t.label) && void 0 !== a ? a : null;
    default:
      return null
  }
}
let W = {
  [l.TimeUnits.SECONDS]: e => O.default.Messages.DURATION_SECONDS.format({
    seconds: e
  }),
  [l.TimeUnits.MINUTES]: e => O.default.Messages.DURATION_MINUTES.format({
    minutes: e
  }),
  [l.TimeUnits.HOURS]: e => O.default.Messages.DURATION_HOURS.format({
    hours: e
  }),
  [l.TimeUnits.DAYS]: e => O.default.Messages.DURATION_DAYS.format({
    days: e
  })
};

function Y(e) {
  let t = w(C.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e),
    s = Z(C.AuditLogChangeKeys.ROLES_ADD, e).length > 0,
    a = Z(C.AuditLogChangeKeys.ROLES_REMOVE, e).length > 0;
  switch (!0) {
    case null != t:
      if ((null == t ? void 0 : t.newValue) != null) {
        let s = new Date(null == t ? void 0 : t.newValue).getTime(),
          a = D.default.extractTimestamp(e.id),
          n = [l.TimeUnits.DAYS, l.TimeUnits.HOURS, l.TimeUnits.MINUTES, l.TimeUnits.SECONDS],
          i = (0, l.getTimeAndUnit)(Math.round((s - a) / 1e3 / 60), n);
        if (null == i.unit || null == i.time) return null;
        if (i.unit in W) return W[i.unit](i.time);
        return null
      }
      if ((null == t ? void 0 : t.oldValue) != null) return O.default.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
      return null;
    case s && a:
      return O.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    case s:
      return O.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    case a:
      return O.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    default:
      return null
  }
}

function Z(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function X(e) {
  let t = Z(C.AuditLogChangeKeys.ROLES_ADD, e),
    s = Z(C.AuditLogChangeKeys.ROLES_REMOVE, e),
    a = null == t ? void 0 : t.map(e => {
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
    n = null == s ? void 0 : s.map(e => {
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
      return O.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
        roleNamesAdded: a,
        roleNamesRemoved: n
      });
    case t.length > 0:
      return O.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({
        roleNames: a
      });
    case s.length > 0:
      return O.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({
        roleNames: n
      });
    default:
      return null
  }
}

function J(e) {
  switch (e.action) {
    case C.AuditLogActions.GUILD_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case C.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === C.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case C.ChannelTypes.GUILD_STAGE_VOICE:
          return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case C.ChannelTypes.GUILD_VOICE:
          return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case C.ChannelTypes.GUILD_CATEGORY:
          return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case C.AuditLogActions.CHANNEL_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case C.AuditLogActions.CHANNEL_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case C.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case C.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case C.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case C.AuditLogActions.MEMBER_KICK:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case C.AuditLogActions.MEMBER_PRUNE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case C.AuditLogActions.MEMBER_BAN_ADD:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
    case C.AuditLogActions.MEMBER_BAN_REMOVE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case C.AuditLogActions.MEMBER_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case C.AuditLogActions.MEMBER_ROLE_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case C.AuditLogActions.MEMBER_MOVE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case C.AuditLogActions.MEMBER_DISCONNECT:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case C.AuditLogActions.BOT_ADD:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case C.AuditLogActions.ROLE_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case C.AuditLogActions.ROLE_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case C.AuditLogActions.ROLE_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case C.AuditLogActions.INVITE_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case C.AuditLogActions.INVITE_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case C.AuditLogActions.INVITE_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case C.AuditLogActions.WEBHOOK_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case C.AuditLogActions.WEBHOOK_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case C.AuditLogActions.WEBHOOK_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case C.AuditLogActions.EMOJI_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case C.AuditLogActions.EMOJI_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case C.AuditLogActions.EMOJI_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case C.AuditLogActions.STICKER_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case C.AuditLogActions.STICKER_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case C.AuditLogActions.STICKER_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case C.AuditLogActions.MESSAGE_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case C.AuditLogActions.MESSAGE_BULK_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case C.AuditLogActions.MESSAGE_PIN:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case C.AuditLogActions.MESSAGE_UNPIN:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case C.AuditLogActions.INTEGRATION_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case C.AuditLogActions.INTEGRATION_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case C.AuditLogActions.INTEGRATION_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case C.AuditLogActions.STAGE_INSTANCE_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case C.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case C.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case C.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
    case C.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
    case C.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
    case C.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === C.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case C.ChannelTypes.PRIVATE_THREAD:
          return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
        case C.ChannelTypes.ANNOUNCEMENT_THREAD:
          return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE
      }
    case C.AuditLogActions.THREAD_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
    case C.AuditLogActions.THREAD_DELETE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
    case C.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case C.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case C.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case C.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return O.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case C.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return O.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case C.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return O.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    default:
      return null
  }
}

function z(e) {
  var t;
  let s = null == e ? void 0 : null === (t = e.changes) || void 0 === t ? void 0 : t.find(e => "reason" === e.key);
  return null != s ? s.newValue : null
}

function q(e, t) {
  switch (e) {
    case C.Permissions.CREATE_INSTANT_INVITE:
      return O.default.Messages.CREATE_INSTANT_INVITE;
    case C.Permissions.KICK_MEMBERS:
      return O.default.Messages.KICK_MEMBERS;
    case C.Permissions.BAN_MEMBERS:
      return O.default.Messages.BAN_MEMBERS;
    case C.Permissions.ADMINISTRATOR:
      return O.default.Messages.ADMINISTRATOR;
    case C.Permissions.MANAGE_CHANNELS:
      if (t.targetType === C.AuditLogTargetTypes.CHANNEL || t.targetType === C.AuditLogTargetTypes.CHANNEL_OVERWRITE) return O.default.Messages.MANAGE_CHANNEL;
      return O.default.Messages.MANAGE_CHANNELS;
    case C.Permissions.MANAGE_GUILD:
      return O.default.Messages.MANAGE_SERVER;
    case C.Permissions.VIEW_GUILD_ANALYTICS:
      return O.default.Messages.VIEW_GUILD_ANALYTICS;
    case C.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return O.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
    case C.Permissions.CHANGE_NICKNAME:
      return O.default.Messages.CHANGE_NICKNAME;
    case C.Permissions.MANAGE_NICKNAMES:
      return O.default.Messages.MANAGE_NICKNAMES;
    case C.Permissions.MANAGE_ROLES:
      return O.default.Messages.MANAGE_ROLES;
    case C.Permissions.MANAGE_WEBHOOKS:
      return O.default.Messages.MANAGE_WEBHOOKS;
    case C.Permissions.CREATE_GUILD_EXPRESSIONS:
      return O.default.Messages.CREATE_EXPRESSIONS;
    case C.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return O.default.Messages.MANAGE_EXPRESSIONS;
    case C.Permissions.VIEW_AUDIT_LOG:
      return O.default.Messages.VIEW_AUDIT_LOG;
    case C.Permissions.VIEW_CHANNEL:
      return O.default.Messages.READ_MESSAGES;
    case C.Permissions.SEND_MESSAGES:
      return O.default.Messages.SEND_MESSAGES;
    case C.Permissions.SEND_TTS_MESSAGES:
      return O.default.Messages.SEND_TTS_MESSAGES;
    case C.Permissions.USE_APPLICATION_COMMANDS:
      return O.default.Messages.USE_APPLICATION_COMMANDS;
    case C.Permissions.MANAGE_MESSAGES:
      return O.default.Messages.MANAGE_MESSAGES;
    case C.Permissions.EMBED_LINKS:
      return O.default.Messages.EMBED_LINKS;
    case C.Permissions.ATTACH_FILES:
      return O.default.Messages.ATTACH_FILES;
    case C.Permissions.READ_MESSAGE_HISTORY:
      return O.default.Messages.READ_MESSAGE_HISTORY;
    case C.Permissions.MENTION_EVERYONE:
      return O.default.Messages.MENTION_EVERYONE;
    case C.Permissions.USE_EXTERNAL_EMOJIS:
      return O.default.Messages.USE_EXTERNAL_EMOJIS;
    case C.Permissions.USE_EXTERNAL_STICKERS:
      return O.default.Messages.USE_EXTERNAL_STICKERS;
    case C.Permissions.ADD_REACTIONS:
      return O.default.Messages.ADD_REACTIONS;
    case C.Permissions.CONNECT:
      return O.default.Messages.CONNECT;
    case C.Permissions.SPEAK:
      return O.default.Messages.SPEAK;
    case C.Permissions.MUTE_MEMBERS:
      return O.default.Messages.MUTE_MEMBERS;
    case C.Permissions.DEAFEN_MEMBERS:
      return O.default.Messages.DEAFEN_MEMBERS;
    case C.Permissions.MOVE_MEMBERS:
      return O.default.Messages.MOVE_MEMBERS;
    case C.Permissions.USE_VAD:
      return O.default.Messages.USE_VAD;
    case C.Permissions.PRIORITY_SPEAKER:
      return O.default.Messages.PRIORITY_SPEAKER;
    case C.Permissions.STREAM:
      return O.default.Messages.VIDEO;
    case C.Permissions.REQUEST_TO_SPEAK:
      return O.default.Messages.REQUEST_TO_SPEAK;
    case C.Permissions.CREATE_EVENTS:
      return O.default.Messages.CREATE_EVENTS;
    case C.Permissions.MANAGE_EVENTS:
      return O.default.Messages.MANAGE_EVENTS;
    case C.Permissions.CREATE_PUBLIC_THREADS:
      return O.default.Messages.CREATE_PUBLIC_THREADS;
    case C.Permissions.CREATE_PRIVATE_THREADS:
      return O.default.Messages.CREATE_PRIVATE_THREADS;
    case C.Permissions.SEND_MESSAGES_IN_THREADS:
      return O.default.Messages.SEND_MESSAGES_IN_THREADS;
    case C.Permissions.MANAGE_THREADS:
      return O.default.Messages.MANAGE_THREADS;
    case C.Permissions.MODERATE_MEMBERS:
      return O.default.Messages.MODERATE_MEMBER;
    case C.Permissions.SET_VOICE_CHANNEL_STATUS:
      return O.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function Q(e, t) {
  if (null == t) return [];
  let s = [];
  return e.forEach(e => {
    let a = function(e, t) {
        switch (e.targetType) {
          case C.AuditLogTargetTypes.GUILD:
            return t;
          case C.AuditLogTargetTypes.CHANNEL:
          case C.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return et(e, C.AuditLogChangeKeys.NAME, e => L.default.getChannel(e), e => (0, r.computeChannelName)(e, S.default, N.default, !0));
          case C.AuditLogTargetTypes.USER:
            return et(e, C.AuditLogChangeKeys.NICK, e => S.default.getUser(e), void 0);
          case C.AuditLogTargetTypes.ROLE:
            return et(e, C.AuditLogChangeKeys.NAME, e => c.default.getRole(t.id, e), e => e.name);
          case C.AuditLogTargetTypes.INVITE:
            return et(e, C.AuditLogChangeKeys.CODE, C.NOOP_NULL);
          case C.AuditLogTargetTypes.INTEGRATION:
            return et(e, C.AuditLogChangeKeys.TYPE, e => T.default.integrations.find(t => t.id === e), e => e.name);
          case C.AuditLogTargetTypes.WEBHOOK:
            return et(e, C.AuditLogChangeKeys.NAME, e => T.default.webhooks.find(t => t.id === e), e => e.name);
          case C.AuditLogTargetTypes.EMOJI:
            return et(e, C.AuditLogChangeKeys.NAME, e => o.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case C.AuditLogTargetTypes.STICKER:
            return et(e, C.AuditLogChangeKeys.NAME, e => A.default.getStickerById(e), e => e.name);
          case C.AuditLogTargetTypes.STAGE_INSTANCE:
            return et(e, C.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(d.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case C.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
            return et(e, C.AuditLogChangeKeys.NAME, e => T.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case C.AuditLogTargetTypes.THREAD:
            return et(e, C.AuditLogChangeKeys.NAME, e => T.default.threads.find(t => t.id === e), e => e.name);
          case C.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = T.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return et(e, C.AuditLogChangeKeys.NAME, e => T.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === _.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          default:
            return G.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      i = S.default.getUser(e.userId);
    if (null != i && (null != a || e.action === C.AuditLogActions.MEMBER_PRUNE || e.action === C.AuditLogActions.MEMBER_DISCONNECT || e.action === C.AuditLogActions.MEMBER_MOVE || e.action === C.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === C.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
      if (null != (e = (e = (e = e.set("user", i)).set("target", a)).set("options", function(e) {
          if (null != e.options) {
            let a = {
              ...e.options
            };
            switch (e.options.type) {
              case C.AuditLogSubtargetTypes.USER:
                var t, s;
                (null === (t = e.options) || void 0 === t ? void 0 : t.id) != null && (a.subtarget = es(null == e ? void 0 : null === (s = e.options) || void 0 === s ? void 0 : s.id, e => S.default.getUser(e), e => e.tag));
                break;
              case C.AuditLogSubtargetTypes.ROLE:
                null != e.options.role_name && (a.subtarget = es(e.options.role_name, C.NOOP_NULL))
            }
            return null != e.options.channel_id && (a.channel = et(e, "", e => L.default.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (a.count = e.options.members_removed), a
          }
          return e.options
        }(e))).changes) {
        let s = [];
        e.changes.forEach(a => {
          let i = function(e, t, s) {
            if (t.action === C.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case C.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = es(t.id, e => c.default.getRole(s.id, e), e => e.name);
                  break;
                case C.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = es(t.id, e => S.default.getUser(e), e => e.tag);
                  break;
                case C.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === n()(s.id).subtract(1).toString() ? e.subtarget = O.default.Messages.ALL_CHANNELS : e.subtarget = es(t.id, e => L.default.getChannel(e), e => (0, r.computeChannelName)(e, S.default, N.default, !0))
              }
              return e
            }
            switch (e.key) {
              case C.AuditLogChangeKeys.OWNER_ID:
                return ee(e, e => S.default.getUser(e));
              case C.AuditLogChangeKeys.CHANNEL_ID:
              case C.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case C.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case C.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case C.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return ee(e, e => L.default.getChannel(e), e => (0, r.computeChannelName)(e, S.default, N.default, !0));
              case C.AuditLogChangeKeys.AFK_TIMEOUT:
                return ee(e, e => e / 60);
              case C.AuditLogChangeKeys.BITRATE:
                return ee(e, e => e / 1e3);
              case C.AuditLogChangeKeys.COLOR:
                return ee(e, e => (0, E.int2hex)(e).toUpperCase());
              case C.AuditLogChangeKeys.MAX_AGE:
                return ee(e, e => {
                  let t = g.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case C.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = $(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new I.AuditLogChange(C.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (a.length > 0) {
                  let e = new I.AuditLogChange(C.AuditLogChangeKeys.PERMISSIONS_DENIED, null, a);
                  t.push(e)
                }
                return t
              }
              case C.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case C.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = $(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let a = new I.AuditLogChange(e.key, null, s);
                  t.push(a)
                }
                if (a.length > 0) {
                  let e = new I.AuditLogChange(C.AuditLogChangeKeys.PERMISSIONS_RESET, a, a);
                  t.push(e)
                }
                return t
              }
              case C.AuditLogChangeKeys.PREFERRED_LOCALE:
                return ee(e, e => {
                  let t = O.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case C.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return ee(e, e => e === C.VideoQualityMode.FULL ? O.default.Messages.VIDEO_QUALITY_MODE_FULL : O.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [C.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [C.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [C.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [C.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: C.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(C.SystemChannelFlags).forEach(a => {
                    let n = (e.oldValue & a) === a,
                      i = (e.newValue & a) === a;
                    if (n === i) return;
                    let E = new I.AuditLogChange(t[a], !n, !i);
                    s.push(E)
                  }), s
                }(e)
            }
            return e
          }(a, e, t);
          Array.isArray(i) ? i.forEach(e => s.push(e)) : s.push(i)
        }), e = e.set("changes", s)
      }
      s.push(e)
    }
  }), s
}

function $(e, t) {
  let s = i.deserialize("string" == typeof e ? e : 0),
    a = i.deserialize("string" == typeof t ? t : 0),
    n = i.remove(a, s),
    E = i.remove(s, a),
    l = [],
    _ = [],
    r = {
      ...C.Permissions
    };
  for (let e in r) {
    let t = r[e];
    i.has(n, t) && l.push(t), i.has(E, t) && _.push(t)
  }
  return {
    added: l,
    removed: _
  }
}

function ee(e, t, s) {
  let a = e.newValue,
    n = e.oldValue;
  return null != e.newValue && (a = t(e.newValue), null != s && null != a && (a = s(a))), null != e.oldValue && (n = t(e.oldValue), null != s && null != n && (n = s(n))), new I.AuditLogChange(e.key, n || e.oldValue, a || e.newValue)
}

function et(e, t, s, a, n) {
  let i = null,
    E = s(n = null != n ? n : e.targetId);
  if (null != E && null != a && (i = a(E)), null == i && null != E && (i = E), null == i) {
    let t = T.default.deletedTargets[e.targetType];
    null != t && null != t[n] && (i = t[n])
  }
  if (null == i && null != e.changes) {
    let s = e.changes.find(e => e.key === t);
    null != s && (i = s.newValue || s.oldValue)
  }
  return i || n
}

function es(e, t, s) {
  let a = e,
    n = t(e);
  return null != n && null != s && (a = s(n)), a
}

function ea(e, t) {
  return s => null == s.oldValue ? e : t
}

function en(e, t) {
  return s => null == s.newValue ? e : t
}

function ei(e, t, s, a) {
  return n => {
    if (null != n.newValue && null != n.oldValue) return e;
    if (null != n.newValue) return t;
    if (null != n.oldValue) return s;
    return a
  }
}