"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(806519),
  u = n(879146);
t.Z = e => {
  let {
    className: t,
    guild: n,
    isSelected: s = !0,
    width: _ = 32,
    height: c = 32,
    shouldAnimate: d = !0,
    isLocked: E = !1
  } = e, [I, T] = r.useState(!1), h = n.getIconURL(32, d && s), f = () => T(!0), S = () => T(!1);
  return (0, i.jsxs)("div", {
    onFocus: f,
    onBlur: S,
    onMouseOver: f,
    onMouseLeave: S,
    children: [(0, i.jsx)(l.ZP, {
      className: o()(u.mask, t),
      mask: s || I ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
      width: _,
      height: c,
      children: null == h ? (0, i.jsx)("div", {
        className: o()(u.guildIcon, u.guildIconWithoutImage),
        children: (0, i.jsx)("div", {
          className: u.guildAcronym,
          children: n.acronym
        })
      }) : (0, i.jsx)("img", {
        alt: n.toString(),
        src: h,
        className: u.guildIcon
      })
    }), E ? (0, i.jsx)("div", {
      className: u.categoryItemLockIconContainer,
      children: (0, i.jsx)(a.LockIcon, {
        size: "custom",
        color: "currentColor",
        width: 10,
        height: 10,
        className: u.categoryItemLockIcon
      })
    }) : null]
  })
}