n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(40851),
    l = n(819640),
    u = n(574254),
    c = n(981631);
function d(e) {
    return !Object.entries(e).every((e) => {
        let [t, n] = e;
        return 0 === n.length;
    });
}
function _() {
    let e = (0, o.useModalsStore)((e) => d(e)),
        t = (0, a.e7)([u.Z], () => u.Z.isOpen()),
        n = (0, a.e7)([l.Z], () => l.Z.hasLayers()),
        [r, _] = i.useState(!1),
        E = (0, s.Aq)();
    return (
        i.useEffect(() => {
            function e() {
                _(!0);
            }
            function t() {
                _(!1);
            }
            return (
                E.subscribe(c.CkL.POPOUT_SHOW, e),
                E.subscribe(c.CkL.POPOUT_HIDE, t),
                () => {
                    E.unsubscribe(c.CkL.POPOUT_SHOW, e), E.unsubscribe(c.CkL.POPOUT_HIDE, t);
                }
            );
        }, [E]),
        e || t || r || n
    );
}
