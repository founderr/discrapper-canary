"use strict";
n.r(t), n.d(t, {
  useSingleSelectState: function() {
    return C
  },
  useMultiSelectState: function() {
    return A
  },
  useVariableSelect: function() {
    return R
  },
  multiSelect: function() {
    return N
  },
  toggleSelect: function() {
    return y
  },
  singleSelect: function() {
    return O
  },
  Select: function() {
    return P
  },
  SingleSelect: function() {
    return M
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("974667"),
  l = n("227645"),
  u = n("311720"),
  c = n("442761"),
  d = n("446662"),
  p = n("77078"),
  h = n("731898"),
  f = n("811425"),
  E = n("31695"),
  _ = n("837899"),
  m = n("425190"),
  S = n("578706"),
  g = n("945330"),
  T = n("178814"),
  I = n("782340"),
  v = n("800836");

function C(e) {
  let {
    value: t,
    onChange: n,
    serialize: i = e => String(e)
  } = e;
  return {
    select: e => n(e),
    isSelected: e => e === t,
    clear: () => n(null),
    serialize: i
  }
}

function A(e) {
  let {
    value: t,
    onChange: n,
    serialize: i = e => String(e)
  } = e;
  return {
    select: e => {
      let i = new Set(t);
      i.has(e) ? i.delete(e) : i.add(e), n(i)
    },
    isSelected: e => {
      var n;
      return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
    },
    clear: () => n(new Set),
    serialize: i
  }
}

function R(e) {
  let {
    value: t,
    onChange: n,
    onSelectInteraction: i,
    serialize: r = e => String(e)
  } = e;
  return {
    select: e => {
      let {
        newValues: r,
        updated: s
      } = i(e, t);
      s && n(r)
    },
    isSelected: e => {
      var n;
      return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
    },
    clear: () => n(new Set),
    serialize: r
  }
}

function N(e, t) {
  let n = new Set(t);
  return n.has(e) ? n.delete(e) : n.add(e), {
    newValues: n,
    updated: !0
  }
}

function y(e, t) {
  return t.has(e) ? {
    newValues: new Set,
    updated: !0
  } : {
    newValues: new Set([e]),
    updated: !0
  }
}

function O(e, t) {
  return t.has(e) ? {
    newValues: t,
    updated: !1
  } : {
    newValues: new Set([e]),
    updated: !0
  }
}

function D(e) {
  return null == e ? void 0 : e.label
}

function b(e) {
  return e.map(e => D(e)).join(", ")
}

function P(e) {
  let {
    options: t,
    placeholder: n = I.default.Messages.SELECT,
    className: s,
    isDisabled: o = !1,
    maxVisibleItems: u = 7,
    autoFocus: d = !1,
    popoutWidth: E,
    clearable: S = !1,
    look: C = T.SelectLooks.FILLED,
    onClose: A,
    onOpen: R,
    renderOptionLabel: N = D,
    renderOptionValue: y = b,
    popoutClassName: O,
    popoutPosition: P = "bottom",
    popoutLayerContext: M,
    optionClassName: U,
    closeOnSelect: w,
    select: k,
    isSelected: G,
    serialize: x,
    clear: F,
    hideIcon: V = !1,
    "aria-label": B,
    "aria-labelledby": H
  } = e, [j, Y] = r.useState(!1), {
    ref: W,
    width: K,
    height: z
  } = (0, h.default)(), q = r.useCallback(e => {
    j !== e && !o && (Y(e), e ? null == R || R() : null == A || A())
  }, [o, A, R, j]), Q = r.useCallback(e => {
    j && !e && q(!1)
  }, [q, j]), X = (0, f.useIsVisible)(Q), Z = r.useCallback(e => {
    if (k(e), w) {
      var t;
      null === (t = W.current) || void 0 === t || t.focus()
    }
  }, [k, w]), J = r.useCallback(e => {
    e.stopPropagation(), null == F || F()
  }, [F]), $ = t.filter(e => G(e.value));
  r.useLayoutEffect(() => {
    if (d) {
      var e;
      null === (e = W.current) || void 0 === e || e.focus()
    }
  }, [d]);
  let ee = (0, p.useRedesignIconContext)().enabled;
  return (0, i.jsx)(c.Popout, {
    spacing: 0,
    animation: c.Popout.Animation.NONE,
    shouldShow: j,
    onRequestOpen: () => {
      q(!0)
    },
    onRequestClose: () => {
      q(!1)
    },
    renderPopout: e => {
      let {
        closePopout: n,
        position: r,
        updatePosition: s
      } = e;
      return (0, i.jsx)(L, {
        className: O,
        closeOnSelect: w,
        maxVisibleItems: u,
        width: null != E ? E : K,
        isSelected: G,
        closePopout: n,
        buttonHeight: null != z ? z : 0,
        onSelect: Z,
        options: t,
        serialize: x,
        renderOptionLabel: N,
        optionClassName: U,
        updatePosition: s,
        popoutPosition: r
      })
    },
    position: P,
    layerContext: M,
    children: (e, t) => {
      let {
        onClick: r,
        onKeyDown: u,
        ...c
      } = e, {
        isShown: d,
        position: p
      } = t, h = d ? m.default : _.default, f = ee ? 18 : 24;
      return (0, i.jsxs)(l.Clickable, {
        role: "button",
        "aria-disabled": o,
        innerRef: e => {
          W.current = e, X.current = e
        },
        onClick: o ? void 0 : e => {
          r(e), q(!j)
        },
        onKeyDown: e => {
          "ArrowDown" === e.key ? q(!0) : "Escape" === e.key && (e.stopPropagation(), q(!1)), u(e)
        },
        ...c,
        className: a(v.select, s, {
          [v.open]: d,
          [v.disabled]: o,
          [v.selectPositionTop]: "top" === p,
          [v.lookFilled]: C === T.SelectLooks.FILLED
        }),
        "aria-haspopup": "listbox",
        "aria-expanded": d,
        "aria-label": B,
        "aria-labelledby": H,
        children: [$.length > 0 ? (0, i.jsx)("span", {
          className: v.value,
          children: y($)
        }) : (0, i.jsx)("span", {
          className: v.placeholder,
          children: n
        }), (0, i.jsxs)("div", {
          className: v.icons,
          children: [S ? (0, i.jsx)(l.Clickable, {
            role: "button",
            "aria-disabled": o,
            onClick: J,
            "aria-label": I.default.Messages.CLEAR,
            children: (0, i.jsx)(g.default, {
              width: 16,
              height: 16,
              className: v.clear
            })
          }) : null, V ? null : (0, i.jsx)(h, {
            width: f,
            height: f
          })]
        })]
      })
    }
  })
}

function L(e) {
  let {
    className: t,
    onSelect: n,
    closePopout: s,
    closeOnSelect: l = !0,
    isSelected: c,
    options: p,
    width: h,
    maxVisibleItems: f,
    renderOptionLabel: _,
    serialize: m,
    optionClassName: S,
    buttonHeight: g,
    updatePosition: T,
    popoutPosition: I
  } = e, [C, A] = r.useState(0), R = r.useRef(null), N = r.useId(), y = (0, o.default)({
    id: N,
    async scrollToEnd() {},
    async scrollToStart() {},
    isEnabled: !0,
    wrap: !0
  }), O = r.useRef(null);
  (0, u.useFocusLock)(O), r.useLayoutEffect(() => {
    var e;
    null === (e = O.current) || void 0 === e || e.focus()
  }, []), r.useEffect(() => {
    g > 0 && T()
  }, [g, T]), (0, E.default)(T), r.useLayoutEffect(() => {
    var e, t;
    let n = null === (t = R.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
    null != n && A(n)
  }, [f]), r.useEffect(() => {
    T()
  }, [T, C]);
  let D = r.useCallback(e => {
      n(e), l && s()
    }, [s, n, l]),
    b = p.map((e, t) => {
      var n;
      return (0, i.jsx)(Option, {
        isSelected: c(e.value),
        value: e.value,
        label: _(e),
        onSelect: D,
        className: S,
        isDisabled: e.disabled,
        serialize: m
      }, null !== (n = e.key) && void 0 !== n ? n : t)
    }),
    P = p.length <= f ? d.AdvancedScrollerNone : d.AdvancedScrollerThin;
  return (0, i.jsx)(o.ListNavigatorProvider, {
    navigator: y,
    children: (0, i.jsx)(o.ListNavigatorContainer, {
      children: e => {
        let {
          ref: n,
          ...r
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(P, {
            className: a(v.popout, t, {
              [v.popoutPositionTop]: "top" === I
            }),
            style: {
              width: h,
              maxHeight: C
            },
            ref: e => {
              var t;
              let i = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
              n.current = i, O.current = i
            },
            ...r,
            role: "listbox",
            children: b
          }), (0, i.jsx)("div", {
            "aria-hidden": !0,
            ref: R,
            className: v.measurement,
            children: b.slice(0, f)
          })]
        })
      }
    })
  })
}

function Option(e) {
  let {
    className: t,
    value: n,
    label: r,
    onSelect: s,
    isSelected: u,
    isDisabled: c,
    serialize: d
  } = e, p = (0, o.useListItem)(d(n));
  return (0, i.jsxs)(l.Clickable, {
    focusProps: {
      enabled: !1
    },
    className: a(v.option, t),
    onClick: () => !c && s(n),
    ...p,
    "aria-selected": u,
    "aria-disabled": c,
    role: "option",
    children: [r, u && (0, i.jsx)(S.default, {
      backgroundColor: "white",
      className: v.selectedIcon,
      width: 20,
      height: 20
    })]
  })
}

function M(e) {
  let {
    value: t,
    onChange: n,
    ...r
  } = e, s = C({
    value: t,
    onChange: n
  });
  return (0, i.jsx)(P, {
    ...r,
    ...s
  })
}