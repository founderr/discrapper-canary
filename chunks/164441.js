r.d(n, {
    u: function () {
        return a;
    }
});
var i = r(40284);
function a() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        n = arguments.length > 1 ? arguments[1] : void 0;
    switch (n.type) {
        case i.fu:
        case i.Rd:
            return e + 1;
        case i.SG:
        case i.IS:
            return e - 1;
        default:
            return e;
    }
}
