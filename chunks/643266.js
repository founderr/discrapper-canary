r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(493683),
    a = r(592125),
    s = r(176505);
function o(e) {
    if (e !== s.V) return null;
    let n = a.Z.getChannel(e);
    return null == n ? null : i.Z.ensurePrivateChannel(n.recipients);
}
