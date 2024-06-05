"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("920906"),
  o = n("110924"),
  u = n("157813"),
  d = n("314897"),
  c = n("131951"),
  f = n("585483"),
  h = n("807705"),
  m = n("27457"),
  p = n("111248"),
  E = n("312703"),
  C = n("796638"),
  g = n("981631"),
  S = n("354459"),
  _ = n("825532"),
  T = n("16869");
let I = 16 / 9,
  A = 8 + C.PARTICIPANTS_HEIGHT;

function v(e) {
  let t, {
      onSelectParticipant: n,
      onContextMenuParticipant: s,
      onFullscreenParticipant: v,
      participants: x,
      filteredParticipants: N,
      popoutWindow: M,
      inCall: y,
      channel: R,
      selectedParticipant: L,
      showParticipants: O = !0,
      className: j,
      paused: P,
      width: D,
      height: b,
      layout: U,
      idle: F
    } = e,
    w = null != M,
    k = c.default.getVideoComponent(),
    H = d.default.getId(),
    [B, G] = l.useState(null),
    [V, W] = l.useState(!0),
    [Y, z] = l.useState(!1),
    K = L.type === S.ParticipantTypes.ACTIVITY,
    Z = !K && null != L.streamId,
    X = Z && null != B && B.width > 0 && B.height > 0 ? B.width / B.height : I,
    q = b <= 2 * A + 144,
    J = O && !q,
    Q = (0, o.default)(J),
    $ = U === g.ChannelLayouts.MINIMUM || U === g.ChannelLayouts.NORMAL,
    ee = !q && (!$ || K),
    et = (0, h.default)(ee, 100),
    en = 0;
  (K || J) && (en += 72), K && !J && (ee ? en += 48 : en += 8), J && (en += .5 * A + 8);
  let ea = b - 2 * en,
    el = ea * X,
    es = Math.floor(Math.min(D, el) / X),
    ei = b > D / X + 72 + A + 8;
  t = J || K ? J ? -16 : -8 : 40 + Math.max(0, 72 - (b - es) / 2), l.useEffect(() => {
    let e = setTimeout(() => {
      W(!1)
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let er = (0, r.useSpring)({
      value: J ? 1 : 0,
      delay: ei || !J ? 0 : 100,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      onStart: () => z(!0),
      onChange: () => f.ComponentDispatch.dispatch(g.ComponentActions.REMEASURE_TARGET),
      onRest: () => {
        z(!1), f.ComponentDispatch.dispatch(g.ComponentActions.REMEASURE_TARGET)
      }
    }),
    eo = (0, r.useSpring)({
      value: J ? 1 : 0,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    eu = (0, r.useSpring)({
      value: el,
      config: {
        ...r.config.stiff,
        clamp: !0
      },
      immediate: Q === J && eo.value.idle && !et
    }),
    ed = (0, r.useSpring)({
      value: t,
      config: {
        ...r.config.stiff,
        clamp: !0
      }
    }),
    ec = (0, r.useTransition)(L, {
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
    ef = l.useCallback(e => {
      G(e), W(!1)
    }, []),
    eh = J || P ? [] : (0, E.getPipParticipants)(x, L, H),
    {
      visibleParticipants: em,
      participantTileWidth: ep
    } = (0, C.useVisibleParticipants)(D, N);
  return (0, a.jsxs)("div", {
    className: i()(T.root, _.flexCenter, j),
    children: [(0, a.jsxs)("div", {
      className: T.tileWrapper,
      style: {
        opacity: Z && V ? 0 : 1
      },
      children: [(0, a.jsxs)(r.animated.div, {
        className: T.videoFrame,
        style: {
          top: eo.value.to(e => -e * A / 2)
        },
        children: [(0, a.jsx)(r.animated.div, {
          style: {
            width: eu.value
          },
          className: T.videoWrapper,
          children: (0, a.jsx)("div", {
            className: i()(_.videoSizer),
            style: {
              aspectRatio: X
            },
            children: ec((e, t, l) => {
              let {
                key: i
              } = l;
              return null != t ? (0, a.jsx)(r.animated.div, {
                className: _.videoWrapperAnimated,
                style: e,
                children: (0, a.jsx)(m.default, {
                  focused: !0,
                  noBorder: el >= D || ea >= b,
                  channel: R,
                  className: _.focusedVideo,
                  videoComponent: k,
                  paused: P,
                  width: D,
                  participant: t,
                  onClick: n,
                  onDoubleClick: v,
                  onContextMenu: s,
                  onVideoResize: ef,
                  inCall: y,
                  inPopout: w
                })
              }, i) : null
            })
          })
        }), ee ? (0, a.jsx)(r.animated.div, {
          className: i()(T.actionRow, {
            [T.idle]: F
          }),
          style: {
            bottom: ed.value
          },
          children: (0, a.jsx)(u.default, {
            channelId: R.id,
            isParticipantsOpen: O,
            isVertical: !0
          })
        }) : null]
      }), (0, a.jsx)(r.animated.div, {
        className: T.participantsWrapperAnimated,
        style: {
          translateY: er.value.to(e => e * A / 2),
          opacity: er.value,
          visibility: er.value.to(e => 0 === e ? "hidden" : "visible")
        },
        children: (0, a.jsx)(C.default, {
          channel: R,
          onClick: n,
          onContextMenu: s,
          onDoubleClick: v,
          participants: em,
          participantTileWidth: ep,
          selectedParticipantId: L.id,
          inCall: y,
          paused: P || Y || !O,
          popoutWindow: M
        })
      })]
    }), eh.length > 0 ? (0, a.jsx)(p.default, {
      onContextMenuParticipant: s,
      width: D,
      height: b,
      channel: R,
      participants: eh
    }) : null]
  })
}