"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var i = s("735250");
s("470079");
var a = s("120356"),
  l = s.n(a),
  r = s("481060"),
  C = s("204197"),
  n = s("859709");

function d(e) {
  var t;
  let {
    user: s,
    checked: a,
    onChange: d,
    disabled: o
  } = e, {
    avatarSrc: c,
    eventHandlers: f
  } = (0, C.default)({
    user: s,
    size: r.AvatarSizes.SIZE_32
  }), u = null !== (t = s.globalName) && void 0 !== t ? t : s.username;
  return (0, i.jsxs)("div", {
    className: n.container,
    children: [(0, i.jsxs)("div", {
      className: n.user,
      children: [(0, i.jsx)(r.Avatar, {
        className: l()({
          [n.muted]: o
        }),
        src: c,
        "aria-label": u,
        size: r.AvatarSizes.SIZE_32,
        ...f
      }), (0, i.jsx)(r.Text, {
        color: o ? "text-muted" : "text-normal",
        variant: "text-md/semibold",
        children: u
      })]
    }), (0, i.jsx)("div", {
      className: n.checkbox,
      children: (0, i.jsx)(r.Checkbox, {
        disabled: o,
        value: a,
        onChange: (e, t) => d(s, t)
      })
    })]
  })
}