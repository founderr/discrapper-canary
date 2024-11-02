n.d(t, {
    v: function () {
        return a;
    }
}),
    n(47120),
    n(653041);
var i = n(975984),
    l = n(486527),
    r = n(388032);
function a(e, t) {
    if (t !== l.AR.ALL)
        return [
            {
                entries: (0, i.TR)(e),
                appendEndCard: !0
            }
        ];
    let n = [],
        a = (0, i.Lz)(e),
        s = new Set(a.map((e) => e.guildId));
    a.length > 0 &&
        n.push({
            header: r.intl.string(r.t.CbaapK),
            entries: a,
            appendEndCard: !1
        });
    let o = e.filter((e) => !s.has(e.guildId));
    return (
        (o = (0, i.Th)(o)).length > 0 &&
            n.push({
                header: r.intl.string(r.t.wxbhER),
                entries: o,
                appendEndCard: !0
            }),
        n
    );
}
