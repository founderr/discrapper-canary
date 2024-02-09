"use strict";
E.r(t), E.d(t, {
  DEFAULT_FOR_STRINGS_KEY: function() {
    return V
  },
  GuildChangeStrings: function() {
    return K
  },
  ChannelChangeStrings: function() {
    return F
  },
  UserChangeStrings: function() {
    return x
  },
  RoleChangeStrings: function() {
    return b
  },
  OnboardingPromptChangeStrings: function() {
    return j
  },
  OnboardingChangeStrings: function() {
    return k
  },
  HomeSettingsChangeStrings: function() {
    return Y
  },
  InviteChangeStrings: function() {
    return w
  },
  WebhookChangeStrings: function() {
    return W
  },
  EmojiChangeStrings: function() {
    return J
  },
  StickerChangeStrings: function() {
    return X
  },
  IntegrationChangeStrings: function() {
    return z
  },
  StageInstanceChangeStrings: function() {
    return Z
  },
  GuildScheduledEventChangeStrings: function() {
    return Q
  },
  GuildScheduledEventExceptionChangeStrings: function() {
    return q
  },
  ThreadChangeStrings: function() {
    return $
  },
  CommandPermissionChangeStrings: function() {
    return ee
  },
  AutoModerationRuleChangeStrings: function() {
    return et
  },
  GuildSoundboardChangeStrings: function() {
    return eE
  },
  VoiceChannelStatusStrings: function() {
    return e_
  },
  NotRenderedChanges: function() {
    return es
  },
  ACTION_FILTER_ITEMS: function() {
    return ea
  },
  getChangeTitle: function() {
    return eT
  },
  getStringForAddedChannelFlag: function() {
    return en
  },
  getStringForRemovedChannelFlag: function() {
    return eA
  },
  getStringForPermission: function() {
    return eu
  },
  transformLogs: function() {
    return eI
  }
}), E("70102"), E("424973");
var _ = E("552442"),
  s = E.n(_),
  a = E("866227"),
  T = E.n(a),
  n = E("611221"),
  A = E("498574"),
  u = E("316693"),
  I = E("509043"),
  i = E("798609"),
  l = E("679653"),
  L = E("605250"),
  o = E("385976"),
  r = E("454686"),
  d = E("863636"),
  N = E("698882"),
  S = E("287103"),
  g = E("834052"),
  D = E("364685"),
  G = E("242020"),
  O = E("42203"),
  c = E("27618"),
  U = E("697218"),
  C = E("888400"),
  M = E("568734"),
  R = E("449008"),
  f = E("354023"),
  h = E("299039"),
  p = E("49111"),
  P = E("724210"),
  y = E("143460"),
  H = E("745049"),
  m = E("782340");
