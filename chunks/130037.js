"use strict";
n.r(t), n.d(t, {
  useTrackMemberSearchUsed: function() {
    return h
  },
  useTrackMemberFilterRolesUsed: function() {
    return p
  },
  MemberSafetyFlagType: function() {
    return r
  },
  useTrackMemberFilterSafetyFlagsUsed: function() {
    return _
  },
  ModerationActionType: function() {
    return s
  },
  useTrackModerationAction: function() {
    return v
  },
  trackMembersPageViewed: function() {
    return m
  }
});
var l, i, r, s, o = n("884691"),
  u = n("812204"),
  a = n("716241"),
  c = n("271938"),
  d = n("599110"),
  f = n("49111");

function E(e, t, n) {
  var l;
  let i = {
    ...t,
    ...(0, a.collectGuildAnalyticsMetadata)(null !== (l = t.guild_id) && void 0 !== l ? l : n)
  };
  d.default.track(e, i)
}

function h(e) {
  let t = o.useCallback(t => {
    ! function(e) {
      let t = {
        guild_id: e,
        location: u.default.MEMBER_SAFETY_PAGE
      };
      E(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
    }(e)
  }, [e]);
  return t
}

function p(e) {
  let t = o.useCallback(t => {
    ! function(e, t) {
      let n = {
        selected_role_count: t.size,
        guild_id: e,
        location: u.default.MEMBER_SAFETY_PAGE
      };
      E(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
    }(e, t)
  }, [e]);
  return t
}(l = r || (r = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", l.COMMUNICATION_DISABLED = "communication_disabled", l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", l.USERNAME_QUARANTINED = "username_quarantined";

function _(e) {
  let t = o.useCallback(t => {
    ! function(e, t) {
      let n = {
        flag_type: t,
        guild_id: e,
        location: u.default.MEMBER_SAFETY_PAGE
      };
      E(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
    }(e, t)
  }, [e]);
  return t
}

function v(e, t) {
  let {
    location: n,
    targetUserId: l,
    targets: i,
    locations: r
  } = t, s = o.useCallback(t => {
    let s = {
      action_type: t,
      mod_user_id: c.default.getId(),
      guild_id: e,
      location: n,
      locations: r,
      target_user_id: null != l ? l : void 0,
      targets: null != i ? i : void 0
    };
    E(f.AnalyticEvents.MODERATION_ACTION, s)
  }, [e, n, l, i, r]);
  return s
}

function m(e, t) {
  E(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: t
  })
}(i = s || (s = {})).BAN = "ban", i.KICK = "kick", i.MUTE = "mute", i.TIMEOUT = "timeout", i.ADD_ROLE = "add_role", i.REMOVE_ROLE = "remove_role", i.COPY_ID = "copy_id", i.CHANGE_NICKNAME = "change_nickname"