"use strict";
s.r(t), s.d(t, {
  ACTION_FILTER_ITEMS: function() {
    return eE
  },
  AutoModerationRuleChangeStrings: function() {
    return es
  },
  ChannelChangeStrings: function() {
    return j
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
    return V
  },
  GuildScheduledEventChangeStrings: function() {
    return Q
  },
  GuildScheduledEventExceptionChangeStrings: function() {
    return $
  },
  GuildSoundboardChangeStrings: function() {
    return ea
  },
  HomeSettingsChangeStrings: function() {
    return W
  },
  IntegrationChangeStrings: function() {
    return z
  },
  InviteChangeStrings: function() {
    return Y
  },
  NotRenderedChanges: function() {
    return ei
  },
  OnboardingChangeStrings: function() {
    return k
  },
  OnboardingPromptChangeStrings: function() {
    return w
  },
  RoleChangeStrings: function() {
    return K
  },
  StageInstanceChangeStrings: function() {
    return q
  },
  StickerChangeStrings: function() {
    return J
  },
  ThreadChangeStrings: function() {
    return ee
  },
  UserChangeStrings: function() {
    return b
  },
  VoiceChannelStatusStrings: function() {
    return en
  },
  WebhookChangeStrings: function() {
    return Z
  },
  getChangeTitle: function() {
    return el
  },
  getStringForAddedChannelFlag: function() {
    return e_
  },
  getStringForPermission: function() {
    return eu
  },
  getStringForRemovedChannelFlag: function() {
    return er
  },
  transformLogs: function() {
    return eo
  }
}), s("411104"), s("653041");
var a = s("654861"),
  n = s.n(a),
  i = s("913527"),
  E = s.n(i),
  l = s("536402"),
  _ = s("533800"),
  r = s("149765"),
  u = s("866442"),
  o = s("911969"),
  T = s("933557"),
  d = s("710845"),
  A = s("339085"),
  I = s("236413"),
  L = s("45966"),
  c = s("563534"),
  N = s("987707"),
  S = s("427679"),
  g = s("926491"),
  D = s("387667"),
  C = s("592125"),
  f = s("430824"),
  O = s("699516"),
  G = s("594174"),
  M = s("55935"),
  U = s("630388"),
  R = s("823379"),
  h = s("971130"),
  m = s("709054"),
  p = s("981631"),
  v = s("176505"),
  y = s("273504"),
  P = s("765305"),
  x = s("689938");
