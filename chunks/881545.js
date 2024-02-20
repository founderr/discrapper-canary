"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("884691"),
  r = n("429787"),
  s = n("942367"),
  a = n("74139");

function o(e) {
  let {
    navId: t,
    items: n,
    initialFocusPath: o,
    onSelect: l,
    enabled: u = !0,
    closeMenu: c
  } = e, d = i.useRef(u);
  i.useLayoutEffect(() => {
    d.current = u
  }, [u]);
  let [p, h] = i.useReducer(r.default, {
    items: n,
    focusPath: o,
    focusIndex: -1
  }), f = i.useMemo(() => (0, a.throttle)(h, 30), [h]);
  i.useEffect(() => {
    h({
      type: r.MenuActionType.UPDATE_ITEMS,
      items: n
    })
  }, [n]);
  let {
    focusPath: E
  } = p, [_, m] = i.useState(!1), [S, g] = i.useState(!1), [{
    onItemFocusMemoizer: T,
    onItemMouseEnterMemoizer: I
  }] = i.useState(() => ({
    onItemFocusMemoizer: new a.HandlerMemoizer(e => () => {
      m(!0), h({
        type: r.MenuActionType.SET_FOCUS_PATH,
        path: e.split("--")
      })
    }),
    onItemMouseEnterMemoizer: new a.HandlerMemoizer(e => () => {
      g(!1), h({
        type: r.MenuActionType.SET_FOCUS_PATH,
        path: e.split("--")
      })
    })
  })), v = i.useCallback(e => {
    if (!d.current) return;
    e.key === s.Keys.ESCAPE && null != c && (e.stopPropagation(), e.preventDefault(), c());
    let n = function(e) {
      switch (e.key) {
        case s.Keys.ENTER:
        case s.Keys.SPACE:
          return s.ActionType.SELECT_FOCUSED_ITEM;
        case s.Keys.UP:
          return s.ActionType.NAVIGATE_UP;
        case s.Keys.DOWN:
          return s.ActionType.NAVIGATE_DOWN;
        case s.Keys.RIGHT:
          return s.ActionType.NAVIGATE_IN;
        case s.Keys.LEFT:
          return s.ActionType.NAVIGATE_OUT
      }
    }(e);
    switch (n) {
      case s.ActionType.NAVIGATE_UP:
      case s.ActionType.NAVIGATE_DOWN:
      case s.ActionType.NAVIGATE_IN:
      case s.ActionType.NAVIGATE_OUT:
        e.preventDefault(), e.stopPropagation(), g(!0), f({
          type: n
        });
        return;
      case s.ActionType.SELECT_FOCUSED_ITEM:
        var i, r, o, u, p;
        if (e.repeat) return;
        if (e.target.tabIndex >= 0) return;
        if (e.preventDefault(), e.stopPropagation(), g(!1), f({
            type: n
          }), null != l) {
          l(E);
          return
        }
        let h = null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document;
        let _ = (u = h, p = (r = t, null != (o = E) ? "".concat((0, a.makeId)(r, o.join("--"))) : r), u.getElementById(p));
        null == _ || _.click()
    }
  }, [f, t, E, l, c]), C = i.useCallback(() => {
    !_ && m(!0)
  }, [_]), A = i.useCallback(e => {
    e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && _ && m(!1)
  }, [_]), R = i.useCallback(() => {
    h({
      type: r.MenuActionType.SET_FOCUS_PATH,
      path: []
    }), m(!1)
  }, []), N = i.useCallback(e => e.every((e, t) => E[t] === e), [E]), y = i.useCallback(() => ({
    role: "menu",
    id: t,
    tabIndex: -1,
    onKeyDown: v,
    onFocus: C,
    onBlur: A,
    onMouseLeave: R,
    "aria-activedescendant": E.length > 0 ? (0, a.makeId)(t, E.join("--")) : void 0
  }), [t, v, C, A, R, E]), O = i.useCallback(e => {
    let {
      path: n
    } = e;
    return {
      role: "menu",
      tabIndex: -1,
      "aria-activedescendant": N(n) ? (0, a.makeId)(t, E.join("--")) : void 0,
      focusIndex: p.focusIndex,
      isUsingKeyboardNavigation: S
    }
  }, [t, E, N, p.focusIndex, S]), D = i.useCallback(e => {
    let {
      path: n,
      hasSubmenu: i = !1,
      role: r = "menuitem"
    } = e, s = n.join("--"), o = i ? {
      "aria-expanded": N(n),
      "aria-haspopup": !0
    } : {};
    return {
      ...o,
      role: r,
      id: (0, a.makeId)(t, s),
      tabIndex: -1,
      onFocus: T.get(s),
      onMouseEnter: I.get(s)
    }
  }, [t, N, T, I]), b = i.useMemo(() => ({
    dispatch: f,
    getContainerProps: y,
    getSubmenuProps: O,
    getItemProps: D,
    isFocused: N,
    isUsingKeyboardNavigation: S
  }), [f, y, O, D, N, S]);
  return b
}