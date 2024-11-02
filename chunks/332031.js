n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(655922),
    a = n(158776),
    u = n(981631),
    d = n(388032);
function s(e) {
    let t = (0, l.e7)([a.Z], () => (0, o.Z)(a.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)), [e]);
    return null == t
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'watch-stream',
              label: d.intl.string(d.t['7Xq/nZ']),
              action: () => window.open(t, '_blank')
          });
}
