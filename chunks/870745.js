t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(200651),
    o = t(442837),
    a = t(481060),
    r = t(726721),
    c = t(726521),
    l = t(592125),
    d = t(388032);
function s(e, n) {
    let t = r.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled,
        s = (0, o.e7)([l.Z], () => l.Z.getChannel(n)),
        u = null == s ? void 0 : s.getGuildId();
    return !1 === t
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'report-app',
              color: 'danger',
              label: d.intl.string(d.t.NgA5vr),
              action: () =>
                  (0, c.uu)({
                      application: e,
                      entrypoint: 'activity_ui_popout',
                      contextualGuildId: null != u ? u : void 0,
                      contextualChannelId: null == s ? void 0 : s.id
                  }),
              icon: a.FlagIcon
          });
}
