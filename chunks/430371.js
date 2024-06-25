n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(920906),
  o = n(110924),
  c = n(988980),
  u = n(157813),
  d = n(314897),
  h = n(131951),
  m = n(585483),
  E = n(807705),
  p = n(27457),
  g = n(111248),
  f = n(312703),
  C = n(796638),
  _ = n(981631),
  I = n(354459),
  x = n(858962),
  T = n(868999);
let N = 16 / 9,
  Z = 8 + C.cF;

function S(e) {
  let t, {
      onSelectParticipant: n,
      onContextMenuParticipant: s,
      onFullscreenParticipant: S,
      participants: v,
      filteredParticipants: A,
      popoutWindow: M,
      inCall: R,
      channel: j,
      selectedParticipant: L,
      showParticipants: O = !0,
      className: P,
      paused: y,
      width: b,
      height: D,
      layout: U,
      idle: k
    } = e,
    w = null != M,
    H = h.Z.getVideoComponent(),
    G = d.default.getId(),
    [B, V] = i.useState(null),
    [F, z] = i.useState(!0),
    [W, Y] = i.useState(!1),
    K = L.type === I.fO.ACTIVITY,
    q = (0, c.Z)(L.id),
    X = !K && null != L.streamId,
    Q = D <= 2 * Z + 144,
    J = O && !Q,
    $ = (0, o.Z)(J),
    ee = U === _.AEg.MINIMUM || U === _.AEg.NORMAL,
    et = !Q && (!ee || K),
    en = (0, E.Z)(et, 100),
    el = 0;
  (K || J) && (el += 72), K && !J && (et ? el += 48 : el += 8), J && (el += .5 * Z + 8);
  let ei = i.useMemo(() => K && q ? b / (D - 2 * el) : X && null != B && B.width > 0 && B.height > 0 ? B.width / B.height : N, [X, B, K, b, D, el, q]),
    es = D - 2 * el,
    ea = K && q ? b : es * ei,
    er = Math.floor(Math.min(b, ea) / ei),
    eo = D > b / ei + 72 + Z + 8;
  t = J || K ? J ? -16 : -8 : 40 + Math.max(0, 72 - (D - er) / 2), i.useEffect(() => {
    let e = setTimeout(() => {
      z(!1)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let ec = (0, r.useSpring)({
      value: J ? 1 : 0,
      delay: eo || !J ? 0 : 100,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      onStart: () => Y(!0),
      onChange: () => m.S.dispatch(_.CkL.REMEASURE_TARGET),
      onRest: () => {
        Y(!1), m.S.dispatch(_.CkL.REMEASURE_TARGET)
      }
    }),
    eu = (0, r.useSpring)({
      value: J ? 1 : 0,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    ed = (0, r.useSpring)({
      value: ea,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      immediate: $ === J && eu.value.idle && !en
    }),
    eh = (0, r.useSpring)({
      value: t,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    em = (0, r.useTransition)(L, {
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
    }),
    eE = i.useCallback(e => {
      V(e), z(!1)
    }, []),
    ep = J || y ? [] : (0, f.n3)(v, L, G),
    {
      visibleParticipants: eg,
      participantTileWidth: ef
    } = (0, C.ZB)(b, A);
  return (0, l.jsxs)("div", {
    className: a()(T.root, x.flexCenter, P),
    children: [(0, l.jsxs)("div", {
      className: T.tileWrapper,
      style: {
        opacity: X && F ? 0 : 1
      },
      children: [(0, l.jsxs)(r.animated.div, {
        className: T.videoFrame,
        style: {
          top: eu.value.to(e => -e * Z / 2)
        },
        children: [(0, l.jsx)(r.animated.div, {
          style: {
            width: ed.value
          },
          className: T.videoWrapper,
          children: (0, l.jsx)("div", {
            className: a()(x.videoSizer),
            style: {
              aspectRatio: ei
            },
            children: em((e, t, i) => {
              let {
                key: a
              } = i;
              return null != t ? (0, l.jsx)(r.animated.div, {
                className: x.videoWrapperAnimated,
                style: e,
                children: (0, l.jsx)(p.ZP, {
                  focused: !0,
                  noBorder: ea >= b || es >= D,
                  channel: j,
                  className: x.focusedVideo,
                  videoComponent: H,
                  paused: y,
                  width: b,
                  participant: t,
                  onClick: n,
                  onDoubleClick: S,
                  onContextMenu: s,
                  onVideoResize: eE,
                  inCall: R,
                  inPopout: w
                })
              }, a) : null
            })
          })
        }), et ? (0, l.jsx)(r.animated.div, {
          className: a()(T.actionRow, {
            [T.idle]: k
          }),
          style: {
            bottom: eh.value
          },
          children: (0, l.jsx)(u.Z, {
            channelId: j.id,
            isParticipantsOpen: O,
            isVertical: !0
          })
        }) : null]
      }), (0, l.jsx)(r.animated.div, {
        className: T.participantsWrapperAnimated,
        style: {
          translateY: ec.value.to(e => e * Z / 2),
          opacity: ec.value,
          visibility: ec.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, l.jsx)(C.ZP, {
          channel: j,
          onClick: n,
          onContextMenu: s,
          onDoubleClick: S,
          participants: eg,
          participantTileWidth: ef,
          selectedParticipantId: L.id,
          inCall: R,
          paused: y || W || !O,
          popoutWindow: M
        })
      })]
    }), ep.length > 0 ? (0, l.jsx)(g.Z, {
      onContextMenuParticipant: s,
      width: b,
      height: D,
      channel: j,
      participants: ep
    }) : null]
  })
}