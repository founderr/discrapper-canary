"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("884691"),
  r = n("134322"),
  s = n("942367"),
  a = n("74139");
let o = [s.Keys.TAB, s.Keys.UP, s.Keys.DOWN];

function l(e, t, n) {
  return null != n ? "#".concat(e(t, n)) : "#".concat(t)
}

function u(e) {
  return document.querySelector(e)
}

function c(e) {
  var t;
  null === (t = document.getElementById(e)) || void 0 === t || t.focus()
}

function d(e) {
  let {
    navId: t,
    itemCount: n,
    focusedIndex: d = 0,
    onSelect: p,
    setFocus: h,
    getNewFocusIndex: f,
    maintainFocusPosition: E = !0,
    includeSetSizes: _ = !0,
    focusOnMount: m = !0,
    enabled: S = !0,
    onDispatch: g
  } = e, T = i.useCallback((e, t) => {
    let n = (0, r.default)(e, t);
    return null != g && g(e, n, t), n
  }, [g]), [I, v] = i.useReducer(T, {
    focusedIndex: d,
    itemCount: n
  }), {
    itemCount: C,
    focusedIndex: A
  } = I, [R] = i.useState(() => (0, a.throttle)(v, 16));
  return i.useEffect(() => {
      v({
        type: r.ListActionType.UPDATE_ITEM_COUNT,
        itemCount: n
      })
    }, [n]),
    function(e) {
      let {
        navId: t,
        itemCount: n,
        focusedIndex: d,
        onSelect: p,
        setFocus: h = c,
        getNewFocusIndex: f,
        dispatch: E,
        maintainFocusPosition: _,
        includeSetSizes: m,
        focusOnMount: S,
        enabled: g,
        makeId: T = a.makeId,
        getIndexFromId: I
      } = e, v = i.useRef(n), C = i.useRef(I);
      C.current = I, v.current = n;
      let A = i.useRef();
      i.useEffect(() => {
        A.current = g
      }, [g]);
      let [R, N] = i.useState(!1), [y] = i.useState(() => new a.HandlerMemoizer(e => () => {
        let t = null != C.current && "string" == typeof e ? C.current(e) : e;
        "number" == typeof t && !(t < 0) && E({
          type: r.ListActionType.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      i.useEffect(() => () => y.clean(), [y]);
      let O = i.useCallback((e, t) => {
          A.current && h(e, t)
        }, [h]),
        [D, b] = i.useState(!0);
      i.useEffect(() => {
        if (D && !S) {
          b(!1);
          return
        }
        O(T(t, d), d)
      }, [d]);
      let P = i.useCallback(function() {
          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            n = null != f ? f(d) : d;
          n !== d && E({
            type: r.ListActionType.SET_FOCUSED_INDEX,
            index: n
          }), e && O(T(t, n), n)
        }, [T, d, f, E, t, O]),
        L = i.useCallback(e => {
          if (!A.current) return;
          if (o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), P();
            return
          }
          let n = function(e) {
            switch (e.key) {
              case s.Keys.ENTER:
              case s.Keys.SPACE:
                return s.ActionType.SELECT_FOCUSED_ITEM;
              case s.Keys.UP:
                return s.ActionType.NAVIGATE_UP;
              case s.Keys.DOWN:
                return s.ActionType.NAVIGATE_DOWN;
              case s.Keys.HOME:
                return s.ActionType.NAVIGATE_START;
              case s.Keys.END:
                return s.ActionType.NAVIGATE_END
            }
          }(e);
          switch (n) {
            case s.ActionType.NAVIGATE_UP:
            case s.ActionType.NAVIGATE_DOWN:
            case s.ActionType.NAVIGATE_START:
            case s.ActionType.NAVIGATE_END:
              e.preventDefault(), e.stopPropagation(), E({
                type: n
              });
              return;
            case s.ActionType.SELECT_FOCUSED_ITEM:
              var i;
              let r = u(l(T, t, d));
              if ((null == (i = r) ? void 0 : i.ownerDocument.activeElement) !== i || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), E({
                  type: n
                }), null != p) {
                p(d);
                return
              }
              null == r || r.click()
          }
        }, [T, t, E, d, P, p]),
        M = i.useCallback(() => {
          R || N(!0)
        }, [R]),
        U = i.useCallback(() => {
          !R && (_ ? O(T(t, d), d) : P(!0))
        }, [T, t, O, _, R, d, P]),
        w = i.useCallback(e => {
          !e.currentTarget.contains(e.relatedTarget) && requestAnimationFrame(() => {
            if (null == u(l(T, t, d))) {
              O(t);
              return
            }
            N(!1)
          })
        }, [T, t, d, O]),
        k = i.useRef(null);
      i.useLayoutEffect(() => {
        let e = k.current;
        if (null != e) return e.addEventListener("focusin", M), e.addEventListener("focus", U), e.addEventListener("focusout", w), () => {
          e.removeEventListener("focusin", M), e.removeEventListener("focus", U), e.removeEventListener("focusout", w)
        }
      }, [U, M, w]);
      let G = i.useCallback(() => ({
          role: "list",
          tabIndex: R && _ ? -1 : 0,
          id: t,
          onKeyDown: L,
          ref: k
        }), [t, R, L, _]),
        x = i.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": m ? v.current : void 0,
            "aria-posinset": m ? n + 1 : void 0,
            id: T(t, n),
            tabIndex: _ && n === d ? 0 : -1,
            onFocus: y.get(null != C.current ? T(t, n) : n)
          }
        }, [T, t, d, _, y, m]),
        F = i.useMemo(() => ({
          dispatch: E,
          getContainerProps: G,
          getItemProps: x
        }), [E, G, x]);
      return F
    }({
      navId: t,
      itemCount: C,
      focusedIndex: A,
      dispatch: R,
      onSelect: p,
      setFocus: h,
      getNewFocusIndex: f,
      maintainFocusPosition: E,
      includeSetSizes: _,
      focusOnMount: m,
      enabled: S
    })
}