r.d(t, {
    x: function () {
        return c;
    }
});
var a = r(696486),
    n = r(151122),
    _ = r(622916),
    o = r(454463),
    E = r(243309),
    i = r(748688);
let c = (0, n._I)(() => ({
    name: 'BrowserProfiling',
    setup(e) {
        let t = (0, a.HN)(),
            r = t && (0, a.Gx)(t);
        r && (0, i.x5)(r) && (0, i.$X)(r) && (0, E.v)(r),
            e.on('spanStart', (e) => {
                e === (0, a.Gx)(e) && (0, i.$X)(e) && (0, E.v)(e);
            }),
            e.on('beforeEnvelope', (e) => {
                if (!(0, i.ph)()) return;
                let t = (0, i.AJ)(e);
                if (!t.length) return;
                let r = [];
                for (let e of t) {
                    let t = e && e.contexts,
                        a = t && t.profile && t.profile.profile_id,
                        n = t && t.profile && t.profile.start_timestamp;
                    if ('string' != typeof a || !a) {
                        o.X && _.kg.log('[Profiling] cannot find profile for a span without a profile context');
                        continue;
                    }
                    t && t.profile && delete t.profile;
                    let E = (0, i.GC)(a);
                    if (!E) {
                        o.X && _.kg.log(`[Profiling] Could not retrieve profile for span: ${a}`);
                        continue;
                    }
                    let c = (0, i.nm)(a, n, E, e);
                    c && r.push(c);
                }
                (0, i.db)(e, r);
            });
    }
}));
