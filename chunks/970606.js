"use strict";
n.r(t), n.d(t, {
  getProgressStepAnalyticsName: function() {
    return T
  },
  trackClanAdminInviteClicked: function() {
    return A
  },
  trackClanAdminInviteViewed: function() {
    return h
  },
  trackClanApplyToJoinViewed: function() {
    return u
  },
  trackClanDiscoveryCardClicked: function() {
    return m
  },
  trackClanDiscoveryUserNuxClicked: function() {
    return S
  },
  trackClanDiscoveryUserNuxViewed: function() {
    return f
  },
  trackClanDiscoveryViewed: function() {
    return I
  },
  trackClanProfileViewed: function() {
    return l
  },
  trackConvertStepViewed: function() {
    return d
  },
  trackConvertSuccessModalConfirm: function() {
    return E
  },
  trackConvertSuccessModalViewed: function() {
    return c
  },
  trackSettingsViewed: function() {
    return _
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

function d(e, t) {
  a.default.track(o.AnalyticEvents.CLAN_CONVERT_STEP_VIEWED, {
    guild_id: e,
    step: t
  })
}

function _(e, t) {
  a.default.track(o.AnalyticEvents.CLAN_SETTINGS_VIEWED, {
    guild_id: e,
    page: t
  })
}

function c(e) {
  a.default.track(o.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_VIEWED, {
    guild_id: e
  })
}

function E(e, t) {
  a.default.track(o.AnalyticEvents.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM, {
    guild_id: e,
    enable_tag: t
  })
}

function I(e, t, n) {
  a.default.track(o.AnalyticEvents.CLAN_DISCOVERY_VIEWED, {
    guild_ids: e,
    section: t,
    application_ids: n.games,
    playstyle: n.playstyle,
    traits: n.traits
  })
}

function T(e) {
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

function f() {
  a.default.track(o.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_VIEWED)
}

function S() {
  a.default.track(o.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_CLICKED)
}

function h(e) {
  let {
    location: t
  } = e;
  a.default.track(o.AnalyticEvents.CLAN_ADMIN_INVITE_VIEWED, {
    location: t
  })
}

function A(e) {
  let {
    guildId: t,
    location: n
  } = e;
  a.default.track(o.AnalyticEvents.CLAN_ADMIN_INVITE_CLICKED, {
    guild_id: t,
    location: n
  })
}

function m(e) {
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