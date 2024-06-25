n.d(t, {
  Z: function() {
    return a
  },
  _: function() {
    return r
  }
});
var l = n(726542),
  i = n(973616),
  s = n(689938);
let r = "twitch:";
class a extends i.Z {
  getIconURL() {
    return l.Z.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(r).concat(e.url), this.name = s.Z.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}