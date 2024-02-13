"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("907002"),
  o = n("84339"),
  u = n("109489"),
  d = n("271938"),
  c = n("42887"),
  f = n("659500"),
  h = n("679243"),
  m = n("876715"),
  p = n("842044"),
  E = n("329515"),
  S = n("49111"),
  g = n("99795"),
  C = n("111647"),
  _ = n("542377");
let I = 16 / 9,
  T = 8 + E.PARTICIPANTS_HEIGHT;

function v(e) {
  let t, {
      onSelectParticipant: n,
      onContextMenuParticipant: s,
      onFullscreenParticipant: v,
      participants: x,
      filteredParticipants: N,
      popoutWindow: A,
      inCall: M,
      channel: R,
      selectedParticipant: j,
      showParticipants: L = !0,
      className: O,
      paused: y,
      width: P,
      height: b,
      layout: D,
      idle: U
    } = e,
    w = null != A,
    F = c.default.getVideoComponent(),
    k = d.default.getId(),
    [V, B] = l.useState(null),
    [H, G] = l.useState(!0),
    [W, Y] = l.useState(!1),
    z = j.type === g.ParticipantTypes.ACTIVITY,
    K = !z && null != j.streamId,
    Z = K && null != V && V.width > 0 && V.height > 0 ? V.width / V.height : I,
    X = b <= 2 * T + 144,
    J = L && !X,
    q = (0, o.default)(J),
    Q = 0;
  (z || J) && (Q += 72), z && !J && (Q += 48), J && (Q += .5 * T + 8);
  let $ = b - 2 * Q,
    ee = $ * Z,
    et = Math.floor(Math.min(P, ee) / Z),
    en = b > P / Z + 72 + T + 8,
    ea = !J && !z;
  t = ea ? 40 + Math.max(0, 72 - (b - et) / 2) : J ? -16 : -8, l.useEffect(() => {
    let e = setTimeout(() => {
      G(!1)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let el = (0, r.useSpring)({
      value: J ? 1 : 0,
      delay: en || !J ? 0 : 100,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      onStart: () => Y(!0),
      onChange: () => f.ComponentDispatch.dispatch(S.ComponentActions.REMEASURE_TARGET),
      onRest: () => {
        Y(!1), f.ComponentDispatch.dispatch(S.ComponentActions.REMEASURE_TARGET)
      }
    }),
    es = (0, r.useSpring)({
      value: J ? 1 : 0,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    ei = (0, r.useSpring)({
      value: ee,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      immediate: q === J && es.value.idle
    }),
    er = (0, r.useSpring)({
      value: t,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    eo = (0, r.useTransition)(j, {
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
    eu = l.useCallback(e => {
      B(e), G(!1)
    }, []),
    ed = J || y ? [] : (0, p.getPipParticipants)(x, j, k),
    {
      visibleParticipants: ec,
      participantTileWidth: ef
    } = (0, E.useVisibleParticipants)(P, N);
  return (0, a.jsxs)("div", {
    className: i(_.root, C.flexCenter, O),
    children: [(0, a.jsxs)("div", {
      className: _.tileWrapper,
      style: {
        opacity: K && H ? 0 : 1
      },
      children: [(0, a.jsxs)(r.animated.div, {
        className: _.videoFrame,
        style: {
          top: es.value.to(e => -e * T / 2)
        },
        children: [(0, a.jsx)(r.animated.div, {
          style: {
            width: ei.value
          },
          className: _.videoWrapper,
          children: (0, a.jsx)("div", {
            className: i(C.videoSizer),
            style: {
              aspectRatio: Z
            },
            children: eo((e, t, l) => {
              let {
                key: i
              } = l;
              return null != t ? (0, a.jsx)(r.animated.div, {
                className: C.videoWrapperAnimated,
                style: e,
                children: (0, a.jsx)(h.default, {
                  focused: !0,
                  noBorder: ee >= P || $ >= b,
                  channel: R,
                  className: C.focusedVideo,
                  videoComponent: F,
                  paused: y,
                  width: P,
                  participant: t,
                  onClick: n,
                  onDoubleClick: v,
                  onContextMenu: s,
                  onVideoResize: eu,
                  inCall: M,
                  inPopout: w
                })
              }, i) : null
            })
          })
        }), X || D === S.ChannelLayouts.MINIMUM || D === S.ChannelLayouts.NORMAL ? null : (0, a.jsx)(r.animated.div, {
          className: i(_.actionRow, {
            [_.idle]: U
          }),
          style: {
            bottom: er.value
          },
          children: (0, a.jsx)(u.default, {
            channelId: R.id,
            isParticipantsOpen: L,
            isVertical: !0
          })
        })]
      }), (0, a.jsx)(r.animated.div, {
        className: _.participantsWrapperAnimated,
        style: {
          translateY: el.value.to(e => e * T / 2),
          opacity: el.value,
          visibility: el.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, a.jsx)(E.default, {
          channel: R,
          onClick: n,
          onContextMenu: s,
          onDoubleClick: v,
          participants: ec,
          participantTileWidth: ef,
          selectedParticipantId: j.id,
          inCall: M,
          paused: y || W || !L,
          popoutWindow: A
        })
      })]
    }), ed.length > 0 ? (0, a.jsx)(m.default, {
      onContextMenuParticipant: s,
      width: P,
      height: b,
      channel: R,
      participants: ed
    }) : null]
  })
}