"use strict";
s.r(t), s.d(t, {
  DEFAULT_FOR_STRINGS_KEY: function() {
    return C
  },
  GuildChangeStrings: function() {
    return h
  },
  ChannelChangeStrings: function() {
    return R
  },
  UserChangeStrings: function() {
    return D
  },
  RoleChangeStrings: function() {
    return M
  },
  InviteChangeStrings: function() {
    return G
  },
  WebhookChangeStrings: function() {
    return x
  },
  EmojiChangeStrings: function() {
    return p
  },
  StickerChangeStrings: function() {
    return U
  },
  IntegrationChangeStrings: function() {
    return v
  },
  StageInstanceChangeStrings: function() {
    return j
  },
  GuildScheduledEventChangeStrings: function() {
    return P
  },
  ThreadChangeStrings: function() {
    return y
  },
  CommandPermissionChangeStrings: function() {
    return b
  },
  NotRenderedChanges: function() {
    return B
  },
  getChangeTitle: function() {
    return F
  },
  getStringForBanReason: function() {
    return H
  },
  getStringForPermission: function() {
    return V
  },
  transformLogs: function() {
    return w
  }
}), s("70102"), s("424973");
var a = s("552442"),
  n = s.n(a),
  l = s("316693"),
  i = s("509043"),
  r = s("798609"),
  o = s("679653"),
  d = s("605250"),
  u = s("385976"),
  c = s("287103"),
  E = s("834052"),
  _ = s("364685"),
  T = s("242020"),
  I = s("42203"),
  S = s("27618"),
  N = s("697218"),
  f = s("354023"),
  g = s("49111"),
  A = s("745049"),
  L = s("782340");
