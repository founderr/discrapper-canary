"use strict";
s.r(t), s.d(t, {
  ACTION_FILTER_ITEMS: function() {
    return en
  },
  AutoModerationRuleChangeStrings: function() {
    return es
  },
  ChannelChangeStrings: function() {
    return x
  },
  CommandPermissionChangeStrings: function() {
    return et
  },
  DEFAULT_FOR_STRINGS_KEY: function() {
    return B
  },
  EmojiChangeStrings: function() {
    return X
  },
  GuildChangeStrings: function() {
    return F
  },
  GuildScheduledEventChangeStrings: function() {
    return q
  },
  GuildScheduledEventExceptionChangeStrings: function() {
    return $
  },
  GuildSoundboardChangeStrings: function() {
    return eE
  },
  HomeSettingsChangeStrings: function() {
    return Y
  },
  IntegrationChangeStrings: function() {
    return z
  },
  InviteChangeStrings: function() {
    return W
  },
  NotRenderedChanges: function() {
    return ea
  },
  OnboardingChangeStrings: function() {
    return w
  },
  OnboardingPromptChangeStrings: function() {
    return k
  },
  RoleChangeStrings: function() {
    return j
  },
  StageInstanceChangeStrings: function() {
    return Q
  },
  StickerChangeStrings: function() {
    return Z
  },
  ThreadChangeStrings: function() {
    return ee
  },
  UserChangeStrings: function() {
    return b
  },
  VoiceChannelStatusStrings: function() {
    return e_
  },
  WebhookChangeStrings: function() {
    return J
  },
  getChangeTitle: function() {
    return eT
  },
  getStringForAddedChannelFlag: function() {
    return eu
  },
  getStringForPermission: function() {
    return eA
  },
  getStringForRemovedChannelFlag: function() {
    return ei
  },
  transformLogs: function() {
    return el
  }
}), s("411104"), s("653041");
var E = s("654861"),
  _ = s.n(E),
  a = s("913527"),
  n = s.n(a),
  T = s("536402"),
  u = s("533800"),
  i = s("149765"),
  A = s("866442"),
  l = s("911969"),
  I = s("933557"),
  L = s("710845"),
  o = s("339085"),
  r = s("236413"),
  d = s("45966"),
  S = s("563534"),
  N = s("776617"),
  g = s("427679"),
  D = s("926491"),
  c = s("387667"),
  G = s("592125"),
  O = s("430824"),
  U = s("699516"),
  C = s("594174"),
  M = s("55935"),
  R = s("630388"),
  f = s("823379"),
  h = s("971130"),
  p = s("709054"),
  y = s("981631"),
  P = s("176505"),
  m = s("273504"),
  H = s("765305"),
  v = s("689938");
