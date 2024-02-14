"use strict";
n.r(t), n.d(t, {
  Table: function() {
    return e7
  },
  Row: function() {
    return tr
  },
  Cell: function() {
    return ta
  },
  Column: function() {
    return tt
  },
  TableHeader: function() {
    return te
  },
  TableBody: function() {
    return tn
  }
}), n("70102"), n("222007"), n("424973");
var r = n("597287"),
  a = n("290895"),
  o = n("884691"),
  i = n("313067"),
  s = n("817736"),
  c = n("611434"),
  l = n("336468"),
  u = n("219528"),
  d = n("581555");
class p {
  get childNodes() {
    throw Error("childNodes is not supported")
  }
  clone() {
    let e = new p(this.type, this.key);
    return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e
  }
  constructor(e, t) {
    (0, i.default)(this, "value", null), (0, i.default)(this, "level", 0), (0, i.default)(this, "hasChildNodes", !1), (0, i.default)(this, "rendered", null), (0, i.default)(this, "textValue", ""), (0, i.default)(this, "aria-label", void 0), (0, i.default)(this, "index", 0), (0, i.default)(this, "parentKey", null), (0, i.default)(this, "prevKey", null), (0, i.default)(this, "nextKey", null), (0, i.default)(this, "firstChildKey", null), (0, i.default)(this, "lastChildKey", null), (0, i.default)(this, "props", {}), this.type = e, this.key = t
  }
}
let f = Symbol.iterator;
class h {
  *[f]() {
    let e = this.firstChild;
    for (; e;) yield e, e = e.nextSibling
  }
  get firstChild() {
    return this._firstChild
  }
  set firstChild(e) {
    this._firstChild = e, this.ownerDocument.markDirty(this)
  }
  get lastChild() {
    return this._lastChild
  }
  set lastChild(e) {
    this._lastChild = e, this.ownerDocument.markDirty(this)
  }
  get previousSibling() {
    return this._previousSibling
  }
  set previousSibling(e) {
    this._previousSibling = e, this.ownerDocument.markDirty(this)
  }
  get nextSibling() {
    return this._nextSibling
  }
  set nextSibling(e) {
    this._nextSibling = e, this.ownerDocument.markDirty(this)
  }
  get parentNode() {
    return this._parentNode
  }
  set parentNode(e) {
    this._parentNode = e, this.ownerDocument.markDirty(this)
  }
  appendChild(e) {
    this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), null == this.firstChild && (this.firstChild = e), this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
  }
  insertBefore(e, t) {
    if (null == t) return this.appendChild(e);
    this.ownerDocument.startTransaction(), e.parentNode && e.parentNode.removeChild(e), e.nextSibling = t, e.previousSibling = t.previousSibling, e.index = t.index, this.firstChild === t ? this.firstChild = e : t.previousSibling && (t.previousSibling.nextSibling = e), t.previousSibling = e, e.parentNode = t.parentNode;
    let n = t;
    for (; n;) n.index++, n = n.nextSibling;
    e.hasSetProps && this.ownerDocument.addNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
  }
  removeChild(e) {
    if (e.parentNode !== this) return;
    this.ownerDocument.startTransaction();
    let t = e.nextSibling;
    for (; t;) t.index--, t = t.nextSibling;
    e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.removeNode(e), this.ownerDocument.endTransaction(), this.ownerDocument.queueUpdate()
  }
  addEventListener() {}
  removeEventListener() {}
  constructor(e) {
    (0, i.default)(this, "_firstChild", null), (0, i.default)(this, "_lastChild", null), (0, i.default)(this, "_previousSibling", null), (0, i.default)(this, "_nextSibling", null), (0, i.default)(this, "_parentNode", null), this.ownerDocument = e
  }
}
let m = 0;
class v extends h {
  get index() {
    return this._index
  }
  set index(e) {
    this._index = e, this.ownerDocument.markDirty(this)
  }
  get level() {
    return this.parentNode instanceof v ? this.parentNode.level + ("item" === this.node.type ? 1 : 0) : 0
  }
  updateNode() {
    var e, t, n, r, a, o, i, s;
    let c = this.ownerDocument.getMutableNode(this);
    c.index = this.index, c.level = this.level, c.parentKey = this.parentNode instanceof v ? this.parentNode.node.key : null, c.prevKey = null !== (a = null === (e = this.previousSibling) || void 0 === e ? void 0 : e.node.key) && void 0 !== a ? a : null, c.nextKey = null !== (o = null === (t = this.nextSibling) || void 0 === t ? void 0 : t.node.key) && void 0 !== o ? o : null, c.hasChildNodes = !!this.firstChild, c.firstChildKey = null !== (i = null === (n = this.firstChild) || void 0 === n ? void 0 : n.node.key) && void 0 !== i ? i : null, c.lastChildKey = null !== (s = null === (r = this.lastChild) || void 0 === r ? void 0 : r.node.key) && void 0 !== s ? s : null
  }
  setProps(e, t, n) {
    let r = this.ownerDocument.getMutableNode(this),
      {
        value: a,
        textValue: o,
        id: i,
        ...s
      } = e;
    if (s.ref = t, r.props = s, r.rendered = n, r.value = a, r.textValue = o || ("string" == typeof n ? n : "") || e["aria-label"] || "", null != i && i !== r.key) {
      if (this.hasSetProps) throw Error("Cannot change the id of an item");
      r.key = i
    }!this.hasSetProps && (this.ownerDocument.addNode(this), this.ownerDocument.endTransaction(), this.hasSetProps = !0), this.ownerDocument.queueUpdate()
  }
  get style() {
    return {}
  }
  hasAttribute() {}
  setAttribute() {}
  setAttributeNS() {}
  removeAttribute() {}
  constructor(e, t) {
    super(t), (0, i.default)(this, "nodeType", 8), (0, i.default)(this, "_index", 0), (0, i.default)(this, "hasSetProps", !1), this.node = new p(e, "react-aria-".concat(++m)), this.ownerDocument.startTransaction()
  }
}
let g = Symbol.iterator;
class y {
  get size() {
    return this.keyMap.size
  }
  getKeys() {
    return this.keyMap.keys()
  }*[g]() {
    let e = null != this.firstKey ? this.keyMap.get(this.firstKey) : void 0;
    for (; e;) yield e, e = null != e.nextKey ? this.keyMap.get(e.nextKey) : void 0
  }
  getChildren(e) {
    let t = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let n = t.get(e),
          r = (null == n ? void 0 : n.firstChildKey) != null ? t.get(n.firstChildKey) : null;
        for (; r;) yield r, r = null != r.nextKey ? t.get(r.nextKey) : void 0
      }
    }
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    if (!t) return null;
    if (null != t.prevKey) {
      var n;
      for (t = this.keyMap.get(t.prevKey); t && "item" !== t.type && null != t.lastChildKey;) t = this.keyMap.get(t.lastChildKey);
      return null !== (n = null == t ? void 0 : t.key) && void 0 !== n ? n : null
    }
    return t.parentKey
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    if (!t) return null;
    if ("item" !== t.type && null != t.firstChildKey) return t.firstChildKey;
    for (; t;) {
      if (null != t.nextKey) return t.nextKey;
      if (null != t.parentKey) t = this.keyMap.get(t.parentKey);
      else break
    }
    return null
  }
  getFirstKey() {
    return this.firstKey
  }
  getLastKey() {
    var e;
    let t = null != this.lastKey ? this.keyMap.get(this.lastKey) : null;
    for (;
      (null == t ? void 0 : t.lastChildKey) != null;) t = this.keyMap.get(t.lastChildKey);
    return null !== (e = null == t ? void 0 : t.key) && void 0 !== e ? e : null
  }
  getItem(e) {
    var t;
    return null !== (t = this.keyMap.get(e)) && void 0 !== t ? t : null
  }
  at() {
    throw Error("Not implemented")
  }
  clone() {
    let e = new this.constructor;
    return e.keyMap = new Map(this.keyMap), e.firstKey = this.firstKey, e.lastKey = this.lastKey, e
  }
  addNode(e) {
    if (this.frozen) throw Error("Cannot add a node to a frozen collection");
    this.keyMap.set(e.key, e)
  }
  removeNode(e) {
    if (this.frozen) throw Error("Cannot remove a node to a frozen collection");
    this.keyMap.delete(e)
  }
  commit(e, t) {
    if (this.frozen) throw Error("Cannot commit a frozen collection");
    this.firstKey = e, this.lastKey = t, this.frozen = !0
  }
  constructor() {
    (0, i.default)(this, "keyMap", new Map), (0, i.default)(this, "firstKey", null), (0, i.default)(this, "lastKey", null), (0, i.default)(this, "frozen", !1)
  }
}
class b extends h {
  createElement(e) {
    return new v(e, this)
  }
  getMutableNode(e) {
    let t = e.node;
    return !this.mutatedNodes.has(e) && (t = e.node.clone(), this.mutatedNodes.add(e), e.node = t), this.markDirty(e), t
  }
  getMutableCollection() {
    return !this.collectionMutated && (this.collection = this.collection.clone(), this.collectionMutated = !0), this.collection
  }
  markDirty(e) {
    this.dirtyNodes.add(e)
  }
  startTransaction() {
    this.transactionCount++
  }
  endTransaction() {
    this.transactionCount--
  }
  addNode(e) {
    let t = this.getMutableCollection();
    if (!t.getItem(e.node.key))
      for (let n of (t.addNode(e.node), e)) this.addNode(n);
    this.markDirty(e)
  }
  removeNode(e) {
    for (let t of e) t.parentNode = null, this.removeNode(t);
    this.getMutableCollection().removeNode(e.node.key), this.markDirty(e)
  }
  getCollection() {
    if (this.transactionCount > 0) return this.collection;
    for (let e of this.dirtyNodes) e instanceof v && e.parentNode && e.updateNode();
    if (this.dirtyNodes.clear(), this.mutatedNodes.size) {
      var e, t, n, r;
      let a = this.getMutableCollection();
      for (let e of this.mutatedNodes) e.parentNode && a.addNode(e.node);
      a.commit(null !== (n = null === (e = this.firstChild) || void 0 === e ? void 0 : e.node.key) && void 0 !== n ? n : null, null !== (r = null === (t = this.lastChild) || void 0 === t ? void 0 : t.node.key) && void 0 !== r ? r : null), this.mutatedNodes.clear()
    }
    return this.collectionMutated = !1, this.collection
  }
  queueUpdate() {
    if (0 !== this.dirtyNodes.size && !(this.transactionCount > 0))
      for (let e of this.subscriptions) e()
  }
  subscribe(e) {
    return this.subscriptions.add(e), () => this.subscriptions.delete(e)
  }
  constructor(e) {
    super(null), (0, i.default)(this, "nodeType", 11), (0, i.default)(this, "ownerDocument", this), (0, i.default)(this, "dirtyNodes", new Set), (0, i.default)(this, "mutatedNodes", new Set), (0, i.default)(this, "subscriptions", new Set), (0, i.default)(this, "transactionCount", 0), this.collection = e, this.collectionMutated = !0
  }
}

