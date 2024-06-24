t.d(n, {
  Z: function() {
    return o
  }
});
var a = t(735250);
t(470079);
var r = t(120356),
  s = t.n(r),
  i = t(481060),
  l = t(609191);

function o(e) {
  let {
    checked: n,
    onChange: t,
    disabled: r,
    className: o,
    tooltipProps: c
  } = e, d = e => {
    e.stopPropagation(), e.preventDefault()
  };
  return (0, a.jsx)(i.Clickable, {
    onClick: d,
    onMouseDown: d,
    onMouseUp: d,
    className: s()(l.switch, o),
    ...c,
    children: (0, a.jsx)(i.Switch, {
      checked: n,
      onChange: t,
      disabled: r
    })
  })
}