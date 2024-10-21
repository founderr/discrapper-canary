t.d(n, {
    Z: function () {
        return r;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    s = t(655922),
    o = t(158776),
    u = t(981631),
    d = t(689938);
function r(e) {
    let n = (0, i.e7)([o.Z], () => (0, s.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)), [e]);
    return null == n
        ? null
        : (0, l.jsx)(a.MenuItem, {
              id: 'watch-stream',
              label: d.Z.Messages.WATCH_STREAM,
              action: () => window.open(n, '_blank')
          });
}
