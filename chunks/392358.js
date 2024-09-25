n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(40851),
    o = n(981631);
let s = ['Shift', 'Alt', 'Meta', 'Control'];
function l(e, t) {
    let [n, r] = i.useState(0),
        l = (0, a.Aq)();
    i.useEffect(() => {
        let e = () => r((e) => e + 1),
            t = () => r((e) => Math.max(0, e - 1));
        return (
            l.subscribe(o.CkL.POPOUT_SHOW, e),
            l.subscribe(o.CkL.POPOUT_HIDE, t),
            () => {
                l.unsubscribe(o.CkL.POPOUT_SHOW, e), l.unsubscribe(o.CkL.POPOUT_HIDE, t);
            }
        );
    }, [l]);
    let [u, c] = i.useState(!1);
    return (
        i.useLayoutEffect(() => {
            let r = (e) => {
                    if ((!t || n > 0) && u) {
                        c(!1);
                        return;
                    }
                    if (!((!u && n > 0) || (e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || s.indexOf(e.key) >= 0)))) c((e) => !e);
                },
                i = u ? 'keyup' : 'mousemove';
            return t && e.addEventListener(i, r), () => (null == e ? void 0 : e.removeEventListener(i, r));
        }, [e, u, n, t]),
        t && 0 === n && u
    );
}
