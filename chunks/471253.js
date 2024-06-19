E.d(n, {
  DT: function() {
    return L
  },
  Ef: function() {
    return Z
  },
  HO: function() {
    return G
  },
  NZ: function() {
    return f
  },
  Pq: function() {
    return g
  },
  Q1: function() {
    return o
  },
  RK: function() {
    return d
  },
  _0: function() {
    return c
  },
  hz: function() {
    return C
  },
  yi: function() {
    return R
  }
});
var t = E(512722),
  _ = E.n(t),
  s = E(149765),
  a = E(544891),
  r = E(493683);
E(749210);
var u = E(911969),
  M = E(367907),
  i = E(944486),
  l = E(979651),
  S = E(700785),
  N = E(922482),
  A = E(192079),
  O = E(706058),
  I = E(590415),
  T = E(981631);

function o(e, n) {
  let E = e.getGuildId();
  return _()(null != E, "This channel cannot be guildless."), n && (0, M.yw)(T.rMx.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, A.s$)(e)
  }), a.tn.patch({
    url: T.ANM.UPDATE_VOICE_STATE(E),
    body: {
      request_to_speak_timestamp: n ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function c(e, n) {
  let E = e.getGuildId();
  return _()(null != E, "This channel cannot be guildless."), a.tn.patch({
    url: T.ANM.UPDATE_VOICE_STATE(E, n),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function d(e, n) {
  let E = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    t = null == e ? void 0 : e.getGuildId();
  _()(null != t, "This channel cannot be guildless.");
  let s = l.Z.getVoiceStateForChannel(e.id);
  return (0, I.gf)(s) === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !n && (0, M.yw)(T.rMx.PROMOTED_TO_SPEAKER, {
    ...(0, A.s$)(e)
  }), a.tn.patch({
    url: T.ANM.UPDATE_VOICE_STATE(t),
    body: {
      suppress: n,
      request_to_speak_timestamp: null,
      channel_id: e.id,
      ...E ? {
        silent: E
      } : {}
    }
  })
}

function R(e) {
  let n = null == e ? void 0 : e.getGuildId();
  return _()(null != n, "This channel cannot be guildless."), a.tn.patch({
    url: T.ANM.UPDATE_VOICE_STATE(n),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function L(e, n, E) {
  let t = e.getGuildId();
  return _()(null != t, "This channel cannot be guildless."), a.tn.patch({
    url: T.ANM.UPDATE_VOICE_STATE(t, n),
    body: {
      suppress: E,
      channel_id: e.id
    }
  })
}

function C(e, n) {
  if (null == n || null == e) return;
  let E = n.getGuildId();
  return _()(null != E, "This channel cannot be guildless."), L(n, e.id, !0), a.tn.patch({
    url: T.ANM.UPDATE_VOICE_STATE(E, e.id),
    body: {
      suppress: !0,
      channel_id: n.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function g(e, n, E) {
  let t = e.getGuildId();
  _()(null != t, "Channel cannot be guildless");
  let a = e.permissionOverwrites[t],
    M = {
      id: t,
      type: u.BN.ROLE,
      allow: S.Hn,
      deny: S.Hn,
      ...a
    };
  E ? (M.allow = s.IH(M.allow, n), M.deny = s.Od(M.deny, n)) : (M.allow = s.Od(M.allow, n), M.deny = s.IH(M.deny, n)), r.Z.updatePermissionOverwrite(e.id, M)
}
async function G(e, n, E, t) {
  if ("" === n) return;
  i.Z.getVoiceChannelId() !== e.id && (0, N.TM)(e);
  let _ = await (0, O.me)(e.id, n, E, t);
  return d(e, !1, !0), _
}
async function Z(e, n, E) {
  if ("" !== n) return await (0, O.Dk)(e.id, n, E)
}
async function f(e) {
  await (0, O.Ix)(e.id)
}