"use strict";
n.r(t), n.d(t, {
  useListState: function() {
    return s
  }
}), n("222007");
var r = n("884691"),
  a = n("72634"),
  o = n("846794");
class i {
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

function s(e) {
  let {
    filter: t
  } = e, n = (0, a.useMultipleSelectionState)(e), s = (0, r.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = (0, r.useCallback)(e => new i(t ? t(e) : e), [t]), l = (0, r.useMemo)(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [e.suppressTextValueWarning]), u = (0, o.useCollection)(e, c, l), d = (0, r.useMemo)(() => new a.SelectionManager(u, n), [u, n]), p = (0, r.useRef)(null);
  return (0, r.useEffect)(() => {
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
    disabledKeys: s,
    selectionManager: d
  }
}