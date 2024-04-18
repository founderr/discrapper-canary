"use strict";
i.r(t), i.d(t, {
  default: function() {
    return I
  }
}), i("47120");
var n = i("735250"),
  r = i("470079"),
  s = i("120356"),
  a = i.n(s),
  l = i("392711"),
  o = i("942389"),
  u = i("299468"),
  c = i("490236"),
  d = i("692547"),
  f = i("481060"),
  p = i("548343"),
  C = i("689938"),
  m = i("482249");

function h(e) {
  let {
    title: t,
    children: i,
    onEdit: r,
    onRemove: s,
    canRemove: l,
    actionsLocation: o
  } = e;
  return (0, n.jsxs)("div", {
    className: m.backgroundContainer,
    children: [(0, n.jsxs)("div", {
      className: m.containerPadding,
      children: [(0, n.jsx)(f.FormTitle, {
        tag: "h3",
        className: m.containerTitle,
        children: t
      }), i]
    }), "footer" === o && (0, n.jsxs)(f.FormSection, {
      className: m.containerFooter,
      children: [(0, n.jsx)(f.Tooltip, {
        text: C.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, n.jsx)(f.Button, {
          ...e,
          className: a()(m.removeButton, m.button),
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.BLANK,
          onClick: s,
          disabled: !l,
          children: C.default.Messages.REMOVE
        })
      }), (0, n.jsx)(f.Button, {
        className: m.button,
        size: f.Button.Sizes.SMALL,
        color: f.Button.Colors.PRIMARY,
        onClick: r,
        children: C.default.Messages.EDIT
      })]
    })]
  })
}
let _ = "FORM_FIELD";

function E(e) {
  let {
    index: t,
    field: i,
    isDropHovered: s,
    onDrop: u
  } = e, c = (0, l.debounce)(async (e, t, i) => {
    await u(e, t, i)
  }), f = r.useRef(null), [, C] = (0, o.useDrag)({
    type: _,
    item: {
      index: t,
      field: i
    },
    end: (e, t) => {
      null != e && !t.didDrop() && c(e.field, null, !0)
    }
  }), [, E] = (0, o.useDrop)({
    accept: _,
    hover: (e, i) => {
      var n;
      let {
        index: r
      } = e, s = null === (n = f.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), a = i.getClientOffset();
      if (null == s || null == a) return;
      let l = (s.bottom - s.top) / 2,
        o = a.y - s.top;
      (!(r < t) || !(o < l)) && (!(r > t) || !(o < l)) && r !== t && c(e.field, t, !1)
    },
    drop: e => {
      c(e.field, t, !0)
    }
  });
  return r.useLayoutEffect(() => (C(E(f)), () => {
    E(null), C(null)
  }), [C, E]), (0, n.jsxs)("div", {
    ref: f,
    "data-dnd-name": "field-".concat(t),
    className: a()(m.dragContainer, {
      [m.dropHovered]: s
    }),
    children: [(0, n.jsx)("div", {
      className: m.dragIconContainer,
      children: (0, n.jsx)(p.default, {
        className: m.dragIcon,
        color: d.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, n.jsx)(h, {
      ...e
    })]
  })
}

function I(e) {
  return (0, n.jsxs)("div", {
    className: m.formFieldContainer,
    children: [(0, n.jsx)("div", {
      className: m.spacingContainer,
      children: e.isDragEnabled ? (0, n.jsx)(E, {
        ...e
      }) : (0, n.jsx)(h, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, n.jsxs)("div", {
      className: m.actionButtonsContainer,
      children: [(0, n.jsx)(f.Clickable, {
        className: m.actionButton,
        onClick: e.onEdit,
        "aria-label": C.default.Messages.EDIT,
        children: (0, n.jsx)(u.PencilIcon, {
          width: 16,
          height: 16
        })
      }), e.canRemove && (0, n.jsx)(f.Clickable, {
        className: m.actionButton,
        onClick: e.onRemove,
        "aria-label": C.default.Messages.REMOVE,
        children: (0, n.jsx)(c.TrashIcon, {
          width: 16,
          height: 16
        })
      })]
    })]
  })
}