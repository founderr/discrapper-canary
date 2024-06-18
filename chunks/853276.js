"use strict";
t.d(s, {
  Z: function() {
    return I
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(393238),
  d = t(607070),
  u = t(596390),
  E = t(738434);
let _ = i.forwardRef(function(e, s) {
  var t, l;
  let {
    value: r,
    isSelected: c,
    isEditing: d,
    forceShowErrorTooltip: u = !1,
    error: _
  } = e, [I, T, N] = i.useMemo(() => {
    if (null == _) return [];
    let {
      erroringCharacterOffset: e = 0,
      erroringCharacterLength: s = r.length
    } = null != _ ? _ : {}, t = r.slice(0, e), n = r.slice(e, e + s);
    return [t, n, r.slice(e + s)]
  }, [r, _]);
  return null == _ ? (0, n.jsx)("div", {
    className: a()(E.chipletValue, {
      [E.isEditing]: d,
      [E.isSelected]: c
    }),
    ref: s,
    children: r
  }) : (null !== (t = null == I ? void 0 : I.length) && void 0 !== t ? t : 0) + (null !== (l = null == T ? void 0 : T.length) && void 0 !== l ? l : 0) > 70 ? (0, n.jsx)(o.Tooltip, {
    "aria-label": _.message,
    text: () => (0, n.jsxs)("div", {
      "aria-label": _.message,
      children: [_.message, " ", (0, n.jsx)("span", {
        className: E.errorOverflowValue,
        children: T
      })]
    }),
    tooltipClassName: E.errorTooltip,
    color: o.Tooltip.Colors.RED,
    position: "left",
    forceOpen: u || void 0,
    children: e => (0, n.jsxs)("div", {
      ref: s,
      className: a()(E.chipletValue, {
        [E.isEditing]: d,
        [E.isError]: null != _ && !d,
        [E.isOverflowing]: null != _ && !d
      }),
      ...e,
      children: [(0, n.jsx)("span", {
        children: I
      }), (0, n.jsx)("span", {
        className: E.errorValue,
        children: T
      }), (0, n.jsx)("span", {
        children: N
      })]
    })
  }) : (0, n.jsxs)("div", {
    ref: s,
    className: a()(E.chipletValue, {
      [E.isEditing]: d,
      [E.isError]: null != _ && !d
    }),
    children: [(0, n.jsx)("span", {
      children: I
    }), (0, n.jsx)(o.Tooltip, {
      text: _.message,
      color: o.Tooltip.Colors.RED,
      position: "top",
      forceOpen: u || void 0,
      children: e => (0, n.jsx)("span", {
        ...e,
        className: E.errorValue,
        children: T
      })
    }), (0, n.jsx)("span", {
      children: N
    })]
  })
});

function I(e) {
  let {
    value: s,
    onChange: t,
    onBlur: l,
    onFocus: I,
    onRemove: T,
    isSelected: N,
    isSelecting: m,
    error: S,
    forceShowErrorTooltip: h
  } = e, g = i.useRef(null), C = i.useRef(null), [x, R] = i.useState(!1), {
    ref: L,
    width: O = 0
  } = (0, c.Z)(x), {
    ref: A,
    width: p = 0
  } = (0, c.Z)(x), M = (0, r.e7)([d.Z], () => d.Z.useReducedMotion), [f, D] = i.useState(h), v = i.useRef(null), j = O > p ? O : p;
  i.useEffect(() => {
    h ? (D(!0), v.current = setTimeout(() => {
      D(!1), v.current = null
    }, u.I5)) : D(!1)
  }, [h]), i.useEffect(() => () => {
    clearTimeout(v.current)
  }, []);
  let Z = i.useCallback(e => {
      t(e.target.value)
    }, [t]),
    U = i.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (s.trim().length <= 0 && T(), null != g.current && null != L.current && null != C.current) {
        var t;
        g.current.scrollTo(0, 0), g.current.setSelectionRange(0, 0), g.current.scrollLeft = 0, L.current.scrollLeft = 0, (null === (t = C.current) || void 0 === t ? void 0 : t.ref) != null && (C.current.ref.scrollLeft = 0)
      }
      R(!1), l(e)
    }, [s, L, l, T]),
    G = i.useCallback(e => {
      let t = s.trim().length <= 0;
      u.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), U(!0)) : "Backspace" === e.key && t && (e.preventDefault(), e.stopPropagation(), U(!0))
    }, [U, s]),
    P = i.useCallback(e => {
      let s = e.metaKey || e.ctrlKey;
      I(s), s ? e.preventDefault() : R(!0), e.stopPropagation()
    }, [I]),
    b = i.useCallback(e => {
      T()
    }, [T]);
  return (0, n.jsx)("div", {
    className: E.chipletFlexContainer,
    children: (0, n.jsxs)("div", {
      ref: A,
      className: a()(E.chipletContainer, {
        [E.isEditing]: x,
        [E.smallBlink]: !x && !M,
        [E.isSelected]: N,
        [E.isSelecting]: m,
        [E.isError]: null != S && !x
      }),
      children: [(0, n.jsxs)(o.Clickable, {
        tag: "div",
        onBlur: () => U(!1),
        onClick: P,
        ignoreKeyPress: !0,
        onMouseEnter: () => D(!0),
        onMouseLeave: () => D(!1),
        className: a()(E.chipletContainerInner, {
          [E.isSelecting]: m,
          [E.isEditing]: x
        }),
        ref: C,
        children: [(0, n.jsx)("input", {
          className: a()(E.chipletInput, {
            [E.isEditing]: x,
            [E.isSelecting]: m
          }),
          ref: g,
          onChange: Z,
          onKeyDownCapture: G,
          value: s,
          style: {
            width: j > 0 ? j : "calc(".concat(s.length, "ch + 10px)")
          }
        }), (0, n.jsx)(_, {
          ref: L,
          value: s,
          isEditing: x,
          isSelected: N,
          error: S,
          forceShowErrorTooltip: f || x
        })]
      }), !x && (0, n.jsx)(o.Clickable, {
        className: E.closeIconContainer,
        onClick: b,
        children: (0, n.jsx)(o.CloseSmallIcon, {
          size: "xxs",
          color: "currentColor",
          className: E.closeIcon
        })
      })]
    })
  })
}