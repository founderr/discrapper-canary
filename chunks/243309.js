r.d(t, {
    v: function () {
        return l;
    }
});
var n = r(696486),
    a = r(263449),
    _ = r(101284),
    o = r(622916),
    E = r(394798),
    i = r(454463),
    c = r(163162),
    s = r(748688);
function l(e) {
    let t;
    (0, s.x5)(e) && (t = 1000 * (0, _.ph)());
    let r = (0, s.Ei)();
    if (!r) return;
    i.X && o.kg.log(`[Profiling] started profiling span: ${(0, n.XU)(e).description}`);
    let l = (0, E.DM)();
    async function u() {
        if (!!e && !!r)
            return r
                .stop()
                .then((t) => {
                    if ((I && (c.m9.clearTimeout(I), (I = void 0)), i.X && o.kg.log(`[Profiling] stopped profiling of span: ${(0, n.XU)(e).description}`), !t)) {
                        i.X && o.kg.log(`[Profiling] profiler returned null profile for: ${(0, n.XU)(e).description}`, 'this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started');
                        return;
                    }
                    (0, s.dz)(l, t);
                })
                .catch((e) => {
                    i.X && o.kg.log('[Profiling] error while stopping profiler:', e);
                });
    }
    (0, a.nZ)().setContext('profile', {
        profile_id: l,
        start_timestamp: t
    });
    let I = c.m9.setTimeout(() => {
            i.X && o.kg.log('[Profiling] max profile duration elapsed, stopping profiling for:', (0, n.XU)(e).description), u();
        }, s.WU),
        R = e.end.bind(e);
    e.end = function () {
        return e
            ? (u().then(
                  () => {
                      R();
                  },
                  () => {
                      R();
                  }
              ),
              e)
            : R();
    };
}
