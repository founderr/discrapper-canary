"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return j
  }
});
var l, a, i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
  d = n("446674"),
  o = n("77078"),
  c = n("812204"),
  f = n("685665"),
  E = n("656038"),
  I = n("419830"),
  _ = n("817963"),
  h = n("957255"),
  T = n("476263"),
  v = n("718550"),
  N = n("398604"),
  m = n("651072"),
  S = n("1339"),
  g = n("613767"),
  C = n("822516"),
  p = n("707916"),
  x = n("255050"),
  L = n("400271"),
  O = n("427554"),
  A = n("644189"),
  R = n("29913"),
  M = n("745049"),
  y = n("49111"),
  D = n("782340"),
  U = n("955614");

function V(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, _.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([h.default], () => !t.isGuildVocal() || h.default.can(y.Permissions.CONNECT, t), [t]), r = s.useMemo(() => (0, E.default)(t), [t]), c = (0, I.getChannelIconComponent)(t);
  return (0, i.jsx)(o.Tooltip, {
    text: D.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != n,
    children: e => (0, i.jsxs)(o.Clickable, {
      ...e,
      className: u(U.inline, U.channelContainer, {
        [U.channelContainerEnabled]: a && null != n,
        [U.channelContainerDisabled]: !a && null != n
      }),
      onClick: n,
      children: [(0, i.jsx)(o.Tooltip, {
        text: D.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && r && a && null != n,
        children: e => null != c ? (0, i.jsx)(c, {
          ...e,
          width: 20,
          height: 20,
          className: U.icon
        }) : null
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: U.channelLocation,
        children: t.name
      })]
    })
  })
}

function P(e) {
  let {
    guild: t,
    channel: n,
    onJoinClick: l,
    handleLocationClick: a,
    location: s,
    isExternal: r,
    isHub: d
  } = e;
  if (d) return null == t ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
    className: U.inline,
    children: [(0, i.jsx)(T.default, {
      className: U.guildIcon,
      size: T.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != n ? (0, i.jsx)(V, {
    channel: n,
    onClick: l
  }) : (0, i.jsxs)(o.Clickable, {
    className: U.inline,
    onClick: a,
    children: [(0, i.jsx)(v.default, {
      height: 20,
      width: 20,
      className: u(U.channelContainer, U.icon)
    }), (0, i.jsx)(o.Text, {
      className: r ? U.externalLocation : U.channelLocation,
      variant: "text-sm/normal",
      children: (0, S.guildEventDetailsParser)(s, !0)
    })]
  })
}

function j(e) {
  var t;
  let {
    className: n,
    guild: l,
    channel: a,
    creator: s,
    name: r,
    entityType: E,
    description: I,
    imageLocation: _ = 0,
    imageSource: h,
    isActive: T,
    isUserLurking: v,
    isJoined: S = !1,
    isMember: y = !1,
    isHub: D = !1,
    speakers: V,
    speakerCount: j,
    rsvped: G,
    canInvite: F,
    location: b,
    truncate: H,
    onContextMenu: B,
    onJoinClick: w,
    onJoinGuildClick: k,
    onGoToGuildClick: z,
    onRsvpClick: Y,
    onStartClick: Z,
    onInviteClick: X,
    onEndClick: K,
    onClick: W,
    isNew: q,
    guildEventId: J,
    eventPreview: Q,
    recurrenceRule: $,
    recurrenceId: ee
  } = e, et = (0, g.isChannelPublic)(a, E), en = E === M.GuildScheduledEventEntityTypes.EXTERNAL, {
    analyticsLocations: el
  } = (0, f.default)(c.default.GUILD_EVENT_CARD), {
    showRecurringEventsDesktop: ea
  } = m.default.useExperiment({
    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
    location: el[0]
  }, {
    autoTrackExposure: !1
  }), ei = (0, d.useStateFromStores)([N.default], () => N.default.getGuildScheduledEvent(J)), es = [];
  if (null != $ && null != ei) {
    let e = (0, C.getRRule)($);
    es = (0, C.generateNextRecurrences)(4, e, new Date(ei.scheduled_start_time))
  }
  let er = ea && es.length > 0;
  return (0, i.jsxs)(o.ClickableContainer, {
    "aria-label": r,
    onClick: () => null == W ? void 0 : W(ee),
    onContextMenu: B,
    className: u(U.card, {
      [U.joined]: S,
      [U.lurking]: v
    }, n),
    children: [(0, i.jsxs)("div", {
      className: u(U.padding, {
        [U.isRecurring]: er
      }),
      children: [0 === _ && (0, i.jsx)(x.default, {
        source: h
      }), (0, i.jsx)(L.default, {
        creator: s,
        name: r,
        description: I,
        imageSource: 1 === _ ? h : null,
        truncate: H,
        guildId: null == l ? void 0 : l.id,
        isHub: D,
        isNew: q,
        guildEventId: J,
        eventPreview: Q,
        recurrenceId: ee
      }), T && null != l && null != V && j > 0 && (0, i.jsx)(R.default, {
        guild: l,
        speakers: V,
        speakerCount: j,
        className: U.spacing
      }), (0, i.jsx)("hr", {
        className: U.divider
      }), (0, i.jsxs)("div", {
        className: u(U.inline, U.footer),
        children: [(0, i.jsx)(P, {
          guild: l,
          channel: a,
          onJoinClick: w,
          handleLocationClick: en ? e => e.stopPropagation() : void 0,
          location: b,
          isExternal: en,
          isHub: D
        }), D ? (0, i.jsx)(A.default, {
          isActive: T,
          isUserLurking: v,
          isMember: y,
          rsvped: G,
          onRsvpClick: Y,
          onJoinGuildClick: k,
          onGoToGuildClick: z,
          guildName: null == l ? void 0 : l.name,
          canInvite: F,
          isChannelPublic: et,
          onInviteClick: X
        }) : (0, i.jsx)(p.default, {
          entityType: E,
          isJoined: S,
          isActive: T,
          isUserLurking: v,
          rsvped: G,
          canInvite: F,
          isChannelPublic: et,
          onContextMenu: B,
          onJoinClick: w,
          onRsvpClick: Y,
          onStartClick: Z,
          onInviteClick: X,
          onEndClick: K
        })]
      }), er && (0, i.jsx)("hr", {
        className: U.divider
      })]
    }), er && (0, i.jsx)(O.default, {
      guildId: null == l ? void 0 : l.id,
      recurrenceRule: $,
      guildEventId: J,
      onRecurrenceClick: W
    })]
  })
}(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"