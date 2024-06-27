var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(442837),
  r = n(692547),
  o = n(481060),
  c = n(706454),
  d = n(930153),
  u = n(113434),
  _ = n(524824),
  E = n(330039),
  m = n(46140),
  I = n(567345);
t.Z = function(e) {
  let {
    className: t,
    color: n = r.Z.colors.WHITE,
    quest: a,
    isInventory: T
  } = e, h = (0, l.e7)([c.default], () => c.default.locale), {
    percentComplete: N
  } = (0, u.Rf)({
    quest: a,
    location: m.dr.QUEST_PROGRESS_BAR
  }), f = 100 * N, p = (0, _.r)(a);
  return p && !T ? (0, i.jsx)(E.Z, {}) : (0, i.jsxs)("div", {
    className: s()(I.wrapper, t),
    style: {
      color: n.css
    },
    children: [(0, i.jsxs)("div", {
      className: I.percentCompleteWrapper,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: I.percentCompleteLabel,
        color: "none",
        children: (0, d.T3)(h, N, {
          roundingMode: "floor"
        })
      }), (0, i.jsx)("div", {
        className: I.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - f, "%")
        }
      })]
    }), (0, i.jsx)("div", {
      className: I.progressBar,
      role: "progressbar",
      "aria-valuenow": f,
      children: (0, i.jsx)("div", {
        className: I.progressBarFill,
        style: {
          width: "".concat(f, "%")
        }
      })
    }), p && (0, i.jsx)(E.Z, {
      isInventory: T
    })]
  })
}