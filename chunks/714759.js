var i = n(735250);
n(470079);
var s = n(481060),
  l = n(689938),
  a = n(328490);
let r = Math.ceil(2 * Math.PI * 20);
t.Z = e => {
  let {
    total: t,
    used: n
  } = e, o = Math.max(0, Math.min(1, n / t)), c = "".concat(Math.floor(100 * o), "%");
  return (0, i.jsx)(s.Tooltip, {
    text: l.Z.Messages.APPLICATION_INSTALLATION_SPACE_USED.format({
      used: c
    }),
    children: e => (0, i.jsxs)("div", {
      className: a.wrapper,
      role: "progressbar",
      "aria-label": l.Z.Messages.APPLICATION_INSTALLATION_SPACE_USED.format({
        used: c
      }),
      ...e,
      children: [(0, i.jsxs)("svg", {
        viewBox: "25 25 50 50",
        className: a.svg,
        "aria-hidden": !0,
        children: [(0, i.jsx)("circle", {
          className: a.background,
          cx: "50",
          cy: "50",
          r: 20
        }), (0, i.jsx)("circle", {
          className: a.foreground,
          cx: "50",
          cy: "50",
          r: 20,
          stroke: function(e) {
            let t = Math.round(-85 * e + 199),
              n = Math.round(-71 * e + 208),
              i = Math.round(-22 * e + 240);
            return "rgb(".concat(t, ", ").concat(n, ", ").concat(i, ")")
          }(o),
          strokeDasharray: function(e) {
            let t = Math.floor(r * e);
            return "".concat(t, ", ").concat(r)
          }(o)
        })]
      }), (0, i.jsx)("aside", {
        className: a.usageInfo,
        "aria-hidden": !0,
        children: c
      })]
    })
  })
}