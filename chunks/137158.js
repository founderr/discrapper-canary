"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("47120");
var n = i("735250"),
  r = i("470079"),
  s = i("803997"),
  a = i.n(s),
  l = i("392711"),
  o = i("942389"),
  u = i("692547"),
  c = i("481060"),
  d = i("548343"),
  f = i("689938"),
  p = i("482249");

function C(e) {
  let {
    title: t,
    children: i,
    onEdit: r,
    onRemove: s,
    canRemove: l
  } = e;
  return (0, n.jsxs)("div", {
    className: p.backgroundContainer,
    children: [(0, n.jsxs)("div", {
      className: p.containerPadding,
      children: [(0, n.jsx)(c.FormTitle, {
        tag: "h3",
        className: p.containerTitle,
        children: t
      }), i]
    }), (0, n.jsxs)(c.FormSection, {
      className: p.containerFooter,
      children: [(0, n.jsx)(c.Tooltip, {
        text: f.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, n.jsx)(c.Button, {
          ...e,
          className: a()(p.removeButton, p.button),
          size: c.Button.Sizes.SMALL,
          look: c.Button.Looks.BLANK,
          onClick: s,
          disabled: !l,
          children: f.default.Messages.REMOVE
        })
      }), (0, n.jsx)(c.Button, {
        className: p.button,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.PRIMARY,
        onClick: r,
        children: f.default.Messages.EDIT
      })]
    })]
  })
}
let m = "FORM_FIELD";

function h(e) {
  let {
    index: t,
    field: i,
    isDropHovered: s,
    onDrop: c
  } = e, f = (0, l.debounce)(async (e, t, i) => {
    await c(e, t, i)
  }), h = r.useRef(null), [, _] = (0, o.useDrag)({
    type: m,
    item: {
      index: t,
      field: i
    },
    end: (e, t) => {
      null != e && !t.didDrop() && f(e.field, null, !0)
    }
  }), [, E] = (0, o.useDrop)({
    accept: m,
    hover: (e, i) => {
      var n;
      let {
        index: r
      } = e, s = null === (n = h.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), a = i.getClientOffset();
      if (null == s || null == a) return;
      let l = (s.bottom - s.top) / 2,
        o = a.y - s.top;
      (!(r < t) || !(o < l)) && (!(r > t) || !(o < l)) && r !== t && f(e.field, t, !1)
    },
    drop: e => {
      f(e.field, t, !0)
    }
  });
  return r.useLayoutEffect(() => (_(E(h)), () => {
    E(null), _(null)
  }), [_, E]), (0, n.jsxs)("div", {
    ref: h,
    "data-dnd-name": "field-".concat(t),
    className: a()(p.dragContainer, {
      [p.dropHovered]: s
    }),
    children: [(0, n.jsx)("div", {
      className: p.dragIconContainer,
      children: (0, n.jsx)(d.default, {
        className: p.dragIcon,
        color: u.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, n.jsx)(C, {
      ...e
    })]
  })
}

function _(e) {
  return (0, n.jsx)("div", {
    className: p.spacingContainer,
    children: e.isDragEnabled ? (0, n.jsx)(h, {
      ...e
    }) : (0, n.jsx)(C, {
      ...e
    })
  })
}