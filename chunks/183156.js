n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(52736),
  o = n(224503);

function c(e) {
  let {
    className: t,
    roleColor: n,
    roleName: i,
    hasRemoveIcon: c = !1,
    onClick: u,
    disabled: d = !1,
    verified: h = !1
  } = e;
  return (0, l.jsx)(a.Button, {
    className: s()(t, o.button),
    look: a.Button.Looks.BLANK,
    size: a.Button.Sizes.NONE,
    onClick: u,
    disabled: d,
    children: (0, l.jsx)(r.Z, {
      className: o.role,
      roleColor: n,
      roleName: i,
      verified: h,
      children: c && (0, l.jsx)(a.CloseSmallIcon, {
        size: "custom",
        color: "currentColor",
        height: 6,
        width: 6,
        className: o.removeRole,
        colorClass: o.removeRoleIcon
      })
    })
  })
}