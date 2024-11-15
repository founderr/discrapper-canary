n.d(t, {
    ZP: function () {
        return o;
    }
}),
    n(47120);
var r = n(192379),
    i = n(808629),
    a = n(536895),
    s = n(260866);
function o(e) {
    let { navId: t, items: n, initialFocusPath: o, onSelect: l, enabled: u = !0, closeMenu: c } = e,
        d = r.useRef(u);
    r.useLayoutEffect(() => {
        d.current = u;
    }, [u]);
    let [f, _] = r.useReducer(i.Z, {
            items: n,
            focusPath: o,
            focusIndex: -1
        }),
        p = r.useMemo(() => (0, s.P2)(_, 30), [_]);
    r.useEffect(() => {
        _({
            type: i.B.UPDATE_ITEMS,
            items: n
        });
    }, [n]);
    let { focusPath: h } = f,
        [m, g] = r.useState(!1),
        [E, v] = r.useState(!1),
        [{ onItemFocusMemoizer: b, onItemMouseEnterMemoizer: I }] = r.useState(() => ({
            onItemFocusMemoizer: new s.$o((e) => () => {
                g(!0),
                    _({
                        type: i.B.SET_FOCUS_PATH,
                        path: e.split('--')
                    });
            }),
            onItemMouseEnterMemoizer: new s.$o((e) => () => {
                v(!1),
                    _({
                        type: i.B.SET_FOCUS_PATH,
                        path: e.split('--')
                    });
            })
        })),
        S = r.useCallback(
            (e) => {
                if (!d.current) return;
                e.key === a.R8.ESCAPE && null != c && (e.stopPropagation(), e.preventDefault(), c());
                let n = (function (e) {
                    switch (e.key) {
                        case a.R8.ENTER:
                        case a.R8.SPACE:
                            return a.Us.SELECT_FOCUSED_ITEM;
                        case a.R8.UP:
                            return a.Us.NAVIGATE_UP;
                        case a.R8.DOWN:
                            return a.Us.NAVIGATE_DOWN;
                        case a.R8.RIGHT:
                            return a.Us.NAVIGATE_IN;
                        case a.R8.LEFT:
                            return a.Us.NAVIGATE_OUT;
                    }
                })(e);
                switch (n) {
                    case a.Us.NAVIGATE_UP:
                    case a.Us.NAVIGATE_DOWN:
                    case a.Us.NAVIGATE_IN:
                    case a.Us.NAVIGATE_OUT:
                        e.preventDefault(), e.stopPropagation(), v(!0), p({ type: n });
                        return;
                    case a.Us.SELECT_FOCUSED_ITEM:
                        var r, i, o, u, f;
                        if (e.repeat) return;
                        if (e.target.tabIndex >= 0) return;
                        if ((e.preventDefault(), e.stopPropagation(), v(!1), p({ type: n }), null != l)) {
                            l(h);
                            return;
                        }
                        let _ = ((u = null !== (r = e.target.ownerDocument) && void 0 !== r ? r : document), (f = ((i = t), null != (o = h) ? ''.concat((0, s.qR)(i, o.join('--'))) : i)), u.getElementById(f));
                        null == _ || _.click();
                }
            },
            [p, t, h, l, c]
        ),
        T = r.useCallback(() => {
            !m && g(!0);
        }, [m]),
        y = r.useCallback(
            (e) => {
                if (e.target !== e.currentTarget) {
                    if (!e.currentTarget.contains(e.relatedTarget)) m && g(!1);
                }
            },
            [m]
        ),
        A = r.useCallback(() => {
            _({
                type: i.B.SET_FOCUS_PATH,
                path: []
            }),
                g(!1);
        }, []),
        N = r.useCallback((e) => e.every((e, t) => h[t] === e), [h]),
        C = r.useCallback(
            () => ({
                role: 'menu',
                id: t,
                tabIndex: -1,
                onKeyDown: S,
                onFocus: T,
                onBlur: y,
                onMouseLeave: A,
                'aria-activedescendant': h.length > 0 ? (0, s.qR)(t, h.join('--')) : void 0
            }),
            [t, S, T, y, A, h]
        ),
        R = r.useCallback(
            (e) => {
                let { path: n } = e;
                return {
                    role: 'menu',
                    tabIndex: -1,
                    'aria-activedescendant': N(n) ? (0, s.qR)(t, h.join('--')) : void 0,
                    focusIndex: f.focusIndex,
                    isUsingKeyboardNavigation: E
                };
            },
            [t, h, N, f.focusIndex, E]
        ),
        O = r.useCallback(
            (e) => {
                let { path: n, hasSubmenu: r = !1, navigable: i = !0, role: a = 'menuitem' } = e,
                    o = n.join('--');
                return {
                    ...(r
                        ? {
                              'aria-expanded': N(n),
                              'aria-haspopup': !0
                          }
                        : {}),
                    role: a,
                    id: (0, s.qR)(t, o),
                    tabIndex: -1,
                    onFocus: i ? b.get(o) : () => {},
                    onMouseEnter: i ? I.get(o) : () => {}
                };
            },
            [t, N, b, I]
        );
    return r.useMemo(
        () => ({
            dispatch: p,
            getContainerProps: C,
            getSubmenuProps: R,
            getItemProps: O,
            isFocused: N,
            isUsingKeyboardNavigation: E
        }),
        [p, C, R, O, N, E]
    );
}
