t.d(n, {
    z: function () {
        return o;
    }
});
var r = t(200651),
    i = t(192379),
    a = t(658312),
    c = t(503082);
let o = (e) => {
    let { drawCallback: n, size: t, fps: o = 60 } = e,
        u = i.useRef(null),
        l = i.useRef();
    return (
        i.useEffect(() => {
            if (null != u.current) {
                let e = new c.Z(u.current);
                e.setSize(t), (l.current = e);
            }
        }, [t]),
        (0, a.Z)((e) => {
            if (null != l.current) {
                let { width: t, height: r } = l.current.canvas;
                l.current.clearRect({
                    x: 0,
                    y: 0,
                    w: t,
                    h: r
                }),
                    n(l.current, e / 1000);
            }
        }, 1000 / o),
        (0, r.jsx)('div', { children: (0, r.jsx)('canvas', { ref: u }) })
    );
};
