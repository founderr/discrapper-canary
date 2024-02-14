"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("915639"),
  c = n("240481"),
  f = n("227231"),
  h = n("220350"),
  m = function(e) {
    let {
      className: t,
      color: n = o.default.colors.WHITE,
      quest: s
    } = e, m = (0, r.useStateFromStores)([d.default], () => d.default.locale), p = l.useMemo(() => (0, f.calculatePercentComplete)(s), [s]), E = 100 * p;
    return (0, a.jsxs)("div", {
      className: i(h.wrapper, t),
      style: {
        color: n.css
      },
      children: [(0, a.jsxs)("div", {
        className: h.percentCompleteWrapper,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xs/semibold",
          className: h.percentCompleteLabel,
          color: "none",
          children: (0, c.formatPercent)(m, p, {
            roundingMode: "floor"
          })
        }), (0, a.jsx)("div", {
          className: h.percentCompleteLabelOffset,
          style: {
            width: "".concat(100 - E, "%")
          }
        })]
      }), (0, a.jsx)("div", {
        className: h.progressBar,
        role: "progressbar",
        "aria-valuenow": E,
        children: (0, a.jsx)("div", {
          className: h.progressBarFill,
          style: {
            width: "".concat(E, "%")
          }
        })
      })]
    })
  }