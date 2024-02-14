"use strict";
n.r(t), n.d(t, {
  ClearPressResponder: function() {
    return T
  },
  useFocus: function() {
    return O
  },
  isFocusVisible: function() {
    return G
  },
  getInteractionModality: function() {
    return W
  },
  setInteractionModality: function() {
    return q
  },
  useInteractionModality: function() {
    return Z
  },
  useFocusVisibleListener: function() {
    return X
  },
  useFocusWithin: function() {
    return J
  },
  useHover: function() {
    return er
  },
  useInteractOutside: function() {
    return ea
  },
  useKeyboard: function() {
    return es
  },
  useMove: function() {
    return ec
  },
  usePress: function() {
    return y
  },
  useScrollWheel: function() {
    return el
  },
  useLongPress: function() {
    return eu
  }
}), n("222007");
var r = n("240849"),
  a = n("884691"),
  o = n("79458"),
  i = n("599514"),
  s = n("686047"),
  c = n("638915");
let l = "default",
  u = "",
  d = new WeakMap;

function p(e) {
  if ((0, r.isIOS)()) {
    if ("default" === l) {
      let t = (0, r.getOwnerDocument)(e);
      u = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
    }
    l = "disabled"
  } else(e instanceof HTMLElement || e instanceof SVGElement) && (d.set(e, e.style.userSelect), e.style.userSelect = "none")
}

