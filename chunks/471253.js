"use strict";
n.r(t), n.d(t, {
  audienceAckRequestToSpeak: function() {
    return v
  },
  editStage: function() {
    return y
  },
  endStage: function() {
    return P
  },
  inviteUserToStage: function() {
    return g
  },
  moveSelfToAudience: function() {
    return m
  },
  moveUserToAudience: function() {
    return b
  },
  setEveryoneRolePermissionAllowed: function() {
    return A
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
var i = n("512722"),
  r = n.n(i),
  s = n("149765"),
  a = n("544891"),
  l = n("493683");
n("749210");
var u = n("911969"),
  o = n("367907"),
  c = n("944486"),
  d = n("979651"),
  f = n("700785"),
  p = n("922482"),
  E = n("192079"),
  T = n("706058"),
  h = n("590415"),
  _ = n("981631");

function S(e, t) {
  let n = e.getGuildId();
  return r()(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(_.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, E.getStageChannelMetadata)(e)
  }), a.HTTP.patch({
    url: _.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function g(e, t) {
  let n = e.getGuildId();
  return r()(null != n, "This channel cannot be guildless."), a.HTTP.patch({
    url: _.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function v(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = null == e ? void 0 : e.getGuildId();
  r()(null != i, "This channel cannot be guildless.");
  let s = d.default.getVoiceStateForChannel(e.id);
  return (0, h.getAudienceRequestToSpeakState)(s) === h.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(_.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, E.getStageChannelMetadata)(e)
  }), a.HTTP.patch({
    url: _.Endpoints.UPDATE_VOICE_STATE(i),
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
  return r()(null != t, "This channel cannot be guildless."), a.HTTP.patch({
    url: _.Endpoints.UPDATE_VOICE_STATE(t),
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
  return r()(null != i, "This channel cannot be guildless."), a.HTTP.patch({
    url: _.Endpoints.UPDATE_VOICE_STATE(i, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function b(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return r()(null != n, "This channel cannot be guildless."), I(t, e.id, !0), a.HTTP.patch({
    url: _.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function A(e, t, n) {
  let i = e.getGuildId();
  r()(null != i, "Channel cannot be guildless");
  let a = e.permissionOverwrites[i],
    o = {
      id: i,
      type: u.PermissionOverwriteType.ROLE,
      allow: f.NONE,
      deny: f.NONE,
      ...a
    };
  n ? (o.allow = s.add(o.allow, t), o.deny = s.remove(o.deny, t)) : (o.allow = s.remove(o.allow, t), o.deny = s.add(o.deny, t)), l.default.updatePermissionOverwrite(e.id, o)
}
async function R(e, t, n, i) {
  if ("" === t) return;
  c.default.getVoiceChannelId() !== e.id && (0, p.connectToStage)(e);
  let r = await (0, T.startStageInstance)(e.id, t, n, i);
  return v(e, !1, !0), r
}
async function y(e, t, n) {
  if ("" !== t) return await (0, T.updateStageInstance)(e.id, t, n)
}
async function P(e) {
  await (0, T.endStageInstance)(e.id)
}