"use strict";
n.r(t), n.d(t, {
  useTab: function() {
    return u
  },
  useTabList: function() {
    return l
  }
}), n("222007"), n("781738");
var r = n("628364"),
  i = n("290895"),
  o = n("884691"),
  s = n("181551");
let a = new WeakMap;

function c(e, t, n) {
  "string" == typeof t && (t = t.replace(/\s+/g, ""));
  let r = a.get(e);
  return "".concat(r, "-").concat(n, "-").concat(t)
}

function u(e, t, n) {
  let {
    key: i,
    isDisabled: o,
    shouldSelectOnPressUp: s
  } = e, {
    selectionManager: a,
    selectedKey: u
  } = t, d = i === u, l = o || t.isDisabled || t.disabledKeys.has(i), {
    itemProps: f,
    isPressed: p
  } = (0, r.useSelectableItem)({
    selectionManager: a,
    key: i,
    ref: n,
    isDisabled: l,
    shouldSelectOnPressUp: s
  }), h = c(t, i, "tab"), g = c(t, i, "tabpanel"), {
    tabIndex: b
  } = f;
  return {
    tabProps: {
      ...f,
      id: h,
      "aria-selected": d,
      "aria-disabled": l || void 0,
      "aria-controls": d ? g : void 0,
      tabIndex: l ? void 0 : b,
      role: "tab"
    },
    isSelected: d,
    isDisabled: l,
    isPressed: p
  }
}
class d {
  getKeyLeftOf(e) {
    return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e)
  }
  getKeyRightOf(e) {
    return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e)
  }
  getKeyAbove(e) {
    return this.getPreviousKey(e)
  }
  getKeyBelow(e) {
    return this.getNextKey(e)
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    return this.disabledKeys.has(e) && (e = this.getNextKey(e)), e
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    return this.disabledKeys.has(e) && (e = this.getPreviousKey(e)), e
  }
  getNextKey(e) {
    do null == (e = this.collection.getKeyAfter(e)) && (e = this.collection.getFirstKey()); while (this.disabledKeys.has(e));
    return e
  }
  getPreviousKey(e) {
    do null == (e = this.collection.getKeyBefore(e)) && (e = this.collection.getLastKey()); while (this.disabledKeys.has(e));
    return e
  }
  constructor(e, t, n, r = new Set) {
    this.collection = e, this.flipDirection = "rtl" === t && "horizontal" === n, this.disabledKeys = r
  }
}

function l(e, t, n) {
  let {
    orientation: c = "horizontal",
    keyboardActivation: u = "automatic"
  } = e, {
    collection: l,
    selectionManager: f,
    disabledKeys: p
  } = t, {
    direction: h
  } = (0, s.useLocale)(), g = (0, o.useMemo)(() => new d(l, h, c, p), [l, p, c, h]), {
    collectionProps: b
  } = (0, r.useSelectableCollection)({
    ref: n,
    selectionManager: f,
    keyboardDelegate: g,
    selectOnFocus: "automatic" === u,
    disallowEmptySelection: !0,
    scrollRef: n
  }), v = (0, i.useId)();
  a.set(t, v);
  let m = (0, i.useLabels)({
    ...e,
    id: v
  });
  return {
    tabListProps: {
      ...(0, i.mergeProps)(b, m),
      role: "tablist",
      "aria-orientation": c,
      tabIndex: void 0
    }
  }
}