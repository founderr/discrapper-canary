i.d(e, {
  Q: function() {
    return t
  },
  Z: function() {
    return P
  }
});
var l, t, a = i(735250),
  r = i(470079),
  s = i(120356),
  c = i.n(s),
  o = i(442837),
  u = i(481060),
  d = i(447003),
  h = i(471445),
  v = i(889161),
  x = i(496675),
  C = i(346656),
  N = i(725436),
  m = i(274311),
  g = i(854698),
  j = i(285784),
  Z = i(95291),
  k = i(742593),
  E = i(810561),
  p = i(187443),
  I = i(131154),
  _ = i(765305),
  f = i(981631),
  T = i(689938),
  L = i(745222);

function A(n) {
  let {
    channel: e,
    onClick: i
  } = n, {
    canManageAllEvents: l
  } = (0, v.XJ)(e), t = (0, o.e7)([x.Z], () => !e.isGuildVocal() || x.Z.can(f.Plq.CONNECT, e), [e]), s = r.useMemo(() => (0, d.Z)(e), [e]), C = (0, h.KS)(e);
  return (0, a.jsx)(u.Tooltip, {
    text: T.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
    shouldShow: !t && null != i,
    children: n => (0, a.jsxs)(u.Clickable, {
      ...n,
      className: c()(L.inline, L.channelContainer, {
        [L.channelContainerEnabled]: t && null != i,
        [L.channelContainerDisabled]: !t && null != i
      }),
      onClick: i,
      children: [(0, a.jsx)(u.Tooltip, {
        text: T.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
        shouldShow: l && s && t && null != i,
        children: n => null != C ? (0, a.jsx)(C, {
          ...n,
          color: "curentColor",
          size: "custom",
          width: 20,
          height: 20,
          className: L.icon
        }) : null
      }), (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: L.channelLocation,
        children: e.name
      })]
    })
  })
}

function y(n) {
  let {
    guild: e,
    channel: i,
    onJoinClick: l,
    handleLocationClick: t,
    location: r,
    isExternal: s,
    isHub: o
  } = n;
  if (o) return null == e ? (0, a.jsx)("div", {}) : (0, a.jsxs)("div", {
    className: L.inline,
    children: [(0, a.jsx)(C.Z, {
      className: L.guildIcon,
      size: C.Z.Sizes.MINI,
      active: !0,
      guild: e
    }), (0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: null == e ? void 0 : e.name
    })]
  });
  return null != i ? (0, a.jsx)(A, {
    channel: i,
    onClick: l
  }) : (0, a.jsxs)(u.Clickable, {
    className: L.inline,
    onClick: t,
    children: [(0, a.jsx)(u.LocationIcon, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20,
      className: c()(L.channelContainer, L.icon)
    }), (0, a.jsx)(u.Text, {
      className: s ? L.externalLocation : L.channelLocation,
      variant: "text-sm/normal",
      children: (0, N.m)(r, !0)
    })]
  })
}

function P(n) {
  let {
    className: e,
    guild: i,
    channel: l,
    creator: t,
    name: r,
    entityType: s,
    description: o,
    imageLocation: d = 0,
    imageSource: h,
    isActive: v,
    isUserLurking: x,
    isJoined: C = !1,
    isMember: N = !1,
    isHub: f = !1,
    speakers: T,
    speakerCount: A,
    rsvped: P,
    canInvite: R,
    location: S,
    truncate: b,
    onContextMenu: M,
    onJoinClick: w,
    onJoinGuildClick: G,
    onGoToGuildClick: U,
    onRsvpClick: H,
    onStartClick: O,
    onInviteClick: V,
    onEndClick: z,
    onClick: X,
    isNew: D,
    guildEvent: J,
    eventPreview: B,
    recurrenceRule: W,
    recurrenceId: q
  } = n, K = (0, m.Q)(l, s), Q = s === _.WX.EXTERNAL, Y = Q ? n => n.stopPropagation() : void 0, F = [];
  if (null != W && null != event) {
    let n = (0, g.Ho)(W);
    F = (0, g.PJ)(4, n, new Date(J.scheduled_start_time))
  }
  let $ = F.length > 0;
  return (0, a.jsxs)(u.ClickableContainer, {
    "aria-label": r,
    onClick: () => null == X ? void 0 : X(q),
    onContextMenu: M,
    className: c()(L.card, {
      [L.joined]: C,
      [L.lurking]: x
    }, e),
    children: [(0, a.jsxs)("div", {
      className: c()(L.padding, {
        [L.isRecurring]: $
      }),
      children: [0 === d && (0, a.jsx)(Z.Z, {
        source: h
      }), (0, a.jsx)(k.ZP, {
        creator: t,
        name: r,
        description: o,
        imageSource: 1 === d ? h : null,
        truncate: b,
        guildId: null == i ? void 0 : i.id,
        isHub: f,
        isNew: D,
        guildEvent: J,
        eventPreview: B,
        recurrenceId: q
      }), v && null != i && null != T && A > 0 && (0, a.jsx)(I.Z, {
        guild: i,
        speakers: T,
        speakerCount: A,
        className: L.spacing
      }), (0, a.jsx)("hr", {
        className: L.divider
      }), (0, a.jsxs)("div", {
        className: c()(L.inline, L.footer),
        children: [(0, a.jsx)(y, {
          guild: i,
          channel: l,
          onJoinClick: w,
          handleLocationClick: Y,
          location: S,
          isExternal: Q,
          isHub: f
        }), f ? (0, a.jsx)(p.Z, {
          isActive: v,
          isUserLurking: x,
          isMember: N,
          rsvped: P,
          onRsvpClick: H,
          onJoinGuildClick: G,
          onGoToGuildClick: U,
          guildName: null == i ? void 0 : i.name,
          canInvite: R,
          isChannelPublic: K,
          onInviteClick: V
        }) : (0, a.jsx)(j.ZP, {
          entityType: s,
          isJoined: C,
          isActive: v,
          isUserLurking: x,
          rsvped: P,
          canInvite: R,
          isChannelPublic: K,
          onContextMenu: M,
          onJoinClick: w,
          onRsvpClick: H,
          onStartClick: O,
          onInviteClick: V,
          onEndClick: z
        })]
      }), $ && (0, a.jsx)("hr", {
        className: L.divider
      })]
    }), $ && (0, a.jsx)(E.Z, {
      guildId: null == i ? void 0 : i.id,
      recurrenceRule: W,
      guildEventId: J.id,
      onRecurrenceClick: X
    })]
  })
}(l = t || (t = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"