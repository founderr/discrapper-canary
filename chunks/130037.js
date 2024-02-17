"use strict";
n.r(e), n.d(e, {
  useTrackMemberSearchUsed: function() {
    return T
  },
  useTrackMemberFilterRolesUsed: function() {
    return _
  },
  MemberSafetyFlagType: function() {
    return a
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return f
  },
  ModerationActionType: function() {
    return r
  },
  useTrackModerationAction: function() {
    return S
  },
  trackMembersPageViewed: function() {
    return N
  }
});
var i, u, a, r, d = n("884691"),
  l = n("812204"),
  o = n("716241"),
  s = n("271938"),
  c = n("599110"),
  E = n("49111");

function I(t, e, n) {
  var i;
  let u = {
    ...e,
    ...(0, o.collectGuildAnalyticsMetadata)(null !== (i = e.guild_id) && void 0 !== i ? i : n)
  };
  c.default.track(t, u)
}

function T(t) {
  let e = d.useCallback(e => {
    ! function(t) {
      let e = {
        guild_id: t,
        location: l.default.MEMBER_SAFETY_PAGE
      };
      I(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, e)
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
      I(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
    }(t, e)
  }, [t]);
  return e
}(i = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

function f(t) {
  let e = d.useCallback(e => {
    ! function(t, e) {
      let n = {
        flag_type: e,
        guild_id: t,
        location: l.default.MEMBER_SAFETY_PAGE
      };
      I(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }(t, e)
  }, [t]);
  return e
}

function S(t, e) {
  let {
    location: n,
    targetUserId: i,
    targets: u,
    locations: a
  } = e, r = d.useCallback(e => {
    let r = {
      action_type: e,
      mod_user_id: s.default.getId(),
      guild_id: t,
      location: n,
      locations: a,
      target_user_id: null != i ? i : void 0,
      targets: null != u ? u : void 0
    };
    I(E.AnalyticEvents.MODERATION_ACTION, r)
  }, [t, n, i, u, a]);
  return r
}

function N(t, e) {
  I(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: t,
    location: e
  })
}(u = r || (r = {})).BAN = "ban", u.KICK = "kick", u.MUTE = "mute", u.TIMEOUT = "timeout", u.ADD_ROLE = "add_role", u.REMOVE_ROLE = "remove_role", u.COPY_ID = "copy_id", u.CHANGE_NICKNAME = "change_nickname"