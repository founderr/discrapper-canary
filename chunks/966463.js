n.d(t, {
  Z: function() {
return p;
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
  d = n(652853),
  _ = n(475413),
  E = n(228168),
  f = n(981631),
  h = n(689938);

function p(e) {
  let {
stream: t,
onClick: n,
onClose: p
  } = e, {
profileType: m
  } = (0, d.z)(), I = (0, i.e7)([c.Z], () => c.Z.getChannel(null == t ? void 0 : t.channelId)), [T, g] = (0, l.wq)(I), {
activeStream: S,
isWatchingOtherStream: A
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
  let N = null != S && S.state !== f.jm8.ENDED && S.ownerId === t.ownerId;
  return (0, r.jsxs)(r.Fragment, {
children: [
  A && !N && (0, r.jsx)(_.ef, {
    tooltipText: h.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
    icon: a.EyePlusIcon,
    themeColor: m === E.y0.FULL_SIZE ? 'secondary' : 'primary',
    onClick: e => {
      null == n || n(e), s.default.selectVoiceChannel(t.channelId), !N && (0, o.iV)(t, {
        forceMultiple: !0
      }), null == p || p();
    }
  }),
  (0, r.jsx)(_.tG, {
    icon: a.ScreenIcon,
    text: N ? h.Z.Messages.WATCH_STREAM_WATCHING : (0, l.P9)(g),
    disabled: N || !T,
    themeColor: m === E.y0.FULL_SIZE ? 'secondary' : 'primary',
    fullWidth: !0,
    onClick: e => {
      null == n || n(e), s.default.selectVoiceChannel(t.channelId), !N && (0, o.iV)(t), null == p || p();
    }
  })
]
  });
}