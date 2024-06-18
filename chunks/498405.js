"use strict";
n.d(t, {
  ZP: function() {
    return a
  }
}), n(47120);
var i = n(470079),
  r = n(808629),
  s = n(536895),
  o = n(260866);

function a(e) {
  let {
    navId: t,
    items: n,
    initialFocusPath: a,
    onSelect: l,
    enabled: u = !0,
    closeMenu: _
  } = e, c = i.useRef(u);
  i.useLayoutEffect(() => {
    c.current = u
  }, [u]);
  let [d, E] = i.useReducer(r.Z, {
    items: n,
    focusPath: a,
    focusIndex: -1
  }), I = i.useMemo(() => (0, o.P2)(E, 30), [E]);
  i.useEffect(() => {
    E({
      type: r.B.UPDATE_ITEMS,
      items: n
    })
  }, [n]);
  let {
    focusPath: T
  } = d, [h, S] = i.useState(!1), [f, N] = i.useState(!1), [{
    onItemFocusMemoizer: A,
    onItemMouseEnterMemoizer: m
  }] = i.useState(() => ({
    onItemFocusMemoizer: new o.$o(e => () => {
      S(!0), E({
        type: r.B.SET_FOCUS_PATH,
        path: e.split("--")
      })
    }),
    onItemMouseEnterMemoizer: new o.$o(e => () => {
      N(!1), E({
        type: r.B.SET_FOCUS_PATH,
        path: e.split("--")
      })
    })
  })), O = i.useCallback(e => {
    if (!c.current) return;
    e.key === s.R8.ESCAPE && null != _ && (e.stopPropagation(), e.preventDefault(), _());
    let n = function(e) {
      switch (e.key) {
        case s.R8.ENTER:
        case s.R8.SPACE:
          return s.Us.SELECT_FOCUSED_ITEM;
        case s.R8.UP:
          return s.Us.NAVIGATE_UP;
        case s.R8.DOWN:
          return s.Us.NAVIGATE_DOWN;
        case s.R8.RIGHT:
          return s.Us.NAVIGATE_IN;
        case s.R8.LEFT:
          return s.Us.NAVIGATE_OUT
      }
    }(e);
    switch (n) {
      case s.Us.NAVIGATE_UP:
      case s.Us.NAVIGATE_DOWN:
      case s.Us.NAVIGATE_IN:
      case s.Us.NAVIGATE_OUT:
        e.preventDefault(), e.stopPropagation(), N(!0), I({
          type: n
        });
        return;
      case s.Us.SELECT_FOCUSED_ITEM:
        var i, r, a, u, d;
        if (e.repeat) return;
        if (e.target.tabIndex >= 0) return;
        if (e.preventDefault(), e.stopPropagation(), N(!1), I({
            type: n
          }), null != l) {
          l(T);
          return
        }
        let E = (u = null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document, d = (r = t, null != (a = T) ? "".concat((0, o.qR)(r, a.join("--"))) : r), u.getElementById(d));
        null == E || E.click()
    }
  }, [I, t, T, l, _]), R = i.useCallback(() => {
    !h && S(!0)
  }, [h]), p = i.useCallback(e => {
    if (e.target !== e.currentTarget) {
      if (!e.currentTarget.contains(e.relatedTarget)) h && S(!1)
    }
  }, [h]), g = i.useCallback(() => {
    E({
      type: r.B.SET_FOCUS_PATH,
      path: []
    }), S(!1)
  }, []), C = i.useCallback(e => e.every((e, t) => T[t] === e), [T]), v = i.useCallback(() => ({
    role: "menu",
    id: t,
    tabIndex: -1,
    onKeyDown: O,
    onFocus: R,
    onBlur: p,
    onMouseLeave: g,
    "aria-activedescendant": T.length > 0 ? (0, o.qR)(t, T.join("--")) : void 0
  }), [t, O, R, p, g, T]), L = i.useCallback(e => {
    let {
      path: n
    } = e;
    return {
      role: "menu",
      tabIndex: -1,
      "aria-activedescendant": C(n) ? (0, o.qR)(t, T.join("--")) : void 0,
      focusIndex: d.focusIndex,
      isUsingKeyboardNavigation: f
    }
  }, [t, T, C, d.focusIndex, f]), D = i.useCallback(e => {
    let {
      path: n,
      hasSubmenu: i = !1,
      role: r = "menuitem"
    } = e, s = n.join("--");
    return {
      ...i ? {
        "aria-expanded": C(n),
        "aria-haspopup": !0
      } : {},
      role: r,
      id: (0, o.qR)(t, s),
      tabIndex: -1,
      onFocus: A.get(s),
      onMouseEnter: m.get(s)
    }
  }, [t, C, A, m]);
  return i.useMemo(() => ({
    dispatch: I,
    getContainerProps: v,
    getSubmenuProps: L,
    getItemProps: D,
    isFocused: C,
    isUsingKeyboardNavigation: f
  }), [I, v, L, D, C, f])
}