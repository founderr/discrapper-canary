t.d(n, {
  Z: function() {
    return p
  },
  f: function() {
    return m
  }
}), t(47120);
var i, r, o = t(735250),
  l = t(470079),
  u = t(120356),
  s = t.n(u),
  a = t(91192),
  c = t(442837),
  d = t(481060),
  _ = t(596454),
  f = t(607070),
  E = t(339085),
  I = t(689938),
  g = t(169320);

function p(e) {
  let {
    tag: n,
    size: t = 1,
    disabled: i,
    className: r,
    onClick: u,
    onRemove: p,
    selected: m,
    ariaLabel: S
  } = e, {
    name: C,
    emojiId: T,
    emojiName: N
  } = n, h = null != p, [v, A] = l.useState(!1), R = (0, c.e7)([E.Z], () => null != T ? E.Z.getUsableCustomEmojiById(T) : null), b = h || null != u, M = (!h || !v) && (null != T || null != N), L = 0 === t, O = l.useRef(null), Z = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled), D = (0, o.jsxs)(o.Fragment, {
    children: [M ? (0, o.jsx)(_.Z, {
      className: s()(g.emoji, {
        [g.small]: L
      }),
      emojiId: T,
      emojiName: N,
      animated: !!(null == R ? void 0 : R.animated),
      size: "reaction"
    }) : null, v && h && (0, o.jsx)("div", {
      className: g.closeCircle,
      children: (0, o.jsx)(d.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: g.close
      })
    }), (0, o.jsx)(d.Text, {
      variant: L ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: C
    })]
  }), x = {
    key: n.id,
    className: s()(g.pill, {
      [g.disabled]: i,
      [g.clickable]: b,
      [g.small]: L,
      [g.selected]: m
    }, r),
    onClick: e => {
      null == u || u(e), null == p || p(n), !Z && null != O.current && O.current.blur()
    },
    onMouseEnter: () => h && A(!0),
    onMouseLeave: () => h && A(!1)
  }, P = (0, a.JA)("forum-tag-".concat(n.id));
  return b ? (0, o.jsx)(d.Clickable, {
    ...P,
    innerRef: O,
    focusProps: {
      ringTarget: O
    },
    "aria-label": null != S ? S : I.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: C
    }),
    role: "button",
    "aria-pressed": m,
    ...x,
    children: D
  }) : (0, o.jsx)("div", {
    ...x,
    children: D
  })
}

function m(e) {
  let {
    tags: n,
    count: t,
    size: i = 1
  } = e, r = 0 === i;
  return (0, o.jsx)(d.Tooltip, {
    "aria-label": I.Z.Messages.FORUM_TAGS,
    text: (0, o.jsx)(o.Fragment, {
      children: n.map(e => (0, o.jsx)(p, {
        tag: e,
        className: g.tooltipPill,
        size: p.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, o.jsx)("div", {
      ...e,
      className: s()(g.pill, {
        [g.small]: r
      }),
      children: (0, o.jsxs)(d.Text, {
        variant: r ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", t]
      })
    })
  })
}(r = i || (i = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", p.Sizes = i