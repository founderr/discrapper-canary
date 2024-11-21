n.d(t, {
    g: function () {
        return m;
    }
});
var r = n(315429),
    i = n(266861),
    a = n(995295),
    s = n(192379),
    o = n(535232),
    l = n(225750),
    u = n(654990),
    c = n(143538),
    d = n(406911),
    f = n(263197),
    _ = n(33693),
    p = n(747164),
    h = n(685832);
function m(e) {
    let t,
        { selectionManager: n, keyboardDelegate: m, ref: g, autoFocus: E = !1, shouldFocusWrap: v = !1, disallowEmptySelection: b = !1, disallowSelectAll: I = !1, selectOnFocus: T = 'replace' === n.selectionBehavior, disallowTypeAhead: S = !1, shouldUseVirtualFocus: y, allowsTabNavigation: A = !1, isVirtualized: N, scrollRef: C = g, linkBehavior: R = 'action' } = e,
        { direction: O } = (0, h.j)(),
        D = (0, u.tv)(),
        L = (0, s.useRef)({
            top: 0,
            left: 0
        });
    (0, d.z)(
        C,
        'scroll',
        N
            ? null
            : () => {
                  L.current = {
                      top: C.current.scrollTop,
                      left: C.current.scrollLeft
                  };
              }
    );
    let x = (0, s.useRef)(E);
    (0, s.useEffect)(() => {
        if (x.current) {
            let e = null;
            'first' === E && (e = m.getFirstKey()), 'last' === E && (e = m.getLastKey());
            let t = n.selectedKeys;
            if (t.size) {
                for (let r of t)
                    if (n.canSelectItem(r)) {
                        e = r;
                        break;
                    }
            }
            n.setFocused(!0), n.setFocusedKey(e), null == e && !y && (0, l.e)(g.current);
        }
    }, []);
    let w = (0, s.useRef)(n.focusedKey);
    (0, s.useEffect)(() => {
        if (n.isFocused && null != n.focusedKey && (n.focusedKey !== w.current || x.current) && (null == C ? void 0 : C.current)) {
            let e = (0, p.Jz)(),
                t = g.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
            if (!t) return;
            ('keyboard' === e || x.current) && ((0, f.z)(C.current, t), 'virtual' !== e && (0, f.G)(t, { containingElement: g.current }));
        }
        !y && n.isFocused && null == n.focusedKey && null != w.current && (0, l.e)(g.current), (w.current = n.focusedKey), (x.current = !1);
    }),
        (0, d.z)(g, 'react-aria-focus-scope-restore', (e) => {
            e.preventDefault(), n.setFocused(!0);
        });
    let M = {
            onKeyDown: (e) => {
                var t, i, s, l, u, d, f, _, p, h, E, S;
                if ((e.altKey && 'Tab' === e.key && e.preventDefault(), !g.current.contains(e.target))) return;
                let y = (t, i) => {
                    if (null != t) {
                        if (n.isLink(t) && 'selection' === R && T && !(0, r.F)(e)) {
                            (0, a.flushSync)(() => {
                                n.setFocusedKey(t, i);
                            });
                            let r = C.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`),
                                s = n.getItemProps(t);
                            D.open(r, e, s.href, s.routerOptions);
                            return;
                        }
                        n.setFocusedKey(t, i), (!n.isLink(t) || 'override' !== R) && (e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : T && !(0, r.F)(e) && n.replaceSelection(t));
                    }
                };
                switch (e.key) {
                    case 'ArrowDown':
                        if (m.getKeyBelow) {
                            let r = null != n.focusedKey ? (null === (t = m.getKeyBelow) || void 0 === t ? void 0 : t.call(m, n.focusedKey)) : null === (i = m.getFirstKey) || void 0 === i ? void 0 : i.call(m);
                            null == r && v && (r = null === (s = m.getFirstKey) || void 0 === s ? void 0 : s.call(m, n.focusedKey)), null != r && (e.preventDefault(), y(r));
                        }
                        break;
                    case 'ArrowUp':
                        if (m.getKeyAbove) {
                            let t = null != n.focusedKey ? (null === (l = m.getKeyAbove) || void 0 === l ? void 0 : l.call(m, n.focusedKey)) : null === (u = m.getLastKey) || void 0 === u ? void 0 : u.call(m);
                            null == t && v && (t = null === (d = m.getLastKey) || void 0 === d ? void 0 : d.call(m, n.focusedKey)), null != t && (e.preventDefault(), y(t));
                        }
                        break;
                    case 'ArrowLeft':
                        if (m.getKeyLeftOf) {
                            let t = null === (f = m.getKeyLeftOf) || void 0 === f ? void 0 : f.call(m, n.focusedKey);
                            null == t && v && (t = 'rtl' === O ? (null === (_ = m.getFirstKey) || void 0 === _ ? void 0 : _.call(m, n.focusedKey)) : null === (p = m.getLastKey) || void 0 === p ? void 0 : p.call(m, n.focusedKey)), null != t && (e.preventDefault(), y(t, 'rtl' === O ? 'first' : 'last'));
                        }
                        break;
                    case 'ArrowRight':
                        if (m.getKeyRightOf) {
                            let t = null === (h = m.getKeyRightOf) || void 0 === h ? void 0 : h.call(m, n.focusedKey);
                            null == t && v && (t = 'rtl' === O ? (null === (E = m.getLastKey) || void 0 === E ? void 0 : E.call(m, n.focusedKey)) : null === (S = m.getFirstKey) || void 0 === S ? void 0 : S.call(m, n.focusedKey)), null != t && (e.preventDefault(), y(t, 'rtl' === O ? 'last' : 'first'));
                        }
                        break;
                    case 'Home':
                        if (m.getFirstKey) {
                            e.preventDefault();
                            let t = m.getFirstKey(n.focusedKey, (0, r.y)(e));
                            n.setFocusedKey(t), (0, r.y)(e) && e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : T && n.replaceSelection(t);
                        }
                        break;
                    case 'End':
                        if (m.getLastKey) {
                            e.preventDefault();
                            let t = m.getLastKey(n.focusedKey, (0, r.y)(e));
                            n.setFocusedKey(t), (0, r.y)(e) && e.shiftKey && 'multiple' === n.selectionMode ? n.extendSelection(t) : T && n.replaceSelection(t);
                        }
                        break;
                    case 'PageDown':
                        if (m.getKeyPageBelow) {
                            let t = m.getKeyPageBelow(n.focusedKey);
                            null != t && (e.preventDefault(), y(t));
                        }
                        break;
                    case 'PageUp':
                        if (m.getKeyPageAbove) {
                            let t = m.getKeyPageAbove(n.focusedKey);
                            null != t && (e.preventDefault(), y(t));
                        }
                        break;
                    case 'a':
                        (0, r.y)(e) && 'multiple' === n.selectionMode && !0 !== I && (e.preventDefault(), n.selectAll());
                        break;
                    case 'Escape':
                        !b && 0 !== n.selectedKeys.size && (e.stopPropagation(), e.preventDefault(), n.clearSelection());
                        break;
                    case 'Tab':
                        if (!A) {
                            if (e.shiftKey) g.current.focus();
                            else {
                                let e,
                                    t,
                                    n = (0, o.QL)(g.current, { tabbable: !0 });
                                do (t = n.lastChild()) && (e = t);
                                while (t);
                                e && !e.contains(document.activeElement) && (0, c.A)(e);
                            }
                        }
                }
            },
            onFocus: (e) => {
                if (n.isFocused) {
                    !e.currentTarget.contains(e.target) && n.setFocused(!1);
                    return;
                }
                if (e.currentTarget.contains(e.target)) {
                    if ((n.setFocused(!0), null == n.focusedKey)) {
                        var t, r;
                        let i = (e) => {
                                null != e && (n.setFocusedKey(e), T && n.replaceSelection(e));
                            },
                            a = e.relatedTarget;
                        a && e.currentTarget.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING ? i(null !== (t = n.lastSelectedKey) && void 0 !== t ? t : m.getLastKey()) : i(null !== (r = n.firstSelectedKey) && void 0 !== r ? r : m.getFirstKey());
                    } else !N && ((C.current.scrollTop = L.current.top), (C.current.scrollLeft = L.current.left));
                    if (null != n.focusedKey) {
                        let e = C.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
                        e && (!e.contains(document.activeElement) && (0, c.A)(e), 'keyboard' === (0, p.Jz)() && (0, f.G)(e, { containingElement: g.current }));
                    }
                }
            },
            onBlur: (e) => {
                !e.currentTarget.contains(e.relatedTarget) && n.setFocused(!1);
            },
            onMouseDown(e) {
                C.current === e.target && e.preventDefault();
            }
        },
        { typeSelectProps: P } = (0, i.i)({
            keyboardDelegate: m,
            selectionManager: n
        });
    return (
        !S && (M = (0, _.d)(P, M)),
        !y && (t = null == n.focusedKey ? 0 : -1),
        {
            collectionProps: {
                ...M,
                tabIndex: t
            }
        }
    );
}
