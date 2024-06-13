"use strict";
n.r(e), n.d(e, {
  MemberSafetyFlagType: function() {
    return r
  },
  ModerationActionType: function() {
    return u
  },
  trackMembersPageViewed: function() {
    return p
  },
  useTrackMemberFilterRolesUsed: function() {
    return c
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return S
  },
  useTrackMemberSearchUsed: function() {
    return _
  },
  useTrackModerationAction: function() {
    return N
  }
});
var i, a, r, u, o = n("470079"),
  d = n("100527"),
  s = n("367907"),
  T = n("314897"),
  E = n("626135"),
  I = n("981631");

function l(t, e, n) {
  var i;
  let a = {
    ...e,
    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = e.guild_id) && void 0 !== i ? i : n)
  };
  E.default.track(t, a)
}

function _(t) {
  return o.useCallback(e => {
    ! function(t) {
      let e = {
        guild_id: t,
        location: d.default.MEMBER_SAFETY_PAGE
      };
      l(I.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, e)
    }(t)
  }, [t])
}

function c(t) {
  return o.useCallback(e => {
    ! function(t, e) {
      let n = {
        selected_role_count: e.size,
        guild_id: t,
        location: d.default.MEMBER_SAFETY_PAGE
      };
      l(I.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
    }(t, e)
  }, [t])
}(i = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

function S(t) {
  return o.useCallback(e => {
    ! function(t, e) {
      let n = {
        flag_type: e,
        guild_id: t,
        location: d.default.MEMBER_SAFETY_PAGE
      };
      l(I.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }(t, e)
  }, [t])
}

function N(t, e) {
  let {
    location: n,
    targetUserId: i,
    targets: a,
    locations: r
  } = e;
  return o.useCallback(e => {
    let u = {
      action_type: e,
      mod_user_id: T.default.getId(),
      guild_id: t,
      location: n,
      locations: r,
      target_user_id: null != i ? i : void 0,
      targets: null != a ? a : void 0
    };
    l(I.AnalyticEvents.MODERATION_ACTION, u)
  }, [t, n, i, a, r])
}

function p(t, e) {
  l(I.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: t,
    location: e
  })
}(a = u || (u = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"