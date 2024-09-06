n.d(t, {
    q: function () {
        return a;
    }
}),
    n(47120);
var i = n(709054),
    s = n(765104);
function a(e, t) {
    var n;
    let a = null !== (n = s.Z.summaries(e)) && void 0 !== n ? n : [],
        l = 0;
    for (let e of a) i.default.compare(e.endId, t) > 0 && (l += 1);
    return l;
}
