t.d(n, {
    Z: function () {
        return l;
    }
}),
    t(47120);
var i = t(192379);
function l(e, n) {
    let [t, l] = i.useState(null),
        r = i.useCallback((e) => {
            l(e);
        }, []),
        a = i.useCallback(() => {
            l(null);
        }, []),
        o = i.useCallback(
            (i) => {
                a();
                let l = e.find((e) => {
                        let { id: n } = e;
                        return t === n;
                    }),
                    r = e.find((e) => {
                        let { id: n } = e;
                        return i === n;
                    });
                if (null == l || null == r || l === r) return;
                let o = [...e],
                    s = o.indexOf(l),
                    d = o.indexOf(r),
                    c = d - s > 0 ? 1 : 0;
                o.splice(s, 1), (d = o.indexOf(r)), o.splice(d + c, 0, l), n(o);
            },
            [e, t, a, n]
        );
    return {
        draggingId: t,
        handleDragStart: r,
        handleDragReset: a,
        handleDragComplete: o
    };
}
