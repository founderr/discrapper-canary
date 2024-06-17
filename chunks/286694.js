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
  o = a("594174"),
  r = a("471253"),
  f = a("88751"),
  c = a("981631"),
  E = a("689938");

function S(e, t, a) {
  var S;
  let M = s.default.getChannel(a),
    _ = (0, l.useStateFromStores)([n.default], () => n.default.getGuild(t), [t]),
    g = (0, l.useStateFromStores)([f.default], () => f.default.getPermissionsForUser(e.id, a), [a, e.id]),
    m = (null === (S = o.default.getCurrentUser()) || void 0 === S ? void 0 : S.id) === e.id,
    A = (0, l.useStateFromStores)([i.default], () => null != a && i.default.canWithPartialContext(c.Permissions.MUTE_MEMBERS, {
      channelId: a
    }), [a]);
  return null != M && null != _ && (A || m) && g.speaker ? (0, u.jsx)(d.MenuItem, {
    id: "audience",
    label: m ? E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : E.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      m ? (0, r.moveSelfToAudience)(M) : (0, r.moveUserToAudience)(e, M)
    }
  }) : null
}