n.d(t, {
    q: function () {
        return r;
    }
}),
    n(47120);
var i = n(709054),
    l = n(765104);
function r(e, t) {
    var n;
    let r = null !== (n = l.Z.summaries(e)) && void 0 !== n ? n : [],
        s = 0;
    for (let e of r) i.default.compare(e.endId, t) > 0 && (s += 1);
    return s;
}
