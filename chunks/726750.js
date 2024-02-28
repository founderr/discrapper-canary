"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  u = n("77078"),
  i = n("305961"),
  d = n("697218"),
  s = n("800762"),
  r = n("244480"),
  o = n("619395"),
  c = n("325861"),
  f = n("77445"),
  S = n("130563"),
  E = n("782340");

function _(e) {
  var t;
  let n = (0, S.default)(),
    _ = null == n ? void 0 : n.id,
    p = null == n ? void 0 : n.guild_id,
    g = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(p), [p]),
    T = (0, a.useStateFromStores)([s.default], () => null != _ ? s.default.getVoiceStateForChannel(_, e.id) : null, [_, e.id]),
    A = (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
    I = (0, f.default)(),
    C = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, _), [_, e.id]),
    h = (0, o.useCanModerateRequestToSpeak)(_);
  if (null == n || null == g || null == T || C.speaker) return null;
  let m = () => {
    A ? (0, r.audienceAckRequestToSpeak)(n, !1) : (0, r.inviteUserToStage)(n, e.id)
  };
  return h ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: A ? E.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : E.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
    action: m
  }) : I && A ? (0, l.jsx)(u.MenuItem, {
    id: "invite-speaker",
    label: E.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
    action: m
  }) : null
}