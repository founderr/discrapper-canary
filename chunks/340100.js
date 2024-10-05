n(571269), n(298267);
var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    o = n(692547),
    r = n(481060),
    l = n(113434),
    u = n(26650),
    d = n(597799);
t.Z = function (e) {
    let { className: t, color: n = o.Z.colors.WHITE, quest: a, isInventory: c } = e,
        m = (0, l.qb)(e.quest),
        { percentComplete: E, completedRatioDisplay: x } = (0, l.I)(a);
    return !c && m.length > 0
        ? (0, s.jsx)(u.Z, { children: m.at(0) })
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
                              children: x
                          }),
                          (0, s.jsx)('div', {
                              className: d.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - E, '%') }
                          })
                      ]
                  }),
                  (0, s.jsx)('div', {
                      className: d.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': E,
                      children: (0, s.jsx)('div', {
                          className: d.progressBarFill,
                          style: { width: ''.concat(E, '%') }
                      })
                  }),
                  m.length > 0 &&
                      (0, s.jsx)(u.Z, {
                          isInventory: c,
                          children: m.at(0)
                      })
              ]
          });
};
