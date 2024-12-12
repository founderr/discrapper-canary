r.d(t, {
    r: function () {
        return _;
    }
});
var a = r(101284),
    n = r(151122);
let _ = (0, n._I)(() => {
    let e = 1000 * (0, a.ph)();
    return {
        name: 'SessionTiming',
        processEvent(t) {
            let r = 1000 * (0, a.ph)();
            return {
                ...t,
                extra: {
                    ...t.extra,
                    'session:start': e,
                    'session:duration': r - e,
                    'session:end': r
                }
            };
        }
    };
});
