n.d(t, {
  Z: function() {
    return d
  }
});
var r = n(735250);
n(470079);
var s = n(481060),
  i = n(985513),
  o = n(285952),
  a = n(388905),
  l = n(689938),
  c = n(232862),
  u = n(331651);

function d(e) {
  let {
    title: t,
    subtitle: n,
    error: d,
    onSubmit: h,
    onCancel: p
  } = e;
  return (0, r.jsxs)(o.Z, {
    direction: o.Z.Direction.VERTICAL,
    children: [(0, r.jsx)(a.Dx, {
      className: u.marginBottom8,
      children: t
    }), (0, r.jsx)(a.DK, {
      className: c.subTitle,
      children: n
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(i.Z, {
        inputClassName: c.codeInput,
        onSubmit: h
      }), null != d ? (0, r.jsx)(s.Text, {
        className: c.error,
        variant: "text-sm/normal",
        children: d
      }) : null]
    }), null != p && (0, r.jsx)(s.Button, {
      className: c.button,
      onClick: p,
      color: s.Button.Colors.PRIMARY,
      children: l.Z.Messages.CANCEL
    })]
  })
}