"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("669491"),
  u = n("77078"),
  d = n("915639"),
  c = n("240481"),
  f = n("227231"),
  E = n("220350"),
  h = function(e) {
    let {
      className: t,
      color: n = o.default.colors.WHITE.css,
      quest: l
    } = e, h = (0, r.useStateFromStores)([d.default], () => d.default.locale), _ = s.useMemo(() => (0, f.calculatePercentComplete)(l), [l]), C = 100 * _;
    return (0, a.jsxs)("div", {
      className: i(E.wrapper, t),
      style: {
        color: n
      },
      children: [(0, a.jsxs)("div", {
        className: E.percentCompleteWrapper,
        children: [(0, a.jsx)(u.Text, {
          variant: "text-xs/semibold",
          className: E.percentCompleteLabel,
          color: "none",
          children: (0, c.formatPercent)(h, _, {
            roundingMode: "floor"
          })
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