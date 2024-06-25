t.d(n, {
  BG: function() {
    return T
  },
  aY: function() {
    return l
  },
  dW: function() {
    return N
  },
  gm: function() {
    return I
  },
  h1: function() {
    return A
  },
  jQ: function() {
    return u
  },
  sE: function() {
    return S
  }
});
var i, r, l, u, a = t(470079),
  o = t(100527),
  s = t(367907),
  d = t(314897),
  c = t(626135),
  E = t(981631);

function _(e, n, t) {
  var i;
  let r = {
    ...n,
    ...(0, s.hH)(null !== (i = n.guild_id) && void 0 !== i ? i : t)
  };
  c.default.track(e, r)
}

function I(e) {
  return a.useCallback(n => {
    ! function(e) {
      let n = {
        guild_id: e,
        location: o.Z.MEMBER_SAFETY_PAGE
      };
      _(E.rMx.MOD_DASH_SEARCH_MEMBERS, n)
    }(e)
  }, [e])
}

function T(e) {
  return a.useCallback(n => {
    ! function(e, n) {
      let t = {
        selected_role_count: n.size,
        guild_id: e,
        location: o.Z.MEMBER_SAFETY_PAGE
      };
      _(E.rMx.MOD_DASH_FILTER_ROLES, t)
    }(e, n)
  }, [e])
}(i = l || (l = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

function N(e) {
  return a.useCallback(n => {
    ! function(e, n) {
      let t = {
        flag_type: n,
        guild_id: e,
        location: o.Z.MEMBER_SAFETY_PAGE
      };
      _(E.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t)
    }(e, n)
  }, [e])
}

function S(e, n) {
  let {
    location: t,
    targetUserId: i,
    targets: r,
    locations: l
  } = n;
  return a.useCallback(n => {
    let u = {
      action_type: n,
      mod_user_id: d.default.getId(),
      guild_id: e,
      location: t,
      locations: l,
      target_user_id: null != i ? i : void 0,
      targets: null != r ? r : void 0
    };
    _(E.rMx.MODERATION_ACTION, u)
  }, [e, t, i, r, l])
}

function A(e, n) {
  _(E.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: e,
    location: n
  })
}(r = u || (u = {})).BAN = "ban", r.KICK = "kick", r.MUTE = "mute", r.TIMEOUT = "timeout", r.ADD_ROLE = "add_role", r.REMOVE_ROLE = "remove_role", r.COPY_ID = "copy_id", r.CHANGE_NICKNAME = "change_nickname"