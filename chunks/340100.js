var r = n(571269);
var i = n(298267);
var a = n(735250);
n(470079);
var o = n(120356),
    s = n.n(o),
    l = n(692547),
    u = n(481060),
    c = n(113434),
    d = n(26650),
    _ = n(597799);
function E(e) {
    let { className: t, color: n = l.Z.colors.WHITE, quest: r, isInventory: i } = e,
        o = (0, c.qb)(e.quest),
        { percentComplete: E, completedRatioDisplay: f } = (0, c.I)(r);
    return !i && o.length > 0
        ? (0, a.jsx)(d.Z, { children: o.at(0) })
        : (0, a.jsxs)('div', {
              className: s()(_.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, a.jsxs)('div', {
                      className: _.percentCompleteWrapper,
                      children: [
                          (0, a.jsx)(u.Text, {
                              variant: 'text-xs/semibold',
                              className: _.percentCompleteLabel,
                              color: 'none',
                              children: f
                          }),
                          (0, a.jsx)('div', {
                              className: _.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - E, '%') }
                          })
                      ]
                  }),
                  (0, a.jsx)('div', {
                      className: _.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': E,
                      children: (0, a.jsx)('div', {
                          className: _.progressBarFill,
                          style: { width: ''.concat(E, '%') }
                      })
                  }),
                  o.length > 0 &&
                      (0, a.jsx)(d.Z, {
                          isInventory: i,
                          children: o.at(0)
                      })
              ]
          });
}
t.Z = E;
