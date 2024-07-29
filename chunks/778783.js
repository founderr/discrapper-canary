n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(620662),
  s = n(503438),
  o = n(829820),
  l = n(652853),
  u = n(475413),
  c = n(228168),
  d = n(981631),
  _ = n(689938),
  E = n(847864);

function f(e) {
  let {
user: t,
activity: n,
onClick: f
  } = e, {
profileType: h
  } = (0, l.z)(), p = (0, o.Fe)(n, t);
  if (!(0, s.Z)(n) || !(0, a.Z)(n, d.xjy.SYNC))
return null;
  let m = (0, r.jsx)(u.tG, {
icon: i.UserPlayIcon,
text: _.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
disabled: p.disabled,
submitting: p.loading,
themeColor: h === c.y0.FULL_SIZE ? 'secondary' : 'primary',
fullWidth: !0,
onClick: e => {
  null == f || f(e), p.onClick();
}
  });
  return null == p.tooltip ? m : (0, r.jsx)(i.TooltipContainer, {
text: p.tooltip,
className: E.tooltipContainer,
children: m
  });
}