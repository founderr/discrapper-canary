"use strict";
n.r(t), n.d(t, {
  GridKeyboardDelegate: function() {
    return q
  },
  useGrid: function() {
    return Q
  },
  useGridRowGroup: function() {
    return ee
  },
  useGridRow: function() {
    return et
  },
  useGridCell: function() {
    return en
  },
  useGridSelectionCheckbox: function() {
    return eo
  },
  useHighlightSelectionDescription: function() {
    return $
  },
  useGridSelectionAnnouncement: function() {
    return J
  }
}), n("222007"), n("424973");
var r = n("594551"),
  o = n("107803"),
  a = n("996410"),
  i = n("718910"),
  s = n("663207"),
  c = n("767927"),
  l = n("31480"),
  u = n("4712"),
  d = n("936081"),
  p = n("320325"),
  f = n("168192"),
  h = n("580102"),
  m = n("569268"),
  v = n("665492"),
  g = n("456066"),
  y = n("747143"),
  b = n("452563"),
  x = n("52129"),
  S = n("43931"),
  w = n("12059"),
  D = n("611413"),
  C = n("525500"),
  k = n("878385"),
  P = n("411559"),
  E = n("325123"),
  T = n("123498"),
  M = n("981550"),
  R = n("979"),
  I = n("968094"),
  O = n("657816"),
  A = n("958895"),
  L = n("818847"),
  N = n("630795"),
  F = n("204996"),
  j = n("846794"),
  K = n("488897"),
  _ = n("240849"),
  V = n("884691"),
  z = n("564341"),
  B = n("447259"),
  U = n("932165"),
  H = n("362561"),
  G = n("388032");

