n.d(t, {
    Z: function () {
        return s;
    },
    _: function () {
        return r;
    }
});
var i = n(726542),
    l = n(973616),
    a = n(689938);
let r = 'twitch:';
class s extends l.Z {
    getIconURL() {
        return i.Z.get('twitch').icon.lightPNG;
    }
    constructor(e) {
        super(e), (this.id = ''.concat(r).concat(e.url)), (this.name = a.Z.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH);
    }
}
