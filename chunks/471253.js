"use strict";
n.r(t), n.d(t, {
  audienceAckRequestToSpeak: function() {
    return b
  },
  editStage: function() {
    return A
  },
  endStage: function() {
    return O
  },
  inviteUserToStage: function() {
    return v
  },
  moveSelfToAudience: function() {
    return m
  },
  moveUserToAudience: function() {
    return g
  },
  setEveryoneRolePermissionAllowed: function() {
    return y
  },
  setUserSuppress: function() {
    return I
  },
  startStage: function() {
    return R
  },
  toggleRequestToSpeak: function() {
    return S
  }
});
var r = n("512722"),
  i = n.n(r),
  s = n("149765"),
  l = n("544891"),
  a = n("493683");
n("749210");
var u = n("911969"),
  o = n("367907"),
  d = n("944486"),
  c = n("979651"),
  _ = n("700785"),
  f = n("922482"),
  p = n("192079"),
  E = n("706058"),
  T = n("590415"),
  h = n("981631");

function S(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(h.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, p.getStageChannelMetadata)(e)
  }), l.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function v(e, t) {
  let n = e.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), l.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function b(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null == e ? void 0 : e.getGuildId();
  i()(null != r, "This channel cannot be guildless.");
  let s = c.default.getVoiceStateForChannel(e.id);
  return (0, T.getAudienceRequestToSpeakState)(s) === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(h.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, p.getStageChannelMetadata)(e)
  }), l.HTTP.patch({
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
  return i()(null != t, "This channel cannot be guildless."), l.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function I(e, t, n) {
  let r = e.getGuildId();
  return i()(null != r, "This channel cannot be guildless."), l.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(r, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function g(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return i()(null != n, "This channel cannot be guildless."), I(t, e.id, !0), l.HTTP.patch({
    url: h.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function y(e, t, n) {
  let r = e.getGuildId();
  i()(null != r, "Channel cannot be guildless");
  let l = e.permissionOverwrites[r],
    o = {
      id: r,
      type: u.PermissionOverwriteType.ROLE,
      allow: _.NONE,
      deny: _.NONE,
      ...l
    };
  n ? (o.allow = s.add(o.allow, t), o.deny = s.remove(o.deny, t)) : (o.allow = s.remove(o.allow, t), o.deny = s.add(o.deny, t)), a.default.updatePermissionOverwrite(e.id, o)
}
async function R(e, t, n, r) {
  if ("" === t) return;
  d.default.getVoiceChannelId() !== e.id && (0, f.connectToStage)(e);
  let i = await (0, E.startStageInstance)(e.id, t, n, r);
  return b(e, !1, !0), i
}
async function A(e, t, n) {
  if ("" !== t) return await (0, E.updateStageInstance)(e.id, t, n)
}
async function O(e) {
  await (0, E.endStageInstance)(e.id)
}