function x(e) {
  let {
    children: t,
    items: n,
    idScope: r,
    addIdAndValue: a
  } = e, i = (0, o.useMemo)(() => new WeakMap, []);
  return (0, o.useMemo)(() => {
    if (!n || "function" != typeof t) return t;
    {
      let c = [];
      for (let l of n) {
        let n = i.get(l);
        if (!n) {
          if (null == (n = t(l)).key) {
            var e, s;
            let t = null !== (s = null !== (e = n.props.id) && void 0 !== e ? e : l.key) && void 0 !== s ? s : l.id;
            if (null == t) throw Error("Could not determine key for item");
            r && (t = r + ":" + t), n = (0, o.cloneElement)(n, a ? {
              key: t,
              id: t,
              value: l
            } : {
              key: t
            })
          }
          i.set(l, n)
        }
        c.push(n)
      }
      return c
    }
  }, [t, n, i, r, a])
}

function S(e) {
  return x({
    ...e,
    addIdAndValue: !0
  })
}
let w = (0, o.createContext)(!1);

function D(e, t) {
  let n = (0, o.useMemo)(() => new b(t || new y), [t]),
    a = (0, o.useCallback)(e => n.subscribe(e), [n]),
    i = (0, o.useCallback)(() => n.getCollection(), [n]),
    l = (0, c.useSyncExternalStore)(a, i, i),
    u = S(e),
    d = (0, o.useMemo)(() => o.createElement(w.Provider, {
      value: !0
    }, u), [u]);
  return {
    portal: (0, r.useIsSSR)() ? null : (0, s.createPortal)(d, n),
    collection: l
  }
}

function C(Element, e, t) {
  let n = (0, o.useContext)(w);
  return (t = k(e, t, e.children), n) ? o.createElement(Element, {
    ref: t
  }) : null
}

function k(e, t, n) {
  return (0, o.useCallback)(r => {
    null == r || r.setProps(e, t, n)
  }, [e, t, n])
}
let P = (0, o.forwardRef)(function(e, t) {
    return o.createElement("item", {
      ref: k(e, t, e.children)
    })
  }),
  E = (0, o.createContext)(null),
  T = (0, o.createContext)(null),
  M = Symbol("callback"),
  R = Symbol("default");

function O(e) {
  let {
    values: t,
    children: n
  } = e;
  for (let [e, r] of t) n = o.createElement(e.Provider, {
    value: r
  }, n);
  return n
}

function I(e) {
  let {
    className: t,
    style: n,
    children: r,
    defaultClassName: a,
    defaultChildren: i,
    values: s
  } = e;
  return (0, o.useMemo)(() => {
    let e, o, c;
    return e = "function" == typeof t ? t(s) : t, o = "function" == typeof n ? n(s) : n, {
      className: null != e ? e : a,
      style: o,
      children: c = "function" == typeof r ? r(s) : null == r ? i : r
    }
  }, [t, n, r, a, i, s])
}

function A(e, t, n) {
  let r = (0, o.useContext)(n) || {};
  if ("slots" in r && r.slots) {
    if (!e.slot && !r.slots[R]) throw Error("A slot prop is required");
    let t = e.slot || R;
    if (!r.slots[t]) throw Error('Invalid slot "'.concat(e.slot, '". Valid slot names are ') + new Intl.ListFormat().format(Object.keys(r.slots).map(e => '"'.concat(e, '"'))) + ".");
    r = r.slots[t]
  }
  let {
    ref: i,
    [M]: s,
    ...c
  } = r, l = (0, a.useObjectRef)((0, a.mergeRefs)(t, i)), u = (0, a.mergeProps)(c, e);
  return (0, o.useEffect)(() => {
    s && s(e)
  }, [s, e]), [u, l]
}

function L() {
  let [e, t] = (0, o.useState)(!0), n = (0, o.useRef)(!1), r = (0, o.useCallback)(e => {
    n.current = !0, t(!!e)
  }, []);
  return (0, a.useLayoutEffect)(() => {
    !n.current && t(!1)
  }, []), [r, e]
}

function N(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    [n, r] = (0, o.useState)(!0);
  return F(e, n && t, (0, o.useCallback)(() => r(!1), [])), n && t
}

function j(e, t) {
  let [n, r] = (0, o.useState)(!1), a = (0, o.useRef)("idle");
  return !t && e.current && "idle" === a.current && (n = !0, r(!0), a.current = "exiting"), !e.current && "exited" === a.current && (a.current = "idle"), F(e, n, (0, o.useCallback)(() => {
    a.current = "exited", r(!1)
  }, [])), n
}

