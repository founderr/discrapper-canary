n.d(t, {
  Z: function() {
    return Z
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(920906),
  o = n(110924),
  c = n(157813),
  u = n(314897),
  d = n(131951),
  h = n(585483),
  m = n(807705),
  p = n(27457),
  E = n(111248),
  g = n(312703),
  f = n(796638),
  C = n(981631),
  _ = n(354459),
  I = n(858962),
  x = n(868999);
let T = 16 / 9,
  N = 8 + f.cF;

function Z(e) {
  let t, {
      onSelectParticipant: n,
      onContextMenuParticipant: s,
      onFullscreenParticipant: Z,
      participants: S,
      filteredParticipants: v,
      popoutWindow: A,
      inCall: M,
      channel: R,
      selectedParticipant: j,
      showParticipants: L = !0,
      className: O,
      paused: P,
      width: b,
      height: y,
      layout: D,
      idle: U
    } = e,
    k = null != A,
    w = d.Z.getVideoComponent(),
    H = u.default.getId(),
    [B, G] = i.useState(null),
    [V, F] = i.useState(!0),
    [z, W] = i.useState(!1),
    Y = j.type === _.fO.ACTIVITY,
    K = !Y && null != j.streamId,
    q = K && null != B && B.width > 0 && B.height > 0 ? B.width / B.height : T,
    X = y <= 2 * N + 144,
    Q = L && !X,
    J = (0, o.Z)(Q),
    $ = D === C.AEg.MINIMUM || D === C.AEg.NORMAL,
    ee = !X && (!$ || Y),
    et = (0, m.Z)(ee, 100),
    en = 0;
  (Y || Q) && (en += 72), Y && !Q && (ee ? en += 48 : en += 8), Q && (en += .5 * N + 8);
  let el = y - 2 * en,
    ei = el * q,
    es = Math.floor(Math.min(b, ei) / q),
    ea = y > b / q + 72 + N + 8;
  t = Q || Y ? Q ? -16 : -8 : 40 + Math.max(0, 72 - (y - es) / 2), i.useEffect(() => {
    let e = setTimeout(() => {
      F(!1)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let er = (0, r.useSpring)({
      value: Q ? 1 : 0,
      delay: ea || !Q ? 0 : 100,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      onStart: () => W(!0),
      onChange: () => h.S.dispatch(C.CkL.REMEASURE_TARGET),
      onRest: () => {
        W(!1), h.S.dispatch(C.CkL.REMEASURE_TARGET)
      }
    }),
    eo = (0, r.useSpring)({
      value: Q ? 1 : 0,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    ec = (0, r.useSpring)({
      value: ei,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      immediate: J === Q && eo.value.idle && !et
    }),
    eu = (0, r.useSpring)({
      value: t,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    ed = (0, r.useTransition)(j, {
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
    eh = i.useCallback(e => {
      G(e), F(!1)
    }, []),
    em = Q || P ? [] : (0, g.n3)(S, j, H),
    {
      visibleParticipants: ep,
      participantTileWidth: eE
    } = (0, f.ZB)(b, v);
  return (0, l.jsxs)("div", {
    className: a()(x.root, I.flexCenter, O),
    children: [(0, l.jsxs)("div", {
      className: x.tileWrapper,
      style: {
        opacity: K && V ? 0 : 1
      },
      children: [(0, l.jsxs)(r.animated.div, {
        className: x.videoFrame,
        style: {
          top: eo.value.to(e => -e * N / 2)
        },
        children: [(0, l.jsx)(r.animated.div, {
          style: {
            width: ec.value
          },
          className: x.videoWrapper,
          children: (0, l.jsx)("div", {
            className: a()(I.videoSizer),
            style: {
              aspectRatio: q
            },
            children: ed((e, t, i) => {
              let {
                key: a
              } = i;
              return null != t ? (0, l.jsx)(r.animated.div, {
                className: I.videoWrapperAnimated,
                style: e,
                children: (0, l.jsx)(p.ZP, {
                  focused: !0,
                  noBorder: ei >= b || el >= y,
                  channel: R,
                  className: I.focusedVideo,
                  videoComponent: w,
                  paused: P,
                  width: b,
                  participant: t,
                  onClick: n,
                  onDoubleClick: Z,
                  onContextMenu: s,
                  onVideoResize: eh,
                  inCall: M,
                  inPopout: k
                })
              }, a) : null
            })
          })
        }), ee ? (0, l.jsx)(r.animated.div, {
          className: a()(x.actionRow, {
            [x.idle]: U
          }),
          style: {
            bottom: eu.value
          },
          children: (0, l.jsx)(c.Z, {
            channelId: R.id,
            isParticipantsOpen: L,
            isVertical: !0
          })
        }) : null]
      }), (0, l.jsx)(r.animated.div, {
        className: x.participantsWrapperAnimated,
        style: {
          translateY: er.value.to(e => e * N / 2),
          opacity: er.value,
          visibility: er.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, l.jsx)(f.ZP, {
          channel: R,
          onClick: n,
          onContextMenu: s,
          onDoubleClick: Z,
          participants: ep,
          participantTileWidth: eE,
          selectedParticipantId: j.id,
          inCall: M,
          paused: P || z || !L,
          popoutWindow: A
        })
      })]
    }), em.length > 0 ? (0, l.jsx)(E.Z, {
      onContextMenuParticipant: s,
      width: b,
      height: y,
      channel: R,
      participants: em
    }) : null]
  })
}