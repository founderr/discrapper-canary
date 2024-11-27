n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(812206),
    s = n(726721),
    o = n(726521),
    c = n(592125),
    d = n(354459),
    u = n(388032);
function h(e, t) {
    let n = (0, l.e7)([a.Z], () => ((null == e ? void 0 : e.type) === d.fO.ACTIVITY ? a.Z.getApplication(e.id) : void 0)),
        h = (0, l.e7)([c.Z], () => c.Z.getChannel(t)),
        p = null == h ? void 0 : h.getGuildId();
    return !1 === s.Z.useExperiment({ location: 'channel_call_overflow_menu' }, { autoTrackExposure: !1 }).enabled || null == e || e.type !== d.fO.ACTIVITY || null == n
        ? null
        : (0, i.jsx)(r.MenuGroup, {
              children: (0, i.jsx)(r.MenuItem, {
                  id: 'report-app',
                  color: 'danger',
                  label: u.intl.string(u.t.NgA5vr),
                  action: () =>
                      (0, o.uu)({
                          application: n,
                          entrypoint: 'activity_ui_channel_call',
                          contextualGuildId: null != p ? p : void 0,
                          contextualChannelId: null == h ? void 0 : h.id
                      }),
                  icon: r.FlagIcon
              })
          });
}
