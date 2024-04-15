"use strict";
u.r(t), u.d(t, {
  default: function() {
    return E
  }
});
var a = u("735250");
u("470079");
var l = u("442837"),
  d = u("481060"),
  n = u("592125"),
  s = u("430824"),
  i = u("496675"),
  r = u("594174"),
  o = u("471253"),
  f = u("88751"),
  c = u("981631"),
  S = u("689938");

function E(e, t, u) {
  var E;
  let _ = n.default.getChannel(u),
    M = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(t), [t]),
    T = (0, l.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, u), [u, e.id]),
    A = (null === (E = r.default.getCurrentUser()) || void 0 === E ? void 0 : E.id) === e.id,
    C = (0, l.useStateFromStores)([i.default], () => null != u && i.default.canWithPartialContext(c.Permissions.MUTE_MEMBERS, {
      channelId: u
    }), [u]);
  return null != _ && null != M && (C || A) && T.speaker ? (0, a.jsx)(d.MenuItem, {
    id: "audience",
    label: A ? S.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : S.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      A ? (0, o.moveSelfToAudience)(_) : (0, o.moveUserToAudience)(e, _)
    }
  }) : null
}