t.d(n, {
    Z: function () {
        return c;
    },
    e: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var a = t(442837),
    s = t(481060),
    l = t(432877),
    r = t(726521),
    o = t(594174),
    u = t(970257),
    d = t(689938);
function c(e) {
    return (0, u.a4)(e)
        ? (0, i.jsx)(s.MenuItem, {
              id: 'report',
              label: d.Z.Messages.REPORT_MESSAGE_MENU_OPTION,
              action: () => (0, r.ak)(e, 'web_message_context_menu'),
              icon: s.FlagIcon,
              color: 'danger'
          })
        : null;
}
function E(e) {
    let n = (0, a.e7)([l.ZP], () => l.ZP.get('iar_testing')),
        t = (0, a.e7)([o.default], () => o.default.getCurrentUser());
    return (0, u.a4)(e) && null != t && t.isStaff() && n
        ? (0, i.jsx)(s.MenuItem, {
              id: 'staff-test-message-report',
              label: '[STAFF] Test Message Report',
              action: () => (0, r.Jw)(e, 'web_message_context_menu'),
              icon: s.FlagIcon,
              color: 'danger'
          })
        : null;
}
