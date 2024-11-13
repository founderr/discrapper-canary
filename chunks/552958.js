t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var a = t(192379),
    c = t(974180),
    i = t(557177);
function o() {
    let [e, n] = a.useState(),
        t = a.useRef(-1);
    return {
        playSound: a.useCallback((e) => {
            n(e),
                i.GN(
                    c.Ay,
                    c.yk,
                    () => {
                        clearTimeout(t.current),
                            (t.current = setTimeout(() => {
                                n(void 0);
                            }, 500));
                    },
                    e
                );
        }, []),
        isPlaying: null != e,
        soundpackPlaying: e
    };
}
