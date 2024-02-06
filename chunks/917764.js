"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
}), i("222007");
var n = i("37983"),
  s = i("884691"),
  l = i("414456"),
  r = i.n(l),
  a = i("587974"),
  o = i("333380"),
  u = e => {
    let {
      className: t,
      guild: i,
      isSelected: l = !0,
      width: u = 32,
      height: c = 32,
      shouldAnimate: d = !0
    } = e, [f, E] = s.useState(!1), m = i.getIconURL(32, d && l), I = () => E(!0), p = () => E(!1);
    return (0, n.jsx)("div", {
      onFocus: I,
      onBlur: p,
      onMouseOver: I,
      onMouseLeave: p,
      children: (0, n.jsx)(a.default, {
        className: r(o.mask, t),
        mask: l || f ? a.MaskIDs.SQUIRCLE : a.MaskIDs.AVATAR_DEFAULT,
        width: u,
        height: c,
        children: null == m ? (0, n.jsx)("div", {
          className: r(o.guildIcon, o.guildIconWithoutImage),
          children: (0, n.jsx)("div", {
            className: o.guildAcronym,
            children: i.acronym
          })
        }) : (0, n.jsx)("img", {
          alt: i.toString(),
          src: m,
          className: o.guildIcon
        })
      })
    })
  }