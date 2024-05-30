"use strict";
n.r(l), n.d(l, {
  createEventLocationClickHandler: function() {
    return y
  }
});
var t = n("735250"),
  s = n("470079"),
  a = n("120356"),
  i = n.n(a),
  u = n("442837"),
  o = n("481060"),
  r = n("447543"),
  d = n("287734"),
  c = n("922482"),
  v = n("601964"),
  m = n("592125"),
  p = n("430824"),
  h = n("940627"),
  E = n("197409"),
  N = n("808602"),
  f = n("263704"),
  g = n("15274"),
  C = n("924301"),
  I = n("725436"),
  x = n("978227"),
  S = n("236373"),
  j = n("854698"),
  L = n("405613"),
  R = n("95291"),
  T = n("742593"),
  _ = n("217804"),
  B = n("139712"),
  D = n("765305"),
  A = n("689938"),
  k = n("685777");
let G = (e, l) => n => {
    n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == l || l(n)
  },
  w = (e, l) => n => {
    let t = m.default.getChannel(e.channel_id);
    null != t && (n.stopPropagation(), (0, c.connectAndOpen)(t), null == l || l(n))
  },
  y = (e, l) => {
    switch (null == e ? void 0 : e.entity_type) {
      case D.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
        return w(e, l);
      case D.GuildScheduledEventEntityTypes.VOICE:
        return G(e, l)
    }
    return () => {}
  },
  M = (e, l) => l && [D.GuildScheduledEventEntityTypes.STAGE_INSTANCE, D.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
  b = s.memo(function(e) {
    var l;
    let {
      guild: n,
      guildScheduledEvent: a,
      channel: i,
      isMember: d
    } = e, c = (0, u.useStateFromStores)([p.default], () => {
      var e;
      return null == n ? null : null !== (e = p.default.getGuild(n.id)) && void 0 !== e ? e : new v.default(n)
    }, [n]), m = (0, _.getLocationDataForEvent)(a, i), N = s.useCallback(e => {
      d && null != a && (e.stopPropagation(), (0, r.transitionToGuildFromEventInvite)(a))
    }, [d, a]), f = s.useCallback(e => {
      y(a)(e)
    }, [a]);
    if (null == c) return null;
    let g = null == m ? void 0 : m.IconComponent,
      C = (0, t.jsxs)(t.Fragment, {
        children: [null != g && (0, t.jsx)(g, {
          width: 16,
          height: 16,
          className: k.channelIcon
        }), (0, t.jsx)(o.Text, {
          className: k.channelDescription,
          variant: "text-xs/normal",
          children: (0, I.guildEventDetailsParser)(null !== (l = null == m ? void 0 : m.locationName) && void 0 !== l ? l : "", !0)
        })]
      });
    return (0, t.jsxs)("div", {
      className: k.inviteDetailsContainer,
      children: [(0, t.jsx)(E.default.Icon, {
        guild: c,
        onClick: N
      }), (0, t.jsxs)("div", {
        className: k.verticalContainer,
        children: [(0, t.jsxs)("div", {
          className: k.guildChannelInfoContainer,
          children: [(0, t.jsx)(h.default, {
            guild: c,
            tooltipPosition: "top",
            tooltipColor: o.Tooltip.Colors.PRIMARY,
            size: 16,
            className: k.guildBadge
          }), (0, t.jsx)(o.Clickable, {
            className: k.guildNameClickable,
            onClick: N,
            children: (0, t.jsx)(o.Heading, {
              className: d ? k.guildNameLinkable : k.guildName,
              variant: "text-sm/medium",
              children: c.name
            })
          })]
        }), (0, t.jsx)("div", {
          className: k.channelInfoContainer,
          children: M(a, d) ? (0, t.jsx)(o.Clickable, {
            className: k.channelLocationLink,
            onClick: f,
            children: C
          }) : C
        })]
      })]
    })
  }),
  P = s.memo(function(e) {
    let {
      guildId: l,
      guildScheduledEventId: n,
      recurrenceId: s,
      isActive: a,
      isEnded: i,
      isMember: r,
      isExternal: d,
      onAcceptInstantInvite: c,
      onTransitionToInviteChannel: v
    } = e, m = (0, u.useStateFromStores)([C.default], () => C.default.isInterestedInEventRecurrence(n, s), [n, s]), p = e => {
      e.stopPropagation(), r ? a && v() : c()
    };
    return r ? a ? (0, t.jsx)(o.Button, {
      className: k.button,
      size: o.Button.Sizes.SMALL,
      onClick: e => {
        !d && p(e)
      },
      color: d ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
      children: d ? A.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : A.default.Messages.JOIN_GUILD
    }) : i ? (0, t.jsx)(o.Button, {
      className: k.button,
      size: o.Button.Sizes.SMALL,
      disabled: !0,
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.OUTLINED,
      children: A.default.Messages.GUILD_EVENT_INVITE_COMPLETED
    }) : (0, t.jsxs)(o.Button, {
      className: k.button,
      innerClassName: k.innerButton,
      size: o.Button.Sizes.SMALL,
      color: o.Button.Colors.PRIMARY,
      look: m ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, B.default)(n, s, l)
      },
      children: [m ? (0, t.jsx)(f.default, {
        width: 16,
        height: 16,
        className: k.buttonIcon
      }) : (0, t.jsx)(N.default, {
        width: 16,
        height: 16,
        className: k.buttonIcon
      }), A.default.Messages.INDICATE_RSVP]
    }) : (0, t.jsx)(o.Button, {
      className: k.button,
      size: o.Button.Sizes.SMALL,
      onClick: p,
      color: o.Button.Colors.GREEN,
      children: A.default.Messages.JOIN_GUILD
    })
  }),
  V = s.memo(function(e) {
    var l;
    let {
      guildScheduledEvent: n,
      guild: a,
      channel: u,
      isMember: r,
      recurrenceId: d,
      onAcceptInstantInvite: c,
      onTransitionToInviteChannel: v
    } = e, m = null != d ? d : null != n ? (0, j.getNextRecurrenceIdInEvent)(n) : null, p = (null == n ? void 0 : n.recurrence_rule) == null || null == m || (0, j.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == n ? void 0 : n.recurrence_rule), m), h = (0, x.default)(n), N = s.useCallback(() => {
      r && null != n && (0, g.openGuildEventDetails)({
        eventId: n.id,
        recurrenceId: m
      })
    }, [r, n, m]);
    if (null == n || !p) return null;
    let f = (0, C.isGuildScheduledEventActive)(n),
      I = (0, C.isGuildEventEnded)(n),
      _ = n.entity_type === D.GuildScheduledEventEntityTypes.EXTERNAL;
    return (0, t.jsx)(E.default, {
      className: i()({
        [k.clickable]: r
      }),
      children: (0, t.jsxs)(o.Clickable, {
        onClick: N,
        children: [null != n.image && (0, t.jsx)(R.default, {
          source: (0, L.default)(n),
          className: k.banner
        }), (0, t.jsx)(T.default, {
          name: n.name,
          description: null !== (l = n.description) && void 0 !== l ? l : void 0,
          descriptionClassName: k.eventDescription,
          guildId: n.guild_id,
          creator: h,
          guildEventId: n.id,
          eventPreview: n,
          recurrenceId: m
        }), (0, t.jsxs)("div", {
          className: k.footerContainer,
          children: [(0, t.jsx)(b, {
            guild: a,
            channel: u,
            guildScheduledEvent: n,
            isMember: r
          }), (0, t.jsx)(P, {
            isActive: f,
            isEnded: I,
            isMember: r,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: m,
            onAcceptInstantInvite: c,
            onTransitionToInviteChannel: v,
            isExternal: _
          })]
        })]
      })
    })
  });
l.default = V