"use strict";
n.r(t);
var a = n("570140");
t.default = {
  toggleMembersSection() {
    a.default.dispatch({
      type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
    })
  },
  toggleProfilePanelSection() {
    a.default.dispatch({
      type: "PROFILE_PANEL_TOGGLE_SECTION"
    })
  },
  toggleSummariesSection() {
    a.default.dispatch({
      type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
    })
  }
}