function W(e) {
  return e && e.__esModule ? e.default : e
}
class q {
  isCell(e) {
    return "cell" === e.type
  }
  isRow(e) {
    return "row" === e.type || "item" === e.type
  }
  findPreviousKey(e, t) {
    let n = null != e ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
    for (; null != n;) {
      let e = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!t || t(e))) return n;
      n = this.collection.getKeyBefore(n)
    }
  }
  findNextKey(e, t) {
    let n = null != e ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
    for (; null != n;) {
      let e = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!t || t(e))) return n;
      n = this.collection.getKeyAfter(n)
    }
  }
  getKeyBelow(e) {
    let t = this.collection.getItem(e);
    if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findNextKey(e)))) {
      if (this.isCell(t)) {
        let n = this.collection.getItem(e);
        return (0, j.getNthItem)((0, j.getChildNodes)(n, this.collection), t.index).key
      }
      if ("row" === this.focusMode) return e
    }
  }
  getKeyAbove(e) {
    let t = this.collection.getItem(e);
    if (t && (this.isCell(t) && (e = t.parentKey), null != (e = this.findPreviousKey(e)))) {
      if (this.isCell(t)) {
        let n = this.collection.getItem(e);
        return (0, j.getNthItem)((0, j.getChildNodes)(n, this.collection), t.index).key
      }
      if ("row" === this.focusMode) return e
    }
  }
  getKeyRightOf(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (this.isRow(t)) {
        let e = (0, j.getChildNodes)(t, this.collection);
        return "rtl" === this.direction ? (0, j.getLastItem)(e).key : (0, j.getFirstItem)(e).key
      }
      if (this.isCell(t)) {
        let n = this.collection.getItem(t.parentKey),
          r = (0, j.getChildNodes)(n, this.collection),
          o = "rtl" === this.direction ? (0, j.getNthItem)(r, t.index - 1) : (0, j.getNthItem)(r, t.index + 1);
        return o ? o.key : "row" === this.focusMode ? t.parentKey : "rtl" === this.direction ? this.getFirstKey(e) : this.getLastKey(e)
      }
    }
  }
  getKeyLeftOf(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (this.isRow(t)) {
        let e = (0, j.getChildNodes)(t, this.collection);
        return "rtl" === this.direction ? (0, j.getFirstItem)(e).key : (0, j.getLastItem)(e).key
      }
      if (this.isCell(t)) {
        let n = this.collection.getItem(t.parentKey),
          r = (0, j.getChildNodes)(n, this.collection),
          o = "rtl" === this.direction ? (0, j.getNthItem)(r, t.index + 1) : (0, j.getNthItem)(r, t.index - 1);
        return o ? o.key : "row" === this.focusMode ? t.parentKey : "rtl" === this.direction ? this.getLastKey(e) : this.getFirstKey(e)
      }
    }
  }
  getFirstKey(e, t) {
    let n;
    if (null != e) {
      if (!(n = this.collection.getItem(e))) return;
      if (this.isCell(n) && !t) {
        let e = this.collection.getItem(n.parentKey);
        return (0, j.getFirstItem)((0, j.getChildNodes)(e, this.collection)).key
      }
    }
    if (null != (e = this.findNextKey()) && n && this.isCell(n) && t || "cell" === this.focusMode) {
      let t = this.collection.getItem(e);
      e = (0, j.getFirstItem)((0, j.getChildNodes)(t, this.collection)).key
    }
    return e
  }
  getLastKey(e, t) {
    let n;
    if (null != e) {
      if (!(n = this.collection.getItem(e))) return;
      if (this.isCell(n) && !t) {
        let e = this.collection.getItem(n.parentKey),
          t = (0, j.getChildNodes)(e, this.collection);
        return (0, j.getLastItem)(t).key
      }
    }
    if (null != (e = this.findPreviousKey()) && n && this.isCell(n) && t || "cell" === this.focusMode) {
      let t = this.collection.getItem(e),
        n = (0, j.getChildNodes)(t, this.collection);
      e = (0, j.getLastItem)(n).key
    }
    return e
  }
  getItem(e) {
    return this.ref.current.querySelector('[data-key="'.concat(CSS.escape(e.toString()), '"]'))
  }
  getItemRect(e) {
    var t;
    if (this.layout) return null === (t = this.layout.getLayoutInfo(e)) || void 0 === t ? void 0 : t.rect;
    let n = this.getItem(e);
    if (n) return new K.Rect(n.offsetLeft, n.offsetTop, n.offsetWidth, n.offsetHeight)
  }
  getPageHeight() {
    var e, t, n;
    return this.layout ? null === (e = this.layout.virtualizer) || void 0 === e ? void 0 : e.visibleRect.height : null === (n = this.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : t.offsetHeight
  }
  getContentHeight() {
    var e, t;
    return this.layout ? this.layout.getContentSize().height : null === (t = this.ref) || void 0 === t ? void 0 : null === (e = t.current) || void 0 === e ? void 0 : e.scrollHeight
  }
  getKeyPageAbove(e) {
    let t = this.getItemRect(e);
    if (!t) return null;
    let n = Math.max(0, t.maxY - this.getPageHeight());
    for (; t && t.y > n;) e = this.getKeyAbove(e), t = this.getItemRect(e);
    return e
  }
  getKeyPageBelow(e) {
    let t = this.getItemRect(e);
    if (!t) return null;
    let n = this.getPageHeight(),
      r = Math.min(this.getContentHeight(), t.y + n);
    for (; t && t.maxY < r;) {
      let n = this.getKeyBelow(e);
      t = this.getItemRect(n), null != n && (e = n)
    }
    return e
  }
  getKeyForSearch(e, t) {
    if (!this.collator) return null;
    let n = this.collection,
      r = null != t ? t : this.getFirstKey(),
      o = n.getItem(r);
    "cell" === o.type && (r = o.parentKey);
    let a = !1;
    for (; null != r;) {
      let t = n.getItem(r);
      if (t.textValue) {
        let n = t.textValue.slice(0, e.length);
        if (0 === this.collator.compare(n, e)) {
          if (this.isRow(t) && "cell" === this.focusMode) return (0, j.getFirstItem)((0, j.getChildNodes)(t, this.collection)).key;
          return t.key
        }
      }
      null == (r = this.findNextKey(r)) && !a && (r = this.getFirstKey(), a = !0)
    }
    return null
  }
  constructor(e) {
    this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.ref = e.ref, this.direction = e.direction, this.collator = e.collator, this.layout = e.layout, this.focusMode = e.focusMode || "row"
  }
}
let Z = new WeakMap;
var Y = {};

