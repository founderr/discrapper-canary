"use strict";
n.r(t), n.d(t, {
  MemberSafetyFlagType: function() {
    return a
  },
  ModerationActionType: function() {
    return i
  },
  trackMembersPageViewed: function() {
    return S
  },
  useTrackMemberFilterRolesUsed: function() {
    return A
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return M
  },
  useTrackMemberSearchUsed: function() {
    return E
  },
  useTrackModerationAction: function() {
    return T
  }
});
var u, l, a, i, o = n("470079"),
  r = n("100527"),
  s = n("367907"),
  c = n("314897"),
  d = n("626135"),
  f = n("981631");

function _(e, t, n) {
  var u;
  let l = {
    ...t,
    ...(0, s.collectGuildAnalyticsMetadata)(null !== (u = t.guild_id) && void 0 !== u ? u : n)
  };
  d.default.track(e, l)
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

function A(e) {
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
}(u = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", u.COMMUNICATION_DISABLED = "communication_disabled", u.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", u.USERNAME_QUARANTINED = "username_quarantined";

function M(e) {
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

function T(e, t) {
  let {
    location: n,
    targetUserId: u,
    targets: l,
    locations: a
  } = t;
  return o.useCallback(t => {
    let i = {
      action_type: t,
      mod_user_id: c.default.getId(),
      guild_id: e,
      location: n,
      locations: a,
      target_user_id: null != u ? u : void 0,
      targets: null != l ? l : void 0
    };
    _(f.AnalyticEvents.MODERATION_ACTION, i)
  }, [e, n, u, l, a])
}

function S(e, t) {
  _(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(l = i || (i = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"