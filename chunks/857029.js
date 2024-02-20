"use strict";
n.r(t), n.d(t, {
  GridActionType: function() {
    return r.GridActionType
  },
  default: function() {
    return c
  }
}), n("222007");
var i = n("884691"),
  r = n("585463"),
  s = n("942367"),
  a = n("74139");
let o = [s.Keys.TAB];

function l(e, t, n) {
  return null != t && null != n ? "#".concat((0, a.makeGridId)(e, t, n)) : "[data-ref-id=".concat(e, "]")
}

function u(e) {
  return document.querySelector(e)
}

function c(e) {
  let {
    navId: t,
    columnCounts: n,
    focusedX: c = 0,
    focusedY: d = 0,
    onSelect: p,
    prepareFocus: h,
    getNewFocusPosition: f,
    maintainFocusPosition: E = !0,
    enabled: _ = !0,
    onDispatch: m,
    autoFocusElement: S = !0,
    useVirtualFocus: g = !1
  } = e, T = i.useCallback((e, t) => {
    let n = (0, r.default)(e, t);
    return null != m && m(e, n, t), n
  }, [m]), [I, v] = i.useReducer(T, {
    focusedX: c,
    focusedY: d,
    columnCounts: n
  }), {
    columnCounts: C,
    focusedX: A,
    focusedY: R
  } = I, [N] = i.useState(() => (0, a.throttle)(v, 16));
  return i.useEffect(() => {
      v({
        type: r.GridActionType.UPDATE_COLUMN_COUNTS,
        columnCounts: n
      })
    }, [n]),
    function(e) {
      let {
        navId: t,
        columnCounts: n,
        focusedX: c,
        focusedY: d,
        onSelect: p,
        prepareFocus: h,
        getNewFocusPosition: f,
        dispatch: E,
        maintainFocusPosition: _,
        enabled: m,
        autoFocusElement: S,
        useVirtualFocus: g
      } = e, T = i.useRef();
      T.current = m;
      let I = u(l(t, c, d)),
        [v, C] = i.useState(!1),
        [A, R] = i.useState(!1),
        [N, y] = i.useState(!1),
        [O] = i.useState(() => new a.HandlerMemoizer(e => {
          let [t, n] = e.split(",").map(Number);
          return () => {
            C(!0), E({
              type: r.GridActionType.SET_FOCUSED_POSITION,
              x: t,
              y: n
            })
          }
        }));
      i.useEffect(() => () => O.clean(), [O]);
      let D = i.useCallback(e => {
          if (!T.current || !S) return !1;
          e.focus()
        }, [S]),
        b = i.useCallback((e, n) => {
          let i = l(t, e, n),
            r = null != h ? h(e, n, i) : Promise.resolve();
          r.then(() => {
            let e = u(i);
            null != e ? (D(e), R(!1)) : requestAnimationFrame(() => R(!0))
          })
        }, [t, h, D]),
        P = i.useCallback(function() {
          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            [n, i] = null != f ? f(c, d) : [c, d];
          if ((n !== c || i !== d) && (E({
              type: r.GridActionType.SET_FOCUSED_POSITION,
              x: n,
              y: i
            }), !e)) {
            y(!0);
            return
          }
          let s = u(l(t, n, i));
          null != s && (y(!0), D(s))
        }, [E, c, d, f, t, D]),
        [L, M] = i.useState(!1);
      i.useEffect(() => {
        if (!L || !v) return;
        M(!1);
        let e = u(l(t, c, d));
        if (null != e) {
          D(e);
          return
        }
        C(!1);
        let n = u(l(t));
        null != n && D(n)
      }, [t, L, v, D, c, d]);
      let U = i.useCallback(e => {
        T.current && null == e && M(!0)
      }, []);
      i.useEffect(() => {
        v && A && null != I && (D(I), R(!1))
      }, [A, I]), i.useEffect(() => {
        v && (!N && b(c, d), y(!1))
      }, [c, d]);
      let w = i.useCallback(e => {
          if (!T.current) return;
          if (!g && o.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), P();
            return
          }
          let t = function(e) {
            switch (e.key) {
              case s.Keys.ENTER:
                return s.ActionType.SELECT_FOCUSED_ITEM;
              case s.Keys.UP:
                return s.ActionType.NAVIGATE_UP;
              case s.Keys.DOWN:
                return s.ActionType.NAVIGATE_DOWN;
              case s.Keys.RIGHT:
                return s.ActionType.NAVIGATE_RIGHT;
              case s.Keys.LEFT:
                return s.ActionType.NAVIGATE_LEFT;
              case s.Keys.HOME:
                if (e.ctrlKey) return s.ActionType.NAVIGATE_START;
                return s.ActionType.NAVIGATE_INLINE_START;
              case s.Keys.END:
                if (e.ctrlKey) return s.ActionType.NAVIGATE_END;
                return s.ActionType.NAVIGATE_INLINE_END
            }
          }(e);
          switch (t) {
            case s.ActionType.NAVIGATE_UP:
            case s.ActionType.NAVIGATE_DOWN:
            case s.ActionType.NAVIGATE_RIGHT:
            case s.ActionType.NAVIGATE_LEFT:
            case s.ActionType.NAVIGATE_INLINE_START:
            case s.ActionType.NAVIGATE_INLINE_END:
            case s.ActionType.NAVIGATE_START:
            case s.ActionType.NAVIGATE_END:
              let i = 0 === n.length || 0 === c && 0 === d && t === s.ActionType.NAVIGATE_LEFT;
              !i && (e.preventDefault(), e.stopPropagation()), E({
                type: t
              });
              return;
            case s.ActionType.SELECT_FOCUSED_ITEM:
              var r;
              if (S && (null == (r = I) ? void 0 : r.ownerDocument.activeElement) !== r || e.repeat) return;
              e.preventDefault(), e.stopPropagation(), E({
                type: t
              }), null != p ? p(c, d, e) : null != I && I.click()
          }
        }, [P, E, S, I, p, c, d]),
        k = i.useCallback(e => e.currentTarget !== e.target ? (!v && (C(!0), y(!0)), !1) : v ? (P(!1), !1) : void(_ && null != I ? b(c, d) : P(!0)), [v, _, I, P, b, c, d]),
        G = i.useCallback(e => {
          if (e.target !== e.currentTarget) {
            if (e.currentTarget.contains(e.relatedTarget)) return !1;
            C(!1)
          }
        }, []),
        x = i.useMemo(() => Math.max(...n), [n]),
        F = i.useCallback(() => ({
          role: "grid",
          "aria-rowcount": n.length,
          "aria-colcount": x,
          tabIndex: v && _ ? -1 : 0,
          "data-ref-id": t,
          onKeyDown: w,
          onFocus: k,
          onBlur: G
        }), [n.length, x, v, _, t, w, k, G]),
        V = i.useCallback((e, n) => {
          let i = {
            role: "gridcell",
            "aria-rowindex": n + 1,
            "aria-colindex": e + 1,
            id: (0, a.makeGridId)(t, e, n),
            tabIndex: _ && e === c && n === d ? 0 : -1,
            onFocus: O.get("".concat(e, ",").concat(n))
          };
          return e === c && n === d && (i.ref = U), i
        }, [t, _, c, d, O, U]),
        B = i.useCallback(e => ({
          role: "row",
          "aria-rowindex": e + 1
        }), []),
        H = i.useMemo(() => ({
          dispatch: E,
          getContainerProps: F,
          getItemProps: V,
          getRowProps: B
        }), [E, F, V, B]);
      return H
    }({
      navId: t,
      columnCounts: C,
      focusedX: A,
      focusedY: R,
      dispatch: N,
      onSelect: p,
      prepareFocus: h,
      getNewFocusPosition: f,
      maintainFocusPosition: E,
      enabled: _,
      autoFocusElement: S,
      useVirtualFocus: g
    })
}