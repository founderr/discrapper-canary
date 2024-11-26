r.d(t, {
    y: function () {
        return s;
    }
});
var a = r(263449),
    n = r(233517),
    _ = r(151122),
    o = r(899517),
    E = r(694043);
let i = o.n,
    c = new WeakMap(),
    s = (0, _._I)((e = {}) => {
        let t = e.types || ['crash', 'deprecation', 'intervention'];
        function r(e) {
            if (!!c.has((0, a.s3)()))
                for (let t of e)
                    (0, a.$e)((e) => {
                        e.setExtra('url', t.url);
                        let r = `ReportingObserver [${t.type}]`,
                            a = 'No details available';
                        if (t.body) {
                            let r = {};
                            for (let e in t.body) r[e] = t.body[e];
                            if ((e.setExtra('body', r), 'crash' === t.type)) {
                                let e = t.body;
                                a = [e.crashId || '', e.reason || ''].join(' ').trim() || a;
                            } else a = t.body.message || a;
                        }
                        (0, n.uT)(`${r}: ${a}`);
                    });
        }
        return {
            name: 'ReportingObserver',
            setupOnce() {
                if (!!(0, E.zb)())
                    new i.ReportingObserver(r, {
                        buffered: !0,
                        types: t
                    }).observe();
            },
            setup(e) {
                c.set(e, !0);
            }
        };
    });
