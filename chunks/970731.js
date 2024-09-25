n.d(t, {
    DF: function () {
        return r;
    },
    ZP: function () {
        return _;
    },
    _F: function () {
        return i;
    }
});
var r,
    i,
    a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(921944),
    d = n(592827);
function _(e) {
    let {
        className: t,
        header: n,
        headerClassName: r,
        content: i,
        contentClassName: s,
        buttonCTA: _,
        secondaryButtonCTA: E,
        onClick: f,
        onSecondaryClick: h,
        buttonProps: p = {
            color: u.Button.Colors.BRAND,
            look: u.Button.Looks.FILLED
        },
        secondaryButtonProps: m = { color: u.Button.Colors.BRAND_INVERTED },
        onComponentMount: I,
        asset: T,
        markAsDismissed: g,
        caretPosition: S = 'caretTopCenter',
        buttonLayout: A = 0
    } = e;
    o.useEffect(() => {
        null == I || I();
    }, []);
    let v = null != E,
        N = (e) => {
            f(e), null == g || g(c.L.PRIMARY);
        },
        O = () => {
            null == h || h(), null == g || g(c.L.SECONDARY);
        };
    return (0, a.jsxs)('div', {
        className: l()(t, d.upsellTooltipWrapper, d[S]),
        children: [
            T,
            null == n
                ? null
                : (0, a.jsx)(u.Heading, {
                      className: l()(r, d.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: n
                  }),
            (0, a.jsx)(u.Text, {
                color: 'always-white',
                className: l()(s, d.content),
                variant: 'text-sm/normal',
                children: i
            }),
            null != _ || v
                ? (0, a.jsxs)('div', {
                      className: l()(d.upsellButtonsContainer, {
                          [d.upsellButtonsAdjacent]: 0 === A,
                          [d.upsellButtonsStacked]: 1 === A
                      }),
                      children: [
                          v
                              ? (0, a.jsx)(u.Button, {
                                    ...m,
                                    fullWidth: 1 === A,
                                    onClick: O,
                                    children: E
                                })
                              : null,
                          null == _
                              ? null
                              : (0, a.jsx)(u.Button, {
                                    ...p,
                                    fullWidth: !v || 1 === A,
                                    onClick: N,
                                    children: _
                                })
                      ]
                  })
                : null
        ]
    });
}
!(function (e) {
    (e.TOP_CENTER = 'caretTopCenter'), (e.TOP_RIGHT = 'caretTopRight'), (e.TOP_LEFT = 'caretTopLeft'), (e.BOTTOM_CENTER = 'caretBottomCenter'), (e.BOTTOM_LEFT = 'caretBottomLeft'), (e.LEFT_CENTER = 'caretLeftCenter'), (e.LEFT_TOP = 'caretLeftTop'), (e.RIGHT_CENTER = 'caretRightCenter'), (e.RIGHT_TOP = 'caretRightTop');
})(r || (r = {})),
    !(function (e) {
        (e[(e.ADJACENT = 0)] = 'ADJACENT'), (e[(e.STACKED = 1)] = 'STACKED');
    })(i || (i = {})),
    (_.CaretPosition = r),
    (_.ButtonLayout = i);
