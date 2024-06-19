n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250),
  a = n(470079),
  i = n(920906),
  l = n(130653),
  r = n(613087);

function o(e) {
  let {
    expansionSpring: t,
    isExpanded: n
  } = e, {
    animatedComponentProps: o,
    recalculateAnimationPositions: c
  } = a.useContext(r.B$), d = a.useContext(l.T);
  return a.useEffect(() => {
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
    children: o.map(e => {
      let {
        id: n,
        collapsedLeft: a,
        expandedLeft: l,
        collapsedTop: r,
        expandedTop: o,
        collapsedRight: c,
        expandedRight: u
      } = e;
      return (0, s.jsx)(i.animated.div, {
        id: d ? "quest-bar-v2-preview-" + n : "quest-bar-v2-" + n,
        style: {
          zIndex: 2,
          position: "absolute",
          top: t.to({
            range: [0, 1],
            output: [r, o]
          }),
          right: Math.min(c, u),
          left: t.to({
            range: [0, 1],
            output: [a, l]
          })
        }
      }, n)
    })
  })
}