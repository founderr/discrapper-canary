"use strict";
n.r(t), n.d(t, {
  ClanGuildIconSimple: function() {
    return E
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("451478"),
  u = n("806519"),
  d = n("768581"),
  _ = n("624138"),
  c = n("545866");

function E(e) {
  let {
    guildId: t,
    guildName: n,
    guildIcon: r,
    iconSize: s,
    className: E,
    animate: I
  } = e, T = (0, o.useStateFromStores)([l.default], () => l.default.isFocused()), f = d.default.getGuildIconURL({
    id: t,
    icon: r,
    size: s,
    canAnimate: I && T
  });
  if (null == f) {
    let e = (0, _.getAcronym)(n);
    return (0, i.jsx)(u.default, {
      mask: u.default.Masks.SQUIRCLE,
      width: s,
      height: s,
      className: E,
      children: (0, i.jsx)("div", {
        className: a()(c.guildIconImage, c.acronym),
        children: e
      })
    })
  }
  return (0, i.jsx)(u.default, {
    mask: u.default.Masks.SQUIRCLE,
    width: s,
    height: s,
    className: E,
    children: (0, i.jsx)("img", {
      src: f,
      alt: n,
      className: c.guildIconImage
    })
  })
}
t.default = r.memo(function(e) {
  let {
    guild: t,
    iconSize: n,
    className: r,
    animate: s
  } = e;
  return (0, i.jsx)(E, {
    guildName: t.name,
    guildId: t.id,
    guildIcon: t.icon,
    iconSize: n,
    className: r,
    animate: s
  })
})