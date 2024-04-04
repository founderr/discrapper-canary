"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var l = a("735250");
a("470079");
var n = a("442837"),
  u = a("481060"),
  s = a("430824"),
  d = a("594174"),
  r = a("979651"),
  i = a("471253"),
  o = a("200498"),
  f = a("88751"),
  c = a("267980"),
  m = a("623633"),
  M = a("689938");

function E(e) {
  var t;
  let a = (0, m.default)(),
    E = null == a ? void 0 : a.id,
    S = null == a ? void 0 : a.guild_id,
    _ = (0, n.useStateFromStores)([s.default], () => s.default.getGuild(S), [S]),
    g = (0, n.useStateFromStores)([r.default], () => null != E ? r.default.getVoiceStateForChannel(E, e.id) : null, [E, e.id]),
    I = (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    C = (0, c.default)(),
    R = (0, n.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, E), [E, e.id]),
    N = (0, o.useCanModerateRequestToSpeak)(E);
  if (null == a || null == _ || null == g || R.speaker) return null;
  let A = () => {
    I ? (0, i.audienceAckRequestToSpeak)(a, !1) : (0, i.inviteUserToStage)(a, e.id)
  };
  return N ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: I ? M.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: A
  }) : C && I ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: M.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: A
  }) : null
}