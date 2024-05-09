"use strict";
n.r(t);
var i = n("570140");
t.default = {
  toggleMembersSection() {
    i.default.dispatch({
      type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
    })
  },
  toggleProfilePanelSection() {
    i.default.dispatch({
      type: "PROFILE_PANEL_TOGGLE_SECTION"
    })
  },
  toggleSummariesSection() {
    i.default.dispatch({
      type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
    })
  }
}