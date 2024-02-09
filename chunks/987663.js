"use strict";
s.r(t), s.d(t, {
  DEFAULT_FOR_STRINGS_KEY: function() {
    return y
  },
  GuildChangeStrings: function() {
    return B
  },
  ChannelChangeStrings: function() {
    return F
  },
  UserChangeStrings: function() {
    return H
  },
  RoleChangeStrings: function() {
    return V
  },
  OnboardingPromptChangeStrings: function() {
    return w
  },
  OnboardingChangeStrings: function() {
    return k
  },
  HomeSettingsChangeStrings: function() {
    return Y
  },
  InviteChangeStrings: function() {
    return K
  },
  WebhookChangeStrings: function() {
    return W
  },
  EmojiChangeStrings: function() {
    return z
  },
  StickerChangeStrings: function() {
    return Z
  },
  IntegrationChangeStrings: function() {
    return X
  },
  StageInstanceChangeStrings: function() {
    return J
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
    return es
  },
  VoiceChannelStatusStrings: function() {
    return ea
  },
  NotRenderedChanges: function() {
    return en
  },
  ACTION_FILTER_ITEMS: function() {
    return el
  },
  getChangeTitle: function() {
    return ei
  },
  getStringForAddedChannelFlag: function() {
    return er
  },
  getStringForRemovedChannelFlag: function() {
    return eo
  },
  getStringForPermission: function() {
    return ed
  },
  transformLogs: function() {
    return eu
  }
}), s("70102"), s("424973");
var a = s("552442"),
  n = s.n(a),
  l = s("866227"),
  i = s.n(l),
  r = s("611221"),
  o = s("498574"),
  d = s("316693"),
  u = s("509043"),
  c = s("798609"),
  E = s("679653"),
  _ = s("605250"),
  T = s("385976"),
  I = s("454686"),
  S = s("863636"),
  N = s("698882"),
  f = s("287103"),
  g = s("834052"),
  A = s("364685"),
  L = s("242020"),
  m = s("42203"),
  C = s("27618"),
  O = s("697218"),
  h = s("888400"),
  R = s("568734"),
  D = s("449008"),
  M = s("354023"),
  G = s("299039"),
  x = s("49111"),
  p = s("724210"),
  U = s("143460"),
  v = s("745049"),
  j = s("782340");
