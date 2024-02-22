"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var u = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  l = n("305961"),
  r = n("697218"),
  d = n("800762"),
  o = n("244480"),
  s = n("619395"),
  c = n("325861"),
  f = n("77445"),
  E = n("130563"),
  _ = n("782340");

function S(e) {
  var t;
  let n = (0, E.default)(),
    S = null == n ? void 0 : n.id,
    T = null == n ? void 0 : n.guild_id,
    A = (0, a.useStateFromStores)([l.default], () => l.default.getGuild(T), [T]),
    p = (0, a.useStateFromStores)([d.default], () => null != S ? d.default.getVoiceStateForChannel(S, e.id) : null, [S, e.id]),
    I = (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    N = (0, f.default)(),
    C = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, S), [S, e.id]),
    g = (0, s.useCanModerateRequestToSpeak)(S);
  if (null == n || null == A || null == p || C.speaker) return null;
  let O = () => {
    I ? (0, o.audienceAckRequestToSpeak)(n, !1) : (0, o.inviteUserToStage)(n, e.id)
  };
  return g ? (0, u.jsx)(i.MenuItem, {
    id: "invite-speaker",
    label: I ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: O
  }) : N && I ? (0, u.jsx)(i.MenuItem, {
    id: "invite-speaker",
    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: O
  }) : null
}