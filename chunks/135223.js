n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(341702),
    o = n(887490);
let s = new Set(['line', 'blockQuote']),
    l = [];
function u(e, t, n) {
    if (o.bN.areStylesDisabled(e)) return [];
    let [r, i] = t;
    if (1 !== i.length || !o.aj.isInTypes(r, s)) return l;
    let { entries: u, serializedChildren: c } = o.q.markdown(r, n, !0),
        d = [];
    for (let t = 0; t < u.length; t++) {
        let n = u[t];
        if (n.attributes.length > 0 && n.text.length > 0) {
            let r = u[t - 1],
                s = u[t + 1],
                l = (0, a.t)(e, i, c, n.start),
                _ = {
                    anchor: l,
                    focus: (0, a.t)(e, i, c, n.start + n.text.length)
                },
                E = o.bN.nodes(e, {
                    at: _,
                    mode: 'lowest',
                    voids: !1
                }),
                f = {};
            for (let e of n.attributes)
                if (((f[e] = !0), 'syntaxBefore' === e && null != s)) for (let e of s.attributes) f['before_'.concat(e)] = !0;
                else if ('syntaxAfter' === e && null != r) for (let e of r.attributes) f['after_'.concat(e)] = !0;
            for (let [t, n] of E) {
                let t = {
                    anchor: o.bN.start(e, n),
                    focus: o.bN.end(e, n)
                };
                o.Jz.isBefore(t.anchor, _.anchor) && (t.anchor = _.anchor),
                    o.Jz.isAfter(t.focus, _.focus) && (t.focus = _.focus),
                    d.push({
                        ...f,
                        ...t
                    });
            }
        }
    }
    return d;
}
