var s = n(735250);
n(470079);
var o = n(120356),
  i = n.n(o),
  a = n(442837),
  l = n(692547),
  r = n(481060),
  u = n(706454),
  c = n(930153),
  d = n(113434),
  C = n(524824),
  m = n(330039),
  E = n(46140),
  p = n(567345);
t.Z = function(e) {
  let {
    className: t,
    color: n = l.Z.colors.WHITE,
    quest: o,
    isInventory: x
  } = e, _ = (0, a.e7)([u.default], () => u.default.locale), {
    percentComplete: T
  } = (0, d.Rf)({
    quest: o,
    location: E.dr.QUEST_PROGRESS_BAR
  }), q = 100 * T, h = (0, C.r)(o);
  return h && !x ? (0, s.jsx)(m.Z, {}) : (0, s.jsxs)("div", {
    className: i()(p.wrapper, t),
    style: {
      color: n.css
    },
    children: [(0, s.jsxs)("div", {
      className: p.percentCompleteWrapper,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-xs/semibold",
        className: p.percentCompleteLabel,
        color: "none",
        children: (0, c.T3)(_, T, {
          roundingMode: "floor"
        })
      }), (0, s.jsx)("div", {
        className: p.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - q, "%")
        }
      })]
    }), (0, s.jsx)("div", {
      className: p.progressBar,
      role: "progressbar",
      "aria-valuenow": q,
      children: (0, s.jsx)("div", {
        className: p.progressBarFill,
        style: {
          width: "".concat(q, "%")
        }
      })
    }), h && (0, s.jsx)(m.Z, {
      isInventory: x
    })]
  })
}