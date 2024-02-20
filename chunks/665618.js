"use strict";
n.r(t), n.d(t, {
  fromServer: function() {
    return o
  },
  fromBackgroundSync: function() {
    return l
  },
  fromServerUpdate: function() {
    return u
  },
  fromInviteGuild: function() {
    return c
  },
  toServer: function() {
    return d
  },
  fromSerializedGuildRecord: function() {
    return p
  },
  filterRoleDeletes: function() {
    return h
  }
}), n("222007");
var i = n("627929"),
  r = n("813006"),
  s = n("605136"),
  a = n("49111");

function o(e, t) {
  var n, o, l, u, c, d, p, h, f, E, _, m, S;
  let g = {
    id: e.id,
    name: null !== (n = e.properties.name) && void 0 !== n ? n : "",
    description: e.properties.description,
    icon: e.properties.icon,
    splash: e.properties.splash,
    banner: e.properties.banner,
    homeHeader: e.properties.home_header,
    features: new Set(null !== (o = e.properties.features) && void 0 !== o ? o : []),
    preferredLocale: null !== (l = e.properties.preferred_locale) && void 0 !== l ? l : "en-us",
    ownerId: e.properties.owner_id,
    application_id: e.properties.application_id,
    roles: e.roles instanceof Array ? (0, s.sortServerRoles)(e.id, e.roles) : e.roles,
    afkChannelId: e.properties.afk_channel_id,
    afkTimeout: e.properties.afk_timeout,
    systemChannelId: e.properties.system_channel_id,
    joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
    verificationLevel: null !== (u = e.properties.verification_level) && void 0 !== u ? u : a.VerificationLevels.NONE,
    explicitContentFilter: null !== (c = e.properties.explicit_content_filter) && void 0 !== c ? c : a.GuildExplicitContentFilterTypes.DISABLED,
    defaultMessageNotifications: null !== (d = e.properties.default_message_notifications) && void 0 !== d ? d : a.UserNotificationSettings.ALL_MESSAGES,
    mfaLevel: null !== (p = e.properties.mfa_level) && void 0 !== p ? p : a.MFALevels.NONE,
    vanityURLCode: e.properties.vanity_url_code,
    premiumTier: null !== (h = e.properties.premium_tier) && void 0 !== h ? h : a.BoostedGuildTiers.NONE,
    premiumSubscriberCount: null !== (f = e.premium_subscription_count) && void 0 !== f ? f : 0,
    premiumProgressBarEnabled: e.properties.premium_progress_bar_enabled || !1,
    systemChannelFlags: e.properties.system_channel_flags,
    discoverySplash: e.properties.discovery_splash,
    rulesChannelId: e.properties.rules_channel_id,
    safetyAlertsChannelId: e.properties.safety_alerts_channel_id,
    publicUpdatesChannelId: e.properties.public_updates_channel_id,
    maxStageVideoChannelUsers: null !== (E = e.properties.max_stage_video_channel_users) && void 0 !== E ? E : -1,
    maxVideoChannelUsers: null !== (_ = e.properties.max_video_channel_users) && void 0 !== _ ? _ : -1,
    maxMembers: null !== (m = e.properties.max_members) && void 0 !== m ? m : -1,
    nsfwLevel: null !== (S = e.properties.nsfw_level) && void 0 !== S ? S : a.GuildNSFWContentLevel.DEFAULT,
    hubType: e.properties.hub_type,
    latestOnboardingQuestionId: e.properties.latest_onboarding_question_id
  };
  return null == t ? (0, i.dangerouslyCast)(g, r.default) : t.merge(g)
}

function l(e, t) {
  var n, i, r, o, l, u, c, p, f, E, _, m, S;
  let g = null !== (n = e.properties) && void 0 !== n ? n : d(t),
    T = {
      id: e.id,
      name: null !== (i = g.name) && void 0 !== i ? i : "",
      description: g.description,
      icon: g.icon,
      splash: g.splash,
      banner: g.banner,
      homeHeader: g.home_header,
      features: new Set(null !== (r = g.features) && void 0 !== r ? r : []),
      preferredLocale: null !== (o = g.preferred_locale) && void 0 !== o ? o : "en-us",
      ownerId: g.owner_id,
      application_id: g.application_id,
      roles: "partial" === e.data_mode ? h(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids) : (0, s.sortServerRoles)(e.id, e.roles),
      afkChannelId: g.afk_channel_id,
      afkTimeout: g.afk_timeout,
      systemChannelId: g.system_channel_id,
      verificationLevel: null !== (l = g.verification_level) && void 0 !== l ? l : a.VerificationLevels.NONE,
      explicitContentFilter: null !== (u = g.explicit_content_filter) && void 0 !== u ? u : a.GuildExplicitContentFilterTypes.DISABLED,
      defaultMessageNotifications: null !== (c = g.default_message_notifications) && void 0 !== c ? c : a.UserNotificationSettings.ALL_MESSAGES,
      mfaLevel: null !== (p = g.mfa_level) && void 0 !== p ? p : a.MFALevels.NONE,
      vanityURLCode: g.vanity_url_code,
      premiumTier: null !== (f = g.premium_tier) && void 0 !== f ? f : a.BoostedGuildTiers.NONE,
      premiumProgressBarEnabled: g.premium_progress_bar_enabled || !1,
      systemChannelFlags: g.system_channel_flags,
      discoverySplash: g.discovery_splash,
      rulesChannelId: g.rules_channel_id,
      safetyAlertsChannelId: g.safety_alerts_channel_id,
      publicUpdatesChannelId: g.public_updates_channel_id,
      maxStageVideoChannelUsers: null !== (E = g.max_stage_video_channel_users) && void 0 !== E ? E : -1,
      maxVideoChannelUsers: null !== (_ = g.max_video_channel_users) && void 0 !== _ ? _ : -1,
      maxMembers: null !== (m = g.max_members) && void 0 !== m ? m : -1,
      nsfwLevel: null !== (S = g.nsfw_level) && void 0 !== S ? S : a.GuildNSFWContentLevel.DEFAULT,
      hubType: g.hub_type,
      latestOnboardingQuestionId: g.latest_onboarding_question_id
    };
  return t.merge(T)
}

