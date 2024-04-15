"use strict";
n.r(t), n.d(t, {
  audienceAckRequestToSpeak: function() {
    return A
  },
  editStage: function() {
    return O
  },
  endStage: function() {
    return y
  },
  inviteUserToStage: function() {
    return C
  },
  moveSelfToAudience: function() {
    return g
  },
  moveUserToAudience: function() {
    return v
  },
  setEveryoneRolePermissionAllowed: function() {
    return N
  },
  setUserSuppress: function() {
    return I
  },
  startStage: function() {
    return R
  },
  toggleRequestToSpeak: function() {
    return h
  }
});
var i = n("512722"),
  a = n.n(i),
  l = n("149765"),
  r = n("544891"),
  o = n("493683");
n("749210");
var s = n("911969"),
  u = n("367907"),
  d = n("944486"),
  c = n("979651"),
  _ = n("700785"),
  E = n("922482"),
  T = n("192079"),
  p = n("706058"),
  S = n("590415"),
  f = n("981631");

function h(e, t) {
  let n = e.getGuildId();
  return a()(null != n, "This channel cannot be guildless."), t && (0, u.trackWithMetadata)(f.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, T.getStageChannelMetadata)(e)
  }), r.HTTP.patch({
    url: f.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function C(e, t) {
  let n = e.getGuildId();
  return a()(null != n, "This channel cannot be guildless."), r.HTTP.patch({
    url: f.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = null == e ? void 0 : e.getGuildId();
  a()(null != i, "This channel cannot be guildless.");
  let l = c.default.getVoiceStateForChannel(e.id);
  return (0, S.getAudienceRequestToSpeakState)(l) === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, u.trackWithMetadata)(f.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, T.getStageChannelMetadata)(e)
  }), r.HTTP.patch({
    url: f.Endpoints.UPDATE_VOICE_STATE(i),
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

function g(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return a()(null != t, "This channel cannot be guildless."), r.HTTP.patch({
    url: f.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function I(e, t, n) {
  let i = e.getGuildId();
  return a()(null != i, "This channel cannot be guildless."), r.HTTP.patch({
    url: f.Endpoints.UPDATE_VOICE_STATE(i, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function v(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return a()(null != n, "This channel cannot be guildless."), I(t, e.id, !0), r.HTTP.patch({
    url: f.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function N(e, t, n) {
  let i = e.getGuildId();
  a()(null != i, "Channel cannot be guildless");
  let r = e.permissionOverwrites[i],
    u = {
      id: i,
      type: s.PermissionOverwriteType.ROLE,
      allow: _.NONE,
      deny: _.NONE,
      ...r
    };
  n ? (u.allow = l.add(u.allow, t), u.deny = l.remove(u.deny, t)) : (u.allow = l.remove(u.allow, t), u.deny = l.add(u.deny, t)), o.default.updatePermissionOverwrite(e.id, u)
}
async function R(e, t, n, i) {
  if ("" === t) return;
  d.default.getVoiceChannelId() !== e.id && (0, E.connectToStage)(e);
  let a = await (0, p.startStageInstance)(e.id, t, n, i);
  return A(e, !1, !0), a
}
async function O(e, t, n) {
  if ("" !== t) return await (0, p.updateStageInstance)(e.id, t, n)
}
async function y(e) {
  await (0, p.endStageInstance)(e.id)
}