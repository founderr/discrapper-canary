r.d(n, {
    ZP: function () {
        return h;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(808629),
    o = r(536895),
    l = r(260866);
let u = '--';
function c(e) {
    switch (e.key) {
        case o.R8.ENTER:
        case o.R8.SPACE:
            return o.Us.SELECT_FOCUSED_ITEM;
        case o.R8.UP:
            return o.Us.NAVIGATE_UP;
        case o.R8.DOWN:
            return o.Us.NAVIGATE_DOWN;
        case o.R8.RIGHT:
            return o.Us.NAVIGATE_IN;
        case o.R8.LEFT:
            return o.Us.NAVIGATE_OUT;
    }
}
function d(e, n) {
    return null != n ? ''.concat((0, l.qR)(e, n.join(u))) : e;
}
function f(e, n) {
    return e.getElementById(n);
}
function _(e) {
    return e.tabIndex >= 0;
}
function h(e) {
    let { navId: n, items: r, initialFocusPath: i, onSelect: h, enabled: p = !0, closeMenu: m } = e,
        g = a.useRef(p);
    a.useLayoutEffect(() => {
        g.current = p;
    }, [p]);
    let [E, v] = a.useReducer(s.Z, {
            items: r,
            focusPath: i,
            focusIndex: -1
        }),
        I = a.useMemo(() => (0, l.P2)(v, 30), [v]);
    a.useEffect(() => {
        v({
            type: s.B.UPDATE_ITEMS,
            items: r
        });
    }, [r]);
    let { focusPath: T } = E,
        [b, y] = a.useState(!1),
        [S, A] = a.useState(!1),
        [{ onItemFocusMemoizer: N, onItemMouseEnterMemoizer: C }] = a.useState(() => ({
            onItemFocusMemoizer: new l.$o((e) => () => {
                y(!0),
                    v({
                        type: s.B.SET_FOCUS_PATH,
                        path: e.split(u)
                    });
            }),
            onItemMouseEnterMemoizer: new l.$o((e) => () => {
                A(!1),
                    v({
                        type: s.B.SET_FOCUS_PATH,
                        path: e.split(u)
                    });
            })
        })),
        R = a.useCallback(
            (e) => {
                if (!g.current) return;
                e.key === o.R8.ESCAPE && null != m && (e.stopPropagation(), e.preventDefault(), m());
                let r = c(e);
                switch (r) {
                    case o.Us.NAVIGATE_UP:
                    case o.Us.NAVIGATE_DOWN:
                    case o.Us.NAVIGATE_IN:
                    case o.Us.NAVIGATE_OUT:
                        e.preventDefault(), e.stopPropagation(), A(!0), I({ type: r });
                        return;
                    case o.Us.SELECT_FOCUSED_ITEM:
                        var i;
                        if (e.repeat || _(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), A(!1), I({ type: r }), null != h)) {
                            h(T);
                            return;
                        }
                        let a = f(null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document, d(n, T));
                        null == a || a.click();
                }
            },
            [I, n, T, h, m]
        ),
        O = a.useCallback(() => {
            !b && y(!0);
        }, [b]),
        D = a.useCallback(
            (e) => {
                if (e.target !== e.currentTarget) {
                    if (!e.currentTarget.contains(e.relatedTarget)) b && y(!1);
                }
            },
            [b]
        ),
        L = a.useCallback(() => {
            v({
                type: s.B.SET_FOCUS_PATH,
                path: []
            }),
                y(!1);
        }, []),
        x = a.useCallback((e) => e.every((e, n) => T[n] === e), [T]),
        w = a.useCallback(
            () => ({
                role: 'menu',
                id: n,
                tabIndex: -1,
                onKeyDown: R,
                onFocus: O,
                onBlur: D,
                onMouseLeave: L,
                'aria-activedescendant': T.length > 0 ? (0, l.qR)(n, T.join(u)) : void 0
            }),
            [n, R, O, D, L, T]
        ),
        P = a.useCallback(
            (e) => {
                let { path: r } = e;
                return {
                    role: 'menu',
                    tabIndex: -1,
                    'aria-activedescendant': x(r) ? (0, l.qR)(n, T.join(u)) : void 0,
                    focusIndex: E.focusIndex,
                    isUsingKeyboardNavigation: S
                };
            },
            [n, T, x, E.focusIndex, S]
        ),
        M = a.useCallback(
            (e) => {
                let { path: r, hasSubmenu: i = !1, navigable: a = !0, role: s = 'menuitem' } = e,
                    o = r.join(u);
                return {
                    ...(i
                        ? {
                              'aria-expanded': x(r),
                              'aria-haspopup': !0
                          }
                        : {}),
                    role: s,
                    id: (0, l.qR)(n, o),
                    tabIndex: -1,
                    onFocus: a ? N.get(o) : () => {},
                    onMouseEnter: a ? C.get(o) : () => {}
                };
            },
            [n, x, N, C]
        );
    return a.useMemo(
        () => ({
            dispatch: I,
            getContainerProps: w,
            getSubmenuProps: P,
            getItemProps: M,
            isFocused: x,
            isUsingKeyboardNavigation: S
        }),
        [I, w, P, M, x, S]
    );
}
