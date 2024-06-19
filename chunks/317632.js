n(47120);
var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(823379),
  u = n(981631);
let d = [],
  E = {},
  _ = null,
  I = 0;

function T(e) {
  let t = null;
  try {
    t = JSON.parse(e.launch_parameters)
  } catch {
    return null
  }
  if (e.platform_type === u.ABu.XBOX) {
    let n = null == t ? void 0 : t.titleId,
      s = null == t ? void 0 : t.inviteToken;
    return null == n || null == s ? null : {
      ...e,
      parsed_launch_parameters: {
        titleId: n,
        inviteToken: s
      }
    }
  }
  return null
}
class N extends(s = r.ZP.Store) {
  getInvites() {
    return d
  }
  getInviteStatuses() {
    return E
  }
  isInviteGameInstalled(e) {
    var t;
    return null === (t = E[e.invite_id]) || void 0 === t ? void 0 : t.installed
  }
  isInviteJoinable(e) {
    var t;
    return null === (t = E[e.invite_id]) || void 0 === t ? void 0 : t.joinable
  }
  getLastUnseenInvite() {
    return _
  }
  getUnseenInviteCount() {
    return I
  }
}
a = "GameInviteStore", (l = "displayName") in(i = N) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new N(o.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      gameInvites: t
    } = e;
    d = t.map(T).filter(c.lm)
  },
  GAME_INVITE_CREATE: function(e) {
    let {
      gameInvite: t
    } = e, n = T(t);
    null != n && (d = [n, ...d], _ = t, I += 1)
  },
  GAME_INVITE_DELETE: function(e) {
    let {
      inviteId: t
    } = e;
    d = d.filter(e => e.invite_id !== t)
  },
  GAME_INVITE_DELETE_MANY: function(e) {
    let {
      inviteIds: t
    } = e;
    d = d.filter(e => !t.includes(e.invite_id))
  },
  GAME_INVITE_UPDATE_STATUS: function(e) {
    (E = {
      ...E
    })[e.inviteId] = {
      installed: e.installed,
      joinable: e.joinable
    }
  },
  GAME_INVITE_CLEAR_UNSEEN: function(e) {
    _ = null, I = 0
  }
})