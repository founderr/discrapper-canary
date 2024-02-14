"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return V
  }
});
var l, a, i = n("37983"),
  u = n("884691"),
  r = n("414456"),
  s = n.n(r),
  d = n("446674"),
  o = n("77078"),
  c = n("812204"),
  f = n("685665"),
  E = n("656038"),
  v = n("419830"),
  g = n("817963"),
  h = n("957255"),
  p = n("476263"),
  m = n("718550"),
  C = n("398604"),
  S = n("651072"),
  _ = n("1339"),
  N = n("613767"),
  I = n("822516"),
  T = n("707916"),
  x = n("255050"),
  R = n("400271"),
  M = n("427554"),
  L = n("644189"),
  G = n("29913"),
  D = n("745049"),
  j = n("49111"),
  k = n("782340"),
  A = n("402155");

function y(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, g.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([h.default], () => !t.isGuildVocal() || h.default.can(j.Permissions.CONNECT, t), [t]), r = u.useMemo(() => (0, E.default)(t), [t]), c = (0, v.getChannelIconComponent)(t);
  return (0, i.jsx)(o.Tooltip, {
    text: k.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != n,
    children: e => (0, i.jsxs)(o.Clickable, {
      ...e,
      className: s(A.inline, A.channelContainer, {
        [A.channelContainerEnabled]: a && null != n,
        [A.channelContainerDisabled]: !a && null != n
      }),
      onClick: n,
      children: [(0, i.jsx)(o.Tooltip, {
        text: k.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && r && a && null != n,
        children: e => null != c ? (0, i.jsx)(c, {
          ...e,
          width: 20,
          height: 20,
          className: A.icon
        }) : null
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: A.channelLocation,
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
    location: u,
    isExternal: r,
    isHub: d
  } = e;
  if (d) return null == t ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
    className: A.inline,
    children: [(0, i.jsx)(p.default, {
      className: A.guildIcon,
      size: p.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != n ? (0, i.jsx)(y, {
    channel: n,
    onClick: l
  }) : (0, i.jsxs)(o.Clickable, {
    className: A.inline,
    onClick: a,
    children: [(0, i.jsx)(m.default, {
      height: 20,
      width: 20,
      className: s(A.channelContainer, A.icon)
    }), (0, i.jsx)(o.Text, {
      className: r ? A.externalLocation : A.channelLocation,
      variant: "text-sm/normal",
      children: (0, _.guildEventDetailsParser)(u, !0)
    })]
  })
}

function V(e) {
  var t;
  let {
    className: n,
    guild: l,
    channel: a,
    creator: u,
    name: r,
    entityType: E,
    description: v,
    imageLocation: g = 0,
    imageSource: h,
    isActive: p,
    isUserLurking: m,
    isJoined: _ = !1,
    isMember: k = !1,
    isHub: y = !1,
    speakers: V,
    speakerCount: U,
    rsvped: b,
    canInvite: F,
    location: O,
    truncate: w,
    onContextMenu: H,
    onJoinClick: B,
    onJoinGuildClick: z,
    onGoToGuildClick: K,
    onRsvpClick: q,
    onStartClick: Y,
    onInviteClick: Z,
    onEndClick: J,
    onClick: X,
    isNew: W,
    guildEventId: Q,
    eventPreview: $,
    recurrenceRule: ee,
    recurrenceId: et
  } = e, en = (0, N.isChannelPublic)(a, E), el = E === D.GuildScheduledEventEntityTypes.EXTERNAL, {
    analyticsLocations: ea
  } = (0, f.default)(c.default.GUILD_EVENT_CARD), {
    showRecurringEventsDesktop: ei
  } = S.default.useExperiment({
    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : j.EMPTY_STRING_GUILD_ID,
    location: ea[0]
  }, {
    autoTrackExposure: !1
  }), eu = (0, d.useStateFromStores)([C.default], () => C.default.getGuildScheduledEvent(Q)), er = [];
  if (null != ee && null != eu) {
    let e = (0, I.getRRule)(ee);
    er = (0, I.generateNextRecurrences)(4, e, new Date(eu.scheduled_start_time))
  }
  let es = ei && er.length > 0;
  return (0, i.jsxs)(o.ClickableContainer, {
    "aria-label": r,
    onClick: () => null == X ? void 0 : X(et),
    onContextMenu: H,
    className: s(A.card, {
      [A.joined]: _,
      [A.lurking]: m
    }, n),
    children: [(0, i.jsxs)("div", {
      className: s(A.padding, {
        [A.isRecurring]: es
      }),
      children: [0 === g && (0, i.jsx)(x.default, {
        source: h
      }), (0, i.jsx)(R.default, {
        creator: u,
        name: r,
        description: v,
        imageSource: 1 === g ? h : null,
        truncate: w,
        guildId: null == l ? void 0 : l.id,
        isHub: y,
        isNew: W,
        guildEventId: Q,
        eventPreview: $,
        recurrenceId: et
      }), p && null != l && null != V && U > 0 && (0, i.jsx)(G.default, {
        guild: l,
        speakers: V,
        speakerCount: U,
        className: A.spacing
      }), (0, i.jsx)("hr", {
        className: A.divider
      }), (0, i.jsxs)("div", {
        className: s(A.inline, A.footer),
        children: [(0, i.jsx)(P, {
          guild: l,
          channel: a,
          onJoinClick: B,
          handleLocationClick: el ? e => e.stopPropagation() : void 0,
          location: O,
          isExternal: el,
          isHub: y
        }), y ? (0, i.jsx)(L.default, {
          isActive: p,
          isUserLurking: m,
          isMember: k,
          rsvped: b,
          onRsvpClick: q,
          onJoinGuildClick: z,
          onGoToGuildClick: K,
          guildName: null == l ? void 0 : l.name,
          canInvite: F,
          isChannelPublic: en,
          onInviteClick: Z
        }) : (0, i.jsx)(T.default, {
          entityType: E,
          isJoined: _,
          isActive: p,
          isUserLurking: m,
          rsvped: b,
          canInvite: F,
          isChannelPublic: en,
          onContextMenu: H,
          onJoinClick: B,
          onRsvpClick: q,
          onStartClick: Y,
          onInviteClick: Z,
          onEndClick: J
        })]
      }), es && (0, i.jsx)("hr", {
        className: A.divider
      })]
    }), es && (0, i.jsx)(M.default, {
      guildId: null == l ? void 0 : l.id,
      recurrenceRule: ee,
      guildEventId: Q,
      onRecurrenceClick: X
    })]
  })
}(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"