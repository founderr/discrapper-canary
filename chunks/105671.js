t.d(l, {
    i: function () {
        return d;
    }
});
var a = t(392711),
    s = t.n(a),
    n = t(442837),
    i = t(77498),
    r = t(823379),
    o = t(353093),
    c = t(308083);
function d(e) {
    return (0, n.e7)([i.Z], () => {
        let l = s()(e)
            .map((e) => {
                var l;
                return null === (l = i.Z.getDetectableGame(e)) || void 0 === l ? void 0 : l.name;
            })
            .filter(r.lm)
            .value();
        return (0, o.f6)(l, c.uw);
    });
}
