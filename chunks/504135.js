n.d(t, {
    s: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(1561),
    l = n(761224),
    u = n(898560),
    c = n(743236),
    d = n(481060),
    _ = n(939350),
    E = n(667947);
function f(e) {
    let { color: t = 'default', label: n, icon: a, iconLeft: f, iconLeftSize: h = 'md', hint: p, subtext: m, subtextLineClamp: I, hasSubmenu: T, disabled: g, isFocused: S, menuItemProps: A, action: v, onClose: N, onFocus: O, className: R, focusedClassName: C, subMenuIconClassName: y, dontCloseOnActionIfHoldingShiftKey: L, dontCloseOnAction: b, iconProps: D, sparkle: M } = e,
        P = i.useContext(u.r),
        U = i.useRef(null),
        w = i.useCallback(
            (e) => {
                if (null == v) return !1;
                !(e.shiftKey && L) && !b && N(), e.persist(), null == P || P(), requestAnimationFrame(() => v(e));
            },
            [v, N, P, L, b]
        );
    return (
        i.useEffect(() => {
            S && ((0, c.F)(U), null == O || O());
        }, [S, O]),
        (0, r.jsxs)(s.P, {
            innerRef: U,
            className: o()(E.item, E.labelContainer, _._[t], R, {
                [E.disabled]: g,
                [E.focused]: S,
                [null != C ? C : '']: S
            }),
            onClick: g ? void 0 : w,
            'aria-disabled': g,
            ...A,
            'data-menu-item': 'true',
            children: [
                null != f &&
                    (0, r.jsx)('div', {
                        className: o()(E.iconContainerLeft, { [E.iconContainerLarge]: 'lg' === h }),
                        children: (0, r.jsx)(f, {
                            color: 'currentColor',
                            ...D,
                            className: o()(E.icon, null == D ? void 0 : D.className),
                            isFocused: S
                        })
                    }),
                (0, r.jsxs)('div', {
                    className: E.label,
                    children: [
                        (0, l.I)(n, e),
                        null != m &&
                            (0, r.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: o()(E.subtext, { [E.subtextLineClamp]: null != I }),
                                lineClamp: I,
                                children: m
                            })
                    ]
                }),
                null != p &&
                    (0, r.jsx)('div', {
                        className: E.hintContainer,
                        children: (0, l.I)(p, e)
                    }),
                null != a &&
                    (0, r.jsx)('div', {
                        className: E.iconContainer,
                        children: (0, r.jsx)(a, {
                            color: 'currentColor',
                            ...D,
                            className: o()(E.icon, null == D ? void 0 : D.className),
                            isFocused: S
                        })
                    }),
                T &&
                    (0, r.jsxs)('div', {
                        className: E.iconContainer,
                        children: [
                            (0, r.jsx)(d.ChevronSmallRightIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(E.caret, y)
                            }),
                            M && (0, r.jsx)(d.LottieSparkle, { className: E.sparkles })
                        ]
                    })
            ]
        })
    );
}
