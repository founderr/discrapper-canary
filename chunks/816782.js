var i = t(570140);
e.Z = {
  toggleMembersSection() {
    i.Z.dispatch({
      type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
    })
  },
  toggleProfilePanelSection() {
    i.Z.dispatch({
      type: "PROFILE_PANEL_TOGGLE_SECTION"
    })
  },
  toggleSummariesSection() {
    i.Z.dispatch({
      type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
    })
  }
}