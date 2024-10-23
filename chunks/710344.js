t.d(n, {
    Z: function () {
        return a;
    }
}),
    t(47120);
var i = t(192379);
function a(e, n) {
    let [t, a] = i.useState(null),
        l = i.useCallback((e) => {
            a(e);
        }, []),
        s = i.useCallback(() => {
            a(null);
        }, []),
        o = i.useCallback(
            (i) => {
                s();
                let a = e.find((e) => {
                        let { id: n } = e;
                        return t === n;
                    }),
                    l = e.find((e) => {
                        let { id: n } = e;
                        return i === n;
                    });
                if (null == a || null == l || a === l) return;
                let o = [...e],
                    r = o.indexOf(a),
                    d = o.indexOf(l),
                    c = d - r > 0 ? 1 : 0;
                o.splice(r, 1), (d = o.indexOf(l)), o.splice(d + c, 0, a), n(o);
            },
            [e, t, s, n]
        );
    return {
        draggingId: t,
        handleDragStart: l,
        handleDragReset: s,
        handleDragComplete: o
    };
}
