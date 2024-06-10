"use strict";
n.r(t), n.d(t, {
  GuildEventBodyImageLocation: function() {
    return a
  },
  default: function() {
    return D
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
  T = n("725436"),
  S = n("274311"),
  O = n("854698"),
  h = n("285784"),
  m = n("95291"),
  v = n("742593"),
  g = n("810561"),
  M = n("187443"),
  C = n("131154"),
  R = n("765305"),
  A = n("981631"),
  P = n("689938"),
  p = n("836356");

function U(e) {
  let {
    channel: t,
    onClick: n
  } = e, {
    canManageAllEvents: l
  } = (0, E.useManageResourcePermissions)(t), a = (0, d.useStateFromStores)([f.default], () => !t.isGuildVocal() || f.default.can(A.Permissions.CONNECT, t), [t]), u = i.useMemo(() => (0, I.default)(t), [t]), _ = (0, c.getChannelIconComponent)(t);
  return (0, s.jsx)(o.Tooltip, {
    text: P.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !a && null != n,
    children: e => (0, s.jsxs)(o.Clickable, {
      ...e,
      className: r()(p.inline, p.channelContainer, {
        [p.channelContainerEnabled]: a && null != n,
        [p.channelContainerDisabled]: !a && null != n
      }),
      onClick: n,
      children: [(0, s.jsx)(o.Tooltip, {
        text: P.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && u && a && null != n,
        children: e => null != _ ? (0, s.jsx)(_, {
          ...e,
          width: 20,
          height: 20,
          className: p.icon
        }) : null
      }), (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: p.channelLocation,
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
    isExternal: u,
    isHub: d
  } = e;
  if (d) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
    className: p.inline,
    children: [(0, s.jsx)(_.default, {
      className: p.guildIcon,
      size: _.default.Sizes.MINI,
      active: !0,
      guild: t
    }), (0, s.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == t ? void 0 : t.name
    })]
  });
  return null != n ? (0, s.jsx)(U, {
    channel: n,
    onClick: l
  }) : (0, s.jsxs)(o.Clickable, {
    className: p.inline,
    onClick: a,
    children: [(0, s.jsx)(N.default, {
      height: 20,
      width: 20,
      className: r()(p.channelContainer, p.icon)
    }), (0, s.jsx)(o.Text, {
      className: u ? p.externalLocation : p.channelLocation,
      variant: "text-sm/normal",
      children: (0, T.guildEventDetailsParser)(i, !0)
    })]
  })
}

function D(e) {
  let {
    className: t,
    guild: n,
    channel: l,
    creator: a,
    name: i,
    entityType: u,
    description: d,
    imageLocation: I = 0,
    imageSource: c,
    isActive: E,
    isUserLurking: f,
    isJoined: _ = !1,
    isMember: N = !1,
    isHub: T = !1,
    speakers: A,
    speakerCount: P,
    rsvped: U,
    canInvite: D,
    location: x,
    truncate: L,
    onContextMenu: y,
    onJoinClick: j,
    onJoinGuildClick: H,
    onGoToGuildClick: F,
    onRsvpClick: G,
    onStartClick: k,
    onInviteClick: b,
    onEndClick: w,
    onClick: X,
    isNew: Y,
    guildEvent: z,
    eventPreview: Z,
    recurrenceRule: B,
    recurrenceId: q
  } = e, J = (0, S.isChannelPublic)(l, u), W = u === R.GuildScheduledEventEntityTypes.EXTERNAL, K = [];
  if (null != B && null != event) {
    let e = (0, O.getRRule)(B);
    K = (0, O.generateNextRecurrences)(4, e, new Date(z.scheduled_start_time))
  }
  let Q = K.length > 0;
  return (0, s.jsxs)(o.ClickableContainer, {
    "aria-label": i,
    onClick: () => null == X ? void 0 : X(q),
    onContextMenu: y,
    className: r()(p.card, {
      [p.joined]: _,
      [p.lurking]: f
    }, t),
    children: [(0, s.jsxs)("div", {
      className: r()(p.padding, {
        [p.isRecurring]: Q
      }),
      children: [0 === I && (0, s.jsx)(m.default, {
        source: c
      }), (0, s.jsx)(v.default, {
        creator: a,
        name: i,
        description: d,
        imageSource: 1 === I ? c : null,
        truncate: L,
        guildId: null == n ? void 0 : n.id,
        isHub: T,
        isNew: Y,
        guildEvent: z,
        eventPreview: Z,
        recurrenceId: q
      }), E && null != n && null != A && P > 0 && (0, s.jsx)(C.default, {
        guild: n,
        speakers: A,
        speakerCount: P,
        className: p.spacing
      }), (0, s.jsx)("hr", {
        className: p.divider
      }), (0, s.jsxs)("div", {
        className: r()(p.inline, p.footer),
        children: [(0, s.jsx)(V, {
          guild: n,
          channel: l,
          onJoinClick: j,
          handleLocationClick: W ? e => e.stopPropagation() : void 0,
          location: x,
          isExternal: W,
          isHub: T
        }), T ? (0, s.jsx)(M.default, {
          isActive: E,
          isUserLurking: f,
          isMember: N,
          rsvped: U,
          onRsvpClick: G,
          onJoinGuildClick: H,
          onGoToGuildClick: F,
          guildName: null == n ? void 0 : n.name,
          canInvite: D,
          isChannelPublic: J,
          onInviteClick: b
        }) : (0, s.jsx)(h.default, {
          entityType: u,
          isJoined: _,
          isActive: E,
          isUserLurking: f,
          rsvped: U,
          canInvite: D,
          isChannelPublic: J,
          onContextMenu: y,
          onJoinClick: j,
          onRsvpClick: G,
          onStartClick: k,
          onInviteClick: b,
          onEndClick: w
        })]
      }), Q && (0, s.jsx)("hr", {
        className: p.divider
      })]
    }), Q && (0, s.jsx)(g.default, {
      guildId: null == n ? void 0 : n.id,
      recurrenceRule: B,
      guildEventId: z.id,
      onRecurrenceClick: X
    })]
  })
}(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"