"use strict";
n.d(t, {
  n: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(1561),
  l = n(84735),
  u = n(922770),
  _ = n(481060),
  c = n(689938),
  d = n(447136);
let E = r.forwardRef(function(e, t) {
  var n, s, E;
  let {
    query: I,
    onChange: T,
    loading: h = !1,
    disabled: S = !1,
    placeholder: f = c.Z.Messages.SEARCH,
    "aria-label": N
  } = e, A = r.useRef(null), m = r.useRef(null);
  r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = m.current) || void 0 === e ? void 0 : e.focus()
    },
    blur: () => {
      var e;
      return null === (e = m.current) || void 0 === e ? void 0 : e.blur()
    },
    activate: () => !1
  }), []);
  let O = (n = I, s = h, E = T, s ? (0, i.jsx)("div", {
    className: d.iconContainer,
    children: (0, i.jsx)(u.$, {
      type: u.$.Type.SPINNING_CIRCLE,
      className: o()(d.icon)
    })
  }) : n.length > 0 ? (0, i.jsx)(a.P, {
    "aria-label": c.Z.Messages.SEARCH_CLEAR,
    className: o()(d.iconContainer, d.iconClickable),
    onClick: e => {
      e.stopPropagation(), E("")
    },
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    focusProps: {
      offset: {
        top: -3,
        right: -3,
        bottom: -3,
        left: -3
      }
    },
    children: (0, i.jsx)(_.CloseSmallIcon, {
      size: "custom",
      color: "currentColor",
      width: 18,
      height: 18,
      className: d.icon,
      "aria-label": c.Z.Messages.CLOSE
    })
  }) : (0, i.jsx)("div", {
    className: d.iconContainer,
    children: (0, i.jsx)(_.MagnifyingGlassIcon, {
      size: "custom",
      color: "currentColor",
      width: 18,
      height: 18,
      className: d.icon,
      "aria-label": c.Z.Messages.SEARCH
    })
  }));
  return (0, i.jsx)(l.t, {
    focusTarget: m,
    ringTarget: A,
    offset: {
      top: 2,
      bottom: 2,
      left: 4,
      right: 4
    },
    children: (0, i.jsxs)("div", {
      className: d.container,
      ref: A,
      children: [(0, i.jsx)("input", {
        role: "searchbox",
        "aria-busy": h,
        ref: m,
        className: d.input,
        value: I,
        onChange: e => T(e.currentTarget.value),
        "aria-label": N,
        placeholder: f,
        disabled: S
      }), O]
    })
  })
})