"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(572691),
  a = n(287734),
  l = n(872810),
  u = n(40851),
  _ = n(102172),
  c = n(199902),
  d = n(592125),
  E = n(585483),
  I = n(915863),
  T = n(981631),
  h = n(689938),
  S = n(663237);

function f(e) {
  let {
    isCurrentUser: t,
    color: n,
    look: f,
    applicationStream: N,
    onAction: A
  } = e, {
    activeStream: m,
    watchingOtherStream: O
  } = (0, r.cj)([c.Z], () => ({
    activeStream: c.Z.getActiveStreamForApplicationStream(N),
    watchingOtherStream: null != N && c.Z.getAllActiveStreamsForChannel(N.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== N.ownerId
    }).length > 0
  })), R = (0, r.e7)([d.Z], () => d.Z.getChannel(null == N ? void 0 : N.channelId)), [p, g] = (0, _.wq)(R), C = (0, u.Aq)(), v = null != m && null != N && m.state !== T.jm8.ENDED && m.ownerId === N.ownerId, L = e => {
    if (null != N) null == A || A(), a.default.selectVoiceChannel(N.channelId), !v && (0, l.iV)(N, {
      forceMultiple: e
    }), C.dispatch(T.CkL.POPOUT_CLOSE), E.S.dispatch(T.CkL.MODAL_CLOSE), o.Z.popAll()
  };
  if (null == N) return null;
  let D = (0, _.P9)(g);
  t ? D = h.Z.Messages.WATCH_STREAM_STREAMING : v && (D = h.Z.Messages.WATCH_STREAM_WATCHING);
  let M = {
    color: n,
    look: f
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(I.Z, {
      disabled: t || v || !p,
      onClick: () => L(!1),
      ...M,
      fullWidth: !0,
      children: [(0, i.jsx)(s.ScreenArrowIcon, {
        size: "md",
        color: "currentColor",
        className: S.streamIcon
      }), D]
    }, "play"), O && !v ? (0, i.jsx)(s.Tooltip, {
      text: h.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
      children: e => (0, i.jsx)(I.Z, {
        ...e,
        onClick: () => {
          var t;
          null === (t = e.onClick) || void 0 === t || t.call(e), L(!0)
        },
        ...M,
        className: S.iconButton,
        size: S.iconButtonSize,
        children: (0, i.jsx)(s.EyePlusIcon, {
          size: "xs",
          color: "currentColor",
          className: S.iconSize
        })
      })
    }) : null]
  })
}