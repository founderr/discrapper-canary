n.d(s, {
    E: function () {
        return u;
    },
    Z: function () {
        return I;
    }
});
var t = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    l = n(780384),
    r = n(481060),
    i = n(410030),
    E = n(696936),
    c = n(903773),
    _ = n(861277);
let u = {
    RIGHT: _.horizontalStatusWarningBlock,
    BOTTOM: _.verticalStatusWarningBlock
};
function I(e) {
    let { className: s, color: n = E.W.YELLOW, buttonPosition: o = u.BOTTOM, notice: I, ctaLabel: N, ctaLoading: d, ctaDisabled: T, ctaClassName: R, onClick: L } = e,
        M = (0, i.ZP)();
    return (0, t.jsx)(c.Z, {
        className: a()(_.statusWarningBlock, { [_.statusWarningBlockWithCta]: null != N }, s),
        color: (0, l.wj)(M) ? n : E.W.BROWN,
        children: (0, t.jsxs)('div', {
            className: o,
            children: [
                (0, t.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'interactive-active',
                    children: I
                }),
                null != N &&
                    null != L &&
                    (0, t.jsx)('div', {
                        className: _.ctaButtonContainer,
                        children: (0, t.jsx)(r.Button, {
                            className: a()(_.ctaButton, (0, l.wj)(M) ? void 0 : _.ctaBlackButton, R),
                            color: (0, l.wj)(M) ? r.Button.Colors.WHITE : r.Button.Colors.CUSTOM,
                            size: r.ButtonSizes.MEDIUM,
                            onClick: L,
                            disabled: T,
                            submitting: d,
                            children: (0, t.jsx)(r.Text, {
                                className: _.ctaButtonText,
                                variant: 'text-sm/medium',
                                children: N
                            })
                        })
                    })
            ]
        })
    });
}
