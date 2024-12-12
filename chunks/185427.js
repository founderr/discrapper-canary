var i = r(126387),
    a = r(740078);
function s(e, n, r) {
    var s = (0, i.Z)(e),
        o = [a.t$, a.we].indexOf(s) >= 0 ? -1 : 1,
        l = 'function' == typeof r ? r(Object.assign({}, n, { placement: e })) : r,
        u = l[0],
        c = l[1];
    return (
        (u = u || 0),
        (c = (c || 0) * o),
        [a.t$, a.F2].indexOf(s) >= 0
            ? {
                  x: c,
                  y: u
              }
            : {
                  x: u,
                  y: c
              }
    );
}
function o(e) {
    var n = e.state,
        r = e.options,
        i = e.name,
        o = r.offset,
        l = void 0 === o ? [0, 0] : o,
        u = a.Ct.reduce(function (e, r) {
            return (e[r] = s(r, n.rects, l)), e;
        }, {}),
        c = u[n.placement],
        d = c.x,
        f = c.y;
    null != n.modifiersData.popperOffsets && ((n.modifiersData.popperOffsets.x += d), (n.modifiersData.popperOffsets.y += f)), (n.modifiersData[i] = u);
}
n.Z = {
    name: 'offset',
    enabled: !0,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: o
};
