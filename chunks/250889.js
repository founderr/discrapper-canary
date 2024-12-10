n.d(t, {
    H: function () {
        return r;
    },
    Z: function () {
        return o;
    }
});
var i = n(726542),
    l = n(973616);
let r = 'xbox:';
class o extends l.ZP {
    getIconURL() {
        return i.Z.get('xbox').icon.lightPNG;
    }
    constructor(e) {
        super(e), (this.id = ''.concat(r).concat(e.name)), (this.name = e.name);
    }
}
