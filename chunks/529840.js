"use strict";
t.r(s), t.d(s, {
  default: function() {
    return d
  }
}), t("47120");
var i = t("735250"),
  l = t("470079"),
  C = t("120356"),
  a = t.n(C),
  r = t("481060"),
  n = t("204197"),
  o = t("859709");

function d(e) {
  var s;
  let {
    user: t,
    onChange: C,
    disabled: d
  } = e, [c, x] = l.useState(!1), {
    avatarSrc: f,
    eventHandlers: u
  } = (0, n.default)({
    user: t,
    size: r.AvatarSizes.SIZE_32
  }), h = null !== (s = t.globalName) && void 0 !== s ? s : t.username;
  return (0, i.jsxs)("div", {
    className: o.container,
    children: [(0, i.jsxs)("div", {
      className: o.user,
      children: [(0, i.jsx)(r.Avatar, {
        className: a()({
          [o.muted]: d
        }),
        src: f,
        "aria-label": h,
        size: r.AvatarSizes.SIZE_32,
        ...u
      }), (0, i.jsx)(r.Text, {
        color: d ? "text-muted" : "text-normal",
        variant: "text-md/semibold",
        children: h
      })]
    }), (0, i.jsx)("div", {
      className: o.checkbox,
      children: (0, i.jsx)(r.Checkbox, {
        disabled: d,
        value: c,
        onChange: (e, s) => {
          C(t, s), x(s)
        }
      })
    })]
  })
}