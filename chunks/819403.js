"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var a = l("735250");
l("470079");
var u = l("442837"),
  n = l("481060"),
  s = l("430824"),
  d = l("594174"),
  r = l("979651"),
  i = l("471253"),
  o = l("200498"),
  f = l("88751"),
  c = l("267980"),
  E = l("623633"),
  M = l("689938");

function S(e) {
  var t;
  let l = (0, E.default)(),
    S = null == l ? void 0 : l.id,
    m = null == l ? void 0 : l.guild_id,
    _ = (0, u.useStateFromStores)([s.default], () => s.default.getGuild(m), [m]),
    g = (0, u.useStateFromStores)([r.default], () => null != S ? r.default.getVoiceStateForChannel(S, e.id) : null, [S, e.id]),
    R = (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    A = (0, c.default)(),
    C = (0, u.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, S), [S, e.id]),
    N = (0, o.useCanModerateRequestToSpeak)(S);
  if (null == l || null == _ || null == g || C.speaker) return null;
  let I = () => {
    R ? (0, i.audienceAckRequestToSpeak)(l, !1) : (0, i.inviteUserToStage)(l, e.id)
  };
  return N ? (0, a.jsx)(n.MenuItem, {
    id: "invite-speaker",
    label: R ? M.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: I
  }) : A && R ? (0, a.jsx)(n.MenuItem, {
    id: "invite-speaker",
    label: M.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: I
  }) : null
}