n.d(t, {
    ZP: function () {
        return E;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(808629),
    o = n(536895),
    s = n(260866);
let l = '--';
function u(e) {
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
function c(e, t) {
    return null != t ? ''.concat((0, s.qR)(e, t.join(l))) : e;
}
function d(e, t) {
    return e.getElementById(t);
}
function _(e) {
    return e.tabIndex >= 0;
}
function E(e) {
    let { navId: t, items: n, initialFocusPath: r, onSelect: E, enabled: f = !0, closeMenu: h } = e,
        p = i.useRef(f);
    i.useLayoutEffect(() => {
        p.current = f;
    }, [f]);
    let [m, I] = i.useReducer(a.Z, {
            items: n,
            focusPath: r,
            focusIndex: -1
        }),
        T = i.useMemo(() => (0, s.P2)(I, 30), [I]);
    i.useEffect(() => {
        I({
            type: a.B.UPDATE_ITEMS,
            items: n
        });
    }, [n]);
    let { focusPath: g } = m,
        [S, A] = i.useState(!1),
        [v, N] = i.useState(!1),
        [{ onItemFocusMemoizer: O, onItemMouseEnterMemoizer: R }] = i.useState(() => ({
            onItemFocusMemoizer: new s.$o((e) => () => {
                A(!0),
                    I({
                        type: a.B.SET_FOCUS_PATH,
                        path: e.split(l)
                    });
            }),
            onItemMouseEnterMemoizer: new s.$o((e) => () => {
                N(!1),
                    I({
                        type: a.B.SET_FOCUS_PATH,
                        path: e.split(l)
                    });
            })
        })),
        C = i.useCallback(
            (e) => {
                if (!p.current) return;
                e.key === o.R8.ESCAPE && null != h && (e.stopPropagation(), e.preventDefault(), h());
                let n = u(e);
                switch (n) {
                    case o.Us.NAVIGATE_UP:
                    case o.Us.NAVIGATE_DOWN:
                    case o.Us.NAVIGATE_IN:
                    case o.Us.NAVIGATE_OUT:
                        e.preventDefault(), e.stopPropagation(), N(!0), T({ type: n });
                        return;
                    case o.Us.SELECT_FOCUSED_ITEM:
                        var r;
                        if (e.repeat || _(e.target)) return;
                        if ((e.preventDefault(), e.stopPropagation(), N(!1), T({ type: n }), null != E)) {
                            E(g);
                            return;
                        }
                        let i = d(null !== (r = e.target.ownerDocument) && void 0 !== r ? r : document, c(t, g));
                        null == i || i.click();
                }
            },
            [T, t, g, E, h]
        ),
        y = i.useCallback(() => {
            !S && A(!0);
        }, [S]),
        L = i.useCallback(
            (e) => {
                if (e.target !== e.currentTarget) {
                    if (!e.currentTarget.contains(e.relatedTarget)) S && A(!1);
                }
            },
            [S]
        ),
        b = i.useCallback(() => {
            I({
                type: a.B.SET_FOCUS_PATH,
                path: []
            }),
                A(!1);
        }, []),
        D = i.useCallback((e) => e.every((e, t) => g[t] === e), [g]),
        M = i.useCallback(
            () => ({
                role: 'menu',
                id: t,
                tabIndex: -1,
                onKeyDown: C,
                onFocus: y,
                onBlur: L,
                onMouseLeave: b,
                'aria-activedescendant': g.length > 0 ? (0, s.qR)(t, g.join(l)) : void 0
            }),
            [t, C, y, L, b, g]
        ),
        P = i.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: 'menu',
                    tabIndex: -1,
                    'aria-activedescendant': D(n) ? (0, s.qR)(t, g.join(l)) : void 0,
                    focusIndex: m.focusIndex,
                    isUsingKeyboardNavigation: v
                };
            },
            [t, g, D, m.focusIndex, v]
        ),
        U = i.useCallback(
            (e) => {
                let { path: n, hasSubmenu: r = !1, navigable: i = !0, role: a = 'menuitem' } = e,
                    o = n.join(l);
                return {
                    ...(r
                        ? {
                              'aria-expanded': D(n),
                              'aria-haspopup': !0
                          }
                        : {}),
                    role: a,
                    id: (0, s.qR)(t, o),
                    tabIndex: -1,
                    onFocus: i ? O.get(o) : () => {},
                    onMouseEnter: i ? R.get(o) : () => {}
                };
            },
            [t, D, O, R]
        );
    return i.useMemo(
        () => ({
            dispatch: T,
            getContainerProps: M,
            getSubmenuProps: P,
            getItemProps: U,
            isFocused: D,
            isUsingKeyboardNavigation: v
        }),
        [T, M, P, U, D, v]
    );
}
