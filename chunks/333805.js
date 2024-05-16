"use strict";
u.r(t), u.d(t, {
  default: function() {
    return o
  }
});
var n = u("735250");
u("470079");
var a = u("481060"),
  l = u("726521"),
  d = u("427679"),
  s = u("795295"),
  i = u("689938");

function o(e) {
  let t = d.default.isLive(e.id);
  return e.isGuildStageVoice() && t ? (0, n.jsx)(a.MenuItem, {
    id: "report-stage",
    label: i.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
    action: () => (0, l.showReportModalForStageChannel)(e),
    icon: s.default,
    color: "danger"
  }) : null
}