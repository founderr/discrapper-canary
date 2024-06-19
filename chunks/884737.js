e.d(_, {
  Bq: function() {
    return V
  },
  C2: function() {
    return m
  },
  Et: function() {
    return g
  },
  HE: function() {
    return H
  },
  HN: function() {
    return p
  },
  J5: function() {
    return w
  },
  K: function() {
    return v
  },
  ML: function() {
    return P
  },
  N$: function() {
    return F
  },
  N5: function() {
    return q
  },
  QM: function() {
    return Y
  },
  _$: function() {
    return Q
  },
  hQ: function() {
    return J
  },
  lR: function() {
    return h
  },
  lU: function() {
    return f
  },
  nm: function() {
    return j
  },
  of: function() {
    return X
  },
  pA: function() {
    return z
  },
  pY: function() {
    return Z
  },
  uB: function() {
    return B
  },
  vc: function() {
    return x
  },
  vm: function() {
    return b
  }
}), e(411104), e(653041);
var T = e(654861),
  s = e.n(T),
  I = e(149765),
  A = e(866442),
  n = e(144830),
  N = e(911969),
  t = e(933557),
  r = e(710845),
  a = e(339085),
  L = e(987707),
  D = e(427679),
  S = e(926491),
  U = e(387667),
  l = e(592125),
  O = e(430824),
  G = e(699516),
  M = e(594174),
  R = e(971130),
  u = e(709054),
  i = e(981631),
  o = e(765305),
  C = e(689938);
