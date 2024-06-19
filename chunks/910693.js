e.d(_, {
  BG: function() {
    return U
  },
  aY: function() {
    return I
  },
  dW: function() {
    return l
  },
  gm: function() {
    return S
  },
  h1: function() {
    return G
  },
  jQ: function() {
    return A
  },
  sE: function() {
    return O
  }
});
var T, s, I, A, n = e(470079),
  N = e(100527),
  t = e(367907),
  r = e(314897),
  a = e(626135),
  L = e(981631);

function D(E, _, e) {
  var T;
  let s = {
    ..._,
    ...(0, t.hH)(null !== (T = _.guild_id) && void 0 !== T ? T : e)
  };
  a.default.track(E, s)
}

function S(E) {
  return n.useCallback(_ => {
    ! function(E) {
      let _ = {
        guild_id: E,
        location: N.Z.MEMBER_SAFETY_PAGE
      };
      D(L.rMx.MOD_DASH_SEARCH_MEMBERS, _)
    }(E)
  }, [E])
}

function U(E) {
  return n.useCallback(_ => {
    ! function(E, _) {
      let e = {
        selected_role_count: _.size,
        guild_id: E,
        location: N.Z.MEMBER_SAFETY_PAGE
      };
      D(L.rMx.MOD_DASH_FILTER_ROLES, e)
    }(E, _)
  }, [E])
}(T = I || (I = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", T.COMMUNICATION_DISABLED = "communication_disabled", T.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", T.USERNAME_QUARANTINED = "username_quarantined";

function l(E) {
  return n.useCallback(_ => {
    ! function(E, _) {
      let e = {
        flag_type: _,
        guild_id: E,
        location: N.Z.MEMBER_SAFETY_PAGE
      };
      D(L.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, e)
    }(E, _)
  }, [E])
}

function O(E, _) {
  let {
    location: e,
    targetUserId: T,
    targets: s,
    locations: I
  } = _;
  return n.useCallback(_ => {
    let A = {
      action_type: _,
      mod_user_id: r.default.getId(),
      guild_id: E,
      location: e,
      locations: I,
      target_user_id: null != T ? T : void 0,
      targets: null != s ? s : void 0
    };
    D(L.rMx.MODERATION_ACTION, A)
  }, [E, e, T, s, I])
}

function G(E, _) {
  D(L.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
    guild_id: E,
    location: _
  })
}(s = A || (A = {})).BAN = "ban", s.KICK = "kick", s.MUTE = "mute", s.TIMEOUT = "timeout", s.ADD_ROLE = "add_role", s.REMOVE_ROLE = "remove_role", s.COPY_ID = "copy_id", s.CHANGE_NICKNAME = "change_nickname"