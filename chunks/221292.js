"use strict";
n.d(t, {
  Ac: function() {
    return O
  },
  NE: function() {
    return p
  },
  Qf: function() {
    return R
  },
  pQ: function() {
    return m
  }
}), n(653041);
var i = n(367907),
  r = n(814443),
  s = n(271383),
  o = n(158776),
  a = n(699516),
  l = n(594174),
  u = n(626135),
  _ = n(768581),
  c = n(621853),
  d = n(318661),
  E = n(228168),
  I = n(981631),
  T = n(231338);
let h = e => {
    let {
      user: t,
      userProfile: n,
      guildMember: i,
      guildMemberProfile: r
    } = e, s = null != n ? n : r, o = [];
    if ((null == i ? void 0 : i.nick) && o.push(E.cm.NICKNAME), (null == s ? void 0 : s.pronouns) && o.push(E.cm.PRONOUNS), null == t ? void 0 : t.avatar) {
      let e = (0, _.xR)(null == t ? void 0 : t.avatar);
      o.push(e ? E.cm.ANIMATED_AVATAR : E.cm.AVATAR)
    }
    if (null == s ? void 0 : s.banner) {
      let e = (0, _.xR)(null == s ? void 0 : s.banner);
      o.push(e ? E.cm.ANIMATED_BANNER : E.cm.BANNER)
    }
    return (null == s ? void 0 : s.bio) && o.push(E.cm.BIO), (null == s ? void 0 : s.themeColors) != null && void 0 !== s.themeColors.find(e => null !== e) && o.push(E.cm.THEME), (null == t ? void 0 : t.avatarDecoration) != null && o.push(E.cm.AVATAR_DECORATION), (null == s ? void 0 : s.profileEffectId) != null && o.push(E.cm.PROFILE_EFFECT), o
  },
  f = e => {
    let t = o.Z.getStatus(e),
      n = o.Z.isMobileOnline(e);
    return t === T.Sk.ONLINE && n ? "".concat(t, "-mobile") : t === T.Sk.ONLINE ? "".concat(t, "-desktop") : t
  },
  S = e => null == e ? e : Object.keys(I.IIU)[Object.values(I.IIU).indexOf(e)],
  A = e => {
    var t, n;
    let {
      layout: i,
      userId: r,
      guildId: a,
      showGuildProfile: u = !0
    } = e, _ = l.default.getUser(r);
    if (null == _) return {};
    let c = (0, d.Of)(null == _ ? void 0 : _.id, u ? a : void 0),
      E = u && null != a ? s.ZP.getMember(a, null == _ ? void 0 : _.id) : null;
    return {
      profile_layout: i,
      profile_properties: h({
        user: _,
        userProfile: null == c ? void 0 : c._userProfile
      }),
      guild_profile_properties: h({
        guildMember: E,
        guildMemberProfile: null == c ? void 0 : c._guildMemberProfile
      }),
      profile_activity_types: o.Z.getActivities(_.id).map(e => {
        let {
          type: t
        } = e;
        return t
      }).filter(e => void 0 !== e),
      profile_badges: null == c ? void 0 : null === (t = c.getBadges()) || void 0 === t ? void 0 : t.map(e => {
        let {
          id: t
        } = e;
        return t
      }),
      avatar_decoration_sku_id: null === (n = _.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
      profile_effect_sku_id: null == c ? void 0 : c.profileEffectId,
      user_status: f(_.id),
      is_guild_profile: (null == c ? void 0 : c.guildId) != null,
      is_bot_profile: _.bot
    }
  },
  N = e => {
    var t, n;
    return null == e ? {} : {
      related_user_id: e,
      relationship_type: a.Z.getRelationshipType(e),
      related_since: a.Z.getSince(e),
      num_mutual_friends: c.Z.getMutualFriendsCount(e),
      num_mutual_guilds: null === (t = c.Z.getMutualGuilds(e)) || void 0 === t ? void 0 : t.length,
      affinity: null === (n = r.Z.getUserAffinity(e)) || void 0 === n ? void 0 : n.affinity
    }
  },
  m = e => {
    let {
      userId: t,
      guildId: n,
      channelId: r,
      messageId: s,
      roleId: o,
      showGuildProfile: a,
      analyticsLocations: l,
      layout: _,
      action: c,
      section: d
    } = e;
    u.default.track(I.rMx.USER_PROFILE_ACTION, {
      ...(0, i.hH)(n),
      ...(0, i.JS)(r),
      ...A({
        layout: _,
        userId: t,
        guildId: n,
        showGuildProfile: a
      }),
      ...N(t),
      location_stack: l,
      profile_action: c,
      profile_section: d,
      source_message_id: s,
      source_role_id: o
    })
  },
  O = e => {
    let {
      userId: t,
      guildId: n,
      channelId: r,
      showGuildProfile: s,
      analyticsLocations: o,
      layout: a,
      activityType: l,
      activityName: _,
      activityPlatform: c,
      activitySessionId: d,
      applicationId: E,
      voiceChannelId: T
    } = e;
    u.default.track(I.rMx.USER_PROFILE_ACTIVITY_JOINED, {
      ...(0, i.hH)(n),
      ...(0, i.JS)(r),
      ...A({
        layout: a,
        userId: t,
        guildId: n,
        showGuildProfile: s
      }),
      ...N(t),
      location_stack: o,
      activity_type: null != T ? "VOICE" : S(l),
      activity_name: _,
      activity_platform: c,
      activity_session_id: d,
      application_id: E,
      voice_channel_id: T
    })
  },
  p = e => {
    let {
      userId: t,
      guildId: n,
      channelId: r,
      showGuildProfile: s,
      analyticsLocations: o,
      layout: a,
      badge: l
    } = e;
    u.default.track(I.rMx.USER_PROFILE_BADGE_PRESSED, {
      ...(0, i.hH)(n),
      ...(0, i.JS)(r),
      ...A({
        layout: a,
        userId: t,
        guildId: n,
        showGuildProfile: s
      }),
      ...N(t),
      location_stack: o,
      badge: l
    })
  },
  R = e => {
    let {
      userId: t,
      guildId: n,
      channelId: r,
      showGuildProfile: s,
      analyticsLocations: o,
      layout: a,
      badge: l
    } = e;
    u.default.track(I.rMx.USER_PROFILE_BADGE_HOVERED, {
      ...(0, i.hH)(n),
      ...(0, i.JS)(r),
      ...A({
        layout: a,
        userId: t,
        guildId: n,
        showGuildProfile: s
      }),
      ...N(t),
      location_stack: o,
      badge: l
    })
  }