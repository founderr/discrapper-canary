"use strict";
s.r(t), s.d(t, {
  MemberSafetyFlagType: function() {
    return a
  },
  ModerationActionType: function() {
    return n
  },
  trackMembersPageViewed: function() {
    return N
  },
  useTrackMemberFilterRolesUsed: function() {
    return r
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return d
  },
  useTrackMemberSearchUsed: function() {
    return o
  },
  useTrackModerationAction: function() {
    return S
  }
});
var E, _, a, n, T = s("470079"),
  i = s("100527"),
  u = s("367907"),
  A = s("314897"),
  l = s("626135"),
  I = s("981631");

function L(e, t, s) {
  var E;
  let _ = {
    ...t,
    ...(0, u.collectGuildAnalyticsMetadata)(null !== (E = t.guild_id) && void 0 !== E ? E : s)
  };
  l.default.track(e, _)
}

function o(e) {
  return T.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: i.default.MEMBER_SAFETY_PAGE
      };
      L(I.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e])
}

function r(e) {
  return T.useCallback(t => {
    ! function(e, t) {
      let s = {
        selected_role_count: t.size,
        guild_id: e,
        location: i.default.MEMBER_SAFETY_PAGE
      };
      L(I.AnalyticEvents.MOD_DASH_FILTER_ROLES, s)
    }(e, t)
  }, [e])
}(E = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", E.COMMUNICATION_DISABLED = "communication_disabled", E.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", E.USERNAME_QUARANTINED = "username_quarantined";

function d(e) {
  return T.useCallback(t => {
    ! function(e, t) {
      let s = {
        flag_type: t,
        guild_id: e,
        location: i.default.MEMBER_SAFETY_PAGE
      };
      L(I.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, s)
    }(e, t)
  }, [e])
}

function S(e, t) {
  let {
    location: s,
    targetUserId: E,
    targets: _,
    locations: a
  } = t;
  return T.useCallback(t => {
    let n = {
      action_type: t,
      mod_user_id: A.default.getId(),
      guild_id: e,
      location: s,
      locations: a,
      target_user_id: null != E ? E : void 0,
      targets: null != _ ? _ : void 0
    };
    L(I.AnalyticEvents.MODERATION_ACTION, n)
  }, [e, s, E, _, a])
}

function N(e, t) {
  L(I.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(_ = n || (n = {})).BAN = "ban", _.KICK = "kick", _.MUTE = "mute", _.TIMEOUT = "timeout", _.ADD_ROLE = "add_role", _.REMOVE_ROLE = "remove_role", _.COPY_ID = "copy_id", _.CHANGE_NICKNAME = "change_nickname"