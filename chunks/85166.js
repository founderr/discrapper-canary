"use strict";
n.r(e), n.d(e, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  l = n("42203"),
  d = n("305961"),
  r = n("957255"),
  s = n("697218"),
  o = n("244480"),
  c = n("325861"),
  E = n("49111"),
  T = n("782340");

function f(t, e, n) {
  var f;
  let I = l.default.getChannel(n),
    _ = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(e), [e]),
    S = (0, u.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(t.id, n), [n, t.id]),
    p = (null === (f = s.default.getCurrentUser()) || void 0 === f ? void 0 : f.id) === t.id,
    N = (0, u.useStateFromStores)([r.default], () => null != n && r.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != I && null != _ && (N || p) && S.speaker ? (0, i.jsx)(a.MenuItem, {
    id: "audience",
    label: p ? T.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : T.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      p ? (0, o.moveSelfToAudience)(I) : (0, o.moveUserToAudience)(t, I)
    }
  }) : null
}