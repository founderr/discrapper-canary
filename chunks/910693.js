"use strict";
s.r(t), s.d(t, {
  MemberSafetyFlagType: function() {
    return i
  },
  ModerationActionType: function() {
    return E
  },
  trackMembersPageViewed: function() {
    return N
  },
  useTrackMemberFilterRolesUsed: function() {
    return I
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return L
  },
  useTrackMemberSearchUsed: function() {
    return A
  },
  useTrackModerationAction: function() {
    return c
  }
});
var a, n, i, E, l = s("470079"),
  _ = s("100527"),
  r = s("367907"),
  u = s("314897"),
  o = s("626135"),
  T = s("981631");

function d(e, t, s) {
  var a;
  let n = {
    ...t,
    ...(0, r.collectGuildAnalyticsMetadata)(null !== (a = t.guild_id) && void 0 !== a ? a : s)
  };
  o.default.track(e, n)
}

function A(e) {
  return l.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: _.default.MEMBER_SAFETY_PAGE
      };
      d(T.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e])
}

function I(e) {
  return l.useCallback(t => {
    ! function(e, t) {
      let s = {
        selected_role_count: t.size,
        guild_id: e,
        location: _.default.MEMBER_SAFETY_PAGE
      };
      d(T.AnalyticEvents.MOD_DASH_FILTER_ROLES, s)
    }(e, t)
  }, [e])
}(a = i || (i = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", a.COMMUNICATION_DISABLED = "communication_disabled", a.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", a.USERNAME_QUARANTINED = "username_quarantined";

function L(e) {
  return l.useCallback(t => {
    ! function(e, t) {
      let s = {
        flag_type: t,
        guild_id: e,
        location: _.default.MEMBER_SAFETY_PAGE
      };
      d(T.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, s)
    }(e, t)
  }, [e])
}

function c(e, t) {
  let {
    location: s,
    targetUserId: a,
    targets: n,
    locations: i
  } = t;
  return l.useCallback(t => {
    let E = {
      action_type: t,
      mod_user_id: u.default.getId(),
      guild_id: e,
      location: s,
      locations: i,
      target_user_id: null != a ? a : void 0,
      targets: null != n ? n : void 0
    };
    d(T.AnalyticEvents.MODERATION_ACTION, E)
  }, [e, s, a, n, i])
}

function N(e, t) {
  d(T.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(n = E || (E = {})).BAN = "ban", n.KICK = "kick", n.MUTE = "mute", n.TIMEOUT = "timeout", n.ADD_ROLE = "add_role", n.REMOVE_ROLE = "remove_role", n.COPY_ID = "copy_id", n.CHANGE_NICKNAME = "change_nickname"