"use strict";
n.r(t), n.d(t, {
  FocusScope: function() {
    return l
  },
  getFocusableTreeWalker: function() {
    return w
  },
  createFocusManager: function() {
    return D
  },
  isElementInChildOfActiveScope: function() {
    return y
  },
  useFocusable: function() {
    return R
  },
  useFocusRing: function() {
    return T
  },
  focusSafely: function() {
    return i
  },
  useHasTabbableChild: function() {
    return O
  }
}), n("424973"), n("222007");
var r = n("240849"),
  a = n("884691"),
  o = n("388032");

function i(e) {
  let t = (0, r.getOwnerDocument)(e);
  if ("virtual" === (0, o.getInteractionModality)()) {
    let n = t.activeElement;
    (0, r.runAfterTransition)(() => {
      t.activeElement === n && e.isConnected && (0, r.focusWithoutScrolling)(e)
    })
  } else(0, r.focusWithoutScrolling)(e)
}
n("493427");
let s = a.createContext(null),
  c = null;

function l(e) {
  let {
    children: t,
    contain: n,
    restoreFocus: o,
    autoFocus: i
  } = e, l = (0, a.useRef)(null), u = (0, a.useRef)(null), d = (0, a.useRef)([]), {
    parentNode: p
  } = (0, a.useContext)(s) || {}, m = (0, a.useMemo)(() => new P({
    scopeRef: d
  }), [d]);
  (0, r.useLayoutEffect)(() => {
    let e = p || E.root;
    if (E.getTreeNode(e.scopeRef) && c && !b(c, e.scopeRef)) {
      let t = E.getTreeNode(c);
      t && (e = t)
    }
    e.addChild(m), E.addNode(m)
  }, [m, p]), (0, r.useLayoutEffect)(() => {
    let e = E.getTreeNode(d);
    e && (e.contain = !!n)
  }, [n]), (0, r.useLayoutEffect)(() => {
    var e;
    let t = null === (e = l.current) || void 0 === e ? void 0 : e.nextSibling,
      n = [];
    for (; t && t !== u.current;) n.push(t), t = t.nextSibling;
    d.current = n
  }, [t]),
  function(e, t, n) {
    (0, r.useLayoutEffect)(() => {
      if (t || n) return;
      let a = e.current,
        o = (0, r.getOwnerDocument)(a ? a[0] : void 0),
        i = t => {
          let n = t.target;
          if (v(n, e.current)) c = e;
          else if (!g(n)) c = null
        };
      return o.addEventListener("focusin", i, !1), null == a || a.forEach(e => e.addEventListener("focusin", i, !1)), () => {
        o.removeEventListener("focusin", i, !1), null == a || a.forEach(e => e.removeEventListener("focusin", i, !1))
      }
    }, [e, t, n])
  }(d, o, n),
  function(e, t) {
    let n = (0, a.useRef)(),
      o = (0, a.useRef)();
    (0, r.useLayoutEffect)(() => {
      let a = e.current;
      if (!t) {
        o.current && (cancelAnimationFrame(o.current), o.current = void 0);
        return
      }
      let i = (0, r.getOwnerDocument)(a ? a[0] : void 0),
        s = t => {
          if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
          let n = i.activeElement,
            r = e.current;
          if (!r || !v(n, r)) return;
          let a = w(f(r), {
            tabbable: !0
          }, r);
          if (!n) return;
          a.currentNode = n;
          let o = t.shiftKey ? a.previousNode() : a.nextNode();
          !o && (a.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, o = t.shiftKey ? a.previousNode() : a.nextNode()), t.preventDefault(), o && x(o, !0)
        },
        l = t => {
          (!c || b(c, e)) && v(t.target, e.current) ? (c = e, n.current = t.target) : h(e) && !g(t.target, e) ? n.current ? n.current.focus() : c && c.current && S(c.current) : h(e) && (n.current = t.target)
        },
        u = t => {
          o.current && cancelAnimationFrame(o.current), o.current = requestAnimationFrame(() => {
            if (i.activeElement && h(e) && !g(i.activeElement, e)) {
              if (c = e, i.body.contains(t.target)) {
                var r;
                n.current = t.target, null === (r = n.current) || void 0 === r || r.focus()
              } else c.current && S(c.current)
            }
          })
        };
      return i.addEventListener("keydown", s, !1), i.addEventListener("focusin", l, !1), null == a || a.forEach(e => e.addEventListener("focusin", l, !1)), null == a || a.forEach(e => e.addEventListener("focusout", u, !1)), () => {
        i.removeEventListener("keydown", s, !1), i.removeEventListener("focusin", l, !1), null == a || a.forEach(e => e.removeEventListener("focusin", l, !1)), null == a || a.forEach(e => e.removeEventListener("focusout", u, !1))
      }
    }, [e, t]), (0, r.useLayoutEffect)(() => () => {
      o.current && cancelAnimationFrame(o.current)
    }, [o])
  }(d, n),
  function(e, t, n) {
    let o = (0, a.useRef)("undefined" != typeof document ? (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0).activeElement : null);
    (0, r.useLayoutEffect)(() => {
      let a = e.current,
        o = (0, r.getOwnerDocument)(a ? a[0] : void 0);
      if (!t || n) return;
      let i = () => {
        (!c || b(c, e)) && v(o.activeElement, e.current) && (c = e)
      };
      return o.addEventListener("focusin", i, !1), null == a || a.forEach(e => e.addEventListener("focusin", i, !1)), () => {
        o.removeEventListener("focusin", i, !1), null == a || a.forEach(e => e.removeEventListener("focusin", i, !1))
      }
    }, [e, n]), (0, r.useLayoutEffect)(() => {
      let a = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
      if (!t) return;
      let o = t => {
        if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
        let n = a.activeElement;
        if (!v(n, e.current)) return;
        let r = E.getTreeNode(e);
        if (!r) return;
        let o = r.nodeToRestore,
          i = w(a.body, {
            tabbable: !0
          });
        i.currentNode = n;
        let s = t.shiftKey ? i.previousNode() : i.nextNode();
        if ((!o || !a.body.contains(o) || o === a.body) && (o = void 0, r.nodeToRestore = void 0), (!s || !v(s, e.current)) && o) {
          i.currentNode = o;
          do s = t.shiftKey ? i.previousNode() : i.nextNode(); while (v(s, e.current));
          if (t.preventDefault(), t.stopPropagation(), s) x(s, !0);
          else if (g(o)) x(o, !0);
          else n.blur()
        }
      };
      return !n && a.addEventListener("keydown", o, !0), () => {
        !n && a.removeEventListener("keydown", o, !0)
      }
    }, [e, t, n]), (0, r.useLayoutEffect)(() => {
      var n;
      let a = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
      if (!t) return;
      let i = E.getTreeNode(e);
      if (i) return i.nodeToRestore = null !== (n = o.current) && void 0 !== n ? n : void 0, () => {
        let n = E.getTreeNode(e);
        if (!n) return;
        let r = n.nodeToRestore;
        if (t && r && (v(a.activeElement, e.current) || a.activeElement === a.body && function(e) {
            let t = E.getTreeNode(c);
            for (; t && t.scopeRef !== e;) {
              if (t.nodeToRestore) return !1;
              t = t.parent
            }
            return (null == t ? void 0 : t.scopeRef) === e
          }(e))) {
          let t = E.clone();
          requestAnimationFrame(() => {
            if (a.activeElement === a.body) {
              let n = t.getTreeNode(e);
              for (; n;) {
                if (n.nodeToRestore && n.nodeToRestore.isConnected) {
                  x(n.nodeToRestore);
                  return
                }
                n = n.parent
              }
              for (n = t.getTreeNode(e); n;) {
                if (n.scopeRef && n.scopeRef.current && E.getTreeNode(n.scopeRef)) {
                  S(n.scopeRef.current, !0);
                  return
                }
                n = n.parent
              }
            }
          })
        }
      }
    }, [e, t])
  }(d, o, n),
  function(e, t) {
    let n = a.useRef(t);
    (0, a.useEffect)(() => {
      if (n.current) {
        c = e;
        let t = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
        !v(t.activeElement, c.current) && e.current && S(e.current)
      }
      n.current = !1
    }, [e])
  }(d, i), (0, a.useEffect)(() => {
    let e = (0, r.getOwnerDocument)(d.current ? d.current[0] : void 0).activeElement,
      t = null;
    if (v(e, d.current)) {
      for (let n of E.traverse()) n.scopeRef && v(e, n.scopeRef.current) && (t = n);
      t === E.getTreeNode(d) && (c = t.scopeRef)
    }
  }, [d]), (0, r.useLayoutEffect)(() => () => {
    var e, t, n;
    let r = null !== (n = null === (t = E.getTreeNode(d)) || void 0 === t ? void 0 : null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
    (d === c || b(d, c)) && (!r || E.getTreeNode(r)) && (c = r), E.removeTreeNode(d)
  }, [d]);
  let y = (0, a.useMemo)(() => (function(e) {
      return {
        focusNext() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.current,
            {
              from: a,
              tabbable: o,
              wrap: i,
              accept: s
            } = t,
            c = a || (0, r.getOwnerDocument)(n[0]).activeElement,
            l = n[0].previousElementSibling,
            u = w(f(n), {
              tabbable: o,
              accept: s
            }, n);
          u.currentNode = v(c, n) ? c : l;
          let d = u.nextNode();
          return !d && i && (u.currentNode = l, d = u.nextNode()), d && x(d, !0), d
        },
        focusPrevious() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.current,
            {
              from: a,
              tabbable: o,
              wrap: i,
              accept: s
            } = t,
            c = a || (0, r.getOwnerDocument)(n[0]).activeElement,
            l = n[n.length - 1].nextElementSibling,
            u = w(f(n), {
              tabbable: o,
              accept: s
            }, n);
          u.currentNode = v(c, n) ? c : l;
          let d = u.previousNode();
          return !d && i && (u.currentNode = l, d = u.previousNode()), d && x(d, !0), d
        },
        focusFirst() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.current,
            {
              tabbable: r,
              accept: a
            } = t,
            o = w(f(n), {
              tabbable: r,
              accept: a
            }, n);
          o.currentNode = n[0].previousElementSibling;
          let i = o.nextNode();
          return i && x(i, !0), i
        },
        focusLast() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.current,
            {
              tabbable: r,
              accept: a
            } = t,
            o = w(f(n), {
              tabbable: r,
              accept: a
            }, n);
          o.currentNode = n[n.length - 1].nextElementSibling;
          let i = o.previousNode();
          return i && x(i, !0), i
        }
      }
    })(d), []),
    D = (0, a.useMemo)(() => ({
      focusManager: y,
      parentNode: m
    }), [m, y]);
  return a.createElement(s.Provider, {
    value: D
  }, a.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: l
  }), t, a.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: u
  }))
}
let u = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
  d = u.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
