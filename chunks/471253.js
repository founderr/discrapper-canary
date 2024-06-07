"use strict";
n.r(t), n.d(t, {
  audienceAckRequestToSpeak: function() {
    return h
  },
  editStage: function() {
    return m
  },
  endStage: function() {
    return v
  },
  inviteUserToStage: function() {
    return T
  },
  moveSelfToAudience: function() {
    return C
  },
  moveUserToAudience: function() {
    return A
  },
  setEveryoneRolePermissionAllowed: function() {
    return I
  },
  setUserSuppress: function() {
    return N
  },
  startStage: function() {
    return O
  },
  toggleRequestToSpeak: function() {
    return p
  }
});
var i = n("512722"),
  s = n.n(i),
  a = n("149765"),
  r = n("544891"),
  l = n("493683");
n("749210");
var u = n("911969"),
  o = n("367907"),
  c = n("944486"),
  d = n("979651"),
  f = n("700785"),
  L = n("922482"),
  E = n("192079"),
  _ = n("706058"),
  S = n("590415"),
  g = n("981631");

function p(e, t) {
  let n = e.getGuildId();
  return s()(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, E.getStageChannelMetadata)(e)
  }), r.HTTP.patch({
    url: g.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function T(e, t) {
  let n = e.getGuildId();
  return s()(null != n, "This channel cannot be guildless."), r.HTTP.patch({
    url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function h(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = null == e ? void 0 : e.getGuildId();
  s()(null != i, "This channel cannot be guildless.");
  let a = d.default.getVoiceStateForChannel(e.id);
  return (0, S.getAudienceRequestToSpeakState)(a) === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, E.getStageChannelMetadata)(e)
  }), r.HTTP.patch({
    url: g.Endpoints.UPDATE_VOICE_STATE(i),
    body: {
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id,
      ...n ? {
        silent: n
      } : {}
    }
  })
}

function C(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return s()(null != t, "This channel cannot be guildless."), r.HTTP.patch({
    url: g.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function N(e, t, n) {
  let i = e.getGuildId();
  return s()(null != i, "This channel cannot be guildless."), r.HTTP.patch({
    url: g.Endpoints.UPDATE_VOICE_STATE(i, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function A(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return s()(null != n, "This channel cannot be guildless."), N(t, e.id, !0), r.HTTP.patch({
    url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function I(e, t, n) {
  let i = e.getGuildId();
  s()(null != i, "Channel cannot be guildless");
  let r = e.permissionOverwrites[i],
    o = {
      id: i,
      type: u.PermissionOverwriteType.ROLE,
      allow: f.NONE,
      deny: f.NONE,
      ...r
    };
  n ? (o.allow = a.add(o.allow, t), o.deny = a.remove(o.deny, t)) : (o.allow = a.remove(o.allow, t), o.deny = a.add(o.deny, t)), l.default.updatePermissionOverwrite(e.id, o)
}
async function O(e, t, n, i) {
  if ("" === t) return;
  c.default.getVoiceChannelId() !== e.id && (0, L.connectToStage)(e);
  let s = await (0, _.startStageInstance)(e.id, t, n, i);
  return h(e, !1, !0), s
}
async function m(e, t, n) {
  if ("" !== t) return await (0, _.updateStageInstance)(e.id, t, n)
}
async function v(e) {
  await (0, _.endStageInstance)(e.id)
}