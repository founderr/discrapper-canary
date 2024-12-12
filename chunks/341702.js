r.d(n, {
    t: function () {
        return a;
    }
});
var i = r(887490);
function a(e, n, r, a) {
    var s, o;
    let l = 0;
    for (let s = 0; s < r.length; s++) {
        let o = r[s];
        if (null == o) continue;
        let u = l + o.length;
        if (a <= u) {
            let r = i.C0.child(n, s),
                o = i.bN.node(e, r)[0];
            if (i.LC.isText(o))
                return {
                    path: r,
                    offset: Math.min(Math.max(a - l, 0), o.text.length)
                };
        }
        l = u;
    }
    let u = r.length - 1;
    return {
        path: i.C0.child(n, u),
        offset: null !== (o = null === (s = r[u]) || void 0 === s ? void 0 : s.length) && void 0 !== o ? o : 0
    };
}