function F(e, t, n) {
  let r = (0, o.useRef)(null);
  t && e.current && (r.current = window.getComputedStyle(e.current).animation), (0, a.useLayoutEffect)(() => {
    if (t && e.current) {
      let t = window.getComputedStyle(e.current);
      if ("none" !== t.animationName && t.animation !== r.current) {
        let t = a => {
            a.target === e.current && (r.removeEventListener("animationend", t), s.flushSync(() => {
              n()
            }))
          },
          r = e.current;
        return r.addEventListener("animationend", t), () => {
          r.removeEventListener("animationend", t)
        }
      }
      n()
    }
  }, [e, t, n])
}
let K = (0, o.createContext)(!1),
  _ = (0, o.createContext)({}),
  V = (0, o.createContext)(null),
  z = (0, o.createContext)(null);

function B(e) {
  var t;
  let {
    node: n,
    isCurrent: r,
    isDisabled: i
  } = e;
  return o.createElement("li", {
    ...(0, a.filterDOMProps)(n.props),
    style: n.props.style,
    className: null !== (t = n.props.className) && void 0 !== t ? t : "react-aria-Item"
  }, o.createElement(O, {
    values: [
      [V, {
        "aria-current": r ? "page" : null,
        isDisabled: i || r
      }],
      [_, r ? {
        "aria-current": "page"
      } : null]
    ]
  }, n.rendered))
}
let U = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
  H = (0, o.createContext)({}),
  G = (0, o.createContext)({}),
  W = (0, o.createContext)({}),
  q = (0, o.createContext)({}),
  Z = (0, o.createContext)(null),
  Y = (0, o.createContext)(null),
  X = (0, o.forwardRef)(function(e, t) {
    let {
      children: n,
      style: r,
      className: i
    } = e, {
      headerProps: s,
      weekDays: c
    } = (0, o.useContext)(Y);
    return o.createElement("thead", {
      ...(0, a.filterDOMProps)(e),
      ...s,
      ref: t,
      style: r,
      className: i || "react-aria-CalendarGridHeader"
    }, o.createElement("tr", null, c.map((e, t) => o.cloneElement(n(e), {
      key: t
    }))))
  }),
  J = (0, o.forwardRef)(function(e, t) {
    let {
      children: n,
      style: r,
      className: i
    } = e;
    return o.createElement("th", {
      ...(0, a.filterDOMProps)(e),
      ref: t,
      style: r,
      className: i || "react-aria-CalendarHeaderCell"
    }, n)
  }),
  $ = (0, o.forwardRef)(function(e, t) {
    let {
      children: n,
      style: i,
      className: s
    } = e, c = (0, o.useContext)(Z), {
      startDate: u
    } = (0, o.useContext)(Y), {
      locale: d
    } = (0, r.useLocale)(), p = (0, l.getWeeksInMonth)(u, d);
    return o.createElement("tbody", {
      ...(0, a.filterDOMProps)(e),
      ref: t,
      style: i,
      className: s || "react-aria-CalendarGridBody"
    }, [...Array(p).keys()].map(e => o.createElement("tr", {
      key: e
    }, c.getDatesInWeek(e, u).map((e, t) => e ? o.cloneElement(n(e), {
      key: t
    }) : o.createElement("td", {
      key: t
    })))))
  }),
  Q = (0, o.createContext)({}),
  ee = (0, o.createContext)(null),
  et = (0, o.createContext)(null),
  en = (0, o.createContext)(null),
  er = (0, o.createContext)({}),
  ea = (0, o.createContext)(null),
  eo = (0, o.forwardRef)(function(e, t) {
    let {
      render: n
    } = (0, o.useContext)(ea);
    return o.createElement(o.Fragment, null, n(e, t))
  }),
  ei = (0, o.createContext)({}),
  es = (0, o.forwardRef)(function(e, t) {
    [e, t] = A(e, t, ei);
    let n = C("header", e, t);
    return n ? n : o.createElement("header", {
      className: "react-aria-Header",
      ...e,
      ref: t
    }, e.children)
  }),
  ec = (0, o.createContext)({}),
  el = (0, o.forwardRef)(function(e, t) {
    [e, t] = A(e, t, ec);
    let {
      elementType: n,
      orientation: i,
      style: s,
      className: c
    } = e, Element = n || "hr";
    "hr" === Element && "vertical" === i && (Element = "div");
    let {
      separatorProps: l
    } = (0, r.useSeparator)({
      elementType: n,
      orientation: i
    }), u = C("separator", e, t);
    return u ? u : o.createElement(Element, {
      ...(0, a.filterDOMProps)(e),
      ...l,
      style: s,
      className: null != c ? c : "react-aria-Separator",
      ref: t,
      slot: e.slot
    })
  }),
  eu = (0, o.createContext)(null),
  ed = (0, o.createContext)(null);

function ep(e) {
  let {
    props: t,
    listBoxRef: n
  } = e, {
    portal: r,
    collection: a
  } = D(t);
  t = {
    ...t,
    collection: a,
    children: null,
    items: null
  };
  let i = (0, u.useListState)(t);
  return o.createElement(o.Fragment, null, r, o.createElement(ef, {
    state: i,
    props: t,
    listBoxRef: n
  }))
}

function ef(e) {
  let t, n, i, {
      state: s,
      props: c,
      listBoxRef: l
    } = e,
    {
      dragAndDropHooks: u
    } = c,
    {
      collection: d,
      selectionManager: p
    } = s,
    f = !!(null == u ? void 0 : u.useDraggableCollectionState),
    h = !!(null == u ? void 0 : u.useDroppableCollectionState),
    {
      listBoxProps: m
    } = (0, r.useListBox)({
      ...c,
      shouldSelectOnPressUp: f || c.shouldSelectOnPressUp
    }, s, l),
    v = x({
      items: d,
      children: e => {
        switch (e.type) {
          case "section":
            return o.createElement(eh, {
              section: e
            });
          case "separator":
            return o.createElement(el, e.props);
          case "item":
            return o.createElement(em, {
              item: e
            });
          default:
            throw Error("Unsupported node type in Menu: " + e.type)
        }
      }
    }),
    g = (0, o.useRef)(f),
    y = (0, o.useRef)(h);
  g.current !== f && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), y.current !== h && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
  let b = !1,
    S = null,
    w = (0, o.useRef)(null);
  if (f && u) {
    t = u.useDraggableCollectionState({
      collection: d,
      selectionManager: p,
      preview: u.renderDragPreview ? w : void 0
    }), u.useDraggableCollection({}, t, l);
    let e = u.DragPreview;
    S = u.renderDragPreview ? o.createElement(e, {
      ref: w
    }, u.renderDragPreview) : null
  }
  if (h && u) {
    n = u.useDroppableCollectionState({
      collection: d,
      selectionManager: p
    });
    let e = c.keyboardDelegate || new r.ListKeyboardDelegate(d, "selection" === p.disabledBehavior ? new Set : p.disabledKeys, l),
      t = u.dropTargetDelegate || new u.ListDropTargetDelegate(d, l);
    i = u.useDroppableCollection({
      keyboardDelegate: e,
      dropTargetDelegate: t
    }, n, l), b = n.isDropTarget({
      type: "root"
    })
  }
  let {
    focusProps: D,
    isFocused: C,
    isFocusVisible: k
  } = (0, r.useFocusRing)(), P = I({
    className: c.className,
    style: c.style,
    defaultClassName: "react-aria-ListBox",
    values: {
      isDropTarget: b,
      isEmpty: 0 === s.collection.size,
      isFocused: C,
      isFocusVisible: k
    }
  }), E = null;
  return 0 === s.collection.size && c.renderEmptyState && (E = o.createElement("div", {
    role: "option",
    style: {
      display: "contents"
    }
  }, c.renderEmptyState())), o.createElement(r.FocusScope, null, o.createElement("div", {
    ...(0, a.filterDOMProps)(c),
    ...(0, r.mergeProps)(m, D, null == i ? void 0 : i.collectionProps),
    ...P,
    ref: l,
    slot: c.slot,
    "data-drop-target": b || void 0,
    "data-empty": 0 === s.collection.size || void 0,
    "data-focused": C || void 0,
    "data-focus-visible": k || void 0
  }, o.createElement(O, {
    values: [
      [ed, {
        state: s,
        shouldFocusOnHover: c.shouldFocusOnHover,
        dragAndDropHooks: u,
        dragState: t,
        dropState: n
      }],
      [ec, {
        elementType: "li"
      }],
      [ea, {
        render: ev
      }]
    ]
  }, v), E, S))
}

