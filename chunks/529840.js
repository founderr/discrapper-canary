"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var i = s("120356"),
  l = s.n(i),
  r = s("481060"),
  C = s("204197"),
  n = s("859709");

function d(e) {
  var t;
  let {
    user: s,
    checked: i,
    onChange: d,
    disabled: o
  } = e, {
    avatarSrc: c,
    eventHandlers: u
  } = (0, C.default)({
    user: s,
    size: r.AvatarSizes.SIZE_32
  }), f = null !== (t = s.globalName) && void 0 !== t ? t : s.username;
  return (0, a.jsxs)("div", {
    className: n.container,
    children: [(0, a.jsxs)("div", {
      className: n.user,
      children: [(0, a.jsx)(r.Avatar, {
        className: l()({
          [n.muted]: o
        }),
        src: c,
        "aria-label": f,
        size: r.AvatarSizes.SIZE_32,
        ...u
      }), (0, a.jsx)(r.Text, {
        color: o ? "text-muted" : "text-normal",
        variant: "text-md/semibold",
        children: f
      })]
    }), (0, a.jsx)("div", {
      className: n.checkbox,
      children: (0, a.jsx)(r.Checkbox, {
        disabled: o,
        value: i,
        onChange: (e, t) => d(s, t)
      })
    })]
  })
}