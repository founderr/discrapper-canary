r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(808506);
function a() {
    let e = i.Z.getFocusedPID();
    return null != e && (i.Z.isReady(e) || i.Z.isCrashed(e)) ? e : null;
}