function eh(e) {
  var t, n, i;
  let {
    section: s,
    className: c,
    style: l,
    ...u
  } = e, {
    state: d
  } = (0, o.useContext)(ed), [p, f] = L(), {
    headingProps: h,
    groupProps: m
  } = (0, r.useListBoxSection)({
    heading: f,
    "aria-label": null !== (i = s["aria-label"]) && void 0 !== i ? i : void 0
  }), v = x({
    items: d.collection.getChildren(s.key),
    children: e => {
      switch (e.type) {
        case "header": {
          let {
            ref: t,
            ...n
          } = e.props;
          return o.createElement(es, {
            ...h,
            ...n,
            ref: (0, a.mergeRefs)(p, t)
          }, e.rendered)
        }
        case "item":
          return o.createElement(em, {
            item: e
          });
        default:
          throw Error("Unsupported element type in Section: " + e.type)
      }
    }
  });
  return o.createElement("section", {
    ...(0, a.filterDOMProps)(u),
    ...m,
    className: c || (null === (t = s.props) || void 0 === t ? void 0 : t.className) || "react-aria-Section",
    style: l || (null === (n = s.props) || void 0 === n ? void 0 : n.style),
    ref: s.props.ref
  }, v)
}

function em(e) {
  let {
    item: t
  } = e, n = (0, a.useObjectRef)(t.props.ref), {
    state: i,
    shouldFocusOnHover: s,
    dragAndDropHooks: c,
    dragState: l,
    dropState: u
  } = (0, o.useContext)(ed), {
    optionProps: d,
    labelProps: p,
    descriptionProps: f,
    ...h
  } = (0, r.useOption)({
    key: t.key
  }, i, n), {
    hoverProps: m,
    isHovered: v
  } = (0, r.useHover)({
    isDisabled: s || !h.allowsSelection && !h.hasAction
  });
  s && (m = {}, v = h.isFocused);
  let g = null;
  l && c && (g = c.useDraggableItem({
    key: t.key
  }, l));
  let y = null;
  u && c && (y = c.useDroppableItem({
    target: {
      type: "item",
      key: t.key,
      dropPosition: "on"
    }
  }, u, n));
  let b = t.props,
    x = l && l.isDragging(t.key),
    S = I({
      ...b,
      id: void 0,
      children: t.rendered,
      defaultClassName: "react-aria-Item",
      values: {
        ...h,
        isHovered: v,
        selectionMode: i.selectionManager.selectionMode,
        selectionBehavior: i.selectionManager.selectionBehavior,
        allowsDragging: !!l,
        isDragging: x,
        isDropTarget: null == y ? void 0 : y.isDropTarget
      }
    }),
    w = (null == c ? void 0 : c.renderDropIndicator) || (e => o.createElement(eo, {
      target: e
    }));
  return (0, o.useEffect)(() => {
    !t.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
  }, [t.textValue]), o.createElement(o.Fragment, null, (null == c ? void 0 : c.useDropIndicator) && w({
    type: "item",
    key: t.key,
    dropPosition: "before"
  }), o.createElement("div", {
    ...(0, r.mergeProps)((0, a.filterDOMProps)(b), d, m, null == g ? void 0 : g.dragProps, null == y ? void 0 : y.dropProps),
    ...S,
    ref: n,
    "data-hovered": v || void 0,
    "data-focused": h.isFocused || void 0,
    "data-focus-visible": h.isFocusVisible || void 0,
    "data-pressed": h.isPressed || void 0,
    "data-dragging": x || void 0,
    "data-drop-target": (null == y ? void 0 : y.isDropTarget) || void 0
  }, o.createElement(O, {
    values: [
      [G, {
        slots: {
          label: p,
          description: f
        }
      }]
    ]
  }, S.children)), (null == c ? void 0 : c.useDropIndicator) && null == i.collection.getKeyAfter(t.key) && w({
    type: "item",
    key: t.key,
    dropPosition: "after"
  }))
}

function ev(e, t) {
  t = (0, a.useObjectRef)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, o.useContext)(ed), {
    dropIndicatorProps: i,
    isHidden: s,
    isDropTarget: c
  } = n.useDropIndicator(e, r, t);
  return s ? null : o.createElement(eg, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: c,
    ref: t
  })
}
let eg = (0, o.forwardRef)(function(e, t) {
    let {
      dropIndicatorProps: n,
      isDropTarget: r,
      ...a
    } = e, i = I({
      ...a,
      defaultClassName: "react-aria-DropIndicator",
      values: {
        isDropTarget: r
      }
    });
    return o.createElement("div", {
      ...n,
      ...i,
      role: "option",
      ref: t,
      "data-drop-target": r || void 0
    })
  }),
  ey = (0, o.createContext)(null),
  eb = (0, o.createContext)(null);

function ex(e) {
  var t;
  let {
    state: n,
    isExiting: i,
    ...s
  } = e, {
    popoverProps: c,
    underlayProps: l,
    arrowProps: u,
    placement: d
  } = (0, r.usePopover)({
    ...s,
    offset: null !== (t = s.offset) && void 0 !== t ? t : 8
  }, n), p = s.popoverRef, f = N(p, !!d), h = I({
    ...s,
    defaultClassName: "react-aria-Popover",
    values: {
      placement: d,
      isEntering: f,
      isExiting: i
    }
  }), m = {
    ...h.style,
    ...c.style
  };
  return o.createElement(r.Overlay, null, !s.isNonModal && o.createElement("div", {
    ...l,
    style: {
      position: "fixed",
      inset: 0
    }
  }), o.createElement("div", {
    ...(0, a.mergeProps)((0, a.filterDOMProps)(s), c),
    ...h,
    ref: p,
    slot: s.slot,
    style: m,
    "data-placement": d,
    "data-entering": f || void 0,
    "data-exiting": i || void 0
  }, !s.isNonModal && o.createElement(r.DismissButton, {
    onDismiss: n.close
  }), o.createElement(ey.Provider, {
    value: {
      arrowProps: u,
      placement: d
    }
  }, h.children), o.createElement(r.DismissButton, {
    onDismiss: n.close
  })))
}
let eS = (0, o.createContext)(null),
  ew = (0, o.createContext)(null),
  eD = (0, o.createContext)(null),
  eC = (0, o.createContext)(null),
  ek = (0, o.createContext)(null),
  eP = (0, o.createContext)(null),
  eE = (0, o.createContext)(null),
  eT = (0, o.forwardRef)((e, t) => {
    var n;
    let r = (0, o.useContext)(eP),
      i = null !== (n = null == r ? void 0 : r.state) && void 0 !== n ? n : (0, u.useOverlayTriggerState)(e),
      s = (0, a.useObjectRef)(t),
      c = (0, o.useRef)(null),
      l = j(s, i.isOpen),
      d = j(c, i.isOpen),
      p = l || d;
    return i.isOpen || p ? o.createElement(eM, {
      ...e,
      state: i,
      isExiting: p,
      overlayRef: s,
      modalRef: c
    }) : null
  });

function eM(e) {
  let t = e.modalRef,
    {
      state: n
    } = e,
    {
      modalProps: i,
      underlayProps: s
    } = (0, r.useModalOverlay)(e, n, t),
    c = N(e.overlayRef),
    l = I({
      ...e,
      defaultClassName: "react-aria-ModalOverlay",
      values: {
        isEntering: c,
        isExiting: e.isExiting
      }
    }),
    u = (0, a.useViewportSize)(),
    d = {
      ...l.style,
      "--visual-viewport-height": u.height + "px"
    };
  return o.createElement(r.Overlay, null, o.createElement("div", {
    ...(0, a.mergeProps)((0, a.filterDOMProps)(e), s),
    ...l,
    style: d,
    ref: e.overlayRef,
    "data-entering": c || void 0,
    "data-exiting": e.isExiting || void 0
  }, o.createElement(eE.Provider, {
    value: {
      modalProps: i,
      modalRef: t,
      state: n,
      isExiting: e.isExiting,
      isDismissable: e.isDismissable
    }
  }, l.children)))
}

