"use strict";
n.r(t), n.d(t, {
  GuildEventStatus: function() {
    return _
  },
  GuildEventDetails: function() {
    return S
  },
  default: function() {
    return D
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  r = n("446674"),
  u = n("77078"),
  i = n("26989"),
  c = n("155207"),
  d = n("158998"),
  o = n("398604"),
  E = n("397680"),
  f = n("466148"),
  v = n("189443"),
  h = n("822516"),
  T = n("909151"),
  N = n("255050"),
  m = n("393745"),
  g = n("745049"),
  x = n("782340"),
  C = n("502249");

function _(e) {
  let {
    className: t,
    creator: n,
    guildId: a,
    isNew: T,
    isHub: N = !1,
    guildEventId: _,
    eventPreview: S,
    recurrenceId: D
  } = e, {
    storedEvent: L,
    userCount: R
  } = (0, r.useStateFromStoresObject)([o.default], () => ({
    storedEvent: o.default.getGuildScheduledEvent(_),
    userCount: o.default.getUserCount(_, D)
  })), I = null != L ? L : S, p = (0, r.useStateFromStores)([i.default], () => i.default.getNick(a, null == n ? void 0 : n.id), [a, n]);
  D = null == I || null != D ? D : (0, h.getNextRecurrenceIdInEvent)(I);
  let {
    startTime: A
  } = (0, f.default)(_, D, S), j = (0, E.default)(D, _), w = null != j ? j.is_canceled ? g.GuildScheduledEventStatus.CANCELED : g.GuildScheduledEventStatus.SCHEDULED : null;
  if (null == I) return null;
  let {
    entity_type: M,
    status: O,
    recurrence_rule: G
  } = I;
  return (0, l.jsxs)("div", {
    className: s(C.statusContainer, t),
    children: [(0, l.jsx)(m.GuildEventTimeStatus, {
      startTime: A.toISOString(),
      status: null != w ? w : O,
      eventType: M,
      isNew: T,
      recurrenceRule: (0, v.recurrenceRuleFromServer)(G),
      guildEventId: _,
      recurrenceId: D
    }), (0, l.jsx)("div", {
      className: C.spacer
    }), !N && null != n && (0, l.jsx)(u.Tooltip, {
      text: x.default.Messages.GUILD_EVENT_CREATED_BY.format({
        username: null != p ? p : d.default.getName(n)
      }),
      children: e => (0, l.jsx)(u.Avatar, {
        ...e,
        src: n.getAvatarURL(a, 20),
        size: u.AvatarSizes.SIZE_20,
        "aria-label": null != p ? p : n.username,
        className: C.creator
      })
    }), (0, l.jsx)(u.Tooltip, {
      text: x.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
        count: R
      }),
      children: e => (0, l.jsxs)("div", {
        className: C.rsvpCount,
        ...e,
        children: [(0, l.jsx)(c.default, {
          width: 12,
          height: 12,
          className: C.rsvpIcon
        }), (0, l.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: R
        })]
      })
    })]
  })
}

function S(e) {
  let {
    headerVariant: t = "heading-lg/medium",
    descriptionClassName: n,
    name: a,
    description: r,
    truncate: i,
    guildId: c,
    imageSource: d
  } = e;
  return (0, l.jsxs)("div", {
    className: s({
      [C.withThumbnail]: null != d
    }),
    children: [(0, l.jsxs)("div", {
      className: s({
        [C.descriptionWithThumbnail]: null != d
      }),
      children: [(0, l.jsx)(u.Heading, {
        variant: t,
        selectable: !0,
        className: C.eventName,
        children: a
      }), null != r && (0, l.jsx)(T.default, {
        description: r,
        className: s(n, C.description),
        truncate: i,
        guildId: c
      })]
    }), null != d && (0, l.jsx)("div", {
      className: C.thumbnailContainer,
      children: (0, l.jsx)(N.default, {
        source: d,
        className: C.thumbnail
      })
    })]
  })
}

function D(e) {
  let {
    headerVariant: t,
    descriptionClassName: n,
    creator: a,
    name: s,
    description: r,
    imageSource: u,
    isHub: i = !1,
    truncate: c,
    guildId: d,
    isNew: o,
    guildEventId: E,
    eventPreview: f,
    recurrenceId: v
  } = e;
  return (0, l.jsxs)("div", {
    className: C.container,
    children: [(0, l.jsx)(_, {
      className: C.eventInfoStatusContainer,
      creator: a,
      guildId: d,
      isHub: i,
      isNew: o,
      guildEventId: E,
      eventPreview: f,
      recurrenceId: v
    }), (0, l.jsx)(S, {
      name: s,
      description: r,
      headerVariant: t,
      descriptionClassName: n,
      truncate: c,
      guildId: d,
      imageSource: u
    })]
  })
}