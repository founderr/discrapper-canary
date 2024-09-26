n.d(t, {
    V: function () {
        return w;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(423802),
    u = n(372817),
    c = n(924826),
    d = n(91192),
    _ = n(260866),
    E = n(693789),
    f = n(1561),
    h = n(84735),
    p = n(15127),
    m = n(766646),
    I = n(742746),
    T = n(235874),
    g = n(922770),
    S = n(993365),
    A = n(481060),
    v = n(393238),
    N = n(434650),
    O = n(98650),
    R = n(237617),
    C = n(748585),
    y = n(689938),
    L = n(711230);
let b = 44,
    D = { keys: ['label'] };
function M(e) {
    return e.label;
}
function P(e) {
    let { active: t, loadableOptions: n, debounceTime: r } = e,
        i = 'function' == typeof n,
        [o, s] = a.useState({
            options: i ? [] : n,
            query: '',
            debouncedQuery: '',
            loading: !1
        }),
        { options: l, loading: u, query: c, debouncedQuery: d } = o,
        _ = a.useCallback(
            (e) =>
                s((t) => ({
                    ...t,
                    loading: i,
                    query: e,
                    debouncedQuery: e
                })),
            [i]
        );
    return (
        a.useEffect(() => {
            t && _('');
        }, [t, _]),
        a.useEffect(() => {
            let e;
            return (
                i
                    ? (s((e) => ({
                          ...e,
                          loading: !0,
                          debouncedQuery: null
                      })),
                      (e = setTimeout(
                          () => {
                              _(c);
                          },
                          null != r ? r : 500
                      )))
                    : _(c),
                () => {
                    clearTimeout(e);
                }
            );
        }, [i, c, r, _]),
        a.useEffect(() => {
            let e = !1;
            function r() {
                return 'function' == typeof n ? n(d) : Promise.resolve(n);
            }
            return (
                t &&
                    null !== d &&
                    r().then((t) => {
                        !e &&
                            s((e) => ({
                                ...e,
                                options: t,
                                loading: !1
                            }));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, d]),
        {
            options: l,
            loading: u,
            onQueryChange: a.useCallback((e) => {
                s((t) => ({
                    ...t,
                    query: e
                }));
            }, [])
        }
    );
}
function U(e, t) {
    return null == t ? [] : (Array.isArray(t) ? t : [t]).map((t) => ('object' == typeof t && (null == t || 'value' in t) ? t : e.find((e) => e.value === t))).filter(Boolean);
}
let w = a.forwardRef(function (e, t) {
    let { options: n, value: r, onChange: o, clearable: u = !1, multi: _ = !1, closeOnSelect: E = !0, onOpen: m, onClose: I, placeholder: g = y.Z.Messages.SELECT, wrapperClassName: S, className: O, isDisabled: b = !1, maxVisibleItems: w = 7, look: G = C.q.FILLED, autoFocus: F = !1, popoutPosition: Z = 'bottom', filter: Y = !0, debounceTime: j, renderOptionLabel: W = M, onSearchChange: K, renderOptionPrefix: z = () => null, renderOptionSuffix: q = () => null, 'aria-describedby': Q, 'aria-invalid': X, 'aria-labelledby': $, 'aria-required': J, inputClassNames: ee, centerCaret: et = !1, onBlur: en, matchSorterOptions: er, clearQueryOnSelect: ei = !1, hidePills: ea, renderCustomPill: eo, customPillContainerClassName: es, ...el } = e,
        { ref: eu, width: ec } = (0, v.Z)(),
        { titleId: ed, errorId: e_, error: eE } = (0, p.Gc)(),
        { ref: ef, width: eh } = (0, v.Z)(),
        ep = a.useRef(null),
        [em, eI] = a.useState(null),
        [eT, eg] = a.useState(!1),
        [eS, eA] = a.useState(null),
        [ev, eN] = a.useState(!1),
        eO = a.useRef(null),
        eR = a.useRef(null),
        {
            options: eC,
            loading: ey,
            onQueryChange: eL
        } = P({
            active: eT,
            loadableOptions: n,
            debounceTime: j
        }),
        eb = a.useMemo(() => U(eC, r), [eC, r]),
        eD = a.useMemo(() => eb.map((e) => e.value), [eb]),
        eM = eb[eb.length - 1],
        eP = (0, R.Z)(eM),
        eU = a.useId(),
        ew = a.useId(),
        ex = a.useId(),
        eG = a.useCallback(
            (e) => {
                eT !== e && !b && (eg(e), e ? null == m || m() : null == I || I());
            },
            [b, I, m, eT]
        ),
        ek = a.useCallback(
            (e) => {
                eT && !e && eG(!1);
            },
            [eG, eT]
        ),
        eB = (0, N.O)(ek);
    a.useImperativeHandle(t, () => ({
        close() {
            eG(!1);
        }
    }));
    let eF = a.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eO.current;
            eI(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        eZ = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = eO.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        eV = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = eO.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        eH = (0, c.ZP)({
            id: ew,
            defaultFocused: null != eM ? String(eM.value) : void 0,
            scrollToStart: eZ,
            scrollToEnd: eV,
            isEnabled: eT,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eF,
            disableClickOnSpace: !0
        }),
        eY = (0, R.Z)(eH),
        ej = (0, R.Z)(eC);
    a.useEffect(() => {
        let e = ej.current,
            t = eP.current;
        eT &&
            null != t &&
            !ey &&
            requestAnimationFrame(() => {
                let n = eO.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r
                    });
            });
    }, [eT, ey]),
        a.useEffect(() => {
            let e = eY.current;
            if (eT && !ey) {
                var t;
                let n = ep.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = ' '), (n.value = e);
                }
                eI(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null);
            } else {
                let t = eP.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eI(null);
            }
        }, [eT, ey]),
        a.useLayoutEffect(() => {
            !eT && (_ ? eA('') : null != eM && eA(eM.label));
        }, [_, eM, eT]),
        a.useLayoutEffect(() => {
            _ && eA('');
        }, [_, eb.length]);
    let eW = a.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) {
                o(_ ? [] : void 0);
                return;
            }
            let i = 'function' == typeof n,
                a = i ? eC.find((t) => t.value === e) : e;
            if (_) {
                let n = null != r ? r : [];
                if ((n.some((t) => (i ? t.value : t) === e) ? o(n.filter((t) => (i ? t.value : t) !== e)) : o([...n, a]), t)) {
                    var s;
                    null === (s = ep.current) || void 0 === s || s.focus();
                }
            } else o(a);
            eI(null), (!_ || E) && eG(!1), eN(!1), ei && eA('');
        },
        [n, eC, _, E, ei, o, r, eG]
    );
    a.useLayoutEffect(() => {
        if (F) {
            var e;
            null === (e = ep.current) || void 0 === e || e.focus();
        }
    }, [F]);
    let eK = a.useCallback(() => {
            eA(''), eW(null), eG(!0);
        }, [eW, eG]),
        ez = a.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Escape':
                        eT && (e.stopPropagation(), eG(!1));
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                        eG(!0);
                }
            },
            [eG, eT]
        ),
        eq = eC;
    ev && null != eS && !1 !== Y && (eq = 'function' == typeof Y ? Y(eC, eS) : (0, l.Lu)(eC, eS, null != er ? er : D)),
        a.useEffect(() => {
            let e = eO.current;
            null == e || e.scrollToTop();
        }, [eS]),
        a.useEffect(() => {
            !ey && ev && null !== eS && requestAnimationFrame(() => eH.focusFirstVisibleItem());
        }, [ey, ev, eS]);
    let eQ = _ ? H : V,
        eX = a.useRef(null),
        { focusPreviousItem: e$, focusNextItem: eJ } = k(eX, ep, eb);
    return (0, i.jsxs)(d.bG, {
        navigator: eH,
        children: [
            (0, i.jsx)(T.y, {
                spacing: 0,
                animation: T.y.Animation.NONE,
                shouldShow: eT,
                onRequestClose: () => eG(!1),
                layerContext: el.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: r } = e;
                    return (0, i.jsx)(x, {
                        loading: ey,
                        multi: !!_,
                        listRef: eO,
                        listId: eU,
                        maxVisibleItems: w,
                        width: eh,
                        selectedValues: eD,
                        closePopout: t,
                        onSelect: eW,
                        closeOnSelect: E,
                        options: eq,
                        activeDescendant: em,
                        renderOptionLabel: W,
                        updatePosition: r,
                        popoutPosition: n,
                        renderOptionPrefix: z,
                        renderOptionSuffix: q
                    });
                },
                position: Z,
                children: (e, t) => {
                    let { 'aria-expanded': n, 'aria-controls': r } = e,
                        { isShown: a, position: o } = t,
                        l = a ? A.ChevronSmallUpIcon : A.ChevronSmallDownIcon,
                        { ref: c, onKeyDown: d } = eH.containerProps,
                        E = (e) => {
                            var t;
                            null === (t = el.onKeyDown) || void 0 === t || t.call(el, e), d(e), ez(e);
                        };
                    return (0, i.jsxs)('div', {
                        ref: eR,
                        className: s()(S, L.wrapper),
                        style: { '--icons-width': ''.concat(ec, 'px') },
                        onBlur: (e) => {
                            var t, n, r;
                            if (!((null === (t = eR.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (r = eO.current) || void 0 === r ? void 0 : null === (n = r.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget)))) !_ && null != eM && eA(eM.label), eN(!1), eG(!1), null == en || en(e);
                        },
                        children: [
                            (0, i.jsx)(h.t, {
                                ringTarget: ef,
                                focusTarget: ep,
                                offset: 4,
                                children: (0, i.jsx)('div', {
                                    onClick: b
                                        ? void 0
                                        : (e) => {
                                              e.stopPropagation(), e.preventDefault(), eA(''), eG(!0);
                                          },
                                    onMouseDown: (e) => {
                                        e.preventDefault();
                                    },
                                    ref: (e) => {
                                        (ef.current = e), (eB.current = e);
                                    },
                                    className: s()(L.select, L.searchable, O, {
                                        [L.open]: a,
                                        [L.lookFilled]: G === C.q.FILLED,
                                        [L.disabled]: b,
                                        [L.multi]: _,
                                        [L.selectPositionTop]: 'top' === o
                                    }),
                                    children: (0, i.jsx)('div', {
                                        className: s()(L.value, { [L.multi]: _ }),
                                        children: (0, i.jsx)(eQ, {
                                            query: eS,
                                            selectedOptions: eb,
                                            loading: ey,
                                            renderOptionPrefix: z,
                                            renderOptionSuffix: q,
                                            isDisabled: b,
                                            isEditing: ev,
                                            inputRef: ep,
                                            'aria-describedby': null != Q ? Q : e_,
                                            'aria-required': J,
                                            'aria-invalid': null != X ? X : null != eE,
                                            'aria-labelledby': null != $ ? $ : ed,
                                            'aria-expanded': n,
                                            setInputRef: (e) => {
                                                (c.current = e), (ep.current = e);
                                            },
                                            onFocus: () => {
                                                var e, t;
                                                null === (e = ep.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == eS ? void 0 : eS.length) && void 0 !== t ? t : 0);
                                            },
                                            onChange: (e) => {
                                                eL(e), null == K || K(e), eA(e), eG(!0), eN(!0);
                                            },
                                            onKeyDown: E,
                                            activeDescendant: em,
                                            placeholder: g,
                                            inputId: ex,
                                            listboxId: eU,
                                            navigatorId: ew,
                                            selectValue: function (e) {
                                                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                                eW(e, t);
                                            },
                                            inputClassNames: ee,
                                            hidePills: ea
                                        })
                                    })
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: s()(L.icons, {
                                    [L.multi]: _,
                                    [L.iconsContainer]: !et
                                }),
                                ref: eu,
                                children: [
                                    u && ((null != eS && '' !== eS) || eb.length > 0)
                                        ? (0, i.jsx)(f.P, {
                                              'aria-label': y.Z.Messages.CLEAR,
                                              'aria-controls': ex,
                                              onClick: eK,
                                              children: (0, i.jsx)(A.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: L.clear
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)(f.P, {
                                        className: s()({ [L.iconsCenter]: et }),
                                        'aria-label': eT ? y.Z.Messages.CLOSE : y.Z.Messages.OPEN,
                                        'aria-controls': ex,
                                        onClick: () => {
                                            eG(!eT);
                                        },
                                        children: (0, i.jsx)(l, { className: L.dropdownIcon })
                                    })
                                ]
                            })
                        ]
                    });
                }
            }),
            eb.length > 0 &&
                null != eo &&
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(B, {
                        listRef: eX,
                        selectedOptions: eb,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eW(e, t);
                        },
                        focusNextItem: eJ,
                        focusPreviousItem: e$,
                        renderCustomPill: eo,
                        customPillContainerClassName: es
                    })
                })
        ]
    });
});
function x(e) {
    let { onSelect: t, closePopout: n, selectedValues: r, options: o, width: l, maxVisibleItems: u, activeDescendant: c, listRef: _, listId: E, renderOptionLabel: f, updatePosition: h, loading: p = !1, multi: m, popoutPosition: T, closeOnSelect: A, renderOptionPrefix: v = () => null, renderOptionSuffix: N = () => null } = e,
        R = a.useRef(null),
        C = a.useCallback(
            (e) => {
                t(e), A && n();
            },
            [A, n, t]
        );
    return ((0, O.Z)(h), p)
        ? (0, i.jsx)('div', {
              'aria-busy': !0,
              className: s()(L.popout, L.loading, { [L.popoutPositionTop]: 'top' === T }),
              style: { width: l },
              children: (0, i.jsx)(g.$, {
                  itemClassName: L.loadingSpinner,
                  type: g.R.PULSING_ELLIPSIS
              })
          })
        : 0 === o.length
          ? (0, i.jsx)('div', {
                className: s()(L.popout, L.noResults, { [L.popoutPositionTop]: 'top' === T }),
                style: { width: l },
                children: (0, i.jsx)(S.x, {
                    color: 'text-muted',
                    variant: 'text-md/normal',
                    children: y.Z.Messages.NO_RESULTS_FOUND
                })
            })
          : (0, i.jsx)(d.SJ, {
                children: (e) => {
                    let { ref: t, onKeyDown: n, ...a } = e;
                    return (0, i.jsx)(I._2, {
                        className: s()(L.popout, L.searchableSelect, {
                            [L.noScrollbar]: o.length <= u,
                            [L.popoutPositionTop]: 'top' === T
                        }),
                        style: {
                            width: l,
                            maxHeight: u * b
                        },
                        ref: (e) => {
                            var n;
                            _.current = e;
                            let r = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                            (R.current = r), (t.current = r);
                        },
                        ...a,
                        role: void 0,
                        innerRole: 'listbox',
                        innerAriaMultiselectable: m,
                        innerId: E,
                        rowHeight: b,
                        sections: [o.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            var t;
                            let { row: n } = e,
                                a = o[n],
                                s = f(a);
                            return (0, i.jsx)(
                                F,
                                {
                                    multi: m,
                                    'aria-posinset': n,
                                    'aria-setsize': o.length,
                                    isSelected: r.includes(a.value),
                                    isFocused: c === String(a.value),
                                    value: a.value,
                                    label: s,
                                    onSelect: C,
                                    prefix: v(a, {
                                        inPill: !1,
                                        inDropdown: !0
                                    }),
                                    suffix: N(a, {
                                        inPill: !1,
                                        inDropdown: !0
                                    })
                                },
                                null !== (t = a.key) && void 0 !== t ? t : n
                            );
                        },
                        renderSection: () => null
                    });
                }
            });
}
function G(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function k(e, t, n) {
    let r = a.useMemo(
            () =>
                (0, u.E)({
                    getFocusableElements() {
                        let t = e.current;
                        return null != t ? Array.from(t.querySelectorAll('[data-option-pill-value]')) : [];
                    },
                    getActiveElement() {
                        var t, n;
                        return null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.activeElement;
                    }
                }),
            [n]
        ),
        i = a.useCallback(
            (t) => {
                var n, r;
                return t === (null === (r = e.current) || void 0 === r ? void 0 : null === (n = r.ownerDocument) || void 0 === n ? void 0 : n.activeElement);
            },
            [e]
        ),
        o = a.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getPreviousFocusableElement({ wrap: !e });
                if (e && ((null == n || i(n)) && (n = await r.getNextFocusableElement()), null == n || i(n))) {
                    var a;
                    return null === (a = t.current) || void 0 === a ? void 0 : a.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, i, t]
        ),
        s = a.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getNextFocusableElement({ wrap: !e });
                if (e && ((null == n || i(n)) && (n = await r.getPreviousFocusableElement()), null == n || i(n))) {
                    var a;
                    return null === (a = t.current) || void 0 === a ? void 0 : a.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, i, t]
        );
    return {
        focusPreviousItem: o,
        focusNextItem: s,
        focusLastItem: a.useCallback(async () => {
            let e = await r.getLastFocusableElement();
            return null == e ? void 0 : e.focus();
        }, [r])
    };
}
function B(e) {
    let { selectedOptions: t, selectValue: n, listRef: r, focusPreviousItem: o, focusNextItem: s, renderOptionSuffix: l, renderOptionPrefix: u, renderCustomPill: c, customPillContainerClassName: d } = e,
        _ = null != c,
        E = a.useCallback(
            (e) => {
                if (null != r.current)
                    switch (e.key) {
                        case 'ArrowRight':
                            return e.stopPropagation(), e.preventDefault(), s();
                        case 'ArrowLeft':
                            return e.stopPropagation(), e.preventDefault(), o();
                    }
            },
            [r, o, s]
        ),
        [f, h] = a.useState(null);
    return (0, i.jsx)('ul', {
        className: _ ? d : L.optionPillContainer,
        ref: r,
        onKeyDown: E,
        onFocus: (e) => {
            let t = e.target;
            null != r.current && G(r.current, t) && h(t.getAttribute('data-option-pill-value'));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            !G(r.current, t) && h(null);
        },
        children: t.map((e, t) => {
            var r;
            return (0, i.jsx)(
                'li',
                {
                    className: _ ? void 0 : L.optionPillItem,
                    children: (0, i.jsx)(j, {
                        isCustomPill: _,
                        option: e,
                        focused: null == f ? 0 === t : f === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: u,
                        renderOptionSuffix: l,
                        onKeyDown: async (t) => {
                            'Backspace' === t.key ? (await o(!0), n(e.value, !1)) : 'Delete' === t.key && (await s(!0), n(e.value, !1));
                        },
                        children: _
                            ? c(e)
                            : (0, i.jsx)('div', {
                                  className: L.content,
                                  children: e.label
                              })
                    })
                },
                null !== (r = e.key) && void 0 !== r ? r : ''.concat(e.label, '-').concat(e.value)
            );
        })
    });
}
function F(e) {
    let { value: t, label: n, prefix: r, suffix: a, onSelect: o, isSelected: l, isFocused: u, multi: c, ..._ } = e,
        E = (0, d.JA)(String(t));
    return (0, i.jsxs)(f.P, {
        tag: 'li',
        style: { height: b },
        focusProps: { enabled: !1 },
        className: s()(L.option, {
            [L.focused]: u,
            [L.multi]: c
        }),
        onClick: () => o(t),
        ...E,
        ..._,
        'aria-selected': l,
        id: E['data-list-item-id'],
        role: 'option',
        children: [
            (0, i.jsxs)('div', {
                className: L.content,
                children: [n, '\xA0']
            }),
            null != r &&
                (0, i.jsx)('div', {
                    className: L.prefix,
                    children: r
                }),
            ' ',
            null != a &&
                (0, i.jsx)('div', {
                    className: L.suffix,
                    children: a
                }),
            ' ',
            (0, i.jsx)(Z, {
                isSelected: l,
                multi: c
            })
        ]
    });
}
function Z(e) {
    let { isSelected: t, multi: n } = e,
        r = 20;
    return n
        ? (0, i.jsx)('div', {
              className: s()(L.multiSelectCheckbox, {
                  [L.checked]: t,
                  [L.unchecked]: !t
              }),
              children:
                  t &&
                  (0, i.jsx)(A.CheckmarkLargeIcon, {
                      size: 'md',
                      color: 'currentColor',
                      colorClass: L.multiSelectCheck
                  })
          })
        : t
          ? (0, i.jsx)(A.CircleCheckIcon, {
                size: 'custom',
                color: 'currentColor',
                'aria-hidden': !0,
                secondaryColor: 'white',
                className: L.selectedIcon,
                width: r,
                height: r
            })
          : null;
}
function V(e) {
    let { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: r, ...a } = e,
        o = t[0],
        s =
            null == n
                ? void 0
                : n(null != o ? o : null, {
                      inPill: !1,
                      inDropdown: !1
                  }),
        l =
            null == r
                ? void 0
                : r(null != o ? o : null, {
                      inPill: !1,
                      inDropdown: !1
                  });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != s
                ? (0, i.jsx)('div', {
                      'aria-hidden': !0,
                      children: s
                  })
                : null,
            (0, i.jsx)(Y, {
                selectedOptions: t,
                ...a
            }),
            null != l
                ? (0, i.jsx)('div', {
                      'aria-hidden': !0,
                      children: l
                  })
                : null
        ]
    });
}
function H(e) {
    let { query: t, placeholder: n, selectedOptions: r, selectValue: o, onKeyDown: l, isEditing: u, isDisabled: c, inputRef: d, renderOptionPrefix: _, renderOptionSuffix: E, inputClassNames: f, hidePills: h, ...p } = e,
        m = Math.max(n.length, (null != t ? t : '').length),
        I = a.useRef(null),
        { focusPreviousItem: T, focusNextItem: g, focusLastItem: S } = k(I, d, r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r.length > 0 &&
                !h &&
                (0, i.jsx)(B, {
                    listRef: I,
                    selectedOptions: r,
                    renderOptionPrefix: _,
                    renderOptionSuffix: E,
                    selectValue: o,
                    focusNextItem: g,
                    focusPreviousItem: T
                }),
            (0, i.jsx)(Y, {
                style: { minWidth: ''.concat(m, 'ch') },
                className: s()(L.multi, f),
                query: t,
                placeholder: n,
                selectValue: o,
                selectedOptions: r,
                isEditing: u,
                isDisabled: c,
                inputRef: d,
                onKeyDown: (e) => {
                    ['ArrowLeft', 'Backspace'].includes(e.key) && ('' === t || null == t) && r.length > 0 ? S() : l(e);
                },
                ...p
            })
        ]
    });
}
function Y(e) {
    let { query: t, inputId: n, 'aria-describedby': r, 'aria-invalid': a, 'aria-required': o, 'aria-labelledby': l, 'aria-expanded': u, isDisabled: c, listboxId: d, activeDescendant: E, navigatorId: f, onChange: h, onFocus: p, setInputRef: m, isEditing: I, onKeyDown: T, placeholder: g, loading: S, style: A, className: v } = e;
    return (0, i.jsx)('input', {
        role: 'combobox',
        id: n,
        'aria-haspopup': 'listbox',
        'aria-invalid': a,
        'aria-labelledby': l,
        'aria-autocomplete': 'list',
        'aria-expanded': u,
        'aria-describedby': r,
        'aria-disabled': c,
        'aria-controls': d,
        'aria-required': o,
        'aria-busy': S,
        style: null != A ? A : {},
        'aria-activedescendant': null != E ? (0, _.jb)(f, E) : '',
        disabled: c,
        value: null != t ? t : '',
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: p,
        className: s()(L.searchInput, v, {
            [L.editing]: I,
            [L.disabled]: c
        }),
        onKeyDown: T,
        placeholder: '' !== (null != t ? t : '').trim() ? void 0 : g,
        ref: m
    });
}
function j(e) {
    let { option: t, focused: n, onClick: r, onKeyDown: a, renderOptionPrefix: o, renderOptionSuffix: s, children: l, isCustomPill: u } = e,
        c =
            !u &&
            (null == o
                ? void 0
                : o(t, {
                      inPill: !0,
                      inDropdown: !1
                  })),
        d =
            !u &&
            (null == s
                ? void 0
                : s(t, {
                      inPill: !0,
                      inDropdown: !1
                  }));
    return (0, i.jsx)(h.t, {
        offset: 3,
        children: (0, i.jsxs)(E.zx, {
            look: E.zx.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            'data-option-pill-value': t.value,
            className: L.optionPillBtn,
            innerClassName: u ? null : L.optionPill,
            onClick: () => (null == r ? void 0 : r(t.value)),
            onKeyDown: a,
            children: [
                l,
                null != c &&
                    (0, i.jsx)('div', {
                        className: L.prefix,
                        children: c
                    }),
                ' ',
                null != d &&
                    (0, i.jsx)('div', {
                        className: L.suffix,
                        children: d
                    }),
                (0, i.jsx)(m.n, { children: y.Z.Messages.REMOVE }),
                !u &&
                    (0, i.jsx)(A.XSmallIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: L.deleteOptionIcon,
                        width: 14,
                        height: 14
                    })
            ]
        })
    });
}
