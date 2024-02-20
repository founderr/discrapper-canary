"use strict";
n.r(t), n.d(t, {
  toggleRequestToSpeak: function() {
    return g
  },
  inviteUserToStage: function() {
    return I
  },
  audienceAckRequestToSpeak: function() {
    return h
  },
  moveSelfToAudience: function() {
    return N
  },
  setUserSuppress: function() {
    return A
  },
  moveUserToAudience: function() {
    return C
  },
  setEveryoneRolePermissionAllowed: function() {
    return R
  },
  startStage: function() {
    return M
  },
  editStage: function() {
    return O
  },
  endStage: function() {
    return v
  }
});
var a = n("627445"),
  s = n.n(a),
  l = n("316693"),
  i = n("872717"),
  u = n("450911");
n("851387");
var r = n("798609"),
  d = n("716241"),
  o = n("18494"),
  c = n("800762"),
  f = n("991170"),
  E = n("716214"),
  _ = n("230324"),
  T = n("738983"),
  p = n("808422"),
  S = n("49111");

function g(e, t) {
  let n = e.getGuildId();
  return s(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(S.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, _.getStageChannelMetadata)(e)
  }), i.default.patch({
    url: S.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function I(e, t) {
  let n = e.getGuildId();
  return s(null != n, "This channel cannot be guildless."), i.default.patch({
    url: S.Endpoints.UPDATE_VOICE_STATE(n, t),
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
  s(null != a, "This channel cannot be guildless.");
  let l = c.default.getVoiceStateForChannel(e.id),
    u = (0, p.getAudienceRequestToSpeakState)(l);
  return u === p.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(S.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, _.getStageChannelMetadata)(e)
  }), i.default.patch({
    url: S.Endpoints.UPDATE_VOICE_STATE(a),
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

function N(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return s(null != t, "This channel cannot be guildless."), i.default.patch({
    url: S.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function A(e, t, n) {
  let a = e.getGuildId();
  return s(null != a, "This channel cannot be guildless."), i.default.patch({
    url: S.Endpoints.UPDATE_VOICE_STATE(a, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function C(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return s(null != n, "This channel cannot be guildless."), A(t, e.id, !0), i.default.patch({
    url: S.Endpoints.UPDATE_VOICE_STATE(n, e.id),
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
  s(null != a, "Channel cannot be guildless");
  let i = e.permissionOverwrites[a],
    d = {
      id: a,
      type: r.PermissionOverwriteType.ROLE,
      allow: f.default.NONE,
      deny: f.default.NONE,
      ...i
    };
  n ? (d.allow = l.default.add(d.allow, t), d.deny = l.default.remove(d.deny, t)) : (d.allow = l.default.remove(d.allow, t), d.deny = l.default.add(d.deny, t)), u.default.updatePermissionOverwrite(e.id, d)
}
async function M(e, t, n, a) {
  if ("" === t) return;
  let s = o.default.getVoiceChannelId() === e.id;
  !s && (0, E.connectToStage)(e);
  let l = await (0, T.startStageInstance)(e.id, t, n, a);
  return h(e, !1, !0), l
}
async function O(e, t, n) {
  if ("" === t) return;
  let a = await (0, T.updateStageInstance)(e.id, t, n);
  return a
}
async function v(e) {
  await (0, T.endStageInstance)(e.id)
}