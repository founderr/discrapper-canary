n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120),
    n(653041);
var r = n(341702),
    i = n(887490);
let a = new Set(['line', 'blockQuote']),
    s = [];
function o(e, t, n) {
    if (i.bN.areStylesDisabled(e)) return [];
    let [o, l] = t;
    if (1 !== l.length || !i.aj.isInTypes(o, a)) return s;
    let { entries: u, serializedChildren: c } = i.q.markdown(o, n, !0),
        d = [];
    for (let t = 0; t < u.length; t++) {
        let n = u[t];
        if (n.attributes.length > 0 && n.text.length > 0) {
            let a = u[t - 1],
                s = u[t + 1],
                o = (0, r.t)(e, l, c, n.start),
                f = {
                    anchor: o,
                    focus: (0, r.t)(e, l, c, n.start + n.text.length)
                },
                _ = i.bN.nodes(e, {
                    at: f,
                    mode: 'lowest',
                    voids: !1
                }),
                h = {};
            for (let e of n.attributes)
                if (((h[e] = !0), 'syntaxBefore' === e && null != s)) for (let e of s.attributes) h['before_'.concat(e)] = !0;
                else if ('syntaxAfter' === e && null != a) for (let e of a.attributes) h['after_'.concat(e)] = !0;
            for (let [t, n] of _) {
                let t = {
                    anchor: i.bN.start(e, n),
                    focus: i.bN.end(e, n)
                };
                i.Jz.isBefore(t.anchor, f.anchor) && (t.anchor = f.anchor),
                    i.Jz.isAfter(t.focus, f.focus) && (t.focus = f.focus),
                    d.push({
                        ...h,
                        ...t
                    });
            }
        }
    }
    return d;
}
