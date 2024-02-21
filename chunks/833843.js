"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
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
  I = n("821393"),
  h = n("613767"),
  v = n("822516"),
  N = n("93550"),
  C = n("707916"),
  p = n("255050"),
  g = n("644189"),
  A = n("965353"),
  m = n("360538"),
  R = n("403901"),
  L = n("369404"),
  P = n("745049"),
  D = n("49111"),
  y = n("536430");

function U(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: r,
    onActionTaken: u,
    isHub: a,
    isMember: o,
    recurrenceId: d
  } = e, c = (0, _.isGuildScheduledEventActive)(t), f = (0, l.useStateFromStores)([_.default], () => _.default.isInterestedInEventRecurrence(t.id, d), [d, t]), E = (0, S.default)(t), T = (0, l.useStateFromStores)([s.default], () => s.default.isLurking(n.id), [n.id]), I = (0, h.useIsChannelPublic)(null == r ? void 0 : r.id, t.id), v = (0, L.default)({
    guild: n,
    channel: r,
    guildScheduledEvent: t,
    isActive: c,
    recurrenceId: d,
    onActionTaken: u
  }), {
    entity_type: N
  } = t;
  return a ? (0, i.jsx)(g.default, {
    isActive: c,
    isUserLurking: T,
    rsvped: f,
    isMember: o,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: I,
    canInvite: E,
    ...v
  }) : (0, i.jsx)(C.default, {
    isActive: c,
    isUserLurking: T,
    rsvped: f,
    isChannelPublic: I,
    canInvite: E,
    entityType: N,
    ...v
  })
}
var G = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: s,
    initialRecurrenceId: S,
    onClose: h
  } = e, [C, g] = r.useState(S), L = (0, l.useStateFromStores)([_.default], () => _.default.getGuildScheduledEvent(t), [t]), G = null == L ? void 0 : L.id, O = null == L ? void 0 : L.guild_id, {
    guild: M,
    isMember: x
  } = (0, T.default)(O, G), b = (0, a.default)(n), w = null == L ? void 0 : L.channel_id, F = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(w), [w]), V = (0, d.useUID)(), [j, H] = r.useState(P.EventDetailSections.EVENT_INFO), B = (0, I.default)(G, C), k = (0, l.useStateFromStores)([_.default], () => _.default.getUserCount(G, C)), [Y, {
    loading: Z,
    error: W
  }] = (0, f.default)(() => E.default.getGuildEventUsers(null == L ? void 0 : L.id, C, O));
  r.useEffect(() => {
    null == L ? h() : c.default.track(D.AnalyticEvents.OPEN_MODAL, {
      type: P.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: L.guild_id
    })
  }, [L, h]);
  let z = r.useRef(null),
    [K, X] = r.useState(0);
  if (r.useLayoutEffect(() => {
      var e, t;
      let n = (null == L ? void 0 : L.recurrence_rule) != null ? 16 : 0;
      X((null !== (t = null == z ? void 0 : null === (e = z.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [z, null == L ? void 0 : L.recurrence_rule]), null == L || null == M || !x && !b) return null;
  let q = e => {
      e !== j && (e === P.EventDetailSections.RSVP_LIST && Y(), H(e))
    },
    J = null != C ? C : (0, v.getNextRecurrenceIdInEvent)(L);
  return (0, i.jsxs)(u.ModalRoot, {
    size: u.ModalSize.MEDIUM,
    transitionState: s,
    "aria-labelledby": V,
    className: y.root,
    children: [(null == L ? void 0 : L.image) != null && (0, i.jsx)(p.default, {
      source: (0, N.default)(L),
      className: y.banner
    }), (0, i.jsx)(A.default, {
      onClose: h,
      selectedTab: j,
      onTabSelected: q,
      userCount: k,
      hasBanner: (null == L ? void 0 : L.image) != null,
      isHub: b
    }), (0, i.jsx)("div", {
      className: y.container,
      children: (0, i.jsx)(u.ModalContent, {
        className: y.contentContainer,
        style: {
          height: K
        },
        children: (0, i.jsxs)(u.Slides, {
          activeSlide: j,
          width: 600,
          centered: !1,
          children: [(0, i.jsx)(u.Slide, {
            id: P.EventDetailSections.EVENT_INFO,
            children: (0, i.jsx)(m.default, {
              guildEvent: L,
              guild: M,
              channel: F,
              headerId: V,
              onClose: h,
              onClickInterestedCount: () => q(P.EventDetailSections.RSVP_LIST),
              isHub: b,
              containerRef: z,
              recurrenceId: J,
              setRecurrenceId: g
            })
          }), (0, i.jsx)(u.Slide, {
            id: P.EventDetailSections.RSVP_LIST,
            children: (0, i.jsx)(R.default, {
              guildEvent: L,
              recurrenceId: J,
              eventUsers: B,
              loading: Z,
              containerHeight: K,
              error: W
            })
          })]
        })
      })
    }), (0, i.jsx)(u.ModalFooter, {
      className: y.footer,
      children: (0, i.jsx)(U, {
        guildEvent: L,
        isHub: b,
        isMember: x,
        guild: M,
        channel: F,
        onActionTaken: h,
        recurrenceId: J
      })
    })]
  })
}