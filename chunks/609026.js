"use strict";
n.r(t), n.d(t, {
  MenuSearchControl: function() {
    return f
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("227645"),
  l = n("718776"),
  u = n("242670"),
  c = n("945330"),
  d = n("229915"),
  p = n("782340"),
  h = n("523634");
let f = r.forwardRef(function(e, t) {
  var n, s, f;
  let {
    query: E,
    onChange: _,
    loading: m = !1,
    disabled: S = !1,
    placeholder: g = p.default.Messages.SEARCH,
    "aria-label": T
  } = e, I = r.useRef(null), v = r.useRef(null);
  r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = v.current) || void 0 === e ? void 0 : e.focus()
    },
    blur: () => {
      var e;
      return null === (e = v.current) || void 0 === e ? void 0 : e.blur()
    },
    activate: () => !1
  }), []);
  let C = (n = E, s = m, f = _, s ? (0, i.jsx)("div", {
    className: h.iconContainer,
    children: (0, i.jsx)(u.Spinner, {
      type: u.Spinner.Type.SPINNING_CIRCLE,
      className: a(h.icon)
    })
  }) : n.length > 0 ? (0, i.jsx)(o.Clickable, {
    "aria-label": p.default.Messages.SEARCH_CLEAR,
    className: a(h.iconContainer, h.iconClickable),
    onClick: e => {
      e.stopPropagation(), f("")
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
    children: (0, i.jsx)(c.default, {
      width: 18,
      height: 18,
      className: h.icon,
      "aria-label": p.default.Messages.CLOSE
    })
  }) : (0, i.jsx)("div", {
    className: h.iconContainer,
    children: (0, i.jsx)(d.default, {
      width: 18,
      height: 18,
      className: h.icon,
      "aria-label": p.default.Messages.SEARCH
    })
  }));
  return (0, i.jsx)(l.FocusRing, {
    focusTarget: v,
    ringTarget: I,
    offset: {
      top: 2,
      bottom: 2,
      left: 4,
      right: 4
    },
    children: (0, i.jsxs)("div", {
      className: h.container,
      ref: I,
      children: [(0, i.jsx)("input", {
        role: "searchbox",
        "aria-busy": m,
        ref: v,
        className: h.input,
        value: E,
        onChange: e => _(e.currentTarget.value),
        "aria-label": T,
        placeholder: g,
        disabled: S
      }), C]
    })
  })
})