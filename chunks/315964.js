"use strict";
n.r(t);
var a = n("570140"),
  s = n("142497"),
  i = n("190378");
t.default = {
  init() {
    a.default.subscribe("VOICE_CHANNEL_SELECT", e => {
      let {
        channelId: t
      } = e;
      null == t && s.hideHotspot(i.HotspotLocations.VOICE_PANEL_INTRODUCTION)
    })
  }
}