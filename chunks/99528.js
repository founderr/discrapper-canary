t.d(n, {
    Z: function () {
        return E;
    }
});
var l = t(735250);
t(470079);
var i = t(442837),
    u = t(481060),
    s = t(726521),
    a = t(924301),
    r = t(689938);
function E(e) {
    let n = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(e), [e]);
    return null == e || null == n
        ? null
        : (0, l.jsx)(u.MenuItem, {
              id: 'report-event',
              label: r.Z.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
              action: () => (0, s.d$)(n),
              icon: u.FlagIcon,
              color: 'danger'
          });
}
