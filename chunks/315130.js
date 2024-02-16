"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("915639"),
  c = n("240481"),
  E = n("227231"),
  f = n("220350"),
  _ = function(e) {
    let {
      className: t,
      color: n = o.default.colors.WHITE,
      quest: a
    } = e, _ = (0, r.useStateFromStores)([d.default], () => d.default.locale), T = l.useMemo(() => (0, E.calculatePercentComplete)(a), [a]), I = 100 * T;
    return (0, s.jsxs)("div", {
      className: i(f.wrapper, t),
      style: {
        color: n.css
      },
      children: [(0, s.jsxs)("div", {
        className: f.percentCompleteWrapper,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-xs/semibold",
          className: f.percentCompleteLabel,
          color: "none",
          children: (0, c.formatPercent)(_, T, {
            roundingMode: "floor"
          })
        }), (0, s.jsx)("div", {
          className: f.percentCompleteLabelOffset,
          style: {
            width: "".concat(100 - I, "%")
          }
        })]
      }), (0, s.jsx)("div", {
        className: f.progressBar,
        role: "progressbar",
        "aria-valuenow": I,
        children: (0, s.jsx)("div", {
          className: f.progressBarFill,
          style: {
            width: "".concat(I, "%")
          }
        })
      })]
    })
  }