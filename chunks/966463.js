n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(287734),
  o = n(872810),
  l = n(382182),
  u = n(199902),
  c = n(592125),
  d = n(475413),
  _ = n(981631),
  E = n(689938);

function f(e) {
  let {
stream: t,
onClick: n,
onClose: f
  } = e, h = (0, i.e7)([c.Z], () => c.Z.getChannel(null == t ? void 0 : t.channelId)), [p, m] = (0, l.wq)(h), {
activeStream: I,
isWatchingOtherStream: T
  } = (0, i.cj)([u.Z], () => ({
activeStream: u.Z.getActiveStreamForApplicationStream(t),
isWatchingOtherStream: null != t && u.Z.getAllActiveStreamsForChannel(t.channelId).some(e => {
  let {
    ownerId: n
  } = e;
  return n !== t.ownerId;
})
  }));
  if (null == t)
return null;
  let g = null != I && I.state !== _.jm8.ENDED && I.ownerId === t.ownerId;
  return (0, r.jsxs)(r.Fragment, {
children: [
  T && !g && (0, r.jsx)(d.ef, {
    tooltipText: E.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
    icon: a.EyePlusIcon,
    color: a.Button.Colors.GREEN,
    onClick: e => {
      null == n || n(e), s.default.selectVoiceChannel(t.channelId), !g && (0, o.iV)(t, {
        forceMultiple: !0
      }), null == f || f();
    }
  }),
  (0, r.jsx)(d.tG, {
    icon: a.ScreenIcon,
    text: g ? E.Z.Messages.WATCH_STREAM_WATCHING : (0, l.P9)(m),
    disabled: g || !p,
    color: a.Button.Colors.GREEN,
    fullWidth: !0,
    onClick: e => {
      null == n || n(e), s.default.selectVoiceChannel(t.channelId), !g && (0, o.iV)(t), null == f || f();
    }
  })
]
  });
}