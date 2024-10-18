n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(70956),
    i = n(564990),
    a = n(353647);
let s = r.Z.Millis.MINUTE;
function o(e, t) {
    var n, r;
    if (a.Z.isFetchingUserOutbox(e)) return;
    let o = null !== (r = null === (n = a.Z.getUserOutbox(e)) || void 0 === n ? void 0 : n.lastFetched) && void 0 !== r ? r : 0;
    if (!(Date.now() - o < s)) return (0, i.JX)(e, t);
}
