n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(812206),
    s = n(726721),
    o = n(726521),
    c = n(354459),
    d = n(388032);
function u(e) {
    let t = (0, l.e7)([a.Z], () => ((null == e ? void 0 : e.type) === c.fO.ACTIVITY ? a.Z.getApplication(e.id) : void 0));
    return !1 === s.Z.useExperiment({ location: 'channel_call_overflow_menu' }, { autoTrackExposure: !1 }).enabled || null == e || e.type !== c.fO.ACTIVITY || null == t
        ? null
        : (0, i.jsx)(r.MenuGroup, {
              children: (0, i.jsx)(r.MenuItem, {
                  id: 'report-app',
                  color: 'danger',
                  label: d.intl.string(d.t.NgA5vr),
                  action: () => (0, o.uu)(t),
                  icon: r.FlagIcon
              })
          });
}
