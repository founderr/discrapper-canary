"use strict";
t.r(s), t.d(s, {
  default: function() {
    return n
  }
}), t("47120");
var i = t("735250"),
  l = t("470079"),
  C = t("481060"),
  a = t("204197"),
  r = t("859709");

function n(e) {
  var s;
  let {
    user: t,
    onChange: n
  } = e, [o, d] = l.useState(!1), {
    avatarSrc: c,
    eventHandlers: x
  } = (0, a.default)({
    user: t,
    size: C.AvatarSizes.SIZE_32
  }), f = null !== (s = t.globalName) && void 0 !== s ? s : t.username;
  return (0, i.jsxs)("div", {
    className: r.container,
    children: [(0, i.jsxs)("div", {
      className: r.user,
      children: [(0, i.jsx)(C.Avatar, {
        src: c,
        "aria-label": f,
        size: C.AvatarSizes.SIZE_32,
        ...x
      }), (0, i.jsx)(C.Text, {
        variant: "text-md/semibold",
        children: f
      })]
    }), (0, i.jsx)("div", {
      className: r.checkbox,
      children: (0, i.jsx)(C.Checkbox, {
        value: o,
        onChange: (e, s) => {
          n(t, s), d(s)
        }
      })
    })]
  })
}