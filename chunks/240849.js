"use strict";
n.r(t), n.d(t, {
  useId: function() {
    return d
  },
  useSlotId: function() {
    return p
  },
  chain: function() {
    return f
  },
  getOwnerDocument: function() {
    return h
  },
  getOwnerWindow: function() {
    return m
  },
  mergeProps: function() {
    return v
  },
  filterDOMProps: function() {
    return S
  },
  focusWithoutScrolling: function() {
    return w
  },
  openLink: function() {
    return F
  },
  getSyntheticLinkProps: function() {
    return j
  },
  shouldClientNavigate: function() {
    return N
  },
  useRouter: function() {
    return L
  },
  runAfterTransition: function() {
    return z
  },
  useGlobalListeners: function() {
    return B
  },
  useLabels: function() {
    return U
  },
  useObjectRef: function() {
    return H
  },
  useUpdateEffect: function() {
    return G
  },
  useLayoutEffect: function() {
    return s
  },
  useResizeObserver: function() {
    return W
  },
  useSyncRef: function() {
    return q
  },
  getScrollParent: function() {
    return Z
  },
  isScrollable: function() {
    return Y
  },
  useDescription: function() {
    return $
  },
  isMac: function() {
    return P
  },
  isIPhone: function() {
    return E
  },
  isIOS: function() {
    return M
  },
  isAppleDevice: function() {
    return R
  },
  isWebKit: function() {
    return I
  },
  isAndroid: function() {
    return O
  },
  useEvent: function() {
    return Q
  },
  scrollIntoView: function() {
    return ee
  },
  scrollIntoViewport: function() {
    return en
  },
  clamp: function() {
    return r.clamp
  },
  snapValueToStep: function() {
    return r.snapValueToStep
  },
  isVirtualClick: function() {
    return er
  },
  isVirtualPointerEvent: function() {
    return eo
  },
  useEffectEvent: function() {
    return c
  },
  useDeepMemo: function() {
    return ea
  },
  useFormReset: function() {
    return ei
  }
}), n("222007"), n("424973");
var r = n("708966"),
  o = n("884691"),
  a = n("638915"),
  i = n("493427");
let s = "undefined" != typeof document ? o.useLayoutEffect : () => {};

function c(e) {
  let t = (0, o.useRef)(null);
  return s(() => {
    t.current = e
  }, [e]), (0, o.useCallback)(function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    let o = t.current;
    return o(...n)
  }, [])
}
let l = !!("undefined" != typeof window && window.document && window.document.createElement),
  u = new Map;

function d(e) {
  let [t, n] = (0, o.useState)(e), r = (0, o.useRef)(null), i = (0, a.useSSRSafeId)(t), c = (0, o.useCallback)(e => {
    r.current = e
  }, []);
  return l && u.set(i, c), s(() => () => {
    u.delete(i)
  }, [i]), (0, o.useEffect)(() => {
    let e = r.current;
    e && (r.current = null, n(e))
  }), i
}

function p() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    t = d(),
    [n, r] = function(e) {
      let [t, n] = (0, o.useState)(e), r = (0, o.useRef)(null), a = c(() => {
        let e = r.current.next();
        if (e.done) {
          r.current = null;
          return
        }
        t === e.value ? a() : n(e.value)
      });
      s(() => {
        r.current && a()
      });
      let i = c(e => {
        r.current = e(t), a()
      });
      return [t, i]
    }(t),
    a = (0, o.useCallback)(() => {
      r(function*() {
        yield t, yield document.getElementById(t) ? t : void 0
      })
    }, [t, r]);
  return s(a, [t, a, ...e]), n
}

function f() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return function() {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
    for (let e of t) "function" == typeof e && e(...n)
  }
}
let h = e => {
    var t;
    return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
  },
  m = e => {
    if (e && "window" in e && e.window === e) return e;
    let t = h(e);
    return t.defaultView || window
  };

function v() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let r = {
    ...t[0]
  };
  for (let e = 1; e < t.length; e++) {
    let n = t[e];
    for (let e in n) {
      let t = r[e],
        o = n[e];
      "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? r[e] = f(t, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof o ? r[e] = (0, i.default)(t, o) : "id" === e && t && o ? r.id = function(e, t) {
        if (e === t) return e;
        let n = u.get(e);
        if (n) return n(t), t;
        let r = u.get(t);
        return r ? (r(e), e) : t
      }(t, o) : r[e] = void 0 !== o ? o : t
    }
  }
  return r
}
let g = new Set(["id"]),
  y = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
  b = new Set(["href", "target", "rel", "download", "ping", "referrerPolicy"]),
  x = /^(data-.*)$/;

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      labelable: n,
      isLink: r,
      propNames: o
    } = t,
    a = {};
  for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (g.has(t) || n && y.has(t) || r && b.has(t) || (null == o ? void 0 : o.has(t)) || x.test(t)) && (a[t] = e[t]);
  return a
}

