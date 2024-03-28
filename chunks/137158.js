"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("803997"),
  s = i.n(n),
  r = i("392711"),
  o = i("942389"),
  d = i("692547"),
  c = i("481060"),
  u = i("548343"),
  f = i("689938"),
  E = i("482249");

function I(e) {
  let {
    title: t,
    children: i,
    onEdit: l,
    onRemove: n
  } = e;
  return (0, a.jsxs)("div", {
    className: E.backgroundContainer,
    children: [(0, a.jsxs)("div", {
      className: E.containerPadding,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: "h3",
        className: E.containerTitle,
        children: t
      }), i]
    }), (0, a.jsxs)(c.FormSection, {
      className: E.containerFooter,
      children: [(0, a.jsx)(c.Button, {
        className: s()(E.removeButton, E.button),
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.BLANK,
        onClick: n,
        children: f.default.Messages.REMOVE
      }), (0, a.jsx)(c.Button, {
        className: E.button,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.PRIMARY,
        onClick: l,
        children: f.default.Messages.EDIT
      })]
    })]
  })
}
let T = "FORM_FIELD";

function m(e) {
  let {
    index: t,
    field: i,
    isDropHovered: n,
    onDrop: c
  } = e, f = (0, r.debounce)(async (e, t, i) => {
    await c(e, t, i)
  }), m = l.useRef(null), [, _] = (0, o.useDrag)({
    type: T,
    item: {
      index: t,
      field: i
    },
    end: (e, t) => {
      null != e && !t.didDrop() && f(e.field, null, !0)
    }
  }), [, x] = (0, o.useDrop)({
    accept: T,
    hover: (e, i) => {
      var a;
      let {
        index: l
      } = e, n = null === (a = m.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), s = i.getClientOffset();
      if (null == n || null == s) return;
      let r = (n.bottom - n.top) / 2,
        o = s.y - n.top;
      (!(l < t) || !(o < r)) && (!(l > t) || !(o < r)) && l !== t && f(e.field, t, !1)
    },
    drop: e => {
      f(e.field, t, !0)
    }
  });
  return l.useLayoutEffect(() => (_(x(m)), () => {
    x(null), _(null)
  }), [_, x]), (0, a.jsxs)("div", {
    ref: m,
    "data-dnd-name": "field-".concat(t),
    className: s()(E.dragContainer, {
      [E.dropHovered]: n
    }),
    children: [(0, a.jsx)("div", {
      className: E.dragIconContainer,
      children: (0, a.jsx)(u.default, {
        className: E.dragIcon,
        color: d.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, a.jsx)(I, {
      ...e
    })]
  })
}

function _(e) {
  return (0, a.jsx)("div", {
    className: E.spacingContainer,
    children: e.isDragEnabled ? (0, a.jsx)(m, {
      ...e
    }) : (0, a.jsx)(I, {
      ...e
    })
  })
}