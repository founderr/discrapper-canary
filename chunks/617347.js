"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return P
  }
});
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("446674"),
  d = n("77078"),
  c = n("812204"),
  E = n("685665"),
  f = n("656038"),
  I = n("419830"),
  _ = n("817963"),
  h = n("957255"),
  v = n("476263"),
  T = n("718550"),
  N = n("398604"),
  m = n("651072"),
  S = n("1339"),
  g = n("613767"),
  C = n("822516"),
  p = n("707916"),
  x = n("255050"),
  L = n("400271"),
  A = n("427554"),
  R = n("644189"),
  O = n("29913"),
  M = n("745049"),
  D = n("49111"),
  y = n("782340"),
  U = n("955614");

function j(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, _.useManageResourcePermissions)(t), a = (0, o.useStateFromStores)([h.default], () => !t.isGuildVocal() || h.default.can(D.Permissions.CONNECT, t), [t]), r = i.useMemo(() => (0, f.default)(t), [t]), c = (0, I.getChannelIconComponent)(t);
  return (0, s.jsx)(d.Tooltip, {
    text: y.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != n,
    children: e => (0, s.jsxs)(d.Clickable, {
      ...e,
      className: u(U.inline, U.channelContainer, {
        [U.channelContainerEnabled]: a && null != n,
        [U.channelContainerDisabled]: !a && null != n
      }),
      onClick: n,
      children: [(0, s.jsx)(d.Tooltip, {
        text: y.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && r && a && null != n,
        children: e => null != c ? (0, s.jsx)(c, {
          ...e,
          width: 20,
          height: 20,
          className: U.icon
        }) : null
      }), (0, s.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: U.channelLocation,
        children: t.name
      })]
    })
  })
}

function V(e) {
  let {
    guild: t,
    channel: n,
    onJoinClick: l,
    handleLocationClick: a,
    location: i,
    isExternal: r,
    isHub: o
  } = e;
  if (o) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
    className: U.inline,
    children: [(0, s.jsx)(v.default, {
      className: U.guildIcon,
      size: v.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, s.jsx)(d.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != n ? (0, s.jsx)(j, {
    channel: n,
    onClick: l
  }) : (0, s.jsxs)(d.Clickable, {
    className: U.inline,
    onClick: a,
    children: [(0, s.jsx)(T.default, {
      height: 20,
      width: 20,
      className: u(U.channelContainer, U.icon)
    }), (0, s.jsx)(d.Text, {
      className: r ? U.externalLocation : U.channelLocation,
      variant: "text-sm/normal",
      children: (0, S.guildEventDetailsParser)(i, !0)
    })]
  })
}

function P(e) {
  var t;
  let {
    className: n,
    guild: l,
    channel: a,
    creator: i,
    name: r,
    entityType: f,
    description: I,
    imageLocation: _ = 0,
    imageSource: h,
    isActive: v,
    isUserLurking: T,
    isJoined: S = !1,
    isMember: D = !1,
    isHub: y = !1,
    speakers: j,
    speakerCount: P,
    rsvped: G,
    canInvite: H,
    location: F,
    truncate: b,
    onContextMenu: B,
    onJoinClick: w,
    onJoinGuildClick: k,
    onGoToGuildClick: z,
    onRsvpClick: Z,
    onStartClick: Y,
    onInviteClick: X,
    onEndClick: K,
    onClick: W,
    isNew: q,
    guildEventId: J,
    eventPreview: Q,
    recurrenceRule: $,
    recurrenceId: ee
  } = e, et = (0, g.isChannelPublic)(a, f), en = f === M.GuildScheduledEventEntityTypes.EXTERNAL, {
    analyticsLocations: el
  } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
    showRecurringEventsDesktop: ea
  } = m.default.useExperiment({
    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
    location: el[0]
  }, {
    autoTrackExposure: !1
  }), es = (0, o.useStateFromStores)([N.default], () => N.default.getGuildScheduledEvent(J)), ei = [];
  if (null != $ && null != es) {
    let e = (0, C.getRRule)($);
    ei = (0, C.generateNextRecurrences)(4, e, new Date(es.scheduled_start_time))
  }
  let er = ea && ei.length > 0;
  return (0, s.jsxs)(d.ClickableContainer, {
    "aria-label": r,
    onClick: () => null == W ? void 0 : W(ee),
    onContextMenu: B,
    className: u(U.card, {
      [U.joined]: S,
      [U.lurking]: T
    }, n),
    children: [(0, s.jsxs)("div", {
      className: u(U.padding, {
        [U.isRecurring]: er
      }),
      children: [0 === _ && (0, s.jsx)(x.default, {
        source: h
      }), (0, s.jsx)(L.default, {
        creator: i,
        name: r,
        description: I,
        imageSource: 1 === _ ? h : null,
        truncate: b,
        guildId: null == l ? void 0 : l.id,
        isHub: y,
        isNew: q,
        guildEventId: J,
        eventPreview: Q,
        recurrenceId: ee
      }), v && null != l && null != j && P > 0 && (0, s.jsx)(O.default, {
        guild: l,
        speakers: j,
        speakerCount: P,
        className: U.spacing
      }), (0, s.jsx)("hr", {
        className: U.divider
      }), (0, s.jsxs)("div", {
        className: u(U.inline, U.footer),
        children: [(0, s.jsx)(V, {
          guild: l,
          channel: a,
          onJoinClick: w,
          handleLocationClick: en ? e => e.stopPropagation() : void 0,
          location: F,
          isExternal: en,
          isHub: y
        }), y ? (0, s.jsx)(R.default, {
          isActive: v,
          isUserLurking: T,
          isMember: D,
          rsvped: G,
          onRsvpClick: Z,
          onJoinGuildClick: k,
          onGoToGuildClick: z,
          guildName: null == l ? void 0 : l.name,
          canInvite: H,
          isChannelPublic: et,
          onInviteClick: X
        }) : (0, s.jsx)(p.default, {
          entityType: f,
          isJoined: S,
          isActive: v,
          isUserLurking: T,
          rsvped: G,
          canInvite: H,
          isChannelPublic: et,
          onContextMenu: B,
          onJoinClick: w,
          onRsvpClick: Z,
          onStartClick: Y,
          onInviteClick: X,
          onEndClick: K
        })]
      }), er && (0, s.jsx)("hr", {
        className: U.divider
      })]
    }), er && (0, s.jsx)(A.default, {
      guildId: null == l ? void 0 : l.id,
      recurrenceRule: $,
      guildEventId: J,
      onRecurrenceClick: W
    })]
  })
}(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"