n.d(t, {
  HZ: function() {
    return h
  },
  Rf: function() {
    return g
  },
  ZP: function() {
    return S
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  l = n(442837),
  i = n(481060),
  u = n(271383),
  c = n(51144),
  o = n(894017),
  E = n(79874),
  d = n(315416),
  N = n(236373),
  T = n(854698),
  _ = n(391174),
  m = n(95291),
  x = n(390966),
  D = n(689938),
  v = n(858625);

function h(e) {
  let {
    className: t,
    creator: n,
    guildId: a,
    isNew: _,
    isHub: m = !1,
    guildEvent: h,
    eventPreview: g,
    recurrenceId: S
  } = e, f = (0, d.Z)(a, h.id, S), L = null != h ? h : g, Z = (0, l.e7)([u.ZP], () => u.ZP.getNick(a, null == n ? void 0 : n.id), [a, n]);
  S = null == L || null != S ? S : (0, T.DK)(L);
  let {
    startTime: A
  } = (0, E.ZP)(null != h ? h : g, S), C = (0, o.Z)(S, h.id), I = (null == L ? void 0 : L.scheduled_start_time) != null ? (0, T.lh)(C, A, new Date(L.scheduled_start_time)) : null;
  if (null == L) return null;
  let {
    entity_type: R,
    status: j,
    recurrence_rule: p
  } = L;
  return (0, s.jsxs)("div", {
    className: r()(v.statusContainer, t),
    children: [(0, s.jsx)(x.z, {
      startTime: A.toISOString(),
      status: null != I ? I : j,
      eventType: R,
      isNew: _,
      recurrenceRule: (0, N.KV)(p),
      guildEventId: h.id,
      recurrenceId: S
    }), (0, s.jsx)("div", {
      className: v.spacer
    }), !m && null != n && (0, s.jsx)(i.Tooltip, {
      text: D.Z.Messages.GUILD_EVENT_CREATED_BY.format({
        username: null != Z ? Z : c.ZP.getName(n)
      }),
      children: e => (0, s.jsx)(i.Avatar, {
        ...e,
        src: n.getAvatarURL(a, 20),
        size: i.AvatarSizes.SIZE_20,
        "aria-label": null != Z ? Z : n.username,
        className: v.creator
      })
    }), (0, s.jsx)(i.Tooltip, {
      text: D.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
        count: f
      }),
      children: e => (0, s.jsxs)("div", {
        className: v.rsvpCount,
        ...e,
        children: [(0, s.jsx)(i.GroupIcon, {
          size: "xxs",
          color: "currentColor",
          className: v.rsvpIcon
        }), (0, s.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: f
        })]
      })
    })]
  })
}

function g(e) {
  let {
    headerVariant: t = "heading-lg/medium",
    descriptionClassName: n,
    name: a,
    description: l,
    truncate: u,
    guildId: c,
    imageSource: o
  } = e;
  return (0, s.jsxs)("div", {
    className: r()({
      [v.withThumbnail]: null != o
    }),
    children: [(0, s.jsxs)("div", {
      className: r()({
        [v.descriptionWithThumbnail]: null != o
      }),
      children: [(0, s.jsx)(i.Heading, {
        variant: t,
        selectable: !0,
        className: v.eventName,
        children: a
      }), null != l && (0, s.jsx)(_.Z, {
        description: l,
        className: r()(n, v.description),
        truncate: u,
        guildId: c
      })]
    }), null != o && (0, s.jsx)("div", {
      className: v.thumbnailContainer,
      children: (0, s.jsx)(m.Z, {
        source: o,
        className: v.thumbnail
      })
    })]
  })
}

function S(e) {
  let {
    headerVariant: t,
    descriptionClassName: n,
    creator: a,
    name: r,
    description: l,
    imageSource: i,
    isHub: u = !1,
    truncate: c,
    guildId: o,
    isNew: E,
    guildEvent: d,
    eventPreview: N,
    recurrenceId: T
  } = e;
  return (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsx)(h, {
      className: v.eventInfoStatusContainer,
      creator: a,
      guildId: o,
      isHub: u,
      isNew: E,
      guildEvent: d,
      eventPreview: N,
      recurrenceId: T
    }), (0, s.jsx)(g, {
      name: r,
      description: l,
      headerVariant: t,
      descriptionClassName: n,
      truncate: c,
      guildId: o,
      imageSource: i
    })]
  })
}