"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("392711"),
  _ = s("176617"),
  r = s("299468"),
  u = s("490236"),
  o = s("692547"),
  T = s("481060"),
  d = s("548343"),
  A = s("689938"),
  I = s("17359");

function L(e) {
  let {
    title: t,
    children: s,
    onEdit: n,
    onRemove: i,
    canRemove: l,
    actionsLocation: _
  } = e;
  return (0, a.jsxs)("div", {
    className: I.backgroundContainer,
    children: [(0, a.jsxs)("div", {
      className: I.containerPadding,
      children: [(0, a.jsx)(T.FormTitle, {
        tag: "h3",
        className: I.containerTitle,
        children: t
      }), s]
    }), "footer" === _ && (0, a.jsxs)(T.FormSection, {
      className: I.containerFooter,
      children: [(0, a.jsx)(T.Tooltip, {
        text: A.default.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
        shouldShow: !l,
        children: e => (0, a.jsx)(T.Button, {
          ...e,
          className: E()(I.removeButton, I.button),
          size: T.Button.Sizes.SMALL,
          look: T.Button.Looks.BLANK,
          onClick: i,
          disabled: !l,
          children: A.default.Messages.REMOVE
        })
      }), (0, a.jsx)(T.Button, {
        className: I.button,
        size: T.Button.Sizes.SMALL,
        color: T.Button.Colors.PRIMARY,
        onClick: n,
        children: A.default.Messages.EDIT
      })]
    })]
  })
}
let c = "FORM_FIELD";

function N(e) {
  let {
    index: t,
    field: s,
    isDropHovered: i,
    onDrop: r
  } = e, u = (0, l.debounce)(async (e, t, s) => {
    await r(e, t, s)
  }), T = n.useRef(null), [, A] = (0, _.useDrag)({
    type: c,
    item: {
      index: t,
      field: s
    },
    end: (e, t) => {
      null != e && !t.didDrop() && u(e.field, null, !0)
    }
  }), [, N] = (0, _.useDrop)({
    accept: c,
    hover: (e, s) => {
      var a;
      let {
        index: n
      } = e, i = null === (a = T.current) || void 0 === a ? void 0 : a.getBoundingClientRect(), E = s.getClientOffset();
      if (null == i || null == E) return;
      let l = (i.bottom - i.top) / 2,
        _ = E.y - i.top;
      (!(n < t) || !(_ < l)) && (!(n > t) || !(_ < l)) && n !== t && u(e.field, t, !1)
    },
    drop: e => {
      u(e.field, t, !0)
    }
  });
  return n.useLayoutEffect(() => (A(N(T)), () => {
    N(null), A(null)
  }), [A, N]), (0, a.jsxs)("div", {
    ref: T,
    "data-dnd-name": "field-".concat(t),
    className: E()(I.dragContainer, {
      [I.dropHovered]: i
    }),
    children: [(0, a.jsx)("div", {
      className: I.dragIconContainer,
      children: (0, a.jsx)(d.default, {
        className: I.dragIcon,
        color: o.default.unsafe_rawColors.PRIMARY_400.css
      })
    }), (0, a.jsx)(L, {
      ...e
    })]
  })
}

function S(e) {
  return (0, a.jsxs)("div", {
    className: I.formFieldContainer,
    children: [(0, a.jsx)("div", {
      className: I.spacingContainer,
      children: e.isDragEnabled ? (0, a.jsx)(N, {
        ...e
      }) : (0, a.jsx)(L, {
        ...e
      })
    }), "side" === e.actionsLocation && (0, a.jsxs)("div", {
      className: I.actionButtonsContainer,
      children: [(0, a.jsx)(T.Clickable, {
        className: I.actionButton,
        onClick: e.onEdit,
        "aria-label": A.default.Messages.EDIT,
        children: (0, a.jsx)(r.PencilIcon, {
          width: 16,
          height: 16
        })
      }), e.canRemove && (0, a.jsx)(T.Clickable, {
        className: I.actionButton,
        onClick: e.onRemove,
        "aria-label": A.default.Messages.REMOVE,
        children: (0, a.jsx)(u.TrashIcon, {
          width: 16,
          height: 16
        })
      })]
    })]
  })
}