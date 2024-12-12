r.d(n, {
    H: function () {
        return s;
    },
    Z: function () {
        return o;
    }
});
var i = r(979554),
    a = r(656698);
let s = (e) => e instanceof o;
class o extends a.Z {
    static fromServer(e) {
        return new o({
            ...super.fromServer(e),
            ...e
        });
    }
    constructor(e) {
        super(e), (this.type = i.Z.PROFILE_EFFECT);
    }
}
