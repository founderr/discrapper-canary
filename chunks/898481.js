"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("222007");
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("77078"),
  i = l("772017"),
  r = l("987317"),
  o = l("990766"),
  u = l("244201"),
  d = l("223913"),
  c = l("373469"),
  f = l("42203"),
  m = l("30672"),
  p = l("619911"),
  h = l("659500"),
  T = l("295999"),
  E = l("49111"),
  S = l("782340"),
  _ = l("317468");

function g(e) {
  let {
    isCurrentUser: t,
    color: l,
    look: g,
    applicationStream: A
  } = e, {
    activeStream: I,
    watchingOtherStream: v
  } = (0, a.useStateFromStoresObject)([c.default], () => ({
    activeStream: c.default.getActiveStreamForApplicationStream(A),
    watchingOtherStream: null != A && c.default.getAllActiveStreamsForChannel(A.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== A.ownerId
    }).length > 0
  })), N = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == A ? void 0 : A.channelId)), [C, y] = (0, d.useCanWatchStream)(N), M = (0, u.useWindowDispatch)(), x = null != I && null != A && I.state !== E.ApplicationStreamStates.ENDED && I.ownerId === A.ownerId, O = e => {
    null != A && (r.default.selectVoiceChannel(A.channelId), !x && (0, o.watchStreamAndTransitionToStream)(A, {
      forceMultiple: e
    }), M.dispatch(E.ComponentActions.POPOUT_CLOSE), h.ComponentDispatch.dispatch(E.ComponentActions.MODAL_CLOSE), i.default.popAll())
  };
  if (null == A) return null;
  let R = (0, d.getStreamCTAString)(y);
  t ? R = S.default.Messages.WATCH_STREAM_STREAMING : x && (R = S.default.Messages.WATCH_STREAM_WATCHING);
  let L = {
    color: l,
    look: g
  };
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(T.default, {
      disabled: t || x || !C,
      onClick: () => O(!1),
      ...L,
      fullWidth: !0,
      children: [(0, n.jsx)(p.default, {
        className: _.streamIcon
      }), R]
    }, "play"), v && !x ? (0, n.jsx)(s.Tooltip, {
      text: S.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
      children: e => (0, n.jsx)(T.default, {
        ...e,
        onClick: () => {
          var t;
          null === (t = e.onClick) || void 0 === t || t.call(e), O(!0)
        },
        ...L,
        className: _.iconButton,
        size: _.iconButtonSize,
        children: (0, n.jsx)(m.default, {
          className: _.iconSize
        })
      })
    }) : null]
  })
}