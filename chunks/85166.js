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
  d = n("305961"),
  l = n("957255"),
  o = n("697218"),
  s = n("244480"),
  I = n("325861"),
  E = n("49111"),
  c = n("782340");

function T(t, e, n) {
  var T;
  let _ = a.default.getChannel(n),
    S = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(e), [e]),
    f = (0, u.useStateFromStores)([I.default], () => I.default.getPermissionsForUser(t.id, n), [n, t.id]),
    N = (null === (T = o.default.getCurrentUser()) || void 0 === T ? void 0 : T.id) === t.id,
    p = (0, u.useStateFromStores)([l.default], () => null != n && l.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != _ && null != S && (p || N) && f.speaker ? (0, i.jsx)(r.MenuItem, {
    id: "audience",
    label: N ? c.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : c.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      N ? (0, s.moveSelfToAudience)(_) : (0, s.moveUserToAudience)(t, _)
    }
  }) : null
}