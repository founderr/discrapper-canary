"use strict";
n.r(t), n.d(t, {
  MemberSafetyFlagType: function() {
    return a
  },
  ModerationActionType: function() {
    return i
  },
  trackMembersPageViewed: function() {
    return T
  },
  useTrackMemberFilterRolesUsed: function() {
    return M
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return A
  },
  useTrackMemberSearchUsed: function() {
    return E
  },
  useTrackModerationAction: function() {
    return C
  }
});
var l, u, a, i, o = n("470079"),
  r = n("100527"),
  s = n("367907"),
  c = n("314897"),
  d = n("626135"),
  f = n("981631");

function _(e, t, n) {
  var l;
  let u = {
    ...t,
    ...(0, s.collectGuildAnalyticsMetadata)(null !== (l = t.guild_id) && void 0 !== l ? l : n)
  };
  d.default.track(e, u)
}

function E(e) {
  return o.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      _(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e])
}

function M(e) {
  return o.useCallback(t => {
    ! function(e, t) {
      let n = {
        selected_role_count: t.size,
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      _(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
    }(e, t)
  }, [e])
}(l = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled", l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", l.USERNAME_QUARANTINED = "username_quarantined";

function A(e) {
  return o.useCallback(t => {
    ! function(e, t) {
      let n = {
        flag_type: t,
        guild_id: e,
        location: r.default.MEMBER_SAFETY_PAGE
      };
      _(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }(e, t)
  }, [e])
}

function C(e, t) {
  let {
    location: n,
    targetUserId: l,
    targets: u,
    locations: a
  } = t;
  return o.useCallback(t => {
    let i = {
      action_type: t,
      mod_user_id: c.default.getId(),
      guild_id: e,
      location: n,
      locations: a,
      target_user_id: null != l ? l : void 0,
      targets: null != u ? u : void 0
    };
    _(f.AnalyticEvents.MODERATION_ACTION, i)
  }, [e, n, l, u, a])
}

function T(e, t) {
  _(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(u = i || (i = {})).BAN = "ban", u.KICK = "kick", u.MUTE = "mute", u.TIMEOUT = "timeout", u.ADD_ROLE = "add_role", u.REMOVE_ROLE = "remove_role", u.COPY_ID = "copy_id", u.CHANGE_NICKNAME = "change_nickname"