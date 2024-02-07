"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("587974"),
  o = n("333380"),
  u = e => {
    let {
      className: t,
      guild: n,
      isSelected: a = !0,
      width: u = 32,
      height: d = 32,
      shouldAnimate: c = !0
    } = e, [f, p] = i.useState(!1), m = n.getIconURL(32, c && a), h = () => p(!0), E = () => p(!1);
    return (0, l.jsx)("div", {
      onFocus: h,
      onBlur: E,
      onMouseOver: h,
      onMouseLeave: E,
      children: (0, l.jsx)(r.default, {
        className: s(o.mask, t),
        mask: a || f ? r.MaskIDs.SQUIRCLE : r.MaskIDs.AVATAR_DEFAULT,
        width: u,
        height: d,
        children: null == m ? (0, l.jsx)("div", {
          className: s(o.guildIcon, o.guildIconWithoutImage),
          children: (0, l.jsx)("div", {
            className: o.guildAcronym,
            children: n.acronym
          })
        }) : (0, l.jsx)("img", {
          alt: n.toString(),
          src: m,
          className: o.guildIcon
        })
      })
    })
  }