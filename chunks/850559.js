n.d(t, {
    P: function () {
        return l;
    }
});
var r = n(275857),
    i = n(913122),
    a = n(470079),
    o = n(697898),
    s = n(345926);
function l(e) {
    var t, n, r, l, c, d, _, E;
    let { defaultFilter: f, menuTrigger: h = 'input', allowsEmptyCollection: p = !1, allowsCustomValue: m, shouldCloseOnBlur: I = !0 } = e,
        [T, g] = (0, a.useState)(!1),
        [S, A] = (0, a.useState)(!1),
        v = (t) => {
            e.onSelectionChange && e.onSelectionChange(t), t === R && (Y(), V());
        },
        {
            collection: N,
            selectionManager: O,
            selectedKey: R,
            setSelectedKey: C,
            selectedItem: y,
            disabledKeys: L
        } = (0, i.BA)({
            ...e,
            onSelectionChange: v,
            items: null !== (r = e.items) && void 0 !== r ? r : e.defaultItems
        }),
        [b, D] = (0, o.zk)(e.inputValue, null !== (c = null !== (l = e.defaultInputValue) && void 0 !== l ? l : null === (t = N.getItem(R)) || void 0 === t ? void 0 : t.textValue) && void 0 !== c ? c : '', e.onInputChange),
        M = N,
        P = (0, a.useMemo)(() => (null == e.items && f ? u(N, b, f) : N), [N, b, f, e.items]),
        [U, w] = (0, a.useState)(P),
        x = (0, a.useRef)('focus'),
        G = (t) => {
            e.onOpenChange && e.onOpenChange(t, t ? x.current : void 0), O.setFocused(t), !t && O.setFocusedKey(null);
        },
        k = (0, s.W)({
            ...e,
            onOpenChange: G,
            isOpen: void 0,
            defaultOpen: void 0
        }),
        B = (t, n) => {
            let r = 'manual' === n || ('focus' === n && 'focus' === h);
            (p || P.size > 0 || (r && M.size > 0) || e.items) && (r && !k.isOpen && void 0 === e.items && g(!0), (x.current = n), k.open(t));
        },
        F = (t, n) => {
            let r = 'manual' === n || ('focus' === n && 'focus' === h);
            (p || P.size > 0 || (r && M.size > 0) || e.items || k.isOpen) && (r && !k.isOpen && void 0 === e.items && g(!0), !k.isOpen && (x.current = n), Z(t));
        },
        Z = (0, a.useCallback)(
            (e) => {
                k.isOpen && w(P), k.toggle(e);
            },
            [k, P]
        ),
        V = (0, a.useCallback)(() => {
            k.isOpen && (w(P), k.close());
        }, [k, P]),
        H = (0, a.useRef)(b),
        Y = () => {
            var e, t;
            let n = null !== (t = null === (e = N.getItem(R)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : '';
            (H.current = n), D(n);
        },
        j = (0, a.useRef)(null !== (_ = null !== (d = e.selectedKey) && void 0 !== d ? d : e.defaultSelectedKey) && void 0 !== _ ? _ : null),
        W = (0, a.useRef)(null !== (E = null === (n = N.getItem(R)) || void 0 === n ? void 0 : n.textValue) && void 0 !== E ? E : '');
    (0, a.useEffect)(() => {
        var t, n;
        S && (P.size > 0 || p) && !k.isOpen && b !== H.current && 'manual' !== h && B(null, 'input'), !T && !p && k.isOpen && 0 === P.size && V(), null != R && R !== j.current && V(), b !== H.current && (O.setFocusedKey(null), g(!1), '' === b && (void 0 === e.inputValue || void 0 === e.selectedKey) && C(null)), R !== j.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? Y() : (H.current = b);
        let r = null !== (n = null === (t = N.getItem(R)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : '';
        !S && null != R && void 0 === e.inputValue && R === j.current && W.current !== r && ((H.current = r), D(r)), (j.current = R), (W.current = r);
    });
    let K = () => {
            m && null == R ? z() : q();
        },
        z = () => {
            (j.current = null), C(null), V();
        },
        q = () => {
            if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                var t, n;
                e.onSelectionChange(R);
                let r = null !== (n = null === (t = N.getItem(R)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : '';
                (H.current = r), V();
            } else Y(), V();
        },
        Q = () => {
            if (m) {
                var e, t;
                b === (null !== (t = null === (e = N.getItem(R)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : '') ? q() : z();
            } else q();
        },
        X = () => {
            k.isOpen && null != O.focusedKey ? (R === O.focusedKey ? q() : C(O.focusedKey)) : Q();
        },
        $ = (e) => {
            e ? 'focus' === h && B(null, 'focus') : I && Q(), A(e);
        },
        J = (0, a.useMemo)(() => (k.isOpen ? (T ? M : P) : U), [k.isOpen, M, P, T, U]);
    return {
        ...k,
        toggle: F,
        open: B,
        close: Q,
        selectionManager: O,
        selectedKey: R,
        setSelectedKey: C,
        disabledKeys: L,
        isFocused: S,
        setFocused: $,
        selectedItem: y,
        collection: J,
        inputValue: b,
        setInputValue: D,
        commit: X,
        revert: K
    };
}
function u(e, t, n) {
    return new i.DC(c(e, e, t, n));
}
function c(e, t, n, i) {
    let a = [];
    for (let o of t)
        if ('section' === o.type && o.hasChildNodes) {
            let t = c(e, (0, r._P)(o, e), n, i);
            [...t].some((e) => 'item' === e.type) &&
                a.push({
                    ...o,
                    childNodes: t
                });
        } else 'item' === o.type && i(o.textValue, n) ? a.push({ ...o }) : 'item' !== o.type && a.push({ ...o });
    return a;
}
