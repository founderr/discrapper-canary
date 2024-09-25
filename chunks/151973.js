n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(470079);
function a(e, t, n) {
    return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1];
}
let o = [0, 0];
function s(e) {
    let { chunkSize: t, getScrollerState: n, forceUpdate: r } = e,
        { dirty: s, scrollTop: l, offsetHeight: u } = n();
    (0, i.useLayoutEffect)(() => {
        s > 0 && r();
    }, [s, r]);
    let c = (0, i.useRef)(o);
    c.current = a(l, u, t);
    let [d, _] = c.current;
    return {
        forceUpdateOnChunkChange: (0, i.useCallback)(
            (e) => {
                let { dirty: i, scrollTop: o, offsetHeight: s } = n();
                if (i > 0) return;
                let [l, u] = a(o, s, t);
                l !== c.current[0] ? r() : 2 === e && u !== c.current[1] && r();
            },
            [r, t, n]
        ),
        chunkStart: d,
        chunkEnd: _,
        dirty: s
    };
}
