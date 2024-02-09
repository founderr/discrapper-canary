"use strict";
E.r(t), E.d(t, {
  DEFAULT_FOR_STRINGS_KEY: function() {
    return C
  },
  GuildChangeStrings: function() {
    return R
  },
  ChannelChangeStrings: function() {
    return f
  },
  UserChangeStrings: function() {
    return h
  },
  RoleChangeStrings: function() {
    return p
  },
  InviteChangeStrings: function() {
    return P
  },
  WebhookChangeStrings: function() {
    return y
  },
  EmojiChangeStrings: function() {
    return H
  },
  StickerChangeStrings: function() {
    return m
  },
  IntegrationChangeStrings: function() {
    return v
  },
  StageInstanceChangeStrings: function() {
    return V
  },
  GuildScheduledEventChangeStrings: function() {
    return B
  },
  ThreadChangeStrings: function() {
    return K
  },
  CommandPermissionChangeStrings: function() {
    return F
  },
  NotRenderedChanges: function() {
    return x
  },
  getSimpleAuditLogTitleFromChange: function() {
    return k
  },
  getSimpleAuditLogTitleContextFromChange: function() {
    return w
  },
  getSimpleAuditLogChangeDetails: function() {
    return J
  },
  getChangeTitle: function() {
    return X
  },
  getStringForBanReason: function() {
    return z
  },
  getStringForPermission: function() {
    return Z
  },
  transformLogs: function() {
    return Q
  }
}), E("70102"), E("424973");
var _ = E("552442"),
  s = E.n(_),
  a = E("316693"),
  T = E("509043"),
  n = E("512330"),
  A = E("798609"),
  u = E("679653"),
  I = E("605250"),
  i = E("385976"),
  l = E("287103"),
  L = E("834052"),
  o = E("364685"),
  r = E("242020"),
  d = E("42203"),
  N = E("27618"),
  S = E("697218"),
  g = E("354023"),
  D = E("299039"),
  G = E("49111"),
  O = E("745049"),
  c = E("782340");