let c = new r.Z("AuditLogUtils"),
  g = -1,
  d = () => ({
    [i.zUn.REASON]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  Z = () => ({
    [i.zUn.NAME]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [i.zUn.DESCRIPTION]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [i.zUn.ICON_HASH]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [i.zUn.SPLASH_HASH]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [i.zUn.DISCOVERY_SPLASH_HASH]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [i.zUn.BANNER_HASH]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [i.zUn.OWNER_ID]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [i.zUn.REGION]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [i.zUn.PREFERRED_LOCALE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [i.zUn.AFK_CHANNEL_ID]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [i.zUn.AFK_TIMEOUT]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [i.zUn.SYSTEM_CHANNEL_ID]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [i.zUn.RULES_CHANNEL_ID]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [i.zUn.PUBLIC_UPDATES_CHANNEL_ID]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [i.zUn.MFA_LEVEL]: {
      [i.BpS.NONE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [i.BpS.ELEVATED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [i.zUn.WIDGET_ENABLED]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [i.zUn.WIDGET_CHANNEL_ID]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [i.zUn.VERIFICATION_LEVEL]: {
      [i.sFg.NONE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [i.sFg.LOW]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [i.sFg.MEDIUM]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [i.sFg.HIGH]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [i.sFg.VERY_HIGH]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [i.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [i.bL.ALL_MESSAGES]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [i.bL.ONLY_MENTIONS]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [i.zUn.VANITY_URL_CODE]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [i.zUn.EXPLICIT_CONTENT_FILTER]: {
      [i.lxg.DISABLED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [i.lxg.MEMBERS_WITHOUT_ROLES]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [i.lxg.ALL_MEMBERS]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [i.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [i.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [i.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [i.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [i.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [i.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...d()
  }),
  P = () => ({
    [i.zUn.NAME]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [i.zUn.POSITION]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [i.zUn.TOPIC]: EI(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [i.zUn.BITRATE]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [i.zUn.RTC_REGION_OVERRIDE]: EI(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [i.zUn.USER_LIMIT]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [i.zUn.RATE_LIMIT_PER_USER]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [i.zUn.PERMISSIONS_RESET]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [i.zUn.PERMISSIONS_GRANTED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [i.zUn.PERMISSIONS_DENIED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [i.zUn.REASON]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [i.zUn.NSFW]: {
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [i.zUn.TYPE]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [i.zUn.VIDEO_QUALITY_MODE]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [i.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
  }),
  f = () => ({
    [i.zUn.NICK]: EI(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [i.zUn.DEAF]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [i.zUn.MUTE]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [i.zUn.ROLES_REMOVE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [i.zUn.ROLES_ADD]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [i.zUn.PRUNE_DELETE_DAYS]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [i.zUn.COMMUNICATION_DISABLED_UNTIL]: EI(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [i.zUn.BYPASSES_VERIFICATION]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [i.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...d()
  }),
  H = () => ({
    [i.zUn.NAME]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [i.zUn.PERMISSIONS_GRANTED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [i.zUn.PERMISSIONS_DENIED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [i.zUn.COLOR]: {
      "#000000": C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [g]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [i.zUn.HOIST]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [i.zUn.MENTIONABLE]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [i.zUn.ICON_HASH]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [i.zUn.UNICODE_EMOJI]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...d()
  }),
  p = () => ({
    [i.zUn.CODE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [i.zUn.CHANNEL_ID]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [i.zUn.MAX_USES]: {
      0: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [g]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [i.zUn.MAX_AGE]: {
      0: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [g]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [i.zUn.TEMPORARY]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    ...d()
  }),
  h = () => ({
    [i.zUn.CHANNEL_ID]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [i.zUn.NAME]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [i.zUn.AVATAR_HASH]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [i.zUn.REASON]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  F = () => ({
    [i.zUn.NAME]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...d()
  }),
  V = () => ({
    [i.zUn.NAME]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [i.zUn.TAGS]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [i.zUn.DESCRIPTION]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...d()
  }),
  v = () => ({
    [i.zUn.ENABLE_EMOTICONS]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [i.zUn.EXPIRE_BEHAVIOR]: {
      0: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [i.zUn.EXPIRE_GRACE_PERIOD]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...d()
  }),
  m = () => ({
    [i.zUn.TOPIC]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [i.zUn.PRIVACY_LEVEL]: {
      [o.j8.GUILD_ONLY]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [o.j8.PUBLIC]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...d()
  }),
  B = () => ({
    [i.zUn.NAME]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [i.zUn.DESCRIPTION]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [i.zUn.PRIVACY_LEVEL]: {
      [o.j8.GUILD_ONLY]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [o.j8.PUBLIC]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [i.zUn.STATUS]: {
      [o.p1.SCHEDULED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [o.p1.ACTIVE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [o.p1.COMPLETED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [o.p1.CANCELED]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [i.zUn.ENTITY_TYPE]: {
      [o.WX.NONE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [o.WX.STAGE_INSTANCE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [o.WX.VOICE]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [o.WX.EXTERNAL]: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [i.zUn.CHANNEL_ID]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [i.zUn.LOCATION]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [i.zUn.RECURRENCE_RULE]: Es(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
    ...d()
  }),
  z = () => ({
    [i.zUn.NAME]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [i.zUn.ARCHIVED]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [i.zUn.LOCKED]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [i.zUn.INVITABLE]: {
      true: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [i.zUn.AUTO_ARCHIVE_DURATION]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [i.zUn.RATE_LIMIT_PER_USER]: ET(C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    ...d()
  }),
  b = E => {
    let _ = {
      ...d()
    };
    return null == E || E.forEach(E => {
      E.newValue ? E.newValue.permission ? _[E.key] = C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : _[E.key] = C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : _[E.key] = C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), _
  },
  x = {
    [i.KFR.CHANNEL]: {
      [i.zUn.ID]: !0,
      [i.zUn.PERMISSION_OVERWRITES]: !0
    },
    [i.KFR.CHANNEL_OVERWRITE]: {
      [i.zUn.TYPE]: !0,
      [i.zUn.ID]: !0,
      [i.zUn.PERMISSION_OVERWRITES]: !0
    },
    [i.KFR.INVITE]: {
      [i.zUn.INVITER_ID]: !0,
      [i.zUn.USES]: !0
    },
    [i.KFR.WEBHOOK]: {
      [i.zUn.TYPE]: !0,
      [i.zUn.APPLICATION_ID]: !0
    },
    [i.KFR.INTEGRATION]: {
      [i.zUn.TYPE]: !0
    },
    [i.KFR.THREAD]: {
      [i.zUn.ID]: !0,
      [i.zUn.TYPE]: !0
    },
    [i.KFR.STICKER]: {
      [i.zUn.ID]: !0,
      [i.zUn.TYPE]: !0,
      [i.zUn.ASSET]: !0,
      [i.zUn.FORMAT_TYPE]: !0,
      [i.zUn.AVAILABLE]: !0,
      [i.zUn.GUILD_ID]: !0
    }
  },
  K = () => [{
    value: i.rsA.ALL,
    label: C.Z.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: C.Z.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: i.rsA.GUILD_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: i.rsA.CHANNEL_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: i.rsA.CHANNEL_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: i.rsA.CHANNEL_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: i.rsA.CHANNEL_OVERWRITE_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: i.rsA.CHANNEL_OVERWRITE_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: i.rsA.CHANNEL_OVERWRITE_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: i.rsA.MEMBER_KICK,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: i.rsA.MEMBER_PRUNE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: i.rsA.MEMBER_BAN_ADD,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: i.rsA.MEMBER_BAN_REMOVE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: i.rsA.MEMBER_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: i.rsA.MEMBER_ROLE_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: i.rsA.MEMBER_MOVE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: i.rsA.MEMBER_DISCONNECT,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: i.rsA.BOT_ADD,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: i.rsA.THREAD_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: i.rsA.THREAD_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: i.rsA.THREAD_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: i.rsA.ROLE_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: i.rsA.ROLE_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: i.rsA.ROLE_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: i.rsA.INVITE_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: i.rsA.INVITE_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: i.rsA.INVITE_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: i.rsA.WEBHOOK_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: i.rsA.WEBHOOK_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: i.rsA.WEBHOOK_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: i.rsA.EMOJI_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: i.rsA.EMOJI_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: i.rsA.EMOJI_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: i.rsA.MESSAGE_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: i.rsA.MESSAGE_BULK_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: i.rsA.MESSAGE_PIN,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: i.rsA.MESSAGE_UNPIN,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: i.rsA.INTEGRATION_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: i.rsA.INTEGRATION_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: i.rsA.INTEGRATION_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: i.rsA.STICKER_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: i.rsA.STICKER_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: i.rsA.STICKER_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: i.rsA.STAGE_INSTANCE_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: i.rsA.STAGE_INSTANCE_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: i.rsA.STAGE_INSTANCE_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: i.rsA.GUILD_SCHEDULED_EVENT_CREATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: i.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: i.rsA.GUILD_SCHEDULED_EVENT_DELETE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: i.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: i.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: i.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_FLAG_TO_CHANNEL
  }, {
    value: i.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_TIMEOUT
  }, {
    value: i.rsA.AUTO_MODERATION_QUARANTINE_USER,
    label: C.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_QUARANTINE
  }];

function y(E, _) {
  return null != _.changes ? _.changes.find(_ => _.key === E) : null
}

function j(E) {
  let _ = K().find(_ => _.value === E.action),
    e = y(i.zUn.COMMUNICATION_DISABLED_UNTIL, E);
  switch (!0) {
    case null != e:
      return C.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED;
    case null != _:
      var T;
      return null !== (T = null == _ ? void 0 : _.label) && void 0 !== T ? T : null;
    default:
      return null
  }
}
let k = {
  [n.J6.SECONDS]: E => C.Z.Messages.DURATION_SECONDS.format({
    seconds: E
  }),
  [n.J6.MINUTES]: E => C.Z.Messages.DURATION_MINUTES.format({
    minutes: E
  }),
  [n.J6.HOURS]: E => C.Z.Messages.DURATION_HOURS.format({
    hours: E
  }),
  [n.J6.DAYS]: E => C.Z.Messages.DURATION_DAYS.format({
    days: E
  })
};

function Y(E) {
  let _ = y(i.zUn.COMMUNICATION_DISABLED_UNTIL, E),
    e = W(i.zUn.ROLES_ADD, E).length > 0,
    T = W(i.zUn.ROLES_REMOVE, E).length > 0;
  switch (!0) {
    case null != _:
      if ((null == _ ? void 0 : _.newValue) != null) {
        let e = new Date(null == _ ? void 0 : _.newValue).getTime(),
          T = u.default.extractTimestamp(E.id),
          s = Math.round((e - T) / 1e3 / 60),
          I = [n.J6.DAYS, n.J6.HOURS, n.J6.MINUTES, n.J6.SECONDS],
          A = (0, n.CI)(s, I);
        if (null == A.unit || null == A.time) return null;
        if (A.unit in k) return k[A.unit](A.time);
        return null
      }
      if ((null == _ ? void 0 : _.oldValue) != null) return C.Z.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
      return null;
    case e && T:
      return C.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    case e:
      return C.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    case T:
      return C.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    default:
      return null
  }
}

function W(E, _) {
  return null != _.changes ? _.changes.filter(_ => _.key === E) : []
}

function w(E) {
  let _ = W(i.zUn.ROLES_ADD, E),
    e = W(i.zUn.ROLES_REMOVE, E),
    T = null == _ ? void 0 : _.map(E => {
      let {
        newValue: _
      } = E;
      return null == _ ? void 0 : _.map(E => {
        let {
          name: _
        } = E;
        return _
      }).join(", ")
    }).join(", "),
    s = null == e ? void 0 : e.map(E => {
      let {
        newValue: _
      } = E;
      return null == _ ? void 0 : _.map(E => {
        let {
          name: _
        } = E;
        return _
      }).join(", ")
    }).join(", ");
  switch (!0) {
    case _.length > 0 && e.length > 0:
      return C.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
        roleNamesAdded: T,
        roleNamesRemoved: s
      });
    case _.length > 0:
      return C.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({
        roleNames: T
      });
    case e.length > 0:
      return C.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({
        roleNames: s
      });
    default:
      return null
  }
}

function q(E) {
  switch (E.action) {
    case i.rsA.GUILD_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case i.rsA.CHANNEL_CREATE:
      let _ = null != E.changes ? E.changes.find(E => E.key === i.zUn.TYPE) : null;
      if (null == _) throw Error("[AuditLog] Could not find type change for channel create");
      switch (_.newValue) {
        case i.d4z.GUILD_STAGE_VOICE:
          return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case i.d4z.GUILD_VOICE:
          return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case i.d4z.GUILD_CATEGORY:
          return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case i.rsA.CHANNEL_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case i.rsA.CHANNEL_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case i.rsA.CHANNEL_OVERWRITE_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case i.rsA.CHANNEL_OVERWRITE_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case i.rsA.CHANNEL_OVERWRITE_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case i.rsA.MEMBER_KICK:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case i.rsA.MEMBER_PRUNE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case i.rsA.MEMBER_BAN_ADD:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
    case i.rsA.MEMBER_BAN_REMOVE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case i.rsA.MEMBER_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case i.rsA.MEMBER_ROLE_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case i.rsA.MEMBER_MOVE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case i.rsA.MEMBER_DISCONNECT:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case i.rsA.BOT_ADD:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case i.rsA.ROLE_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case i.rsA.ROLE_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case i.rsA.ROLE_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case i.rsA.INVITE_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case i.rsA.INVITE_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case i.rsA.INVITE_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case i.rsA.WEBHOOK_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case i.rsA.WEBHOOK_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case i.rsA.WEBHOOK_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case i.rsA.EMOJI_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case i.rsA.EMOJI_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case i.rsA.EMOJI_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case i.rsA.STICKER_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case i.rsA.STICKER_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case i.rsA.STICKER_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case i.rsA.MESSAGE_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case i.rsA.MESSAGE_BULK_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case i.rsA.MESSAGE_PIN:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case i.rsA.MESSAGE_UNPIN:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case i.rsA.INTEGRATION_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case i.rsA.INTEGRATION_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case i.rsA.INTEGRATION_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case i.rsA.STAGE_INSTANCE_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case i.rsA.STAGE_INSTANCE_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case i.rsA.STAGE_INSTANCE_DELETE:
      if (null != E.userId) return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case i.rsA.GUILD_SCHEDULED_EVENT_CREATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
    case i.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
    case i.rsA.GUILD_SCHEDULED_EVENT_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
    case i.rsA.THREAD_CREATE:
      let e = null != E.changes ? E.changes.find(E => E.key === i.zUn.TYPE) : null;
      if (null == e) throw Error("[AuditLog] Could not find type change for thread create");
      switch (e.newValue) {
        case i.d4z.PRIVATE_THREAD:
          return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
        case i.d4z.ANNOUNCEMENT_THREAD:
          return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE
      }
    case i.rsA.THREAD_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
    case i.rsA.THREAD_DELETE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
    case i.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case i.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case i.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case i.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return C.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case i.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
      return C.Z.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case i.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return C.Z.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    default:
      return null
  }
}

function X(E) {
  var _;
  let e = null == E ? void 0 : null === (_ = E.changes) || void 0 === _ ? void 0 : _.find(E => "reason" === E.key);
  return null != e ? e.newValue : null
}

function J(E, _) {
  switch (E) {
    case i.Plq.CREATE_INSTANT_INVITE:
      return C.Z.Messages.CREATE_INSTANT_INVITE;
    case i.Plq.KICK_MEMBERS:
      return C.Z.Messages.KICK_MEMBERS;
    case i.Plq.BAN_MEMBERS:
      return C.Z.Messages.BAN_MEMBERS;
    case i.Plq.ADMINISTRATOR:
      return C.Z.Messages.ADMINISTRATOR;
    case i.Plq.MANAGE_CHANNELS:
      if (_.targetType === i.KFR.CHANNEL || _.targetType === i.KFR.CHANNEL_OVERWRITE) return C.Z.Messages.MANAGE_CHANNEL;
      return C.Z.Messages.MANAGE_CHANNELS;
    case i.Plq.MANAGE_GUILD:
      return C.Z.Messages.MANAGE_SERVER;
    case i.Plq.VIEW_GUILD_ANALYTICS:
      return C.Z.Messages.VIEW_GUILD_ANALYTICS;
    case i.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return C.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
    case i.Plq.CHANGE_NICKNAME:
      return C.Z.Messages.CHANGE_NICKNAME;
    case i.Plq.MANAGE_NICKNAMES:
      return C.Z.Messages.MANAGE_NICKNAMES;
    case i.Plq.MANAGE_ROLES:
      return C.Z.Messages.MANAGE_ROLES;
    case i.Plq.MANAGE_WEBHOOKS:
      return C.Z.Messages.MANAGE_WEBHOOKS;
    case i.Plq.CREATE_GUILD_EXPRESSIONS:
      return C.Z.Messages.CREATE_EXPRESSIONS;
    case i.Plq.MANAGE_GUILD_EXPRESSIONS:
      return C.Z.Messages.MANAGE_EXPRESSIONS;
    case i.Plq.VIEW_AUDIT_LOG:
      return C.Z.Messages.VIEW_AUDIT_LOG;
    case i.Plq.VIEW_CHANNEL:
      return C.Z.Messages.READ_MESSAGES;
    case i.Plq.SEND_MESSAGES:
      return C.Z.Messages.SEND_MESSAGES;
    case i.Plq.SEND_TTS_MESSAGES:
      return C.Z.Messages.SEND_TTS_MESSAGES;
    case i.Plq.USE_APPLICATION_COMMANDS:
      return C.Z.Messages.USE_APPLICATION_COMMANDS;
    case i.Plq.MANAGE_MESSAGES:
      return C.Z.Messages.MANAGE_MESSAGES;
    case i.Plq.EMBED_LINKS:
      return C.Z.Messages.EMBED_LINKS;
    case i.Plq.ATTACH_FILES:
      return C.Z.Messages.ATTACH_FILES;
    case i.Plq.READ_MESSAGE_HISTORY:
      return C.Z.Messages.READ_MESSAGE_HISTORY;
    case i.Plq.MENTION_EVERYONE:
      return C.Z.Messages.MENTION_EVERYONE;
    case i.Plq.USE_EXTERNAL_EMOJIS:
      return C.Z.Messages.USE_EXTERNAL_EMOJIS;
    case i.Plq.USE_EXTERNAL_STICKERS:
      return C.Z.Messages.USE_EXTERNAL_STICKERS;
    case i.Plq.ADD_REACTIONS:
      return C.Z.Messages.ADD_REACTIONS;
    case i.Plq.CONNECT:
      return C.Z.Messages.CONNECT;
    case i.Plq.SPEAK:
      return C.Z.Messages.SPEAK;
    case i.Plq.MUTE_MEMBERS:
      return C.Z.Messages.MUTE_MEMBERS;
    case i.Plq.DEAFEN_MEMBERS:
      return C.Z.Messages.DEAFEN_MEMBERS;
    case i.Plq.MOVE_MEMBERS:
      return C.Z.Messages.MOVE_MEMBERS;
    case i.Plq.USE_VAD:
      return C.Z.Messages.USE_VAD;
    case i.Plq.PRIORITY_SPEAKER:
      return C.Z.Messages.PRIORITY_SPEAKER;
    case i.Plq.STREAM:
      return C.Z.Messages.VIDEO;
    case i.Plq.REQUEST_TO_SPEAK:
      return C.Z.Messages.REQUEST_TO_SPEAK;
    case i.Plq.CREATE_EVENTS:
      return C.Z.Messages.CREATE_EVENTS;
    case i.Plq.MANAGE_EVENTS:
      return C.Z.Messages.MANAGE_EVENTS;
    case i.Plq.CREATE_PUBLIC_THREADS:
      return C.Z.Messages.CREATE_PUBLIC_THREADS;
    case i.Plq.CREATE_PRIVATE_THREADS:
      return C.Z.Messages.CREATE_PRIVATE_THREADS;
    case i.Plq.SEND_MESSAGES_IN_THREADS:
      return C.Z.Messages.SEND_MESSAGES_IN_THREADS;
    case i.Plq.MANAGE_THREADS:
      return C.Z.Messages.MANAGE_THREADS;
    case i.Plq.MODERATE_MEMBERS:
      return C.Z.Messages.MODERATE_MEMBER;
    case i.Plq.SET_VOICE_CHANNEL_STATUS:
      return C.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function Q(E, _) {
  if (null == _) return [];
  let e = [];
  return E.forEach(E => {
    let T = function(E, _) {
        switch (E.targetType) {
          case i.KFR.GUILD:
            return _;
          case i.KFR.CHANNEL:
          case i.KFR.CHANNEL_OVERWRITE:
            return E_(E, i.zUn.NAME, E => l.Z.getChannel(E), E => (0, t.F6)(E, M.default, G.Z, !0));
          case i.KFR.USER:
            return E_(E, i.zUn.NICK, E => M.default.getUser(E), void 0);
          case i.KFR.ROLE:
            return E_(E, i.zUn.NAME, E => O.Z.getRole(_.id, E), E => E.name);
          case i.KFR.INVITE:
            return E_(E, i.zUn.CODE, i.VqG);
          case i.KFR.INTEGRATION:
            return E_(E, i.zUn.TYPE, E => L.Z.integrations.find(_ => _.id === E), E => E.name);
          case i.KFR.WEBHOOK:
            return E_(E, i.zUn.NAME, E => L.Z.webhooks.find(_ => _.id === E), E => E.name);
          case i.KFR.EMOJI:
            return E_(E, i.zUn.NAME, E => a.Z.getGuildEmoji(_.id).find(_ => _.id === E), E => E.name);
          case i.KFR.STICKER:
            return E_(E, i.zUn.NAME, E => S.Z.getStickerById(E), E => E.name);
          case i.KFR.STAGE_INSTANCE:
            return E_(E, i.zUn.TOPIC, E => {
              var e;
              return null === (e = Object.values(D.Z.getStageInstancesByGuild(_.id))) || void 0 === e ? void 0 : e.find(_ => _.id === E)
            }, E => E.topic);
          case i.KFR.GUILD_SCHEDULED_EVENT:
            return E_(E, i.zUn.NAME, E => L.Z.guildScheduledEvents.find(_ => _.id === E), E => E.name);
          case i.KFR.THREAD:
            return E_(E, i.zUn.NAME, E => L.Z.threads.find(_ => _.id === E), E => E.name);
          case i.KFR.APPLICATION_COMMAND:
            if (E.targetId === E.options.application_id) {
              let _ = L.Z.integrations.find(_ => _.application_id === E.targetId);
              if (null != _) return _.name;
              return E.targetId
            }
            return E_(E, i.zUn.NAME, E => L.Z.applicationCommands.find(_ => _.id === E), E => {
              let _ = null != E.name_localized && "" !== E.name_localized ? E.name_localized : E.name;
              return E.type === N.yU.CHAT ? "/⁠".concat(_) : _
            });
          default:
            return c.warn("Unknown targetType for log", E), null
        }
      }(E, _),
      I = M.default.getUser(E.userId);
    if (null != I && (null != T || E.action === i.rsA.MEMBER_PRUNE || E.action === i.rsA.MEMBER_DISCONNECT || E.action === i.rsA.MEMBER_MOVE || E.action === i.rsA.CREATOR_MONETIZATION_REQUEST_CREATED || E.action === i.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
      if (null != (E = (E = (E = E.set("user", I)).set("target", T)).set("options", function(E) {
          if (null != E.options) {
            let T = {
              ...E.options
            };
            switch (E.options.type) {
              case i.jwA.USER:
                var _, e;
                (null === (_ = E.options) || void 0 === _ ? void 0 : _.id) != null && (T.subtarget = Ee(null == E ? void 0 : null === (e = E.options) || void 0 === e ? void 0 : e.id, E => M.default.getUser(E), E => E.tag));
                break;
              case i.jwA.ROLE:
                null != E.options.role_name && (T.subtarget = Ee(E.options.role_name, i.VqG))
            }
            return null != E.options.channel_id && (T.channel = E_(E, "", E => l.Z.getChannel(E), void 0, E.options.channel_id)), null != E.options.members_removed && 0 !== E.options.members_removed && (T.count = E.options.members_removed), T
          }
          return E.options
        }(E))).changes) {
        let e = [];
        E.changes.forEach(T => {
          let I = function(E, _, e) {
            if (_.action === i.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let _ = E.newValue || E.oldValue;
              switch (_.type) {
                case i.ecB.ROLE:
                  E.subtarget = Ee(_.id, E => O.Z.getRole(e.id, E), E => E.name);
                  break;
                case i.ecB.USER:
                  E.subtarget = Ee(_.id, E => M.default.getUser(E), E => E.tag);
                  break;
                case i.ecB.CHANNEL:
                  _.id === s()(e.id).subtract(1).toString() ? E.subtarget = C.Z.Messages.ALL_CHANNELS : E.subtarget = Ee(_.id, E => l.Z.getChannel(E), E => (0, t.F6)(E, M.default, G.Z, !0))
              }
              return E
            }
            switch (E.key) {
              case i.zUn.OWNER_ID:
                return EE(E, E => M.default.getUser(E));
              case i.zUn.CHANNEL_ID:
              case i.zUn.AFK_CHANNEL_ID:
              case i.zUn.SYSTEM_CHANNEL_ID:
              case i.zUn.RULES_CHANNEL_ID:
              case i.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                return EE(E, E => l.Z.getChannel(E), E => (0, t.F6)(E, M.default, G.Z, !0));
              case i.zUn.AFK_TIMEOUT:
                return EE(E, E => E / 60);
              case i.zUn.BITRATE:
                return EE(E, E => E / 1e3);
              case i.zUn.COLOR:
                return EE(E, E => (0, A.Rf)(E).toUpperCase());
              case i.zUn.MAX_AGE:
                return EE(E, E => {
                  let _ = R.ZP.getMaxAgeOptions.find(_ => {
                    let {
                      value: e
                    } = _;
                    return E === e
                  });
                  return _ ? _.label : E
                });
              case i.zUn.PERMISSIONS: {
                let _ = [],
                  {
                    added: e,
                    removed: T
                  } = $(E.oldValue, E.newValue);
                if (e.length > 0) {
                  let E = new U.ms(i.zUn.PERMISSIONS_GRANTED, null, e);
                  _.push(E)
                }
                if (T.length > 0) {
                  let E = new U.ms(i.zUn.PERMISSIONS_DENIED, null, T);
                  _.push(E)
                }
                return _
              }
              case i.zUn.PERMISSIONS_GRANTED:
              case i.zUn.PERMISSIONS_DENIED: {
                let _ = [],
                  {
                    added: e,
                    removed: T
                  } = $(E.oldValue, E.newValue);
                if (e.length > 0) {
                  let T = new U.ms(E.key, null, e);
                  _.push(T)
                }
                if (T.length > 0) {
                  let E = new U.ms(i.zUn.PERMISSIONS_RESET, T, T);
                  _.push(E)
                }
                return _
              }
              case i.zUn.PREFERRED_LOCALE:
                return EE(E, E => {
                  let _ = C.Z.getAvailableLocales().find(_ => _.value === E);
                  return null != _ ? _.name : null
                });
              case i.zUn.VIDEO_QUALITY_MODE:
                return EE(E, E => E === i.Ucd.FULL ? C.Z.Messages.VIDEO_QUALITY_MODE_FULL : C.Z.Messages.VIDEO_QUALITY_MODE_AUTO);
              case i.zUn.SYSTEM_CHANNEL_FLAGS:
                return function(E) {
                  let _ = {
                      [i.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: i.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [i.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: i.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [i.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: i.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [i.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: i.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    e = [];
                  return Object.values(i.xmn).forEach(T => {
                    let s = (E.oldValue & T) === T,
                      I = (E.newValue & T) === T;
                    if (s === I) return;
                    let A = new U.ms(_[T], !s, !I);
                    e.push(A)
                  }), e
                }(E)
            }
            return E
          }(T, E, _);
          Array.isArray(I) ? I.forEach(E => e.push(E)) : e.push(I)
        }), E = E.set("changes", e)
      }
      e.push(E)
    }
  }), e
}

function $(E, _) {
  let e = I.vB("string" == typeof E ? E : 0),
    T = I.vB("string" == typeof _ ? _ : 0),
    s = I.Od(T, e),
    A = I.Od(e, T),
    n = [],
    N = [],
    t = {
      ...i.Plq
    };
  for (let E in t) {
    let _ = t[E];
    I.e$(s, _) && n.push(_), I.e$(A, _) && N.push(_)
  }
  return {
    added: n,
    removed: N
  }
}

function EE(E, _, e) {
  let T = E.newValue,
    s = E.oldValue;
  return null != E.newValue && (T = _(E.newValue), null != e && null != T && (T = e(T))), null != E.oldValue && (s = _(E.oldValue), null != e && null != s && (s = e(s))), new U.ms(E.key, s || E.oldValue, T || E.newValue)
}

function E_(E, _, e, T, s) {
  let I = null,
    A = e(s = null != s ? s : E.targetId);
  if (null != A && null != T && (I = T(A)), null == I && null != A && (I = A), null == I) {
    let _ = L.Z.deletedTargets[E.targetType];
    null != _ && null != _[s] && (I = _[s])
  }
  if (null == I && null != E.changes) {
    let e = E.changes.find(E => E.key === _);
    null != e && (I = e.newValue || e.oldValue)
  }
  return I || s
}

function Ee(E, _, e) {
  let T = E,
    s = _(E);
  return null != s && null != e && (T = e(s)), T
}

function ET(E, _) {
  return e => null == e.oldValue ? E : _
}

function Es(E, _) {
  return e => null == e.newValue ? E : _
}

function EI(E, _, e, T) {
  return s => {
    if (null != s.newValue && null != s.oldValue) return E;
    if (null != s.newValue) return _;
    if (null != s.oldValue) return e;
    return T
  }
}