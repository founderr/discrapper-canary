a.d(n, {
    Z: function () {
        return o;
    }
}),
    a(47120);
var t = a(192379),
    c = a(974180),
    i = a(557177);
function o() {
    let [e, n] = t.useState(),
        a = t.useRef(-1);
    return {
        playSound: t.useCallback((e) => {
            n(e),
                i.GN(
                    c.Ay,
                    c.yk,
                    () => {
                        clearTimeout(a.current),
                            (a.current = setTimeout(() => {
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
