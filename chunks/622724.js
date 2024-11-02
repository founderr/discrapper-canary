n.d(t, {
    T: function () {
        return p;
    },
    Z: function () {
        return h;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(100527),
    o = n(432877),
    l = n(726521),
    u = n(87620),
    c = n(314897),
    d = n(594174),
    f = n(981631),
    _ = n(388032);
function h(e) {
    let { user: t, guildId: n, color: o, onAction: d, location: h = s.Z.CONTEXT_MENU } = e,
        p = (0, u.oV)(h),
        m = (0, i.e7)([c.default], () => c.default.getId() === t.id);
    return !p || m || t.isNonUserBot()
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'report-user',
              color: o,
              label: _.intl.string(_.t.A1MM3N),
              action: () => (0, l.pX)(t, n === f.ME ? void 0 : n, d)
          });
}
function p(e) {
    let { user: t, guildId: n, color: s, onAction: u } = e,
        c = (0, i.e7)([o.ZP], () => o.ZP.get('iar_testing')),
        _ = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return null != _ && (t.id === _.id || t.isNonUserBot() || !_.isStaff() || !c)
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'staff-test-report-user',
              color: s,
              label: '[STAFF] Test Profile Report',
              action: () => (0, l.I6)(t, n === f.ME ? void 0 : n, u)
          });
}
