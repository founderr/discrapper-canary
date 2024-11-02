e.d(t, {
    Z: function () {
        return o;
    }
});
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(726521),
    d = e(924301),
    a = e(388032);
function o(n) {
    let t = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(n), [n]);
    return null == n || null == t
        ? null
        : (0, l.jsx)(r.MenuItem, {
              id: 'report-event',
              label: a.intl.string(a.t.IBA5wc),
              action: () => (0, u.d$)(t),
              icon: r.FlagIcon,
              color: 'danger'
          });
}
