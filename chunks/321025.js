n.d(t, {
  Z: function() {
    return i
  }
});
var s = n(735250),
  o = n(470079),
  r = n(920906),
  a = n(130653),
  l = n(613087);

function i(e) {
  let {
    expansionSpring: t,
    isExpanded: n
  } = e, {
    animatedComponentProps: i,
    recalculateAnimationPositions: c
  } = o.useContext(l.B$), u = o.useContext(a.T);
  return o.useEffect(() => {
    c()
  }, [c, n]), (0, s.jsx)("div", {
    style: {
      overflow: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    children: i.map(e => {
      let {
        id: n,
        collapsedLeft: o,
        expandedLeft: a,
        collapsedTop: l,
        expandedTop: i,
        collapsedRight: c,
        expandedRight: d
      } = e;
      return (0, s.jsx)(r.animated.div, {
        id: u ? "quest-bar-v2-preview-" + n : "quest-bar-v2-" + n,
        style: {
          zIndex: 2,
          position: "absolute",
          top: t.to({
            range: [0, 1],
            output: [l, i]
          }),
          right: Math.min(c, d),
          left: t.to({
            range: [0, 1],
            output: [o, a]
          })
        }
      }, n)
    })
  })
}