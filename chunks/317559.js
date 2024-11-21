n.d(t, {
    i: function () {
        return a;
    }
});
var r = n(346110),
    i = n(192379);
function a(e) {
    let t = (0, i.useRef)(null);
    return (
        (0, r.b)(() => {
            t.current = e;
        }, [e]),
        (0, i.useCallback)((...e) => {
            let n = t.current;
            return null == n ? void 0 : n(...e);
        }, [])
    );
}