function f(e) {
  if ((0, r.isIOS)()) "disabled" === l && (l = "restoring", setTimeout(() => {
    (0, r.runAfterTransition)(() => {
      if ("restoring" === l) {
        let t = (0, r.getOwnerDocument)(e);
        "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = u || ""), u = "", l = "default"
      }
    })
  }, 300));
  else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && d.has(e)) {
    let t = d.get(e);
    "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), d.delete(e)
  }
}
let h = a.createContext({
  register: () => {}
});
h.displayName = "PressResponderContext";
var m = new WeakMap;
class v {
  continuePropagation() {
    (0, s._)(this, m, !1)
  }
  get shouldStopPropagation() {
    return (0, o._)(this, m)
  }
  constructor(e, t, n) {
    (0, i._)(this, m, {
      writable: !0,
      value: void 0
    }), (0, s._)(this, m, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
  }
}
let g = Symbol("linkClicked");

function y(e) {
  let {
    onPress: t,
    onPressChange: n,
    onPressStart: o,
    onPressEnd: i,
    onPressUp: s,
    isDisabled: c,
    isPressed: l,
    preventFocusOnPress: u,
    shouldCancelOnPointerExit: d,
    allowTextSelectionOnPress: m,
    ref: y,
    ...P
  } = function(e) {
    let t = (0, a.useContext)(h);
    if (t) {
      let {
        register: n,
        ...a
      } = t;
      e = (0, r.mergeProps)(a, e), n()
    }
    return (0, r.useSyncRef)(t, e.ref), e
  }(e), [E, T] = (0, a.useState)(!1), M = (0, a.useRef)({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), {
    addGlobalListener: R,
    removeAllGlobalListeners: O
  } = (0, r.useGlobalListeners)(), I = (0, r.useEffectEvent)((e, t) => {
    let r = M.current;
    if (c || r.didFirePressStart) return !1;
    let a = !0;
    if (r.isTriggeringEvent = !0, o) {
      let n = new v("pressstart", t, e);
      o(n), a = n.shouldStopPropagation
    }
    return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, T(!0), a
  }), A = (0, r.useEffectEvent)(function(e, r) {
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      o = M.current;
    if (!o.didFirePressStart) return !1;
    o.ignoreClickAfterPress = !0, o.didFirePressStart = !1, o.isTriggeringEvent = !0;
    let s = !0;
    if (i) {
      let t = new v("pressend", r, e);
      i(t), s = t.shouldStopPropagation
    }
    if (n && n(!1), T(!1), t && a && !c) {
      let n = new v("press", r, e);
      t(n), s && (s = n.shouldStopPropagation)
    }
    return o.isTriggeringEvent = !1, s
  }), L = (0, r.useEffectEvent)((e, t) => {
    let n = M.current;
    if (c) return !1;
    if (s) {
      n.isTriggeringEvent = !0;
      let r = new v("pressup", t, e);
      return s(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
    }
    return !0
  }), N = (0, r.useEffectEvent)(e => {
    let t = M.current;
    t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && A(w(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, O(), !m && f(t.target))
  }), j = (0, r.useEffectEvent)(e => {
    d && N(e)
  }), F = (0, a.useMemo)(() => {
    let e = M.current,
      t = {
        onKeyDown(t) {
          if (x(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
            var a;
            k(t.target, t.key) && t.preventDefault();
            let o = !0;
            !e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, o = I(t, "keyboard"), R((0, r.getOwnerDocument)(t.currentTarget), "keyup", n, !1)), o && t.stopPropagation(), t.metaKey && (0, r.isMac)() && (null === (a = e.metaKeyEvents) || void 0 === a || a.set(t.key, t.nativeEvent))
          } else "Meta" === t.key && (e.metaKeyEvents = new Map)
        },
        onKeyUp(t) {
          x(t.nativeEvent, t.currentTarget) && !t.repeat && t.currentTarget.contains(t.target) && e.target && L(w(e.target, t), "keyboard")
        },
        onClick(t) {
          if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !r.openLink.isOpening) {
            let n = !0;
            if (c && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, r.isVirtualClick)(t.nativeEvent))) {
              !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget);
              let e = I(t, "virtual"),
                a = L(t, "virtual"),
                o = A(t, "virtual");
              n = e && a && o
            }
            e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
          }
        }
      },
      n = t => {
        var n, a, o;
        if (e.isPressed && e.target && x(t, e.target)) {
          k(t.target, t.key) && t.preventDefault();
          let n = t.target,
            o = A(w(e.target, t), "keyboard", e.target.contains(n));
          O(), o && t.stopPropagation(), "Enter" !== t.key && b(e.target) && e.target.contains(n) && !t[g] && (t[g] = !0, (0, r.openLink)(e.target, t, !1)), e.isPressed = !1, null === (a = e.metaKeyEvents) || void 0 === a || a.delete(t.key)
        } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
          let t = e.metaKeyEvents;
          for (let n of (e.metaKeyEvents = void 0, t.values())) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
        }
      };
    if ("undefined" != typeof PointerEvent) {
      t.onPointerDown = t => {
        if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
        if ((0, r.isVirtualPointerEvent)(t.nativeEvent)) {
          e.pointerType = "virtual";
          return
        }
        C(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
        let i = !0;
        !e.isPressed && (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), !m && p(e.target), i = I(t, e.pointerType), R((0, r.getOwnerDocument)(t.currentTarget), "pointermove", n, !1), R((0, r.getOwnerDocument)(t.currentTarget), "pointerup", a, !1), R((0, r.getOwnerDocument)(t.currentTarget), "pointercancel", o, !1)), i && t.stopPropagation()
      }, t.onMouseDown = e => {
        e.currentTarget.contains(e.target) && 0 === e.button && (C(e.currentTarget) && e.preventDefault(), e.stopPropagation())
      }, t.onPointerUp = t => {
        t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && D(t, t.currentTarget) && L(t, e.pointerType || t.pointerType)
      };
      let n = t => {
          t.pointerId === e.activePointerId && (e.target && D(t, e.target) ? !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, I(w(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, A(w(e.target, t), e.pointerType, !1), j(t)))
        },
        a = t => {
          t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (D(t, e.target) && null != e.pointerType ? A(w(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && A(w(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, O(), !m && f(e.target))
        },
        o = e => {
          N(e)
        };
      t.onDragStart = e => {
        e.currentTarget.contains(e.target) && N(e)
      }
    } else {
      t.onMouseDown = t => {
        if (0 === t.button && !!t.currentTarget.contains(t.target)) {
          if (C(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents) {
            t.stopPropagation();
            return
          }
          e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = (0, r.isVirtualClick)(t.nativeEvent) ? "virtual" : "mouse", !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), I(t, e.pointerType) && t.stopPropagation(), R((0, r.getOwnerDocument)(t.currentTarget), "mouseup", n, !1)
        }
      }, t.onMouseEnter = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = !0;
        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = I(t, e.pointerType)), n && t.stopPropagation()
      }, t.onMouseLeave = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = !0;
        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = A(t, e.pointerType, !1), j(t)), n && t.stopPropagation()
      }, t.onMouseUp = t => {
        t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && L(t, e.pointerType || "mouse")
      };
      let n = t => {
        if (0 === t.button) {
          if (e.isPressed = !1, O(), e.ignoreEmulatedMouseEvents) {
            e.ignoreEmulatedMouseEvents = !1;
            return
          }
          e.target && D(t, e.target) && null != e.pointerType ? A(w(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && A(w(e.target, t), e.pointerType, !1), e.isOverTarget = !1
        }
      };
      t.onTouchStart = t => {
        if (!t.currentTarget.contains(t.target)) return;
        let n = function(e) {
          let {
            targetTouches: t
          } = e;
          return t.length > 0 ? t[0] : null
        }(t.nativeEvent);
        if (!!n) e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", !c && !u && (0, r.focusWithoutScrolling)(t.currentTarget), !m && p(e.target), I(t, e.pointerType) && t.stopPropagation(), R((0, r.getOwnerWindow)(t.currentTarget), "scroll", a, !0)
      }, t.onTouchMove = t => {
        if (!t.currentTarget.contains(t.target)) return;
        if (!e.isPressed) {
          t.stopPropagation();
          return
        }
        let n = S(t.nativeEvent, e.activePointerId),
          r = !0;
        n && D(n, t.currentTarget) ? !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, r = I(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = A(t, e.pointerType, !1), j(t)), r && t.stopPropagation()
      }, t.onTouchEnd = t => {
        if (!t.currentTarget.contains(t.target)) return;
        if (!e.isPressed) {
          t.stopPropagation();
          return
        }
        let n = S(t.nativeEvent, e.activePointerId),
          r = !0;
        n && D(n, t.currentTarget) && null != e.pointerType ? (L(t, e.pointerType), r = A(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = A(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !m && f(e.target), O()
      }, t.onTouchCancel = t => {
        t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && N(t))
      };
      let a = t => {
        e.isPressed && t.target.contains(e.target) && N({
          currentTarget: e.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        })
      };
      t.onDragStart = e => {
        e.currentTarget.contains(e.target) && N(e)
      }
    }
    return t
  }, [R, c, u, O, m, N, j, A, I, L]);
  return (0, a.useEffect)(() => () => {
    var e;
    !m && f(null !== (e = M.current.target) && void 0 !== e ? e : void 0)
  }, [m]), {
    isPressed: l || E,
    pressProps: (0, r.mergeProps)(P, F)
  }
}

function b(e) {
  return "A" === e.tagName && e.hasAttribute("href")
}

function x(e, t) {
  let {
    key: n,
    code: a
  } = e, o = t.getAttribute("role");
  return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === a) && !(t instanceof(0, r.getOwnerWindow)(t).HTMLInputElement && !E(t, n) || t instanceof(0, r.getOwnerWindow)(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === o || !o && b(t)) && "Enter" !== n)
}

function S(e, t) {
  let n = e.changedTouches;
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    if (r.identifier === t) return r
  }
  return null
}

function w(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  }
}

function D(e, t) {
  var n, r, a;
  let o, i, s = t.getBoundingClientRect();
  let c = (o = 0, i = 0, void 0 !== (n = e).width ? o = n.width / 2 : void 0 !== n.radiusX && (o = n.radiusX), void 0 !== n.height ? i = n.height / 2 : void 0 !== n.radiusY && (i = n.radiusY), {
    top: n.clientY - i,
    right: n.clientX + o,
    bottom: n.clientY + i,
    left: n.clientX - o
  });
  return r = s, a = c, !(r.left > a.right) && !(a.left > r.right) && !(r.top > a.bottom) && !(a.top > r.bottom) && !0
}

function C(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable")
}

function k(e, t) {
  return e instanceof HTMLInputElement ? !E(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !b(e) && !0
}
let P = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function E(e, t) {
  return "checkbox" === e.type || "radio" === e.type ? " " === t : P.has(e.type)
}

function T(e) {
  let {
    children: t
  } = e, n = (0, a.useMemo)(() => ({
    register: () => {}
  }), []);
  return a.createElement(h.Provider, {
    value: n
  }, t)
}
class M {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault()
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
  }
  isPropagationStopped() {
    return !1
  }
  persist() {}
  constructor(e, t) {
    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
  }
}

function R(e) {
  let t = (0, a.useRef)({
    isFocused: !1,
    observer: null
  });
  (0, r.useLayoutEffect)(() => {
    let e = t.current;
    return () => {
      e.observer && (e.observer.disconnect(), e.observer = null)
    }
  }, []);
  let n = (0, r.useEffectEvent)(t => {
    null == e || e(t)
  });
  return (0, a.useCallback)(e => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let r = e.target;
      r.addEventListener("focusout", e => {
        t.current.isFocused = !1, r.disabled && n(new M("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
      }, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && r.disabled) {
          var e;
          null === (e = t.current.observer) || void 0 === e || e.disconnect();
          let n = r === document.activeElement ? null : document.activeElement;
          r.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: n
          })), r.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: n
          }))
        }
      }), t.current.observer.observe(r, {
        attributes: !0,
        attributeFilter: ["disabled"]
      })
    }
  }, [n])
}

