n.d(t, {
    Qs: function () {
        return g;
    },
    Uf: function () {
        return T;
    },
    VO: function () {
        return S;
    },
    Xs: function () {
        return I;
    },
    ep: function () {
        return m;
    },
    t$: function () {
        return v;
    },
    yi: function () {
        return A;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(470079),
    o = n(392711),
    s = n.n(o),
    l = n(536895),
    u = n(566064),
    c = n(611144),
    d = n(468194),
    _ = n(477690),
    E = n(691251),
    f = n(981631);
let h = (0, d.Mg)(_.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    p = 8,
    m = (e) => {
        let { gridWrapperRef: t, containerWidth: n, showingEmptyState: r, listPaddingLeft: i = h, listScrollbarWidth: o = p } = e,
            [l, u] = a.useState(void 0),
            c = a.useCallback(() => {
                if (null == t.current) return null;
                u(t.current.offsetWidth - i - o);
            }, [t, i, o]);
        return (
            a.useLayoutEffect(() => {
                c();
            }, [n, c, r]),
            a.useEffect(() => {
                let e = s().debounce(c, 250);
                return window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [c]),
            l
        );
    },
    I = (e) => {
        let { activeCategoryIndex: t, listRef: n, searchQuery: r } = e,
            i = a.useRef(r),
            o = a.useRef(!0);
        a.useLayoutEffect(() => {
            if ('' === r && '' !== i.current) {
                var e;
                null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t);
            }
            i.current = r;
        }, [r, t, n]),
            a.useLayoutEffect(() => {
                if (o.current) {
                    var e;
                    null === (e = n.current) || void 0 === e || e.scrollToSectionTop(t), (o.current = !1);
                }
            }, [t, n]),
            a.useEffect(() => {
                i.current = r;
            }, [r]);
    },
    T = (e) => {
        let { listRef: t, searchQuery: n, nitroLockedSectionStates: r, setShowUpsell: i, setUpsellGlowOpacity: o } = e,
            s = a.useCallback(
                (e) => {
                    if ('' !== n) {
                        null == o || o(0);
                        return;
                    }
                    if (null == t.current) return;
                    let i = r.findIndex((e) => e.isNitroLocked);
                    if (-1 === i) {
                        null == o || o(0);
                        return;
                    }
                    let a = t.current.getSectionDescriptors();
                    if (null == a || 0 === a.length || a.length !== r.length) return;
                    let s = a[i],
                        l = e + t.current.getListDimensions().height - 250,
                        u = 250,
                        c = Math.min(Math.max((s.offset.top - l) / u, 0), 1);
                    null == o || o(c);
                },
                [n, t, r, o]
            ),
            l = a.useCallback(
                (e) => {
                    if ('' !== n) {
                        null == i || i(!1);
                        return;
                    }
                    if (null == t.current) return;
                    let a = t.current.getSectionDescriptors();
                    if (null == a || 0 === a.length || a.length !== r.length) return;
                    let o = t.current.getListDimensions().height,
                        s = e + 0.7 * o,
                        l = e + 0.85 * o,
                        u = !1,
                        c = !1;
                    r.forEach((e, t) => {
                        if (!e.isNitroLocked) return;
                        let n = a[t];
                        n.offset.top <= l && n.offset.bottom >= l && (c = !0), n.offset.top <= s && n.offset.bottom >= s && (u = !0);
                    }),
                        null == i || i(c && u);
                },
                [n, t, r, i]
            );
        return a.useCallback(
            (e) => {
                l(e), s(e);
            },
            [l, s]
        );
    },
    g = (e) => {
        let { activeCategoryIndex: t, listRef: n, isScrolling: r, searchQuery: i, scrollOffset: o = 0, onActiveCategoryIndexChange: l, disableForSearch: u = !0 } = e,
            c = a.useRef(f.xAR),
            d = a.useMemo(
                () =>
                    s().debounce(() => {
                        r.current = !1;
                    }, 250),
                [r]
            ),
            _ = a.useMemo(
                () =>
                    s().debounce((e) => {
                        ('' === i || !u) &&
                            (window.cancelAnimationFrame(c.current),
                            (c.current = window.requestAnimationFrame(() => {
                                var r;
                                let i = null === (r = n.current) || void 0 === r ? void 0 : r.getSectionDescriptors();
                                if (null == i) return;
                                let a = i.findIndex((t, n) => {
                                        let r = i[n + 1],
                                            a = e + o >= t.offset.top,
                                            s = null != r && e + o < r.offset.top;
                                        return (null != r && !a && !s) || (a && s) || (a && null == r);
                                    }),
                                    s = -1 === a ? 0 : a;
                                t !== s && l(s);
                            })));
                    }, 0),
                [i, n, t, o, l, u]
            );
        return a.useCallback(
            (e) => {
                (r.current = !0), d(), _(e);
            },
            [r, d, _]
        );
    },
    S = (e) => {
        let { columnCounts: t, gridNavigatorId: n, itemGrid: r, itemList: i, onGridNavigatorItemSelect: o, onGridNavigatorPositionChange: s } = e,
            c = a.useRef(!1),
            d = a.useCallback(
                (e, t) => {
                    let n = r[t];
                    if (null != n) return n[e];
                },
                [r]
            ),
            _ = a.useCallback(
                (e) => {
                    let { focusedX: t, focusedY: n } = e;
                    c.current = !0;
                    let r = d(t, n);
                    if (null == r) return;
                    let { visibleRowIndex: a, columnIndex: o } = r;
                    s(o, a), null != i.current && i.current.scrollRowIntoView(n);
                },
                [d, i, s]
            ),
            E = a.useCallback(
                (e, t, n) => {
                    switch (n.type) {
                        case l.Us.NAVIGATE_UP:
                        case l.Us.NAVIGATE_DOWN:
                        case l.Us.NAVIGATE_RIGHT:
                        case l.Us.NAVIGATE_LEFT:
                        case l.Us.NAVIGATE_INLINE_START:
                        case l.Us.NAVIGATE_INLINE_END:
                        case l.Us.NAVIGATE_START:
                        case l.Us.NAVIGATE_END:
                        case l.Us.NAVIGATE_CROSSLINE_START:
                        case l.Us.NAVIGATE_CROSSLINE_END:
                            _(t);
                    }
                },
                [_]
            ),
            f = a.useCallback(
                (e, t, n) => {
                    let r = d(e, t);
                    null != r && o(r, n);
                },
                [d, o]
            ),
            {
                dispatch: h,
                getItemProps: p,
                getRowProps: m,
                getContainerProps: I
            } = (0, u.Z)({
                navId: n,
                columnCounts: t,
                onDispatch: E,
                onSelect: f,
                autoFocusElement: !1,
                useVirtualFocus: !0
            }),
            { gridContainerProps: T, handleGridContainerKeyDown: g } = a.useMemo(() => {
                let e = I();
                return {
                    gridContainerProps: e,
                    handleGridContainerKeyDown: e.onKeyDown
                };
            }, [I]);
        return (
            a.useEffect(() => {
                let e = () => {
                    c.current = !1;
                };
                return window.addEventListener('mousemove', e), () => window.removeEventListener('mousemove', e);
            }, []),
            {
                gridDispatch: h,
                getItemProps: p,
                getRowProps: m,
                gridContainerProps: T,
                handleGridContainerKeyDown: g,
                isUsingKeyboardNavigation: c
            }
        );
    };
function A(e) {
    let { categories: t, collapsedCategories: n, gridWidth: r = 0, listPaddingRight: i = 0, itemNodeWidth: o, itemNodeMargin: s = 0 } = e;
    return a.useMemo(() => {
        let e = Math.max(1, Math.floor((r - i + s) / (o + s))),
            a = Math.floor(Math.max(s, (r - i - o * e) / (e - 1))),
            l = [],
            u = [],
            c = [],
            d = 0,
            _ = 0,
            E = 0;
        if (0 !== r) {
            let r = function (t, n) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = Math.ceil(t.length / e);
                u[_] = r ? 0 : i;
                for (let a = 0; a < i; a++) {
                    let i = a * e,
                        o = i + e,
                        s = t.slice(i, o).map((e, t) => ({
                            item: e,
                            gridSectionIndex: _,
                            rowIndex: d,
                            columnIndex: t,
                            visibleRowIndex: E,
                            category: n
                        }));
                    !r && (E++, c.push(s), l.push(s.length)), d++;
                }
                _++;
            };
            for (let e of t)
                if (e.items.length > 0) {
                    var f;
                    r(e.items, e.categoryInfo.type, null !== (f = null == n ? void 0 : n.has(''.concat(e.key))) && void 0 !== f && f);
                }
        }
        return {
            expressionsGrid: c,
            rowCount: d,
            rowCountBySection: u,
            columnCounts: l,
            gutterWidth: a
        };
    }, [t, n, r, s, o, i]);
}
function v(e) {
    let { columnCounts: t, expressionsGrid: n, expressionsListRef: r, store: i, gridNavigatorId: o, onSelectItem: s } = e,
        {
            gridDispatch: l,
            getItemProps: u,
            getRowProps: d,
            gridContainerProps: _,
            handleGridContainerKeyDown: f,
            isUsingKeyboardNavigation: h
        } = S({
            columnCounts: t,
            gridNavigatorId: o,
            itemGrid: n,
            itemList: r,
            onGridNavigatorItemSelect: s,
            onGridNavigatorPositionChange: i.setInspectedExpressionPosition
        });
    return (
        a.useEffect(
            () =>
                i.useStore.subscribe(
                    (e) => {
                        if (null == e) return;
                        let { columnIndex: t, rowIndex: n, source: r } = e;
                        r !== E.u.GRID_NAVIGATOR_EVENT &&
                            l({
                                type: c.s.SET_FOCUSED_POSITION,
                                x: t,
                                y: n
                            });
                    },
                    (e) => e.inspectedExpressionPosition
                ),
            [l, i]
        ),
        {
            getItemProps: u,
            getRowProps: d,
            gridContainerProps: _,
            handleGridContainerKeyDown: f,
            isUsingKeyboardNavigation: h
        }
    );
}
