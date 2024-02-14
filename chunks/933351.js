"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("917351"),
  o = s("476042"),
  d = s("669491"),
  u = s("77078"),
  c = s("673220"),
  E = s("782340"),
  _ = s("935090");

function I(e) {
  let {
    title: t,
    children: s,
    onEdit: l,
    onRemove: n
  } = e;
  return (0, a.jsxs)("div", {
    className: _.backgroundContainer,
    children: [(0, a.jsxs)("div", {
      className: _.containerPadding,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: "h3",
        className: _.containerTitle,
        children: t
      }), s]
    }), (0, a.jsxs)(u.FormSection, {
      className: _.containerFooter,
      children: [(0, a.jsx)(u.Button, {
        className: i(_.removeButton, _.button),
        size: u.Button.Sizes.SMALL,
        look: u.Button.Looks.BLANK,
        onClick: n,
        children: E.default.Messages.REMOVE
      }), (0, a.jsx)(u.Button, {
        className: _.button,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.PRIMARY,
        onClick: l,
        children: E.default.Messages.EDIT
      })]
    })]
  })
}
let T = "FORM_FIELD";

function f(e) {
  let {
    index: t,
    field: s,
    isDropHovered: n,
    onDrop: u
  } = e, E = (0, r.debounce)(async (e, t, s) => {
    await u(e, t, s)
  }), f = l.useRef(null), [, S] = (0, o.useDrag)({
    type: T,
    item: {
      index: t,
      field: s
    },
    end: (e, t) => {
      null != e && !t.didDrop() && E(e.field, null, !0)
    }
  }), [, m] = (0, o.useDrop)({
    accept: T,
    hover: (e, s) => {
      var a;
      let {
        index: l
      } = e, n = null === (a = f.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), i = s.getClientOffset();
      if (null == n || null == i) return;
      let r = (n.bottom - n.top) / 2,
        o = i.y - n.top;
      (!(l < t) || !(o < r)) && (!(l > t) || !(o < r)) && l !== t && E(e.field, t, !1)
    },
    drop: e => {
      E(e.field, t, !0)
    }
  });
  return l.useLayoutEffect(() => (S(m(f)), () => {
    m(null), S(null)
  }), [S, m]), (0, a.jsxs)("div", {
    ref: f,
    "data-dnd-name": "field-".concat(t),
    className: i(_.dragContainer, {
      [_.dropHovered]: n
    }),
    children: [(0, a.jsx)("div", {
      className: _.dragIconContainer,
      children: (0, a.jsx)(c.default, {
        className: _.dragIcon,
        color: d.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, a.jsx)(I, {
      ...e
    })]
  })
}

function S(e) {
  return (0, a.jsx)("div", {
    className: _.spacingContainer,
    children: e.isDragEnabled ? (0, a.jsx)(f, {
      ...e
    }) : (0, a.jsx)(I, {
      ...e
    })
  })
}