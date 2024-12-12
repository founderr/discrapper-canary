r.d(n, {
    u: function () {
        return u;
    }
});
var i = r(964742),
    a = r(40284),
    s = r(304832),
    o = r(603565),
    l = r(144459);
function u() {
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.Hn;
    var e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
        case i.$T:
            break;
        case a.fu:
        case a.Rd:
        case a.IS:
        case a.SG:
            return o.Hn;
        case i.qu:
        case i.js:
        case i.Bs:
        case i.rp:
        default:
            return o.QN;
    }
    var n = e.payload,
        r = n.targetIds,
        u = void 0 === r ? [] : r,
        c = n.prevTargetIds,
        d = void 0 === c ? [] : c,
        f = (0, l.dl)(u, d);
    if (!(f.length > 0 || !(0, s.Hj)(u, d))) return o.Hn;
    var _ = d[d.length - 1],
        h = u[u.length - 1];
    return _ !== h && (_ && f.push(_), h && f.push(h)), f;
}
