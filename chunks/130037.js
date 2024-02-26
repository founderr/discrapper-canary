"use strict";
n.r(t), n.d(t, {
  useTrackMemberSearchUsed: function() {
    return f
  },
  useTrackMemberFilterRolesUsed: function() {
    return T
  },
  MemberSafetyFlagType: function() {
    return u
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return I
  },
  ModerationActionType: function() {
    return a
  },
  useTrackModerationAction: function() {
    return S
  },
  trackMembersPageViewed: function() {
    return N
  }
});
var i, l, u, a, r = n("884691"),
  d = n("812204"),
  o = n("716241"),
  s = n("271938"),
  c = n("599110"),
  E = n("49111");

function _(e, t, n) {
  var i;
  let l = {
    ...t,
    ...(0, o.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
  };
  c.default.track(e, l)
}

function f(e) {
  let t = r.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: d.default.MEMBER_SAFETY_PAGE
      };
      _(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e]);
  return t
}

function T(e) {
  let t = r.useCallback(t => {
    ! function(e, t) {
      let n = {
        selected_role_count: t.size,
        guild_id: e,
        location: d.default.MEMBER_SAFETY_PAGE
      };
      _(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
    }(e, t)
  }, [e]);
  return t
}(i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

function I(e) {
  let t = r.useCallback(t => {
    ! function(e, t) {
      let n = {
        flag_type: t,
        guild_id: e,
        location: d.default.MEMBER_SAFETY_PAGE
      };
      _(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }(e, t)
  }, [e]);
  return t
}

function S(e, t) {
  let {
    location: n,
    targetUserId: i,
    targets: l,
    locations: u
  } = t, a = r.useCallback(t => {
    let a = {
      action_type: t,
      mod_user_id: s.default.getId(),
      guild_id: e,
      location: n,
      locations: u,
      target_user_id: null != i ? i : void 0,
      targets: null != l ? l : void 0
    };
    _(E.AnalyticEvents.MODERATION_ACTION, a)
  }, [e, n, i, l, u]);
  return a
}

function N(e, t) {
  _(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(l = a || (a = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"