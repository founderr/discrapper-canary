r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(341702),
    o = r(887490);
let l = new Set(['line', 'blockQuote']),
    u = [];
function c(e, n, r) {
    if (o.bN.areStylesDisabled(e)) return [];
    let [i, a] = n;
    if (1 !== a.length || !o.aj.isInTypes(i, l)) return u;
    let { entries: c, serializedChildren: d } = o.q.markdown(i, r, !0),
        f = [];
    for (let n = 0; n < c.length; n++) {
        let r = c[n];
        if (r.attributes.length > 0 && r.text.length > 0) {
            let i = c[n - 1],
                l = c[n + 1],
                u = (0, s.t)(e, a, d, r.start),
                _ = {
                    anchor: u,
                    focus: (0, s.t)(e, a, d, r.start + r.text.length)
                },
                h = o.bN.nodes(e, {
                    at: _,
                    mode: 'lowest',
                    voids: !1
                }),
                p = {};
            for (let e of r.attributes)
                if (((p[e] = !0), 'syntaxBefore' === e && null != l)) for (let e of l.attributes) p['before_'.concat(e)] = !0;
                else if ('syntaxAfter' === e && null != i) for (let e of i.attributes) p['after_'.concat(e)] = !0;
            for (let [n, r] of h) {
                let n = {
                    anchor: o.bN.start(e, r),
                    focus: o.bN.end(e, r)
                };
                o.Jz.isBefore(n.anchor, _.anchor) && (n.anchor = _.anchor),
                    o.Jz.isAfter(n.focus, _.focus) && (n.focus = _.focus),
                    f.push({
                        ...p,
                        ...n
                    });
            }
        }
    }
    return f;
}
