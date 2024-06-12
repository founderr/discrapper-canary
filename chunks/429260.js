"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("726521"),
  s = n("795295"),
  r = n("970257"),
  u = n("689938");

function o(e) {
  return (0, r.canReportMessage)(e) ? (0, a.jsx)(i.MenuItem, {
    id: "report",
    label: u.default.Messages.REPORT_MESSAGE_MENU_OPTION,
    action: () => (0, l.showReportModalForMessage)(e, "web_message_context_menu"),
    icon: s.default,
    color: "danger"
  }) : null
}