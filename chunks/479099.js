t.d(n, {
  Z: function() {
return p;
  },
  f: function() {
return S;
  }
}), t(47120);
var r, i, o = t(735250),
  l = t(470079),
  u = t(120356),
  a = t.n(u),
  s = t(91192),
  c = t(442837),
  d = t(481060),
  _ = t(596454),
  f = t(607070),
  E = t(339085),
  I = t(689938),
  g = t(597677);

function p(e) {
  let {
tag: n,
size: t = 1,
disabled: r,
className: i,
onClick: u,
onRemove: p,
onContextMenu: S,
selected: C,
ariaLabel: T
  } = e, {
name: m,
emojiId: A,
emojiName: N
  } = n, h = null != p, [v, L] = l.useState(!1), R = (0, c.e7)([E.Z], () => null != A ? E.Z.getUsableCustomEmojiById(A) : null), M = h || null != u, O = (!h || !v) && (null != A || null != N), b = 0 === t, D = l.useRef(null), U = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled), Z = (0, o.jsxs)(o.Fragment, {
children: [
  O ? (0, o.jsx)(_.Z, {
    className: a()(g.emoji, {
      [g.small]: b
    }),
    emojiId: A,
    emojiName: N,
    animated: !!(null == R ? void 0 : R.animated),
    size: 'reaction'
  }) : null,
  v && h && (0, o.jsx)('div', {
    className: g.closeCircle,
    children: (0, o.jsx)(d.XSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: g.close
    })
  }),
  (0, o.jsx)(d.Text, {
    variant: b ? 'text-xs/semibold' : 'text-sm/semibold',
    lineClamp: 1,
    children: m
  })
]
  }), P = {
key: n.id,
className: a()(g.pill, {
  [g.disabled]: r,
  [g.clickable]: M,
  [g.small]: b,
  [g.selected]: C
}, i),
onClick: e => {
  null == u || u(e), null == p || p(n), !U && null != D.current && D.current.blur();
},
onContextMenu: e => null == S ? void 0 : S(e, n),
onMouseEnter: () => h && L(!0),
onMouseLeave: () => h && L(!1)
  }, y = (0, s.JA)('forum-tag-'.concat(n.id));
  return M ? (0, o.jsx)(d.Clickable, {
...y,
innerRef: D,
focusProps: {
  ringTarget: D
},
'aria-label': null != T ? T : I.Z.Messages.FORUM_TAG_A11Y_FILTER_BY_TAG.format({
  tagName: m
}),
role: 'button',
'aria-pressed': C,
...P,
children: Z
  }) : (0, o.jsx)('div', {
...P,
children: Z
  });
}

function S(e) {
  let {
tags: n,
count: t,
size: r = 1
  } = e, i = 0 === r;
  return (0, o.jsx)(d.Tooltip, {
'aria-label': I.Z.Messages.FORUM_TAGS,
text: (0, o.jsx)(o.Fragment, {
  children: n.map(e => (0, o.jsx)(p, {
    tag: e,
    className: g.tooltipPill,
    size: p.Sizes.SMALL
  }, e.id))
}),
children: e => (0, o.jsx)('div', {
  ...e,
  className: a()(g.pill, {
    [g.small]: i
  }),
  children: (0, o.jsxs)(d.Text, {
    variant: i ? 'text-xs/semibold' : 'text-sm/semibold',
    children: [
      '+',
      t
    ]
  })
})
  });
}
(i = r || (r = {}))[i.SMALL = 0] = 'SMALL', i[i.MEDIUM = 1] = 'MEDIUM', p.Sizes = r;