t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    r = t(442837),
    a = t(481060),
    l = t(726721),
    o = t(726521),
    d = t(592125),
    c = t(388032);
function u(e, n) {
    let t = l.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !1 }).enabled,
        u = (0, r.e7)([d.Z], () => d.Z.getChannel(n)),
        s = null == u ? void 0 : u.getGuildId();
    return !1 === t
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'report-app',
              color: 'danger',
              label: c.intl.string(c.t.NgA5vr),
              action: () =>
                  (0, o.uu)({
                      application: e,
                      entrypoint: 'activity_ui_popout',
                      contextualGuildId: null != s ? s : void 0,
                      contextualChannelId: null == u ? void 0 : u.id
                  }),
              icon: a.FlagIcon
          });
}