u.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let p = u.join(':not([hidden]):not([tabindex="-1"]),');

function f(e) {
  return e[0].parentElement
}

function h(e) {
  let t = E.getTreeNode(c);
  for (; t && t.scopeRef !== e;) {
    if (t.contain) return !1;
    t = t.parent
  }
  return !0
}

function m(e) {
  return g(e)
}

function v(e, t) {
  return !!e && !!t && t.some(t => t.contains(e))
}

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let {
      scopeRef: n
    }
    of E.traverse(E.getTreeNode(t)))
    if (n && v(e, n.current)) return !0;
  return !1
}

function y(e) {
  return g(e, c)
}

function b(e, t) {
  var n;
  let r = null === (n = E.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
  for (; r;) {
    if (r.scopeRef === e) return !0;
    r = r.parent
  }
  return !1
}

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == e || t) {
    if (null != e) try {
      e.focus()
    } catch (e) {}
  } else try {
    i(e)
  } catch (e) {}
}

function S(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e[0].previousElementSibling,
    r = f(e),
    a = w(r, {
      tabbable: t
    }, e);
  a.currentNode = n;
  let o = a.nextNode();
  t && !o && ((a = w(r = f(e), {
    tabbable: !1
  }, e)).currentNode = n, o = a.nextNode()), x(o)
}

