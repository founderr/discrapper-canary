"use strict";
n.r(t), n.d(t, {
  FocusScope: function() {
    return u
  },
  getFocusableTreeWalker: function() {
    return S
  },
  createFocusManager: function() {
    return k
  },
  isElementInChildOfActiveScope: function() {
    return m
  },
  useFocusable: function() {
    return T
  },
  useFocusRing: function() {
    return C
  },
  focusSafely: function() {
    return s
  },
  useHasTabbableChild: function() {
    return A
  }
}), n("424973"), n("222007");
var r = n("884691"),
  i = n("290895"),
  o = n("495912");

function s(e) {
  if ("virtual" === (0, o.getInteractionModality)()) {
    let t = document.activeElement;
    (0, i.runAfterTransition)(() => {
      document.activeElement === t && document.contains(e) && (0, i.focusWithoutScrolling)(e)
    })
  } else(0, i.focusWithoutScrolling)(e)
}
n("38736");
let a = r.createContext(null),
  c = null;

function u(e) {
  let {
    children: t,
    contain: n,
    restoreFocus: o,
    autoFocus: s
  } = e, u = (0, r.useRef)(), d = (0, r.useRef)(), l = (0, r.useRef)([]), {
    parentNode: f
  } = (0, r.useContext)(a) || {}, g = (0, r.useMemo)(() => new M({
    scopeRef: l
  }), [l]);
  (0, i.useLayoutEffect)(() => {
    let e = f || D.root;
    if (D.getTreeNode(e.scopeRef) && c && !y(c, e.scopeRef)) {
      let t = D.getTreeNode(c);
      t && (e = t)
    }
    e.addChild(g), D.addNode(g)
  }, [g, f]), (0, i.useLayoutEffect)(() => {
    D.getTreeNode(l).contain = n
  }, [n]), (0, i.useLayoutEffect)(() => {
    let e = u.current.nextSibling,
      t = [];
    for (; e && e !== d.current;) t.push(e), e = e.nextSibling;
    l.current = t
  }, [t]),
  function(e, t, n) {
    (0, i.useLayoutEffect)(() => {
      if (t || n) return;
      let r = e.current,
        i = t => {
          let n = t.target;
          if (b(n, e.current)) c = e;
          else if (!v(n)) c = null
        };
      return document.addEventListener("focusin", i, !1), r.forEach(e => e.addEventListener("focusin", i, !1)), () => {
        document.removeEventListener("focusin", i, !1), r.forEach(e => e.removeEventListener("focusin", i, !1))
      }
    }, [e, t, n])
  }(l, o, n),
  function(e, t) {
    let n = (0, r.useRef)(),
      o = (0, r.useRef)(null);
    (0, i.useLayoutEffect)(() => {
      let r = e.current;
      if (!t) {
        o.current && (cancelAnimationFrame(o.current), o.current = null);
        return
      }
      let i = t => {
          if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
          let n = document.activeElement,
            r = e.current;
          if (!b(n, r)) return;
          let i = S(p(r), {
            tabbable: !0
          }, r);
          i.currentNode = n;
          let o = t.shiftKey ? i.previousNode() : i.nextNode();
          !o && (i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, o = t.shiftKey ? i.previousNode() : i.nextNode()), t.preventDefault(), o && x(o, !0)
        },
        s = t => {
          (!c || y(c, e)) && b(t.target, e.current) ? (c = e, n.current = t.target) : h(e) && !v(t.target, e) ? n.current ? n.current.focus() : c && w(c.current) : h(e) && (n.current = t.target)
        },
        a = t => {
          o.current && cancelAnimationFrame(o.current), o.current = requestAnimationFrame(() => {
            h(e) && !v(document.activeElement, e) && (c = e, document.body.contains(t.target) ? (n.current = t.target, n.current.focus()) : c && w(c.current))
          })
        };
      return document.addEventListener("keydown", i, !1), document.addEventListener("focusin", s, !1), r.forEach(e => e.addEventListener("focusin", s, !1)), r.forEach(e => e.addEventListener("focusout", a, !1)), () => {
        document.removeEventListener("keydown", i, !1), document.removeEventListener("focusin", s, !1), r.forEach(e => e.removeEventListener("focusin", s, !1)), r.forEach(e => e.removeEventListener("focusout", a, !1))
      }
    }, [e, t]), (0, i.useLayoutEffect)(() => () => {
      o.current && cancelAnimationFrame(o.current)
    }, [o])
  }(l, n),
  function(e, t, n) {
    let o = (0, r.useRef)("undefined" != typeof document ? document.activeElement : null);
    (0, i.useLayoutEffect)(() => {
      let r = e.current;
      if (!t || n) return;
      let i = () => {
        (!c || y(c, e)) && b(document.activeElement, e.current) && (c = e)
      };
      return document.addEventListener("focusin", i, !1), r.forEach(e => e.addEventListener("focusin", i, !1)), () => {
        document.removeEventListener("focusin", i, !1), r.forEach(e => e.removeEventListener("focusin", i, !1))
      }
    }, [e, n]), (0, i.useLayoutEffect)(() => {
      if (!t) return;
      let r = t => {
        if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
        let n = document.activeElement;
        if (!b(n, e.current)) return;
        let r = D.getTreeNode(e).nodeToRestore,
          i = S(document.body, {
            tabbable: !0
          });
        i.currentNode = n;
        let o = t.shiftKey ? i.previousNode() : i.nextNode();
        if ((!document.body.contains(r) || r === document.body) && (r = null, D.getTreeNode(e).nodeToRestore = null), (!o || !b(o, e.current)) && r) {
          i.currentNode = r;
          do o = t.shiftKey ? i.previousNode() : i.nextNode(); while (b(o, e.current));
          if (t.preventDefault(), t.stopPropagation(), o) x(o, !0);
          else if (v(r)) x(r, !0);
          else n.blur()
        }
      };
      return !n && document.addEventListener("keydown", r, !0), () => {
        !n && document.removeEventListener("keydown", r, !0)
      }
    }, [e, t, n]), (0, i.useLayoutEffect)(() => {
      if (t) return D.getTreeNode(e).nodeToRestore = o.current, () => {
        let n = D.getTreeNode(e).nodeToRestore;
        if (t && n && (b(document.activeElement, e.current) || document.activeElement === document.body && function(e) {
            let t = D.getTreeNode(c);
            for (; t && t.scopeRef !== e;) {
              if (t.nodeToRestore) return !1;
              t = t.parent
            }
            return (null == t ? void 0 : t.scopeRef) === e
          }(e))) {
          let t = D.clone();
          requestAnimationFrame(() => {
            if (document.activeElement === document.body) {
              let n = t.getTreeNode(e);
              for (; n;) {
                if (n.nodeToRestore && document.body.contains(n.nodeToRestore)) {
                  x(n.nodeToRestore);
                  return
                }
                n = n.parent
              }
              for (n = t.getTreeNode(e); n;) {
                if (n.scopeRef && D.getTreeNode(n.scopeRef)) {
                  w(n.scopeRef.current, !0);
                  return
                }
                n = n.parent
              }
            }
          })
        }
      }
    }, [e, t])
  }(l, o, n),
  function(e, t) {
    let n = r.useRef(t);
    (0, r.useEffect)(() => {
      n.current && (c = e, !b(document.activeElement, c.current) && w(e.current)), n.current = !1
    }, [e])
  }(l, s), (0, r.useEffect)(() => {
    if (l) {
      let e = document.activeElement,
        t = null;
      if (b(e, l.current)) {
        for (let n of D.traverse()) b(e, n.scopeRef.current) && (t = n);
        t === D.getTreeNode(l) && (c = t.scopeRef)
      }
      return () => {
        let e = D.getTreeNode(l).parent.scopeRef;
        (l === c || y(l, c)) && (!e || D.getTreeNode(e)) && (c = e), D.removeTreeNode(l)
      }
    }
  }, [l]);
  let m = (0, r.useMemo)(() => (function(e) {
      return {
        focusNext() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.current,
            {
              from: r,
              tabbable: i,
              wrap: o,
              accept: s
            } = t,
            a = r || document.activeElement,
            c = n[0].previousElementSibling,
            u = S(p(n), {
              tabbable: i,
              accept: s
            }, n);
          u.currentNode = b(a, n) ? a : c;
          let d = u.nextNode();
          return !d && o && (u.currentNode = c, d = u.nextNode()), d && x(d, !0), d
        },
        focusPrevious() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.current,
            {
              from: r,
              tabbable: i,
              wrap: o,
              accept: s
            } = t,
            a = r || document.activeElement,
            c = n[n.length - 1].nextElementSibling,
            u = S(p(n), {
              tabbable: i,
              accept: s
            }, n);
          u.currentNode = b(a, n) ? a : c;
          let d = u.previousNode();
          return !d && o && (u.currentNode = c, d = u.previousNode()), d && x(d, !0), d
        },
        focusFirst() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.current,
            {
              tabbable: r,
              accept: i
            } = t,
            o = S(p(n), {
              tabbable: r,
              accept: i
            }, n);
          o.currentNode = n[0].previousElementSibling;
          let s = o.nextNode();
          return s && x(s, !0), s
        },
        focusLast() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.current,
            {
              tabbable: r,
              accept: i
            } = t,
            o = S(p(n), {
              tabbable: r,
              accept: i
            }, n);
          o.currentNode = n[n.length - 1].nextElementSibling;
          let s = o.previousNode();
          return s && x(s, !0), s
        }
      }
    })(l), []),
    k = (0, r.useMemo)(() => ({
      focusManager: m,
      parentNode: g
    }), [g, m]);
  return r.createElement(a.Provider, {
    value: k
  }, r.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: u
  }), t, r.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: d
  }))
}
let d = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
  l = d.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
