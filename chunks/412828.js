let n;
r.d(t, {
    U: function () {
        return c;
    },
    Y: function () {
        return s;
    }
});
var a = r(622574);
let _ = 0,
    o = 1 / 0,
    i = 0,
    E = (e) => {
        e.forEach((e) => {
            e.interactionId && ((o = Math.min(o, e.interactionId)), (_ = (i = Math.max(i, e.interactionId)) ? (i - o) / 7 + 1 : 0));
        });
    },
    c = () => (n ? _ : performance.interactionCount || 0),
    s = () => {
        !('interactionCount' in performance) &&
            !n &&
            (n = (0, a.N)('event', E, {
                type: 'event',
                buffered: !0,
                durationThreshold: 0
            }));
    };
