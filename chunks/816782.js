var s = n(570140);
t.Z = {
  toggleMembersSection() {
    s.Z.dispatch({
      type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
    })
  },
  toggleProfilePanelSection() {
    s.Z.dispatch({
      type: "PROFILE_PANEL_TOGGLE_SECTION"
    })
  },
  toggleSummariesSection() {
    s.Z.dispatch({
      type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
    })
  }
}