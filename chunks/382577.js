n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(470079),
    l = n(570140);
function a(e) {
    let t = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        t.current = e;
    }, [e]),
        (0, i.useEffect)(() => {
            if (__OVERLAY__) {
                function e(e) {
                    e.locked && t.current();
                }
                return (
                    l.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', e),
                    () => {
                        l.Z.unsubscribe('OVERLAY_SET_INPUT_LOCKED', e);
                    }
                );
            }
        }, []);
}
