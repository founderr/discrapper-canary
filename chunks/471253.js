"use strict";
n.r(t), n.d(t, {
  audienceAckRequestToSpeak: function() {
    return h
  },
  editStage: function() {
    return v
  },
  endStage: function() {
    return O
  },
  inviteUserToStage: function() {
    return g
  },
  moveSelfToAudience: function() {
    return C
  },
  moveUserToAudience: function() {
    return A
  },
  setEveryoneRolePermissionAllowed: function() {
    return R
  },
  setUserSuppress: function() {
    return N
  },
  startStage: function() {
    return M
  },
  toggleRequestToSpeak: function() {
    return I
  }
});
var a = n("512722"),
  s = n.n(a),
  i = n("149765"),
  l = n("544891"),
  r = n("493683");
n("749210");
var o = n("911969"),
  u = n("367907"),
  c = n("944486"),
  d = n("979651"),
  T = n("700785"),
  E = n("922482"),
  _ = n("192079"),
  f = n("706058"),
  S = n("590415"),
  p = n("981631");

function I(e, t) {
  let n = e.getGuildId();
  return s()(null != n, "This channel cannot be guildless."), t && (0, u.trackWithMetadata)(p.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, _.getStageChannelMetadata)(e)
  }), l.HTTP.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function g(e, t) {
  let n = e.getGuildId();
  return s()(null != n, "This channel cannot be guildless."), l.HTTP.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function h(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = null == e ? void 0 : e.getGuildId();
  s()(null != a, "This channel cannot be guildless.");
  let i = d.default.getVoiceStateForChannel(e.id);
  return (0, S.getAudienceRequestToSpeakState)(i) === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, u.trackWithMetadata)(p.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, _.getStageChannelMetadata)(e)
  }), l.HTTP.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(a),
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
  return s()(null != t, "This channel cannot be guildless."), l.HTTP.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function N(e, t, n) {
  let a = e.getGuildId();
  return s()(null != a, "This channel cannot be guildless."), l.HTTP.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(a, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function A(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return s()(null != n, "This channel cannot be guildless."), N(t, e.id, !0), l.HTTP.patch({
    url: p.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function R(e, t, n) {
  let a = e.getGuildId();
  s()(null != a, "Channel cannot be guildless");
  let l = e.permissionOverwrites[a],
    u = {
      id: a,
      type: o.PermissionOverwriteType.ROLE,
      allow: T.NONE,
      deny: T.NONE,
      ...l
    };
  n ? (u.allow = i.add(u.allow, t), u.deny = i.remove(u.deny, t)) : (u.allow = i.remove(u.allow, t), u.deny = i.add(u.deny, t)), r.default.updatePermissionOverwrite(e.id, u)
}
async function M(e, t, n, a) {
  if ("" === t) return;
  c.default.getVoiceChannelId() !== e.id && (0, E.connectToStage)(e);
  let s = await (0, f.startStageInstance)(e.id, t, n, a);
  return h(e, !1, !0), s
}
async function v(e, t, n) {
  if ("" !== t) return await (0, f.updateStageInstance)(e.id, t, n)
}
async function O(e) {
  await (0, f.endStageInstance)(e.id)
}