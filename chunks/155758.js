"use strict";
t.d(s, {
  p: function() {
    return h
  },
  s: function() {
    return g
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(294796),
  o = t(481060),
  c = t(153124),
  d = t(817460),
  u = t(723047),
  E = t(528027),
  _ = t(686807),
  I = t(157018),
  T = t(828656),
  N = t(689938),
  m = t(561555);

function S(e) {
  let {
    guildId: s,
    emojiId: t,
    emojiName: l,
    title: r,
    description: c,
    targetType: d,
    index: u,
    dndName: _,
    onEdit: I,
    onMove: S,
    disabled: h = !1
  } = e, g = i.useRef(null), C = i.useRef(null), {
    drag: x,
    dragPreview: R,
    drop: L,
    isDragging: O
  } = (0, T.Z)(g, d, u, S);
  return x(C), R(L(g)), (0, n.jsxs)("div", {
    ref: g,
    className: a()(m.card, {
      [m.cardDragging]: O,
      [m.disabled]: h
    }),
    children: [(0, n.jsxs)("div", {
      className: m.emojiWrapper,
      children: [(0, n.jsx)(E.Z, {
        guildId: s,
        emojiId: t,
        emojiName: l,
        className: m.emoji
      }), !h && (0, n.jsx)("div", {
        ref: C,
        className: m.dragIconWrapper,
        "data-dnd-name": _,
        children: (0, n.jsx)(o.DragIcon, {
          size: "xs",
          color: "currentColor",
          className: m.dragIcon
        })
      })]
    }), (0, n.jsxs)("div", {
      className: m.cardText,
      children: [(0, n.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: r
      }), (0, n.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: c
      })]
    }), (0, n.jsx)("div", {
      className: m.cardActions,
      children: !h && (0, n.jsx)(o.Clickable, {
        className: m.cardActionButton,
        onClick: h ? void 0 : I,
        "aria-label": N.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EDIT_ARIA_LABEL,
        "aria-disabled": h,
        children: (0, n.jsx)(o.PencilIcon, {
          size: "xs",
          color: "currentColor",
          className: m.cardActionButtonIcon
        })
      })
    })]
  })
}

function h(e) {
  let {
    benefits: s,
    onEdit: t,
    onMove: l,
    guildId: o
  } = e, E = (0, c.Dt)(), {
    isDragging: T
  } = (0, r.f)(e => ({
    isDragging: e.getItemType() === E
  })), N = (0, u.mY)();
  return 0 === s.length ? null : (0, n.jsx)("div", {
    className: a()(m.container, {
      [m.isDragging]: T
    }),
    children: s.map((e, s) => (0, n.jsxs)(i.Fragment, {
      children: [s > 0 ? (0, n.jsx)("div", {
        className: m.divider
      }) : null, (0, n.jsx)(S, {
        guildId: o,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, _.Z)(e),
        description: e.description,
        targetType: E,
        index: s,
        dndName: (0, I.Z)(e),
        onEdit: () => t(s),
        onMove: l,
        disabled: N
      })]
    }, (0, d.ab)(e)))
  })
}

function g(e) {
  let {
    onClick: s,
    children: t,
    disabled: i = !1
  } = e;
  return (0, n.jsx)(o.Clickable, {
    className: m.container,
    onClick: i ? void 0 : s,
    "aria-disabled": i,
    children: (0, n.jsxs)("div", {
      className: a()(m.card, m.addBenefit, {
        [m.disabled]: i
      }),
      children: [(0, n.jsx)("div", {
        className: m.emojiWrapper,
        children: (0, n.jsx)(o.CirclePlusIcon, {
          size: "xs",
          color: "currentColor",
          className: m.addBenefitIcon
        })
      }), (0, n.jsx)("div", {
        className: m.cardText,
        children: (0, n.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: t
        })
      })]
    })
  })
}