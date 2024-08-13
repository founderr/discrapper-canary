l.d(t, {
  Z: function() {
return E;
  },
  f: function() {
return A;
  }
}), l(47120);
var i, n, s = l(735250),
  a = l(470079),
  o = l(120356),
  r = l.n(o),
  d = l(91192),
  u = l(442837),
  c = l(481060),
  _ = l(596454),
  m = l(607070),
  f = l(339085),
  h = l(689938),
  g = l(109756);

function E(e) {
  let {
tag: t,
size: l = 1,
disabled: i,
className: n,
onClick: o,
onRemove: E,
onContextMenu: A,
selected: p,
ariaLabel: M
  } = e, {
name: x,
emojiId: I,
emojiName: T
  } = t, v = null != E, [O, R] = a.useState(!1), b = (0, u.e7)([f.Z], () => null != I ? f.Z.getUsableCustomEmojiById(I) : null), C = v || null != o, L = (!v || !O) && (null != I || null != T), j = 0 === l, P = a.useRef(null), Z = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled), D = (0, s.jsxs)(s.Fragment, {
children: [
  L ? (0, s.jsx)(_.Z, {
    className: r()(g.emoji, {
      [g.small]: j
    }),
    emojiId: I,
    emojiName: T,
    animated: !!(null == b ? void 0 : b.animated),
    size: 'reaction'
  }) : null,
  O && v && (0, s.jsx)('div', {
    className: g.closeCircle,
    children: (0, s.jsx)(c.XSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: g.close
    })
  }),
  (0, s.jsx)(c.Text, {
    variant: j ? 'text-xs/semibold' : 'text-sm/semibold',
    lineClamp: 1,
    children: x
  })
]
  }), S = {
key: t.id,
className: r()(g.pill, {
  [g.disabled]: i,
  [g.clickable]: C,
  [g.small]: j,
  [g.selected]: p
}, n),
onClick: e => {
  null == o || o(e), null == E || E(t), !Z && null != P.current && P.current.blur();
},
onContextMenu: e => null == A ? void 0 : A(e, t),
onMouseEnter: () => v && R(!0),
onMouseLeave: () => v && R(!1)
  }, N = (0, d.JA)('forum-tag-'.concat(t.id));
  return C ? (0, s.jsx)(c.Clickable, {
...N,
innerRef: P,
focusProps: {
  ringTarget: P
},
'aria-label': null != M ? M : h.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
  tagName: x
}),
role: 'button',
'aria-pressed': p,
...S,
children: D
  }) : (0, s.jsx)('div', {
...S,
children: D
  });
}

function A(e) {
  let {
tags: t,
count: l,
size: i = 1
  } = e, n = 0 === i;
  return (0, s.jsx)(c.Tooltip, {
'aria-label': h.Z.Messages.FORUM_TAGS,
text: (0, s.jsx)(s.Fragment, {
  children: t.map(e => (0, s.jsx)(E, {
    tag: e,
    className: g.tooltipPill,
    size: E.Sizes.SMALL
  }, e.id))
}),
children: e => (0, s.jsx)('div', {
  ...e,
  className: r()(g.pill, {
    [g.small]: n
  }),
  children: (0, s.jsxs)(c.Text, {
    variant: n ? 'text-xs/semibold' : 'text-sm/semibold',
    children: [
      '+',
      l
    ]
  })
})
  });
}
(n = i || (i = {}))[n.SMALL = 0] = 'SMALL', n[n.MEDIUM = 1] = 'MEDIUM', E.Sizes = i;