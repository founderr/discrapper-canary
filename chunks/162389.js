t.d(s, {
  Z: function() {
    return S
  }
});
var l = t(735250),
  n = t(470079),
  i = t(120356),
  a = t.n(i),
  r = t(442837),
  o = t(692547),
  d = t(481060),
  c = t(787014),
  u = t(603211),
  h = t(710344),
  m = t(496675),
  g = t(479099),
  E = t(710352),
  N = t(981631),
  T = t(689938),
  p = t(447334);

function S(e) {
  let {
    channel: s
  } = e, i = (0, r.e7)([m.Z], () => m.Z.can(N.Plq.MANAGE_CHANNELS, s), [s]), u = s.availableTags.length >= E.pC, g = s.availableTags.length > 0, S = n.useCallback(() => {
    let e = s.availableTags.length >= E.pC;
    i && !e && (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("21971")]).then(t.bind(t, 201049));
      return t => (0, l.jsx)(e, {
        ...t,
        channelId: s.id,
        guildId: s.guild_id
      })
    })
  }, [s, i]), M = n.useCallback(e => {
    i && (0, d.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("21971")]).then(t.bind(t, 201049));
      return t => (0, l.jsx)(n, {
        ...t,
        channelId: s.id,
        guildId: s.guild_id,
        tag: e
      })
    })
  }, [i, s]), {
    handleDragStart: C,
    handleDragReset: I,
    handleDragComplete: R
  } = (0, h.Z)(s.availableTags, e => {
    (0, c.pW)({
      availableTags: e
    })
  });
  return (0, l.jsxs)("div", {
    className: p.tags,
    children: [g ? s.availableTags.map(e => (0, l.jsx)(x, {
      tag: e,
      availableTags: s.availableTags,
      canManageChannels: i,
      onTagClick: M,
      onDragComplete: R,
      onDragReset: I,
      onDragStart: C
    }, e.id)) : null, g ? (0, l.jsx)(d.Clickable, {
      onClick: S,
      className: a()(p.addTags, {
        [p.disabled]: !i || u
      }),
      children: (0, l.jsx)(d.PlusSmallIcon, {
        size: "custom",
        "aria-label": T.Z.Messages.FORUM_TAG_CREATE,
        color: o.Z.unsafe_rawColors.WHITE_500.css,
        width: 20,
        height: 20
      })
    }) : (0, l.jsx)(d.Button, {
      disabled: !i,
      onClick: S,
      children: T.Z.Messages.FORUM_TAG_CREATE
    })]
  })
}

function x(e) {
  let {
    tag: s,
    availableTags: t,
    canManageChannels: n,
    onTagClick: i,
    onDragComplete: r,
    onDragStart: o,
    onDragReset: d
  } = e, c = t.findIndex(e => e.id === s.id), {
    drag: h,
    dragSourcePosition: m,
    drop: E,
    setIsDraggable: N
  } = (0, u.Z)({
    type: "CHANNEL_SETTINGS_FORUM_TAGS",
    index: c,
    optionId: s.id,
    onDragStart: o,
    onDragComplete: r,
    onDragReset: d
  });
  return (0, l.jsx)("div", {
    className: a()(p.container, {
      [p.dropIndicatorBefore]: null != m && c < m,
      [p.dropIndicatorAfter]: null != m && c > m
    }),
    ref: e => h(E(e)),
    onMouseEnter: () => N(n),
    onMouseLeave: () => N(!1),
    children: (0, l.jsx)(g.Z, {
      tag: s,
      disabled: !n,
      ariaLabel: T.Z.Messages.FORUM_TAG_EDIT_LABEL.format({
        name: s.name
      }),
      onClick: n ? () => i(s) : void 0
    })
  })
}