let H = new d.default("AuditLogUtils"),
  B = -1,
  F = () => ({
    [p.AuditLogChangeKeys.REASON]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  V = () => ({
    [p.AuditLogChangeKeys.NAME]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [p.AuditLogChangeKeys.DESCRIPTION]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [p.AuditLogChangeKeys.ICON_HASH]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [p.AuditLogChangeKeys.SPLASH_HASH]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [p.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [p.AuditLogChangeKeys.BANNER_HASH]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [p.AuditLogChangeKeys.OWNER_ID]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [p.AuditLogChangeKeys.REGION]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [p.AuditLogChangeKeys.PREFERRED_LOCALE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [p.AuditLogChangeKeys.AFK_CHANNEL_ID]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.AFK_TIMEOUT]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.RULES_CHANNEL_ID]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.MFA_LEVEL]: {
      [p.MFALevels.NONE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [p.MFALevels.ELEVATED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [p.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [p.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [p.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [p.VerificationLevels.NONE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [p.VerificationLevels.LOW]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [p.VerificationLevels.MEDIUM]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [p.VerificationLevels.HIGH]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [p.VerificationLevels.VERY_HIGH]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [p.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [p.UserNotificationSettings.ALL_MESSAGES]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [p.UserNotificationSettings.ONLY_MENTIONS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [p.AuditLogChangeKeys.VANITY_URL_CODE]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [p.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [p.GuildExplicitContentFilterTypes.DISABLED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [p.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [p.GuildExplicitContentFilterTypes.ALL_MEMBERS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [p.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...F()
  }),
  j = () => ({
    [p.AuditLogChangeKeys.NAME]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [p.AuditLogChangeKeys.POSITION]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [p.AuditLogChangeKeys.TOPIC]: eS(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [p.AuditLogChangeKeys.BITRATE]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [p.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: eS(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [p.AuditLogChangeKeys.USER_LIMIT]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [p.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [p.AuditLogChangeKeys.PERMISSIONS_RESET]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [p.AuditLogChangeKeys.PERMISSIONS_GRANTED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [p.AuditLogChangeKeys.PERMISSIONS_DENIED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [p.AuditLogChangeKeys.REASON]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [p.AuditLogChangeKeys.NSFW]: {
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [p.AuditLogChangeKeys.TYPE]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [p.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [p.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
    [p.AuditLogChangeKeys.FLAGS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
    [p.AuditLogChangeKeys.AVAILABLE_TAG_ADD]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
    [p.AuditLogChangeKeys.AVAILABLE_TAG_EDIT]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
    [p.AuditLogChangeKeys.AVAILABLE_TAG_DELETE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE
  }),
  b = () => ({
    [p.AuditLogChangeKeys.NICK]: eS(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [p.AuditLogChangeKeys.DEAF]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [p.AuditLogChangeKeys.MUTE]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [p.AuditLogChangeKeys.ROLES_REMOVE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [p.AuditLogChangeKeys.ROLES_ADD]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [p.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [p.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: eS(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [p.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...F()
  }),
  K = () => ({
    [p.AuditLogChangeKeys.NAME]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [p.AuditLogChangeKeys.DESCRIPTION]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    [p.AuditLogChangeKeys.PERMISSIONS_GRANTED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [p.AuditLogChangeKeys.PERMISSIONS_DENIED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [p.AuditLogChangeKeys.COLOR]: {
      "#000000": x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [B]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [p.AuditLogChangeKeys.HOIST]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [p.AuditLogChangeKeys.MENTIONABLE]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [p.AuditLogChangeKeys.ICON_HASH]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [p.AuditLogChangeKeys.UNICODE_EMOJI]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...F()
  }),
  w = () => ({
    ...F(),
    [p.AuditLogChangeKeys.TITLE]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE
    },
    [p.AuditLogChangeKeys.DESCRIPTION]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({
        newValue: s
      })
    },
    [p.AuditLogChangeKeys.OPTIONS]: () => x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
    [p.AuditLogChangeKeys.SINGLE_SELECT]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT
    },
    [p.AuditLogChangeKeys.REQUIRED]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL
    }
  }),
  k = () => ({
    ...F(),
    [p.AuditLogChangeKeys.DEFAULT_CHANNEL_IDS]: e => {
      let {
        newValue: t
      } = e;
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({
        count: t.length
      })
    },
    [p.AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS
    },
    [p.AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS
    },
    [p.AuditLogChangeKeys.ENABLED]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE
    }
  }),
  W = () => ({
    ...F(),
    [p.AuditLogChangeKeys.WELCOME_MESSAGE]: () => x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
    [p.AuditLogChangeKeys.NEW_MEMBER_ACTIONS]: () => x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
    [p.AuditLogChangeKeys.RESOURCE_CHANNELS]: () => x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
  }),
  Y = () => ({
    [p.AuditLogChangeKeys.CODE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [p.AuditLogChangeKeys.CHANNEL_ID]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [p.AuditLogChangeKeys.MAX_USES]: {
      0: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [B]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [p.AuditLogChangeKeys.MAX_AGE]: {
      0: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [B]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [p.AuditLogChangeKeys.TEMPORARY]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
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
          if (e === _.GuildInviteFlags.IS_GUEST_INVITE) return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
          return null
        })(e)).filter(R.isNotNullish)
      }({
        newValue: t
      })
    },
    ...F()
  }),
  Z = () => ({
    [p.AuditLogChangeKeys.CHANNEL_ID]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [p.AuditLogChangeKeys.NAME]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [p.AuditLogChangeKeys.AVATAR_HASH]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [p.AuditLogChangeKeys.REASON]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  X = () => ({
    [p.AuditLogChangeKeys.NAME]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...F()
  }),
  J = () => ({
    [p.AuditLogChangeKeys.NAME]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [p.AuditLogChangeKeys.TAGS]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [p.AuditLogChangeKeys.DESCRIPTION]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...F()
  }),
  z = () => ({
    [p.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [p.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [p.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...F()
  }),
  q = () => ({
    [p.AuditLogChangeKeys.TOPIC]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [p.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [P.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [P.GuildScheduledEventPrivacyLevel.PUBLIC]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...F()
  }),
  Q = () => ({
    [p.AuditLogChangeKeys.NAME]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [p.AuditLogChangeKeys.DESCRIPTION]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [p.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [P.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [P.GuildScheduledEventPrivacyLevel.PUBLIC]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [p.AuditLogChangeKeys.STATUS]: {
      [P.GuildScheduledEventStatus.SCHEDULED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [P.GuildScheduledEventStatus.ACTIVE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [P.GuildScheduledEventStatus.COMPLETED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [P.GuildScheduledEventStatus.CANCELED]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [p.AuditLogChangeKeys.ENTITY_TYPE]: {
      [P.GuildScheduledEventEntityTypes.NONE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [P.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [P.GuildScheduledEventEntityTypes.VOICE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [P.GuildScheduledEventEntityTypes.EXTERNAL]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [p.AuditLogChangeKeys.CHANNEL_ID]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [p.AuditLogChangeKeys.LOCATION]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [p.AuditLogChangeKeys.IMAGE_HASH]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
    ...F()
  }),
  $ = () => ({
    [p.AuditLogChangeKeys.SCHEDULED_START_TIME]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
    [p.AuditLogChangeKeys.SCHEDULED_END_TIME]: eN(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
    [p.AuditLogChangeKeys.IS_CANCELED]: e => {
      if (null != e.oldValue || !0 === e.newValue) {
        if (!e.oldValue && e.newValue) return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
        if (e.oldValue && !e.newValue) return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED
      }
      return ""
    },
    ...F()
  }),
  ee = () => ({
    [p.AuditLogChangeKeys.NAME]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [p.AuditLogChangeKeys.ARCHIVED]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [p.AuditLogChangeKeys.LOCKED]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [p.AuditLogChangeKeys.INVITABLE]: {
      true: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [p.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [p.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [p.AuditLogChangeKeys.FLAGS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
    ...F()
  }),
  et = e => {
    let t = {
      ...F()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  es = () => ({
    [p.AuditLogChangeKeys.NAME]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
    [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
    [p.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
    [p.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
    [p.AuditLogChangeKeys.AUTO_MODERATION_ENABLED]: e => {
      var t;
      return !0 === (null !== (t = e.newValue) && void 0 !== t ? t : e.oldValue) ? x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE : x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE
    },
    [p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
    [p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
    [p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
    [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
    [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
    [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
    [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
    [p.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
    [p.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
    ...F()
  }),
  ea = () => ({
    [p.AuditLogChangeKeys.NAME]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
    [p.AuditLogChangeKeys.VOLUME]: ec(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
    [p.AuditLogChangeKeys.EMOJI_NAME]: eS(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
    [p.AuditLogChangeKeys.EMOJI_ID]: eS(x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
    ...F()
  }),
  en = () => ({
    [p.AuditLogChangeKeys.STATUS]: x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
    ...F()
  }),
  ei = {
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
  eE = () => [{
    value: p.AuditLogActions.ALL,
    label: x.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: x.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: p.AuditLogActions.GUILD_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: p.AuditLogActions.CHANNEL_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: p.AuditLogActions.CHANNEL_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: p.AuditLogActions.CHANNEL_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: p.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: p.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: p.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: p.AuditLogActions.MEMBER_KICK,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: p.AuditLogActions.MEMBER_PRUNE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: p.AuditLogActions.MEMBER_BAN_ADD,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: p.AuditLogActions.MEMBER_BAN_REMOVE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: p.AuditLogActions.MEMBER_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: p.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: p.AuditLogActions.MEMBER_MOVE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: p.AuditLogActions.MEMBER_DISCONNECT,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: p.AuditLogActions.BOT_ADD,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: p.AuditLogActions.THREAD_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: p.AuditLogActions.THREAD_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: p.AuditLogActions.THREAD_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: p.AuditLogActions.ROLE_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: p.AuditLogActions.ROLE_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: p.AuditLogActions.ROLE_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: p.AuditLogActions.ONBOARDING_PROMPT_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
  }, {
    value: p.AuditLogActions.ONBOARDING_PROMPT_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
  }, {
    value: p.AuditLogActions.ONBOARDING_PROMPT_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
  }, {
    value: p.AuditLogActions.ONBOARDING_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
  }, {
    value: p.AuditLogActions.ONBOARDING_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
  }, {
    value: p.AuditLogActions.HOME_SETTINGS_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
  }, {
    value: p.AuditLogActions.HOME_SETTINGS_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
  }, {
    value: p.AuditLogActions.INVITE_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: p.AuditLogActions.INVITE_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: p.AuditLogActions.INVITE_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: p.AuditLogActions.WEBHOOK_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: p.AuditLogActions.WEBHOOK_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: p.AuditLogActions.WEBHOOK_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: p.AuditLogActions.EMOJI_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: p.AuditLogActions.EMOJI_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: p.AuditLogActions.EMOJI_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: p.AuditLogActions.MESSAGE_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: p.AuditLogActions.MESSAGE_BULK_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: p.AuditLogActions.MESSAGE_PIN,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: p.AuditLogActions.MESSAGE_UNPIN,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: p.AuditLogActions.INTEGRATION_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: p.AuditLogActions.INTEGRATION_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: p.AuditLogActions.INTEGRATION_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: p.AuditLogActions.STICKER_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: p.AuditLogActions.STICKER_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: p.AuditLogActions.STICKER_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: p.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: p.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: p.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: p.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: p.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: p.AuditLogActions.AUTO_MODERATION_RULE_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
  }, {
    value: p.AuditLogActions.AUTO_MODERATION_RULE_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
  }, {
    value: p.AuditLogActions.AUTO_MODERATION_RULE_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
  }, {
    value: p.AuditLogActions.GUILD_HOME_FEATURE_ITEM,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
  }, {
    value: p.AuditLogActions.GUILD_HOME_REMOVE_ITEM,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
  }, {
    value: p.AuditLogActions.SOUNDBOARD_SOUND_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
  }, {
    value: p.AuditLogActions.SOUNDBOARD_SOUND_UPDATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
  }, {
    value: p.AuditLogActions.SOUNDBOARD_SOUND_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
  }, {
    value: p.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
  }, {
    value: p.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE,
    label: x.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
  }];

function el(e) {
  switch (e.action) {
    case p.AuditLogActions.GUILD_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case p.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case p.ChannelTypes.GUILD_STAGE_VOICE:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case p.ChannelTypes.GUILD_VOICE:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case p.ChannelTypes.GUILD_CATEGORY:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case p.AuditLogActions.CHANNEL_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case p.AuditLogActions.CHANNEL_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case p.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case p.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case p.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case p.AuditLogActions.MEMBER_KICK:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case p.AuditLogActions.MEMBER_PRUNE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case p.AuditLogActions.MEMBER_BAN_ADD:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
    case p.AuditLogActions.MEMBER_BAN_REMOVE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case p.AuditLogActions.MEMBER_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case p.AuditLogActions.MEMBER_ROLE_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case p.AuditLogActions.MEMBER_MOVE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case p.AuditLogActions.MEMBER_DISCONNECT:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case p.AuditLogActions.BOT_ADD:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case p.AuditLogActions.ROLE_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case p.AuditLogActions.ROLE_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case p.AuditLogActions.ROLE_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case p.AuditLogActions.INVITE_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case p.AuditLogActions.INVITE_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case p.AuditLogActions.INVITE_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case p.AuditLogActions.WEBHOOK_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case p.AuditLogActions.WEBHOOK_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case p.AuditLogActions.WEBHOOK_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case p.AuditLogActions.EMOJI_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case p.AuditLogActions.EMOJI_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case p.AuditLogActions.EMOJI_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case p.AuditLogActions.STICKER_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case p.AuditLogActions.STICKER_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case p.AuditLogActions.STICKER_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case p.AuditLogActions.MESSAGE_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case p.AuditLogActions.MESSAGE_BULK_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case p.AuditLogActions.MESSAGE_PIN:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case p.AuditLogActions.MESSAGE_UNPIN:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case p.AuditLogActions.INTEGRATION_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case p.AuditLogActions.INTEGRATION_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case p.AuditLogActions.INTEGRATION_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case p.AuditLogActions.STAGE_INSTANCE_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case p.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case p.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
    case p.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
    case p.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case p.ChannelTypes.PRIVATE_THREAD:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
        case p.ChannelTypes.ANNOUNCEMENT_THREAD:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE
      }
    case p.AuditLogActions.THREAD_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
    case p.AuditLogActions.THREAD_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
    case p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case p.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case p.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var a;
      if ((null === (a = e.options) || void 0 === a ? void 0 : a.auto_moderation_rule_trigger_type) === y.AutomodTriggerType.USER_PROFILE.toString()) return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case p.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case p.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
    case p.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return x.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case p.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return x.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    case p.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
    case p.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
    case p.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
    case p.AuditLogActions.ONBOARDING_PROMPT_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
    case p.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
    case p.AuditLogActions.ONBOARDING_PROMPT_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
    case p.AuditLogActions.ONBOARDING_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
    case p.AuditLogActions.ONBOARDING_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
    case p.AuditLogActions.HOME_SETTINGS_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
    case p.AuditLogActions.HOME_SETTINGS_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
    case p.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
      let n = null != e.changes ? e.changes.find(e => e.key === p.AuditLogChangeKeys.ENTITY_TYPE) : null;
      if (null == n) return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
      switch (n.newValue) {
        case l.GuildFeedItemTypes.MESSAGE:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
        case l.GuildFeedItemTypes.FORUM_POST:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
        default:
          return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM
      }
    case p.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
    case p.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
    case p.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
    case p.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
    case p.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
    case p.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
    default:
      return null
  }
}

function e_(e) {
  switch (e) {
    case v.ChannelFlags.GUILD_FEED_REMOVED:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
    case v.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
    case v.ChannelFlags.PINNED:
      return x.default.Messages.PINNED_POST
  }
  return null
}

function er(e) {
  switch (e) {
    case v.ChannelFlags.GUILD_FEED_REMOVED:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
    case v.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
    case v.ChannelFlags.PINNED:
      return x.default.Messages.UNPINNED_POST
  }
  return null
}

function eu(e, t) {
  switch (e) {
    case p.Permissions.CREATE_INSTANT_INVITE:
      return x.default.Messages.CREATE_INSTANT_INVITE;
    case p.Permissions.KICK_MEMBERS:
      return x.default.Messages.KICK_MEMBERS;
    case p.Permissions.BAN_MEMBERS:
      return x.default.Messages.BAN_MEMBERS;
    case p.Permissions.ADMINISTRATOR:
      return x.default.Messages.ADMINISTRATOR;
    case p.Permissions.MANAGE_CHANNELS:
      if (t.targetType === p.AuditLogTargetTypes.CHANNEL || t.targetType === p.AuditLogTargetTypes.CHANNEL_OVERWRITE) return x.default.Messages.MANAGE_CHANNEL;
      return x.default.Messages.MANAGE_CHANNELS;
    case p.Permissions.MANAGE_GUILD:
      return x.default.Messages.MANAGE_SERVER;
    case p.Permissions.VIEW_GUILD_ANALYTICS:
      return x.default.Messages.VIEW_GUILD_ANALYTICS;
    case p.Permissions.CHANGE_NICKNAME:
      return x.default.Messages.CHANGE_NICKNAME;
    case p.Permissions.MANAGE_NICKNAMES:
      return x.default.Messages.MANAGE_NICKNAMES;
    case p.Permissions.MANAGE_ROLES:
      return x.default.Messages.MANAGE_ROLES;
    case p.Permissions.MANAGE_WEBHOOKS:
      return x.default.Messages.MANAGE_WEBHOOKS;
    case p.Permissions.CREATE_GUILD_EXPRESSIONS:
      return x.default.Messages.CREATE_EXPRESSIONS;
    case p.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return x.default.Messages.MANAGE_EXPRESSIONS;
    case p.Permissions.VIEW_AUDIT_LOG:
      return x.default.Messages.VIEW_AUDIT_LOG;
    case p.Permissions.VIEW_CHANNEL:
      return x.default.Messages.READ_MESSAGES;
    case p.Permissions.SEND_MESSAGES:
      return x.default.Messages.SEND_MESSAGES;
    case p.Permissions.SEND_TTS_MESSAGES:
      return x.default.Messages.SEND_TTS_MESSAGES;
    case p.Permissions.USE_APPLICATION_COMMANDS:
      return x.default.Messages.USE_APPLICATION_COMMANDS;
    case p.Permissions.MANAGE_MESSAGES:
      return x.default.Messages.MANAGE_MESSAGES;
    case p.Permissions.EMBED_LINKS:
      return x.default.Messages.EMBED_LINKS;
    case p.Permissions.ATTACH_FILES:
      return x.default.Messages.ATTACH_FILES;
    case p.Permissions.READ_MESSAGE_HISTORY:
      return x.default.Messages.READ_MESSAGE_HISTORY;
    case p.Permissions.MENTION_EVERYONE:
      return x.default.Messages.MENTION_EVERYONE;
    case p.Permissions.USE_EXTERNAL_EMOJIS:
      return x.default.Messages.USE_EXTERNAL_EMOJIS;
    case p.Permissions.USE_EXTERNAL_STICKERS:
      return x.default.Messages.USE_EXTERNAL_STICKERS;
    case p.Permissions.ADD_REACTIONS:
      return x.default.Messages.ADD_REACTIONS;
    case p.Permissions.CONNECT:
      return x.default.Messages.CONNECT;
    case p.Permissions.SPEAK:
      return x.default.Messages.SPEAK;
    case p.Permissions.MUTE_MEMBERS:
      return x.default.Messages.MUTE_MEMBERS;
    case p.Permissions.DEAFEN_MEMBERS:
      return x.default.Messages.DEAFEN_MEMBERS;
    case p.Permissions.MOVE_MEMBERS:
      return x.default.Messages.MOVE_MEMBERS;
    case p.Permissions.USE_VAD:
      return x.default.Messages.USE_VAD;
    case p.Permissions.PRIORITY_SPEAKER:
      return x.default.Messages.PRIORITY_SPEAKER;
    case p.Permissions.STREAM:
      return x.default.Messages.VIDEO;
    case p.Permissions.REQUEST_TO_SPEAK:
      return x.default.Messages.REQUEST_TO_SPEAK;
    case p.Permissions.CREATE_EVENTS:
      return x.default.Messages.CREATE_EVENTS;
    case p.Permissions.MANAGE_EVENTS:
      return x.default.Messages.MANAGE_EVENTS;
    case p.Permissions.CREATE_PUBLIC_THREADS:
      return x.default.Messages.CREATE_PUBLIC_THREADS;
    case p.Permissions.CREATE_PRIVATE_THREADS:
      return x.default.Messages.CREATE_PRIVATE_THREADS;
    case p.Permissions.SEND_MESSAGES_IN_THREADS:
      return x.default.Messages.SEND_MESSAGES_IN_THREADS;
    case p.Permissions.MANAGE_THREADS:
      return x.default.Messages.MANAGE_THREADS;
    case p.Permissions.MODERATE_MEMBERS:
      return x.default.Messages.MODERATE_MEMBER;
    case p.Permissions.USE_CLYDE_AI:
      return x.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
    case p.Permissions.SET_VOICE_CHANNEL_STATUS:
      return x.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE;
    case p.Permissions.SEND_POLLS:
      return x.default.Messages.ROLE_PERMISSIONS_SEND_POLLS
  }
  return null
}

function eo(e, t) {
  let s = [];
  return e.forEach(e => {
    let a = function(e, t) {
        switch (e.targetType) {
          case p.AuditLogTargetTypes.GUILD:
          case p.AuditLogTargetTypes.GUILD_HOME:
            return t;
          case p.AuditLogTargetTypes.CHANNEL:
          case p.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return eI(e, p.AuditLogChangeKeys.NAME, e => C.default.getChannel(e), e => (0, T.computeChannelName)(e, G.default, O.default, !0));
          case p.AuditLogTargetTypes.USER:
            return eI(e, p.AuditLogChangeKeys.NICK, e => G.default.getUser(e), e => e);
          case p.AuditLogTargetTypes.ROLE:
            return eI(e, p.AuditLogChangeKeys.NAME, e => f.default.getRole(t.id, e), e => e.name);
          case p.AuditLogTargetTypes.ONBOARDING_PROMPT:
            let s = eI(e, p.AuditLogChangeKeys.ID, e => L.default.getOnboardingPrompt(e), e => e.title);
            return null != s ? s : x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
          case p.AuditLogTargetTypes.GUILD_ONBOARDING:
            return t;
          case p.AuditLogTargetTypes.INVITE:
            return eI(e, p.AuditLogChangeKeys.CODE, p.NOOP_NULL);
          case p.AuditLogTargetTypes.INTEGRATION:
            return eI(e, p.AuditLogChangeKeys.TYPE, e => N.default.integrations.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.WEBHOOK:
            return eI(e, p.AuditLogChangeKeys.NAME, e => N.default.webhooks.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.EMOJI:
            return eI(e, p.AuditLogChangeKeys.NAME, e => A.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.STICKER:
            return eI(e, p.AuditLogChangeKeys.NAME, e => g.default.getStickerById(e), e => e.name);
          case p.AuditLogTargetTypes.STAGE_INSTANCE:
            return eI(e, p.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(S.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case p.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
          case p.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return eI(e, p.AuditLogChangeKeys.NAME, e => N.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.THREAD:
            return eI(e, p.AuditLogChangeKeys.NAME, e => N.default.threads.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = N.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return eI(e, p.AuditLogChangeKeys.NAME, e => N.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === o.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          case p.AuditLogTargetTypes.AUTO_MODERATION_RULE:
            return eI(e, p.AuditLogChangeKeys.NAME, e => N.default.automodRules.find(t => t.id === e), e => e.name);
          case p.AuditLogTargetTypes.GUILD_SOUNDBOARD:
            return eI(e, p.AuditLogChangeKeys.NAME, p.NOOP_NULL);
          case p.AuditLogTargetTypes.HOME_SETTINGS:
            return eI(e, p.AuditLogChangeKeys.GUILD_ID, e => c.default.getSettings(e), () => x.default.Messages.SERVER_GUIDE, t.id);
          case p.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
            return eI(e, p.AuditLogChangeKeys.STATUS, e => C.default.getChannel(e), e => (0, T.computeChannelName)(e, G.default, O.default, !0));
          default:
            return H.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      i = G.default.getUser(e.userId);
    if (null != a || [p.AuditLogActions.MEMBER_PRUNE, p.AuditLogActions.MEMBER_DISCONNECT, p.AuditLogActions.MEMBER_MOVE, p.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED, p.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", i)).set("target", a)).set("options", function(e) {
          if (null != e.options) {
            let s = {
              ...e.options
            };
            switch (e.options.type) {
              case p.AuditLogSubtargetTypes.USER:
                s.subtarget = eL(e.options.id, e => G.default.getUser(e), e => e.tag);
                break;
              case p.AuditLogSubtargetTypes.ROLE:
                s.subtarget = eL(e.options.role_name, p.NOOP_NULL)
            }
            if (null != e.options.channel_id && (s.channel = eI(e, "", e => C.default.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (s.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let a = N.default.guildScheduledEvents.find(t => t.id === e.targetId),
                n = null == a ? void 0 : a.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              s.subtarget = (0, M.dateFormat)(E()(m.default.extractTimestamp(null !== (t = null == n ? void 0 : n.event_exception_id) && void 0 !== t ? t : "0")), "LL")
            }
            return s
          }
          return e.options
        }(e))).changes) {
        let s = [];
        e.changes.forEach(a => {
          let i = function(e, t, s) {
            if (t.action === p.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case p.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = eL(t.id, e => f.default.getRole(s.id, e), e => e.name);
                  break;
                case p.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = eL(t.id, e => G.default.getUser(e), e => e.tag);
                  break;
                case p.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === n()(s.id).subtract(1).toString() ? e.subtarget = x.default.Messages.ALL_CHANNELS : e.subtarget = eL(t.id, e => C.default.getChannel(e), e => (0, T.computeChannelName)(e, G.default, O.default, !0))
              }
              return e
            }
            switch (e.key) {
              case p.AuditLogChangeKeys.OWNER_ID:
                return eA(e, e => G.default.getUser(e));
              case p.AuditLogChangeKeys.CHANNEL_ID:
              case p.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case p.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case p.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case p.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return eA(e, e => C.default.getChannel(e), e => (0, T.computeChannelName)(e, G.default, O.default, !0));
              case p.AuditLogChangeKeys.AFK_TIMEOUT:
                return eA(e, e => e / 60);
              case p.AuditLogChangeKeys.BITRATE:
                return eA(e, e => e / 1e3);
              case p.AuditLogChangeKeys.COLOR:
                return eA(e, e => (0, u.int2hex)(e).toUpperCase());
              case p.AuditLogChangeKeys.THEME_COLORS:
                return eA(e, e => "".concat((0, u.int2hex)(e[0]).toUpperCase(), ", ").concat((0, u.int2hex)(e[1]).toUpperCase()));
              case p.AuditLogChangeKeys.MAX_AGE:
                return eA(e, e => {
                  let t = h.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case p.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = eT(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new D.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (a.length > 0) {
                  let e = new D.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_DENIED, null, a);
                  t.push(e)
                }
                return t
              }
              case p.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case p.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = eT(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let a = new D.AuditLogChange(e.key, null, s);
                  t.push(a)
                }
                if (a.length > 0) {
                  let e = new D.AuditLogChange(p.AuditLogChangeKeys.PERMISSIONS_RESET, a, a);
                  t.push(e)
                }
                return t
              }
              case p.AuditLogChangeKeys.FLAGS: {
                let t = [],
                  {
                    added: s,
                    removed: a
                  } = function(e, t) {
                    let s = "number" == typeof e ? e : 0,
                      a = "number" == typeof t ? t : 0,
                      n = U.removeFlag(a, s),
                      i = U.removeFlag(s, a),
                      E = [],
                      l = [];
                    for (let e in v.ChannelFlags) {
                      let t = v.ChannelFlags[e];
                      U.hasFlag(n, t) && E.push(t), U.hasFlag(i, t) && l.push(t)
                    }
                    return {
                      added: E,
                      removed: l
                    }
                  }(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let a = new D.AuditLogChange(e.key, null, s);
                  t.push(a)
                }
                if (a.length > 0) {
                  let s = new D.AuditLogChange(e.key, a, null);
                  t.push(s)
                }
                return t
              }
              case p.AuditLogChangeKeys.PREFERRED_LOCALE:
                return eA(e, e => {
                  let t = x.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case p.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return eA(e, e => e === p.VideoQualityMode.FULL ? x.default.Messages.VIDEO_QUALITY_MODE_FULL : x.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [p.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [p.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [p.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [p.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: p.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(p.SystemChannelFlags).forEach(a => {
                    let n = (e.oldValue & a) === a,
                      i = (e.newValue & a) === a;
                    if (n === i) return;
                    let E = new D.AuditLogChange(t[a], !n, !i);
                    s.push(E)
                  }), s
                }(e);
              case p.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eA(e, e => e.map(e => e.type), e => e.map(I.actionTypeToName).join(", "));
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eA(e, I.eventTypeToName);
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eA(e, I.triggerTypeToName);
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eA(e, e => {
                  if (null != e && "object" == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({
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
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eA(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eA(e, e => e.map(C.default.getChannel).filter(e => null != e).map(e => (0, T.computeChannelName)(e, G.default, O.default, !0)), e => null != e && e.length > 0 ? e.join(", ") : x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case p.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === p.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eA(e, e => e.map(e => f.default.getRole(s.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : x.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case p.AuditLogChangeKeys.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: s
                  } = e, a = Array.isArray(t) ? t : [], n = Array.isArray(s) ? s : [];
                  if (0 === a.length && 0 === n.length) return e;
                  let i = {},
                    E = {};
                  if (a.forEach(e => {
                      i[e.id] = e
                    }), n.forEach(e => {
                      E[e.id] = e
                    }), a.length < n.length) {
                    for (let e in E)
                      if (null == i[e]) return new D.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, ed(E[e]))
                  }
                  if (a.length > n.length) {
                    for (let e in i)
                      if (null == E[e]) return new D.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, ed(i[e]))
                  }
                  for (let e in i) {
                    let t = i[e],
                      s = E[e];
                    if ((null == s ? void 0 : s.name) !== t.name || (null == s ? void 0 : s.emoji_id) !== t.emoji_id || (null == s ? void 0 : s.emoji_name) !== t.emoji_name) return new D.AuditLogChange(p.AuditLogChangeKeys.AVAILABLE_TAG_EDIT, ed(t), ed(s))
                  }
                  return e
                }(e);
              case p.AuditLogChangeKeys.SCHEDULED_START_TIME:
              case p.AuditLogChangeKeys.SCHEDULED_END_TIME:
                return eA(e, e => (0, M.dateFormat)(E()(new Date(e)), "LLLL"))
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

function eT(e, t) {
  let s = r.deserialize("string" == typeof e ? e : 0),
    a = r.deserialize("string" == typeof t ? t : 0),
    n = r.remove(a, s),
    i = r.remove(s, a),
    E = [],
    l = [];
  for (let e in p.Permissions) {
    let t = p.Permissions[e];
    r.has(n, t) && E.push(t), r.has(i, t) && l.push(t)
  }
  return {
    added: E,
    removed: l
  }
}

function ed(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function eA(e, t, s) {
  let a = e.newValue,
    n = e.oldValue;
  return null != e.newValue && (a = t(e.newValue), null != s && null != a && (a = s(a))), null != e.oldValue && (n = t(e.oldValue), null != s && null != n && (n = s(n))), new D.AuditLogChange(e.key, n || e.oldValue, a || e.newValue)
}

function eI(e, t, s, a, n) {
  let i = null,
    E = s(n = null != n ? n : e.targetId);
  if (null != E && null != a && (i = a(E)), null == i) {
    let t = N.default.deletedTargets[e.targetType];
    null != t && null != t[n] && (i = t[n])
  }
  if (null == i && null != e.changes) {
    let s = e.changes.find(e => e.key === t);
    null != s && (i = s.newValue || s.oldValue)
  }
  return null != i ? i : n
}

function eL(e, t, s) {
  let a = e,
    n = t(e);
  return null != n && null != s && (a = s(n)), a
}

function ec(e, t) {
  return s => null == s.oldValue ? e : t
}

function eN(e, t) {
  return s => null == s.newValue ? e : t
}

function eS(e, t, s, a) {
  return n => {
    if (null != n.newValue && null != n.oldValue) return e;
    if (null != n.newValue) return t;
    if (null != n.oldValue) return s;
    return a
  }
}