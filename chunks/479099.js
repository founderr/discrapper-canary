"use strict";
l.r(t), l.d(t, {
  ForumTagOverflow: function() {
    return h
  },
  default: function() {
    return g
  }
}), l("47120");
var i, n, a = l("735250"),
  s = l("470079"),
  r = l("120356"),
  o = l.n(r),
  u = l("924826"),
  d = l("442837"),
  c = l("481060"),
  f = l("596454"),
  m = l("607070"),
  _ = l("339085"),
  p = l("465670"),
  E = l("689938"),
  M = l("637410");

function g(e) {
  let {
    tag: t,
    size: l = 1,
    disabled: i,
    className: n,
    onClick: r,
    onRemove: g,
    selected: h,
    ariaLabel: A
  } = e, {
    name: x,
    emojiId: T,
    emojiName: I
  } = t, C = null != g, [O, L] = s.useState(!1), S = (0, d.useStateFromStores)([_.default], () => null != T ? _.default.getUsableCustomEmojiById(T) : null), R = C || null != r, v = (!C || !O) && (null != T || null != I), P = 0 === l, b = s.useRef(null), U = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), y = (0, a.jsxs)(a.Fragment, {
    children: [v ? (0, a.jsx)(f.default, {
      className: o()(M.emoji, {
        [M.small]: P
      }),
      emojiId: T,
      emojiName: I,
      animated: !!(null == S ? void 0 : S.animated),
      size: "reaction"
    }) : null, O && C && (0, a.jsx)("div", {
      className: M.closeCircle,
      children: (0, a.jsx)(p.default, {
        className: M.close
      })
    }), (0, a.jsx)(c.Text, {
      variant: P ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: x
    })]
  }), D = {
    key: t.id,
    className: o()(M.pill, {
      [M.disabled]: i,
      [M.clickable]: R,
      [M.small]: P,
      [M.selected]: h
    }, n),
    onClick: e => {
      null == r || r(e), null == g || g(t), !U && null != b.current && b.current.blur()
    },
    onMouseEnter: () => C && L(!0),
    onMouseLeave: () => C && L(!1)
  }, z = (0, u.useListItem)("forum-tag-".concat(t.id));
  return R ? (0, a.jsx)(c.Clickable, {
    ...z,
    innerRef: b,
    focusProps: {
      ringTarget: b
    },
    "aria-label": null != A ? A : E.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: x
    }),
    role: "button",
    "aria-pressed": h,
    ...D,
    children: y
  }) : (0, a.jsx)("div", {
    ...D,
    children: y
  })
}

function h(e) {
  let {
    tags: t,
    count: l,
    size: i = 1
  } = e, n = 0 === i;
  return (0, a.jsx)(c.Tooltip, {
    "aria-label": E.default.Messages.FORUM_TAGS,
    text: (0, a.jsx)(a.Fragment, {
      children: t.map(e => (0, a.jsx)(g, {
        tag: e,
        className: M.tooltipPill,
        size: g.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, a.jsx)("div", {
      ...e,
      className: o()(M.pill, {
        [M.small]: n
      }),
      children: (0, a.jsxs)(c.Text, {
        variant: n ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", l]
      })
    })
  })
}(n = i || (i = {}))[n.SMALL = 0] = "SMALL", n[n.MEDIUM = 1] = "MEDIUM", g.Sizes = i