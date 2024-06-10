"use strict";
a.r(t), a.d(t, {
  GuildEventDetails: function() {
    return g
  },
  GuildEventStatus: function() {
    return D
  },
  default: function() {
    return x
  }
});
var l = a("735250");
a("470079");
var n = a("120356"),
  s = a.n(n),
  r = a("442837"),
  u = a("481060"),
  i = a("271383"),
  c = a("158010"),
  d = a("51144"),
  o = a("894017"),
  E = a("79874"),
  f = a("315416"),
  T = a("236373"),
  m = a("854698"),
  N = a("391174"),
  v = a("95291"),
  _ = a("390966"),
  h = a("689938"),
  S = a("938484");

function D(e) {
  let {
    className: t,
    creator: a,
    guildId: n,
    isNew: N,
    isHub: v = !1,
    guildEvent: D,
    eventPreview: g,
    recurrenceId: x
  } = e, R = (0, f.default)(n, D.id, x), L = null != D ? D : g, C = (0, r.useStateFromStores)([i.default], () => i.default.getNick(n, null == a ? void 0 : a.id), [n, a]);
  x = null == L || null != x ? x : (0, m.getNextRecurrenceIdInEvent)(L);
  let {
    startTime: A
  } = (0, E.default)(null != D ? D : g, x), I = (0, o.default)(x, D.id), p = (null == L ? void 0 : L.scheduled_start_time) != null ? (0, m.getRecurrenceStatus)(I, A, new Date(L.scheduled_start_time)) : null;
  if (null == L) return null;
  let {
    entity_type: j,
    status: O,
    recurrence_rule: G
  } = L;
  return (0, l.jsxs)("div", {
    className: s()(S.statusContainer, t),
    children: [(0, l.jsx)(_.GuildEventTimeStatus, {
      startTime: A.toISOString(),
      status: null != p ? p : O,
      eventType: j,
      isNew: N,
      recurrenceRule: (0, T.recurrenceRuleFromServer)(G),
      guildEventId: D.id,
      recurrenceId: x
    }), (0, l.jsx)("div", {
      className: S.spacer
    }), !v && null != a && (0, l.jsx)(u.Tooltip, {
      text: h.default.Messages.GUILD_EVENT_CREATED_BY.format({
        username: null != C ? C : d.default.getName(a)
      }),
      children: e => (0, l.jsx)(u.Avatar, {
        ...e,
        src: a.getAvatarURL(n, 20),
        size: u.AvatarSizes.SIZE_20,
        "aria-label": null != C ? C : a.username,
        className: S.creator
      })
    }), (0, l.jsx)(u.Tooltip, {
      text: h.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
        count: R
      }),
      children: e => (0, l.jsxs)("div", {
        className: S.rsvpCount,
        ...e,
        children: [(0, l.jsx)(c.default, {
          width: 12,
          height: 12,
          className: S.rsvpIcon
        }), (0, l.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: R
        })]
      })
    })]
  })
}

function g(e) {
  let {
    headerVariant: t = "heading-lg/medium",
    descriptionClassName: a,
    name: n,
    description: r,
    truncate: i,
    guildId: c,
    imageSource: d
  } = e;
  return (0, l.jsxs)("div", {
    className: s()({
      [S.withThumbnail]: null != d
    }),
    children: [(0, l.jsxs)("div", {
      className: s()({
        [S.descriptionWithThumbnail]: null != d
      }),
      children: [(0, l.jsx)(u.Heading, {
        variant: t,
        selectable: !0,
        className: S.eventName,
        children: n
      }), null != r && (0, l.jsx)(N.default, {
        description: r,
        className: s()(a, S.description),
        truncate: i,
        guildId: c
      })]
    }), null != d && (0, l.jsx)("div", {
      className: S.thumbnailContainer,
      children: (0, l.jsx)(v.default, {
        source: d,
        className: S.thumbnail
      })
    })]
  })
}

function x(e) {
  let {
    headerVariant: t,
    descriptionClassName: a,
    creator: n,
    name: s,
    description: r,
    imageSource: u,
    isHub: i = !1,
    truncate: c,
    guildId: d,
    isNew: o,
    guildEvent: E,
    eventPreview: f,
    recurrenceId: T
  } = e;
  return (0, l.jsxs)("div", {
    className: S.container,
    children: [(0, l.jsx)(D, {
      className: S.eventInfoStatusContainer,
      creator: n,
      guildId: d,
      isHub: i,
      isNew: o,
      guildEvent: E,
      eventPreview: f,
      recurrenceId: T
    }), (0, l.jsx)(g, {
      name: s,
      description: r,
      headerVariant: t,
      descriptionClassName: a,
      truncate: c,
      guildId: d,
      imageSource: u
    })]
  })
}