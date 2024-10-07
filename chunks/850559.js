n.d(t, {
    P: function () {
        return l;
    }
});
var r = n(275857),
    i = n(913122),
    a = n(470079),
    s = n(697898),
    o = n(345926);
function l(e) {
    var t, n, l, u, c, d, _, E;
    let { defaultFilter: f, menuTrigger: h = 'input', allowsEmptyCollection: p = !1, allowsCustomValue: I, shouldCloseOnBlur: m = !0 } = e,
        [T, S] = (0, a.useState)(!1),
        [g, A] = (0, a.useState)(!1),
        {
            collection: N,
            selectionManager: O,
            selectedKey: R,
            setSelectedKey: v,
            selectedItem: C,
            disabledKeys: L
        } = (0, i.BA)({
            ...e,
            onSelectionChange: (t) => {
                e.onSelectionChange && e.onSelectionChange(t), t === R && (F(), k());
            },
            items: null !== (l = e.items) && void 0 !== l ? l : e.defaultItems
        }),
        [y, D] = (0, s.zk)(e.inputValue, null !== (c = null !== (u = e.defaultInputValue) && void 0 !== u ? u : null === (t = N.getItem(R)) || void 0 === t ? void 0 : t.textValue) && void 0 !== c ? c : '', e.onInputChange),
        b = (0, a.useMemo)(
            () =>
                null == e.items && f
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
                      })(N, y, f)
                    : N,
            [N, y, f, e.items]
        ),
        [M, P] = (0, a.useState)(b),
        U = (0, a.useRef)('focus'),
        w = (0, o.W)({
            ...e,
            onOpenChange: (t) => {
                e.onOpenChange && e.onOpenChange(t, t ? U.current : void 0), O.setFocused(t), !t && O.setFocusedKey(null);
            },
            isOpen: void 0,
            defaultOpen: void 0
        }),
        x = (t, n) => {
            let r = 'manual' === n || ('focus' === n && 'focus' === h);
            (p || b.size > 0 || (r && N.size > 0) || e.items) && (r && !w.isOpen && void 0 === e.items && S(!0), (U.current = n), w.open(t));
        },
        G = (0, a.useCallback)(
            (e) => {
                w.isOpen && P(b), w.toggle(e);
            },
            [w, b]
        ),
        k = (0, a.useCallback)(() => {
            w.isOpen && (P(b), w.close());
        }, [w, b]),
        B = (0, a.useRef)(y),
        F = () => {
            var e, t;
            let n = null !== (t = null === (e = N.getItem(R)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : '';
            (B.current = n), D(n);
        },
        V = (0, a.useRef)(null !== (_ = null !== (d = e.selectedKey) && void 0 !== d ? d : e.defaultSelectedKey) && void 0 !== _ ? _ : null),
        H = (0, a.useRef)(null !== (E = null === (n = N.getItem(R)) || void 0 === n ? void 0 : n.textValue) && void 0 !== E ? E : '');
    (0, a.useEffect)(() => {
        var t, n;
        g && (b.size > 0 || p) && !w.isOpen && y !== B.current && 'manual' !== h && x(null, 'input'), !T && !p && w.isOpen && 0 === b.size && k(), null != R && R !== V.current && k(), y !== B.current && (O.setFocusedKey(null), S(!1), '' === y && (void 0 === e.inputValue || void 0 === e.selectedKey) && v(null)), R !== V.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? F() : (B.current = y);
        let r = null !== (n = null === (t = N.getItem(R)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : '';
        !g && null != R && void 0 === e.inputValue && R === V.current && H.current !== r && ((B.current = r), D(r)), (V.current = R), (H.current = r);
    });
    let Z = () => {
            (V.current = null), v(null), k();
        },
        Y = () => {
            if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                var t, n;
                e.onSelectionChange(R);
                let r = null !== (n = null === (t = N.getItem(R)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : '';
                (B.current = r), k();
            } else F(), k();
        },
        j = () => {
            if (I) {
                var e, t;
                y === (null !== (t = null === (e = N.getItem(R)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : '') ? Y() : Z();
            } else Y();
        },
        W = (0, a.useMemo)(() => (w.isOpen ? (T ? N : b) : M), [w.isOpen, N, b, T, M]);
    return {
        ...w,
        toggle: (t, n) => {
            let r = 'manual' === n || ('focus' === n && 'focus' === h);
            (p || b.size > 0 || (r && N.size > 0) || e.items || w.isOpen) && (r && !w.isOpen && void 0 === e.items && S(!0), !w.isOpen && (U.current = n), G(t));
        },
        open: x,
        close: j,
        selectionManager: O,
        selectedKey: R,
        setSelectedKey: v,
        disabledKeys: L,
        isFocused: g,
        setFocused: (e) => {
            e ? 'focus' === h && x(null, 'focus') : m && j(), A(e);
        },
        selectedItem: C,
        collection: W,
        inputValue: y,
        setInputValue: D,
        commit: () => {
            w.isOpen && null != O.focusedKey ? (R === O.focusedKey ? Y() : v(O.focusedKey)) : j();
        },
        revert: () => {
            I && null == R ? Z() : Y();
        }
    };
}
