r.d(t, {
    x: function () {
        return c;
    }
});
var n = r(696486),
    a = r(151122),
    _ = r(622916),
    o = r(454463),
    i = r(243309),
    E = r(748688);
let c = (0, a._I)(() => ({
    name: 'BrowserProfiling',
    setup(e) {
        let t = (0, n.HN)(),
            r = t && (0, n.Gx)(t);
        r && (0, E.x5)(r) && (0, E.$X)(r) && (0, i.v)(r),
            e.on('spanStart', (e) => {
                e === (0, n.Gx)(e) && (0, E.$X)(e) && (0, i.v)(e);
            }),
            e.on('beforeEnvelope', (e) => {
                if (!(0, E.ph)()) return;
                let t = (0, E.AJ)(e);
                if (!t.length) return;
                let r = [];
                for (let e of t) {
                    let t = e && e.contexts,
                        n = t && t.profile && t.profile.profile_id,
                        a = t && t.profile && t.profile.start_timestamp;
                    if ('string' != typeof n || !n) {
                        o.X && _.kg.log('[Profiling] cannot find profile for a span without a profile context');
                        continue;
                    }
                    t && t.profile && delete t.profile;
                    let i = (0, E.GC)(n);
                    if (!i) {
                        o.X && _.kg.log(`[Profiling] Could not retrieve profile for span: ${n}`);
                        continue;
                    }
                    let c = (0, E.nm)(n, a, i, e);
                    c && r.push(c);
                }
                (0, E.db)(e, r);
            });
    }
}));
