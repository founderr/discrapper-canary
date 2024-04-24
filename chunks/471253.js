"use strict";
n.r(t), n.d(t, {
  audienceAckRequestToSpeak: function() {
    return R
  },
  editStage: function() {
    return O
  },
  endStage: function() {
    return y
  },
  inviteUserToStage: function() {
    return g
  },
  moveSelfToAudience: function() {
    return m
  },
  moveUserToAudience: function() {
    return I
  },
  setEveryoneRolePermissionAllowed: function() {
    return v
  },
  setUserSuppress: function() {
    return b
  },
  startStage: function() {
    return A
  },
  toggleRequestToSpeak: function() {
    return S
  }
});
var r = n("512722"),
  i = n.n(r),
  s = n("149765"),
  a = n("544891"),
  l = n("493683");
n("749210");
var u = n("911969"),
  o = n("367907"),
  d = n("944486"),
  c = n("979651"),
  f = n("700785"),
  E = n("922482"),
  _ = n("192079"),
  p = n("706058"),
  T = n("590415"),
  h = n("981631");

function S(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(h.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, _.getStageChannelMetadata)(e)
  }), a.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function g(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), a.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function R(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null == e ? void 0 : e.getGuildId();
  i()(null != r, "This channel cannot be guildless.");
  let s = c.default.getVoiceStateForChannel(e.id);
  return (0, T.getAudienceRequestToSpeakState)(s) === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(h.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, _.getStageChannelMetadata)(e)
  }), a.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(r),
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

function m(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return i()(null != t, "This channel cannot be guildless."), a.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function b(e, t, n) {
  let r = e.getGuildId();
  return i()(null != r, "This channel cannot be guildless."), a.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(r, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function I(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), b(t, e.id, !0), a.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function v(e, t, n) {
  let r = e.getGuildId();
  i()(null != r, "Channel cannot be guildless");
  let a = e.permissionOverwrites[r],
    o = {
      id: r,
      type: u.PermissionOverwriteType.ROLE,
      allow: f.NONE,
      deny: f.NONE,
      ...a
    };
  n ? (o.allow = s.add(o.allow, t), o.deny = s.remove(o.deny, t)) : (o.allow = s.remove(o.allow, t), o.deny = s.add(o.deny, t)), l.default.updatePermissionOverwrite(e.id, o)
}
async function A(e, t, n, r) {
  if ("" === t) return;
  d.default.getVoiceChannelId() !== e.id && (0, E.connectToStage)(e);
  let i = await (0, p.startStageInstance)(e.id, t, n, r);
  return R(e, !1, !0), i
}
async function O(e, t, n) {
  if ("" !== t) return await (0, p.updateStageInstance)(e.id, t, n)
}
async function y(e) {
  await (0, p.endStageInstance)(e.id)
}