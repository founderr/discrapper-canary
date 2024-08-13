s.d(t, {
  Z: function() {
return f;
  }
});
var n = s(735250),
  l = s(470079),
  a = s(120356),
  i = s.n(a),
  r = s(442837),
  o = s(692547),
  d = s(481060),
  c = s(787014),
  u = s(239091),
  h = s(603211),
  m = s(710344),
  g = s(695346),
  E = s(496675),
  T = s(572004),
  p = s(479099),
  N = s(710352),
  _ = s(981631),
  S = s(689938),
  x = s(456778);

function f(e) {
  let {
channel: t
  } = e, a = (0, r.e7)([E.Z], () => E.Z.can(_.Plq.MANAGE_CHANNELS, t), [t]), h = t.availableTags.length >= N.pC, p = t.availableTags.length > 0, f = l.useCallback(() => {
let e = t.availableTags.length >= N.pC;
a && !e && (0, d.openModalLazy)(async () => {
  let {
    default: e
  } = await s.e('21971').then(s.bind(s, 201049));
  return s => (0, n.jsx)(e, {
    ...s,
    channelId: t.id,
    guildId: t.guild_id
  });
});
  }, [
t,
a
  ]), M = l.useCallback(e => {
a && (0, d.openModalLazy)(async () => {
  let {
    default: l
  } = await s.e('21971').then(s.bind(s, 201049));
  return s => (0, n.jsx)(l, {
    ...s,
    channelId: t.id,
    guildId: t.guild_id,
    tag: e
  });
});
  }, [
a,
t
  ]);

  function I(e, t) {
let l = g.Sb.getSetting();
T.wS && l && (0, u.jW)(e, async () => {
  let {
    default: e
  } = await s.e('29646').then(s.bind(s, 955116));
  return s => (0, n.jsx)(e, {
    ...s,
    tag: t
  });
});
  }
  let {
handleDragStart: R,
handleDragReset: Z,
handleDragComplete: v
  } = (0, m.Z)(t.availableTags, e => {
(0, c.pW)({
  availableTags: e
});
  });
  return (0, n.jsxs)('div', {
className: x.tags,
children: [
  p ? t.availableTags.map(e => (0, n.jsx)(C, {
    tag: e,
    availableTags: t.availableTags,
    canManageChannels: a,
    onTagClick: M,
    onTagContextMenu: I,
    onDragComplete: v,
    onDragReset: Z,
    onDragStart: R
  }, e.id)) : null,
  p ? (0, n.jsx)(d.Clickable, {
    onClick: f,
    className: i()(x.addTags, {
      [x.disabled]: !a || h
    }),
    children: (0, n.jsx)(d.PlusSmallIcon, {
      size: 'custom',
      'aria-label': S.Z.Messages.FORUM_TAG_CREATE,
      color: o.Z.unsafe_rawColors.WHITE_500.css,
      width: 20,
      height: 20
    })
  }) : (0, n.jsx)(d.Button, {
    disabled: !a,
    onClick: f,
    children: S.Z.Messages.FORUM_TAG_CREATE
  })
]
  });
}

function C(e) {
  let {
tag: t,
availableTags: s,
canManageChannels: l,
onTagClick: a,
onTagContextMenu: r,
onDragComplete: o,
onDragStart: d,
onDragReset: c
  } = e, u = s.findIndex(e => e.id === t.id), {
drag: m,
dragSourcePosition: g,
drop: E,
setIsDraggable: T
  } = (0, h.Z)({
type: 'CHANNEL_SETTINGS_FORUM_TAGS',
index: u,
optionId: t.id,
onDragStart: d,
onDragComplete: o,
onDragReset: c
  });
  return (0, n.jsx)('div', {
className: i()(x.container, {
  [x.dropIndicatorBefore]: null != g && u < g,
  [x.dropIndicatorAfter]: null != g && u > g
}),
ref: e => m(E(e)),
onMouseEnter: () => T(l),
onMouseLeave: () => T(!1),
children: (0, n.jsx)(p.Z, {
  tag: t,
  disabled: !l,
  ariaLabel: S.Z.Messages.FORUM_TAG_EDIT_LABEL.format({
    name: t.name
  }),
  onClick: l ? () => a(t) : void 0,
  onContextMenu: r
})
  });
}