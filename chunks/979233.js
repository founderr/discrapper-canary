n.d(t, {
    M: function () {
        return a;
    }
});
var i = n(192379),
    r = n(660384);
function a() {
    let e = i.useRef(new r.Z()),
        t = i.useCallback((t) => {
            e.current.handleScroll(t);
        }, []);
    return {
        resetScrollPosition: i.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t
    };
}
