"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var u = a("735250");
a("470079");
var l = a("442837"),
  d = a("481060"),
  s = a("592125"),
  n = a("430824"),
  i = a("496675"),
  r = a("594174"),
  o = a("471253"),
  f = a("88751"),
  c = a("981631"),
  E = a("689938");

function S(e, t, a) {
  var S;
  let _ = s.default.getChannel(a),
    M = (0, l.useStateFromStores)([n.default], () => n.default.getGuild(t), [t]),
    m = (0, l.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, a), [a, e.id]),
    g = (null === (S = r.default.getCurrentUser()) || void 0 === S ? void 0 : S.id) === e.id,
    A = (0, l.useStateFromStores)([i.default], () => null != a && i.default.canWithPartialContext(c.Permissions.MUTE_MEMBERS, {
      channelId: a
    }), [a]);
  return null != _ && null != M && (A || g) && m.speaker ? (0, u.jsx)(d.MenuItem, {
    id: "audience",
    label: g ? E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      g ? (0, o.moveSelfToAudience)(_) : (0, o.moveUserToAudience)(e, _)
    }
  }) : null
}