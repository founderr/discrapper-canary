t.d(n, {
  Z: function() {
    return E
  }
}), t(47120);
var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  o = t(392711),
  l = t(225857),
  c = t(290843),
  d = t(692547),
  u = t(481060),
  m = t(689938),
  h = t(237261);

function C(e) {
  let {
    title: n,
    children: t,
    onEdit: r,
    onRemove: s,
    canRemove: o,
    actionsLocation: l
  } = e;
  return (0, a.jsxs)("div", {
    className: h.backgroundContainer,
    children: [(0, a.jsxs)("div", {
      className: h.containerPadding,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: "h3",
        className: h.containerTitle,
        children: n
      }), t]
    }), "footer" === l && (0, a.jsxs)(u.FormSection, {
      className: h.containerFooter,
      children: [(0, a.jsx)(u.Tooltip, {
        text: m.Z.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !o,
        children: e => (0, a.jsx)(u.Button, {
          ...e,
          className: i()(h.removeButton, h.button),
          size: u.Button.Sizes.SMALL,
          look: u.Button.Looks.BLANK,
          onClick: s,
          disabled: !o,
          children: m.Z.Messages.REMOVE
        })
      }), (0, a.jsx)(u.Button, {
        className: h.button,
        size: u.Button.Sizes.SMALL,
        color: u.Button.Colors.PRIMARY,
        onClick: r,
        children: m.Z.Messages.EDIT
      })]
    })]
  })
}
let x = "FORM_FIELD";

function f(e) {
  let {
    index: n,
    field: t,
    isDropHovered: s,
    onDrop: m
  } = e, f = (0, o.debounce)(async (e, n, t) => {
    await m(e, n, t)
  }), E = r.useRef(null), [, T] = (0, l.c)({
    type: x,
    item: {
      index: n,
      field: t
    },
    end: (e, n) => {
      null != e && !n.didDrop() && f(e.field, null, !0)
    }
  }), [, _] = (0, c.L)({
    accept: x,
    hover: (e, t) => {
      var a;
      let {
        index: r
      } = e, s = null === (a = E.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), i = t.getClientOffset();
      if (null == s || null == i) return;
      let o = (s.bottom - s.top) / 2,
        l = i.y - s.top;
      (!(r < n) || !(l < o)) && (!(r > n) || !(l < o)) && r !== n && f(e.field, n, !1)
    },
    drop: e => {
      f(e.field, n, !0)
    }
  });
  return r.useLayoutEffect(() => (T(_(E)), () => {
    _(null), T(null)
  }), [T, _]), (0, a.jsxs)("div", {
    ref: E,
    "data-dnd-name": "field-".concat(n),
    className: i()(h.dragContainer, {
      [h.dropHovered]: s
    }),
    children: [(0, a.jsx)("div", {
      className: h.dragIconContainer,
      children: (0, a.jsx)(u.DragIcon, {
        size: "xs",
        className: h.dragIcon,
        color: d.Z.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, a.jsx)(C, {
      ...e
    })]
  })
}

function E(e) {
  return (0, a.jsxs)("div", {
    className: h.formFieldContainer,
    children: [(0, a.jsx)("div", {
      className: h.spacingContainer,
      children: e.isDragEnabled ? (0, a.jsx)(f, {
        ...e
      }) : (0, a.jsx)(C, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, a.jsxs)("div", {
      className: h.actionButtonsContainer,
      children: [(0, a.jsx)(u.Clickable, {
        className: h.actionButton,
        onClick: e.onEdit,
        "aria-label": m.Z.Messages.EDIT,
        children: (0, a.jsx)(u.PencilIcon, {
          size: "xs"
        })
      }), e.canRemove && (0, a.jsx)(u.Clickable, {
        className: h.actionButton,
        onClick: e.onRemove,
        "aria-label": m.Z.Messages.REMOVE,
        children: (0, a.jsx)(u.TrashIcon, {
          size: "xs"
        })
      })]
    })]
  })
}