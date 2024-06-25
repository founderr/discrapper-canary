t.d(n, {
  Z: function() {
    return S
  },
  f: function() {
    return p
  }
}), t(47120);
var i, r, l = t(735250),
  o = t(470079),
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

function S(e) {
  let {
    tag: n,
    size: t = 1,
    disabled: i,
    className: r,
    onClick: u,
    onRemove: S,
    selected: p,
    ariaLabel: m
  } = e, {
    name: C,
    emojiId: T,
    emojiName: N
  } = n, A = null != S, [v, h] = o.useState(!1), R = (0, c.e7)([E.Z], () => null != T ? E.Z.getUsableCustomEmojiById(T) : null), L = A || null != u, M = (!A || !v) && (null != T || null != N), O = 0 === t, Z = o.useRef(null), D = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled), b = (0, l.jsxs)(l.Fragment, {
    children: [M ? (0, l.jsx)(_.Z, {
      className: s()(g.emoji, {
        [g.small]: O
      }),
      emojiId: T,
      emojiName: N,
      animated: !!(null == R ? void 0 : R.animated),
      size: "reaction"
    }) : null, v && A && (0, l.jsx)("div", {
      className: g.closeCircle,
      children: (0, l.jsx)(d.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: g.close
      })
    }), (0, l.jsx)(d.Text, {
      variant: O ? "text-xs/semibold" : "text-sm/semibold",
      lineClamp: 1,
      children: C
    })]
  }), P = {
    key: n.id,
    className: s()(g.pill, {
      [g.disabled]: i,
      [g.clickable]: L,
      [g.small]: O,
      [g.selected]: p
    }, r),
    onClick: e => {
      null == u || u(e), null == S || S(n), !D && null != Z.current && Z.current.blur()
    },
    onMouseEnter: () => A && h(!0),
    onMouseLeave: () => A && h(!1)
  }, x = (0, a.JA)("forum-tag-".concat(n.id));
  return L ? (0, l.jsx)(d.Clickable, {
    ...x,
    innerRef: Z,
    focusProps: {
      ringTarget: Z
    },
    "aria-label": null != m ? m : I.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
      tagName: C
    }),
    role: "button",
    "aria-pressed": p,
    ...P,
    children: b
  }) : (0, l.jsx)("div", {
    ...P,
    children: b
  })
}

function p(e) {
  let {
    tags: n,
    count: t,
    size: i = 1
  } = e, r = 0 === i;
  return (0, l.jsx)(d.Tooltip, {
    "aria-label": I.Z.Messages.FORUM_TAGS,
    text: (0, l.jsx)(l.Fragment, {
      children: n.map(e => (0, l.jsx)(S, {
        tag: e,
        className: g.tooltipPill,
        size: S.Sizes.SMALL
      }, e.id))
    }),
    children: e => (0, l.jsx)("div", {
      ...e,
      className: s()(g.pill, {
        [g.small]: r
      }),
      children: (0, l.jsxs)(d.Text, {
        variant: r ? "text-xs/semibold" : "text-sm/semibold",
        children: ["+", t]
      })
    })
  })
}(r = i || (i = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", S.Sizes = i