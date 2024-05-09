"use strict";
n.r(t), n.d(t, {
  getProgressStepAnalyticsName: function() {
    return f
  },
  trackClanAdminInviteClicked: function() {
    return m
  },
  trackClanAdminInviteViewed: function() {
    return A
  },
  trackClanAdoptIdentity: function() {
    return d
  },
  trackClanApplicationNavigation: function() {
    return R
  },
  trackClanApplyToJoinViewed: function() {
    return u
  },
  trackClanDiscoveryCardClicked: function() {
    return N
  },
  trackClanDiscoveryUserNuxClicked: function() {
    return h
  },
  trackClanDiscoveryUserNuxViewed: function() {
    return S
  },
  trackClanDiscoveryViewed: function() {
    return T
  },
  trackClanProfileViewed: function() {
    return l
  },
  trackClanSendInterviewMessage: function() {
    return O
  },
  trackConvertStepViewed: function() {
    return _
  },
  trackConvertSuccessModalConfirm: function() {
    return I
  },
  trackConvertSuccessModalViewed: function() {
    return E
  },
  trackMemberVerificationApplicationViewed: function() {
    return p
  },
  trackSettingsViewed: function() {
    return c
  }
});
var i = n("314897"),
  r = n("271383"),
  a = n("626135"),
  s = n("308083"),
  o = n("981631");

function l(e) {
  let {
    guildId: t,
    hasJoinRequest: n,
    source: s,
    messageId: l,
    tagUserId: u
  } = e, d = i.default.getId(), _ = r.default.getMember(t, i.default.getId()), c = (null == _ ? void 0 : _.joinedAt) != null;
  a.default.track(o.AnalyticEvents.CLAN_PROFILE_VIEWED, {
    guild_id: t,
    is_member: c,
    has_join_request: n,
    source: s,
    location: s,
    viewing_user_id: d,
    tag_owner_user_id: u,
    message_id: l
  })
}

function u(e) {
  let {
    guildId: t,
    source: n,
    location: r,
    messageId: s,
    tagUserId: l
  } = e, u = i.default.getId();
  a.default.track(o.AnalyticEvents.CLAN_APPLY_TO_JOIN_VIEWED, {
    guild_id: t,
    source: n,
    location: r,
    viewing_user_id: u,
    tag_owner_user_id: l,
    message_id: s
  })
}

function d(e) {
  let {
    guildId: t,
    userId: n,
    source: i
  } = e;
  a.default.track(o.AnalyticEvents.CLAN_ADOPT_IDENTITY, {
    guild_id: t,
    user_id: n,
    source: i
  })
}

function _(e, t) {
  a.default.track(o.AnalyticEvents.CLAN_CONVERT_STEP_VIEWED, {
    guild_id: e,
    step: t
  })
}

function c(e, t) {
  a.default.track(o.AnalyticEvents.CLAN_SETTINGS_VIEWED, {
    guild_id: e,
    page: t
  })
}

function E(e) {
  a.default.track(o.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_VIEWED, {
    guild_id: e
  })
}

function I(e, t) {
  a.default.track(o.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM, {
    guild_id: e,
    enable_tag: t
  })
}

function T(e, t, n) {
  a.default.track(o.AnalyticEvents.CLAN_DISCOVERY_VIEWED, {
    guild_ids: e,
    section: t,
    application_ids: n.games,
    playstyle: n.playstyle,
    traits: n.traits
  })
}

function f(e) {
  switch (e) {
    case s.ClanSetupSteps.GAMES:
      return "games";
    case s.ClanSetupSteps.PLAYSTYLE:
      return "playstyle";
    case s.ClanSetupSteps.UTILITY_TRAITS:
      return "utility_traits";
    case s.ClanSetupSteps.INTERESTS:
      return "interests";
    case s.ClanSetupSteps.DESCRIPTION:
      return "description";
    case s.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
      return "tag";
    case s.ClanSetupSteps.CUSTOMIZE_BANNER:
      return "banner";
    case s.ClanSetupSteps.MEMBER_APPLICATION:
      return "member_application";
    default:
      return e
  }
}

function S() {
  a.default.track(o.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_VIEWED)
}

function h() {
  a.default.track(o.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_CLICKED)
}

function A(e) {
  let {
    guildId: t,
    location: n
  } = e;
  a.default.track(o.AnalyticEvents.CLAN_ADMIN_INVITE_VIEWED, {
    guild_id: t,
    location: n
  })
}

function m(e) {
  let {
    guildId: t,
    location: n
  } = e;
  a.default.track(o.AnalyticEvents.CLAN_ADMIN_INVITE_CLICKED, {
    guild_id: t,
    location: n
  })
}

function N(e) {
  let {
    guildId: t,
    isMember: n,
    hasJoinRequest: i,
    affinity: r,
    index: s
  } = e;
  a.default.track(o.AnalyticEvents.CLAN_DISCOVERY_CARD_CLICKED, {
    guild_id: t,
    is_member: n,
    has_join_request: i,
    affinity: r,
    index: s
  })
}

function p(e) {
  a.default.track(o.AnalyticEvents.MEMBER_VERIFICATION_APPLICATION_VIEWED, {
    guild_id: e
  })
}

function O(e) {
  var t;
  let {
    guildId: n,
    messageId: s,
    channelId: l,
    joinRequestStatus: u,
    joinRequestUserId: d
  } = e, _ = i.default.getId(), c = (null === (t = r.default.getMember(n, _)) || void 0 === t ? void 0 : t.joinedAt) != null;
  a.default.track(o.AnalyticEvents.CLAN_SEND_INTERVIEW_MESSAGE, {
    guild_id: n,
    channel_id: l,
    message_id: s,
    message_user_id: _,
    is_member: c,
    join_request_status: u,
    join_request_user_id: d
  })
}

function R(e) {
  let {
    guildId: t,
    source: n,
    tab: i
  } = e;
  a.default.track(o.AnalyticEvents.CLAN_APPLICATION_NAVIGATION, {
    guild_id: t,
    source: n,
    tab: i
  })
}