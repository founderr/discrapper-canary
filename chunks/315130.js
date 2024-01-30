"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("915639"),
  c = n("153160"),
  f = n("227231"),
  E = n("278506"),
  _ = function(e) {
    let {
      className: t,
      color: n = o.default.colors.WHITE.css,
      quest: i
    } = e, _ = (0, r.useStateFromStores)([d.default], () => d.default.locale), h = s.useMemo(() => (0, f.calculatePercentComplete)(i), [i]), C = 100 * h;
    return (0, a.jsxs)("div", {
      className: l(E.wrapper, t),
      style: {
        color: n
      },
      children: [(0, a.jsxs)("div", {
        className: E.percentCompleteWrapper,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xs/semibold",
          className: E.percentCompleteLabel,
          color: "none",
          children: (0, c.formatPercent)(_, h)
        }), (0, a.jsx)("div", {
          className: E.percentCompleteLabelOffset,
          style: {
            width: "".concat(100 - C, "%")
          }
        })]
      }), (0, a.jsx)("div", {
        className: E.progressBar,
        role: "progressbar",
        "aria-valuenow": C,
        children: (0, a.jsx)("div", {
          className: E.progressBarFill,
          style: {
            width: "".concat(C, "%")
          }
        })
      })]
    })
  }