function O(e) {
  let {
    isDisabled: t,
    onFocus: n,
    onBlur: r,
    onFocusChange: o
  } = e, i = (0, a.useCallback)(e => {
    if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
  }, [r, o]), s = R(i), c = (0, a.useCallback)(e => {
    e.target === e.currentTarget && document.activeElement === e.target && (n && n(e), o && o(!0), s(e))
  }, [o, n, s]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? c : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  }
}
let I = null,
  A = new Set,
  L = !1,
  N = !1,
  j = !1,
  F = {
    Tab: !0,
    Escape: !0
  };

function K(e, t) {
  for (let n of A) n(e, t)
}

function _(e) {
  var t;
  if (N = !0, !((t = e).metaKey || !(0, r.isMac)() && t.altKey || t.ctrlKey || "Control" === t.key || "Shift" === t.key || "Meta" === t.key)) I = "keyboard", K("keyboard", e)
}

function V(e) {
  I = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (N = !0, K("pointer", e))
}

function z(e) {
  (0, r.isVirtualClick)(e) && (N = !0, I = "virtual")
}

function B(e) {
  e.target !== window && e.target !== document && (!N && !j && (I = "virtual", K("virtual", e)), N = !1, j = !1)
}

function U() {
  N = !1, j = !0
}

function H() {
  if ("undefined" == typeof window || L) return;
  let e = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    N = !0, e.apply(this, arguments)
  }, document.addEventListener("keydown", _, !0), document.addEventListener("keyup", _, !0), document.addEventListener("click", z, !0), window.addEventListener("focus", B, !0), window.addEventListener("blur", U, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", V, !0), document.addEventListener("pointermove", V, !0), document.addEventListener("pointerup", V, !0)) : (document.addEventListener("mousedown", V, !0), document.addEventListener("mousemove", V, !0), document.addEventListener("mouseup", V, !0)), L = !0
}

