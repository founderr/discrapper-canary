"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  u = n("77078"),
  a = n("922770"),
  s = n("267567"),
  o = n("42203"),
  d = n("476765"),
  c = n("599110"),
  f = n("686904"),
  E = n("933326"),
  _ = n("398604"),
  S = n("152475"),
  T = n("598639"),
  I = n("18284"),
  h = n("821393"),
  v = n("613767"),
  N = n("822516"),
  C = n("93550"),
  p = n("707916"),
  g = n("255050"),
  A = n("644189"),
  m = n("965353"),
  R = n("360538"),
  L = n("403901"),
  P = n("369404"),
  D = n("745049"),
  y = n("49111"),
  U = n("536430");

function G(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    onActionTaken: u,
    isHub: a,
    isMember: o,
    recurrenceId: d
  } = e, c = (0, _.isGuildScheduledEventActive)(t), f = (0, l.useStateFromStores)([_.default], () => _.default.isInterestedInEventRecurrence(t.id, d), [d, t]), E = (0, S.default)(t), T = (0, l.useStateFromStores)([s.default], () => s.default.isLurking(n.id), [n.id]), I = (0, v.useIsChannelPublic)(null == r ? void 0 : r.id, t.id), h = (0, P.default)({
    guild: n,
    channel: r,
    guildScheduledEvent: t,
    isActive: c,
    recurrenceId: d,
    onActionTaken: u
  }), {
    entity_type: N
  } = t;
  return a ? (0, i.jsx)(A.default, {
    isActive: c,
    isUserLurking: T,
    rsvped: f,
    isMember: o,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: I,
    canInvite: E,
    ...h
  }) : (0, i.jsx)(p.default, {
    isActive: c,
    isUserLurking: T,
    rsvped: f,
    isChannelPublic: I,
    canInvite: E,
    entityType: N,
    ...h
  })
}
var O = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: s,
    initialRecurrenceId: S,
    onClose: v
  } = e, [p, A] = r.useState(S), P = (0, l.useStateFromStores)([_.default], () => _.default.getGuildScheduledEvent(t), [t]), O = null == P ? void 0 : P.id, M = null == P ? void 0 : P.guild_id, {
    guild: x,
    isMember: b
  } = (0, T.default)(M, O), w = (0, a.default)(n), V = null == P ? void 0 : P.channel_id, F = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(V), [V]), j = (0, d.useUID)(), [H, B] = r.useState(D.EventDetailSections.EVENT_INFO), k = (0, h.default)(O, p), Y = (0, I.default)(M, O, p), [Z, {
    loading: W,
    error: z
  }] = (0, f.default)(() => E.default.getGuildEventUsers(null == P ? void 0 : P.id, p, M));
  r.useEffect(() => {
    null == P ? v() : c.default.track(y.AnalyticEvents.OPEN_MODAL, {
      type: D.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: P.guild_id
    })
  }, [P, v]);
  let K = r.useRef(null),
    [X, q] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, t;
      let n = (null == P ? void 0 : P.recurrence_rule) != null ? 16 : 0;
      q((null !== (t = null == K ? void 0 : null === (e = K.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [K, null == P ? void 0 : P.recurrence_rule]), null == P || null == x || !b && !w) return null;
  let J = e => {
      e !== H && (e === D.EventDetailSections.RSVP_LIST && Z(), B(e))
    },
    Q = null != p ? p : (0, N.getNextRecurrenceIdInEvent)(P);
  return (0, i.jsxs)(u.ModalRoot, {
    size: u.ModalSize.MEDIUM,
    transitionState: s,
    "aria-labelledby": j,
    className: U.root,
    children: [(null == P ? void 0 : P.image) != null && (0, i.jsx)(g.default, {
      source: (0, C.default)(P),
      className: U.banner
    }), (0, i.jsx)(m.default, {
      onClose: v,
      selectedTab: H,
      onTabSelected: J,
      userCount: Y,
      hasBanner: (null == P ? void 0 : P.image) != null,
      isHub: w
    }), (0, i.jsx)("div", {
      className: U.container,
      children: (0, i.jsx)(u.ModalContent, {
        className: U.contentContainer,
        style: {
          height: X
        },
        children: (0, i.jsxs)(u.Slides, {
          activeSlide: H,
          width: 600,
          centered: !1,
          children: [(0, i.jsx)(u.Slide, {
            id: D.EventDetailSections.EVENT_INFO,
            children: (0, i.jsx)(R.default, {
              guildEvent: P,
              guild: x,
              channel: F,
              headerId: j,
              onClose: v,
              onClickInterestedCount: () => J(D.EventDetailSections.RSVP_LIST),
              isHub: w,
              containerRef: K,
              recurrenceId: Q,
              setRecurrenceId: A
            })
          }), (0, i.jsx)(u.Slide, {
            id: D.EventDetailSections.RSVP_LIST,
            children: (0, i.jsx)(L.default, {
              guildEvent: P,
              recurrenceId: Q,
              eventUsers: k,
              loading: W,
              containerHeight: X,
              error: z
            })
          })]
        })
      })
    }), (0, i.jsx)(u.ModalFooter, {
      className: U.footer,
      children: (0, i.jsx)(G, {
        guildEvent: P,
        isHub: w,
        isMember: b,
        guild: x,
        channel: F,
        onActionTaken: v,
        recurrenceId: Q
      })
    })]
  })
}