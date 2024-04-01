"use strict";
n.r(t), n.d(t, {
  acceptInvite: function() {
    return d
  },
  clearUnseenInvites: function() {
    return c
  },
  deleteAllInvites: function() {
    return h
  },
  deleteInvite: function() {
    return f
  },
  launchInviteGame: function() {
    return u
  },
  updateInviteStatus: function() {
    return o
  }
}), n("411104");
var a = n("544891"),
  l = n("570140"),
  s = n("439849"),
  i = n("358085"),
  r = n("981631");
async function o(e) {
  if (e.platform_type === r.PlatformTypes.XBOX) {
    let t = e.parsed_launch_parameters.titleId,
      n = e.parsed_launch_parameters.inviteToken;
    if (!(0, i.isWindows)() || null == t || null == n) return;
    let a = await E(t, !1),
      s = await p(n);
    l.default.dispatch({
      type: "GAME_INVITE_UPDATE_STATUS",
      inviteId: e.invite_id,
      installed: a,
      joinable: s
    })
  } else throw Error("Unsupported invite platform " + e.platform_type)
}
async function u(e) {
  if (e.platform_type === r.PlatformTypes.XBOX) {
    let t = e.parsed_launch_parameters.titleId;
    return !!(0, i.isWindows)() && null != t && await m(t)
  }
  throw Error("Unsupported invite platform " + e.platform_type)
}
async function d(e) {
  if (e.platform_type === r.PlatformTypes.XBOX) {
    let t = e.parsed_launch_parameters.inviteToken;
    return !!(0, i.isWindows)() && null != t && await S(t)
  }
  throw Error("Unsupported invite platform " + e.platform_type)
}

function c() {
  l.default.dispatch({
    type: "GAME_INVITE_CLEAR_UNSEEN"
  })
}
async function f(e) {
  await a.HTTP.del({
    url: r.Endpoints.GAME_INVITE(e.invite_id)
  })
}
async function h() {
  await a.HTTP.del({
    url: r.Endpoints.GAME_INVITES
  })
}
async function E(e, t) {
  if (!(0, i.isWindows)()) return !1;
  let n = await (0, s.default)();
  return new Promise((a, l) => {
    if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
      l(Error("Game utils module not loaded"));
      return
    }
    n.xboxIsApplicationInstalled(e, t, e => {
      a(e)
    })
  })
}
async function m(e) {
  if (!(0, i.isWindows)()) return !1;
  let t = await (0, s.default)();
  return new Promise((n, a) => {
    if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
      a(Error("Game utils module not loaded"));
      return
    }
    t.xboxLaunchGame(e, e => {
      n(e)
    })
  })
}
async function p(e) {
  if (!(0, i.isWindows)()) return !1;
  let t = await (0, s.default)();
  return new Promise((n, a) => {
    if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
      a(Error("Game utils module not loaded"));
      return
    }
    t.xboxIsInviteTokenValid(e, e => {
      n(e)
    })
  })
}
async function S(e) {
  if (!(0, i.isWindows)()) return !1;
  let t = await (0, s.default)();
  return new Promise((n, a) => {
    if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
      a(Error("Game utils module not loaded"));
      return
    }
    t.xboxAcceptGameInvite(e, e => {
      n(e)
    })
  })
}