r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(40851),
    o = r(981631);
let l = ['Shift', 'Alt', 'Meta', 'Control'];
function u(e, n) {
    let [r, i] = a.useState(0),
        u = (0, s.Aq)();
    a.useEffect(() => {
        let e = () => i((e) => e + 1),
            n = () => i((e) => Math.max(0, e - 1));
        return (
            u.subscribe(o.CkL.POPOUT_SHOW, e),
            u.subscribe(o.CkL.POPOUT_HIDE, n),
            () => {
                u.unsubscribe(o.CkL.POPOUT_SHOW, e), u.unsubscribe(o.CkL.POPOUT_HIDE, n);
            }
        );
    }, [u]);
    let [c, d] = a.useState(!1);
    return (
        a.useLayoutEffect(() => {
            let i = (e) => {
                    if ((!n || r > 0) && c) {
                        d(!1);
                        return;
                    }
                    if (!((!c && r > 0) || (e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || l.indexOf(e.key) >= 0)))) d((e) => !e);
                },
                a = c ? 'keyup' : 'mousemove';
            return n && e.addEventListener(a, i), () => (null == e ? void 0 : e.removeEventListener(a, i));
        }, [e, c, r, n]),
        n && 0 === r && c
    );
}
