n.d(t, {
    Cs: function () {
        return h;
    },
    _t: function () {
        return T;
    },
    dp: function () {
        return I;
    },
    gq: function () {
        return f;
    },
    ip: function () {
        return _;
    }
});
var r = n(699581),
    i = n(470079),
    a = n(706682),
    o = n(182823),
    s = n(612001),
    l = n(616073);
function u(e) {
    return (0, o.ad)() ? e.altKey : e.ctrlKey;
}
function c(e) {
    return (0, o.V5)() ? e.metaKey : e.ctrlKey;
}
let d = 1000;
function _(e) {
    let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e,
        a = (0, i.useRef)({
            search: '',
            timeout: null
        }).current,
        o = (e) => {
            let i = E(e.key);
            if (!i || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
            ' ' === i && a.search.trim().length > 0 && (e.preventDefault(), !('continuePropagation' in e) && e.stopPropagation()), (a.search += i);
            let o = t.getKeyForSearch(a.search, n.focusedKey);
            null == o && (o = t.getKeyForSearch(a.search)),
                null != o && (n.setFocusedKey(o), r && r(o)),
                clearTimeout(a.timeout),
                (a.timeout = setTimeout(() => {
                    a.search = '';
                }, d));
        };
    return { typeSelectProps: { onKeyDownCapture: t.getKeyForSearch ? o : null } };
}
function E(e) {
    return 1 !== e.length && /^[A-Z]/i.test(e) ? '' : e;
}
function f(e) {
    let t,
        { selectionManager: n, keyboardDelegate: d, ref: E, autoFocus: f = !1, shouldFocusWrap: h = !1, disallowEmptySelection: p = !1, disallowSelectAll: m = !1, selectOnFocus: I = 'replace' === n.selectionBehavior, disallowTypeAhead: T = !1, shouldUseVirtualFocus: g, allowsTabNavigation: S = !1, isVirtualized: A, scrollRef: v = E, linkBehavior: N = 'action' } = e,
        { direction: O } = (0, l.bU)(),
        R = (0, o.tv)(),
        C = (e) => {
            var t, i, s, l, _, f, T, g;
            if ((e.altKey && 'Tab' === e.key && e.preventDefault(), !E.current.contains(e.target))) return;
            let A = (t, i) => {
                if (null != t) {
                    if (n.isLink(t) && 'selection' === N && I && !u(e)) {
                        (0, r.flushSync)(() => {
                            n.setFocusedKey(t, i);
                        });
                        let a = v.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);
                        R.open(a, e);
                        return;
                    }
                    n.setFocusedKey(t, i), (!n.isLink(t) || 'override' !== N) && (e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : I && !u(e) && n.replaceSelection(t));
                }
            };
            switch (e.key) {
                case 'ArrowDown':
                    if (d.getKeyBelow) {
                        e.preventDefault();
                        let r = null != n.focusedKey ? d.getKeyBelow(n.focusedKey) : null === (t = d.getFirstKey) || void 0 === t ? void 0 : t.call(d);
                        null == r && h && (r = null === (i = d.getFirstKey) || void 0 === i ? void 0 : i.call(d, n.focusedKey)), A(r);
                    }
                    break;
                case 'ArrowUp':
                    if (d.getKeyAbove) {
                        e.preventDefault();
                        let t = null != n.focusedKey ? d.getKeyAbove(n.focusedKey) : null === (s = d.getLastKey) || void 0 === s ? void 0 : s.call(d);
                        null == t && h && (t = null === (l = d.getLastKey) || void 0 === l ? void 0 : l.call(d, n.focusedKey)), A(t);
                    }
                    break;
                case 'ArrowLeft':
                    if (d.getKeyLeftOf) {
                        e.preventDefault();
                        let t = d.getKeyLeftOf(n.focusedKey);
                        null == t && h && (t = 'rtl' === O ? (null === (_ = d.getFirstKey) || void 0 === _ ? void 0 : _.call(d, n.focusedKey)) : null === (f = d.getLastKey) || void 0 === f ? void 0 : f.call(d, n.focusedKey)), A(t, 'rtl' === O ? 'first' : 'last');
                    }
                    break;
                case 'ArrowRight':
                    if (d.getKeyRightOf) {
                        e.preventDefault();
                        let t = d.getKeyRightOf(n.focusedKey);
                        null == t && h && (t = 'rtl' === O ? (null === (T = d.getLastKey) || void 0 === T ? void 0 : T.call(d, n.focusedKey)) : null === (g = d.getFirstKey) || void 0 === g ? void 0 : g.call(d, n.focusedKey)), A(t, 'rtl' === O ? 'last' : 'first');
                    }
                    break;
                case 'Home':
                    if (d.getFirstKey) {
                        e.preventDefault();
                        let t = d.getFirstKey(n.focusedKey, c(e));
                        n.setFocusedKey(t), c(e) && e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : I && n.replaceSelection(t);
                    }
                    break;
                case 'End':
                    if (d.getLastKey) {
                        e.preventDefault();
                        let t = d.getLastKey(n.focusedKey, c(e));
                        n.setFocusedKey(t), c(e) && e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : I && n.replaceSelection(t);
                    }
                    break;
                case 'PageDown':
                    d.getKeyPageBelow && (e.preventDefault(), A(d.getKeyPageBelow(n.focusedKey)));
                    break;
                case 'PageUp':
                    d.getKeyPageAbove && (e.preventDefault(), A(d.getKeyPageAbove(n.focusedKey)));
                    break;
                case 'a':
                    c(e) && 'multiple' === n.selectionMode && !0 !== m && (e.preventDefault(), n.selectAll());
                    break;
                case 'Escape':
                    e.preventDefault(), !p && n.clearSelection();
                    break;
                case 'Tab':
                    if (!S) {
                        if (e.shiftKey) E.current.focus();
                        else {
                            let e,
                                t,
                                n = (0, a.QL)(E.current, { tabbable: !0 });
                            do (t = n.lastChild()) && (e = t);
                            while (t);
                            e && !e.contains(document.activeElement) && (0, o.Ao)(e);
                        }
                    }
            }
        },
        y = (0, i.useRef)({
            top: 0,
            left: 0
        });
    (0, o.zX)(
        v,
        'scroll',
        A
            ? null
            : () => {
                  y.current = {
                      top: v.current.scrollTop,
                      left: v.current.scrollLeft
                  };
              }
    );
    let b = (e) => {
            if (n.isFocused) {
                !e.currentTarget.contains(e.target) && n.setFocused(!1);
                return;
            }
            if (e.currentTarget.contains(e.target)) {
                if ((n.setFocused(!0), null == n.focusedKey)) {
                    var t, r;
                    let i = (e) => {
                            null != e && (n.setFocusedKey(e), I && n.replaceSelection(e));
                        },
                        a = e.relatedTarget;
                    a && e.currentTarget.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING ? i(null !== (t = n.lastSelectedKey) && void 0 !== t ? t : d.getLastKey()) : i(null !== (r = n.firstSelectedKey) && void 0 !== r ? r : d.getFirstKey());
                } else !A && ((v.current.scrollTop = y.current.top), (v.current.scrollLeft = y.current.left));
                if (!A && null != n.focusedKey) {
                    let e = v.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
                    e && (!e.contains(document.activeElement) && (0, o.Ao)(e), 'keyboard' === (0, s.Jz)() && (0, o.Gt)(e, { containingElement: E.current }));
                }
            }
        },
        L = (e) => {
            !e.currentTarget.contains(e.relatedTarget) && n.setFocused(!1);
        },
        D = (0, i.useRef)(f);
    (0, i.useEffect)(() => {
        if (D.current) {
            let e = null;
            'first' === f && (e = d.getFirstKey()), 'last' === f && (e = d.getLastKey());
            let t = n.selectedKeys;
            if (t.size) {
                for (let r of t)
                    if (n.canSelectItem(r)) {
                        e = r;
                        break;
                    }
            }
            n.setFocused(!0), n.setFocusedKey(e), null == e && !g && (0, a.ex)(E.current);
        }
    }, []);
    let M = (0, i.useRef)(n.focusedKey);
    (0, i.useEffect)(() => {
        let e = (0, s.Jz)();
        if (n.isFocused && null != n.focusedKey && (null == v ? void 0 : v.current)) {
            let t = v.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
            t && ('keyboard' === e || D.current) && (!A && (0, o.zT)(v.current, t), (0, o.Gt)(t, { containingElement: E.current }));
        }
        n.isFocused && null == n.focusedKey && null != M.current && (0, a.ex)(E.current), (M.current = n.focusedKey), (D.current = !1);
    }, [A, v, n.focusedKey, n.isFocused, E]);
    let P = {
            onKeyDown: C,
            onFocus: b,
            onBlur: L,
            onMouseDown(e) {
                v.current === e.target && e.preventDefault();
            }
        },
        { typeSelectProps: U } = _({
            keyboardDelegate: d,
            selectionManager: n
        });
    return (
        !T && (P = (0, o.dG)(U, P)),
        !g && (t = null == n.focusedKey ? 0 : -1),
        {
            collectionProps: {
                ...P,
                tabIndex: t
            }
        }
    );
}
function h(e) {
    let { selectionManager: t, key: n, ref: r, shouldSelectOnPressUp: l, shouldUseVirtualFocus: d, focus: _, isDisabled: E, onAction: f, allowsDifferentPressOrigin: h, linkBehavior: I = 'action' } = e,
        T = (0, o.tv)(),
        g = (e) => {
            if ('keyboard' === e.pointerType && u(e)) t.toggleSelection(n);
            else {
                if ('none' === t.selectionMode) return;
                if (t.isLink(n)) {
                    if ('selection' === I) {
                        T.open(r.current, e), t.setSelectedKeys(t.selectedKeys);
                        return;
                    }
                    if ('override' === I || 'none' === I) return;
                }
                'single' === t.selectionMode ? (t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n)) : e && e.shiftKey ? t.extendSelection(n) : 'toggle' === t.selectionBehavior || (e && (c(e) || 'touch' === e.pointerType || 'virtual' === e.pointerType)) ? t.toggleSelection(n) : t.replaceSelection(n);
            }
        };
    (0, i.useEffect)(() => {
        n === t.focusedKey && t.isFocused && !d && (_ ? _() : document.activeElement !== r.current && (0, a.ex)(r.current));
    }, [r, n, t.focusedKey, t.childFocusStrategy, t.isFocused, d]),
        (E = E || t.isDisabled(n));
    let S = {};
    d || E
        ? E &&
          (S.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (S = {
              tabIndex: n === t.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === r.current && t.setFocusedKey(n);
              }
          });
    let A = t.isLink(n) && 'override' === I,
        v = t.isLink(n) && 'selection' !== I && 'none' !== I,
        N = !E && t.canSelectItem(n) && !A,
        O = (f || v) && !E,
        R = O && ('replace' === t.selectionBehavior ? !N : !N || t.isEmpty),
        C = O && N && 'replace' === t.selectionBehavior,
        y = R || C,
        b = (0, i.useRef)(null),
        L = y && N,
        D = (0, i.useRef)(!1),
        M = (0, i.useRef)(!1),
        P = (e) => {
            f && f(), v && T.open(r.current, e);
        },
        U = {};
    l
        ? ((U.onPressStart = (e) => {
              (b.current = e.pointerType), (D.current = L), 'keyboard' === e.pointerType && (!y || m()) && g(e);
          }),
          h
              ? ((U.onPressUp = R
                    ? null
                    : (e) => {
                          'keyboard' !== e.pointerType && N && g(e);
                      }),
                (U.onPress = R ? P : null))
              : (U.onPress = (e) => {
                    R || (C && 'mouse' !== e.pointerType) ? ('keyboard' !== e.pointerType || !!p()) && P(e) : 'keyboard' !== e.pointerType && N && g(e);
                }))
        : ((U.onPressStart = (e) => {
              (b.current = e.pointerType), (D.current = L), (M.current = R), N && (('mouse' === e.pointerType && !R) || ('keyboard' === e.pointerType && (!O || m()))) && g(e);
          }),
          (U.onPress = (e) => {
              ('touch' === e.pointerType || 'pen' === e.pointerType || 'virtual' === e.pointerType || ('keyboard' === e.pointerType && y && p()) || ('mouse' === e.pointerType && M.current)) && (y ? P(e) : N && g(e));
          })),
        (S['data-key'] = n),
        (U.preventFocusOnPress = d);
    let { pressProps: w, isPressed: x } = (0, s.r7)(U),
        G = C
            ? (e) => {
                  'mouse' === b.current && (e.stopPropagation(), e.preventDefault(), P(e));
              }
            : void 0,
        { longPressProps: k } = (0, s.TA)({
            isDisabled: !L,
            onLongPress(e) {
                'touch' === e.pointerType && (g(e), t.setSelectionBehavior('toggle'));
            }
        }),
        B = (e) => {
            'touch' === b.current && D.current && e.preventDefault();
        },
        F = t.isLink(n)
            ? (e) => {
                  !o.nG.isOpening && e.preventDefault();
              }
            : void 0;
    return {
        itemProps: (0, o.dG)(S, N || R ? w : {}, L ? k : {}, {
            onDoubleClick: G,
            onDragStartCapture: B,
            onClick: F
        }),
        isPressed: x,
        isSelected: t.isSelected(n),
        isFocused: t.isFocused && t.focusedKey === n,
        isDisabled: E,
        allowsSelection: N,
        hasAction: y
    };
}
function p() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === 'Enter';
}
function m() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === ' ' || (null == e ? void 0 : e.code) === 'Space';
}
class I {
    getNextKey(e) {
        for (e = this.collection.getKeyAfter(e); null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyAfter(e);
        }
        return null;
    }
    getPreviousKey(e) {
        for (e = this.collection.getKeyBefore(e); null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyBefore(e);
        }
        return null;
    }
    findKey(e, t, n) {
        let r = this.getItem(e);
        if (!r) return null;
        let i = r.getBoundingClientRect();
        do (e = t(e)), (r = this.getItem(e));
        while (r && n(i, r.getBoundingClientRect()));
        return e;
    }
    isSameRow(e, t) {
        return e.top === t.top || e.left !== t.left;
    }
    isSameColumn(e, t) {
        return e.left === t.left || e.top !== t.top;
    }
    getKeyBelow(e) {
        return 'grid' === this.layout && 'vertical' === this.orientation ? this.findKey(e, (e) => this.getNextKey(e), this.isSameRow) : this.getNextKey(e);
    }
    getKeyAbove(e) {
        return 'grid' === this.layout && 'vertical' === this.orientation ? this.findKey(e, (e) => this.getPreviousKey(e), this.isSameRow) : this.getPreviousKey(e);
    }
    getNextColumn(e, t) {
        return t ? this.getPreviousKey(e) : this.getNextKey(e);
    }
    getKeyRightOf(e) {
        if ('grid' === this.layout) return 'vertical' === this.orientation ? this.getNextColumn(e, 'rtl' === this.direction) : this.findKey(e, (e) => this.getNextColumn(e, 'rtl' === this.direction), this.isSameColumn);
        return 'horizontal' === this.orientation ? this.getNextColumn(e, 'rtl' === this.direction) : null;
    }
    getKeyLeftOf(e) {
        if ('grid' === this.layout) return 'vertical' === this.orientation ? this.getNextColumn(e, 'ltr' === this.direction) : this.findKey(e, (e) => this.getNextColumn(e, 'ltr' === this.direction), this.isSameColumn);
        return 'horizontal' === this.orientation ? this.getNextColumn(e, 'ltr' === this.direction) : null;
    }
    getFirstKey() {
        let e = this.collection.getFirstKey();
        for (; null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyAfter(e);
        }
        return null;
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        for (; null != e; ) {
            if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
            e = this.collection.getKeyBefore(e);
        }
        return null;
    }
    getItem(e) {
        return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`);
    }
    getKeyPageAbove(e) {
        let t = this.ref.current,
            n = this.getItem(e);
        if (!n) return null;
        if (!(0, o.a9)(t)) return this.getFirstKey();
        let r = t.getBoundingClientRect(),
            i = n.getBoundingClientRect();
        if ('horizontal' === this.orientation) {
            let a = r.x - t.scrollLeft,
                o = Math.max(0, i.x - a + i.width - r.width);
            for (; n && i.x - a > o; ) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
        } else {
            let a = r.y - t.scrollTop,
                o = Math.max(0, i.y - a + i.height - r.height);
            for (; n && i.y - a > o; ) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
        }
        return null != e ? e : this.getFirstKey();
    }
    getKeyPageBelow(e) {
        let t = this.ref.current,
            n = this.getItem(e);
        if (!n) return null;
        if (!(0, o.a9)(t)) return this.getLastKey();
        let r = t.getBoundingClientRect(),
            i = n.getBoundingClientRect();
        if ('horizontal' === this.orientation) {
            let a = r.x - t.scrollLeft,
                o = Math.min(t.scrollWidth, i.x - a - i.width + r.width);
            for (; n && i.x - a < o; ) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
        } else {
            let a = r.y - t.scrollTop,
                o = Math.min(t.scrollHeight, i.y - a - i.height + r.height);
            for (; n && i.y - a < o; ) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
        }
        return null != e ? e : this.getLastKey();
    }
    getKeyForSearch(e, t) {
        if (!this.collator) return null;
        let n = this.collection,
            r = t || this.getFirstKey();
        for (; null != r; ) {
            let t = n.getItem(r),
                i = t.textValue.slice(0, e.length);
            if (t.textValue && 0 === this.collator.compare(i, e)) return r;
            r = this.getKeyBelow(r);
        }
        return null;
    }
    constructor(...e) {
        if (1 === e.length) {
            let t = e[0];
            (this.collection = t.collection), (this.ref = t.ref), (this.collator = t.collator), (this.disabledKeys = t.disabledKeys || new Set()), (this.orientation = t.orientation), (this.direction = t.direction), (this.layout = t.layout || 'stack');
        } else (this.collection = e[0]), (this.disabledKeys = e[1]), (this.ref = e[2]), (this.collator = e[3]), (this.layout = 'stack'), (this.orientation = 'vertical');
        'stack' === this.layout && 'vertical' === this.orientation && ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
    }
}
function T(e) {
    let { selectionManager: t, collection: n, disabledKeys: r, ref: a, keyboardDelegate: o } = e,
        s = (0, l.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }),
        u = t.disabledBehavior,
        c = (0, i.useMemo)(() => o || new I(n, 'selection' === u ? new Set() : r, a, s), [o, n, r, a, s, u]),
        { collectionProps: d } = f({
            ...e,
            ref: a,
            selectionManager: t,
            keyboardDelegate: c
        });
    return { listProps: d };
}
