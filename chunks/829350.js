"use strict";
n.r(t), n.d(t, {
  useComboBoxState: function() {
    return c
  }
}), n("222007"), n("424973");
var r = n("872834"),
  i = n("789292"),
  o = n("884691"),
  s = n("679750"),
  a = n("318408");

function c(e) {
  var t, n, c, u, d, l, f, p;
  let {
    defaultFilter: h,
    menuTrigger: g = "input",
    allowsEmptyCollection: b = !1,
    allowsCustomValue: v,
    shouldCloseOnBlur: m = !0
  } = e, [y, x] = (0, o.useState)(!1), [w, S] = (0, o.useState)(!1), {
    collection: k,
    selectionManager: _,
    selectedKey: E,
    setSelectedKey: M,
    selectedItem: D,
    disabledKeys: C
  } = (0, i.useSingleSelectListState)({
    ...e,
    onSelectionChange: t => {
      e.onSelectionChange && e.onSelectionChange(t), t === E && (z(), F())
    },
    items: null !== (c = e.items) && void 0 !== c ? c : e.defaultItems
  }), [P, T] = (0, s.useControlledState)(e.inputValue, null !== (d = null !== (u = e.defaultInputValue) && void 0 !== u ? u : null === (t = k.getItem(E)) || void 0 === t ? void 0 : t.textValue) && void 0 !== d ? d : "", e.onInputChange), A = (0, o.useMemo)(() => null == e.items && h ? function(e, t, n) {
    return new i.ListCollection(function e(t, n, i, o) {
      let s = [];
      for (let a of n)
        if ("section" === a.type && a.hasChildNodes) {
          let n = e(t, (0, r.getChildNodes)(a, t), i, o);
          [...n].some(e => "item" === e.type) && s.push({
            ...a,
            childNodes: n
          })
        } else "item" === a.type && o(a.textValue, i) ? s.push({
          ...a
        }) : "item" !== a.type && s.push({
          ...a
        });
      return s
    }(e, e, t, n))
  }(k, P, h) : k, [k, P, h, e.items]), [R, I] = (0, o.useState)(A), O = (0, o.useRef)("focus"), j = (0, a.useMenuTriggerState)({
    ...e,
    onOpenChange: t => {
      e.onOpenChange && e.onOpenChange(t, t ? O.current : void 0), _.setFocused(t), !t && _.setFocusedKey(null)
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), N = (t, n) => {
    let r = "manual" === n || "focus" === n && "focus" === g;
    (b || A.size > 0 || r && k.size > 0 || e.items) && (r && !j.isOpen && void 0 === e.items && x(!0), O.current = n, j.open(t))
  }, L = (0, o.useCallback)(e => {
    j.isOpen && I(A), j.toggle(e)
  }, [j, A]), F = (0, o.useCallback)(() => {
    j.isOpen && (I(A), j.close())
  }, [j, A]), B = (0, o.useRef)(P), z = () => {
    var e, t;
    let n = null !== (t = null === (e = k.getItem(E)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
    B.current = n, T(n)
  }, K = (0, o.useRef)(null !== (f = null !== (l = e.selectedKey) && void 0 !== l ? l : e.defaultSelectedKey) && void 0 !== f ? f : null), V = (0, o.useRef)(null !== (p = null === (n = k.getItem(E)) || void 0 === n ? void 0 : n.textValue) && void 0 !== p ? p : "");
  (0, o.useEffect)(() => {
    var t, n;
    w && (A.size > 0 || b) && !j.isOpen && P !== B.current && "manual" !== g && N(null, "input"), !y && !b && j.isOpen && 0 === A.size && F(), null != E && E !== K.current && F(), P !== B.current && (_.setFocusedKey(null), x(!1), "" === P && (void 0 === e.inputValue || void 0 === e.selectedKey) && M(null)), E !== K.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? z() : B.current = P;
    let r = null !== (n = null === (t = k.getItem(E)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
    !w && null != E && void 0 === e.inputValue && E === K.current && V.current !== r && (B.current = r, T(r)), K.current = E, V.current = r
  });
  let U = () => {
      K.current = null, M(null), F()
    },
    q = () => {
      if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
        var t, n;
        e.onSelectionChange(E);
        let r = null !== (n = null === (t = k.getItem(E)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
        B.current = r, F()
      } else z(), F()
    },
    H = () => {
      if (v) {
        var e, t;
        let n = null !== (t = null === (e = k.getItem(E)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
        P === n ? q() : U()
      } else q()
    },
    G = (0, o.useMemo)(() => j.isOpen ? y ? k : A : R, [j.isOpen, k, A, y, R]);
  return {
    ...j,
    toggle: (t, n) => {
      let r = "manual" === n || "focus" === n && "focus" === g;
      (b || A.size > 0 || r && k.size > 0 || e.items || j.isOpen) && (r && !j.isOpen && void 0 === e.items && x(!0), !j.isOpen && (O.current = n), L(t))
    },
    open: N,
    close: H,
    selectionManager: _,
    selectedKey: E,
    setSelectedKey: M,
    disabledKeys: C,
    isFocused: w,
    setFocused: e => {
      e ? "focus" === g && N(null, "focus") : m && H(), S(e)
    },
    selectedItem: D,
    collection: G,
    inputValue: P,
    setInputValue: T,
    commit: () => {
      j.isOpen && null != _.focusedKey ? E === _.focusedKey ? q() : M(_.focusedKey) : H()
    },
    revert: () => {
      v && null == E ? U() : q()
    }
  }
}