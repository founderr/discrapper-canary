"use strict";
n.r(e), n.d(e, {
  useTrackMemberSearchUsed: function() {
    return T
  },
  useTrackMemberFilterRolesUsed: function() {
    return _
  },
  MemberSafetyFlagType: function() {
    return r
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return S
  },
  ModerationActionType: function() {
    return a
  },
  useTrackModerationAction: function() {
    return f
  },
  trackMembersPageViewed: function() {
    return N
  }
});
var i, u, r, a, d = n("884691"),
  l = n("812204"),
  o = n("716241"),
  s = n("271938"),
  I = n("599110"),
  E = n("49111");

function c(t, e, n) {
  var i;
  let u = {
    ...e,
    ...(0, o.collectGuildAnalyticsMetadata)(null !== (i = e.guild_id) && void 0 !== i ? i : n)
  };
  I.default.track(t, u)
}

function T(t) {
  let e = d.useCallback(e => {
    ! function(t) {
      let e = {
        guild_id: t,
        location: l.default.MEMBER_SAFETY_PAGE
      };
      c(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, e)
    }(t)
  }, [t]);
  return e
}

function _(t) {
  let e = d.useCallback(e => {
    ! function(t, e) {
      let n = {
        selected_role_count: e.size,
        guild_id: t,
        location: l.default.MEMBER_SAFETY_PAGE
      };
      c(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
    }(t, e)
  }, [t]);
  return e
}(i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

function S(t) {
  let e = d.useCallback(e => {
    ! function(t, e) {
      let n = {
        flag_type: e,
        guild_id: t,
        location: l.default.MEMBER_SAFETY_PAGE
      };
      c(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }(t, e)
  }, [t]);
  return e
}

function f(t, e) {
  let {
    location: n,
    targetUserId: i,
    targets: u,
    locations: r
  } = e, a = d.useCallback(e => {
    let a = {
      action_type: e,
      mod_user_id: s.default.getId(),
      guild_id: t,
      location: n,
      locations: r,
      target_user_id: null != i ? i : void 0,
      targets: null != u ? u : void 0
    };
    c(E.AnalyticEvents.MODERATION_ACTION, a)
  }, [t, n, i, u, r]);
  return a
}

function N(t, e) {
  c(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: t,
    location: e
  })
}(u = a || (a = {})).BAN = "ban", u.KICK = "kick", u.MUTE = "mute", u.TIMEOUT = "timeout", u.ADD_ROLE = "add_role", u.REMOVE_ROLE = "remove_role", u.COPY_ID = "copy_id", u.CHANGE_NICKNAME = "change_nickname"