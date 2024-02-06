"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("446674"),
  s = n("77078"),
  a = n("922770"),
  o = n("267567"),
  u = n("42203"),
  d = n("476765"),
  c = n("599110"),
  f = n("686904"),
  h = n("933326"),
  E = n("398604"),
  C = n("152475"),
  v = n("598639"),
  p = n("821393"),
  _ = n("613767"),
  g = n("822516"),
  S = n("93550"),
  T = n("707916"),
  N = n("255050"),
  m = n("644189"),
  I = n("965353"),
  A = n("360538"),
  R = n("403901"),
  U = n("369404"),
  x = n("745049"),
  y = n("49111"),
  L = n("175244");

function b(e) {
  let {
    guildEvent: t,
    guild: n,
    channel: l,
    onActionTaken: s,
    isHub: a,
    isMember: u,
    recurrenceId: d
  } = e, c = (0, E.isGuildScheduledEventActive)(t), f = (0, r.useStateFromStores)([E.default], () => E.default.isInterestedInEventRecurrence(t.id, d), [d, t]), h = (0, C.default)(t), v = (0, r.useStateFromStores)([o.default], () => o.default.isLurking(n.id), [n.id]), p = (0, _.useIsChannelPublic)(null == l ? void 0 : l.id, t.id), g = (0, U.default)({
    guild: n,
    channel: l,
    guildScheduledEvent: t,
    isActive: c,
    recurrenceId: d,
    onActionTaken: s
  }), {
    entity_type: S
  } = t;
  return a ? (0, i.jsx)(m.default, {
    isActive: c,
    isUserLurking: v,
    rsvped: f,
    isMember: u,
    isDetailsView: !0,
    guildName: null == n ? void 0 : n.name,
    isChannelPublic: p,
    canInvite: h,
    ...g
  }) : (0, i.jsx)(T.default, {
    isActive: c,
    isUserLurking: v,
    rsvped: f,
    isChannelPublic: p,
    canInvite: h,
    entityType: S,
    ...g
  })
}
var w = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: n,
    transitionState: o,
    initialRecurrenceId: C,
    onClose: _
  } = e, [T, m] = l.useState(C), U = (0, r.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(t), [t]), w = null == U ? void 0 : U.id, O = null == U ? void 0 : U.guild_id, {
    guild: P,
    isMember: D
  } = (0, v.default)(O, w), M = (0, a.default)(n), j = null == U ? void 0 : U.channel_id, V = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(j), [j]), F = (0, d.useUID)(), [k, G] = l.useState(x.EventDetailSections.EVENT_INFO), B = (0, p.default)(w, T), H = (0, r.useStateFromStores)([E.default], () => E.default.getUserCount(w, T)), [Z, {
    loading: W,
    error: z
  }] = (0, f.default)(() => h.default.getGuildEventUsers(null == U ? void 0 : U.id, T, O));
  l.useEffect(() => {
    null == U ? _() : c.default.track(y.AnalyticEvents.OPEN_MODAL, {
      type: x.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: U.guild_id
    })
  }, [U, _]);
  let Y = l.useRef(null),
    [K, q] = l.useState(0);
  if (l.useLayoutEffect(() => {
      var e, t;
      let n = (null == U ? void 0 : U.recurrence_rule) != null ? 16 : 0;
      q((null !== (t = null == Y ? void 0 : null === (e = Y.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
    }, [Y, null == U ? void 0 : U.recurrence_rule]), null == U || null == P || !D && !M) return null;
  let X = e => {
      e !== k && (e === x.EventDetailSections.RSVP_LIST && Z(), G(e))
    },
    Q = null != T ? T : (0, g.getNextRecurrenceIdInEvent)(U);
  return (0, i.jsxs)(s.ModalRoot, {
    size: s.ModalSize.MEDIUM,
    transitionState: o,
    "aria-labelledby": F,
    className: L.root,
    children: [(null == U ? void 0 : U.image) != null && (0, i.jsx)(N.default, {
      source: (0, S.default)(U),
      className: L.banner
    }), (0, i.jsx)(I.default, {
      onClose: _,
      selectedTab: k,
      onTabSelected: X,
      userCount: H,
      hasBanner: (null == U ? void 0 : U.image) != null,
      isHub: M
    }), (0, i.jsx)("div", {
      className: L.container,
      children: (0, i.jsx)(s.ModalContent, {
        className: L.contentContainer,
        style: {
          height: K
        },
        children: (0, i.jsxs)(s.Slides, {
          activeSlide: k,
          width: 600,
          centered: !1,
          children: [(0, i.jsx)(s.Slide, {
            id: x.EventDetailSections.EVENT_INFO,
            children: (0, i.jsx)(A.default, {
              guildEvent: U,
              guild: P,
              channel: V,
              headerId: F,
              onClose: _,
              onClickInterestedCount: () => X(x.EventDetailSections.RSVP_LIST),
              isHub: M,
              containerRef: Y,
              recurrenceId: Q,
              setRecurrenceId: m
            })
          }), (0, i.jsx)(s.Slide, {
            id: x.EventDetailSections.RSVP_LIST,
            children: (0, i.jsx)(R.default, {
              guildEvent: U,
              recurrenceId: Q,
              eventUsers: B,
              loading: W,
              containerHeight: K,
              error: z
            })
          })]
        })
      })
    }), (0, i.jsx)(s.ModalFooter, {
      className: L.footer,
      children: (0, i.jsx)(b, {
        guildEvent: U,
        isHub: M,
        isMember: D,
        guild: P,
        channel: V,
        onActionTaken: _,
        recurrenceId: Q
      })
    })]
  })
}