function w(e) {
  if (function() {
      if (null == D) {
        D = !1;
        try {
          document.createElement("div").focus({
            get preventScroll() {
              return D = !0, !0
            }
          })
        } catch (e) {}
      }
      return D
    }()) e.focus({
    preventScroll: !0
  });
  else {
    let t = function(e) {
      for (var t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
        element: t,
        scrollTop: t.scrollTop,
        scrollLeft: t.scrollLeft
      }), t = t.parentNode;
      return r instanceof HTMLElement && n.push({
        element: r,
        scrollTop: r.scrollTop,
        scrollLeft: r.scrollLeft
      }), n
    }(e);
    e.focus(),
      function(e) {
        for (let {
            element: t,
            scrollTop: n,
            scrollLeft: r
          }
          of e) t.scrollTop = n, t.scrollLeft = r
      }(t)
  }
}
let D = null;

function C(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
}

function k(e) {
  var t;
  return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
}

function P() {
  return k(/^Mac/i)
}

function E() {
  return k(/^iPhone/i)
}

function T() {
  return k(/^iPad/i) || P() && navigator.maxTouchPoints > 1
}

function M() {
  return E() || T()
}

function R() {
  return P() || M()
}

function I() {
  return C(/AppleWebKit/i) && ! function() {
    return C(/Chrome/i)
  }()
}

function O() {
  return C(/Android/i)
}
let A = (0, o.createContext)({
  isNative: !0,
  open: function(e, t) {
    ! function(e, t) {
      if (e instanceof HTMLAnchorElement) t(e);
      else if (e.hasAttribute("data-href")) {
        let n = document.createElement("a");
        n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
      }
    }(e, e => F(e, t))
  }
});

function L() {
  return (0, o.useContext)(A)
}

function N(e, t) {
  let n = e.getAttribute("target");
  return (!n || "_self" === n) && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey
}

function F(e, t) {
  var n, r;
  let o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    {
      metaKey: a,
      ctrlKey: i,
      altKey: s,
      shiftKey: c
    } = t;
  C(/Firefox/i) && (null === (r = window.event) || void 0 === r ? void 0 : null === (n = r.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (P() ? a = !0 : i = !0);
  let l = I() && P() && !T() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: a,
    ctrlKey: i,
    altKey: s,
    shiftKey: c
  }) : new MouseEvent("click", {
    metaKey: a,
    ctrlKey: i,
    altKey: s,
    shiftKey: c,
    bubbles: !0,
    cancelable: !0
  });
  F.isOpening = o, w(e), e.dispatchEvent(l), F.isOpening = !1
}
F.isOpening = !1;

function j(e) {
  return {
    "data-href": e.href,
    "data-target": e.target,
    "data-rel": e.rel,
    "data-download": e.download,
    "data-ping": e.ping,
    "data-referrer-policy": e.referrerPolicy
  }
}
let K = new Map,
  _ = new Set;

function V() {
  if ("undefined" == typeof window) return;
  let e = t => {
    let n = K.get(t.target);
    if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), K.delete(t.target)), 0 === K.size)) {
      for (let e of _) e();
      _.clear()
    }
  };
  document.body.addEventListener("transitionrun", t => {
    let n = K.get(t.target);
    !n && (n = new Set, K.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
  }), document.body.addEventListener("transitionend", e)
}

function z(e) {
  requestAnimationFrame(() => {
    0 === K.size ? e() : _.add(e)
  })
}

function B() {
  let e = (0, o.useRef)(new Map),
    t = (0, o.useCallback)((t, n, r, o) => {
      let a = (null == o ? void 0 : o.once) ? function() {
        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
        e.current.delete(r), r(...n)
      } : r;
      e.current.set(r, {
        type: n,
        eventTarget: t,
        fn: a,
        options: o
      }), t.addEventListener(n, r, o)
    }, []),
    n = (0, o.useCallback)((t, n, r, o) => {
      var a;
      let i = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
      t.removeEventListener(n, i, o), e.current.delete(r)
    }, []),
    r = (0, o.useCallback)(() => {
      e.current.forEach((e, t) => {
        n(e.eventTarget, e.type, t, e.options)
      })
    }, [n]);
  return (0, o.useEffect)(() => r, [r]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  }
}

function U(e, t) {
  let {
    id: n,
    "aria-label": r,
    "aria-labelledby": o
  } = e;
  return n = d(n), o && r ? o = [...new Set([n, ...o.trim().split(/\s+/)])].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), !r && !o && t && (r = t), {
    id: n,
    "aria-label": r,
    "aria-labelledby": o
  }
}

function H(e) {
  let t = (0, o.useRef)();
  return (0, o.useMemo)(() => ({
    get current() {
      return t.current
    },
    set current(value) {
      t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
    }
  }), [e])
}