function J(e, t) {
  let {
    getRowText: n = e => {
      var n, r, o, a;
      return null !== (a = null === (n = (r = t.collection).getTextValue) || void 0 === n ? void 0 : n.call(r, e)) && void 0 !== a ? a : null === (o = t.collection.getItem(e)) || void 0 === o ? void 0 : o.textValue
    }
  } = e, r = (0, z.useLocalizedStringFormatter)(W(Y), "@react-aria/grid"), o = t.selectionManager.rawSelection, a = (0, V.useRef)(o);
  (0, _.useUpdateEffect)(() => {
    var e;
    if (!t.selectionManager.isFocused) {
      a.current = o;
      return
    }
    let i = X(o, a.current),
      s = X(a.current, o),
      c = "replace" === t.selectionManager.selectionBehavior,
      l = [];
    if (1 === t.selectionManager.selectedKeys.size && c) {
      if (t.collection.getItem(t.selectionManager.selectedKeys.keys().next().value)) {
        let e = n(t.selectionManager.selectedKeys.keys().next().value);
        e && l.push(r.format("selectedItem", {
          item: e
        }))
      }
    } else if (1 === i.size && 0 === s.size) {
      let e = n(i.keys().next().value);
      e && l.push(r.format("selectedItem", {
        item: e
      }))
    } else if (1 === s.size && 0 === i.size && t.collection.getItem(s.keys().next().value)) {
      let e = n(s.keys().next().value);
      e && l.push(r.format("deselectedItem", {
        item: e
      }))
    }
    "multiple" === t.selectionManager.selectionMode && (0 === l.length || "all" === o || o.size > 1 || "all" === a.current || (null === (e = a.current) || void 0 === e ? void 0 : e.size) > 1) && l.push("all" === o ? r.format("selectedAll") : r.format("selectedCount", {
      count: o.size
    })), l.length > 0 && (0, H.announce)(l.join(" ")), a.current = o
  }, [o])
}

function X(e, t) {
  let n = new Set;
  if ("all" === e || "all" === t) return n;
  for (let r of e.keys()) !t.has(r) && n.add(r);
  return n
}

function $(e) {
  let t = (0, z.useLocalizedStringFormatter)(W(Y), "@react-aria/grid"),
    n = (0, G.useInteractionModality)(),
    r = ("pointer" === n || "virtual" === n || null == n) && "undefined" != typeof window && "ontouchstart" in window,
    o = (0, V.useMemo)(() => {
      let n, o = e.selectionManager.selectionMode,
        a = e.selectionManager.selectionBehavior;
      return r && (n = t.format("longPressToSelect")), "replace" === a && "none" !== o && e.hasItemActions ? n : void 0
    }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, t, r]);
  return (0, _.useDescription)(o)
}

