n.d(t, {
  Z: function() {
    return d
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(871499),
  o = n(689938),
  c = n(211810);

function u(e) {
  let {
    className: t,
    count: n
  } = e;
  return (0, l.jsxs)("div", {
    className: s()(c.root, c.comboIcon, t),
    children: [(0, l.jsx)(a.GroupIcon, {
      size: "md",
      color: "currentColor",
      className: c.icon
    }), (0, l.jsx)(a.Text, {
      color: "none",
      className: c.count,
      variant: "text-md/normal",
      children: n
    })]
  })
}

function d(e) {
  let {
    count: t,
    ...n
  } = e;
  return (0, l.jsx)(r.Z, {
    label: o.Z.Messages.CHANNEL_CALL_PARTICIPANTS,
    iconComponent: e => {
      let {
        className: n
      } = e;
      return (0, l.jsx)(u, {
        className: n,
        count: t
      })
    },
    tooltipPosition: "bottom",
    ...n
  })
}