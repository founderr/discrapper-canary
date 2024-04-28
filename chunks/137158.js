"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  l = n("392711"),
  o = n("176617"),
  u = n("299468"),
  c = n("490236"),
  d = n("692547"),
  f = n("481060"),
  p = n("548343"),
  m = n("689938"),
  E = n("17359");

function I(e) {
  let {
    title: t,
    children: n,
    onEdit: r,
    onRemove: s,
    canRemove: l,
    actionsLocation: o
  } = e;
  return (0, i.jsxs)("div", {
    className: E.backgroundContainer,
    children: [(0, i.jsxs)("div", {
      className: E.containerPadding,
      children: [(0, i.jsx)(f.FormTitle, {
        tag: "h3",
        className: E.containerTitle,
        children: t
      }), n]
    }), "footer" === o && (0, i.jsxs)(f.FormSection, {
      className: E.containerFooter,
      children: [(0, i.jsx)(f.Tooltip, {
        text: m.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, i.jsx)(f.Button, {
          ...e,
          className: a()(E.removeButton, E.button),
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.BLANK,
          onClick: s,
          disabled: !l,
          children: m.default.Messages.REMOVE
        })
      }), (0, i.jsx)(f.Button, {
        className: E.button,
        size: f.Button.Sizes.SMALL,
        color: f.Button.Colors.PRIMARY,
        onClick: r,
        children: m.default.Messages.EDIT
      })]
    })]
  })
}
let _ = "FORM_FIELD";

function h(e) {
  let {
    index: t,
    field: n,
    isDropHovered: s,
    onDrop: u
  } = e, c = (0, l.debounce)(async (e, t, n) => {
    await u(e, t, n)
  }), f = r.useRef(null), [, m] = (0, o.useDrag)({
    type: _,
    item: {
      index: t,
      field: n
    },
    end: (e, t) => {
      null != e && !t.didDrop() && c(e.field, null, !0)
    }
  }), [, h] = (0, o.useDrop)({
    accept: _,
    hover: (e, n) => {
      var i;
      let {
        index: r
      } = e, s = null === (i = f.current) || void 0 === i ? void 0 : i.getBoundingClientRect(), a = n.getClientOffset();
      if (null == s || null == a) return;
      let l = (s.bottom - s.top) / 2,
        o = a.y - s.top;
      (!(r < t) || !(o < l)) && (!(r > t) || !(o < l)) && r !== t && c(e.field, t, !1)
    },
    drop: e => {
      c(e.field, t, !0)
    }
  });
  return r.useLayoutEffect(() => (m(h(f)), () => {
    h(null), m(null)
  }), [m, h]), (0, i.jsxs)("div", {
    ref: f,
    "data-dnd-name": "field-".concat(t),
    className: a()(E.dragContainer, {
      [E.dropHovered]: s
    }),
    children: [(0, i.jsx)("div", {
      className: E.dragIconContainer,
      children: (0, i.jsx)(p.default, {
        className: E.dragIcon,
        color: d.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, i.jsx)(I, {
      ...e
    })]
  })
}

function T(e) {
  return (0, i.jsxs)("div", {
    className: E.formFieldContainer,
    children: [(0, i.jsx)("div", {
      className: E.spacingContainer,
      children: e.isDragEnabled ? (0, i.jsx)(h, {
        ...e
      }) : (0, i.jsx)(I, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, i.jsxs)("div", {
      className: E.actionButtonsContainer,
      children: [(0, i.jsx)(f.Clickable, {
        className: E.actionButton,
        onClick: e.onEdit,
        "aria-label": m.default.Messages.EDIT,
        children: (0, i.jsx)(u.PencilIcon, {
          width: 16,
          height: 16
        })
      }), e.canRemove && (0, i.jsx)(f.Clickable, {
        className: E.actionButton,
        onClick: e.onRemove,
        "aria-label": m.default.Messages.REMOVE,
        children: (0, i.jsx)(c.TrashIcon, {
          width: 16,
          height: 16
        })
      })]
    })]
  })
}