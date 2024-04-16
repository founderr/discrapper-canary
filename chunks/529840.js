"use strict";
t.r(s), t.d(s, {
  default: function() {
    return o
  }
});
var i = t("735250");
t("470079");
var l = t("120356"),
  a = t.n(l),
  r = t("481060"),
  C = t("204197"),
  n = t("859709");

function o(e) {
  var s;
  let {
    user: t,
    checked: l,
    onChange: o,
    disabled: d
  } = e, {
    avatarSrc: c,
    eventHandlers: x
  } = (0, C.default)({
    user: t,
    size: r.AvatarSizes.SIZE_32
  }), f = null !== (s = t.globalName) && void 0 !== s ? s : t.username;
  return (0, i.jsxs)("div", {
    className: n.container,
    children: [(0, i.jsxs)("div", {
      className: n.user,
      children: [(0, i.jsx)(r.Avatar, {
        className: a()({
          [n.muted]: d
        }),
        src: c,
        "aria-label": f,
        size: r.AvatarSizes.SIZE_32,
        ...x
      }), (0, i.jsx)(r.Text, {
        color: d ? "text-muted" : "text-normal",
        variant: "text-md/semibold",
        children: f
      })]
    }), (0, i.jsx)("div", {
      className: n.checkbox,
      children: (0, i.jsx)(r.Checkbox, {
        disabled: d,
        value: l,
        onChange: (e, s) => o(t, s)
      })
    })]
  })
}