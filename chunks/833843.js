"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
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
  _ = n("821393"),
  p = n("613767"),
  S = n("822516"),
  N = n("93550"),
  T = n("707916"),
  I = n("255050"),
  g = n("644189"),
  m = n("965353"),
  A = n("360538"),
  R = n("403901"),
  x = n("369404"),
  y = n("745049"),
  U = n("49111"),
  L = n("175244");

function P(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: l,
    onActionTaken: s,
    isHub: a,
    isMember: o,
    recurrenceId: d
  } = e, c = (0, E.isGuildScheduledEventActive)(t), f = (0, r.useStateFromStores)([E.default], () => E.default.isInterestedInEventRecurrence(t.id, d), [d, t]), h = (0, v.default)(t), C = (0, r.useStateFromStores)([u.default], () => u.default.isLurking(n.id), [n.id]), _ = (0, p.useIsChannelPublic)(null == l ? void 0 : l.id, t.id), S = (0, x.default)({
    guild: n,
    channel: l,
    guildScheduledEvent: t,
    isActive: c,
    recurrenceId: d,
    onActionTaken: s
  }), {
    entity_type: N
  } = t;
  return a ? (0, i.jsx)(g.default, {
    isActive: c,
    isUserLurking: C,
    rsvped: f,
    isMember: o,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: _,
    canInvite: h,
    ...S
  }) : (0, i.jsx)(T.default, {
    isActive: c,
    isUserLurking: C,
    rsvped: f,
    isChannelPublic: _,
    canInvite: h,
    entityType: N,
    ...S
  })
}
var O = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: u,
    initialRecurrenceId: v,
    onClose: p
  } = e, [T, g] = l.useState(v), x = (0, r.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(t), [t]), O = null == x ? void 0 : x.id, j = null == x ? void 0 : x.guild_id, {
    guild: M,
    isMember: D
  } = (0, C.default)(j, O), b = (0, a.default)(n), w = null == x ? void 0 : x.channel_id, F = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(w), [w]), V = (0, d.useUID)(), [G, B] = l.useState(y.EventDetailSections.EVENT_INFO), k = (0, _.default)(O, T), H = (0, r.useStateFromStores)([E.default], () => E.default.getUserCount(O, T)), [Z, {
    loading: W,
    error: z
  }] = (0, f.default)(() => h.default.getGuildEventUsers(null == x ? void 0 : x.id, T, j));
  l.useEffect(() => {
    null == x ? p() : c.default.track(U.AnalyticEvents.OPEN_MODAL, {
      type: y.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: x.guild_id
    })
  }, [x, p]);
  let Y = l.useRef(null),
    [K, q] = l.useState(0);
  if (l.useLayoutEffect(() => {
      var e, t;
      let n = (null == x ? void 0 : x.recurrence_rule) != null ? 16 : 0;
      q((null !== (t = null == Y ? void 0 : null === (e = Y.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [Y, null == x ? void 0 : x.recurrence_rule]), null == x || null == M || !D && !b) return null;
  let X = e => {
      e !== G && (e === y.EventDetailSections.RSVP_LIST && Z(), B(e))
    },
    Q = null != T ? T : (0, S.getNextRecurrenceIdInEvent)(x);
  return (0, i.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: u,
    "aria-labelledby": V,
    className: L.root,
    children: [(null == x ? void 0 : x.image) != null && (0, i.jsx)(I.default, {
      source: (0, N.default)(x),
      className: L.banner
    }), (0, i.jsx)(m.default, {
      onClose: p,
      selectedTab: G,
      onTabSelected: X,
      userCount: H,
      hasBanner: (null == x ? void 0 : x.image) != null,
      isHub: b
    }), (0, i.jsx)("div", {
      className: L.container,
      children: (0, i.jsx)(s.ModalContent, {
        className: L.contentContainer,
        style: {
          height: K
        },
        children: (0, i.jsxs)(s.Slides, {
          activeSlide: G,
          width: 600,
          centered: !1,
          children: [(0, i.jsx)(s.Slide, {
            id: y.EventDetailSections.EVENT_INFO,
            children: (0, i.jsx)(A.default, {
              guildEvent: x,
              guild: M,
              channel: F,
              headerId: V,
              onClose: p,
              onClickInterestedCount: () => X(y.EventDetailSections.RSVP_LIST),
              isHub: b,
              containerRef: Y,
              recurrenceId: Q,
              setRecurrenceId: g
            })
          }), (0, i.jsx)(s.Slide, {
            id: y.EventDetailSections.RSVP_LIST,
            children: (0, i.jsx)(R.default, {
              guildEvent: x,
              recurrenceId: Q,
              eventUsers: k,
              loading: W,
              containerHeight: K,
              error: z
            })
          })]
        })
      })
    }), (0, i.jsx)(s.ModalFooter, {
      className: L.footer,
      children: (0, i.jsx)(P, {
        guildEvent: x,
        isHub: b,
        isMember: D,
        guild: M,
        channel: F,
        onActionTaken: p,
        recurrenceId: Q
      })
    })]
  })
}