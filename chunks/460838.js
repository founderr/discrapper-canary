"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return x
  }
});
var l, a, s = n("735250"),
  i = n("470079"),
  u = n("120356"),
  r = n.n(u),
  d = n("442837"),
  o = n("481060"),
  I = n("447003"),
  c = n("471445"),
  E = n("889161"),
  f = n("496675"),
  _ = n("346656"),
  N = n("393112"),
  T = n("924301"),
  S = n("725436"),
  O = n("274311"),
  h = n("854698"),
  m = n("285784"),
  g = n("95291"),
  v = n("742593"),
  M = n("810561"),
  C = n("187443"),
  R = n("131154"),
  A = n("765305"),
  P = n("981631"),
  p = n("689938"),
  U = n("836356");

function V(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, E.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([f.default], () => !t.isGuildVocal() || f.default.can(P.Permissions.CONNECT, t), [t]), u = i.useMemo(() => (0, I.default)(t), [t]), _ = (0, c.getChannelIconComponent)(t);
  return (0, s.jsx)(o.Tooltip, {
    text: p.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != n,
    children: e => (0, s.jsxs)(o.Clickable, {
      ...e,
      className: r()(U.inline, U.channelContainer, {
        [U.channelContainerEnabled]: a && null != n,
        [U.channelContainerDisabled]: !a && null != n
      }),
      onClick: n,
      children: [(0, s.jsx)(o.Tooltip, {
        text: p.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && u && a && null != n,
        children: e => null != _ ? (0, s.jsx)(_, {
          ...e,
          width: 20,
          height: 20,
          className: U.icon
        }) : null
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: U.channelLocation,
        children: t.name
      })]
    })
  })
}

function D(e) {
  let {
    guild: t,
    channel: n,
    onJoinClick: l,
    handleLocationClick: a,
    location: i,
    isExternal: u,
    isHub: d
  } = e;
  if (d) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
    className: U.inline,
    children: [(0, s.jsx)(_.default, {
      className: U.guildIcon,
      size: _.default.Sizes.MINI,
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
    className: U.inline,
    onClick: a,
    children: [(0, s.jsx)(N.default, {
      height: 20,
      width: 20,
      className: r()(U.channelContainer, U.icon)
    }), (0, s.jsx)(o.Text, {
      className: u ? U.externalLocation : U.channelLocation,
      variant: "text-sm/normal",
      children: (0, S.guildEventDetailsParser)(i, !0)
    })]
  })
}

function x(e) {
  let {
    className: t,
    guild: n,
    channel: l,
    creator: a,
    name: i,
    entityType: u,
    description: I,
    imageLocation: c = 0,
    imageSource: E,
    isActive: f,
    isUserLurking: _,
    isJoined: N = !1,
    isMember: S = !1,
    isHub: P = !1,
    speakers: p,
    speakerCount: V,
    rsvped: x,
    canInvite: L,
    location: y,
    truncate: j,
    onContextMenu: H,
    onJoinClick: F,
    onJoinGuildClick: G,
    onGoToGuildClick: k,
    onRsvpClick: b,
    onStartClick: w,
    onInviteClick: X,
    onEndClick: Y,
    onClick: z,
    isNew: Z,
    guildEventId: B,
    eventPreview: q,
    recurrenceRule: J,
    recurrenceId: W
  } = e, K = (0, O.isChannelPublic)(l, u), Q = u === A.GuildScheduledEventEntityTypes.EXTERNAL, $ = (0, d.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(B)), ee = [];
  if (null != J && null != $) {
    let e = (0, h.getRRule)(J);
    ee = (0, h.generateNextRecurrences)(4, e, new Date($.scheduled_start_time))
  }
  let et = ee.length > 0;
  return (0, s.jsxs)(o.ClickableContainer, {
    "aria-label": i,
    onClick: () => null == z ? void 0 : z(W),
    onContextMenu: H,
    className: r()(U.card, {
      [U.joined]: N,
      [U.lurking]: _
    }, t),
    children: [(0, s.jsxs)("div", {
      className: r()(U.padding, {
        [U.isRecurring]: et
      }),
      children: [0 === c && (0, s.jsx)(g.default, {
        source: E
      }), (0, s.jsx)(v.default, {
        creator: a,
        name: i,
        description: I,
        imageSource: 1 === c ? E : null,
        truncate: j,
        guildId: null == n ? void 0 : n.id,
        isHub: P,
        isNew: Z,
        guildEventId: B,
        eventPreview: q,
        recurrenceId: W
      }), f && null != n && null != p && V > 0 && (0, s.jsx)(R.default, {
        guild: n,
        speakers: p,
        speakerCount: V,
        className: U.spacing
      }), (0, s.jsx)("hr", {
        className: U.divider
      }), (0, s.jsxs)("div", {
        className: r()(U.inline, U.footer),
        children: [(0, s.jsx)(D, {
          guild: n,
          channel: l,
          onJoinClick: F,
          handleLocationClick: Q ? e => e.stopPropagation() : void 0,
          location: y,
          isExternal: Q,
          isHub: P
        }), P ? (0, s.jsx)(C.default, {
          isActive: f,
          isUserLurking: _,
          isMember: S,
          rsvped: x,
          onRsvpClick: b,
          onJoinGuildClick: G,
          onGoToGuildClick: k,
          guildName: null == n ? void 0 : n.name,
          canInvite: L,
          isChannelPublic: K,
          onInviteClick: X
        }) : (0, s.jsx)(m.default, {
          entityType: u,
          isJoined: N,
          isActive: f,
          isUserLurking: _,
          rsvped: x,
          canInvite: L,
          isChannelPublic: K,
          onContextMenu: H,
          onJoinClick: F,
          onRsvpClick: b,
          onStartClick: w,
          onInviteClick: X,
          onEndClick: Y
        })]
      }), et && (0, s.jsx)("hr", {
        className: U.divider
      })]
    }), et && (0, s.jsx)(M.default, {
      guildId: null == n ? void 0 : n.id,
      recurrenceRule: J,
      guildEventId: B,
      onRecurrenceClick: z
    })]
  })
}(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"