n.d(t, {
  ZP: function() {
    return d
  }
}), n(47120);
var l = n(470079),
  i = n(714319),
  s = n(536895),
  a = n(260866);
let r = [s.R8.TAB, s.R8.UP, s.R8.DOWN];

function o(e, t, n) {
  return null != n ? "#".concat(e(t, n)) : "#".concat(t)
}

function c(e) {
  return document.querySelector(e)
}

function u(e) {
  var t;
  null === (t = document.getElementById(e)) || void 0 === t || t.focus()
}

function d(e) {
  let {
    navId: t,
    itemCount: n,
    focusedIndex: d = 0,
    onSelect: h,
    setFocus: m,
    getNewFocusIndex: p,
    maintainFocusPosition: E = !0,
    includeSetSizes: g = !0,
    focusOnMount: f = !0,
    enabled: C = !0,
    onDispatch: _
  } = e, I = l.useCallback((e, t) => {
    let n = (0, i.Z)(e, t);
    return null != _ && _(e, n, t), n
  }, [_]), [x, T] = l.useReducer(I, {
    focusedIndex: d,
    itemCount: n
  }), {
    itemCount: N,
    focusedIndex: Z
  } = x, [S] = l.useState(() => (0, a.P2)(T, 16));
  return l.useEffect(() => {
      T({
        type: i.G.UPDATE_ITEM_COUNT,
        itemCount: n
      })
    }, [n]),
    function(e) {
      let {
        navId: t,
        itemCount: n,
        focusedIndex: d,
        onSelect: h,
        setFocus: m = u,
        getNewFocusIndex: p,
        dispatch: E,
        maintainFocusPosition: g,
        includeSetSizes: f,
        focusOnMount: C,
        enabled: _,
        makeId: I = a.qR,
        getIndexFromId: x
      } = e, T = l.useRef(n), N = l.useRef(x);
      N.current = x, T.current = n;
      let Z = l.useRef();
      l.useEffect(() => {
        Z.current = _
      }, [_]);
      let [S, v] = l.useState(!1), [A] = l.useState(() => new a.$o(e => () => {
        let t = null != N.current && "string" == typeof e ? N.current(e) : e;
        "number" == typeof t && !(t < 0) && E({
          type: i.G.SET_FOCUSED_INDEX,
          index: t
        })
      }));
      l.useEffect(() => () => A.clean(), [A]);
      let M = l.useCallback((e, t) => {
          Z.current && m(e, t)
        }, [m]),
        [R, j] = l.useState(!0);
      l.useEffect(() => {
        if (R && !C) {
          j(!1);
          return
        }
        M(I(t, d), d)
      }, [d]);
      let L = l.useCallback(function() {
          let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            n = null != p ? p(d) : d;
          n !== d && E({
            type: i.G.SET_FOCUSED_INDEX,
            index: n
          }), e && M(I(t, n), n)
        }, [I, d, p, E, t, M]),
        O = l.useCallback(e => {
          if (!Z.current) return;
          if (r.includes(e.key) && !(e.shiftKey || e.altKey || e.metaKey || e.ctrlKey) && e.currentTarget === e.target) {
            e.preventDefault(), e.stopPropagation(), L();
            return
          }
          let n = function(e) {
            switch (e.key) {
              case s.R8.ENTER:
              case s.R8.SPACE:
                return s.Us.SELECT_FOCUSED_ITEM;
              case s.R8.UP:
                return s.Us.NAVIGATE_UP;
              case s.R8.DOWN:
                return s.Us.NAVIGATE_DOWN;
              case s.R8.HOME:
                return s.Us.NAVIGATE_START;
              case s.R8.END:
                return s.Us.NAVIGATE_END
            }
          }(e);
          switch (n) {
            case s.Us.NAVIGATE_UP:
            case s.Us.NAVIGATE_DOWN:
            case s.Us.NAVIGATE_START:
            case s.Us.NAVIGATE_END:
              e.preventDefault(), e.stopPropagation(), E({
                type: n
              });
              return;
            case s.Us.SELECT_FOCUSED_ITEM:
              var l;
              let i = c(o(I, t, d));
              if ((null == (l = i) ? void 0 : l.ownerDocument.activeElement) !== l || e.repeat) return;
              if (e.preventDefault(), e.stopPropagation(), E({
                  type: n
                }), null != h) {
                h(d);
                return
              }
              null == i || i.click()
          }
        }, [I, t, E, d, L, h]),
        P = l.useCallback(() => {
          S || v(!0)
        }, [S]),
        b = l.useCallback(() => {
          if (!S) g ? M(I(t, d), d) : L(!0)
        }, [I, t, M, g, S, d, L]),
        y = l.useCallback(e => {
          if (!e.currentTarget.contains(e.relatedTarget)) requestAnimationFrame(() => {
            if (null == c(o(I, t, d))) {
              M(t);
              return
            }
            v(!1)
          })
        }, [I, t, d, M]),
        D = l.useRef(null);
      l.useLayoutEffect(() => {
        let e = D.current;
        if (null != e) return e.addEventListener("focusin", P), e.addEventListener("focus", b), e.addEventListener("focusout", y), () => {
          e.removeEventListener("focusin", P), e.removeEventListener("focus", b), e.removeEventListener("focusout", y)
        }
      }, [b, P, y]);
      let U = l.useCallback(() => ({
          role: "list",
          tabIndex: S && g ? -1 : 0,
          id: t,
          onKeyDown: O,
          ref: D
        }), [t, S, O, g]),
        k = l.useCallback(e => {
          let {
            index: n
          } = e;
          return {
            role: "listitem",
            "aria-setsize": f ? T.current : void 0,
            "aria-posinset": f ? n + 1 : void 0,
            id: I(t, n),
            tabIndex: g && n === d ? 0 : -1,
            onFocus: A.get(null != N.current ? I(t, n) : n)
          }
        }, [I, t, d, g, A, f]);
      return l.useMemo(() => ({
        dispatch: E,
        getContainerProps: U,
        getItemProps: k
      }), [E, U, k])
    }({
      navId: t,
      itemCount: N,
      focusedIndex: Z,
      dispatch: S,
      onSelect: h,
      setFocus: m,
      getNewFocusIndex: p,
      maintainFocusPosition: E,
      includeSetSizes: g,
      focusOnMount: f,
      enabled: C
    })
}