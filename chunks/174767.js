n.d(t, {
  Br: function() {
    return o
  },
  MH: function() {
    return c
  },
  Ol: function() {
    return u
  },
  TG: function() {
    return _
  },
  UF: function() {
    return E
  },
  sJ: function() {
    return d
  }
}), n(411104);
var s = n(544891),
  i = n(570140),
  l = n(439849),
  a = n(358085),
  r = n(981631);
async function o(e) {
  if (e.platform_type === r.ABu.XBOX) {
    let t = e.parsed_launch_parameters.titleId,
      n = e.parsed_launch_parameters.inviteToken;
    if (!(0, a.isWindows)() || null == t || null == n) return;
    let s = await I(t, !1),
      l = await N(n);
    i.Z.dispatch({
      type: "GAME_INVITE_UPDATE_STATUS",
      inviteId: e.invite_id,
      installed: s,
      joinable: l
    })
  } else throw Error("Unsupported invite platform " + e.platform_type)
}
async function c(e) {
  if (e.platform_type === r.ABu.XBOX) {
    let t = e.parsed_launch_parameters.titleId;
    return !!(0, a.isWindows)() && null != t && await T(t)
  }
  throw Error("Unsupported invite platform " + e.platform_type)
}
async function u(e) {
  if (e.platform_type === r.ABu.XBOX) {
    let t = e.parsed_launch_parameters.inviteToken;
    return !!(0, a.isWindows)() && null != t && await m(t)
  }
  throw Error("Unsupported invite platform " + e.platform_type)
}

function d() {
  i.Z.dispatch({
    type: "GAME_INVITE_CLEAR_UNSEEN"
  })
}
async function E(e) {
  await s.tn.del({
    url: r.ANM.GAME_INVITE(e.invite_id)
  })
}
async function _() {
  await s.tn.del({
    url: r.ANM.GAME_INVITES
  })
}
async function I(e, t) {
  if (!(0, a.isWindows)()) return !1;
  let n = await (0, l.Z)();
  return new Promise((s, i) => {
    if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
      i(Error("Game utils module not loaded"));
      return
    }
    n.xboxIsApplicationInstalled(e, t, e => {
      s(e)
    })
  })
}
async function T(e) {
  if (!(0, a.isWindows)()) return !1;
  let t = await (0, l.Z)();
  return new Promise((n, s) => {
    if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
      s(Error("Game utils module not loaded"));
      return
    }
    t.xboxLaunchGame(e, e => {
      n(e)
    })
  })
}
async function N(e) {
  if (!(0, a.isWindows)()) return !1;
  let t = await (0, l.Z)();
  return new Promise((n, s) => {
    if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
      s(Error("Game utils module not loaded"));
      return
    }
    t.xboxIsInviteTokenValid(e, e => {
      n(e)
    })
  })
}
async function m(e) {
  if (!(0, a.isWindows)()) return !1;
  let t = await (0, l.Z)();
  return new Promise((n, s) => {
    if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
      s(Error("Game utils module not loaded"));
      return
    }
    t.xboxAcceptGameInvite(e, e => {
      n(e)
    })
  })
}