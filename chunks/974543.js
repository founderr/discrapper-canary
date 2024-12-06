n.d(t, {
    Z: function () {
        return a;
    },
    _: function () {
        return o;
    }
});
var i = n(726542),
    l = n(973616),
    r = n(388032);
let o = 'twitch:';
class a extends l.Z {
    getIconURL() {
        return i.Z.get('twitch').icon.lightPNG;
    }
    constructor(e) {
        super(e), (this.id = ''.concat(o).concat(e.url)), (this.name = r.intl.string(r.t.JIPtgo));
    }
}
