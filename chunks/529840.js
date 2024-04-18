"use strict";
t.r(s), t.d(s, {
  default: function() {
    return d
  }
});
var i = t("735250");
t("470079");
var a = t("120356"),
  l = t.n(a),
  r = t("481060"),
  C = t("204197"),
  n = t("859709");

function d(e) {
  var s;
  let {
    user: t,
    checked: a,
    onChange: d,
    disabled: o
  } = e, {
    avatarSrc: c,
    eventHandlers: u
  } = (0, C.default)({
    user: t,
    size: r.AvatarSizes.SIZE_32
  }), f = null !== (s = t.globalName) && void 0 !== s ? s : t.username;
  return (0, i.jsxs)("div", {
    className: n.container,
    children: [(0, i.jsxs)("div", {
      className: n.user,
      children: [(0, i.jsx)(r.Avatar, {
        className: l()({
          [n.muted]: o
        }),
        src: c,
        "aria-label": f,
        size: r.AvatarSizes.SIZE_32,
        ...u
      }), (0, i.jsx)(r.Text, {
        color: o ? "text-muted" : "text-normal",
        variant: "text-md/semibold",
        children: f
      })]
    }), (0, i.jsx)("div", {
      className: n.checkbox,
      children: (0, i.jsx)(r.Checkbox, {
        disabled: o,
        value: a,
        onChange: (e, s) => d(t, s)
      })
    })]
  })
}