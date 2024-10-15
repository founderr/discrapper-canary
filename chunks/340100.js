n(571269), n(298267);
var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    l = n(692547),
    r = n(481060),
    o = n(113434),
    u = n(26650),
    d = n(597799);
t.Z = function (e) {
    let { className: t, color: n = l.Z.colors.WHITE, quest: a, isInventory: c } = e,
        E = (0, o.qb)(e.quest),
        { percentComplete: m, completedRatioDisplay: C } = (0, o.I)(a);
    return !c && E.length > 0
        ? (0, s.jsx)(u.Z, { children: E.at(0) })
        : (0, s.jsxs)('div', {
              className: i()(d.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, s.jsxs)('div', {
                      className: d.percentCompleteWrapper,
                      children: [
                          (0, s.jsx)(r.Text, {
                              variant: 'text-xs/semibold',
                              className: d.percentCompleteLabel,
                              color: 'none',
                              children: C
                          }),
                          (0, s.jsx)('div', {
                              className: d.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - m, '%') }
                          })
                      ]
                  }),
                  (0, s.jsx)('div', {
                      className: d.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': m,
                      children: (0, s.jsx)('div', {
                          className: d.progressBarFill,
                          style: { width: ''.concat(m, '%') }
                      })
                  }),
                  E.length > 0 &&
                      (0, s.jsx)(u.Z, {
                          isInventory: c,
                          children: E.at(0)
                      })
              ]
          });
};
