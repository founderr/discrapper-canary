"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("120356"),
  s = n.n(i),
  l = n("392711"),
  o = n("942389"),
  c = n("299468"),
  d = n("490236"),
  u = n("692547"),
  f = n("481060"),
  m = n("548343"),
  h = n("689938"),
  p = n("915580");

function T(e) {
  let {
    title: t,
    children: n,
    onEdit: r,
    onRemove: i,
    canRemove: l,
    actionsLocation: o
  } = e;
  return (0, a.jsxs)("div", {
    className: p.backgroundContainer,
    children: [(0, a.jsxs)("div", {
      className: p.containerPadding,
      children: [(0, a.jsx)(f.FormTitle, {
        tag: "h3",
        className: p.containerTitle,
        children: t
      }), n]
    }), "footer" === o && (0, a.jsxs)(f.FormSection, {
      className: p.containerFooter,
      children: [(0, a.jsx)(f.Tooltip, {
        text: h.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, a.jsx)(f.Button, {
          ...e,
          className: s()(p.removeButton, p.button),
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.BLANK,
          onClick: i,
          disabled: !l,
          children: h.default.Messages.REMOVE
        })
      }), (0, a.jsx)(f.Button, {
        className: p.button,
        size: f.Button.Sizes.SMALL,
        color: f.Button.Colors.PRIMARY,
        onClick: r,
        children: h.default.Messages.EDIT
      })]
    })]
  })
}
let E = "FORM_FIELD";

function C(e) {
  let {
    index: t,
    field: n,
    isDropHovered: i,
    onDrop: c
  } = e, d = (0, l.debounce)(async (e, t, n) => {
    await c(e, t, n)
  }), f = r.useRef(null), [, h] = (0, o.useDrag)({
    type: E,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null != e && !t.didDrop() && d(e.field, null, !0)
    }
  }), [, C] = (0, o.useDrop)({
    accept: E,
    hover: (e, n) => {
      var a;
      let {
        index: r
      } = e, i = null === (a = f.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), s = n.getClientOffset();
      if (null == i || null == s) return;
      let l = (i.bottom - i.top) / 2,
        o = s.y - i.top;
      (!(r < t) || !(o < l)) && (!(r > t) || !(o < l)) && r !== t && d(e.field, t, !1)
    },
    drop: e => {
      d(e.field, t, !0)
    }
  });
  return r.useLayoutEffect(() => (h(C(f)), () => {
    C(null), h(null)
  }), [h, C]), (0, a.jsxs)("div", {
    ref: f,
    "data-dnd-name": "field-".concat(t),
    className: s()(p.dragContainer, {
      [p.dropHovered]: i
    }),
    children: [(0, a.jsx)("div", {
      className: p.dragIconContainer,
      children: (0, a.jsx)(m.default, {
        className: p.dragIcon,
        color: u.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, a.jsx)(T, {
      ...e
    })]
  })
}

function _(e) {
  return (0, a.jsxs)("div", {
    className: p.formFieldContainer,
    children: [(0, a.jsx)("div", {
      className: p.spacingContainer,
      children: e.isDragEnabled ? (0, a.jsx)(C, {
        ...e
      }) : (0, a.jsx)(T, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, a.jsxs)("div", {
      className: p.actionButtonsContainer,
      children: [(0, a.jsx)(f.Clickable, {
        className: p.actionButton,
        onClick: e.onEdit,
        "aria-label": h.default.Messages.EDIT,
        children: (0, a.jsx)(c.PencilIcon, {
          width: 16,
          height: 16
        })
      }), e.canRemove && (0, a.jsx)(f.Clickable, {
        className: p.actionButton,
        onClick: e.onRemove,
        "aria-label": h.default.Messages.REMOVE,
        children: (0, a.jsx)(d.TrashIcon, {
          width: 16,
          height: 16
        })
      })]
    })]
  })
}