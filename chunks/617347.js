"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return i
  },
  default: function() {
    return D
  }
});
var l, i, a = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
  d = n("446674"),
  o = n("77078"),
  c = n("812204"),
  f = n("685665"),
  E = n("656038"),
  h = n("419830"),
  _ = n("817963"),
  v = n("957255"),
  g = n("476263"),
  C = n("718550"),
  S = n("398604"),
  p = n("651072"),
  T = n("1339"),
  N = n("613767"),
  A = n("822516"),
  I = n("707916"),
  m = n("255050"),
  y = n("400271"),
  R = n("427554"),
  O = n("644189"),
  L = n("29913"),
  x = n("745049"),
  G = n("49111"),
  M = n("782340"),
  w = n("955614");

function U(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, _.useManageResourcePermissions)(t), i = (0, d.useStateFromStores)([v.default], () => !t.isGuildVocal() || v.default.can(G.Permissions.CONNECT, t), [t]), r = s.useMemo(() => (0, E.default)(t), [t]), c = (0, h.getChannelIconComponent)(t);
  return (0, a.jsx)(o.Tooltip, {
    text: M.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !i && null != n,
    children: e => (0, a.jsxs)(o.Clickable, {
      ...e,
      className: u(w.inline, w.channelContainer, {
        [w.channelContainerEnabled]: i && null != n,
        [w.channelContainerDisabled]: !i && null != n
      }),
      onClick: n,
      children: [(0, a.jsx)(o.Tooltip, {
        text: M.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && r && i && null != n,
        children: e => null != c ? (0, a.jsx)(c, {
          ...e,
          width: 20,
          height: 20,
          className: w.icon
        }) : null
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: w.channelLocation,
        children: t.name
      })]
    })
  })
}

function k(e) {
  let {
    guild: t,
    channel: n,
    onJoinClick: l,
    handleLocationClick: i,
    location: s,
    isExternal: r,
    isHub: d
  } = e;
  if (d) return null == t ? (0, a.jsx)("div", {}) : (0, a.jsxs)("div", {
    className: w.inline,
    children: [(0, a.jsx)(g.default, {
      className: w.guildIcon,
      size: g.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != n ? (0, a.jsx)(U, {
    channel: n,
    onClick: l
  }) : (0, a.jsxs)(o.Clickable, {
    className: w.inline,
    onClick: i,
    children: [(0, a.jsx)(C.default, {
      height: 20,
      width: 20,
      className: u(w.channelContainer, w.icon)
    }), (0, a.jsx)(o.Text, {
      className: r ? w.externalLocation : w.channelLocation,
      variant: "text-sm/normal",
      children: (0, T.guildEventDetailsParser)(s, !0)
    })]
  })
}

function D(e) {
  var t;
  let {
    className: n,
    guild: l,
    channel: i,
    creator: s,
    name: r,
    entityType: E,
    description: h,
    imageLocation: _ = 0,
    imageSource: v,
    isActive: g,
    isUserLurking: C,
    isJoined: T = !1,
    isMember: G = !1,
    isHub: M = !1,
    speakers: U,
    speakerCount: D,
    rsvped: b,
    canInvite: P,
    location: j,
    truncate: V,
    onContextMenu: H,
    onJoinClick: F,
    onJoinGuildClick: B,
    onGoToGuildClick: Z,
    onRsvpClick: Y,
    onStartClick: q,
    onInviteClick: K,
    onEndClick: z,
    onClick: W,
    isNew: X,
    guildEventId: J,
    eventPreview: Q,
    recurrenceRule: $,
    recurrenceId: ee
  } = e, et = (0, N.isChannelPublic)(i, E), en = E === x.GuildScheduledEventEntityTypes.EXTERNAL, {
    analyticsLocations: el
  } = (0, f.default)(c.default.GUILD_EVENT_CARD), {
    showRecurringEventsDesktop: ei
  } = p.default.useExperiment({
    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
    location: el[0]
  }, {
    autoTrackExposure: !1
  }), ea = (0, d.useStateFromStores)([S.default], () => S.default.getGuildScheduledEvent(J)), es = [];
  if (null != $ && null != ea) {
    let e = (0, A.getRRule)($);
    es = (0, A.generateNextRecurrences)(4, e, new Date(ea.scheduled_start_time))
  }
  let er = ei && es.length > 0;
  return (0, a.jsxs)(o.ClickableContainer, {
    "aria-label": r,
    onClick: () => null == W ? void 0 : W(ee),
    onContextMenu: H,
    className: u(w.card, {
      [w.joined]: T,
      [w.lurking]: C
    }, n),
    children: [(0, a.jsxs)("div", {
      className: u(w.padding, {
        [w.isRecurring]: er
      }),
      children: [0 === _ && (0, a.jsx)(m.default, {
        source: v
      }), (0, a.jsx)(y.default, {
        creator: s,
        name: r,
        description: h,
        imageSource: 1 === _ ? v : null,
        truncate: V,
        guildId: null == l ? void 0 : l.id,
        isHub: M,
        isNew: X,
        guildEventId: J,
        eventPreview: Q,
        recurrenceId: ee
      }), g && null != l && null != U && D > 0 && (0, a.jsx)(L.default, {
        guild: l,
        speakers: U,
        speakerCount: D,
        className: w.spacing
      }), (0, a.jsx)("hr", {
        className: w.divider
      }), (0, a.jsxs)("div", {
        className: u(w.inline, w.footer),
        children: [(0, a.jsx)(k, {
          guild: l,
          channel: i,
          onJoinClick: F,
          handleLocationClick: en ? e => e.stopPropagation() : void 0,
          location: j,
          isExternal: en,
          isHub: M
        }), M ? (0, a.jsx)(O.default, {
          isActive: g,
          isUserLurking: C,
          isMember: G,
          rsvped: b,
          onRsvpClick: Y,
          onJoinGuildClick: B,
          onGoToGuildClick: Z,
          guildName: null == l ? void 0 : l.name,
          canInvite: P,
          isChannelPublic: et,
          onInviteClick: K
        }) : (0, a.jsx)(I.default, {
          entityType: E,
          isJoined: T,
          isActive: g,
          isUserLurking: C,
          rsvped: b,
          canInvite: P,
          isChannelPublic: et,
          onContextMenu: H,
          onJoinClick: F,
          onRsvpClick: Y,
          onStartClick: q,
          onInviteClick: K,
          onEndClick: z
        })]
      }), er && (0, a.jsx)("hr", {
        className: w.divider
      })]
    }), er && (0, a.jsx)(R.default, {
      guildId: null == l ? void 0 : l.id,
      recurrenceRule: $,
      guildEventId: J,
      onRecurrenceClick: W
    })]
  })
}(l = i || (i = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"