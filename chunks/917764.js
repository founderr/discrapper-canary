"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("600785"),
  o = n("587974"),
  u = n("333380"),
  d = e => {
    let {
      className: t,
      guild: n,
      isSelected: a = !0,
      width: d = 32,
      height: c = 32,
      shouldAnimate: f = !0,
      isLocked: p = !1
    } = e, [m, h] = i.useState(!1), E = n.getIconURL(32, f && a), S = () => h(!0), g = () => h(!1);
    return (0, l.jsxs)("div", {
      onFocus: S,
      onBlur: g,
      onMouseOver: S,
      onMouseLeave: g,
      children: [(0, l.jsx)(o.default, {
        className: s(u.mask, t),
        mask: a || m ? o.MaskIDs.SQUIRCLE : o.MaskIDs.AVATAR_DEFAULT,
        width: d,
        height: c,
        children: null == E ? (0, l.jsx)("div", {
          className: s(u.guildIcon, u.guildIconWithoutImage),
          children: (0, l.jsx)("div", {
            className: u.guildAcronym,
            children: n.acronym
          })
        }) : (0, l.jsx)("img", {
          alt: n.toString(),
          src: E,
          className: u.guildIcon
        })
      }), p ? (0, l.jsx)("div", {
        className: u.categoryItemLockIconContainer,
        children: (0, l.jsx)(r.default, {
          width: 10,
          height: 10,
          className: u.categoryItemLockIcon
        })
      }) : null]
    })
  }