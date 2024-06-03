"use strict";
var i, r;
n.r(t), n.d(t, {
  FirstPartyQuestTaskTypes: function() {
    return i
  },
  FirstPartyQuestTaskTypesSets: function() {
    return s
  }
}), n("47120"), (r = i || (i = {})).STREAM_ON_DESKTOP = "STREAM_ON_DESKTOP", r.PLAY_ON_DESKTOP = "PLAY_ON_DESKTOP", r.PLAY_ON_XBOX = "PLAY_ON_XBOX", r.PLAY_ON_PLAYSTATION = "PLAY_ON_PLAYSTATION";
let s = {
  ALL: new Set(["PLAY_ON_DESKTOP", "PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX", "STREAM_ON_DESKTOP"]),
  CONSOLE: new Set(["PLAY_ON_PLAYSTATION", "PLAY_ON_XBOX"])
}