function G(e, t) {
  let n = (0, o.useRef)(!0),
    r = (0, o.useRef)(null);
  (0, o.useEffect)(() => (n.current = !0, () => {
    n.current = !1
  }), []), (0, o.useEffect)(() => {
    n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t
  }, t)
}
"undefined" != typeof document && ("loading" !== document.readyState ? V() : document.addEventListener("DOMContentLoaded", V));

function W(e) {
  let {
    ref: t,
    onResize: n
  } = e;
  (0, o.useEffect)(() => {
    let e = null == t ? void 0 : t.current;
    if (e) {
      if (!(void 0 !== window.ResizeObserver)) return window.addEventListener("resize", n, !1), () => {
        window.removeEventListener("resize", n, !1)
      };
      else {
        let t = new window.ResizeObserver(e => {
          e.length && n()
        });
        return t.observe(e), () => {
          e && t.unobserve(e)
        }
      }
    }
  }, [n, t])
}

function q(e, t) {
  s(() => {
    if (e && e.ref && t) return e.ref.current = t.current, () => {
      e.ref.current = null
    }
  })
}

function Z(e, t) {
  for (Y(e, t) && (e = e.parentElement); e && !Y(e, t);) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement
}

function Y(e, t) {
  let n = window.getComputedStyle(e),
    r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
  return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
}
"undefined" != typeof document && window.visualViewport;
let J = 0,
  X = new Map;

function $(e) {
  let [t, n] = (0, o.useState)(void 0);
  return s(() => {
    if (!e) return;
    let t = X.get(e);
    if (t) n(t.element.id);
    else {
      let r = "react-aria-description-".concat(J++);
      n(r);
      let o = document.createElement("div");
      o.id = r, o.style.display = "none", o.textContent = e, document.body.appendChild(o), t = {
        refCount: 0,
        element: o
      }, X.set(e, t)
    }
    return t.refCount++, () => {
      0 == --t.refCount && (t.element.remove(), X.delete(e))
    }
  }, [e]), {
    "aria-describedby": e ? t : void 0
  }
}

function Q(e, t, n, r) {
  let a = c(n),
    i = null == n;
  (0, o.useEffect)(() => {
    if (i) return;
    let n = e.current;
    return n.addEventListener(t, a, r), () => {
      n.removeEventListener(t, a, r)
    }
  }, [e, t, r, i, a])
}

function ee(e, t) {
  let n = et(e, t, "left"),
    r = et(e, t, "top"),
    o = t.offsetWidth,
    a = t.offsetHeight,
    i = e.scrollLeft,
    s = e.scrollTop,
    {
      borderTopWidth: c,
      borderLeftWidth: l
    } = getComputedStyle(e),
    u = e.scrollLeft + parseInt(l, 10),
    d = e.scrollTop + parseInt(c, 10),
    p = u + e.clientWidth,
    f = d + e.clientHeight;
  n <= i ? i = n - parseInt(l, 10) : n + o > p && (i += n + o - p), r <= d ? s = r - parseInt(c, 10) : r + a > f && (s += r + a - f), e.scrollLeft = i, e.scrollTop = s
}

function et(e, t, n) {
  let r = "left" === n ? "offsetLeft" : "offsetTop",
    o = 0;
  for (; t.offsetParent && (o += t[r], t.offsetParent !== e);) {
    ;
    if (t.offsetParent.contains(e)) {
      o -= e[r];
      break
    }
    t = t.offsetParent
  }
  return o
}

function en(e, t) {
  if (document.contains(e)) {
    let i = document.scrollingElement || document.documentElement;
    if ("hidden" === window.getComputedStyle(i).overflow) {
      let t = Z(e);
      for (; e && t && e !== i && t !== i;) ee(t, e), t = Z(e = t)
    } else {
      var n, r, o, a;
      let {
        left: i,
        top: s
      } = e.getBoundingClientRect();
      null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, {
        block: "nearest"
      });
      let {
        left: c,
        top: l
      } = e.getBoundingClientRect();
      (Math.abs(i - c) > 1 || Math.abs(s - l) > 1) && (null == t || null === (o = t.containingElement) || void 0 === o || null === (r = o.scrollIntoView) || void 0 === r || r.call(o, {
        block: "center",
        inline: "center"
      }), null === (a = e.scrollIntoView) || void 0 === a || a.call(e, {
        block: "nearest"
      }))
    }
  }
}

function er(e) {
  return 0 === e.mozInputSource && !!e.isTrusted || (O() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
}

function eo(e) {
  return !O() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
}

function ea(e, t) {
  let n = (0, o.useRef)(null);
  return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e
}

function ei(e, t, n) {
  let r = (0, o.useRef)(t),
    a = c(() => {
      n && n(r.current)
    });
  (0, o.useEffect)(() => {
    var t;
    let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
    return null == n || n.addEventListener("reset", a), () => {
      null == n || n.removeEventListener("reset", a)
    }
  }, [e, a])
}