let m = new d.default("AuditLogUtils"),
  C = -1,
  O = () => ({
    [g.AuditLogChangeKeys.REASON]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  h = () => ({
    [g.AuditLogChangeKeys.NAME]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [g.AuditLogChangeKeys.DESCRIPTION]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [g.AuditLogChangeKeys.ICON_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [g.AuditLogChangeKeys.SPLASH_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [g.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [g.AuditLogChangeKeys.BANNER_HASH]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [g.AuditLogChangeKeys.OWNER_ID]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [g.AuditLogChangeKeys.REGION]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [g.AuditLogChangeKeys.PREFERRED_LOCALE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [g.AuditLogChangeKeys.AFK_CHANNEL_ID]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [g.AuditLogChangeKeys.AFK_TIMEOUT]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [g.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [g.AuditLogChangeKeys.RULES_CHANNEL_ID]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [g.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [g.AuditLogChangeKeys.MFA_LEVEL]: {
      [g.MFALevels.NONE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [g.MFALevels.ELEVATED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [g.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [g.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [g.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [g.VerificationLevels.NONE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [g.VerificationLevels.LOW]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [g.VerificationLevels.MEDIUM]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [g.VerificationLevels.HIGH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [g.VerificationLevels.VERY_HIGH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [g.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [g.UserNotificationSettings.ALL_MESSAGES]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [g.UserNotificationSettings.ONLY_MENTIONS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [g.AuditLogChangeKeys.VANITY_URL_CODE]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [g.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [g.GuildExplicitContentFilterTypes.DISABLED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [g.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [g.GuildExplicitContentFilterTypes.ALL_MEMBERS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [g.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [g.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...O()
  }),
  R = () => ({
    [g.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [g.AuditLogChangeKeys.POSITION]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [g.AuditLogChangeKeys.TOPIC]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [g.AuditLogChangeKeys.BITRATE]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [g.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [g.AuditLogChangeKeys.USER_LIMIT]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [g.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [g.AuditLogChangeKeys.PERMISSIONS_RESET]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [g.AuditLogChangeKeys.PERMISSIONS_GRANTED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [g.AuditLogChangeKeys.PERMISSIONS_DENIED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [g.AuditLogChangeKeys.REASON]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [g.AuditLogChangeKeys.NSFW]: {
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [g.AuditLogChangeKeys.TYPE]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [g.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [g.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
  }),
  D = () => ({
    [g.AuditLogChangeKeys.NICK]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [g.AuditLogChangeKeys.DEAF]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [g.AuditLogChangeKeys.MUTE]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [g.AuditLogChangeKeys.ROLES_REMOVE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [g.AuditLogChangeKeys.ROLES_ADD]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [g.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [g.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: X(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [g.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [g.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...O()
  }),
  M = () => ({
    [g.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [g.AuditLogChangeKeys.PERMISSIONS_GRANTED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [g.AuditLogChangeKeys.PERMISSIONS_DENIED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [g.AuditLogChangeKeys.COLOR]: {
      "#000000": L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [C]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [g.AuditLogChangeKeys.HOIST]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [g.AuditLogChangeKeys.MENTIONABLE]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [g.AuditLogChangeKeys.ICON_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [g.AuditLogChangeKeys.UNICODE_EMOJI]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...O()
  }),
  G = () => ({
    [g.AuditLogChangeKeys.CODE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [g.AuditLogChangeKeys.CHANNEL_ID]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [g.AuditLogChangeKeys.MAX_USES]: {
      0: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [C]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [g.AuditLogChangeKeys.MAX_AGE]: {
      0: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [C]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [g.AuditLogChangeKeys.TEMPORARY]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    ...O()
  }),
  x = () => ({
    [g.AuditLogChangeKeys.CHANNEL_ID]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [g.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [g.AuditLogChangeKeys.AVATAR_HASH]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [g.AuditLogChangeKeys.REASON]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  p = () => ({
    [g.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...O()
  }),
  U = () => ({
    [g.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [g.AuditLogChangeKeys.TAGS]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [g.AuditLogChangeKeys.DESCRIPTION]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...O()
  }),
  v = () => ({
    [g.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [g.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [g.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...O()
  }),
  j = () => ({
    [g.AuditLogChangeKeys.TOPIC]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [g.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [A.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [A.GuildScheduledEventPrivacyLevel.PUBLIC]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...O()
  }),
  P = () => ({
    [g.AuditLogChangeKeys.NAME]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [g.AuditLogChangeKeys.DESCRIPTION]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [g.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [A.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [A.GuildScheduledEventPrivacyLevel.PUBLIC]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [g.AuditLogChangeKeys.STATUS]: {
      [A.GuildScheduledEventStatus.SCHEDULED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [A.GuildScheduledEventStatus.ACTIVE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [A.GuildScheduledEventStatus.COMPLETED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [A.GuildScheduledEventStatus.CANCELED]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [g.AuditLogChangeKeys.ENTITY_TYPE]: {
      [A.GuildScheduledEventEntityTypes.NONE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [A.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [A.GuildScheduledEventEntityTypes.VOICE]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [A.GuildScheduledEventEntityTypes.EXTERNAL]: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [g.AuditLogChangeKeys.CHANNEL_ID]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [g.AuditLogChangeKeys.LOCATION]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [g.AuditLogChangeKeys.RECURRENCE_RULE]: Z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
    ...O()
  }),
  y = () => ({
    [g.AuditLogChangeKeys.NAME]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [g.AuditLogChangeKeys.ARCHIVED]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [g.AuditLogChangeKeys.LOCKED]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [g.AuditLogChangeKeys.INVITABLE]: {
      true: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [g.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [g.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: z(L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    ...O()
  }),
  b = e => {
    let t = {
      ...O()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  B = {
    [g.AuditLogTargetTypes.CHANNEL]: {
      [g.AuditLogChangeKeys.ID]: !0,
      [g.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [g.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [g.AuditLogChangeKeys.TYPE]: !0,
      [g.AuditLogChangeKeys.ID]: !0,
      [g.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [g.AuditLogTargetTypes.INVITE]: {
      [g.AuditLogChangeKeys.INVITER_ID]: !0,
      [g.AuditLogChangeKeys.USES]: !0
    },
    [g.AuditLogTargetTypes.WEBHOOK]: {
      [g.AuditLogChangeKeys.TYPE]: !0,
      [g.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [g.AuditLogTargetTypes.INTEGRATION]: {
      [g.AuditLogChangeKeys.TYPE]: !0
    },
    [g.AuditLogTargetTypes.THREAD]: {
      [g.AuditLogChangeKeys.ID]: !0,
      [g.AuditLogChangeKeys.TYPE]: !0
    },
    [g.AuditLogTargetTypes.STICKER]: {
      [g.AuditLogChangeKeys.ID]: !0,
      [g.AuditLogChangeKeys.TYPE]: !0,
      [g.AuditLogChangeKeys.ASSET]: !0,
      [g.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [g.AuditLogChangeKeys.AVAILABLE]: !0,
      [g.AuditLogChangeKeys.GUILD_ID]: !0
    }
  };

function F(e) {
  switch (e.action) {
    case g.AuditLogActions.GUILD_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case g.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === g.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case g.ChannelTypes.GUILD_STAGE_VOICE:
          return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case g.ChannelTypes.GUILD_VOICE:
          return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case g.ChannelTypes.GUILD_CATEGORY:
          return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case g.AuditLogActions.CHANNEL_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case g.AuditLogActions.CHANNEL_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case g.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case g.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case g.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case g.AuditLogActions.MEMBER_KICK:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case g.AuditLogActions.MEMBER_PRUNE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case g.AuditLogActions.MEMBER_BAN_ADD:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
    case g.AuditLogActions.MEMBER_BAN_REMOVE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case g.AuditLogActions.MEMBER_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case g.AuditLogActions.MEMBER_ROLE_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case g.AuditLogActions.MEMBER_MOVE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case g.AuditLogActions.MEMBER_DISCONNECT:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case g.AuditLogActions.BOT_ADD:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case g.AuditLogActions.ROLE_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case g.AuditLogActions.ROLE_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case g.AuditLogActions.ROLE_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case g.AuditLogActions.INVITE_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case g.AuditLogActions.INVITE_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case g.AuditLogActions.INVITE_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case g.AuditLogActions.WEBHOOK_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case g.AuditLogActions.WEBHOOK_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case g.AuditLogActions.WEBHOOK_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case g.AuditLogActions.EMOJI_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case g.AuditLogActions.EMOJI_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case g.AuditLogActions.EMOJI_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case g.AuditLogActions.STICKER_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case g.AuditLogActions.STICKER_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case g.AuditLogActions.STICKER_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case g.AuditLogActions.MESSAGE_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case g.AuditLogActions.MESSAGE_BULK_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case g.AuditLogActions.MESSAGE_PIN:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case g.AuditLogActions.MESSAGE_UNPIN:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case g.AuditLogActions.INTEGRATION_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case g.AuditLogActions.INTEGRATION_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case g.AuditLogActions.INTEGRATION_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case g.AuditLogActions.STAGE_INSTANCE_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case g.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case g.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case g.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
    case g.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
    case g.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
    case g.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === g.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case g.ChannelTypes.PRIVATE_THREAD:
          return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
        case g.ChannelTypes.ANNOUNCEMENT_THREAD:
          return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE
      }
    case g.AuditLogActions.THREAD_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
    case g.AuditLogActions.THREAD_DELETE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
    case g.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case g.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case g.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case g.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case g.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return L.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case g.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return L.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    case g.AuditLogActions.CLYDE_AI_PROFILE_UPDATE:
      return L.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CLYDE_AI_PROFILE_UPDATE;
    default:
      return null
  }
}

function H(e) {
  var t;
  let s = null == e ? void 0 : null === (t = e.changes) || void 0 === t ? void 0 : t.find(e => "reason" === e.key);
  if (null != s) return s.newValue
}

function V(e, t) {
  switch (e) {
    case g.Permissions.CREATE_INSTANT_INVITE:
      return L.default.Messages.CREATE_INSTANT_INVITE;
    case g.Permissions.KICK_MEMBERS:
      return L.default.Messages.KICK_MEMBERS;
    case g.Permissions.BAN_MEMBERS:
      return L.default.Messages.BAN_MEMBERS;
    case g.Permissions.ADMINISTRATOR:
      return L.default.Messages.ADMINISTRATOR;
    case g.Permissions.MANAGE_CHANNELS:
      if (t.targetType === g.AuditLogTargetTypes.CHANNEL || t.targetType === g.AuditLogTargetTypes.CHANNEL_OVERWRITE) return L.default.Messages.MANAGE_CHANNEL;
      return L.default.Messages.MANAGE_CHANNELS;
    case g.Permissions.MANAGE_GUILD:
      return L.default.Messages.MANAGE_SERVER;
    case g.Permissions.VIEW_GUILD_ANALYTICS:
      return L.default.Messages.VIEW_GUILD_ANALYTICS;
    case g.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return L.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
    case g.Permissions.CHANGE_NICKNAME:
      return L.default.Messages.CHANGE_NICKNAME;
    case g.Permissions.MANAGE_NICKNAMES:
      return L.default.Messages.MANAGE_NICKNAMES;
    case g.Permissions.MANAGE_ROLES:
      return L.default.Messages.MANAGE_ROLES;
    case g.Permissions.MANAGE_WEBHOOKS:
      return L.default.Messages.MANAGE_WEBHOOKS;
    case g.Permissions.CREATE_GUILD_EXPRESSIONS:
      return L.default.Messages.CREATE_EXPRESSIONS;
    case g.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return L.default.Messages.MANAGE_EXPRESSIONS;
    case g.Permissions.VIEW_AUDIT_LOG:
      return L.default.Messages.VIEW_AUDIT_LOG;
    case g.Permissions.VIEW_CHANNEL:
      return L.default.Messages.READ_MESSAGES;
    case g.Permissions.SEND_MESSAGES:
      return L.default.Messages.SEND_MESSAGES;
    case g.Permissions.SEND_TTS_MESSAGES:
      return L.default.Messages.SEND_TTS_MESSAGES;
    case g.Permissions.USE_APPLICATION_COMMANDS:
      return L.default.Messages.USE_APPLICATION_COMMANDS;
    case g.Permissions.MANAGE_MESSAGES:
      return L.default.Messages.MANAGE_MESSAGES;
    case g.Permissions.EMBED_LINKS:
      return L.default.Messages.EMBED_LINKS;
    case g.Permissions.ATTACH_FILES:
      return L.default.Messages.ATTACH_FILES;
    case g.Permissions.READ_MESSAGE_HISTORY:
      return L.default.Messages.READ_MESSAGE_HISTORY;
    case g.Permissions.MENTION_EVERYONE:
      return L.default.Messages.MENTION_EVERYONE;
    case g.Permissions.USE_EXTERNAL_EMOJIS:
      return L.default.Messages.USE_EXTERNAL_EMOJIS;
    case g.Permissions.USE_EXTERNAL_STICKERS:
      return L.default.Messages.USE_EXTERNAL_STICKERS;
    case g.Permissions.ADD_REACTIONS:
      return L.default.Messages.ADD_REACTIONS;
    case g.Permissions.CONNECT:
      return L.default.Messages.CONNECT;
    case g.Permissions.SPEAK:
      return L.default.Messages.SPEAK;
    case g.Permissions.MUTE_MEMBERS:
      return L.default.Messages.MUTE_MEMBERS;
    case g.Permissions.DEAFEN_MEMBERS:
      return L.default.Messages.DEAFEN_MEMBERS;
    case g.Permissions.MOVE_MEMBERS:
      return L.default.Messages.MOVE_MEMBERS;
    case g.Permissions.USE_VAD:
      return L.default.Messages.USE_VAD;
    case g.Permissions.PRIORITY_SPEAKER:
      return L.default.Messages.PRIORITY_SPEAKER;
    case g.Permissions.STREAM:
      return L.default.Messages.VIDEO;
    case g.Permissions.REQUEST_TO_SPEAK:
      return L.default.Messages.REQUEST_TO_SPEAK;
    case g.Permissions.CREATE_EVENTS:
      return L.default.Messages.CREATE_EVENTS;
    case g.Permissions.MANAGE_EVENTS:
      return L.default.Messages.MANAGE_EVENTS;
    case g.Permissions.CREATE_PUBLIC_THREADS:
      return L.default.Messages.CREATE_PUBLIC_THREADS;
    case g.Permissions.CREATE_PRIVATE_THREADS:
      return L.default.Messages.CREATE_PRIVATE_THREADS;
    case g.Permissions.SEND_MESSAGES_IN_THREADS:
      return L.default.Messages.SEND_MESSAGES_IN_THREADS;
    case g.Permissions.MANAGE_THREADS:
      return L.default.Messages.MANAGE_THREADS;
    case g.Permissions.MODERATE_MEMBERS:
      return L.default.Messages.MODERATE_MEMBER;
    case g.Permissions.SET_VOICE_CHANNEL_STATUS:
      return L.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function w(e, t) {
  if (null == t) return [];
  let s = [];
  return e.forEach(e => {
    let a = function(e, t) {
        switch (e.targetType) {
          case g.AuditLogTargetTypes.GUILD:
            return t;
          case g.AuditLogTargetTypes.CHANNEL:
          case g.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return K(e, g.AuditLogChangeKeys.NAME, e => I.default.getChannel(e), e => (0, o.computeChannelName)(e, N.default, S.default, !0));
          case g.AuditLogTargetTypes.USER:
            return K(e, g.AuditLogChangeKeys.NICK, e => N.default.getUser(e), void 0);
          case g.AuditLogTargetTypes.ROLE:
            return K(e, g.AuditLogChangeKeys.NAME, e => t.getRole(e), e => e.name);
          case g.AuditLogTargetTypes.INVITE:
            return K(e, g.AuditLogChangeKeys.CODE, g.NOOP_NULL);
          case g.AuditLogTargetTypes.INTEGRATION:
            return K(e, g.AuditLogChangeKeys.TYPE, e => c.default.integrations.find(t => t.id === e), e => e.name);
          case g.AuditLogTargetTypes.WEBHOOK:
            return K(e, g.AuditLogChangeKeys.NAME, e => c.default.webhooks.find(t => t.id === e), e => e.name);
          case g.AuditLogTargetTypes.EMOJI:
            return K(e, g.AuditLogChangeKeys.NAME, e => u.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case g.AuditLogTargetTypes.STICKER:
            return K(e, g.AuditLogChangeKeys.NAME, e => _.default.getStickerById(e), e => e.name);
          case g.AuditLogTargetTypes.STAGE_INSTANCE:
            return K(e, g.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(E.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case g.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
            return K(e, g.AuditLogChangeKeys.NAME, e => c.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case g.AuditLogTargetTypes.THREAD:
            return K(e, g.AuditLogChangeKeys.NAME, e => c.default.threads.find(t => t.id === e), e => e.name);
          case g.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = c.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return K(e, g.AuditLogChangeKeys.NAME, e => c.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === r.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          default:
            return m.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      l = N.default.getUser(e.userId);
    if (null != l && (null != a || e.action === g.AuditLogActions.MEMBER_PRUNE || e.action === g.AuditLogActions.MEMBER_DISCONNECT || e.action === g.AuditLogActions.MEMBER_MOVE || e.action === g.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === g.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
      if (null != (e = (e = (e = e.set("user", l)).set("target", a)).set("options", function(e) {
          if (null != e.options) {
            let a = {
              ...e.options
            };
            switch (e.options.type) {
              case g.AuditLogSubtargetTypes.USER:
                var t, s;
                (null === (t = e.options) || void 0 === t ? void 0 : t.id) != null && (a.subtarget = W(null == e ? void 0 : null === (s = e.options) || void 0 === s ? void 0 : s.id, e => N.default.getUser(e), e => e.tag));
                break;
              case g.AuditLogSubtargetTypes.ROLE:
                null != e.options.role_name && (a.subtarget = W(e.options.role_name, g.NOOP_NULL))
            }
            return null != e.options.channel_id && (a.channel = K(e, "", e => I.default.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (a.count = e.options.members_removed), a
          }
          return e.options
        }(e))).changes) {
        let s = [];
        e.changes.forEach(a => {
          let l = function(e, t, s) {
            if (t.action === g.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case g.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = W(t.id, e => s.getRole(e), e => e.name);
                  break;
                case g.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = W(t.id, e => N.default.getUser(e), e => e.tag);
                  break;
                case g.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === n(s.id).subtract(1).toString() ? e.subtarget = L.default.Messages.ALL_CHANNELS : e.subtarget = W(t.id, e => I.default.getChannel(e), e => (0, o.computeChannelName)(e, N.default, S.default, !0))
              }
              return e
            }
            switch (e.key) {
              case g.AuditLogChangeKeys.OWNER_ID:
                return Y(e, e => N.default.getUser(e));
              case g.AuditLogChangeKeys.CHANNEL_ID:
              case g.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case g.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case g.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case g.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return Y(e, e => I.default.getChannel(e), e => (0, o.computeChannelName)(e, N.default, S.default, !0));
              case g.AuditLogChangeKeys.AFK_TIMEOUT:
                return Y(e, e => e / 60);
              case g.AuditLogChangeKeys.BITRATE:
                return Y(e, e => e / 1e3);
              case g.AuditLogChangeKeys.COLOR:
                return Y(e, e => (0, i.int2hex)(e).toUpperCase());
              case g.AuditLogChangeKeys.MAX_AGE:
                return Y(e, e => {
                  let t = f.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case g.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = k(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new T.AuditLogChange(g.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (a.length > 0) {
                  let e = new T.AuditLogChange(g.AuditLogChangeKeys.PERMISSIONS_DENIED, null, a);
                  t.push(e)
                }
                return t
              }
              case g.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case g.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = k(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let a = new T.AuditLogChange(e.key, null, s);
                  t.push(a)
                }
                if (a.length > 0) {
                  let e = new T.AuditLogChange(g.AuditLogChangeKeys.PERMISSIONS_RESET, a, a);
                  t.push(e)
                }
                return t
              }
              case g.AuditLogChangeKeys.PREFERRED_LOCALE:
                return Y(e, e => {
                  let t = L.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case g.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return Y(e, e => e === g.VideoQualityMode.FULL ? L.default.Messages.VIDEO_QUALITY_MODE_FULL : L.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [g.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [g.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [g.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [g.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: g.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(g.SystemChannelFlags).forEach(a => {
                    let n = (e.oldValue & a) === a,
                      l = (e.newValue & a) === a;
                    if (n === l) return;
                    let i = new T.AuditLogChange(t[a], !n, !l);
                    s.push(i)
                  }), s
                }(e)
            }
            return e
          }(a, e, t);
          Array.isArray(l) ? l.forEach(e => s.push(e)) : s.push(l)
        }), e = e.set("changes", s)
      }
      s.push(e)
    }
  }), s
}

function k(e, t) {
  let s = l.default.deserialize("string" == typeof e ? e : 0),
    a = l.default.deserialize("string" == typeof t ? t : 0),
    n = l.default.remove(a, s),
    i = l.default.remove(s, a),
    r = [],
    o = [],
    d = {
      ...g.Permissions
    };
  for (let e in d) {
    let t = d[e];
    l.default.has(n, t) && r.push(t), l.default.has(i, t) && o.push(t)
  }
  return {
    added: r,
    removed: o
  }
}

function Y(e, t, s) {
  let a = e.newValue,
    n = e.oldValue;
  return null != e.newValue && (a = t(e.newValue), null != s && null != a && (a = s(a))), null != e.oldValue && (n = t(e.oldValue), null != s && null != n && (n = s(n))), new T.AuditLogChange(e.key, n || e.oldValue, a || e.newValue)
}

function K(e, t, s, a, n) {
  let l = null;
  n = null != n ? n : e.targetId;
  let i = s(n);
  if (null != i && null != a && (l = a(i)), null == l && null != i && (l = i), null == l) {
    let t = c.default.deletedTargets[e.targetType];
    null != t && null != t[n] && (l = t[n])
  }
  if (null == l && null != e.changes) {
    let s = e.changes.find(e => e.key === t);
    null != s && (l = s.newValue || s.oldValue)
  }
  return l || n
}

function W(e, t, s) {
  let a = e,
    n = t(e);
  return null != n && null != s && (a = s(n)), a
}

function z(e, t) {
  return s => null == s.oldValue ? e : t
}

function Z(e, t) {
  return s => null == s.newValue ? e : t
}

function X(e, t, s, a) {
  return n => {
    if (null != n.newValue && null != n.oldValue) return e;
    if (null != n.newValue) return t;
    if (null != n.oldValue) return s;
    return a
  }
}