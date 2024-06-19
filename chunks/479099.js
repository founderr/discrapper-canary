t.d(n, {
  Z: function() {
    return g
  },
  f: function() {
    return p
  }
}), t(47120);
var r, i, l = t(735250),
  o = t(470079),
  u = t(120356),
  s = t.n(u),
  a = t(91192),
  c = t(442837),
  d = t(481060),
  f = t(596454),
  E = t(607070),
  _ = t(339085),
  I = t(689938),
  S = t(169320);

function g(e) {
  let {
    tag: n,
    size: t = 1,
    disabled: r,
    className: i,
    onClick: u,
    onRemove: g,
    selected: p,
    ariaLabel: T
  } = e, {
    name: h,
    emojiId: C,
    emojiName: m
  } = n, N = null != g, [R, O] = o.useState(!1), M = (0, c.e7)([_.Z], () => null != C ? _.Z.getUsableCustomEmojiById(C) : null), v = N || null != u, A = (!N || !R) && (null != C || null != m), b = 0 === t, P = o.useRef(null), Z = (0, c.e7)([E.Z], () => E.Z.keyboardModeEnabled), x = (0, l.jsxs)(l.Fragment, {
    children: [A ? (0, l.jsx)(f.Z, {
      className: s()(S.emoji, {
        [S.small]: b
      }),
      emojiId: C,
      emojiName: m,
      animated: !!(null == M ? void 0 : M.animated),
      size: "reaction"
    }) : null, R && N && (0, l.jsx)("div", {
      className: S.closeCircle,
      children: (0, l.jsx)(d.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: S.close
      })
    }), (0, l.jsx)(d.Text, {
      variant: b ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: h
    })]
  }), L = {
    key: n.id,
    className: s()(S.pill, {
      [S.disabled]: r,
      [S.clickable]: v,
      [S.small]: b,
      [S.selected]: p
    }, i),
    onClick: e => {
      null == u || u(e), null == g || g(n), !Z && null != P.current && P.current.blur()
    },
    onMouseEnter: () => N && O(!0),
    onMouseLeave: () => N && O(!1)
  }, D = (0, a.JA)("forum-tag-".concat(n.id));
  return v ? (0, l.jsx)(d.Clickable, {
    ...D,
    innerRef: P,
    focusProps: {
      ringTarget: P
    },
    "aria-label": null != T ? T : I.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: h
    }),
    role: "button",
    "aria-pressed": p,
    ...L,
    children: x
  }) : (0, l.jsx)("div", {
    ...L,
    children: x
  })
}

function p(e) {
  let {
    tags: n,
    count: t,
    size: r = 1
  } = e, i = 0 === r;
  return (0, l.jsx)(d.Tooltip, {
    "aria-label": I.Z.Messages.FORUM_TAGS,
    text: (0, l.jsx)(l.Fragment, {
      children: n.map(e => (0, l.jsx)(g, {
        tag: e,
        className: S.tooltipPill,
        size: g.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: s()(S.pill, {
        [S.small]: i
      }),
      children: (0, l.jsxs)(d.Text, {
        variant: i ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", t]
      })
    })
  })
}(i = r || (r = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", g.Sizes = r