function u(e, t) {
  let n = {
    id: e.id,
    name: e.name,
    description: e.description,
    icon: e.icon,
    splash: e.splash,
    banner: e.banner,
    homeHeader: e.home_header,
    features: e.features,
    preferredLocale: e.preferred_locale,
    ownerId: e.owner_id,
    application_id: e.application_id,
    roles: (0, s.sortServerRoles)(e.id, e.roles),
    afkChannelId: e.afk_channel_id,
    afkTimeout: e.afk_timeout,
    systemChannelId: e.system_channel_id,
    joinedAt: null != e.joined_at ? new Date(e.joined_at) : null == t ? void 0 : t.joinedAt,
    verificationLevel: e.verification_level,
    explicitContentFilter: e.explicit_content_filter,
    defaultMessageNotifications: e.default_message_notifications,
    mfaLevel: e.mfa_level,
    vanityURLCode: e.vanity_url_code,
    premiumTier: e.premium_tier,
    premiumSubscriberCount: e.premium_subscription_count,
    premiumProgressBarEnabled: e.premium_progress_bar_enabled,
    systemChannelFlags: e.system_channel_flags,
    discoverySplash: e.discovery_splash,
    rulesChannelId: e.rules_channel_id,
    safetyAlertsChannelId: e.safety_alerts_channel_id,
    publicUpdatesChannelId: e.public_updates_channel_id,
    maxStageVideoChannelUsers: e.max_stage_video_channel_users,
    maxVideoChannelUsers: e.max_video_channel_users,
    maxMembers: e.max_members,
    nsfwLevel: e.nsfw_level,
    hubType: e.hub_type,
    latestOnboardingQuestionId: e.latest_onboarding_question_id
  };
  return null == t ? new r.default(n) : t.merge(n)
}

function c(e) {
  let t = {
    id: e.id,
    name: e.name,
    description: e.description,
    icon: e.icon,
    splash: e.splash,
    banner: e.banner,
    features: e.features,
    verificationLevel: e.verification_level,
    vanityURLCode: e.vanity_url_code,
    premiumSubscriberCount: e.premium_subscription_count,
    nsfwLevel: e.nsfw_level,
    memberCount: e.approximate_member_count
  };
  return new r.default(t)
}

function d(e) {
  return {
    id: e.id,
    name: e.name,
    description: e.description,
    icon: e.icon,
    splash: e.splash,
    banner: e.banner,
    home_header: e.homeHeader,
    features: Array.from(e.features),
    preferred_locale: e.preferredLocale,
    owner_id: e.ownerId,
    application_id: e.application_id,
    afk_channel_id: e.afkChannelId,
    afk_timeout: e.afkTimeout,
    system_channel_id: e.systemChannelId,
    verification_level: e.verificationLevel,
    explicit_content_filter: e.explicitContentFilter,
    default_message_notifications: e.defaultMessageNotifications,
    mfa_level: e.mfaLevel,
    vanity_url_code: e.vanityURLCode,
    premium_tier: e.premiumTier,
    premium_progress_bar_enabled: e.premiumProgressBarEnabled,
    system_channel_flags: e.systemChannelFlags,
    discovery_splash: e.discoverySplash,
    rules_channel_id: e.rulesChannelId,
    safety_alerts_channel_id: e.safetyAlertsChannelId,
    public_updates_channel_id: e.publicUpdatesChannelId,
    max_stage_video_channel_users: e.maxStageVideoChannelUsers,
    max_video_channel_users: e.maxVideoChannelUsers,
    unavailable: !1,
    max_members: e.maxMembers,
    nsfw_level: e.nsfwLevel,
    hub_type: e.hubType,
    latest_onboarding_question_id: e.latestOnboardingQuestionId
  }
}

function p(e) {
  var t;
  for (let n in null != e.joinedAt && (e.joinedAt = new Date(e.joinedAt)), e.features = new Set(null !== (t = e.features) && void 0 !== t ? t : []), e.roles)(0, s.fromSerializedGuildRole)(e.roles[n]);
  return (0, i.dangerouslyCast)(e, r.default)
}

function h(e, t, n, i) {
  let r = !1;
  if (null != i)
    for (let e of i) delete t[e], r = !0;
  if (null != n && n.length > 0) {
    for (let e of n) t[e.id] = (0, s.fromServerRole)(e);
    r = !0
  }
  return r ? (0, s.sortClientRoles)(e, Object.values(t)) : t
}