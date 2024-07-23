i.d(n, {
  Z: function() {
return r;
  }
});
var t = i(735250);
i(470079);
var l = i(442837),
  s = i(481060),
  o = i(655922),
  a = i(158776),
  u = i(981631),
  d = i(689938);

function r(e) {
  let n = (0, l.e7)([a.Z], () => (0, o.Z)(a.Z.findActivity(e, e => e.type === u.IIU.STREAMING)), [e]);
  return null == n ? null : (0, t.jsx)(s.MenuItem, {
id: 'watch-stream',
label: d.Z.Messages.WATCH_STREAM,
action: () => window.open(n, '_blank')
  });
}