function Q(e, t, n) {
  let {
    isVirtualized: r,
    keyboardDelegate: o,
    focusMode: a,
    scrollRef: i,
    getRowText: s,
    onRowAction: c,
    onCellAction: l
  } = e, {
    selectionManager: u
  } = t;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let d = (0, z.useCollator)({
      usage: "search",
      sensitivity: "base"
    }),
    {
      direction: p
    } = (0, z.useLocale)(),
    f = t.selectionManager.disabledBehavior,
    h = (0, V.useMemo)(() => o || new q({
      collection: t.collection,
      disabledKeys: "selection" === f ? new Set : t.disabledKeys,
      ref: n,
      direction: p,
      collator: d,
      focusMode: a
    }), [o, t.collection, t.disabledKeys, f, n, p, d, a]),
    {
      collectionProps: m
    } = (0, U.useSelectableCollection)({
      ref: n,
      selectionManager: u,
      keyboardDelegate: h,
      isVirtualized: r,
      scrollRef: i
    }),
    v = (0, _.useId)(e.id);
  Z.set(t, {
    keyboardDelegate: h,
    actions: {
      onRowAction: c,
      onCellAction: l
    }
  });
  let g = $({
      selectionManager: u,
      hasItemActions: !!(c || l)
    }),
    y = (0, _.filterDOMProps)(e, {
      labelable: !0
    }),
    b = (0, V.useCallback)(e => {
      if (u.isFocused) {
        !e.currentTarget.contains(e.target) && u.setFocused(!1);
        return
      }
      e.currentTarget.contains(e.target) && u.setFocused(!0)
    }, [u]),
    x = (0, V.useMemo)(() => ({
      onBlur: m.onBlur,
      onFocus: b
    }), [b, m.onBlur]),
    S = (0, B.useHasTabbableChild)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    w = (0, _.mergeProps)(y, {
      role: "grid",
      id: v,
      "aria-multiselectable": "multiple" === u.selectionMode ? "true" : void 0
    }, t.isKeyboardNavigationDisabled ? x : m, 0 === t.collection.size && {
      tabIndex: S ? -1 : 0
    }, g);
  return r && (w["aria-rowcount"] = t.collection.size, w["aria-colcount"] = t.collection.columnCount), J({
    getRowText: s
  }, t), {
    gridProps: w
  }
}

function ee() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  }
}

function et(e, t, n) {
  let {
    node: r,
    isVirtualized: o,
    shouldSelectOnPressUp: a,
    onAction: i
  } = e, {
    actions: {
      onRowAction: s
    }
  } = Z.get(t), {
    itemProps: c,
    ...l
  } = (0, U.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: r.key,
    ref: n,
    isVirtualized: o,
    shouldSelectOnPressUp: a,
    onAction: s ? () => s(r.key) : i,
    isDisabled: 0 === t.collection.size
  }), u = t.selectionManager.isSelected(r.key), d = {
    role: "row",
    "aria-selected": "none" !== t.selectionManager.selectionMode ? u : void 0,
    "aria-disabled": l.isDisabled || void 0,
    ...c
  };
  return o && (d["aria-rowindex"] = r.index + 1), {
    rowProps: d,
    ...l
  }
}