function G() {
  return "pointer" !== I
}

function W() {
  return I
}

function q(e) {
  I = e, K(e, null)
}

function Z() {
  H();
  let [e, t] = (0, a.useState)(I);
  return (0, a.useEffect)(() => {
    let e = () => {
      t(I)
    };
    return A.add(e), () => {
      A.delete(e)
    }
  }, []), (0, c.useIsSSR)() ? null : e
}
"undefined" != typeof document && ("loading" !== document.readyState ? H() : document.addEventListener("DOMContentLoaded", H));
let Y = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function X(e, t, n) {
  H(), (0, a.useEffect)(() => {
    let t = (t, r) => {
      var a, o, i, s;
      if (a = !!(null == n ? void 0 : n.isTextInput), o = t, i = r, !((a = a || (null == i ? void 0 : i.target) instanceof HTMLInputElement && !Y.has(null == i ? void 0 : null === (s = i.target) || void 0 === s ? void 0 : s.type) || (null == i ? void 0 : i.target) instanceof HTMLTextAreaElement || (null == i ? void 0 : i.target) instanceof HTMLElement && (null == i ? void 0 : i.target.isContentEditable)) && "keyboard" === o && i instanceof KeyboardEvent) || F[i.key]) e(G())
    };
    return A.add(t), () => {
      A.delete(t)
    }
  }, t)
}

