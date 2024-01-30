"use strict";
t.r(n), t.d(n, {
  createEventLocationClickHandler: function() {
    return b
  },
  default: function() {
    return z
  }
});
var l = t("37983"),
  s = t("884691"),
  i = t("414456"),
  a = t.n(i),
  u = t("446674"),
  r = t("77078"),
  d = t("970728"),
  o = t("987317"),
  c = t("716214"),
  v = t("813006"),
  m = t("42203"),
  E = t("305961"),
  h = t("580357"),
  p = t("174622"),
  f = t("660279"),
  N = t("36694"),
  g = t("374021"),
  C = t("398604"),
  I = t("1339"),
  x = t("882550"),
  S = t("189443"),
  _ = t("822516"),
  j = t("93550"),
  L = t("255050"),
  T = t("400271"),
  R = t("931874"),
  B = t("936965"),
  D = t("745049"),
  k = t("782340"),
  G = t("336179");
let y = (e, n) => t => {
    t.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == n || n(t)
  },
  A = (e, n) => t => {
    let l = m.default.getChannel(e.channel_id);
    null != l && (t.stopPropagation(), (0, c.connectAndOpen)(l), null == n || n(t))
  },
  b = (e, n) => {
    switch (null == e ? void 0 : e.entity_type) {
      case D.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
        return A(e, n);
      case D.GuildScheduledEventEntityTypes.VOICE:
        return y(e, n)
    }
    return () => {}
  },
  M = (e, n) => n && [D.GuildScheduledEventEntityTypes.STAGE_INSTANCE, D.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
  w = s.memo(function(e) {
    var n;
    let {
      guild: t,
      guildScheduledEvent: i,
      channel: a,
      isMember: o
    } = e, c = (0, u.useStateFromStores)([E.default], () => {
      var e;
      return null == t ? null : null !== (e = E.default.getGuild(t.id)) && void 0 !== e ? e : new v.default(t)
    }, [t]), m = (0, R.getLocationDataForEvent)(i, a), f = s.useCallback(e => {
      o && null != i && (e.stopPropagation(), (0, d.transitionToGuildFromEventInvite)(i))
    }, [o, i]), N = s.useCallback(e => {
      b(i)(e)
    }, [i]);
    if (null == c) return null;
    let g = null == m ? void 0 : m.IconComponent,
      C = (0, l.jsxs)(l.Fragment, {
        children: [null != g && (0, l.jsx)(g, {
          width: 16,
          height: 16,
          className: G.channelIcon
        }), (0, l.jsx)(r.Text, {
          className: G.channelDescription,
          variant: "text-xs/normal",
          children: (0, I.guildEventDetailsParser)(null !== (n = null == m ? void 0 : m.locationName) && void 0 !== n ? n : "", !0)
        })]
      });
    return (0, l.jsxs)("div", {
      className: G.inviteDetailsContainer,
      children: [(0, l.jsx)(p.default.Icon, {
        guild: c,
        onClick: f
      }), (0, l.jsxs)("div", {
        className: G.verticalContainer,
        children: [(0, l.jsxs)("div", {
          className: G.guildChannelInfoContainer,
          children: [(0, l.jsx)(h.default, {
            guild: c,
            tooltipPosition: "top",
            tooltipColor: r.Tooltip.Colors.PRIMARY,
            size: 16,
            className: G.guildBadge
          }), (0, l.jsx)(r.Clickable, {
            className: G.guildNameClickable,
            onClick: f,
            children: (0, l.jsx)(r.Heading, {
              className: o ? G.guildNameLinkable : G.guildName,
              variant: "text-sm/medium",
              children: c.name
            })
          })]
        }), (0, l.jsx)("div", {
          className: G.channelInfoContainer,
          children: M(i, o) ? (0, l.jsx)(r.Clickable, {
            className: G.channelLocationLink,
            onClick: N,
            children: C
          }) : C
        })]
      })]
    })
  }),
  P = s.memo(function(e) {
    let {
      guildId: n,
      guildScheduledEventId: t,
      recurrenceId: s,
      isActive: i,
      isEnded: a,
      isMember: d,
      isExternal: o,
      onAcceptInstantInvite: c,
      onTransitionToInviteChannel: v
    } = e, m = (0, u.useStateFromStores)([C.default], () => C.default.isInterestedInEventRecurrence(t, s), [t, s]), E = e => {
      e.stopPropagation(), d ? i && v() : c()
    };
    return d ? i ? (0, l.jsx)(r.Button, {
      className: G.button,
      size: r.Button.Sizes.SMALL,
      onClick: e => {
        !o && E(e)
      },
      color: o ? r.Button.Colors.TRANSPARENT : r.Button.Colors.GREEN,
      children: o ? k.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : k.default.Messages.JOIN_GUILD
    }) : a ? (0, l.jsx)(r.Button, {
      className: G.button,
      size: r.Button.Sizes.SMALL,
      disabled: !0,
      color: r.Button.Colors.PRIMARY,
      look: r.Button.Looks.OUTLINED,
      children: k.default.Messages.GUILD_EVENT_INVITE_COMPLETED
    }) : (0, l.jsxs)(r.Button, {
      className: G.button,
      innerClassName: G.innerButton,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      look: m ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, B.default)(t, s, n)
      },
      children: [m ? (0, l.jsx)(N.default, {
        width: 16,
        height: 16,
        className: G.buttonIcon
      }) : (0, l.jsx)(f.default, {
        width: 16,
        height: 16,
        className: G.buttonIcon
      }), k.default.Messages.INDICATE_RSVP]
    }) : (0, l.jsx)(r.Button, {
      className: G.button,
      size: r.Button.Sizes.SMALL,
      onClick: E,
      color: r.Button.Colors.GREEN,
      children: k.default.Messages.JOIN_GUILD
    })
  }),
  U = s.memo(function(e) {
    var n;
    let {
      guildScheduledEvent: t,
      guild: i,
      channel: u,
      isMember: d,
      recurrenceId: o,
      onAcceptInstantInvite: c,
      onTransitionToInviteChannel: v
    } = e, m = null != o ? o : null != t ? (0, _.getNextRecurrenceIdInEvent)(t) : null, E = (null == t ? void 0 : t.recurrence_rule) == null || null == m || (0, _.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == t ? void 0 : t.recurrence_rule), m), h = (0, x.default)(t), f = s.useCallback(() => {
      d && null != t && (0, g.openGuildEventDetails)({
        eventId: t.id,
        recurrenceId: m
      })
    }, [d, t, m]);
    if (null == t || !E) return null;
    let N = (0, C.isGuildScheduledEventActive)(t),
      I = (0, C.isGuildEventEnded)(t),
      R = t.entity_type === D.GuildScheduledEventEntityTypes.EXTERNAL;
    return (0, l.jsx)(p.default, {
      className: a({
        [G.clickable]: d
      }),
      children: (0, l.jsxs)(r.Clickable, {
        onClick: f,
        children: [null != t.image && (0, l.jsx)(L.default, {
          source: (0, j.default)(t),
          className: G.banner
        }), (0, l.jsx)(T.default, {
          name: t.name,
          description: null !== (n = t.description) && void 0 !== n ? n : void 0,
          descriptionClassName: G.eventDescription,
          guildId: t.guild_id,
          creator: h,
          guildEventId: t.id,
          eventPreview: t,
          recurrenceId: m
        }), (0, l.jsxs)("div", {
          className: G.footerContainer,
          children: [(0, l.jsx)(w, {
            guild: i,
            channel: u,
            guildScheduledEvent: t,
            isMember: d
          }), (0, l.jsx)(P, {
            isActive: N,
            isEnded: I,
            isMember: d,
            guildId: t.guild_id,
            guildScheduledEventId: t.id,
            recurrenceId: m,
            onAcceptInstantInvite: c,
            onTransitionToInviteChannel: v,
            isExternal: R
          })]
        })]
      })
    })
  });
var z = U