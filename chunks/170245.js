"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("803997"),
  l = a.n(s),
  i = a("442837"),
  r = a("129861"),
  o = a("700582"),
  u = a("699516"),
  d = a("194898");
t.default = function(e) {
  let {
    user: t,
    hovered: a,
    subText: s,
    showAccountIdentifier: c,
    status: f,
    isMobile: E,
    className: h
  } = e, _ = (0, i.useStateFromStores)([u.default], () => u.default.getNickname(t.id));
  return (0, n.jsxs)("div", {
    className: l()(d.userInfo, h, {
      [d.hovered]: a
    }),
    children: [(0, n.jsx)(o.default, {
      user: t,
      className: d.avatar,
      animate: a,
      status: f,
      isMobile: E
    }), (0, n.jsxs)("div", {
      className: d.text,
      children: [(0, n.jsx)(r.default, {
        user: t,
        nick: _,
        botClass: d.botTag,
        className: l()(d.discordTag, {
          [d.alignPomelo]: t.isPomelo()
        }),
        usernameClass: d.username,
        discriminatorClass: d.discriminator,
        showAccountIdentifier: c
      }), (0, n.jsx)("div", {
        className: d.subtext,
        children: s
      })]
    })]
  })
}