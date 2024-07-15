l.d(n, {
  Z: function() {
return d;
  }
});
var t = l(735250);
l(470079);
var i = l(442837),
  r = l(481060),
  a = l(655922),
  s = l(158776),
  u = l(981631),
  o = l(689938);

function d(e) {
  let n = (0, i.e7)([s.Z], () => (0, a.Z)(s.Z.findActivity(e, e => e.type === u.IIU.STREAMING)), [e]);
  return null == n ? null : (0, t.jsx)(r.MenuItem, {
id: 'watch-stream',
label: o.Z.Messages.WATCH_STREAM,
action: () => window.open(n, '_blank')
  });
}