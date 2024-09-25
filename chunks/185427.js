var r = n(126387),
    i = n(740078);
function a(e, t, n) {
    var a = (0, r.Z)(e),
        o = [i.t$, i.we].indexOf(a) >= 0 ? -1 : 1,
        s = 'function' == typeof n ? n(Object.assign({}, t, { placement: e })) : n,
        l = s[0],
        u = s[1];
    return (
        (l = l || 0),
        (u = (u || 0) * o),
        [i.t$, i.F2].indexOf(a) >= 0
            ? {
                  x: u,
                  y: l
              }
            : {
                  x: l,
                  y: u
              }
    );
}
function o(e) {
    var t = e.state,
        n = e.options,
        r = e.name,
        o = n.offset,
        s = void 0 === o ? [0, 0] : o,
        l = i.Ct.reduce(function (e, n) {
            return (e[n] = a(n, t.rects, s)), e;
        }, {}),
        u = l[t.placement],
        c = u.x,
        d = u.y;
    null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += d)), (t.modifiersData[r] = l);
}
t.Z = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: o
};
