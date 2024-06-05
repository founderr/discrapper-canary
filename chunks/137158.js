"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("392711"),
  o = n("176617"),
  c = n("299468"),
  d = n("490236"),
  u = n("692547"),
  f = n("481060"),
  m = n("548343"),
  h = n("689938"),
  E = n("17359");

function p(e) {
  let {
    title: t,
    children: n,
    onEdit: r,
    onRemove: s,
    canRemove: l,
    actionsLocation: o
  } = e;
  return (0, a.jsxs)("div", {
    className: E.backgroundContainer,
    children: [(0, a.jsxs)("div", {
      className: E.containerPadding,
      children: [(0, a.jsx)(f.FormTitle, {
        tag: "h3",
        className: E.containerTitle,
        children: t
      }), n]
    }), "footer" === o && (0, a.jsxs)(f.FormSection, {
      className: E.containerFooter,
      children: [(0, a.jsx)(f.Tooltip, {
        text: h.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, a.jsx)(f.Button, {
          ...e,
          className: i()(E.removeButton, E.button),
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.BLANK,
          onClick: s,
          disabled: !l,
          children: h.default.Messages.REMOVE
        })
      }), (0, a.jsx)(f.Button, {
        className: E.button,
        size: f.Button.Sizes.SMALL,
        color: f.Button.Colors.PRIMARY,
        onClick: r,
        children: h.default.Messages.EDIT
      })]
    })]
  })
}
let C = "FORM_FIELD";

function T(e) {
  let {
    index: t,
    field: n,
    isDropHovered: s,
    onDrop: c
  } = e, d = (0, l.debounce)(async (e, t, n) => {
    await c(e, t, n)
  }), f = r.useRef(null), [, h] = (0, o.useDrag)({
    type: C,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null != e && !t.didDrop() && d(e.field, null, !0)
    }
  }), [, T] = (0, o.useDrop)({
    accept: C,
    hover: (e, n) => {
      var a;
      let {
        index: r
      } = e, s = null === (a = f.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), i = n.getClientOffset();
      if (null == s || null == i) return;
      let l = (s.bottom - s.top) / 2,
        o = i.y - s.top;
      (!(r < t) || !(o < l)) && (!(r > t) || !(o < l)) && r !== t && d(e.field, t, !1)
    },
    drop: e => {
      d(e.field, t, !0)
    }
  });
  return r.useLayoutEffect(() => (h(T(f)), () => {
    T(null), h(null)
  }), [h, T]), (0, a.jsxs)("div", {
    ref: f,
    "data-dnd-name": "field-".concat(t),
    className: i()(E.dragContainer, {
      [E.dropHovered]: s
    }),
    children: [(0, a.jsx)("div", {
      className: E.dragIconContainer,
      children: (0, a.jsx)(m.default, {
        className: E.dragIcon,
        color: u.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, a.jsx)(p, {
      ...e
    })]
  })
}

function _(e) {
  return (0, a.jsxs)("div", {
    className: E.formFieldContainer,
    children: [(0, a.jsx)("div", {
      className: E.spacingContainer,
      children: e.isDragEnabled ? (0, a.jsx)(T, {
        ...e
      }) : (0, a.jsx)(p, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, a.jsxs)("div", {
      className: E.actionButtonsContainer,
      children: [(0, a.jsx)(f.Clickable, {
        className: E.actionButton,
        onClick: e.onEdit,
        "aria-label": h.default.Messages.EDIT,
        children: (0, a.jsx)(c.PencilIcon, {
          width: 16,
          height: 16
        })
      }), e.canRemove && (0, a.jsx)(f.Clickable, {
        className: E.actionButton,
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