t.d(e, {
  DT: function() {
return M;
  },
  Ef: function() {
return C;
  },
  HO: function() {
return R;
  },
  NZ: function() {
return y;
  },
  Pq: function() {
return p;
  },
  Q1: function() {
return I;
  },
  RK: function() {
return N;
  },
  _0: function() {
return O;
  },
  hz: function() {
return g;
  },
  yi: function() {
return h;
  }
});
var i = t(512722),
  u = t.n(i),
  l = t(149765),
  r = t(544891),
  a = t(493683);
t(749210);
var s = t(911969),
  d = t(367907),
  c = t(944486),
  o = t(979651),
  _ = t(700785),
  E = t(922482),
  T = t(192079),
  f = t(706058),
  S = t(590415),
  A = t(981631);

function I(n, e) {
  let t = n.getGuildId();
  return u()(null != t, 'This channel cannot be guildless.'), e && (0, d.yw)(A.rMx.REQUEST_TO_SPEAK_INITIATED, {
...(0, T.s$)(n)
  }), r.tn.patch({
url: A.ANM.UPDATE_VOICE_STATE(t),
body: {
  request_to_speak_timestamp: e ? new Date().toISOString() : null,
  channel_id: n.id
}
  });
}

function O(n, e) {
  let t = n.getGuildId();
  return u()(null != t, 'This channel cannot be guildless.'), r.tn.patch({
url: A.ANM.UPDATE_VOICE_STATE(t, e),
body: {
  suppress: !1,
  request_to_speak_timestamp: new Date().toISOString(),
  channel_id: n.id
}
  });
}

function N(n, e) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
i = null == n ? void 0 : n.getGuildId();
  u()(null != i, 'This channel cannot be guildless.');
  let l = o.Z.getVoiceStateForChannel(n.id);
  return (0, S.gf)(l) === S.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !e && (0, d.yw)(A.rMx.PROMOTED_TO_SPEAKER, {
...(0, T.s$)(n)
  }), r.tn.patch({
url: A.ANM.UPDATE_VOICE_STATE(i),
body: {
  suppress: e,
  request_to_speak_timestamp: null,
  channel_id: n.id,
  ...t ? {
    silent: t
  } : {}
}
  });
}

function h(n) {
  let e = null == n ? void 0 : n.getGuildId();
  return u()(null != e, 'This channel cannot be guildless.'), r.tn.patch({
url: A.ANM.UPDATE_VOICE_STATE(e),
body: {
  suppress: !0,
  channel_id: n.id,
  self_video: !1,
  self_stream: !1
}
  });
}

function M(n, e, t) {
  let i = n.getGuildId();
  return u()(null != i, 'This channel cannot be guildless.'), r.tn.patch({
url: A.ANM.UPDATE_VOICE_STATE(i, e),
body: {
  suppress: t,
  channel_id: n.id
}
  });
}

function g(n, e) {
  if (null == e || null == n)
return;
  let t = e.getGuildId();
  return u()(null != t, 'This channel cannot be guildless.'), M(e, n.id, !0), r.tn.patch({
url: A.ANM.UPDATE_VOICE_STATE(t, n.id),
body: {
  suppress: !0,
  channel_id: e.id,
  self_video: !1,
  self_stream: !1
}
  });
}

function p(n, e, t) {
  let i = n.getGuildId();
  u()(null != i, 'Channel cannot be guildless');
  let r = n.permissionOverwrites[i],
d = {
  id: i,
  type: s.BN.ROLE,
  allow: _.Hn,
  deny: _.Hn,
  ...r
};
  t ? (d.allow = l.IH(d.allow, e), d.deny = l.Od(d.deny, e)) : (d.allow = l.Od(d.allow, e), d.deny = l.IH(d.deny, e)), a.Z.updatePermissionOverwrite(n.id, d);
}
async function R(n, e, t, i) {
  if ('' === e)
return;
  c.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
  let u = await (0, f.me)(n.id, e, t, i);
  return N(n, !1, !0), u;
}
async function C(n, e, t) {
  if ('' !== e)
return await (0, f.Dk)(n.id, e, t);
}
async function y(n) {
  await (0, f.Ix)(n.id);
}