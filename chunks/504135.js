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
    d = n(481060),
    f = n(939350),
    _ = n(667947);
function h(e) {
    let { color: t = 'default', label: n, icon: a, iconLeft: h, iconLeftSize: p = 'md', hint: m, subtext: g, subtextLineClamp: E, hasSubmenu: v, disabled: I, isFocused: S, menuItemProps: T, action: b, onClose: y, onFocus: A, className: N, focusedClassName: C, subMenuIconClassName: R, dontCloseOnActionIfHoldingShiftKey: O, dontCloseOnAction: D, iconProps: L, sparkle: x } = e,
        w = i.useContext(u.r),
        M = i.useRef(null),
        P = i.useCallback(
            (e) => {
                if (null == b) return !1;
                !(e.shiftKey && O) && !D && y(), e.persist(), null == w || w(), requestAnimationFrame(() => b(e));
            },
            [b, y, w, O, D]
        );
    return (
        i.useEffect(() => {
            S && ((0, c.F)(M), null == A || A());
        }, [S, A]),
        (0, r.jsxs)(o.P, {
            innerRef: M,
            className: s()(_.item, _.labelContainer, f._[t], N, {
                [_.disabled]: I,
                [_.focused]: S,
                [null != C ? C : '']: S
            }),
            onClick: I ? void 0 : P,
            'aria-disabled': I,
            ...T,
            'data-menu-item': 'true',
            children: [
                null != h &&
                    (0, r.jsx)('div', {
                        className: s()(_.iconContainerLeft, { [_.iconContainerLarge]: 'lg' === p }),
                        children: (0, r.jsx)(h, {
                            color: 'currentColor',
                            ...L,
                            className: s()(_.icon, null == L ? void 0 : L.className),
                            isFocused: S
                        })
                    }),
                (0, r.jsxs)('div', {
                    className: _.label,
                    children: [
                        (0, l.I)(n, e),
                        null != g &&
                            (0, r.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                className: s()(_.subtext, { [_.subtextLineClamp]: null != E }),
                                lineClamp: E,
                                children: g
                            })
                    ]
                }),
                null != m &&
                    (0, r.jsx)('div', {
                        className: _.hintContainer,
                        children: (0, l.I)(m, e)
                    }),
                null != a &&
                    (0, r.jsx)('div', {
                        className: _.iconContainer,
                        children: (0, r.jsx)(a, {
                            color: 'currentColor',
                            ...L,
                            className: s()(_.icon, null == L ? void 0 : L.className),
                            isFocused: S
                        })
                    }),
                v &&
                    (0, r.jsxs)('div', {
                        className: _.iconContainer,
                        children: [
                            (0, r.jsx)(d.ChevronSmallRightIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(_.caret, R)
                            }),
                            x && (0, r.jsx)(d.LottieSparkle, { className: _.sparkles })
                        ]
                    })
            ]
        })
    );
}
