r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(131951),
    a = r(65154);
function s(e) {
    return e.supports(a.AN.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0;
}
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z;
    return s(e);
}
