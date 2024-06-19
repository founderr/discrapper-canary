var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(442837),
  r = n(129861),
  o = n(700582),
  c = n(699516),
  u = n(583661);
t.Z = function(e) {
  let {
    user: t,
    hovered: n,
    subText: s,
    showAccountIdentifier: d,
    status: E,
    isMobile: h,
    className: _
  } = e, I = (0, a.e7)([c.Z], () => c.Z.getNickname(t.id));
  return (0, i.jsxs)("div", {
    className: l()(u.userInfo, _, {
      [u.hovered]: n
    }),
    children: [(0, i.jsx)(o.Z, {
      user: t,
      className: u.avatar,
      animate: n,
      status: E,
      isMobile: h
    }), (0, i.jsxs)("div", {
      className: u.text,
      children: [(0, i.jsx)(r.Z, {
        user: t,
        nick: I,
        botClass: u.botTag,
        className: l()(u.discordTag, {
          [u.alignPomelo]: t.isPomelo()
        }),
        usernameClass: u.username,
        discriminatorClass: u.discriminator,
        showAccountIdentifier: d
      }), (0, i.jsx)("div", {
        className: u.subtext,
        children: s
      })]
    })]
  })
}