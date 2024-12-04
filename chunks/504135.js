n.d(t, {
    s: function () {
        return h;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(761224),
    u = n(898560),
    c = n(743236),
    d = n(525220),
    f = n(481060),
    _ = n(939350),
    p = n(450793);
function h(e) {
    let { color: t = 'default', label: n, icon: a, iconLeft: h, iconLeftSize: m = 'md', hint: g, subtext: E, subtextLineClamp: v, hasSubmenu: I, disabled: T, isFocused: b, menuItemProps: S, action: y, onClose: A, onFocus: N, className: C, focusedClassName: R, subMenuIconClassName: O, dontCloseOnActionIfHoldingShiftKey: D, dontCloseOnAction: L, iconProps: x, sparkle: w } = e,
        P = i.useContext(u.r),
        M = i.useRef(null),
        k = i.useCallback(
            (e) => {
                if (null == y) return !1;
                !(e.shiftKey && D) && !L && A(), e.persist(), null == P || P(), requestAnimationFrame(() => y(e));
            },
            [y, A, P, D, L]
        );
    return (
        i.useEffect(() => {
            b && ((0, c.F)(M), null == N || N());
        }, [b, N]),
        (0, r.jsxs)(o.P, {
            innerRef: M,
            className: s()(p.item, p.labelContainer, _._[t], C, {
                [p.disabled]: T,
                [p.focused]: b,
                [null != R ? R : '']: b
            }),
            onClick: T ? void 0 : k,
            'aria-disabled': T,
            ...S,
            'data-menu-item': 'true',
            children: [
                null != h &&
                    (0, r.jsx)('div', {
                        className: s()(p.iconContainerLeft, { [p.iconContainerLarge]: 'lg' === m }),
                        children: (0, r.jsx)(h, {
                            color: 'currentColor',
                            ...x,
                            className: s()(p.icon, null == x ? void 0 : x.className),
                            isFocused: b
                        })
                    }),
                (0, r.jsxs)('div', {
                    className: p.label,
                    children: [
                        (0, l.I)(n, e),
                        null != E &&
                            (0, r.jsx)(f.Text, {
                                variant: 'text-xs/normal',
                                className: s()(p.subtext, { [p.subtextLineClamp]: null != v }),
                                lineClamp: v,
                                children: E
                            })
                    ]
                }),
                null != g &&
                    (0, r.jsx)('div', {
                        className: p.hintContainer,
                        children: (0, l.I)(g, e)
                    }),
                (0, d.Y)(a)
                    ? a
                    : null != a &&
                      (0, r.jsx)('div', {
                          className: s()(p.iconContainer),
                          children: (0, r.jsx)(a, {
                              color: 'currentColor',
                              ...x,
                              className: s()(p.icon, null == x ? void 0 : x.className),
                              isFocused: b
                          })
                      }),
                I &&
                    (0, r.jsxs)('div', {
                        className: p.iconContainer,
                        children: [
                            (0, r.jsx)(f.ChevronSmallRightIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(p.caret, O)
                            }),
                            w && (0, r.jsx)(f.LottieSparkle, { className: p.sparkles })
                        ]
                    })
            ]
        })
    );
}
