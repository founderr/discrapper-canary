"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("803997"),
  a = n.n(s),
  l = n("392711"),
  o = n("942389"),
  u = n("692547"),
  c = n("481060"),
  d = n("548343"),
  f = n("689938"),
  p = n("482249");

function m(e) {
  let {
    title: t,
    children: n,
    onEdit: r,
    onRemove: s,
    canRemove: l
  } = e;
  return (0, i.jsxs)("div", {
    className: p.backgroundContainer,
    children: [(0, i.jsxs)("div", {
      className: p.containerPadding,
      children: [(0, i.jsx)(c.FormTitle, {
        tag: "h3",
        className: p.containerTitle,
        children: t
      }), n]
    }), (0, i.jsxs)(c.FormSection, {
      className: p.containerFooter,
      children: [(0, i.jsx)(c.Tooltip, {
        text: f.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, i.jsx)(c.Button, {
          ...e,
          className: a()(p.removeButton, p.button),
          size: c.Button.Sizes.SMALL,
          look: c.Button.Looks.BLANK,
          onClick: s,
          disabled: !l,
          children: f.default.Messages.REMOVE
        })
      }), (0, i.jsx)(c.Button, {
        className: p.button,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.PRIMARY,
        onClick: r,
        children: f.default.Messages.EDIT
      })]
    })]
  })
}
let E = "FORM_FIELD";

function I(e) {
  let {
    index: t,
    field: n,
    isDropHovered: s,
    onDrop: c
  } = e, f = (0, l.debounce)(async (e, t, n) => {
    await c(e, t, n)
  }), I = r.useRef(null), [, _] = (0, o.useDrag)({
    type: E,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null != e && !t.didDrop() && f(e.field, null, !0)
    }
  }), [, h] = (0, o.useDrop)({
    accept: E,
    hover: (e, n) => {
      var i;
      let {
        index: r
      } = e, s = null === (i = I.current) || void 0 === i ? void 0 : i.getBoundingClientRect(), a = n.getClientOffset();
      if (null == s || null == a) return;
      let l = (s.bottom - s.top) / 2,
        o = a.y - s.top;
      (!(r < t) || !(o < l)) && (!(r > t) || !(o < l)) && r !== t && f(e.field, t, !1)
    },
    drop: e => {
      f(e.field, t, !0)
    }
  });
  return r.useLayoutEffect(() => (_(h(I)), () => {
    h(null), _(null)
  }), [_, h]), (0, i.jsxs)("div", {
    ref: I,
    "data-dnd-name": "field-".concat(t),
    className: a()(p.dragContainer, {
      [p.dropHovered]: s
    }),
    children: [(0, i.jsx)("div", {
      className: p.dragIconContainer,
      children: (0, i.jsx)(d.default, {
        className: p.dragIcon,
        color: u.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, i.jsx)(m, {
      ...e
    })]
  })
}

function _(e) {
  return (0, i.jsx)("div", {
    className: p.spacingContainer,
    children: e.isDragEnabled ? (0, i.jsx)(I, {
      ...e
    }) : (0, i.jsx)(m, {
      ...e
    })
  })
}