"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return U
  }
});
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  d = n("446674"),
  o = n("77078"),
  c = n("812204"),
  E = n("685665"),
  f = n("656038"),
  h = n("419830"),
  v = n("817963"),
  _ = n("957255"),
  I = n("476263"),
  m = n("718550"),
  T = n("398604"),
  N = n("651072"),
  g = n("1339"),
  C = n("613767"),
  x = n("822516"),
  p = n("707916"),
  S = n("255050"),
  A = n("400271"),
  L = n("427554"),
  R = n("644189"),
  M = n("29913"),
  y = n("745049"),
  D = n("49111"),
  j = n("782340"),
  G = n("402155");

function V(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, v.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([_.default], () => !t.isGuildVocal() || _.default.can(D.Permissions.CONNECT, t), [t]), r = i.useMemo(() => (0, f.default)(t), [t]), c = (0, h.getChannelIconComponent)(t);
  return (0, s.jsx)(o.Tooltip, {
    text: j.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != n,
    children: e => (0, s.jsxs)(o.Clickable, {
      ...e,
      className: u(G.inline, G.channelContainer, {
        [G.channelContainerEnabled]: a && null != n,
        [G.channelContainerDisabled]: !a && null != n
      }),
      onClick: n,
      children: [(0, s.jsx)(o.Tooltip, {
        text: j.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && r && a && null != n,
        children: e => null != c ? (0, s.jsx)(c, {
          ...e,
          width: 20,
          height: 20,
          className: G.icon
        }) : null
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: G.channelLocation,
        children: t.name
      })]
    })
  })
}

function O(e) {
  let {
    guild: t,
    channel: n,
    onJoinClick: l,
    handleLocationClick: a,
    location: i,
    isExternal: r,
    isHub: d
  } = e;
  if (d) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
    className: G.inline,
    children: [(0, s.jsx)(I.default, {
      className: G.guildIcon,
      size: I.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, s.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != n ? (0, s.jsx)(V, {
    channel: n,
    onClick: l
  }) : (0, s.jsxs)(o.Clickable, {
    className: G.inline,
    onClick: a,
    children: [(0, s.jsx)(m.default, {
      height: 20,
      width: 20,
      className: u(G.channelContainer, G.icon)
    }), (0, s.jsx)(o.Text, {
      className: r ? G.externalLocation : G.channelLocation,
      variant: "text-sm/normal",
      children: (0, g.guildEventDetailsParser)(i, !0)
    })]
  })
}

function U(e) {
  var t;
  let {
    className: n,
    guild: l,
    channel: a,
    creator: i,
    name: r,
    entityType: f,
    description: h,
    imageLocation: v = 0,
    imageSource: _,
    isActive: I,
    isUserLurking: m,
    isJoined: g = !1,
    isMember: j = !1,
    isHub: V = !1,
    speakers: U,
    speakerCount: b,
    rsvped: P,
    canInvite: B,
    location: F,
    truncate: w,
    onContextMenu: k,
    onJoinClick: H,
    onJoinGuildClick: z,
    onGoToGuildClick: Y,
    onRsvpClick: Z,
    onStartClick: W,
    onInviteClick: X,
    onEndClick: q,
    onClick: K,
    isNew: J,
    guildEventId: Q,
    eventPreview: $,
    recurrenceRule: ee,
    recurrenceId: et
  } = e, en = (0, C.isChannelPublic)(a, f), el = f === y.GuildScheduledEventEntityTypes.EXTERNAL, {
    analyticsLocations: ea
  } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
    showRecurringEventsDesktop: es
  } = N.default.useExperiment({
    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : D.EMPTY_STRING_GUILD_ID,
    location: ea[0]
  }, {
    autoTrackExposure: !1
  }), ei = (0, d.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(Q)), er = [];
  if (null != ee && null != ei) {
    let e = (0, x.getRRule)(ee);
    er = (0, x.generateNextRecurrences)(4, e, new Date(ei.scheduled_start_time))
  }
  let eu = es && er.length > 0;
  return (0, s.jsxs)(o.ClickableContainer, {
    "aria-label": r,
    onClick: () => null == K ? void 0 : K(et),
    onContextMenu: k,
    className: u(G.card, {
      [G.joined]: g,
      [G.lurking]: m
    }, n),
    children: [(0, s.jsxs)("div", {
      className: u(G.padding, {
        [G.isRecurring]: eu
      }),
      children: [0 === v && (0, s.jsx)(S.default, {
        source: _
      }), (0, s.jsx)(A.default, {
        creator: i,
        name: r,
        description: h,
        imageSource: 1 === v ? _ : null,
        truncate: w,
        guildId: null == l ? void 0 : l.id,
        isHub: V,
        isNew: J,
        guildEventId: Q,
        eventPreview: $,
        recurrenceId: et
      }), I && null != l && null != U && b > 0 && (0, s.jsx)(M.default, {
        guild: l,
        speakers: U,
        speakerCount: b,
        className: G.spacing
      }), (0, s.jsx)("hr", {
        className: G.divider
      }), (0, s.jsxs)("div", {
        className: u(G.inline, G.footer),
        children: [(0, s.jsx)(O, {
          guild: l,
          channel: a,
          onJoinClick: H,
          handleLocationClick: el ? e => e.stopPropagation() : void 0,
          location: F,
          isExternal: el,
          isHub: V
        }), V ? (0, s.jsx)(R.default, {
          isActive: I,
          isUserLurking: m,
          isMember: j,
          rsvped: P,
          onRsvpClick: Z,
          onJoinGuildClick: z,
          onGoToGuildClick: Y,
          guildName: null == l ? void 0 : l.name,
          canInvite: B,
          isChannelPublic: en,
          onInviteClick: X
        }) : (0, s.jsx)(p.default, {
          entityType: f,
          isJoined: g,
          isActive: I,
          isUserLurking: m,
          rsvped: P,
          canInvite: B,
          isChannelPublic: en,
          onContextMenu: k,
          onJoinClick: H,
          onRsvpClick: Z,
          onStartClick: W,
          onInviteClick: X,
          onEndClick: q
        })]
      }), eu && (0, s.jsx)("hr", {
        className: G.divider
      })]
    }), eu && (0, s.jsx)(L.default, {
      guildId: null == l ? void 0 : l.id,
      recurrenceRule: ee,
      guildEventId: Q,
      onRecurrenceClick: K
    })]
  })
}(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"