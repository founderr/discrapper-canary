t.d(n, {
    z: function () {
        return o;
    }
});
var i = t(200651),
    r = t(192379),
    a = t(658312),
    c = t(503082);
let o = (e) => {
    let { drawCallback: n, size: t, fps: o = 60 } = e,
        u = r.useRef(null),
        l = r.useRef();
    return (
        r.useEffect(() => {
            if (null != u.current) {
                let e = new c.Z(u.current);
                e.setSize(t), (l.current = e);
            }
        }, [t]),
        (0, a.Z)((e) => {
            if (null != l.current) {
                let { width: t, height: i } = l.current.canvas;
                l.current.clearRect({
                    x: 0,
                    y: 0,
                    w: t,
                    h: i
                }),
                    n(l.current, e / 1000);
            }
        }, 1000 / o),
        (0, i.jsx)('div', { children: (0, i.jsx)('canvas', { ref: u }) })
    );
};
