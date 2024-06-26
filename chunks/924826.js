"use strict";
n.d(t, {
  ZP: function() {
    return _
  }
}), n(47120);
var i = n(470079),
  r = n(372817),
  s = n(25441),
  o = n(585627),
  a = n(536895),
  l = n(260866);

function u(e, t) {
  var n;
  return Array.from((null !== (n = t.current) && void 0 !== n ? n : document).querySelectorAll("[".concat(l.ie, '^="').concat(e, '"]')))
}

function _(e) {
  let {
    id: t,
    defaultFocused: n,
    isEnabled: _,
    scrollToStart: c,
    scrollToEnd: d,
    onNavigatePreviousAtStart: E,
    onNavigateNextAtEnd: I,
    setFocus: T,
    setFocusOnList: h,
    preserveFocusPosition: f = !0,
    useVirtualFocus: S = !1,
    wrap: N = !1,
    orientation: A = a.hy.VERTICAL,
    disableClickOnSpace: m = !1
  } = e, O = i.useRef(n ? (0, l.jb)(t, n) : null), p = i.useRef(!1), R = i.useRef(null), g = i.useRef(_);

  function C(e) {
    var t;
    return (null !== (t = R.current) && void 0 !== t ? t : document).querySelector(e)
  }

  function v(e) {
    var t;
    null === (t = C(e)) || void 0 === t || t.focus()
  }
  i.useLayoutEffect(() => {
    g.current = _
  }, [_]);
  let L = i.useCallback((e, t) => {
      g.current && (null != T ? T : v)(e, t)
    }, [T]),
    D = i.useCallback(e => {
      g.current && (null != h ? h : v)(e)
    }, [h]),
    M = i.useCallback(e => {
      O.current = e;
      let n = (0, l.P1)(e),
        i = (0, l.x3)(e);
      L(n, i), (0, s.h)(t, i, f)
    }, [t, f, L]),
    P = i.useMemo(() => (0, r.E)({
      getFocusableElements: () => u(t, R),
      getActiveElement() {
        var e;
        return null === (e = R.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
      },
      scrollToStart: c,
      scrollToEnd: d
    }), [t, c, d]),
    [y, U] = i.useState(!1),
    b = i.useRef(y);
  i.useLayoutEffect(() => {
    b.current = y
  }, [y]), i.useLayoutEffect(() => {
    let e = R.current;
    if (null != e) {
      if (!_) return;
      return e.addEventListener("focusin", n), e.addEventListener("focusout", i), e.addEventListener("focus", r), e.addEventListener("scroll", s, {
        passive: !0
      }), () => {
        e.removeEventListener("focusin", n), e.removeEventListener("focusout", i), e.removeEventListener("focus", r), e.removeEventListener("scroll", s)
      }
    }

    function n() {
      U(!0)
    }

    function i(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) U(!1), requestAnimationFrame(() => {
        let e = O.current;
        null !== e && null == C((0, l.P1)(e)) && D((0, l.P1)(t, l.kn))
      })
    }
    async function r() {
      let e = R.current;
      if (b.current || null == e) return;
      let n = O.current;
      if (f && null !== n) {
        let t = (0, l.P1)(n),
          i = C(t);
        if (null != i) {
          if (!0 !== p.current) return L(t, (0, l.x3)(n));
          if (await (0, o.JJ)(e, i)) return L(t, (0, l.x3)(n))
        }
      }
      let i = await (0, o.KG)(e, u(t, R));
      null !== i && M(i)
    }

    function s() {
      p.current = !0
    }
  }, [_, t, f, L, h, D, M]);
  let G = i.useMemo(() => ({
      wrap: N,
      get from() {
        if (!S) return;
        let t = O.current;
        if (null != t) {
          var e;
          return null !== (e = C((0, l.P1)(t))) && void 0 !== e ? e : void 0
        }
        return
      }
    }), [S, N]),
    w = i.useCallback(async () => {
      let e = await P.getNextFocusableElement(G),
        t = null == e ? void 0 : e.getAttribute(l.ie);
      null != t ? M(t) : null == e && null != I && I()
    }, [P, G, I, M]),
    x = i.useCallback(async () => {
      let e = await P.getPreviousFocusableElement(G),
        t = null == e ? void 0 : e.getAttribute(l.ie);
      null != t ? M(t) : null == e && null != E && E()
    }, [P, G, E, M]),
    B = i.useCallback(e => {
      if (!g.current || !S && !b.current) return;
      let n = A === a.hy.HORIZONTAL ? a.R8.RIGHT : a.R8.DOWN,
        i = A === a.hy.HORIZONTAL ? a.R8.LEFT : a.R8.UP;
      switch (e.key) {
        case n:
          e.stopPropagation(), e.preventDefault(), w();
          return;
        case i:
          e.stopPropagation(), e.preventDefault(), x();
          return;
        case a.R8.HOME:
          e.stopPropagation(), e.preventDefault(), c().then(() => {
            var e;
            let n = null === (e = u(t, R)[0]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
            null != n && M(n)
          });
          return;
        case a.R8.END:
          e.stopPropagation(), e.preventDefault(), d().then(() => {
            var e;
            let n = u(t, R),
              i = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.ie);
            null != i && M(i)
          });
          return;
        case a.R8.SPACE:
        case a.R8.ENTER: {
          if (e.key === a.R8.SPACE && m || e.repeat) return;
          let t = O.current;
          if (null != t) {
            var r;
            let n = C((0, l.P1)(t)),
              i = null !== (r = null == n ? void 0 : n.ownerDocument) && void 0 !== r ? r : document,
              s = S || n === i.activeElement;
            null != n && s && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
          }
        }
      }
    }, [w, x, t, A, d, c, M, S]),
    k = i.useCallback(e => {
      let n = null != e ? (0, l.jb)(t, e) : null;
      O.current = n
    }, [t]);
  return i.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: B,
      ref: R,
      tabIndex: y && f ? -1 : 0
    },
    orientation: A,
    setFocus: k,
    async focusLastVisibleItem() {
      var e;
      let n = await (0, o.jo)(null !== (e = R.current) && void 0 !== e ? e : document.body, u(t, R));
      null !== n && M(n)
    },
    async focusFirstVisibleItem() {
      var e;
      let n = await (0, o.KG)(null !== (e = R.current) && void 0 !== e ? e : document.body, u(t, R));
      null !== n && M(n)
    },
    focusPreviousItem: x,
    focusNextItem: w,
    focusedItemId() {
      let e = O.current;
      return e ? (0, l.x3)(e) : null
    }
  }), [t, B, A, y, f, k, x, w, M])
}