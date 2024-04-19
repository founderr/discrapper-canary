"use strict";
t.r(s), t.d(s, {
  default: function() {
    return o
  }
});
var a = t("735250");
t("470079");
var r = t("120356"),
  i = t.n(r),
  l = t("481060"),
  n = t("204197"),
  C = t("859709");

function o(e) {
  var s;
  let {
    user: t,
    checked: r,
    onChange: o,
    disabled: d
  } = e, {
    avatarSrc: c,
    eventHandlers: u
  } = (0, n.default)({
    user: t,
    size: l.AvatarSizes.SIZE_32
  }), f = null !== (s = t.globalName) && void 0 !== s ? s : t.username;
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsxs)("div", {
      className: C.user,
      children: [(0, a.jsx)(l.Avatar, {
        className: i()({
          [C.muted]: d
        }),
        src: c,
        "aria-label": f,
        size: l.AvatarSizes.SIZE_32,
        ...u
      }), (0, a.jsx)(l.Text, {
        color: d ? "text-muted" : "text-normal",
        variant: "text-md/semibold",
        children: f
      })]
    }), (0, a.jsx)("div", {
      className: C.checkbox,
      children: (0, a.jsx)(l.Checkbox, {
        disabled: d,
        value: r,
        onChange: (e, s) => o(t, s)
      })
    })]
  })
}