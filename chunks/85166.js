"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  a = n("42203"),
  r = n("305961"),
  d = n("957255"),
  o = n("697218"),
  s = n("244480"),
  c = n("325861"),
  E = n("49111"),
  _ = n("782340");

function f(e, t, n) {
  var f;
  let T = a.default.getChannel(n),
    I = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(t), [t]),
    S = (0, l.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, n), [n, e.id]),
    N = (null === (f = o.default.getCurrentUser()) || void 0 === f ? void 0 : f.id) === e.id,
    p = (0, l.useStateFromStores)([d.default], () => null != n && d.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != T && null != I && (p || N) && S.speaker ? (0, i.jsx)(u.MenuItem, {
    id: "audience",
    label: N ? _.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : _.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      N ? (0, s.moveSelfToAudience)(T) : (0, s.moveUserToAudience)(e, T)
    }
  }) : null
}