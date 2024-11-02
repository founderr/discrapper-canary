r.d(t, {
    m: function () {
        return l;
    }
});
var n = r(395848),
    a = r(140955),
    _ = r(202937),
    o = r(896247),
    i = r(596308),
    E = r(662355);
let c = [800, 1800],
    s = (e) => {
        n.m.document && n.m.document.prerendering ? (0, E.A)(() => s(e)) : n.m.document && 'complete' !== n.m.document.readyState ? addEventListener('load', () => s(e), !0) : setTimeout(e, 0);
    },
    l = (e, t = {}) => {
        let r = (0, i.I)('TTFB'),
            n = (0, a._)(e, r, c, t.reportAllChanges);
        s(() => {
            let e = (0, o.W)();
            if (e) {
                let t = e.responseStart;
                if (t <= 0 || t > performance.now()) return;
                (r.value = Math.max(t - (0, _.A)(), 0)), (r.entries = [e]), n(!0);
            }
        });
    };
