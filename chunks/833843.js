"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("446674"),
  s = n("77078"),
  a = n("922770"),
  u = n("267567"),
  o = n("42203"),
  d = n("476765"),
  c = n("599110"),
  f = n("686904"),
  h = n("933326"),
  E = n("398604"),
  v = n("152475"),
  C = n("598639"),
  _ = n("18284"),
  p = n("821393"),
  S = n("613767"),
  m = n("822516"),
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
    channel: l,
    onActionTaken: s,
    isHub: a,
    isMember: o,
    recurrenceId: d
  } = e, c = (0, E.isGuildScheduledEventActive)(t), f = (0, r.useStateFromStores)([E.default], () => E.default.isInterestedInEventRecurrence(t.id, d), [d, t]), h = (0, v.default)(t), C = (0, r.useStateFromStores)([u.default], () => u.default.isLurking(n.id), [n.id]), _ = (0, S.useIsChannelPublic)(null == l ? void 0 : l.id, t.id), p = (0, L.default)({
    guild: n,
    channel: l,
    guildScheduledEvent: t,
    isActive: c,
    recurrenceId: d,
    onActionTaken: s
  }), {
    entity_type: m
  } = t;
  return a ? (0, i.jsx)(T.default, {
    isActive: c,
    isUserLurking: C,
    rsvped: f,
    isMember: o,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: _,
    canInvite: h,
    ...p
  }) : (0, i.jsx)(I.default, {
    isActive: c,
    isUserLurking: C,
    rsvped: f,
    isChannelPublic: _,
    canInvite: h,
    entityType: m,
    ...p
  })
}
var D = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: u,
    initialRecurrenceId: v,
    onClose: S
  } = e, [I, T] = l.useState(v), L = (0, r.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(t), [t]), D = null == L ? void 0 : L.id, w = null == L ? void 0 : L.guild_id, {
    guild: b,
    isMember: O
  } = (0, C.default)(w, D), V = (0, a.default)(n), U = null == L ? void 0 : L.channel_id, F = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(U), [U]), G = (0, d.useUID)(), [H, k] = l.useState(y.EventDetailSections.EVENT_INFO), B = (0, p.default)(D, I), Z = (0, _.default)(w, D, I), [W, {
    loading: z,
    error: Y
  }] = (0, f.default)(() => h.default.getGuildEventUsers(null == L ? void 0 : L.id, I, w));
  l.useEffect(() => {
    null == L ? S() : c.default.track(M.AnalyticEvents.OPEN_MODAL, {
      type: y.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: L.guild_id
    })
  }, [L, S]);
  let X = l.useRef(null),
    [K, q] = l.useState(0);
  if (l.useLayoutEffect(() => {
      var e, t;
      let n = (null == L ? void 0 : L.recurrence_rule) != null ? 16 : 0;
      q((null !== (t = null == X ? void 0 : null === (e = X.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [X, null == L ? void 0 : L.recurrence_rule]), null == L || null == b || !O && !V) return null;
  let J = e => {
      e !== H && (e === y.EventDetailSections.RSVP_LIST && W(), k(e))
    },
    Q = null != I ? I : (0, m.getNextRecurrenceIdInEvent)(L);
  return (0, i.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: u,
    "aria-labelledby": G,
    className: P.root,
    children: [(null == L ? void 0 : L.image) != null && (0, i.jsx)(N.default, {
      source: (0, g.default)(L),
      className: P.banner
    }), (0, i.jsx)(A.default, {
      onClose: S,
      selectedTab: H,
      onTabSelected: J,
      userCount: Z,
      hasBanner: (null == L ? void 0 : L.image) != null,
      isHub: V
    }), (0, i.jsx)("div", {
      className: P.container,
      children: (0, i.jsx)(s.ModalContent, {
        className: P.contentContainer,
        style: {
          height: K
        },
        children: (0, i.jsxs)(s.Slides, {
          activeSlide: H,
          width: 600,
          centered: !1,
          children: [(0, i.jsx)(s.Slide, {
            id: y.EventDetailSections.EVENT_INFO,
            children: (0, i.jsx)(x.default, {
              guildEvent: L,
              guild: b,
              channel: F,
              headerId: G,
              onClose: S,
              onClickInterestedCount: () => J(y.EventDetailSections.RSVP_LIST),
              isHub: V,
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
        isHub: V,
        isMember: O,
        guild: b,
        channel: F,
        onActionTaken: S,
        recurrenceId: Q
      })
    })]
  })
}