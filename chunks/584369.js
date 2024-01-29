"use strict";
n.r(t), n.d(t, {
  DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
    return s
  },
  default: function() {
    return o
  }
});
var a = n("446674"),
  i = n("95410"),
  l = n("913144"),
  d = n("9503");
let s = 360,
  r = {
    devToolsEnabled: !1,
    sidebarWidth: s,
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
    r = null != e ? e : r, l.default.actionLogger.persist = this.devToolsEnabled
  }
  getUserAgnosticState() {
    return r
  }
  get devToolsEnabled() {
    return r.devToolsEnabled
  }
  get sidebarWidth() {
    return this.displayTools ? r.sidebarWidth : 0
  }
  get lastOpenTabId() {
    var e;
    return null !== (e = r.lastOpenTabId) && void 0 !== e ? e : null
  }
  get displayTools() {
    return this.devToolsEnabled && r.displayTools
  }
  get showDevWidget() {
    return this.devToolsEnabled && r.showDevWidget
  }
  get devWidgetPosition() {
    return r.devWidgetPosition
  }
}
u.displayName = "DevToolsSettingsStore", u.persistKey = "DevToolsSettingsStore";
var o = new u(l.default, {
  DEV_TOOLS_SETTINGS_UPDATE: function(e) {
    (r.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (l.default.actionLogger.persist = e.settings.devToolsEnabled, i.default.set(d.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), r = {
      ...r,
      ...e.settings
    })
  }
})