"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("446674"),
  s = n("77078"),
  a = n("922770"),
  u = n("267567"),
  o = n("42203"),
  c = n("476765"),
  d = n("599110"),
  f = n("686904"),
  h = n("933326"),
  C = n("398604"),
  v = n("152475"),
  p = n("598639"),
  E = n("821393"),
  S = n("613767"),
  I = n("822516"),
  m = n("93550"),
  g = n("707916"),
  _ = n("255050"),
  N = n("644189"),
  x = n("965353"),
  T = n("360538"),
  y = n("403901"),
  A = n("369404"),
  L = n("745049"),
  R = n("49111"),
  j = n("175244");

function w(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: l,
    onActionTaken: s,
    isHub: a,
    isMember: o,
    recurrenceId: c
  } = e, d = (0, C.isGuildScheduledEventActive)(t), f = (0, r.useStateFromStores)([C.default], () => C.default.isInterestedInEventRecurrence(t.id, c), [c, t]), h = (0, v.default)(t), p = (0, r.useStateFromStores)([u.default], () => u.default.isLurking(n.id), [n.id]), E = (0, S.useIsChannelPublic)(null == l ? void 0 : l.id, t.id), I = (0, A.default)({
    guild: n,
    channel: l,
    guildScheduledEvent: t,
    isActive: d,
    recurrenceId: c,
    onActionTaken: s
  }), {
    entity_type: m
  } = t;
  return a ? (0, i.jsx)(N.default, {
    isActive: d,
    isUserLurking: p,
    rsvped: f,
    isMember: o,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: E,
    canInvite: h,
    ...I
  }) : (0, i.jsx)(g.default, {
    isActive: d,
    isUserLurking: p,
    rsvped: f,
    isChannelPublic: E,
    canInvite: h,
    entityType: m,
    ...I
  })
}
var M = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: u,
    initialRecurrenceId: v,
    onClose: S
  } = e, [g, N] = l.useState(v), A = (0, r.useStateFromStores)([C.default], () => C.default.getGuildScheduledEvent(t), [t]), M = null == A ? void 0 : A.id, b = null == A ? void 0 : A.guild_id, {
    guild: P,
    isMember: U
  } = (0, p.default)(b, M), D = (0, a.default)(n), O = null == A ? void 0 : A.channel_id, k = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(O), [O]), F = (0, c.useUID)(), [V, H] = l.useState(L.EventDetailSections.EVENT_INFO), B = (0, E.default)(M, g), Z = (0, r.useStateFromStores)([C.default], () => C.default.getUserCount(M, g)), [G, {
    loading: W,
    error: K
  }] = (0, f.default)(() => h.default.getGuildEventUsers(null == A ? void 0 : A.id, g, b));
  l.useEffect(() => {
    null == A ? S() : d.default.track(R.AnalyticEvents.OPEN_MODAL, {
      type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: A.guild_id
    })
  }, [A, S]);
  let z = l.useRef(null),
    [Y, X] = l.useState(0);
  if (l.useLayoutEffect(() => {
      var e, t;
      let n = (null == A ? void 0 : A.recurrence_rule) != null ? 16 : 0;
      X((null !== (t = null == z ? void 0 : null === (e = z.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [z, null == A ? void 0 : A.recurrence_rule]), null == A || null == P || !U && !D) return null;
  let q = e => {
      e !== V && (e === L.EventDetailSections.RSVP_LIST && G(), H(e))
    },
    Q = null != g ? g : (0, I.getNextRecurrenceIdInEvent)(A);
  return (0, i.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: u,
    "aria-labelledby": F,
    className: j.root,
    children: [(null == A ? void 0 : A.image) != null && (0, i.jsx)(_.default, {
      source: (0, m.default)(A),
      className: j.banner
    }), (0, i.jsx)(x.default, {
      onClose: S,
      selectedTab: V,
      onTabSelected: q,
      userCount: Z,
      hasBanner: (null == A ? void 0 : A.image) != null,
      isHub: D
    }), (0, i.jsx)("div", {
      className: j.container,
      children: (0, i.jsx)(s.ModalContent, {
        className: j.contentContainer,
        style: {
          height: Y
        },
        children: (0, i.jsxs)(s.Slides, {
          activeSlide: V,
          width: 600,
          centered: !1,
          children: [(0, i.jsx)(s.Slide, {
            id: L.EventDetailSections.EVENT_INFO,
            children: (0, i.jsx)(T.default, {
              guildEvent: A,
              guild: P,
              channel: k,
              headerId: F,
              onClose: S,
              onClickInterestedCount: () => q(L.EventDetailSections.RSVP_LIST),
              isHub: D,
              containerRef: z,
              recurrenceId: Q,
              setRecurrenceId: N
            })
          }), (0, i.jsx)(s.Slide, {
            id: L.EventDetailSections.RSVP_LIST,
            children: (0, i.jsx)(y.default, {
              guildEvent: A,
              recurrenceId: Q,
              eventUsers: B,
              loading: W,
              containerHeight: Y,
              error: K
            })
          })]
        })
      })
    }), (0, i.jsx)(s.ModalFooter, {
      className: j.footer,
      children: (0, i.jsx)(w, {
        guildEvent: A,
        isHub: D,
        isMember: U,
        guild: P,
        channel: k,
        onActionTaken: S,
        recurrenceId: Q
      })
    })]
  })
}