d.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let f = d.join(':not([hidden]):not([tabindex="-1"]),');

function p(e) {
  return e[0].parentElement
}

function h(e) {
  let t = D.getTreeNode(c);
  for (; t && t.scopeRef !== e;) {
    if (t.contain) return !1;
    t = t.parent
  }
  return !0
}

function g(e) {
  return v(e)
}

function b(e, t) {
  return t.some(t => t.contains(e))
}

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
  for (let {
      scopeRef: n
    }
    of D.traverse(D.getTreeNode(t)))
    if (b(e, n.current)) return !0;
  return !1
}

function m(e) {
  return v(e, c)
}

function y(e, t) {
  var n;
  let r = null === (n = D.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
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
    s(e)
  } catch (e) {}
}

function w(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e[0].previousElementSibling,
    r = S(p(e), {
      tabbable: t
    }, e);
  r.currentNode = n;
  let i = r.nextNode();
  t && !i && ((r = S(p(e), {
    tabbable: !1
  }, e)).currentNode = n, i = r.nextNode()), x(i)
}

function S(e, t, n) {
  let r = (null == t ? void 0 : t.tabbable) ? f : l,
    i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode(e) {
        var i;
        return (null == t ? void 0 : null === (i = t.from) || void 0 === i ? void 0 : i.contains(e)) ? NodeFilter.FILTER_REJECT : e.matches(r) && function e(t, n) {
          var r, i;
          return "#comment" !== t.nodeName && function(e) {
            if (!(e instanceof HTMLElement) && !(e instanceof SVGElement)) return !1;
            let {
              display: t,
              visibility: n
            } = e.style, r = "none" !== t && "hidden" !== n && "collapse" !== n;
            if (r) {
              let {
                getComputedStyle: t
              } = e.ownerDocument.defaultView, {
                display: n,
                visibility: i
              } = t(e);
              r = "none" !== n && "hidden" !== i && "collapse" !== i
            }
            return r
          }(t) && (r = t, i = n, !r.hasAttribute("hidden") && ("DETAILS" !== r.nodeName || !i || "SUMMARY" === i.nodeName || r.hasAttribute("open"))) && (!t.parentElement || e(t.parentElement, t))
        }(e) && (!n || b(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i
}

function k(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return {
    focusNext() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = e.current;
      if (!r) return;
      let {
        from: i,
        tabbable: o = t.tabbable,
        wrap: s = t.wrap,
        accept: a = t.accept
      } = n, c = i || document.activeElement, u = S(r, {
        tabbable: o,
        accept: a
      });
      r.contains(c) && (u.currentNode = c);
      let d = u.nextNode();
      return !d && s && (u.currentNode = r, d = u.nextNode()), d && x(d, !0), d
    },
    focusPrevious() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
        r = e.current;
      if (!r) return;
      let {
        from: i,
        tabbable: o = t.tabbable,
        wrap: s = t.wrap,
        accept: a = t.accept
      } = n, c = i || document.activeElement, u = S(r, {
        tabbable: o,
        accept: a
      });
      if (r.contains(c)) u.currentNode = c;
      else {
        let e = _(u);
        return e && x(e, !0), e
      }
      let d = u.previousNode();
      return !d && s && (u.currentNode = r, d = _(u)), d && x(d, !0), d
    },
    focusFirst() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
        r = e.current;
      if (!r) return;
      let {
        tabbable: i = t.tabbable,
        accept: o = t.accept
      } = n, s = S(r, {
        tabbable: i,
        accept: o
      }).nextNode();
      return s && x(s, !0), s
    },
    focusLast() {
      let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
        r = e.current;
      if (!r) return;
      let {
        tabbable: i = t.tabbable,
        accept: o = t.accept
      } = n, s = _(S(r, {
        tabbable: i,
        accept: o
      }));
      return s && x(s, !0), s
    }
  }
}

