"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("392711"),
  o = a("176617"),
  c = a("299468"),
  d = a("490236"),
  u = a("692547"),
  f = a("481060"),
  m = a("548343"),
  h = a("689938"),
  E = a("17359");

function T(e) {
  let {
    title: t,
    children: a,
    onEdit: r,
    onRemove: s,
    canRemove: l,
    actionsLocation: o
  } = e;
  return (0, n.jsxs)("div", {
    className: E.backgroundContainer,
    children: [(0, n.jsxs)("div", {
      className: E.containerPadding,
      children: [(0, n.jsx)(f.FormTitle, {
        tag: "h3",
        className: E.containerTitle,
        children: t
      }), a]
    }), "footer" === o && (0, n.jsxs)(f.FormSection, {
      className: E.containerFooter,
      children: [(0, n.jsx)(f.Tooltip, {
        text: h.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, n.jsx)(f.Button, {
          ...e,
          className: i()(E.removeButton, E.button),
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.BLANK,
          onClick: s,
          disabled: !l,
          children: h.default.Messages.REMOVE
        })
      }), (0, n.jsx)(f.Button, {
        className: E.button,
        size: f.Button.Sizes.SMALL,
        color: f.Button.Colors.PRIMARY,
        onClick: r,
        children: h.default.Messages.EDIT
      })]
    })]
  })
}
let p = "FORM_FIELD";

function C(e) {
  let {
    index: t,
    field: a,
    isDropHovered: s,
    onDrop: c
  } = e, d = (0, l.debounce)(async (e, t, a) => {
    await c(e, t, a)
  }), f = r.useRef(null), [, h] = (0, o.useDrag)({
    type: p,
    item: {
      index: t,
      field: a
    },
    end: (e, t) => {
      null != e && !t.didDrop() && d(e.field, null, !0)
    }
  }), [, C] = (0, o.useDrop)({
    accept: p,
    hover: (e, a) => {
      var n;
      let {
        index: r
      } = e, s = null === (n = f.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), i = a.getClientOffset();
      if (null == s || null == i) return;
      let l = (s.bottom - s.top) / 2,
        o = i.y - s.top;
      (!(r < t) || !(o < l)) && (!(r > t) || !(o < l)) && r !== t && d(e.field, t, !1)
    },
    drop: e => {
      d(e.field, t, !0)
    }
  });
  return r.useLayoutEffect(() => (h(C(f)), () => {
    C(null), h(null)
  }), [h, C]), (0, n.jsxs)("div", {
    ref: f,
    "data-dnd-name": "field-".concat(t),
    className: i()(E.dragContainer, {
      [E.dropHovered]: s
    }),
    children: [(0, n.jsx)("div", {
      className: E.dragIconContainer,
      children: (0, n.jsx)(m.default, {
        className: E.dragIcon,
        color: u.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, n.jsx)(T, {
      ...e
    })]
  })
}

function _(e) {
  return (0, n.jsxs)("div", {
    className: E.formFieldContainer,
    children: [(0, n.jsx)("div", {
      className: E.spacingContainer,
      children: e.isDragEnabled ? (0, n.jsx)(C, {
        ...e
      }) : (0, n.jsx)(T, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, n.jsxs)("div", {
      className: E.actionButtonsContainer,
      children: [(0, n.jsx)(f.Clickable, {
        className: E.actionButton,
        onClick: e.onEdit,
        "aria-label": h.default.Messages.EDIT,
        children: (0, n.jsx)(c.PencilIcon, {
          width: 16,
          height: 16
        })
      }), e.canRemove && (0, n.jsx)(f.Clickable, {
        className: E.actionButton,
        onClick: e.onRemove,
        "aria-label": h.default.Messages.REMOVE,
        children: (0, n.jsx)(d.TrashIcon, {
          width: 16,
          height: 16
        })
      })]
    })]
  })
}