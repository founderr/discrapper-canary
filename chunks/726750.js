"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  i = n("305961"),
  d = n("697218"),
  r = n("800762"),
  s = n("244480"),
  o = n("619395"),
  c = n("325861"),
  f = n("77445"),
  E = n("130563"),
  S = n("782340");

function _(e) {
  var t;
  let n = (0, E.default)(),
    _ = null == n ? void 0 : n.id,
    A = null == n ? void 0 : n.guild_id,
    p = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(A), [A]),
    g = (0, l.useStateFromStores)([r.default], () => null != _ ? r.default.getVoiceStateForChannel(_, e.id) : null, [_, e.id]),
    T = (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    I = (0, f.default)(),
    C = (0, l.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, _), [_, e.id]),
    m = (0, o.useCanModerateRequestToSpeak)(_);
  if (null == n || null == p || null == g || C.speaker) return null;
  let N = () => {
    T ? (0, s.audienceAckRequestToSpeak)(n, !1) : (0, s.inviteUserToStage)(n, e.id)
  };
  return m ? (0, a.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: T ? S.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : S.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: N
  }) : I && T ? (0, a.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: S.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: N
  }) : null
}