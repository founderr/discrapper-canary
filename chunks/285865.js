var s = n(570140);
t.Z = {
  closeSidebar() {
    s.Z.dispatch({
      type: "MOBILE_WEB_SIDEBAR_CLOSE"
    })
  },
  openSidebar() {
    s.Z.dispatch({
      type: "MOBILE_WEB_SIDEBAR_OPEN"
    })
  }
}