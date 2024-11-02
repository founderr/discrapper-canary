r.d(t, {
    y: function () {
        return s;
    }
});
var n = r(263449),
    a = r(233517),
    _ = r(151122),
    o = r(899517),
    i = r(694043);
let E = o.n,
    c = new WeakMap(),
    s = (0, _._I)((e = {}) => {
        let t = e.types || ['crash', 'deprecation', 'intervention'];
        function r(e) {
            if (!!c.has((0, n.s3)()))
                for (let t of e)
                    (0, n.$e)((e) => {
                        e.setExtra('url', t.url);
                        let r = `ReportingObserver [${t.type}]`,
                            n = 'No details available';
                        if (t.body) {
                            let r = {};
                            for (let e in t.body) r[e] = t.body[e];
                            if ((e.setExtra('body', r), 'crash' === t.type)) {
                                let e = t.body;
                                n = [e.crashId || '', e.reason || ''].join(' ').trim() || n;
                            } else n = t.body.message || n;
                        }
                        (0, a.uT)(`${r}: ${n}`);
                    });
        }
        return {
            name: 'ReportingObserver',
            setupOnce() {
                if (!!(0, i.zb)())
                    new E.ReportingObserver(r, {
                        buffered: !0,
                        types: t
                    }).observe();
            },
            setup(e) {
                c.set(e, !0);
            }
        };
    });
