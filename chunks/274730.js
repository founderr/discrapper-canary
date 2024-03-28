"use strict";
s.r(t), s.d(t, {
  ACTION_FILTER_ITEMS: function() {
    return en
  },
  AutoModerationRuleChangeStrings: function() {
    return es
  },
  ChannelChangeStrings: function() {
    return b
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
    return x
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
    return eA
  },
  getStringForPermission: function() {
    return ei
  },
  getStringForRemovedChannelFlag: function() {
    return eu
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
  A = s("533800"),
  u = s("149765"),
  i = s("866442"),
  l = s("911969"),
  I = s("933557"),
  L = s("710845"),
  o = s("339085"),
  r = s("236413"),
  d = s("45966"),
  N = s("563534"),
  S = s("776617"),
  g = s("427679"),
  D = s("926491"),
  G = s("387667"),
  O = s("592125"),
  c = s("430824"),
  U = s("699516"),
  C = s("594174"),
  M = s("55935"),
  R = s("630388"),
  f = s("823379"),
  h = s("971130"),
  p = s("709054"),
  P = s("981631"),
  m = s("176505"),
  y = s("273504"),
  H = s("765305"),
  v = s("689938");
let V = new L.default("AuditLogUtils"),
  B = -1,
  K = () => ({
    [P.AuditLogChangeKeys.REASON]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  F = () => ({
    [P.AuditLogChangeKeys.NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [P.AuditLogChangeKeys.DESCRIPTION]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [P.AuditLogChangeKeys.ICON_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [P.AuditLogChangeKeys.SPLASH_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [P.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [P.AuditLogChangeKeys.BANNER_HASH]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [P.AuditLogChangeKeys.OWNER_ID]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [P.AuditLogChangeKeys.REGION]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [P.AuditLogChangeKeys.PREFERRED_LOCALE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [P.AuditLogChangeKeys.AFK_CHANNEL_ID]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [P.AuditLogChangeKeys.AFK_TIMEOUT]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [P.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [P.AuditLogChangeKeys.RULES_CHANNEL_ID]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [P.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [P.AuditLogChangeKeys.MFA_LEVEL]: {
      [P.MFALevels.NONE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [P.MFALevels.ELEVATED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [P.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [P.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [P.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [P.VerificationLevels.NONE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [P.VerificationLevels.LOW]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [P.VerificationLevels.MEDIUM]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [P.VerificationLevels.HIGH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [P.VerificationLevels.VERY_HIGH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [P.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [P.UserNotificationSettings.ALL_MESSAGES]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [P.UserNotificationSettings.ONLY_MENTIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [P.AuditLogChangeKeys.VANITY_URL_CODE]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [P.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [P.GuildExplicitContentFilterTypes.DISABLED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [P.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [P.GuildExplicitContentFilterTypes.ALL_MEMBERS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [P.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [P.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...K()
  }),
  b = () => ({
    [P.AuditLogChangeKeys.NAME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [P.AuditLogChangeKeys.POSITION]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [P.AuditLogChangeKeys.TOPIC]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [P.AuditLogChangeKeys.BITRATE]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [P.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [P.AuditLogChangeKeys.USER_LIMIT]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [P.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [P.AuditLogChangeKeys.PERMISSIONS_RESET]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [P.AuditLogChangeKeys.PERMISSIONS_GRANTED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [P.AuditLogChangeKeys.PERMISSIONS_DENIED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [P.AuditLogChangeKeys.REASON]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [P.AuditLogChangeKeys.NSFW]: {
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [P.AuditLogChangeKeys.TYPE]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [P.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [P.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
    [P.AuditLogChangeKeys.FLAGS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
    [P.AuditLogChangeKeys.AVAILABLE_TAG_ADD]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
    [P.AuditLogChangeKeys.AVAILABLE_TAG_EDIT]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
    [P.AuditLogChangeKeys.AVAILABLE_TAG_DELETE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE
  }),
  x = () => ({
    [P.AuditLogChangeKeys.NICK]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [P.AuditLogChangeKeys.DEAF]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [P.AuditLogChangeKeys.MUTE]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [P.AuditLogChangeKeys.ROLES_REMOVE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [P.AuditLogChangeKeys.ROLES_ADD]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [P.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [P.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [P.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [P.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...K()
  }),
  j = () => ({
    [P.AuditLogChangeKeys.NAME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [P.AuditLogChangeKeys.DESCRIPTION]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    [P.AuditLogChangeKeys.PERMISSIONS_GRANTED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [P.AuditLogChangeKeys.PERMISSIONS_DENIED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [P.AuditLogChangeKeys.COLOR]: {
      "#000000": v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [B]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [P.AuditLogChangeKeys.HOIST]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [P.AuditLogChangeKeys.MENTIONABLE]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [P.AuditLogChangeKeys.ICON_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [P.AuditLogChangeKeys.UNICODE_EMOJI]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...K()
  }),
  k = () => ({
    ...K(),
    [P.AuditLogChangeKeys.TITLE]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE
    },
    [P.AuditLogChangeKeys.DESCRIPTION]: e => {
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
    [P.AuditLogChangeKeys.OPTIONS]: () => v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
    [P.AuditLogChangeKeys.SINGLE_SELECT]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT
    },
    [P.AuditLogChangeKeys.REQUIRED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL
    }
  }),
  w = () => ({
    ...K(),
    [P.AuditLogChangeKeys.DEFAULT_CHANNEL_IDS]: e => {
      let {
        newValue: t
      } = e;
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({
        count: t.length
      })
    },
    [P.AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS
    },
    [P.AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS
    },
    [P.AuditLogChangeKeys.ENABLED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE
    }
  }),
  Y = () => ({
    ...K(),
    [P.AuditLogChangeKeys.WELCOME_MESSAGE]: () => v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
    [P.AuditLogChangeKeys.NEW_MEMBER_ACTIONS]: () => v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
    [P.AuditLogChangeKeys.RESOURCE_CHANNELS]: () => v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
  }),
  W = () => ({
    [P.AuditLogChangeKeys.CODE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [P.AuditLogChangeKeys.CHANNEL_ID]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [P.AuditLogChangeKeys.MAX_USES]: {
      0: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [B]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [P.AuditLogChangeKeys.MAX_AGE]: {
      0: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [B]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [P.AuditLogChangeKeys.TEMPORARY]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    [P.AuditLogChangeKeys.FLAGS]: e => {
      let {
        newValue: t
      } = e;
      return function(e) {
        let {
          newValue: t
        } = e;
        return t.map(e => (function(e) {
          if (e === A.GuildInviteFlags.IS_GUEST_INVITE) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
          return null
        })(e)).filter(f.isNotNullish)
      }({
        newValue: t
      })
    },
    ...K()
  }),
  J = () => ({
    [P.AuditLogChangeKeys.CHANNEL_ID]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [P.AuditLogChangeKeys.NAME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [P.AuditLogChangeKeys.AVATAR_HASH]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [P.AuditLogChangeKeys.REASON]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  X = () => ({
    [P.AuditLogChangeKeys.NAME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...K()
  }),
  Z = () => ({
    [P.AuditLogChangeKeys.NAME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [P.AuditLogChangeKeys.TAGS]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [P.AuditLogChangeKeys.DESCRIPTION]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...K()
  }),
  z = () => ({
    [P.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [P.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [P.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...K()
  }),
  Q = () => ({
    [P.AuditLogChangeKeys.TOPIC]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [P.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [H.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [H.GuildScheduledEventPrivacyLevel.PUBLIC]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...K()
  }),
  q = () => ({
    [P.AuditLogChangeKeys.NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [P.AuditLogChangeKeys.DESCRIPTION]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [P.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [H.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [H.GuildScheduledEventPrivacyLevel.PUBLIC]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [P.AuditLogChangeKeys.STATUS]: {
      [H.GuildScheduledEventStatus.SCHEDULED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [H.GuildScheduledEventStatus.ACTIVE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [H.GuildScheduledEventStatus.COMPLETED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [H.GuildScheduledEventStatus.CANCELED]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [P.AuditLogChangeKeys.ENTITY_TYPE]: {
      [H.GuildScheduledEventEntityTypes.NONE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [H.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [H.GuildScheduledEventEntityTypes.VOICE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [H.GuildScheduledEventEntityTypes.EXTERNAL]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [P.AuditLogChangeKeys.CHANNEL_ID]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [P.AuditLogChangeKeys.LOCATION]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [P.AuditLogChangeKeys.IMAGE_HASH]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
    ...K()
  }),
  $ = () => ({
    [P.AuditLogChangeKeys.SCHEDULED_START_TIME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
    [P.AuditLogChangeKeys.SCHEDULED_END_TIME]: eS(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
    [P.AuditLogChangeKeys.IS_CANCELED]: e => {
      if (null != e.oldValue || !0 === e.newValue) {
        if (!e.oldValue && e.newValue) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
        if (e.oldValue && !e.newValue) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED
      }
      return ""
    },
    ...K()
  }),
  ee = () => ({
    [P.AuditLogChangeKeys.NAME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [P.AuditLogChangeKeys.ARCHIVED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [P.AuditLogChangeKeys.LOCKED]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [P.AuditLogChangeKeys.INVITABLE]: {
      true: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [P.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [P.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [P.AuditLogChangeKeys.FLAGS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
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
    [P.AuditLogChangeKeys.NAME]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
    [P.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
    [P.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
    [P.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
    [P.AuditLogChangeKeys.AUTO_MODERATION_ENABLED]: e => {
      var t;
      return !0 === (null !== (t = e.newValue) && void 0 !== t ? t : e.oldValue) ? v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE
    },
    [P.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
    [P.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
    [P.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
    [P.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
    [P.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
    [P.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
    [P.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
    [P.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
    [P.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
    ...K()
  }),
  eE = () => ({
    [P.AuditLogChangeKeys.NAME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
    [P.AuditLogChangeKeys.VOLUME]: eN(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
    [P.AuditLogChangeKeys.EMOJI_NAME]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
    [P.AuditLogChangeKeys.EMOJI_ID]: eg(v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
    ...K()
  }),
  e_ = () => ({
    [P.AuditLogChangeKeys.STATUS]: v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
    ...K()
  }),
  ea = {
    [P.AuditLogTargetTypes.CHANNEL]: {
      [P.AuditLogChangeKeys.ID]: !0,
      [P.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [P.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [P.AuditLogChangeKeys.TYPE]: !0,
      [P.AuditLogChangeKeys.ID]: !0,
      [P.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [P.AuditLogTargetTypes.INVITE]: {
      [P.AuditLogChangeKeys.INVITER_ID]: !0,
      [P.AuditLogChangeKeys.USES]: !0
    },
    [P.AuditLogTargetTypes.WEBHOOK]: {
      [P.AuditLogChangeKeys.TYPE]: !0,
      [P.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [P.AuditLogTargetTypes.INTEGRATION]: {
      [P.AuditLogChangeKeys.TYPE]: !0
    },
    [P.AuditLogTargetTypes.THREAD]: {
      [P.AuditLogChangeKeys.ID]: !0,
      [P.AuditLogChangeKeys.TYPE]: !0
    },
    [P.AuditLogTargetTypes.STICKER]: {
      [P.AuditLogChangeKeys.ID]: !0,
      [P.AuditLogChangeKeys.TYPE]: !0,
      [P.AuditLogChangeKeys.ASSET]: !0,
      [P.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [P.AuditLogChangeKeys.AVAILABLE]: !0,
      [P.AuditLogChangeKeys.GUILD_ID]: !0
    },
    [P.AuditLogTargetTypes.GUILD_HOME]: {
      [P.AuditLogChangeKeys.ENTITY_TYPE]: !0
    },
    [P.AuditLogTargetTypes.GUILD_ONBOARDING]: {
      [P.AuditLogChangeKeys.PROMPTS]: !0
    },
    [P.AuditLogTargetTypes.GUILD_SOUNDBOARD]: {
      [P.AuditLogChangeKeys.ID]: !0,
      [P.AuditLogChangeKeys.SOUND_ID]: !0
    }
  },
  en = () => [{
    value: P.AuditLogActions.ALL,
    label: v.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: v.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: P.AuditLogActions.GUILD_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: P.AuditLogActions.CHANNEL_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: P.AuditLogActions.CHANNEL_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: P.AuditLogActions.CHANNEL_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: P.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: P.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: P.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: P.AuditLogActions.MEMBER_KICK,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: P.AuditLogActions.MEMBER_PRUNE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: P.AuditLogActions.MEMBER_BAN_ADD,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: P.AuditLogActions.MEMBER_BAN_REMOVE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: P.AuditLogActions.MEMBER_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: P.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: P.AuditLogActions.MEMBER_MOVE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: P.AuditLogActions.MEMBER_DISCONNECT,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: P.AuditLogActions.BOT_ADD,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: P.AuditLogActions.THREAD_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: P.AuditLogActions.THREAD_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: P.AuditLogActions.THREAD_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: P.AuditLogActions.ROLE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: P.AuditLogActions.ROLE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: P.AuditLogActions.ROLE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: P.AuditLogActions.ONBOARDING_PROMPT_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
  }, {
    value: P.AuditLogActions.ONBOARDING_PROMPT_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
  }, {
    value: P.AuditLogActions.ONBOARDING_PROMPT_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
  }, {
    value: P.AuditLogActions.ONBOARDING_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
  }, {
    value: P.AuditLogActions.ONBOARDING_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
  }, {
    value: P.AuditLogActions.HOME_SETTINGS_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
  }, {
    value: P.AuditLogActions.HOME_SETTINGS_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
  }, {
    value: P.AuditLogActions.INVITE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: P.AuditLogActions.INVITE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: P.AuditLogActions.INVITE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: P.AuditLogActions.WEBHOOK_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: P.AuditLogActions.WEBHOOK_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: P.AuditLogActions.WEBHOOK_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: P.AuditLogActions.EMOJI_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: P.AuditLogActions.EMOJI_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: P.AuditLogActions.EMOJI_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: P.AuditLogActions.MESSAGE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: P.AuditLogActions.MESSAGE_BULK_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: P.AuditLogActions.MESSAGE_PIN,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: P.AuditLogActions.MESSAGE_UNPIN,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: P.AuditLogActions.INTEGRATION_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: P.AuditLogActions.INTEGRATION_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: P.AuditLogActions.INTEGRATION_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: P.AuditLogActions.STICKER_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: P.AuditLogActions.STICKER_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: P.AuditLogActions.STICKER_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: P.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: P.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: P.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: P.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: P.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: P.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: P.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: P.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: P.AuditLogActions.AUTO_MODERATION_RULE_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
  }, {
    value: P.AuditLogActions.AUTO_MODERATION_RULE_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
  }, {
    value: P.AuditLogActions.AUTO_MODERATION_RULE_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
  }, {
    value: P.AuditLogActions.GUILD_HOME_FEATURE_ITEM,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
  }, {
    value: P.AuditLogActions.GUILD_HOME_REMOVE_ITEM,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
  }, {
    value: P.AuditLogActions.SOUNDBOARD_SOUND_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
  }, {
    value: P.AuditLogActions.SOUNDBOARD_SOUND_UPDATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
  }, {
    value: P.AuditLogActions.SOUNDBOARD_SOUND_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
  }, {
    value: P.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
  }, {
    value: P.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE,
    label: v.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
  }];

function eT(e) {
  switch (e.action) {
    case P.AuditLogActions.GUILD_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case P.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === P.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case P.ChannelTypes.GUILD_STAGE_VOICE:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case P.ChannelTypes.GUILD_VOICE:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case P.ChannelTypes.GUILD_CATEGORY:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case P.AuditLogActions.CHANNEL_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case P.AuditLogActions.CHANNEL_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case P.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case P.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case P.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case P.AuditLogActions.MEMBER_KICK:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case P.AuditLogActions.MEMBER_PRUNE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case P.AuditLogActions.MEMBER_BAN_ADD:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
    case P.AuditLogActions.MEMBER_BAN_REMOVE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case P.AuditLogActions.MEMBER_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case P.AuditLogActions.MEMBER_ROLE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case P.AuditLogActions.MEMBER_MOVE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case P.AuditLogActions.MEMBER_DISCONNECT:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case P.AuditLogActions.BOT_ADD:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case P.AuditLogActions.ROLE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case P.AuditLogActions.ROLE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case P.AuditLogActions.ROLE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case P.AuditLogActions.INVITE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case P.AuditLogActions.INVITE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case P.AuditLogActions.INVITE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case P.AuditLogActions.WEBHOOK_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case P.AuditLogActions.WEBHOOK_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case P.AuditLogActions.WEBHOOK_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case P.AuditLogActions.EMOJI_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case P.AuditLogActions.EMOJI_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case P.AuditLogActions.EMOJI_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case P.AuditLogActions.STICKER_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case P.AuditLogActions.STICKER_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case P.AuditLogActions.STICKER_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case P.AuditLogActions.MESSAGE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case P.AuditLogActions.MESSAGE_BULK_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case P.AuditLogActions.MESSAGE_PIN:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case P.AuditLogActions.MESSAGE_UNPIN:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case P.AuditLogActions.INTEGRATION_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case P.AuditLogActions.INTEGRATION_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case P.AuditLogActions.INTEGRATION_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case P.AuditLogActions.STAGE_INSTANCE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case P.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case P.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case P.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
    case P.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
    case P.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
    case P.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case P.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
    case P.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
    case P.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === P.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case P.ChannelTypes.PRIVATE_THREAD:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
        case P.ChannelTypes.ANNOUNCEMENT_THREAD:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE
      }
    case P.AuditLogActions.THREAD_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
    case P.AuditLogActions.THREAD_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
    case P.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case P.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case P.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var E;
      if ((null === (E = e.options) || void 0 === E ? void 0 : E.auto_moderation_rule_trigger_type) === y.AutomodTriggerType.USER_PROFILE.toString()) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case P.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case P.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
    case P.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return v.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case P.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return v.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    case P.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
    case P.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
    case P.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
    case P.AuditLogActions.ONBOARDING_PROMPT_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
    case P.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
    case P.AuditLogActions.ONBOARDING_PROMPT_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
    case P.AuditLogActions.ONBOARDING_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
    case P.AuditLogActions.ONBOARDING_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
    case P.AuditLogActions.HOME_SETTINGS_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
    case P.AuditLogActions.HOME_SETTINGS_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
    case P.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
      let _ = null != e.changes ? e.changes.find(e => e.key === P.AuditLogChangeKeys.ENTITY_TYPE) : null;
      if (null == _) return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
      switch (_.newValue) {
        case T.GuildFeedItemTypes.MESSAGE:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
        case T.GuildFeedItemTypes.FORUM_POST:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
        default:
          return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM
      }
    case P.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
    case P.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
    case P.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
    case P.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
    case P.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
    case P.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
    default:
      return null
  }
}

function eA(e) {
  switch (e) {
    case m.ChannelFlags.GUILD_FEED_REMOVED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
    case m.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
    case m.ChannelFlags.PINNED:
      return v.default.Messages.PINNED_POST
  }
  return null
}

function eu(e) {
  switch (e) {
    case m.ChannelFlags.GUILD_FEED_REMOVED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
    case m.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
    case m.ChannelFlags.PINNED:
      return v.default.Messages.UNPINNED_POST
  }
  return null
}

function ei(e, t) {
  switch (e) {
    case P.Permissions.CREATE_INSTANT_INVITE:
      return v.default.Messages.CREATE_INSTANT_INVITE;
    case P.Permissions.KICK_MEMBERS:
      return v.default.Messages.KICK_MEMBERS;
    case P.Permissions.BAN_MEMBERS:
      return v.default.Messages.BAN_MEMBERS;
    case P.Permissions.ADMINISTRATOR:
      return v.default.Messages.ADMINISTRATOR;
    case P.Permissions.MANAGE_CHANNELS:
      if (t.targetType === P.AuditLogTargetTypes.CHANNEL || t.targetType === P.AuditLogTargetTypes.CHANNEL_OVERWRITE) return v.default.Messages.MANAGE_CHANNEL;
      return v.default.Messages.MANAGE_CHANNELS;
    case P.Permissions.MANAGE_GUILD:
      return v.default.Messages.MANAGE_SERVER;
    case P.Permissions.VIEW_GUILD_ANALYTICS:
      return v.default.Messages.VIEW_GUILD_ANALYTICS;
    case P.Permissions.CHANGE_NICKNAME:
      return v.default.Messages.CHANGE_NICKNAME;
    case P.Permissions.MANAGE_NICKNAMES:
      return v.default.Messages.MANAGE_NICKNAMES;
    case P.Permissions.MANAGE_ROLES:
      return v.default.Messages.MANAGE_ROLES;
    case P.Permissions.MANAGE_WEBHOOKS:
      return v.default.Messages.MANAGE_WEBHOOKS;
    case P.Permissions.CREATE_GUILD_EXPRESSIONS:
      return v.default.Messages.CREATE_EXPRESSIONS;
    case P.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return v.default.Messages.MANAGE_EXPRESSIONS;
    case P.Permissions.VIEW_AUDIT_LOG:
      return v.default.Messages.VIEW_AUDIT_LOG;
    case P.Permissions.VIEW_CHANNEL:
      return v.default.Messages.READ_MESSAGES;
    case P.Permissions.SEND_MESSAGES:
      return v.default.Messages.SEND_MESSAGES;
    case P.Permissions.SEND_TTS_MESSAGES:
      return v.default.Messages.SEND_TTS_MESSAGES;
    case P.Permissions.USE_APPLICATION_COMMANDS:
      return v.default.Messages.USE_APPLICATION_COMMANDS;
    case P.Permissions.MANAGE_MESSAGES:
      return v.default.Messages.MANAGE_MESSAGES;
    case P.Permissions.EMBED_LINKS:
      return v.default.Messages.EMBED_LINKS;
    case P.Permissions.ATTACH_FILES:
      return v.default.Messages.ATTACH_FILES;
    case P.Permissions.READ_MESSAGE_HISTORY:
      return v.default.Messages.READ_MESSAGE_HISTORY;
    case P.Permissions.MENTION_EVERYONE:
      return v.default.Messages.MENTION_EVERYONE;
    case P.Permissions.USE_EXTERNAL_EMOJIS:
      return v.default.Messages.USE_EXTERNAL_EMOJIS;
    case P.Permissions.USE_EXTERNAL_STICKERS:
      return v.default.Messages.USE_EXTERNAL_STICKERS;
    case P.Permissions.ADD_REACTIONS:
      return v.default.Messages.ADD_REACTIONS;
    case P.Permissions.CONNECT:
      return v.default.Messages.CONNECT;
    case P.Permissions.SPEAK:
      return v.default.Messages.SPEAK;
    case P.Permissions.MUTE_MEMBERS:
      return v.default.Messages.MUTE_MEMBERS;
    case P.Permissions.DEAFEN_MEMBERS:
      return v.default.Messages.DEAFEN_MEMBERS;
    case P.Permissions.MOVE_MEMBERS:
      return v.default.Messages.MOVE_MEMBERS;
    case P.Permissions.USE_VAD:
      return v.default.Messages.USE_VAD;
    case P.Permissions.PRIORITY_SPEAKER:
      return v.default.Messages.PRIORITY_SPEAKER;
    case P.Permissions.STREAM:
      return v.default.Messages.VIDEO;
    case P.Permissions.REQUEST_TO_SPEAK:
      return v.default.Messages.REQUEST_TO_SPEAK;
    case P.Permissions.CREATE_EVENTS:
      return v.default.Messages.CREATE_EVENTS;
    case P.Permissions.MANAGE_EVENTS:
      return v.default.Messages.MANAGE_EVENTS;
    case P.Permissions.CREATE_PUBLIC_THREADS:
      return v.default.Messages.CREATE_PUBLIC_THREADS;
    case P.Permissions.CREATE_PRIVATE_THREADS:
      return v.default.Messages.CREATE_PRIVATE_THREADS;
    case P.Permissions.SEND_MESSAGES_IN_THREADS:
      return v.default.Messages.SEND_MESSAGES_IN_THREADS;
    case P.Permissions.MANAGE_THREADS:
      return v.default.Messages.MANAGE_THREADS;
    case P.Permissions.MODERATE_MEMBERS:
      return v.default.Messages.MODERATE_MEMBER;
    case P.Permissions.USE_CLYDE_AI:
      return v.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
    case P.Permissions.SET_VOICE_CHANNEL_STATUS:
      return v.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function el(e, t) {
  let s = [];
  return e.forEach(e => {
    let E = function(e, t) {
        switch (e.targetType) {
          case P.AuditLogTargetTypes.GUILD:
          case P.AuditLogTargetTypes.GUILD_HOME:
            return t;
          case P.AuditLogTargetTypes.CHANNEL:
          case P.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return er(e, P.AuditLogChangeKeys.NAME, e => O.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
          case P.AuditLogTargetTypes.USER:
            return er(e, P.AuditLogChangeKeys.NICK, e => C.default.getUser(e), e => e);
          case P.AuditLogTargetTypes.ROLE:
            return er(e, P.AuditLogChangeKeys.NAME, e => c.default.getRole(t.id, e), e => e.name);
          case P.AuditLogTargetTypes.ONBOARDING_PROMPT:
            let s = er(e, P.AuditLogChangeKeys.ID, e => d.default.getOnboardingPrompt(e), e => e.title);
            return null != s ? s : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
          case P.AuditLogTargetTypes.GUILD_ONBOARDING:
            return t;
          case P.AuditLogTargetTypes.INVITE:
            return er(e, P.AuditLogChangeKeys.CODE, P.NOOP_NULL);
          case P.AuditLogTargetTypes.INTEGRATION:
            return er(e, P.AuditLogChangeKeys.TYPE, e => S.default.integrations.find(t => t.id === e), e => e.name);
          case P.AuditLogTargetTypes.WEBHOOK:
            return er(e, P.AuditLogChangeKeys.NAME, e => S.default.webhooks.find(t => t.id === e), e => e.name);
          case P.AuditLogTargetTypes.EMOJI:
            return er(e, P.AuditLogChangeKeys.NAME, e => o.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case P.AuditLogTargetTypes.STICKER:
            return er(e, P.AuditLogChangeKeys.NAME, e => D.default.getStickerById(e), e => e.name);
          case P.AuditLogTargetTypes.STAGE_INSTANCE:
            return er(e, P.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(g.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case P.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
          case P.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return er(e, P.AuditLogChangeKeys.NAME, e => S.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case P.AuditLogTargetTypes.THREAD:
            return er(e, P.AuditLogChangeKeys.NAME, e => S.default.threads.find(t => t.id === e), e => e.name);
          case P.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = S.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return er(e, P.AuditLogChangeKeys.NAME, e => S.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === l.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          case P.AuditLogTargetTypes.AUTO_MODERATION_RULE:
            return er(e, P.AuditLogChangeKeys.NAME, e => S.default.automodRules.find(t => t.id === e), e => e.name);
          case P.AuditLogTargetTypes.GUILD_SOUNDBOARD:
            return er(e, P.AuditLogChangeKeys.NAME, P.NOOP_NULL);
          case P.AuditLogTargetTypes.HOME_SETTINGS:
            return er(e, P.AuditLogChangeKeys.GUILD_ID, e => N.default.getSettings(e), () => v.default.Messages.SERVER_GUIDE, t.id);
          case P.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
            return er(e, P.AuditLogChangeKeys.STATUS, e => O.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
          default:
            return V.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = C.default.getUser(e.userId);
    if (null != E || [P.AuditLogActions.MEMBER_PRUNE, P.AuditLogActions.MEMBER_DISCONNECT, P.AuditLogActions.MEMBER_MOVE, P.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED, P.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", E)).set("options", function(e) {
          if (null != e.options) {
            let s = {
              ...e.options
            };
            switch (e.options.type) {
              case P.AuditLogSubtargetTypes.USER:
                s.subtarget = ed(e.options.id, e => C.default.getUser(e), e => e.tag);
                break;
              case P.AuditLogSubtargetTypes.ROLE:
                s.subtarget = ed(e.options.role_name, P.NOOP_NULL)
            }
            if (null != e.options.channel_id && (s.channel = er(e, "", e => O.default.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (s.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let E = S.default.guildScheduledEvents.find(t => t.id === e.targetId),
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
            if (t.action === P.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case P.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = ed(t.id, e => c.default.getRole(s.id, e), e => e.name);
                  break;
                case P.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = ed(t.id, e => C.default.getUser(e), e => e.tag);
                  break;
                case P.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === _()(s.id).subtract(1).toString() ? e.subtarget = v.default.Messages.ALL_CHANNELS : e.subtarget = ed(t.id, e => O.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0))
              }
              return e
            }
            switch (e.key) {
              case P.AuditLogChangeKeys.OWNER_ID:
                return eo(e, e => C.default.getUser(e));
              case P.AuditLogChangeKeys.CHANNEL_ID:
              case P.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case P.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case P.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case P.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return eo(e, e => O.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
              case P.AuditLogChangeKeys.AFK_TIMEOUT:
                return eo(e, e => e / 60);
              case P.AuditLogChangeKeys.BITRATE:
                return eo(e, e => e / 1e3);
              case P.AuditLogChangeKeys.COLOR:
                return eo(e, e => (0, i.int2hex)(e).toUpperCase());
              case P.AuditLogChangeKeys.THEME_COLORS:
                return eo(e, e => "".concat((0, i.int2hex)(e[0]).toUpperCase(), ", ").concat((0, i.int2hex)(e[1]).toUpperCase()));
              case P.AuditLogChangeKeys.MAX_AGE:
                return eo(e, e => {
                  let t = h.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case P.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = eI(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new G.AuditLogChange(P.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (E.length > 0) {
                  let e = new G.AuditLogChange(P.AuditLogChangeKeys.PERMISSIONS_DENIED, null, E);
                  t.push(e)
                }
                return t
              }
              case P.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case P.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = eI(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let E = new G.AuditLogChange(e.key, null, s);
                  t.push(E)
                }
                if (E.length > 0) {
                  let e = new G.AuditLogChange(P.AuditLogChangeKeys.PERMISSIONS_RESET, E, E);
                  t.push(e)
                }
                return t
              }
              case P.AuditLogChangeKeys.FLAGS: {
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
                    for (let e in m.ChannelFlags) {
                      let t = m.ChannelFlags[e];
                      R.hasFlag(_, t) && n.push(t), R.hasFlag(a, t) && T.push(t)
                    }
                    return {
                      added: n,
                      removed: T
                    }
                  }(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let E = new G.AuditLogChange(e.key, null, s);
                  t.push(E)
                }
                if (E.length > 0) {
                  let s = new G.AuditLogChange(e.key, E, null);
                  t.push(s)
                }
                return t
              }
              case P.AuditLogChangeKeys.PREFERRED_LOCALE:
                return eo(e, e => {
                  let t = v.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case P.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return eo(e, e => e === P.VideoQualityMode.FULL ? v.default.Messages.VIDEO_QUALITY_MODE_FULL : v.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [P.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [P.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [P.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [P.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: P.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(P.SystemChannelFlags).forEach(E => {
                    let _ = (e.oldValue & E) === E,
                      a = (e.newValue & E) === E;
                    if (_ === a) return;
                    let n = new G.AuditLogChange(t[E], !_, !a);
                    s.push(n)
                  }), s
                }(e);
              case P.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS:
                if (t.targetType === P.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(e => e.type), e => e.map(r.actionTypeToName).join(", "));
                break;
              case P.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === P.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, r.eventTypeToName);
                break;
              case P.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === P.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, r.triggerTypeToName);
                break;
              case P.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === P.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => {
                  if (null != e && "object" == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({
                    newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                  }) : JSON.stringify(e);
                  return e
                });
                break;
              case P.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS:
              case P.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS:
              case P.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case P.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case P.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST:
              case P.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === P.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case P.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === P.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(O.default.getChannel).filter(e => null != e).map(e => (0, I.computeChannelName)(e, C.default, U.default, !0)), e => null != e && e.length > 0 ? e.join(", ") : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case P.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === P.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(e => c.default.getRole(s.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : v.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case P.AuditLogChangeKeys.AVAILABLE_TAGS:
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
                      if (null == a[e]) return new G.AuditLogChange(P.AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, eL(n[e]))
                  }
                  if (E.length > _.length) {
                    for (let e in a)
                      if (null == n[e]) return new G.AuditLogChange(P.AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, eL(a[e]))
                  }
                  for (let e in a) {
                    let t = a[e],
                      s = n[e];
                    if ((null == s ? void 0 : s.name) !== t.name || (null == s ? void 0 : s.emoji_id) !== t.emoji_id || (null == s ? void 0 : s.emoji_name) !== t.emoji_name) return new G.AuditLogChange(P.AuditLogChangeKeys.AVAILABLE_TAG_EDIT, eL(t), eL(s))
                  }
                  return e
                }(e);
              case P.AuditLogChangeKeys.SCHEDULED_START_TIME:
              case P.AuditLogChangeKeys.SCHEDULED_END_TIME:
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
  let s = u.deserialize("string" == typeof e ? e : 0),
    E = u.deserialize("string" == typeof t ? t : 0),
    _ = u.remove(E, s),
    a = u.remove(s, E),
    n = [],
    T = [];
  for (let e in P.Permissions) {
    let t = P.Permissions[e];
    u.has(_, t) && n.push(t), u.has(a, t) && T.push(t)
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
  return null != e.newValue && (E = t(e.newValue), null != s && null != E && (E = s(E))), null != e.oldValue && (_ = t(e.oldValue), null != s && null != _ && (_ = s(_))), new G.AuditLogChange(e.key, _ || e.oldValue, E || e.newValue)
}

function er(e, t, s, E, _) {
  let a = null,
    n = s(_ = null != _ ? _ : e.targetId);
  if (null != n && null != E && (a = E(n)), null == a) {
    let t = S.default.deletedTargets[e.targetType];
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

function eN(e, t) {
  return s => null == s.oldValue ? e : t
}

function eS(e, t) {
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