let V = new L.default("AuditLogUtils"),
  B = -1,
  K = () => ({
    [y.AuditLogChangeKeys.REASON]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  F = () => ({
    [y.AuditLogChangeKeys.NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [y.AuditLogChangeKeys.DESCRIPTION]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [y.AuditLogChangeKeys.ICON_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [y.AuditLogChangeKeys.SPLASH_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [y.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [y.AuditLogChangeKeys.BANNER_HASH]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [y.AuditLogChangeKeys.OWNER_ID]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [y.AuditLogChangeKeys.REGION]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [y.AuditLogChangeKeys.PREFERRED_LOCALE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [y.AuditLogChangeKeys.AFK_CHANNEL_ID]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [y.AuditLogChangeKeys.AFK_TIMEOUT]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [y.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [y.AuditLogChangeKeys.RULES_CHANNEL_ID]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [y.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [y.AuditLogChangeKeys.MFA_LEVEL]: {
      [y.MFALevels.NONE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [y.MFALevels.ELEVATED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [y.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [y.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [y.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [y.VerificationLevels.NONE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [y.VerificationLevels.LOW]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [y.VerificationLevels.MEDIUM]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [y.VerificationLevels.HIGH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [y.VerificationLevels.VERY_HIGH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [y.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [y.UserNotificationSettings.ALL_MESSAGES]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [y.UserNotificationSettings.ONLY_MENTIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [y.AuditLogChangeKeys.VANITY_URL_CODE]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [y.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [y.GuildExplicitContentFilterTypes.DISABLED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [y.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [y.GuildExplicitContentFilterTypes.ALL_MEMBERS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [y.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [y.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...K()
  }),
  x = () => ({
    [y.AuditLogChangeKeys.NAME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [y.AuditLogChangeKeys.POSITION]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [y.AuditLogChangeKeys.TOPIC]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [y.AuditLogChangeKeys.BITRATE]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [y.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [y.AuditLogChangeKeys.USER_LIMIT]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [y.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [y.AuditLogChangeKeys.PERMISSIONS_RESET]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [y.AuditLogChangeKeys.PERMISSIONS_GRANTED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [y.AuditLogChangeKeys.PERMISSIONS_DENIED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [y.AuditLogChangeKeys.REASON]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [y.AuditLogChangeKeys.NSFW]: {
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [y.AuditLogChangeKeys.TYPE]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [y.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [y.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
    [y.AuditLogChangeKeys.FLAGS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
    [y.AuditLogChangeKeys.AVAILABLE_TAG_ADD]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
    [y.AuditLogChangeKeys.AVAILABLE_TAG_EDIT]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
    [y.AuditLogChangeKeys.AVAILABLE_TAG_DELETE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE
  }),
  b = () => ({
    [y.AuditLogChangeKeys.NICK]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [y.AuditLogChangeKeys.DEAF]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [y.AuditLogChangeKeys.MUTE]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [y.AuditLogChangeKeys.ROLES_REMOVE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [y.AuditLogChangeKeys.ROLES_ADD]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [y.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [y.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [y.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [y.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...K()
  }),
  j = () => ({
    [y.AuditLogChangeKeys.NAME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [y.AuditLogChangeKeys.DESCRIPTION]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    [y.AuditLogChangeKeys.PERMISSIONS_GRANTED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [y.AuditLogChangeKeys.PERMISSIONS_DENIED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [y.AuditLogChangeKeys.COLOR]: {
      "#000000": v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [B]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [y.AuditLogChangeKeys.HOIST]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [y.AuditLogChangeKeys.MENTIONABLE]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [y.AuditLogChangeKeys.ICON_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [y.AuditLogChangeKeys.UNICODE_EMOJI]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...K()
  }),
  k = () => ({
    ...K(),
    [y.AuditLogChangeKeys.TITLE]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE
    },
    [y.AuditLogChangeKeys.DESCRIPTION]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({
        newValue: s
      })
    },
    [y.AuditLogChangeKeys.OPTIONS]: () => v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
    [y.AuditLogChangeKeys.SINGLE_SELECT]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT
    },
    [y.AuditLogChangeKeys.REQUIRED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL
    }
  }),
  w = () => ({
    ...K(),
    [y.AuditLogChangeKeys.DEFAULT_CHANNEL_IDS]: e => {
      let {
        newValue: t
      } = e;
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({
        count: t.length
      })
    },
    [y.AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS
    },
    [y.AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS
    },
    [y.AuditLogChangeKeys.ENABLED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE
    }
  }),
  Y = () => ({
    ...K(),
    [y.AuditLogChangeKeys.WELCOME_MESSAGE]: () => v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
    [y.AuditLogChangeKeys.NEW_MEMBER_ACTIONS]: () => v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
    [y.AuditLogChangeKeys.RESOURCE_CHANNELS]: () => v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
  }),
  W = () => ({
    [y.AuditLogChangeKeys.CODE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [y.AuditLogChangeKeys.CHANNEL_ID]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [y.AuditLogChangeKeys.MAX_USES]: {
      0: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [B]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [y.AuditLogChangeKeys.MAX_AGE]: {
      0: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [B]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [y.AuditLogChangeKeys.TEMPORARY]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    [y.AuditLogChangeKeys.FLAGS]: e => {
      let {
        newValue: t
      } = e;
      return function(e) {
        let {
          newValue: t
        } = e;
        return t.map(e => (function(e) {
          if (e === u.GuildInviteFlags.IS_GUEST_INVITE) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
          return null
        })(e)).filter(f.isNotNullish)
      }({
        newValue: t
      })
    },
    ...K()
  }),
  J = () => ({
    [y.AuditLogChangeKeys.CHANNEL_ID]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [y.AuditLogChangeKeys.NAME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [y.AuditLogChangeKeys.AVATAR_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [y.AuditLogChangeKeys.REASON]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  X = () => ({
    [y.AuditLogChangeKeys.NAME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...K()
  }),
  Z = () => ({
    [y.AuditLogChangeKeys.NAME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [y.AuditLogChangeKeys.TAGS]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [y.AuditLogChangeKeys.DESCRIPTION]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...K()
  }),
  z = () => ({
    [y.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [y.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [y.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...K()
  }),
  Q = () => ({
    [y.AuditLogChangeKeys.TOPIC]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [y.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [H.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [H.GuildScheduledEventPrivacyLevel.PUBLIC]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...K()
  }),
  q = () => ({
    [y.AuditLogChangeKeys.NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [y.AuditLogChangeKeys.DESCRIPTION]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [y.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [H.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [H.GuildScheduledEventPrivacyLevel.PUBLIC]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [y.AuditLogChangeKeys.STATUS]: {
      [H.GuildScheduledEventStatus.SCHEDULED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [H.GuildScheduledEventStatus.ACTIVE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [H.GuildScheduledEventStatus.COMPLETED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [H.GuildScheduledEventStatus.CANCELED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [y.AuditLogChangeKeys.ENTITY_TYPE]: {
      [H.GuildScheduledEventEntityTypes.NONE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [H.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [H.GuildScheduledEventEntityTypes.VOICE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [H.GuildScheduledEventEntityTypes.EXTERNAL]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [y.AuditLogChangeKeys.CHANNEL_ID]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [y.AuditLogChangeKeys.LOCATION]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [y.AuditLogChangeKeys.IMAGE_HASH]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
    ...K()
  }),
  $ = () => ({
    [y.AuditLogChangeKeys.SCHEDULED_START_TIME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
    [y.AuditLogChangeKeys.SCHEDULED_END_TIME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
    [y.AuditLogChangeKeys.IS_CANCELED]: e => {
      if (null != e.oldValue || !0 === e.newValue) {
        if (!e.oldValue && e.newValue) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
        if (e.oldValue && !e.newValue) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED
      }
      return ""
    },
    ...K()
  }),
  ee = () => ({
    [y.AuditLogChangeKeys.NAME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [y.AuditLogChangeKeys.ARCHIVED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [y.AuditLogChangeKeys.LOCKED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [y.AuditLogChangeKeys.INVITABLE]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [y.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [y.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [y.AuditLogChangeKeys.FLAGS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
    ...K()
  }),
  et = e => {
    let t = {
      ...K()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  es = () => ({
    [y.AuditLogChangeKeys.NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
    [y.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
    [y.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
    [y.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
    [y.AuditLogChangeKeys.AUTO_MODERATION_ENABLED]: e => {
      var t;
      return !0 === (null !== (t = e.newValue) && void 0 !== t ? t : e.oldValue) ? v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE
    },
    [y.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
    [y.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
    [y.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
    [y.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
    [y.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
    [y.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
    [y.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
    [y.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
    [y.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
    ...K()
  }),
  eE = () => ({
    [y.AuditLogChangeKeys.NAME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
    [y.AuditLogChangeKeys.VOLUME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
    [y.AuditLogChangeKeys.EMOJI_NAME]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
    [y.AuditLogChangeKeys.EMOJI_ID]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
    ...K()
  }),
  e_ = () => ({
    [y.AuditLogChangeKeys.STATUS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
    ...K()
  }),
  ea = {
    [y.AuditLogTargetTypes.CHANNEL]: {
      [y.AuditLogChangeKeys.ID]: !0,
      [y.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [y.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [y.AuditLogChangeKeys.TYPE]: !0,
      [y.AuditLogChangeKeys.ID]: !0,
      [y.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [y.AuditLogTargetTypes.INVITE]: {
      [y.AuditLogChangeKeys.INVITER_ID]: !0,
      [y.AuditLogChangeKeys.USES]: !0
    },
    [y.AuditLogTargetTypes.WEBHOOK]: {
      [y.AuditLogChangeKeys.TYPE]: !0,
      [y.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [y.AuditLogTargetTypes.INTEGRATION]: {
      [y.AuditLogChangeKeys.TYPE]: !0
    },
    [y.AuditLogTargetTypes.THREAD]: {
      [y.AuditLogChangeKeys.ID]: !0,
      [y.AuditLogChangeKeys.TYPE]: !0
    },
    [y.AuditLogTargetTypes.STICKER]: {
      [y.AuditLogChangeKeys.ID]: !0,
      [y.AuditLogChangeKeys.TYPE]: !0,
      [y.AuditLogChangeKeys.ASSET]: !0,
      [y.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [y.AuditLogChangeKeys.AVAILABLE]: !0,
      [y.AuditLogChangeKeys.GUILD_ID]: !0
    },
    [y.AuditLogTargetTypes.GUILD_HOME]: {
      [y.AuditLogChangeKeys.ENTITY_TYPE]: !0
    },
    [y.AuditLogTargetTypes.GUILD_ONBOARDING]: {
      [y.AuditLogChangeKeys.PROMPTS]: !0
    },
    [y.AuditLogTargetTypes.GUILD_SOUNDBOARD]: {
      [y.AuditLogChangeKeys.ID]: !0,
      [y.AuditLogChangeKeys.SOUND_ID]: !0
    }
  },
  en = () => [{
    value: y.AuditLogActions.ALL,
    label: v.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: v.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: y.AuditLogActions.GUILD_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: y.AuditLogActions.CHANNEL_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: y.AuditLogActions.CHANNEL_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: y.AuditLogActions.CHANNEL_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: y.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: y.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: y.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: y.AuditLogActions.MEMBER_KICK,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: y.AuditLogActions.MEMBER_PRUNE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: y.AuditLogActions.MEMBER_BAN_ADD,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: y.AuditLogActions.MEMBER_BAN_REMOVE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: y.AuditLogActions.MEMBER_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: y.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: y.AuditLogActions.MEMBER_MOVE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: y.AuditLogActions.MEMBER_DISCONNECT,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: y.AuditLogActions.BOT_ADD,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: y.AuditLogActions.THREAD_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: y.AuditLogActions.THREAD_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: y.AuditLogActions.THREAD_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: y.AuditLogActions.ROLE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: y.AuditLogActions.ROLE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: y.AuditLogActions.ROLE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: y.AuditLogActions.ONBOARDING_PROMPT_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
  }, {
    value: y.AuditLogActions.ONBOARDING_PROMPT_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
  }, {
    value: y.AuditLogActions.ONBOARDING_PROMPT_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
  }, {
    value: y.AuditLogActions.ONBOARDING_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
  }, {
    value: y.AuditLogActions.ONBOARDING_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
  }, {
    value: y.AuditLogActions.HOME_SETTINGS_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
  }, {
    value: y.AuditLogActions.HOME_SETTINGS_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
  }, {
    value: y.AuditLogActions.INVITE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: y.AuditLogActions.INVITE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: y.AuditLogActions.INVITE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: y.AuditLogActions.WEBHOOK_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: y.AuditLogActions.WEBHOOK_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: y.AuditLogActions.WEBHOOK_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: y.AuditLogActions.EMOJI_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: y.AuditLogActions.EMOJI_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: y.AuditLogActions.EMOJI_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: y.AuditLogActions.MESSAGE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: y.AuditLogActions.MESSAGE_BULK_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: y.AuditLogActions.MESSAGE_PIN,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: y.AuditLogActions.MESSAGE_UNPIN,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: y.AuditLogActions.INTEGRATION_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: y.AuditLogActions.INTEGRATION_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: y.AuditLogActions.INTEGRATION_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: y.AuditLogActions.STICKER_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: y.AuditLogActions.STICKER_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: y.AuditLogActions.STICKER_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: y.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: y.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: y.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: y.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: y.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: y.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: y.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: y.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: y.AuditLogActions.AUTO_MODERATION_RULE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
  }, {
    value: y.AuditLogActions.AUTO_MODERATION_RULE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
  }, {
    value: y.AuditLogActions.AUTO_MODERATION_RULE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
  }, {
    value: y.AuditLogActions.GUILD_HOME_FEATURE_ITEM,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
  }, {
    value: y.AuditLogActions.GUILD_HOME_REMOVE_ITEM,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
  }, {
    value: y.AuditLogActions.SOUNDBOARD_SOUND_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
  }, {
    value: y.AuditLogActions.SOUNDBOARD_SOUND_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
  }, {
    value: y.AuditLogActions.SOUNDBOARD_SOUND_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
  }, {
    value: y.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
  }, {
    value: y.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
  }];

function eT(e) {
  switch (e.action) {
    case y.AuditLogActions.GUILD_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case y.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === y.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case y.ChannelTypes.GUILD_STAGE_VOICE:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case y.ChannelTypes.GUILD_VOICE:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case y.ChannelTypes.GUILD_CATEGORY:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case y.AuditLogActions.CHANNEL_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case y.AuditLogActions.CHANNEL_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case y.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case y.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case y.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case y.AuditLogActions.MEMBER_KICK:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case y.AuditLogActions.MEMBER_PRUNE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case y.AuditLogActions.MEMBER_BAN_ADD:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
    case y.AuditLogActions.MEMBER_BAN_REMOVE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case y.AuditLogActions.MEMBER_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case y.AuditLogActions.MEMBER_ROLE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case y.AuditLogActions.MEMBER_MOVE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case y.AuditLogActions.MEMBER_DISCONNECT:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case y.AuditLogActions.BOT_ADD:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case y.AuditLogActions.ROLE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case y.AuditLogActions.ROLE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case y.AuditLogActions.ROLE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case y.AuditLogActions.INVITE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case y.AuditLogActions.INVITE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case y.AuditLogActions.INVITE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case y.AuditLogActions.WEBHOOK_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case y.AuditLogActions.WEBHOOK_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case y.AuditLogActions.WEBHOOK_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case y.AuditLogActions.EMOJI_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case y.AuditLogActions.EMOJI_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case y.AuditLogActions.EMOJI_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case y.AuditLogActions.STICKER_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case y.AuditLogActions.STICKER_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case y.AuditLogActions.STICKER_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case y.AuditLogActions.MESSAGE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case y.AuditLogActions.MESSAGE_BULK_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case y.AuditLogActions.MESSAGE_PIN:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case y.AuditLogActions.MESSAGE_UNPIN:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case y.AuditLogActions.INTEGRATION_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case y.AuditLogActions.INTEGRATION_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case y.AuditLogActions.INTEGRATION_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case y.AuditLogActions.STAGE_INSTANCE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case y.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case y.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case y.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
    case y.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
    case y.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
    case y.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case y.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
    case y.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
    case y.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === y.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case y.ChannelTypes.PRIVATE_THREAD:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
        case y.ChannelTypes.ANNOUNCEMENT_THREAD:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE
      }
    case y.AuditLogActions.THREAD_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
    case y.AuditLogActions.THREAD_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
    case y.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case y.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case y.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var E;
      if ((null === (E = e.options) || void 0 === E ? void 0 : E.auto_moderation_rule_trigger_type) === m.AutomodTriggerType.USER_PROFILE.toString()) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case y.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case y.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
    case y.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return v.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case y.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return v.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    case y.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
    case y.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
    case y.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
    case y.AuditLogActions.ONBOARDING_PROMPT_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
    case y.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
    case y.AuditLogActions.ONBOARDING_PROMPT_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
    case y.AuditLogActions.ONBOARDING_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
    case y.AuditLogActions.ONBOARDING_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
    case y.AuditLogActions.HOME_SETTINGS_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
    case y.AuditLogActions.HOME_SETTINGS_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
    case y.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
      let _ = null != e.changes ? e.changes.find(e => e.key === y.AuditLogChangeKeys.ENTITY_TYPE) : null;
      if (null == _) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
      switch (_.newValue) {
        case T.GuildFeedItemTypes.MESSAGE:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
        case T.GuildFeedItemTypes.FORUM_POST:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
        default:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM
      }
    case y.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
    case y.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
    case y.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
    case y.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
    case y.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
    case y.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
    default:
      return null
  }
}

function eu(e) {
  switch (e) {
    case P.ChannelFlags.GUILD_FEED_REMOVED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
    case P.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
    case P.ChannelFlags.PINNED:
      return v.default.Messages.PINNED_POST
  }
  return null
}

function ei(e) {
  switch (e) {
    case P.ChannelFlags.GUILD_FEED_REMOVED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
    case P.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
    case P.ChannelFlags.PINNED:
      return v.default.Messages.UNPINNED_POST
  }
  return null
}

function eA(e, t) {
  switch (e) {
    case y.Permissions.CREATE_INSTANT_INVITE:
      return v.default.Messages.CREATE_INSTANT_INVITE;
    case y.Permissions.KICK_MEMBERS:
      return v.default.Messages.KICK_MEMBERS;
    case y.Permissions.BAN_MEMBERS:
      return v.default.Messages.BAN_MEMBERS;
    case y.Permissions.ADMINISTRATOR:
      return v.default.Messages.ADMINISTRATOR;
    case y.Permissions.MANAGE_CHANNELS:
      if (t.targetType === y.AuditLogTargetTypes.CHANNEL || t.targetType === y.AuditLogTargetTypes.CHANNEL_OVERWRITE) return v.default.Messages.MANAGE_CHANNEL;
      return v.default.Messages.MANAGE_CHANNELS;
    case y.Permissions.MANAGE_GUILD:
      return v.default.Messages.MANAGE_SERVER;
    case y.Permissions.VIEW_GUILD_ANALYTICS:
      return v.default.Messages.VIEW_GUILD_ANALYTICS;
    case y.Permissions.CHANGE_NICKNAME:
      return v.default.Messages.CHANGE_NICKNAME;
    case y.Permissions.MANAGE_NICKNAMES:
      return v.default.Messages.MANAGE_NICKNAMES;
    case y.Permissions.MANAGE_ROLES:
      return v.default.Messages.MANAGE_ROLES;
    case y.Permissions.MANAGE_WEBHOOKS:
      return v.default.Messages.MANAGE_WEBHOOKS;
    case y.Permissions.CREATE_GUILD_EXPRESSIONS:
      return v.default.Messages.CREATE_EXPRESSIONS;
    case y.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return v.default.Messages.MANAGE_EXPRESSIONS;
    case y.Permissions.VIEW_AUDIT_LOG:
      return v.default.Messages.VIEW_AUDIT_LOG;
    case y.Permissions.VIEW_CHANNEL:
      return v.default.Messages.READ_MESSAGES;
    case y.Permissions.SEND_MESSAGES:
      return v.default.Messages.SEND_MESSAGES;
    case y.Permissions.SEND_TTS_MESSAGES:
      return v.default.Messages.SEND_TTS_MESSAGES;
    case y.Permissions.USE_APPLICATION_COMMANDS:
      return v.default.Messages.USE_APPLICATION_COMMANDS;
    case y.Permissions.MANAGE_MESSAGES:
      return v.default.Messages.MANAGE_MESSAGES;
    case y.Permissions.EMBED_LINKS:
      return v.default.Messages.EMBED_LINKS;
    case y.Permissions.ATTACH_FILES:
      return v.default.Messages.ATTACH_FILES;
    case y.Permissions.READ_MESSAGE_HISTORY:
      return v.default.Messages.READ_MESSAGE_HISTORY;
    case y.Permissions.MENTION_EVERYONE:
      return v.default.Messages.MENTION_EVERYONE;
    case y.Permissions.USE_EXTERNAL_EMOJIS:
      return v.default.Messages.USE_EXTERNAL_EMOJIS;
    case y.Permissions.USE_EXTERNAL_STICKERS:
      return v.default.Messages.USE_EXTERNAL_STICKERS;
    case y.Permissions.ADD_REACTIONS:
      return v.default.Messages.ADD_REACTIONS;
    case y.Permissions.CONNECT:
      return v.default.Messages.CONNECT;
    case y.Permissions.SPEAK:
      return v.default.Messages.SPEAK;
    case y.Permissions.MUTE_MEMBERS:
      return v.default.Messages.MUTE_MEMBERS;
    case y.Permissions.DEAFEN_MEMBERS:
      return v.default.Messages.DEAFEN_MEMBERS;
    case y.Permissions.MOVE_MEMBERS:
      return v.default.Messages.MOVE_MEMBERS;
    case y.Permissions.USE_VAD:
      return v.default.Messages.USE_VAD;
    case y.Permissions.PRIORITY_SPEAKER:
      return v.default.Messages.PRIORITY_SPEAKER;
    case y.Permissions.STREAM:
      return v.default.Messages.VIDEO;
    case y.Permissions.REQUEST_TO_SPEAK:
      return v.default.Messages.REQUEST_TO_SPEAK;
    case y.Permissions.CREATE_EVENTS:
      return v.default.Messages.CREATE_EVENTS;
    case y.Permissions.MANAGE_EVENTS:
      return v.default.Messages.MANAGE_EVENTS;
    case y.Permissions.CREATE_PUBLIC_THREADS:
      return v.default.Messages.CREATE_PUBLIC_THREADS;
    case y.Permissions.CREATE_PRIVATE_THREADS:
      return v.default.Messages.CREATE_PRIVATE_THREADS;
    case y.Permissions.SEND_MESSAGES_IN_THREADS:
      return v.default.Messages.SEND_MESSAGES_IN_THREADS;
    case y.Permissions.MANAGE_THREADS:
      return v.default.Messages.MANAGE_THREADS;
    case y.Permissions.MODERATE_MEMBERS:
      return v.default.Messages.MODERATE_MEMBER;
    case y.Permissions.USE_CLYDE_AI:
      return v.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
    case y.Permissions.SET_VOICE_CHANNEL_STATUS:
      return v.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function el(e, t) {
  let s = [];
  return e.forEach(e => {
    let E = function(e, t) {
        switch (e.targetType) {
          case y.AuditLogTargetTypes.GUILD:
          case y.AuditLogTargetTypes.GUILD_HOME:
            return t;
          case y.AuditLogTargetTypes.CHANNEL:
          case y.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return er(e, y.AuditLogChangeKeys.NAME, e => G.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
          case y.AuditLogTargetTypes.USER:
            return er(e, y.AuditLogChangeKeys.NICK, e => C.default.getUser(e), e => e);
          case y.AuditLogTargetTypes.ROLE:
            return er(e, y.AuditLogChangeKeys.NAME, e => O.default.getRole(t.id, e), e => e.name);
          case y.AuditLogTargetTypes.ONBOARDING_PROMPT:
            let s = er(e, y.AuditLogChangeKeys.ID, e => d.default.getOnboardingPrompt(e), e => e.title);
            return null != s ? s : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
          case y.AuditLogTargetTypes.GUILD_ONBOARDING:
            return t;
          case y.AuditLogTargetTypes.INVITE:
            return er(e, y.AuditLogChangeKeys.CODE, y.NOOP_NULL);
          case y.AuditLogTargetTypes.INTEGRATION:
            return er(e, y.AuditLogChangeKeys.TYPE, e => N.default.integrations.find(t => t.id === e), e => e.name);
          case y.AuditLogTargetTypes.WEBHOOK:
            return er(e, y.AuditLogChangeKeys.NAME, e => N.default.webhooks.find(t => t.id === e), e => e.name);
          case y.AuditLogTargetTypes.EMOJI:
            return er(e, y.AuditLogChangeKeys.NAME, e => o.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case y.AuditLogTargetTypes.STICKER:
            return er(e, y.AuditLogChangeKeys.NAME, e => D.default.getStickerById(e), e => e.name);
          case y.AuditLogTargetTypes.STAGE_INSTANCE:
            return er(e, y.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(g.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case y.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
          case y.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return er(e, y.AuditLogChangeKeys.NAME, e => N.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case y.AuditLogTargetTypes.THREAD:
            return er(e, y.AuditLogChangeKeys.NAME, e => N.default.threads.find(t => t.id === e), e => e.name);
          case y.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = N.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return er(e, y.AuditLogChangeKeys.NAME, e => N.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === l.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          case y.AuditLogTargetTypes.AUTO_MODERATION_RULE:
            return er(e, y.AuditLogChangeKeys.NAME, e => N.default.automodRules.find(t => t.id === e), e => e.name);
          case y.AuditLogTargetTypes.GUILD_SOUNDBOARD:
            return er(e, y.AuditLogChangeKeys.NAME, y.NOOP_NULL);
          case y.AuditLogTargetTypes.HOME_SETTINGS:
            return er(e, y.AuditLogChangeKeys.GUILD_ID, e => S.default.getSettings(e), () => v.default.Messages.SERVER_GUIDE, t.id);
          case y.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
            return er(e, y.AuditLogChangeKeys.STATUS, e => G.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
          default:
            return V.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = C.default.getUser(e.userId);
    if (null != E || [y.AuditLogActions.MEMBER_PRUNE, y.AuditLogActions.MEMBER_DISCONNECT, y.AuditLogActions.MEMBER_MOVE, y.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED, y.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", E)).set("options", function(e) {
          if (null != e.options) {
            let s = {
              ...e.options
            };
            switch (e.options.type) {
              case y.AuditLogSubtargetTypes.USER:
                s.subtarget = ed(e.options.id, e => C.default.getUser(e), e => e.tag);
                break;
              case y.AuditLogSubtargetTypes.ROLE:
                s.subtarget = ed(e.options.role_name, y.NOOP_NULL)
            }
            if (null != e.options.channel_id && (s.channel = er(e, "", e => G.default.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (s.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let E = N.default.guildScheduledEvents.find(t => t.id === e.targetId),
                _ = null == E ? void 0 : E.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              s.subtarget = (0, M.dateFormat)(n()(p.default.extractTimestamp(null !== (t = null == _ ? void 0 : _.event_exception_id) && void 0 !== t ? t : "0")), "LL")
            }
            return s
          }
          return e.options
        }(e))).changes) {
        let s = [];
        e.changes.forEach(E => {
          let a = function(e, t, s) {
            if (t.action === y.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case y.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = ed(t.id, e => O.default.getRole(s.id, e), e => e.name);
                  break;
                case y.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = ed(t.id, e => C.default.getUser(e), e => e.tag);
                  break;
                case y.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === _()(s.id).subtract(1).toString() ? e.subtarget = v.default.Messages.ALL_CHANNELS : e.subtarget = ed(t.id, e => G.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0))
              }
              return e
            }
            switch (e.key) {
              case y.AuditLogChangeKeys.OWNER_ID:
                return eo(e, e => C.default.getUser(e));
              case y.AuditLogChangeKeys.CHANNEL_ID:
              case y.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case y.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case y.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case y.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return eo(e, e => G.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
              case y.AuditLogChangeKeys.AFK_TIMEOUT:
                return eo(e, e => e / 60);
              case y.AuditLogChangeKeys.BITRATE:
                return eo(e, e => e / 1e3);
              case y.AuditLogChangeKeys.COLOR:
                return eo(e, e => (0, A.int2hex)(e).toUpperCase());
              case y.AuditLogChangeKeys.THEME_COLORS:
                return eo(e, e => "".concat((0, A.int2hex)(e[0]).toUpperCase(), ", ").concat((0, A.int2hex)(e[1]).toUpperCase()));
              case y.AuditLogChangeKeys.MAX_AGE:
                return eo(e, e => {
                  let t = h.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case y.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = eI(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new c.AuditLogChange(y.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (E.length > 0) {
                  let e = new c.AuditLogChange(y.AuditLogChangeKeys.PERMISSIONS_DENIED, null, E);
                  t.push(e)
                }
                return t
              }
              case y.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case y.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = eI(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let E = new c.AuditLogChange(e.key, null, s);
                  t.push(E)
                }
                if (E.length > 0) {
                  let e = new c.AuditLogChange(y.AuditLogChangeKeys.PERMISSIONS_RESET, E, E);
                  t.push(e)
                }
                return t
              }
              case y.AuditLogChangeKeys.FLAGS: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = function(e, t) {
                    let s = "number" == typeof e ? e : 0,
                      E = "number" == typeof t ? t : 0,
                      _ = R.removeFlag(E, s),
                      a = R.removeFlag(s, E),
                      n = [],
                      T = [];
                    for (let e in P.ChannelFlags) {
                      let t = P.ChannelFlags[e];
                      R.hasFlag(_, t) && n.push(t), R.hasFlag(a, t) && T.push(t)
                    }
                    return {
                      added: n,
                      removed: T
                    }
                  }(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let E = new c.AuditLogChange(e.key, null, s);
                  t.push(E)
                }
                if (E.length > 0) {
                  let s = new c.AuditLogChange(e.key, E, null);
                  t.push(s)
                }
                return t
              }
              case y.AuditLogChangeKeys.PREFERRED_LOCALE:
                return eo(e, e => {
                  let t = v.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case y.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return eo(e, e => e === y.VideoQualityMode.FULL ? v.default.Messages.VIDEO_QUALITY_MODE_FULL : v.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [y.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [y.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [y.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [y.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: y.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(y.SystemChannelFlags).forEach(E => {
                    let _ = (e.oldValue & E) === E,
                      a = (e.newValue & E) === E;
                    if (_ === a) return;
                    let n = new c.AuditLogChange(t[E], !_, !a);
                    s.push(n)
                  }), s
                }(e);
              case y.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS:
                if (t.targetType === y.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(e => e.type), e => e.map(r.actionTypeToName).join(", "));
                break;
              case y.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === y.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, r.eventTypeToName);
                break;
              case y.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === y.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, r.triggerTypeToName);
                break;
              case y.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === y.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => {
                  if (null != e && "object" == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({
                    newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                  }) : JSON.stringify(e);
                  return e
                });
                break;
              case y.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS:
              case y.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS:
              case y.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case y.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case y.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST:
              case y.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === y.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case y.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === y.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(G.default.getChannel).filter(e => null != e).map(e => (0, I.computeChannelName)(e, C.default, U.default, !0)), e => null != e && e.length > 0 ? e.join(", ") : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case y.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === y.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(e => O.default.getRole(s.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case y.AuditLogChangeKeys.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: s
                  } = e, E = Array.isArray(t) ? t : [], _ = Array.isArray(s) ? s : [];
                  if (0 === E.length && 0 === _.length) return e;
                  let a = {},
                    n = {};
                  if (E.forEach(e => {
                      a[e.id] = e
                    }), _.forEach(e => {
                      n[e.id] = e
                    }), E.length < _.length) {
                    for (let e in n)
                      if (null == a[e]) return new c.AuditLogChange(y.AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, eL(n[e]))
                  }
                  if (E.length > _.length) {
                    for (let e in a)
                      if (null == n[e]) return new c.AuditLogChange(y.AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, eL(a[e]))
                  }
                  for (let e in a) {
                    let t = a[e],
                      s = n[e];
                    if ((null == s ? void 0 : s.name) !== t.name || (null == s ? void 0 : s.emoji_id) !== t.emoji_id || (null == s ? void 0 : s.emoji_name) !== t.emoji_name) return new c.AuditLogChange(y.AuditLogChangeKeys.AVAILABLE_TAG_EDIT, eL(t), eL(s))
                  }
                  return e
                }(e);
              case y.AuditLogChangeKeys.SCHEDULED_START_TIME:
              case y.AuditLogChangeKeys.SCHEDULED_END_TIME:
                return eo(e, e => (0, M.dateFormat)(n()(new Date(e)), "LLLL"))
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

function eI(e, t) {
  let s = i.deserialize("string" == typeof e ? e : 0),
    E = i.deserialize("string" == typeof t ? t : 0),
    _ = i.remove(E, s),
    a = i.remove(s, E),
    n = [],
    T = [];
  for (let e in y.Permissions) {
    let t = y.Permissions[e];
    i.has(_, t) && n.push(t), i.has(a, t) && T.push(t)
  }
  return {
    added: n,
    removed: T
  }
}

function eL(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function eo(e, t, s) {
  let E = e.newValue,
    _ = e.oldValue;
  return null != e.newValue && (E = t(e.newValue), null != s && null != E && (E = s(E))), null != e.oldValue && (_ = t(e.oldValue), null != s && null != _ && (_ = s(_))), new c.AuditLogChange(e.key, _ || e.oldValue, E || e.newValue)
}

function er(e, t, s, E, _) {
  let a = null,
    n = s(_ = null != _ ? _ : e.targetId);
  if (null != n && null != E && (a = E(n)), null == a) {
    let t = N.default.deletedTargets[e.targetType];
    null != t && null != t[_] && (a = t[_])
  }
  if (null == a && null != e.changes) {
    let s = e.changes.find(e => e.key === t);
    null != s && (a = s.newValue || s.oldValue)
  }
  return null != a ? a : _
}

function ed(e, t, s) {
  let E = e,
    _ = t(e);
  return null != _ && null != s && (E = s(_)), E
}

function eS(e, t) {
  return s => null == s.oldValue ? e : t
}

function eN(e, t) {
  return s => null == s.newValue ? e : t
}

function eg(e, t, s, E) {
  return _ => {
    if (null != _.newValue && null != _.oldValue) return e;
    if (null != _.newValue) return t;
    if (null != _.oldValue) return s;
    return E
  }
}