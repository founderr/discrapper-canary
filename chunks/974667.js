"use strict";
n.r(t), n.d(t, {
  createListItemId: function() {
    return l.createListItemId
  },
  default: function() {
    return d
  }
}), n("222007");
var i = n("884691"),
  r = n("71185"),
  s = n("909283"),
  a = n("533619"),
  o = n("942367"),
  l = n("74139"),
  u = n("355262");

function c(e, t) {
  var n;
  let i = null !== (n = t.current) && void 0 !== n ? n : document,
    r = i.querySelectorAll("[".concat(l.LIST_ITEM_ID_ATTRIBUTE, '^="').concat(e, '"]'));
  return Array.from(r)
}

function d(e) {
  let {
    id: t,
    defaultFocused: n,
    isEnabled: u,
    scrollToStart: d,
    scrollToEnd: p,
    onNavigatePreviousAtStart: h,
    onNavigateNextAtEnd: f,
    setFocus: E,
    setFocusOnList: _,
    preserveFocusPosition: m = !0,
    useVirtualFocus: S = !1,
    wrap: g = !1,
    orientation: T = o.Orientations.VERTICAL,
    disableClickOnSpace: I = !1
  } = e, v = i.useRef(n ? (0, l.createListItemId)(t, n) : null), C = i.useRef(!1), A = i.useRef(null), R = i.useRef(u);

  function N(e) {
    var t;
    return (null !== (t = A.current) && void 0 !== t ? t : document).querySelector(e)
  }

  function y(e) {
    var t;
    null === (t = N(e)) || void 0 === t || t.focus()
  }
  i.useLayoutEffect(() => {
    R.current = u
  }, [u]);
  let O = i.useCallback((e, t) => {
      if (R.current) {
        let n = null != E ? E : y;
        n(e, t)
      }
    }, [E]),
    D = i.useCallback(e => {
      if (R.current) {
        let t = null != _ ? _ : y;
        t(e)
      }
    }, [_]),
    b = i.useCallback(e => {
      v.current = e;
      let n = (0, l.createSelector)(e),
        i = (0, l.getItemId)(e);
      O(n, i), (0, s.notifyFocusSubscribers)(t, i, m)
    }, [t, m, O]),
    P = i.useMemo(() => (0, r.createFocusManager)({
      getFocusableElements: () => c(t, A),
      getActiveElement() {
        var e;
        return null === (e = A.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
      },
      scrollToStart: d,
      scrollToEnd: p
    }), [t, d, p]),
    [L, M] = i.useState(!1),
    U = i.useRef(L);
  i.useLayoutEffect(() => {
    U.current = L
  }, [L]), i.useLayoutEffect(() => {
    let e = A.current;
    if (null != e) {
      if (u) return e.addEventListener("focusin", n), e.addEventListener("focusout", i), e.addEventListener("focus", r), e.addEventListener("scroll", s, {
        passive: !0
      }), () => {
        e.removeEventListener("focusin", n), e.removeEventListener("focusout", i), e.removeEventListener("focus", r), e.removeEventListener("scroll", s)
      }
    }

    function n() {
      M(!0)
    }

    function i(e) {
      !e.currentTarget.contains(e.relatedTarget) && (M(!1), requestAnimationFrame(() => {
        let e = v.current;
        if (null !== e) {
          let n = (0, l.createSelector)(e);
          null == N(n) && D((0, l.createSelector)(t, l.LIST_ID_ATTRIBUTE))
        }
      }))
    }
    async function r() {
      let e = A.current,
        n = U.current;
      if (n || null == e) return;
      let i = v.current;
      if (m && null !== i) {
        let t = (0, l.createSelector)(i),
          n = N(t);
        if (null != n) {
          if (!0 !== C.current) return O(t, (0, l.getItemId)(i));
          {
            let r = await (0, a.isItemVisible)(e, n);
            if (r) return O(t, (0, l.getItemId)(i))
          }
        }
      }
      let r = await (0, a.findFirstVisibleItem)(e, c(t, A));
      null !== r && b(r)
    }

    function s() {
      C.current = !0
    }
  }, [u, t, m, O, _, D, b]);
  let w = i.useMemo(() => ({
      wrap: g,
      get from() {
        if (!S) return;
        let t = v.current;
        if (null != t) {
          var e;
          let n = (0, l.createSelector)(t);
          return null !== (e = N(n)) && void 0 !== e ? e : void 0
        }
        return
      }
    }), [S, g]),
    k = i.useCallback(async () => {
      let e = await P.getNextFocusableElement(w),
        t = null == e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
      null != t ? b(t) : null == e && null != f && f()
    }, [P, w, f, b]),
    G = i.useCallback(async () => {
      let e = await P.getPreviousFocusableElement(w),
        t = null == e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
      null != t ? b(t) : null == e && null != h && h()
    }, [P, w, h, b]),
    x = i.useCallback(e => {
      if (!R.current || !S && !U.current) return;
      let n = T === o.Orientations.HORIZONTAL ? o.Keys.RIGHT : o.Keys.DOWN,
        i = T === o.Orientations.HORIZONTAL ? o.Keys.LEFT : o.Keys.UP;
      switch (e.key) {
        case n:
          e.stopPropagation(), e.preventDefault(), k();
          return;
        case i:
          e.stopPropagation(), e.preventDefault(), G();
          return;
        case o.Keys.HOME:
          e.stopPropagation(), e.preventDefault(), d().then(() => {
            var e;
            let n = c(t, A),
              i = null === (e = n[0]) || void 0 === e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
            null != i && b(i)
          });
          return;
        case o.Keys.END:
          e.stopPropagation(), e.preventDefault(), p().then(() => {
            var e;
            let n = c(t, A),
              i = null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.getAttribute(l.LIST_ITEM_ID_ATTRIBUTE);
            null != i && b(i)
          });
          return;
        case o.Keys.SPACE:
        case o.Keys.ENTER: {
          if (e.key === o.Keys.SPACE && I || e.repeat) return;
          let t = v.current;
          if (null != t) {
            var r;
            let n = (0, l.createSelector)(t),
              i = N(n),
              s = null !== (r = null == i ? void 0 : i.ownerDocument) && void 0 !== r ? r : document,
              a = S || i === s.activeElement;
            null != i && a && (e.preventDefault(), e.stopPropagation(), null == i || i.click())
          }
        }
      }
    }, [k, G, t, T, p, d, b, S]),
    F = i.useCallback(e => {
      let n = null != e ? (0, l.createListItemId)(t, e) : null;
      v.current = n
    }, [t]);
  return i.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: x,
      ref: A,
      tabIndex: L && m ? -1 : 0
    },
    orientation: T,
    setFocus: F,
    async focusLastVisibleItem() {
      var e;
      let n = await (0, a.findLastVisibleItem)(null !== (e = A.current) && void 0 !== e ? e : document.body, c(t, A));
      null !== n && b(n)
    },
    async focusFirstVisibleItem() {
      var e;
      let n = await (0, a.findFirstVisibleItem)(null !== (e = A.current) && void 0 !== e ? e : document.body, c(t, A));
      null !== n && b(n)
    },
    focusPreviousItem: G,
    focusNextItem: k,
    focusedItemId() {
      let e = v.current;
      return e ? (0, l.getItemId)(e) : null
    }
  }), [t, x, T, L, m, F, G, k, b])
}
n.es(u, t)