r.d(n, {
    Qs: function () {
        return T;
    },
    Uf: function () {
        return I;
    },
    VO: function () {
        return b;
    },
    Xs: function () {
        return v;
    },
    ep: function () {
        return E;
    },
    t$: function () {
        return S;
    },
    yi: function () {
        return y;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(192379),
    o = r(392711),
    l = r.n(o),
    u = r(536895),
    c = r(566064),
    d = r(611144),
    f = r(468194),
    _ = r(477690),
    h = r(691251),
    p = r(981631);
let m = (0, f.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    g = 8,
    E = (e) => {
        let { gridWrapperRef: n, containerWidth: r, showingEmptyState: i, listPaddingLeft: a = m, listScrollbarWidth: o = g } = e,
            [u, c] = s.useState(void 0),
            d = s.useCallback(() => {
                if (null == n.current) return null;
                c(n.current.offsetWidth - a - o);
            }, [n, a, o]);
        return (
            s.useLayoutEffect(() => {
                d();
            }, [r, d, i]),
            s.useEffect(() => {
                let e = l().debounce(d, 250);
                return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [d]),
            u
        );
    },
    v = (e) => {
        let { activeCategoryIndex: n, listRef: r, searchQuery: i } = e,
            a = s.useRef(i),
            o = s.useRef(!0);
        s.useLayoutEffect(() => {
            if ('' === i && '' !== a.current) {
                var e;
                null === (e = r.current) || void 0 === e || e.scrollToSectionTop(n);
            }
            a.current = i;
        }, [i, n, r]),
            s.useLayoutEffect(() => {
                if (o.current) {
                    var e;
                    null === (e = r.current) || void 0 === e || e.scrollToSectionTop(n), (o.current = !1);
                }
            }, [n, r]),
            s.useEffect(() => {
                a.current = i;
            }, [i]);
    },
    I = (e) => {
        let { listRef: n, searchQuery: r, nitroLockedSectionStates: i, setShowUpsell: a, setUpsellGlowOpacity: o } = e,
            l = s.useCallback(
                (e) => {
                    if ('' !== r) {
                        null == o || o(0);
                        return;
                    }
                    if (null == n.current) return;
                    let a = i.findIndex((e) => e.isNitroLocked);
                    if (-1 === a) {
                        null == o || o(0);
                        return;
                    }
                    let s = n.current.getSectionDescriptors();
                    if (null == s || 0 === s.length || s.length !== i.length) return;
                    let l = s[a],
                        u = e + n.current.getListDimensions().height - 250,
                        c = 250,
                        d = Math.min(Math.max((l.offset.top - u) / c, 0), 1);
                    null == o || o(d);
                },
                [r, n, i, o]
            ),
            u = s.useCallback(
                (e) => {
                    if ('' !== r) {
                        null == a || a(!1);
                        return;
                    }
                    if (null == n.current) return;
                    let s = n.current.getSectionDescriptors();
                    if (null == s || 0 === s.length || s.length !== i.length) return;
                    let o = n.current.getListDimensions().height,
                        l = e + 0.7 * o,
                        u = e + 0.85 * o,
                        c = !1,
                        d = !1;
                    i.forEach((e, n) => {
                        if (!e.isNitroLocked) return;
                        let r = s[n];
                        r.offset.top <= u && r.offset.bottom >= u && (d = !0), r.offset.top <= l && r.offset.bottom >= l && (c = !0);
                    }),
                        null == a || a(d && c);
                },
                [r, n, i, a]
            );
        return s.useCallback(
            (e) => {
                u(e), l(e);
            },
            [u, l]
        );
    },
    T = (e) => {
        let { activeCategoryIndex: n, listRef: r, isScrolling: i, searchQuery: a, scrollOffset: o = 0, onActiveCategoryIndexChange: u, disableForSearch: c = !0 } = e,
            d = s.useRef(p.xAR),
            f = s.useMemo(
                () =>
                    l().debounce(() => {
                        i.current = !1;
                    }, 250),
                [i]
            ),
            _ = s.useMemo(
                () =>
                    l().debounce((e) => {
                        ('' === a || !c) &&
                            (window.cancelAnimationFrame(d.current),
                            (d.current = window.requestAnimationFrame(() => {
                                var i;
                                let a = null === (i = r.current) || void 0 === i ? void 0 : i.getSectionDescriptors();
                                if (null == a) return;
                                let s = a.findIndex((n, r) => {
                                        let i = a[r + 1],
                                            s = e + o >= n.offset.top,
                                            l = null != i && e + o < i.offset.top;
                                        return (null != i && !s && !l) || (s && l) || (s && null == i);
                                    }),
                                    l = -1 === s ? 0 : s;
                                n !== l && u(l);
                            })));
                    }, 0),
                [a, r, n, o, u, c]
            );
        return s.useCallback(
            (e) => {
                (i.current = !0), f(), _(e);
            },
            [i, f, _]
        );
    },
    b = (e) => {
        let { columnCounts: n, gridNavigatorId: r, itemGrid: i, itemList: a, onGridNavigatorItemSelect: o, onGridNavigatorPositionChange: l } = e,
            d = s.useRef(!1),
            f = s.useCallback(
                (e, n) => {
                    let r = i[n];
                    if (null != r) return r[e];
                },
                [i]
            ),
            _ = s.useCallback(
                (e) => {
                    let { focusedX: n, focusedY: r } = e;
                    d.current = !0;
                    let i = f(n, r);
                    if (null == i) return;
                    let { visibleRowIndex: s, columnIndex: o } = i;
                    l(o, s), null != a.current && a.current.scrollRowIntoView(r);
                },
                [f, a, l]
            ),
            h = s.useCallback(
                (e, n, r) => {
                    switch (r.type) {
                        case u.Us.NAVIGATE_UP:
                        case u.Us.NAVIGATE_DOWN:
                        case u.Us.NAVIGATE_RIGHT:
                        case u.Us.NAVIGATE_LEFT:
                        case u.Us.NAVIGATE_INLINE_START:
                        case u.Us.NAVIGATE_INLINE_END:
                        case u.Us.NAVIGATE_START:
                        case u.Us.NAVIGATE_END:
                        case u.Us.NAVIGATE_CROSSLINE_START:
                        case u.Us.NAVIGATE_CROSSLINE_END:
                            _(n);
                    }
                },
                [_]
            ),
            p = s.useCallback(
                (e, n, r) => {
                    let i = f(e, n);
                    null != i && o(i, r);
                },
                [f, o]
            ),
            {
                dispatch: m,
                getItemProps: g,
                getRowProps: E,
                getContainerProps: v
            } = (0, c.Z)({
                navId: r,
                columnCounts: n,
                onDispatch: h,
                onSelect: p,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }),
            { gridContainerProps: I, handleGridContainerKeyDown: T } = s.useMemo(() => {
                let e = v();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                };
            }, [v]);
        return (
            s.useEffect(() => {
                let e = () => {
                    d.current = !1;
                };
                return window.addEventListener('mousemove', e), () => window.removeEventListener('mousemove', e);
            }, []),
            {
                gridDispatch: m,
                getItemProps: g,
                getRowProps: E,
                gridContainerProps: I,
                handleGridContainerKeyDown: T,
                isUsingKeyboardNavigation: d
            }
        );
    };
function y(e) {
    let { categories: n, collapsedCategories: r, gridWidth: i = 0, listPaddingRight: a = 0, itemNodeWidth: o, itemNodeMargin: l = 0 } = e;
    return s.useMemo(() => {
        let e = Math.max(1, Math.floor((i - a + l) / (o + l))),
            s = Math.floor(Math.max(l, (i - a - o * e) / (e - 1))),
            u = [],
            c = [],
            d = [],
            f = 0,
            _ = 0,
            h = 0;
        if (0 !== i) {
            let i = function (n, r) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = Math.ceil(n.length / e);
                c[_] = i ? 0 : a;
                for (let s = 0; s < a; s++) {
                    let a = s * e,
                        o = a + e,
                        l = n.slice(a, o).map((e, n) => ({
                            item: e,
                            gridSectionIndex: _,
                            rowIndex: f,
                            columnIndex: n,
                            visibleRowIndex: h,
                            category: r
                        }));
                    !i && (h++, d.push(l), u.push(l.length)), f++;
                }
                _++;
            };
            for (let e of n)
                if (e.items.length > 0) {
                    var p;
                    i(e.items, e.categoryInfo.type, null !== (p = null == r ? void 0 : r.has(''.concat(e.key))) && void 0 !== p && p);
                }
        }
        return {
            expressionsGrid: d,
            rowCount: f,
            rowCountBySection: c,
            columnCounts: u,
            gutterWidth: s
        };
    }, [n, r, i, l, o, a]);
}
function S(e) {
    let { columnCounts: n, expressionsGrid: r, expressionsListRef: i, store: a, gridNavigatorId: o, onSelectItem: l } = e,
        {
            gridDispatch: u,
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: _,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: m
        } = b({
            columnCounts: n,
            gridNavigatorId: o,
            itemGrid: r,
            itemList: i,
            onGridNavigatorItemSelect: l,
            onGridNavigatorPositionChange: a.setInspectedExpressionPosition
        });
    return (
        s.useEffect(
            () =>
                a.subscribe(
                    (e) => e.inspectedExpressionPosition,
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: n, rowIndex: r, source: i } = e;
                        i !== h.u.GRID_NAVIGATOR_EVENT &&
                            u({
                                type: d.s.SET_FOCUSED_POSITION,
                                x: n,
                                y: r
                            });
                    }
                ),
            [u, a]
        ),
        {
            getItemProps: c,
            getRowProps: f,
            gridContainerProps: _,
            handleGridContainerKeyDown: p,
            isUsingKeyboardNavigation: m
        }
    );
}
