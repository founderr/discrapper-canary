"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var s = n("735250");
n("470079");
var l = n("592125"),
  a = n("430824"),
  i = n("496675"),
  r = n("983436"),
  o = n("981631");

function u(e) {
  let {
    code: t,
    messageData: n
  } = e, [u, d] = t.split("/"), c = l.default.getChannel(d), E = a.default.getGuild(u);
  return null != c && c.isGuildVocal() && null != E && i.default.can(o.Permissions.VIEW_CHANNEL, c) && i.default.can(o.Permissions.CONNECT, c) ? (0, s.jsx)(r.default, {
    guild: E,
    channel: c,
    messageData: n
  }) : null
}