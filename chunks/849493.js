d.r(o), d.d(o, {
  default: function() {
    return n
  }
});
var e = d(735250);
d(470079);
var l = d(481060),
  r = d(915312);

function n() {
  return (0, r.bN)(document.body), (0, e.jsx)(l.HiddenVisually, {
    children: (0, e.jsx)("svg", {
      "aria-hidden": !0,
      children: (0, e.jsxs)("filter", {
        id: "violation-overlay",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        children: [(0, e.jsx)("feFlood", {
          floodColor: "#ff0000",
          floodOpacity: "0.3",
          result: "floodFill"
        }), (0, e.jsx)("feBlend", {
          in: "SourceGraphic",
          in2: "floodFill",
          mode: "overlay"
        })]
      })
    })
  })
}
d(31531)