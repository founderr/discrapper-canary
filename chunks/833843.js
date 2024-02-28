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
  E = n("152475"),
  C = n("598639"),
  S = n("18284"),
  p = n("821393"),
  m = n("613767"),
  _ = n("822516"),
  g = n("93550"),
  I = n("707916"),
  N = n("255050"),
  T = n("644189"),
  A = n("965353"),
  x = n("360538"),
  R = n("403901"),
  L = n("369404"),
  y = n("745049"),
  M = n("49111"),
  P = n("536430");

function j(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    onActionTaken: s,
    isHub: a,
    isMember: o,
    recurrenceId: c
  } = e, d = (0, v.isGuildScheduledEventActive)(t), f = (0, l.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(t.id, c), [c, t]), h = (0, E.default)(t), C = (0, l.useStateFromStores)([u.default], () => u.default.isLurking(n.id), [n.id]), S = (0, m.useIsChannelPublic)(null == r ? void 0 : r.id, t.id), p = (0, L.default)({
    guild: n,
    channel: r,
    guildScheduledEvent: t,
    isActive: d,
    recurrenceId: c,
    onActionTaken: s
  }), {
    entity_type: _
  } = t;
  return a ? (0, i.jsx)(T.default, {
    isActive: d,
    isUserLurking: C,
    rsvped: f,
    isMember: o,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: S,
    canInvite: h,
    ...p
  }) : (0, i.jsx)(I.default, {
    isActive: d,
    isUserLurking: C,
    rsvped: f,
    isChannelPublic: S,
    canInvite: h,
    entityType: _,
    ...p
  })
}
var w = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: u,
    initialRecurrenceId: E,
    onClose: m
  } = e, [I, T] = r.useState(E), L = (0, l.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(t), [t]), w = null == L ? void 0 : L.id, b = null == L ? void 0 : L.guild_id, {
    guild: O,
    isMember: D
  } = (0, C.default)(b, w), U = (0, a.default)(n), V = null == L ? void 0 : L.channel_id, F = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(V), [V]), H = (0, c.useUID)(), [G, k] = r.useState(y.EventDetailSections.EVENT_INFO), B = (0, p.default)(w, I), Z = (0, S.default)(b, w, I), [W, {
    loading: z,
    error: Y
  }] = (0, f.default)(() => h.default.getGuildEventUsers(null == L ? void 0 : L.id, I, b));
  r.useEffect(() => {
    null == L ? m() : d.default.track(M.AnalyticEvents.OPEN_MODAL, {
      type: y.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: L.guild_id
    })
  }, [L, m]);
  let X = r.useRef(null),
    [K, q] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, t;
      let n = (null == L ? void 0 : L.recurrence_rule) != null ? 16 : 0;
      q((null !== (t = null == X ? void 0 : null === (e = X.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [X, null == L ? void 0 : L.recurrence_rule]), null == L || null == O || !D && !U) return null;
  let J = e => {
      e !== G && (e === y.EventDetailSections.RSVP_LIST && W(), k(e))
    },
    Q = null != I ? I : (0, _.getNextRecurrenceIdInEvent)(L);
  return (0, i.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: u,
    "aria-labelledby": H,
    className: P.root,
    children: [(null == L ? void 0 : L.image) != null && (0, i.jsx)(N.default, {
      source: (0, g.default)(L),
      className: P.banner
    }), (0, i.jsx)(A.default, {
      onClose: m,
      selectedTab: G,
      onTabSelected: J,
      userCount: Z,
      hasBanner: (null == L ? void 0 : L.image) != null,
      isHub: U
    }), (0, i.jsx)("div", {
      className: P.container,
      children: (0, i.jsx)(s.ModalContent, {
        className: P.contentContainer,
        style: {
          height: K
        },
        children: (0, i.jsxs)(s.Slides, {
          activeSlide: G,
          width: 600,
          centered: !1,
          children: [(0, i.jsx)(s.Slide, {
            id: y.EventDetailSections.EVENT_INFO,
            children: (0, i.jsx)(x.default, {
              guildEvent: L,
              guild: O,
              channel: F,
              headerId: H,
              onClose: m,
              onClickInterestedCount: () => J(y.EventDetailSections.RSVP_LIST),
              isHub: U,
              containerRef: X,
              recurrenceId: Q,
              setRecurrenceId: T
            })
          }), (0, i.jsx)(s.Slide, {
            id: y.EventDetailSections.RSVP_LIST,
            children: (0, i.jsx)(R.default, {
              guildEvent: L,
              recurrenceId: Q,
              eventUsers: B,
              loading: z,
              containerHeight: K,
              error: Y
            })
          })]
        })
      })
    }), (0, i.jsx)(s.ModalFooter, {
      className: P.footer,
      children: (0, i.jsx)(j, {
        guildEvent: L,
        isHub: U,
        isMember: D,
        guild: O,
        channel: F,
        onActionTaken: m,
        recurrenceId: Q
      })
    })]
  })
}