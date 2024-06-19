l.r(n), l(47120);
var t = l(735250),
  i = l(470079),
  r = l(442837),
  s = l(481060),
  a = l(100527),
  o = l(906732),
  u = l(724912),
  c = l(41776),
  d = l(592125),
  v = l(153124),
  h = l(626135),
  E = l(981888),
  g = l(897285),
  f = l(924301),
  m = l(951539),
  x = l(592126),
  _ = l(315416),
  I = l(711373),
  Z = l(274311),
  N = l(854698),
  T = l(405613),
  j = l(285784),
  C = l(95291),
  p = l(187443),
  L = l(464766),
  S = l(724278),
  M = l(462747),
  P = l(462179),
  R = l(765305),
  b = l(981631),
  y = l(170945);

function k(e) {
  let {
    guildEvent: n,
    guild: l,
    channel: i,
    onActionTaken: s,
    isHub: a,
    isMember: o,
    recurrenceId: u
  } = e, d = (0, f.xt)(n), v = (0, r.e7)([f.ZP], () => f.ZP.isInterestedInEventRecurrence(n.id, u), [u, n]), h = (0, m.ZP)(n), E = (0, r.e7)([c.Z], () => c.Z.isLurking(l.id), [l.id]), g = (0, Z.T)(null == i ? void 0 : i.id, n.id), x = (0, P.Z)({
    guild: l,
    channel: i,
    guildScheduledEvent: n,
    isActive: d,
    recurrenceId: u,
    onActionTaken: s
  }), {
    entity_type: _
  } = n;
  return a ? (0, t.jsx)(p.Z, {
    isActive: d,
    isUserLurking: E,
    rsvped: v,
    isMember: o,
    isDetailsView: !0,
    guildName: null == l ? void 0 : l.name,
    isChannelPublic: g,
    canInvite: h,
    ...x
  }) : (0, t.jsx)(j.ZP, {
    isActive: d,
    isUserLurking: E,
    rsvped: v,
    isChannelPublic: g,
    canInvite: h,
    entityType: _,
    ...x
  })
}
n.default = e => {
  let {
    guildScheduledEventId: n,
    parentGuildId: l,
    transitionState: c,
    initialRecurrenceId: m,
    onClose: Z
  } = e, {
    analyticsLocations: j
  } = (0, o.ZP)(a.Z.GUILD_EVENT_MODAL), [p, P] = i.useState(m), D = (0, r.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(n), [n]), A = null == D ? void 0 : D.id, G = null == D ? void 0 : D.guild_id, {
    guild: U,
    isMember: O
  } = (0, x.Z)(G, A), V = (0, u.Z)(l), w = null == D ? void 0 : D.channel_id, B = (0, r.e7)([d.Z], () => d.Z.getChannel(w), [w]), F = (0, v.Dt)(), [H, z] = i.useState(R.fL.EVENT_INFO), X = (0, I.Z)(A, p), W = (0, _.Z)(G, A, p), [J, {
    loading: q,
    error: K
  }] = (0, E.Z)(() => g.Z.getGuildEventUsers(null == D ? void 0 : D.id, p, G));
  i.useEffect(() => {
    null == D ? Z() : h.default.track(b.rMx.OPEN_MODAL, {
      type: R.zw,
      guild_id: D.guild_id
    })
  }, [D, Z]);
  let Y = i.useRef(null),
    [Q, $] = i.useState(0);
  if (i.useLayoutEffect(() => {
      var e, n;
      let l = (null == D ? void 0 : D.recurrence_rule) != null ? 16 : 0;
      $((null !== (n = null == Y ? void 0 : null === (e = Y.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0) + l)
    }, [Y, null == D ? void 0 : D.recurrence_rule]), null == D || null == U || !O && !V) return null;
  let ee = e => {
      if (e !== H) e === R.fL.RSVP_LIST && J(), z(e)
    },
    en = null != p ? p : (0, N.DK)(D);
  return (0, t.jsx)(o.Gt, {
    value: j,
    children: (0, t.jsxs)(s.ModalRoot, {
      size: s.ModalSize.MEDIUM,
      transitionState: c,
      "aria-labelledby": F,
      className: y.root,
      children: [(null == D ? void 0 : D.image) != null && (0, t.jsx)(C.Z, {
        source: (0, T.Z)(D),
        className: y.banner
      }), (0, t.jsx)(L.Z, {
        onClose: Z,
        selectedTab: H,
        onTabSelected: ee,
        userCount: W,
        hasBanner: (null == D ? void 0 : D.image) != null,
        isHub: V
      }), (0, t.jsx)("div", {
        className: y.container,
        children: (0, t.jsx)(s.ModalContent, {
          className: y.contentContainer,
          style: {
            height: Q
          },
          children: (0, t.jsxs)(s.Slides, {
            activeSlide: H,
            width: 600,
            centered: !1,
            children: [(0, t.jsx)(s.Slide, {
              id: R.fL.EVENT_INFO,
              children: (0, t.jsx)(S.Z, {
                guildEvent: D,
                guild: U,
                channel: B,
                headerId: F,
                onClose: Z,
                onClickInterestedCount: () => ee(R.fL.RSVP_LIST),
                isHub: V,
                containerRef: Y,
                recurrenceId: en,
                setRecurrenceId: P
              })
            }), (0, t.jsx)(s.Slide, {
              id: R.fL.RSVP_LIST,
              children: (0, t.jsx)(M.Z, {
                guildEvent: D,
                recurrenceId: en,
                eventUsers: X,
                loading: q,
                containerHeight: Q,
                error: K
              })
            })]
          })
        })
      }), (0, t.jsx)(s.ModalFooter, {
        className: y.footer,
        children: (0, t.jsx)(k, {
          guildEvent: D,
          isHub: V,
          isMember: O,
          guild: U,
          channel: B,
          onActionTaken: Z,
          recurrenceId: en
        })
      })]
    })
  })
}