function w(e, t, n) {
  let a = (null == t ? void 0 : t.tabbable) ? p : d,
    o = (0, r.getOwnerDocument)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode(e) {
        var o;
        return (null == t ? void 0 : null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : e.matches(a) && function e(t, n) {
          var a, o;
          return "#comment" !== t.nodeName && function(e) {
            let t = (0, r.getOwnerWindow)(e);
            if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
            let {
              display: n,
              visibility: a
            } = e.style, o = "none" !== n && "hidden" !== a && "collapse" !== a;
            if (o) {
              let {
                getComputedStyle: t
              } = e.ownerDocument.defaultView, {
                display: n,
                visibility: r
              } = t(e);
              o = "none" !== n && "hidden" !== r && "collapse" !== r
            }
            return o
          }(t) && (a = t, o = n, !a.hasAttribute("hidden") && ("DETAILS" !== a.nodeName || !o || "SUMMARY" === o.nodeName || a.hasAttribute("open"))) && (!t.parentElement || e(t.parentElement, t))
        }(e) && (!n || v(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return {
    focusNext() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = e.current;
      if (!a) return null;
      let {
        from: o,
        tabbable: i = t.tabbable,
        wrap: s = t.wrap,
        accept: c = t.accept
      } = n, l = o || (0, r.getOwnerDocument)(a).activeElement, u = w(a, {
        tabbable: i,
        accept: c
      });
      a.contains(l) && (u.currentNode = l);
      let d = u.nextNode();
      return !d && s && (u.currentNode = a, d = u.nextNode()), d && x(d, !0), d
    },
    focusPrevious() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
        a = e.current;
      if (!a) return null;
      let {
        from: o,
        tabbable: i = t.tabbable,
        wrap: s = t.wrap,
        accept: c = t.accept
      } = n, l = o || (0, r.getOwnerDocument)(a).activeElement, u = w(a, {
        tabbable: i,
        accept: c
      });
      if (a.contains(l)) u.currentNode = l;
      else {
        let e = C(u);
        return e && x(e, !0), null != e ? e : null
      }
      let d = u.previousNode();
      if (!d && s) {
        u.currentNode = a;
        let e = C(u);
        if (!e) return null;
        d = e
      }
      return d && x(d, !0), null != d ? d : null
    },
    focusFirst() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
        r = e.current;
      if (!r) return null;
      let {
        tabbable: a = t.tabbable,
        accept: o = t.accept
      } = n, i = w(r, {
        tabbable: a,
        accept: o
      }).nextNode();
      return i && x(i, !0), i
    },
    focusLast() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
        r = e.current;
      if (!r) return null;
      let {
        tabbable: a = t.tabbable,
        accept: o = t.accept
      } = n, i = C(w(r, {
        tabbable: a,
        accept: o
      }));
      return i && x(i, !0), null != i ? i : null
    }
  }
}

