"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("377114"),
  u = n("834052"),
  s = n("907566"),
  d = n("782340");

function r(e) {
  let t = u.default.isLive(e.id);
  return e.isGuildStageVoice() && t ? (0, a.jsx)(l.MenuItem, {
    id: "report-stage",
    label: d.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
    action: () => (0, i.showReportModalForStageChannel)(e),
    icon: s.default,
    color: "danger"
  }) : null
}