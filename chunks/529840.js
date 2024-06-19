t.d(s, {
  Z: function() {
    return o
  }
});
var a = t(735250);
t(470079);
var i = t(120356),
  r = t.n(i),
  l = t(481060),
  n = t(204197),
  C = t(726558);

function o(e) {
  var s;
  let {
    user: t,
    checked: i,
    onChange: o,
    disabled: d
  } = e, {
    avatarSrc: c,
    eventHandlers: x
  } = (0, n.Z)({
    user: t,
    size: l.AvatarSizes.SIZE_32
  }), _ = null !== (s = t.globalName) && void 0 !== s ? s : t.username;
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsxs)("div", {
      className: C.user,
      children: [(0, a.jsx)(l.Avatar, {
        className: r()({
          [C.muted]: d
        }),
        src: c,
        "aria-label": _,
        size: l.AvatarSizes.SIZE_32,
        ...x
      }), (0, a.jsx)(l.Text, {
        color: d ? "text-muted" : "text-normal",
        variant: "text-md/semibold",
        children: _
      })]
    }), (0, a.jsx)("div", {
      className: C.checkbox,
      children: (0, a.jsx)(l.Checkbox, {
        disabled: d,
        value: i,
        onChange: (e, s) => o(t, s)
      })
    })]
  })
}