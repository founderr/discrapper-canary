"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
});
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  i = l.n(n),
  r = l("442837"),
  o = l("692547"),
  d = l("481060"),
  u = l("787014"),
  c = l("603211"),
  h = l("710344"),
  m = l("496675"),
  f = l("729285"),
  E = l("479099"),
  g = l("710352"),
  S = l("981631"),
  T = l("689938"),
  N = l("62184");

function p(e) {
  let {
    channel: t
  } = e, n = (0, r.useStateFromStores)([m.default], () => m.default.can(S.Permissions.MANAGE_CHANNELS, t), [t]), c = t.availableTags.length >= g.MAX_FORUM_TAGS, E = t.availableTags.length > 0, p = a.useCallback(() => {
    let e = t.availableTags.length >= g.MAX_FORUM_TAGS;
    n && !e && (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("21971")]).then(l.bind(l, "201049"));
      return l => (0, s.jsx)(e, {
        ...l,
        channelId: t.id,
        guildId: t.guild_id
      })
    })
  }, [t, n]), _ = a.useCallback(e => {
    n && (0, d.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([l.e("99387"), l.e("21971")]).then(l.bind(l, "201049"));
      return l => (0, s.jsx)(a, {
        ...l,
        channelId: t.id,
        guildId: t.guild_id,
        tag: e
      })
    })
  }, [n, t]), {
    handleDragStart: x,
    handleDragReset: M,
    handleDragComplete: I
  } = (0, h.default)(t.availableTags, e => {
    (0, u.updateChannel)({
      availableTags: e
    })
  });
  return (0, s.jsxs)("div", {
    className: N.tags,
    children: [E ? t.availableTags.map(e => (0, s.jsx)(C, {
      tag: e,
      availableTags: t.availableTags,
      canManageChannels: n,
      onTagClick: _,
      onDragComplete: I,
      onDragReset: M,
      onDragStart: x
    }, e.id)) : null, E ? (0, s.jsx)(d.Clickable, {
      onClick: p,
      className: i()(N.addTags, {
        [N.disabled]: !n || c
      }),
      children: (0, s.jsx)(f.default, {
        "aria-label": T.default.Messages.FORUM_TAG_CREATE,
        color: o.default.unsafe_rawColors.WHITE_500.css,
        width: 20,
        height: 20
      })
    }) : (0, s.jsx)(d.Button, {
      disabled: !n,
      onClick: p,
      children: T.default.Messages.FORUM_TAG_CREATE
    })]
  })
}

function C(e) {
  let {
    tag: t,
    availableTags: l,
    canManageChannels: a,
    onTagClick: n,
    onDragComplete: r,
    onDragStart: o,
    onDragReset: d
  } = e, u = l.findIndex(e => e.id === t.id), {
    drag: h,
    dragSourcePosition: m,
    drop: f,
    setIsDraggable: g
  } = (0, c.default)({
    type: "CHANNEL_SETTINGS_FORUM_TAGS",
    index: u,
    optionId: t.id,
    onDragStart: o,
    onDragComplete: r,
    onDragReset: d
  });
  return (0, s.jsx)("div", {
    className: i()(N.container, {
      [N.dropIndicatorBefore]: null != m && u < m,
      [N.dropIndicatorAfter]: null != m && u > m
    }),
    ref: e => h(f(e)),
    onMouseEnter: () => g(a),
    onMouseLeave: () => g(!1),
    children: (0, s.jsx)(E.default, {
      tag: t,
      disabled: !a,
      ariaLabel: T.default.Messages.FORUM_TAG_EDIT_LABEL.format({
        name: t.name
      }),
      onClick: a ? () => n(t) : void 0
    })
  })
}