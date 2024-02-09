"use strict";
n.r(e), n.d(e, {
  default: function() {
    return T
  }
});
var i = n("37983");
n("884691");
var u = n("446674"),
  r = n("77078"),
  a = n("42203"),
  l = n("305961"),
  o = n("957255"),
  d = n("697218"),
  s = n("244480"),
  E = n("325861"),
  _ = n("49111"),
  c = n("782340");

function T(t, e, n) {
  var T;
  let I = a.default.getChannel(n),
    S = (0, u.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
    f = (0, u.useStateFromStores)([E.default], () => E.default.getPermissionsForUser(t.id, n), [n, t.id]),
    N = (null === (T = d.default.getCurrentUser()) || void 0 === T ? void 0 : T.id) === t.id,
    p = (0, u.useStateFromStores)([o.default], () => null != n && o.default.canWithPartialContext(_.Permissions.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != I && null != S && (p || N) && f.speaker ? (0, i.jsx)(r.MenuItem, {
    id: "audience",
    label: N ? c.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : c.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      N ? (0, s.moveSelfToAudience)(I) : (0, s.moveUserToAudience)(t, I)
    }
  }) : null
}