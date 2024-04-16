"use strict";
a.r(t);
var n = a("570140");
t.default = {
  closeSidebar() {
    n.default.dispatch({
      type: "MOBILE_WEB_SIDEBAR_CLOSE"
    })
  },
  openSidebar() {
    n.default.dispatch({
      type: "MOBILE_WEB_SIDEBAR_OPEN"
    })
  }
}