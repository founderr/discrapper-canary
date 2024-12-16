t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    r = t(442837),
    a = t(481060),
    o = t(726721),
    l = t(726521),
    c = t(592125),
    d = t(388032);
function u(e, n) {
    let t = o.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        u = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
        s = null == u ? void 0 : u.getGuildId();
    return !1 === t
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'report-app',
              color: 'danger',
              label: d.intl.string(d.t.NgA5vr),
              action: () =>
                  (0, l.uu)({
                      application: e,
                      entrypoint: 'activity_ui_popout',
                      contextualGuildId: null != s ? s : void 0,
                      contextualChannelId: null == u ? void 0 : u.id
                  }),
              icon: a.FlagIcon
          });
}
