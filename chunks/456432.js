n.d(t, {
  Z: function() {
    return a
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(829820);

function a(e) {
  let {
    activity: t,
    user: n,
    source: a,
    ...r
  } = e, {
    label: o,
    tooltip: c,
    loading: u,
    disabled: d,
    onClick: E
  } = (0, l.Lz)(t, n, a);
  return (0, s.jsx)(i.Tooltip, {
    text: c,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, s.jsx)(i.Button, {
        ...r,
        color: d ? i.Button.Colors.PRIMARY : i.Button.Colors.GREEN,
        onClick: E,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: !u && d,
        submitting: u,
        children: o
      })
    }
  })
}