n.d(t, {
  Z: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(338545),
  o = n(481060),
  c = n(110924),
  u = n(988980),
  d = n(157813),
  h = n(314897),
  p = n(131951),
  m = n(585483),
  _ = n(807705),
  f = n(27457),
  E = n(111248),
  C = n(312703),
  g = n(796638),
  I = n(981631),
  x = n(354459),
  T = n(201614),
  N = n(97478);
let v = 16 / 9,
  S = 8 + g.cF;

function Z(e) {
  let t, {
  onSelectParticipant: n,
  onContextMenuParticipant: s,
  onFullscreenParticipant: Z,
  participants: A,
  filteredParticipants: M,
  popoutWindow: b,
  inCall: R,
  channel: j,
  selectedParticipant: L,
  showParticipants: P = !0,
  className: O,
  paused: y,
  width: D,
  height: k,
  layout: U,
  idle: w
} = e,
B = null != b,
H = p.Z.getVideoComponent(),
G = h.default.getId(),
[V, F] = a.useState(null),
[W, z] = a.useState(!0),
[Y, K] = a.useState(!1),
q = L.type === x.fO.ACTIVITY,
X = (0, u.Z)(L.id),
Q = !q && null != L.streamId,
J = k <= 2 * S + 144,
$ = P && !J,
ee = (0, c.Z)($),
et = U === I.AEg.MINIMUM || U === I.AEg.NORMAL,
en = !J && (!et || q),
ei = (0, _.Z)(en, 100),
ea = 0;
  (q || $) && (ea += 72), q && !$ && (en ? ea += 48 : ea += 8), $ && (ea += 0.5 * S + 8);
  let es = a.useMemo(() => q && X ? D / (k - 2 * ea) : Q && null != V && V.width > 0 && V.height > 0 ? V.width / V.height : v, [
  Q,
  V,
  q,
  D,
  k,
  ea,
  X
]),
el = k - 2 * ea,
er = q && X ? D : el * es,
eo = Math.floor(Math.min(D, er) / es),
ec = k > D / es + 72 + S + 8;
  t = $ || q ? $ ? -16 : -8 : 40 + Math.max(0, 72 - (k - eo) / 2), a.useEffect(() => {
let e = setTimeout(() => {
  z(!1);
}, 250);
return () => {
  clearTimeout(e);
};
  }, []);
  let eu = (0, o.useSpring)({
  value: $ ? 1 : 0,
  delay: ec || !$ ? 0 : 100,
  config: {
    ...r.config.stiff,
    clamp: !0
  },
  onStart: () => K(!0),
  onChange: () => m.S.dispatch(I.CkL.REMEASURE_TARGET),
  onRest: () => {
    K(!1), m.S.dispatch(I.CkL.REMEASURE_TARGET);
  }
}, 'animate-always'),
ed = (0, o.useSpring)({
  value: $ ? 1 : 0,
  config: {
    ...r.config.stiff,
    clamp: !0
  }
}, 'animate-always'),
eh = (0, o.useSpring)({
  value: er,
  config: {
    ...r.config.stiff,
    clamp: !0
  }
}, ee === $ && ed.value.idle && !ei ? 'animate-never' : 'animate-always'),
ep = (0, o.useSpring)({
  value: t,
  config: {
    ...r.config.stiff,
    clamp: !0
  }
}, 'animate-always'),
em = (0, o.useTransition)(L, {
  keys: e => null == e ? void 0 : e.id,
  config: {
    ...r.config.stiff,
    clamp: !0
  },
  initial: null,
  from: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  leave: {
    opacity: 0
  }
}, 'animate-always'),
e_ = a.useCallback(e => {
  F(e), z(!1);
}, []),
ef = $ || y ? [] : (0, C.n3)(A, L, G),
{
  visibleParticipants: eE,
  participantTileWidth: eC
} = (0, g.ZB)(D, M);
  return (0, i.jsxs)('div', {
className: l()(N.root, T.flexCenter, O),
children: [
  (0, i.jsxs)('div', {
    className: N.tileWrapper,
    style: {
      opacity: Q && W ? 0 : 1
    },
    children: [
      (0, i.jsxs)(r.animated.div, {
        className: N.videoFrame,
        style: {
          top: ed.value.to(e => -e * S / 2)
        },
        children: [
          (0, i.jsx)(r.animated.div, {
            style: {
              width: eh.value
            },
            className: N.videoWrapper,
            children: (0, i.jsx)('div', {
              className: l()(T.videoSizer),
              style: {
                aspectRatio: es
              },
              children: em((e, t, a) => {
                let {
                  key: l
                } = a;
                return null != t ? (0, i.jsx)(r.animated.div, {
                  className: T.videoWrapperAnimated,
                  style: e,
                  children: (0, i.jsx)(f.ZP, {
                    focused: !0,
                    noBorder: er >= D || el >= k,
                    channel: j,
                    className: T.focusedVideo,
                    videoComponent: H,
                    paused: y,
                    width: D,
                    participant: t,
                    onClick: n,
                    onDoubleClick: Z,
                    onContextMenu: s,
                    onVideoResize: e_,
                    inCall: R,
                    inPopout: B
                  })
                }, l) : null;
              })
            })
          }),
          en ? (0, i.jsx)(r.animated.div, {
            className: l()(N.actionRow, {
              [N.idle]: w
            }),
            style: {
              bottom: ep.value
            },
            children: (0, i.jsx)(d.Z, {
              channelId: j.id,
              isParticipantsOpen: P,
              isVertical: !0
            })
          }) : null
        ]
      }),
      (0, i.jsx)(r.animated.div, {
        className: N.participantsWrapperAnimated,
        style: {
          translateY: eu.value.to(e => e * S / 2),
          opacity: eu.value,
          visibility: eu.value.to(e => 0 === e ? 'hidden' : 'visible')
        },
        children: (0, i.jsx)(g.ZP, {
          channel: j,
          onClick: n,
          onContextMenu: s,
          onDoubleClick: Z,
          participants: eE,
          participantTileWidth: eC,
          selectedParticipantId: L.id,
          inCall: R,
          paused: y || Y || !P,
          popoutWindow: b
        })
      })
    ]
  }),
  ef.length > 0 ? (0, i.jsx)(E.Z, {
    onContextMenuParticipant: s,
    width: D,
    height: k,
    channel: j,
    participants: ef
  }) : null
]
  });
}