function eR(e) {
  let {
    modalProps: t,
    modalRef: n,
    isExiting: i,
    isDismissable: s,
    state: c
  } = (0, o.useContext)(eE), l = (0, o.useMemo)(() => (0, a.mergeRefs)(e.modalRef, n), [e.modalRef, n]), u = (0, a.useObjectRef)(l), d = N(u), p = I({
    ...e,
    defaultClassName: "react-aria-Modal",
    values: {
      isEntering: d,
      isExiting: i
    }
  });
  return o.createElement("div", {
    ...(0, a.mergeProps)((0, a.filterDOMProps)(e), t),
    ...p,
    ref: u,
    "data-entering": d || void 0,
    "data-exiting": i || void 0
  }, s && o.createElement(r.DismissButton, {
    onDismiss: c.close
  }), p.children)
}
let eO = (0, o.createContext)(null),
  eI = (0, o.createContext)({}),
  eA = (0, o.createContext)(null),
  eL = (0, o.createContext)(null),
  eN = (0, o.createContext)(null),
  ej = (0, o.createContext)(null);

function eF(e) {
  let {
    item: t
  } = e, {
    state: n,
    dragAndDropHooks: i,
    dragState: s,
    dropState: c
  } = (0, o.useContext)(ej), l = (0, a.useObjectRef)(t.props.ref), {
    rowProps: u,
    gridCellProps: d,
    descriptionProps: p,
    ...f
  } = (0, r.useGridListItem)({
    node: t,
    shouldSelectOnPressUp: !!s
  }, n, l), {
    hoverProps: h,
    isHovered: m
  } = (0, r.useHover)({
    isDisabled: !f.allowsSelection && !f.hasAction
  }), {
    isFocusVisible: v,
    focusProps: g
  } = (0, r.useFocusRing)(), {
    checkboxProps: y
  } = (0, r.useGridListSelectionCheckbox)({
    key: t.key
  }, n), b = null;
  s && i && (b = i.useDraggableItem({
    key: t.key,
    hasDragButton: !0
  }, s));
  let x = null,
    S = (0, o.useRef)(null),
    {
      visuallyHiddenProps: w
    } = (0, r.useVisuallyHidden)();
  c && i && (x = i.useDropIndicator({
    target: {
      type: "item",
      key: t.key,
      dropPosition: "on"
    }
  }, c, S));
  let D = t.props,
    C = s && s.isDragging(t.key),
    k = I({
      ...D,
      id: void 0,
      children: t.rendered,
      defaultClassName: "react-aria-Item",
      values: {
        ...f,
        isHovered: m,
        isFocusVisible: v,
        selectionMode: n.selectionManager.selectionMode,
        selectionBehavior: n.selectionManager.selectionBehavior,
        allowsDragging: !!s,
        isDragging: C,
        isDropTarget: null == x ? void 0 : x.isDropTarget
      }
    }),
    P = (null == i ? void 0 : i.renderDropIndicator) || (e => o.createElement(eo, {
      target: e
    })),
    E = (0, o.useRef)(null);
  return (0, o.useEffect)(() => {
    s && !E.current && console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
  }, []), (0, o.useEffect)(() => {
    !t.textValue && console.warn("A `textValue` prop is required for <Item> elements with non-plain text children in order to support accessibility features such as type to select.")
  }, [t.textValue]), o.createElement(o.Fragment, null, (null == i ? void 0 : i.useDropIndicator) && P({
    type: "item",
    key: t.key,
    dropPosition: "before"
  }), x && !x.isHidden && o.createElement("div", {
    role: "row",
    style: {
      position: "absolute"
    }
  }, o.createElement("div", {
    role: "gridcell"
  }, o.createElement("div", {
    role: "button",
    ...w,
    ...null == x ? void 0 : x.dropIndicatorProps,
    ref: S
  }))), o.createElement("div", {
    ...(0, r.mergeProps)((0, a.filterDOMProps)(D), u, g, h, null == b ? void 0 : b.dragProps),
    ...k,
    ref: l,
    "data-hovered": m || void 0,
    "data-focused": f.isFocused || void 0,
    "data-focus-visible": v || void 0,
    "data-pressed": f.isPressed || void 0,
    "data-dragging": C || void 0,
    "data-drop-target": (null == x ? void 0 : x.isDropTarget) || void 0
  }, o.createElement("div", d, o.createElement(O, {
    values: [
      [en, y],
      [H, {
        slots: {
          [R]: {},
          drag: {
            ...null == b ? void 0 : b.dragButtonProps,
            ref: E,
            style: {
              pointerEvents: "none"
            }
          }
        }
      }],
      [G, {
        slots: {
          description: p
        }
      }]
    ]
  }, k.children))), (null == i ? void 0 : i.useDropIndicator) && null == n.collection.getKeyAfter(t.key) && P({
    type: "item",
    key: t.key,
    dropPosition: "after"
  }))
}

function eK(e, t) {
  t = (0, a.useObjectRef)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, o.useContext)(ej), i = (0, o.useRef)(null), {
    dropIndicatorProps: s,
    isHidden: c,
    isDropTarget: l
  } = n.useDropIndicator(e, r, i);
  return c ? null : o.createElement(e_, {
    ...e,
    dropIndicatorProps: s,
    isDropTarget: l,
    buttonRef: i,
    ref: t
  })
}
let e_ = (0, o.forwardRef)(function(e, t) {
  let {
    dropIndicatorProps: n,
    isDropTarget: a,
    buttonRef: i,
    ...s
  } = e, {
    visuallyHiddenProps: c
  } = (0, r.useVisuallyHidden)(), l = I({
    ...s,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: a
    }
  });
  return o.createElement("div", {
    ...l,
    role: "row",
    ref: t,
    "data-drop-target": a || void 0
  }, o.createElement("div", {
    role: "gridcell"
  }, o.createElement("div", {
    ...c,
    role: "button",
    ...n,
    ref: i
  })))
});

function eV() {
  let {
    dragAndDropHooks: e,
    dropState: t
  } = (0, o.useContext)(ej), n = (0, o.useRef)(null), {
    dropIndicatorProps: a
  } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, t, n), i = t.isDropTarget({
    type: "root"
  }), {
    visuallyHiddenProps: s
  } = (0, r.useVisuallyHidden)();
  return !i && a["aria-hidden"] ? null : o.createElement("div", {
    role: "row",
    "aria-hidden": a["aria-hidden"],
    style: {
      position: "absolute"
    }
  }, o.createElement("div", {
    role: "gridcell"
  }, o.createElement("div", {
    role: "button",
    ...s,
    ...a,
    ref: n
  })))
}
let ez = (0, o.createContext)({}),
  eB = (0, o.createContext)(null),
  eU = (0, o.createContext)(null);

function eH(e) {
  var t;
  let {
    props: n,
    collection: i,
    menuRef: s
  } = e, c = (0, u.useTreeState)({
    ...n,
    collection: i,
    children: void 0
  }), {
    menuProps: l
  } = (0, r.useMenu)(n, c, s), d = x({
    items: c.collection,
    children: e => {
      switch (e.type) {
        case "section":
          return o.createElement(eG, {
            section: e
          });
        case "separator":
          return o.createElement(el, e.props);
        case "item":
          return o.createElement(eW, {
            item: e
          });
        default:
          throw Error("Unsupported node type in Menu: " + e.type)
      }
    }
  });
  return o.createElement("div", {
    ...(0, a.filterDOMProps)(n),
    ...l,
    ref: s,
    slot: n.slot,
    style: n.style,
    className: null !== (t = n.className) && void 0 !== t ? t : "react-aria-Menu"
  }, o.createElement(O, {
    values: [
      [eU, c],
      [ec, {
        elementType: "div"
      }]
    ]
  }, d))
}

