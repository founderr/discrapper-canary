e.d(n, {
    E: function () {
        return g;
    },
    Z: function () {
        return E;
    }
});
var i = e(200651);
e(192379);
var s = e(120356),
    l = e.n(s),
    o = e(780384),
    r = e(481060),
    a = e(410030),
    c = e(696936),
    u = e(903773),
    d = e(861277);
let g = {
    RIGHT: d.horizontalStatusWarningBlock,
    BOTTOM: d.verticalStatusWarningBlock
};
function E(t) {
    let { className: n, color: e = c.W.YELLOW, buttonPosition: s = g.BOTTOM, notice: E, ctaLabel: h, ctaLoading: f, ctaDisabled: m, ctaClassName: x, onClick: N } = t,
        p = (0, a.ZP)();
    return (0, i.jsx)(u.Z, {
        className: l()(d.statusWarningBlock, { [d.statusWarningBlockWithCta]: null != h }, n),
        color: (0, o.wj)(p) ? e : c.W.BROWN,
        children: (0, i.jsxs)('div', {
            className: s,
            children: [
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: E
                }),
                null != h &&
                    null != N &&
                    (0, i.jsx)('div', {
                        className: d.ctaButtonContainer,
                        children: (0, i.jsx)(r.Button, {
                            className: l()(d.ctaButton, (0, o.wj)(p) ? void 0 : d.ctaBlackButton, x),
                            color: (0, o.wj)(p) ? r.Button.Colors.WHITE : r.Button.Colors.CUSTOM,
                            size: r.ButtonSizes.MEDIUM,
                            onClick: N,
                            disabled: m,
                            submitting: f,
                            children: (0, i.jsx)(r.Text, {
                                className: d.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: h
                            })
                        })
                    })
            ]
        })
    });
}
