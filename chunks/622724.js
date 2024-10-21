n.d(t, {
    T: function () {
        return h;
    },
    Z: function () {
        return f;
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
    _ = n(981631),
    E = n(689938);
function f(e) {
    let { user: t, guildId: n, color: o, onAction: d, location: f = s.Z.CONTEXT_MENU } = e,
        h = (0, u.oV)(f),
        p = (0, i.e7)([c.default], () => c.default.getId() === t.id);
    return !h || p || t.isNonUserBot()
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'report-user',
              color: o,
              label: E.Z.Messages.REPORTS_USER_BUTTON_TITLE,
              action: () => (0, l.pX)(t, n === _.ME ? void 0 : n, d)
          });
}
function h(e) {
    let { user: t, guildId: n, color: s, onAction: u } = e,
        c = (0, i.e7)([o.ZP], () => o.ZP.get('iar_testing')),
        E = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return null != E && (t.id === E.id || t.isNonUserBot() || !E.isStaff() || !c)
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'staff-test-report-user',
              color: s,
              label: '[STAFF] Test Profile Report',
              action: () => (0, l.I6)(t, n === _.ME ? void 0 : n, u)
          });
}