function C(e) {
  let t, n;
  do(t = e.lastChild()) && (n = t); while (t);
  return n
}
class k {
  get size() {
    return this.fastMap.size
  }
  getTreeNode(e) {
    return this.fastMap.get(e)
  }
  addTreeNode(e, t, n) {
    let r = this.fastMap.get(null != t ? t : null);
    if (!r) return;
    let a = new P({
      scopeRef: e
    });
    r.addChild(a), a.parent = r, this.fastMap.set(e, a), n && (a.nodeToRestore = n)
  }
  addNode(e) {
    this.fastMap.set(e.scopeRef, e)
  }
  removeTreeNode(e) {
    if (null === e) return;
    let t = this.fastMap.get(e);
    if (!t) return;
    let n = t.parent;
    for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && v(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
    let r = t.children;
    n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
  }* traverse() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root;
    if (null != e.scopeRef && (yield e), e.children.size > 0)
      for (let t of e.children) yield* this.traverse(t)
  }
  clone() {
    var e, t;
    let n = new k;
    for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
    return n
  }
  constructor() {
    this.fastMap = new Map, this.root = new P({
      scopeRef: null
    }), this.fastMap.set(null, this.root)
  }
}
class P {
  addChild(e) {
    this.children.add(e), e.parent = this
  }
  removeChild(e) {
    this.children.delete(e), e.parent = void 0
  }
  constructor(e) {
    this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
  }
}
let E = new k;

function T() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      autoFocus: t = !1,
      isTextInput: n,
      within: r
    } = e,
    i = (0, a.useRef)({
      isFocused: !1,
      isFocusVisible: t || (0, o.isFocusVisible)()
    }),
    [s, c] = (0, a.useState)(!1),
    [l, u] = (0, a.useState)(() => i.current.isFocused && i.current.isFocusVisible),
    d = (0, a.useCallback)(() => u(i.current.isFocused && i.current.isFocusVisible), []),
    p = (0, a.useCallback)(e => {
      i.current.isFocused = e, c(e), d()
    }, [d]);
  (0, o.useFocusVisibleListener)(e => {
    i.current.isFocusVisible = e, d()
  }, [], {
    isTextInput: n
  });
  let {
    focusProps: f
  } = (0, o.useFocus)({
    isDisabled: r,
    onFocusChange: p
  }), {
    focusWithinProps: h
  } = (0, o.useFocusWithin)({
    isDisabled: !r,
    onFocusWithinChange: p
  });
  return {
    isFocused: s,
    isFocusVisible: l,
    focusProps: r ? h : f
  }
}
let M = a.createContext(null);

function R(e, t) {
  let {
    focusProps: n
  } = (0, o.useFocus)(e), {
    keyboardProps: s
  } = (0, o.useKeyboard)(e), c = (0, r.mergeProps)(n, s), l = function(e) {
    let t = (0, a.useContext)(M) || {};
    (0, r.useSyncRef)(t, e);
    let {
      ref: n,
      ...o
    } = t;
    return o
  }(t), u = e.isDisabled ? {} : l, d = (0, a.useRef)(e.autoFocus);
  return (0, a.useEffect)(() => {
    d.current && t.current && i(t.current), d.current = !1
  }, [t]), {
    focusableProps: (0, r.mergeProps)({
      ...c,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, u)
  }
}

function O(e, t) {
  let n = null == t ? void 0 : t.isDisabled,
    [o, i] = (0, a.useState)(!1);
  return (0, r.useLayoutEffect)(() => {
    if ((null == e ? void 0 : e.current) && !n) {
      let t = () => {
        e.current && i(!!w(e.current, {
          tabbable: !0
        }).nextNode())
      };
      t();
      let n = new MutationObserver(t);
      return n.observe(e.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ["tabIndex", "disabled"]
      }), () => {
        n.disconnect()
      }
    }
  }), !n && o
}