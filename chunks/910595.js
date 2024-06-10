"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("735250");
n("470079");
var a = n("703656"),
  s = n("308570"),
  i = n("434479"),
  r = n("981631"),
  o = n("176505"),
  u = n("689938");

function d(e) {
  let {
    guild: t,
    selected: n
  } = e;
  return (0, l.jsx)(i.BasicChannelRow, {
    id: "home-tab-".concat(t.id),
    renderIcon: e => (0, l.jsx)(s.default, {
      className: e
    }),
    text: u.default.Messages.SERVER_GUIDE,
    selected: n,
    onClick: function() {
      (0, a.transitionTo)(r.Routes.CHANNEL(t.id, o.StaticChannelRoute.GUILD_HOME))
    }
  })
}