function en(e, t, n) {
  var r;
  let {
    node: o,
    isVirtualized: a,
    focusMode: i = "child",
    shouldSelectOnPressUp: s,
    onAction: c
  } = e, {
    direction: l
  } = (0, z.useLocale)(), {
    keyboardDelegate: u,
    actions: {
      onCellAction: d
    }
  } = Z.get(t), p = (0, V.useRef)(null), f = () => {
    let e = (0, B.getFocusableTreeWalker)(n.current);
    if ("child" === i) {
      if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
      let r = "last" === t.selectionManager.childFocusStrategy ? er(e) : e.firstChild();
      if (r) {
        (0, B.focusSafely)(r);
        return
      }
    }(null != p.current && o.key !== p.current || !n.current.contains(document.activeElement)) && (0, B.focusSafely)(n.current)
  }, {
    itemProps: h,
    isPressed: m
  } = (0, U.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: o.key,
    ref: n,
    isVirtualized: a,
    focus: f,
    shouldSelectOnPressUp: s,
    onAction: d ? () => d(o.key) : c,
    isDisabled: 0 === t.collection.size
  }), v = (0, _.mergeProps)(h, {
    role: "gridcell",
    onKeyDownCapture: e => {
      if (!e.currentTarget.contains(e.target) || t.isKeyboardNavigationDisabled) return;
      let r = (0, B.getFocusableTreeWalker)(n.current);
      switch (r.currentNode = document.activeElement, e.key) {
        case "ArrowLeft": {
          let t = "rtl" === l ? r.nextNode() : r.previousNode();
          if ("child" === i && t === n.current && (t = null), t) e.preventDefault(), e.stopPropagation(), (0, B.focusSafely)(t), (0, _.scrollIntoViewport)(t, {
            containingElement: (0, _.getScrollParent)(n.current)
          });
          else {
            if (u.getKeyLeftOf(o.key) !== o.key) break;
            e.preventDefault(), e.stopPropagation(), "cell" === i && "rtl" === l ? ((0, B.focusSafely)(n.current), (0, _.scrollIntoViewport)(n.current, {
              containingElement: (0, _.getScrollParent)(n.current)
            })) : (r.currentNode = n.current, (t = "rtl" === l ? r.firstChild() : er(r)) && ((0, B.focusSafely)(t), (0, _.scrollIntoViewport)(t, {
              containingElement: (0, _.getScrollParent)(n.current)
            })))
          }
          break
        }
        case "ArrowRight": {
          let t = "rtl" === l ? r.previousNode() : r.nextNode();
          if ("child" === i && t === n.current && (t = null), t) e.preventDefault(), e.stopPropagation(), (0, B.focusSafely)(t), (0, _.scrollIntoViewport)(t, {
            containingElement: (0, _.getScrollParent)(n.current)
          });
          else {
            if (u.getKeyRightOf(o.key) !== o.key) break;
            e.preventDefault(), e.stopPropagation(), "cell" === i && "ltr" === l ? ((0, B.focusSafely)(n.current), (0, _.scrollIntoViewport)(n.current, {
              containingElement: (0, _.getScrollParent)(n.current)
            })) : (r.currentNode = n.current, (t = "rtl" === l ? er(r) : r.firstChild()) && ((0, B.focusSafely)(t), (0, _.scrollIntoViewport)(t, {
              containingElement: (0, _.getScrollParent)(n.current)
            })))
          }
          break
        }
        case "ArrowUp":
        case "ArrowDown":
          !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)))
      }
    },
    onFocus: e => {
      if (p.current = o.key, e.target !== n.current) {
        !(0, G.isFocusVisible)() && t.selectionManager.setFocusedKey(o.key);
        return
      }
      requestAnimationFrame(() => {
        "child" === i && document.activeElement === n.current && f()
      })
    }
  });
  return a && (v["aria-colindex"] = (null !== (r = o.colIndex) && void 0 !== r ? r : o.index) + 1), s && null != v.tabIndex && null == v.onPointerDown && (v.onPointerDown = e => {
    let t = e.currentTarget,
      n = t.getAttribute("tabindex");
    t.removeAttribute("tabindex"), requestAnimationFrame(() => {
      t.setAttribute("tabindex", n)
    })
  }), {
    gridCellProps: v,
    isPressed: m
  }
}

function er(e) {
  let t, n;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}

function eo(e, t) {
  let {
    key: n
  } = e, r = t.selectionManager, o = (0, _.useId)(), a = !t.selectionManager.canSelectItem(n), i = t.selectionManager.isSelected(n), s = (0, z.useLocalizedStringFormatter)(W(Y), "@react-aria/grid");
  return {
    checkboxProps: {
      id: o,
      "aria-label": s.format("select"),
      isSelected: i,
      isDisabled: a,
      onChange: () => r.select(n)
    }
  }
}
Y = {
  "ar-AE": r.default,
  "bg-BG": o.default,
  "cs-CZ": a.default,
  "da-DK": i.default,
  "de-DE": s.default,
  "el-GR": c.default,
  "en-US": l.default,
  "es-ES": u.default,
  "et-EE": d.default,
  "fi-FI": p.default,
  "fr-FR": f.default,
  "he-IL": h.default,
  "hr-HR": m.default,
  "hu-HU": v.default,
  "it-IT": g.default,
  "ja-JP": y.default,
  "ko-KR": b.default,
  "lt-LT": x.default,
  "lv-LV": S.default,
  "nb-NO": w.default,
  "nl-NL": D.default,
  "pl-PL": C.default,
  "pt-BR": k.default,
  "pt-PT": P.default,
  "ro-RO": E.default,
  "ru-RU": T.default,
  "sk-SK": M.default,
  "sl-SI": R.default,
  "sr-SP": I.default,
  "sv-SE": O.default,
  "tr-TR": A.default,
  "uk-UA": L.default,
  "zh-CN": N.default,
  "zh-TW": F.default
}