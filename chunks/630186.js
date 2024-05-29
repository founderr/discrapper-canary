"use strict";
n.r(t), n.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return o
  },
  default: function() {
    return a
  }
});
var i = n("726542"),
  r = n("973616"),
  s = n("689938");
let o = "twitch:";
class a extends r.default {
  getIconURL() {
    return i.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(o).concat(e.url), this.name = s.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}