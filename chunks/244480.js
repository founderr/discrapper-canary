"use strict";
n.r(t), n.d(t, {
  toggleRequestToSpeak: function() {
    return p
  },
  inviteUserToStage: function() {
    return I
  },
  audienceAckRequestToSpeak: function() {
    return N
  },
  moveSelfToAudience: function() {
    return C
  },
  setUserSuppress: function() {
    return g
  },
  moveUserToAudience: function() {
    return O
  },
  setEveryoneRolePermissionAllowed: function() {
    return R
  },
  startStage: function() {
    return h
  },
  editStage: function() {
    return U
  },
  endStage: function() {
    return P
  }
});
var u = n("627445"),
  a = n.n(u),
  i = n("316693"),
  l = n("872717"),
  r = n("450911");
n("851387");
var d = n("798609"),
  o = n("716241"),
  s = n("18494"),
  c = n("800762"),
  f = n("991170"),
  E = n("716214"),
  _ = n("230324"),
  S = n("738983"),
  T = n("808422"),
  A = n("49111");

function p(e, t) {
  let n = e.getGuildId();
  return a(null != n, "This channel cannot be guildless."), t && (0, o.trackWithMetadata)(A.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, _.getStageChannelMetadata)(e)
  }), l.default.patch({
    url: A.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function I(e, t) {
  let n = e.getGuildId();
  return a(null != n, "This channel cannot be guildless."), l.default.patch({
    url: A.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = null == e ? void 0 : e.getGuildId();
  a(null != u, "This channel cannot be guildless.");
  let i = c.default.getVoiceStateForChannel(e.id),
    r = (0, T.getAudienceRequestToSpeakState)(i);
  return r === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, o.trackWithMetadata)(A.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, _.getStageChannelMetadata)(e)
  }), l.default.patch({
    url: A.Endpoints.UPDATE_VOICE_STATE(u),
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
  return a(null != t, "This channel cannot be guildless."), l.default.patch({
    url: A.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function g(e, t, n) {
  let u = e.getGuildId();
  return a(null != u, "This channel cannot be guildless."), l.default.patch({
    url: A.Endpoints.UPDATE_VOICE_STATE(u, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function O(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return a(null != n, "This channel cannot be guildless."), g(t, e.id, !0), l.default.patch({
    url: A.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function R(e, t, n) {
  let u = e.getGuildId();
  a(null != u, "Channel cannot be guildless");
  let l = e.permissionOverwrites[u],
    o = {
      id: u,
      type: d.PermissionOverwriteType.ROLE,
      allow: f.default.NONE,
      deny: f.default.NONE,
      ...l
    };
  n ? (o.allow = i.default.add(o.allow, t), o.deny = i.default.remove(o.deny, t)) : (o.allow = i.default.remove(o.allow, t), o.deny = i.default.add(o.deny, t)), r.default.updatePermissionOverwrite(e.id, o)
}
async function h(e, t, n, u) {
  if ("" === t) return;
  let a = s.default.getVoiceChannelId() === e.id;
  !a && (0, E.connectToStage)(e);
  let i = await (0, S.startStageInstance)(e.id, t, n, u);
  return N(e, !1, !0), i
}
async function U(e, t, n) {
  if ("" === t) return;
  let u = await (0, S.updateStageInstance)(e.id, t, n);
  return u
}
async function P(e) {
  await (0, S.endStageInstance)(e.id)
}