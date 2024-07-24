n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(620662),
  s = n(503438),
  o = n(829820),
  l = n(475413),
  u = n(981631),
  c = n(689938),
  d = n(847864);

function _(e) {
  let {
user: t,
activity: n,
onClick: _
  } = e, E = (0, o.Fe)(n, t);
  if (!(0, s.Z)(n) || !(0, a.Z)(n, u.xjy.SYNC))
return null;
  let f = (0, r.jsx)(l.tG, {
icon: i.UserPlayIcon,
text: c.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
disabled: E.disabled,
submitting: E.loading,
fullWidth: !0,
onClick: e => {
  null == _ || _(e), E.onClick();
}
  });
  return null == E.tooltip ? f : (0, r.jsx)(i.TooltipContainer, {
text: E.tooltip,
className: d.tooltipContainer,
children: f
  });
}