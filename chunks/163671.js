n.d(t, {
  Z: function() {
    return l
  }
});
var r = n(735250);
n(470079);
var s = n(120356),
  i = n.n(s),
  a = n(388905),
  o = n(835234);

function l(e) {
  let {
    children: t,
    className: n,
    ...s
  } = e, l = t();
  return (0, r.jsx)(a.ZP, {
    ...s,
    className: i()(n, o.container),
    contentClassName: o.content,
    children: l.map((e, t) => (0, r.jsx)("div", {
      className: o.column,
      style: {
        flexBasis: "".concat(100 / l.length, "%")
      },
      children: e
    }, t))
  })
}