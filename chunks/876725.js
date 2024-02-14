"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  u = l("77078"),
  s = l("377114"),
  d = l("907566"),
  r = l("398604"),
  i = l("782340");

function o(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e), [e]);
  return null == e || null == t ? null : (0, n.jsx)(u.MenuItem, {
    id: "report-event",
    label: i.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
    action: () => (0, s.showReportModalForGuildScheduledEvent)(t),
    icon: d.default,
    color: "danger"
  })
}