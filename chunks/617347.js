"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return u
  },
  default: function() {
    return O
  }
});
var l, u, i = n("37983"),
  a = n("884691"),
  r = n("414456"),
  s = n.n(r),
  d = n("446674"),
  o = n("77078"),
  c = n("812204"),
  f = n("685665"),
  E = n("656038"),
  v = n("419830"),
  g = n("817963"),
  S = n("957255"),
  h = n("476263"),
  m = n("718550"),
  N = n("398604"),
  C = n("651072"),
  p = n("1339"),
  _ = n("613767"),
  I = n("822516"),
  T = n("707916"),
  x = n("255050"),
  D = n("400271"),
  G = n("427554"),
  R = n("644189"),
  L = n("29913"),
  M = n("745049"),
  A = n("49111"),
  U = n("782340"),
  y = n("955614");

function V(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, g.useManageResourcePermissions)(t), u = (0, d.useStateFromStores)([S.default], () => !t.isGuildVocal() || S.default.can(A.Permissions.CONNECT, t), [t]), r = a.useMemo(() => (0, E.default)(t), [t]), c = (0, v.getChannelIconComponent)(t);
  return (0, i.jsx)(o.Tooltip, {
    text: U.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !u && null != n,
    children: e => (0, i.jsxs)(o.Clickable, {
      ...e,
      className: s(y.inline, y.channelContainer, {
        [y.channelContainerEnabled]: u && null != n,
        [y.channelContainerDisabled]: !u && null != n
      }),
      onClick: n,
      children: [(0, i.jsx)(o.Tooltip, {
        text: U.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && r && u && null != n,
        children: e => null != c ? (0, i.jsx)(c, {
          ...e,
          width: 20,
          height: 20,
          className: y.icon
        }) : null
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: y.channelLocation,
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
    handleLocationClick: u,
    location: a,
    isExternal: r,
    isHub: d
  } = e;
  if (d) return null == t ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
    className: y.inline,
    children: [(0, i.jsx)(h.default, {
      className: y.guildIcon,
      size: h.default.Sizes.MINI,
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
    className: y.inline,
    onClick: u,
    children: [(0, i.jsx)(m.default, {
      height: 20,
      width: 20,
      className: s(y.channelContainer, y.icon)
    }), (0, i.jsx)(o.Text, {
      className: r ? y.externalLocation : y.channelLocation,
      variant: "text-sm/normal",
      children: (0, p.guildEventDetailsParser)(a, !0)
    })]
  })
}

function O(e) {
  var t;
  let {
    className: n,
    guild: l,
    channel: u,
    creator: a,
    name: r,
    entityType: E,
    description: v,
    imageLocation: g = 0,
    imageSource: S,
    isActive: h,
    isUserLurking: m,
    isJoined: p = !1,
    isMember: U = !1,
    isHub: V = !1,
    speakers: O,
    speakerCount: j,
    rsvped: k,
    canInvite: F,
    location: b,
    truncate: w,
    onContextMenu: H,
    onJoinClick: B,
    onJoinGuildClick: W,
    onGoToGuildClick: z,
    onRsvpClick: Y,
    onStartClick: q,
    onInviteClick: K,
    onEndClick: Z,
    onClick: J,
    isNew: X,
    guildEventId: Q,
    eventPreview: $,
    recurrenceRule: ee,
    recurrenceId: et
  } = e, en = (0, _.isChannelPublic)(u, E), el = E === M.GuildScheduledEventEntityTypes.EXTERNAL, {
    analyticsLocations: eu
  } = (0, f.default)(c.default.GUILD_EVENT_CARD), {
    showRecurringEventsDesktop: ei
  } = C.default.useExperiment({
    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : A.EMPTY_STRING_GUILD_ID,
    location: eu[0]
  }, {
    autoTrackExposure: !1
  }), ea = (0, d.useStateFromStores)([N.default], () => N.default.getGuildScheduledEvent(Q)), er = [];
  if (null != ee && null != ea) {
    let e = (0, I.getRRule)(ee);
    er = (0, I.generateNextRecurrences)(4, e, new Date(ea.scheduled_start_time))
  }
  let es = ei && er.length > 0;
  return (0, i.jsxs)(o.ClickableContainer, {
    "aria-label": r,
    onClick: () => null == J ? void 0 : J(et),
    onContextMenu: H,
    className: s(y.card, {
      [y.joined]: p,
      [y.lurking]: m
    }, n),
    children: [(0, i.jsxs)("div", {
      className: s(y.padding, {
        [y.isRecurring]: es
      }),
      children: [0 === g && (0, i.jsx)(x.default, {
        source: S
      }), (0, i.jsx)(D.default, {
        creator: a,
        name: r,
        description: v,
        imageSource: 1 === g ? S : null,
        truncate: w,
        guildId: null == l ? void 0 : l.id,
        isHub: V,
        isNew: X,
        guildEventId: Q,
        eventPreview: $,
        recurrenceId: et
      }), h && null != l && null != O && j > 0 && (0, i.jsx)(L.default, {
        guild: l,
        speakers: O,
        speakerCount: j,
        className: y.spacing
      }), (0, i.jsx)("hr", {
        className: y.divider
      }), (0, i.jsxs)("div", {
        className: s(y.inline, y.footer),
        children: [(0, i.jsx)(P, {
          guild: l,
          channel: u,
          onJoinClick: B,
          handleLocationClick: el ? e => e.stopPropagation() : void 0,
          location: b,
          isExternal: el,
          isHub: V
        }), V ? (0, i.jsx)(R.default, {
          isActive: h,
          isUserLurking: m,
          isMember: U,
          rsvped: k,
          onRsvpClick: Y,
          onJoinGuildClick: W,
          onGoToGuildClick: z,
          guildName: null == l ? void 0 : l.name,
          canInvite: F,
          isChannelPublic: en,
          onInviteClick: K
        }) : (0, i.jsx)(T.default, {
          entityType: E,
          isJoined: p,
          isActive: h,
          isUserLurking: m,
          rsvped: k,
          canInvite: F,
          isChannelPublic: en,
          onContextMenu: H,
          onJoinClick: B,
          onRsvpClick: Y,
          onStartClick: q,
          onInviteClick: K,
          onEndClick: Z
        })]
      }), es && (0, i.jsx)("hr", {
        className: y.divider
      })]
    }), es && (0, i.jsx)(G.default, {
      guildId: null == l ? void 0 : l.id,
      recurrenceRule: ee,
      guildEventId: Q,
      onRecurrenceClick: J
    })]
  })
}(l = u || (u = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"