"use strict";
n.r(t), n.d(t, {
  ForumTagOverflow: function() {
    return E
  },
  default: function() {
    return M
  }
}), n("47120");
var u, l, r = n("735250"),
  a = n("470079"),
  i = n("120356"),
  o = n.n(i),
  s = n("924826"),
  d = n("442837"),
  f = n("481060"),
  c = n("596454"),
  m = n("607070"),
  g = n("339085"),
  S = n("465670"),
  h = n("689938"),
  T = n("637410");

function M(e) {
  let {
    tag: t,
    size: n = 1,
    disabled: u,
    className: l,
    onClick: i,
    onRemove: M,
    selected: E,
    ariaLabel: _
  } = e, {
    name: p,
    emojiId: C,
    emojiName: v
  } = t, A = null != M, [F, I] = a.useState(!1), N = (0, d.useStateFromStores)([g.default], () => null != C ? g.default.getUsableCustomEmojiById(C) : null), b = A || null != i, y = (!A || !F) && (null != C || null != v), O = 0 === n, x = a.useRef(null), R = (0, d.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), L = (0, r.jsxs)(r.Fragment, {
    children: [y ? (0, r.jsx)(c.default, {
      className: o()(T.emoji, {
        [T.small]: O
      }),
      emojiId: C,
      emojiName: v,
      animated: !!(null == N ? void 0 : N.animated),
      size: "reaction"
    }) : null, F && A && (0, r.jsx)("div", {
      className: T.closeCircle,
      children: (0, r.jsx)(S.default, {
        className: T.close
      })
    }), (0, r.jsx)(f.Text, {
      variant: O ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: p
    })]
  }), P = {
    key: t.id,
    className: o()(T.pill, {
      [T.disabled]: u,
      [T.clickable]: b,
      [T.small]: O,
      [T.selected]: E
    }, l),
    onClick: e => {
      null == i || i(e), null == M || M(t), !R && null != x.current && x.current.blur()
    },
    onMouseEnter: () => A && I(!0),
    onMouseLeave: () => A && I(!1)
  }, U = (0, s.useListItem)("forum-tag-".concat(t.id));
  return b ? (0, r.jsx)(f.Clickable, {
    ...U,
    innerRef: x,
    focusProps: {
      ringTarget: x
    },
    "aria-label": null != _ ? _ : h.default.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: p
    }),
    role: "button",
    "aria-pressed": E,
    ...P,
    children: L
  }) : (0, r.jsx)("div", {
    ...P,
    children: L
  })
}

function E(e) {
  let {
    tags: t,
    count: n,
    size: u = 1
  } = e, l = 0 === u;
  return (0, r.jsx)(f.Tooltip, {
    "aria-label": h.default.Messages.FORUM_TAGS,
    text: (0, r.jsx)(r.Fragment, {
      children: t.map(e => (0, r.jsx)(M, {
        tag: e,
        className: T.tooltipPill,
        size: M.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, r.jsx)("div", {
      ...e,
      className: o()(T.pill, {
        [T.small]: l
      }),
      children: (0, r.jsxs)(f.Text, {
        variant: l ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", n]
      })
    })
  })
}(l = u || (u = {}))[l.SMALL = 0] = "SMALL", l[l.MEDIUM = 1] = "MEDIUM", M.Sizes = u