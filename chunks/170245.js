"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("120356"),
  i = n.n(s),
  l = n("442837"),
  r = n("129861"),
  o = n("700582"),
  u = n("699516"),
  d = n("341375");
t.default = function(e) {
  let {
    user: t,
    hovered: n,
    subText: s,
    showAccountIdentifier: c,
    status: f,
    isMobile: E,
    className: h
  } = e, _ = (0, l.useStateFromStores)([u.default], () => u.default.getNickname(t.id));
  return (0, a.jsxs)("div", {
    className: i()(d.userInfo, h, {
      [d.hovered]: n
    }),
    children: [(0, a.jsx)(o.default, {
      user: t,
      className: d.avatar,
      animate: n,
      status: f,
      isMobile: E
    }), (0, a.jsxs)("div", {
      className: d.text,
      children: [(0, a.jsx)(r.default, {
        user: t,
        nick: _,
        botClass: d.botTag,
        className: i()(d.discordTag, {
          [d.alignPomelo]: t.isPomelo()
        }),
        usernameClass: d.username,
        discriminatorClass: d.discriminator,
        showAccountIdentifier: c
      }), (0, a.jsx)("div", {
        className: d.subtext,
        children: s
      })]
    })]
  })
}