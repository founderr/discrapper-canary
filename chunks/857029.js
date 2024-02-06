"use strict";
n.r(t), n.d(t, {
  GridActionType: function() {
    return s.GridActionType
  },
  default: function() {
    return d
  }
}), n("222007");
var i = n("884691"),
  s = n("585463"),
  r = n("942367"),
  a = n("74139");
let o = [r.Keys.TAB];

function l(e, t, n) {
  return null != t && null != n ? "#".concat((0, a.makeGridId)(e, t, n)) : "[data-ref-id=".concat(e, "]")
}

function u(e) {
  return document.querySelector(e)
}

function d(e) {
  let {
    navId: t,
    columnCounts: n,
    focusedX: d = 0,
    focusedY: c = 0,
    onSelect: f,
    prepareFocus: _,
    getNewFocusPosition: h,
    maintainFocusPosition: g = !0,
    enabled: m = !0,
    onDispatch: E,
    autoFocusElement: p = !0,
    useVirtualFocus: v = !1
  } = e, S = i.useCallback((e, t) => {
    let n = (0, s.default)(e, t);
    return null != E && E(e, n, t), n
  }, [E]), [T, I] = i.useReducer(S, {
    focusedX: d,
    focusedY: c,
    columnCounts: n
  }), {
    columnCounts: C,
    focusedX: A,
    focusedY: y
  } = T, [N] = i.useState(() => (0, a.throttle)(I, 16));
  return i.useEffect(() => {
      I({
        type: s.GridActionType.UPDATE_COLUMN_COUNTS,
        columnCounts: n
      })
    }, [n]),
    function(e) {
      let {
        navId: t,
        columnCounts: n,
        focusedX: d,
        focusedY: c,
        onSelect: f,
        prepareFocus: _,
        getNewFocusPosition: h,
        dispatch: g,
        maintainFocusPosition: m,
        enabled: E,
        autoFocusElement: p,
        useVirtualFocus: v
      } = e, S = i.useRef();
      S.current = E;
      let T = u(l(t, d, c)),
        [I, C] = i.useState(!1),
        [A, y] = i.useState(!1),
        [N, R] = i.useState(!1),
        [D] = i.useState(() => new a.HandlerMemoizer(e => {
          let [t, n] = e.split(",").map(Number);
          return () => {
            C(!0), g({
              type: s.GridActionType.SET_FOCUSED_POSITION,
              x: t,
              y: n
            })
          }
        }));
      i.useEffect(() => () => D.clean(), [D]);
      let O = i.useCallback(e => {
          if (!S.current || !p) return !1;
          e.focus()
        }, [p]),
        P = i.useCallback((e, n) => {
          let i = l(t, e, n),
            s = null != _ ? _(e, n, i) : Promise.resolve();
          s.then(() => {
            let e = u(i);
            null != e ? (O(e), y(!1)) : requestAnimationFrame(() => y(!0))
          })
        }, [t, _, O]),
        b = i.useCallback(function() {
          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            [n, i] = null != h ? h(d, c) : [d, c];
          if ((n !== d || i !== c) && (g({
              type: s.GridActionType.SET_FOCUSED_POSITION,
              x: n,
              y: i
            }), !e)) {
            R(!0);
            return
          }
          let r = u(l(t, n, i));
          null != r && (R(!0), O(r))
        }, [g, d, c, h, t, O]),
        [L, M] = i.useState(!1);
      i.useEffect(() => {
        if (!L || !I) return;
        M(!1);
        let e = u(l(t, d, c));
        if (null != e) {
          O(e);
          return
        }
        C(!1);
        let n = u(l(t));
        null != n && O(n)
      }, [t, L, I, O, d, c]);
      let U = i.useCallback(e => {
        S.current && null == e && M(!0)
      }, []);
      i.useEffect(() => {
        I && A && null != T && (O(T), y(!1))
      }, [A, T]), i.useEffect(() => {
        I && (!N && P(d, c), R(!1))
      }, [d, c]);
      let k = i.useCallback(e => {
          if (!S.current) return;
          if (!v && o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), b();
            return
          }
          let t = function(e) {
            switch (e.key) {
              case r.Keys.ENTER:
                return r.ActionType.SELECT_FOCUSED_ITEM;
              case r.Keys.UP:
                return r.ActionType.NAVIGATE_UP;
              case r.Keys.DOWN:
                return r.ActionType.NAVIGATE_DOWN;
              case r.Keys.RIGHT:
                return r.ActionType.NAVIGATE_RIGHT;
              case r.Keys.LEFT:
                return r.ActionType.NAVIGATE_LEFT;
              case r.Keys.HOME:
                if (e.ctrlKey) return r.ActionType.NAVIGATE_START;
                return r.ActionType.NAVIGATE_INLINE_START;
              case r.Keys.END:
                if (e.ctrlKey) return r.ActionType.NAVIGATE_END;
                return r.ActionType.NAVIGATE_INLINE_END
            }
          }(e);
          switch (t) {
            case r.ActionType.NAVIGATE_UP:
            case r.ActionType.NAVIGATE_DOWN:
            case r.ActionType.NAVIGATE_RIGHT:
            case r.ActionType.NAVIGATE_LEFT:
            case r.ActionType.NAVIGATE_INLINE_START:
            case r.ActionType.NAVIGATE_INLINE_END:
            case r.ActionType.NAVIGATE_START:
            case r.ActionType.NAVIGATE_END:
              let i = 0 === n.length || 0 === d && 0 === c && t === r.ActionType.NAVIGATE_LEFT;
              !i && (e.preventDefault(), e.stopPropagation()), g({
                type: t
              });
              return;
            case r.ActionType.SELECT_FOCUSED_ITEM:
              var s;
              if (p && (null == (s = T) ? void 0 : s.ownerDocument.activeElement) !== s || e.repeat) return;
              e.preventDefault(), e.stopPropagation(), g({
                type: t
              }), null != f ? f(d, c, e) : null != T && T.click()
          }
        }, [b, g, p, T, f, d, c]),
        w = i.useCallback(e => e.currentTarget !== e.target ? (!I && (C(!0), R(!0)), !1) : I ? (b(!1), !1) : void(m && null != T ? P(d, c) : b(!0)), [I, m, T, b, P, d, c]),
        V = i.useCallback(e => {
          if (e.target !== e.currentTarget) {
            if (e.currentTarget.contains(e.relatedTarget)) return !1;
            C(!1)
          }
        }, []),
        G = i.useMemo(() => Math.max(...n), [n]),
        F = i.useCallback(() => ({
          role: "grid",
          "aria-rowcount": n.length,
          "aria-colcount": G,
          tabIndex: I && m ? -1 : 0,
          "data-ref-id": t,
          onKeyDown: k,
          onFocus: w,
          onBlur: V
        }), [n.length, G, I, m, t, k, w, V]),
        x = i.useCallback((e, n) => {
          let i = {
            role: "gridcell",
            "aria-rowindex": n + 1,
            "aria-colindex": e + 1,
            id: (0, a.makeGridId)(t, e, n),
            tabIndex: m && e === d && n === c ? 0 : -1,
            onFocus: D.get("".concat(e, ",").concat(n))
          };
          return e === d && n === c && (i.ref = U), i
        }, [t, m, d, c, D, U]),
        B = i.useCallback(e => ({
          role: "row",
          "aria-rowindex": e + 1
        }), []),
        H = i.useMemo(() => ({
          dispatch: g,
          getContainerProps: F,
          getItemProps: x,
          getRowProps: B
        }), [g, F, x, B]);
      return H
    }({
      navId: t,
      columnCounts: C,
      focusedX: A,
      focusedY: y,
      dispatch: N,
      onSelect: f,
      prepareFocus: _,
      getNewFocusPosition: h,
      maintainFocusPosition: g,
      enabled: m,
      autoFocusElement: p,
      useVirtualFocus: v
    })
}