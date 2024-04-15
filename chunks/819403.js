"use strict";
l.r(t), l.d(t, {
  default: function() {
    return M
  }
});
var a = l("735250");
l("470079");
var u = l("442837"),
  n = l("481060"),
  d = l("430824"),
  s = l("594174"),
  r = l("979651"),
  i = l("471253"),
  o = l("200498"),
  f = l("88751"),
  c = l("267980"),
  E = l("623633"),
  m = l("689938");

function M(e) {
  var t;
  let l = (0, E.default)(),
    M = null == l ? void 0 : l.id,
    S = null == l ? void 0 : l.guild_id,
    _ = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(S), [S]),
    g = (0, u.useStateFromStores)([r.default], () => null != M ? r.default.getVoiceStateForChannel(M, e.id) : null, [M, e.id]),
    I = (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    R = (0, c.default)(),
    C = (0, u.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, M), [M, e.id]),
    A = (0, o.useCanModerateRequestToSpeak)(M);
  if (null == l || null == _ || null == g || C.speaker) return null;
  let T = () => {
    I ? (0, i.audienceAckRequestToSpeak)(l, !1) : (0, i.inviteUserToStage)(l, e.id)
  };
  return A ? (0, a.jsx)(n.MenuItem, {
    id: "invite-speaker",
    label: I ? m.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : m.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: T
  }) : R && I ? (0, a.jsx)(n.MenuItem, {
    id: "invite-speaker",
    label: m.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: T
  }) : null
}