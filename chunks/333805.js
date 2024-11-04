t.d(e, {
    Z: function () {
        return a;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(726521),
    u = t(427679),
    o = t(388032);
function a(n) {
    let e = u.Z.isLive(n.id);
    return n.isGuildStageVoice() && e
        ? (0, i.jsx)(l.MenuItem, {
              id: 'report-stage',
              label: o.intl.string(o.t.JGj6Cg),
              action: () => (0, r.ic)(n),
              icon: l.FlagIcon,
              color: 'danger'
          })
        : null;
}
