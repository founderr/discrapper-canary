n(571269), n(298267);
var s = n(735250);
n(470079);
var o = n(120356),
    a = n.n(o),
    i = n(692547),
    r = n(481060),
    l = n(113434),
    u = n(26650),
    c = n(597799);
t.Z = function (e) {
    let { className: t, color: n = i.Z.colors.WHITE, quest: o, isInventory: d } = e,
        C = (0, l.qb)(e.quest),
        { percentComplete: m, completedRatioDisplay: p } = (0, l.I)(o);
    return !d && C.length > 0
        ? (0, s.jsx)(u.Z, { children: C.at(0) })
        : (0, s.jsxs)('div', {
              className: a()(c.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, s.jsxs)('div', {
                      className: c.percentCompleteWrapper,
                      children: [
                          (0, s.jsx)(r.Text, {
                              variant: 'text-xs/semibold',
                              className: c.percentCompleteLabel,
                              color: 'none',
                              children: p
                          }),
                          (0, s.jsx)('div', {
                              className: c.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - m, '%') }
                          })
                      ]
                  }),
                  (0, s.jsx)('div', {
                      className: c.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': m,
                      children: (0, s.jsx)('div', {
                          className: c.progressBarFill,
                          style: { width: ''.concat(m, '%') }
                      })
                  }),
                  C.length > 0 &&
                      (0, s.jsx)(u.Z, {
                          isInventory: d,
                          children: C.at(0)
                      })
              ]
          });
};
