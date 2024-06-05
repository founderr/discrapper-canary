"use strict";
r.r(t), r.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return l
  },
  default: function() {
    return a
  }
});
var s = r("726542"),
  i = r("973616"),
  n = r("689938");
let l = "twitch:";
class a extends i.default {
  getIconURL() {
    return s.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(l).concat(e.url), this.name = n.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}