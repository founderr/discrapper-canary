n.d(t, {
  Z: function() {
    return a
  }
});
var l = n(735250);
n(470079);
var i = n(592471),
  s = n(871499);

function a(e) {
  let t, {
      isActivityActive: n,
      onMouseEnter: a,
      onMouseLeave: r,
      onClick: o,
      ...c
    } = e,
    {
      Component: u,
      events: d
    } = (0, i.s)();
  return (0, l.jsx)(s.d, {
    isActive: n,
    color: t,
    iconComponent: u,
    onMouseEnter: e => {
      null == a || a(e), d.onMouseEnter()
    },
    onMouseLeave: e => {
      null == r || r(e), d.onMouseLeave()
    },
    onClick: e => {
      null == o || o(e), d.onClick()
    },
    ...c
  })
}