n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(70956),
    i = n(564990),
    a = n(353647);
let o = r.Z.Millis.MINUTE;
function s(e) {
    var t, n;
    if (a.Z.isFetchingUserOutbox(e)) return;
    let r = null !== (n = null === (t = a.Z.getUserOutbox(e)) || void 0 === t ? void 0 : t.lastFetched) && void 0 !== n ? n : 0;
    if (!(Date.now() - r < o)) return (0, i.JX)(e);
}
