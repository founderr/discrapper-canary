t.d(e, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var i = t(192379),
    l = t(974180),
    r = t(557177);
function u() {
    let [n, e] = i.useState(),
        t = i.useRef(-1);
    return {
        playSound: i.useCallback((n) => {
            e(n),
                r.GN(
                    l.Ay,
                    l.yk,
                    () => {
                        clearTimeout(t.current),
                            (t.current = setTimeout(() => {
                                e(void 0);
                            }, 500));
                    },
                    n
                );
        }, []),
        isPlaying: null != n,
        soundpackPlaying: n
    };
}
