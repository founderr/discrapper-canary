let a;
r.d(t, {
    U: function () {
        return c;
    },
    Y: function () {
        return s;
    }
});
var n = r(622574);
let _ = 0,
    o = 1 / 0,
    E = 0,
    i = (e) => {
        e.forEach((e) => {
            e.interactionId && ((o = Math.min(o, e.interactionId)), (_ = (E = Math.max(E, e.interactionId)) ? (E - o) / 7 + 1 : 0));
        });
    },
    c = () => (a ? _ : performance.interactionCount || 0),
    s = () => {
        !('interactionCount' in performance) &&
            !a &&
            (a = (0, n.N)('event', i, {
                type: 'event',
                buffered: !0,
                durationThreshold: 0
            }));
    };
