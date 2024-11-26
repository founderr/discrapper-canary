n.d(t, {
    P: function () {
        return l;
    }
});
var r = n(989103),
    i = n(155263),
    a = n(192379),
    s = n(239700),
    o = n(932143);
function l(e) {
    var t, n, l, u, c, d, f, _;
    let { defaultFilter: p, menuTrigger: h = 'input', allowsEmptyCollection: m = !1, allowsCustomValue: g, shouldCloseOnBlur: E = !0 } = e,
        [v, I] = (0, a.useState)(!1),
        [T, b] = (0, a.useState)(!1),
        {
            collection: S,
            selectionManager: y,
            selectedKey: A,
            setSelectedKey: N,
            selectedItem: C,
            disabledKeys: R
        } = (0, i.BA)({
            ...e,
            onSelectionChange: (t) => {
                e.onSelectionChange && e.onSelectionChange(t), t === A && (Z(), B());
            },
            items: null !== (l = e.items) && void 0 !== l ? l : e.defaultItems
        }),
        [O, D] = (0, s.zk)(e.inputValue, null !== (c = null !== (u = e.defaultInputValue) && void 0 !== u ? u : null === (t = S.getItem(A)) || void 0 === t ? void 0 : t.textValue) && void 0 !== c ? c : '', e.onInputChange),
        L = (0, a.useMemo)(
            () =>
                null == e.items && p
                    ? (function (e, t, n) {
                          return new i.DC(
                              (function e(t, n, i, a) {
                                  let s = [];
                                  for (let o of n)
                                      if ('section' === o.type && o.hasChildNodes) {
                                          let n = e(t, (0, r._P)(o, t), i, a);
                                          [...n].some((e) => 'item' === e.type) &&
                                              s.push({
                                                  ...o,
                                                  childNodes: n
                                              });
                                      } else 'item' === o.type && a(o.textValue, i) ? s.push({ ...o }) : 'item' !== o.type && s.push({ ...o });
                                  return s;
                              })(e, e, t, n)
                          );
                      })(S, O, p)
                    : S,
            [S, O, p, e.items]
        ),
        [x, w] = (0, a.useState)(L),
        P = (0, a.useRef)('focus'),
        M = (0, o.W)({
            ...e,
            onOpenChange: (t) => {
                e.onOpenChange && e.onOpenChange(t, t ? P.current : void 0), y.setFocused(t), !t && y.setFocusedKey(null);
            },
            isOpen: void 0,
            defaultOpen: void 0
        }),
        k = (t, n) => {
            let r = 'manual' === n || ('focus' === n && 'focus' === h);
            (m || L.size > 0 || (r && S.size > 0) || e.items) && (r && !M.isOpen && void 0 === e.items && I(!0), (P.current = n), M.open(t));
        },
        U = (0, a.useCallback)(
            (e) => {
                M.isOpen && w(L), M.toggle(e);
            },
            [M, L]
        ),
        B = (0, a.useCallback)(() => {
            M.isOpen && (w(L), M.close());
        }, [M, L]),
        G = (0, a.useRef)(O),
        Z = () => {
            var e, t;
            let n = null !== (t = null === (e = S.getItem(A)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : '';
            (G.current = n), D(n);
        },
        F = (0, a.useRef)(null !== (f = null !== (d = e.selectedKey) && void 0 !== d ? d : e.defaultSelectedKey) && void 0 !== f ? f : null),
        V = (0, a.useRef)(null !== (_ = null === (n = S.getItem(A)) || void 0 === n ? void 0 : n.textValue) && void 0 !== _ ? _ : '');
    (0, a.useEffect)(() => {
        var t, n;
        T && (L.size > 0 || m) && !M.isOpen && O !== G.current && 'manual' !== h && k(null, 'input'), !v && !m && M.isOpen && 0 === L.size && B(), null != A && A !== F.current && B(), O !== G.current && (y.setFocusedKey(null), I(!1), '' === O && (void 0 === e.inputValue || void 0 === e.selectedKey) && N(null)), A !== F.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? Z() : (G.current = O);
        let r = null !== (n = null === (t = S.getItem(A)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : '';
        !T && null != A && void 0 === e.inputValue && A === F.current && V.current !== r && ((G.current = r), D(r)), (F.current = A), (V.current = r);
    });
    let j = () => {
            (F.current = null), N(null), B();
        },
        H = () => {
            if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                var t, n;
                e.onSelectionChange(A);
                let r = null !== (n = null === (t = S.getItem(A)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : '';
                (G.current = r), B();
            } else Z(), B();
        },
        Y = () => {
            if (g) {
                var e, t;
                O === (null !== (t = null === (e = S.getItem(A)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : '') ? H() : j();
            } else H();
        },
        W = (0, a.useMemo)(() => (M.isOpen ? (v ? S : L) : x), [M.isOpen, S, L, v, x]);
    return {
        ...M,
        toggle: (t, n) => {
            let r = 'manual' === n || ('focus' === n && 'focus' === h);
            (m || L.size > 0 || (r && S.size > 0) || e.items || M.isOpen) && (r && !M.isOpen && void 0 === e.items && I(!0), !M.isOpen && (P.current = n), U(t));
        },
        open: k,
        close: Y,
        selectionManager: y,
        selectedKey: A,
        setSelectedKey: N,
        disabledKeys: R,
        isFocused: T,
        setFocused: (e) => {
            e ? 'focus' === h && k(null, 'focus') : E && Y(), b(e);
        },
        selectedItem: C,
        collection: W,
        inputValue: O,
        setInputValue: D,
        commit: () => {
            M.isOpen && null != y.focusedKey ? (A === y.focusedKey ? H() : N(y.focusedKey)) : Y();
        },
        revert: () => {
            g && null == A ? j() : H();
        }
    };
}
