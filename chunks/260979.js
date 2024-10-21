n(653041);
var i = n(200651),
    s = n(192379),
    a = n(965288),
    l = n(793954);
t.Z = s.memo(function (e) {
    let { channel: t, participants: n, maxTiles: s } = e;
    if (0 === n.length) return null;
    let r = [];
    for (let e = 0; e < s; e++)
        if (e < n.length) {
            let s = n[e];
            r.push(
                (0, i.jsx)(
                    a.Z,
                    {
                        channel: t,
                        participant: s
                    },
                    s.id
                )
            );
        } else r.push((0, i.jsx)(a.y, {}, e));
    return (0, i.jsx)('div', {
        className: l.participants,
        children: r
    });
});
