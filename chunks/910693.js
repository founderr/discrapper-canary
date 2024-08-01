n.d(t, {
  BG: function() {
return l;
  },
  aY: function() {
return o;
  },
  dW: function() {
return N;
  },
  gm: function() {
return T;
  },
  h1: function() {
return A;
  },
  jQ: function() {
return a;
  },
  sE: function() {
return S;
  }
});
var i, r, o, a, E = n(470079),
  d = n(100527),
  _ = n(367907),
  u = n(314897),
  s = n(626135),
  I = n(981631);

function c(e, t, n) {
  var i;
  let r = {
...t,
...(0, _.hH)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
  };
  s.default.track(e, r);
}

function T(e) {
  return E.useCallback(t => {
! function(e) {
  let t = {
    guild_id: e,
    location: d.Z.MEMBER_SAFETY_PAGE
  };
  c(I.rMx.MOD_DASH_SEARCH_MEMBERS, t);
}(e);
  }, [e]);
}

function l(e) {
  return E.useCallback(t => {
! function(e, t) {
  let n = {
    selected_role_count: t.size,
    guild_id: e,
    location: d.Z.MEMBER_SAFETY_PAGE
  };
  c(I.rMx.MOD_DASH_FILTER_ROLES, n);
}(e, t);
  }, [e]);
}
(i = o || (o = {})).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity', i.COMMUNICATION_DISABLED = 'communication_disabled', i.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity', i.USERNAME_QUARANTINED = 'username_quarantined';

function N(e) {
  return E.useCallback(t => {
! function(e, t) {
  let n = {
    flag_type: t,
    guild_id: e,
    location: d.Z.MEMBER_SAFETY_PAGE
  };
  c(I.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n);
}(e, t);
  }, [e]);
}

function S(e, t) {
  let {
location: n,
targetUserId: i,
targets: r,
locations: o
  } = t;
  return E.useCallback(t => {
let a = {
  action_type: t,
  mod_user_id: u.default.getId(),
  guild_id: e,
  location: n,
  locations: o,
  target_user_id: null != i ? i : void 0,
  targets: null != r ? r : void 0
};
c(I.rMx.MODERATION_ACTION, a);
  }, [
e,
n,
i,
r,
o
  ]);
}

function A(e, t) {
  c(I.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
guild_id: e,
location: t
  });
}
(r = a || (a = {})).BAN = 'ban', r.KICK = 'kick', r.MUTE = 'mute', r.TIMEOUT = 'timeout', r.ADD_ROLE = 'add_role', r.REMOVE_ROLE = 'remove_role', r.COPY_ID = 'copy_id', r.CHANGE_NICKNAME = 'change_nickname';