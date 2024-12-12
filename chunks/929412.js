r.d(n, {
    _: function () {
        return a;
    }
});
var i = r(36056);
function a(e, n) {
    switch (n) {
        case i.pz.BIGINT:
            return e.toBigInt();
        case i.pz.NUMBER:
            return e.toNumber();
        default:
            return e.toString();
    }
}
