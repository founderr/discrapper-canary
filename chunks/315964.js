"use strict";
a.r(t);
var n = a("570140"),
  s = a("142497"),
  l = a("190378");
t.default = {
  init() {
    n.default.subscribe("VOICE_CHANNEL_SELECT", e => {
      let {
        channelId: t
      } = e;
      null == t && s.hideHotspot(l.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    })
  }
}