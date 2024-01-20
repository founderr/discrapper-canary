"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("884691"),
  s = n("429787"),
  r = n("942367"),
  a = n("74139");

function o(e) {
  let {
    navId: t,
    items: n,
    initialFocusPath: o,
    onSelect: l,
    enabled: u = !0,
    closeMenu: d
  } = e, c = i.useRef(u);
  i.useLayoutEffect(() => {
    c.current = u
  }, [u]);
  let [f, _] = i.useReducer(s.default, {
    items: n,
    focusPath: o,
    focusIndex: -1
  }), h = i.useMemo(() => (0, a.throttle)(_, 30), [_]);
  i.useEffect(() => {
    _({
      type: s.MenuActionType.UPDATE_ITEMS,
      items: n
    })
  }, [n]);
  let {
    focusPath: g
  } = f, [m, E] = i.useState(!1), [p, v] = i.useState(!1), [{
    onItemFocusMemoizer: S,
    onItemMouseEnterMemoizer: T
  }] = i.useState(() => ({
    onItemFocusMemoizer: new a.HandlerMemoizer(e => () => {
      E(!0), _({
        type: s.MenuActionType.SET_FOCUS_PATH,
        path: e.split("--")
      })
    }),
    onItemMouseEnterMemoizer: new a.HandlerMemoizer(e => () => {
      v(!1), _({
        type: s.MenuActionType.SET_FOCUS_PATH,
        path: e.split("--")
      })
    })
  })), I = i.useCallback(e => {
    if (!c.current) return;
    e.key === r.Keys.ESCAPE && null != d && (e.stopPropagation(), e.preventDefault(), d());
    let n = function(e) {
      switch (e.key) {
        case r.Keys.ENTER:
        case r.Keys.SPACE:
          return r.ActionType.SELECT_FOCUSED_ITEM;
        case r.Keys.UP:
          return r.ActionType.NAVIGATE_UP;
        case r.Keys.DOWN:
          return r.ActionType.NAVIGATE_DOWN;
        case r.Keys.RIGHT:
          return r.ActionType.NAVIGATE_IN;
        case r.Keys.LEFT:
          return r.ActionType.NAVIGATE_OUT
      }
    }(e);
    switch (n) {
      case r.ActionType.NAVIGATE_UP:
      case r.ActionType.NAVIGATE_DOWN:
      case r.ActionType.NAVIGATE_IN:
      case r.ActionType.NAVIGATE_OUT:
        e.preventDefault(), e.stopPropagation(), v(!0), h({
          type: n
        });
        return;
      case r.ActionType.SELECT_FOCUSED_ITEM:
        var i, s, o, u, f;
        if (e.repeat) return;
        if (e.target.tabIndex >= 0) return;
        if (e.preventDefault(), e.stopPropagation(), v(!1), h({
            type: n
          }), null != l) {
          l(g);
          return
        }
        let _ = null !== (i = e.target.ownerDocument) && void 0 !== i ? i : document;
        let m = (u = _, f = (s = t, null != (o = g) ? "".concat((0, a.makeId)(s, o.join("--"))) : s), u.getElementById(f));
        null == m || m.click()
    }
  }, [h, t, g, l, d]), C = i.useCallback(() => {
    !m && E(!0)
  }, [m]), A = i.useCallback(e => {
    e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && m && E(!1)
  }, [m]), y = i.useCallback(() => {
    _({
      type: s.MenuActionType.SET_FOCUS_PATH,
      path: []
    }), E(!1)
  }, []), N = i.useCallback(e => e.every((e, t) => g[t] === e), [g]), R = i.useCallback(() => ({
    role: "menu",
    id: t,
    tabIndex: -1,
    onKeyDown: I,
    onFocus: C,
    onBlur: A,
    onMouseLeave: y,
    "aria-activedescendant": g.length > 0 ? (0, a.makeId)(t, g.join("--")) : void 0
  }), [t, I, C, A, y, g]), O = i.useCallback(e => {
    let {
      path: n
    } = e;
    return {
      role: "menu",
      tabIndex: -1,
      "aria-activedescendant": N(n) ? (0, a.makeId)(t, g.join("--")) : void 0,
      focusIndex: f.focusIndex,
      isUsingKeyboardNavigation: p
    }
  }, [t, g, N, f.focusIndex, p]), D = i.useCallback(e => {
    let {
      path: n,
      hasSubmenu: i = !1,
      role: s = "menuitem"
    } = e, r = n.join("--"), o = i ? {
      "aria-expanded": N(n),
      "aria-haspopup": !0
    } : {};
    return {
      ...o,
      role: s,
      id: (0, a.makeId)(t, r),
      tabIndex: -1,
      onFocus: S.get(r),
      onMouseEnter: T.get(r)
    }
  }, [t, N, S, T]), P = i.useMemo(() => ({
    dispatch: h,
    getContainerProps: R,
    getSubmenuProps: O,
    getItemProps: D,
    isFocused: N,
    isUsingKeyboardNavigation: p
  }), [h, R, O, D, N, p]);
  return P
}