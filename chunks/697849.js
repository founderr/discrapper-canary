t.r(n), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(442837),
  r = t(481060),
  o = t(100527),
  c = t(906732),
  s = t(724912),
  d = t(41776),
  u = t(592125),
  _ = t(153124),
  f = t(626135),
  g = t(981888),
  v = t(897285),
  h = t(924301),
  b = t(951539),
  m = t(592126),
  I = t(315416),
  p = t(711373),
  x = t(274311),
  E = t(854698),
  N = t(405613),
  C = t(285784),
  Z = t(95291),
  T = t(187443),
  j = t(464766),
  S = t(724278),
  L = t(462747),
  k = t(462179),
  D = t(765305),
  R = t(981631),
  M = t(515515);

function B(e) {
  let {
guildEvent: n,
guild: t,
channel: l,
onActionTaken: r,
isHub: o,
isMember: c,
recurrenceId: s
  } = e, u = (0, h.xt)(n), _ = (0, a.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(n.id, s), [
s,
n
  ]), f = (0, b.ZP)(n), g = (0, a.e7)([d.Z], () => d.Z.isLurking(t.id), [t.id]), v = (0, x.T)(null == l ? void 0 : l.id, n.id), m = (0, k.Z)({
guild: t,
channel: l,
guildScheduledEvent: n,
isActive: u,
recurrenceId: s,
onActionTaken: r
  }), {
entity_type: I
  } = n;
  return o ? (0, i.jsx)(T.Z, {
isActive: u,
isUserLurking: g,
rsvped: _,
isMember: c,
isDetailsView: !0,
guildName: null == t ? void 0 : t.name,
isChannelPublic: v,
canInvite: f,
...m
  }) : (0, i.jsx)(C.ZP, {
isActive: u,
isUserLurking: g,
rsvped: _,
isChannelPublic: v,
canInvite: f,
entityType: I,
...m
  });
}
n.default = e => {
  let {
guildScheduledEventId: n,
parentGuildId: t,
transitionState: d,
initialRecurrenceId: b,
onClose: x
  } = e, {
analyticsLocations: C
  } = (0, c.ZP)(o.Z.GUILD_EVENT_MODAL), [T, k] = l.useState(b), P = (0, a.e7)([h.ZP], () => h.ZP.getGuildScheduledEvent(n), [n]), y = null == P ? void 0 : P.id, w = null == P ? void 0 : P.guild_id, {
guild: A,
isMember: G
  } = (0, m.Z)(w, y), O = (0, s.Z)(t), U = null == P ? void 0 : P.channel_id, V = (0, a.e7)([u.Z], () => u.Z.getChannel(U), [U]), F = (0, _.Dt)(), [z, H] = l.useState(D.fL.EVENT_INFO), W = (0, p.Z)(y, T), X = (0, I.Z)(w, y, T), [J, {
loading: K,
error: Y
  }] = (0, g.Z)(() => v.Z.getGuildEventUsers(null == P ? void 0 : P.id, T, w));
  l.useEffect(() => {
null == P ? x() : f.default.track(R.rMx.OPEN_MODAL, {
  type: D.zw,
  guild_id: P.guild_id
});
  }, [
P,
x
  ]);
  let q = l.useRef(null),
[Q, $] = l.useState(0);
  if (l.useLayoutEffect(() => {
  var e, n;
  let t = (null == P ? void 0 : P.recurrence_rule) != null ? 16 : 0;
  $((null !== (n = null == q ? void 0 : null === (e = q.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0) + t);
}, [
  q,
  null == P ? void 0 : P.recurrence_rule
]), null == P || null == A || !G && !O)
return null;
  let ee = e => {
  if (e !== z)
    e === D.fL.RSVP_LIST && J(), H(e);
},
en = null != T ? T : (0, E.DK)(P);
  return (0, i.jsx)(c.Gt, {
value: C,
children: (0, i.jsxs)(r.ModalRoot, {
  size: r.ModalSize.MEDIUM,
  transitionState: d,
  'aria-labelledby': F,
  className: M.root,
  children: [
    (null == P ? void 0 : P.image) != null && (0, i.jsx)(Z.Z, {
      source: (0, N.Z)(P),
      className: M.banner
    }),
    (0, i.jsx)(j.Z, {
      onClose: x,
      selectedTab: z,
      onTabSelected: ee,
      userCount: X,
      hasBanner: (null == P ? void 0 : P.image) != null,
      isHub: O
    }),
    (0, i.jsx)('div', {
      className: M.container,
      children: (0, i.jsx)(r.ModalContent, {
        className: M.contentContainer,
        style: {
          height: Q
        },
        children: (0, i.jsxs)(r.Slides, {
          activeSlide: z,
          width: 600,
          centered: !1,
          children: [
            (0, i.jsx)(r.Slide, {
              id: D.fL.EVENT_INFO,
              children: (0, i.jsx)(S.Z, {
                guildEvent: P,
                guild: A,
                channel: V,
                headerId: F,
                onClose: x,
                onClickInterestedCount: () => ee(D.fL.RSVP_LIST),
                isHub: O,
                containerRef: q,
                recurrenceId: en,
                setRecurrenceId: k
              })
            }),
            (0, i.jsx)(r.Slide, {
              id: D.fL.RSVP_LIST,
              children: (0, i.jsx)(L.Z, {
                guildEvent: P,
                recurrenceId: en,
                eventUsers: W,
                loading: K,
                containerHeight: Q,
                error: Y
              })
            })
          ]
        })
      })
    }),
    (0, i.jsx)(r.ModalFooter, {
      className: M.footer,
      children: (0, i.jsx)(B, {
        guildEvent: P,
        isHub: O,
        isMember: G,
        guild: A,
        channel: V,
        onActionTaken: x,
        recurrenceId: en
      })
    })
  ]
})
  });
};