n.d(t, {
    s: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(761224),
    u = n(898560),
    c = n(743236),
    d = n(481060),
    _ = n(939350),
    E = n(837244);
function f(e) {
    let { color: t = 'default', label: n, icon: a, iconLeft: f, iconLeftSize: h = 'md', hint: p, subtext: I, subtextLineClamp: m, hasSubmenu: T, disabled: g, isFocused: S, menuItemProps: A, action: N, onClose: O, onFocus: v, className: R, focusedClassName: C, subMenuIconClassName: y, dontCloseOnActionIfHoldingShiftKey: D, dontCloseOnAction: L, iconProps: b, sparkle: M } = e,
        P = i.useContext(u.r),
        U = i.useRef(null),
        w = i.useCallback(
            (e) => {
                if (null == N) return !1;
                !(e.shiftKey && D) && !L && O(), e.persist(), null == P || P(), requestAnimationFrame(() => N(e));
            },
            [N, O, P, D, L]
        );
    return (
        i.useEffect(() => {
            S && ((0, c.F)(U), null == v || v());
        }, [S, v]),
        (0, r.jsxs)(o.P, {
            innerRef: U,
            className: s()(E.item, E.labelContainer, _._[t], R, {
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
                        className: s()(E.iconContainerLeft, { [E.iconContainerLarge]: 'lg' === h }),
                        children: (0, r.jsx)(f, {
                            color: 'currentColor',
                            ...b,
                            className: s()(E.icon, null == b ? void 0 : b.className),
                            isFocused: S
                        })
                    }),
                (0, r.jsxs)('div', {
                    className: E.label,
                    children: [
                        (0, l.I)(n, e),
                        null != I &&
                            (0, r.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: s()(E.subtext, { [E.subtextLineClamp]: null != m }),
                                lineClamp: m,
                                children: I
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
                            ...b,
                            className: s()(E.icon, null == b ? void 0 : b.className),
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
                                className: s()(E.caret, y)
                            }),
                            M && (0, r.jsx)(d.LottieSparkle, { className: E.sparkles })
                        ]
                    })
            ]
        })
    );
}
