n(627341);
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  l = n(278074),
  o = n(481060),
  r = n(169525),
  u = n(678397);
t.Z = e => {
  let {
    obscureReason: t,
    iconClassname: n
  } = e;
  return (0, l.EQ)(t).with(r.wk.EXPLICIT_CONTENT, () => (0, i.jsx)(o.ImageWarningIcon, {
    className: a()(n, u.obscuredIcon),
    color: "white"
  })).with(r.wk.SPOILER, () => (0, i.jsx)(o.EyeIcon, {
    size: "md",
    color: "currentColor",
    className: n
  })).otherwise(() => null)
}