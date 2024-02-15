"use strict";
n.r(t), n.d(t, {
  DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
    return r
  },
  default: function() {
    return s
  }
});
var a = n("446674"),
  i = n("913144"),
  l = n("368694");
let r = 360,
  d = {
    sidebarWidth: r,
    lastOpenTabId: null,
    displayTools: !1,
    showDevWidget: !1,
    devWidgetPosition: {
      x: 0,
      y: 0
    }
  };
class u extends a.default.DeviceSettingsStore {
  initialize(e) {
    d = null != e ? e : d, i.default.actionLogger.persist = l.default.isDeveloper
  }
  getUserAgnosticState() {
    return d
  }
  get sidebarWidth() {
    return this.displayTools ? d.sidebarWidth : 0
  }
  get lastOpenTabId() {
    var e;
    return null !== (e = d.lastOpenTabId) && void 0 !== e ? e : null
  }
  get displayTools() {
    return l.default.isDeveloper && d.displayTools
  }
  get showDevWidget() {
    return l.default.isDeveloper && d.showDevWidget
  }
  get devWidgetPosition() {
    return d.devWidgetPosition
  }
}
u.displayName = "DevToolsSettingsStore", u.persistKey = "DevToolsSettingsStore";
var s = new u(i.default, {
  DEV_TOOLS_SETTINGS_UPDATE: function(e) {
    l.default.isDeveloper && (d = {
      ...d,
      ...e.settings
    })
  }
})