function J(e) {
  let {
    isDisabled: t,
    onBlurWithin: n,
    onFocusWithin: r,
    onFocusWithinChange: o
  } = e, i = (0, a.useRef)({
    isFocusWithin: !1
  }), s = (0, a.useCallback)(e => {
    i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, n && n(e), o && o(!1))
  }, [n, o, i]), c = R(s), l = (0, a.useCallback)(e => {
    !i.current.isFocusWithin && document.activeElement === e.target && (r && r(e), o && o(!0), i.current.isFocusWithin = !0, c(e))
  }, [r, o, c]);
  return t ? {
    focusWithinProps: {
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: l,
      onBlur: s
    }
  }
}
let $ = !1,
  Q = 0;

function ee() {
  $ = !0, setTimeout(() => {
    $ = !1
  }, 50)
}

function et(e) {
  "touch" === e.pointerType && ee()
}

function en() {
  if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", et) : document.addEventListener("touchend", ee), Q++, () => {
    !(--Q > 0) && ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", et) : document.removeEventListener("touchend", ee))
  }
}

function er(e) {
  let {
    onHoverStart: t,
    onHoverChange: n,
    onHoverEnd: r,
    isDisabled: o
  } = e, [i, s] = (0, a.useState)(!1), c = (0, a.useRef)({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  (0, a.useEffect)(en, []);
  let {
    hoverProps: l,
    triggerHoverEnd: u
  } = (0, a.useMemo)(() => {
    let e = (e, r) => {
        if (c.pointerType = r, o || "touch" === r || c.isHovered || !e.currentTarget.contains(e.target)) return;
        c.isHovered = !0;
        let a = e.currentTarget;
        c.target = a, t && t({
          type: "hoverstart",
          target: a,
          pointerType: r
        }), n && n(!0), s(!0)
      },
      a = (e, t) => {
        if (c.pointerType = "", c.target = null, "touch" === t || !c.isHovered) return;
        c.isHovered = !1;
        let a = e.currentTarget;
        r && r({
          type: "hoverend",
          target: a,
          pointerType: t
        }), n && n(!1), s(!1)
      },
      i = {};
    return "undefined" != typeof PointerEvent ? (i.onPointerEnter = t => {
      (!$ || "mouse" !== t.pointerType) && e(t, t.pointerType)
    }, i.onPointerLeave = e => {
      !o && e.currentTarget.contains(e.target) && a(e, e.pointerType)
    }) : (i.onTouchStart = () => {
      c.ignoreEmulatedMouseEvents = !0
    }, i.onMouseEnter = t => {
      !c.ignoreEmulatedMouseEvents && !$ && e(t, "mouse"), c.ignoreEmulatedMouseEvents = !1
    }, i.onMouseLeave = e => {
      !o && e.currentTarget.contains(e.target) && a(e, "mouse")
    }), {
      hoverProps: i,
      triggerHoverEnd: a
    }
  }, [t, n, r, o, c]);
  return (0, a.useEffect)(() => {
    o && u({
      currentTarget: c.target
    }, c.pointerType)
  }, [o]), {
    hoverProps: l,
    isHovered: i
  }
}

function ea(e) {
  let {
    ref: t,
    onInteractOutside: n,
    isDisabled: o,
    onInteractOutsideStart: i
  } = e, s = (0, a.useRef)({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), c = (0, r.useEffectEvent)(e => {
    n && eo(e, t) && (i && i(e), s.current.isPointerDown = !0)
  }), l = (0, r.useEffectEvent)(e => {
    n && n(e)
  });
  (0, a.useEffect)(() => {
    let e = s.current;
    if (o) return;
    let n = t.current,
      a = (0, r.getOwnerDocument)(n);
    if ("undefined" != typeof PointerEvent) {
      let n = n => {
        e.isPointerDown && eo(n, t) && l(n), e.isPointerDown = !1
      };
      return a.addEventListener("pointerdown", c, !0), a.addEventListener("pointerup", n, !0), () => {
        a.removeEventListener("pointerdown", c, !0), a.removeEventListener("pointerup", n, !0)
      }
    } {
      let n = n => {
          e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : e.isPointerDown && eo(n, t) && l(n), e.isPointerDown = !1
        },
        r = n => {
          e.ignoreEmulatedMouseEvents = !0, e.isPointerDown && eo(n, t) && l(n), e.isPointerDown = !1
        };
      return a.addEventListener("mousedown", c, !0), a.addEventListener("mouseup", n, !0), a.addEventListener("touchstart", c, !0), a.addEventListener("touchend", r, !0), () => {
        a.removeEventListener("mousedown", c, !0), a.removeEventListener("mouseup", n, !0), a.removeEventListener("touchstart", c, !0), a.removeEventListener("touchend", r, !0)
      }
    }
  }, [t, o, c, l])
}

function eo(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    let t = e.target.ownerDocument;
    if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
  }
  return t.current && !t.current.contains(e.target)
}

function ei(e) {
  if (!e) return;
  let t = !0;
  return n => {
    e({
      ...n,
      preventDefault() {
        n.preventDefault()
      },
      isDefaultPrevented: () => n.isDefaultPrevented(),
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
      },
      continuePropagation() {
        t = !1
      }
    }), t && n.stopPropagation()
  }
}

function es(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: ei(e.onKeyDown),
      onKeyUp: ei(e.onKeyUp)
    }
  }
}

