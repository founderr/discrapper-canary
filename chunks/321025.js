"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("735250"),
  a = s("470079"),
  l = s("920906"),
  i = s("130653"),
  r = s("613087");

function o(e) {
  let {
    expansionSpring: t,
    isExpanded: s
  } = e, {
    animatedComponentProps: o,
    recalculateAnimationPositions: u
  } = a.useContext(r.QuestBarV2AnimationContext), d = a.useContext(i.QuestBarPreviewContext);
  return a.useEffect(() => {
    u()
  }, [u, s]), (0, n.jsx)("div", {
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
        id: s,
        collapsedLeft: a,
        expandedLeft: i,
        collapsedTop: r,
        expandedTop: o,
        collapsedRight: u,
        expandedRight: c
      } = e;
      return (0, n.jsx)(l.animated.div, {
        id: d ? "quest-bar-v2-preview-" + s : "quest-bar-v2-" + s,
        style: {
          zIndex: 2,
          position: "absolute",
          top: t.to({
            range: [0, 1],
            output: [r, o]
          }),
          right: Math.min(u, c),
          left: t.to({
            range: [0, 1],
            output: [a, i]
          })
        }
      }, s)
    })
  })
}