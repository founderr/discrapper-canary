"use strict";
n.r(t), n.d(t, {
  useSingleSelectListState: function() {
    return c
  },
  ListCollection: function() {
    return s
  }
}), n("222007");
var r = n("72634"),
  a = n("884691"),
  o = n("846794"),
  i = n("708966");
class s {
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
  var t;
  let [n, c] = (0, i.useControlledState)(e.selectedKey, null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : null, e.onSelectionChange), l = (0, a.useMemo)(() => null != n ? [n] : [], [n]), {
    collection: u,
    disabledKeys: d,
    selectionManager: p
  } = function(e) {
    let {
      filter: t
    } = e, n = (0, r.useMultipleSelectionState)(e), i = (0, a.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = (0, a.useCallback)(e => new s(t ? t(e) : e), [t]), l = (0, a.useMemo)(() => ({
      suppressTextValueWarning: e.suppressTextValueWarning
    }), [e.suppressTextValueWarning]), u = (0, o.useCollection)(e, c, l), d = (0, a.useMemo)(() => new r.SelectionManager(u, n), [u, n]), p = (0, a.useRef)(null);
    return (0, a.useEffect)(() => {
      if (null != n.focusedKey && !u.getItem(n.focusedKey)) {
        let e;
        let t = p.current.getItem(n.focusedKey),
          r = [...p.current.getKeys()].map(e => {
            let t = p.current.getItem(e);
            return "item" === t.type ? t : null
          }).filter(e => null !== e),
          a = [...u.getKeys()].map(e => {
            let t = u.getItem(e);
            return "item" === t.type ? t : null
          }).filter(e => null !== e),
          o = r.length - a.length,
          i = Math.min(o > 1 ? Math.max(t.index - o + 1, 0) : t.index, a.length - 1);
        for (; i >= 0;) {
          if (!d.isDisabled(a[i].key)) {
            e = a[i];
            break
          }
          i < a.length - 1 ? i++ : (i > t.index && (i = t.index), i--)
        }
        n.setFocusedKey(e ? e.key : null)
      }
      p.current = u
    }, [u, d, n, n.focusedKey]), {
      collection: u,
      disabledKeys: i,
      selectionManager: d
    }
  }({
    ...e,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: l,
    onSelectionChange: t => {
      var r;
      let a = null !== (r = t.values().next().value) && void 0 !== r ? r : null;
      a === n && e.onSelectionChange && e.onSelectionChange(a), c(a)
    }
  }), f = null != n ? u.getItem(n) : null;
  return {
    collection: u,
    disabledKeys: d,
    selectionManager: p,
    selectedKey: n,
    setSelectedKey: c,
    selectedItem: f
  }
}