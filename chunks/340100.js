var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), r = n(442837), l = n(692547), o = n(481060), c = n(706454), d = n(930153), u = n(113434), _ = n(524824), E = n(330039), m = n(260370);
t.Z = function (e) {
    let {
            className: t,
            color: n = l.Z.colors.WHITE,
            quest: a,
            isInventory: I
        } = e, T = (0, r.e7)([c.default], () => c.default.locale), {percentComplete: h} = (0, u.Rf)(a), N = (0, u.Jf)(a), p = null != N ? N.completedRatio : h, f = null != N ? ''.concat(null == N ? void 0 : N.progress, '/').concat(null == N ? void 0 : N.target) : (0, d.T3)(T, p, { roundingMode: 'floor' }), C = 100 * p, g = (0, _.r)(a);
    return g && !I ? (0, i.jsx)(E.Z, {}) : (0, i.jsxs)('div', {
        className: s()(m.wrapper, t),
        style: { color: n.css },
        children: [
            (0, i.jsxs)('div', {
                className: m.percentCompleteWrapper,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/semibold',
                        className: m.percentCompleteLabel,
                        color: 'none',
                        children: f
                    }),
                    (0, i.jsx)('div', {
                        className: m.percentCompleteLabelOffset,
                        style: { width: ''.concat(100 - C, '%') }
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: m.progressBar,
                role: 'progressbar',
                'aria-valuenow': C,
                children: (0, i.jsx)('div', {
                    className: m.progressBarFill,
                    style: { width: ''.concat(C, '%') }
                })
            }),
            g && (0, i.jsx)(E.Z, { isInventory: I })
        ]
    });
};
