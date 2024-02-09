"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  s = n("77078"),
  a = n("922770"),
  u = n("267567"),
  o = n("42203"),
  c = n("476765"),
  d = n("599110"),
  f = n("686904"),
  h = n("933326"),
  v = n("398604"),
  C = n("152475"),
  p = n("598639"),
  I = n("821393"),
  E = n("613767"),
  S = n("822516"),
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
  M = n("175244");

function j(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    onActionTaken: s,
    isHub: a,
    isMember: o,
    recurrenceId: c
  } = e, d = (0, v.isGuildScheduledEventActive)(t), f = (0, l.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(t.id, c), [c, t]), h = (0, C.default)(t), p = (0, l.useStateFromStores)([u.default], () => u.default.isLurking(n.id), [n.id]), I = (0, E.useIsChannelPublic)(null == r ? void 0 : r.id, t.id), S = (0, A.default)({
    guild: n,
    channel: r,
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
    isChannelPublic: I,
    canInvite: h,
    ...S
  }) : (0, i.jsx)(g.default, {
    isActive: d,
    isUserLurking: p,
    rsvped: f,
    isChannelPublic: I,
    canInvite: h,
    entityType: m,
    ...S
  })
}
var w = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: u,
    initialRecurrenceId: C,
    onClose: E
  } = e, [g, N] = r.useState(C), A = (0, l.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(t), [t]), w = null == A ? void 0 : A.id, b = null == A ? void 0 : A.guild_id, {
    guild: P,
    isMember: U
  } = (0, p.default)(b, w), O = (0, a.default)(n), D = null == A ? void 0 : A.channel_id, k = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(D), [D]), F = (0, c.useUID)(), [V, H] = r.useState(L.EventDetailSections.EVENT_INFO), B = (0, I.default)(w, g), Z = (0, l.useStateFromStores)([v.default], () => v.default.getUserCount(w, g)), [G, {
    loading: W,
    error: K
  }] = (0, f.default)(() => h.default.getGuildEventUsers(null == A ? void 0 : A.id, g, b));
  r.useEffect(() => {
    null == A ? E() : d.default.track(R.AnalyticEvents.OPEN_MODAL, {
      type: L.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: A.guild_id
    })
  }, [A, E]);
  let z = r.useRef(null),
    [Y, Q] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, t;
      let n = (null == A ? void 0 : A.recurrence_rule) != null ? 16 : 0;
      Q((null !== (t = null == z ? void 0 : null === (e = z.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [z, null == A ? void 0 : A.recurrence_rule]), null == A || null == P || !U && !O) return null;
  let q = e => {
      e !== V && (e === L.EventDetailSections.RSVP_LIST && G(), H(e))
    },
    X = null != g ? g : (0, S.getNextRecurrenceIdInEvent)(A);
  return (0, i.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: u,
    "aria-labelledby": F,
    className: M.root,
    children: [(null == A ? void 0 : A.image) != null && (0, i.jsx)(_.default, {
      source: (0, m.default)(A),
      className: M.banner
    }), (0, i.jsx)(x.default, {
      onClose: E,
      selectedTab: V,
      onTabSelected: q,
      userCount: Z,
      hasBanner: (null == A ? void 0 : A.image) != null,
      isHub: O
    }), (0, i.jsx)("div", {
      className: M.container,
      children: (0, i.jsx)(s.ModalContent, {
        className: M.contentContainer,
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
              onClose: E,
              onClickInterestedCount: () => q(L.EventDetailSections.RSVP_LIST),
              isHub: O,
              containerRef: z,
              recurrenceId: X,
              setRecurrenceId: N
            })
          }), (0, i.jsx)(s.Slide, {
            id: L.EventDetailSections.RSVP_LIST,
            children: (0, i.jsx)(y.default, {
              guildEvent: A,
              recurrenceId: X,
              eventUsers: B,
              loading: W,
              containerHeight: Y,
              error: K
            })
          })]
        })
      })
    }), (0, i.jsx)(s.ModalFooter, {
      className: M.footer,
      children: (0, i.jsx)(j, {
        guildEvent: A,
        isHub: O,
        isMember: U,
        guild: P,
        channel: k,
        onActionTaken: E,
        recurrenceId: X
      })
    })]
  })
}