function eG(e) {
  var t, n, i;
  let {
    section: s,
    className: c,
    style: l,
    ...u
  } = e, d = (0, o.useContext)(eU), [p, f] = L(), {
    headingProps: h,
    groupProps: m
  } = (0, r.useMenuSection)({
    heading: f,
    "aria-label": null !== (i = s["aria-label"]) && void 0 !== i ? i : void 0
  }), v = x({
    items: d.collection.getChildren(s.key),
    children: e => {
      switch (e.type) {
        case "header": {
          let {
            ref: t,
            ...n
          } = e.props;
          return o.createElement(es, {
            ...h,
            ...n,
            ref: (0, a.mergeRefs)(p, t)
          }, e.rendered)
        }
        case "item":
          return o.createElement(eW, {
            item: e
          });
        default:
          throw Error("Unsupported element type in Section: " + e.type)
      }
    }
  });
  return o.createElement("section", {
    ...(0, a.filterDOMProps)(u),
    ...m,
    className: c || (null === (t = s.props) || void 0 === t ? void 0 : t.className) || "react-aria-Section",
    style: l || (null === (n = s.props) || void 0 === n ? void 0 : n.style),
    ref: s.props.ref
  }, v)
}

function eW(e) {
  let {
    item: t
  } = e, n = (0, o.useContext)(eU), i = (0, a.useObjectRef)(t.props.ref), {
    menuItemProps: s,
    labelProps: c,
    descriptionProps: l,
    keyboardShortcutProps: u,
    ...d
  } = (0, r.useMenuItem)({
    key: t.key
  }, n, i), p = t.props, {
    isFocusVisible: f,
    focusProps: h
  } = (0, r.useFocusRing)(), m = I({
    ...p,
    id: void 0,
    children: t.rendered,
    defaultClassName: "react-aria-Item",
    values: {
      ...d,
      isHovered: d.isFocused,
      isFocusVisible: f,
      selectionMode: n.selectionManager.selectionMode,
      selectionBehavior: n.selectionManager.selectionBehavior
    }
  }), v = (0, a.filterDOMProps)(p);
  return delete v.id, o.createElement("div", {
    ...(0, r.mergeProps)(v, s, h),
    ...m,
    ref: i,
    "data-hovered": d.isFocused || void 0,
    "data-focused": d.isFocused || void 0,
    "data-focus-visible": f || void 0,
    "data-pressed": d.isPressed || void 0
  }, o.createElement(O, {
    values: [
      [G, {
        slots: {
          label: c,
          description: l
        }
      }],
      [ez, u]
    ]
  }, m.children))
}
let eq = (0, o.createContext)(null),
  eZ = (0, o.createContext)(null),
  eY = (0, o.createContext)(null),
  eX = (0, o.createContext)(null),
  eJ = (0, o.createContext)(null),
  e$ = (0, o.createContext)(null),
  eQ = (0, o.createContext)(null),
  e0 = (0, o.createContext)(null),
  e1 = (0, o.createContext)(null),
  e2 = (0, o.createContext)(null),
  e3 = (0, o.createContext)(null),
  e4 = Symbol.iterator;
class e8 extends y {
  addNode(e) {
    super.addNode(e), this.columnsDirty || (this.columnsDirty = "column" === e.type), "tableheader" === e.type && (this.head = e), "tablebody" === e.type && (this.body = e)
  }
  commit(e, t) {
    this.updateColumns(), super.commit(e, t)
  }
  updateColumns() {
    if (!this.columnsDirty) return;
    this.rowHeaderColumnKeys = new Set, this.columns = [];
    let e = new Map,
      t = n => {
        if ("column" === n.type) e.set(n.key, n), !n.hasChildNodes && (n.index = this.columns.length, this.columns.push(n), n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key));
        for (let e of this.getChildren(n.key)) t(e)
      };
    for (let e of this.getChildren(this.head.key)) t(e);
    if (this.headerRows = (0, d.buildHeaderRows)(e, this.columns), this.columnsDirty = !1, 0 === this.rowHeaderColumnKeys.size && this.columns.length > 0) throw Error("A table must have at least one Column with the isRowHeader prop set to true")
  }
  get columnCount() {
    return this.columns.length
  }
  get rows() {
    return [...this.getChildren(this.body.key)]
  }*[e4]() {
    yield* this.getChildren(this.body.key)
  }
  get size() {
    return [...this.getChildren(this.body.key)].length
  }
  getFirstKey() {
    var e;
    return null === (e = [...this.getChildren(this.body.key)][0]) || void 0 === e ? void 0 : e.key
  }
  getLastKey() {
    var e;
    let t = [...this.getChildren(this.body.key)];
    return null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.key
  }
  getKeyAfter(e) {
    var t;
    let n = this.getItem(e);
    return (null == n ? void 0 : n.type) === "column" ? null !== (t = n.nextKey) && void 0 !== t ? t : null : super.getKeyAfter(e)
  }
  getKeyBefore(e) {
    var t, n;
    let r = this.getItem(e);
    if ((null == r ? void 0 : r.type) === "column") return null !== (n = r.prevKey) && void 0 !== n ? n : null;
    let a = super.getKeyBefore(e);
    return null != a && (null === (t = this.getItem(a)) || void 0 === t ? void 0 : t.type) === "tablebody" ? null : a
  }
  getChildren(e) {
    if (!this.getItem(e)) {
      for (let t of this.headerRows)
        if (t.key === e) return t.childNodes
    }
    return super.getChildren(e)
  }
  clone() {
    let e = super.clone();
    return e.headerRows = this.headerRows, e.columns = this.columns, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e.body = this.body, e
  }
  getTextValue(e) {
    let t = this.getItem(e);
    if (!t) return "";
    if (t.textValue) return t.textValue;
    let n = this.rowHeaderColumnKeys,
      r = [];
    for (let t of this.getChildren(e)) {
      let e = this.columns[t.index];
      if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break
    }
    return r.join(" ")
  }
  constructor(...e) {
    super(...e), (0, i.default)(this, "headerRows", []), (0, i.default)(this, "columns", []), (0, i.default)(this, "rowHeaderColumnKeys", new Set), (0, i.default)(this, "head", new p("tableheader", -1)), (0, i.default)(this, "body", new p("tablebody", -2)), (0, i.default)(this, "columnsDirty", !0)
  }
}
let e6 = (0, o.createContext)(null),
  e5 = (0, o.createContext)(null),
  e7 = (0, o.forwardRef)(function(e, t) {
    let n, i, s;
    [e, t] = A(e, t, e6);
    let {
      portal: c,
      collection: l
    } = D(e, (0, o.useMemo)(() => new e8, [])), d = (0, u.useTableState)({
      ...e,
      collection: l,
      children: void 0
    }), {
      gridProps: p
    } = (0, r.useTable)(e, d, t), {
      dragAndDropHooks: f
    } = e, h = d.selectionManager, m = !!(null == f ? void 0 : f.useDraggableCollectionState), v = !!(null == f ? void 0 : f.useDroppableCollectionState), g = (0, o.useRef)(m), y = (0, o.useRef)(v);
    g.current !== m && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), y.current !== v && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.");
    let b = !1,
      x = null,
      S = (0, o.useRef)(null);
    if (m && f) {
      n = f.useDraggableCollectionState({
        collection: l,
        selectionManager: h,
        preview: f.renderDragPreview ? S : void 0
      }), f.useDraggableCollection({}, n, t);
      let e = f.DragPreview;
      x = f.renderDragPreview ? o.createElement(e, {
        ref: S
      }, f.renderDragPreview) : null
    }
    if (v && f) {
      i = f.useDroppableCollectionState({
        collection: l,
        selectionManager: h
      });
      let e = new r.ListKeyboardDelegate(l, "selection" === h.disabledBehavior ? new Set : h.disabledKeys, t),
        n = f.dropTargetDelegate || new f.ListDropTargetDelegate(l, t);
      s = f.useDroppableCollection({
        keyboardDelegate: e,
        dropTargetDelegate: n
      }, i, t), b = i.isDropTarget({
        type: "root"
      })
    }
    let {
      focusProps: w,
      isFocused: C,
      isFocusVisible: k
    } = (0, r.useFocusRing)(), P = I({
      className: e.className,
      style: e.style,
      defaultClassName: "react-aria-Table",
      values: {
        isDropTarget: b,
        isFocused: C,
        isFocusVisible: k
      }
    }), {
      selectionBehavior: E,
      selectionMode: T,
      disallowEmptySelection: M
    } = d.selectionManager, R = (0, o.useMemo)(() => ({
      selectionBehavior: "none" === T ? null : E,
      selectionMode: T,
      disallowEmptySelection: M,
      allowsDragging: m
    }), [E, T, M, m]);
    return o.createElement(o.Fragment, null, o.createElement(O, {
      values: [
        [e5, {
          state: d,
          dragAndDropHooks: f,
          dragState: n,
          dropState: i
        }],
        [ea, {
          render: td
        }]
      ]
    }, o.createElement(r.FocusScope, null, o.createElement("table", {
      ...(0, a.filterDOMProps)(e),
      ...P,
      ...(0, r.mergeProps)(p, w, null == s ? void 0 : s.collectionProps),
      ref: t,
      slot: e.slot,
      "data-drop-target": b || void 0,
      "data-focused": C || void 0,
      "data-focus-visible": k || void 0
    }, o.createElement(to, {
      collection: l
    }), o.createElement(ti, {
      collection: l,
      isDroppable: v
    }))), x), o.createElement(e9.Provider, {
      value: R
    }, c))
  }),
  e9 = (0, o.createContext)(null),
  te = (0, o.forwardRef)(function(e, t) {
    let n = S({
        children: e.children,
        items: e.columns
      }),
      r = "function" == typeof e.children ? e.children : null;
    return o.createElement(T.Provider, {
      value: r
    }, o.createElement("tableheader", {
      ref: k(e, t)
    }, n))
  }),
  tt = (0, o.forwardRef)(function(e, t) {
    var n;
    let r = (0, o.useContext)(T),
      a = "function" == typeof r ? r : e.children,
      i = S({
        children: e.title || e.childColumns ? a : null,
        items: e.childColumns
      });
    return o.createElement("column", {
      ref: k(e, t, null !== (n = e.title) && void 0 !== n ? n : e.children)
    }, i)
  }),
  tn = (0, o.forwardRef)(function(e, t) {
    let n = S(e);
    return o.createElement("tablebody", {
      ref: k(e, t)
    }, n)
  }),
  tr = (0, o.forwardRef)(function(e, t) {
    let n = S({
        children: e.children,
        items: e.columns,
        idScope: e.id
      }),
      r = (0, o.useMemo)(() => ({
        idScope: e.id
      }), [e.id]);
    return o.createElement("item", {
      ref: k(e, t)
    }, o.createElement(E.Provider, {
      value: r
    }, n))
  }),
  ta = (0, o.forwardRef)(function(e, t) {
    return o.createElement("cell", {
      ref: k(e, t, e.children)
    })
  });

