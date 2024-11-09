n.d(t, {
    DF: function () {
        return a;
    },
    ZP: function () {
        return h;
    },
    _F: function () {
        return s;
    }
});
var r,
    i,
    a,
    s,
    o = n(200651),
    l = n(192379),
    u = n(120356),
    c = n.n(u),
    d = n(481060),
    f = n(921944),
    _ = n(592827);
function h(e) {
    let {
        className: t,
        header: n,
        headerClassName: r,
        content: i,
        contentClassName: a,
        buttonCTA: s,
        secondaryButtonCTA: u,
        onClick: h,
        onSecondaryClick: p,
        buttonProps: m = {
            color: d.Button.Colors.BRAND,
            look: d.Button.Looks.FILLED
        },
        secondaryButtonProps: g = { color: d.Button.Colors.BRAND_INVERTED },
        onComponentMount: E,
        asset: v,
        markAsDismissed: I,
        caretPosition: S = 'caretTopCenter',
        buttonLayout: T = 0
    } = e;
    l.useEffect(() => {
        null == E || E();
    }, []);
    let b = null != u;
    return (0, o.jsxs)('div', {
        className: c()(t, _.upsellTooltipWrapper, _[S]),
        children: [
            v,
            null == n
                ? null
                : (0, o.jsx)(d.Heading, {
                      className: c()(r, _.upsellTooltipHeader),
                      variant: 'heading-md/semibold',
                      children: n
                  }),
            (0, o.jsx)(d.Text, {
                color: 'always-white',
                className: c()(a, _.content),
                variant: 'text-sm/normal',
                children: i
            }),
            null != s || b
                ? (0, o.jsxs)('div', {
                      className: c()(_.upsellButtonsContainer, {
                          [_.upsellButtonsAdjacent]: 0 === T,
                          [_.upsellButtonsStacked]: 1 === T
                      }),
                      children: [
                          b
                              ? (0, o.jsx)(d.Button, {
                                    ...g,
                                    fullWidth: 1 === T,
                                    onClick: () => {
                                        null == p || p(), null == I || I(f.L.SECONDARY);
                                    },
                                    children: u
                                })
                              : null,
                          null == s
                              ? null
                              : (0, o.jsx)(d.Button, {
                                    ...m,
                                    fullWidth: !b || 1 === T,
                                    onClick: (e) => {
                                        h(e), null == I || I(f.L.PRIMARY);
                                    },
                                    children: s
                                })
                      ]
                  })
                : null
        ]
    });
}
((r = a || (a = {})).TOP_CENTER = 'caretTopCenter'), (r.TOP_RIGHT = 'caretTopRight'), (r.TOP_LEFT = 'caretTopLeft'), (r.BOTTOM_CENTER = 'caretBottomCenter'), (r.BOTTOM_LEFT = 'caretBottomLeft'), (r.LEFT_CENTER = 'caretLeftCenter'), (r.LEFT_TOP = 'caretLeftTop'), (r.RIGHT_CENTER = 'caretRightCenter'), (r.RIGHT_TOP = 'caretRightTop'), ((i = s || (s = {}))[(i.ADJACENT = 0)] = 'ADJACENT'), (i[(i.STACKED = 1)] = 'STACKED'), (h.CaretPosition = a), (h.ButtonLayout = s);