let v = new L.default("AuditLogUtils"),
  V = -1,
  B = () => ({
    [p.AuditLogChangeKeys.REASON]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  K = () => ({
    [p.AuditLogChangeKeys.NAME]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [p.AuditLogChangeKeys.DESCRIPTION]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [p.AuditLogChangeKeys.ICON_HASH]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [p.AuditLogChangeKeys.SPLASH_HASH]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [p.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [p.AuditLogChangeKeys.BANNER_HASH]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [p.AuditLogChangeKeys.OWNER_ID]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [p.AuditLogChangeKeys.REGION]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [p.AuditLogChangeKeys.PREFERRED_LOCALE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [p.AuditLogChangeKeys.AFK_CHANNEL_ID]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.AFK_TIMEOUT]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.RULES_CHANNEL_ID]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.MFA_LEVEL]: {
      [p.MFALevels.NONE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [p.MFALevels.ELEVATED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [p.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [p.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [p.VerificationLevels.NONE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [p.VerificationLevels.LOW]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [p.VerificationLevels.MEDIUM]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [p.VerificationLevels.HIGH]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [p.VerificationLevels.VERY_HIGH]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [p.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [p.UserNotificationSettings.ALL_MESSAGES]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [p.UserNotificationSettings.ONLY_MENTIONS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [p.AuditLogChangeKeys.VANITY_URL_CODE]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [p.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [p.GuildExplicitContentFilterTypes.DISABLED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [p.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [p.GuildExplicitContentFilterTypes.ALL_MEMBERS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [p.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...B()
  }),
  F = () => ({
    [p.AuditLogChangeKeys.NAME]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [p.AuditLogChangeKeys.POSITION]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [p.AuditLogChangeKeys.TOPIC]: eS(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [p.AuditLogChangeKeys.BITRATE]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [p.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: eS(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [p.AuditLogChangeKeys.USER_LIMIT]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [p.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [p.AuditLogChangeKeys.PERMISSIONS_RESET]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [p.AuditLogChangeKeys.PERMISSIONS_GRANTED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [p.AuditLogChangeKeys.PERMISSIONS_DENIED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [p.AuditLogChangeKeys.REASON]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [p.AuditLogChangeKeys.NSFW]: {
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [p.AuditLogChangeKeys.TYPE]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [p.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [p.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
    [p.AuditLogChangeKeys.FLAGS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
    [p.AuditLogChangeKeys.AVAILABLE_TAG_ADD]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
    [p.AuditLogChangeKeys.AVAILABLE_TAG_EDIT]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
    [p.AuditLogChangeKeys.AVAILABLE_TAG_DELETE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE
  }),
  x = () => ({
    [p.AuditLogChangeKeys.NICK]: eS(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [p.AuditLogChangeKeys.DEAF]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [p.AuditLogChangeKeys.MUTE]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [p.AuditLogChangeKeys.ROLES_REMOVE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [p.AuditLogChangeKeys.ROLES_ADD]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [p.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [p.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: eS(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [p.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...B()
  }),
  b = () => ({
    [p.AuditLogChangeKeys.NAME]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [p.AuditLogChangeKeys.DESCRIPTION]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    [p.AuditLogChangeKeys.PERMISSIONS_GRANTED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [p.AuditLogChangeKeys.PERMISSIONS_DENIED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [p.AuditLogChangeKeys.COLOR]: {
      "#000000": m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [V]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [p.AuditLogChangeKeys.HOIST]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [p.AuditLogChangeKeys.MENTIONABLE]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [p.AuditLogChangeKeys.ICON_HASH]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [p.AuditLogChangeKeys.UNICODE_EMOJI]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...B()
  }),
  j = () => ({
    ...B(),
    [p.AuditLogChangeKeys.TITLE]: e => {
      let {
        oldValue: t,
        newValue: E
      } = e;
      return null != t ? (0 === t.length && (t = m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
        oldValue: t,
        newValue: E
      })) : m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE
    },
    [p.AuditLogChangeKeys.DESCRIPTION]: e => {
      let {
        oldValue: t,
        newValue: E
      } = e;
      return null != t ? (0 === t.length && (t = m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
        oldValue: t,
        newValue: E
      })) : m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({
        newValue: E
      })
    },
    [p.AuditLogChangeKeys.OPTIONS]: () => m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
    [p.AuditLogChangeKeys.SINGLE_SELECT]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT
    },
    [p.AuditLogChangeKeys.REQUIRED]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL
    }
  }),
  k = () => ({
    ...B(),
    [p.AuditLogChangeKeys.DEFAULT_CHANNEL_IDS]: e => {
      let {
        newValue: t
      } = e;
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({
        count: t.length
      })
    },
    [p.AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS
    },
    [p.AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS
    },
    [p.AuditLogChangeKeys.ENABLED]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE
    }
  }),
  Y = () => ({
    ...B(),
    [p.AuditLogChangeKeys.WELCOME_MESSAGE]: () => m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
    [p.AuditLogChangeKeys.NEW_MEMBER_ACTIONS]: () => m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
    [p.AuditLogChangeKeys.RESOURCE_CHANNELS]: () => m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
  }),
  w = () => ({
    [p.AuditLogChangeKeys.CODE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [p.AuditLogChangeKeys.CHANNEL_ID]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [p.AuditLogChangeKeys.MAX_USES]: {
      0: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [V]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [p.AuditLogChangeKeys.MAX_AGE]: {
      0: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [V]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [p.AuditLogChangeKeys.TEMPORARY]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    [p.AuditLogChangeKeys.FLAGS]: e => {
      let {
        newValue: t
      } = e;
      return function(e) {
        let {
          newValue: t
        } = e;
        return t.map(e => (function(e) {
          if (e === A.GuildInviteFlags.IS_GUEST_INVITE) return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
          return null
        })(e)).filter(R.isNotNullish)
      }({
        newValue: t
      })
    },
    ...B()
  }),
  W = () => ({
    [p.AuditLogChangeKeys.CHANNEL_ID]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [p.AuditLogChangeKeys.NAME]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [p.AuditLogChangeKeys.AVATAR_HASH]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [p.AuditLogChangeKeys.REASON]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  J = () => ({
    [p.AuditLogChangeKeys.NAME]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...B()
  }),
  X = () => ({
    [p.AuditLogChangeKeys.NAME]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [p.AuditLogChangeKeys.TAGS]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [p.AuditLogChangeKeys.DESCRIPTION]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...B()
  }),
  z = () => ({
    [p.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [p.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [p.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...B()
  }),
  Z = () => ({
    [p.AuditLogChangeKeys.TOPIC]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [p.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [H.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [H.GuildScheduledEventPrivacyLevel.PUBLIC]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...B()
  }),
  Q = () => ({
    [p.AuditLogChangeKeys.NAME]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [p.AuditLogChangeKeys.DESCRIPTION]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [p.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [H.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [H.GuildScheduledEventPrivacyLevel.PUBLIC]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [p.AuditLogChangeKeys.STATUS]: {
      [H.GuildScheduledEventStatus.SCHEDULED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [H.GuildScheduledEventStatus.ACTIVE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [H.GuildScheduledEventStatus.COMPLETED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [H.GuildScheduledEventStatus.CANCELED]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [p.AuditLogChangeKeys.ENTITY_TYPE]: {
      [H.GuildScheduledEventEntityTypes.NONE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [H.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [H.GuildScheduledEventEntityTypes.VOICE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [H.GuildScheduledEventEntityTypes.EXTERNAL]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [p.AuditLogChangeKeys.CHANNEL_ID]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [p.AuditLogChangeKeys.LOCATION]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [p.AuditLogChangeKeys.IMAGE_HASH]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
    ...B()
  }),
  q = () => ({
    [p.AuditLogChangeKeys.SCHEDULED_START_TIME]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
    [p.AuditLogChangeKeys.SCHEDULED_END_TIME]: eN(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
    [p.AuditLogChangeKeys.IS_CANCELED]: e => {
      if (null != e.oldValue || !0 === e.newValue) {
        if (!e.oldValue && e.newValue) return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
        if (e.oldValue && !e.newValue) return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED
      }
      return ""
    },
    ...B()
  }),
  $ = () => ({
    [p.AuditLogChangeKeys.NAME]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [p.AuditLogChangeKeys.ARCHIVED]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [p.AuditLogChangeKeys.LOCKED]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [p.AuditLogChangeKeys.INVITABLE]: {
      true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [p.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [p.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [p.AuditLogChangeKeys.FLAGS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
    ...B()
  }),
  ee = e => {
    let t = {
      ...B()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  et = () => {
    let e = {
      [p.AuditLogChangeKeys.NAME]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
      [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
      [p.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
      [p.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
      [p.AuditLogChangeKeys.AUTO_MODERATION_ENABLED]: {
        true: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE,
        false: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE
      },
      [p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
      [p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
      [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
      [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
      [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
      [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
      [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
      [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
      [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
      ...B()
    };
    return e
  },
  eE = () => ({
    [p.AuditLogChangeKeys.NAME]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
    [p.AuditLogChangeKeys.VOLUME]: ed(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
    [p.AuditLogChangeKeys.EMOJI_NAME]: eS(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
    [p.AuditLogChangeKeys.EMOJI_ID]: eS(m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
    ...B()
  }),
  e_ = () => ({
    [p.AuditLogChangeKeys.STATUS]: m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
    ...B()
  }),
  es = {
    [p.AuditLogTargetTypes.CHANNEL]: {
      [p.AuditLogChangeKeys.ID]: !0,
      [p.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [p.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [p.AuditLogChangeKeys.TYPE]: !0,
      [p.AuditLogChangeKeys.ID]: !0,
      [p.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [p.AuditLogTargetTypes.INVITE]: {
      [p.AuditLogChangeKeys.INVITER_ID]: !0,
      [p.AuditLogChangeKeys.USES]: !0
    },
    [p.AuditLogTargetTypes.WEBHOOK]: {
      [p.AuditLogChangeKeys.TYPE]: !0,
      [p.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [p.AuditLogTargetTypes.INTEGRATION]: {
      [p.AuditLogChangeKeys.TYPE]: !0
    },
    [p.AuditLogTargetTypes.THREAD]: {
      [p.AuditLogChangeKeys.ID]: !0,
      [p.AuditLogChangeKeys.TYPE]: !0
    },
    [p.AuditLogTargetTypes.STICKER]: {
      [p.AuditLogChangeKeys.ID]: !0,
      [p.AuditLogChangeKeys.TYPE]: !0,
      [p.AuditLogChangeKeys.ASSET]: !0,
      [p.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [p.AuditLogChangeKeys.AVAILABLE]: !0,
      [p.AuditLogChangeKeys.GUILD_ID]: !0
    },
    [p.AuditLogTargetTypes.GUILD_HOME]: {
      [p.AuditLogChangeKeys.ENTITY_TYPE]: !0
    },
    [p.AuditLogTargetTypes.GUILD_ONBOARDING]: {
      [p.AuditLogChangeKeys.PROMPTS]: !0
    },
    [p.AuditLogTargetTypes.GUILD_SOUNDBOARD]: {
      [p.AuditLogChangeKeys.ID]: !0,
      [p.AuditLogChangeKeys.SOUND_ID]: !0
    }
  },
  ea = () => [{
    value: p.AuditLogActions.ALL,
    label: m.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: m.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: p.AuditLogActions.GUILD_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: p.AuditLogActions.CHANNEL_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: p.AuditLogActions.CHANNEL_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: p.AuditLogActions.CHANNEL_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: p.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: p.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: p.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: p.AuditLogActions.MEMBER_KICK,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: p.AuditLogActions.MEMBER_PRUNE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: p.AuditLogActions.MEMBER_BAN_ADD,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: p.AuditLogActions.MEMBER_BAN_REMOVE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: p.AuditLogActions.MEMBER_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: p.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: p.AuditLogActions.MEMBER_MOVE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: p.AuditLogActions.MEMBER_DISCONNECT,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: p.AuditLogActions.BOT_ADD,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: p.AuditLogActions.THREAD_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: p.AuditLogActions.THREAD_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: p.AuditLogActions.THREAD_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: p.AuditLogActions.ROLE_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: p.AuditLogActions.ROLE_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: p.AuditLogActions.ROLE_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: p.AuditLogActions.ONBOARDING_PROMPT_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
  }, {
    value: p.AuditLogActions.ONBOARDING_PROMPT_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
  }, {
    value: p.AuditLogActions.ONBOARDING_PROMPT_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
  }, {
    value: p.AuditLogActions.ONBOARDING_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
  }, {
    value: p.AuditLogActions.ONBOARDING_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
  }, {
    value: p.AuditLogActions.HOME_SETTINGS_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
  }, {
    value: p.AuditLogActions.HOME_SETTINGS_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
  }, {
    value: p.AuditLogActions.INVITE_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: p.AuditLogActions.INVITE_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: p.AuditLogActions.INVITE_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: p.AuditLogActions.WEBHOOK_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: p.AuditLogActions.WEBHOOK_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: p.AuditLogActions.WEBHOOK_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: p.AuditLogActions.EMOJI_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: p.AuditLogActions.EMOJI_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: p.AuditLogActions.EMOJI_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: p.AuditLogActions.MESSAGE_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: p.AuditLogActions.MESSAGE_BULK_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: p.AuditLogActions.MESSAGE_PIN,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: p.AuditLogActions.MESSAGE_UNPIN,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: p.AuditLogActions.INTEGRATION_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: p.AuditLogActions.INTEGRATION_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: p.AuditLogActions.INTEGRATION_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: p.AuditLogActions.STICKER_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: p.AuditLogActions.STICKER_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: p.AuditLogActions.STICKER_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: p.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: p.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: p.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: p.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: p.AuditLogActions.AUTO_MODERATION_RULE_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
  }, {
    value: p.AuditLogActions.AUTO_MODERATION_RULE_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
  }, {
    value: p.AuditLogActions.AUTO_MODERATION_RULE_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
  }, {
    value: p.AuditLogActions.GUILD_HOME_FEATURE_ITEM,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
  }, {
    value: p.AuditLogActions.GUILD_HOME_REMOVE_ITEM,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
  }, {
    value: p.AuditLogActions.SOUNDBOARD_SOUND_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
  }, {
    value: p.AuditLogActions.SOUNDBOARD_SOUND_UPDATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
  }, {
    value: p.AuditLogActions.SOUNDBOARD_SOUND_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
  }, {
    value: p.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
  }, {
    value: p.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE,
    label: m.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
  }];

function eT(e) {
  switch (e.action) {
    case p.AuditLogActions.GUILD_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case p.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case p.ChannelTypes.GUILD_STAGE_VOICE:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case p.ChannelTypes.GUILD_VOICE:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case p.ChannelTypes.GUILD_CATEGORY:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case p.AuditLogActions.CHANNEL_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case p.AuditLogActions.CHANNEL_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case p.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case p.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case p.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case p.AuditLogActions.MEMBER_KICK:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case p.AuditLogActions.MEMBER_PRUNE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case p.AuditLogActions.MEMBER_BAN_ADD:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
    case p.AuditLogActions.MEMBER_BAN_REMOVE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case p.AuditLogActions.MEMBER_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case p.AuditLogActions.MEMBER_ROLE_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case p.AuditLogActions.MEMBER_MOVE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case p.AuditLogActions.MEMBER_DISCONNECT:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case p.AuditLogActions.BOT_ADD:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case p.AuditLogActions.ROLE_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case p.AuditLogActions.ROLE_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case p.AuditLogActions.ROLE_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case p.AuditLogActions.INVITE_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case p.AuditLogActions.INVITE_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case p.AuditLogActions.INVITE_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case p.AuditLogActions.WEBHOOK_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case p.AuditLogActions.WEBHOOK_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case p.AuditLogActions.WEBHOOK_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case p.AuditLogActions.EMOJI_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case p.AuditLogActions.EMOJI_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case p.AuditLogActions.EMOJI_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case p.AuditLogActions.STICKER_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case p.AuditLogActions.STICKER_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case p.AuditLogActions.STICKER_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case p.AuditLogActions.MESSAGE_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case p.AuditLogActions.MESSAGE_BULK_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case p.AuditLogActions.MESSAGE_PIN:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case p.AuditLogActions.MESSAGE_UNPIN:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case p.AuditLogActions.INTEGRATION_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case p.AuditLogActions.INTEGRATION_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case p.AuditLogActions.INTEGRATION_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case p.AuditLogActions.STAGE_INSTANCE_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case p.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case p.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
    case p.AuditLogActions.THREAD_CREATE:
      let E = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.TYPE) : null;
      if (null == E) throw Error("[AuditLog] Could not find type change for thread create");
      switch (E.newValue) {
        case p.ChannelTypes.PRIVATE_THREAD:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
        case p.ChannelTypes.ANNOUNCEMENT_THREAD:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE
      }
    case p.AuditLogActions.THREAD_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
    case p.AuditLogActions.THREAD_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
    case p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case p.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case p.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var _;
      if ((null === (_ = e.options) || void 0 === _ ? void 0 : _.auto_moderation_rule_trigger_type) === y.AutomodTriggerType.USER_PROFILE.toString()) return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case p.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case p.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
    case p.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return m.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case p.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return m.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    case p.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
    case p.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
    case p.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
    case p.AuditLogActions.ONBOARDING_PROMPT_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
    case p.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
    case p.AuditLogActions.ONBOARDING_PROMPT_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
    case p.AuditLogActions.ONBOARDING_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
    case p.AuditLogActions.ONBOARDING_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
    case p.AuditLogActions.HOME_SETTINGS_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
    case p.AuditLogActions.HOME_SETTINGS_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
    case p.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
      let s = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.ENTITY_TYPE) : null;
      if (null == s) return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
      switch (s.newValue) {
        case n.GuildFeedItemTypes.MESSAGE:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
        case n.GuildFeedItemTypes.FORUM_POST:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
        default:
          return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM
      }
    case p.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
    case p.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
    case p.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
    case p.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
    case p.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
    case p.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
    default:
      return null
  }
}

function en(e) {
  switch (e) {
    case P.ChannelFlags.GUILD_FEED_REMOVED:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
    case P.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
    case P.ChannelFlags.PINNED:
      return m.default.Messages.PINNED_POST
  }
  return null
}

function eA(e) {
  switch (e) {
    case P.ChannelFlags.GUILD_FEED_REMOVED:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
    case P.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
    case P.ChannelFlags.PINNED:
      return m.default.Messages.UNPINNED_POST
  }
  return null
}

function eu(e, t) {
  switch (e) {
    case p.Permissions.CREATE_INSTANT_INVITE:
      return m.default.Messages.CREATE_INSTANT_INVITE;
    case p.Permissions.KICK_MEMBERS:
      return m.default.Messages.KICK_MEMBERS;
    case p.Permissions.BAN_MEMBERS:
      return m.default.Messages.BAN_MEMBERS;
    case p.Permissions.ADMINISTRATOR:
      return m.default.Messages.ADMINISTRATOR;
    case p.Permissions.MANAGE_CHANNELS:
      if (t.targetType === p.AuditLogTargetTypes.CHANNEL || t.targetType === p.AuditLogTargetTypes.CHANNEL_OVERWRITE) return m.default.Messages.MANAGE_CHANNEL;
      return m.default.Messages.MANAGE_CHANNELS;
    case p.Permissions.MANAGE_GUILD:
      return m.default.Messages.MANAGE_SERVER;
    case p.Permissions.VIEW_GUILD_ANALYTICS:
      return m.default.Messages.VIEW_GUILD_ANALYTICS;
    case p.Permissions.CHANGE_NICKNAME:
      return m.default.Messages.CHANGE_NICKNAME;
    case p.Permissions.MANAGE_NICKNAMES:
      return m.default.Messages.MANAGE_NICKNAMES;
    case p.Permissions.MANAGE_ROLES:
      return m.default.Messages.MANAGE_ROLES;
    case p.Permissions.MANAGE_WEBHOOKS:
      return m.default.Messages.MANAGE_WEBHOOKS;
    case p.Permissions.CREATE_GUILD_EXPRESSIONS:
      return m.default.Messages.CREATE_EXPRESSIONS;
    case p.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return m.default.Messages.MANAGE_EXPRESSIONS;
    case p.Permissions.VIEW_AUDIT_LOG:
      return m.default.Messages.VIEW_AUDIT_LOG;
    case p.Permissions.VIEW_CHANNEL:
      return m.default.Messages.READ_MESSAGES;
    case p.Permissions.SEND_MESSAGES:
      return m.default.Messages.SEND_MESSAGES;
    case p.Permissions.SEND_TTS_MESSAGES:
      return m.default.Messages.SEND_TTS_MESSAGES;
    case p.Permissions.USE_APPLICATION_COMMANDS:
      return m.default.Messages.USE_APPLICATION_COMMANDS;
    case p.Permissions.MANAGE_MESSAGES:
      return m.default.Messages.MANAGE_MESSAGES;
    case p.Permissions.EMBED_LINKS:
      return m.default.Messages.EMBED_LINKS;
    case p.Permissions.ATTACH_FILES:
      return m.default.Messages.ATTACH_FILES;
    case p.Permissions.READ_MESSAGE_HISTORY:
      return m.default.Messages.READ_MESSAGE_HISTORY;
    case p.Permissions.MENTION_EVERYONE:
      return m.default.Messages.MENTION_EVERYONE;
    case p.Permissions.USE_EXTERNAL_EMOJIS:
      return m.default.Messages.USE_EXTERNAL_EMOJIS;
    case p.Permissions.USE_EXTERNAL_STICKERS:
      return m.default.Messages.USE_EXTERNAL_STICKERS;
    case p.Permissions.ADD_REACTIONS:
      return m.default.Messages.ADD_REACTIONS;
    case p.Permissions.CONNECT:
      return m.default.Messages.CONNECT;
    case p.Permissions.SPEAK:
      return m.default.Messages.SPEAK;
    case p.Permissions.MUTE_MEMBERS:
      return m.default.Messages.MUTE_MEMBERS;
    case p.Permissions.DEAFEN_MEMBERS:
      return m.default.Messages.DEAFEN_MEMBERS;
    case p.Permissions.MOVE_MEMBERS:
      return m.default.Messages.MOVE_MEMBERS;
    case p.Permissions.USE_VAD:
      return m.default.Messages.USE_VAD;
    case p.Permissions.PRIORITY_SPEAKER:
      return m.default.Messages.PRIORITY_SPEAKER;
    case p.Permissions.STREAM:
      return m.default.Messages.VIDEO;
    case p.Permissions.REQUEST_TO_SPEAK:
      return m.default.Messages.REQUEST_TO_SPEAK;
    case p.Permissions.CREATE_EVENTS:
      return m.default.Messages.CREATE_EVENTS;
    case p.Permissions.MANAGE_EVENTS:
      return m.default.Messages.MANAGE_EVENTS;
    case p.Permissions.CREATE_PUBLIC_THREADS:
      return m.default.Messages.CREATE_PUBLIC_THREADS;
    case p.Permissions.CREATE_PRIVATE_THREADS:
      return m.default.Messages.CREATE_PRIVATE_THREADS;
    case p.Permissions.SEND_MESSAGES_IN_THREADS:
      return m.default.Messages.SEND_MESSAGES_IN_THREADS;
    case p.Permissions.MANAGE_THREADS:
      return m.default.Messages.MANAGE_THREADS;
    case p.Permissions.MODERATE_MEMBERS:
      return m.default.Messages.MODERATE_MEMBER;
    case p.Permissions.USE_CLYDE_AI:
      return m.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
    case p.Permissions.SET_VOICE_CHANNEL_STATUS:
      return m.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function eI(e, t) {
  let E = [];
  return e.forEach(e => {
    let _ = function(e, t) {
        switch (e.targetType) {
          case p.AuditLogTargetTypes.GUILD:
          case p.AuditLogTargetTypes.GUILD_HOME:
            return t;
          case p.AuditLogTargetTypes.CHANNEL:
          case p.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return eo(e, p.AuditLogChangeKeys.NAME, e => O.default.getChannel(e), e => (0, l.computeChannelName)(e, U.default, c.default, !0));
          case p.AuditLogTargetTypes.USER:
            return eo(e, p.AuditLogChangeKeys.NICK, e => U.default.getUser(e), e => e);
          case p.AuditLogTargetTypes.ROLE:
            return eo(e, p.AuditLogChangeKeys.NAME, e => t.getRole(e), e => e.name);
          case p.AuditLogTargetTypes.ONBOARDING_PROMPT:
            let E = eo(e, p.AuditLogChangeKeys.ID, e => d.default.getOnboardingPrompt(e), e => e.title);
            return null != E ? E : m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
          case p.AuditLogTargetTypes.GUILD_ONBOARDING:
            return t;
          case p.AuditLogTargetTypes.INVITE:
            return eo(e, p.AuditLogChangeKeys.CODE, p.NOOP_NULL);
          case p.AuditLogTargetTypes.INTEGRATION:
            return eo(e, p.AuditLogChangeKeys.TYPE, e => S.default.integrations.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.WEBHOOK:
            return eo(e, p.AuditLogChangeKeys.NAME, e => S.default.webhooks.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.EMOJI:
            return eo(e, p.AuditLogChangeKeys.NAME, e => o.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.STICKER:
            return eo(e, p.AuditLogChangeKeys.NAME, e => D.default.getStickerById(e), e => e.name);
          case p.AuditLogTargetTypes.STAGE_INSTANCE:
            return eo(e, p.AuditLogChangeKeys.TOPIC, e => {
              var E;
              return null === (E = Object.values(g.default.getStageInstancesByGuild(t.id))) || void 0 === E ? void 0 : E.find(t => t.id === e)
            }, e => e.topic);
          case p.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
          case p.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return eo(e, p.AuditLogChangeKeys.NAME, e => S.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.THREAD:
            return eo(e, p.AuditLogChangeKeys.NAME, e => S.default.threads.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = S.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return eo(e, p.AuditLogChangeKeys.NAME, e => S.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === i.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          case p.AuditLogTargetTypes.AUTO_MODERATION_RULE:
            return eo(e, p.AuditLogChangeKeys.NAME, e => S.default.automodRules.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.GUILD_SOUNDBOARD:
            return eo(e, p.AuditLogChangeKeys.NAME, p.NOOP_NULL);
          case p.AuditLogTargetTypes.HOME_SETTINGS:
            return eo(e, p.AuditLogChangeKeys.GUILD_ID, e => N.default.getSettings(e), () => m.default.Messages.SERVER_GUIDE, t.id);
          case p.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
            return eo(e, p.AuditLogChangeKeys.STATUS, e => O.default.getChannel(e), e => (0, l.computeChannelName)(e, U.default, c.default, !0));
          default:
            return v.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = U.default.getUser(e.userId);
    if (null != _ || [p.AuditLogActions.MEMBER_PRUNE, p.AuditLogActions.MEMBER_DISCONNECT, p.AuditLogActions.MEMBER_MOVE, p.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED, p.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", _)).set("options", function(e) {
          if (null != e.options) {
            let E = {
              ...e.options
            };
            switch (e.options.type) {
              case p.AuditLogSubtargetTypes.USER:
                E.subtarget = er(e.options.id, e => U.default.getUser(e), e => e.tag);
                break;
              case p.AuditLogSubtargetTypes.ROLE:
                E.subtarget = er(e.options.role_name, p.NOOP_NULL)
            }
            if (null != e.options.channel_id && (E.channel = eo(e, "", e => O.default.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (E.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let _ = S.default.guildScheduledEvents.find(t => t.id === e.targetId),
                s = null == _ ? void 0 : _.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              E.subtarget = (0, C.dateFormat)(T(h.default.extractTimestamp(null !== (t = null == s ? void 0 : s.event_exception_id) && void 0 !== t ? t : "0")), "LL")
            }
            return E
          }
          return e.options
        }(e))).changes) {
        let E = [];
        e.changes.forEach(_ => {
          let a = function(e, t, E) {
            if (t.action === p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case p.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = er(t.id, e => E.getRole(e), e => e.name);
                  break;
                case p.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = er(t.id, e => U.default.getUser(e), e => e.tag);
                  break;
                case p.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === s(E.id).subtract(1).toString() ? e.subtarget = m.default.Messages.ALL_CHANNELS : e.subtarget = er(t.id, e => O.default.getChannel(e), e => (0, l.computeChannelName)(e, U.default, c.default, !0))
              }
              return e
            }
            switch (e.key) {
              case p.AuditLogChangeKeys.OWNER_ID:
                return eL(e, e => U.default.getUser(e));
              case p.AuditLogChangeKeys.CHANNEL_ID:
              case p.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case p.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case p.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case p.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return eL(e, e => O.default.getChannel(e), e => (0, l.computeChannelName)(e, U.default, c.default, !0));
              case p.AuditLogChangeKeys.AFK_TIMEOUT:
                return eL(e, e => e / 60);
              case p.AuditLogChangeKeys.BITRATE:
                return eL(e, e => e / 1e3);
              case p.AuditLogChangeKeys.COLOR:
                return eL(e, e => (0, I.int2hex)(e).toUpperCase());
              case p.AuditLogChangeKeys.THEME_COLORS:
                return eL(e, e => "".concat((0, I.int2hex)(e[0]).toUpperCase(), ", ").concat((0, I.int2hex)(e[1]).toUpperCase()));
              case p.AuditLogChangeKeys.MAX_AGE:
                return eL(e, e => {
                  let t = f.default.getMaxAgeOptions.find(t => {
                    let {
                      value: E
                    } = t;
                    return e === E
                  });
                  return t ? t.label : e
                });
              case p.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: E,
                    removed: _
                  } = ei(e.oldValue, e.newValue);
                if (E.length > 0) {
                  let e = new G.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, E);
                  t.push(e)
                }
                if (_.length > 0) {
                  let e = new G.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_DENIED, null, _);
                  t.push(e)
                }
                return t
              }
              case p.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case p.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: E,
                    removed: _
                  } = ei(e.oldValue, e.newValue);
                if (E.length > 0) {
                  let _ = new G.AuditLogChange(e.key, null, E);
                  t.push(_)
                }
                if (_.length > 0) {
                  let e = new G.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_RESET, _, _);
                  t.push(e)
                }
                return t
              }
              case p.AuditLogChangeKeys.FLAGS: {
                let t = [],
                  {
                    added: E,
                    removed: _
                  } = function(e, t) {
                    let E = "number" == typeof e ? e : 0,
                      _ = "number" == typeof t ? t : 0,
                      s = M.removeFlag(_, E),
                      a = M.removeFlag(E, _),
                      T = [],
                      n = [];
                    for (let e in P.ChannelFlags) {
                      let t = P.ChannelFlags[e];
                      M.hasFlag(s, t) && T.push(t), M.hasFlag(a, t) && n.push(t)
                    }
                    return {
                      added: T,
                      removed: n
                    }
                  }(e.oldValue, e.newValue);
                if (E.length > 0) {
                  let _ = new G.AuditLogChange(e.key, null, E);
                  t.push(_)
                }
                if (_.length > 0) {
                  let E = new G.AuditLogChange(e.key, _, null);
                  t.push(E)
                }
                return t
              }
              case p.AuditLogChangeKeys.PREFERRED_LOCALE:
                return eL(e, e => {
                  let t = m.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case p.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return eL(e, e => e === p.VideoQualityMode.FULL ? m.default.Messages.VIDEO_QUALITY_MODE_FULL : m.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [p.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [p.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [p.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [p.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    E = [];
                  return Object.values(p.SystemChannelFlags).forEach(_ => {
                    let s = (e.oldValue & _) === _,
                      a = (e.newValue & _) === _;
                    if (s === a) return;
                    let T = new G.AuditLogChange(t[_], !s, !a);
                    E.push(T)
                  }), E
                }(e);
              case p.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eL(e, e => e.map(e => e.type), e => e.map(r.actionTypeToName).join(", "));
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eL(e, r.eventTypeToName);
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eL(e, r.triggerTypeToName);
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eL(e, e => {
                  if (null != e && "object" == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({
                    newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                  }) : JSON.stringify(e);
                  return e
                });
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS:
              case p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS:
              case p.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case p.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST:
              case p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eL(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eL(e, e => e.map(O.default.getChannel).filter(e => null != e).map(e => (0, l.computeChannelName)(e, U.default, c.default, !0)), e => null != e && e.length > 0 ? e.join(", ") : m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eL(e, e => e.map(e => E.getRole(e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : m.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case p.AuditLogChangeKeys.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: E
                  } = e, _ = Array.isArray(t) ? t : [], s = Array.isArray(E) ? E : [];
                  if (0 === _.length && 0 === s.length) return e;
                  let a = {},
                    T = {};
                  if (_.forEach(e => {
                      a[e.id] = e
                    }), s.forEach(e => {
                      T[e.id] = e
                    }), _.length < s.length) {
                    for (let e in T)
                      if (null == a[e]) return new G.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, el(T[e]))
                  }
                  if (_.length > s.length) {
                    for (let e in a)
                      if (null == T[e]) return new G.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, el(a[e]))
                  }
                  for (let e in a) {
                    let t = a[e],
                      E = T[e];
                    if ((null == E ? void 0 : E.name) !== t.name || (null == E ? void 0 : E.emoji_id) !== t.emoji_id || (null == E ? void 0 : E.emoji_name) !== t.emoji_name) return new G.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_EDIT, el(t), el(E))
                  }
                  return e
                }(e);
              case p.AuditLogChangeKeys.SCHEDULED_START_TIME:
              case p.AuditLogChangeKeys.SCHEDULED_END_TIME:
                return eL(e, e => (0, C.dateFormat)(T(new Date(e)), "LLLL"))
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

function ei(e, t) {
  let E = u.default.deserialize("string" == typeof e ? e : 0),
    _ = u.default.deserialize("string" == typeof t ? t : 0),
    s = u.default.remove(_, E),
    a = u.default.remove(E, _),
    T = [],
    n = [];
  for (let e in p.Permissions) {
    let t = p.Permissions[e];
    u.default.has(s, t) && T.push(t), u.default.has(a, t) && n.push(t)
  }
  return {
    added: T,
    removed: n
  }
}

function el(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function eL(e, t, E) {
  let _ = e.newValue,
    s = e.oldValue;
  return null != e.newValue && (_ = t(e.newValue), null != E && null != _ && (_ = E(_))), null != e.oldValue && (s = t(e.oldValue), null != E && null != s && (s = E(s))), new G.AuditLogChange(e.key, s || e.oldValue, _ || e.newValue)
}

function eo(e, t, E, _, s) {
  let a = null;
  s = null != s ? s : e.targetId;
  let T = E(s);
  if (null != T && null != _ && (a = _(T)), null == a) {
    let t = S.default.deletedTargets[e.targetType];
    null != t && null != t[s] && (a = t[s])
  }
  if (null == a && null != e.changes) {
    let E = e.changes.find(e => e.key === t);
    null != E && (a = E.newValue || E.oldValue)
  }
  return null != a ? a : s
}

function er(e, t, E) {
  let _ = e,
    s = t(e);
  return null != s && null != E && (_ = E(s)), _
}

function ed(e, t) {
  return E => null == E.oldValue ? e : t
}

function eN(e, t) {
  return E => null == E.newValue ? e : t
}

function eS(e, t, E, _) {
  return s => {
    if (null != s.newValue && null != s.oldValue) return e;
    if (null != s.newValue) return t;
    if (null != s.oldValue) return E;
    return _
  }
}