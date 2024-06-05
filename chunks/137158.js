"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("392711"),
  o = a("176617"),
  d = a("299468"),
  c = a("490236"),
  u = a("692547"),
  f = a("481060"),
  m = a("548343"),
  E = a("689938"),
  h = a("17359");

function T(e) {
  let {
    title: t,
    children: a,
    onEdit: r,
    onRemove: i,
    canRemove: l,
    actionsLocation: o
  } = e;
  return (0, n.jsxs)("div", {
    className: h.backgroundContainer,
    children: [(0, n.jsxs)("div", {
      className: h.containerPadding,
      children: [(0, n.jsx)(f.FormTitle, {
        tag: "h3",
        className: h.containerTitle,
        children: t
      }), a]
    }), "footer" === o && (0, n.jsxs)(f.FormSection, {
      className: h.containerFooter,
      children: [(0, n.jsx)(f.Tooltip, {
        text: E.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, n.jsx)(f.Button, {
          ...e,
          className: s()(h.removeButton, h.button),
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.BLANK,
          onClick: i,
          disabled: !l,
          children: E.default.Messages.REMOVE
        })
      }), (0, n.jsx)(f.Button, {
        className: h.button,
        size: f.Button.Sizes.SMALL,
        color: f.Button.Colors.PRIMARY,
        onClick: r,
        children: E.default.Messages.EDIT
      })]
    })]
  })
}
let _ = "FORM_FIELD";

function C(e) {
  let {
    index: t,
    field: a,
    isDropHovered: i,
    onDrop: d
  } = e, c = (0, l.debounce)(async (e, t, a) => {
    await d(e, t, a)
  }), f = r.useRef(null), [, E] = (0, o.useDrag)({
    type: _,
    item: {
      index: t,
      field: a
    },
    end: (e, t) => {
      null != e && !t.didDrop() && c(e.field, null, !0)
    }
  }), [, C] = (0, o.useDrop)({
    accept: _,
    hover: (e, a) => {
      var n;
      let {
        index: r
      } = e, i = null === (n = f.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), s = a.getClientOffset();
      if (null == i || null == s) return;
      let l = (i.bottom - i.top) / 2,
        o = s.y - i.top;
      (!(r < t) || !(o < l)) && (!(r > t) || !(o < l)) && r !== t && c(e.field, t, !1)
    },
    drop: e => {
      c(e.field, t, !0)
    }
  });
  return r.useLayoutEffect(() => (E(C(f)), () => {
    C(null), E(null)
  }), [E, C]), (0, n.jsxs)("div", {
    ref: f,
    "data-dnd-name": "field-".concat(t),
    className: s()(h.dragContainer, {
      [h.dropHovered]: i
    }),
    children: [(0, n.jsx)("div", {
      className: h.dragIconContainer,
      children: (0, n.jsx)(m.default, {
        className: h.dragIcon,
        color: u.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, n.jsx)(T, {
      ...e
    })]
  })
}

function x(e) {
  return (0, n.jsxs)("div", {
    className: h.formFieldContainer,
    children: [(0, n.jsx)("div", {
      className: h.spacingContainer,
      children: e.isDragEnabled ? (0, n.jsx)(C, {
        ...e
      }) : (0, n.jsx)(T, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, n.jsxs)("div", {
      className: h.actionButtonsContainer,
      children: [(0, n.jsx)(f.Clickable, {
        className: h.actionButton,
        onClick: e.onEdit,
        "aria-label": E.default.Messages.EDIT,
        children: (0, n.jsx)(d.PencilIcon, {
          width: 16,
          height: 16
        })
      }), e.canRemove && (0, n.jsx)(f.Clickable, {
        className: h.actionButton,
        onClick: e.onRemove,
        "aria-label": E.default.Messages.REMOVE,
        children: (0, n.jsx)(c.TrashIcon, {
          width: 16,
          height: 16
        })
      })]
    })]
  })
}