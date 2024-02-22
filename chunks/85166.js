"use strict";
n.r(e), n.d(e, {
  default: function() {
    return T
  }
});
var i = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  r = n("42203"),
  d = n("305961"),
  l = n("957255"),
  o = n("697218"),
  s = n("244480"),
  c = n("325861"),
  E = n("49111"),
  I = n("782340");

function T(t, e, n) {
  var T;
  let _ = r.default.getChannel(n),
    f = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(e), [e]),
    S = (0, u.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(t.id, n), [n, t.id]),
    N = (null === (T = o.default.getCurrentUser()) || void 0 === T ? void 0 : T.id) === t.id,
    p = (0, u.useStateFromStores)([l.default], () => null != n && l.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
      channelId: n
    }), [n]);
  return null != _ && null != f && (p || N) && S.speaker ? (0, i.jsx)(a.MenuItem, {
    id: "audience",
    label: N ? I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : I.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
    action: () => {
      N ? (0, s.moveSelfToAudience)(_) : (0, s.moveUserToAudience)(t, _)
    }
  }) : null
}