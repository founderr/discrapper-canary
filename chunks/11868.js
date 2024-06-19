l.d(n, {
  Qt: function() {
    return A
  }
});
var s = l(735250),
  t = l(470079),
  i = l(120356),
  a = l.n(i),
  o = l(442837),
  r = l(481060),
  u = l(447543),
  c = l(287734),
  d = l(922482),
  m = l(601964),
  N = l(592125),
  v = l(430824),
  p = l(940627),
  C = l(197409),
  E = l(15274),
  h = l(924301),
  g = l(725436),
  I = l(978227),
  x = l(236373),
  j = l(854698),
  L = l(405613),
  f = l(95291),
  _ = l(742593),
  S = l(217804),
  T = l(139712),
  B = l(765305),
  Z = l(689938),
  k = l(300451);
let D = (e, n) => l => {
    l.stopPropagation(), c.default.selectVoiceChannel(e.channel_id, !1), null == n || n(l)
  },
  R = (e, n) => l => {
    let s = N.Z.getChannel(e.channel_id);
    null != s && (l.stopPropagation(), (0, d.Cq)(s), null == n || n(l))
  },
  A = (e, n) => {
    switch (null == e ? void 0 : e.entity_type) {
      case B.WX.STAGE_INSTANCE:
        return R(e, n);
      case B.WX.VOICE:
        return D(e, n)
    }
    return () => {}
  },
  b = (e, n) => n && [B.WX.STAGE_INSTANCE, B.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
  M = t.memo(function(e) {
    var n;
    let {
      guild: l,
      guildScheduledEvent: i,
      channel: a,
      isMember: c
    } = e, d = (0, o.e7)([v.Z], () => {
      var e;
      return null == l ? null : null !== (e = v.Z.getGuild(l.id)) && void 0 !== e ? e : new m.ZP(l)
    }, [l]), N = (0, S.u)(i, a), E = t.useCallback(e => {
      c && null != i && (e.stopPropagation(), (0, u.B)(i))
    }, [c, i]), h = t.useCallback(e => {
      A(i)(e)
    }, [i]);
    if (null == d) return null;
    let I = null == N ? void 0 : N.IconComponent,
      x = (0, s.jsxs)(s.Fragment, {
        children: [null != I && (0, s.jsx)(I, {
          size: "xs",
          color: "currentColor",
          className: k.channelIcon
        }), (0, s.jsx)(r.Text, {
          className: k.channelDescription,
          variant: "text-xs/normal",
          children: (0, g.m)(null !== (n = null == N ? void 0 : N.locationName) && void 0 !== n ? n : "", !0)
        })]
      });
    return (0, s.jsxs)("div", {
      className: k.inviteDetailsContainer,
      children: [(0, s.jsx)(C.Z.Icon, {
        guild: d,
        onClick: E
      }), (0, s.jsxs)("div", {
        className: k.verticalContainer,
        children: [(0, s.jsxs)("div", {
          className: k.guildChannelInfoContainer,
          children: [(0, s.jsx)(p.Z, {
            guild: d,
            tooltipPosition: "top",
            tooltipColor: r.Tooltip.Colors.PRIMARY,
            size: 16,
            className: k.guildBadge
          }), (0, s.jsx)(r.Clickable, {
            className: k.guildNameClickable,
            onClick: E,
            children: (0, s.jsx)(r.Heading, {
              className: c ? k.guildNameLinkable : k.guildName,
              variant: "text-sm/medium",
              children: d.name
            })
          })]
        }), (0, s.jsx)("div", {
          className: k.channelInfoContainer,
          children: b(i, c) ? (0, s.jsx)(r.Clickable, {
            className: k.channelLocationLink,
            onClick: h,
            children: x
          }) : x
        })]
      })]
    })
  }),
  P = t.memo(function(e) {
    let {
      guildId: n,
      guildScheduledEventId: l,
      recurrenceId: t,
      isActive: i,
      isEnded: a,
      isMember: u,
      isExternal: c,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: m
    } = e, N = (0, o.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(l, t), [l, t]), v = e => {
      e.stopPropagation(), u ? i && m() : d()
    };
    return u ? i ? (0, s.jsx)(r.Button, {
      className: k.button,
      size: r.Button.Sizes.SMALL,
      onClick: e => {
        !c && v(e)
      },
      color: c ? r.Button.Colors.TRANSPARENT : r.Button.Colors.GREEN,
      children: c ? Z.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : Z.Z.Messages.JOIN_GUILD
    }) : a ? (0, s.jsx)(r.Button, {
      className: k.button,
      size: r.Button.Sizes.SMALL,
      disabled: !0,
      color: r.Button.Colors.PRIMARY,
      look: r.Button.Looks.OUTLINED,
      children: Z.Z.Messages.GUILD_EVENT_INVITE_COMPLETED
    }) : (0, s.jsxs)(r.Button, {
      className: k.button,
      innerClassName: k.innerButton,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      look: N ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, T.Z)(l, t, n)
      },
      children: [N ? (0, s.jsx)(r.CheckmarkLargeIcon, {
        size: "xs",
        color: "currentColor",
        className: k.buttonIcon
      }) : (0, s.jsx)(r.BellIcon, {
        size: "xs",
        color: "currentColor",
        className: k.buttonIcon
      }), Z.Z.Messages.INDICATE_RSVP]
    }) : (0, s.jsx)(r.Button, {
      className: k.button,
      size: r.Button.Sizes.SMALL,
      onClick: v,
      color: r.Button.Colors.GREEN,
      children: Z.Z.Messages.JOIN_GUILD
    })
  }),
  w = t.memo(function(e) {
    var n;
    let {
      guildScheduledEvent: l,
      guild: i,
      channel: o,
      isMember: u,
      recurrenceId: c,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: m
    } = e, N = null != c ? c : null != l ? (0, j.DK)(l) : null, v = (null == l ? void 0 : l.recurrence_rule) == null || null == N || (0, j.Rp)((0, x.KV)(null == l ? void 0 : l.recurrence_rule), N), p = (0, I.Z)(l), g = t.useCallback(() => {
      u && null != l && (0, E.bO)({
        eventId: l.id,
        recurrenceId: N
      })
    }, [u, l, N]);
    if (null == l || !v) return null;
    let S = (0, h.xt)(l),
      T = (0, h.Z2)(l),
      Z = l.entity_type === B.WX.EXTERNAL;
    return (0, s.jsx)(C.Z, {
      className: a()({
        [k.clickable]: u
      }),
      children: (0, s.jsxs)(r.Clickable, {
        onClick: g,
        children: [null != l.image && (0, s.jsx)(f.Z, {
          source: (0, L.Z)(l),
          className: k.banner
        }), (0, s.jsx)(_.ZP, {
          name: l.name,
          description: null !== (n = l.description) && void 0 !== n ? n : void 0,
          descriptionClassName: k.eventDescription,
          guildId: l.guild_id,
          creator: p,
          guildEvent: l,
          eventPreview: l,
          recurrenceId: N
        }), (0, s.jsxs)("div", {
          className: k.footerContainer,
          children: [(0, s.jsx)(M, {
            guild: i,
            channel: o,
            guildScheduledEvent: l,
            isMember: u
          }), (0, s.jsx)(P, {
            isActive: S,
            isEnded: T,
            isMember: u,
            guildId: l.guild_id,
            guildScheduledEventId: l.id,
            recurrenceId: N,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: m,
            isExternal: Z
          })]
        })]
      })
    })
  });
n.ZP = w