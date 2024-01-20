"use strict";
n.r(t), n.d(t, {
  useListState: function() {
    return c
  },
  useSingleSelectListState: function() {
    return u
  },
  ListCollection: function() {
    return a
  }
}), n("222007");
var r = n("884691"),
  i = n("919740"),
  o = n("872834"),
  s = n("679750");
class a {
  *[Symbol.iterator]() {
    yield* this.iterable
  }
  get size() {
    return this.keyMap.size
  }
  getKeys() {
    return this.keyMap.keys()
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    return t ? t.prevKey : null
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    return t ? t.nextKey : null
  }
  getFirstKey() {
    return this.firstKey
  }
  getLastKey() {
    return this.lastKey
  }
  getItem(e) {
    return this.keyMap.get(e)
  }
  at(e) {
    let t = [...this.getKeys()];
    return this.getItem(t[e])
  }
  getChildren(e) {
    let t = this.keyMap.get(e);
    return (null == t ? void 0 : t.childNodes) || []
  }
  constructor(e) {
    let t;
    this.keyMap = new Map, this.iterable = e;
    let n = e => {
      if (this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)
        for (let t of e.childNodes) n(t)
    };
    for (let t of e) n(t);
    let r = 0;
    for (let [e, n] of this.keyMap) t ? (t.nextKey = e, n.prevKey = t.key) : (this.firstKey = e, n.prevKey = void 0), "item" === n.type && (n.index = r++), (t = n).nextKey = void 0;
    this.lastKey = null == t ? void 0 : t.key
  }
}

function c(e) {
  let {
    filter: t
  } = e, n = (0, i.useMultipleSelectionState)(e), s = (0, r.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = (0, r.useCallback)(e => new a(t ? t(e) : e), [t]), u = (0, r.useMemo)(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [e.suppressTextValueWarning]), d = (0, o.useCollection)(e, c, u), l = (0, r.useMemo)(() => new i.SelectionManager(d, n), [d, n]), f = (0, r.useRef)(null);
  return (0, r.useEffect)(() => {
    if (null != n.focusedKey && !d.getItem(n.focusedKey)) {
      let e;
      let t = f.current.getItem(n.focusedKey),
        r = [...f.current.getKeys()].map(e => {
          let t = f.current.getItem(e);
          return "item" === t.type ? t : null
        }).filter(e => null !== e),
        i = [...d.getKeys()].map(e => {
          let t = d.getItem(e);
          return "item" === t.type ? t : null
        }).filter(e => null !== e),
        o = r.length - i.length,
        s = Math.min(o > 1 ? Math.max(t.index - o + 1, 0) : t.index, i.length - 1);
      for (; s >= 0;) {
        if (!l.isDisabled(i[s].key)) {
          e = i[s];
          break
        }
        s < i.length - 1 ? s++ : (s > t.index && (s = t.index), s--)
      }
      n.setFocusedKey(e ? e.key : null)
    }
    f.current = d
  }, [d, l, n, n.focusedKey]), {
    collection: d,
    disabledKeys: s,
    selectionManager: l
  }
}

function u(e) {
  var t;
  let [n, i] = (0, s.useControlledState)(e.selectedKey, null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : null, e.onSelectionChange), o = (0, r.useMemo)(() => null != n ? [n] : [], [n]), {
    collection: a,
    disabledKeys: u,
    selectionManager: d
  } = c({
    ...e,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: o,
    onSelectionChange: t => {
      let r = t.values().next().value;
      r === n && e.onSelectionChange && e.onSelectionChange(r), i(r)
    }
  }), l = null != n ? a.getItem(n) : null;
  return {
    collection: a,
    disabledKeys: u,
    selectionManager: d,
    selectedKey: n,
    setSelectedKey: i,
    selectedItem: l
  }
}