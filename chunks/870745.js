t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651),
    a = t(481060),
    r = t(726721),
    o = t(726521),
    l = t(388032);
function c(e) {
    return !1 === r.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'report-app',
              color: 'danger',
              label: l.intl.string(l.t.NgA5vr),
              action: () => (0, o.uu)(e),
              icon: a.FlagIcon
          });
}
