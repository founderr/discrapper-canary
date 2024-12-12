r.d(n, {
    T: function () {
        return m;
    },
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(100527),
    l = r(432877),
    u = r(726521),
    c = r(87620),
    d = r(314897),
    f = r(594174),
    _ = r(981631),
    h = r(388032);
function p(e) {
    let { user: n, guildId: r, color: l, onAction: f, location: p = o.Z.CONTEXT_MENU } = e,
        m = (0, c.oV)(p),
        g = (0, a.e7)([d.default], () => d.default.getId() === n.id);
    return !m || g || n.isNonUserBot()
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'report-user',
              color: l,
              label: h.intl.string(h.t.A1MM3N),
              action: () => (0, u.pX)(n, r === _.ME ? void 0 : r, f)
          });
}
function m(e) {
    let { user: n, guildId: r, color: o, onAction: c } = e,
        d = (0, a.e7)([l.ZP], () => l.ZP.get('iar_testing')),
        h = (0, a.e7)([f.default], () => f.default.getCurrentUser());
    return null != h && (n.id === h.id || n.isNonUserBot() || !h.isStaff() || !d)
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'staff-test-report-user',
              color: o,
              label: '[STAFF] Test Profile Report',
              action: () => (0, u.I6)(n, r === _.ME ? void 0 : r, c)
          });
}
