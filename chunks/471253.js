t.d(n, {
  DT: function() {
    return L
  },
  Ef: function() {
    return Z
  },
  HO: function() {
    return g
  },
  NZ: function() {
    return f
  },
  Pq: function() {
    return G
  },
  Q1: function() {
    return T
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
var E = t(512722),
  _ = t.n(E),
  s = t(149765),
  a = t(544891),
  u = t(493683);
t(749210);
var r = t(911969),
  i = t(367907),
  M = t(944486),
  l = t(979651),
  S = t(700785),
  N = t(922482),
  A = t(192079),
  O = t(706058),
  I = t(590415),
  o = t(981631);

function T(e, n) {
  let t = e.getGuildId();
  return _()(null != t, "This channel cannot be guildless."), n && (0, i.yw)(o.rMx.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, A.s$)(e)
  }), a.tn.patch({
    url: o.ANM.UPDATE_VOICE_STATE(t),
    body: {
      request_to_speak_timestamp: n ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function c(e, n) {
  let t = e.getGuildId();
  return _()(null != t, "This channel cannot be guildless."), a.tn.patch({
    url: o.ANM.UPDATE_VOICE_STATE(t, n),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function d(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    E = null == e ? void 0 : e.getGuildId();
  _()(null != E, "This channel cannot be guildless.");
  let s = l.Z.getVoiceStateForChannel(e.id);
  return (0, I.gf)(s) === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !n && (0, i.yw)(o.rMx.PROMOTED_TO_SPEAKER, {
    ...(0, A.s$)(e)
  }), a.tn.patch({
    url: o.ANM.UPDATE_VOICE_STATE(E),
    body: {
      suppress: n,
      request_to_speak_timestamp: null,
      channel_id: e.id,
      ...t ? {
        silent: t
      } : {}
    }
  })
}

function R(e) {
  let n = null == e ? void 0 : e.getGuildId();
  return _()(null != n, "This channel cannot be guildless."), a.tn.patch({
    url: o.ANM.UPDATE_VOICE_STATE(n),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function L(e, n, t) {
  let E = e.getGuildId();
  return _()(null != E, "This channel cannot be guildless."), a.tn.patch({
    url: o.ANM.UPDATE_VOICE_STATE(E, n),
    body: {
      suppress: t,
      channel_id: e.id
    }
  })
}

function C(e, n) {
  if (null == n || null == e) return;
  let t = n.getGuildId();
  return _()(null != t, "This channel cannot be guildless."), L(n, e.id, !0), a.tn.patch({
    url: o.ANM.UPDATE_VOICE_STATE(t, e.id),
    body: {
      suppress: !0,
      channel_id: n.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function G(e, n, t) {
  let E = e.getGuildId();
  _()(null != E, "Channel cannot be guildless");
  let a = e.permissionOverwrites[E],
    i = {
      id: E,
      type: r.BN.ROLE,
      allow: S.Hn,
      deny: S.Hn,
      ...a
    };
  t ? (i.allow = s.IH(i.allow, n), i.deny = s.Od(i.deny, n)) : (i.allow = s.Od(i.allow, n), i.deny = s.IH(i.deny, n)), u.Z.updatePermissionOverwrite(e.id, i)
}
async function g(e, n, t, E) {
  if ("" === n) return;
  M.Z.getVoiceChannelId() !== e.id && (0, N.TM)(e);
  let _ = await (0, O.me)(e.id, n, t, E);
  return d(e, !1, !0), _
}
async function Z(e, n, t) {
  if ("" !== n) return await (0, O.Dk)(e.id, n, t)
}
async function f(e) {
  await (0, O.Ix)(e.id)
}