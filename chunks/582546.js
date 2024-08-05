n.d(t, {
  Z: function() {
return h;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(230711),
  o = n(26033),
  l = n(740605),
  u = n(180335),
  c = n(768419),
  d = n(594174),
  _ = n(981631),
  E = n(616922),
  f = n(689938);

function h(e) {
  var t;
  let {
user: n,
entry: h,
display: p,
onClose: m
  } = e, I = (0, i.e7)([d.default], () => {
var e;
return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n.id;
  }), T = (0, i.e7)([c.Z], () => c.Z.hasConnectedAccount());
  if ('live' === p || !(0, u.AZ)(h))
return null;
  if (!T)
return (0, r.jsx)(a.MenuItem, {
  id: 'connect-spotify',
  label: f.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
    platform: E.ai
  }),
  action: () => {
    s.Z.open(_.oAB.CONNECTIONS), null == m || m();
  }
});
  if (I)
return null;
  let g = (0, o.kx)(h) ? null === (t = h.extra.entries[0]) || void 0 === t ? void 0 : t.media : h.extra.media;
  return null == g ? null : (0, r.jsx)(a.MenuItem, {
id: 'play-on-spotify',
label: f.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
action: () => (0, l.o)(E.Hw.TRACK, g.external_id)
  });
}