n.d(s, {
  Z: function() {
    return o
  }
});
var t = n(735250),
  a = n(470079);
let l = e => s => {
  null == s || s.stopPropagation(), e()
};

function o(e) {
  let {
    onClick: s,
    className: n,
    children: o
  } = e, i = a.useRef(null);
  return (0, t.jsx)("div", {
    onClick: s,
    ref: i,
    className: n,
    children: o({
      areaRef: i,
      handleStopPropagation: l
    })
  })
}