function to(e) {
  var t;
  let {
    collection: n
  } = e, i = x({
    items: n.headerRows,
    children: (0, o.useCallback)(e => {
      if ("headerrow" === e.type) return o.createElement(ts, {
        item: e
      });
      throw Error("Unsupported node type in TableHeader: " + e.type)
    }, [])
  }), {
    rowGroupProps: s
  } = (0, r.useTableRowGroup)();
  return o.createElement("thead", {
    ...(0, a.filterDOMProps)(n.head.props),
    ...s,
    ref: n.head.props.ref,
    className: null !== (t = n.head.props.className) && void 0 !== t ? t : "react-aria-TableHeader",
    style: n.head.props.style
  }, i)
}

function ti(e) {
  let t, {
      collection: n,
      isDroppable: i
    } = e,
    s = x({
      items: n.rows,
      children: (0, o.useCallback)(e => {
        if ("item" === e.type) return o.createElement(tl, {
          item: e
        });
        throw Error("Unsupported node type in TableBody: " + e.type)
      }, [])
    }),
    c = n.body.props,
    l = I({
      ...c,
      id: void 0,
      children: void 0,
      defaultClassName: "react-aria-TableBody",
      values: {
        isEmpty: 0 === n.size
      }
    });
  0 === n.size && c.renderEmptyState && (t = o.createElement("tr", {
    role: "row"
  }, o.createElement("td", {
    role: "gridcell",
    colSpan: n.columnCount
  }, c.renderEmptyState())));
  let {
    rowGroupProps: u
  } = (0, r.useTableRowGroup)();
  return o.createElement("tbody", {
    ...(0, r.mergeProps)((0, a.filterDOMProps)(c), u),
    ...l,
    ref: n.body.props.ref,
    "data-empty": 0 === n.size || void 0
  }, i && o.createElement(tf, null), s, t)
}

function ts(e) {
  let {
    item: t
  } = e, n = (0, o.useRef)(null), {
    state: a
  } = (0, o.useContext)(e5), {
    rowProps: i
  } = (0, r.useTableHeaderRow)({
    node: t
  }, a, n), {
    checkboxProps: s
  } = (0, r.useTableSelectAllCheckbox)(a), c = x({
    items: a.collection.getChildren(t.key),
    children: e => {
      if ("column" === e.type) return o.createElement(tc, {
        column: e
      });
      throw Error("Unsupported node type in Row: " + e.type)
    }
  });
  return o.createElement("tr", {
    ...i,
    ref: n
  }, o.createElement(O, {
    values: [
      [en, {
        slots: {
          selection: s
        }
      }]
    ]
  }, c))
}

function tc(e) {
  var t;
  let {
    column: n
  } = e, i = (0, a.useObjectRef)(n.props.ref), {
    state: s
  } = (0, o.useContext)(e5), {
    columnHeaderProps: c
  } = (0, r.useTableColumnHeader)({
    node: n
  }, s, i), {
    isFocused: l,
    isFocusVisible: u,
    focusProps: d
  } = (0, r.useFocusRing)(), p = n.props, f = I({
    ...p,
    id: void 0,
    children: n.rendered,
    defaultClassName: "react-aria-Column",
    values: {
      isFocused: l,
      isFocusVisible: u,
      allowsSorting: n.props.allowsSorting,
      sortDirection: (null === (t = s.sortDescriptor) || void 0 === t ? void 0 : t.column) === n.key ? s.sortDescriptor.direction : void 0
    }
  });
  return o.createElement("th", {
    ...(0, r.mergeProps)((0, a.filterDOMProps)(p), c, d),
    ...f,
    colSpan: n.colspan,
    ref: i,
    "data-focused": l || void 0,
    "data-focus-visible": u || void 0
  }, f.children)
}