function ec(e) {
  let {
    onMoveStart: t,
    onMove: n,
    onMoveEnd: o
  } = e, i = (0, a.useRef)({
    didMove: !1,
    lastPosition: null,
    id: null
  }), {
    addGlobalListener: s,
    removeGlobalListener: c
  } = (0, r.useGlobalListeners)(), l = (0, r.useEffectEvent)((e, r, a, o) => {
    (0 !== a || 0 !== o) && (!i.current.didMove && (i.current.didMove = !0, null == t || t({
      type: "movestart",
      pointerType: r,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    })), null == n || n({
      type: "move",
      pointerType: r,
      deltaX: a,
      deltaY: o,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    }))
  }), u = (0, r.useEffectEvent)((e, t) => {
    f(), i.current.didMove && (null == o || o({
      type: "moveend",
      pointerType: t,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey
    }))
  });
  return {
    moveProps: (0, a.useMemo)(() => {
      let e = {},
        t = () => {
          p(), i.current.didMove = !1
        };
      if ("undefined" == typeof PointerEvent) {
        let n = e => {
            if (0 === e.button) {
              var t, n, r, a;
              l(e, "mouse", e.pageX - (null !== (r = null === (t = i.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (a = null === (n = i.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== a ? a : 0)), i.current.lastPosition = {
                pageX: e.pageX,
                pageY: e.pageY
              }
            }
          },
          r = e => {
            0 === e.button && (u(e, "mouse"), c(window, "mousemove", n, !1), c(window, "mouseup", r, !1))
          };
        e.onMouseDown = e => {
          0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), i.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          }, s(window, "mousemove", n, !1), s(window, "mouseup", r, !1))
        };
        let a = e => {
            let t = [...e.changedTouches].findIndex(e => {
              let {
                identifier: t
              } = e;
              return t === i.current.id
            });
            if (t >= 0) {
              var n, r, a, o;
              let {
                pageX: s,
                pageY: c
              } = e.changedTouches[t];
              l(e, "touch", s - (null !== (a = null === (n = i.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== a ? a : 0), c - (null !== (o = null === (r = i.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== o ? o : 0)), i.current.lastPosition = {
                pageX: s,
                pageY: c
              }
            }
          },
          o = e => {
            [...e.changedTouches].findIndex(e => {
              let {
                identifier: t
              } = e;
              return t === i.current.id
            }) >= 0 && (u(e, "touch"), i.current.id = null, c(window, "touchmove", a), c(window, "touchend", o), c(window, "touchcancel", o))
          };
        e.onTouchStart = e => {
          if (0 === e.changedTouches.length || null != i.current.id) return;
          let {
            pageX: n,
            pageY: r,
            identifier: c
          } = e.changedTouches[0];
          t(), e.stopPropagation(), e.preventDefault(), i.current.lastPosition = {
            pageX: n,
            pageY: r
          }, i.current.id = c, s(window, "touchmove", a, !1), s(window, "touchend", o, !1), s(window, "touchcancel", o, !1)
        }
      } else {
        let n = e => {
            if (e.pointerId === i.current.id) {
              var t, n, r, a;
              let o = e.pointerType || "mouse";
              l(e, o, e.pageX - (null !== (r = null === (t = i.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (a = null === (n = i.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== a ? a : 0)), i.current.lastPosition = {
                pageX: e.pageX,
                pageY: e.pageY
              }
            }
          },
          r = e => {
            if (e.pointerId === i.current.id) {
              let t = e.pointerType || "mouse";
              u(e, t), i.current.id = null, c(window, "pointermove", n, !1), c(window, "pointerup", r, !1), c(window, "pointercancel", r, !1)
            }
          };
        e.onPointerDown = e => {
          0 === e.button && null == i.current.id && (t(), e.stopPropagation(), e.preventDefault(), i.current.lastPosition = {
            pageX: e.pageX,
            pageY: e.pageY
          }, i.current.id = e.pointerId, s(window, "pointermove", n, !1), s(window, "pointerup", r, !1), s(window, "pointercancel", r, !1))
        }
      }
      let n = (e, n, r) => {
        t(), l(e, "keyboard", n, r), u(e, "keyboard")
      };
      return e.onKeyDown = e => {
        switch (e.key) {
          case "Left":
          case "ArrowLeft":
            e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            e.preventDefault(), e.stopPropagation(), n(e, 0, 1)
        }
      }, e
    }, [i, s, c, l, u])
  }
}

function el(e, t) {
  let {
    onScroll: n,
    isDisabled: o
  } = e, i = (0, a.useCallback)(e => {
    !e.ctrlKey && (e.preventDefault(), e.stopPropagation(), n && n({
      deltaX: e.deltaX,
      deltaY: e.deltaY
    }))
  }, [n]);
  (0, r.useEvent)(t, "wheel", o ? void 0 : i)
}

function eu(e) {
  let {
    isDisabled: t,
    onLongPressStart: n,
    onLongPressEnd: o,
    onLongPress: i,
    threshold: s = 500,
    accessibilityDescription: c
  } = e, l = (0, a.useRef)(), {
    addGlobalListener: u,
    removeGlobalListener: d
  } = (0, r.useGlobalListeners)(), {
    pressProps: p
  } = y({
    isDisabled: t,
    onPressStart(e) {
      if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
          ...e,
          type: "longpressstart"
        }), l.current = setTimeout(() => {
          e.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: !0
          })), i && i({
            ...e,
            type: "longpress"
          }), l.current = void 0
        }, s), "touch" === e.pointerType)) {
        let t = e => {
          e.preventDefault()
        };
        u(e.target, "contextmenu", t, {
          once: !0
        }), u(window, "pointerup", () => {
          setTimeout(() => {
            d(e.target, "contextmenu", t)
          }, 30)
        }, {
          once: !0
        })
      }
    },
    onPressEnd(e) {
      l.current && clearTimeout(l.current), o && ("mouse" === e.pointerType || "touch" === e.pointerType) && o({
        ...e,
        type: "longpressend"
      })
    }
  }), f = (0, r.useDescription)(i && !t ? c : void 0);
  return {
    longPressProps: (0, r.mergeProps)(p, f)
  }
}