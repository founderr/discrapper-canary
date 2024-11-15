n.d(t, {
    s: function () {
        return p;
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
function p(e) {
    let { color: t = 'default', label: n, icon: a, iconLeft: p, iconLeftSize: h = 'md', hint: m, subtext: g, subtextLineClamp: E, hasSubmenu: v, disabled: b, isFocused: I, menuItemProps: S, action: T, onClose: y, onFocus: A, className: N, focusedClassName: C, subMenuIconClassName: R, dontCloseOnActionIfHoldingShiftKey: O, dontCloseOnAction: D, iconProps: L, sparkle: x } = e,
        w = i.useContext(u.r),
        M = i.useRef(null),
        P = i.useCallback(
            (e) => {
                if (null == T) return !1;
                !(e.shiftKey && O) && !D && y(), e.persist(), null == w || w(), requestAnimationFrame(() => T(e));
            },
            [T, y, w, O, D]
        );
    return (
        i.useEffect(() => {
            I && ((0, c.F)(M), null == A || A());
        }, [I, A]),
        (0, r.jsxs)(o.P, {
            innerRef: M,
            className: s()(_.item, _.labelContainer, f._[t], N, {
                [_.disabled]: b,
                [_.focused]: I,
                [null != C ? C : '']: I
            }),
            onClick: b ? void 0 : P,
            'aria-disabled': b,
            ...S,
            'data-menu-item': 'true',
            children: [
                null != p &&
                    (0, r.jsx)('div', {
                        className: s()(_.iconContainerLeft, { [_.iconContainerLarge]: 'lg' === h }),
                        children: (0, r.jsx)(p, {
                            color: 'currentColor',
                            ...L,
                            className: s()(_.icon, null == L ? void 0 : L.className),
                            isFocused: I
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
                            isFocused: I
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
