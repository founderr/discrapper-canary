n(571269), n(298267);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(692547),
    o = n(481060),
    a = n(113434),
    u = n(26650),
    d = n(761266);
t.Z = function (e) {
    let { className: t, color: n = r.Z.colors.WHITE, quest: s, isInventory: c } = e,
        m = (0, a.qb)(e.quest),
        { percentComplete: x, completedRatioDisplay: h } = (0, a.I)(s);
    return !c && m.length > 0
        ? (0, i.jsx)(u.Z, { children: m.at(0) })
        : (0, i.jsxs)('div', {
              className: l()(d.wrapper, t),
              style: { color: n.css },
              children: [
                  (0, i.jsxs)('div', {
                      className: d.percentCompleteWrapper,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: 'text-xs/semibold',
                              className: d.percentCompleteLabel,
                              color: 'none',
                              children: h
                          }),
                          (0, i.jsx)('div', {
                              className: d.percentCompleteLabelOffset,
                              style: { width: ''.concat(100 - x, '%') }
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: d.progressBar,
                      role: 'progressbar',
                      'aria-valuenow': x,
                      children: (0, i.jsx)('div', {
                          className: d.progressBarFill,
                          style: { width: ''.concat(x, '%') }
                      })
                  }),
                  m.length > 0 &&
                      (0, i.jsx)(u.Z, {
                          isInventory: c,
                          children: m.at(0)
                      })
              ]
          });
};
