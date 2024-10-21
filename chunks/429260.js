t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    s = t(726521),
    l = t(970257),
    r = t(689938);
function o(e) {
    return (0, l.a4)(e)
        ? (0, i.jsx)(a.MenuItem, {
              id: 'report',
              label: r.Z.Messages.REPORT_MESSAGE_MENU_OPTION,
              action: () => (0, s.ak)(e, 'web_message_context_menu'),
              icon: a.FlagIcon,
              color: 'danger'
          })
        : null;
}
