i.d(t, {
  Z: function() {
    return l
  },
  _: function() {
    return o
  }
});
var n = i(726542),
  r = i(973616),
  s = i(689938);
let o = "twitch:";
class l extends r.Z {
  getIconURL() {
    return n.Z.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(o).concat(e.url), this.name = s.Z.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}