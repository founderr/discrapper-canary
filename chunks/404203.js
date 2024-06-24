t.d(n, {
  Z: function() {
    return o
  }
});
var s = t(735250),
  a = t(470079);
let r = e => n => {
  null == n || n.stopPropagation(), e()
};

function o(e) {
  let {
    onClick: n,
    className: t,
    children: o
  } = e, l = a.useRef(null);
  return (0, s.jsx)("div", {
    onClick: n,
    ref: l,
    className: t,
    children: o({
      areaRef: l,
      handleStopPropagation: r
    })
  })
}