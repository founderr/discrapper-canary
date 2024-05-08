"use strict";
l.r(t), l("47120");
var n = l("735250"),
  i = l("470079"),
  a = l("442837"),
  r = l("481060"),
  s = l("100527"),
  u = l("906732"),
  d = l("724912"),
  o = l("41776"),
  c = l("592125"),
  f = l("153124"),
  v = l("626135"),
  E = l("981888"),
  h = l("897285"),
  m = l("924301"),
  _ = l("951539"),
  g = l("592126"),
  I = l("315416"),
  S = l("711373"),
  x = l("274311"),
  N = l("854698"),
  T = l("405613"),
  j = l("285784"),
  C = l("95291"),
  p = l("187443"),
  L = l("464766"),
  R = l("724278"),
  y = l("462747"),
  M = l("462179"),
  A = l("765305"),
  D = l("981631"),
  b = l("249674");

function G(e) {
  let {
    guildEvent: t,
    guild: l,
    channel: i,
    onActionTaken: r,
    isHub: s,
    isMember: u,
    recurrenceId: d
  } = e, c = (0, m.isGuildScheduledEventActive)(t), f = (0, a.useStateFromStores)([m.default], () => m.default.isInterestedInEventRecurrence(t.id, d), [d, t]), v = (0, _.default)(t), E = (0, a.useStateFromStores)([o.default], () => o.default.isLurking(l.id), [l.id]), h = (0, x.useIsChannelPublic)(null == i ? void 0 : i.id, t.id), g = (0, M.default)({
    guild: l,
    channel: i,
    guildScheduledEvent: t,
    isActive: c,
    recurrenceId: d,
    onActionTaken: r
  }), {
    entity_type: I
  } = t;
  return s ? (0, n.jsx)(p.default, {
    isActive: c,
    isUserLurking: E,
    rsvped: f,
    isMember: u,
    isDetailsView: !0,
    guildName: null == l ? void 0 : l.name,
    isChannelPublic: h,
    canInvite: v,
    ...g
  }) : (0, n.jsx)(j.default, {
    isActive: c,
    isUserLurking: E,
    rsvped: f,
    isChannelPublic: h,
    canInvite: v,
    entityType: I,
    ...g
  })
}
t.default = e => {
  let {
    guildScheduledEventId: t,
    parentGuildId: l,
    transitionState: o,
    initialRecurrenceId: _,
    onClose: x
  } = e, {
    analyticsLocations: j
  } = (0, u.default)(s.default.GUILD_EVENT_MODAL), [p, M] = i.useState(_), k = (0, a.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(t), [t]), P = null == k ? void 0 : k.id, U = null == k ? void 0 : k.guild_id, {
    guild: V,
    isMember: F
  } = (0, g.default)(U, P), O = (0, d.default)(l), w = null == k ? void 0 : k.channel_id, B = (0, a.useStateFromStores)([c.default], () => c.default.getChannel(w), [w]), H = (0, f.useUID)(), [z, X] = i.useState(A.EventDetailSections.EVENT_INFO), Y = (0, S.default)(P, p), K = (0, I.default)(U, P, p), [J, {
    loading: W,
    error: Z
  }] = (0, E.default)(() => h.default.getGuildEventUsers(null == k ? void 0 : k.id, p, U));
  i.useEffect(() => {
    null == k ? x() : v.default.track(D.AnalyticEvents.OPEN_MODAL, {
      type: A.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
      guild_id: k.guild_id
    })
  }, [k, x]);
  let q = i.useRef(null),
    [Q, $] = i.useState(0);
  if (i.useLayoutEffect(() => {
      var e, t;
      let l = (null == k ? void 0 : k.recurrence_rule) != null ? 16 : 0;
      $((null !== (t = null == q ? void 0 : null === (e = q.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + l)
    }, [q, null == k ? void 0 : k.recurrence_rule]), null == k || null == V || !F && !O) return null;
  let ee = e => {
      e !== z && (e === A.EventDetailSections.RSVP_LIST && J(), X(e))
    },
    et = null != p ? p : (0, N.getNextRecurrenceIdInEvent)(k);
  return (0, n.jsx)(u.AnalyticsLocationProvider, {
    value: j,
    children: (0, n.jsxs)(r.ModalRoot, {
      size: r.ModalSize.MEDIUM,
      transitionState: o,
      "aria-labelledby": H,
      className: b.root,
      children: [(null == k ? void 0 : k.image) != null && (0, n.jsx)(C.default, {
        source: (0, T.default)(k),
        className: b.banner
      }), (0, n.jsx)(L.default, {
        onClose: x,
        selectedTab: z,
        onTabSelected: ee,
        userCount: K,
        hasBanner: (null == k ? void 0 : k.image) != null,
        isHub: O
      }), (0, n.jsx)("div", {
        className: b.container,
        children: (0, n.jsx)(r.ModalContent, {
          className: b.contentContainer,
          style: {
            height: Q
          },
          children: (0, n.jsxs)(r.Slides, {
            activeSlide: z,
            width: 600,
            centered: !1,
            children: [(0, n.jsx)(r.Slide, {
              id: A.EventDetailSections.EVENT_INFO,
              children: (0, n.jsx)(R.default, {
                guildEvent: k,
                guild: V,
                channel: B,
                headerId: H,
                onClose: x,
                onClickInterestedCount: () => ee(A.EventDetailSections.RSVP_LIST),
                isHub: O,
                containerRef: q,
                recurrenceId: et,
                setRecurrenceId: M
              })
            }), (0, n.jsx)(r.Slide, {
              id: A.EventDetailSections.RSVP_LIST,
              children: (0, n.jsx)(y.default, {
                guildEvent: k,
                recurrenceId: et,
                eventUsers: Y,
                loading: W,
                containerHeight: Q,
                error: Z
              })
            })]
          })
        })
      }), (0, n.jsx)(r.ModalFooter, {
        className: b.footer,
        children: (0, n.jsx)(G, {
          guildEvent: k,
          isHub: O,
          isMember: F,
          guild: V,
          channel: B,
          onActionTaken: x,
          recurrenceId: et
        })
      })]
    })
  })
}