function _(e) {
  let t, n;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}
class E {
  get size() {
    return this.fastMap.size
  }
  getTreeNode(e) {
    return this.fastMap.get(e)
  }
  addTreeNode(e, t, n) {
    let r = this.fastMap.get(null != t ? t : null),
      i = new M({
        scopeRef: e
      });
    r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n)
  }
  addNode(e) {
    this.fastMap.set(e.scopeRef, e)
  }
  removeTreeNode(e) {
    if (null === e) return;
    let t = this.fastMap.get(e),
      n = t.parent;
    for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef.current && b(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
    let r = t.children;
    n.removeChild(t), r.size > 0 && r.forEach(e => n.addChild(e)), this.fastMap.delete(t.scopeRef)
  }* traverse() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root;
    if (null != e.scopeRef && (yield e), e.children.size > 0)
      for (let t of e.children) yield* this.traverse(t)
  }
  clone() {
    let e = new E;
    for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent.scopeRef, t.nodeToRestore);
    return e
  }
  constructor() {
    this.fastMap = new Map, this.root = new M({
      scopeRef: null
    }), this.fastMap.set(null, this.root)
  }
}
class M {
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
let D = new E;

function C() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      autoFocus: t = !1,
      isTextInput: n,
      within: i
    } = e,
    s = (0, r.useRef)({
      isFocused: !1,
      isFocusVisible: t || (0, o.isFocusVisible)()
    }),
    [a, c] = (0, r.useState)(!1),
    [u, d] = (0, r.useState)(() => s.current.isFocused && s.current.isFocusVisible),
    l = (0, r.useCallback)(() => d(s.current.isFocused && s.current.isFocusVisible), []),
    f = (0, r.useCallback)(e => {
      s.current.isFocused = e, c(e), l()
    }, [l]);
  (0, o.useFocusVisibleListener)(e => {
    s.current.isFocusVisible = e, l()
  }, [], {
    isTextInput: n
  });
  let {
    focusProps: p
  } = (0, o.useFocus)({
    isDisabled: i,
    onFocusChange: f
  }), {
    focusWithinProps: h
  } = (0, o.useFocusWithin)({
    isDisabled: !i,
    onFocusWithinChange: f
  });
  return {
    isFocused: a,
    isFocusVisible: u,
    focusProps: i ? h : p
  }
}
let P = r.createContext(null);

function T(e, t) {
  let {
    focusProps: n
  } = (0, o.useFocus)(e), {
    keyboardProps: a
  } = (0, o.useKeyboard)(e), c = (0, i.mergeProps)(n, a), u = function(e) {
    let t = (0, r.useContext)(P) || {};
    (0, i.useSyncRef)(t, e);
    let {
      ref: n,
      ...o
    } = t;
    return o
  }(t), d = e.isDisabled ? {} : u, l = (0, r.useRef)(e.autoFocus);
  return (0, r.useEffect)(() => {
    l.current && t.current && s(t.current), l.current = !1
  }, [t]), {
    focusableProps: (0, i.mergeProps)({
      ...c,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, d)
  }
}

function A(e, t) {
  let n = null == t ? void 0 : t.isDisabled,
    [o, s] = (0, r.useState)(!1);
  return (0, i.useLayoutEffect)(() => {
    if ((null == e ? void 0 : e.current) && !n) {
      let t = () => {
        e.current && s(!!S(e.current, {
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