function tl(e) {
  let t, n, {
      item: i
    } = e,
    s = (0, a.useObjectRef)(i.props.ref),
    {
      state: c,
      dragAndDropHooks: l,
      dragState: u,
      dropState: d
    } = (0, o.useContext)(e5),
    {
      rowProps: p,
      ...f
    } = (0, r.useTableRow)({
      node: i,
      shouldSelectOnPressUp: !!u
    }, c, s),
    {
      isFocused: h,
      isFocusVisible: m,
      focusProps: v
    } = (0, r.useFocusRing)(),
    {
      hoverProps: g,
      isHovered: y
    } = (0, r.useHover)({
      isDisabled: !f.allowsSelection && !f.hasAction
    }),
    {
      checkboxProps: b
    } = (0, r.useTableSelectionCheckbox)({
      key: i.key
    }, c);
  u && l && (t = l.useDraggableItem({
    key: i.key,
    hasDragButton: !0
  }, u));
  let S = (0, o.useRef)(null),
    {
      visuallyHiddenProps: w
    } = (0, r.useVisuallyHidden)();
  d && l && (n = l.useDropIndicator({
    target: {
      type: "item",
      key: i.key,
      dropPosition: "on"
    }
  }, d, S));
  let D = (null == l ? void 0 : l.renderDropIndicator) || (e => o.createElement(eo, {
      target: e
    })),
    C = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    u && !C.current && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')
  }, []);
  let k = i.props,
    P = u && u.isDragging(i.key),
    E = I({
      ...k,
      id: void 0,
      defaultClassName: "react-aria-Row",
      values: {
        ...f,
        isHovered: y,
        isFocused: h,
        isFocusVisible: m,
        selectionMode: c.selectionManager.selectionMode,
        selectionBehavior: c.selectionManager.selectionBehavior,
        isDragging: P,
        isDropTarget: null == n ? void 0 : n.isDropTarget
      }
    }),
    T = x({
      items: c.collection.getChildren(i.key),
      children: e => {
        if ("cell" === e.type) return o.createElement(tu, {
          cell: e
        });
        throw Error("Unsupported node type in Row: " + e.type)
      }
    });
  return o.createElement(o.Fragment, null, (null == l ? void 0 : l.useDropIndicator) && D({
    type: "item",
    key: i.key,
    dropPosition: "before"
  }), n && !n.isHidden && o.createElement("tr", {
    role: "row",
    style: {
      height: 0
    }
  }, o.createElement("td", {
    role: "gridcell",
    colSpan: c.collection.columnCount,
    style: {
      padding: 0
    }
  }, o.createElement("div", {
    role: "button",
    ...w,
    ...n.dropIndicatorProps,
    ref: S
  }))), o.createElement("tr", {
    ...(0, r.mergeProps)((0, a.filterDOMProps)(k), p, v, g, null == t ? void 0 : t.dragProps),
    ...E,
    ref: s,
    "data-hovered": y || void 0,
    "data-focused": f.isFocused || void 0,
    "data-focus-visible": m || void 0,
    "data-pressed": f.isPressed || void 0,
    "data-dragging": P || void 0,
    "data-drop-target": (null == n ? void 0 : n.isDropTarget) || void 0
  }, o.createElement(O, {
    values: [
      [en, {
        slots: {
          selection: b
        }
      }],
      [H, {
        slots: {
          [R]: {},
          drag: {
            ...null == t ? void 0 : t.dragButtonProps,
            ref: C,
            style: {
              pointerEvents: "none"
            }
          }
        }
      }]
    ]
  }, T)), (null == l ? void 0 : l.useDropIndicator) && null == c.collection.getKeyAfter(i.key) && D({
    type: "item",
    key: i.key,
    dropPosition: "after"
  }))
}

function tu(e) {
  let {
    cell: t
  } = e, n = (0, a.useObjectRef)(t.props.ref), {
    state: i,
    dragState: s
  } = (0, o.useContext)(e5);
  t.column = i.collection.columns[t.index];
  let {
    gridCellProps: c,
    isPressed: l
  } = (0, r.useTableCell)({
    node: t,
    shouldSelectOnPressUp: !!s
  }, i, n), {
    isFocused: u,
    isFocusVisible: d,
    focusProps: p
  } = (0, r.useFocusRing)(), f = t.props, h = I({
    ...f,
    id: void 0,
    defaultClassName: "react-aria-Cell",
    values: {
      isFocused: u,
      isFocusVisible: d,
      isPressed: l
    }
  });
  return o.createElement("td", {
    ...(0, r.mergeProps)((0, a.filterDOMProps)(f), c, p),
    ...h,
    ref: n,
    "data-focused": u || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": l || void 0
  }, h.children)
}

function td(e, t) {
  t = (0, a.useObjectRef)(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = (0, o.useContext)(e5), i = (0, o.useRef)(null), {
    dropIndicatorProps: s,
    isHidden: c,
    isDropTarget: l
  } = n.useDropIndicator(e, r, i);
  return c ? null : o.createElement(tp, {
    ...e,
    dropIndicatorProps: s,
    isDropTarget: l,
    buttonRef: i,
    ref: t
  })
}
let tp = (0, o.forwardRef)(function(e, t) {
  let {
    dropIndicatorProps: n,
    isDropTarget: i,
    buttonRef: s,
    ...c
  } = e, {
    state: l
  } = (0, o.useContext)(e5), {
    visuallyHiddenProps: u
  } = (0, r.useVisuallyHidden)(), d = I({
    ...c,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: i
    }
  });
  return o.createElement("tr", {
    ...(0, a.filterDOMProps)(e),
    ...d,
    role: "row",
    ref: t,
    "data-drop-target": i || void 0
  }, o.createElement("td", {
    role: "gridcell",
    colSpan: l.collection.columnCount,
    style: {
      padding: 0
    }
  }, o.createElement("div", {
    ...u,
    role: "button",
    ...n,
    ref: s
  })))
});

function tf() {
  let {
    state: e,
    dragAndDropHooks: t,
    dropState: n
  } = (0, o.useContext)(e5), a = (0, o.useRef)(null), {
    dropIndicatorProps: i
  } = t.useDropIndicator({
    target: {
      type: "root"
    }
  }, n, a), s = n.isDropTarget({
    type: "root"
  }), {
    visuallyHiddenProps: c
  } = (0, r.useVisuallyHidden)();
  return !s && i["aria-hidden"] ? null : o.createElement("tr", {
    role: "row",
    "aria-hidden": i["aria-hidden"],
    style: {
      height: 0
    }
  }, o.createElement("td", {
    role: "gridcell",
    colSpan: e.collection.columnCount,
    style: {
      padding: 0
    }
  }, o.createElement("div", {
    role: "button",
    ...c,
    ...i,
    ref: a
  })))
}
let th = (0, o.createContext)(null),
  tm = (0, o.createContext)(null);

function tv(e) {
  let {
    item: t,
    state: n
  } = e, {
    key: i
  } = t, s = (0, a.useObjectRef)(t.props.ref), {
    tabProps: c,
    isSelected: l,
    isDisabled: u,
    isPressed: d
  } = (0, r.useTab)({
    key: i
  }, n, s), {
    focusProps: p,
    isFocused: f,
    isFocusVisible: h
  } = (0, r.useFocusRing)(), {
    hoverProps: m,
    isHovered: v
  } = (0, r.useHover)({
    isDisabled: u
  }), g = I({
    ...t.props,
    children: t.rendered,
    defaultClassName: "react-aria-Tab",
    values: {
      isSelected: l,
      isDisabled: u,
      isFocused: f,
      isFocusVisible: h,
      isPressed: d,
      isHovered: v
    }
  }), y = (0, a.filterDOMProps)(t.props);
  return delete y.id, o.createElement("div", {
    ...(0, r.mergeProps)(y, c, p, m, g),
    ref: s,
    "data-focus-visible": h || void 0,
    "data-pressed": d || void 0,
    "data-hovered": v || void 0
  })
}
let tg = (0, o.createContext)(null),
  ty = (0, o.createContext)({}),
  tb = (0, o.createContext)(null);

function tx(e) {
  let {
    state: t,
    triggerRef: n,
    tooltipProps: i
  } = (0, o.useContext)(tb), s = (0, o.useRef)(null), {
    overlayProps: c,
    arrowProps: l,
    placement: u
  } = (0, r.useOverlayPosition)({
    placement: e.placement || "top",
    targetRef: n,
    overlayRef: s,
    offset: e.offset,
    crossOffset: e.crossOffset,
    isOpen: t.isOpen
  }), d = N(s, !!u), p = I({
    ...e,
    defaultClassName: "react-aria-Tooltip",
    values: {
      placement: u,
      isEntering: d,
      isExiting: e.isExiting
    }
  });
  e = (0, r.mergeProps)(e, c);
  let {
    tooltipProps: f
  } = (0, r.useTooltip)(e, t);
  return o.createElement("div", {
    ...(0, r.mergeProps)(i, f),
    ref: (0, a.mergeRefs)(s, e.tooltipRef),
    ...p,
    style: {
      ...p.style,
      ...c.style
    },
    "data-placement": u,
    "data-entering": d || void 0,
    "data-exiting": e.isExiting || void 0
  }, o.createElement(ey.Provider, {
    value: {
      arrowProps: l,
      placement: u
    }
  }, p.children))
}