let U = new I.default("AuditLogUtils"),
  C = -1,
  M = () => ({
    [G.AuditLogChangeKeys.REASON]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  R = () => ({
    [G.AuditLogChangeKeys.NAME]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [G.AuditLogChangeKeys.DESCRIPTION]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [G.AuditLogChangeKeys.ICON_HASH]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [G.AuditLogChangeKeys.SPLASH_HASH]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [G.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [G.AuditLogChangeKeys.BANNER_HASH]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [G.AuditLogChangeKeys.OWNER_ID]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [G.AuditLogChangeKeys.REGION]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [G.AuditLogChangeKeys.PREFERRED_LOCALE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [G.AuditLogChangeKeys.AFK_CHANNEL_ID]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.AFK_TIMEOUT]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.RULES_CHANNEL_ID]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.MFA_LEVEL]: {
      [G.MFALevels.NONE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [G.MFALevels.ELEVATED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [G.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [G.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [G.VerificationLevels.NONE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [G.VerificationLevels.LOW]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [G.VerificationLevels.MEDIUM]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [G.VerificationLevels.HIGH]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [G.VerificationLevels.VERY_HIGH]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [G.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [G.UserNotificationSettings.ALL_MESSAGES]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [G.UserNotificationSettings.ONLY_MENTIONS]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [G.AuditLogChangeKeys.VANITY_URL_CODE]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [G.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [G.GuildExplicitContentFilterTypes.DISABLED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [G.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [G.GuildExplicitContentFilterTypes.ALL_MEMBERS]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [G.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [G.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...M()
  }),
  f = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [G.AuditLogChangeKeys.POSITION]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [G.AuditLogChangeKeys.TOPIC]: es(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [G.AuditLogChangeKeys.BITRATE]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [G.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: es(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [G.AuditLogChangeKeys.USER_LIMIT]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [G.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [G.AuditLogChangeKeys.PERMISSIONS_RESET]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [G.AuditLogChangeKeys.PERMISSIONS_GRANTED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [G.AuditLogChangeKeys.PERMISSIONS_DENIED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [G.AuditLogChangeKeys.REASON]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [G.AuditLogChangeKeys.NSFW]: {
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [G.AuditLogChangeKeys.TYPE]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [G.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [G.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
  }),
  h = () => ({
    [G.AuditLogChangeKeys.NICK]: es(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [G.AuditLogChangeKeys.DEAF]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [G.AuditLogChangeKeys.MUTE]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [G.AuditLogChangeKeys.ROLES_REMOVE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [G.AuditLogChangeKeys.ROLES_ADD]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [G.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: es(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [G.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [G.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...M()
  }),
  p = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [G.AuditLogChangeKeys.PERMISSIONS_GRANTED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [G.AuditLogChangeKeys.PERMISSIONS_DENIED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [G.AuditLogChangeKeys.COLOR]: {
      "#000000": c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [C]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [G.AuditLogChangeKeys.HOIST]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [G.AuditLogChangeKeys.MENTIONABLE]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [G.AuditLogChangeKeys.ICON_HASH]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [G.AuditLogChangeKeys.UNICODE_EMOJI]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...M()
  }),
  P = () => ({
    [G.AuditLogChangeKeys.CODE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [G.AuditLogChangeKeys.CHANNEL_ID]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [G.AuditLogChangeKeys.MAX_USES]: {
      0: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [C]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [G.AuditLogChangeKeys.MAX_AGE]: {
      0: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [C]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [G.AuditLogChangeKeys.TEMPORARY]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    ...M()
  }),
  y = () => ({
    [G.AuditLogChangeKeys.CHANNEL_ID]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [G.AuditLogChangeKeys.NAME]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [G.AuditLogChangeKeys.AVATAR_HASH]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [G.AuditLogChangeKeys.REASON]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  H = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...M()
  }),
  m = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [G.AuditLogChangeKeys.TAGS]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [G.AuditLogChangeKeys.DESCRIPTION]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...M()
  }),
  v = () => ({
    [G.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [G.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [G.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...M()
  }),
  V = () => ({
    [G.AuditLogChangeKeys.TOPIC]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [G.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [O.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [O.GuildScheduledEventPrivacyLevel.PUBLIC]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...M()
  }),
  B = () => ({
    [G.AuditLogChangeKeys.NAME]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [G.AuditLogChangeKeys.DESCRIPTION]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [G.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [O.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [O.GuildScheduledEventPrivacyLevel.PUBLIC]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [G.AuditLogChangeKeys.STATUS]: {
      [O.GuildScheduledEventStatus.SCHEDULED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [O.GuildScheduledEventStatus.ACTIVE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [O.GuildScheduledEventStatus.COMPLETED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [O.GuildScheduledEventStatus.CANCELED]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [G.AuditLogChangeKeys.ENTITY_TYPE]: {
      [O.GuildScheduledEventEntityTypes.NONE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [O.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [O.GuildScheduledEventEntityTypes.VOICE]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [O.GuildScheduledEventEntityTypes.EXTERNAL]: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [G.AuditLogChangeKeys.CHANNEL_ID]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [G.AuditLogChangeKeys.LOCATION]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [G.AuditLogChangeKeys.RECURRENCE_RULE]: e_(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
    ...M()
  }),
  K = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [G.AuditLogChangeKeys.ARCHIVED]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [G.AuditLogChangeKeys.LOCKED]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [G.AuditLogChangeKeys.INVITABLE]: {
      true: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [G.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [G.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eE(c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    ...M()
  }),
  F = e => {
    let t = {
      ...M()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  x = {
    [G.AuditLogTargetTypes.CHANNEL]: {
      [G.AuditLogChangeKeys.ID]: !0,
      [G.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [G.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [G.AuditLogChangeKeys.TYPE]: !0,
      [G.AuditLogChangeKeys.ID]: !0,
      [G.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [G.AuditLogTargetTypes.INVITE]: {
      [G.AuditLogChangeKeys.INVITER_ID]: !0,
      [G.AuditLogChangeKeys.USES]: !0
    },
    [G.AuditLogTargetTypes.WEBHOOK]: {
      [G.AuditLogChangeKeys.TYPE]: !0,
      [G.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [G.AuditLogTargetTypes.INTEGRATION]: {
      [G.AuditLogChangeKeys.TYPE]: !0
    },
    [G.AuditLogTargetTypes.THREAD]: {
      [G.AuditLogChangeKeys.ID]: !0,
      [G.AuditLogChangeKeys.TYPE]: !0
    },
    [G.AuditLogTargetTypes.STICKER]: {
      [G.AuditLogChangeKeys.ID]: !0,
      [G.AuditLogChangeKeys.TYPE]: !0,
      [G.AuditLogChangeKeys.ASSET]: !0,
      [G.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [G.AuditLogChangeKeys.AVAILABLE]: !0,
      [G.AuditLogChangeKeys.GUILD_ID]: !0
    }
  },
  b = () => [{
    value: G.AuditLogActions.ALL,
    label: c.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: c.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: G.AuditLogActions.GUILD_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: G.AuditLogActions.CHANNEL_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: G.AuditLogActions.CHANNEL_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: G.AuditLogActions.CHANNEL_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: G.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: G.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: G.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: G.AuditLogActions.MEMBER_KICK,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: G.AuditLogActions.MEMBER_PRUNE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: G.AuditLogActions.MEMBER_BAN_ADD,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: G.AuditLogActions.MEMBER_BAN_REMOVE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: G.AuditLogActions.MEMBER_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: G.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: G.AuditLogActions.MEMBER_MOVE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: G.AuditLogActions.MEMBER_DISCONNECT,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: G.AuditLogActions.BOT_ADD,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: G.AuditLogActions.THREAD_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: G.AuditLogActions.THREAD_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: G.AuditLogActions.THREAD_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: G.AuditLogActions.ROLE_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: G.AuditLogActions.ROLE_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: G.AuditLogActions.ROLE_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: G.AuditLogActions.INVITE_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: G.AuditLogActions.INVITE_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: G.AuditLogActions.INVITE_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: G.AuditLogActions.WEBHOOK_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: G.AuditLogActions.WEBHOOK_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: G.AuditLogActions.WEBHOOK_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: G.AuditLogActions.EMOJI_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: G.AuditLogActions.EMOJI_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: G.AuditLogActions.EMOJI_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: G.AuditLogActions.MESSAGE_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: G.AuditLogActions.MESSAGE_BULK_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: G.AuditLogActions.MESSAGE_PIN,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: G.AuditLogActions.MESSAGE_UNPIN,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: G.AuditLogActions.INTEGRATION_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: G.AuditLogActions.INTEGRATION_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: G.AuditLogActions.INTEGRATION_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: G.AuditLogActions.STICKER_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: G.AuditLogActions.STICKER_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: G.AuditLogActions.STICKER_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: G.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: G.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: G.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: G.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: G.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: G.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: G.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: G.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: G.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_FLAG_TO_CHANNEL
  }, {
    value: G.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_TIMEOUT
  }, {
    value: G.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER,
    label: c.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_QUARANTINE
  }];

function j(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function k(e) {
  let t = b().find(t => t.value === e.action),
    E = j(G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e);
  switch (!0) {
    case null != E:
      return c.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED;
    case null != t:
      var _;
      return null !== (_ = null == t ? void 0 : t.label) && void 0 !== _ ? _ : null;
    default:
      return null
  }
}
let Y = {
  [n.TimeUnits.SECONDS]: e => c.default.Messages.DURATION_SECONDS.format({
    seconds: e
  }),
  [n.TimeUnits.MINUTES]: e => c.default.Messages.DURATION_MINUTES.format({
    minutes: e
  }),
  [n.TimeUnits.HOURS]: e => c.default.Messages.DURATION_HOURS.format({
    hours: e
  }),
  [n.TimeUnits.DAYS]: e => c.default.Messages.DURATION_DAYS.format({
    days: e
  })
};

function w(e) {
  let t = j(G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e),
    E = W(G.AuditLogChangeKeys.ROLES_ADD, e).length > 0,
    _ = W(G.AuditLogChangeKeys.ROLES_REMOVE, e).length > 0;
  switch (!0) {
    case null != t:
      if ((null == t ? void 0 : t.newValue) != null) {
        let E = new Date(null == t ? void 0 : t.newValue).getTime(),
          _ = D.default.extractTimestamp(e.id),
          s = [n.TimeUnits.DAYS, n.TimeUnits.HOURS, n.TimeUnits.MINUTES, n.TimeUnits.SECONDS],
          a = (0, n.getTimeAndUnit)(Math.round((E - _) / 1e3 / 60), s);
        if (null == a.unit || null == a.time) return null;
        if (a.unit in Y) {
          let e = a.unit;
          return Y[e](a.time)
        }
        return null
      }
      if ((null == t ? void 0 : t.oldValue) != null) return c.default.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
      return null;
    case E && _:
      return c.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    case E:
      return c.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    case _:
      return c.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    default:
      return null
  }
}

function W(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function J(e) {
  let t = W(G.AuditLogChangeKeys.ROLES_ADD, e),
    E = W(G.AuditLogChangeKeys.ROLES_REMOVE, e),
    _ = null == t ? void 0 : t.map(e => {
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
    s = null == E ? void 0 : E.map(e => {
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
    case t.length > 0 && E.length > 0:
      return c.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
        roleNamesAdded: _,
        roleNamesRemoved: s
      });
    case t.length > 0:
      return c.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({
        roleNames: _
      });
    case E.length > 0:
      return c.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({
        roleNames: s
      });
    default:
      return null
  }
}

function X(e) {
  switch (e.action) {
    case G.AuditLogActions.GUILD_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case G.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === G.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case G.ChannelTypes.GUILD_STAGE_VOICE:
          return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case G.ChannelTypes.GUILD_VOICE:
          return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case G.ChannelTypes.GUILD_CATEGORY:
          return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case G.AuditLogActions.CHANNEL_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case G.AuditLogActions.CHANNEL_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case G.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case G.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case G.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case G.AuditLogActions.MEMBER_KICK:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case G.AuditLogActions.MEMBER_PRUNE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case G.AuditLogActions.MEMBER_BAN_ADD:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
    case G.AuditLogActions.MEMBER_BAN_REMOVE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case G.AuditLogActions.MEMBER_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case G.AuditLogActions.MEMBER_ROLE_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case G.AuditLogActions.MEMBER_MOVE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case G.AuditLogActions.MEMBER_DISCONNECT:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case G.AuditLogActions.BOT_ADD:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case G.AuditLogActions.ROLE_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case G.AuditLogActions.ROLE_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case G.AuditLogActions.ROLE_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case G.AuditLogActions.INVITE_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case G.AuditLogActions.INVITE_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case G.AuditLogActions.INVITE_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case G.AuditLogActions.WEBHOOK_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case G.AuditLogActions.WEBHOOK_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case G.AuditLogActions.WEBHOOK_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case G.AuditLogActions.EMOJI_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case G.AuditLogActions.EMOJI_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case G.AuditLogActions.EMOJI_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case G.AuditLogActions.STICKER_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case G.AuditLogActions.STICKER_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case G.AuditLogActions.STICKER_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case G.AuditLogActions.MESSAGE_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case G.AuditLogActions.MESSAGE_BULK_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case G.AuditLogActions.MESSAGE_PIN:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case G.AuditLogActions.MESSAGE_UNPIN:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case G.AuditLogActions.INTEGRATION_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case G.AuditLogActions.INTEGRATION_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case G.AuditLogActions.INTEGRATION_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case G.AuditLogActions.STAGE_INSTANCE_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case G.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case G.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case G.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
    case G.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
    case G.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
    case G.AuditLogActions.THREAD_CREATE:
      let E = null != e.changes ? e.changes.find(e => e.key === G.AuditLogChangeKeys.TYPE) : null;
      if (null == E) throw Error("[AuditLog] Could not find type change for thread create");
      switch (E.newValue) {
        case G.ChannelTypes.PRIVATE_THREAD:
          return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
        case G.ChannelTypes.ANNOUNCEMENT_THREAD:
          return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE
      }
    case G.AuditLogActions.THREAD_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
    case G.AuditLogActions.THREAD_DELETE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
    case G.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case G.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case G.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case G.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return c.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case G.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return c.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case G.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return c.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    default:
      return null
  }
}

function z(e) {
  var t;
  let E = null == e ? void 0 : null === (t = e.changes) || void 0 === t ? void 0 : t.find(e => "reason" === e.key);
  return null != E ? E.newValue : null
}

function Z(e, t) {
  switch (e) {
    case G.Permissions.CREATE_INSTANT_INVITE:
      return c.default.Messages.CREATE_INSTANT_INVITE;
    case G.Permissions.KICK_MEMBERS:
      return c.default.Messages.KICK_MEMBERS;
    case G.Permissions.BAN_MEMBERS:
      return c.default.Messages.BAN_MEMBERS;
    case G.Permissions.ADMINISTRATOR:
      return c.default.Messages.ADMINISTRATOR;
    case G.Permissions.MANAGE_CHANNELS:
      if (t.targetType === G.AuditLogTargetTypes.CHANNEL || t.targetType === G.AuditLogTargetTypes.CHANNEL_OVERWRITE) return c.default.Messages.MANAGE_CHANNEL;
      return c.default.Messages.MANAGE_CHANNELS;
    case G.Permissions.MANAGE_GUILD:
      return c.default.Messages.MANAGE_SERVER;
    case G.Permissions.VIEW_GUILD_ANALYTICS:
      return c.default.Messages.VIEW_GUILD_ANALYTICS;
    case G.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return c.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
    case G.Permissions.CHANGE_NICKNAME:
      return c.default.Messages.CHANGE_NICKNAME;
    case G.Permissions.MANAGE_NICKNAMES:
      return c.default.Messages.MANAGE_NICKNAMES;
    case G.Permissions.MANAGE_ROLES:
      return c.default.Messages.MANAGE_ROLES;
    case G.Permissions.MANAGE_WEBHOOKS:
      return c.default.Messages.MANAGE_WEBHOOKS;
    case G.Permissions.CREATE_GUILD_EXPRESSIONS:
      return c.default.Messages.CREATE_EXPRESSIONS;
    case G.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return c.default.Messages.MANAGE_EXPRESSIONS;
    case G.Permissions.VIEW_AUDIT_LOG:
      return c.default.Messages.VIEW_AUDIT_LOG;
    case G.Permissions.VIEW_CHANNEL:
      return c.default.Messages.READ_MESSAGES;
    case G.Permissions.SEND_MESSAGES:
      return c.default.Messages.SEND_MESSAGES;
    case G.Permissions.SEND_TTS_MESSAGES:
      return c.default.Messages.SEND_TTS_MESSAGES;
    case G.Permissions.USE_APPLICATION_COMMANDS:
      return c.default.Messages.USE_APPLICATION_COMMANDS;
    case G.Permissions.MANAGE_MESSAGES:
      return c.default.Messages.MANAGE_MESSAGES;
    case G.Permissions.EMBED_LINKS:
      return c.default.Messages.EMBED_LINKS;
    case G.Permissions.ATTACH_FILES:
      return c.default.Messages.ATTACH_FILES;
    case G.Permissions.READ_MESSAGE_HISTORY:
      return c.default.Messages.READ_MESSAGE_HISTORY;
    case G.Permissions.MENTION_EVERYONE:
      return c.default.Messages.MENTION_EVERYONE;
    case G.Permissions.USE_EXTERNAL_EMOJIS:
      return c.default.Messages.USE_EXTERNAL_EMOJIS;
    case G.Permissions.USE_EXTERNAL_STICKERS:
      return c.default.Messages.USE_EXTERNAL_STICKERS;
    case G.Permissions.ADD_REACTIONS:
      return c.default.Messages.ADD_REACTIONS;
    case G.Permissions.CONNECT:
      return c.default.Messages.CONNECT;
    case G.Permissions.SPEAK:
      return c.default.Messages.SPEAK;
    case G.Permissions.MUTE_MEMBERS:
      return c.default.Messages.MUTE_MEMBERS;
    case G.Permissions.DEAFEN_MEMBERS:
      return c.default.Messages.DEAFEN_MEMBERS;
    case G.Permissions.MOVE_MEMBERS:
      return c.default.Messages.MOVE_MEMBERS;
    case G.Permissions.USE_VAD:
      return c.default.Messages.USE_VAD;
    case G.Permissions.PRIORITY_SPEAKER:
      return c.default.Messages.PRIORITY_SPEAKER;
    case G.Permissions.STREAM:
      return c.default.Messages.VIDEO;
    case G.Permissions.REQUEST_TO_SPEAK:
      return c.default.Messages.REQUEST_TO_SPEAK;
    case G.Permissions.CREATE_EVENTS:
      return c.default.Messages.CREATE_EVENTS;
    case G.Permissions.MANAGE_EVENTS:
      return c.default.Messages.MANAGE_EVENTS;
    case G.Permissions.CREATE_PUBLIC_THREADS:
      return c.default.Messages.CREATE_PUBLIC_THREADS;
    case G.Permissions.CREATE_PRIVATE_THREADS:
      return c.default.Messages.CREATE_PRIVATE_THREADS;
    case G.Permissions.SEND_MESSAGES_IN_THREADS:
      return c.default.Messages.SEND_MESSAGES_IN_THREADS;
    case G.Permissions.MANAGE_THREADS:
      return c.default.Messages.MANAGE_THREADS;
    case G.Permissions.MODERATE_MEMBERS:
      return c.default.Messages.MODERATE_MEMBER;
    case G.Permissions.SET_VOICE_CHANNEL_STATUS:
      return c.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function Q(e, t) {
  if (null == t) return [];
  let E = [];
  return e.forEach(e => {
    let _ = function(e, t) {
        switch (e.targetType) {
          case G.AuditLogTargetTypes.GUILD:
            return t;
          case G.AuditLogTargetTypes.CHANNEL:
          case G.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return ee(e, G.AuditLogChangeKeys.NAME, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, S.default, N.default, !0));
          case G.AuditLogTargetTypes.USER:
            return ee(e, G.AuditLogChangeKeys.NICK, e => S.default.getUser(e), void 0);
          case G.AuditLogTargetTypes.ROLE:
            return ee(e, G.AuditLogChangeKeys.NAME, e => t.getRole(e), e => e.name);
          case G.AuditLogTargetTypes.INVITE:
            return ee(e, G.AuditLogChangeKeys.CODE, G.NOOP_NULL);
          case G.AuditLogTargetTypes.INTEGRATION:
            return ee(e, G.AuditLogChangeKeys.TYPE, e => l.default.integrations.find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.WEBHOOK:
            return ee(e, G.AuditLogChangeKeys.NAME, e => l.default.webhooks.find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.EMOJI:
            return ee(e, G.AuditLogChangeKeys.NAME, e => i.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.STICKER:
            return ee(e, G.AuditLogChangeKeys.NAME, e => o.default.getStickerById(e), e => e.name);
          case G.AuditLogTargetTypes.STAGE_INSTANCE:
            return ee(e, G.AuditLogChangeKeys.TOPIC, e => {
              var E;
              return null === (E = Object.values(L.default.getStageInstancesByGuild(t.id))) || void 0 === E ? void 0 : E.find(t => t.id === e)
            }, e => e.topic);
          case G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
            return ee(e, G.AuditLogChangeKeys.NAME, e => l.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.THREAD:
            return ee(e, G.AuditLogChangeKeys.NAME, e => l.default.threads.find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = l.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return ee(e, G.AuditLogChangeKeys.NAME, e => l.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === A.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          default:
            return U.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = S.default.getUser(e.userId);
    if (null != a && (null != _ || e.action === G.AuditLogActions.MEMBER_PRUNE || e.action === G.AuditLogActions.MEMBER_DISCONNECT || e.action === G.AuditLogActions.MEMBER_MOVE || e.action === G.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === G.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", _)).set("options", function(e) {
          if (null != e.options) {
            let _ = {
              ...e.options
            };
            switch (e.options.type) {
              case G.AuditLogSubtargetTypes.USER:
                var t, E;
                (null === (t = e.options) || void 0 === t ? void 0 : t.id) != null && (_.subtarget = et(null == e ? void 0 : null === (E = e.options) || void 0 === E ? void 0 : E.id, e => S.default.getUser(e), e => e.tag));
                break;
              case G.AuditLogSubtargetTypes.ROLE:
                null != e.options.role_name && (_.subtarget = et(e.options.role_name, G.NOOP_NULL))
            }
            return null != e.options.channel_id && (_.channel = ee(e, "", e => d.default.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (_.count = e.options.members_removed), _
          }
          return e.options
        }(e))).changes) {
        let E = [];
        e.changes.forEach(_ => {
          let a = function(e, t, E) {
            if (t.action === G.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case G.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = et(t.id, e => E.getRole(e), e => e.name);
                  break;
                case G.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = et(t.id, e => S.default.getUser(e), e => e.tag);
                  break;
                case G.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === s(E.id).subtract(1).toString() ? e.subtarget = c.default.Messages.ALL_CHANNELS : e.subtarget = et(t.id, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, S.default, N.default, !0))
              }
              return e
            }
            switch (e.key) {
              case G.AuditLogChangeKeys.OWNER_ID:
                return $(e, e => S.default.getUser(e));
              case G.AuditLogChangeKeys.CHANNEL_ID:
              case G.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case G.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case G.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case G.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return $(e, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, S.default, N.default, !0));
              case G.AuditLogChangeKeys.AFK_TIMEOUT:
                return $(e, e => e / 60);
              case G.AuditLogChangeKeys.BITRATE:
                return $(e, e => e / 1e3);
              case G.AuditLogChangeKeys.COLOR:
                return $(e, e => (0, T.int2hex)(e).toUpperCase());
              case G.AuditLogChangeKeys.MAX_AGE:
                return $(e, e => {
                  let t = g.default.getMaxAgeOptions.find(t => {
                    let {
                      value: E
                    } = t;
                    return e === E
                  });
                  return t ? t.label : e
                });
              case G.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: E,
                    removed: _
                  } = q(e.oldValue, e.newValue);
                if (E.length > 0) {
                  let e = new r.AuditLogChange(G.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, E);
                  t.push(e)
                }
                if (_.length > 0) {
                  let e = new r.AuditLogChange(G.AuditLogChangeKeys.PERMISSIONS_DENIED, null, _);
                  t.push(e)
                }
                return t
              }
              case G.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case G.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: E,
                    removed: _
                  } = q(e.oldValue, e.newValue);
                if (E.length > 0) {
                  let _ = new r.AuditLogChange(e.key, null, E);
                  t.push(_)
                }
                if (_.length > 0) {
                  let e = new r.AuditLogChange(G.AuditLogChangeKeys.PERMISSIONS_RESET, _, _);
                  t.push(e)
                }
                return t
              }
              case G.AuditLogChangeKeys.PREFERRED_LOCALE:
                return $(e, e => {
                  let t = c.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case G.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return $(e, e => e === G.VideoQualityMode.FULL ? c.default.Messages.VIDEO_QUALITY_MODE_FULL : c.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [G.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [G.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [G.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [G.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    E = [];
                  return Object.values(G.SystemChannelFlags).forEach(_ => {
                    let s = (e.oldValue & _) === _,
                      a = (e.newValue & _) === _;
                    if (s === a) return;
                    let T = new r.AuditLogChange(t[_], !s, !a);
                    E.push(T)
                  }), E
                }(e)
            }
            return e
          }(_, e, t);
          Array.isArray(a) ? a.forEach(e => E.push(e)) : E.push(a)
        }), e = e.set("changes", E)
      }
      E.push(e)
    }
  }), E
}

function q(e, t) {
  let E = a.default.deserialize("string" == typeof e ? e : 0),
    _ = a.default.deserialize("string" == typeof t ? t : 0),
    s = a.default.remove(_, E),
    T = a.default.remove(E, _),
    n = [],
    A = [],
    u = {
      ...G.Permissions
    };
  for (let e in u) {
    let t = u[e];
    a.default.has(s, t) && n.push(t), a.default.has(T, t) && A.push(t)
  }
  return {
    added: n,
    removed: A
  }
}

function $(e, t, E) {
  let _ = e.newValue,
    s = e.oldValue;
  return null != e.newValue && (_ = t(e.newValue), null != E && null != _ && (_ = E(_))), null != e.oldValue && (s = t(e.oldValue), null != E && null != s && (s = E(s))), new r.AuditLogChange(e.key, s || e.oldValue, _ || e.newValue)
}

function ee(e, t, E, _, s) {
  let a = null;
  s = null != s ? s : e.targetId;
  let T = E(s);
  if (null != T && null != _ && (a = _(T)), null == a && null != T && (a = T), null == a) {
    let t = l.default.deletedTargets[e.targetType];
    null != t && null != t[s] && (a = t[s])
  }
  if (null == a && null != e.changes) {
    let E = e.changes.find(e => e.key === t);
    null != E && (a = E.newValue || E.oldValue)
  }
  return a || s
}

function et(e, t, E) {
  let _ = e,
    s = t(e);
  return null != s && null != E && (_ = E(s)), _
}

function eE(e, t) {
  return E => null == E.oldValue ? e : t
}

function e_(e, t) {
  return E => null == E.newValue ? e : t
}

function es(e, t, E, _) {
  return s => {
    if (null != s.newValue && null != s.oldValue) return e;
    if (null != s.newValue) return t;
    if (null != s.oldValue) return E;
    return _
  }
}