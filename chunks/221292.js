"use strict";
n.r(t), n.d(t, {
  trackUserProfileAction: function() {
    return N
  },
  trackUserProfileActivityJoined: function() {
    return p
  },
  trackUserProfileBadgeHovered: function() {
    return C
  },
  trackUserProfileBadgePressed: function() {
    return O
  }
}), n("653041");
var i = n("367907"),
  r = n("814443"),
  s = n("271383"),
  a = n("158776"),
  o = n("699516"),
  l = n("594174"),
  u = n("626135"),
  d = n("768581"),
  _ = n("621853"),
  c = n("318661"),
  E = n("228168"),
  I = n("981631"),
  T = n("231338");
let f = e => {
    let {
      user: t,
      userProfile: n,
      guildMember: i,
      guildMemberProfile: r
    } = e, s = null != n ? n : r, a = [];
    if ((null == i ? void 0 : i.nick) && a.push(E.TrackUserProfileProperties.NICKNAME), (null == s ? void 0 : s.pronouns) && a.push(E.TrackUserProfileProperties.PRONOUNS), null == t ? void 0 : t.avatar) {
      let e = (0, d.isAnimatedIconHash)(null == t ? void 0 : t.avatar);
      a.push(e ? E.TrackUserProfileProperties.ANIMATED_AVATAR : E.TrackUserProfileProperties.AVATAR)
    }
    if (null == s ? void 0 : s.banner) {
      let e = (0, d.isAnimatedIconHash)(null == s ? void 0 : s.banner);
      a.push(e ? E.TrackUserProfileProperties.ANIMATED_BANNER : E.TrackUserProfileProperties.BANNER)
    }
    return (null == s ? void 0 : s.bio) && a.push(E.TrackUserProfileProperties.BIO), (null == s ? void 0 : s.themeColors) != null && void 0 !== s.themeColors.find(e => null !== e) && a.push(E.TrackUserProfileProperties.THEME), (null == t ? void 0 : t.avatarDecoration) != null && a.push(E.TrackUserProfileProperties.AVATAR_DECORATION), (null == s ? void 0 : s.profileEffectId) != null && a.push(E.TrackUserProfileProperties.PROFILE_EFFECT), a
  },
  S = e => {
    let t = a.default.getStatus(e),
      n = a.default.isMobileOnline(e);
    return t === T.StatusTypes.ONLINE && n ? "".concat(t, "-mobile") : t === T.StatusTypes.ONLINE ? "".concat(t, "-desktop") : t
  },
  h = e => null == e ? e : Object.keys(I.ActivityTypes)[Object.values(I.ActivityTypes).indexOf(e)],
  A = e => {
    var t, n;
    let {
      layout: i,
      userId: r,
      guildId: o,
      showGuildProfile: u = !0
    } = e, d = l.default.getUser(r);
    if (null == d) return {};
    let _ = (0, c.getDisplayProfile)(null == d ? void 0 : d.id, u ? o : void 0),
      E = u && null != o ? s.default.getMember(o, null == d ? void 0 : d.id) : null;
    return {
      profile_layout: i,
      profile_properties: f({
        user: d,
        userProfile: null == _ ? void 0 : _._userProfile
      }),
      guild_profile_properties: f({
        guildMember: E,
        guildMemberProfile: null == _ ? void 0 : _._guildMemberProfile
      }),
      profile_activity_types: a.default.getActivities(d.id).map(e => {
        let {
          type: t
        } = e;
        return t
      }).filter(e => void 0 !== e),
      profile_badges: null == _ ? void 0 : null === (t = _.getBadges()) || void 0 === t ? void 0 : t.map(e => {
        let {
          id: t
        } = e;
        return t
      }),
      avatar_decoration_sku_id: null === (n = d.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
      profile_effect_sku_id: null == _ ? void 0 : _.profileEffectId,
      user_status: S(d.id),
      is_guild_profile: (null == _ ? void 0 : _.guildId) != null
    }
  },
  m = e => {
    var t, n;
    return null == e ? {} : {
      related_user_id: e,
      relationship_type: o.default.getRelationshipType(e),
      related_since: o.default.getSince(e),
      num_mutual_friends: _.default.getMutualFriendsCount(e),
      num_mutual_guilds: null === (t = _.default.getMutualGuilds(e)) || void 0 === t ? void 0 : t.length,
      affinity: null === (n = r.default.getUserAffinity(e)) || void 0 === n ? void 0 : n.affinity
    }
  },
  N = e => {
    let {
      userId: t,
      guildId: n,
      channelId: r,
      messageId: s,
      roleId: a,
      showGuildProfile: o,
      analyticsLocations: l,
      layout: d,
      action: _,
      section: c
    } = e;
    u.default.track(I.AnalyticEvents.USER_PROFILE_ACTION, {
      ...(0, i.collectGuildAnalyticsMetadata)(n),
      ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
      ...A({
        layout: d,
        userId: t,
        guildId: n,
        showGuildProfile: o
      }),
      ...m(t),
      location_stack: l,
      profile_action: _,
      profile_section: c,
      source_message_id: s,
      source_role_id: a
    })
  },
  p = e => {
    let {
      userId: t,
      guildId: n,
      channelId: r,
      showGuildProfile: s,
      analyticsLocations: a,
      layout: o,
      activityType: l,
      activityName: d,
      activityPlatform: _,
      activitySessionId: c,
      applicationId: E,
      voiceChannelId: T
    } = e;
    u.default.track(I.AnalyticEvents.USER_PROFILE_ACTIVITY_JOINED, {
      ...(0, i.collectGuildAnalyticsMetadata)(n),
      ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
      ...A({
        layout: o,
        userId: t,
        guildId: n,
        showGuildProfile: s
      }),
      ...m(t),
      location_stack: a,
      activity_type: null != T ? "VOICE" : h(l),
      activity_name: d,
      activity_platform: _,
      activity_session_id: c,
      application_id: E,
      voice_channel_id: T
    })
  },
  O = e => {
    let {
      userId: t,
      guildId: n,
      channelId: r,
      showGuildProfile: s,
      analyticsLocations: a,
      layout: o,
      badge: l
    } = e;
    u.default.track(I.AnalyticEvents.USER_PROFILE_BADGE_PRESSED, {
      ...(0, i.collectGuildAnalyticsMetadata)(n),
      ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
      ...A({
        layout: o,
        userId: t,
        guildId: n,
        showGuildProfile: s
      }),
      ...m(t),
      location_stack: a,
      badge: l
    })
  },
  C = e => {
    let {
      userId: t,
      guildId: n,
      channelId: r,
      showGuildProfile: s,
      analyticsLocations: a,
      layout: o,
      badge: l
    } = e;
    u.default.track(I.AnalyticEvents.USER_PROFILE_BADGE_HOVERED, {
      ...(0, i.collectGuildAnalyticsMetadata)(n),
      ...(0, i.collectChannelAnalyticsMetadataFromId)(r),
      ...A({
        layout: o,
        userId: t,
        guildId: n,
        showGuildProfile: s
      }),
      ...m(t),
      location_stack: a,
      badge: l
    })
  }