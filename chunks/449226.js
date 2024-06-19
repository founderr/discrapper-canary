t.d(n, {
  Z: function() {
    return l
  }
});
var a = t(735250);
t(470079);
var r = t(120356),
  s = t.n(r),
  i = t(481060),
  o = t(609191);

function l(e) {
  let {
    checked: n,
    onChange: t,
    disabled: r,
    className: l,
    tooltipProps: c
  } = e, d = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, a.jsx)(i.Clickable, {
    onClick: d,
    onMouseDown: d,
    onMouseUp: d,
    className: s()(o.switch, l),
    ...c,
    children: (0, a.jsx)(i.Switch, {
      checked: n,
      onChange: t,
      disabled: r
    })
  })
}