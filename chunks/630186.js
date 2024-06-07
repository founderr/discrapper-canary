"use strict";
n.r(t), n.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return r
  },
  default: function() {
    return l
  }
});
var i = n("726542"),
  s = n("973616"),
  a = n("689938");
let r = "twitch:";
class l extends s.default {
  getIconURL() {
    return i.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(r).concat(e.url), this.name = a.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}