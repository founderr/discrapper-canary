t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(200651),
    o = t(481060),
    r = t(726721),
    a = t(726521),
    c = t(388032);
function l(e) {
    return !1 === r.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'report-app',
              color: 'danger',
              label: c.intl.string(c.t.NgA5vr),
              action: () => (0, a.uu)(e),
              icon: o.FlagIcon
          });
}
