r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(981631);
function a(e) {
    var n;
    return (e.type === i.IIU.LISTENING || e.type === i.IIU.WATCHING) && (null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) != null && null != e.timestamps.end;
}