let P = new _.default("AuditLogUtils"),
  y = -1,
  b = () => ({
    [x.AuditLogChangeKeys.REASON]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  B = () => ({
    [x.AuditLogChangeKeys.NAME]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [x.AuditLogChangeKeys.DESCRIPTION]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [x.AuditLogChangeKeys.ICON_HASH]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [x.AuditLogChangeKeys.SPLASH_HASH]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [x.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [x.AuditLogChangeKeys.BANNER_HASH]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [x.AuditLogChangeKeys.OWNER_ID]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [x.AuditLogChangeKeys.REGION]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [x.AuditLogChangeKeys.PREFERRED_LOCALE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [x.AuditLogChangeKeys.AFK_CHANNEL_ID]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [x.AuditLogChangeKeys.AFK_TIMEOUT]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [x.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [x.AuditLogChangeKeys.RULES_CHANNEL_ID]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [x.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [x.AuditLogChangeKeys.MFA_LEVEL]: {
      [x.MFALevels.NONE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [x.MFALevels.ELEVATED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [x.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [x.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [x.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [x.VerificationLevels.NONE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [x.VerificationLevels.LOW]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [x.VerificationLevels.MEDIUM]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [x.VerificationLevels.HIGH]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [x.VerificationLevels.VERY_HIGH]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [x.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [x.UserNotificationSettings.ALL_MESSAGES]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [x.UserNotificationSettings.ONLY_MENTIONS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [x.AuditLogChangeKeys.VANITY_URL_CODE]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [x.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [x.GuildExplicitContentFilterTypes.DISABLED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [x.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [x.GuildExplicitContentFilterTypes.ALL_MEMBERS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [x.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [x.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...b()
  }),
  F = () => ({
    [x.AuditLogChangeKeys.NAME]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [x.AuditLogChangeKeys.POSITION]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [x.AuditLogChangeKeys.TOPIC]: ef(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [x.AuditLogChangeKeys.BITRATE]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [x.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: ef(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [x.AuditLogChangeKeys.USER_LIMIT]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [x.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [x.AuditLogChangeKeys.PERMISSIONS_RESET]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [x.AuditLogChangeKeys.PERMISSIONS_GRANTED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [x.AuditLogChangeKeys.PERMISSIONS_DENIED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [x.AuditLogChangeKeys.REASON]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [x.AuditLogChangeKeys.NSFW]: {
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [x.AuditLogChangeKeys.TYPE]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [x.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [x.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
    [x.AuditLogChangeKeys.FLAGS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
    [x.AuditLogChangeKeys.AVAILABLE_TAG_ADD]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
    [x.AuditLogChangeKeys.AVAILABLE_TAG_EDIT]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
    [x.AuditLogChangeKeys.AVAILABLE_TAG_DELETE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE
  }),
  H = () => ({
    [x.AuditLogChangeKeys.NICK]: ef(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [x.AuditLogChangeKeys.DEAF]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [x.AuditLogChangeKeys.MUTE]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [x.AuditLogChangeKeys.ROLES_REMOVE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [x.AuditLogChangeKeys.ROLES_ADD]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [x.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [x.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: ef(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [x.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [x.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...b()
  }),
  V = () => ({
    [x.AuditLogChangeKeys.NAME]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [x.AuditLogChangeKeys.DESCRIPTION]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    [x.AuditLogChangeKeys.PERMISSIONS_GRANTED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [x.AuditLogChangeKeys.PERMISSIONS_DENIED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [x.AuditLogChangeKeys.COLOR]: {
      "#000000": j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [y]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [x.AuditLogChangeKeys.HOIST]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [x.AuditLogChangeKeys.MENTIONABLE]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [x.AuditLogChangeKeys.ICON_HASH]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [x.AuditLogChangeKeys.UNICODE_EMOJI]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...b()
  }),
  w = () => ({
    ...b(),
    [x.AuditLogChangeKeys.TITLE]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE
    },
    [x.AuditLogChangeKeys.DESCRIPTION]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({
        newValue: s
      })
    },
    [x.AuditLogChangeKeys.OPTIONS]: () => j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
    [x.AuditLogChangeKeys.SINGLE_SELECT]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT
    },
    [x.AuditLogChangeKeys.REQUIRED]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL
    }
  }),
  k = () => ({
    ...b(),
    [x.AuditLogChangeKeys.DEFAULT_CHANNEL_IDS]: e => {
      let {
        newValue: t
      } = e;
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({
        count: t.length
      })
    },
    [x.AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS
    },
    [x.AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS
    },
    [x.AuditLogChangeKeys.ENABLED]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE
    }
  }),
  Y = () => ({
    ...b(),
    [x.AuditLogChangeKeys.WELCOME_MESSAGE]: () => j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
    [x.AuditLogChangeKeys.NEW_MEMBER_ACTIONS]: () => j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
    [x.AuditLogChangeKeys.RESOURCE_CHANNELS]: () => j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
  }),
  K = () => ({
    [x.AuditLogChangeKeys.CODE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [x.AuditLogChangeKeys.CHANNEL_ID]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [x.AuditLogChangeKeys.MAX_USES]: {
      0: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [y]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [x.AuditLogChangeKeys.MAX_AGE]: {
      0: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [y]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [x.AuditLogChangeKeys.TEMPORARY]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    [x.AuditLogChangeKeys.FLAGS]: e => {
      let {
        newValue: t
      } = e;
      return function(e) {
        let {
          newValue: t
        } = e;
        return t.map(e => (function(e) {
          if (e === o.GuildInviteFlags.IS_GUEST_INVITE) return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
          return null
        })(e)).filter(D.isNotNullish)
      }({
        newValue: t
      })
    },
    ...b()
  }),
  W = () => ({
    [x.AuditLogChangeKeys.CHANNEL_ID]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [x.AuditLogChangeKeys.NAME]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [x.AuditLogChangeKeys.AVATAR_HASH]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [x.AuditLogChangeKeys.REASON]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  z = () => ({
    [x.AuditLogChangeKeys.NAME]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...b()
  }),
  Z = () => ({
    [x.AuditLogChangeKeys.NAME]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [x.AuditLogChangeKeys.TAGS]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [x.AuditLogChangeKeys.DESCRIPTION]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...b()
  }),
  X = () => ({
    [x.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [x.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [x.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...b()
  }),
  J = () => ({
    [x.AuditLogChangeKeys.TOPIC]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [x.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [v.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [v.GuildScheduledEventPrivacyLevel.PUBLIC]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...b()
  }),
  Q = () => ({
    [x.AuditLogChangeKeys.NAME]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [x.AuditLogChangeKeys.DESCRIPTION]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [x.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [v.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [v.GuildScheduledEventPrivacyLevel.PUBLIC]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [x.AuditLogChangeKeys.STATUS]: {
      [v.GuildScheduledEventStatus.SCHEDULED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [v.GuildScheduledEventStatus.ACTIVE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [v.GuildScheduledEventStatus.COMPLETED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [v.GuildScheduledEventStatus.CANCELED]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [x.AuditLogChangeKeys.ENTITY_TYPE]: {
      [v.GuildScheduledEventEntityTypes.NONE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [v.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [v.GuildScheduledEventEntityTypes.VOICE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [v.GuildScheduledEventEntityTypes.EXTERNAL]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [x.AuditLogChangeKeys.CHANNEL_ID]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [x.AuditLogChangeKeys.LOCATION]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [x.AuditLogChangeKeys.IMAGE_HASH]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
    ...b()
  }),
  q = () => ({
    [x.AuditLogChangeKeys.SCHEDULED_START_TIME]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
    [x.AuditLogChangeKeys.SCHEDULED_END_TIME]: eN(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
    [x.AuditLogChangeKeys.IS_CANCELED]: e => {
      if (null != e.oldValue || !0 === e.newValue) {
        if (!e.oldValue && e.newValue) return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
        if (e.oldValue && !e.newValue) return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED
      }
      return ""
    },
    ...b()
  }),
  $ = () => ({
    [x.AuditLogChangeKeys.NAME]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [x.AuditLogChangeKeys.ARCHIVED]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [x.AuditLogChangeKeys.LOCKED]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [x.AuditLogChangeKeys.INVITABLE]: {
      true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [x.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [x.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [x.AuditLogChangeKeys.FLAGS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
    ...b()
  }),
  ee = e => {
    let t = {
      ...b()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  et = () => {
    let e = {
      [x.AuditLogChangeKeys.NAME]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
      [x.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
      [x.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
      [x.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
      [x.AuditLogChangeKeys.AUTO_MODERATION_ENABLED]: {
        true: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE,
        false: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE
      },
      [x.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
      [x.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
      [x.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
      [x.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
      [x.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
      [x.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
      [x.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
      [x.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
      [x.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
      ...b()
    };
    return e
  },
  es = () => ({
    [x.AuditLogChangeKeys.NAME]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
    [x.AuditLogChangeKeys.VOLUME]: eS(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
    [x.AuditLogChangeKeys.EMOJI_NAME]: ef(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
    [x.AuditLogChangeKeys.EMOJI_ID]: ef(j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
    ...b()
  }),
  ea = () => ({
    [x.AuditLogChangeKeys.STATUS]: j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
    ...b()
  }),
  en = {
    [x.AuditLogTargetTypes.CHANNEL]: {
      [x.AuditLogChangeKeys.ID]: !0,
      [x.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [x.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [x.AuditLogChangeKeys.TYPE]: !0,
      [x.AuditLogChangeKeys.ID]: !0,
      [x.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [x.AuditLogTargetTypes.INVITE]: {
      [x.AuditLogChangeKeys.INVITER_ID]: !0,
      [x.AuditLogChangeKeys.USES]: !0
    },
    [x.AuditLogTargetTypes.WEBHOOK]: {
      [x.AuditLogChangeKeys.TYPE]: !0,
      [x.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [x.AuditLogTargetTypes.INTEGRATION]: {
      [x.AuditLogChangeKeys.TYPE]: !0
    },
    [x.AuditLogTargetTypes.THREAD]: {
      [x.AuditLogChangeKeys.ID]: !0,
      [x.AuditLogChangeKeys.TYPE]: !0
    },
    [x.AuditLogTargetTypes.STICKER]: {
      [x.AuditLogChangeKeys.ID]: !0,
      [x.AuditLogChangeKeys.TYPE]: !0,
      [x.AuditLogChangeKeys.ASSET]: !0,
      [x.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [x.AuditLogChangeKeys.AVAILABLE]: !0,
      [x.AuditLogChangeKeys.GUILD_ID]: !0
    },
    [x.AuditLogTargetTypes.GUILD_HOME]: {
      [x.AuditLogChangeKeys.ENTITY_TYPE]: !0
    },
    [x.AuditLogTargetTypes.GUILD_ONBOARDING]: {
      [x.AuditLogChangeKeys.PROMPTS]: !0
    },
    [x.AuditLogTargetTypes.GUILD_SOUNDBOARD]: {
      [x.AuditLogChangeKeys.ID]: !0,
      [x.AuditLogChangeKeys.SOUND_ID]: !0
    }
  },
  el = () => [{
    value: x.AuditLogActions.ALL,
    label: j.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: j.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: x.AuditLogActions.GUILD_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: x.AuditLogActions.CHANNEL_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: x.AuditLogActions.CHANNEL_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: x.AuditLogActions.CHANNEL_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: x.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: x.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: x.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: x.AuditLogActions.MEMBER_KICK,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: x.AuditLogActions.MEMBER_PRUNE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: x.AuditLogActions.MEMBER_BAN_ADD,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: x.AuditLogActions.MEMBER_BAN_REMOVE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: x.AuditLogActions.MEMBER_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: x.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: x.AuditLogActions.MEMBER_MOVE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: x.AuditLogActions.MEMBER_DISCONNECT,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: x.AuditLogActions.BOT_ADD,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: x.AuditLogActions.THREAD_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: x.AuditLogActions.THREAD_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: x.AuditLogActions.THREAD_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: x.AuditLogActions.ROLE_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: x.AuditLogActions.ROLE_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: x.AuditLogActions.ROLE_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: x.AuditLogActions.ONBOARDING_PROMPT_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
  }, {
    value: x.AuditLogActions.ONBOARDING_PROMPT_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
  }, {
    value: x.AuditLogActions.ONBOARDING_PROMPT_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
  }, {
    value: x.AuditLogActions.ONBOARDING_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
  }, {
    value: x.AuditLogActions.ONBOARDING_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
  }, {
    value: x.AuditLogActions.HOME_SETTINGS_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
  }, {
    value: x.AuditLogActions.HOME_SETTINGS_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
  }, {
    value: x.AuditLogActions.INVITE_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: x.AuditLogActions.INVITE_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: x.AuditLogActions.INVITE_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: x.AuditLogActions.WEBHOOK_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: x.AuditLogActions.WEBHOOK_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: x.AuditLogActions.WEBHOOK_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: x.AuditLogActions.EMOJI_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: x.AuditLogActions.EMOJI_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: x.AuditLogActions.EMOJI_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: x.AuditLogActions.MESSAGE_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: x.AuditLogActions.MESSAGE_BULK_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: x.AuditLogActions.MESSAGE_PIN,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: x.AuditLogActions.MESSAGE_UNPIN,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: x.AuditLogActions.INTEGRATION_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: x.AuditLogActions.INTEGRATION_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: x.AuditLogActions.INTEGRATION_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: x.AuditLogActions.STICKER_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: x.AuditLogActions.STICKER_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: x.AuditLogActions.STICKER_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: x.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: x.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: x.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: x.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: x.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: x.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: x.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: x.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: x.AuditLogActions.AUTO_MODERATION_RULE_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
  }, {
    value: x.AuditLogActions.AUTO_MODERATION_RULE_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
  }, {
    value: x.AuditLogActions.AUTO_MODERATION_RULE_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
  }, {
    value: x.AuditLogActions.GUILD_HOME_FEATURE_ITEM,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
  }, {
    value: x.AuditLogActions.GUILD_HOME_REMOVE_ITEM,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
  }, {
    value: x.AuditLogActions.SOUNDBOARD_SOUND_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
  }, {
    value: x.AuditLogActions.SOUNDBOARD_SOUND_UPDATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
  }, {
    value: x.AuditLogActions.SOUNDBOARD_SOUND_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
  }, {
    value: x.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
  }, {
    value: x.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE,
    label: j.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
  }];

function ei(e) {
  switch (e.action) {
    case x.AuditLogActions.GUILD_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case x.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === x.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case x.ChannelTypes.GUILD_STAGE_VOICE:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case x.ChannelTypes.GUILD_VOICE:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case x.ChannelTypes.GUILD_CATEGORY:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case x.AuditLogActions.CHANNEL_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case x.AuditLogActions.CHANNEL_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case x.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case x.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case x.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case x.AuditLogActions.MEMBER_KICK:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case x.AuditLogActions.MEMBER_PRUNE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case x.AuditLogActions.MEMBER_BAN_ADD:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
    case x.AuditLogActions.MEMBER_BAN_REMOVE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case x.AuditLogActions.MEMBER_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case x.AuditLogActions.MEMBER_ROLE_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case x.AuditLogActions.MEMBER_MOVE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case x.AuditLogActions.MEMBER_DISCONNECT:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case x.AuditLogActions.BOT_ADD:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case x.AuditLogActions.ROLE_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case x.AuditLogActions.ROLE_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case x.AuditLogActions.ROLE_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case x.AuditLogActions.INVITE_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case x.AuditLogActions.INVITE_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case x.AuditLogActions.INVITE_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case x.AuditLogActions.WEBHOOK_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case x.AuditLogActions.WEBHOOK_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case x.AuditLogActions.WEBHOOK_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case x.AuditLogActions.EMOJI_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case x.AuditLogActions.EMOJI_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case x.AuditLogActions.EMOJI_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case x.AuditLogActions.STICKER_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case x.AuditLogActions.STICKER_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case x.AuditLogActions.STICKER_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case x.AuditLogActions.MESSAGE_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case x.AuditLogActions.MESSAGE_BULK_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case x.AuditLogActions.MESSAGE_PIN:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case x.AuditLogActions.MESSAGE_UNPIN:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case x.AuditLogActions.INTEGRATION_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case x.AuditLogActions.INTEGRATION_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case x.AuditLogActions.INTEGRATION_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case x.AuditLogActions.STAGE_INSTANCE_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case x.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case x.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case x.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
    case x.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
    case x.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
    case x.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case x.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
    case x.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
    case x.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === x.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case x.ChannelTypes.PRIVATE_THREAD:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
        case x.ChannelTypes.ANNOUNCEMENT_THREAD:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE
      }
    case x.AuditLogActions.THREAD_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
    case x.AuditLogActions.THREAD_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
    case x.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case x.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case x.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var a;
      if ((null === (a = e.options) || void 0 === a ? void 0 : a.auto_moderation_rule_trigger_type) === U.AutomodTriggerType.USER_PROFILE.toString()) return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case x.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case x.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
    case x.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return j.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case x.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return j.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    case x.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
    case x.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
    case x.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
    case x.AuditLogActions.ONBOARDING_PROMPT_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
    case x.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
    case x.AuditLogActions.ONBOARDING_PROMPT_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
    case x.AuditLogActions.ONBOARDING_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
    case x.AuditLogActions.ONBOARDING_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
    case x.AuditLogActions.HOME_SETTINGS_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
    case x.AuditLogActions.HOME_SETTINGS_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
    case x.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
      let n = null != e.changes ? e.changes.find(e => e.key === x.AuditLogChangeKeys.ENTITY_TYPE) : null;
      if (null == n) return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
      switch (n.newValue) {
        case r.GuildFeedItemTypes.MESSAGE:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
        case r.GuildFeedItemTypes.FORUM_POST:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
        default:
          return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM
      }
    case x.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
    case x.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
    case x.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
    case x.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
    case x.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
    case x.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
    default:
      return null
  }
}

function er(e) {
  switch (e) {
    case p.ChannelFlags.GUILD_FEED_REMOVED:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
    case p.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
    case p.ChannelFlags.PINNED:
      return j.default.Messages.PINNED_POST
  }
  return null
}

function eo(e) {
  switch (e) {
    case p.ChannelFlags.GUILD_FEED_REMOVED:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
    case p.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
    case p.ChannelFlags.PINNED:
      return j.default.Messages.UNPINNED_POST
  }
  return null
}

function ed(e, t) {
  switch (e) {
    case x.Permissions.CREATE_INSTANT_INVITE:
      return j.default.Messages.CREATE_INSTANT_INVITE;
    case x.Permissions.KICK_MEMBERS:
      return j.default.Messages.KICK_MEMBERS;
    case x.Permissions.BAN_MEMBERS:
      return j.default.Messages.BAN_MEMBERS;
    case x.Permissions.ADMINISTRATOR:
      return j.default.Messages.ADMINISTRATOR;
    case x.Permissions.MANAGE_CHANNELS:
      if (t.targetType === x.AuditLogTargetTypes.CHANNEL || t.targetType === x.AuditLogTargetTypes.CHANNEL_OVERWRITE) return j.default.Messages.MANAGE_CHANNEL;
      return j.default.Messages.MANAGE_CHANNELS;
    case x.Permissions.MANAGE_GUILD:
      return j.default.Messages.MANAGE_SERVER;
    case x.Permissions.VIEW_GUILD_ANALYTICS:
      return j.default.Messages.VIEW_GUILD_ANALYTICS;
    case x.Permissions.CHANGE_NICKNAME:
      return j.default.Messages.CHANGE_NICKNAME;
    case x.Permissions.MANAGE_NICKNAMES:
      return j.default.Messages.MANAGE_NICKNAMES;
    case x.Permissions.MANAGE_ROLES:
      return j.default.Messages.MANAGE_ROLES;
    case x.Permissions.MANAGE_WEBHOOKS:
      return j.default.Messages.MANAGE_WEBHOOKS;
    case x.Permissions.CREATE_GUILD_EXPRESSIONS:
      return j.default.Messages.CREATE_EXPRESSIONS;
    case x.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return j.default.Messages.MANAGE_EXPRESSIONS;
    case x.Permissions.VIEW_AUDIT_LOG:
      return j.default.Messages.VIEW_AUDIT_LOG;
    case x.Permissions.VIEW_CHANNEL:
      return j.default.Messages.READ_MESSAGES;
    case x.Permissions.SEND_MESSAGES:
      return j.default.Messages.SEND_MESSAGES;
    case x.Permissions.SEND_TTS_MESSAGES:
      return j.default.Messages.SEND_TTS_MESSAGES;
    case x.Permissions.USE_APPLICATION_COMMANDS:
      return j.default.Messages.USE_APPLICATION_COMMANDS;
    case x.Permissions.MANAGE_MESSAGES:
      return j.default.Messages.MANAGE_MESSAGES;
    case x.Permissions.EMBED_LINKS:
      return j.default.Messages.EMBED_LINKS;
    case x.Permissions.ATTACH_FILES:
      return j.default.Messages.ATTACH_FILES;
    case x.Permissions.READ_MESSAGE_HISTORY:
      return j.default.Messages.READ_MESSAGE_HISTORY;
    case x.Permissions.MENTION_EVERYONE:
      return j.default.Messages.MENTION_EVERYONE;
    case x.Permissions.USE_EXTERNAL_EMOJIS:
      return j.default.Messages.USE_EXTERNAL_EMOJIS;
    case x.Permissions.USE_EXTERNAL_STICKERS:
      return j.default.Messages.USE_EXTERNAL_STICKERS;
    case x.Permissions.ADD_REACTIONS:
      return j.default.Messages.ADD_REACTIONS;
    case x.Permissions.CONNECT:
      return j.default.Messages.CONNECT;
    case x.Permissions.SPEAK:
      return j.default.Messages.SPEAK;
    case x.Permissions.MUTE_MEMBERS:
      return j.default.Messages.MUTE_MEMBERS;
    case x.Permissions.DEAFEN_MEMBERS:
      return j.default.Messages.DEAFEN_MEMBERS;
    case x.Permissions.MOVE_MEMBERS:
      return j.default.Messages.MOVE_MEMBERS;
    case x.Permissions.USE_VAD:
      return j.default.Messages.USE_VAD;
    case x.Permissions.PRIORITY_SPEAKER:
      return j.default.Messages.PRIORITY_SPEAKER;
    case x.Permissions.STREAM:
      return j.default.Messages.VIDEO;
    case x.Permissions.REQUEST_TO_SPEAK:
      return j.default.Messages.REQUEST_TO_SPEAK;
    case x.Permissions.CREATE_EVENTS:
      return j.default.Messages.CREATE_EVENTS;
    case x.Permissions.MANAGE_EVENTS:
      return j.default.Messages.MANAGE_EVENTS;
    case x.Permissions.CREATE_PUBLIC_THREADS:
      return j.default.Messages.CREATE_PUBLIC_THREADS;
    case x.Permissions.CREATE_PRIVATE_THREADS:
      return j.default.Messages.CREATE_PRIVATE_THREADS;
    case x.Permissions.SEND_MESSAGES_IN_THREADS:
      return j.default.Messages.SEND_MESSAGES_IN_THREADS;
    case x.Permissions.MANAGE_THREADS:
      return j.default.Messages.MANAGE_THREADS;
    case x.Permissions.MODERATE_MEMBERS:
      return j.default.Messages.MODERATE_MEMBER;
    case x.Permissions.USE_CLYDE_AI:
      return j.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
    case x.Permissions.SET_VOICE_CHANNEL_STATUS:
      return j.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function eu(e, t) {
  let s = [];
  return e.forEach(e => {
    let a = function(e, t) {
        switch (e.targetType) {
          case x.AuditLogTargetTypes.GUILD:
          case x.AuditLogTargetTypes.GUILD_HOME:
            return t;
          case x.AuditLogTargetTypes.CHANNEL:
          case x.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return eT(e, x.AuditLogChangeKeys.NAME, e => m.default.getChannel(e), e => (0, E.computeChannelName)(e, O.default, C.default, !0));
          case x.AuditLogTargetTypes.USER:
            return eT(e, x.AuditLogChangeKeys.NICK, e => O.default.getUser(e), e => e);
          case x.AuditLogTargetTypes.ROLE:
            return eT(e, x.AuditLogChangeKeys.NAME, e => t.getRole(e), e => e.name);
          case x.AuditLogTargetTypes.ONBOARDING_PROMPT:
            let s = eT(e, x.AuditLogChangeKeys.ID, e => S.default.getOnboardingPrompt(e), e => e.title);
            return null != s ? s : j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
          case x.AuditLogTargetTypes.GUILD_ONBOARDING:
            return t;
          case x.AuditLogTargetTypes.INVITE:
            return eT(e, x.AuditLogChangeKeys.CODE, x.NOOP_NULL);
          case x.AuditLogTargetTypes.INTEGRATION:
            return eT(e, x.AuditLogChangeKeys.TYPE, e => f.default.integrations.find(t => t.id === e), e => e.name);
          case x.AuditLogTargetTypes.WEBHOOK:
            return eT(e, x.AuditLogChangeKeys.NAME, e => f.default.webhooks.find(t => t.id === e), e => e.name);
          case x.AuditLogTargetTypes.EMOJI:
            return eT(e, x.AuditLogChangeKeys.NAME, e => T.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case x.AuditLogTargetTypes.STICKER:
            return eT(e, x.AuditLogChangeKeys.NAME, e => A.default.getStickerById(e), e => e.name);
          case x.AuditLogTargetTypes.STAGE_INSTANCE:
            return eT(e, x.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(g.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case x.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
          case x.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return eT(e, x.AuditLogChangeKeys.NAME, e => f.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case x.AuditLogTargetTypes.THREAD:
            return eT(e, x.AuditLogChangeKeys.NAME, e => f.default.threads.find(t => t.id === e), e => e.name);
          case x.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = f.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return eT(e, x.AuditLogChangeKeys.NAME, e => f.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === c.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          case x.AuditLogTargetTypes.AUTO_MODERATION_RULE:
            return eT(e, x.AuditLogChangeKeys.NAME, e => f.default.automodRules.find(t => t.id === e), e => e.name);
          case x.AuditLogTargetTypes.GUILD_SOUNDBOARD:
            return eT(e, x.AuditLogChangeKeys.NAME, x.NOOP_NULL);
          case x.AuditLogTargetTypes.HOME_SETTINGS:
            return eT(e, x.AuditLogChangeKeys.GUILD_ID, e => N.default.getSettings(e), () => j.default.Messages.SERVER_GUIDE, t.id);
          case x.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
            return eT(e, x.AuditLogChangeKeys.STATUS, e => m.default.getChannel(e), e => (0, E.computeChannelName)(e, O.default, C.default, !0));
          default:
            return P.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      l = O.default.getUser(e.userId);
    if (null != a || [x.AuditLogActions.MEMBER_PRUNE, x.AuditLogActions.MEMBER_DISCONNECT, x.AuditLogActions.MEMBER_MOVE, x.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED, x.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", l)).set("target", a)).set("options", function(e) {
          if (null != e.options) {
            let s = {
              ...e.options
            };
            switch (e.options.type) {
              case x.AuditLogSubtargetTypes.USER:
                s.subtarget = eI(e.options.id, e => O.default.getUser(e), e => e.tag);
                break;
              case x.AuditLogSubtargetTypes.ROLE:
                s.subtarget = eI(e.options.role_name, x.NOOP_NULL)
            }
            if (null != e.options.channel_id && (s.channel = eT(e, "", e => m.default.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (s.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let a = f.default.guildScheduledEvents.find(t => t.id === e.targetId),
                n = null == a ? void 0 : a.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              s.subtarget = (0, h.dateFormat)(i(G.default.extractTimestamp(null !== (t = null == n ? void 0 : n.event_exception_id) && void 0 !== t ? t : "0")), "LL")
            }
            return s
          }
          return e.options
        }(e))).changes) {
        let s = [];
        e.changes.forEach(a => {
          let l = function(e, t, s) {
            if (t.action === x.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case x.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = eI(t.id, e => s.getRole(e), e => e.name);
                  break;
                case x.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = eI(t.id, e => O.default.getUser(e), e => e.tag);
                  break;
                case x.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === n(s.id).subtract(1).toString() ? e.subtarget = j.default.Messages.ALL_CHANNELS : e.subtarget = eI(t.id, e => m.default.getChannel(e), e => (0, E.computeChannelName)(e, O.default, C.default, !0))
              }
              return e
            }
            switch (e.key) {
              case x.AuditLogChangeKeys.OWNER_ID:
                return e_(e, e => O.default.getUser(e));
              case x.AuditLogChangeKeys.CHANNEL_ID:
              case x.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case x.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case x.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case x.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return e_(e, e => m.default.getChannel(e), e => (0, E.computeChannelName)(e, O.default, C.default, !0));
              case x.AuditLogChangeKeys.AFK_TIMEOUT:
                return e_(e, e => e / 60);
              case x.AuditLogChangeKeys.BITRATE:
                return e_(e, e => e / 1e3);
              case x.AuditLogChangeKeys.COLOR:
                return e_(e, e => (0, u.int2hex)(e).toUpperCase());
              case x.AuditLogChangeKeys.THEME_COLORS:
                return e_(e, e => "".concat((0, u.int2hex)(e[0]).toUpperCase(), ", ").concat((0, u.int2hex)(e[1]).toUpperCase()));
              case x.AuditLogChangeKeys.MAX_AGE:
                return e_(e, e => {
                  let t = M.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case x.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = ec(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new L.AuditLogChange(x.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (a.length > 0) {
                  let e = new L.AuditLogChange(x.AuditLogChangeKeys.PERMISSIONS_DENIED, null, a);
                  t.push(e)
                }
                return t
              }
              case x.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case x.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = ec(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let a = new L.AuditLogChange(e.key, null, s);
                  t.push(a)
                }
                if (a.length > 0) {
                  let e = new L.AuditLogChange(x.AuditLogChangeKeys.PERMISSIONS_RESET, a, a);
                  t.push(e)
                }
                return t
              }
              case x.AuditLogChangeKeys.FLAGS: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = function(e, t) {
                    let s = "number" == typeof e ? e : 0,
                      a = "number" == typeof t ? t : 0,
                      n = R.removeFlag(a, s),
                      l = R.removeFlag(s, a),
                      i = [],
                      r = [];
                    for (let e in p.ChannelFlags) {
                      let t = p.ChannelFlags[e];
                      R.hasFlag(n, t) && i.push(t), R.hasFlag(l, t) && r.push(t)
                    }
                    return {
                      added: i,
                      removed: r
                    }
                  }(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let a = new L.AuditLogChange(e.key, null, s);
                  t.push(a)
                }
                if (a.length > 0) {
                  let s = new L.AuditLogChange(e.key, a, null);
                  t.push(s)
                }
                return t
              }
              case x.AuditLogChangeKeys.PREFERRED_LOCALE:
                return e_(e, e => {
                  let t = j.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case x.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return e_(e, e => e === x.VideoQualityMode.FULL ? j.default.Messages.VIDEO_QUALITY_MODE_FULL : j.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [x.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [x.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [x.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [x.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: x.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(x.SystemChannelFlags).forEach(a => {
                    let n = (e.oldValue & a) === a,
                      l = (e.newValue & a) === a;
                    if (n === l) return;
                    let i = new L.AuditLogChange(t[a], !n, !l);
                    s.push(i)
                  }), s
                }(e);
              case x.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS:
                if (t.targetType === x.AuditLogTargetTypes.AUTO_MODERATION_RULE) return e_(e, e => e.map(e => e.type), e => e.map(I.actionTypeToName).join(", "));
                break;
              case x.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === x.AuditLogTargetTypes.AUTO_MODERATION_RULE) return e_(e, I.eventTypeToName);
                break;
              case x.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === x.AuditLogTargetTypes.AUTO_MODERATION_RULE) return e_(e, I.triggerTypeToName);
                break;
              case x.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === x.AuditLogTargetTypes.AUTO_MODERATION_RULE) return e_(e, e => {
                  if (null != e && "object" == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({
                    newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                  }) : JSON.stringify(e);
                  return e
                });
                break;
              case x.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS:
              case x.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS:
              case x.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case x.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case x.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST:
              case x.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === x.AuditLogTargetTypes.AUTO_MODERATION_RULE) return e_(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case x.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === x.AuditLogTargetTypes.AUTO_MODERATION_RULE) return e_(e, e => e.map(m.default.getChannel).filter(e => null != e).map(e => (0, E.computeChannelName)(e, O.default, C.default, !0)), e => null != e && e.length > 0 ? e.join(", ") : j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case x.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === x.AuditLogTargetTypes.AUTO_MODERATION_RULE) return e_(e, e => e.map(e => s.getRole(e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : j.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case x.AuditLogChangeKeys.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: s
                  } = e, a = Array.isArray(t) ? t : [], n = Array.isArray(s) ? s : [];
                  if (0 === a.length && 0 === n.length) return e;
                  let l = {},
                    i = {};
                  if (a.forEach(e => {
                      l[e.id] = e
                    }), n.forEach(e => {
                      i[e.id] = e
                    }), a.length < n.length) {
                    for (let e in i)
                      if (null == l[e]) return new L.AuditLogChange(x.AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, eE(i[e]))
                  }
                  if (a.length > n.length) {
                    for (let e in l)
                      if (null == i[e]) return new L.AuditLogChange(x.AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, eE(l[e]))
                  }
                  for (let e in l) {
                    let t = l[e],
                      s = i[e];
                    if ((null == s ? void 0 : s.name) !== t.name || (null == s ? void 0 : s.emoji_id) !== t.emoji_id || (null == s ? void 0 : s.emoji_name) !== t.emoji_name) return new L.AuditLogChange(x.AuditLogChangeKeys.AVAILABLE_TAG_EDIT, eE(t), eE(s))
                  }
                  return e
                }(e);
              case x.AuditLogChangeKeys.SCHEDULED_START_TIME:
              case x.AuditLogChangeKeys.SCHEDULED_END_TIME:
                return e_(e, e => (0, h.dateFormat)(i(new Date(e)), "LLLL"))
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

function ec(e, t) {
  let s = d.default.deserialize("string" == typeof e ? e : 0),
    a = d.default.deserialize("string" == typeof t ? t : 0),
    n = d.default.remove(a, s),
    l = d.default.remove(s, a),
    i = [],
    r = [];
  for (let e in x.Permissions) {
    let t = x.Permissions[e];
    d.default.has(n, t) && i.push(t), d.default.has(l, t) && r.push(t)
  }
  return {
    added: i,
    removed: r
  }
}

function eE(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function e_(e, t, s) {
  let a = e.newValue,
    n = e.oldValue;
  return null != e.newValue && (a = t(e.newValue), null != s && null != a && (a = s(a))), null != e.oldValue && (n = t(e.oldValue), null != s && null != n && (n = s(n))), new L.AuditLogChange(e.key, n || e.oldValue, a || e.newValue)
}

function eT(e, t, s, a, n) {
  let l = null;
  n = null != n ? n : e.targetId;
  let i = s(n);
  if (null != i && null != a && (l = a(i)), null == l) {
    let t = f.default.deletedTargets[e.targetType];
    null != t && null != t[n] && (l = t[n])
  }
  if (null == l && null != e.changes) {
    let s = e.changes.find(e => e.key === t);
    null != s && (l = s.newValue || s.oldValue)
  }
  return null != l ? l : n
}

function eI(e, t, s) {
  let a = e,
    n = t(e);
  return null != n && null != s && (a = s(n)), a
}

function eS(e, t) {
  return s => null == s.oldValue ? e : t
}

function eN(e, t) {
  return s => null == s.newValue ? e : t
}

function ef(e, t, s, a) {
  return n => {
    if (null != n.newValue && null != n.oldValue) return e;
    if (null != n.newValue) return t;
    if (null != n.oldValue) return s;
    return a
  }
}