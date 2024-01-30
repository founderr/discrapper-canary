"use strict";
l.r(t), l.d(t, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return P
  }
});
var n, a, s = l("37983"),
  r = l("884691"),
  i = l("414456"),
  u = l.n(i),
  d = l("446674"),
  o = l("77078"),
  c = l("812204"),
  E = l("685665"),
  f = l("656038"),
  I = l("419830"),
  _ = l("817963"),
  T = l("957255"),
  h = l("476263"),
  N = l("718550"),
  v = l("398604"),
  m = l("651072"),
  S = l("1339"),
  g = l("613767"),
  C = l("822516"),
  x = l("707916"),
  p = l("255050"),
  A = l("400271"),
  O = l("427554"),
  R = l("644189"),
  L = l("29913"),
  M = l("745049"),
  D = l("49111"),
  y = l("782340"),
  j = l("955614");

function V(e) {
  let {
    channel: t,
    onClick: l
  } = e, {
    canManageAllEvents: n
  } = (0, _.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([T.default], () => !t.isGuildVocal() || T.default.can(D.Permissions.CONNECT, t), [t]), i = r.useMemo(() => (0, f.default)(t), [t]), c = (0, I.getChannelIconComponent)(t);
  return (0, s.jsx)(o.Tooltip, {
    text: y.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != l,
    children: e => (0, s.jsxs)(o.Clickable, {
      ...e,
      className: u(j.inline, j.channelContainer, {
        [j.channelContainerEnabled]: a && null != l,
        [j.channelContainerDisabled]: !a && null != l
      }),
      onClick: l,
      children: [(0, s.jsx)(o.Tooltip, {
        text: y.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: n && i && a && null != l,
        children: e => null != c ? (0, s.jsx)(c, {
          ...e,
          width: 20,
          height: 20,
          className: j.icon
        }) : null
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: j.channelLocation,
        children: t.name
      })]
    })
  })
}

function U(e) {
  let {
    guild: t,
    channel: l,
    onJoinClick: n,
    handleLocationClick: a,
    location: r,
    isExternal: i,
    isHub: d
  } = e;
  if (d) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
    className: j.inline,
    children: [(0, s.jsx)(h.default, {
      className: j.guildIcon,
      size: h.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, s.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != l ? (0, s.jsx)(V, {
    channel: l,
    onClick: n
  }) : (0, s.jsxs)(o.Clickable, {
    className: j.inline,
    onClick: a,
    children: [(0, s.jsx)(N.default, {
      height: 20,
      width: 20,
      className: u(j.channelContainer, j.icon)
    }), (0, s.jsx)(o.Text, {
      className: i ? j.externalLocation : j.channelLocation,
      variant: "text-sm/normal",
      children: (0, S.guildEventDetailsParser)(r, !0)
    })]
  })
}

function P(e) {
  var t;
  let {
    className: l,
    guild: n,
    channel: a,
    creator: r,
    name: i,
    entityType: f,
    description: I,
    imageLocation: _ = 0,
    imageSource: T,
    isActive: h,
    isUserLurking: N,
    isJoined: S = !1,
    isMember: D = !1,
    isHub: y = !1,
    speakers: V,
    speakerCount: P,
    rsvped: G,
    canInvite: H,
    location: b,
    truncate: B,
    onContextMenu: F,
    onJoinClick: w,
    onJoinGuildClick: k,
    onGoToGuildClick: Y,
    onRsvpClick: z,
    onStartClick: Z,
    onInviteClick: X,
    onEndClick: W,
    onClick: q,
    isNew: K,
    guildEventId: J,
    eventPreview: Q,
    recurrenceRule: $,
    recurrenceId: ee
  } = e, et = (0, g.isChannelPublic)(a, f), el = f === M.GuildScheduledEventEntityTypes.EXTERNAL, {
    analyticsLocations: en
  } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
    enabled: ea
  } = m.default.useExperiment({
    guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
    location: en[0]
  }, {
    autoTrackExposure: !1
  }), es = (0, d.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(J)), er = [];
  if (null != $ && null != es) {
    let e = (0, C.getRRule)($);
    er = (0, C.generateNextRecurrences)(4, e, new Date(es.scheduled_start_time))
  }
  let ei = ea && er.length > 0;
  return (0, s.jsxs)(o.ClickableContainer, {
    "aria-label": i,
    onClick: () => null == q ? void 0 : q(ee),
    onContextMenu: F,
    className: u(j.card, {
      [j.joined]: S,
      [j.lurking]: N
    }, l),
    children: [(0, s.jsxs)("div", {
      className: u(j.padding, {
        [j.isRecurring]: ei
      }),
      children: [0 === _ && (0, s.jsx)(p.default, {
        source: T
      }), (0, s.jsx)(A.default, {
        creator: r,
        name: i,
        description: I,
        imageSource: 1 === _ ? T : null,
        truncate: B,
        guildId: null == n ? void 0 : n.id,
        isHub: y,
        isNew: K,
        guildEventId: J,
        eventPreview: Q,
        recurrenceId: ee
      }), h && null != n && null != V && P > 0 && (0, s.jsx)(L.default, {
        guild: n,
        speakers: V,
        speakerCount: P,
        className: j.spacing
      }), (0, s.jsx)("hr", {
        className: j.divider
      }), (0, s.jsxs)("div", {
        className: u(j.inline, j.footer),
        children: [(0, s.jsx)(U, {
          guild: n,
          channel: a,
          onJoinClick: w,
          handleLocationClick: el ? e => e.stopPropagation() : void 0,
          location: b,
          isExternal: el,
          isHub: y
        }), y ? (0, s.jsx)(R.default, {
          isActive: h,
          isUserLurking: N,
          isMember: D,
          rsvped: G,
          onRsvpClick: z,
          onJoinGuildClick: k,
          onGoToGuildClick: Y,
          guildName: null == n ? void 0 : n.name,
          canInvite: H,
          isChannelPublic: et,
          onInviteClick: X
        }) : (0, s.jsx)(x.default, {
          entityType: f,
          isJoined: S,
          isActive: h,
          isUserLurking: N,
          rsvped: G,
          canInvite: H,
          isChannelPublic: et,
          onContextMenu: F,
          onJoinClick: w,
          onRsvpClick: z,
          onStartClick: Z,
          onInviteClick: X,
          onEndClick: W
        })]
      }), ei && (0, s.jsx)("hr", {
        className: j.divider
      })]
    }), ei && (0, s.jsx)(O.default, {
      guildId: null == n ? void 0 : n.id,
      recurrenceRule: $,
      guildEventId: J,
      onRecurrenceClick: q
    })]
  })
}(n = a || (a = {}))[n.BANNER = 0] = "BANNER", n[n.THUMBNAIL = 1] = "THUMBNAIL"